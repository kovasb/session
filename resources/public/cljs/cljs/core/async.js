// Compiled by ClojureScript 0.0-2156
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11586 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11586 = (function (f,fn_handler,meta11587){
this.f = f;
this.fn_handler = fn_handler;
this.meta11587 = meta11587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11586.cljs$lang$type = true;
cljs.core.async.t11586.cljs$lang$ctorStr = "cljs.core.async/t11586";
cljs.core.async.t11586.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11586");
});
cljs.core.async.t11586.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11588){var self__ = this;
var _11588__$1 = this;return self__.meta11587;
});
cljs.core.async.t11586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11588,meta11587__$1){var self__ = this;
var _11588__$1 = this;return (new cljs.core.async.t11586(self__.f,self__.fn_handler,meta11587__$1));
});
cljs.core.async.__GT_t11586 = (function __GT_t11586(f__$1,fn_handler__$1,meta11587){return (new cljs.core.async.t11586(f__$1,fn_handler__$1,meta11587));
});
}
return (new cljs.core.async.t11586(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11590 = buff;if(G__11590)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__11590.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11590.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11590);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11590);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11591 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11591);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11591);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3391__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4251__auto___11592 = n;var x_11593 = 0;while(true){
if((x_11593 < n__4251__auto___11592))
{(a[x_11593] = 0);
{
var G__11594 = (x_11593 + 1);
x_11593 = G__11594;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11595 = (i + 1);
i = G__11595;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11599 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11599 = (function (flag,alt_flag,meta11600){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11600 = meta11600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11599.cljs$lang$type = true;
cljs.core.async.t11599.cljs$lang$ctorStr = "cljs.core.async/t11599";
cljs.core.async.t11599.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11599");
});
cljs.core.async.t11599.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11601){var self__ = this;
var _11601__$1 = this;return self__.meta11600;
});
cljs.core.async.t11599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11601,meta11600__$1){var self__ = this;
var _11601__$1 = this;return (new cljs.core.async.t11599(self__.flag,self__.alt_flag,meta11600__$1));
});
cljs.core.async.__GT_t11599 = (function __GT_t11599(flag__$1,alt_flag__$1,meta11600){return (new cljs.core.async.t11599(flag__$1,alt_flag__$1,meta11600));
});
}
return (new cljs.core.async.t11599(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11605 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11605 = (function (cb,flag,alt_handler,meta11606){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11606 = meta11606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11605.cljs$lang$type = true;
cljs.core.async.t11605.cljs$lang$ctorStr = "cljs.core.async/t11605";
cljs.core.async.t11605.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11605");
});
cljs.core.async.t11605.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11607){var self__ = this;
var _11607__$1 = this;return self__.meta11606;
});
cljs.core.async.t11605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11607,meta11606__$1){var self__ = this;
var _11607__$1 = this;return (new cljs.core.async.t11605(self__.cb,self__.flag,self__.alt_handler,meta11606__$1));
});
cljs.core.async.__GT_t11605 = (function __GT_t11605(cb__$1,flag__$1,alt_handler__$1,meta11606){return (new cljs.core.async.t11605(cb__$1,flag__$1,alt_handler__$1,meta11606));
});
}
return (new cljs.core.async.t11605(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11608_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11608_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3403__auto__ = wport;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11609 = (i + 1);
i = G__11609;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3403__auto__ = ret;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3391__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11610){var map__11612 = p__11610;var map__11612__$1 = ((cljs.core.seq_QMARK_.call(null,map__11612))?cljs.core.apply.call(null,cljs.core.hash_map,map__11612):map__11612);var opts = map__11612__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11610 = null;if (arguments.length > 1) {
  p__11610 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11610);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11613){
var ports = cljs.core.first(arglist__11613);
var p__11610 = cljs.core.rest(arglist__11613);
return alts_BANG___delegate(ports,p__11610);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11621 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11621 = (function (ch,f,map_LT_,meta11622){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11622 = meta11622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11621.cljs$lang$type = true;
cljs.core.async.t11621.cljs$lang$ctorStr = "cljs.core.async/t11621";
cljs.core.async.t11621.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11621");
});
cljs.core.async.t11621.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11621.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11621.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11621.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11624 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11624 = (function (fn1,_,meta11622,ch,f,map_LT_,meta11625){
this.fn1 = fn1;
this._ = _;
this.meta11622 = meta11622;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11625 = meta11625;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11624.cljs$lang$type = true;
cljs.core.async.t11624.cljs$lang$ctorStr = "cljs.core.async/t11624";
cljs.core.async.t11624.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11624");
});
cljs.core.async.t11624.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11624.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11624.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11624.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11614_SHARP_){return f1.call(null,(((p1__11614_SHARP_ == null))?null:self__.f.call(null,p1__11614_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11626){var self__ = this;
var _11626__$1 = this;return self__.meta11625;
});
cljs.core.async.t11624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11626,meta11625__$1){var self__ = this;
var _11626__$1 = this;return (new cljs.core.async.t11624(self__.fn1,self__._,self__.meta11622,self__.ch,self__.f,self__.map_LT_,meta11625__$1));
});
cljs.core.async.__GT_t11624 = (function __GT_t11624(fn1__$1,___$2,meta11622__$1,ch__$2,f__$2,map_LT___$2,meta11625){return (new cljs.core.async.t11624(fn1__$1,___$2,meta11622__$1,ch__$2,f__$2,map_LT___$2,meta11625));
});
}
return (new cljs.core.async.t11624(fn1,___$1,self__.meta11622,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11621.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11621.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11623){var self__ = this;
var _11623__$1 = this;return self__.meta11622;
});
cljs.core.async.t11621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11623,meta11622__$1){var self__ = this;
var _11623__$1 = this;return (new cljs.core.async.t11621(self__.ch,self__.f,self__.map_LT_,meta11622__$1));
});
cljs.core.async.__GT_t11621 = (function __GT_t11621(ch__$1,f__$1,map_LT___$1,meta11622){return (new cljs.core.async.t11621(ch__$1,f__$1,map_LT___$1,meta11622));
});
}
return (new cljs.core.async.t11621(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11630 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11630 = (function (ch,f,map_GT_,meta11631){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11631 = meta11631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11630.cljs$lang$type = true;
cljs.core.async.t11630.cljs$lang$ctorStr = "cljs.core.async/t11630";
cljs.core.async.t11630.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11630");
});
cljs.core.async.t11630.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11630.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11630.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11630.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11630.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11630.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11632){var self__ = this;
var _11632__$1 = this;return self__.meta11631;
});
cljs.core.async.t11630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11632,meta11631__$1){var self__ = this;
var _11632__$1 = this;return (new cljs.core.async.t11630(self__.ch,self__.f,self__.map_GT_,meta11631__$1));
});
cljs.core.async.__GT_t11630 = (function __GT_t11630(ch__$1,f__$1,map_GT___$1,meta11631){return (new cljs.core.async.t11630(ch__$1,f__$1,map_GT___$1,meta11631));
});
}
return (new cljs.core.async.t11630(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11636 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11636 = (function (ch,p,filter_GT_,meta11637){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11637 = meta11637;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11636.cljs$lang$type = true;
cljs.core.async.t11636.cljs$lang$ctorStr = "cljs.core.async/t11636";
cljs.core.async.t11636.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11636");
});
cljs.core.async.t11636.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11636.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11636.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11638){var self__ = this;
var _11638__$1 = this;return self__.meta11637;
});
cljs.core.async.t11636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11638,meta11637__$1){var self__ = this;
var _11638__$1 = this;return (new cljs.core.async.t11636(self__.ch,self__.p,self__.filter_GT_,meta11637__$1));
});
cljs.core.async.__GT_t11636 = (function __GT_t11636(ch__$1,p__$1,filter_GT___$1,meta11637){return (new cljs.core.async.t11636(ch__$1,p__$1,filter_GT___$1,meta11637));
});
}
return (new cljs.core.async.t11636(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6176__auto___11721 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_11700){var state_val_11701 = (state_11700[1]);if((state_val_11701 === 1))
{var state_11700__$1 = state_11700;var statearr_11702_11722 = state_11700__$1;(statearr_11702_11722[2] = null);
(statearr_11702_11722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 2))
{var state_11700__$1 = state_11700;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11700__$1,4,ch);
} else
{if((state_val_11701 === 3))
{var inst_11698 = (state_11700[2]);var state_11700__$1 = state_11700;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11700__$1,inst_11698);
} else
{if((state_val_11701 === 4))
{var inst_11682 = (state_11700[7]);var inst_11682__$1 = (state_11700[2]);var inst_11683 = (inst_11682__$1 == null);var state_11700__$1 = (function (){var statearr_11703 = state_11700;(statearr_11703[7] = inst_11682__$1);
return statearr_11703;
})();if(cljs.core.truth_(inst_11683))
{var statearr_11704_11723 = state_11700__$1;(statearr_11704_11723[1] = 5);
} else
{var statearr_11705_11724 = state_11700__$1;(statearr_11705_11724[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 5))
{var inst_11685 = cljs.core.async.close_BANG_.call(null,out);var state_11700__$1 = state_11700;var statearr_11706_11725 = state_11700__$1;(statearr_11706_11725[2] = inst_11685);
(statearr_11706_11725[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 6))
{var inst_11682 = (state_11700[7]);var inst_11687 = p.call(null,inst_11682);var state_11700__$1 = state_11700;if(cljs.core.truth_(inst_11687))
{var statearr_11707_11726 = state_11700__$1;(statearr_11707_11726[1] = 8);
} else
{var statearr_11708_11727 = state_11700__$1;(statearr_11708_11727[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 7))
{var inst_11696 = (state_11700[2]);var state_11700__$1 = state_11700;var statearr_11709_11728 = state_11700__$1;(statearr_11709_11728[2] = inst_11696);
(statearr_11709_11728[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 8))
{var inst_11682 = (state_11700[7]);var state_11700__$1 = state_11700;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11700__$1,11,out,inst_11682);
} else
{if((state_val_11701 === 9))
{var state_11700__$1 = state_11700;var statearr_11710_11729 = state_11700__$1;(statearr_11710_11729[2] = null);
(statearr_11710_11729[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 10))
{var inst_11693 = (state_11700[2]);var state_11700__$1 = (function (){var statearr_11711 = state_11700;(statearr_11711[8] = inst_11693);
return statearr_11711;
})();var statearr_11712_11730 = state_11700__$1;(statearr_11712_11730[2] = null);
(statearr_11712_11730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11701 === 11))
{var inst_11690 = (state_11700[2]);var state_11700__$1 = state_11700;var statearr_11713_11731 = state_11700__$1;(statearr_11713_11731[2] = inst_11690);
(statearr_11713_11731[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_11717 = [null,null,null,null,null,null,null,null,null];(statearr_11717[0] = state_machine__6162__auto__);
(statearr_11717[1] = 1);
return statearr_11717;
});
var state_machine__6162__auto____1 = (function (state_11700){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_11700);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e11718){if((e11718 instanceof Object))
{var ex__6165__auto__ = e11718;var statearr_11719_11732 = state_11700;(statearr_11719_11732[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11700);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11718;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11733 = state_11700;
state_11700 = G__11733;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_11700){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_11700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_11720 = f__6177__auto__.call(null);(statearr_11720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto___11721);
return statearr_11720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6176__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_11885){var state_val_11886 = (state_11885[1]);if((state_val_11886 === 1))
{var state_11885__$1 = state_11885;var statearr_11887_11924 = state_11885__$1;(statearr_11887_11924[2] = null);
(statearr_11887_11924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 2))
{var state_11885__$1 = state_11885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11885__$1,4,in$);
} else
{if((state_val_11886 === 3))
{var inst_11883 = (state_11885[2]);var state_11885__$1 = state_11885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11885__$1,inst_11883);
} else
{if((state_val_11886 === 4))
{var inst_11831 = (state_11885[7]);var inst_11831__$1 = (state_11885[2]);var inst_11832 = (inst_11831__$1 == null);var state_11885__$1 = (function (){var statearr_11888 = state_11885;(statearr_11888[7] = inst_11831__$1);
return statearr_11888;
})();if(cljs.core.truth_(inst_11832))
{var statearr_11889_11925 = state_11885__$1;(statearr_11889_11925[1] = 5);
} else
{var statearr_11890_11926 = state_11885__$1;(statearr_11890_11926[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 5))
{var inst_11834 = cljs.core.async.close_BANG_.call(null,out);var state_11885__$1 = state_11885;var statearr_11891_11927 = state_11885__$1;(statearr_11891_11927[2] = inst_11834);
(statearr_11891_11927[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 6))
{var inst_11831 = (state_11885[7]);var inst_11836 = f.call(null,inst_11831);var inst_11841 = cljs.core.seq.call(null,inst_11836);var inst_11842 = inst_11841;var inst_11843 = null;var inst_11844 = 0;var inst_11845 = 0;var state_11885__$1 = (function (){var statearr_11892 = state_11885;(statearr_11892[8] = inst_11842);
(statearr_11892[9] = inst_11843);
(statearr_11892[10] = inst_11844);
(statearr_11892[11] = inst_11845);
return statearr_11892;
})();var statearr_11893_11928 = state_11885__$1;(statearr_11893_11928[2] = null);
(statearr_11893_11928[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 7))
{var inst_11881 = (state_11885[2]);var state_11885__$1 = state_11885;var statearr_11894_11929 = state_11885__$1;(statearr_11894_11929[2] = inst_11881);
(statearr_11894_11929[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 8))
{var inst_11844 = (state_11885[10]);var inst_11845 = (state_11885[11]);var inst_11847 = (inst_11845 < inst_11844);var inst_11848 = inst_11847;var state_11885__$1 = state_11885;if(cljs.core.truth_(inst_11848))
{var statearr_11895_11930 = state_11885__$1;(statearr_11895_11930[1] = 10);
} else
{var statearr_11896_11931 = state_11885__$1;(statearr_11896_11931[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 9))
{var inst_11878 = (state_11885[2]);var state_11885__$1 = (function (){var statearr_11897 = state_11885;(statearr_11897[12] = inst_11878);
return statearr_11897;
})();var statearr_11898_11932 = state_11885__$1;(statearr_11898_11932[2] = null);
(statearr_11898_11932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 10))
{var inst_11843 = (state_11885[9]);var inst_11845 = (state_11885[11]);var inst_11850 = cljs.core._nth.call(null,inst_11843,inst_11845);var state_11885__$1 = state_11885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11885__$1,13,out,inst_11850);
} else
{if((state_val_11886 === 11))
{var inst_11842 = (state_11885[8]);var inst_11856 = (state_11885[13]);var inst_11856__$1 = cljs.core.seq.call(null,inst_11842);var state_11885__$1 = (function (){var statearr_11902 = state_11885;(statearr_11902[13] = inst_11856__$1);
return statearr_11902;
})();if(inst_11856__$1)
{var statearr_11903_11933 = state_11885__$1;(statearr_11903_11933[1] = 14);
} else
{var statearr_11904_11934 = state_11885__$1;(statearr_11904_11934[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 12))
{var inst_11876 = (state_11885[2]);var state_11885__$1 = state_11885;var statearr_11905_11935 = state_11885__$1;(statearr_11905_11935[2] = inst_11876);
(statearr_11905_11935[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 13))
{var inst_11842 = (state_11885[8]);var inst_11843 = (state_11885[9]);var inst_11844 = (state_11885[10]);var inst_11845 = (state_11885[11]);var inst_11852 = (state_11885[2]);var inst_11853 = (inst_11845 + 1);var tmp11899 = inst_11842;var tmp11900 = inst_11843;var tmp11901 = inst_11844;var inst_11842__$1 = tmp11899;var inst_11843__$1 = tmp11900;var inst_11844__$1 = tmp11901;var inst_11845__$1 = inst_11853;var state_11885__$1 = (function (){var statearr_11906 = state_11885;(statearr_11906[14] = inst_11852);
(statearr_11906[8] = inst_11842__$1);
(statearr_11906[9] = inst_11843__$1);
(statearr_11906[10] = inst_11844__$1);
(statearr_11906[11] = inst_11845__$1);
return statearr_11906;
})();var statearr_11907_11936 = state_11885__$1;(statearr_11907_11936[2] = null);
(statearr_11907_11936[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 14))
{var inst_11856 = (state_11885[13]);var inst_11858 = cljs.core.chunked_seq_QMARK_.call(null,inst_11856);var state_11885__$1 = state_11885;if(inst_11858)
{var statearr_11908_11937 = state_11885__$1;(statearr_11908_11937[1] = 17);
} else
{var statearr_11909_11938 = state_11885__$1;(statearr_11909_11938[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 15))
{var state_11885__$1 = state_11885;var statearr_11910_11939 = state_11885__$1;(statearr_11910_11939[2] = null);
(statearr_11910_11939[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 16))
{var inst_11874 = (state_11885[2]);var state_11885__$1 = state_11885;var statearr_11911_11940 = state_11885__$1;(statearr_11911_11940[2] = inst_11874);
(statearr_11911_11940[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 17))
{var inst_11856 = (state_11885[13]);var inst_11860 = cljs.core.chunk_first.call(null,inst_11856);var inst_11861 = cljs.core.chunk_rest.call(null,inst_11856);var inst_11862 = cljs.core.count.call(null,inst_11860);var inst_11842 = inst_11861;var inst_11843 = inst_11860;var inst_11844 = inst_11862;var inst_11845 = 0;var state_11885__$1 = (function (){var statearr_11912 = state_11885;(statearr_11912[8] = inst_11842);
(statearr_11912[9] = inst_11843);
(statearr_11912[10] = inst_11844);
(statearr_11912[11] = inst_11845);
return statearr_11912;
})();var statearr_11913_11941 = state_11885__$1;(statearr_11913_11941[2] = null);
(statearr_11913_11941[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 18))
{var inst_11856 = (state_11885[13]);var inst_11865 = cljs.core.first.call(null,inst_11856);var state_11885__$1 = state_11885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11885__$1,20,out,inst_11865);
} else
{if((state_val_11886 === 19))
{var inst_11871 = (state_11885[2]);var state_11885__$1 = state_11885;var statearr_11914_11942 = state_11885__$1;(statearr_11914_11942[2] = inst_11871);
(statearr_11914_11942[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11886 === 20))
{var inst_11856 = (state_11885[13]);var inst_11867 = (state_11885[2]);var inst_11868 = cljs.core.next.call(null,inst_11856);var inst_11842 = inst_11868;var inst_11843 = null;var inst_11844 = 0;var inst_11845 = 0;var state_11885__$1 = (function (){var statearr_11915 = state_11885;(statearr_11915[15] = inst_11867);
(statearr_11915[8] = inst_11842);
(statearr_11915[9] = inst_11843);
(statearr_11915[10] = inst_11844);
(statearr_11915[11] = inst_11845);
return statearr_11915;
})();var statearr_11916_11943 = state_11885__$1;(statearr_11916_11943[2] = null);
(statearr_11916_11943[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_11920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11920[0] = state_machine__6162__auto__);
(statearr_11920[1] = 1);
return statearr_11920;
});
var state_machine__6162__auto____1 = (function (state_11885){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_11885);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e11921){if((e11921 instanceof Object))
{var ex__6165__auto__ = e11921;var statearr_11922_11944 = state_11885;(statearr_11922_11944[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11885);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11945 = state_11885;
state_11885 = G__11945;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_11885){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_11885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_11923 = f__6177__auto__.call(null);(statearr_11923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto__);
return statearr_11923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return c__6176__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6176__auto___12026 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_12005){var state_val_12006 = (state_12005[1]);if((state_val_12006 === 1))
{var state_12005__$1 = state_12005;var statearr_12007_12027 = state_12005__$1;(statearr_12007_12027[2] = null);
(statearr_12007_12027[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12006 === 2))
{var state_12005__$1 = state_12005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12005__$1,4,from);
} else
{if((state_val_12006 === 3))
{var inst_12003 = (state_12005[2]);var state_12005__$1 = state_12005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12005__$1,inst_12003);
} else
{if((state_val_12006 === 4))
{var inst_11988 = (state_12005[7]);var inst_11988__$1 = (state_12005[2]);var inst_11989 = (inst_11988__$1 == null);var state_12005__$1 = (function (){var statearr_12008 = state_12005;(statearr_12008[7] = inst_11988__$1);
return statearr_12008;
})();if(cljs.core.truth_(inst_11989))
{var statearr_12009_12028 = state_12005__$1;(statearr_12009_12028[1] = 5);
} else
{var statearr_12010_12029 = state_12005__$1;(statearr_12010_12029[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12006 === 5))
{var state_12005__$1 = state_12005;if(cljs.core.truth_(close_QMARK_))
{var statearr_12011_12030 = state_12005__$1;(statearr_12011_12030[1] = 8);
} else
{var statearr_12012_12031 = state_12005__$1;(statearr_12012_12031[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12006 === 6))
{var inst_11988 = (state_12005[7]);var state_12005__$1 = state_12005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12005__$1,11,to,inst_11988);
} else
{if((state_val_12006 === 7))
{var inst_12001 = (state_12005[2]);var state_12005__$1 = state_12005;var statearr_12013_12032 = state_12005__$1;(statearr_12013_12032[2] = inst_12001);
(statearr_12013_12032[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12006 === 8))
{var inst_11992 = cljs.core.async.close_BANG_.call(null,to);var state_12005__$1 = state_12005;var statearr_12014_12033 = state_12005__$1;(statearr_12014_12033[2] = inst_11992);
(statearr_12014_12033[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12006 === 9))
{var state_12005__$1 = state_12005;var statearr_12015_12034 = state_12005__$1;(statearr_12015_12034[2] = null);
(statearr_12015_12034[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12006 === 10))
{var inst_11995 = (state_12005[2]);var state_12005__$1 = state_12005;var statearr_12016_12035 = state_12005__$1;(statearr_12016_12035[2] = inst_11995);
(statearr_12016_12035[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12006 === 11))
{var inst_11998 = (state_12005[2]);var state_12005__$1 = (function (){var statearr_12017 = state_12005;(statearr_12017[8] = inst_11998);
return statearr_12017;
})();var statearr_12018_12036 = state_12005__$1;(statearr_12018_12036[2] = null);
(statearr_12018_12036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_12022 = [null,null,null,null,null,null,null,null,null];(statearr_12022[0] = state_machine__6162__auto__);
(statearr_12022[1] = 1);
return statearr_12022;
});
var state_machine__6162__auto____1 = (function (state_12005){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_12005);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e12023){if((e12023 instanceof Object))
{var ex__6165__auto__ = e12023;var statearr_12024_12037 = state_12005;(statearr_12024_12037[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12038 = state_12005;
state_12005 = G__12038;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_12005){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_12005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_12025 = f__6177__auto__.call(null);(statearr_12025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto___12026);
return statearr_12025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6176__auto___12125 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_12103){var state_val_12104 = (state_12103[1]);if((state_val_12104 === 1))
{var state_12103__$1 = state_12103;var statearr_12105_12126 = state_12103__$1;(statearr_12105_12126[2] = null);
(statearr_12105_12126[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12104 === 2))
{var state_12103__$1 = state_12103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12103__$1,4,ch);
} else
{if((state_val_12104 === 3))
{var inst_12101 = (state_12103[2]);var state_12103__$1 = state_12103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12103__$1,inst_12101);
} else
{if((state_val_12104 === 4))
{var inst_12084 = (state_12103[7]);var inst_12084__$1 = (state_12103[2]);var inst_12085 = (inst_12084__$1 == null);var state_12103__$1 = (function (){var statearr_12106 = state_12103;(statearr_12106[7] = inst_12084__$1);
return statearr_12106;
})();if(cljs.core.truth_(inst_12085))
{var statearr_12107_12127 = state_12103__$1;(statearr_12107_12127[1] = 5);
} else
{var statearr_12108_12128 = state_12103__$1;(statearr_12108_12128[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12104 === 5))
{var inst_12087 = cljs.core.async.close_BANG_.call(null,tc);var inst_12088 = cljs.core.async.close_BANG_.call(null,fc);var state_12103__$1 = (function (){var statearr_12109 = state_12103;(statearr_12109[8] = inst_12087);
return statearr_12109;
})();var statearr_12110_12129 = state_12103__$1;(statearr_12110_12129[2] = inst_12088);
(statearr_12110_12129[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12104 === 6))
{var inst_12084 = (state_12103[7]);var inst_12090 = p.call(null,inst_12084);var state_12103__$1 = state_12103;if(cljs.core.truth_(inst_12090))
{var statearr_12111_12130 = state_12103__$1;(statearr_12111_12130[1] = 9);
} else
{var statearr_12112_12131 = state_12103__$1;(statearr_12112_12131[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12104 === 7))
{var inst_12099 = (state_12103[2]);var state_12103__$1 = state_12103;var statearr_12113_12132 = state_12103__$1;(statearr_12113_12132[2] = inst_12099);
(statearr_12113_12132[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12104 === 8))
{var inst_12096 = (state_12103[2]);var state_12103__$1 = (function (){var statearr_12114 = state_12103;(statearr_12114[9] = inst_12096);
return statearr_12114;
})();var statearr_12115_12133 = state_12103__$1;(statearr_12115_12133[2] = null);
(statearr_12115_12133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12104 === 9))
{var state_12103__$1 = state_12103;var statearr_12116_12134 = state_12103__$1;(statearr_12116_12134[2] = tc);
(statearr_12116_12134[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12104 === 10))
{var state_12103__$1 = state_12103;var statearr_12117_12135 = state_12103__$1;(statearr_12117_12135[2] = fc);
(statearr_12117_12135[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12104 === 11))
{var inst_12084 = (state_12103[7]);var inst_12094 = (state_12103[2]);var state_12103__$1 = state_12103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12103__$1,8,inst_12094,inst_12084);
} else
{return null;
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
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_12121 = [null,null,null,null,null,null,null,null,null,null];(statearr_12121[0] = state_machine__6162__auto__);
(statearr_12121[1] = 1);
return statearr_12121;
});
var state_machine__6162__auto____1 = (function (state_12103){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_12103);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e12122){if((e12122 instanceof Object))
{var ex__6165__auto__ = e12122;var statearr_12123_12136 = state_12103;(statearr_12123_12136[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12103);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12122;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12137 = state_12103;
state_12103 = G__12137;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_12103){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_12103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_12124 = f__6177__auto__.call(null);(statearr_12124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto___12125);
return statearr_12124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6176__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_12184){var state_val_12185 = (state_12184[1]);if((state_val_12185 === 7))
{var inst_12180 = (state_12184[2]);var state_12184__$1 = state_12184;var statearr_12186_12202 = state_12184__$1;(statearr_12186_12202[2] = inst_12180);
(statearr_12186_12202[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12185 === 6))
{var inst_12170 = (state_12184[7]);var inst_12173 = (state_12184[8]);var inst_12177 = f.call(null,inst_12170,inst_12173);var inst_12170__$1 = inst_12177;var state_12184__$1 = (function (){var statearr_12187 = state_12184;(statearr_12187[7] = inst_12170__$1);
return statearr_12187;
})();var statearr_12188_12203 = state_12184__$1;(statearr_12188_12203[2] = null);
(statearr_12188_12203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12185 === 5))
{var inst_12170 = (state_12184[7]);var state_12184__$1 = state_12184;var statearr_12189_12204 = state_12184__$1;(statearr_12189_12204[2] = inst_12170);
(statearr_12189_12204[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12185 === 4))
{var inst_12173 = (state_12184[8]);var inst_12173__$1 = (state_12184[2]);var inst_12174 = (inst_12173__$1 == null);var state_12184__$1 = (function (){var statearr_12190 = state_12184;(statearr_12190[8] = inst_12173__$1);
return statearr_12190;
})();if(cljs.core.truth_(inst_12174))
{var statearr_12191_12205 = state_12184__$1;(statearr_12191_12205[1] = 5);
} else
{var statearr_12192_12206 = state_12184__$1;(statearr_12192_12206[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12185 === 3))
{var inst_12182 = (state_12184[2]);var state_12184__$1 = state_12184;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12184__$1,inst_12182);
} else
{if((state_val_12185 === 2))
{var state_12184__$1 = state_12184;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12184__$1,4,ch);
} else
{if((state_val_12185 === 1))
{var inst_12170 = init;var state_12184__$1 = (function (){var statearr_12193 = state_12184;(statearr_12193[7] = inst_12170);
return statearr_12193;
})();var statearr_12194_12207 = state_12184__$1;(statearr_12194_12207[2] = null);
(statearr_12194_12207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_12198 = [null,null,null,null,null,null,null,null,null];(statearr_12198[0] = state_machine__6162__auto__);
(statearr_12198[1] = 1);
return statearr_12198;
});
var state_machine__6162__auto____1 = (function (state_12184){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_12184);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e12199){if((e12199 instanceof Object))
{var ex__6165__auto__ = e12199;var statearr_12200_12208 = state_12184;(statearr_12200_12208[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12184);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12199;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12209 = state_12184;
state_12184 = G__12209;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_12184){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_12184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_12201 = f__6177__auto__.call(null);(statearr_12201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto__);
return statearr_12201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return c__6176__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6176__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_12271){var state_val_12272 = (state_12271[1]);if((state_val_12272 === 1))
{var inst_12251 = cljs.core.seq.call(null,coll);var inst_12252 = inst_12251;var state_12271__$1 = (function (){var statearr_12273 = state_12271;(statearr_12273[7] = inst_12252);
return statearr_12273;
})();var statearr_12274_12292 = state_12271__$1;(statearr_12274_12292[2] = null);
(statearr_12274_12292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 2))
{var inst_12252 = (state_12271[7]);var state_12271__$1 = state_12271;if(cljs.core.truth_(inst_12252))
{var statearr_12275_12293 = state_12271__$1;(statearr_12275_12293[1] = 4);
} else
{var statearr_12276_12294 = state_12271__$1;(statearr_12276_12294[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 3))
{var inst_12269 = (state_12271[2]);var state_12271__$1 = state_12271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12271__$1,inst_12269);
} else
{if((state_val_12272 === 4))
{var inst_12252 = (state_12271[7]);var inst_12255 = cljs.core.first.call(null,inst_12252);var state_12271__$1 = state_12271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12271__$1,7,ch,inst_12255);
} else
{if((state_val_12272 === 5))
{var state_12271__$1 = state_12271;if(cljs.core.truth_(close_QMARK_))
{var statearr_12277_12295 = state_12271__$1;(statearr_12277_12295[1] = 8);
} else
{var statearr_12278_12296 = state_12271__$1;(statearr_12278_12296[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 6))
{var inst_12267 = (state_12271[2]);var state_12271__$1 = state_12271;var statearr_12279_12297 = state_12271__$1;(statearr_12279_12297[2] = inst_12267);
(statearr_12279_12297[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 7))
{var inst_12252 = (state_12271[7]);var inst_12257 = (state_12271[2]);var inst_12258 = cljs.core.next.call(null,inst_12252);var inst_12252__$1 = inst_12258;var state_12271__$1 = (function (){var statearr_12280 = state_12271;(statearr_12280[8] = inst_12257);
(statearr_12280[7] = inst_12252__$1);
return statearr_12280;
})();var statearr_12281_12298 = state_12271__$1;(statearr_12281_12298[2] = null);
(statearr_12281_12298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 8))
{var inst_12262 = cljs.core.async.close_BANG_.call(null,ch);var state_12271__$1 = state_12271;var statearr_12282_12299 = state_12271__$1;(statearr_12282_12299[2] = inst_12262);
(statearr_12282_12299[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 9))
{var state_12271__$1 = state_12271;var statearr_12283_12300 = state_12271__$1;(statearr_12283_12300[2] = null);
(statearr_12283_12300[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 10))
{var inst_12265 = (state_12271[2]);var state_12271__$1 = state_12271;var statearr_12284_12301 = state_12271__$1;(statearr_12284_12301[2] = inst_12265);
(statearr_12284_12301[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_12288 = [null,null,null,null,null,null,null,null,null];(statearr_12288[0] = state_machine__6162__auto__);
(statearr_12288[1] = 1);
return statearr_12288;
});
var state_machine__6162__auto____1 = (function (state_12271){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_12271);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e12289){if((e12289 instanceof Object))
{var ex__6165__auto__ = e12289;var statearr_12290_12302 = state_12271;(statearr_12290_12302[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12271);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12289;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12303 = state_12271;
state_12271 = G__12303;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_12271){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_12271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_12291 = f__6177__auto__.call(null);(statearr_12291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto__);
return statearr_12291;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return c__6176__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12305 = {};return obj12305;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3391__auto__ = _;if(and__3391__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4030__auto__ = (((_ == null))?null:_);return (function (){var or__3403__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12307 = {};return obj12307;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12531 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12531 = (function (cs,ch,mult,meta12532){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12532 = meta12532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12531.cljs$lang$type = true;
cljs.core.async.t12531.cljs$lang$ctorStr = "cljs.core.async/t12531";
cljs.core.async.t12531.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12531");
});})(cs))
;
cljs.core.async.t12531.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12531.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12531.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12531.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12531.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12531.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12533){var self__ = this;
var _12533__$1 = this;return self__.meta12532;
});})(cs))
;
cljs.core.async.t12531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12533,meta12532__$1){var self__ = this;
var _12533__$1 = this;return (new cljs.core.async.t12531(self__.cs,self__.ch,self__.mult,meta12532__$1));
});})(cs))
;
cljs.core.async.__GT_t12531 = ((function (cs){
return (function __GT_t12531(cs__$1,ch__$1,mult__$1,meta12532){return (new cljs.core.async.t12531(cs__$1,ch__$1,mult__$1,meta12532));
});})(cs))
;
}
return (new cljs.core.async.t12531(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6176__auto___12754 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_12668){var state_val_12669 = (state_12668[1]);if((state_val_12669 === 32))
{var inst_12612 = (state_12668[7]);var inst_12536 = (state_12668[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12668,31,Object,null,30);var inst_12619 = cljs.core.async.put_BANG_.call(null,inst_12612,inst_12536,done);var state_12668__$1 = state_12668;var statearr_12670_12755 = state_12668__$1;(statearr_12670_12755[2] = inst_12619);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12668__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 1))
{var state_12668__$1 = state_12668;var statearr_12671_12756 = state_12668__$1;(statearr_12671_12756[2] = null);
(statearr_12671_12756[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 33))
{var inst_12625 = (state_12668[9]);var inst_12627 = cljs.core.chunked_seq_QMARK_.call(null,inst_12625);var state_12668__$1 = state_12668;if(inst_12627)
{var statearr_12672_12757 = state_12668__$1;(statearr_12672_12757[1] = 36);
} else
{var statearr_12673_12758 = state_12668__$1;(statearr_12673_12758[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 2))
{var state_12668__$1 = state_12668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12668__$1,4,ch);
} else
{if((state_val_12669 === 34))
{var state_12668__$1 = state_12668;var statearr_12674_12759 = state_12668__$1;(statearr_12674_12759[2] = null);
(statearr_12674_12759[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 3))
{var inst_12666 = (state_12668[2]);var state_12668__$1 = state_12668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12668__$1,inst_12666);
} else
{if((state_val_12669 === 35))
{var inst_12650 = (state_12668[2]);var state_12668__$1 = state_12668;var statearr_12675_12760 = state_12668__$1;(statearr_12675_12760[2] = inst_12650);
(statearr_12675_12760[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 4))
{var inst_12536 = (state_12668[8]);var inst_12536__$1 = (state_12668[2]);var inst_12537 = (inst_12536__$1 == null);var state_12668__$1 = (function (){var statearr_12676 = state_12668;(statearr_12676[8] = inst_12536__$1);
return statearr_12676;
})();if(cljs.core.truth_(inst_12537))
{var statearr_12677_12761 = state_12668__$1;(statearr_12677_12761[1] = 5);
} else
{var statearr_12678_12762 = state_12668__$1;(statearr_12678_12762[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 36))
{var inst_12625 = (state_12668[9]);var inst_12629 = cljs.core.chunk_first.call(null,inst_12625);var inst_12630 = cljs.core.chunk_rest.call(null,inst_12625);var inst_12631 = cljs.core.count.call(null,inst_12629);var inst_12604 = inst_12630;var inst_12605 = inst_12629;var inst_12606 = inst_12631;var inst_12607 = 0;var state_12668__$1 = (function (){var statearr_12679 = state_12668;(statearr_12679[10] = inst_12605);
(statearr_12679[11] = inst_12604);
(statearr_12679[12] = inst_12607);
(statearr_12679[13] = inst_12606);
return statearr_12679;
})();var statearr_12680_12763 = state_12668__$1;(statearr_12680_12763[2] = null);
(statearr_12680_12763[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 5))
{var inst_12543 = cljs.core.deref.call(null,cs);var inst_12544 = cljs.core.seq.call(null,inst_12543);var inst_12545 = inst_12544;var inst_12546 = null;var inst_12547 = 0;var inst_12548 = 0;var state_12668__$1 = (function (){var statearr_12681 = state_12668;(statearr_12681[14] = inst_12545);
(statearr_12681[15] = inst_12546);
(statearr_12681[16] = inst_12547);
(statearr_12681[17] = inst_12548);
return statearr_12681;
})();var statearr_12682_12764 = state_12668__$1;(statearr_12682_12764[2] = null);
(statearr_12682_12764[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 37))
{var inst_12625 = (state_12668[9]);var inst_12634 = cljs.core.first.call(null,inst_12625);var state_12668__$1 = (function (){var statearr_12683 = state_12668;(statearr_12683[18] = inst_12634);
return statearr_12683;
})();var statearr_12684_12765 = state_12668__$1;(statearr_12684_12765[2] = null);
(statearr_12684_12765[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 6))
{var inst_12596 = (state_12668[19]);var inst_12595 = cljs.core.deref.call(null,cs);var inst_12596__$1 = cljs.core.keys.call(null,inst_12595);var inst_12597 = cljs.core.count.call(null,inst_12596__$1);var inst_12598 = cljs.core.reset_BANG_.call(null,dctr,inst_12597);var inst_12603 = cljs.core.seq.call(null,inst_12596__$1);var inst_12604 = inst_12603;var inst_12605 = null;var inst_12606 = 0;var inst_12607 = 0;var state_12668__$1 = (function (){var statearr_12685 = state_12668;(statearr_12685[20] = inst_12598);
(statearr_12685[19] = inst_12596__$1);
(statearr_12685[10] = inst_12605);
(statearr_12685[11] = inst_12604);
(statearr_12685[12] = inst_12607);
(statearr_12685[13] = inst_12606);
return statearr_12685;
})();var statearr_12686_12766 = state_12668__$1;(statearr_12686_12766[2] = null);
(statearr_12686_12766[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 38))
{var inst_12647 = (state_12668[2]);var state_12668__$1 = state_12668;var statearr_12687_12767 = state_12668__$1;(statearr_12687_12767[2] = inst_12647);
(statearr_12687_12767[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 7))
{var inst_12664 = (state_12668[2]);var state_12668__$1 = state_12668;var statearr_12688_12768 = state_12668__$1;(statearr_12688_12768[2] = inst_12664);
(statearr_12688_12768[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 39))
{var inst_12625 = (state_12668[9]);var inst_12643 = (state_12668[2]);var inst_12644 = cljs.core.next.call(null,inst_12625);var inst_12604 = inst_12644;var inst_12605 = null;var inst_12606 = 0;var inst_12607 = 0;var state_12668__$1 = (function (){var statearr_12689 = state_12668;(statearr_12689[10] = inst_12605);
(statearr_12689[11] = inst_12604);
(statearr_12689[12] = inst_12607);
(statearr_12689[13] = inst_12606);
(statearr_12689[21] = inst_12643);
return statearr_12689;
})();var statearr_12690_12769 = state_12668__$1;(statearr_12690_12769[2] = null);
(statearr_12690_12769[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 8))
{var inst_12547 = (state_12668[16]);var inst_12548 = (state_12668[17]);var inst_12550 = (inst_12548 < inst_12547);var inst_12551 = inst_12550;var state_12668__$1 = state_12668;if(cljs.core.truth_(inst_12551))
{var statearr_12691_12770 = state_12668__$1;(statearr_12691_12770[1] = 10);
} else
{var statearr_12692_12771 = state_12668__$1;(statearr_12692_12771[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 40))
{var inst_12634 = (state_12668[18]);var inst_12635 = (state_12668[2]);var inst_12636 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12637 = cljs.core.async.untap_STAR_.call(null,m,inst_12634);var state_12668__$1 = (function (){var statearr_12693 = state_12668;(statearr_12693[22] = inst_12635);
(statearr_12693[23] = inst_12636);
return statearr_12693;
})();var statearr_12694_12772 = state_12668__$1;(statearr_12694_12772[2] = inst_12637);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12668__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 9))
{var inst_12593 = (state_12668[2]);var state_12668__$1 = state_12668;var statearr_12695_12773 = state_12668__$1;(statearr_12695_12773[2] = inst_12593);
(statearr_12695_12773[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 41))
{var inst_12536 = (state_12668[8]);var inst_12634 = (state_12668[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12668,40,Object,null,39);var inst_12641 = cljs.core.async.put_BANG_.call(null,inst_12634,inst_12536,done);var state_12668__$1 = state_12668;var statearr_12696_12774 = state_12668__$1;(statearr_12696_12774[2] = inst_12641);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12668__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 10))
{var inst_12546 = (state_12668[15]);var inst_12548 = (state_12668[17]);var inst_12554 = cljs.core._nth.call(null,inst_12546,inst_12548);var inst_12555 = cljs.core.nth.call(null,inst_12554,0,null);var inst_12556 = cljs.core.nth.call(null,inst_12554,1,null);var state_12668__$1 = (function (){var statearr_12697 = state_12668;(statearr_12697[24] = inst_12555);
return statearr_12697;
})();if(cljs.core.truth_(inst_12556))
{var statearr_12698_12775 = state_12668__$1;(statearr_12698_12775[1] = 13);
} else
{var statearr_12699_12776 = state_12668__$1;(statearr_12699_12776[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 42))
{var state_12668__$1 = state_12668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12668__$1,45,dchan);
} else
{if((state_val_12669 === 11))
{var inst_12545 = (state_12668[14]);var inst_12565 = (state_12668[25]);var inst_12565__$1 = cljs.core.seq.call(null,inst_12545);var state_12668__$1 = (function (){var statearr_12700 = state_12668;(statearr_12700[25] = inst_12565__$1);
return statearr_12700;
})();if(inst_12565__$1)
{var statearr_12701_12777 = state_12668__$1;(statearr_12701_12777[1] = 16);
} else
{var statearr_12702_12778 = state_12668__$1;(statearr_12702_12778[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 43))
{var state_12668__$1 = state_12668;var statearr_12703_12779 = state_12668__$1;(statearr_12703_12779[2] = null);
(statearr_12703_12779[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 12))
{var inst_12591 = (state_12668[2]);var state_12668__$1 = state_12668;var statearr_12704_12780 = state_12668__$1;(statearr_12704_12780[2] = inst_12591);
(statearr_12704_12780[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 44))
{var inst_12661 = (state_12668[2]);var state_12668__$1 = (function (){var statearr_12705 = state_12668;(statearr_12705[26] = inst_12661);
return statearr_12705;
})();var statearr_12706_12781 = state_12668__$1;(statearr_12706_12781[2] = null);
(statearr_12706_12781[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 13))
{var inst_12555 = (state_12668[24]);var inst_12558 = cljs.core.async.close_BANG_.call(null,inst_12555);var state_12668__$1 = state_12668;var statearr_12707_12782 = state_12668__$1;(statearr_12707_12782[2] = inst_12558);
(statearr_12707_12782[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 45))
{var inst_12658 = (state_12668[2]);var state_12668__$1 = state_12668;var statearr_12711_12783 = state_12668__$1;(statearr_12711_12783[2] = inst_12658);
(statearr_12711_12783[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 14))
{var state_12668__$1 = state_12668;var statearr_12712_12784 = state_12668__$1;(statearr_12712_12784[2] = null);
(statearr_12712_12784[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 15))
{var inst_12545 = (state_12668[14]);var inst_12546 = (state_12668[15]);var inst_12547 = (state_12668[16]);var inst_12548 = (state_12668[17]);var inst_12561 = (state_12668[2]);var inst_12562 = (inst_12548 + 1);var tmp12708 = inst_12545;var tmp12709 = inst_12546;var tmp12710 = inst_12547;var inst_12545__$1 = tmp12708;var inst_12546__$1 = tmp12709;var inst_12547__$1 = tmp12710;var inst_12548__$1 = inst_12562;var state_12668__$1 = (function (){var statearr_12713 = state_12668;(statearr_12713[14] = inst_12545__$1);
(statearr_12713[15] = inst_12546__$1);
(statearr_12713[16] = inst_12547__$1);
(statearr_12713[17] = inst_12548__$1);
(statearr_12713[27] = inst_12561);
return statearr_12713;
})();var statearr_12714_12785 = state_12668__$1;(statearr_12714_12785[2] = null);
(statearr_12714_12785[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 16))
{var inst_12565 = (state_12668[25]);var inst_12567 = cljs.core.chunked_seq_QMARK_.call(null,inst_12565);var state_12668__$1 = state_12668;if(inst_12567)
{var statearr_12715_12786 = state_12668__$1;(statearr_12715_12786[1] = 19);
} else
{var statearr_12716_12787 = state_12668__$1;(statearr_12716_12787[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 17))
{var state_12668__$1 = state_12668;var statearr_12717_12788 = state_12668__$1;(statearr_12717_12788[2] = null);
(statearr_12717_12788[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 18))
{var inst_12589 = (state_12668[2]);var state_12668__$1 = state_12668;var statearr_12718_12789 = state_12668__$1;(statearr_12718_12789[2] = inst_12589);
(statearr_12718_12789[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 19))
{var inst_12565 = (state_12668[25]);var inst_12569 = cljs.core.chunk_first.call(null,inst_12565);var inst_12570 = cljs.core.chunk_rest.call(null,inst_12565);var inst_12571 = cljs.core.count.call(null,inst_12569);var inst_12545 = inst_12570;var inst_12546 = inst_12569;var inst_12547 = inst_12571;var inst_12548 = 0;var state_12668__$1 = (function (){var statearr_12719 = state_12668;(statearr_12719[14] = inst_12545);
(statearr_12719[15] = inst_12546);
(statearr_12719[16] = inst_12547);
(statearr_12719[17] = inst_12548);
return statearr_12719;
})();var statearr_12720_12790 = state_12668__$1;(statearr_12720_12790[2] = null);
(statearr_12720_12790[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 20))
{var inst_12565 = (state_12668[25]);var inst_12575 = cljs.core.first.call(null,inst_12565);var inst_12576 = cljs.core.nth.call(null,inst_12575,0,null);var inst_12577 = cljs.core.nth.call(null,inst_12575,1,null);var state_12668__$1 = (function (){var statearr_12721 = state_12668;(statearr_12721[28] = inst_12576);
return statearr_12721;
})();if(cljs.core.truth_(inst_12577))
{var statearr_12722_12791 = state_12668__$1;(statearr_12722_12791[1] = 22);
} else
{var statearr_12723_12792 = state_12668__$1;(statearr_12723_12792[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 21))
{var inst_12586 = (state_12668[2]);var state_12668__$1 = state_12668;var statearr_12724_12793 = state_12668__$1;(statearr_12724_12793[2] = inst_12586);
(statearr_12724_12793[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 22))
{var inst_12576 = (state_12668[28]);var inst_12579 = cljs.core.async.close_BANG_.call(null,inst_12576);var state_12668__$1 = state_12668;var statearr_12725_12794 = state_12668__$1;(statearr_12725_12794[2] = inst_12579);
(statearr_12725_12794[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 23))
{var state_12668__$1 = state_12668;var statearr_12726_12795 = state_12668__$1;(statearr_12726_12795[2] = null);
(statearr_12726_12795[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 24))
{var inst_12565 = (state_12668[25]);var inst_12582 = (state_12668[2]);var inst_12583 = cljs.core.next.call(null,inst_12565);var inst_12545 = inst_12583;var inst_12546 = null;var inst_12547 = 0;var inst_12548 = 0;var state_12668__$1 = (function (){var statearr_12727 = state_12668;(statearr_12727[29] = inst_12582);
(statearr_12727[14] = inst_12545);
(statearr_12727[15] = inst_12546);
(statearr_12727[16] = inst_12547);
(statearr_12727[17] = inst_12548);
return statearr_12727;
})();var statearr_12728_12796 = state_12668__$1;(statearr_12728_12796[2] = null);
(statearr_12728_12796[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 25))
{var inst_12607 = (state_12668[12]);var inst_12606 = (state_12668[13]);var inst_12609 = (inst_12607 < inst_12606);var inst_12610 = inst_12609;var state_12668__$1 = state_12668;if(cljs.core.truth_(inst_12610))
{var statearr_12729_12797 = state_12668__$1;(statearr_12729_12797[1] = 27);
} else
{var statearr_12730_12798 = state_12668__$1;(statearr_12730_12798[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 26))
{var inst_12596 = (state_12668[19]);var inst_12654 = (state_12668[2]);var inst_12655 = cljs.core.seq.call(null,inst_12596);var state_12668__$1 = (function (){var statearr_12731 = state_12668;(statearr_12731[30] = inst_12654);
return statearr_12731;
})();if(inst_12655)
{var statearr_12732_12799 = state_12668__$1;(statearr_12732_12799[1] = 42);
} else
{var statearr_12733_12800 = state_12668__$1;(statearr_12733_12800[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 27))
{var inst_12605 = (state_12668[10]);var inst_12607 = (state_12668[12]);var inst_12612 = cljs.core._nth.call(null,inst_12605,inst_12607);var state_12668__$1 = (function (){var statearr_12734 = state_12668;(statearr_12734[7] = inst_12612);
return statearr_12734;
})();var statearr_12735_12801 = state_12668__$1;(statearr_12735_12801[2] = null);
(statearr_12735_12801[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 28))
{var inst_12625 = (state_12668[9]);var inst_12604 = (state_12668[11]);var inst_12625__$1 = cljs.core.seq.call(null,inst_12604);var state_12668__$1 = (function (){var statearr_12739 = state_12668;(statearr_12739[9] = inst_12625__$1);
return statearr_12739;
})();if(inst_12625__$1)
{var statearr_12740_12802 = state_12668__$1;(statearr_12740_12802[1] = 33);
} else
{var statearr_12741_12803 = state_12668__$1;(statearr_12741_12803[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 29))
{var inst_12652 = (state_12668[2]);var state_12668__$1 = state_12668;var statearr_12742_12804 = state_12668__$1;(statearr_12742_12804[2] = inst_12652);
(statearr_12742_12804[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 30))
{var inst_12605 = (state_12668[10]);var inst_12604 = (state_12668[11]);var inst_12607 = (state_12668[12]);var inst_12606 = (state_12668[13]);var inst_12621 = (state_12668[2]);var inst_12622 = (inst_12607 + 1);var tmp12736 = inst_12605;var tmp12737 = inst_12604;var tmp12738 = inst_12606;var inst_12604__$1 = tmp12737;var inst_12605__$1 = tmp12736;var inst_12606__$1 = tmp12738;var inst_12607__$1 = inst_12622;var state_12668__$1 = (function (){var statearr_12743 = state_12668;(statearr_12743[10] = inst_12605__$1);
(statearr_12743[11] = inst_12604__$1);
(statearr_12743[12] = inst_12607__$1);
(statearr_12743[13] = inst_12606__$1);
(statearr_12743[31] = inst_12621);
return statearr_12743;
})();var statearr_12744_12805 = state_12668__$1;(statearr_12744_12805[2] = null);
(statearr_12744_12805[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 31))
{var inst_12612 = (state_12668[7]);var inst_12613 = (state_12668[2]);var inst_12614 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12615 = cljs.core.async.untap_STAR_.call(null,m,inst_12612);var state_12668__$1 = (function (){var statearr_12745 = state_12668;(statearr_12745[32] = inst_12613);
(statearr_12745[33] = inst_12614);
return statearr_12745;
})();var statearr_12746_12806 = state_12668__$1;(statearr_12746_12806[2] = inst_12615);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12668__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
}
}
}
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_12750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12750[0] = state_machine__6162__auto__);
(statearr_12750[1] = 1);
return statearr_12750;
});
var state_machine__6162__auto____1 = (function (state_12668){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_12668);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e12751){if((e12751 instanceof Object))
{var ex__6165__auto__ = e12751;var statearr_12752_12807 = state_12668;(statearr_12752_12807[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12668);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12751;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12808 = state_12668;
state_12668 = G__12808;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_12668){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_12668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_12753 = f__6177__auto__.call(null);(statearr_12753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto___12754);
return statearr_12753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12810 = {};return obj12810;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12920 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12920 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12921){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12921 = meta12921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12920.cljs$lang$type = true;
cljs.core.async.t12920.cljs$lang$ctorStr = "cljs.core.async/t12920";
cljs.core.async.t12920.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12920");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12920.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12920.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12920.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12920.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12920.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12920.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12920.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12920.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12922){var self__ = this;
var _12922__$1 = this;return self__.meta12921;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12922,meta12921__$1){var self__ = this;
var _12922__$1 = this;return (new cljs.core.async.t12920(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12921__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12920 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12920(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12921){return (new cljs.core.async.t12920(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12921));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12920(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6176__auto___13029 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_12987){var state_val_12988 = (state_12987[1]);if((state_val_12988 === 1))
{var inst_12926 = (state_12987[7]);var inst_12926__$1 = calc_state.call(null);var inst_12927 = cljs.core.seq_QMARK_.call(null,inst_12926__$1);var state_12987__$1 = (function (){var statearr_12989 = state_12987;(statearr_12989[7] = inst_12926__$1);
return statearr_12989;
})();if(inst_12927)
{var statearr_12990_13030 = state_12987__$1;(statearr_12990_13030[1] = 2);
} else
{var statearr_12991_13031 = state_12987__$1;(statearr_12991_13031[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 2))
{var inst_12926 = (state_12987[7]);var inst_12929 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12926);var state_12987__$1 = state_12987;var statearr_12992_13032 = state_12987__$1;(statearr_12992_13032[2] = inst_12929);
(statearr_12992_13032[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 3))
{var inst_12926 = (state_12987[7]);var state_12987__$1 = state_12987;var statearr_12993_13033 = state_12987__$1;(statearr_12993_13033[2] = inst_12926);
(statearr_12993_13033[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 4))
{var inst_12926 = (state_12987[7]);var inst_12932 = (state_12987[2]);var inst_12933 = cljs.core.get.call(null,inst_12932,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12934 = cljs.core.get.call(null,inst_12932,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12935 = cljs.core.get.call(null,inst_12932,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12936 = inst_12926;var state_12987__$1 = (function (){var statearr_12994 = state_12987;(statearr_12994[8] = inst_12933);
(statearr_12994[9] = inst_12935);
(statearr_12994[10] = inst_12934);
(statearr_12994[11] = inst_12936);
return statearr_12994;
})();var statearr_12995_13034 = state_12987__$1;(statearr_12995_13034[2] = null);
(statearr_12995_13034[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 5))
{var inst_12936 = (state_12987[11]);var inst_12939 = cljs.core.seq_QMARK_.call(null,inst_12936);var state_12987__$1 = state_12987;if(inst_12939)
{var statearr_12996_13035 = state_12987__$1;(statearr_12996_13035[1] = 7);
} else
{var statearr_12997_13036 = state_12987__$1;(statearr_12997_13036[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 6))
{var inst_12985 = (state_12987[2]);var state_12987__$1 = state_12987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12987__$1,inst_12985);
} else
{if((state_val_12988 === 7))
{var inst_12936 = (state_12987[11]);var inst_12941 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12936);var state_12987__$1 = state_12987;var statearr_12998_13037 = state_12987__$1;(statearr_12998_13037[2] = inst_12941);
(statearr_12998_13037[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 8))
{var inst_12936 = (state_12987[11]);var state_12987__$1 = state_12987;var statearr_12999_13038 = state_12987__$1;(statearr_12999_13038[2] = inst_12936);
(statearr_12999_13038[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 9))
{var inst_12944 = (state_12987[12]);var inst_12944__$1 = (state_12987[2]);var inst_12945 = cljs.core.get.call(null,inst_12944__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12946 = cljs.core.get.call(null,inst_12944__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12947 = cljs.core.get.call(null,inst_12944__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12987__$1 = (function (){var statearr_13000 = state_12987;(statearr_13000[12] = inst_12944__$1);
(statearr_13000[13] = inst_12946);
(statearr_13000[14] = inst_12947);
return statearr_13000;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12987__$1,10,inst_12945);
} else
{if((state_val_12988 === 10))
{var inst_12951 = (state_12987[15]);var inst_12952 = (state_12987[16]);var inst_12950 = (state_12987[2]);var inst_12951__$1 = cljs.core.nth.call(null,inst_12950,0,null);var inst_12952__$1 = cljs.core.nth.call(null,inst_12950,1,null);var inst_12953 = (inst_12951__$1 == null);var inst_12954 = cljs.core._EQ_.call(null,inst_12952__$1,change);var inst_12955 = (inst_12953) || (inst_12954);var state_12987__$1 = (function (){var statearr_13001 = state_12987;(statearr_13001[15] = inst_12951__$1);
(statearr_13001[16] = inst_12952__$1);
return statearr_13001;
})();if(cljs.core.truth_(inst_12955))
{var statearr_13002_13039 = state_12987__$1;(statearr_13002_13039[1] = 11);
} else
{var statearr_13003_13040 = state_12987__$1;(statearr_13003_13040[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 11))
{var inst_12951 = (state_12987[15]);var inst_12957 = (inst_12951 == null);var state_12987__$1 = state_12987;if(cljs.core.truth_(inst_12957))
{var statearr_13004_13041 = state_12987__$1;(statearr_13004_13041[1] = 14);
} else
{var statearr_13005_13042 = state_12987__$1;(statearr_13005_13042[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 12))
{var inst_12966 = (state_12987[17]);var inst_12947 = (state_12987[14]);var inst_12952 = (state_12987[16]);var inst_12966__$1 = inst_12947.call(null,inst_12952);var state_12987__$1 = (function (){var statearr_13006 = state_12987;(statearr_13006[17] = inst_12966__$1);
return statearr_13006;
})();if(cljs.core.truth_(inst_12966__$1))
{var statearr_13007_13043 = state_12987__$1;(statearr_13007_13043[1] = 17);
} else
{var statearr_13008_13044 = state_12987__$1;(statearr_13008_13044[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 13))
{var inst_12983 = (state_12987[2]);var state_12987__$1 = state_12987;var statearr_13009_13045 = state_12987__$1;(statearr_13009_13045[2] = inst_12983);
(statearr_13009_13045[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 14))
{var inst_12952 = (state_12987[16]);var inst_12959 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12952);var state_12987__$1 = state_12987;var statearr_13010_13046 = state_12987__$1;(statearr_13010_13046[2] = inst_12959);
(statearr_13010_13046[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 15))
{var state_12987__$1 = state_12987;var statearr_13011_13047 = state_12987__$1;(statearr_13011_13047[2] = null);
(statearr_13011_13047[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 16))
{var inst_12962 = (state_12987[2]);var inst_12963 = calc_state.call(null);var inst_12936 = inst_12963;var state_12987__$1 = (function (){var statearr_13012 = state_12987;(statearr_13012[11] = inst_12936);
(statearr_13012[18] = inst_12962);
return statearr_13012;
})();var statearr_13013_13048 = state_12987__$1;(statearr_13013_13048[2] = null);
(statearr_13013_13048[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 17))
{var inst_12966 = (state_12987[17]);var state_12987__$1 = state_12987;var statearr_13014_13049 = state_12987__$1;(statearr_13014_13049[2] = inst_12966);
(statearr_13014_13049[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 18))
{var inst_12946 = (state_12987[13]);var inst_12947 = (state_12987[14]);var inst_12952 = (state_12987[16]);var inst_12969 = cljs.core.empty_QMARK_.call(null,inst_12947);var inst_12970 = inst_12946.call(null,inst_12952);var inst_12971 = cljs.core.not.call(null,inst_12970);var inst_12972 = (inst_12969) && (inst_12971);var state_12987__$1 = state_12987;var statearr_13015_13050 = state_12987__$1;(statearr_13015_13050[2] = inst_12972);
(statearr_13015_13050[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 19))
{var inst_12974 = (state_12987[2]);var state_12987__$1 = state_12987;if(cljs.core.truth_(inst_12974))
{var statearr_13016_13051 = state_12987__$1;(statearr_13016_13051[1] = 20);
} else
{var statearr_13017_13052 = state_12987__$1;(statearr_13017_13052[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 20))
{var inst_12951 = (state_12987[15]);var state_12987__$1 = state_12987;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12987__$1,23,out,inst_12951);
} else
{if((state_val_12988 === 21))
{var state_12987__$1 = state_12987;var statearr_13018_13053 = state_12987__$1;(statearr_13018_13053[2] = null);
(statearr_13018_13053[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 22))
{var inst_12944 = (state_12987[12]);var inst_12980 = (state_12987[2]);var inst_12936 = inst_12944;var state_12987__$1 = (function (){var statearr_13019 = state_12987;(statearr_13019[19] = inst_12980);
(statearr_13019[11] = inst_12936);
return statearr_13019;
})();var statearr_13020_13054 = state_12987__$1;(statearr_13020_13054[2] = null);
(statearr_13020_13054[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12988 === 23))
{var inst_12977 = (state_12987[2]);var state_12987__$1 = state_12987;var statearr_13021_13055 = state_12987__$1;(statearr_13021_13055[2] = inst_12977);
(statearr_13021_13055[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
}
}
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_13025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13025[0] = state_machine__6162__auto__);
(statearr_13025[1] = 1);
return statearr_13025;
});
var state_machine__6162__auto____1 = (function (state_12987){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_12987);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e13026){if((e13026 instanceof Object))
{var ex__6165__auto__ = e13026;var statearr_13027_13056 = state_12987;(statearr_13027_13056[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12987);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13026;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13057 = state_12987;
state_12987 = G__13057;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_12987){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_12987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_13028 = f__6177__auto__.call(null);(statearr_13028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto___13029);
return statearr_13028;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13059 = {};return obj13059;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3403__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3403__auto__,mults){
return (function (p1__13060_SHARP_){if(cljs.core.truth_(p1__13060_SHARP_.call(null,topic)))
{return p1__13060_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13060_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3403__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13185 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13185 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13186){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13186 = meta13186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13185.cljs$lang$type = true;
cljs.core.async.t13185.cljs$lang$ctorStr = "cljs.core.async/t13185";
cljs.core.async.t13185.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t13185");
});})(mults,ensure_mult))
;
cljs.core.async.t13185.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13185.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13185.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13185.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13185.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13185.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13185.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13187){var self__ = this;
var _13187__$1 = this;return self__.meta13186;
});})(mults,ensure_mult))
;
cljs.core.async.t13185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13187,meta13186__$1){var self__ = this;
var _13187__$1 = this;return (new cljs.core.async.t13185(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13186__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13185 = ((function (mults,ensure_mult){
return (function __GT_t13185(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13186){return (new cljs.core.async.t13185(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13186));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13185(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6176__auto___13309 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_13261){var state_val_13262 = (state_13261[1]);if((state_val_13262 === 1))
{var state_13261__$1 = state_13261;var statearr_13263_13310 = state_13261__$1;(statearr_13263_13310[2] = null);
(statearr_13263_13310[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 2))
{var state_13261__$1 = state_13261;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13261__$1,4,ch);
} else
{if((state_val_13262 === 3))
{var inst_13259 = (state_13261[2]);var state_13261__$1 = state_13261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13261__$1,inst_13259);
} else
{if((state_val_13262 === 4))
{var inst_13190 = (state_13261[7]);var inst_13190__$1 = (state_13261[2]);var inst_13191 = (inst_13190__$1 == null);var state_13261__$1 = (function (){var statearr_13264 = state_13261;(statearr_13264[7] = inst_13190__$1);
return statearr_13264;
})();if(cljs.core.truth_(inst_13191))
{var statearr_13265_13311 = state_13261__$1;(statearr_13265_13311[1] = 5);
} else
{var statearr_13266_13312 = state_13261__$1;(statearr_13266_13312[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 5))
{var inst_13197 = cljs.core.deref.call(null,mults);var inst_13198 = cljs.core.vals.call(null,inst_13197);var inst_13199 = cljs.core.seq.call(null,inst_13198);var inst_13200 = inst_13199;var inst_13201 = null;var inst_13202 = 0;var inst_13203 = 0;var state_13261__$1 = (function (){var statearr_13267 = state_13261;(statearr_13267[8] = inst_13203);
(statearr_13267[9] = inst_13202);
(statearr_13267[10] = inst_13201);
(statearr_13267[11] = inst_13200);
return statearr_13267;
})();var statearr_13268_13313 = state_13261__$1;(statearr_13268_13313[2] = null);
(statearr_13268_13313[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 6))
{var inst_13238 = (state_13261[12]);var inst_13240 = (state_13261[13]);var inst_13190 = (state_13261[7]);var inst_13238__$1 = topic_fn.call(null,inst_13190);var inst_13239 = cljs.core.deref.call(null,mults);var inst_13240__$1 = cljs.core.get.call(null,inst_13239,inst_13238__$1);var state_13261__$1 = (function (){var statearr_13269 = state_13261;(statearr_13269[12] = inst_13238__$1);
(statearr_13269[13] = inst_13240__$1);
return statearr_13269;
})();if(cljs.core.truth_(inst_13240__$1))
{var statearr_13270_13314 = state_13261__$1;(statearr_13270_13314[1] = 19);
} else
{var statearr_13271_13315 = state_13261__$1;(statearr_13271_13315[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 7))
{var inst_13257 = (state_13261[2]);var state_13261__$1 = state_13261;var statearr_13272_13316 = state_13261__$1;(statearr_13272_13316[2] = inst_13257);
(statearr_13272_13316[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 8))
{var inst_13203 = (state_13261[8]);var inst_13202 = (state_13261[9]);var inst_13205 = (inst_13203 < inst_13202);var inst_13206 = inst_13205;var state_13261__$1 = state_13261;if(cljs.core.truth_(inst_13206))
{var statearr_13276_13317 = state_13261__$1;(statearr_13276_13317[1] = 10);
} else
{var statearr_13277_13318 = state_13261__$1;(statearr_13277_13318[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 9))
{var inst_13236 = (state_13261[2]);var state_13261__$1 = state_13261;var statearr_13278_13319 = state_13261__$1;(statearr_13278_13319[2] = inst_13236);
(statearr_13278_13319[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 10))
{var inst_13203 = (state_13261[8]);var inst_13202 = (state_13261[9]);var inst_13201 = (state_13261[10]);var inst_13200 = (state_13261[11]);var inst_13208 = cljs.core._nth.call(null,inst_13201,inst_13203);var inst_13209 = cljs.core.async.muxch_STAR_.call(null,inst_13208);var inst_13210 = cljs.core.async.close_BANG_.call(null,inst_13209);var inst_13211 = (inst_13203 + 1);var tmp13273 = inst_13202;var tmp13274 = inst_13201;var tmp13275 = inst_13200;var inst_13200__$1 = tmp13275;var inst_13201__$1 = tmp13274;var inst_13202__$1 = tmp13273;var inst_13203__$1 = inst_13211;var state_13261__$1 = (function (){var statearr_13279 = state_13261;(statearr_13279[8] = inst_13203__$1);
(statearr_13279[9] = inst_13202__$1);
(statearr_13279[10] = inst_13201__$1);
(statearr_13279[11] = inst_13200__$1);
(statearr_13279[14] = inst_13210);
return statearr_13279;
})();var statearr_13280_13320 = state_13261__$1;(statearr_13280_13320[2] = null);
(statearr_13280_13320[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 11))
{var inst_13200 = (state_13261[11]);var inst_13214 = (state_13261[15]);var inst_13214__$1 = cljs.core.seq.call(null,inst_13200);var state_13261__$1 = (function (){var statearr_13281 = state_13261;(statearr_13281[15] = inst_13214__$1);
return statearr_13281;
})();if(inst_13214__$1)
{var statearr_13282_13321 = state_13261__$1;(statearr_13282_13321[1] = 13);
} else
{var statearr_13283_13322 = state_13261__$1;(statearr_13283_13322[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 12))
{var inst_13234 = (state_13261[2]);var state_13261__$1 = state_13261;var statearr_13284_13323 = state_13261__$1;(statearr_13284_13323[2] = inst_13234);
(statearr_13284_13323[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 13))
{var inst_13214 = (state_13261[15]);var inst_13216 = cljs.core.chunked_seq_QMARK_.call(null,inst_13214);var state_13261__$1 = state_13261;if(inst_13216)
{var statearr_13285_13324 = state_13261__$1;(statearr_13285_13324[1] = 16);
} else
{var statearr_13286_13325 = state_13261__$1;(statearr_13286_13325[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 14))
{var state_13261__$1 = state_13261;var statearr_13287_13326 = state_13261__$1;(statearr_13287_13326[2] = null);
(statearr_13287_13326[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 15))
{var inst_13232 = (state_13261[2]);var state_13261__$1 = state_13261;var statearr_13288_13327 = state_13261__$1;(statearr_13288_13327[2] = inst_13232);
(statearr_13288_13327[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 16))
{var inst_13214 = (state_13261[15]);var inst_13218 = cljs.core.chunk_first.call(null,inst_13214);var inst_13219 = cljs.core.chunk_rest.call(null,inst_13214);var inst_13220 = cljs.core.count.call(null,inst_13218);var inst_13200 = inst_13219;var inst_13201 = inst_13218;var inst_13202 = inst_13220;var inst_13203 = 0;var state_13261__$1 = (function (){var statearr_13289 = state_13261;(statearr_13289[8] = inst_13203);
(statearr_13289[9] = inst_13202);
(statearr_13289[10] = inst_13201);
(statearr_13289[11] = inst_13200);
return statearr_13289;
})();var statearr_13290_13328 = state_13261__$1;(statearr_13290_13328[2] = null);
(statearr_13290_13328[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 17))
{var inst_13214 = (state_13261[15]);var inst_13223 = cljs.core.first.call(null,inst_13214);var inst_13224 = cljs.core.async.muxch_STAR_.call(null,inst_13223);var inst_13225 = cljs.core.async.close_BANG_.call(null,inst_13224);var inst_13226 = cljs.core.next.call(null,inst_13214);var inst_13200 = inst_13226;var inst_13201 = null;var inst_13202 = 0;var inst_13203 = 0;var state_13261__$1 = (function (){var statearr_13291 = state_13261;(statearr_13291[8] = inst_13203);
(statearr_13291[9] = inst_13202);
(statearr_13291[10] = inst_13201);
(statearr_13291[11] = inst_13200);
(statearr_13291[16] = inst_13225);
return statearr_13291;
})();var statearr_13292_13329 = state_13261__$1;(statearr_13292_13329[2] = null);
(statearr_13292_13329[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 18))
{var inst_13229 = (state_13261[2]);var state_13261__$1 = state_13261;var statearr_13293_13330 = state_13261__$1;(statearr_13293_13330[2] = inst_13229);
(statearr_13293_13330[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 19))
{var state_13261__$1 = state_13261;var statearr_13294_13331 = state_13261__$1;(statearr_13294_13331[2] = null);
(statearr_13294_13331[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 20))
{var state_13261__$1 = state_13261;var statearr_13295_13332 = state_13261__$1;(statearr_13295_13332[2] = null);
(statearr_13295_13332[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 21))
{var inst_13254 = (state_13261[2]);var state_13261__$1 = (function (){var statearr_13296 = state_13261;(statearr_13296[17] = inst_13254);
return statearr_13296;
})();var statearr_13297_13333 = state_13261__$1;(statearr_13297_13333[2] = null);
(statearr_13297_13333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 22))
{var inst_13251 = (state_13261[2]);var state_13261__$1 = state_13261;var statearr_13298_13334 = state_13261__$1;(statearr_13298_13334[2] = inst_13251);
(statearr_13298_13334[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 23))
{var inst_13238 = (state_13261[12]);var inst_13242 = (state_13261[2]);var inst_13243 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13238);var state_13261__$1 = (function (){var statearr_13299 = state_13261;(statearr_13299[18] = inst_13242);
return statearr_13299;
})();var statearr_13300_13335 = state_13261__$1;(statearr_13300_13335[2] = inst_13243);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13261__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13262 === 24))
{var inst_13240 = (state_13261[13]);var inst_13190 = (state_13261[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13261,23,Object,null,22);var inst_13247 = cljs.core.async.muxch_STAR_.call(null,inst_13240);var state_13261__$1 = state_13261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13261__$1,25,inst_13247,inst_13190);
} else
{if((state_val_13262 === 25))
{var inst_13249 = (state_13261[2]);var state_13261__$1 = state_13261;var statearr_13301_13336 = state_13261__$1;(statearr_13301_13336[2] = inst_13249);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13261__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
}
}
}
}
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_13305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13305[0] = state_machine__6162__auto__);
(statearr_13305[1] = 1);
return statearr_13305;
});
var state_machine__6162__auto____1 = (function (state_13261){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_13261);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e13306){if((e13306 instanceof Object))
{var ex__6165__auto__ = e13306;var statearr_13307_13337 = state_13261;(statearr_13307_13337[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13261);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13338 = state_13261;
state_13261 = G__13338;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_13261){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_13261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_13308 = f__6177__auto__.call(null);(statearr_13308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto___13309);
return statearr_13308;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6176__auto___13475 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_13445){var state_val_13446 = (state_13445[1]);if((state_val_13446 === 1))
{var state_13445__$1 = state_13445;var statearr_13447_13476 = state_13445__$1;(statearr_13447_13476[2] = null);
(statearr_13447_13476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 2))
{var inst_13408 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13409 = 0;var state_13445__$1 = (function (){var statearr_13448 = state_13445;(statearr_13448[7] = inst_13408);
(statearr_13448[8] = inst_13409);
return statearr_13448;
})();var statearr_13449_13477 = state_13445__$1;(statearr_13449_13477[2] = null);
(statearr_13449_13477[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 3))
{var inst_13443 = (state_13445[2]);var state_13445__$1 = state_13445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13445__$1,inst_13443);
} else
{if((state_val_13446 === 4))
{var inst_13409 = (state_13445[8]);var inst_13411 = (inst_13409 < cnt);var state_13445__$1 = state_13445;if(cljs.core.truth_(inst_13411))
{var statearr_13450_13478 = state_13445__$1;(statearr_13450_13478[1] = 6);
} else
{var statearr_13451_13479 = state_13445__$1;(statearr_13451_13479[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 5))
{var inst_13429 = (state_13445[2]);var state_13445__$1 = (function (){var statearr_13452 = state_13445;(statearr_13452[9] = inst_13429);
return statearr_13452;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13445__$1,12,dchan);
} else
{if((state_val_13446 === 6))
{var state_13445__$1 = state_13445;var statearr_13453_13480 = state_13445__$1;(statearr_13453_13480[2] = null);
(statearr_13453_13480[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 7))
{var state_13445__$1 = state_13445;var statearr_13454_13481 = state_13445__$1;(statearr_13454_13481[2] = null);
(statearr_13454_13481[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 8))
{var inst_13427 = (state_13445[2]);var state_13445__$1 = state_13445;var statearr_13455_13482 = state_13445__$1;(statearr_13455_13482[2] = inst_13427);
(statearr_13455_13482[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 9))
{var inst_13409 = (state_13445[8]);var inst_13422 = (state_13445[2]);var inst_13423 = (inst_13409 + 1);var inst_13409__$1 = inst_13423;var state_13445__$1 = (function (){var statearr_13456 = state_13445;(statearr_13456[8] = inst_13409__$1);
(statearr_13456[10] = inst_13422);
return statearr_13456;
})();var statearr_13457_13483 = state_13445__$1;(statearr_13457_13483[2] = null);
(statearr_13457_13483[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 10))
{var inst_13413 = (state_13445[2]);var inst_13414 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13445__$1 = (function (){var statearr_13458 = state_13445;(statearr_13458[11] = inst_13413);
return statearr_13458;
})();var statearr_13459_13484 = state_13445__$1;(statearr_13459_13484[2] = inst_13414);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13445__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 11))
{var inst_13409 = (state_13445[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13445,10,Object,null,9);var inst_13418 = chs__$1.call(null,inst_13409);var inst_13419 = done.call(null,inst_13409);var inst_13420 = cljs.core.async.take_BANG_.call(null,inst_13418,inst_13419);var state_13445__$1 = state_13445;var statearr_13460_13485 = state_13445__$1;(statearr_13460_13485[2] = inst_13420);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13445__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 12))
{var inst_13431 = (state_13445[12]);var inst_13431__$1 = (state_13445[2]);var inst_13432 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13431__$1);var state_13445__$1 = (function (){var statearr_13461 = state_13445;(statearr_13461[12] = inst_13431__$1);
return statearr_13461;
})();if(cljs.core.truth_(inst_13432))
{var statearr_13462_13486 = state_13445__$1;(statearr_13462_13486[1] = 13);
} else
{var statearr_13463_13487 = state_13445__$1;(statearr_13463_13487[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 13))
{var inst_13434 = cljs.core.async.close_BANG_.call(null,out);var state_13445__$1 = state_13445;var statearr_13464_13488 = state_13445__$1;(statearr_13464_13488[2] = inst_13434);
(statearr_13464_13488[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 14))
{var inst_13431 = (state_13445[12]);var inst_13436 = cljs.core.apply.call(null,f,inst_13431);var state_13445__$1 = state_13445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13445__$1,16,out,inst_13436);
} else
{if((state_val_13446 === 15))
{var inst_13441 = (state_13445[2]);var state_13445__$1 = state_13445;var statearr_13465_13489 = state_13445__$1;(statearr_13465_13489[2] = inst_13441);
(statearr_13465_13489[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 16))
{var inst_13438 = (state_13445[2]);var state_13445__$1 = (function (){var statearr_13466 = state_13445;(statearr_13466[13] = inst_13438);
return statearr_13466;
})();var statearr_13467_13490 = state_13445__$1;(statearr_13467_13490[2] = null);
(statearr_13467_13490[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_13471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13471[0] = state_machine__6162__auto__);
(statearr_13471[1] = 1);
return statearr_13471;
});
var state_machine__6162__auto____1 = (function (state_13445){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_13445);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e13472){if((e13472 instanceof Object))
{var ex__6165__auto__ = e13472;var statearr_13473_13491 = state_13445;(statearr_13473_13491[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13472;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13492 = state_13445;
state_13445 = G__13492;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_13445){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_13445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_13474 = f__6177__auto__.call(null);(statearr_13474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto___13475);
return statearr_13474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6176__auto___13600 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_13576){var state_val_13577 = (state_13576[1]);if((state_val_13577 === 1))
{var inst_13547 = cljs.core.vec.call(null,chs);var inst_13548 = inst_13547;var state_13576__$1 = (function (){var statearr_13578 = state_13576;(statearr_13578[7] = inst_13548);
return statearr_13578;
})();var statearr_13579_13601 = state_13576__$1;(statearr_13579_13601[2] = null);
(statearr_13579_13601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13577 === 2))
{var inst_13548 = (state_13576[7]);var inst_13550 = cljs.core.count.call(null,inst_13548);var inst_13551 = (inst_13550 > 0);var state_13576__$1 = state_13576;if(cljs.core.truth_(inst_13551))
{var statearr_13580_13602 = state_13576__$1;(statearr_13580_13602[1] = 4);
} else
{var statearr_13581_13603 = state_13576__$1;(statearr_13581_13603[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13577 === 3))
{var inst_13574 = (state_13576[2]);var state_13576__$1 = state_13576;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13576__$1,inst_13574);
} else
{if((state_val_13577 === 4))
{var inst_13548 = (state_13576[7]);var state_13576__$1 = state_13576;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13576__$1,7,inst_13548);
} else
{if((state_val_13577 === 5))
{var inst_13570 = cljs.core.async.close_BANG_.call(null,out);var state_13576__$1 = state_13576;var statearr_13582_13604 = state_13576__$1;(statearr_13582_13604[2] = inst_13570);
(statearr_13582_13604[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13577 === 6))
{var inst_13572 = (state_13576[2]);var state_13576__$1 = state_13576;var statearr_13583_13605 = state_13576__$1;(statearr_13583_13605[2] = inst_13572);
(statearr_13583_13605[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13577 === 7))
{var inst_13556 = (state_13576[8]);var inst_13555 = (state_13576[9]);var inst_13555__$1 = (state_13576[2]);var inst_13556__$1 = cljs.core.nth.call(null,inst_13555__$1,0,null);var inst_13557 = cljs.core.nth.call(null,inst_13555__$1,1,null);var inst_13558 = (inst_13556__$1 == null);var state_13576__$1 = (function (){var statearr_13584 = state_13576;(statearr_13584[10] = inst_13557);
(statearr_13584[8] = inst_13556__$1);
(statearr_13584[9] = inst_13555__$1);
return statearr_13584;
})();if(cljs.core.truth_(inst_13558))
{var statearr_13585_13606 = state_13576__$1;(statearr_13585_13606[1] = 8);
} else
{var statearr_13586_13607 = state_13576__$1;(statearr_13586_13607[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13577 === 8))
{var inst_13557 = (state_13576[10]);var inst_13556 = (state_13576[8]);var inst_13555 = (state_13576[9]);var inst_13548 = (state_13576[7]);var inst_13560 = (function (){var c = inst_13557;var v = inst_13556;var vec__13553 = inst_13555;var cs = inst_13548;return ((function (c,v,vec__13553,cs,inst_13557,inst_13556,inst_13555,inst_13548,state_val_13577){
return (function (p1__13493_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13493_SHARP_);
});
;})(c,v,vec__13553,cs,inst_13557,inst_13556,inst_13555,inst_13548,state_val_13577))
})();var inst_13561 = cljs.core.filterv.call(null,inst_13560,inst_13548);var inst_13548__$1 = inst_13561;var state_13576__$1 = (function (){var statearr_13587 = state_13576;(statearr_13587[7] = inst_13548__$1);
return statearr_13587;
})();var statearr_13588_13608 = state_13576__$1;(statearr_13588_13608[2] = null);
(statearr_13588_13608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13577 === 9))
{var inst_13556 = (state_13576[8]);var state_13576__$1 = state_13576;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13576__$1,11,out,inst_13556);
} else
{if((state_val_13577 === 10))
{var inst_13568 = (state_13576[2]);var state_13576__$1 = state_13576;var statearr_13590_13609 = state_13576__$1;(statearr_13590_13609[2] = inst_13568);
(statearr_13590_13609[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13577 === 11))
{var inst_13548 = (state_13576[7]);var inst_13565 = (state_13576[2]);var tmp13589 = inst_13548;var inst_13548__$1 = tmp13589;var state_13576__$1 = (function (){var statearr_13591 = state_13576;(statearr_13591[11] = inst_13565);
(statearr_13591[7] = inst_13548__$1);
return statearr_13591;
})();var statearr_13592_13610 = state_13576__$1;(statearr_13592_13610[2] = null);
(statearr_13592_13610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_13596 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13596[0] = state_machine__6162__auto__);
(statearr_13596[1] = 1);
return statearr_13596;
});
var state_machine__6162__auto____1 = (function (state_13576){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_13576);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e13597){if((e13597 instanceof Object))
{var ex__6165__auto__ = e13597;var statearr_13598_13611 = state_13576;(statearr_13598_13611[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13576);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13612 = state_13576;
state_13576 = G__13612;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_13576){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_13576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_13599 = f__6177__auto__.call(null);(statearr_13599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto___13600);
return statearr_13599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6176__auto___13705 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_13682){var state_val_13683 = (state_13682[1]);if((state_val_13683 === 1))
{var inst_13659 = 0;var state_13682__$1 = (function (){var statearr_13684 = state_13682;(statearr_13684[7] = inst_13659);
return statearr_13684;
})();var statearr_13685_13706 = state_13682__$1;(statearr_13685_13706[2] = null);
(statearr_13685_13706[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13683 === 2))
{var inst_13659 = (state_13682[7]);var inst_13661 = (inst_13659 < n);var state_13682__$1 = state_13682;if(cljs.core.truth_(inst_13661))
{var statearr_13686_13707 = state_13682__$1;(statearr_13686_13707[1] = 4);
} else
{var statearr_13687_13708 = state_13682__$1;(statearr_13687_13708[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13683 === 3))
{var inst_13679 = (state_13682[2]);var inst_13680 = cljs.core.async.close_BANG_.call(null,out);var state_13682__$1 = (function (){var statearr_13688 = state_13682;(statearr_13688[8] = inst_13679);
return statearr_13688;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13682__$1,inst_13680);
} else
{if((state_val_13683 === 4))
{var state_13682__$1 = state_13682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13682__$1,7,ch);
} else
{if((state_val_13683 === 5))
{var state_13682__$1 = state_13682;var statearr_13689_13709 = state_13682__$1;(statearr_13689_13709[2] = null);
(statearr_13689_13709[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13683 === 6))
{var inst_13677 = (state_13682[2]);var state_13682__$1 = state_13682;var statearr_13690_13710 = state_13682__$1;(statearr_13690_13710[2] = inst_13677);
(statearr_13690_13710[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13683 === 7))
{var inst_13664 = (state_13682[9]);var inst_13664__$1 = (state_13682[2]);var inst_13665 = (inst_13664__$1 == null);var inst_13666 = cljs.core.not.call(null,inst_13665);var state_13682__$1 = (function (){var statearr_13691 = state_13682;(statearr_13691[9] = inst_13664__$1);
return statearr_13691;
})();if(inst_13666)
{var statearr_13692_13711 = state_13682__$1;(statearr_13692_13711[1] = 8);
} else
{var statearr_13693_13712 = state_13682__$1;(statearr_13693_13712[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13683 === 8))
{var inst_13664 = (state_13682[9]);var state_13682__$1 = state_13682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13682__$1,11,out,inst_13664);
} else
{if((state_val_13683 === 9))
{var state_13682__$1 = state_13682;var statearr_13694_13713 = state_13682__$1;(statearr_13694_13713[2] = null);
(statearr_13694_13713[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13683 === 10))
{var inst_13674 = (state_13682[2]);var state_13682__$1 = state_13682;var statearr_13695_13714 = state_13682__$1;(statearr_13695_13714[2] = inst_13674);
(statearr_13695_13714[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13683 === 11))
{var inst_13659 = (state_13682[7]);var inst_13669 = (state_13682[2]);var inst_13670 = (inst_13659 + 1);var inst_13659__$1 = inst_13670;var state_13682__$1 = (function (){var statearr_13696 = state_13682;(statearr_13696[10] = inst_13669);
(statearr_13696[7] = inst_13659__$1);
return statearr_13696;
})();var statearr_13697_13715 = state_13682__$1;(statearr_13697_13715[2] = null);
(statearr_13697_13715[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_13701 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13701[0] = state_machine__6162__auto__);
(statearr_13701[1] = 1);
return statearr_13701;
});
var state_machine__6162__auto____1 = (function (state_13682){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_13682);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e13702){if((e13702 instanceof Object))
{var ex__6165__auto__ = e13702;var statearr_13703_13716 = state_13682;(statearr_13703_13716[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13682);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13702;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13717 = state_13682;
state_13682 = G__13717;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_13682){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_13682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_13704 = f__6177__auto__.call(null);(statearr_13704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto___13705);
return statearr_13704;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6176__auto___13814 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_13789){var state_val_13790 = (state_13789[1]);if((state_val_13790 === 1))
{var inst_13766 = null;var state_13789__$1 = (function (){var statearr_13791 = state_13789;(statearr_13791[7] = inst_13766);
return statearr_13791;
})();var statearr_13792_13815 = state_13789__$1;(statearr_13792_13815[2] = null);
(statearr_13792_13815[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13790 === 2))
{var state_13789__$1 = state_13789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13789__$1,4,ch);
} else
{if((state_val_13790 === 3))
{var inst_13786 = (state_13789[2]);var inst_13787 = cljs.core.async.close_BANG_.call(null,out);var state_13789__$1 = (function (){var statearr_13793 = state_13789;(statearr_13793[8] = inst_13786);
return statearr_13793;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13789__$1,inst_13787);
} else
{if((state_val_13790 === 4))
{var inst_13769 = (state_13789[9]);var inst_13769__$1 = (state_13789[2]);var inst_13770 = (inst_13769__$1 == null);var inst_13771 = cljs.core.not.call(null,inst_13770);var state_13789__$1 = (function (){var statearr_13794 = state_13789;(statearr_13794[9] = inst_13769__$1);
return statearr_13794;
})();if(inst_13771)
{var statearr_13795_13816 = state_13789__$1;(statearr_13795_13816[1] = 5);
} else
{var statearr_13796_13817 = state_13789__$1;(statearr_13796_13817[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13790 === 5))
{var inst_13766 = (state_13789[7]);var inst_13769 = (state_13789[9]);var inst_13773 = cljs.core._EQ_.call(null,inst_13769,inst_13766);var state_13789__$1 = state_13789;if(inst_13773)
{var statearr_13797_13818 = state_13789__$1;(statearr_13797_13818[1] = 8);
} else
{var statearr_13798_13819 = state_13789__$1;(statearr_13798_13819[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13790 === 6))
{var state_13789__$1 = state_13789;var statearr_13800_13820 = state_13789__$1;(statearr_13800_13820[2] = null);
(statearr_13800_13820[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13790 === 7))
{var inst_13784 = (state_13789[2]);var state_13789__$1 = state_13789;var statearr_13801_13821 = state_13789__$1;(statearr_13801_13821[2] = inst_13784);
(statearr_13801_13821[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13790 === 8))
{var inst_13766 = (state_13789[7]);var tmp13799 = inst_13766;var inst_13766__$1 = tmp13799;var state_13789__$1 = (function (){var statearr_13802 = state_13789;(statearr_13802[7] = inst_13766__$1);
return statearr_13802;
})();var statearr_13803_13822 = state_13789__$1;(statearr_13803_13822[2] = null);
(statearr_13803_13822[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13790 === 9))
{var inst_13769 = (state_13789[9]);var state_13789__$1 = state_13789;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13789__$1,11,out,inst_13769);
} else
{if((state_val_13790 === 10))
{var inst_13781 = (state_13789[2]);var state_13789__$1 = state_13789;var statearr_13804_13823 = state_13789__$1;(statearr_13804_13823[2] = inst_13781);
(statearr_13804_13823[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13790 === 11))
{var inst_13769 = (state_13789[9]);var inst_13778 = (state_13789[2]);var inst_13766 = inst_13769;var state_13789__$1 = (function (){var statearr_13805 = state_13789;(statearr_13805[10] = inst_13778);
(statearr_13805[7] = inst_13766);
return statearr_13805;
})();var statearr_13806_13824 = state_13789__$1;(statearr_13806_13824[2] = null);
(statearr_13806_13824[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_13810 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13810[0] = state_machine__6162__auto__);
(statearr_13810[1] = 1);
return statearr_13810;
});
var state_machine__6162__auto____1 = (function (state_13789){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_13789);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e13811){if((e13811 instanceof Object))
{var ex__6165__auto__ = e13811;var statearr_13812_13825 = state_13789;(statearr_13812_13825[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13789);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13826 = state_13789;
state_13789 = G__13826;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_13789){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_13789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_13813 = f__6177__auto__.call(null);(statearr_13813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto___13814);
return statearr_13813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6176__auto___13961 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_13931){var state_val_13932 = (state_13931[1]);if((state_val_13932 === 1))
{var inst_13894 = (new Array(n));var inst_13895 = inst_13894;var inst_13896 = 0;var state_13931__$1 = (function (){var statearr_13933 = state_13931;(statearr_13933[7] = inst_13896);
(statearr_13933[8] = inst_13895);
return statearr_13933;
})();var statearr_13934_13962 = state_13931__$1;(statearr_13934_13962[2] = null);
(statearr_13934_13962[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13932 === 2))
{var state_13931__$1 = state_13931;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13931__$1,4,ch);
} else
{if((state_val_13932 === 3))
{var inst_13929 = (state_13931[2]);var state_13931__$1 = state_13931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13931__$1,inst_13929);
} else
{if((state_val_13932 === 4))
{var inst_13899 = (state_13931[9]);var inst_13899__$1 = (state_13931[2]);var inst_13900 = (inst_13899__$1 == null);var inst_13901 = cljs.core.not.call(null,inst_13900);var state_13931__$1 = (function (){var statearr_13935 = state_13931;(statearr_13935[9] = inst_13899__$1);
return statearr_13935;
})();if(inst_13901)
{var statearr_13936_13963 = state_13931__$1;(statearr_13936_13963[1] = 5);
} else
{var statearr_13937_13964 = state_13931__$1;(statearr_13937_13964[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13932 === 5))
{var inst_13904 = (state_13931[10]);var inst_13899 = (state_13931[9]);var inst_13896 = (state_13931[7]);var inst_13895 = (state_13931[8]);var inst_13903 = (inst_13895[inst_13896] = inst_13899);var inst_13904__$1 = (inst_13896 + 1);var inst_13905 = (inst_13904__$1 < n);var state_13931__$1 = (function (){var statearr_13938 = state_13931;(statearr_13938[11] = inst_13903);
(statearr_13938[10] = inst_13904__$1);
return statearr_13938;
})();if(cljs.core.truth_(inst_13905))
{var statearr_13939_13965 = state_13931__$1;(statearr_13939_13965[1] = 8);
} else
{var statearr_13940_13966 = state_13931__$1;(statearr_13940_13966[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13932 === 6))
{var inst_13896 = (state_13931[7]);var inst_13917 = (inst_13896 > 0);var state_13931__$1 = state_13931;if(cljs.core.truth_(inst_13917))
{var statearr_13942_13967 = state_13931__$1;(statearr_13942_13967[1] = 12);
} else
{var statearr_13943_13968 = state_13931__$1;(statearr_13943_13968[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13932 === 7))
{var inst_13927 = (state_13931[2]);var state_13931__$1 = state_13931;var statearr_13944_13969 = state_13931__$1;(statearr_13944_13969[2] = inst_13927);
(statearr_13944_13969[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13932 === 8))
{var inst_13904 = (state_13931[10]);var inst_13895 = (state_13931[8]);var tmp13941 = inst_13895;var inst_13895__$1 = tmp13941;var inst_13896 = inst_13904;var state_13931__$1 = (function (){var statearr_13945 = state_13931;(statearr_13945[7] = inst_13896);
(statearr_13945[8] = inst_13895__$1);
return statearr_13945;
})();var statearr_13946_13970 = state_13931__$1;(statearr_13946_13970[2] = null);
(statearr_13946_13970[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13932 === 9))
{var inst_13895 = (state_13931[8]);var inst_13909 = cljs.core.vec.call(null,inst_13895);var state_13931__$1 = state_13931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13931__$1,11,out,inst_13909);
} else
{if((state_val_13932 === 10))
{var inst_13915 = (state_13931[2]);var state_13931__$1 = state_13931;var statearr_13947_13971 = state_13931__$1;(statearr_13947_13971[2] = inst_13915);
(statearr_13947_13971[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13932 === 11))
{var inst_13911 = (state_13931[2]);var inst_13912 = (new Array(n));var inst_13895 = inst_13912;var inst_13896 = 0;var state_13931__$1 = (function (){var statearr_13948 = state_13931;(statearr_13948[12] = inst_13911);
(statearr_13948[7] = inst_13896);
(statearr_13948[8] = inst_13895);
return statearr_13948;
})();var statearr_13949_13972 = state_13931__$1;(statearr_13949_13972[2] = null);
(statearr_13949_13972[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13932 === 12))
{var inst_13895 = (state_13931[8]);var inst_13919 = cljs.core.vec.call(null,inst_13895);var state_13931__$1 = state_13931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13931__$1,15,out,inst_13919);
} else
{if((state_val_13932 === 13))
{var state_13931__$1 = state_13931;var statearr_13950_13973 = state_13931__$1;(statearr_13950_13973[2] = null);
(statearr_13950_13973[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13932 === 14))
{var inst_13924 = (state_13931[2]);var inst_13925 = cljs.core.async.close_BANG_.call(null,out);var state_13931__$1 = (function (){var statearr_13951 = state_13931;(statearr_13951[13] = inst_13924);
return statearr_13951;
})();var statearr_13952_13974 = state_13931__$1;(statearr_13952_13974[2] = inst_13925);
(statearr_13952_13974[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13932 === 15))
{var inst_13921 = (state_13931[2]);var state_13931__$1 = state_13931;var statearr_13953_13975 = state_13931__$1;(statearr_13953_13975[2] = inst_13921);
(statearr_13953_13975[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_13957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13957[0] = state_machine__6162__auto__);
(statearr_13957[1] = 1);
return statearr_13957;
});
var state_machine__6162__auto____1 = (function (state_13931){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_13931);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e13958){if((e13958 instanceof Object))
{var ex__6165__auto__ = e13958;var statearr_13959_13976 = state_13931;(statearr_13959_13976[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13931);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13977 = state_13931;
state_13931 = G__13977;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_13931){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_13931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_13960 = f__6177__auto__.call(null);(statearr_13960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto___13961);
return statearr_13960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6176__auto___14120 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_14090){var state_val_14091 = (state_14090[1]);if((state_val_14091 === 1))
{var inst_14049 = [];var inst_14050 = inst_14049;var inst_14051 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14090__$1 = (function (){var statearr_14092 = state_14090;(statearr_14092[7] = inst_14051);
(statearr_14092[8] = inst_14050);
return statearr_14092;
})();var statearr_14093_14121 = state_14090__$1;(statearr_14093_14121[2] = null);
(statearr_14093_14121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14091 === 2))
{var state_14090__$1 = state_14090;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14090__$1,4,ch);
} else
{if((state_val_14091 === 3))
{var inst_14088 = (state_14090[2]);var state_14090__$1 = state_14090;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14090__$1,inst_14088);
} else
{if((state_val_14091 === 4))
{var inst_14054 = (state_14090[9]);var inst_14054__$1 = (state_14090[2]);var inst_14055 = (inst_14054__$1 == null);var inst_14056 = cljs.core.not.call(null,inst_14055);var state_14090__$1 = (function (){var statearr_14094 = state_14090;(statearr_14094[9] = inst_14054__$1);
return statearr_14094;
})();if(inst_14056)
{var statearr_14095_14122 = state_14090__$1;(statearr_14095_14122[1] = 5);
} else
{var statearr_14096_14123 = state_14090__$1;(statearr_14096_14123[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14091 === 5))
{var inst_14058 = (state_14090[10]);var inst_14051 = (state_14090[7]);var inst_14054 = (state_14090[9]);var inst_14058__$1 = f.call(null,inst_14054);var inst_14059 = cljs.core._EQ_.call(null,inst_14058__$1,inst_14051);var inst_14060 = cljs.core.keyword_identical_QMARK_.call(null,inst_14051,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14061 = (inst_14059) || (inst_14060);var state_14090__$1 = (function (){var statearr_14097 = state_14090;(statearr_14097[10] = inst_14058__$1);
return statearr_14097;
})();if(cljs.core.truth_(inst_14061))
{var statearr_14098_14124 = state_14090__$1;(statearr_14098_14124[1] = 8);
} else
{var statearr_14099_14125 = state_14090__$1;(statearr_14099_14125[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14091 === 6))
{var inst_14050 = (state_14090[8]);var inst_14075 = inst_14050.length;var inst_14076 = (inst_14075 > 0);var state_14090__$1 = state_14090;if(cljs.core.truth_(inst_14076))
{var statearr_14101_14126 = state_14090__$1;(statearr_14101_14126[1] = 12);
} else
{var statearr_14102_14127 = state_14090__$1;(statearr_14102_14127[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14091 === 7))
{var inst_14086 = (state_14090[2]);var state_14090__$1 = state_14090;var statearr_14103_14128 = state_14090__$1;(statearr_14103_14128[2] = inst_14086);
(statearr_14103_14128[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14091 === 8))
{var inst_14058 = (state_14090[10]);var inst_14054 = (state_14090[9]);var inst_14050 = (state_14090[8]);var inst_14063 = inst_14050.push(inst_14054);var tmp14100 = inst_14050;var inst_14050__$1 = tmp14100;var inst_14051 = inst_14058;var state_14090__$1 = (function (){var statearr_14104 = state_14090;(statearr_14104[7] = inst_14051);
(statearr_14104[8] = inst_14050__$1);
(statearr_14104[11] = inst_14063);
return statearr_14104;
})();var statearr_14105_14129 = state_14090__$1;(statearr_14105_14129[2] = null);
(statearr_14105_14129[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14091 === 9))
{var inst_14050 = (state_14090[8]);var inst_14066 = cljs.core.vec.call(null,inst_14050);var state_14090__$1 = state_14090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14090__$1,11,out,inst_14066);
} else
{if((state_val_14091 === 10))
{var inst_14073 = (state_14090[2]);var state_14090__$1 = state_14090;var statearr_14106_14130 = state_14090__$1;(statearr_14106_14130[2] = inst_14073);
(statearr_14106_14130[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14091 === 11))
{var inst_14058 = (state_14090[10]);var inst_14054 = (state_14090[9]);var inst_14068 = (state_14090[2]);var inst_14069 = [];var inst_14070 = inst_14069.push(inst_14054);var inst_14050 = inst_14069;var inst_14051 = inst_14058;var state_14090__$1 = (function (){var statearr_14107 = state_14090;(statearr_14107[12] = inst_14070);
(statearr_14107[7] = inst_14051);
(statearr_14107[13] = inst_14068);
(statearr_14107[8] = inst_14050);
return statearr_14107;
})();var statearr_14108_14131 = state_14090__$1;(statearr_14108_14131[2] = null);
(statearr_14108_14131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14091 === 12))
{var inst_14050 = (state_14090[8]);var inst_14078 = cljs.core.vec.call(null,inst_14050);var state_14090__$1 = state_14090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14090__$1,15,out,inst_14078);
} else
{if((state_val_14091 === 13))
{var state_14090__$1 = state_14090;var statearr_14109_14132 = state_14090__$1;(statearr_14109_14132[2] = null);
(statearr_14109_14132[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14091 === 14))
{var inst_14083 = (state_14090[2]);var inst_14084 = cljs.core.async.close_BANG_.call(null,out);var state_14090__$1 = (function (){var statearr_14110 = state_14090;(statearr_14110[14] = inst_14083);
return statearr_14110;
})();var statearr_14111_14133 = state_14090__$1;(statearr_14111_14133[2] = inst_14084);
(statearr_14111_14133[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14091 === 15))
{var inst_14080 = (state_14090[2]);var state_14090__$1 = state_14090;var statearr_14112_14134 = state_14090__$1;(statearr_14112_14134[2] = inst_14080);
(statearr_14112_14134[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_14116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14116[0] = state_machine__6162__auto__);
(statearr_14116[1] = 1);
return statearr_14116;
});
var state_machine__6162__auto____1 = (function (state_14090){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_14090);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e14117){if((e14117 instanceof Object))
{var ex__6165__auto__ = e14117;var statearr_14118_14135 = state_14090;(statearr_14118_14135[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14090);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14117;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14136 = state_14090;
state_14090 = G__14136;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_14090){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_14090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_14119 = f__6177__auto__.call(null);(statearr_14119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto___14120);
return statearr_14119;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map