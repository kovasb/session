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
var x__8670 = (((x == null))?null:x);
if((p[goog.typeOf(x__8670)]))
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
var G__8671__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__8671 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8671__delegate.call(this, array, i, idxs);
};
G__8671.cljs$lang$maxFixedArity = 2;
G__8671.cljs$lang$applyTo = (function (arglist__8672){
var array = cljs.core.first(arglist__8672);
var i = cljs.core.first(cljs.core.next(arglist__8672));
var idxs = cljs.core.rest(cljs.core.next(arglist__8672));
return G__8671__delegate(array, i, idxs);
});
G__8671.cljs$lang$arity$variadic = G__8671__delegate;
return G__8671;
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
if((function (){var and__3937__auto____8757 = this$;
if(and__3937__auto____8757)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3937__auto____8757;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2396__auto____8758 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8759 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8758)]);
if(or__3939__auto____8759)
{return or__3939__auto____8759;
} else
{var or__3939__auto____8760 = (cljs.core._invoke["_"]);
if(or__3939__auto____8760)
{return or__3939__auto____8760;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3937__auto____8761 = this$;
if(and__3937__auto____8761)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3937__auto____8761;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2396__auto____8762 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8763 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8762)]);
if(or__3939__auto____8763)
{return or__3939__auto____8763;
} else
{var or__3939__auto____8764 = (cljs.core._invoke["_"]);
if(or__3939__auto____8764)
{return or__3939__auto____8764;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3937__auto____8765 = this$;
if(and__3937__auto____8765)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3937__auto____8765;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2396__auto____8766 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8767 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8766)]);
if(or__3939__auto____8767)
{return or__3939__auto____8767;
} else
{var or__3939__auto____8768 = (cljs.core._invoke["_"]);
if(or__3939__auto____8768)
{return or__3939__auto____8768;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3937__auto____8769 = this$;
if(and__3937__auto____8769)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3937__auto____8769;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2396__auto____8770 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8771 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8770)]);
if(or__3939__auto____8771)
{return or__3939__auto____8771;
} else
{var or__3939__auto____8772 = (cljs.core._invoke["_"]);
if(or__3939__auto____8772)
{return or__3939__auto____8772;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3937__auto____8773 = this$;
if(and__3937__auto____8773)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3937__auto____8773;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2396__auto____8774 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8775 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8774)]);
if(or__3939__auto____8775)
{return or__3939__auto____8775;
} else
{var or__3939__auto____8776 = (cljs.core._invoke["_"]);
if(or__3939__auto____8776)
{return or__3939__auto____8776;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3937__auto____8777 = this$;
if(and__3937__auto____8777)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3937__auto____8777;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2396__auto____8778 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8779 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8778)]);
if(or__3939__auto____8779)
{return or__3939__auto____8779;
} else
{var or__3939__auto____8780 = (cljs.core._invoke["_"]);
if(or__3939__auto____8780)
{return or__3939__auto____8780;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3937__auto____8781 = this$;
if(and__3937__auto____8781)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3937__auto____8781;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2396__auto____8782 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8783 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8782)]);
if(or__3939__auto____8783)
{return or__3939__auto____8783;
} else
{var or__3939__auto____8784 = (cljs.core._invoke["_"]);
if(or__3939__auto____8784)
{return or__3939__auto____8784;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3937__auto____8785 = this$;
if(and__3937__auto____8785)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3937__auto____8785;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2396__auto____8786 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8787 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8786)]);
if(or__3939__auto____8787)
{return or__3939__auto____8787;
} else
{var or__3939__auto____8788 = (cljs.core._invoke["_"]);
if(or__3939__auto____8788)
{return or__3939__auto____8788;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3937__auto____8789 = this$;
if(and__3937__auto____8789)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3937__auto____8789;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2396__auto____8790 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8791 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8790)]);
if(or__3939__auto____8791)
{return or__3939__auto____8791;
} else
{var or__3939__auto____8792 = (cljs.core._invoke["_"]);
if(or__3939__auto____8792)
{return or__3939__auto____8792;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3937__auto____8793 = this$;
if(and__3937__auto____8793)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3937__auto____8793;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2396__auto____8794 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8795 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8794)]);
if(or__3939__auto____8795)
{return or__3939__auto____8795;
} else
{var or__3939__auto____8796 = (cljs.core._invoke["_"]);
if(or__3939__auto____8796)
{return or__3939__auto____8796;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3937__auto____8797 = this$;
if(and__3937__auto____8797)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3937__auto____8797;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2396__auto____8798 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8799 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8798)]);
if(or__3939__auto____8799)
{return or__3939__auto____8799;
} else
{var or__3939__auto____8800 = (cljs.core._invoke["_"]);
if(or__3939__auto____8800)
{return or__3939__auto____8800;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3937__auto____8801 = this$;
if(and__3937__auto____8801)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3937__auto____8801;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2396__auto____8802 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8803 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8802)]);
if(or__3939__auto____8803)
{return or__3939__auto____8803;
} else
{var or__3939__auto____8804 = (cljs.core._invoke["_"]);
if(or__3939__auto____8804)
{return or__3939__auto____8804;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3937__auto____8805 = this$;
if(and__3937__auto____8805)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3937__auto____8805;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2396__auto____8806 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8807 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8806)]);
if(or__3939__auto____8807)
{return or__3939__auto____8807;
} else
{var or__3939__auto____8808 = (cljs.core._invoke["_"]);
if(or__3939__auto____8808)
{return or__3939__auto____8808;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3937__auto____8809 = this$;
if(and__3937__auto____8809)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3937__auto____8809;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2396__auto____8810 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8811 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8810)]);
if(or__3939__auto____8811)
{return or__3939__auto____8811;
} else
{var or__3939__auto____8812 = (cljs.core._invoke["_"]);
if(or__3939__auto____8812)
{return or__3939__auto____8812;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3937__auto____8813 = this$;
if(and__3937__auto____8813)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3937__auto____8813;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2396__auto____8814 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8815 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8814)]);
if(or__3939__auto____8815)
{return or__3939__auto____8815;
} else
{var or__3939__auto____8816 = (cljs.core._invoke["_"]);
if(or__3939__auto____8816)
{return or__3939__auto____8816;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3937__auto____8817 = this$;
if(and__3937__auto____8817)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3937__auto____8817;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2396__auto____8818 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8819 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8818)]);
if(or__3939__auto____8819)
{return or__3939__auto____8819;
} else
{var or__3939__auto____8820 = (cljs.core._invoke["_"]);
if(or__3939__auto____8820)
{return or__3939__auto____8820;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3937__auto____8821 = this$;
if(and__3937__auto____8821)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3937__auto____8821;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2396__auto____8822 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8823 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8822)]);
if(or__3939__auto____8823)
{return or__3939__auto____8823;
} else
{var or__3939__auto____8824 = (cljs.core._invoke["_"]);
if(or__3939__auto____8824)
{return or__3939__auto____8824;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3937__auto____8825 = this$;
if(and__3937__auto____8825)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3937__auto____8825;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2396__auto____8826 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8827 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8826)]);
if(or__3939__auto____8827)
{return or__3939__auto____8827;
} else
{var or__3939__auto____8828 = (cljs.core._invoke["_"]);
if(or__3939__auto____8828)
{return or__3939__auto____8828;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3937__auto____8829 = this$;
if(and__3937__auto____8829)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3937__auto____8829;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2396__auto____8830 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8831 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8830)]);
if(or__3939__auto____8831)
{return or__3939__auto____8831;
} else
{var or__3939__auto____8832 = (cljs.core._invoke["_"]);
if(or__3939__auto____8832)
{return or__3939__auto____8832;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3937__auto____8833 = this$;
if(and__3937__auto____8833)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3937__auto____8833;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2396__auto____8834 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8835 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8834)]);
if(or__3939__auto____8835)
{return or__3939__auto____8835;
} else
{var or__3939__auto____8836 = (cljs.core._invoke["_"]);
if(or__3939__auto____8836)
{return or__3939__auto____8836;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3937__auto____8837 = this$;
if(and__3937__auto____8837)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3937__auto____8837;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2396__auto____8838 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8839 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8838)]);
if(or__3939__auto____8839)
{return or__3939__auto____8839;
} else
{var or__3939__auto____8840 = (cljs.core._invoke["_"]);
if(or__3939__auto____8840)
{return or__3939__auto____8840;
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
if((function (){var and__3937__auto____8845 = coll;
if(and__3937__auto____8845)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3937__auto____8845;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2396__auto____8846 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8847 = (cljs.core._count[goog.typeOf(x__2396__auto____8846)]);
if(or__3939__auto____8847)
{return or__3939__auto____8847;
} else
{var or__3939__auto____8848 = (cljs.core._count["_"]);
if(or__3939__auto____8848)
{return or__3939__auto____8848;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3937__auto____8853 = coll;
if(and__3937__auto____8853)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3937__auto____8853;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2396__auto____8854 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8855 = (cljs.core._empty[goog.typeOf(x__2396__auto____8854)]);
if(or__3939__auto____8855)
{return or__3939__auto____8855;
} else
{var or__3939__auto____8856 = (cljs.core._empty["_"]);
if(or__3939__auto____8856)
{return or__3939__auto____8856;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3937__auto____8861 = coll;
if(and__3937__auto____8861)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3937__auto____8861;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2396__auto____8862 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8863 = (cljs.core._conj[goog.typeOf(x__2396__auto____8862)]);
if(or__3939__auto____8863)
{return or__3939__auto____8863;
} else
{var or__3939__auto____8864 = (cljs.core._conj["_"]);
if(or__3939__auto____8864)
{return or__3939__auto____8864;
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
if((function (){var and__3937__auto____8873 = coll;
if(and__3937__auto____8873)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3937__auto____8873;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2396__auto____8874 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8875 = (cljs.core._nth[goog.typeOf(x__2396__auto____8874)]);
if(or__3939__auto____8875)
{return or__3939__auto____8875;
} else
{var or__3939__auto____8876 = (cljs.core._nth["_"]);
if(or__3939__auto____8876)
{return or__3939__auto____8876;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3937__auto____8877 = coll;
if(and__3937__auto____8877)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3937__auto____8877;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2396__auto____8878 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8879 = (cljs.core._nth[goog.typeOf(x__2396__auto____8878)]);
if(or__3939__auto____8879)
{return or__3939__auto____8879;
} else
{var or__3939__auto____8880 = (cljs.core._nth["_"]);
if(or__3939__auto____8880)
{return or__3939__auto____8880;
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
if((function (){var and__3937__auto____8885 = coll;
if(and__3937__auto____8885)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3937__auto____8885;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2396__auto____8886 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8887 = (cljs.core._first[goog.typeOf(x__2396__auto____8886)]);
if(or__3939__auto____8887)
{return or__3939__auto____8887;
} else
{var or__3939__auto____8888 = (cljs.core._first["_"]);
if(or__3939__auto____8888)
{return or__3939__auto____8888;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3937__auto____8893 = coll;
if(and__3937__auto____8893)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3937__auto____8893;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2396__auto____8894 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8895 = (cljs.core._rest[goog.typeOf(x__2396__auto____8894)]);
if(or__3939__auto____8895)
{return or__3939__auto____8895;
} else
{var or__3939__auto____8896 = (cljs.core._rest["_"]);
if(or__3939__auto____8896)
{return or__3939__auto____8896;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3937__auto____8901 = coll;
if(and__3937__auto____8901)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3937__auto____8901;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2396__auto____8902 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8903 = (cljs.core._next[goog.typeOf(x__2396__auto____8902)]);
if(or__3939__auto____8903)
{return or__3939__auto____8903;
} else
{var or__3939__auto____8904 = (cljs.core._next["_"]);
if(or__3939__auto____8904)
{return or__3939__auto____8904;
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
if((function (){var and__3937__auto____8913 = o;
if(and__3937__auto____8913)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3937__auto____8913;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2396__auto____8914 = (((o == null))?null:o);
return (function (){var or__3939__auto____8915 = (cljs.core._lookup[goog.typeOf(x__2396__auto____8914)]);
if(or__3939__auto____8915)
{return or__3939__auto____8915;
} else
{var or__3939__auto____8916 = (cljs.core._lookup["_"]);
if(or__3939__auto____8916)
{return or__3939__auto____8916;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3937__auto____8917 = o;
if(and__3937__auto____8917)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3937__auto____8917;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2396__auto____8918 = (((o == null))?null:o);
return (function (){var or__3939__auto____8919 = (cljs.core._lookup[goog.typeOf(x__2396__auto____8918)]);
if(or__3939__auto____8919)
{return or__3939__auto____8919;
} else
{var or__3939__auto____8920 = (cljs.core._lookup["_"]);
if(or__3939__auto____8920)
{return or__3939__auto____8920;
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
if((function (){var and__3937__auto____8925 = coll;
if(and__3937__auto____8925)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3937__auto____8925;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2396__auto____8926 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8927 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2396__auto____8926)]);
if(or__3939__auto____8927)
{return or__3939__auto____8927;
} else
{var or__3939__auto____8928 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3939__auto____8928)
{return or__3939__auto____8928;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3937__auto____8933 = coll;
if(and__3937__auto____8933)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3937__auto____8933;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2396__auto____8934 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8935 = (cljs.core._assoc[goog.typeOf(x__2396__auto____8934)]);
if(or__3939__auto____8935)
{return or__3939__auto____8935;
} else
{var or__3939__auto____8936 = (cljs.core._assoc["_"]);
if(or__3939__auto____8936)
{return or__3939__auto____8936;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3937__auto____8941 = coll;
if(and__3937__auto____8941)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3937__auto____8941;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2396__auto____8942 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8943 = (cljs.core._dissoc[goog.typeOf(x__2396__auto____8942)]);
if(or__3939__auto____8943)
{return or__3939__auto____8943;
} else
{var or__3939__auto____8944 = (cljs.core._dissoc["_"]);
if(or__3939__auto____8944)
{return or__3939__auto____8944;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3937__auto____8949 = coll;
if(and__3937__auto____8949)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3937__auto____8949;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2396__auto____8950 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8951 = (cljs.core._key[goog.typeOf(x__2396__auto____8950)]);
if(or__3939__auto____8951)
{return or__3939__auto____8951;
} else
{var or__3939__auto____8952 = (cljs.core._key["_"]);
if(or__3939__auto____8952)
{return or__3939__auto____8952;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3937__auto____8957 = coll;
if(and__3937__auto____8957)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3937__auto____8957;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2396__auto____8958 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8959 = (cljs.core._val[goog.typeOf(x__2396__auto____8958)]);
if(or__3939__auto____8959)
{return or__3939__auto____8959;
} else
{var or__3939__auto____8960 = (cljs.core._val["_"]);
if(or__3939__auto____8960)
{return or__3939__auto____8960;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3937__auto____8965 = coll;
if(and__3937__auto____8965)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3937__auto____8965;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2396__auto____8966 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8967 = (cljs.core._disjoin[goog.typeOf(x__2396__auto____8966)]);
if(or__3939__auto____8967)
{return or__3939__auto____8967;
} else
{var or__3939__auto____8968 = (cljs.core._disjoin["_"]);
if(or__3939__auto____8968)
{return or__3939__auto____8968;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3937__auto____8973 = coll;
if(and__3937__auto____8973)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3937__auto____8973;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2396__auto____8974 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8975 = (cljs.core._peek[goog.typeOf(x__2396__auto____8974)]);
if(or__3939__auto____8975)
{return or__3939__auto____8975;
} else
{var or__3939__auto____8976 = (cljs.core._peek["_"]);
if(or__3939__auto____8976)
{return or__3939__auto____8976;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3937__auto____8981 = coll;
if(and__3937__auto____8981)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3937__auto____8981;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2396__auto____8982 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8983 = (cljs.core._pop[goog.typeOf(x__2396__auto____8982)]);
if(or__3939__auto____8983)
{return or__3939__auto____8983;
} else
{var or__3939__auto____8984 = (cljs.core._pop["_"]);
if(or__3939__auto____8984)
{return or__3939__auto____8984;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3937__auto____8989 = coll;
if(and__3937__auto____8989)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3937__auto____8989;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2396__auto____8990 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8991 = (cljs.core._assoc_n[goog.typeOf(x__2396__auto____8990)]);
if(or__3939__auto____8991)
{return or__3939__auto____8991;
} else
{var or__3939__auto____8992 = (cljs.core._assoc_n["_"]);
if(or__3939__auto____8992)
{return or__3939__auto____8992;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3937__auto____8997 = o;
if(and__3937__auto____8997)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3937__auto____8997;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2396__auto____8998 = (((o == null))?null:o);
return (function (){var or__3939__auto____8999 = (cljs.core._deref[goog.typeOf(x__2396__auto____8998)]);
if(or__3939__auto____8999)
{return or__3939__auto____8999;
} else
{var or__3939__auto____9000 = (cljs.core._deref["_"]);
if(or__3939__auto____9000)
{return or__3939__auto____9000;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3937__auto____9005 = o;
if(and__3937__auto____9005)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3937__auto____9005;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2396__auto____9006 = (((o == null))?null:o);
return (function (){var or__3939__auto____9007 = (cljs.core._deref_with_timeout[goog.typeOf(x__2396__auto____9006)]);
if(or__3939__auto____9007)
{return or__3939__auto____9007;
} else
{var or__3939__auto____9008 = (cljs.core._deref_with_timeout["_"]);
if(or__3939__auto____9008)
{return or__3939__auto____9008;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3937__auto____9013 = o;
if(and__3937__auto____9013)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3937__auto____9013;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2396__auto____9014 = (((o == null))?null:o);
return (function (){var or__3939__auto____9015 = (cljs.core._meta[goog.typeOf(x__2396__auto____9014)]);
if(or__3939__auto____9015)
{return or__3939__auto____9015;
} else
{var or__3939__auto____9016 = (cljs.core._meta["_"]);
if(or__3939__auto____9016)
{return or__3939__auto____9016;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3937__auto____9021 = o;
if(and__3937__auto____9021)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3937__auto____9021;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2396__auto____9022 = (((o == null))?null:o);
return (function (){var or__3939__auto____9023 = (cljs.core._with_meta[goog.typeOf(x__2396__auto____9022)]);
if(or__3939__auto____9023)
{return or__3939__auto____9023;
} else
{var or__3939__auto____9024 = (cljs.core._with_meta["_"]);
if(or__3939__auto____9024)
{return or__3939__auto____9024;
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
if((function (){var and__3937__auto____9033 = coll;
if(and__3937__auto____9033)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3937__auto____9033;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2396__auto____9034 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9035 = (cljs.core._reduce[goog.typeOf(x__2396__auto____9034)]);
if(or__3939__auto____9035)
{return or__3939__auto____9035;
} else
{var or__3939__auto____9036 = (cljs.core._reduce["_"]);
if(or__3939__auto____9036)
{return or__3939__auto____9036;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3937__auto____9037 = coll;
if(and__3937__auto____9037)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3937__auto____9037;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2396__auto____9038 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9039 = (cljs.core._reduce[goog.typeOf(x__2396__auto____9038)]);
if(or__3939__auto____9039)
{return or__3939__auto____9039;
} else
{var or__3939__auto____9040 = (cljs.core._reduce["_"]);
if(or__3939__auto____9040)
{return or__3939__auto____9040;
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
if((function (){var and__3937__auto____9045 = coll;
if(and__3937__auto____9045)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3937__auto____9045;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2396__auto____9046 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9047 = (cljs.core._kv_reduce[goog.typeOf(x__2396__auto____9046)]);
if(or__3939__auto____9047)
{return or__3939__auto____9047;
} else
{var or__3939__auto____9048 = (cljs.core._kv_reduce["_"]);
if(or__3939__auto____9048)
{return or__3939__auto____9048;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3937__auto____9053 = o;
if(and__3937__auto____9053)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3937__auto____9053;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2396__auto____9054 = (((o == null))?null:o);
return (function (){var or__3939__auto____9055 = (cljs.core._equiv[goog.typeOf(x__2396__auto____9054)]);
if(or__3939__auto____9055)
{return or__3939__auto____9055;
} else
{var or__3939__auto____9056 = (cljs.core._equiv["_"]);
if(or__3939__auto____9056)
{return or__3939__auto____9056;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3937__auto____9061 = o;
if(and__3937__auto____9061)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3937__auto____9061;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2396__auto____9062 = (((o == null))?null:o);
return (function (){var or__3939__auto____9063 = (cljs.core._hash[goog.typeOf(x__2396__auto____9062)]);
if(or__3939__auto____9063)
{return or__3939__auto____9063;
} else
{var or__3939__auto____9064 = (cljs.core._hash["_"]);
if(or__3939__auto____9064)
{return or__3939__auto____9064;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3937__auto____9069 = o;
if(and__3937__auto____9069)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3937__auto____9069;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2396__auto____9070 = (((o == null))?null:o);
return (function (){var or__3939__auto____9071 = (cljs.core._seq[goog.typeOf(x__2396__auto____9070)]);
if(or__3939__auto____9071)
{return or__3939__auto____9071;
} else
{var or__3939__auto____9072 = (cljs.core._seq["_"]);
if(or__3939__auto____9072)
{return or__3939__auto____9072;
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
if((function (){var and__3937__auto____9077 = coll;
if(and__3937__auto____9077)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3937__auto____9077;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2396__auto____9078 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9079 = (cljs.core._rseq[goog.typeOf(x__2396__auto____9078)]);
if(or__3939__auto____9079)
{return or__3939__auto____9079;
} else
{var or__3939__auto____9080 = (cljs.core._rseq["_"]);
if(or__3939__auto____9080)
{return or__3939__auto____9080;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3937__auto____9085 = coll;
if(and__3937__auto____9085)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3937__auto____9085;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2396__auto____9086 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9087 = (cljs.core._sorted_seq[goog.typeOf(x__2396__auto____9086)]);
if(or__3939__auto____9087)
{return or__3939__auto____9087;
} else
{var or__3939__auto____9088 = (cljs.core._sorted_seq["_"]);
if(or__3939__auto____9088)
{return or__3939__auto____9088;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3937__auto____9093 = coll;
if(and__3937__auto____9093)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3937__auto____9093;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2396__auto____9094 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9095 = (cljs.core._sorted_seq_from[goog.typeOf(x__2396__auto____9094)]);
if(or__3939__auto____9095)
{return or__3939__auto____9095;
} else
{var or__3939__auto____9096 = (cljs.core._sorted_seq_from["_"]);
if(or__3939__auto____9096)
{return or__3939__auto____9096;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3937__auto____9101 = coll;
if(and__3937__auto____9101)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3937__auto____9101;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2396__auto____9102 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9103 = (cljs.core._entry_key[goog.typeOf(x__2396__auto____9102)]);
if(or__3939__auto____9103)
{return or__3939__auto____9103;
} else
{var or__3939__auto____9104 = (cljs.core._entry_key["_"]);
if(or__3939__auto____9104)
{return or__3939__auto____9104;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3937__auto____9109 = coll;
if(and__3937__auto____9109)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3937__auto____9109;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2396__auto____9110 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9111 = (cljs.core._comparator[goog.typeOf(x__2396__auto____9110)]);
if(or__3939__auto____9111)
{return or__3939__auto____9111;
} else
{var or__3939__auto____9112 = (cljs.core._comparator["_"]);
if(or__3939__auto____9112)
{return or__3939__auto____9112;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3937__auto____9117 = o;
if(and__3937__auto____9117)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3937__auto____9117;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2396__auto____9118 = (((o == null))?null:o);
return (function (){var or__3939__auto____9119 = (cljs.core._pr_seq[goog.typeOf(x__2396__auto____9118)]);
if(or__3939__auto____9119)
{return or__3939__auto____9119;
} else
{var or__3939__auto____9120 = (cljs.core._pr_seq["_"]);
if(or__3939__auto____9120)
{return or__3939__auto____9120;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3937__auto____9125 = d;
if(and__3937__auto____9125)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3937__auto____9125;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2396__auto____9126 = (((d == null))?null:d);
return (function (){var or__3939__auto____9127 = (cljs.core._realized_QMARK_[goog.typeOf(x__2396__auto____9126)]);
if(or__3939__auto____9127)
{return or__3939__auto____9127;
} else
{var or__3939__auto____9128 = (cljs.core._realized_QMARK_["_"]);
if(or__3939__auto____9128)
{return or__3939__auto____9128;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3937__auto____9133 = this$;
if(and__3937__auto____9133)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3937__auto____9133;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2396__auto____9134 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____9135 = (cljs.core._notify_watches[goog.typeOf(x__2396__auto____9134)]);
if(or__3939__auto____9135)
{return or__3939__auto____9135;
} else
{var or__3939__auto____9136 = (cljs.core._notify_watches["_"]);
if(or__3939__auto____9136)
{return or__3939__auto____9136;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3937__auto____9141 = this$;
if(and__3937__auto____9141)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3937__auto____9141;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2396__auto____9142 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____9143 = (cljs.core._add_watch[goog.typeOf(x__2396__auto____9142)]);
if(or__3939__auto____9143)
{return or__3939__auto____9143;
} else
{var or__3939__auto____9144 = (cljs.core._add_watch["_"]);
if(or__3939__auto____9144)
{return or__3939__auto____9144;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3937__auto____9149 = this$;
if(and__3937__auto____9149)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3937__auto____9149;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2396__auto____9150 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____9151 = (cljs.core._remove_watch[goog.typeOf(x__2396__auto____9150)]);
if(or__3939__auto____9151)
{return or__3939__auto____9151;
} else
{var or__3939__auto____9152 = (cljs.core._remove_watch["_"]);
if(or__3939__auto____9152)
{return or__3939__auto____9152;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3937__auto____9157 = coll;
if(and__3937__auto____9157)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3937__auto____9157;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2396__auto____9158 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9159 = (cljs.core._as_transient[goog.typeOf(x__2396__auto____9158)]);
if(or__3939__auto____9159)
{return or__3939__auto____9159;
} else
{var or__3939__auto____9160 = (cljs.core._as_transient["_"]);
if(or__3939__auto____9160)
{return or__3939__auto____9160;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3937__auto____9165 = tcoll;
if(and__3937__auto____9165)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3937__auto____9165;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2396__auto____9166 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9167 = (cljs.core._conj_BANG_[goog.typeOf(x__2396__auto____9166)]);
if(or__3939__auto____9167)
{return or__3939__auto____9167;
} else
{var or__3939__auto____9168 = (cljs.core._conj_BANG_["_"]);
if(or__3939__auto____9168)
{return or__3939__auto____9168;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3937__auto____9173 = tcoll;
if(and__3937__auto____9173)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3937__auto____9173;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2396__auto____9174 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9175 = (cljs.core._persistent_BANG_[goog.typeOf(x__2396__auto____9174)]);
if(or__3939__auto____9175)
{return or__3939__auto____9175;
} else
{var or__3939__auto____9176 = (cljs.core._persistent_BANG_["_"]);
if(or__3939__auto____9176)
{return or__3939__auto____9176;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3937__auto____9181 = tcoll;
if(and__3937__auto____9181)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3937__auto____9181;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2396__auto____9182 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9183 = (cljs.core._assoc_BANG_[goog.typeOf(x__2396__auto____9182)]);
if(or__3939__auto____9183)
{return or__3939__auto____9183;
} else
{var or__3939__auto____9184 = (cljs.core._assoc_BANG_["_"]);
if(or__3939__auto____9184)
{return or__3939__auto____9184;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3937__auto____9189 = tcoll;
if(and__3937__auto____9189)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3937__auto____9189;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2396__auto____9190 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9191 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2396__auto____9190)]);
if(or__3939__auto____9191)
{return or__3939__auto____9191;
} else
{var or__3939__auto____9192 = (cljs.core._dissoc_BANG_["_"]);
if(or__3939__auto____9192)
{return or__3939__auto____9192;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3937__auto____9197 = tcoll;
if(and__3937__auto____9197)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3937__auto____9197;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2396__auto____9198 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9199 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2396__auto____9198)]);
if(or__3939__auto____9199)
{return or__3939__auto____9199;
} else
{var or__3939__auto____9200 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3939__auto____9200)
{return or__3939__auto____9200;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3937__auto____9205 = tcoll;
if(and__3937__auto____9205)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3937__auto____9205;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2396__auto____9206 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9207 = (cljs.core._pop_BANG_[goog.typeOf(x__2396__auto____9206)]);
if(or__3939__auto____9207)
{return or__3939__auto____9207;
} else
{var or__3939__auto____9208 = (cljs.core._pop_BANG_["_"]);
if(or__3939__auto____9208)
{return or__3939__auto____9208;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3937__auto____9213 = tcoll;
if(and__3937__auto____9213)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3937__auto____9213;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2396__auto____9214 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9215 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2396__auto____9214)]);
if(or__3939__auto____9215)
{return or__3939__auto____9215;
} else
{var or__3939__auto____9216 = (cljs.core._disjoin_BANG_["_"]);
if(or__3939__auto____9216)
{return or__3939__auto____9216;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3937__auto____9221 = x;
if(and__3937__auto____9221)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3937__auto____9221;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2396__auto____9222 = (((x == null))?null:x);
return (function (){var or__3939__auto____9223 = (cljs.core._compare[goog.typeOf(x__2396__auto____9222)]);
if(or__3939__auto____9223)
{return or__3939__auto____9223;
} else
{var or__3939__auto____9224 = (cljs.core._compare["_"]);
if(or__3939__auto____9224)
{return or__3939__auto____9224;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3937__auto____9229 = coll;
if(and__3937__auto____9229)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3937__auto____9229;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2396__auto____9230 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9231 = (cljs.core._drop_first[goog.typeOf(x__2396__auto____9230)]);
if(or__3939__auto____9231)
{return or__3939__auto____9231;
} else
{var or__3939__auto____9232 = (cljs.core._drop_first["_"]);
if(or__3939__auto____9232)
{return or__3939__auto____9232;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3937__auto____9237 = coll;
if(and__3937__auto____9237)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3937__auto____9237;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2396__auto____9238 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9239 = (cljs.core._chunked_first[goog.typeOf(x__2396__auto____9238)]);
if(or__3939__auto____9239)
{return or__3939__auto____9239;
} else
{var or__3939__auto____9240 = (cljs.core._chunked_first["_"]);
if(or__3939__auto____9240)
{return or__3939__auto____9240;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3937__auto____9245 = coll;
if(and__3937__auto____9245)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3937__auto____9245;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2396__auto____9246 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9247 = (cljs.core._chunked_rest[goog.typeOf(x__2396__auto____9246)]);
if(or__3939__auto____9247)
{return or__3939__auto____9247;
} else
{var or__3939__auto____9248 = (cljs.core._chunked_rest["_"]);
if(or__3939__auto____9248)
{return or__3939__auto____9248;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3937__auto____9253 = coll;
if(and__3937__auto____9253)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3937__auto____9253;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2396__auto____9254 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9255 = (cljs.core._chunked_next[goog.typeOf(x__2396__auto____9254)]);
if(or__3939__auto____9255)
{return or__3939__auto____9255;
} else
{var or__3939__auto____9256 = (cljs.core._chunked_next["_"]);
if(or__3939__auto____9256)
{return or__3939__auto____9256;
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
var or__3939__auto____9258 = (x === y);
if(or__3939__auto____9258)
{return or__3939__auto____9258;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__9259__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__9260 = y;
var G__9261 = cljs.core.first.call(null,more);
var G__9262 = cljs.core.next.call(null,more);
x = G__9260;
y = G__9261;
more = G__9262;
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
var G__9259 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9259__delegate.call(this, x, y, more);
};
G__9259.cljs$lang$maxFixedArity = 2;
G__9259.cljs$lang$applyTo = (function (arglist__9263){
var x = cljs.core.first(arglist__9263);
var y = cljs.core.first(cljs.core.next(arglist__9263));
var more = cljs.core.rest(cljs.core.next(arglist__9263));
return G__9259__delegate(x, y, more);
});
G__9259.cljs$lang$arity$variadic = G__9259__delegate;
return G__9259;
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
var G__9264 = null;
var G__9264__2 = (function (o,k){
return null;
});
var G__9264__3 = (function (o,k,not_found){
return not_found;
});
G__9264 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__9264__2.call(this,o,k);
case 3:
return G__9264__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9264;
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
var G__9265 = null;
var G__9265__2 = (function (_,f){
return f.call(null);
});
var G__9265__3 = (function (_,f,start){
return start;
});
G__9265 = function(_,f,start){
switch(arguments.length){
case 2:
return G__9265__2.call(this,_,f);
case 3:
return G__9265__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9265;
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
var G__9266 = null;
var G__9266__2 = (function (_,n){
return null;
});
var G__9266__3 = (function (_,n,not_found){
return not_found;
});
G__9266 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__9266__2.call(this,_,n);
case 3:
return G__9266__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9266;
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
var and__3937__auto____9267 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3937__auto____9267)
{return (o.toString() === other.toString());
} else
{return and__3937__auto____9267;
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
var cnt__9280 = cljs.core._count.call(null,cicoll);
if((cnt__9280 === 0))
{return f.call(null);
} else
{var val__9281 = cljs.core._nth.call(null,cicoll,0);
var n__9282 = 1;
while(true){
if((n__9282 < cnt__9280))
{var nval__9283 = f.call(null,val__9281,cljs.core._nth.call(null,cicoll,n__9282));
if(cljs.core.reduced_QMARK_.call(null,nval__9283))
{return cljs.core.deref.call(null,nval__9283);
} else
{{
var G__9292 = nval__9283;
var G__9293 = (n__9282 + 1);
val__9281 = G__9292;
n__9282 = G__9293;
continue;
}
}
} else
{return val__9281;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__9284 = cljs.core._count.call(null,cicoll);
var val__9285 = val;
var n__9286 = 0;
while(true){
if((n__9286 < cnt__9284))
{var nval__9287 = f.call(null,val__9285,cljs.core._nth.call(null,cicoll,n__9286));
if(cljs.core.reduced_QMARK_.call(null,nval__9287))
{return cljs.core.deref.call(null,nval__9287);
} else
{{
var G__9294 = nval__9287;
var G__9295 = (n__9286 + 1);
val__9285 = G__9294;
n__9286 = G__9295;
continue;
}
}
} else
{return val__9285;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__9288 = cljs.core._count.call(null,cicoll);
var val__9289 = val;
var n__9290 = idx;
while(true){
if((n__9290 < cnt__9288))
{var nval__9291 = f.call(null,val__9289,cljs.core._nth.call(null,cicoll,n__9290));
if(cljs.core.reduced_QMARK_.call(null,nval__9291))
{return cljs.core.deref.call(null,nval__9291);
} else
{{
var G__9296 = nval__9291;
var G__9297 = (n__9290 + 1);
val__9289 = G__9296;
n__9290 = G__9297;
continue;
}
}
} else
{return val__9289;
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
var cnt__9310 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__9311 = (arr[0]);
var n__9312 = 1;
while(true){
if((n__9312 < cnt__9310))
{var nval__9313 = f.call(null,val__9311,(arr[n__9312]));
if(cljs.core.reduced_QMARK_.call(null,nval__9313))
{return cljs.core.deref.call(null,nval__9313);
} else
{{
var G__9322 = nval__9313;
var G__9323 = (n__9312 + 1);
val__9311 = G__9322;
n__9312 = G__9323;
continue;
}
}
} else
{return val__9311;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__9314 = arr.length;
var val__9315 = val;
var n__9316 = 0;
while(true){
if((n__9316 < cnt__9314))
{var nval__9317 = f.call(null,val__9315,(arr[n__9316]));
if(cljs.core.reduced_QMARK_.call(null,nval__9317))
{return cljs.core.deref.call(null,nval__9317);
} else
{{
var G__9324 = nval__9317;
var G__9325 = (n__9316 + 1);
val__9315 = G__9324;
n__9316 = G__9325;
continue;
}
}
} else
{return val__9315;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__9318 = arr.length;
var val__9319 = val;
var n__9320 = idx;
while(true){
if((n__9320 < cnt__9318))
{var nval__9321 = f.call(null,val__9319,(arr[n__9320]));
if(cljs.core.reduced_QMARK_.call(null,nval__9321))
{return cljs.core.deref.call(null,nval__9321);
} else
{{
var G__9326 = nval__9321;
var G__9327 = (n__9320 + 1);
val__9319 = G__9326;
n__9320 = G__9327;
continue;
}
}
} else
{return val__9319;
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
var this__9328 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__9329 = this;
if(((this__9329.i + 1) < this__9329.a.length))
{return (new cljs.core.IndexedSeq(this__9329.a,(this__9329.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9330 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9331 = this;
var c__9332 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__9332 > 0))
{return (new cljs.core.RSeq(coll,(c__9332 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__9333 = this;
var this__9334 = this;
return cljs.core.pr_str.call(null,this__9334);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9335 = this;
if(cljs.core.counted_QMARK_.call(null,this__9335.a))
{return cljs.core.ci_reduce.call(null,this__9335.a,f,(this__9335.a[this__9335.i]),(this__9335.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__9335.a[this__9335.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9336 = this;
if(cljs.core.counted_QMARK_.call(null,this__9336.a))
{return cljs.core.ci_reduce.call(null,this__9336.a,f,start,this__9336.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9337 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9338 = this;
return (this__9338.a.length - this__9338.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__9339 = this;
return (this__9339.a[this__9339.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__9340 = this;
if(((this__9340.i + 1) < this__9340.a.length))
{return (new cljs.core.IndexedSeq(this__9340.a,(this__9340.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9341 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9342 = this;
var i__9343 = (n + this__9342.i);
if((i__9343 < this__9342.a.length))
{return (this__9342.a[i__9343]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9344 = this;
var i__9345 = (n + this__9344.i);
if((i__9345 < this__9344.a.length))
{return (this__9344.a[i__9345]);
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
var G__9346 = null;
var G__9346__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__9346__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__9346 = function(array,f,start){
switch(arguments.length){
case 2:
return G__9346__2.call(this,array,f);
case 3:
return G__9346__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9346;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__9347 = null;
var G__9347__2 = (function (array,k){
return (array[k]);
});
var G__9347__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__9347 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__9347__2.call(this,array,k);
case 3:
return G__9347__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9347;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__9348 = null;
var G__9348__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__9348__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__9348 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__9348__2.call(this,array,n);
case 3:
return G__9348__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9348;
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
var this__9349 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9350 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__9351 = this;
var this__9352 = this;
return cljs.core.pr_str.call(null,this__9352);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9353 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9354 = this;
return (this__9354.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9355 = this;
return cljs.core._nth.call(null,this__9355.ci,this__9355.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9356 = this;
if((this__9356.i > 0))
{return (new cljs.core.RSeq(this__9356.ci,(this__9356.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9357 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__9358 = this;
return (new cljs.core.RSeq(this__9358.ci,this__9358.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9359 = this;
return this__9359.meta;
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
{if((function (){var G__9363__9364 = coll;
if(G__9363__9364)
{if((function (){var or__3939__auto____9365 = (G__9363__9364.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3939__auto____9365)
{return or__3939__auto____9365;
} else
{return G__9363__9364.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__9363__9364.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9363__9364);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9363__9364);
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
{if((function (){var G__9370__9371 = coll;
if(G__9370__9371)
{if((function (){var or__3939__auto____9372 = (G__9370__9371.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____9372)
{return or__3939__auto____9372;
} else
{return G__9370__9371.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9370__9371.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9370__9371);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9370__9371);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__9373 = cljs.core.seq.call(null,coll);
if((s__9373 == null))
{return null;
} else
{return cljs.core._first.call(null,s__9373);
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
{if((function (){var G__9378__9379 = coll;
if(G__9378__9379)
{if((function (){var or__3939__auto____9380 = (G__9378__9379.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____9380)
{return or__3939__auto____9380;
} else
{return G__9378__9379.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9378__9379.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9378__9379);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9378__9379);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__9381 = cljs.core.seq.call(null,coll);
if(!((s__9381 == null)))
{return cljs.core._rest.call(null,s__9381);
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
{if((function (){var G__9385__9386 = coll;
if(G__9385__9386)
{if((function (){var or__3939__auto____9387 = (G__9385__9386.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3939__auto____9387)
{return or__3939__auto____9387;
} else
{return G__9385__9386.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__9385__9386.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9385__9386);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9385__9386);
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
var sn__9389 = cljs.core.next.call(null,s);
if(!((sn__9389 == null)))
{{
var G__9390 = sn__9389;
s = G__9390;
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
var G__9391__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__9392 = conj.call(null,coll,x);
var G__9393 = cljs.core.first.call(null,xs);
var G__9394 = cljs.core.next.call(null,xs);
coll = G__9392;
x = G__9393;
xs = G__9394;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__9391 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9391__delegate.call(this, coll, x, xs);
};
G__9391.cljs$lang$maxFixedArity = 2;
G__9391.cljs$lang$applyTo = (function (arglist__9395){
var coll = cljs.core.first(arglist__9395);
var x = cljs.core.first(cljs.core.next(arglist__9395));
var xs = cljs.core.rest(cljs.core.next(arglist__9395));
return G__9391__delegate(coll, x, xs);
});
G__9391.cljs$lang$arity$variadic = G__9391__delegate;
return G__9391;
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
var s__9398 = cljs.core.seq.call(null,coll);
var acc__9399 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__9398))
{return (acc__9399 + cljs.core._count.call(null,s__9398));
} else
{{
var G__9400 = cljs.core.next.call(null,s__9398);
var G__9401 = (acc__9399 + 1);
s__9398 = G__9400;
acc__9399 = G__9401;
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
{if((function (){var G__9408__9409 = coll;
if(G__9408__9409)
{if((function (){var or__3939__auto____9410 = (G__9408__9409.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3939__auto____9410)
{return or__3939__auto____9410;
} else
{return G__9408__9409.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9408__9409.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9408__9409);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9408__9409);
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
{if((function (){var G__9411__9412 = coll;
if(G__9411__9412)
{if((function (){var or__3939__auto____9413 = (G__9411__9412.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3939__auto____9413)
{return or__3939__auto____9413;
} else
{return G__9411__9412.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9411__9412.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9411__9412);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9411__9412);
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
var G__9416__delegate = function (coll,k,v,kvs){
while(true){
var ret__9415 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__9417 = ret__9415;
var G__9418 = cljs.core.first.call(null,kvs);
var G__9419 = cljs.core.second.call(null,kvs);
var G__9420 = cljs.core.nnext.call(null,kvs);
coll = G__9417;
k = G__9418;
v = G__9419;
kvs = G__9420;
continue;
}
} else
{return ret__9415;
}
break;
}
};
var G__9416 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9416__delegate.call(this, coll, k, v, kvs);
};
G__9416.cljs$lang$maxFixedArity = 3;
G__9416.cljs$lang$applyTo = (function (arglist__9421){
var coll = cljs.core.first(arglist__9421);
var k = cljs.core.first(cljs.core.next(arglist__9421));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9421)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9421)));
return G__9416__delegate(coll, k, v, kvs);
});
G__9416.cljs$lang$arity$variadic = G__9416__delegate;
return G__9416;
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
var G__9424__delegate = function (coll,k,ks){
while(true){
var ret__9423 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9425 = ret__9423;
var G__9426 = cljs.core.first.call(null,ks);
var G__9427 = cljs.core.next.call(null,ks);
coll = G__9425;
k = G__9426;
ks = G__9427;
continue;
}
} else
{return ret__9423;
}
break;
}
};
var G__9424 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9424__delegate.call(this, coll, k, ks);
};
G__9424.cljs$lang$maxFixedArity = 2;
G__9424.cljs$lang$applyTo = (function (arglist__9428){
var coll = cljs.core.first(arglist__9428);
var k = cljs.core.first(cljs.core.next(arglist__9428));
var ks = cljs.core.rest(cljs.core.next(arglist__9428));
return G__9424__delegate(coll, k, ks);
});
G__9424.cljs$lang$arity$variadic = G__9424__delegate;
return G__9424;
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
if((function (){var G__9432__9433 = o;
if(G__9432__9433)
{if((function (){var or__3939__auto____9434 = (G__9432__9433.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3939__auto____9434)
{return or__3939__auto____9434;
} else
{return G__9432__9433.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9432__9433.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9432__9433);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9432__9433);
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
var G__9437__delegate = function (coll,k,ks){
while(true){
var ret__9436 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9438 = ret__9436;
var G__9439 = cljs.core.first.call(null,ks);
var G__9440 = cljs.core.next.call(null,ks);
coll = G__9438;
k = G__9439;
ks = G__9440;
continue;
}
} else
{return ret__9436;
}
break;
}
};
var G__9437 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9437__delegate.call(this, coll, k, ks);
};
G__9437.cljs$lang$maxFixedArity = 2;
G__9437.cljs$lang$applyTo = (function (arglist__9441){
var coll = cljs.core.first(arglist__9441);
var k = cljs.core.first(cljs.core.next(arglist__9441));
var ks = cljs.core.rest(cljs.core.next(arglist__9441));
return G__9437__delegate(coll, k, ks);
});
G__9437.cljs$lang$arity$variadic = G__9437__delegate;
return G__9437;
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
var h__9443 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__9443);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__9443;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__9445 = (cljs.core.string_hash_cache[k]);
if(!((h__9445 == null)))
{return h__9445;
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
if((function (){var and__3937__auto____9447 = goog.isString(o);
if(and__3937__auto____9447)
{return check_cache;
} else
{return and__3937__auto____9447;
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
{var G__9451__9452 = x;
if(G__9451__9452)
{if((function (){var or__3939__auto____9453 = (G__9451__9452.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3939__auto____9453)
{return or__3939__auto____9453;
} else
{return G__9451__9452.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__9451__9452.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9451__9452);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9451__9452);
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
{var G__9457__9458 = x;
if(G__9457__9458)
{if((function (){var or__3939__auto____9459 = (G__9457__9458.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3939__auto____9459)
{return or__3939__auto____9459;
} else
{return G__9457__9458.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__9457__9458.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9457__9458);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9457__9458);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__9463__9464 = x;
if(G__9463__9464)
{if((function (){var or__3939__auto____9465 = (G__9463__9464.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3939__auto____9465)
{return or__3939__auto____9465;
} else
{return G__9463__9464.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__9463__9464.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9463__9464);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9463__9464);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__9469__9470 = x;
if(G__9469__9470)
{if((function (){var or__3939__auto____9471 = (G__9469__9470.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3939__auto____9471)
{return or__3939__auto____9471;
} else
{return G__9469__9470.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__9469__9470.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9469__9470);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9469__9470);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__9475__9476 = x;
if(G__9475__9476)
{if((function (){var or__3939__auto____9477 = (G__9475__9476.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3939__auto____9477)
{return or__3939__auto____9477;
} else
{return G__9475__9476.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__9475__9476.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9475__9476);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9475__9476);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__9481__9482 = x;
if(G__9481__9482)
{if((function (){var or__3939__auto____9483 = (G__9481__9482.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3939__auto____9483)
{return or__3939__auto____9483;
} else
{return G__9481__9482.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9481__9482.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9481__9482);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9481__9482);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__9487__9488 = x;
if(G__9487__9488)
{if((function (){var or__3939__auto____9489 = (G__9487__9488.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3939__auto____9489)
{return or__3939__auto____9489;
} else
{return G__9487__9488.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9487__9488.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9487__9488);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9487__9488);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__9493__9494 = x;
if(G__9493__9494)
{if((function (){var or__3939__auto____9495 = (G__9493__9494.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3939__auto____9495)
{return or__3939__auto____9495;
} else
{return G__9493__9494.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__9493__9494.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9493__9494);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9493__9494);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__9499__9500 = x;
if(G__9499__9500)
{if((function (){var or__3939__auto____9501 = (G__9499__9500.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3939__auto____9501)
{return or__3939__auto____9501;
} else
{return G__9499__9500.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__9499__9500.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9499__9500);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9499__9500);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__9505__9506 = x;
if(G__9505__9506)
{if(cljs.core.truth_((function (){var or__3939__auto____9507 = null;
if(cljs.core.truth_(or__3939__auto____9507))
{return or__3939__auto____9507;
} else
{return G__9505__9506.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__9505__9506.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9505__9506);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9505__9506);
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
var G__9508__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__9508 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9508__delegate.call(this, keyvals);
};
G__9508.cljs$lang$maxFixedArity = 0;
G__9508.cljs$lang$applyTo = (function (arglist__9509){
var keyvals = cljs.core.seq(arglist__9509);;
return G__9508__delegate(keyvals);
});
G__9508.cljs$lang$arity$variadic = G__9508__delegate;
return G__9508;
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
var keys__9511 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__9511.push(key);
}));
return keys__9511;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__9515 = i;
var j__9516 = j;
var len__9517 = len;
while(true){
if((len__9517 === 0))
{return to;
} else
{(to[j__9516] = (from[i__9515]));
{
var G__9518 = (i__9515 + 1);
var G__9519 = (j__9516 + 1);
var G__9520 = (len__9517 - 1);
i__9515 = G__9518;
j__9516 = G__9519;
len__9517 = G__9520;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__9524 = (i + (len - 1));
var j__9525 = (j + (len - 1));
var len__9526 = len;
while(true){
if((len__9526 === 0))
{return to;
} else
{(to[j__9525] = (from[i__9524]));
{
var G__9527 = (i__9524 - 1);
var G__9528 = (j__9525 - 1);
var G__9529 = (len__9526 - 1);
i__9524 = G__9527;
j__9525 = G__9528;
len__9526 = G__9529;
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
{var G__9533__9534 = s;
if(G__9533__9534)
{if((function (){var or__3939__auto____9535 = (G__9533__9534.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____9535)
{return or__3939__auto____9535;
} else
{return G__9533__9534.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9533__9534.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9533__9534);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9533__9534);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__9539__9540 = s;
if(G__9539__9540)
{if((function (){var or__3939__auto____9541 = (G__9539__9540.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3939__auto____9541)
{return or__3939__auto____9541;
} else
{return G__9539__9540.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__9539__9540.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9539__9540);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9539__9540);
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
var and__3937__auto____9544 = goog.isString(x);
if(and__3937__auto____9544)
{return !((function (){var or__3939__auto____9545 = (x.charAt(0) === "\uFDD0");
if(or__3939__auto____9545)
{return or__3939__auto____9545;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3937__auto____9544;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3937__auto____9547 = goog.isString(x);
if(and__3937__auto____9547)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3937__auto____9547;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3937__auto____9549 = goog.isString(x);
if(and__3937__auto____9549)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3937__auto____9549;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3939__auto____9554 = cljs.core.fn_QMARK_.call(null,f);
if(or__3939__auto____9554)
{return or__3939__auto____9554;
} else
{var G__9555__9556 = f;
if(G__9555__9556)
{if((function (){var or__3939__auto____9557 = (G__9555__9556.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3939__auto____9557)
{return or__3939__auto____9557;
} else
{return G__9555__9556.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__9555__9556.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9555__9556);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9555__9556);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3937__auto____9559 = cljs.core.number_QMARK_.call(null,n);
if(and__3937__auto____9559)
{return (n == n.toFixed());
} else
{return and__3937__auto____9559;
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
if(cljs.core.truth_((function (){var and__3937__auto____9562 = coll;
if(cljs.core.truth_(and__3937__auto____9562))
{var and__3937__auto____9563 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3937__auto____9563)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3937__auto____9563;
}
} else
{return and__3937__auto____9562;
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
var G__9572__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__9568 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__9569 = more;
while(true){
var x__9570 = cljs.core.first.call(null,xs__9569);
var etc__9571 = cljs.core.next.call(null,xs__9569);
if(cljs.core.truth_(xs__9569))
{if(cljs.core.contains_QMARK_.call(null,s__9568,x__9570))
{return false;
} else
{{
var G__9573 = cljs.core.conj.call(null,s__9568,x__9570);
var G__9574 = etc__9571;
s__9568 = G__9573;
xs__9569 = G__9574;
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
var G__9572 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9572__delegate.call(this, x, y, more);
};
G__9572.cljs$lang$maxFixedArity = 2;
G__9572.cljs$lang$applyTo = (function (arglist__9575){
var x = cljs.core.first(arglist__9575);
var y = cljs.core.first(cljs.core.next(arglist__9575));
var more = cljs.core.rest(cljs.core.next(arglist__9575));
return G__9572__delegate(x, y, more);
});
G__9572.cljs$lang$arity$variadic = G__9572__delegate;
return G__9572;
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
{if((function (){var G__9579__9580 = x;
if(G__9579__9580)
{if(cljs.core.truth_((function (){var or__3939__auto____9581 = null;
if(cljs.core.truth_(or__3939__auto____9581))
{return or__3939__auto____9581;
} else
{return G__9579__9580.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__9579__9580.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9579__9580);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9579__9580);
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
var xl__9586 = cljs.core.count.call(null,xs);
var yl__9587 = cljs.core.count.call(null,ys);
if((xl__9586 < yl__9587))
{return -1;
} else
{if((xl__9586 > yl__9587))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__9586,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__9588 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3937__auto____9589 = (d__9588 === 0);
if(and__3937__auto____9589)
{return ((n + 1) < len);
} else
{return and__3937__auto____9589;
}
})())
{{
var G__9590 = xs;
var G__9591 = ys;
var G__9592 = len;
var G__9593 = (n + 1);
xs = G__9590;
ys = G__9591;
len = G__9592;
n = G__9593;
continue;
}
} else
{return d__9588;
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
var r__9595 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__9595))
{return r__9595;
} else
{if(cljs.core.truth_(r__9595))
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
{var a__9597 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__9597,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9597);
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
var temp__4086__auto____9603 = cljs.core.seq.call(null,coll);
if(temp__4086__auto____9603)
{var s__9604 = temp__4086__auto____9603;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9604),cljs.core.next.call(null,s__9604));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__9605 = val;
var coll__9606 = cljs.core.seq.call(null,coll);
while(true){
if(coll__9606)
{var nval__9607 = f.call(null,val__9605,cljs.core.first.call(null,coll__9606));
if(cljs.core.reduced_QMARK_.call(null,nval__9607))
{return cljs.core.deref.call(null,nval__9607);
} else
{{
var G__9608 = nval__9607;
var G__9609 = cljs.core.next.call(null,coll__9606);
val__9605 = G__9608;
coll__9606 = G__9609;
continue;
}
}
} else
{return val__9605;
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
var a__9611 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__9611);
return cljs.core.vec.call(null,a__9611);
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
if((function (){var G__9618__9619 = coll;
if(G__9618__9619)
{if((function (){var or__3939__auto____9620 = (G__9618__9619.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3939__auto____9620)
{return or__3939__auto____9620;
} else
{return G__9618__9619.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9618__9619.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9618__9619);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9618__9619);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__9621__9622 = coll;
if(G__9621__9622)
{if((function (){var or__3939__auto____9623 = (G__9621__9622.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3939__auto____9623)
{return or__3939__auto____9623;
} else
{return G__9621__9622.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9621__9622.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9621__9622);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9621__9622);
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
var this__9624 = this;
return this__9624.val;
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
var G__9625__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9625 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9625__delegate.call(this, x, y, more);
};
G__9625.cljs$lang$maxFixedArity = 2;
G__9625.cljs$lang$applyTo = (function (arglist__9626){
var x = cljs.core.first(arglist__9626);
var y = cljs.core.first(cljs.core.next(arglist__9626));
var more = cljs.core.rest(cljs.core.next(arglist__9626));
return G__9625__delegate(x, y, more);
});
G__9625.cljs$lang$arity$variadic = G__9625__delegate;
return G__9625;
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
var G__9627__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
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
var G__9629__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
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
var G__9631__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9631 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9631__delegate.call(this, x, y, more);
};
G__9631.cljs$lang$maxFixedArity = 2;
G__9631.cljs$lang$applyTo = (function (arglist__9632){
var x = cljs.core.first(arglist__9632);
var y = cljs.core.first(cljs.core.next(arglist__9632));
var more = cljs.core.rest(cljs.core.next(arglist__9632));
return G__9631__delegate(x, y, more);
});
G__9631.cljs$lang$arity$variadic = G__9631__delegate;
return G__9631;
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
var G__9633__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__9634 = y;
var G__9635 = cljs.core.first.call(null,more);
var G__9636 = cljs.core.next.call(null,more);
x = G__9634;
y = G__9635;
more = G__9636;
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
var G__9633 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9633__delegate.call(this, x, y, more);
};
G__9633.cljs$lang$maxFixedArity = 2;
G__9633.cljs$lang$applyTo = (function (arglist__9637){
var x = cljs.core.first(arglist__9637);
var y = cljs.core.first(cljs.core.next(arglist__9637));
var more = cljs.core.rest(cljs.core.next(arglist__9637));
return G__9633__delegate(x, y, more);
});
G__9633.cljs$lang$arity$variadic = G__9633__delegate;
return G__9633;
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
var G__9638__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__9639 = y;
var G__9640 = cljs.core.first.call(null,more);
var G__9641 = cljs.core.next.call(null,more);
x = G__9639;
y = G__9640;
more = G__9641;
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
var G__9638 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9638__delegate.call(this, x, y, more);
};
G__9638.cljs$lang$maxFixedArity = 2;
G__9638.cljs$lang$applyTo = (function (arglist__9642){
var x = cljs.core.first(arglist__9642);
var y = cljs.core.first(cljs.core.next(arglist__9642));
var more = cljs.core.rest(cljs.core.next(arglist__9642));
return G__9638__delegate(x, y, more);
});
G__9638.cljs$lang$arity$variadic = G__9638__delegate;
return G__9638;
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
var G__9643__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__9644 = y;
var G__9645 = cljs.core.first.call(null,more);
var G__9646 = cljs.core.next.call(null,more);
x = G__9644;
y = G__9645;
more = G__9646;
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
var G__9643 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9643__delegate.call(this, x, y, more);
};
G__9643.cljs$lang$maxFixedArity = 2;
G__9643.cljs$lang$applyTo = (function (arglist__9647){
var x = cljs.core.first(arglist__9647);
var y = cljs.core.first(cljs.core.next(arglist__9647));
var more = cljs.core.rest(cljs.core.next(arglist__9647));
return G__9643__delegate(x, y, more);
});
G__9643.cljs$lang$arity$variadic = G__9643__delegate;
return G__9643;
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
var G__9648__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__9649 = y;
var G__9650 = cljs.core.first.call(null,more);
var G__9651 = cljs.core.next.call(null,more);
x = G__9649;
y = G__9650;
more = G__9651;
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
var G__9648 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9648__delegate.call(this, x, y, more);
};
G__9648.cljs$lang$maxFixedArity = 2;
G__9648.cljs$lang$applyTo = (function (arglist__9652){
var x = cljs.core.first(arglist__9652);
var y = cljs.core.first(cljs.core.next(arglist__9652));
var more = cljs.core.rest(cljs.core.next(arglist__9652));
return G__9648__delegate(x, y, more);
});
G__9648.cljs$lang$arity$variadic = G__9648__delegate;
return G__9648;
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
var G__9653__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9653 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9653__delegate.call(this, x, y, more);
};
G__9653.cljs$lang$maxFixedArity = 2;
G__9653.cljs$lang$applyTo = (function (arglist__9654){
var x = cljs.core.first(arglist__9654);
var y = cljs.core.first(cljs.core.next(arglist__9654));
var more = cljs.core.rest(cljs.core.next(arglist__9654));
return G__9653__delegate(x, y, more);
});
G__9653.cljs$lang$arity$variadic = G__9653__delegate;
return G__9653;
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
var G__9655__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9655 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9655__delegate.call(this, x, y, more);
};
G__9655.cljs$lang$maxFixedArity = 2;
G__9655.cljs$lang$applyTo = (function (arglist__9656){
var x = cljs.core.first(arglist__9656);
var y = cljs.core.first(cljs.core.next(arglist__9656));
var more = cljs.core.rest(cljs.core.next(arglist__9656));
return G__9655__delegate(x, y, more);
});
G__9655.cljs$lang$arity$variadic = G__9655__delegate;
return G__9655;
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
var rem__9658 = (n % d);
return cljs.core.fix.call(null,((n - rem__9658) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9660 = cljs.core.quot.call(null,n,d);
return (n - (d * q__9660));
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
var v__9663 = (v - ((v >> 1) & 1431655765));
var v__9664 = ((v__9663 & 858993459) + ((v__9663 >> 2) & 858993459));
return ((((v__9664 + (v__9664 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__9665__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
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
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
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
var n__9673 = n;
var xs__9674 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____9675 = xs__9674;
if(and__3937__auto____9675)
{return (n__9673 > 0);
} else
{return and__3937__auto____9675;
}
})()))
{{
var G__9676 = (n__9673 - 1);
var G__9677 = cljs.core.next.call(null,xs__9674);
n__9673 = G__9676;
xs__9674 = G__9677;
continue;
}
} else
{return xs__9674;
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
var G__9678__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9679 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9680 = cljs.core.next.call(null,more);
sb = G__9679;
more = G__9680;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9678 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9678__delegate.call(this, x, ys);
};
G__9678.cljs$lang$maxFixedArity = 1;
G__9678.cljs$lang$applyTo = (function (arglist__9681){
var x = cljs.core.first(arglist__9681);
var ys = cljs.core.rest(arglist__9681);
return G__9678__delegate(x, ys);
});
G__9678.cljs$lang$arity$variadic = G__9678__delegate;
return G__9678;
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
var G__9682__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9683 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__9684 = cljs.core.next.call(null,more);
sb = G__9683;
more = G__9684;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__9682 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9682__delegate.call(this, x, ys);
};
G__9682.cljs$lang$maxFixedArity = 1;
G__9682.cljs$lang$applyTo = (function (arglist__9685){
var x = cljs.core.first(arglist__9685);
var ys = cljs.core.rest(arglist__9685);
return G__9682__delegate(x, ys);
});
G__9682.cljs$lang$arity$variadic = G__9682__delegate;
return G__9682;
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
format.cljs$lang$applyTo = (function (arglist__9686){
var fmt = cljs.core.first(arglist__9686);
var args = cljs.core.rest(arglist__9686);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9689 = cljs.core.seq.call(null,x);
var ys__9690 = cljs.core.seq.call(null,y);
while(true){
if((xs__9689 == null))
{return (ys__9690 == null);
} else
{if((ys__9690 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9689),cljs.core.first.call(null,ys__9690)))
{{
var G__9691 = cljs.core.next.call(null,xs__9689);
var G__9692 = cljs.core.next.call(null,ys__9690);
xs__9689 = G__9691;
ys__9690 = G__9692;
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
return cljs.core.reduce.call(null,(function (p1__9693_SHARP_,p2__9694_SHARP_){
return cljs.core.hash_combine.call(null,p1__9693_SHARP_,cljs.core.hash.call(null,p2__9694_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__9698 = 0;
var s__9699 = cljs.core.seq.call(null,m);
while(true){
if(s__9699)
{var e__9700 = cljs.core.first.call(null,s__9699);
{
var G__9701 = ((h__9698 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__9700)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__9700)))) % 4503599627370496);
var G__9702 = cljs.core.next.call(null,s__9699);
h__9698 = G__9701;
s__9699 = G__9702;
continue;
}
} else
{return h__9698;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__9706 = 0;
var s__9707 = cljs.core.seq.call(null,s);
while(true){
if(s__9707)
{var e__9708 = cljs.core.first.call(null,s__9707);
{
var G__9709 = ((h__9706 + cljs.core.hash.call(null,e__9708)) % 4503599627370496);
var G__9710 = cljs.core.next.call(null,s__9707);
h__9706 = G__9709;
s__9707 = G__9710;
continue;
}
} else
{return h__9706;
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
var G__9731__9732 = cljs.core.seq.call(null,fn_map);
if(G__9731__9732)
{var G__9734__9736 = cljs.core.first.call(null,G__9731__9732);
var vec__9735__9737 = G__9734__9736;
var key_name__9738 = cljs.core.nth.call(null,vec__9735__9737,0,null);
var f__9739 = cljs.core.nth.call(null,vec__9735__9737,1,null);
var G__9731__9740 = G__9731__9732;
var G__9734__9741 = G__9734__9736;
var G__9731__9742 = G__9731__9740;
while(true){
var vec__9743__9744 = G__9734__9741;
var key_name__9745 = cljs.core.nth.call(null,vec__9743__9744,0,null);
var f__9746 = cljs.core.nth.call(null,vec__9743__9744,1,null);
var G__9731__9747 = G__9731__9742;
var str_name__9748 = cljs.core.name.call(null,key_name__9745);
(obj[str_name__9748] = f__9746);
var temp__4088__auto____9749 = cljs.core.next.call(null,G__9731__9747);
if(temp__4088__auto____9749)
{var G__9731__9750 = temp__4088__auto____9749;
{
var G__9751 = cljs.core.first.call(null,G__9731__9750);
var G__9752 = G__9731__9750;
G__9734__9741 = G__9751;
G__9731__9742 = G__9752;
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
var this__9753 = this;
var h__2225__auto____9754 = this__9753.__hash;
if(!((h__2225__auto____9754 == null)))
{return h__2225__auto____9754;
} else
{var h__2225__auto____9755 = cljs.core.hash_coll.call(null,coll);
this__9753.__hash = h__2225__auto____9755;
return h__2225__auto____9755;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9756 = this;
if((this__9756.count === 1))
{return null;
} else
{return this__9756.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9757 = this;
return (new cljs.core.List(this__9757.meta,o,coll,(this__9757.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__9758 = this;
var this__9759 = this;
return cljs.core.pr_str.call(null,this__9759);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9760 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9761 = this;
return this__9761.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9762 = this;
return this__9762.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9763 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9764 = this;
return this__9764.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9765 = this;
if((this__9765.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__9765.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9766 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9767 = this;
return (new cljs.core.List(meta,this__9767.first,this__9767.rest,this__9767.count,this__9767.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9768 = this;
return this__9768.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9769 = this;
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
var this__9770 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9771 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9772 = this;
return (new cljs.core.List(this__9772.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__9773 = this;
var this__9774 = this;
return cljs.core.pr_str.call(null,this__9774);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9775 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9776 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9777 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9778 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9779 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9780 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9781 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9782 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9783 = this;
return this__9783.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9784 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__9788__9789 = coll;
if(G__9788__9789)
{if((function (){var or__3939__auto____9790 = (G__9788__9789.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3939__auto____9790)
{return or__3939__auto____9790;
} else
{return G__9788__9789.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__9788__9789.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9788__9789);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9788__9789);
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
var G__9791__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__9791 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9791__delegate.call(this, x, y, z, items);
};
G__9791.cljs$lang$maxFixedArity = 3;
G__9791.cljs$lang$applyTo = (function (arglist__9792){
var x = cljs.core.first(arglist__9792);
var y = cljs.core.first(cljs.core.next(arglist__9792));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9792)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9792)));
return G__9791__delegate(x, y, z, items);
});
G__9791.cljs$lang$arity$variadic = G__9791__delegate;
return G__9791;
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
var this__9793 = this;
var h__2225__auto____9794 = this__9793.__hash;
if(!((h__2225__auto____9794 == null)))
{return h__2225__auto____9794;
} else
{var h__2225__auto____9795 = cljs.core.hash_coll.call(null,coll);
this__9793.__hash = h__2225__auto____9795;
return h__2225__auto____9795;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9796 = this;
if((this__9796.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__9796.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9797 = this;
return (new cljs.core.Cons(null,o,coll,this__9797.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__9798 = this;
var this__9799 = this;
return cljs.core.pr_str.call(null,this__9799);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9800 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9801 = this;
return this__9801.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9802 = this;
if((this__9802.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__9802.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9803 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9804 = this;
return (new cljs.core.Cons(meta,this__9804.first,this__9804.rest,this__9804.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9805 = this;
return this__9805.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9806 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9806.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3939__auto____9811 = (coll == null);
if(or__3939__auto____9811)
{return or__3939__auto____9811;
} else
{var G__9812__9813 = coll;
if(G__9812__9813)
{if((function (){var or__3939__auto____9814 = (G__9812__9813.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____9814)
{return or__3939__auto____9814;
} else
{return G__9812__9813.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9812__9813.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9812__9813);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9812__9813);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__9818__9819 = x;
if(G__9818__9819)
{if((function (){var or__3939__auto____9820 = (G__9818__9819.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3939__auto____9820)
{return or__3939__auto____9820;
} else
{return G__9818__9819.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__9818__9819.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9818__9819);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9818__9819);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__9821 = null;
var G__9821__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9821__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9821 = function(string,f,start){
switch(arguments.length){
case 2:
return G__9821__2.call(this,string,f);
case 3:
return G__9821__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9821;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9822 = null;
var G__9822__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9822__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9822 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__9822__2.call(this,string,k);
case 3:
return G__9822__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9822;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9823 = null;
var G__9823__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__9823__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9823 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__9823__2.call(this,string,n);
case 3:
return G__9823__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9823;
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
var G__9835 = null;
var G__9835__2 = (function (this_sym9826,coll){
var this__9828 = this;
var this_sym9826__9829 = this;
var ___9830 = this_sym9826__9829;
if((coll == null))
{return null;
} else
{var strobj__9831 = coll.strobj;
if((strobj__9831 == null))
{return cljs.core._lookup.call(null,coll,this__9828.k,null);
} else
{return (strobj__9831[this__9828.k]);
}
}
});
var G__9835__3 = (function (this_sym9827,coll,not_found){
var this__9828 = this;
var this_sym9827__9832 = this;
var ___9833 = this_sym9827__9832;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__9828.k,not_found);
}
});
G__9835 = function(this_sym9827,coll,not_found){
switch(arguments.length){
case 2:
return G__9835__2.call(this,this_sym9827,coll);
case 3:
return G__9835__3.call(this,this_sym9827,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9835;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym9824,args9825){
var this__9834 = this;
return this_sym9824.call.apply(this_sym9824,[this_sym9824].concat(args9825.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__9844 = null;
var G__9844__2 = (function (this_sym9838,coll){
var this_sym9838__9840 = this;
var this__9841 = this_sym9838__9840;
return cljs.core._lookup.call(null,coll,this__9841.toString(),null);
});
var G__9844__3 = (function (this_sym9839,coll,not_found){
var this_sym9839__9842 = this;
var this__9843 = this_sym9839__9842;
return cljs.core._lookup.call(null,coll,this__9843.toString(),not_found);
});
G__9844 = function(this_sym9839,coll,not_found){
switch(arguments.length){
case 2:
return G__9844__2.call(this,this_sym9839,coll);
case 3:
return G__9844__3.call(this,this_sym9839,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9844;
})()
;
String.prototype.apply = (function (this_sym9836,args9837){
return this_sym9836.call.apply(this_sym9836,[this_sym9836].concat(args9837.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__9846 = lazy_seq.x;
if(lazy_seq.realized)
{return x__9846;
} else
{lazy_seq.x = x__9846.call(null);
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
var this__9847 = this;
var h__2225__auto____9848 = this__9847.__hash;
if(!((h__2225__auto____9848 == null)))
{return h__2225__auto____9848;
} else
{var h__2225__auto____9849 = cljs.core.hash_coll.call(null,coll);
this__9847.__hash = h__2225__auto____9849;
return h__2225__auto____9849;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9850 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9851 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__9852 = this;
var this__9853 = this;
return cljs.core.pr_str.call(null,this__9853);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9854 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9855 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9856 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9857 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9858 = this;
return (new cljs.core.LazySeq(meta,this__9858.realized,this__9858.x,this__9858.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9859 = this;
return this__9859.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9860 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9860.meta);
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
var this__9861 = this;
return this__9861.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__9862 = this;
var ___9863 = this;
(this__9862.buf[this__9862.end] = o);
return this__9862.end = (this__9862.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__9864 = this;
var ___9865 = this;
var ret__9866 = (new cljs.core.ArrayChunk(this__9864.buf,0,this__9864.end));
this__9864.buf = null;
return ret__9866;
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
var this__9867 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__9867.arr[this__9867.off]),(this__9867.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9868 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__9868.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__9869 = this;
if((this__9869.off === this__9869.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__9869.arr,(this__9869.off + 1),this__9869.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__9870 = this;
return (this__9870.arr[(this__9870.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__9871 = this;
if((function (){var and__3937__auto____9872 = (i >= 0);
if(and__3937__auto____9872)
{return (i < (this__9871.end - this__9871.off));
} else
{return and__3937__auto____9872;
}
})())
{return (this__9871.arr[(this__9871.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9873 = this;
return (this__9873.end - this__9873.off);
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
var this__9874 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9875 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9876 = this;
return cljs.core._nth.call(null,this__9876.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9877 = this;
if((cljs.core._count.call(null,this__9877.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__9877.chunk),this__9877.more,this__9877.meta));
} else
{if((this__9877.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9877.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9878 = this;
if((this__9878.more == null))
{return null;
} else
{return this__9878.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9879 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9880 = this;
return (new cljs.core.ChunkedCons(this__9880.chunk,this__9880.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9881 = this;
return this__9881.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9882 = this;
return this__9882.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9883 = this;
if((this__9883.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9883.more;
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
if((function (){var G__9887__9888 = s;
if(G__9887__9888)
{if(cljs.core.truth_((function (){var or__3939__auto____9889 = null;
if(cljs.core.truth_(or__3939__auto____9889))
{return or__3939__auto____9889;
} else
{return G__9887__9888.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__9887__9888.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9887__9888);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9887__9888);
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
var ary__9892 = [];
var s__9893 = s;
while(true){
if(cljs.core.seq.call(null,s__9893))
{ary__9892.push(cljs.core.first.call(null,s__9893));
{
var G__9894 = cljs.core.next.call(null,s__9893);
s__9893 = G__9894;
continue;
}
} else
{return ary__9892;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__9898 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__9899 = 0;
var xs__9900 = cljs.core.seq.call(null,coll);
while(true){
if(xs__9900)
{(ret__9898[i__9899] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__9900)));
{
var G__9901 = (i__9899 + 1);
var G__9902 = cljs.core.next.call(null,xs__9900);
i__9899 = G__9901;
xs__9900 = G__9902;
continue;
}
} else
{}
break;
}
return ret__9898;
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
var a__9910 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9911 = cljs.core.seq.call(null,init_val_or_seq);
var i__9912 = 0;
var s__9913 = s__9911;
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____9914 = s__9913;
if(and__3937__auto____9914)
{return (i__9912 < size);
} else
{return and__3937__auto____9914;
}
})()))
{(a__9910[i__9912] = cljs.core.first.call(null,s__9913));
{
var G__9917 = (i__9912 + 1);
var G__9918 = cljs.core.next.call(null,s__9913);
i__9912 = G__9917;
s__9913 = G__9918;
continue;
}
} else
{return a__9910;
}
break;
}
} else
{var n__2560__auto____9915 = size;
var i__9916 = 0;
while(true){
if((i__9916 < n__2560__auto____9915))
{(a__9910[i__9916] = init_val_or_seq);
{
var G__9919 = (i__9916 + 1);
i__9916 = G__9919;
continue;
}
} else
{}
break;
}
return a__9910;
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
{var n__2560__auto____9932 = size;
var i__9933 = 0;
while(true){
if((i__9933 < n__2560__auto____9932))
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
{var n__2560__auto____9949 = size;
var i__9950 = 0;
while(true){
if((i__9950 < n__2560__auto____9949))
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
{var s__9958 = s;
var i__9959 = n;
var sum__9960 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____9961 = (i__9959 > 0);
if(and__3937__auto____9961)
{return cljs.core.seq.call(null,s__9958);
} else
{return and__3937__auto____9961;
}
})()))
{{
var G__9962 = cljs.core.next.call(null,s__9958);
var G__9963 = (i__9959 - 1);
var G__9964 = (sum__9960 + 1);
s__9958 = G__9962;
i__9959 = G__9963;
sum__9960 = G__9964;
continue;
}
} else
{return sum__9960;
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
var s__9969 = cljs.core.seq.call(null,x);
if(s__9969)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__9969))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__9969),concat.call(null,cljs.core.chunk_rest.call(null,s__9969),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9969),concat.call(null,cljs.core.rest.call(null,s__9969),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__9973__delegate = function (x,y,zs){
var cat__9972 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9971 = cljs.core.seq.call(null,xys);
if(xys__9971)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__9971))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__9971),cat.call(null,cljs.core.chunk_rest.call(null,xys__9971),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9971),cat.call(null,cljs.core.rest.call(null,xys__9971),zs));
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
return cat__9972.call(null,concat.call(null,x,y),zs);
};
var G__9973 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9973__delegate.call(this, x, y, zs);
};
G__9973.cljs$lang$maxFixedArity = 2;
G__9973.cljs$lang$applyTo = (function (arglist__9974){
var x = cljs.core.first(arglist__9974);
var y = cljs.core.first(cljs.core.next(arglist__9974));
var zs = cljs.core.rest(cljs.core.next(arglist__9974));
return G__9973__delegate(x, y, zs);
});
G__9973.cljs$lang$arity$variadic = G__9973__delegate;
return G__9973;
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
var G__9975__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9975 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9975__delegate.call(this, a, b, c, d, more);
};
G__9975.cljs$lang$maxFixedArity = 4;
G__9975.cljs$lang$applyTo = (function (arglist__9976){
var a = cljs.core.first(arglist__9976);
var b = cljs.core.first(cljs.core.next(arglist__9976));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9976)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9976))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9976))));
return G__9975__delegate(a, b, c, d, more);
});
G__9975.cljs$lang$arity$variadic = G__9975__delegate;
return G__9975;
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
var args__10018 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__10019 = cljs.core._first.call(null,args__10018);
var args__10020 = cljs.core._rest.call(null,args__10018);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__10019);
} else
{return f.call(null,a__10019);
}
} else
{var b__10021 = cljs.core._first.call(null,args__10020);
var args__10022 = cljs.core._rest.call(null,args__10020);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__10019,b__10021);
} else
{return f.call(null,a__10019,b__10021);
}
} else
{var c__10023 = cljs.core._first.call(null,args__10022);
var args__10024 = cljs.core._rest.call(null,args__10022);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__10019,b__10021,c__10023);
} else
{return f.call(null,a__10019,b__10021,c__10023);
}
} else
{var d__10025 = cljs.core._first.call(null,args__10024);
var args__10026 = cljs.core._rest.call(null,args__10024);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__10019,b__10021,c__10023,d__10025);
} else
{return f.call(null,a__10019,b__10021,c__10023,d__10025);
}
} else
{var e__10027 = cljs.core._first.call(null,args__10026);
var args__10028 = cljs.core._rest.call(null,args__10026);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__10019,b__10021,c__10023,d__10025,e__10027);
} else
{return f.call(null,a__10019,b__10021,c__10023,d__10025,e__10027);
}
} else
{var f__10029 = cljs.core._first.call(null,args__10028);
var args__10030 = cljs.core._rest.call(null,args__10028);
if((argc === 6))
{if(f__10029.cljs$lang$arity$6)
{return f__10029.cljs$lang$arity$6(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029);
}
} else
{var g__10031 = cljs.core._first.call(null,args__10030);
var args__10032 = cljs.core._rest.call(null,args__10030);
if((argc === 7))
{if(f__10029.cljs$lang$arity$7)
{return f__10029.cljs$lang$arity$7(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031);
}
} else
{var h__10033 = cljs.core._first.call(null,args__10032);
var args__10034 = cljs.core._rest.call(null,args__10032);
if((argc === 8))
{if(f__10029.cljs$lang$arity$8)
{return f__10029.cljs$lang$arity$8(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033);
}
} else
{var i__10035 = cljs.core._first.call(null,args__10034);
var args__10036 = cljs.core._rest.call(null,args__10034);
if((argc === 9))
{if(f__10029.cljs$lang$arity$9)
{return f__10029.cljs$lang$arity$9(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035);
}
} else
{var j__10037 = cljs.core._first.call(null,args__10036);
var args__10038 = cljs.core._rest.call(null,args__10036);
if((argc === 10))
{if(f__10029.cljs$lang$arity$10)
{return f__10029.cljs$lang$arity$10(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037);
}
} else
{var k__10039 = cljs.core._first.call(null,args__10038);
var args__10040 = cljs.core._rest.call(null,args__10038);
if((argc === 11))
{if(f__10029.cljs$lang$arity$11)
{return f__10029.cljs$lang$arity$11(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039);
}
} else
{var l__10041 = cljs.core._first.call(null,args__10040);
var args__10042 = cljs.core._rest.call(null,args__10040);
if((argc === 12))
{if(f__10029.cljs$lang$arity$12)
{return f__10029.cljs$lang$arity$12(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041);
}
} else
{var m__10043 = cljs.core._first.call(null,args__10042);
var args__10044 = cljs.core._rest.call(null,args__10042);
if((argc === 13))
{if(f__10029.cljs$lang$arity$13)
{return f__10029.cljs$lang$arity$13(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043);
}
} else
{var n__10045 = cljs.core._first.call(null,args__10044);
var args__10046 = cljs.core._rest.call(null,args__10044);
if((argc === 14))
{if(f__10029.cljs$lang$arity$14)
{return f__10029.cljs$lang$arity$14(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043,n__10045);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043,n__10045);
}
} else
{var o__10047 = cljs.core._first.call(null,args__10046);
var args__10048 = cljs.core._rest.call(null,args__10046);
if((argc === 15))
{if(f__10029.cljs$lang$arity$15)
{return f__10029.cljs$lang$arity$15(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043,n__10045,o__10047);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043,n__10045,o__10047);
}
} else
{var p__10049 = cljs.core._first.call(null,args__10048);
var args__10050 = cljs.core._rest.call(null,args__10048);
if((argc === 16))
{if(f__10029.cljs$lang$arity$16)
{return f__10029.cljs$lang$arity$16(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043,n__10045,o__10047,p__10049);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043,n__10045,o__10047,p__10049);
}
} else
{var q__10051 = cljs.core._first.call(null,args__10050);
var args__10052 = cljs.core._rest.call(null,args__10050);
if((argc === 17))
{if(f__10029.cljs$lang$arity$17)
{return f__10029.cljs$lang$arity$17(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043,n__10045,o__10047,p__10049,q__10051);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043,n__10045,o__10047,p__10049,q__10051);
}
} else
{var r__10053 = cljs.core._first.call(null,args__10052);
var args__10054 = cljs.core._rest.call(null,args__10052);
if((argc === 18))
{if(f__10029.cljs$lang$arity$18)
{return f__10029.cljs$lang$arity$18(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043,n__10045,o__10047,p__10049,q__10051,r__10053);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043,n__10045,o__10047,p__10049,q__10051,r__10053);
}
} else
{var s__10055 = cljs.core._first.call(null,args__10054);
var args__10056 = cljs.core._rest.call(null,args__10054);
if((argc === 19))
{if(f__10029.cljs$lang$arity$19)
{return f__10029.cljs$lang$arity$19(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043,n__10045,o__10047,p__10049,q__10051,r__10053,s__10055);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043,n__10045,o__10047,p__10049,q__10051,r__10053,s__10055);
}
} else
{var t__10057 = cljs.core._first.call(null,args__10056);
var args__10058 = cljs.core._rest.call(null,args__10056);
if((argc === 20))
{if(f__10029.cljs$lang$arity$20)
{return f__10029.cljs$lang$arity$20(a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043,n__10045,o__10047,p__10049,q__10051,r__10053,s__10055,t__10057);
} else
{return f__10029.call(null,a__10019,b__10021,c__10023,d__10025,e__10027,f__10029,g__10031,h__10033,i__10035,j__10037,k__10039,l__10041,m__10043,n__10045,o__10047,p__10049,q__10051,r__10053,s__10055,t__10057);
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
var fixed_arity__10073 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10074 = cljs.core.bounded_count.call(null,args,(fixed_arity__10073 + 1));
if((bc__10074 <= fixed_arity__10073))
{return cljs.core.apply_to.call(null,f,bc__10074,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__10075 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10076 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10077 = cljs.core.bounded_count.call(null,arglist__10075,(fixed_arity__10076 + 1));
if((bc__10077 <= fixed_arity__10076))
{return cljs.core.apply_to.call(null,f,bc__10077,arglist__10075);
} else
{return f.cljs$lang$applyTo(arglist__10075);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10075));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__10078 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10079 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10080 = cljs.core.bounded_count.call(null,arglist__10078,(fixed_arity__10079 + 1));
if((bc__10080 <= fixed_arity__10079))
{return cljs.core.apply_to.call(null,f,bc__10080,arglist__10078);
} else
{return f.cljs$lang$applyTo(arglist__10078);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10078));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__10081 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10082 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10083 = cljs.core.bounded_count.call(null,arglist__10081,(fixed_arity__10082 + 1));
if((bc__10083 <= fixed_arity__10082))
{return cljs.core.apply_to.call(null,f,bc__10083,arglist__10081);
} else
{return f.cljs$lang$applyTo(arglist__10081);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10081));
}
});
var apply__6 = (function() { 
var G__10087__delegate = function (f,a,b,c,d,args){
var arglist__10084 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10085 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10086 = cljs.core.bounded_count.call(null,arglist__10084,(fixed_arity__10085 + 1));
if((bc__10086 <= fixed_arity__10085))
{return cljs.core.apply_to.call(null,f,bc__10086,arglist__10084);
} else
{return f.cljs$lang$applyTo(arglist__10084);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10084));
}
};
var G__10087 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10087__delegate.call(this, f, a, b, c, d, args);
};
G__10087.cljs$lang$maxFixedArity = 5;
G__10087.cljs$lang$applyTo = (function (arglist__10088){
var f = cljs.core.first(arglist__10088);
var a = cljs.core.first(cljs.core.next(arglist__10088));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10088)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10088))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10088)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10088)))));
return G__10087__delegate(f, a, b, c, d, args);
});
G__10087.cljs$lang$arity$variadic = G__10087__delegate;
return G__10087;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10089){
var obj = cljs.core.first(arglist__10089);
var f = cljs.core.first(cljs.core.next(arglist__10089));
var args = cljs.core.rest(cljs.core.next(arglist__10089));
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
var G__10090__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10090 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10090__delegate.call(this, x, y, more);
};
G__10090.cljs$lang$maxFixedArity = 2;
G__10090.cljs$lang$applyTo = (function (arglist__10091){
var x = cljs.core.first(arglist__10091);
var y = cljs.core.first(cljs.core.next(arglist__10091));
var more = cljs.core.rest(cljs.core.next(arglist__10091));
return G__10090__delegate(x, y, more);
});
G__10090.cljs$lang$arity$variadic = G__10090__delegate;
return G__10090;
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
var G__10092 = pred;
var G__10093 = cljs.core.next.call(null,coll);
pred = G__10092;
coll = G__10093;
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
{var or__3939__auto____10095 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3939__auto____10095))
{return or__3939__auto____10095;
} else
{{
var G__10096 = pred;
var G__10097 = cljs.core.next.call(null,coll);
pred = G__10096;
coll = G__10097;
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
var G__10098 = null;
var G__10098__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10098__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10098__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10098__3 = (function() { 
var G__10099__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10099 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10099__delegate.call(this, x, y, zs);
};
G__10099.cljs$lang$maxFixedArity = 2;
G__10099.cljs$lang$applyTo = (function (arglist__10100){
var x = cljs.core.first(arglist__10100);
var y = cljs.core.first(cljs.core.next(arglist__10100));
var zs = cljs.core.rest(cljs.core.next(arglist__10100));
return G__10099__delegate(x, y, zs);
});
G__10099.cljs$lang$arity$variadic = G__10099__delegate;
return G__10099;
})()
;
G__10098 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__10098__0.call(this);
case 1:
return G__10098__1.call(this,x);
case 2:
return G__10098__2.call(this,x,y);
default:
return G__10098__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__10098.cljs$lang$maxFixedArity = 2;
G__10098.cljs$lang$applyTo = G__10098__3.cljs$lang$applyTo;
return G__10098;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10101__delegate = function (args){
return x;
};
var G__10101 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10101__delegate.call(this, args);
};
G__10101.cljs$lang$maxFixedArity = 0;
G__10101.cljs$lang$applyTo = (function (arglist__10102){
var args = cljs.core.seq(arglist__10102);;
return G__10101__delegate(args);
});
G__10101.cljs$lang$arity$variadic = G__10101__delegate;
return G__10101;
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
var G__10109 = null;
var G__10109__0 = (function (){
return f.call(null,g.call(null));
});
var G__10109__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10109__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10109__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10109__4 = (function() { 
var G__10110__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10110 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10110__delegate.call(this, x, y, z, args);
};
G__10110.cljs$lang$maxFixedArity = 3;
G__10110.cljs$lang$applyTo = (function (arglist__10111){
var x = cljs.core.first(arglist__10111);
var y = cljs.core.first(cljs.core.next(arglist__10111));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10111)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10111)));
return G__10110__delegate(x, y, z, args);
});
G__10110.cljs$lang$arity$variadic = G__10110__delegate;
return G__10110;
})()
;
G__10109 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10109__0.call(this);
case 1:
return G__10109__1.call(this,x);
case 2:
return G__10109__2.call(this,x,y);
case 3:
return G__10109__3.call(this,x,y,z);
default:
return G__10109__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10109.cljs$lang$maxFixedArity = 3;
G__10109.cljs$lang$applyTo = G__10109__4.cljs$lang$applyTo;
return G__10109;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__10112 = null;
var G__10112__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10112__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10112__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10112__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10112__4 = (function() { 
var G__10113__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10113 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10113__delegate.call(this, x, y, z, args);
};
G__10113.cljs$lang$maxFixedArity = 3;
G__10113.cljs$lang$applyTo = (function (arglist__10114){
var x = cljs.core.first(arglist__10114);
var y = cljs.core.first(cljs.core.next(arglist__10114));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10114)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10114)));
return G__10113__delegate(x, y, z, args);
});
G__10113.cljs$lang$arity$variadic = G__10113__delegate;
return G__10113;
})()
;
G__10112 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10112__0.call(this);
case 1:
return G__10112__1.call(this,x);
case 2:
return G__10112__2.call(this,x,y);
case 3:
return G__10112__3.call(this,x,y,z);
default:
return G__10112__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10112.cljs$lang$maxFixedArity = 3;
G__10112.cljs$lang$applyTo = G__10112__4.cljs$lang$applyTo;
return G__10112;
})()
});
var comp__4 = (function() { 
var G__10115__delegate = function (f1,f2,f3,fs){
var fs__10106 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__10116__delegate = function (args){
var ret__10107 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10106),args);
var fs__10108 = cljs.core.next.call(null,fs__10106);
while(true){
if(fs__10108)
{{
var G__10117 = cljs.core.first.call(null,fs__10108).call(null,ret__10107);
var G__10118 = cljs.core.next.call(null,fs__10108);
ret__10107 = G__10117;
fs__10108 = G__10118;
continue;
}
} else
{return ret__10107;
}
break;
}
};
var G__10116 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10116__delegate.call(this, args);
};
G__10116.cljs$lang$maxFixedArity = 0;
G__10116.cljs$lang$applyTo = (function (arglist__10119){
var args = cljs.core.seq(arglist__10119);;
return G__10116__delegate(args);
});
G__10116.cljs$lang$arity$variadic = G__10116__delegate;
return G__10116;
})()
;
};
var G__10115 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10115__delegate.call(this, f1, f2, f3, fs);
};
G__10115.cljs$lang$maxFixedArity = 3;
G__10115.cljs$lang$applyTo = (function (arglist__10120){
var f1 = cljs.core.first(arglist__10120);
var f2 = cljs.core.first(cljs.core.next(arglist__10120));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10120)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10120)));
return G__10115__delegate(f1, f2, f3, fs);
});
G__10115.cljs$lang$arity$variadic = G__10115__delegate;
return G__10115;
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
var G__10121__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
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
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__10123__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10123 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10123__delegate.call(this, args);
};
G__10123.cljs$lang$maxFixedArity = 0;
G__10123.cljs$lang$applyTo = (function (arglist__10124){
var args = cljs.core.seq(arglist__10124);;
return G__10123__delegate(args);
});
G__10123.cljs$lang$arity$variadic = G__10123__delegate;
return G__10123;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10125__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10125 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10125__delegate.call(this, args);
};
G__10125.cljs$lang$maxFixedArity = 0;
G__10125.cljs$lang$applyTo = (function (arglist__10126){
var args = cljs.core.seq(arglist__10126);;
return G__10125__delegate(args);
});
G__10125.cljs$lang$arity$variadic = G__10125__delegate;
return G__10125;
})()
;
});
var partial__5 = (function() { 
var G__10127__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10128__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10128 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10128__delegate.call(this, args);
};
G__10128.cljs$lang$maxFixedArity = 0;
G__10128.cljs$lang$applyTo = (function (arglist__10129){
var args = cljs.core.seq(arglist__10129);;
return G__10128__delegate(args);
});
G__10128.cljs$lang$arity$variadic = G__10128__delegate;
return G__10128;
})()
;
};
var G__10127 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10127__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10127.cljs$lang$maxFixedArity = 4;
G__10127.cljs$lang$applyTo = (function (arglist__10130){
var f = cljs.core.first(arglist__10130);
var arg1 = cljs.core.first(cljs.core.next(arglist__10130));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10130)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10130))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10130))));
return G__10127__delegate(f, arg1, arg2, arg3, more);
});
G__10127.cljs$lang$arity$variadic = G__10127__delegate;
return G__10127;
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
var G__10131 = null;
var G__10131__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__10131__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__10131__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__10131__4 = (function() { 
var G__10132__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__10132 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10132__delegate.call(this, a, b, c, ds);
};
G__10132.cljs$lang$maxFixedArity = 3;
G__10132.cljs$lang$applyTo = (function (arglist__10133){
var a = cljs.core.first(arglist__10133);
var b = cljs.core.first(cljs.core.next(arglist__10133));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10133)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10133)));
return G__10132__delegate(a, b, c, ds);
});
G__10132.cljs$lang$arity$variadic = G__10132__delegate;
return G__10132;
})()
;
G__10131 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__10131__1.call(this,a);
case 2:
return G__10131__2.call(this,a,b);
case 3:
return G__10131__3.call(this,a,b,c);
default:
return G__10131__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10131.cljs$lang$maxFixedArity = 3;
G__10131.cljs$lang$applyTo = G__10131__4.cljs$lang$applyTo;
return G__10131;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__10134 = null;
var G__10134__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10134__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__10134__4 = (function() { 
var G__10135__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__10135 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10135__delegate.call(this, a, b, c, ds);
};
G__10135.cljs$lang$maxFixedArity = 3;
G__10135.cljs$lang$applyTo = (function (arglist__10136){
var a = cljs.core.first(arglist__10136);
var b = cljs.core.first(cljs.core.next(arglist__10136));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10136)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10136)));
return G__10135__delegate(a, b, c, ds);
});
G__10135.cljs$lang$arity$variadic = G__10135__delegate;
return G__10135;
})()
;
G__10134 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__10134__2.call(this,a,b);
case 3:
return G__10134__3.call(this,a,b,c);
default:
return G__10134__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10134.cljs$lang$maxFixedArity = 3;
G__10134.cljs$lang$applyTo = G__10134__4.cljs$lang$applyTo;
return G__10134;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__10137 = null;
var G__10137__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10137__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__10137__4 = (function() { 
var G__10138__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__10138 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10138__delegate.call(this, a, b, c, ds);
};
G__10138.cljs$lang$maxFixedArity = 3;
G__10138.cljs$lang$applyTo = (function (arglist__10139){
var a = cljs.core.first(arglist__10139);
var b = cljs.core.first(cljs.core.next(arglist__10139));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10139)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10139)));
return G__10138__delegate(a, b, c, ds);
});
G__10138.cljs$lang$arity$variadic = G__10138__delegate;
return G__10138;
})()
;
G__10137 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__10137__2.call(this,a,b);
case 3:
return G__10137__3.call(this,a,b,c);
default:
return G__10137__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10137.cljs$lang$maxFixedArity = 3;
G__10137.cljs$lang$applyTo = G__10137__4.cljs$lang$applyTo;
return G__10137;
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
var mapi__10155 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____10163 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10163)
{var s__10164 = temp__4088__auto____10163;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10164))
{var c__10165 = cljs.core.chunk_first.call(null,s__10164);
var size__10166 = cljs.core.count.call(null,c__10165);
var b__10167 = cljs.core.chunk_buffer.call(null,size__10166);
var n__2560__auto____10168 = size__10166;
var i__10169 = 0;
while(true){
if((i__10169 < n__2560__auto____10168))
{cljs.core.chunk_append.call(null,b__10167,f.call(null,(idx + i__10169),cljs.core._nth.call(null,c__10165,i__10169)));
{
var G__10170 = (i__10169 + 1);
i__10169 = G__10170;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10167),mapi.call(null,(idx + size__10166),cljs.core.chunk_rest.call(null,s__10164)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10164)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__10164)));
}
} else
{return null;
}
}),null));
});
return mapi__10155.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____10180 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10180)
{var s__10181 = temp__4088__auto____10180;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10181))
{var c__10182 = cljs.core.chunk_first.call(null,s__10181);
var size__10183 = cljs.core.count.call(null,c__10182);
var b__10184 = cljs.core.chunk_buffer.call(null,size__10183);
var n__2560__auto____10185 = size__10183;
var i__10186 = 0;
while(true){
if((i__10186 < n__2560__auto____10185))
{var x__10187 = f.call(null,cljs.core._nth.call(null,c__10182,i__10186));
if((x__10187 == null))
{} else
{cljs.core.chunk_append.call(null,b__10184,x__10187);
}
{
var G__10189 = (i__10186 + 1);
i__10186 = G__10189;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10184),keep.call(null,f,cljs.core.chunk_rest.call(null,s__10181)));
} else
{var x__10188 = f.call(null,cljs.core.first.call(null,s__10181));
if((x__10188 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__10181));
} else
{return cljs.core.cons.call(null,x__10188,keep.call(null,f,cljs.core.rest.call(null,s__10181)));
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
var keepi__10215 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____10225 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10225)
{var s__10226 = temp__4088__auto____10225;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10226))
{var c__10227 = cljs.core.chunk_first.call(null,s__10226);
var size__10228 = cljs.core.count.call(null,c__10227);
var b__10229 = cljs.core.chunk_buffer.call(null,size__10228);
var n__2560__auto____10230 = size__10228;
var i__10231 = 0;
while(true){
if((i__10231 < n__2560__auto____10230))
{var x__10232 = f.call(null,(idx + i__10231),cljs.core._nth.call(null,c__10227,i__10231));
if((x__10232 == null))
{} else
{cljs.core.chunk_append.call(null,b__10229,x__10232);
}
{
var G__10234 = (i__10231 + 1);
i__10231 = G__10234;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10229),keepi.call(null,(idx + size__10228),cljs.core.chunk_rest.call(null,s__10226)));
} else
{var x__10233 = f.call(null,idx,cljs.core.first.call(null,s__10226));
if((x__10233 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__10226));
} else
{return cljs.core.cons.call(null,x__10233,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__10226)));
}
}
} else
{return null;
}
}),null));
});
return keepi__10215.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10320 = p.call(null,x);
if(cljs.core.truth_(and__3937__auto____10320))
{return p.call(null,y);
} else
{return and__3937__auto____10320;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10321 = p.call(null,x);
if(cljs.core.truth_(and__3937__auto____10321))
{var and__3937__auto____10322 = p.call(null,y);
if(cljs.core.truth_(and__3937__auto____10322))
{return p.call(null,z);
} else
{return and__3937__auto____10322;
}
} else
{return and__3937__auto____10321;
}
})());
});
var ep1__4 = (function() { 
var G__10391__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10323 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3937__auto____10323))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3937__auto____10323;
}
})());
};
var G__10391 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10391__delegate.call(this, x, y, z, args);
};
G__10391.cljs$lang$maxFixedArity = 3;
G__10391.cljs$lang$applyTo = (function (arglist__10392){
var x = cljs.core.first(arglist__10392);
var y = cljs.core.first(cljs.core.next(arglist__10392));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10392)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10392)));
return G__10391__delegate(x, y, z, args);
});
G__10391.cljs$lang$arity$variadic = G__10391__delegate;
return G__10391;
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
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10335 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10335))
{return p2.call(null,x);
} else
{return and__3937__auto____10335;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10336 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10336))
{var and__3937__auto____10337 = p1.call(null,y);
if(cljs.core.truth_(and__3937__auto____10337))
{var and__3937__auto____10338 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10338))
{return p2.call(null,y);
} else
{return and__3937__auto____10338;
}
} else
{return and__3937__auto____10337;
}
} else
{return and__3937__auto____10336;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10339 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10339))
{var and__3937__auto____10340 = p1.call(null,y);
if(cljs.core.truth_(and__3937__auto____10340))
{var and__3937__auto____10341 = p1.call(null,z);
if(cljs.core.truth_(and__3937__auto____10341))
{var and__3937__auto____10342 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10342))
{var and__3937__auto____10343 = p2.call(null,y);
if(cljs.core.truth_(and__3937__auto____10343))
{return p2.call(null,z);
} else
{return and__3937__auto____10343;
}
} else
{return and__3937__auto____10342;
}
} else
{return and__3937__auto____10341;
}
} else
{return and__3937__auto____10340;
}
} else
{return and__3937__auto____10339;
}
})());
});
var ep2__4 = (function() { 
var G__10393__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10344 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3937__auto____10344))
{return cljs.core.every_QMARK_.call(null,(function (p1__10190_SHARP_){
var and__3937__auto____10345 = p1.call(null,p1__10190_SHARP_);
if(cljs.core.truth_(and__3937__auto____10345))
{return p2.call(null,p1__10190_SHARP_);
} else
{return and__3937__auto____10345;
}
}),args);
} else
{return and__3937__auto____10344;
}
})());
};
var G__10393 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10393__delegate.call(this, x, y, z, args);
};
G__10393.cljs$lang$maxFixedArity = 3;
G__10393.cljs$lang$applyTo = (function (arglist__10394){
var x = cljs.core.first(arglist__10394);
var y = cljs.core.first(cljs.core.next(arglist__10394));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10394)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10394)));
return G__10393__delegate(x, y, z, args);
});
G__10393.cljs$lang$arity$variadic = G__10393__delegate;
return G__10393;
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
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10364 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10364))
{var and__3937__auto____10365 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10365))
{return p3.call(null,x);
} else
{return and__3937__auto____10365;
}
} else
{return and__3937__auto____10364;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10366 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10366))
{var and__3937__auto____10367 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10367))
{var and__3937__auto____10368 = p3.call(null,x);
if(cljs.core.truth_(and__3937__auto____10368))
{var and__3937__auto____10369 = p1.call(null,y);
if(cljs.core.truth_(and__3937__auto____10369))
{var and__3937__auto____10370 = p2.call(null,y);
if(cljs.core.truth_(and__3937__auto____10370))
{return p3.call(null,y);
} else
{return and__3937__auto____10370;
}
} else
{return and__3937__auto____10369;
}
} else
{return and__3937__auto____10368;
}
} else
{return and__3937__auto____10367;
}
} else
{return and__3937__auto____10366;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10371 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10371))
{var and__3937__auto____10372 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10372))
{var and__3937__auto____10373 = p3.call(null,x);
if(cljs.core.truth_(and__3937__auto____10373))
{var and__3937__auto____10374 = p1.call(null,y);
if(cljs.core.truth_(and__3937__auto____10374))
{var and__3937__auto____10375 = p2.call(null,y);
if(cljs.core.truth_(and__3937__auto____10375))
{var and__3937__auto____10376 = p3.call(null,y);
if(cljs.core.truth_(and__3937__auto____10376))
{var and__3937__auto____10377 = p1.call(null,z);
if(cljs.core.truth_(and__3937__auto____10377))
{var and__3937__auto____10378 = p2.call(null,z);
if(cljs.core.truth_(and__3937__auto____10378))
{return p3.call(null,z);
} else
{return and__3937__auto____10378;
}
} else
{return and__3937__auto____10377;
}
} else
{return and__3937__auto____10376;
}
} else
{return and__3937__auto____10375;
}
} else
{return and__3937__auto____10374;
}
} else
{return and__3937__auto____10373;
}
} else
{return and__3937__auto____10372;
}
} else
{return and__3937__auto____10371;
}
})());
});
var ep3__4 = (function() { 
var G__10395__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10379 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3937__auto____10379))
{return cljs.core.every_QMARK_.call(null,(function (p1__10191_SHARP_){
var and__3937__auto____10380 = p1.call(null,p1__10191_SHARP_);
if(cljs.core.truth_(and__3937__auto____10380))
{var and__3937__auto____10381 = p2.call(null,p1__10191_SHARP_);
if(cljs.core.truth_(and__3937__auto____10381))
{return p3.call(null,p1__10191_SHARP_);
} else
{return and__3937__auto____10381;
}
} else
{return and__3937__auto____10380;
}
}),args);
} else
{return and__3937__auto____10379;
}
})());
};
var G__10395 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10395__delegate.call(this, x, y, z, args);
};
G__10395.cljs$lang$maxFixedArity = 3;
G__10395.cljs$lang$applyTo = (function (arglist__10396){
var x = cljs.core.first(arglist__10396);
var y = cljs.core.first(cljs.core.next(arglist__10396));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10396)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10396)));
return G__10395__delegate(x, y, z, args);
});
G__10395.cljs$lang$arity$variadic = G__10395__delegate;
return G__10395;
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
var G__10397__delegate = function (p1,p2,p3,ps){
var ps__10382 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10192_SHARP_){
return p1__10192_SHARP_.call(null,x);
}),ps__10382);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10193_SHARP_){
var and__3937__auto____10387 = p1__10193_SHARP_.call(null,x);
if(cljs.core.truth_(and__3937__auto____10387))
{return p1__10193_SHARP_.call(null,y);
} else
{return and__3937__auto____10387;
}
}),ps__10382);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10194_SHARP_){
var and__3937__auto____10388 = p1__10194_SHARP_.call(null,x);
if(cljs.core.truth_(and__3937__auto____10388))
{var and__3937__auto____10389 = p1__10194_SHARP_.call(null,y);
if(cljs.core.truth_(and__3937__auto____10389))
{return p1__10194_SHARP_.call(null,z);
} else
{return and__3937__auto____10389;
}
} else
{return and__3937__auto____10388;
}
}),ps__10382);
});
var epn__4 = (function() { 
var G__10398__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10390 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3937__auto____10390))
{return cljs.core.every_QMARK_.call(null,(function (p1__10195_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10195_SHARP_,args);
}),ps__10382);
} else
{return and__3937__auto____10390;
}
})());
};
var G__10398 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10398__delegate.call(this, x, y, z, args);
};
G__10398.cljs$lang$maxFixedArity = 3;
G__10398.cljs$lang$applyTo = (function (arglist__10399){
var x = cljs.core.first(arglist__10399);
var y = cljs.core.first(cljs.core.next(arglist__10399));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10399)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10399)));
return G__10398__delegate(x, y, z, args);
});
G__10398.cljs$lang$arity$variadic = G__10398__delegate;
return G__10398;
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
var G__10397 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10397__delegate.call(this, p1, p2, p3, ps);
};
G__10397.cljs$lang$maxFixedArity = 3;
G__10397.cljs$lang$applyTo = (function (arglist__10400){
var p1 = cljs.core.first(arglist__10400);
var p2 = cljs.core.first(cljs.core.next(arglist__10400));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10400)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10400)));
return G__10397__delegate(p1, p2, p3, ps);
});
G__10397.cljs$lang$arity$variadic = G__10397__delegate;
return G__10397;
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
var or__3939__auto____10481 = p.call(null,x);
if(cljs.core.truth_(or__3939__auto____10481))
{return or__3939__auto____10481;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3939__auto____10482 = p.call(null,x);
if(cljs.core.truth_(or__3939__auto____10482))
{return or__3939__auto____10482;
} else
{var or__3939__auto____10483 = p.call(null,y);
if(cljs.core.truth_(or__3939__auto____10483))
{return or__3939__auto____10483;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__10552__delegate = function (x,y,z,args){
var or__3939__auto____10484 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3939__auto____10484))
{return or__3939__auto____10484;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10552 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10552__delegate.call(this, x, y, z, args);
};
G__10552.cljs$lang$maxFixedArity = 3;
G__10552.cljs$lang$applyTo = (function (arglist__10553){
var x = cljs.core.first(arglist__10553);
var y = cljs.core.first(cljs.core.next(arglist__10553));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10553)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10553)));
return G__10552__delegate(x, y, z, args);
});
G__10552.cljs$lang$arity$variadic = G__10552__delegate;
return G__10552;
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
var or__3939__auto____10496 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10496))
{return or__3939__auto____10496;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3939__auto____10497 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10497))
{return or__3939__auto____10497;
} else
{var or__3939__auto____10498 = p1.call(null,y);
if(cljs.core.truth_(or__3939__auto____10498))
{return or__3939__auto____10498;
} else
{var or__3939__auto____10499 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10499))
{return or__3939__auto____10499;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3939__auto____10500 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10500))
{return or__3939__auto____10500;
} else
{var or__3939__auto____10501 = p1.call(null,y);
if(cljs.core.truth_(or__3939__auto____10501))
{return or__3939__auto____10501;
} else
{var or__3939__auto____10502 = p1.call(null,z);
if(cljs.core.truth_(or__3939__auto____10502))
{return or__3939__auto____10502;
} else
{var or__3939__auto____10503 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10503))
{return or__3939__auto____10503;
} else
{var or__3939__auto____10504 = p2.call(null,y);
if(cljs.core.truth_(or__3939__auto____10504))
{return or__3939__auto____10504;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__10554__delegate = function (x,y,z,args){
var or__3939__auto____10505 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3939__auto____10505))
{return or__3939__auto____10505;
} else
{return cljs.core.some.call(null,(function (p1__10235_SHARP_){
var or__3939__auto____10506 = p1.call(null,p1__10235_SHARP_);
if(cljs.core.truth_(or__3939__auto____10506))
{return or__3939__auto____10506;
} else
{return p2.call(null,p1__10235_SHARP_);
}
}),args);
}
};
var G__10554 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10554__delegate.call(this, x, y, z, args);
};
G__10554.cljs$lang$maxFixedArity = 3;
G__10554.cljs$lang$applyTo = (function (arglist__10555){
var x = cljs.core.first(arglist__10555);
var y = cljs.core.first(cljs.core.next(arglist__10555));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10555)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10555)));
return G__10554__delegate(x, y, z, args);
});
G__10554.cljs$lang$arity$variadic = G__10554__delegate;
return G__10554;
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
var or__3939__auto____10525 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10525))
{return or__3939__auto____10525;
} else
{var or__3939__auto____10526 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10526))
{return or__3939__auto____10526;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3939__auto____10527 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10527))
{return or__3939__auto____10527;
} else
{var or__3939__auto____10528 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10528))
{return or__3939__auto____10528;
} else
{var or__3939__auto____10529 = p3.call(null,x);
if(cljs.core.truth_(or__3939__auto____10529))
{return or__3939__auto____10529;
} else
{var or__3939__auto____10530 = p1.call(null,y);
if(cljs.core.truth_(or__3939__auto____10530))
{return or__3939__auto____10530;
} else
{var or__3939__auto____10531 = p2.call(null,y);
if(cljs.core.truth_(or__3939__auto____10531))
{return or__3939__auto____10531;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3939__auto____10532 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10532))
{return or__3939__auto____10532;
} else
{var or__3939__auto____10533 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10533))
{return or__3939__auto____10533;
} else
{var or__3939__auto____10534 = p3.call(null,x);
if(cljs.core.truth_(or__3939__auto____10534))
{return or__3939__auto____10534;
} else
{var or__3939__auto____10535 = p1.call(null,y);
if(cljs.core.truth_(or__3939__auto____10535))
{return or__3939__auto____10535;
} else
{var or__3939__auto____10536 = p2.call(null,y);
if(cljs.core.truth_(or__3939__auto____10536))
{return or__3939__auto____10536;
} else
{var or__3939__auto____10537 = p3.call(null,y);
if(cljs.core.truth_(or__3939__auto____10537))
{return or__3939__auto____10537;
} else
{var or__3939__auto____10538 = p1.call(null,z);
if(cljs.core.truth_(or__3939__auto____10538))
{return or__3939__auto____10538;
} else
{var or__3939__auto____10539 = p2.call(null,z);
if(cljs.core.truth_(or__3939__auto____10539))
{return or__3939__auto____10539;
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
var G__10556__delegate = function (x,y,z,args){
var or__3939__auto____10540 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3939__auto____10540))
{return or__3939__auto____10540;
} else
{return cljs.core.some.call(null,(function (p1__10236_SHARP_){
var or__3939__auto____10541 = p1.call(null,p1__10236_SHARP_);
if(cljs.core.truth_(or__3939__auto____10541))
{return or__3939__auto____10541;
} else
{var or__3939__auto____10542 = p2.call(null,p1__10236_SHARP_);
if(cljs.core.truth_(or__3939__auto____10542))
{return or__3939__auto____10542;
} else
{return p3.call(null,p1__10236_SHARP_);
}
}
}),args);
}
};
var G__10556 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10556__delegate.call(this, x, y, z, args);
};
G__10556.cljs$lang$maxFixedArity = 3;
G__10556.cljs$lang$applyTo = (function (arglist__10557){
var x = cljs.core.first(arglist__10557);
var y = cljs.core.first(cljs.core.next(arglist__10557));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10557)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10557)));
return G__10556__delegate(x, y, z, args);
});
G__10556.cljs$lang$arity$variadic = G__10556__delegate;
return G__10556;
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
var G__10558__delegate = function (p1,p2,p3,ps){
var ps__10543 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__10237_SHARP_){
return p1__10237_SHARP_.call(null,x);
}),ps__10543);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10238_SHARP_){
var or__3939__auto____10548 = p1__10238_SHARP_.call(null,x);
if(cljs.core.truth_(or__3939__auto____10548))
{return or__3939__auto____10548;
} else
{return p1__10238_SHARP_.call(null,y);
}
}),ps__10543);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10239_SHARP_){
var or__3939__auto____10549 = p1__10239_SHARP_.call(null,x);
if(cljs.core.truth_(or__3939__auto____10549))
{return or__3939__auto____10549;
} else
{var or__3939__auto____10550 = p1__10239_SHARP_.call(null,y);
if(cljs.core.truth_(or__3939__auto____10550))
{return or__3939__auto____10550;
} else
{return p1__10239_SHARP_.call(null,z);
}
}
}),ps__10543);
});
var spn__4 = (function() { 
var G__10559__delegate = function (x,y,z,args){
var or__3939__auto____10551 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3939__auto____10551))
{return or__3939__auto____10551;
} else
{return cljs.core.some.call(null,(function (p1__10240_SHARP_){
return cljs.core.some.call(null,p1__10240_SHARP_,args);
}),ps__10543);
}
};
var G__10559 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10559__delegate.call(this, x, y, z, args);
};
G__10559.cljs$lang$maxFixedArity = 3;
G__10559.cljs$lang$applyTo = (function (arglist__10560){
var x = cljs.core.first(arglist__10560);
var y = cljs.core.first(cljs.core.next(arglist__10560));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10560)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10560)));
return G__10559__delegate(x, y, z, args);
});
G__10559.cljs$lang$arity$variadic = G__10559__delegate;
return G__10559;
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
var G__10558 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10558__delegate.call(this, p1, p2, p3, ps);
};
G__10558.cljs$lang$maxFixedArity = 3;
G__10558.cljs$lang$applyTo = (function (arglist__10561){
var p1 = cljs.core.first(arglist__10561);
var p2 = cljs.core.first(cljs.core.next(arglist__10561));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10561)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10561)));
return G__10558__delegate(p1, p2, p3, ps);
});
G__10558.cljs$lang$arity$variadic = G__10558__delegate;
return G__10558;
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
var temp__4088__auto____10580 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10580)
{var s__10581 = temp__4088__auto____10580;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10581))
{var c__10582 = cljs.core.chunk_first.call(null,s__10581);
var size__10583 = cljs.core.count.call(null,c__10582);
var b__10584 = cljs.core.chunk_buffer.call(null,size__10583);
var n__2560__auto____10585 = size__10583;
var i__10586 = 0;
while(true){
if((i__10586 < n__2560__auto____10585))
{cljs.core.chunk_append.call(null,b__10584,f.call(null,cljs.core._nth.call(null,c__10582,i__10586)));
{
var G__10598 = (i__10586 + 1);
i__10586 = G__10598;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10584),map.call(null,f,cljs.core.chunk_rest.call(null,s__10581)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__10581)),map.call(null,f,cljs.core.rest.call(null,s__10581)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10587 = cljs.core.seq.call(null,c1);
var s2__10588 = cljs.core.seq.call(null,c2);
if((function (){var and__3937__auto____10589 = s1__10587;
if(and__3937__auto____10589)
{return s2__10588;
} else
{return and__3937__auto____10589;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10587),cljs.core.first.call(null,s2__10588)),map.call(null,f,cljs.core.rest.call(null,s1__10587),cljs.core.rest.call(null,s2__10588)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10590 = cljs.core.seq.call(null,c1);
var s2__10591 = cljs.core.seq.call(null,c2);
var s3__10592 = cljs.core.seq.call(null,c3);
if((function (){var and__3937__auto____10593 = s1__10590;
if(and__3937__auto____10593)
{var and__3937__auto____10594 = s2__10591;
if(and__3937__auto____10594)
{return s3__10592;
} else
{return and__3937__auto____10594;
}
} else
{return and__3937__auto____10593;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10590),cljs.core.first.call(null,s2__10591),cljs.core.first.call(null,s3__10592)),map.call(null,f,cljs.core.rest.call(null,s1__10590),cljs.core.rest.call(null,s2__10591),cljs.core.rest.call(null,s3__10592)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__10599__delegate = function (f,c1,c2,c3,colls){
var step__10597 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10596 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10596))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__10596),step.call(null,map.call(null,cljs.core.rest,ss__10596)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__10401_SHARP_){
return cljs.core.apply.call(null,f,p1__10401_SHARP_);
}),step__10597.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__10599 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10599__delegate.call(this, f, c1, c2, c3, colls);
};
G__10599.cljs$lang$maxFixedArity = 4;
G__10599.cljs$lang$applyTo = (function (arglist__10600){
var f = cljs.core.first(arglist__10600);
var c1 = cljs.core.first(cljs.core.next(arglist__10600));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10600)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10600))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10600))));
return G__10599__delegate(f, c1, c2, c3, colls);
});
G__10599.cljs$lang$arity$variadic = G__10599__delegate;
return G__10599;
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
{var temp__4088__auto____10603 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10603)
{var s__10604 = temp__4088__auto____10603;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10604),take.call(null,(n - 1),cljs.core.rest.call(null,s__10604)));
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
var step__10610 = (function (n,coll){
while(true){
var s__10608 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3937__auto____10609 = (n > 0);
if(and__3937__auto____10609)
{return s__10608;
} else
{return and__3937__auto____10609;
}
})()))
{{
var G__10611 = (n - 1);
var G__10612 = cljs.core.rest.call(null,s__10608);
n = G__10611;
coll = G__10612;
continue;
}
} else
{return s__10608;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10610.call(null,n,coll);
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
var s__10615 = cljs.core.seq.call(null,coll);
var lead__10616 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__10616)
{{
var G__10617 = cljs.core.next.call(null,s__10615);
var G__10618 = cljs.core.next.call(null,lead__10616);
s__10615 = G__10617;
lead__10616 = G__10618;
continue;
}
} else
{return s__10615;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__10624 = (function (pred,coll){
while(true){
var s__10622 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3937__auto____10623 = s__10622;
if(and__3937__auto____10623)
{return pred.call(null,cljs.core.first.call(null,s__10622));
} else
{return and__3937__auto____10623;
}
})()))
{{
var G__10625 = pred;
var G__10626 = cljs.core.rest.call(null,s__10622);
pred = G__10625;
coll = G__10626;
continue;
}
} else
{return s__10622;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10624.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____10629 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10629)
{var s__10630 = temp__4088__auto____10629;
return cljs.core.concat.call(null,s__10630,cycle.call(null,s__10630));
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
var s1__10635 = cljs.core.seq.call(null,c1);
var s2__10636 = cljs.core.seq.call(null,c2);
if((function (){var and__3937__auto____10637 = s1__10635;
if(and__3937__auto____10637)
{return s2__10636;
} else
{return and__3937__auto____10637;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__10635),cljs.core.cons.call(null,cljs.core.first.call(null,s2__10636),interleave.call(null,cljs.core.rest.call(null,s1__10635),cljs.core.rest.call(null,s2__10636))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__10639__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10638 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10638))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__10638),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__10638)));
} else
{return null;
}
}),null));
};
var G__10639 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10639__delegate.call(this, c1, c2, colls);
};
G__10639.cljs$lang$maxFixedArity = 2;
G__10639.cljs$lang$applyTo = (function (arglist__10640){
var c1 = cljs.core.first(arglist__10640);
var c2 = cljs.core.first(cljs.core.next(arglist__10640));
var colls = cljs.core.rest(cljs.core.next(arglist__10640));
return G__10639__delegate(c1, c2, colls);
});
G__10639.cljs$lang$arity$variadic = G__10639__delegate;
return G__10639;
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
var cat__10650 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4086__auto____10648 = cljs.core.seq.call(null,coll);
if(temp__4086__auto____10648)
{var coll__10649 = temp__4086__auto____10648;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__10649),cat.call(null,cljs.core.rest.call(null,coll__10649),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__10650.call(null,null,colls);
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
var G__10651__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__10651 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10651__delegate.call(this, f, coll, colls);
};
G__10651.cljs$lang$maxFixedArity = 2;
G__10651.cljs$lang$applyTo = (function (arglist__10652){
var f = cljs.core.first(arglist__10652);
var coll = cljs.core.first(cljs.core.next(arglist__10652));
var colls = cljs.core.rest(cljs.core.next(arglist__10652));
return G__10651__delegate(f, coll, colls);
});
G__10651.cljs$lang$arity$variadic = G__10651__delegate;
return G__10651;
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
var temp__4088__auto____10662 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10662)
{var s__10663 = temp__4088__auto____10662;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10663))
{var c__10664 = cljs.core.chunk_first.call(null,s__10663);
var size__10665 = cljs.core.count.call(null,c__10664);
var b__10666 = cljs.core.chunk_buffer.call(null,size__10665);
var n__2560__auto____10667 = size__10665;
var i__10668 = 0;
while(true){
if((i__10668 < n__2560__auto____10667))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__10664,i__10668))))
{cljs.core.chunk_append.call(null,b__10666,cljs.core._nth.call(null,c__10664,i__10668));
} else
{}
{
var G__10671 = (i__10668 + 1);
i__10668 = G__10671;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10666),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__10663)));
} else
{var f__10669 = cljs.core.first.call(null,s__10663);
var r__10670 = cljs.core.rest.call(null,s__10663);
if(cljs.core.truth_(pred.call(null,f__10669)))
{return cljs.core.cons.call(null,f__10669,filter.call(null,pred,r__10670));
} else
{return filter.call(null,pred,r__10670);
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
var walk__10674 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__10674.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__10672_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__10672_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__10678__10679 = to;
if(G__10678__10679)
{if((function (){var or__3939__auto____10680 = (G__10678__10679.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3939__auto____10680)
{return or__3939__auto____10680;
} else
{return G__10678__10679.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__10678__10679.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10678__10679);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10678__10679);
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
var G__10681__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__10681 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10681__delegate.call(this, f, c1, c2, c3, colls);
};
G__10681.cljs$lang$maxFixedArity = 4;
G__10681.cljs$lang$applyTo = (function (arglist__10682){
var f = cljs.core.first(arglist__10682);
var c1 = cljs.core.first(cljs.core.next(arglist__10682));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10682)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10682))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10682))));
return G__10681__delegate(f, c1, c2, c3, colls);
});
G__10681.cljs$lang$arity$variadic = G__10681__delegate;
return G__10681;
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
var temp__4088__auto____10689 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10689)
{var s__10690 = temp__4088__auto____10689;
var p__10691 = cljs.core.take.call(null,n,s__10690);
if((n === cljs.core.count.call(null,p__10691)))
{return cljs.core.cons.call(null,p__10691,partition.call(null,n,step,cljs.core.drop.call(null,step,s__10690)));
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
var temp__4088__auto____10692 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10692)
{var s__10693 = temp__4088__auto____10692;
var p__10694 = cljs.core.take.call(null,n,s__10693);
if((n === cljs.core.count.call(null,p__10694)))
{return cljs.core.cons.call(null,p__10694,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__10693)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__10694,pad)));
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
var sentinel__10699 = cljs.core.lookup_sentinel;
var m__10700 = m;
var ks__10701 = cljs.core.seq.call(null,ks);
while(true){
if(ks__10701)
{var m__10702 = cljs.core._lookup.call(null,m__10700,cljs.core.first.call(null,ks__10701),sentinel__10699);
if((sentinel__10699 === m__10702))
{return not_found;
} else
{{
var G__10703 = sentinel__10699;
var G__10704 = m__10702;
var G__10705 = cljs.core.next.call(null,ks__10701);
sentinel__10699 = G__10703;
m__10700 = G__10704;
ks__10701 = G__10705;
continue;
}
}
} else
{return m__10700;
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
cljs.core.assoc_in = (function assoc_in(m,p__10706,v){
var vec__10711__10712 = p__10706;
var k__10713 = cljs.core.nth.call(null,vec__10711__10712,0,null);
var ks__10714 = cljs.core.nthnext.call(null,vec__10711__10712,1);
if(cljs.core.truth_(ks__10714))
{return cljs.core.assoc.call(null,m,k__10713,assoc_in.call(null,cljs.core._lookup.call(null,m,k__10713,null),ks__10714,v));
} else
{return cljs.core.assoc.call(null,m,k__10713,v);
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
var update_in__delegate = function (m,p__10715,f,args){
var vec__10720__10721 = p__10715;
var k__10722 = cljs.core.nth.call(null,vec__10720__10721,0,null);
var ks__10723 = cljs.core.nthnext.call(null,vec__10720__10721,1);
if(cljs.core.truth_(ks__10723))
{return cljs.core.assoc.call(null,m,k__10722,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__10722,null),ks__10723,f,args));
} else
{return cljs.core.assoc.call(null,m,k__10722,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__10722,null),args));
}
};
var update_in = function (m,p__10715,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__10715, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__10724){
var m = cljs.core.first(arglist__10724);
var p__10715 = cljs.core.first(cljs.core.next(arglist__10724));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10724)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10724)));
return update_in__delegate(m, p__10715, f, args);
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
var this__10727 = this;
var h__2225__auto____10728 = this__10727.__hash;
if(!((h__2225__auto____10728 == null)))
{return h__2225__auto____10728;
} else
{var h__2225__auto____10729 = cljs.core.hash_coll.call(null,coll);
this__10727.__hash = h__2225__auto____10729;
return h__2225__auto____10729;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10730 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10731 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10732 = this;
var new_array__10733 = this__10732.array.slice();
(new_array__10733[k] = v);
return (new cljs.core.Vector(this__10732.meta,new_array__10733,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__10764 = null;
var G__10764__2 = (function (this_sym10734,k){
var this__10736 = this;
var this_sym10734__10737 = this;
var coll__10738 = this_sym10734__10737;
return coll__10738.cljs$core$ILookup$_lookup$arity$2(coll__10738,k);
});
var G__10764__3 = (function (this_sym10735,k,not_found){
var this__10736 = this;
var this_sym10735__10739 = this;
var coll__10740 = this_sym10735__10739;
return coll__10740.cljs$core$ILookup$_lookup$arity$3(coll__10740,k,not_found);
});
G__10764 = function(this_sym10735,k,not_found){
switch(arguments.length){
case 2:
return G__10764__2.call(this,this_sym10735,k);
case 3:
return G__10764__3.call(this,this_sym10735,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10764;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym10725,args10726){
var this__10741 = this;
return this_sym10725.call.apply(this_sym10725,[this_sym10725].concat(args10726.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10742 = this;
var new_array__10743 = this__10742.array.slice();
new_array__10743.push(o);
return (new cljs.core.Vector(this__10742.meta,new_array__10743,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__10744 = this;
var this__10745 = this;
return cljs.core.pr_str.call(null,this__10745);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10746 = this;
return cljs.core.ci_reduce.call(null,this__10746.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10747 = this;
return cljs.core.ci_reduce.call(null,this__10747.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10748 = this;
if((this__10748.array.length > 0))
{var vector_seq__10749 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__10748.array.length))
{return cljs.core.cons.call(null,(this__10748.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__10749.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10750 = this;
return this__10750.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10751 = this;
var count__10752 = this__10751.array.length;
if((count__10752 > 0))
{return (this__10751.array[(count__10752 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10753 = this;
if((this__10753.array.length > 0))
{var new_array__10754 = this__10753.array.slice();
new_array__10754.pop();
return (new cljs.core.Vector(this__10753.meta,new_array__10754,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10755 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10756 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10757 = this;
return (new cljs.core.Vector(meta,this__10757.array,this__10757.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10758 = this;
return this__10758.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10759 = this;
if((function (){var and__3937__auto____10760 = (0 <= n);
if(and__3937__auto____10760)
{return (n < this__10759.array.length);
} else
{return and__3937__auto____10760;
}
})())
{return (this__10759.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10761 = this;
if((function (){var and__3937__auto____10762 = (0 <= n);
if(and__3937__auto____10762)
{return (n < this__10761.array.length);
} else
{return and__3937__auto____10762;
}
})())
{return (this__10761.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10763 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10763.meta);
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
var cnt__10766 = pv.cnt;
if((cnt__10766 < 32))
{return 0;
} else
{return (((cnt__10766 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__10772 = level;
var ret__10773 = node;
while(true){
if((ll__10772 === 0))
{return ret__10773;
} else
{var embed__10774 = ret__10773;
var r__10775 = cljs.core.pv_fresh_node.call(null,edit);
var ___10776 = cljs.core.pv_aset.call(null,r__10775,0,embed__10774);
{
var G__10777 = (ll__10772 - 5);
var G__10778 = r__10775;
ll__10772 = G__10777;
ret__10773 = G__10778;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__10784 = cljs.core.pv_clone_node.call(null,parent);
var subidx__10785 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__10784,subidx__10785,tailnode);
return ret__10784;
} else
{var child__10786 = cljs.core.pv_aget.call(null,parent,subidx__10785);
if(!((child__10786 == null)))
{var node_to_insert__10787 = push_tail.call(null,pv,(level - 5),child__10786,tailnode);
cljs.core.pv_aset.call(null,ret__10784,subidx__10785,node_to_insert__10787);
return ret__10784;
} else
{var node_to_insert__10788 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__10784,subidx__10785,node_to_insert__10788);
return ret__10784;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3937__auto____10792 = (0 <= i);
if(and__3937__auto____10792)
{return (i < pv.cnt);
} else
{return and__3937__auto____10792;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__10793 = pv.root;
var level__10794 = pv.shift;
while(true){
if((level__10794 > 0))
{{
var G__10795 = cljs.core.pv_aget.call(null,node__10793,((i >>> level__10794) & 31));
var G__10796 = (level__10794 - 5);
node__10793 = G__10795;
level__10794 = G__10796;
continue;
}
} else
{return node__10793.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__10799 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__10799,(i & 31),val);
return ret__10799;
} else
{var subidx__10800 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10799,subidx__10800,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10800),i,val));
return ret__10799;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__10806 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10807 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10806));
if((function (){var and__3937__auto____10808 = (new_child__10807 == null);
if(and__3937__auto____10808)
{return (subidx__10806 === 0);
} else
{return and__3937__auto____10808;
}
})())
{return null;
} else
{var ret__10809 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10809,subidx__10806,new_child__10807);
return ret__10809;
}
} else
{if((subidx__10806 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__10810 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10810,subidx__10806,null);
return ret__10810;
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
var this__10813 = this;
return (new cljs.core.TransientVector(this__10813.cnt,this__10813.shift,cljs.core.tv_editable_root.call(null,this__10813.root),cljs.core.tv_editable_tail.call(null,this__10813.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10814 = this;
var h__2225__auto____10815 = this__10814.__hash;
if(!((h__2225__auto____10815 == null)))
{return h__2225__auto____10815;
} else
{var h__2225__auto____10816 = cljs.core.hash_coll.call(null,coll);
this__10814.__hash = h__2225__auto____10816;
return h__2225__auto____10816;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10817 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10818 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10819 = this;
if((function (){var and__3937__auto____10820 = (0 <= k);
if(and__3937__auto____10820)
{return (k < this__10819.cnt);
} else
{return and__3937__auto____10820;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__10821 = this__10819.tail.slice();
(new_tail__10821[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__10819.meta,this__10819.cnt,this__10819.shift,this__10819.root,new_tail__10821,null));
} else
{return (new cljs.core.PersistentVector(this__10819.meta,this__10819.cnt,this__10819.shift,cljs.core.do_assoc.call(null,coll,this__10819.shift,this__10819.root,k,v),this__10819.tail,null));
}
} else
{if((k === this__10819.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__10819.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__10869 = null;
var G__10869__2 = (function (this_sym10822,k){
var this__10824 = this;
var this_sym10822__10825 = this;
var coll__10826 = this_sym10822__10825;
return coll__10826.cljs$core$ILookup$_lookup$arity$2(coll__10826,k);
});
var G__10869__3 = (function (this_sym10823,k,not_found){
var this__10824 = this;
var this_sym10823__10827 = this;
var coll__10828 = this_sym10823__10827;
return coll__10828.cljs$core$ILookup$_lookup$arity$3(coll__10828,k,not_found);
});
G__10869 = function(this_sym10823,k,not_found){
switch(arguments.length){
case 2:
return G__10869__2.call(this,this_sym10823,k);
case 3:
return G__10869__3.call(this,this_sym10823,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10869;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym10811,args10812){
var this__10829 = this;
return this_sym10811.call.apply(this_sym10811,[this_sym10811].concat(args10812.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__10830 = this;
var step_init__10831 = [0,init];
var i__10832 = 0;
while(true){
if((i__10832 < this__10830.cnt))
{var arr__10833 = cljs.core.array_for.call(null,v,i__10832);
var len__10834 = arr__10833.length;
var init__10838 = (function (){var j__10835 = 0;
var init__10836 = (step_init__10831[1]);
while(true){
if((j__10835 < len__10834))
{var init__10837 = f.call(null,init__10836,(j__10835 + i__10832),(arr__10833[j__10835]));
if(cljs.core.reduced_QMARK_.call(null,init__10837))
{return init__10837;
} else
{{
var G__10870 = (j__10835 + 1);
var G__10871 = init__10837;
j__10835 = G__10870;
init__10836 = G__10871;
continue;
}
}
} else
{(step_init__10831[0] = len__10834);
(step_init__10831[1] = init__10836);
return init__10836;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10838))
{return cljs.core.deref.call(null,init__10838);
} else
{{
var G__10872 = (i__10832 + (step_init__10831[0]));
i__10832 = G__10872;
continue;
}
}
} else
{return (step_init__10831[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10839 = this;
if(((this__10839.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__10840 = this__10839.tail.slice();
new_tail__10840.push(o);
return (new cljs.core.PersistentVector(this__10839.meta,(this__10839.cnt + 1),this__10839.shift,this__10839.root,new_tail__10840,null));
} else
{var root_overflow_QMARK___10841 = ((this__10839.cnt >>> 5) > (1 << this__10839.shift));
var new_shift__10842 = ((root_overflow_QMARK___10841)?(this__10839.shift + 5):this__10839.shift);
var new_root__10844 = ((root_overflow_QMARK___10841)?(function (){var n_r__10843 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__10843,0,this__10839.root);
cljs.core.pv_aset.call(null,n_r__10843,1,cljs.core.new_path.call(null,null,this__10839.shift,(new cljs.core.VectorNode(null,this__10839.tail))));
return n_r__10843;
})():cljs.core.push_tail.call(null,coll,this__10839.shift,this__10839.root,(new cljs.core.VectorNode(null,this__10839.tail))));
return (new cljs.core.PersistentVector(this__10839.meta,(this__10839.cnt + 1),new_shift__10842,new_root__10844,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10845 = this;
if((this__10845.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__10845.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__10846 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__10847 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__10848 = this;
var this__10849 = this;
return cljs.core.pr_str.call(null,this__10849);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10850 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10851 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10852 = this;
if((this__10852.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10853 = this;
return this__10853.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10854 = this;
if((this__10854.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__10854.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10855 = this;
if((this__10855.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10855.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10855.meta);
} else
{if((1 < (this__10855.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__10855.meta,(this__10855.cnt - 1),this__10855.shift,this__10855.root,this__10855.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__10856 = cljs.core.array_for.call(null,coll,(this__10855.cnt - 2));
var nr__10857 = cljs.core.pop_tail.call(null,coll,this__10855.shift,this__10855.root);
var new_root__10858 = (((nr__10857 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__10857);
var cnt_1__10859 = (this__10855.cnt - 1);
if((function (){var and__3937__auto____10860 = (5 < this__10855.shift);
if(and__3937__auto____10860)
{return (cljs.core.pv_aget.call(null,new_root__10858,1) == null);
} else
{return and__3937__auto____10860;
}
})())
{return (new cljs.core.PersistentVector(this__10855.meta,cnt_1__10859,(this__10855.shift - 5),cljs.core.pv_aget.call(null,new_root__10858,0),new_tail__10856,null));
} else
{return (new cljs.core.PersistentVector(this__10855.meta,cnt_1__10859,this__10855.shift,new_root__10858,new_tail__10856,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10861 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10862 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10863 = this;
return (new cljs.core.PersistentVector(meta,this__10863.cnt,this__10863.shift,this__10863.root,this__10863.tail,this__10863.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10864 = this;
return this__10864.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10865 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10866 = this;
if((function (){var and__3937__auto____10867 = (0 <= n);
if(and__3937__auto____10867)
{return (n < this__10866.cnt);
} else
{return and__3937__auto____10867;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10868 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10868.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__10873 = xs.length;
var xs__10874 = (((no_clone === true))?xs:xs.slice());
if((l__10873 < 32))
{return (new cljs.core.PersistentVector(null,l__10873,5,cljs.core.PersistentVector.EMPTY_NODE,xs__10874,null));
} else
{var node__10875 = xs__10874.slice(0,32);
var v__10876 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__10875,null));
var i__10877 = 32;
var out__10878 = cljs.core._as_transient.call(null,v__10876);
while(true){
if((i__10877 < l__10873))
{{
var G__10879 = (i__10877 + 1);
var G__10880 = cljs.core.conj_BANG_.call(null,out__10878,(xs__10874[i__10877]));
i__10877 = G__10879;
out__10878 = G__10880;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10878);
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
vector.cljs$lang$applyTo = (function (arglist__10881){
var args = cljs.core.seq(arglist__10881);;
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
var this__10882 = this;
if(((this__10882.off + 1) < this__10882.node.length))
{var s__10883 = cljs.core.chunked_seq.call(null,this__10882.vec,this__10882.node,this__10882.i,(this__10882.off + 1));
if((s__10883 == null))
{return null;
} else
{return s__10883;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10884 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10885 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10886 = this;
return (this__10886.node[this__10886.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10887 = this;
if(((this__10887.off + 1) < this__10887.node.length))
{var s__10888 = cljs.core.chunked_seq.call(null,this__10887.vec,this__10887.node,this__10887.i,(this__10887.off + 1));
if((s__10888 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10888;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__10889 = this;
var l__10890 = this__10889.node.length;
var s__10891 = ((((this__10889.i + l__10890) < cljs.core._count.call(null,this__10889.vec)))?cljs.core.chunked_seq.call(null,this__10889.vec,(this__10889.i + l__10890),0):null);
if((s__10891 == null))
{return null;
} else
{return s__10891;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10892 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__10893 = this;
return cljs.core.chunked_seq.call(null,this__10893.vec,this__10893.node,this__10893.i,this__10893.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__10894 = this;
return this__10894.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10895 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10895.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__10896 = this;
return cljs.core.array_chunk.call(null,this__10896.node,this__10896.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__10897 = this;
var l__10898 = this__10897.node.length;
var s__10899 = ((((this__10897.i + l__10898) < cljs.core._count.call(null,this__10897.vec)))?cljs.core.chunked_seq.call(null,this__10897.vec,(this__10897.i + l__10898),0):null);
if((s__10899 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10899;
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
var this__10902 = this;
var h__2225__auto____10903 = this__10902.__hash;
if(!((h__2225__auto____10903 == null)))
{return h__2225__auto____10903;
} else
{var h__2225__auto____10904 = cljs.core.hash_coll.call(null,coll);
this__10902.__hash = h__2225__auto____10904;
return h__2225__auto____10904;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10905 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10906 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__10907 = this;
var v_pos__10908 = (this__10907.start + key);
return (new cljs.core.Subvec(this__10907.meta,cljs.core._assoc.call(null,this__10907.v,v_pos__10908,val),this__10907.start,((this__10907.end > (v_pos__10908 + 1)) ? this__10907.end : (v_pos__10908 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__10934 = null;
var G__10934__2 = (function (this_sym10909,k){
var this__10911 = this;
var this_sym10909__10912 = this;
var coll__10913 = this_sym10909__10912;
return coll__10913.cljs$core$ILookup$_lookup$arity$2(coll__10913,k);
});
var G__10934__3 = (function (this_sym10910,k,not_found){
var this__10911 = this;
var this_sym10910__10914 = this;
var coll__10915 = this_sym10910__10914;
return coll__10915.cljs$core$ILookup$_lookup$arity$3(coll__10915,k,not_found);
});
G__10934 = function(this_sym10910,k,not_found){
switch(arguments.length){
case 2:
return G__10934__2.call(this,this_sym10910,k);
case 3:
return G__10934__3.call(this,this_sym10910,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10934;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym10900,args10901){
var this__10916 = this;
return this_sym10900.call.apply(this_sym10900,[this_sym10900].concat(args10901.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10917 = this;
return (new cljs.core.Subvec(this__10917.meta,cljs.core._assoc_n.call(null,this__10917.v,this__10917.end,o),this__10917.start,(this__10917.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__10918 = this;
var this__10919 = this;
return cljs.core.pr_str.call(null,this__10919);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__10920 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__10921 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10922 = this;
var subvec_seq__10923 = (function subvec_seq(i){
if((i === this__10922.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__10922.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__10923.call(null,this__10922.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10924 = this;
return (this__10924.end - this__10924.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10925 = this;
return cljs.core._nth.call(null,this__10925.v,(this__10925.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10926 = this;
if((this__10926.start === this__10926.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__10926.meta,this__10926.v,this__10926.start,(this__10926.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10927 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10928 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10929 = this;
return (new cljs.core.Subvec(meta,this__10929.v,this__10929.start,this__10929.end,this__10929.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10930 = this;
return this__10930.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10931 = this;
return cljs.core._nth.call(null,this__10931.v,(this__10931.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10932 = this;
return cljs.core._nth.call(null,this__10932.v,(this__10932.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10933 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10933.meta);
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
var ret__10936 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__10936,0,tl.length);
return ret__10936;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__10940 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__10941 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10940,subidx__10941,(((level === 5))?tail_node:(function (){var child__10942 = cljs.core.pv_aget.call(null,ret__10940,subidx__10941);
if(!((child__10942 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__10942,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__10940;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__10947 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__10948 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10949 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__10947,subidx__10948));
if((function (){var and__3937__auto____10950 = (new_child__10949 == null);
if(and__3937__auto____10950)
{return (subidx__10948 === 0);
} else
{return and__3937__auto____10950;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__10947,subidx__10948,new_child__10949);
return node__10947;
}
} else
{if((subidx__10948 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__10947,subidx__10948,null);
return node__10947;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3937__auto____10955 = (0 <= i);
if(and__3937__auto____10955)
{return (i < tv.cnt);
} else
{return and__3937__auto____10955;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__10956 = tv.root;
var node__10957 = root__10956;
var level__10958 = tv.shift;
while(true){
if((level__10958 > 0))
{{
var G__10959 = cljs.core.tv_ensure_editable.call(null,root__10956.edit,cljs.core.pv_aget.call(null,node__10957,((i >>> level__10958) & 31)));
var G__10960 = (level__10958 - 5);
node__10957 = G__10959;
level__10958 = G__10960;
continue;
}
} else
{return node__10957.arr;
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
var G__11000 = null;
var G__11000__2 = (function (this_sym10963,k){
var this__10965 = this;
var this_sym10963__10966 = this;
var coll__10967 = this_sym10963__10966;
return coll__10967.cljs$core$ILookup$_lookup$arity$2(coll__10967,k);
});
var G__11000__3 = (function (this_sym10964,k,not_found){
var this__10965 = this;
var this_sym10964__10968 = this;
var coll__10969 = this_sym10964__10968;
return coll__10969.cljs$core$ILookup$_lookup$arity$3(coll__10969,k,not_found);
});
G__11000 = function(this_sym10964,k,not_found){
switch(arguments.length){
case 2:
return G__11000__2.call(this,this_sym10964,k);
case 3:
return G__11000__3.call(this,this_sym10964,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11000;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym10961,args10962){
var this__10970 = this;
return this_sym10961.call.apply(this_sym10961,[this_sym10961].concat(args10962.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10971 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10972 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10973 = this;
if(this__10973.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10974 = this;
if((function (){var and__3937__auto____10975 = (0 <= n);
if(and__3937__auto____10975)
{return (n < this__10974.cnt);
} else
{return and__3937__auto____10975;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10976 = this;
if(this__10976.root.edit)
{return this__10976.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__10977 = this;
if(this__10977.root.edit)
{if((function (){var and__3937__auto____10978 = (0 <= n);
if(and__3937__auto____10978)
{return (n < this__10977.cnt);
} else
{return and__3937__auto____10978;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__10977.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__10983 = (function go(level,node){
var node__10981 = cljs.core.tv_ensure_editable.call(null,this__10977.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__10981,(n & 31),val);
return node__10981;
} else
{var subidx__10982 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__10981,subidx__10982,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__10981,subidx__10982)));
return node__10981;
}
}).call(null,this__10977.shift,this__10977.root);
this__10977.root = new_root__10983;
return tcoll;
}
} else
{if((n === this__10977.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__10977.cnt)].join('')));
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
var this__10984 = this;
if(this__10984.root.edit)
{if((this__10984.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10984.cnt))
{this__10984.cnt = 0;
return tcoll;
} else
{if((((this__10984.cnt - 1) & 31) > 0))
{this__10984.cnt = (this__10984.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__10985 = cljs.core.editable_array_for.call(null,tcoll,(this__10984.cnt - 2));
var new_root__10987 = (function (){var nr__10986 = cljs.core.tv_pop_tail.call(null,tcoll,this__10984.shift,this__10984.root);
if(!((nr__10986 == null)))
{return nr__10986;
} else
{return (new cljs.core.VectorNode(this__10984.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3937__auto____10988 = (5 < this__10984.shift);
if(and__3937__auto____10988)
{return (cljs.core.pv_aget.call(null,new_root__10987,1) == null);
} else
{return and__3937__auto____10988;
}
})())
{var new_root__10989 = cljs.core.tv_ensure_editable.call(null,this__10984.root.edit,cljs.core.pv_aget.call(null,new_root__10987,0));
this__10984.root = new_root__10989;
this__10984.shift = (this__10984.shift - 5);
this__10984.cnt = (this__10984.cnt - 1);
this__10984.tail = new_tail__10985;
return tcoll;
} else
{this__10984.root = new_root__10987;
this__10984.cnt = (this__10984.cnt - 1);
this__10984.tail = new_tail__10985;
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
var this__10990 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10991 = this;
if(this__10991.root.edit)
{if(((this__10991.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__10991.tail[(this__10991.cnt & 31)] = o);
this__10991.cnt = (this__10991.cnt + 1);
return tcoll;
} else
{var tail_node__10992 = (new cljs.core.VectorNode(this__10991.root.edit,this__10991.tail));
var new_tail__10993 = cljs.core.make_array.call(null,32);
(new_tail__10993[0] = o);
this__10991.tail = new_tail__10993;
if(((this__10991.cnt >>> 5) > (1 << this__10991.shift)))
{var new_root_array__10994 = cljs.core.make_array.call(null,32);
var new_shift__10995 = (this__10991.shift + 5);
(new_root_array__10994[0] = this__10991.root);
(new_root_array__10994[1] = cljs.core.new_path.call(null,this__10991.root.edit,this__10991.shift,tail_node__10992));
this__10991.root = (new cljs.core.VectorNode(this__10991.root.edit,new_root_array__10994));
this__10991.shift = new_shift__10995;
this__10991.cnt = (this__10991.cnt + 1);
return tcoll;
} else
{var new_root__10996 = cljs.core.tv_push_tail.call(null,tcoll,this__10991.shift,this__10991.root,tail_node__10992);
this__10991.root = new_root__10996;
this__10991.cnt = (this__10991.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10997 = this;
if(this__10997.root.edit)
{this__10997.root.edit = null;
var len__10998 = (this__10997.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__10999 = cljs.core.make_array.call(null,len__10998);
cljs.core.array_copy.call(null,this__10997.tail,0,trimmed_tail__10999,0,len__10998);
return (new cljs.core.PersistentVector(null,this__10997.cnt,this__10997.shift,this__10997.root,trimmed_tail__10999,null));
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
var this__11001 = this;
var h__2225__auto____11002 = this__11001.__hash;
if(!((h__2225__auto____11002 == null)))
{return h__2225__auto____11002;
} else
{var h__2225__auto____11003 = cljs.core.hash_coll.call(null,coll);
this__11001.__hash = h__2225__auto____11003;
return h__2225__auto____11003;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11004 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__11005 = this;
var this__11006 = this;
return cljs.core.pr_str.call(null,this__11006);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11007 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11008 = this;
return cljs.core._first.call(null,this__11008.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11009 = this;
var temp__4086__auto____11010 = cljs.core.next.call(null,this__11009.front);
if(temp__4086__auto____11010)
{var f1__11011 = temp__4086__auto____11010;
return (new cljs.core.PersistentQueueSeq(this__11009.meta,f1__11011,this__11009.rear,null));
} else
{if((this__11009.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__11009.meta,this__11009.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11012 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11013 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__11013.front,this__11013.rear,this__11013.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11014 = this;
return this__11014.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11015 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11015.meta);
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
var this__11016 = this;
var h__2225__auto____11017 = this__11016.__hash;
if(!((h__2225__auto____11017 == null)))
{return h__2225__auto____11017;
} else
{var h__2225__auto____11018 = cljs.core.hash_coll.call(null,coll);
this__11016.__hash = h__2225__auto____11018;
return h__2225__auto____11018;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11019 = this;
if(cljs.core.truth_(this__11019.front))
{return (new cljs.core.PersistentQueue(this__11019.meta,(this__11019.count + 1),this__11019.front,cljs.core.conj.call(null,(function (){var or__3939__auto____11020 = this__11019.rear;
if(cljs.core.truth_(or__3939__auto____11020))
{return or__3939__auto____11020;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__11019.meta,(this__11019.count + 1),cljs.core.conj.call(null,this__11019.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__11021 = this;
var this__11022 = this;
return cljs.core.pr_str.call(null,this__11022);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11023 = this;
var rear__11024 = cljs.core.seq.call(null,this__11023.rear);
if(cljs.core.truth_((function (){var or__3939__auto____11025 = this__11023.front;
if(cljs.core.truth_(or__3939__auto____11025))
{return or__3939__auto____11025;
} else
{return rear__11024;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__11023.front,cljs.core.seq.call(null,rear__11024),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11026 = this;
return this__11026.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11027 = this;
return cljs.core._first.call(null,this__11027.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11028 = this;
if(cljs.core.truth_(this__11028.front))
{var temp__4086__auto____11029 = cljs.core.next.call(null,this__11028.front);
if(temp__4086__auto____11029)
{var f1__11030 = temp__4086__auto____11029;
return (new cljs.core.PersistentQueue(this__11028.meta,(this__11028.count - 1),f1__11030,this__11028.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__11028.meta,(this__11028.count - 1),cljs.core.seq.call(null,this__11028.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11031 = this;
return cljs.core.first.call(null,this__11031.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11032 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11033 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11034 = this;
return (new cljs.core.PersistentQueue(meta,this__11034.count,this__11034.front,this__11034.rear,this__11034.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11035 = this;
return this__11035.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11036 = this;
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
var this__11037 = this;
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
var len__11040 = array.length;
var i__11041 = 0;
while(true){
if((i__11041 < len__11040))
{if((k === (array[i__11041])))
{return i__11041;
} else
{{
var G__11042 = (i__11041 + incr);
i__11041 = G__11042;
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
var a__11045 = cljs.core.hash.call(null,a);
var b__11046 = cljs.core.hash.call(null,b);
if((a__11045 < b__11046))
{return -1;
} else
{if((a__11045 > b__11046))
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
var ks__11054 = m.keys;
var len__11055 = ks__11054.length;
var so__11056 = m.strobj;
var out__11057 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__11058 = 0;
var out__11059 = cljs.core.transient$.call(null,out__11057);
while(true){
if((i__11058 < len__11055))
{var k__11060 = (ks__11054[i__11058]);
{
var G__11061 = (i__11058 + 1);
var G__11062 = cljs.core.assoc_BANG_.call(null,out__11059,k__11060,(so__11056[k__11060]));
i__11058 = G__11061;
out__11059 = G__11062;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__11059,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__11068 = {};
var l__11069 = ks.length;
var i__11070 = 0;
while(true){
if((i__11070 < l__11069))
{var k__11071 = (ks[i__11070]);
(new_obj__11068[k__11071] = (obj[k__11071]));
{
var G__11072 = (i__11070 + 1);
i__11070 = G__11072;
continue;
}
} else
{}
break;
}
return new_obj__11068;
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
var this__11075 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11076 = this;
var h__2225__auto____11077 = this__11076.__hash;
if(!((h__2225__auto____11077 == null)))
{return h__2225__auto____11077;
} else
{var h__2225__auto____11078 = cljs.core.hash_imap.call(null,coll);
this__11076.__hash = h__2225__auto____11078;
return h__2225__auto____11078;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11079 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11080 = this;
if((function (){var and__3937__auto____11081 = goog.isString(k);
if(and__3937__auto____11081)
{return !((cljs.core.scan_array.call(null,1,k,this__11080.keys) == null));
} else
{return and__3937__auto____11081;
}
})())
{return (this__11080.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11082 = this;
if(goog.isString(k))
{if((function (){var or__3939__auto____11083 = (this__11082.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3939__auto____11083)
{return or__3939__auto____11083;
} else
{return (this__11082.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__11082.keys) == null)))
{var new_strobj__11084 = cljs.core.obj_clone.call(null,this__11082.strobj,this__11082.keys);
(new_strobj__11084[k] = v);
return (new cljs.core.ObjMap(this__11082.meta,this__11082.keys,new_strobj__11084,(this__11082.update_count + 1),null));
} else
{var new_strobj__11085 = cljs.core.obj_clone.call(null,this__11082.strobj,this__11082.keys);
var new_keys__11086 = this__11082.keys.slice();
(new_strobj__11085[k] = v);
new_keys__11086.push(k);
return (new cljs.core.ObjMap(this__11082.meta,new_keys__11086,new_strobj__11085,(this__11082.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11087 = this;
if((function (){var and__3937__auto____11088 = goog.isString(k);
if(and__3937__auto____11088)
{return !((cljs.core.scan_array.call(null,1,k,this__11087.keys) == null));
} else
{return and__3937__auto____11088;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__11110 = null;
var G__11110__2 = (function (this_sym11089,k){
var this__11091 = this;
var this_sym11089__11092 = this;
var coll__11093 = this_sym11089__11092;
return coll__11093.cljs$core$ILookup$_lookup$arity$2(coll__11093,k);
});
var G__11110__3 = (function (this_sym11090,k,not_found){
var this__11091 = this;
var this_sym11090__11094 = this;
var coll__11095 = this_sym11090__11094;
return coll__11095.cljs$core$ILookup$_lookup$arity$3(coll__11095,k,not_found);
});
G__11110 = function(this_sym11090,k,not_found){
switch(arguments.length){
case 2:
return G__11110__2.call(this,this_sym11090,k);
case 3:
return G__11110__3.call(this,this_sym11090,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11110;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym11073,args11074){
var this__11096 = this;
return this_sym11073.call.apply(this_sym11073,[this_sym11073].concat(args11074.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11097 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__11098 = this;
var this__11099 = this;
return cljs.core.pr_str.call(null,this__11099);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11100 = this;
if((this__11100.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__11063_SHARP_){
return cljs.core.vector.call(null,p1__11063_SHARP_,(this__11100.strobj[p1__11063_SHARP_]));
}),this__11100.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11101 = this;
return this__11101.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11102 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11103 = this;
return (new cljs.core.ObjMap(meta,this__11103.keys,this__11103.strobj,this__11103.update_count,this__11103.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11104 = this;
return this__11104.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11105 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__11105.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11106 = this;
if((function (){var and__3937__auto____11107 = goog.isString(k);
if(and__3937__auto____11107)
{return !((cljs.core.scan_array.call(null,1,k,this__11106.keys) == null));
} else
{return and__3937__auto____11107;
}
})())
{var new_keys__11108 = this__11106.keys.slice();
var new_strobj__11109 = cljs.core.obj_clone.call(null,this__11106.strobj,this__11106.keys);
new_keys__11108.splice(cljs.core.scan_array.call(null,1,k,new_keys__11108),1);
cljs.core.js_delete.call(null,new_strobj__11109,k);
return (new cljs.core.ObjMap(this__11106.meta,new_keys__11108,new_strobj__11109,(this__11106.update_count + 1),null));
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
var this__11114 = this;
var h__2225__auto____11115 = this__11114.__hash;
if(!((h__2225__auto____11115 == null)))
{return h__2225__auto____11115;
} else
{var h__2225__auto____11116 = cljs.core.hash_imap.call(null,coll);
this__11114.__hash = h__2225__auto____11116;
return h__2225__auto____11116;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11117 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11118 = this;
var bucket__11119 = (this__11118.hashobj[cljs.core.hash.call(null,k)]);
var i__11120 = (cljs.core.truth_(bucket__11119)?cljs.core.scan_array.call(null,2,k,bucket__11119):null);
if(cljs.core.truth_(i__11120))
{return (bucket__11119[(i__11120 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11121 = this;
var h__11122 = cljs.core.hash.call(null,k);
var bucket__11123 = (this__11121.hashobj[h__11122]);
if(cljs.core.truth_(bucket__11123))
{var new_bucket__11124 = bucket__11123.slice();
var new_hashobj__11125 = goog.object.clone(this__11121.hashobj);
(new_hashobj__11125[h__11122] = new_bucket__11124);
var temp__4086__auto____11126 = cljs.core.scan_array.call(null,2,k,new_bucket__11124);
if(cljs.core.truth_(temp__4086__auto____11126))
{var i__11127 = temp__4086__auto____11126;
(new_bucket__11124[(i__11127 + 1)] = v);
return (new cljs.core.HashMap(this__11121.meta,this__11121.count,new_hashobj__11125,null));
} else
{new_bucket__11124.push(k,v);
return (new cljs.core.HashMap(this__11121.meta,(this__11121.count + 1),new_hashobj__11125,null));
}
} else
{var new_hashobj__11128 = goog.object.clone(this__11121.hashobj);
(new_hashobj__11128[h__11122] = [k,v]);
return (new cljs.core.HashMap(this__11121.meta,(this__11121.count + 1),new_hashobj__11128,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11129 = this;
var bucket__11130 = (this__11129.hashobj[cljs.core.hash.call(null,k)]);
var i__11131 = (cljs.core.truth_(bucket__11130)?cljs.core.scan_array.call(null,2,k,bucket__11130):null);
if(cljs.core.truth_(i__11131))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__11156 = null;
var G__11156__2 = (function (this_sym11132,k){
var this__11134 = this;
var this_sym11132__11135 = this;
var coll__11136 = this_sym11132__11135;
return coll__11136.cljs$core$ILookup$_lookup$arity$2(coll__11136,k);
});
var G__11156__3 = (function (this_sym11133,k,not_found){
var this__11134 = this;
var this_sym11133__11137 = this;
var coll__11138 = this_sym11133__11137;
return coll__11138.cljs$core$ILookup$_lookup$arity$3(coll__11138,k,not_found);
});
G__11156 = function(this_sym11133,k,not_found){
switch(arguments.length){
case 2:
return G__11156__2.call(this,this_sym11133,k);
case 3:
return G__11156__3.call(this,this_sym11133,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11156;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym11112,args11113){
var this__11139 = this;
return this_sym11112.call.apply(this_sym11112,[this_sym11112].concat(args11113.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11140 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__11141 = this;
var this__11142 = this;
return cljs.core.pr_str.call(null,this__11142);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11143 = this;
if((this__11143.count > 0))
{var hashes__11144 = cljs.core.js_keys.call(null,this__11143.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__11111_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__11143.hashobj[p1__11111_SHARP_])));
}),hashes__11144);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11145 = this;
return this__11145.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11146 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11147 = this;
return (new cljs.core.HashMap(meta,this__11147.count,this__11147.hashobj,this__11147.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11148 = this;
return this__11148.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11149 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__11149.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11150 = this;
var h__11151 = cljs.core.hash.call(null,k);
var bucket__11152 = (this__11150.hashobj[h__11151]);
var i__11153 = (cljs.core.truth_(bucket__11152)?cljs.core.scan_array.call(null,2,k,bucket__11152):null);
if(cljs.core.not.call(null,i__11153))
{return coll;
} else
{var new_hashobj__11154 = goog.object.clone(this__11150.hashobj);
if((3 > bucket__11152.length))
{cljs.core.js_delete.call(null,new_hashobj__11154,h__11151);
} else
{var new_bucket__11155 = bucket__11152.slice();
new_bucket__11155.splice(i__11153,2);
(new_hashobj__11154[h__11151] = new_bucket__11155);
}
return (new cljs.core.HashMap(this__11150.meta,(this__11150.count - 1),new_hashobj__11154,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__11157 = ks.length;
var i__11158 = 0;
var out__11159 = cljs.core.HashMap.EMPTY;
while(true){
if((i__11158 < len__11157))
{{
var G__11160 = (i__11158 + 1);
var G__11161 = cljs.core.assoc.call(null,out__11159,(ks[i__11158]),(vs[i__11158]));
i__11158 = G__11160;
out__11159 = G__11161;
continue;
}
} else
{return out__11159;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__11165 = m.arr;
var len__11166 = arr__11165.length;
var i__11167 = 0;
while(true){
if((len__11166 <= i__11167))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__11165[i__11167]),k))
{return i__11167;
} else
{if("\uFDD0'else")
{{
var G__11168 = (i__11167 + 2);
i__11167 = G__11168;
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
var this__11171 = this;
return (new cljs.core.TransientArrayMap({},this__11171.arr.length,this__11171.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11172 = this;
var h__2225__auto____11173 = this__11172.__hash;
if(!((h__2225__auto____11173 == null)))
{return h__2225__auto____11173;
} else
{var h__2225__auto____11174 = cljs.core.hash_imap.call(null,coll);
this__11172.__hash = h__2225__auto____11174;
return h__2225__auto____11174;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11175 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11176 = this;
var idx__11177 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11177 === -1))
{return not_found;
} else
{return (this__11176.arr[(idx__11177 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11178 = this;
var idx__11179 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11179 === -1))
{if((this__11178.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__11178.meta,(this__11178.cnt + 1),(function (){var G__11180__11181 = this__11178.arr.slice();
G__11180__11181.push(k);
G__11180__11181.push(v);
return G__11180__11181;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__11178.arr[(idx__11179 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__11178.meta,this__11178.cnt,(function (){var G__11182__11183 = this__11178.arr.slice();
(G__11182__11183[(idx__11179 + 1)] = v);
return G__11182__11183;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11184 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__11216 = null;
var G__11216__2 = (function (this_sym11185,k){
var this__11187 = this;
var this_sym11185__11188 = this;
var coll__11189 = this_sym11185__11188;
return coll__11189.cljs$core$ILookup$_lookup$arity$2(coll__11189,k);
});
var G__11216__3 = (function (this_sym11186,k,not_found){
var this__11187 = this;
var this_sym11186__11190 = this;
var coll__11191 = this_sym11186__11190;
return coll__11191.cljs$core$ILookup$_lookup$arity$3(coll__11191,k,not_found);
});
G__11216 = function(this_sym11186,k,not_found){
switch(arguments.length){
case 2:
return G__11216__2.call(this,this_sym11186,k);
case 3:
return G__11216__3.call(this,this_sym11186,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11216;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym11169,args11170){
var this__11192 = this;
return this_sym11169.call.apply(this_sym11169,[this_sym11169].concat(args11170.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11193 = this;
var len__11194 = this__11193.arr.length;
var i__11195 = 0;
var init__11196 = init;
while(true){
if((i__11195 < len__11194))
{var init__11197 = f.call(null,init__11196,(this__11193.arr[i__11195]),(this__11193.arr[(i__11195 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__11197))
{return cljs.core.deref.call(null,init__11197);
} else
{{
var G__11217 = (i__11195 + 2);
var G__11218 = init__11197;
i__11195 = G__11217;
init__11196 = G__11218;
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
var this__11198 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__11199 = this;
var this__11200 = this;
return cljs.core.pr_str.call(null,this__11200);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11201 = this;
if((this__11201.cnt > 0))
{var len__11202 = this__11201.arr.length;
var array_map_seq__11203 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__11202))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__11201.arr[i]),(this__11201.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__11203.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11204 = this;
return this__11204.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11205 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11206 = this;
return (new cljs.core.PersistentArrayMap(meta,this__11206.cnt,this__11206.arr,this__11206.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11207 = this;
return this__11207.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11208 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11208.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11209 = this;
var idx__11210 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11210 >= 0))
{var len__11211 = this__11209.arr.length;
var new_len__11212 = (len__11211 - 2);
if((new_len__11212 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__11213 = cljs.core.make_array.call(null,new_len__11212);
var s__11214 = 0;
var d__11215 = 0;
while(true){
if((s__11214 >= len__11211))
{return (new cljs.core.PersistentArrayMap(this__11209.meta,(this__11209.cnt - 1),new_arr__11213,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__11209.arr[s__11214])))
{{
var G__11219 = (s__11214 + 2);
var G__11220 = d__11215;
s__11214 = G__11219;
d__11215 = G__11220;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__11213[d__11215] = (this__11209.arr[s__11214]));
(new_arr__11213[(d__11215 + 1)] = (this__11209.arr[(s__11214 + 1)]));
{
var G__11221 = (s__11214 + 2);
var G__11222 = (d__11215 + 2);
s__11214 = G__11221;
d__11215 = G__11222;
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
var len__11223 = cljs.core.count.call(null,ks);
var i__11224 = 0;
var out__11225 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__11224 < len__11223))
{{
var G__11226 = (i__11224 + 1);
var G__11227 = cljs.core.assoc_BANG_.call(null,out__11225,(ks[i__11224]),(vs[i__11224]));
i__11224 = G__11226;
out__11225 = G__11227;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11225);
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
var this__11228 = this;
if(cljs.core.truth_(this__11228.editable_QMARK_))
{var idx__11229 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__11229 >= 0))
{(this__11228.arr[idx__11229] = (this__11228.arr[(this__11228.len - 2)]));
(this__11228.arr[(idx__11229 + 1)] = (this__11228.arr[(this__11228.len - 1)]));
var G__11230__11231 = this__11228.arr;
G__11230__11231.pop();
G__11230__11231.pop();
G__11230__11231;
this__11228.len = (this__11228.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11232 = this;
if(cljs.core.truth_(this__11232.editable_QMARK_))
{var idx__11233 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__11233 === -1))
{if(((this__11232.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__11232.len = (this__11232.len + 2);
this__11232.arr.push(key);
this__11232.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__11232.len,this__11232.arr),key,val);
}
} else
{if((val === (this__11232.arr[(idx__11233 + 1)])))
{return tcoll;
} else
{(this__11232.arr[(idx__11233 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11234 = this;
if(cljs.core.truth_(this__11234.editable_QMARK_))
{if((function (){var G__11235__11236 = o;
if(G__11235__11236)
{if((function (){var or__3939__auto____11237 = (G__11235__11236.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3939__auto____11237)
{return or__3939__auto____11237;
} else
{return G__11235__11236.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11235__11236.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11235__11236);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11235__11236);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11238 = cljs.core.seq.call(null,o);
var tcoll__11239 = tcoll;
while(true){
var temp__4086__auto____11240 = cljs.core.first.call(null,es__11238);
if(cljs.core.truth_(temp__4086__auto____11240))
{var e__11241 = temp__4086__auto____11240;
{
var G__11247 = cljs.core.next.call(null,es__11238);
var G__11248 = tcoll__11239.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__11239,cljs.core.key.call(null,e__11241),cljs.core.val.call(null,e__11241));
es__11238 = G__11247;
tcoll__11239 = G__11248;
continue;
}
} else
{return tcoll__11239;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11242 = this;
if(cljs.core.truth_(this__11242.editable_QMARK_))
{this__11242.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__11242.len,2),this__11242.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11243 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11244 = this;
if(cljs.core.truth_(this__11244.editable_QMARK_))
{var idx__11245 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__11245 === -1))
{return not_found;
} else
{return (this__11244.arr[(idx__11245 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11246 = this;
if(cljs.core.truth_(this__11246.editable_QMARK_))
{return cljs.core.quot.call(null,this__11246.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__11251 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__11252 = 0;
while(true){
if((i__11252 < len))
{{
var G__11253 = cljs.core.assoc_BANG_.call(null,out__11251,(arr[i__11252]),(arr[(i__11252 + 1)]));
var G__11254 = (i__11252 + 2);
out__11251 = G__11253;
i__11252 = G__11254;
continue;
}
} else
{return out__11251;
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
var G__11259__11260 = arr.slice();
(G__11259__11260[i] = a);
return G__11259__11260;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__11261__11262 = arr.slice();
(G__11261__11262[i] = a);
(G__11261__11262[j] = b);
return G__11261__11262;
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
var new_arr__11264 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__11264,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__11264,(2 * i),(new_arr__11264.length - (2 * i)));
return new_arr__11264;
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
var editable__11267 = inode.ensure_editable(edit);
(editable__11267.arr[i] = a);
return editable__11267;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__11268 = inode.ensure_editable(edit);
(editable__11268.arr[i] = a);
(editable__11268.arr[j] = b);
return editable__11268;
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
var len__11275 = arr.length;
var i__11276 = 0;
var init__11277 = init;
while(true){
if((i__11276 < len__11275))
{var init__11280 = (function (){var k__11278 = (arr[i__11276]);
if(!((k__11278 == null)))
{return f.call(null,init__11277,k__11278,(arr[(i__11276 + 1)]));
} else
{var node__11279 = (arr[(i__11276 + 1)]);
if(!((node__11279 == null)))
{return node__11279.kv_reduce(f,init__11277);
} else
{return init__11277;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__11280))
{return cljs.core.deref.call(null,init__11280);
} else
{{
var G__11281 = (i__11276 + 2);
var G__11282 = init__11280;
i__11276 = G__11281;
init__11277 = G__11282;
continue;
}
}
} else
{return init__11277;
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
var this__11283 = this;
var inode__11284 = this;
if((this__11283.bitmap === bit))
{return null;
} else
{var editable__11285 = inode__11284.ensure_editable(e);
var earr__11286 = editable__11285.arr;
var len__11287 = earr__11286.length;
editable__11285.bitmap = (bit ^ editable__11285.bitmap);
cljs.core.array_copy.call(null,earr__11286,(2 * (i + 1)),earr__11286,(2 * i),(len__11287 - (2 * (i + 1))));
(earr__11286[(len__11287 - 2)] = null);
(earr__11286[(len__11287 - 1)] = null);
return editable__11285;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11288 = this;
var inode__11289 = this;
var bit__11290 = (1 << ((hash >>> shift) & 0x01f));
var idx__11291 = cljs.core.bitmap_indexed_node_index.call(null,this__11288.bitmap,bit__11290);
if(((this__11288.bitmap & bit__11290) === 0))
{var n__11292 = cljs.core.bit_count.call(null,this__11288.bitmap);
if(((2 * n__11292) < this__11288.arr.length))
{var editable__11293 = inode__11289.ensure_editable(edit);
var earr__11294 = editable__11293.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__11294,(2 * idx__11291),earr__11294,(2 * (idx__11291 + 1)),(2 * (n__11292 - idx__11291)));
(earr__11294[(2 * idx__11291)] = key);
(earr__11294[((2 * idx__11291) + 1)] = val);
editable__11293.bitmap = (editable__11293.bitmap | bit__11290);
return editable__11293;
} else
{if((n__11292 >= 16))
{var nodes__11295 = cljs.core.make_array.call(null,32);
var jdx__11296 = ((hash >>> shift) & 0x01f);
(nodes__11295[jdx__11296] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__11297 = 0;
var j__11298 = 0;
while(true){
if((i__11297 < 32))
{if((((this__11288.bitmap >>> i__11297) & 1) === 0))
{{
var G__11351 = (i__11297 + 1);
var G__11352 = j__11298;
i__11297 = G__11351;
j__11298 = G__11352;
continue;
}
} else
{(nodes__11295[i__11297] = ((!(((this__11288.arr[j__11298]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__11288.arr[j__11298])),(this__11288.arr[j__11298]),(this__11288.arr[(j__11298 + 1)]),added_leaf_QMARK_):(this__11288.arr[(j__11298 + 1)])));
{
var G__11353 = (i__11297 + 1);
var G__11354 = (j__11298 + 2);
i__11297 = G__11353;
j__11298 = G__11354;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__11292 + 1),nodes__11295));
} else
{if("\uFDD0'else")
{var new_arr__11299 = cljs.core.make_array.call(null,(2 * (n__11292 + 4)));
cljs.core.array_copy.call(null,this__11288.arr,0,new_arr__11299,0,(2 * idx__11291));
(new_arr__11299[(2 * idx__11291)] = key);
(new_arr__11299[((2 * idx__11291) + 1)] = val);
cljs.core.array_copy.call(null,this__11288.arr,(2 * idx__11291),new_arr__11299,(2 * (idx__11291 + 1)),(2 * (n__11292 - idx__11291)));
added_leaf_QMARK_.val = true;
var editable__11300 = inode__11289.ensure_editable(edit);
editable__11300.arr = new_arr__11299;
editable__11300.bitmap = (editable__11300.bitmap | bit__11290);
return editable__11300;
} else
{return null;
}
}
}
} else
{var key_or_nil__11301 = (this__11288.arr[(2 * idx__11291)]);
var val_or_node__11302 = (this__11288.arr[((2 * idx__11291) + 1)]);
if((key_or_nil__11301 == null))
{var n__11303 = val_or_node__11302.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11303 === val_or_node__11302))
{return inode__11289;
} else
{return cljs.core.edit_and_set.call(null,inode__11289,edit,((2 * idx__11291) + 1),n__11303);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11301))
{if((val === val_or_node__11302))
{return inode__11289;
} else
{return cljs.core.edit_and_set.call(null,inode__11289,edit,((2 * idx__11291) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__11289,edit,(2 * idx__11291),null,((2 * idx__11291) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__11301,val_or_node__11302,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__11304 = this;
var inode__11305 = this;
return cljs.core.create_inode_seq.call(null,this__11304.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11306 = this;
var inode__11307 = this;
var bit__11308 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11306.bitmap & bit__11308) === 0))
{return inode__11307;
} else
{var idx__11309 = cljs.core.bitmap_indexed_node_index.call(null,this__11306.bitmap,bit__11308);
var key_or_nil__11310 = (this__11306.arr[(2 * idx__11309)]);
var val_or_node__11311 = (this__11306.arr[((2 * idx__11309) + 1)]);
if((key_or_nil__11310 == null))
{var n__11312 = val_or_node__11311.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11312 === val_or_node__11311))
{return inode__11307;
} else
{if(!((n__11312 == null)))
{return cljs.core.edit_and_set.call(null,inode__11307,edit,((2 * idx__11309) + 1),n__11312);
} else
{if((this__11306.bitmap === bit__11308))
{return null;
} else
{if("\uFDD0'else")
{return inode__11307.edit_and_remove_pair(edit,bit__11308,idx__11309);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11310))
{(removed_leaf_QMARK_[0] = true);
return inode__11307.edit_and_remove_pair(edit,bit__11308,idx__11309);
} else
{if("\uFDD0'else")
{return inode__11307;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__11313 = this;
var inode__11314 = this;
if((e === this__11313.edit))
{return inode__11314;
} else
{var n__11315 = cljs.core.bit_count.call(null,this__11313.bitmap);
var new_arr__11316 = cljs.core.make_array.call(null,(((n__11315 < 0))?4:(2 * (n__11315 + 1))));
cljs.core.array_copy.call(null,this__11313.arr,0,new_arr__11316,0,(2 * n__11315));
return (new cljs.core.BitmapIndexedNode(e,this__11313.bitmap,new_arr__11316));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__11317 = this;
var inode__11318 = this;
return cljs.core.inode_kv_reduce.call(null,this__11317.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
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
{return val_or_node__11324.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11323))
{return cljs.core.PersistentVector.fromArray([key_or_nil__11323,val_or_node__11324], true);
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
{var n__11331 = val_or_node__11330.inode_without((shift + 5),hash,key);
if((n__11331 === val_or_node__11330))
{return inode__11326;
} else
{if(!((n__11331 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__11325.bitmap,cljs.core.clone_and_set.call(null,this__11325.arr,((2 * idx__11328) + 1),n__11331)));
} else
{if((this__11325.bitmap === bit__11327))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__11325.bitmap ^ bit__11327),cljs.core.remove_pair.call(null,this__11325.arr,idx__11328)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11329))
{return (new cljs.core.BitmapIndexedNode(null,(this__11325.bitmap ^ bit__11327),cljs.core.remove_pair.call(null,this__11325.arr,idx__11328)));
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
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11332 = this;
var inode__11333 = this;
var bit__11334 = (1 << ((hash >>> shift) & 0x01f));
var idx__11335 = cljs.core.bitmap_indexed_node_index.call(null,this__11332.bitmap,bit__11334);
if(((this__11332.bitmap & bit__11334) === 0))
{var n__11336 = cljs.core.bit_count.call(null,this__11332.bitmap);
if((n__11336 >= 16))
{var nodes__11337 = cljs.core.make_array.call(null,32);
var jdx__11338 = ((hash >>> shift) & 0x01f);
(nodes__11337[jdx__11338] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__11339 = 0;
var j__11340 = 0;
while(true){
if((i__11339 < 32))
{if((((this__11332.bitmap >>> i__11339) & 1) === 0))
{{
var G__11355 = (i__11339 + 1);
var G__11356 = j__11340;
i__11339 = G__11355;
j__11340 = G__11356;
continue;
}
} else
{(nodes__11337[i__11339] = ((!(((this__11332.arr[j__11340]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__11332.arr[j__11340])),(this__11332.arr[j__11340]),(this__11332.arr[(j__11340 + 1)]),added_leaf_QMARK_):(this__11332.arr[(j__11340 + 1)])));
{
var G__11357 = (i__11339 + 1);
var G__11358 = (j__11340 + 2);
i__11339 = G__11357;
j__11340 = G__11358;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__11336 + 1),nodes__11337));
} else
{var new_arr__11341 = cljs.core.make_array.call(null,(2 * (n__11336 + 1)));
cljs.core.array_copy.call(null,this__11332.arr,0,new_arr__11341,0,(2 * idx__11335));
(new_arr__11341[(2 * idx__11335)] = key);
(new_arr__11341[((2 * idx__11335) + 1)] = val);
cljs.core.array_copy.call(null,this__11332.arr,(2 * idx__11335),new_arr__11341,(2 * (idx__11335 + 1)),(2 * (n__11336 - idx__11335)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__11332.bitmap | bit__11334),new_arr__11341));
}
} else
{var key_or_nil__11342 = (this__11332.arr[(2 * idx__11335)]);
var val_or_node__11343 = (this__11332.arr[((2 * idx__11335) + 1)]);
if((key_or_nil__11342 == null))
{var n__11344 = val_or_node__11343.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11344 === val_or_node__11343))
{return inode__11333;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__11332.bitmap,cljs.core.clone_and_set.call(null,this__11332.arr,((2 * idx__11335) + 1),n__11344)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11342))
{if((val === val_or_node__11343))
{return inode__11333;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__11332.bitmap,cljs.core.clone_and_set.call(null,this__11332.arr,((2 * idx__11335) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__11332.bitmap,cljs.core.clone_and_set.call(null,this__11332.arr,(2 * idx__11335),null,((2 * idx__11335) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__11342,val_or_node__11343,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11345 = this;
var inode__11346 = this;
var bit__11347 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11345.bitmap & bit__11347) === 0))
{return not_found;
} else
{var idx__11348 = cljs.core.bitmap_indexed_node_index.call(null,this__11345.bitmap,bit__11347);
var key_or_nil__11349 = (this__11345.arr[(2 * idx__11348)]);
var val_or_node__11350 = (this__11345.arr[((2 * idx__11348) + 1)]);
if((key_or_nil__11349 == null))
{return val_or_node__11350.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11349))
{return val_or_node__11350;
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
var arr__11366 = array_node.arr;
var len__11367 = (2 * (array_node.cnt - 1));
var new_arr__11368 = cljs.core.make_array.call(null,len__11367);
var i__11369 = 0;
var j__11370 = 1;
var bitmap__11371 = 0;
while(true){
if((i__11369 < len__11367))
{if((function (){var and__3937__auto____11372 = !((i__11369 === idx));
if(and__3937__auto____11372)
{return !(((arr__11366[i__11369]) == null));
} else
{return and__3937__auto____11372;
}
})())
{(new_arr__11368[j__11370] = (arr__11366[i__11369]));
{
var G__11373 = (i__11369 + 1);
var G__11374 = (j__11370 + 2);
var G__11375 = (bitmap__11371 | (1 << i__11369));
i__11369 = G__11373;
j__11370 = G__11374;
bitmap__11371 = G__11375;
continue;
}
} else
{{
var G__11376 = (i__11369 + 1);
var G__11377 = j__11370;
var G__11378 = bitmap__11371;
i__11369 = G__11376;
j__11370 = G__11377;
bitmap__11371 = G__11378;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__11371,new_arr__11368));
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
var this__11379 = this;
var inode__11380 = this;
var idx__11381 = ((hash >>> shift) & 0x01f);
var node__11382 = (this__11379.arr[idx__11381]);
if((node__11382 == null))
{var editable__11383 = cljs.core.edit_and_set.call(null,inode__11380,edit,idx__11381,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__11383.cnt = (editable__11383.cnt + 1);
return editable__11383;
} else
{var n__11384 = node__11382.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11384 === node__11382))
{return inode__11380;
} else
{return cljs.core.edit_and_set.call(null,inode__11380,edit,idx__11381,n__11384);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__11385 = this;
var inode__11386 = this;
return cljs.core.create_array_node_seq.call(null,this__11385.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11387 = this;
var inode__11388 = this;
var idx__11389 = ((hash >>> shift) & 0x01f);
var node__11390 = (this__11387.arr[idx__11389]);
if((node__11390 == null))
{return inode__11388;
} else
{var n__11391 = node__11390.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11391 === node__11390))
{return inode__11388;
} else
{if((n__11391 == null))
{if((this__11387.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11388,edit,idx__11389);
} else
{var editable__11392 = cljs.core.edit_and_set.call(null,inode__11388,edit,idx__11389,n__11391);
editable__11392.cnt = (editable__11392.cnt - 1);
return editable__11392;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__11388,edit,idx__11389,n__11391);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__11393 = this;
var inode__11394 = this;
if((e === this__11393.edit))
{return inode__11394;
} else
{return (new cljs.core.ArrayNode(e,this__11393.cnt,this__11393.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__11395 = this;
var inode__11396 = this;
var len__11397 = this__11395.arr.length;
var i__11398 = 0;
var init__11399 = init;
while(true){
if((i__11398 < len__11397))
{var node__11400 = (this__11395.arr[i__11398]);
if(!((node__11400 == null)))
{var init__11401 = node__11400.kv_reduce(f,init__11399);
if(cljs.core.reduced_QMARK_.call(null,init__11401))
{return cljs.core.deref.call(null,init__11401);
} else
{{
var G__11420 = (i__11398 + 1);
var G__11421 = init__11401;
i__11398 = G__11420;
init__11399 = G__11421;
continue;
}
}
} else
{return null;
}
} else
{return init__11399;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11402 = this;
var inode__11403 = this;
var idx__11404 = ((hash >>> shift) & 0x01f);
var node__11405 = (this__11402.arr[idx__11404]);
if(!((node__11405 == null)))
{return node__11405.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__11406 = this;
var inode__11407 = this;
var idx__11408 = ((hash >>> shift) & 0x01f);
var node__11409 = (this__11406.arr[idx__11408]);
if(!((node__11409 == null)))
{var n__11410 = node__11409.inode_without((shift + 5),hash,key);
if((n__11410 === node__11409))
{return inode__11407;
} else
{if((n__11410 == null))
{if((this__11406.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11407,null,idx__11408);
} else
{return (new cljs.core.ArrayNode(null,(this__11406.cnt - 1),cljs.core.clone_and_set.call(null,this__11406.arr,idx__11408,n__11410)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__11406.cnt,cljs.core.clone_and_set.call(null,this__11406.arr,idx__11408,n__11410)));
} else
{return null;
}
}
}
} else
{return inode__11407;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11411 = this;
var inode__11412 = this;
var idx__11413 = ((hash >>> shift) & 0x01f);
var node__11414 = (this__11411.arr[idx__11413]);
if((node__11414 == null))
{return (new cljs.core.ArrayNode(null,(this__11411.cnt + 1),cljs.core.clone_and_set.call(null,this__11411.arr,idx__11413,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__11415 = node__11414.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11415 === node__11414))
{return inode__11412;
} else
{return (new cljs.core.ArrayNode(null,this__11411.cnt,cljs.core.clone_and_set.call(null,this__11411.arr,idx__11413,n__11415)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11416 = this;
var inode__11417 = this;
var idx__11418 = ((hash >>> shift) & 0x01f);
var node__11419 = (this__11416.arr[idx__11418]);
if(!((node__11419 == null)))
{return node__11419.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__11424 = (2 * cnt);
var i__11425 = 0;
while(true){
if((i__11425 < lim__11424))
{if(cljs.core.key_test.call(null,key,(arr[i__11425])))
{return i__11425;
} else
{{
var G__11426 = (i__11425 + 2);
i__11425 = G__11426;
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
var this__11427 = this;
var inode__11428 = this;
if((hash === this__11427.collision_hash))
{var idx__11429 = cljs.core.hash_collision_node_find_index.call(null,this__11427.arr,this__11427.cnt,key);
if((idx__11429 === -1))
{if((this__11427.arr.length > (2 * this__11427.cnt)))
{var editable__11430 = cljs.core.edit_and_set.call(null,inode__11428,edit,(2 * this__11427.cnt),key,((2 * this__11427.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__11430.cnt = (editable__11430.cnt + 1);
return editable__11430;
} else
{var len__11431 = this__11427.arr.length;
var new_arr__11432 = cljs.core.make_array.call(null,(len__11431 + 2));
cljs.core.array_copy.call(null,this__11427.arr,0,new_arr__11432,0,len__11431);
(new_arr__11432[len__11431] = key);
(new_arr__11432[(len__11431 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__11428.ensure_editable_array(edit,(this__11427.cnt + 1),new_arr__11432);
}
} else
{if(((this__11427.arr[(idx__11429 + 1)]) === val))
{return inode__11428;
} else
{return cljs.core.edit_and_set.call(null,inode__11428,edit,(idx__11429 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__11427.collision_hash >>> shift) & 0x01f)),[null,inode__11428,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__11433 = this;
var inode__11434 = this;
return cljs.core.create_inode_seq.call(null,this__11433.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11435 = this;
var inode__11436 = this;
var idx__11437 = cljs.core.hash_collision_node_find_index.call(null,this__11435.arr,this__11435.cnt,key);
if((idx__11437 === -1))
{return inode__11436;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__11435.cnt === 1))
{return null;
} else
{var editable__11438 = inode__11436.ensure_editable(edit);
var earr__11439 = editable__11438.arr;
(earr__11439[idx__11437] = (earr__11439[((2 * this__11435.cnt) - 2)]));
(earr__11439[(idx__11437 + 1)] = (earr__11439[((2 * this__11435.cnt) - 1)]));
(earr__11439[((2 * this__11435.cnt) - 1)] = null);
(earr__11439[((2 * this__11435.cnt) - 2)] = null);
editable__11438.cnt = (editable__11438.cnt - 1);
return editable__11438;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__11440 = this;
var inode__11441 = this;
if((e === this__11440.edit))
{return inode__11441;
} else
{var new_arr__11442 = cljs.core.make_array.call(null,(2 * (this__11440.cnt + 1)));
cljs.core.array_copy.call(null,this__11440.arr,0,new_arr__11442,0,(2 * this__11440.cnt));
return (new cljs.core.HashCollisionNode(e,this__11440.collision_hash,this__11440.cnt,new_arr__11442));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__11443 = this;
var inode__11444 = this;
return cljs.core.inode_kv_reduce.call(null,this__11443.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11445 = this;
var inode__11446 = this;
var idx__11447 = cljs.core.hash_collision_node_find_index.call(null,this__11445.arr,this__11445.cnt,key);
if((idx__11447 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11445.arr[idx__11447])))
{return cljs.core.PersistentVector.fromArray([(this__11445.arr[idx__11447]),(this__11445.arr[(idx__11447 + 1)])], true);
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
var this__11448 = this;
var inode__11449 = this;
var idx__11450 = cljs.core.hash_collision_node_find_index.call(null,this__11448.arr,this__11448.cnt,key);
if((idx__11450 === -1))
{return inode__11449;
} else
{if((this__11448.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__11448.collision_hash,(this__11448.cnt - 1),cljs.core.remove_pair.call(null,this__11448.arr,cljs.core.quot.call(null,idx__11450,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11451 = this;
var inode__11452 = this;
if((hash === this__11451.collision_hash))
{var idx__11453 = cljs.core.hash_collision_node_find_index.call(null,this__11451.arr,this__11451.cnt,key);
if((idx__11453 === -1))
{var len__11454 = this__11451.arr.length;
var new_arr__11455 = cljs.core.make_array.call(null,(len__11454 + 2));
cljs.core.array_copy.call(null,this__11451.arr,0,new_arr__11455,0,len__11454);
(new_arr__11455[len__11454] = key);
(new_arr__11455[(len__11454 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__11451.collision_hash,(this__11451.cnt + 1),new_arr__11455));
} else
{if(cljs.core._EQ_.call(null,(this__11451.arr[idx__11453]),val))
{return inode__11452;
} else
{return (new cljs.core.HashCollisionNode(null,this__11451.collision_hash,this__11451.cnt,cljs.core.clone_and_set.call(null,this__11451.arr,(idx__11453 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__11451.collision_hash >>> shift) & 0x01f)),[null,inode__11452])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11456 = this;
var inode__11457 = this;
var idx__11458 = cljs.core.hash_collision_node_find_index.call(null,this__11456.arr,this__11456.cnt,key);
if((idx__11458 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11456.arr[idx__11458])))
{return (this__11456.arr[(idx__11458 + 1)]);
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
var this__11459 = this;
var inode__11460 = this;
if((e === this__11459.edit))
{this__11459.arr = array;
this__11459.cnt = count;
return inode__11460;
} else
{return (new cljs.core.HashCollisionNode(this__11459.edit,this__11459.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__11465 = cljs.core.hash.call(null,key1);
if((key1hash__11465 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11465,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11466 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__11465,key1,val1,added_leaf_QMARK___11466).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___11466);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__11467 = cljs.core.hash.call(null,key1);
if((key1hash__11467 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11467,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11468 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__11467,key1,val1,added_leaf_QMARK___11468).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___11468);
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
var this__11469 = this;
var h__2225__auto____11470 = this__11469.__hash;
if(!((h__2225__auto____11470 == null)))
{return h__2225__auto____11470;
} else
{var h__2225__auto____11471 = cljs.core.hash_coll.call(null,coll);
this__11469.__hash = h__2225__auto____11471;
return h__2225__auto____11471;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11472 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__11473 = this;
var this__11474 = this;
return cljs.core.pr_str.call(null,this__11474);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11475 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11476 = this;
if((this__11476.s == null))
{return cljs.core.PersistentVector.fromArray([(this__11476.nodes[this__11476.i]),(this__11476.nodes[(this__11476.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__11476.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11477 = this;
if((this__11477.s == null))
{return cljs.core.create_inode_seq.call(null,this__11477.nodes,(this__11477.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__11477.nodes,this__11477.i,cljs.core.next.call(null,this__11477.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11478 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11479 = this;
return (new cljs.core.NodeSeq(meta,this__11479.nodes,this__11479.i,this__11479.s,this__11479.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11480 = this;
return this__11480.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11481 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11481.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__11488 = nodes.length;
var j__11489 = i;
while(true){
if((j__11489 < len__11488))
{if(!(((nodes[j__11489]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__11489,null,null));
} else
{var temp__4086__auto____11490 = (nodes[(j__11489 + 1)]);
if(cljs.core.truth_(temp__4086__auto____11490))
{var node__11491 = temp__4086__auto____11490;
var temp__4086__auto____11492 = node__11491.inode_seq();
if(cljs.core.truth_(temp__4086__auto____11492))
{var node_seq__11493 = temp__4086__auto____11492;
return (new cljs.core.NodeSeq(null,nodes,(j__11489 + 2),node_seq__11493,null));
} else
{{
var G__11494 = (j__11489 + 2);
j__11489 = G__11494;
continue;
}
}
} else
{{
var G__11495 = (j__11489 + 2);
j__11489 = G__11495;
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
var this__11496 = this;
var h__2225__auto____11497 = this__11496.__hash;
if(!((h__2225__auto____11497 == null)))
{return h__2225__auto____11497;
} else
{var h__2225__auto____11498 = cljs.core.hash_coll.call(null,coll);
this__11496.__hash = h__2225__auto____11498;
return h__2225__auto____11498;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11499 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__11500 = this;
var this__11501 = this;
return cljs.core.pr_str.call(null,this__11501);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11502 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11503 = this;
return cljs.core.first.call(null,this__11503.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11504 = this;
return cljs.core.create_array_node_seq.call(null,null,this__11504.nodes,this__11504.i,cljs.core.next.call(null,this__11504.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11505 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11506 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__11506.nodes,this__11506.i,this__11506.s,this__11506.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11507 = this;
return this__11507.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11508 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11508.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__11515 = nodes.length;
var j__11516 = i;
while(true){
if((j__11516 < len__11515))
{var temp__4086__auto____11517 = (nodes[j__11516]);
if(cljs.core.truth_(temp__4086__auto____11517))
{var nj__11518 = temp__4086__auto____11517;
var temp__4086__auto____11519 = nj__11518.inode_seq();
if(cljs.core.truth_(temp__4086__auto____11519))
{var ns__11520 = temp__4086__auto____11519;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__11516 + 1),ns__11520,null));
} else
{{
var G__11521 = (j__11516 + 1);
j__11516 = G__11521;
continue;
}
}
} else
{{
var G__11522 = (j__11516 + 1);
j__11516 = G__11522;
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
var this__11525 = this;
return (new cljs.core.TransientHashMap({},this__11525.root,this__11525.cnt,this__11525.has_nil_QMARK_,this__11525.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11526 = this;
var h__2225__auto____11527 = this__11526.__hash;
if(!((h__2225__auto____11527 == null)))
{return h__2225__auto____11527;
} else
{var h__2225__auto____11528 = cljs.core.hash_imap.call(null,coll);
this__11526.__hash = h__2225__auto____11528;
return h__2225__auto____11528;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11529 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11530 = this;
if((k == null))
{if(this__11530.has_nil_QMARK_)
{return this__11530.nil_val;
} else
{return not_found;
}
} else
{if((this__11530.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__11530.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11531 = this;
if((k == null))
{if((function (){var and__3937__auto____11532 = this__11531.has_nil_QMARK_;
if(and__3937__auto____11532)
{return (v === this__11531.nil_val);
} else
{return and__3937__auto____11532;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11531.meta,((this__11531.has_nil_QMARK_)?this__11531.cnt:(this__11531.cnt + 1)),this__11531.root,true,v,null));
}
} else
{var added_leaf_QMARK___11533 = (new cljs.core.Box(false));
var new_root__11534 = (((this__11531.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11531.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11533);
if((new_root__11534 === this__11531.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11531.meta,((added_leaf_QMARK___11533.val)?(this__11531.cnt + 1):this__11531.cnt),new_root__11534,this__11531.has_nil_QMARK_,this__11531.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11535 = this;
if((k == null))
{return this__11535.has_nil_QMARK_;
} else
{if((this__11535.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__11535.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__11558 = null;
var G__11558__2 = (function (this_sym11536,k){
var this__11538 = this;
var this_sym11536__11539 = this;
var coll__11540 = this_sym11536__11539;
return coll__11540.cljs$core$ILookup$_lookup$arity$2(coll__11540,k);
});
var G__11558__3 = (function (this_sym11537,k,not_found){
var this__11538 = this;
var this_sym11537__11541 = this;
var coll__11542 = this_sym11537__11541;
return coll__11542.cljs$core$ILookup$_lookup$arity$3(coll__11542,k,not_found);
});
G__11558 = function(this_sym11537,k,not_found){
switch(arguments.length){
case 2:
return G__11558__2.call(this,this_sym11537,k);
case 3:
return G__11558__3.call(this,this_sym11537,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11558;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym11523,args11524){
var this__11543 = this;
return this_sym11523.call.apply(this_sym11523,[this_sym11523].concat(args11524.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11544 = this;
var init__11545 = ((this__11544.has_nil_QMARK_)?f.call(null,init,null,this__11544.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__11545))
{return cljs.core.deref.call(null,init__11545);
} else
{if(!((this__11544.root == null)))
{return this__11544.root.kv_reduce(f,init__11545);
} else
{if("\uFDD0'else")
{return init__11545;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11546 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__11547 = this;
var this__11548 = this;
return cljs.core.pr_str.call(null,this__11548);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11549 = this;
if((this__11549.cnt > 0))
{var s__11550 = ((!((this__11549.root == null)))?this__11549.root.inode_seq():null);
if(this__11549.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__11549.nil_val], true),s__11550);
} else
{return s__11550;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11551 = this;
return this__11551.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11552 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11553 = this;
return (new cljs.core.PersistentHashMap(meta,this__11553.cnt,this__11553.root,this__11553.has_nil_QMARK_,this__11553.nil_val,this__11553.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11554 = this;
return this__11554.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11555 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__11555.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11556 = this;
if((k == null))
{if(this__11556.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__11556.meta,(this__11556.cnt - 1),this__11556.root,false,null,null));
} else
{return coll;
}
} else
{if((this__11556.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__11557 = this__11556.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__11557 === this__11556.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11556.meta,(this__11556.cnt - 1),new_root__11557,this__11556.has_nil_QMARK_,this__11556.nil_val,null));
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
var len__11559 = ks.length;
var i__11560 = 0;
var out__11561 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__11560 < len__11559))
{{
var G__11562 = (i__11560 + 1);
var G__11563 = cljs.core.assoc_BANG_.call(null,out__11561,(ks[i__11560]),(vs[i__11560]));
i__11560 = G__11562;
out__11561 = G__11563;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11561);
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
var this__11564 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11565 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__11566 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11567 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11568 = this;
if((k == null))
{if(this__11568.has_nil_QMARK_)
{return this__11568.nil_val;
} else
{return null;
}
} else
{if((this__11568.root == null))
{return null;
} else
{return this__11568.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11569 = this;
if((k == null))
{if(this__11569.has_nil_QMARK_)
{return this__11569.nil_val;
} else
{return not_found;
}
} else
{if((this__11569.root == null))
{return not_found;
} else
{return this__11569.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11570 = this;
if(this__11570.edit)
{return this__11570.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__11571 = this;
var tcoll__11572 = this;
if(this__11571.edit)
{if((function (){var G__11573__11574 = o;
if(G__11573__11574)
{if((function (){var or__3939__auto____11575 = (G__11573__11574.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3939__auto____11575)
{return or__3939__auto____11575;
} else
{return G__11573__11574.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11573__11574.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11573__11574);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11573__11574);
}
})())
{return tcoll__11572.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11576 = cljs.core.seq.call(null,o);
var tcoll__11577 = tcoll__11572;
while(true){
var temp__4086__auto____11578 = cljs.core.first.call(null,es__11576);
if(cljs.core.truth_(temp__4086__auto____11578))
{var e__11579 = temp__4086__auto____11578;
{
var G__11590 = cljs.core.next.call(null,es__11576);
var G__11591 = tcoll__11577.assoc_BANG_(cljs.core.key.call(null,e__11579),cljs.core.val.call(null,e__11579));
es__11576 = G__11590;
tcoll__11577 = G__11591;
continue;
}
} else
{return tcoll__11577;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__11580 = this;
var tcoll__11581 = this;
if(this__11580.edit)
{if((k == null))
{if((this__11580.nil_val === v))
{} else
{this__11580.nil_val = v;
}
if(this__11580.has_nil_QMARK_)
{} else
{this__11580.count = (this__11580.count + 1);
this__11580.has_nil_QMARK_ = true;
}
return tcoll__11581;
} else
{var added_leaf_QMARK___11582 = (new cljs.core.Box(false));
var node__11583 = (((this__11580.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11580.root).inode_assoc_BANG_(this__11580.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11582);
if((node__11583 === this__11580.root))
{} else
{this__11580.root = node__11583;
}
if(added_leaf_QMARK___11582.val)
{this__11580.count = (this__11580.count + 1);
} else
{}
return tcoll__11581;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__11584 = this;
var tcoll__11585 = this;
if(this__11584.edit)
{if((k == null))
{if(this__11584.has_nil_QMARK_)
{this__11584.has_nil_QMARK_ = false;
this__11584.nil_val = null;
this__11584.count = (this__11584.count - 1);
return tcoll__11585;
} else
{return tcoll__11585;
}
} else
{if((this__11584.root == null))
{return tcoll__11585;
} else
{var removed_leaf_QMARK___11586 = (new cljs.core.Box(false));
var node__11587 = this__11584.root.inode_without_BANG_(this__11584.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___11586);
if((node__11587 === this__11584.root))
{} else
{this__11584.root = node__11587;
}
if(cljs.core.truth_((removed_leaf_QMARK___11586[0])))
{this__11584.count = (this__11584.count - 1);
} else
{}
return tcoll__11585;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__11588 = this;
var tcoll__11589 = this;
if(this__11588.edit)
{this__11588.edit = null;
return (new cljs.core.PersistentHashMap(null,this__11588.count,this__11588.root,this__11588.has_nil_QMARK_,this__11588.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__11594 = node;
var stack__11595 = stack;
while(true){
if(!((t__11594 == null)))
{{
var G__11596 = ((ascending_QMARK_)?t__11594.left:t__11594.right);
var G__11597 = cljs.core.conj.call(null,stack__11595,t__11594);
t__11594 = G__11596;
stack__11595 = G__11597;
continue;
}
} else
{return stack__11595;
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
var this__11598 = this;
var h__2225__auto____11599 = this__11598.__hash;
if(!((h__2225__auto____11599 == null)))
{return h__2225__auto____11599;
} else
{var h__2225__auto____11600 = cljs.core.hash_coll.call(null,coll);
this__11598.__hash = h__2225__auto____11600;
return h__2225__auto____11600;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11601 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__11602 = this;
var this__11603 = this;
return cljs.core.pr_str.call(null,this__11603);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11604 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11605 = this;
if((this__11605.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__11605.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__11606 = this;
return cljs.core.peek.call(null,this__11606.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__11607 = this;
var t__11608 = cljs.core.first.call(null,this__11607.stack);
var next_stack__11609 = cljs.core.tree_map_seq_push.call(null,((this__11607.ascending_QMARK_)?t__11608.right:t__11608.left),cljs.core.next.call(null,this__11607.stack),this__11607.ascending_QMARK_);
if(!((next_stack__11609 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__11609,this__11607.ascending_QMARK_,(this__11607.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11610 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11611 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__11611.stack,this__11611.ascending_QMARK_,this__11611.cnt,this__11611.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11612 = this;
return this__11612.meta;
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
{if((function (){var and__3937__auto____11614 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3937__auto____11614)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3937__auto____11614;
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
{if((function (){var and__3937__auto____11616 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3937__auto____11616)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3937__auto____11616;
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
var init__11620 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__11620))
{return cljs.core.deref.call(null,init__11620);
} else
{var init__11621 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__11620):init__11620);
if(cljs.core.reduced_QMARK_.call(null,init__11621))
{return cljs.core.deref.call(null,init__11621);
} else
{var init__11622 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__11621):init__11621);
if(cljs.core.reduced_QMARK_.call(null,init__11622))
{return cljs.core.deref.call(null,init__11622);
} else
{return init__11622;
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
var this__11625 = this;
var h__2225__auto____11626 = this__11625.__hash;
if(!((h__2225__auto____11626 == null)))
{return h__2225__auto____11626;
} else
{var h__2225__auto____11627 = cljs.core.hash_coll.call(null,coll);
this__11625.__hash = h__2225__auto____11627;
return h__2225__auto____11627;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11628 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11629 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11630 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11630.key,this__11630.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__11678 = null;
var G__11678__2 = (function (this_sym11631,k){
var this__11633 = this;
var this_sym11631__11634 = this;
var node__11635 = this_sym11631__11634;
return node__11635.cljs$core$ILookup$_lookup$arity$2(node__11635,k);
});
var G__11678__3 = (function (this_sym11632,k,not_found){
var this__11633 = this;
var this_sym11632__11636 = this;
var node__11637 = this_sym11632__11636;
return node__11637.cljs$core$ILookup$_lookup$arity$3(node__11637,k,not_found);
});
G__11678 = function(this_sym11632,k,not_found){
switch(arguments.length){
case 2:
return G__11678__2.call(this,this_sym11632,k);
case 3:
return G__11678__3.call(this,this_sym11632,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11678;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym11623,args11624){
var this__11638 = this;
return this_sym11623.call.apply(this_sym11623,[this_sym11623].concat(args11624.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11639 = this;
return cljs.core.PersistentVector.fromArray([this__11639.key,this__11639.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11640 = this;
return this__11640.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11641 = this;
return this__11641.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__11642 = this;
var node__11643 = this;
return ins.balance_right(node__11643);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__11644 = this;
var node__11645 = this;
return (new cljs.core.RedNode(this__11644.key,this__11644.val,this__11644.left,this__11644.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__11646 = this;
var node__11647 = this;
return cljs.core.balance_right_del.call(null,this__11646.key,this__11646.val,this__11646.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__11648 = this;
var node__11649 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__11650 = this;
var node__11651 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11651,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__11652 = this;
var node__11653 = this;
return cljs.core.balance_left_del.call(null,this__11652.key,this__11652.val,del,this__11652.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__11654 = this;
var node__11655 = this;
return ins.balance_left(node__11655);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__11656 = this;
var node__11657 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__11657,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__11679 = null;
var G__11679__0 = (function (){
var this__11658 = this;
var this__11660 = this;
return cljs.core.pr_str.call(null,this__11660);
});
G__11679 = function(){
switch(arguments.length){
case 0:
return G__11679__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11679;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__11661 = this;
var node__11662 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11662,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__11663 = this;
var node__11664 = this;
return node__11664;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11665 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11666 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11667 = this;
return cljs.core.list.call(null,this__11667.key,this__11667.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11668 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11669 = this;
return this__11669.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11670 = this;
return cljs.core.PersistentVector.fromArray([this__11670.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11671 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11671.key,this__11671.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11672 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11673 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11673.key,this__11673.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11674 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11675 = this;
if((n === 0))
{return this__11675.key;
} else
{if((n === 1))
{return this__11675.val;
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
var this__11676 = this;
if((n === 0))
{return this__11676.key;
} else
{if((n === 1))
{return this__11676.val;
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
var this__11677 = this;
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
var this__11682 = this;
var h__2225__auto____11683 = this__11682.__hash;
if(!((h__2225__auto____11683 == null)))
{return h__2225__auto____11683;
} else
{var h__2225__auto____11684 = cljs.core.hash_coll.call(null,coll);
this__11682.__hash = h__2225__auto____11684;
return h__2225__auto____11684;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11685 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11686 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11687 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11687.key,this__11687.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__11735 = null;
var G__11735__2 = (function (this_sym11688,k){
var this__11690 = this;
var this_sym11688__11691 = this;
var node__11692 = this_sym11688__11691;
return node__11692.cljs$core$ILookup$_lookup$arity$2(node__11692,k);
});
var G__11735__3 = (function (this_sym11689,k,not_found){
var this__11690 = this;
var this_sym11689__11693 = this;
var node__11694 = this_sym11689__11693;
return node__11694.cljs$core$ILookup$_lookup$arity$3(node__11694,k,not_found);
});
G__11735 = function(this_sym11689,k,not_found){
switch(arguments.length){
case 2:
return G__11735__2.call(this,this_sym11689,k);
case 3:
return G__11735__3.call(this,this_sym11689,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11735;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym11680,args11681){
var this__11695 = this;
return this_sym11680.call.apply(this_sym11680,[this_sym11680].concat(args11681.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11696 = this;
return cljs.core.PersistentVector.fromArray([this__11696.key,this__11696.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11697 = this;
return this__11697.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11698 = this;
return this__11698.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__11699 = this;
var node__11700 = this;
return (new cljs.core.RedNode(this__11699.key,this__11699.val,this__11699.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__11701 = this;
var node__11702 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__11703 = this;
var node__11704 = this;
return (new cljs.core.RedNode(this__11703.key,this__11703.val,this__11703.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__11705 = this;
var node__11706 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__11707 = this;
var node__11708 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11708,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__11709 = this;
var node__11710 = this;
return (new cljs.core.RedNode(this__11709.key,this__11709.val,del,this__11709.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__11711 = this;
var node__11712 = this;
return (new cljs.core.RedNode(this__11711.key,this__11711.val,ins,this__11711.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__11713 = this;
var node__11714 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11713.left))
{return (new cljs.core.RedNode(this__11713.key,this__11713.val,this__11713.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__11713.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11713.right))
{return (new cljs.core.RedNode(this__11713.right.key,this__11713.right.val,(new cljs.core.BlackNode(this__11713.key,this__11713.val,this__11713.left,this__11713.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__11713.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__11714,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__11736 = null;
var G__11736__0 = (function (){
var this__11715 = this;
var this__11717 = this;
return cljs.core.pr_str.call(null,this__11717);
});
G__11736 = function(){
switch(arguments.length){
case 0:
return G__11736__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11736;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__11718 = this;
var node__11719 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11718.right))
{return (new cljs.core.RedNode(this__11718.key,this__11718.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11718.left,null)),this__11718.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11718.left))
{return (new cljs.core.RedNode(this__11718.left.key,this__11718.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11718.left.left,null)),(new cljs.core.BlackNode(this__11718.key,this__11718.val,this__11718.left.right,this__11718.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11719,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__11720 = this;
var node__11721 = this;
return (new cljs.core.BlackNode(this__11720.key,this__11720.val,this__11720.left,this__11720.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11722 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11723 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11724 = this;
return cljs.core.list.call(null,this__11724.key,this__11724.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11725 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11726 = this;
return this__11726.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11727 = this;
return cljs.core.PersistentVector.fromArray([this__11727.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11728 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11728.key,this__11728.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11729 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11730 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11730.key,this__11730.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11731 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11732 = this;
if((n === 0))
{return this__11732.key;
} else
{if((n === 1))
{return this__11732.val;
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
var this__11733 = this;
if((n === 0))
{return this__11733.key;
} else
{if((n === 1))
{return this__11733.val;
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
var this__11734 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__11740 = comp.call(null,k,tree.key);
if((c__11740 === 0))
{(found[0] = tree);
return null;
} else
{if((c__11740 < 0))
{var ins__11741 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__11741 == null)))
{return tree.add_left(ins__11741);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__11742 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__11742 == null)))
{return tree.add_right(ins__11742);
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
{var app__11745 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11745))
{return (new cljs.core.RedNode(app__11745.key,app__11745.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__11745.left,null)),(new cljs.core.RedNode(right.key,right.val,app__11745.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__11745,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__11746 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11746))
{return (new cljs.core.RedNode(app__11746.key,app__11746.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__11746.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__11746.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__11746,right.right,null)));
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
{var c__11752 = comp.call(null,k,tree.key);
if((c__11752 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__11752 < 0))
{var del__11753 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3939__auto____11754 = !((del__11753 == null));
if(or__3939__auto____11754)
{return or__3939__auto____11754;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__11753,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__11753,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__11755 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3939__auto____11756 = !((del__11755 == null));
if(or__3939__auto____11756)
{return or__3939__auto____11756;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__11755);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__11755,null));
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
var tk__11759 = tree.key;
var c__11760 = comp.call(null,k,tk__11759);
if((c__11760 === 0))
{return tree.replace(tk__11759,v,tree.left,tree.right);
} else
{if((c__11760 < 0))
{return tree.replace(tk__11759,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__11759,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__11763 = this;
var h__2225__auto____11764 = this__11763.__hash;
if(!((h__2225__auto____11764 == null)))
{return h__2225__auto____11764;
} else
{var h__2225__auto____11765 = cljs.core.hash_imap.call(null,coll);
this__11763.__hash = h__2225__auto____11765;
return h__2225__auto____11765;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11766 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11767 = this;
var n__11768 = coll.entry_at(k);
if(!((n__11768 == null)))
{return n__11768.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11769 = this;
var found__11770 = [null];
var t__11771 = cljs.core.tree_map_add.call(null,this__11769.comp,this__11769.tree,k,v,found__11770);
if((t__11771 == null))
{var found_node__11772 = cljs.core.nth.call(null,found__11770,0);
if(cljs.core._EQ_.call(null,v,found_node__11772.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11769.comp,cljs.core.tree_map_replace.call(null,this__11769.comp,this__11769.tree,k,v),this__11769.cnt,this__11769.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11769.comp,t__11771.blacken(),(this__11769.cnt + 1),this__11769.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11773 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__11807 = null;
var G__11807__2 = (function (this_sym11774,k){
var this__11776 = this;
var this_sym11774__11777 = this;
var coll__11778 = this_sym11774__11777;
return coll__11778.cljs$core$ILookup$_lookup$arity$2(coll__11778,k);
});
var G__11807__3 = (function (this_sym11775,k,not_found){
var this__11776 = this;
var this_sym11775__11779 = this;
var coll__11780 = this_sym11775__11779;
return coll__11780.cljs$core$ILookup$_lookup$arity$3(coll__11780,k,not_found);
});
G__11807 = function(this_sym11775,k,not_found){
switch(arguments.length){
case 2:
return G__11807__2.call(this,this_sym11775,k);
case 3:
return G__11807__3.call(this,this_sym11775,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11807;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym11761,args11762){
var this__11781 = this;
return this_sym11761.call.apply(this_sym11761,[this_sym11761].concat(args11762.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11782 = this;
if(!((this__11782.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__11782.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11783 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11784 = this;
if((this__11784.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11784.tree,false,this__11784.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__11785 = this;
var this__11786 = this;
return cljs.core.pr_str.call(null,this__11786);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__11787 = this;
var coll__11788 = this;
var t__11789 = this__11787.tree;
while(true){
if(!((t__11789 == null)))
{var c__11790 = this__11787.comp.call(null,k,t__11789.key);
if((c__11790 === 0))
{return t__11789;
} else
{if((c__11790 < 0))
{{
var G__11808 = t__11789.left;
t__11789 = G__11808;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__11809 = t__11789.right;
t__11789 = G__11809;
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
var this__11791 = this;
if((this__11791.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11791.tree,ascending_QMARK_,this__11791.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11792 = this;
if((this__11792.cnt > 0))
{var stack__11793 = null;
var t__11794 = this__11792.tree;
while(true){
if(!((t__11794 == null)))
{var c__11795 = this__11792.comp.call(null,k,t__11794.key);
if((c__11795 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__11793,t__11794),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__11795 < 0))
{{
var G__11810 = cljs.core.conj.call(null,stack__11793,t__11794);
var G__11811 = t__11794.left;
stack__11793 = G__11810;
t__11794 = G__11811;
continue;
}
} else
{{
var G__11812 = stack__11793;
var G__11813 = t__11794.right;
stack__11793 = G__11812;
t__11794 = G__11813;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__11795 > 0))
{{
var G__11814 = cljs.core.conj.call(null,stack__11793,t__11794);
var G__11815 = t__11794.right;
stack__11793 = G__11814;
t__11794 = G__11815;
continue;
}
} else
{{
var G__11816 = stack__11793;
var G__11817 = t__11794.left;
stack__11793 = G__11816;
t__11794 = G__11817;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__11793 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__11793,ascending_QMARK_,-1,null));
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
var this__11796 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11797 = this;
return this__11797.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11798 = this;
if((this__11798.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11798.tree,true,this__11798.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11799 = this;
return this__11799.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11800 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11801 = this;
return (new cljs.core.PersistentTreeMap(this__11801.comp,this__11801.tree,this__11801.cnt,meta,this__11801.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11802 = this;
return this__11802.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11803 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__11803.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11804 = this;
var found__11805 = [null];
var t__11806 = cljs.core.tree_map_remove.call(null,this__11804.comp,this__11804.tree,k,found__11805);
if((t__11806 == null))
{if((cljs.core.nth.call(null,found__11805,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11804.comp,null,0,this__11804.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11804.comp,t__11806.blacken(),(this__11804.cnt - 1),this__11804.meta,null));
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
var in__11820 = cljs.core.seq.call(null,keyvals);
var out__11821 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__11820)
{{
var G__11822 = cljs.core.nnext.call(null,in__11820);
var G__11823 = cljs.core.assoc_BANG_.call(null,out__11821,cljs.core.first.call(null,in__11820),cljs.core.second.call(null,in__11820));
in__11820 = G__11822;
out__11821 = G__11823;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11821);
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
hash_map.cljs$lang$applyTo = (function (arglist__11824){
var keyvals = cljs.core.seq(arglist__11824);;
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
array_map.cljs$lang$applyTo = (function (arglist__11825){
var keyvals = cljs.core.seq(arglist__11825);;
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
var ks__11829 = [];
var obj__11830 = {};
var kvs__11831 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__11831)
{ks__11829.push(cljs.core.first.call(null,kvs__11831));
(obj__11830[cljs.core.first.call(null,kvs__11831)] = cljs.core.second.call(null,kvs__11831));
{
var G__11832 = cljs.core.nnext.call(null,kvs__11831);
kvs__11831 = G__11832;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__11829,obj__11830);
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
obj_map.cljs$lang$applyTo = (function (arglist__11833){
var keyvals = cljs.core.seq(arglist__11833);;
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
var in__11836 = cljs.core.seq.call(null,keyvals);
var out__11837 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__11836)
{{
var G__11838 = cljs.core.nnext.call(null,in__11836);
var G__11839 = cljs.core.assoc.call(null,out__11837,cljs.core.first.call(null,in__11836),cljs.core.second.call(null,in__11836));
in__11836 = G__11838;
out__11837 = G__11839;
continue;
}
} else
{return out__11837;
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
sorted_map.cljs$lang$applyTo = (function (arglist__11840){
var keyvals = cljs.core.seq(arglist__11840);;
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
var in__11843 = cljs.core.seq.call(null,keyvals);
var out__11844 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__11843)
{{
var G__11845 = cljs.core.nnext.call(null,in__11843);
var G__11846 = cljs.core.assoc.call(null,out__11844,cljs.core.first.call(null,in__11843),cljs.core.second.call(null,in__11843));
in__11843 = G__11845;
out__11844 = G__11846;
continue;
}
} else
{return out__11844;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__11847){
var comparator = cljs.core.first(arglist__11847);
var keyvals = cljs.core.rest(arglist__11847);
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
{return cljs.core.reduce.call(null,(function (p1__11848_SHARP_,p2__11849_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3939__auto____11851 = p1__11848_SHARP_;
if(cljs.core.truth_(or__3939__auto____11851))
{return or__3939__auto____11851;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__11849_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__11852){
var maps = cljs.core.seq(arglist__11852);;
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
{var merge_entry__11860 = (function (m,e){
var k__11858 = cljs.core.first.call(null,e);
var v__11859 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__11858))
{return cljs.core.assoc.call(null,m,k__11858,f.call(null,cljs.core._lookup.call(null,m,k__11858,null),v__11859));
} else
{return cljs.core.assoc.call(null,m,k__11858,v__11859);
}
});
var merge2__11862 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__11860,(function (){var or__3939__auto____11861 = m1;
if(cljs.core.truth_(or__3939__auto____11861))
{return or__3939__auto____11861;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__11862,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__11863){
var f = cljs.core.first(arglist__11863);
var maps = cljs.core.rest(arglist__11863);
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
var ret__11868 = cljs.core.ObjMap.EMPTY;
var keys__11869 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__11869)
{var key__11870 = cljs.core.first.call(null,keys__11869);
var entry__11871 = cljs.core._lookup.call(null,map,key__11870,"\uFDD0'cljs.core/not-found");
{
var G__11872 = ((cljs.core.not_EQ_.call(null,entry__11871,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__11868,key__11870,entry__11871):ret__11868);
var G__11873 = cljs.core.next.call(null,keys__11869);
ret__11868 = G__11872;
keys__11869 = G__11873;
continue;
}
} else
{return ret__11868;
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
var this__11877 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__11877.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11878 = this;
var h__2225__auto____11879 = this__11878.__hash;
if(!((h__2225__auto____11879 == null)))
{return h__2225__auto____11879;
} else
{var h__2225__auto____11880 = cljs.core.hash_iset.call(null,coll);
this__11878.__hash = h__2225__auto____11880;
return h__2225__auto____11880;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11881 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11882 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11882.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__11903 = null;
var G__11903__2 = (function (this_sym11883,k){
var this__11885 = this;
var this_sym11883__11886 = this;
var coll__11887 = this_sym11883__11886;
return coll__11887.cljs$core$ILookup$_lookup$arity$2(coll__11887,k);
});
var G__11903__3 = (function (this_sym11884,k,not_found){
var this__11885 = this;
var this_sym11884__11888 = this;
var coll__11889 = this_sym11884__11888;
return coll__11889.cljs$core$ILookup$_lookup$arity$3(coll__11889,k,not_found);
});
G__11903 = function(this_sym11884,k,not_found){
switch(arguments.length){
case 2:
return G__11903__2.call(this,this_sym11884,k);
case 3:
return G__11903__3.call(this,this_sym11884,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11903;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym11875,args11876){
var this__11890 = this;
return this_sym11875.call.apply(this_sym11875,[this_sym11875].concat(args11876.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11891 = this;
return (new cljs.core.PersistentHashSet(this__11891.meta,cljs.core.assoc.call(null,this__11891.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__11892 = this;
var this__11893 = this;
return cljs.core.pr_str.call(null,this__11893);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11894 = this;
return cljs.core.keys.call(null,this__11894.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11895 = this;
return (new cljs.core.PersistentHashSet(this__11895.meta,cljs.core.dissoc.call(null,this__11895.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11896 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11897 = this;
var and__3937__auto____11898 = cljs.core.set_QMARK_.call(null,other);
if(and__3937__auto____11898)
{var and__3937__auto____11899 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3937__auto____11899)
{return cljs.core.every_QMARK_.call(null,(function (p1__11874_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11874_SHARP_);
}),other);
} else
{return and__3937__auto____11899;
}
} else
{return and__3937__auto____11898;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11900 = this;
return (new cljs.core.PersistentHashSet(meta,this__11900.hash_map,this__11900.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11901 = this;
return this__11901.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11902 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__11902.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__11904 = cljs.core.count.call(null,items);
var i__11905 = 0;
var out__11906 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__11905 < len__11904))
{{
var G__11907 = (i__11905 + 1);
var G__11908 = cljs.core.conj_BANG_.call(null,out__11906,(items[i__11905]));
i__11905 = G__11907;
out__11906 = G__11908;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11906);
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
var G__11926 = null;
var G__11926__2 = (function (this_sym11912,k){
var this__11914 = this;
var this_sym11912__11915 = this;
var tcoll__11916 = this_sym11912__11915;
if((cljs.core._lookup.call(null,this__11914.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__11926__3 = (function (this_sym11913,k,not_found){
var this__11914 = this;
var this_sym11913__11917 = this;
var tcoll__11918 = this_sym11913__11917;
if((cljs.core._lookup.call(null,this__11914.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__11926 = function(this_sym11913,k,not_found){
switch(arguments.length){
case 2:
return G__11926__2.call(this,this_sym11913,k);
case 3:
return G__11926__3.call(this,this_sym11913,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11926;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym11910,args11911){
var this__11919 = this;
return this_sym11910.call.apply(this_sym11910,[this_sym11910].concat(args11911.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__11920 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__11921 = this;
if((cljs.core._lookup.call(null,this__11921.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11922 = this;
return cljs.core.count.call(null,this__11922.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__11923 = this;
this__11923.transient_map = cljs.core.dissoc_BANG_.call(null,this__11923.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11924 = this;
this__11924.transient_map = cljs.core.assoc_BANG_.call(null,this__11924.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11925 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__11925.transient_map),null));
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
var this__11929 = this;
var h__2225__auto____11930 = this__11929.__hash;
if(!((h__2225__auto____11930 == null)))
{return h__2225__auto____11930;
} else
{var h__2225__auto____11931 = cljs.core.hash_iset.call(null,coll);
this__11929.__hash = h__2225__auto____11931;
return h__2225__auto____11931;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11932 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11933 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11933.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__11959 = null;
var G__11959__2 = (function (this_sym11934,k){
var this__11936 = this;
var this_sym11934__11937 = this;
var coll__11938 = this_sym11934__11937;
return coll__11938.cljs$core$ILookup$_lookup$arity$2(coll__11938,k);
});
var G__11959__3 = (function (this_sym11935,k,not_found){
var this__11936 = this;
var this_sym11935__11939 = this;
var coll__11940 = this_sym11935__11939;
return coll__11940.cljs$core$ILookup$_lookup$arity$3(coll__11940,k,not_found);
});
G__11959 = function(this_sym11935,k,not_found){
switch(arguments.length){
case 2:
return G__11959__2.call(this,this_sym11935,k);
case 3:
return G__11959__3.call(this,this_sym11935,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11959;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym11927,args11928){
var this__11941 = this;
return this_sym11927.call.apply(this_sym11927,[this_sym11927].concat(args11928.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11942 = this;
return (new cljs.core.PersistentTreeSet(this__11942.meta,cljs.core.assoc.call(null,this__11942.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11943 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__11943.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__11944 = this;
var this__11945 = this;
return cljs.core.pr_str.call(null,this__11945);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__11946 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__11946.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11947 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__11947.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__11948 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11949 = this;
return cljs.core._comparator.call(null,this__11949.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11950 = this;
return cljs.core.keys.call(null,this__11950.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11951 = this;
return (new cljs.core.PersistentTreeSet(this__11951.meta,cljs.core.dissoc.call(null,this__11951.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11952 = this;
return cljs.core.count.call(null,this__11952.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11953 = this;
var and__3937__auto____11954 = cljs.core.set_QMARK_.call(null,other);
if(and__3937__auto____11954)
{var and__3937__auto____11955 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3937__auto____11955)
{return cljs.core.every_QMARK_.call(null,(function (p1__11909_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11909_SHARP_);
}),other);
} else
{return and__3937__auto____11955;
}
} else
{return and__3937__auto____11954;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11956 = this;
return (new cljs.core.PersistentTreeSet(meta,this__11956.tree_map,this__11956.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11957 = this;
return this__11957.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11958 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__11958.meta);
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
var G__11964__delegate = function (keys){
var in__11962 = cljs.core.seq.call(null,keys);
var out__11963 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__11962))
{{
var G__11965 = cljs.core.next.call(null,in__11962);
var G__11966 = cljs.core.conj_BANG_.call(null,out__11963,cljs.core.first.call(null,in__11962));
in__11962 = G__11965;
out__11963 = G__11966;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11963);
}
break;
}
};
var G__11964 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11964__delegate.call(this, keys);
};
G__11964.cljs$lang$maxFixedArity = 0;
G__11964.cljs$lang$applyTo = (function (arglist__11967){
var keys = cljs.core.seq(arglist__11967);;
return G__11964__delegate(keys);
});
G__11964.cljs$lang$arity$variadic = G__11964__delegate;
return G__11964;
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
sorted_set.cljs$lang$applyTo = (function (arglist__11968){
var keys = cljs.core.seq(arglist__11968);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__11970){
var comparator = cljs.core.first(arglist__11970);
var keys = cljs.core.rest(arglist__11970);
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
{var n__11976 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__4086__auto____11977 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__4086__auto____11977))
{var e__11978 = temp__4086__auto____11977;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11978));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11976,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11969_SHARP_){
var temp__4086__auto____11979 = cljs.core.find.call(null,smap,p1__11969_SHARP_);
if(cljs.core.truth_(temp__4086__auto____11979))
{var e__11980 = temp__4086__auto____11979;
return cljs.core.second.call(null,e__11980);
} else
{return p1__11969_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__12010 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__12003,seen){
while(true){
var vec__12004__12005 = p__12003;
var f__12006 = cljs.core.nth.call(null,vec__12004__12005,0,null);
var xs__12007 = vec__12004__12005;
var temp__4088__auto____12008 = cljs.core.seq.call(null,xs__12007);
if(temp__4088__auto____12008)
{var s__12009 = temp__4088__auto____12008;
if(cljs.core.contains_QMARK_.call(null,seen,f__12006))
{{
var G__12011 = cljs.core.rest.call(null,s__12009);
var G__12012 = seen;
p__12003 = G__12011;
seen = G__12012;
continue;
}
} else
{return cljs.core.cons.call(null,f__12006,step.call(null,cljs.core.rest.call(null,s__12009),cljs.core.conj.call(null,seen,f__12006)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__12010.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__12015 = cljs.core.PersistentVector.EMPTY;
var s__12016 = s;
while(true){
if(cljs.core.next.call(null,s__12016))
{{
var G__12017 = cljs.core.conj.call(null,ret__12015,cljs.core.first.call(null,s__12016));
var G__12018 = cljs.core.next.call(null,s__12016);
ret__12015 = G__12017;
s__12016 = G__12018;
continue;
}
} else
{return cljs.core.seq.call(null,ret__12015);
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
{if((function (){var or__3939__auto____12021 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3939__auto____12021)
{return or__3939__auto____12021;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__12022 = x.lastIndexOf("/");
if((i__12022 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__12022 + 1));
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
if((function (){var or__3939__auto____12025 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3939__auto____12025)
{return or__3939__auto____12025;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__12026 = x.lastIndexOf("/");
if((i__12026 > -1))
{return cljs.core.subs.call(null,x,2,i__12026);
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
var map__12033 = cljs.core.ObjMap.EMPTY;
var ks__12034 = cljs.core.seq.call(null,keys);
var vs__12035 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3937__auto____12036 = ks__12034;
if(and__3937__auto____12036)
{return vs__12035;
} else
{return and__3937__auto____12036;
}
})())
{{
var G__12037 = cljs.core.assoc.call(null,map__12033,cljs.core.first.call(null,ks__12034),cljs.core.first.call(null,vs__12035));
var G__12038 = cljs.core.next.call(null,ks__12034);
var G__12039 = cljs.core.next.call(null,vs__12035);
map__12033 = G__12037;
ks__12034 = G__12038;
vs__12035 = G__12039;
continue;
}
} else
{return map__12033;
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
var G__12042__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12027_SHARP_,p2__12028_SHARP_){
return max_key.call(null,k,p1__12027_SHARP_,p2__12028_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__12042 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12042__delegate.call(this, k, x, y, more);
};
G__12042.cljs$lang$maxFixedArity = 3;
G__12042.cljs$lang$applyTo = (function (arglist__12043){
var k = cljs.core.first(arglist__12043);
var x = cljs.core.first(cljs.core.next(arglist__12043));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12043)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12043)));
return G__12042__delegate(k, x, y, more);
});
G__12042.cljs$lang$arity$variadic = G__12042__delegate;
return G__12042;
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
var G__12044__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12040_SHARP_,p2__12041_SHARP_){
return min_key.call(null,k,p1__12040_SHARP_,p2__12041_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__12044 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12044__delegate.call(this, k, x, y, more);
};
G__12044.cljs$lang$maxFixedArity = 3;
G__12044.cljs$lang$applyTo = (function (arglist__12045){
var k = cljs.core.first(arglist__12045);
var x = cljs.core.first(cljs.core.next(arglist__12045));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12045)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12045)));
return G__12044__delegate(k, x, y, more);
});
G__12044.cljs$lang$arity$variadic = G__12044__delegate;
return G__12044;
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
var temp__4088__auto____12048 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____12048)
{var s__12049 = temp__4088__auto____12048;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__12049),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__12049)));
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
var temp__4088__auto____12052 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____12052)
{var s__12053 = temp__4088__auto____12052;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__12053))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12053),take_while.call(null,pred,cljs.core.rest.call(null,s__12053)));
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
var comp__12055 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__12055.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__12067 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__4088__auto____12068 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__4088__auto____12068))
{var vec__12069__12070 = temp__4088__auto____12068;
var e__12071 = cljs.core.nth.call(null,vec__12069__12070,0,null);
var s__12072 = vec__12069__12070;
if(cljs.core.truth_(include__12067.call(null,e__12071)))
{return s__12072;
} else
{return cljs.core.next.call(null,s__12072);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__12067,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4088__auto____12073 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__4088__auto____12073))
{var vec__12074__12075 = temp__4088__auto____12073;
var e__12076 = cljs.core.nth.call(null,vec__12074__12075,0,null);
var s__12077 = vec__12074__12075;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__12076))?s__12077:cljs.core.next.call(null,s__12077)));
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
var include__12089 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__4088__auto____12090 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__4088__auto____12090))
{var vec__12091__12092 = temp__4088__auto____12090;
var e__12093 = cljs.core.nth.call(null,vec__12091__12092,0,null);
var s__12094 = vec__12091__12092;
if(cljs.core.truth_(include__12089.call(null,e__12093)))
{return s__12094;
} else
{return cljs.core.next.call(null,s__12094);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__12089,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4088__auto____12095 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__4088__auto____12095))
{var vec__12096__12097 = temp__4088__auto____12095;
var e__12098 = cljs.core.nth.call(null,vec__12096__12097,0,null);
var s__12099 = vec__12096__12097;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__12098))?s__12099:cljs.core.next.call(null,s__12099)));
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
var this__12100 = this;
var h__2225__auto____12101 = this__12100.__hash;
if(!((h__2225__auto____12101 == null)))
{return h__2225__auto____12101;
} else
{var h__2225__auto____12102 = cljs.core.hash_coll.call(null,rng);
this__12100.__hash = h__2225__auto____12102;
return h__2225__auto____12102;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__12103 = this;
if((this__12103.step > 0))
{if(((this__12103.start + this__12103.step) < this__12103.end))
{return (new cljs.core.Range(this__12103.meta,(this__12103.start + this__12103.step),this__12103.end,this__12103.step,null));
} else
{return null;
}
} else
{if(((this__12103.start + this__12103.step) > this__12103.end))
{return (new cljs.core.Range(this__12103.meta,(this__12103.start + this__12103.step),this__12103.end,this__12103.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__12104 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__12105 = this;
var this__12106 = this;
return cljs.core.pr_str.call(null,this__12106);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__12107 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__12108 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__12109 = this;
if((this__12109.step > 0))
{if((this__12109.start < this__12109.end))
{return rng;
} else
{return null;
}
} else
{if((this__12109.start > this__12109.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__12110 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__12110.end - this__12110.start) / this__12110.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__12111 = this;
return this__12111.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__12112 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__12112.meta,(this__12112.start + this__12112.step),this__12112.end,this__12112.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__12113 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__12114 = this;
return (new cljs.core.Range(meta,this__12114.start,this__12114.end,this__12114.step,this__12114.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__12115 = this;
return this__12115.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__12116 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__12116.start + (n * this__12116.step));
} else
{if((function (){var and__3937__auto____12117 = (this__12116.start > this__12116.end);
if(and__3937__auto____12117)
{return (this__12116.step === 0);
} else
{return and__3937__auto____12117;
}
})())
{return this__12116.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__12118 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__12118.start + (n * this__12118.step));
} else
{if((function (){var and__3937__auto____12119 = (this__12118.start > this__12118.end);
if(and__3937__auto____12119)
{return (this__12118.step === 0);
} else
{return and__3937__auto____12119;
}
})())
{return this__12118.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__12120 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12120.meta);
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
var temp__4088__auto____12123 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____12123)
{var s__12124 = temp__4088__auto____12123;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__12124),take_nth.call(null,n,cljs.core.drop.call(null,n,s__12124)));
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
var temp__4088__auto____12131 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____12131)
{var s__12132 = temp__4088__auto____12131;
var fst__12133 = cljs.core.first.call(null,s__12132);
var fv__12134 = f.call(null,fst__12133);
var run__12135 = cljs.core.cons.call(null,fst__12133,cljs.core.take_while.call(null,(function (p1__12125_SHARP_){
return cljs.core._EQ_.call(null,fv__12134,f.call(null,p1__12125_SHARP_));
}),cljs.core.next.call(null,s__12132)));
return cljs.core.cons.call(null,run__12135,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__12135),s__12132))));
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
var temp__4086__auto____12150 = cljs.core.seq.call(null,coll);
if(temp__4086__auto____12150)
{var s__12151 = temp__4086__auto____12150;
return reductions.call(null,f,cljs.core.first.call(null,s__12151),cljs.core.rest.call(null,s__12151));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____12152 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____12152)
{var s__12153 = temp__4088__auto____12152;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__12153)),cljs.core.rest.call(null,s__12153));
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
var G__12156 = null;
var G__12156__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__12156__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__12156__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__12156__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__12156__4 = (function() { 
var G__12157__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__12157 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12157__delegate.call(this, x, y, z, args);
};
G__12157.cljs$lang$maxFixedArity = 3;
G__12157.cljs$lang$applyTo = (function (arglist__12158){
var x = cljs.core.first(arglist__12158);
var y = cljs.core.first(cljs.core.next(arglist__12158));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12158)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12158)));
return G__12157__delegate(x, y, z, args);
});
G__12157.cljs$lang$arity$variadic = G__12157__delegate;
return G__12157;
})()
;
G__12156 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12156__0.call(this);
case 1:
return G__12156__1.call(this,x);
case 2:
return G__12156__2.call(this,x,y);
case 3:
return G__12156__3.call(this,x,y,z);
default:
return G__12156__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12156.cljs$lang$maxFixedArity = 3;
G__12156.cljs$lang$applyTo = G__12156__4.cljs$lang$applyTo;
return G__12156;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__12159 = null;
var G__12159__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__12159__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__12159__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__12159__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__12159__4 = (function() { 
var G__12160__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12160 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12160__delegate.call(this, x, y, z, args);
};
G__12160.cljs$lang$maxFixedArity = 3;
G__12160.cljs$lang$applyTo = (function (arglist__12161){
var x = cljs.core.first(arglist__12161);
var y = cljs.core.first(cljs.core.next(arglist__12161));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12161)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12161)));
return G__12160__delegate(x, y, z, args);
});
G__12160.cljs$lang$arity$variadic = G__12160__delegate;
return G__12160;
})()
;
G__12159 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12159__0.call(this);
case 1:
return G__12159__1.call(this,x);
case 2:
return G__12159__2.call(this,x,y);
case 3:
return G__12159__3.call(this,x,y,z);
default:
return G__12159__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12159.cljs$lang$maxFixedArity = 3;
G__12159.cljs$lang$applyTo = G__12159__4.cljs$lang$applyTo;
return G__12159;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__12162 = null;
var G__12162__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__12162__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__12162__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__12162__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__12162__4 = (function() { 
var G__12163__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__12163 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12163__delegate.call(this, x, y, z, args);
};
G__12163.cljs$lang$maxFixedArity = 3;
G__12163.cljs$lang$applyTo = (function (arglist__12164){
var x = cljs.core.first(arglist__12164);
var y = cljs.core.first(cljs.core.next(arglist__12164));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12164)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12164)));
return G__12163__delegate(x, y, z, args);
});
G__12163.cljs$lang$arity$variadic = G__12163__delegate;
return G__12163;
})()
;
G__12162 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12162__0.call(this);
case 1:
return G__12162__1.call(this,x);
case 2:
return G__12162__2.call(this,x,y);
case 3:
return G__12162__3.call(this,x,y,z);
default:
return G__12162__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12162.cljs$lang$maxFixedArity = 3;
G__12162.cljs$lang$applyTo = G__12162__4.cljs$lang$applyTo;
return G__12162;
})()
});
var juxt__4 = (function() { 
var G__12165__delegate = function (f,g,h,fs){
var fs__12155 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__12166 = null;
var G__12166__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__12136_SHARP_,p2__12137_SHARP_){
return cljs.core.conj.call(null,p1__12136_SHARP_,p2__12137_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__12155);
});
var G__12166__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__12138_SHARP_,p2__12139_SHARP_){
return cljs.core.conj.call(null,p1__12138_SHARP_,p2__12139_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__12155);
});
var G__12166__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__12140_SHARP_,p2__12141_SHARP_){
return cljs.core.conj.call(null,p1__12140_SHARP_,p2__12141_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__12155);
});
var G__12166__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__12142_SHARP_,p2__12143_SHARP_){
return cljs.core.conj.call(null,p1__12142_SHARP_,p2__12143_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__12155);
});
var G__12166__4 = (function() { 
var G__12167__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__12144_SHARP_,p2__12145_SHARP_){
return cljs.core.conj.call(null,p1__12144_SHARP_,cljs.core.apply.call(null,p2__12145_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__12155);
};
var G__12167 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12167__delegate.call(this, x, y, z, args);
};
G__12167.cljs$lang$maxFixedArity = 3;
G__12167.cljs$lang$applyTo = (function (arglist__12168){
var x = cljs.core.first(arglist__12168);
var y = cljs.core.first(cljs.core.next(arglist__12168));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12168)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12168)));
return G__12167__delegate(x, y, z, args);
});
G__12167.cljs$lang$arity$variadic = G__12167__delegate;
return G__12167;
})()
;
G__12166 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12166__0.call(this);
case 1:
return G__12166__1.call(this,x);
case 2:
return G__12166__2.call(this,x,y);
case 3:
return G__12166__3.call(this,x,y,z);
default:
return G__12166__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12166.cljs$lang$maxFixedArity = 3;
G__12166.cljs$lang$applyTo = G__12166__4.cljs$lang$applyTo;
return G__12166;
})()
};
var G__12165 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12165__delegate.call(this, f, g, h, fs);
};
G__12165.cljs$lang$maxFixedArity = 3;
G__12165.cljs$lang$applyTo = (function (arglist__12169){
var f = cljs.core.first(arglist__12169);
var g = cljs.core.first(cljs.core.next(arglist__12169));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12169)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12169)));
return G__12165__delegate(f, g, h, fs);
});
G__12165.cljs$lang$arity$variadic = G__12165__delegate;
return G__12165;
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
var G__12172 = cljs.core.next.call(null,coll);
coll = G__12172;
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
if(cljs.core.truth_((function (){var and__3937__auto____12171 = cljs.core.seq.call(null,coll);
if(and__3937__auto____12171)
{return (n > 0);
} else
{return and__3937__auto____12171;
}
})()))
{{
var G__12173 = (n - 1);
var G__12174 = cljs.core.next.call(null,coll);
n = G__12173;
coll = G__12174;
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
var matches__12176 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__12176),s))
{if((cljs.core.count.call(null,matches__12176) === 1))
{return cljs.core.first.call(null,matches__12176);
} else
{return cljs.core.vec.call(null,matches__12176);
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
var matches__12178 = re.exec(s);
if((matches__12178 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__12178) === 1))
{return cljs.core.first.call(null,matches__12178);
} else
{return cljs.core.vec.call(null,matches__12178);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__12183 = cljs.core.re_find.call(null,re,s);
var match_idx__12184 = s.search(re);
var match_str__12185 = ((cljs.core.coll_QMARK_.call(null,match_data__12183))?cljs.core.first.call(null,match_data__12183):match_data__12183);
var post_match__12186 = cljs.core.subs.call(null,s,(match_idx__12184 + cljs.core.count.call(null,match_str__12185)));
if(cljs.core.truth_(match_data__12183))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__12183,re_seq.call(null,re,post_match__12186));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__12193__12194 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___12195 = cljs.core.nth.call(null,vec__12193__12194,0,null);
var flags__12196 = cljs.core.nth.call(null,vec__12193__12194,1,null);
var pattern__12197 = cljs.core.nth.call(null,vec__12193__12194,2,null);
return (new RegExp(pattern__12197,flags__12196));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__12187_SHARP_){
return print_one.call(null,p1__12187_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3937__auto____12207 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3937__auto____12207))
{var and__3937__auto____12211 = (function (){var G__12208__12209 = obj;
if(G__12208__12209)
{if((function (){var or__3939__auto____12210 = (G__12208__12209.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3939__auto____12210)
{return or__3939__auto____12210;
} else
{return G__12208__12209.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__12208__12209.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__12208__12209);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__12208__12209);
}
})();
if(cljs.core.truth_(and__3937__auto____12211))
{return cljs.core.meta.call(null,obj);
} else
{return and__3937__auto____12211;
}
} else
{return and__3937__auto____12207;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3937__auto____12212 = !((obj == null));
if(and__3937__auto____12212)
{return obj.cljs$lang$type;
} else
{return and__3937__auto____12212;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__12213__12214 = obj;
if(G__12213__12214)
{if((function (){var or__3939__auto____12215 = (G__12213__12214.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3939__auto____12215)
{return or__3939__auto____12215;
} else
{return G__12213__12214.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__12213__12214.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__12213__12214);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__12213__12214);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__12235 = (new goog.string.StringBuffer());
var G__12236__12237 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__12236__12237)
{var string__12238 = cljs.core.first.call(null,G__12236__12237);
var G__12236__12239 = G__12236__12237;
while(true){
sb__12235.append(string__12238);
var temp__4088__auto____12240 = cljs.core.next.call(null,G__12236__12239);
if(temp__4088__auto____12240)
{var G__12236__12241 = temp__4088__auto____12240;
{
var G__12254 = cljs.core.first.call(null,G__12236__12241);
var G__12255 = G__12236__12241;
string__12238 = G__12254;
G__12236__12239 = G__12255;
continue;
}
} else
{}
break;
}
} else
{}
var G__12242__12243 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__12242__12243)
{var obj__12244 = cljs.core.first.call(null,G__12242__12243);
var G__12242__12245 = G__12242__12243;
while(true){
sb__12235.append(" ");
var G__12246__12247 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12244,opts));
if(G__12246__12247)
{var string__12248 = cljs.core.first.call(null,G__12246__12247);
var G__12246__12249 = G__12246__12247;
while(true){
sb__12235.append(string__12248);
var temp__4088__auto____12250 = cljs.core.next.call(null,G__12246__12249);
if(temp__4088__auto____12250)
{var G__12246__12251 = temp__4088__auto____12250;
{
var G__12256 = cljs.core.first.call(null,G__12246__12251);
var G__12257 = G__12246__12251;
string__12248 = G__12256;
G__12246__12249 = G__12257;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4088__auto____12252 = cljs.core.next.call(null,G__12242__12245);
if(temp__4088__auto____12252)
{var G__12242__12253 = temp__4088__auto____12252;
{
var G__12258 = cljs.core.first.call(null,G__12242__12253);
var G__12259 = G__12242__12253;
obj__12244 = G__12258;
G__12242__12245 = G__12259;
continue;
}
} else
{}
break;
}
} else
{}
return sb__12235;
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
var sb__12261 = cljs.core.pr_sb.call(null,objs,opts);
sb__12261.append("\n");
return [cljs.core.str(sb__12261)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__12280__12281 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__12280__12281)
{var string__12282 = cljs.core.first.call(null,G__12280__12281);
var G__12280__12283 = G__12280__12281;
while(true){
cljs.core.string_print.call(null,string__12282);
var temp__4088__auto____12284 = cljs.core.next.call(null,G__12280__12283);
if(temp__4088__auto____12284)
{var G__12280__12285 = temp__4088__auto____12284;
{
var G__12298 = cljs.core.first.call(null,G__12280__12285);
var G__12299 = G__12280__12285;
string__12282 = G__12298;
G__12280__12283 = G__12299;
continue;
}
} else
{}
break;
}
} else
{}
var G__12286__12287 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__12286__12287)
{var obj__12288 = cljs.core.first.call(null,G__12286__12287);
var G__12286__12289 = G__12286__12287;
while(true){
cljs.core.string_print.call(null," ");
var G__12290__12291 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12288,opts));
if(G__12290__12291)
{var string__12292 = cljs.core.first.call(null,G__12290__12291);
var G__12290__12293 = G__12290__12291;
while(true){
cljs.core.string_print.call(null,string__12292);
var temp__4088__auto____12294 = cljs.core.next.call(null,G__12290__12293);
if(temp__4088__auto____12294)
{var G__12290__12295 = temp__4088__auto____12294;
{
var G__12300 = cljs.core.first.call(null,G__12290__12295);
var G__12301 = G__12290__12295;
string__12292 = G__12300;
G__12290__12293 = G__12301;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4088__auto____12296 = cljs.core.next.call(null,G__12286__12289);
if(temp__4088__auto____12296)
{var G__12286__12297 = temp__4088__auto____12296;
{
var G__12302 = cljs.core.first.call(null,G__12286__12297);
var G__12303 = G__12286__12297;
obj__12288 = G__12302;
G__12286__12289 = G__12303;
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
pr_str.cljs$lang$applyTo = (function (arglist__12304){
var objs = cljs.core.seq(arglist__12304);;
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
prn_str.cljs$lang$applyTo = (function (arglist__12305){
var objs = cljs.core.seq(arglist__12305);;
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
pr.cljs$lang$applyTo = (function (arglist__12306){
var objs = cljs.core.seq(arglist__12306);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__12307){
var objs = cljs.core.seq(arglist__12307);;
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
print_str.cljs$lang$applyTo = (function (arglist__12308){
var objs = cljs.core.seq(arglist__12308);;
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
println.cljs$lang$applyTo = (function (arglist__12309){
var objs = cljs.core.seq(arglist__12309);;
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
println_str.cljs$lang$applyTo = (function (arglist__12310){
var objs = cljs.core.seq(arglist__12310);;
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
prn.cljs$lang$applyTo = (function (arglist__12311){
var objs = cljs.core.seq(arglist__12311);;
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
printf.cljs$lang$applyTo = (function (arglist__12312){
var fmt = cljs.core.first(arglist__12312);
var args = cljs.core.rest(arglist__12312);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__12313 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12313,"{",", ","}",opts,coll);
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
var pr_pair__12314 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12314,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__12315 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12315,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__4088__auto____12316 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4088__auto____12316))
{var nspc__12317 = temp__4088__auto____12316;
return [cljs.core.str(nspc__12317),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__4088__auto____12318 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4088__auto____12318))
{var nspc__12319 = temp__4088__auto____12318;
return [cljs.core.str(nspc__12319),cljs.core.str("/")].join('');
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
var pr_pair__12320 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12320,"{",", ","}",opts,coll);
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
var normalize__12322 = (function (n,len){
var ns__12321 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__12321) < len))
{{
var G__12324 = [cljs.core.str("0"),cljs.core.str(ns__12321)].join('');
ns__12321 = G__12324;
continue;
}
} else
{return ns__12321;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__12322.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__12322.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__12322.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__12322.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__12322.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__12322.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__12323 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12323,"{",", ","}",opts,coll);
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
var this__12325 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__12326 = this;
var G__12327__12328 = cljs.core.seq.call(null,this__12326.watches);
if(G__12327__12328)
{var G__12330__12332 = cljs.core.first.call(null,G__12327__12328);
var vec__12331__12333 = G__12330__12332;
var key__12334 = cljs.core.nth.call(null,vec__12331__12333,0,null);
var f__12335 = cljs.core.nth.call(null,vec__12331__12333,1,null);
var G__12327__12336 = G__12327__12328;
var G__12330__12337 = G__12330__12332;
var G__12327__12338 = G__12327__12336;
while(true){
var vec__12339__12340 = G__12330__12337;
var key__12341 = cljs.core.nth.call(null,vec__12339__12340,0,null);
var f__12342 = cljs.core.nth.call(null,vec__12339__12340,1,null);
var G__12327__12343 = G__12327__12338;
f__12342.call(null,key__12341,this$,oldval,newval);
var temp__4088__auto____12344 = cljs.core.next.call(null,G__12327__12343);
if(temp__4088__auto____12344)
{var G__12327__12345 = temp__4088__auto____12344;
{
var G__12352 = cljs.core.first.call(null,G__12327__12345);
var G__12353 = G__12327__12345;
G__12330__12337 = G__12352;
G__12327__12338 = G__12353;
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
var this__12346 = this;
return this$.watches = cljs.core.assoc.call(null,this__12346.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__12347 = this;
return this$.watches = cljs.core.dissoc.call(null,this__12347.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__12348 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__12348.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__12349 = this;
return this__12349.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12350 = this;
return this__12350.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__12351 = this;
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
var G__12365__delegate = function (x,p__12354){
var map__12360__12361 = p__12354;
var map__12360__12362 = ((cljs.core.seq_QMARK_.call(null,map__12360__12361))?cljs.core.apply.call(null,cljs.core.hash_map,map__12360__12361):map__12360__12361);
var validator__12363 = cljs.core._lookup.call(null,map__12360__12362,"\uFDD0'validator",null);
var meta__12364 = cljs.core._lookup.call(null,map__12360__12362,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__12364,validator__12363,null));
};
var G__12365 = function (x,var_args){
var p__12354 = null;
if (goog.isDef(var_args)) {
  p__12354 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12365__delegate.call(this, x, p__12354);
};
G__12365.cljs$lang$maxFixedArity = 1;
G__12365.cljs$lang$applyTo = (function (arglist__12366){
var x = cljs.core.first(arglist__12366);
var p__12354 = cljs.core.rest(arglist__12366);
return G__12365__delegate(x, p__12354);
});
G__12365.cljs$lang$arity$variadic = G__12365__delegate;
return G__12365;
})()
;
atom = function(x,var_args){
var p__12354 = var_args;
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
var temp__4088__auto____12370 = a.validator;
if(cljs.core.truth_(temp__4088__auto____12370))
{var validate__12371 = temp__4088__auto____12370;
if(cljs.core.truth_(validate__12371.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440,"\uFDD0'column",13))))].join('')));
}
} else
{}
var old_value__12372 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__12372,new_value);
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
var G__12373__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__12373 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12373__delegate.call(this, a, f, x, y, z, more);
};
G__12373.cljs$lang$maxFixedArity = 5;
G__12373.cljs$lang$applyTo = (function (arglist__12374){
var a = cljs.core.first(arglist__12374);
var f = cljs.core.first(cljs.core.next(arglist__12374));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12374)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12374))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12374)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12374)))));
return G__12373__delegate(a, f, x, y, z, more);
});
G__12373.cljs$lang$arity$variadic = G__12373__delegate;
return G__12373;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__12375){
var iref = cljs.core.first(arglist__12375);
var f = cljs.core.first(cljs.core.next(arglist__12375));
var args = cljs.core.rest(cljs.core.next(arglist__12375));
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
var this__12376 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__12376.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12377 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__12377.state,(function (p__12378){
var map__12379__12380 = p__12378;
var map__12379__12381 = ((cljs.core.seq_QMARK_.call(null,map__12379__12380))?cljs.core.apply.call(null,cljs.core.hash_map,map__12379__12380):map__12379__12380);
var curr_state__12382 = map__12379__12381;
var done__12383 = cljs.core._lookup.call(null,map__12379__12381,"\uFDD0'done",null);
if(cljs.core.truth_(done__12383))
{return curr_state__12382;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__12377.f.call(null)});
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
var map__12412__12413 = options;
var map__12412__12414 = ((cljs.core.seq_QMARK_.call(null,map__12412__12413))?cljs.core.apply.call(null,cljs.core.hash_map,map__12412__12413):map__12412__12413);
var keywordize_keys__12415 = cljs.core._lookup.call(null,map__12412__12414,"\uFDD0'keywordize-keys",null);
var keyfn__12416 = (cljs.core.truth_(keywordize_keys__12415)?cljs.core.keyword:cljs.core.str);
var f__12439 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2495__auto____12438 = (function iter__12428(s__12429){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12429__12434 = s__12429;
while(true){
var temp__4088__auto____12435 = cljs.core.seq.call(null,s__12429__12434);
if(temp__4088__auto____12435)
{var xs__4574__auto____12436 = temp__4088__auto____12435;
var k__12437 = cljs.core.first.call(null,xs__4574__auto____12436);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__12416.call(null,k__12437),thisfn.call(null,(x[k__12437]))], true),iter__12428.call(null,cljs.core.rest.call(null,s__12429__12434)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2495__auto____12438.call(null,cljs.core.js_keys.call(null,x));
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
return f__12439.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__12440){
var x = cljs.core.first(arglist__12440);
var options = cljs.core.rest(arglist__12440);
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
var mem__12445 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__12449__delegate = function (args){
var temp__4086__auto____12446 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__12445),args,null);
if(cljs.core.truth_(temp__4086__auto____12446))
{var v__12447 = temp__4086__auto____12446;
return v__12447;
} else
{var ret__12448 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__12445,cljs.core.assoc,args,ret__12448);
return ret__12448;
}
};
var G__12449 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12449__delegate.call(this, args);
};
G__12449.cljs$lang$maxFixedArity = 0;
G__12449.cljs$lang$applyTo = (function (arglist__12450){
var args = cljs.core.seq(arglist__12450);;
return G__12449__delegate(args);
});
G__12449.cljs$lang$arity$variadic = G__12449__delegate;
return G__12449;
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
var ret__12452 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__12452))
{{
var G__12453 = ret__12452;
f = G__12453;
continue;
}
} else
{return ret__12452;
}
break;
}
});
var trampoline__2 = (function() { 
var G__12454__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__12454 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12454__delegate.call(this, f, args);
};
G__12454.cljs$lang$maxFixedArity = 1;
G__12454.cljs$lang$applyTo = (function (arglist__12455){
var f = cljs.core.first(arglist__12455);
var args = cljs.core.rest(arglist__12455);
return G__12454__delegate(f, args);
});
G__12454.cljs$lang$arity$variadic = G__12454__delegate;
return G__12454;
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
var k__12457 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__12457,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__12457,cljs.core.PersistentVector.EMPTY),x));
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
var or__3939__auto____12466 = cljs.core._EQ_.call(null,child,parent);
if(or__3939__auto____12466)
{return or__3939__auto____12466;
} else
{var or__3939__auto____12467 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3939__auto____12467)
{return or__3939__auto____12467;
} else
{var and__3937__auto____12468 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3937__auto____12468)
{var and__3937__auto____12469 = cljs.core.vector_QMARK_.call(null,child);
if(and__3937__auto____12469)
{var and__3937__auto____12470 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3937__auto____12470)
{var ret__12471 = true;
var i__12472 = 0;
while(true){
if((function (){var or__3939__auto____12473 = cljs.core.not.call(null,ret__12471);
if(or__3939__auto____12473)
{return or__3939__auto____12473;
} else
{return (i__12472 === cljs.core.count.call(null,parent));
}
})())
{return ret__12471;
} else
{{
var G__12474 = isa_QMARK_.call(null,h,child.call(null,i__12472),parent.call(null,i__12472));
var G__12475 = (i__12472 + 1);
ret__12471 = G__12474;
i__12472 = G__12475;
continue;
}
}
break;
}
} else
{return and__3937__auto____12470;
}
} else
{return and__3937__auto____12469;
}
} else
{return and__3937__auto____12468;
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
var tp__12484 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__12485 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__12486 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__12487 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3939__auto____12488 = ((cljs.core.contains_QMARK_.call(null,tp__12484.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__12486.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__12486.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__12484,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__12487.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__12485,parent,ta__12486),"\uFDD0'descendants":tf__12487.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__12486,tag,td__12485)});
})());
if(cljs.core.truth_(or__3939__auto____12488))
{return or__3939__auto____12488;
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
var parentMap__12493 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__12494 = (cljs.core.truth_(parentMap__12493.call(null,tag))?cljs.core.disj.call(null,parentMap__12493.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__12495 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__12494))?cljs.core.assoc.call(null,parentMap__12493,tag,childsParents__12494):cljs.core.dissoc.call(null,parentMap__12493,tag));
var deriv_seq__12496 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__12476_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__12476_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__12476_SHARP_),cljs.core.second.call(null,p1__12476_SHARP_)));
}),cljs.core.seq.call(null,newParents__12495)));
if(cljs.core.contains_QMARK_.call(null,parentMap__12493.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__12477_SHARP_,p2__12478_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__12477_SHARP_,p2__12478_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__12496));
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
var xprefs__12504 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3939__auto____12506 = (cljs.core.truth_((function (){var and__3937__auto____12505 = xprefs__12504;
if(cljs.core.truth_(and__3937__auto____12505))
{return xprefs__12504.call(null,y);
} else
{return and__3937__auto____12505;
}
})())?true:null);
if(cljs.core.truth_(or__3939__auto____12506))
{return or__3939__auto____12506;
} else
{var or__3939__auto____12508 = (function (){var ps__12507 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__12507) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__12507),prefer_table)))
{} else
{}
{
var G__12511 = cljs.core.rest.call(null,ps__12507);
ps__12507 = G__12511;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3939__auto____12508))
{return or__3939__auto____12508;
} else
{var or__3939__auto____12510 = (function (){var ps__12509 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__12509) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__12509),y,prefer_table)))
{} else
{}
{
var G__12512 = cljs.core.rest.call(null,ps__12509);
ps__12509 = G__12512;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3939__auto____12510))
{return or__3939__auto____12510;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3939__auto____12514 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3939__auto____12514))
{return or__3939__auto____12514;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__12532 = cljs.core.reduce.call(null,(function (be,p__12524){
var vec__12525__12526 = p__12524;
var k__12527 = cljs.core.nth.call(null,vec__12525__12526,0,null);
var ___12528 = cljs.core.nth.call(null,vec__12525__12526,1,null);
var e__12529 = vec__12525__12526;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__12527))
{var be2__12531 = (cljs.core.truth_((function (){var or__3939__auto____12530 = (be == null);
if(or__3939__auto____12530)
{return or__3939__auto____12530;
} else
{return cljs.core.dominates.call(null,k__12527,cljs.core.first.call(null,be),prefer_table);
}
})())?e__12529:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__12531),k__12527,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__12527),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__12531)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__12531;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__12532))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__12532));
return cljs.core.second.call(null,best_entry__12532);
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
if((function (){var and__3937__auto____12537 = mf;
if(and__3937__auto____12537)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3937__auto____12537;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2396__auto____12538 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12539 = (cljs.core._reset[goog.typeOf(x__2396__auto____12538)]);
if(or__3939__auto____12539)
{return or__3939__auto____12539;
} else
{var or__3939__auto____12540 = (cljs.core._reset["_"]);
if(or__3939__auto____12540)
{return or__3939__auto____12540;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3937__auto____12545 = mf;
if(and__3937__auto____12545)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3937__auto____12545;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2396__auto____12546 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12547 = (cljs.core._add_method[goog.typeOf(x__2396__auto____12546)]);
if(or__3939__auto____12547)
{return or__3939__auto____12547;
} else
{var or__3939__auto____12548 = (cljs.core._add_method["_"]);
if(or__3939__auto____12548)
{return or__3939__auto____12548;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3937__auto____12553 = mf;
if(and__3937__auto____12553)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3937__auto____12553;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2396__auto____12554 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12555 = (cljs.core._remove_method[goog.typeOf(x__2396__auto____12554)]);
if(or__3939__auto____12555)
{return or__3939__auto____12555;
} else
{var or__3939__auto____12556 = (cljs.core._remove_method["_"]);
if(or__3939__auto____12556)
{return or__3939__auto____12556;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3937__auto____12561 = mf;
if(and__3937__auto____12561)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3937__auto____12561;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2396__auto____12562 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12563 = (cljs.core._prefer_method[goog.typeOf(x__2396__auto____12562)]);
if(or__3939__auto____12563)
{return or__3939__auto____12563;
} else
{var or__3939__auto____12564 = (cljs.core._prefer_method["_"]);
if(or__3939__auto____12564)
{return or__3939__auto____12564;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3937__auto____12569 = mf;
if(and__3937__auto____12569)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3937__auto____12569;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2396__auto____12570 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12571 = (cljs.core._get_method[goog.typeOf(x__2396__auto____12570)]);
if(or__3939__auto____12571)
{return or__3939__auto____12571;
} else
{var or__3939__auto____12572 = (cljs.core._get_method["_"]);
if(or__3939__auto____12572)
{return or__3939__auto____12572;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3937__auto____12577 = mf;
if(and__3937__auto____12577)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3937__auto____12577;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2396__auto____12578 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12579 = (cljs.core._methods[goog.typeOf(x__2396__auto____12578)]);
if(or__3939__auto____12579)
{return or__3939__auto____12579;
} else
{var or__3939__auto____12580 = (cljs.core._methods["_"]);
if(or__3939__auto____12580)
{return or__3939__auto____12580;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3937__auto____12585 = mf;
if(and__3937__auto____12585)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3937__auto____12585;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2396__auto____12586 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12587 = (cljs.core._prefers[goog.typeOf(x__2396__auto____12586)]);
if(or__3939__auto____12587)
{return or__3939__auto____12587;
} else
{var or__3939__auto____12588 = (cljs.core._prefers["_"]);
if(or__3939__auto____12588)
{return or__3939__auto____12588;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3937__auto____12593 = mf;
if(and__3937__auto____12593)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3937__auto____12593;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2396__auto____12594 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12595 = (cljs.core._dispatch[goog.typeOf(x__2396__auto____12594)]);
if(or__3939__auto____12595)
{return or__3939__auto____12595;
} else
{var or__3939__auto____12596 = (cljs.core._dispatch["_"]);
if(or__3939__auto____12596)
{return or__3939__auto____12596;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__12599 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__12600 = cljs.core._get_method.call(null,mf,dispatch_val__12599);
if(cljs.core.truth_(target_fn__12600))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__12599)].join('')));
}
return cljs.core.apply.call(null,target_fn__12600,args);
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
var this__12601 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__12602 = this;
cljs.core.swap_BANG_.call(null,this__12602.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12602.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12602.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12602.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__12603 = this;
cljs.core.swap_BANG_.call(null,this__12603.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__12603.method_cache,this__12603.method_table,this__12603.cached_hierarchy,this__12603.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__12604 = this;
cljs.core.swap_BANG_.call(null,this__12604.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__12604.method_cache,this__12604.method_table,this__12604.cached_hierarchy,this__12604.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__12605 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__12605.cached_hierarchy),cljs.core.deref.call(null,this__12605.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__12605.method_cache,this__12605.method_table,this__12605.cached_hierarchy,this__12605.hierarchy);
}
var temp__4086__auto____12606 = cljs.core.deref.call(null,this__12605.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__4086__auto____12606))
{var target_fn__12607 = temp__4086__auto____12606;
return target_fn__12607;
} else
{var temp__4086__auto____12608 = cljs.core.find_and_cache_best_method.call(null,this__12605.name,dispatch_val,this__12605.hierarchy,this__12605.method_table,this__12605.prefer_table,this__12605.method_cache,this__12605.cached_hierarchy);
if(cljs.core.truth_(temp__4086__auto____12608))
{var target_fn__12609 = temp__4086__auto____12608;
return target_fn__12609;
} else
{return cljs.core.deref.call(null,this__12605.method_table).call(null,this__12605.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__12610 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__12610.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__12610.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__12610.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__12610.method_cache,this__12610.method_table,this__12610.cached_hierarchy,this__12610.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__12611 = this;
return cljs.core.deref.call(null,this__12611.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__12612 = this;
return cljs.core.deref.call(null,this__12612.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__12613 = this;
return cljs.core.do_dispatch.call(null,mf,this__12613.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__12615__delegate = function (_,args){
var self__12614 = this;
return cljs.core._dispatch.call(null,self__12614,args);
};
var G__12615 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12615__delegate.call(this, _, args);
};
G__12615.cljs$lang$maxFixedArity = 1;
G__12615.cljs$lang$applyTo = (function (arglist__12616){
var _ = cljs.core.first(arglist__12616);
var args = cljs.core.rest(arglist__12616);
return G__12615__delegate(_, args);
});
G__12615.cljs$lang$arity$variadic = G__12615__delegate;
return G__12615;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__12617 = this;
return cljs.core._dispatch.call(null,self__12617,args);
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
var this__12618 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_12620,_){
var this__12619 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__12619.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__12621 = this;
var and__3937__auto____12622 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3937__auto____12622)
{return (this__12621.uuid === other.uuid);
} else
{return and__3937__auto____12622;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__12623 = this;
var this__12624 = this;
return cljs.core.pr_str.call(null,this__12624);
});
cljs.core.UUID;
