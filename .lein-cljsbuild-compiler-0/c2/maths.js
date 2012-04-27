goog.provide('c2.maths');
goog.require('cljs.core');
c2.maths.Pi = 3.141592653589793;
c2.maths.Tau = (2 * c2.maths.Pi);
c2.maths.radians_per_degree = (c2.maths.Pi / 180);
c2.maths.sin = (function sin(x){
return Math.sin(x);
});
c2.maths.cos = (function cos(x){
return Math.cos(x);
});
c2.maths.expt = (function() {
var expt = null;
var expt__7067 = (function (x){
return Math.exp(x);
});
var expt__7068 = (function (x,y){
return Math.pow(x,y);
});
expt = function(x,y){
switch(arguments.length){
case  1 :
return expt__7067.call(this,x);
case  2 :
return expt__7068.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return expt;
})()
;
c2.maths.sqrt = (function sqrt(x){
return Math.sqrt(x);
});
c2.maths.sq = (function sq(x){
return c2.maths.expt.call(null,x,2);
});
c2.maths.abs = (function abs(x){
return Math.abs(x);
});
c2.maths.log = (function log(x){
return Math.log(x);
});
c2.maths.log10 = (function log10(x){
return (Math.log(x) / Math.LN10);
});
c2.maths.floor = (function floor(x){
return Math.floor(x);
});
c2.maths.ceil = (function ceil(x){
return Math.ceil(x);
});
/**
* Returns 2-vector of min and max elements in xs
*/
c2.maths.extent = (function extent(xs){
return cljs.core.PersistentVector.fromArray([cljs.core.apply.call(null,cljs.core.min,xs),cljs.core.apply.call(null,cljs.core.max,xs)]);
});
/**
* @param {...*} var_args
*/
c2.maths.add = (function() { 
var add__delegate = function (args){
return cljs.core.reduce.call(null,(function (A,B){
if(cljs.core.truth_((function (){var and__3822__auto____7070 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7070))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____7070;
}
})()))
{return (A + B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7071 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7071))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____7071;
}
})()))
{return cljs.core.map.call(null,cljs.core._PLUS_,A,B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7072 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7072))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____7072;
}
})()))
{return cljs.core.map.call(null,cljs.core._PLUS_,cljs.core.replicate.call(null,cljs.core.count.call(null,B),A),B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7073 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7073))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____7073;
}
})()))
{return cljs.core.map.call(null,cljs.core._PLUS_,A,cljs.core.replicate.call(null,cljs.core.count.call(null,A),B));
} else
{return null;
}
}
}
}
}),args);
};
var add = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return add__delegate.call(this, args);
};
add.cljs$lang$maxFixedArity = 0;
add.cljs$lang$applyTo = (function (arglist__7074){
var args = cljs.core.seq( arglist__7074 );;
return add__delegate.call(this, args);
});
return add;
})()
;
/**
* @param {...*} var_args
*/
c2.maths.sub = (function() { 
var sub__delegate = function (args){
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,args),1)))
{if(cljs.core.truth_((function (){var and__3822__auto____7075 = cljs.core.number_QMARK_.call(null,0);

if(cljs.core.truth_(and__3822__auto____7075))
{return cljs.core.number_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____7075;
}
})()))
{return (0 - cljs.core.first.call(null,args));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7076 = cljs.core.coll_QMARK_.call(null,0);

if(cljs.core.truth_(and__3822__auto____7076))
{return cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____7076;
}
})()))
{return cljs.core.map.call(null,cljs.core._,0,cljs.core.first.call(null,args));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7077 = cljs.core.number_QMARK_.call(null,0);

if(cljs.core.truth_(and__3822__auto____7077))
{return cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____7077;
}
})()))
{return cljs.core.map.call(null,cljs.core._,cljs.core.replicate.call(null,cljs.core.count.call(null,cljs.core.first.call(null,args)),0),cljs.core.first.call(null,args));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7078 = cljs.core.coll_QMARK_.call(null,0);

if(cljs.core.truth_(and__3822__auto____7078))
{return cljs.core.number_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____7078;
}
})()))
{return cljs.core.map.call(null,cljs.core._,0,cljs.core.replicate.call(null,cljs.core.count.call(null,0),cljs.core.first.call(null,args)));
} else
{return null;
}
}
}
}
} else
{return cljs.core.reduce.call(null,(function (A,B){
if(cljs.core.truth_((function (){var and__3822__auto____7079 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7079))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____7079;
}
})()))
{return (A - B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7080 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7080))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____7080;
}
})()))
{return cljs.core.map.call(null,cljs.core._,A,B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7081 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7081))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____7081;
}
})()))
{return cljs.core.map.call(null,cljs.core._,cljs.core.replicate.call(null,cljs.core.count.call(null,B),A),B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7082 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7082))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____7082;
}
})()))
{return cljs.core.map.call(null,cljs.core._,A,cljs.core.replicate.call(null,cljs.core.count.call(null,A),B));
} else
{return null;
}
}
}
}
}),args);
}
};
var sub = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sub__delegate.call(this, args);
};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__7083){
var args = cljs.core.seq( arglist__7083 );;
return sub__delegate.call(this, args);
});
return sub;
})()
;
/**
* @param {...*} var_args
*/
c2.maths.mul = (function() { 
var mul__delegate = function (args){
return cljs.core.reduce.call(null,(function (A,B){
if(cljs.core.truth_((function (){var and__3822__auto____7084 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7084))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____7084;
}
})()))
{return (A * B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7085 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7085))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____7085;
}
})()))
{return cljs.core.map.call(null,cljs.core._STAR_,A,B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7086 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7086))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____7086;
}
})()))
{return cljs.core.map.call(null,cljs.core._STAR_,cljs.core.replicate.call(null,cljs.core.count.call(null,B),A),B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7087 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7087))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____7087;
}
})()))
{return cljs.core.map.call(null,cljs.core._STAR_,A,cljs.core.replicate.call(null,cljs.core.count.call(null,A),B));
} else
{return null;
}
}
}
}
}),args);
};
var mul = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return mul__delegate.call(this, args);
};
mul.cljs$lang$maxFixedArity = 0;
mul.cljs$lang$applyTo = (function (arglist__7088){
var args = cljs.core.seq( arglist__7088 );;
return mul__delegate.call(this, args);
});
return mul;
})()
;
/**
* @param {...*} var_args
*/
c2.maths.div = (function() { 
var div__delegate = function (args){
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,args),1)))
{if(cljs.core.truth_((function (){var and__3822__auto____7089 = cljs.core.number_QMARK_.call(null,1);

if(cljs.core.truth_(and__3822__auto____7089))
{return cljs.core.number_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____7089;
}
})()))
{return (1 / cljs.core.first.call(null,args));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7090 = cljs.core.coll_QMARK_.call(null,1);

if(cljs.core.truth_(and__3822__auto____7090))
{return cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____7090;
}
})()))
{return cljs.core.map.call(null,cljs.core._SLASH_,1,cljs.core.first.call(null,args));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7091 = cljs.core.number_QMARK_.call(null,1);

if(cljs.core.truth_(and__3822__auto____7091))
{return cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____7091;
}
})()))
{return cljs.core.map.call(null,cljs.core._SLASH_,cljs.core.replicate.call(null,cljs.core.count.call(null,cljs.core.first.call(null,args)),1),cljs.core.first.call(null,args));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7092 = cljs.core.coll_QMARK_.call(null,1);

if(cljs.core.truth_(and__3822__auto____7092))
{return cljs.core.number_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____7092;
}
})()))
{return cljs.core.map.call(null,cljs.core._SLASH_,1,cljs.core.replicate.call(null,cljs.core.count.call(null,1),cljs.core.first.call(null,args)));
} else
{return null;
}
}
}
}
} else
{return cljs.core.reduce.call(null,(function (A,B){
if(cljs.core.truth_((function (){var and__3822__auto____7093 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7093))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____7093;
}
})()))
{return (A / B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7094 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7094))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____7094;
}
})()))
{return cljs.core.map.call(null,cljs.core._SLASH_,A,B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7095 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7095))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____7095;
}
})()))
{return cljs.core.map.call(null,cljs.core._SLASH_,cljs.core.replicate.call(null,cljs.core.count.call(null,B),A),B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____7096 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____7096))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____7096;
}
})()))
{return cljs.core.map.call(null,cljs.core._SLASH_,A,cljs.core.replicate.call(null,cljs.core.count.call(null,A),B));
} else
{return null;
}
}
}
}
}),args);
}
};
var div = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return div__delegate.call(this, args);
};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__7097){
var args = cljs.core.seq( arglist__7097 );;
return div__delegate.call(this, args);
});
return div;
})()
;
