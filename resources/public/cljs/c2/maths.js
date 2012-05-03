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
var expt__52396 = (function (x){
return Math.exp(x);
});
var expt__52397 = (function (x,y){
return Math.pow(x,y);
});
expt = function(x,y){
switch(arguments.length){
case  1 :
return expt__52396.call(this,x);
case  2 :
return expt__52397.call(this,x,y);
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
if(cljs.core.truth_((function (){var and__3822__auto____52399 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52399))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____52399;
}
})()))
{return (A + B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52400 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52400))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____52400;
}
})()))
{return cljs.core.map.call(null,cljs.core._PLUS_,A,B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52401 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52401))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____52401;
}
})()))
{return cljs.core.map.call(null,cljs.core._PLUS_,cljs.core.replicate.call(null,cljs.core.count.call(null,B),A),B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52402 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52402))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____52402;
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
add.cljs$lang$applyTo = (function (arglist__52403){
var args = cljs.core.seq( arglist__52403 );;
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
{if(cljs.core.truth_((function (){var and__3822__auto____52404 = cljs.core.number_QMARK_.call(null,0);

if(cljs.core.truth_(and__3822__auto____52404))
{return cljs.core.number_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____52404;
}
})()))
{return (0 - cljs.core.first.call(null,args));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52405 = cljs.core.coll_QMARK_.call(null,0);

if(cljs.core.truth_(and__3822__auto____52405))
{return cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____52405;
}
})()))
{return cljs.core.map.call(null,cljs.core._,0,cljs.core.first.call(null,args));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52406 = cljs.core.number_QMARK_.call(null,0);

if(cljs.core.truth_(and__3822__auto____52406))
{return cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____52406;
}
})()))
{return cljs.core.map.call(null,cljs.core._,cljs.core.replicate.call(null,cljs.core.count.call(null,cljs.core.first.call(null,args)),0),cljs.core.first.call(null,args));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52407 = cljs.core.coll_QMARK_.call(null,0);

if(cljs.core.truth_(and__3822__auto____52407))
{return cljs.core.number_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____52407;
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
if(cljs.core.truth_((function (){var and__3822__auto____52408 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52408))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____52408;
}
})()))
{return (A - B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52409 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52409))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____52409;
}
})()))
{return cljs.core.map.call(null,cljs.core._,A,B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52410 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52410))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____52410;
}
})()))
{return cljs.core.map.call(null,cljs.core._,cljs.core.replicate.call(null,cljs.core.count.call(null,B),A),B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52411 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52411))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____52411;
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
sub.cljs$lang$applyTo = (function (arglist__52412){
var args = cljs.core.seq( arglist__52412 );;
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
if(cljs.core.truth_((function (){var and__3822__auto____52413 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52413))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____52413;
}
})()))
{return (A * B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52414 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52414))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____52414;
}
})()))
{return cljs.core.map.call(null,cljs.core._STAR_,A,B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52415 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52415))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____52415;
}
})()))
{return cljs.core.map.call(null,cljs.core._STAR_,cljs.core.replicate.call(null,cljs.core.count.call(null,B),A),B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52416 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52416))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____52416;
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
mul.cljs$lang$applyTo = (function (arglist__52417){
var args = cljs.core.seq( arglist__52417 );;
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
{if(cljs.core.truth_((function (){var and__3822__auto____52418 = cljs.core.number_QMARK_.call(null,1);

if(cljs.core.truth_(and__3822__auto____52418))
{return cljs.core.number_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____52418;
}
})()))
{return (1 / cljs.core.first.call(null,args));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52419 = cljs.core.coll_QMARK_.call(null,1);

if(cljs.core.truth_(and__3822__auto____52419))
{return cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____52419;
}
})()))
{return cljs.core.map.call(null,cljs.core._SLASH_,1,cljs.core.first.call(null,args));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52420 = cljs.core.number_QMARK_.call(null,1);

if(cljs.core.truth_(and__3822__auto____52420))
{return cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____52420;
}
})()))
{return cljs.core.map.call(null,cljs.core._SLASH_,cljs.core.replicate.call(null,cljs.core.count.call(null,cljs.core.first.call(null,args)),1),cljs.core.first.call(null,args));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52421 = cljs.core.coll_QMARK_.call(null,1);

if(cljs.core.truth_(and__3822__auto____52421))
{return cljs.core.number_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3822__auto____52421;
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
if(cljs.core.truth_((function (){var and__3822__auto____52422 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52422))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____52422;
}
})()))
{return (A / B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52423 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52423))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____52423;
}
})()))
{return cljs.core.map.call(null,cljs.core._SLASH_,A,B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52424 = cljs.core.number_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52424))
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3822__auto____52424;
}
})()))
{return cljs.core.map.call(null,cljs.core._SLASH_,cljs.core.replicate.call(null,cljs.core.count.call(null,B),A),B);
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52425 = cljs.core.coll_QMARK_.call(null,A);

if(cljs.core.truth_(and__3822__auto____52425))
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3822__auto____52425;
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
div.cljs$lang$applyTo = (function (arglist__52426){
var args = cljs.core.seq( arglist__52426 );;
return div__delegate.call(this, args);
});
return div;
})()
;
