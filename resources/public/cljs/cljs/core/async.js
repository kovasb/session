// Compiled by ClojureScript 0.0-2197
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11984 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11984 = (function (f,fn_handler,meta11985){
this.f = f;
this.fn_handler = fn_handler;
this.meta11985 = meta11985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11984.cljs$lang$type = true;
cljs.core.async.t11984.cljs$lang$ctorStr = "cljs.core.async/t11984";
cljs.core.async.t11984.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t11984");
});
cljs.core.async.t11984.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11986){var self__ = this;
var _11986__$1 = this;return self__.meta11985;
});
cljs.core.async.t11984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11986,meta11985__$1){var self__ = this;
var _11986__$1 = this;return (new cljs.core.async.t11984(self__.f,self__.fn_handler,meta11985__$1));
});
cljs.core.async.__GT_t11984 = (function __GT_t11984(f__$1,fn_handler__$1,meta11985){return (new cljs.core.async.t11984(f__$1,fn_handler__$1,meta11985));
});
}
return (new cljs.core.async.t11984(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11988 = buff;if(G__11988)
{var bit__4128__auto__ = null;if(cljs.core.truth_((function (){var or__3478__auto__ = bit__4128__auto__;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return G__11988.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11988.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11988);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11988);
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
{var val_11989 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11989);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11989,ret){
return (function (){return fn1.call(null,val_11989);
});})(val_11989,ret))
);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3466__auto__ = ret;if(cljs.core.truth_(and__3466__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3466__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4326__auto___11990 = n;var x_11991 = 0;while(true){
if((x_11991 < n__4326__auto___11990))
{(a[x_11991] = 0);
{
var G__11992 = (x_11991 + 1);
x_11991 = G__11992;
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
var G__11993 = (i + 1);
i = G__11993;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11997 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11997 = (function (flag,alt_flag,meta11998){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11998 = meta11998;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11997.cljs$lang$type = true;
cljs.core.async.t11997.cljs$lang$ctorStr = "cljs.core.async/t11997";
cljs.core.async.t11997.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t11997");
});})(flag))
;
cljs.core.async.t11997.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11997.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11997.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11999){var self__ = this;
var _11999__$1 = this;return self__.meta11998;
});})(flag))
;
cljs.core.async.t11997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11999,meta11998__$1){var self__ = this;
var _11999__$1 = this;return (new cljs.core.async.t11997(self__.flag,self__.alt_flag,meta11998__$1));
});})(flag))
;
cljs.core.async.__GT_t11997 = ((function (flag){
return (function __GT_t11997(flag__$1,alt_flag__$1,meta11998){return (new cljs.core.async.t11997(flag__$1,alt_flag__$1,meta11998));
});})(flag))
;
}
return (new cljs.core.async.t11997(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12003 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12003 = (function (cb,flag,alt_handler,meta12004){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12004 = meta12004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12003.cljs$lang$type = true;
cljs.core.async.t12003.cljs$lang$ctorStr = "cljs.core.async/t12003";
cljs.core.async.t12003.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12003");
});
cljs.core.async.t12003.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12005){var self__ = this;
var _12005__$1 = this;return self__.meta12004;
});
cljs.core.async.t12003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12005,meta12004__$1){var self__ = this;
var _12005__$1 = this;return (new cljs.core.async.t12003(self__.cb,self__.flag,self__.alt_handler,meta12004__$1));
});
cljs.core.async.__GT_t12003 = (function __GT_t12003(cb__$1,flag__$1,alt_handler__$1,meta12004){return (new cljs.core.async.t12003(cb__$1,flag__$1,alt_handler__$1,meta12004));
});
}
return (new cljs.core.async.t12003(cb,flag,alt_handler,null));
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
return (function (p1__12006_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12006_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3478__auto__ = wport;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12007 = (i + 1);
i = G__12007;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3478__auto__ = ret;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3466__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3466__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3466__auto__;
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
var alts_BANG___delegate = function (ports,p__12008){var map__12010 = p__12008;var map__12010__$1 = ((cljs.core.seq_QMARK_.call(null,map__12010))?cljs.core.apply.call(null,cljs.core.hash_map,map__12010):map__12010);var opts = map__12010__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12008 = null;if (arguments.length > 1) {
  p__12008 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12008);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12011){
var ports = cljs.core.first(arglist__12011);
var p__12008 = cljs.core.rest(arglist__12011);
return alts_BANG___delegate(ports,p__12008);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12019 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12019 = (function (ch,f,map_LT_,meta12020){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12020 = meta12020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12019.cljs$lang$type = true;
cljs.core.async.t12019.cljs$lang$ctorStr = "cljs.core.async/t12019";
cljs.core.async.t12019.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12019");
});
cljs.core.async.t12019.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12019.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12022 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12022 = (function (fn1,_,meta12020,ch,f,map_LT_,meta12023){
this.fn1 = fn1;
this._ = _;
this.meta12020 = meta12020;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12023 = meta12023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12022.cljs$lang$type = true;
cljs.core.async.t12022.cljs$lang$ctorStr = "cljs.core.async/t12022";
cljs.core.async.t12022.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12022");
});})(___$1))
;
cljs.core.async.t12022.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12022.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__12012_SHARP_){return f1.call(null,(((p1__12012_SHARP_ == null))?null:self__.f.call(null,p1__12012_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t12022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12024){var self__ = this;
var _12024__$1 = this;return self__.meta12023;
});})(___$1))
;
cljs.core.async.t12022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12024,meta12023__$1){var self__ = this;
var _12024__$1 = this;return (new cljs.core.async.t12022(self__.fn1,self__._,self__.meta12020,self__.ch,self__.f,self__.map_LT_,meta12023__$1));
});})(___$1))
;
cljs.core.async.__GT_t12022 = ((function (___$1){
return (function __GT_t12022(fn1__$1,___$2,meta12020__$1,ch__$2,f__$2,map_LT___$2,meta12023){return (new cljs.core.async.t12022(fn1__$1,___$2,meta12020__$1,ch__$2,f__$2,map_LT___$2,meta12023));
});})(___$1))
;
}
return (new cljs.core.async.t12022(fn1,___$1,self__.meta12020,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3466__auto__ = ret;if(cljs.core.truth_(and__3466__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3466__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12019.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12021){var self__ = this;
var _12021__$1 = this;return self__.meta12020;
});
cljs.core.async.t12019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12021,meta12020__$1){var self__ = this;
var _12021__$1 = this;return (new cljs.core.async.t12019(self__.ch,self__.f,self__.map_LT_,meta12020__$1));
});
cljs.core.async.__GT_t12019 = (function __GT_t12019(ch__$1,f__$1,map_LT___$1,meta12020){return (new cljs.core.async.t12019(ch__$1,f__$1,map_LT___$1,meta12020));
});
}
return (new cljs.core.async.t12019(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12028 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12028 = (function (ch,f,map_GT_,meta12029){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12029 = meta12029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12028.cljs$lang$type = true;
cljs.core.async.t12028.cljs$lang$ctorStr = "cljs.core.async/t12028";
cljs.core.async.t12028.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12028");
});
cljs.core.async.t12028.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12028.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12028.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12028.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12028.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12028.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12030){var self__ = this;
var _12030__$1 = this;return self__.meta12029;
});
cljs.core.async.t12028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12030,meta12029__$1){var self__ = this;
var _12030__$1 = this;return (new cljs.core.async.t12028(self__.ch,self__.f,self__.map_GT_,meta12029__$1));
});
cljs.core.async.__GT_t12028 = (function __GT_t12028(ch__$1,f__$1,map_GT___$1,meta12029){return (new cljs.core.async.t12028(ch__$1,f__$1,map_GT___$1,meta12029));
});
}
return (new cljs.core.async.t12028(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12034 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12034 = (function (ch,p,filter_GT_,meta12035){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12035 = meta12035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12034.cljs$lang$type = true;
cljs.core.async.t12034.cljs$lang$ctorStr = "cljs.core.async/t12034";
cljs.core.async.t12034.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12034");
});
cljs.core.async.t12034.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12034.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12034.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12036){var self__ = this;
var _12036__$1 = this;return self__.meta12035;
});
cljs.core.async.t12034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12036,meta12035__$1){var self__ = this;
var _12036__$1 = this;return (new cljs.core.async.t12034(self__.ch,self__.p,self__.filter_GT_,meta12035__$1));
});
cljs.core.async.__GT_t12034 = (function __GT_t12034(ch__$1,p__$1,filter_GT___$1,meta12035){return (new cljs.core.async.t12034(ch__$1,p__$1,filter_GT___$1,meta12035));
});
}
return (new cljs.core.async.t12034(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___12119 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___12119,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___12119,out){
return (function (state_12098){var state_val_12099 = (state_12098[1]);if((state_val_12099 === 1))
{var state_12098__$1 = state_12098;var statearr_12100_12120 = state_12098__$1;(statearr_12100_12120[2] = null);
(statearr_12100_12120[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12099 === 2))
{var state_12098__$1 = state_12098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12098__$1,4,ch);
} else
{if((state_val_12099 === 3))
{var inst_12096 = (state_12098[2]);var state_12098__$1 = state_12098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12098__$1,inst_12096);
} else
{if((state_val_12099 === 4))
{var inst_12080 = (state_12098[7]);var inst_12080__$1 = (state_12098[2]);var inst_12081 = (inst_12080__$1 == null);var state_12098__$1 = (function (){var statearr_12101 = state_12098;(statearr_12101[7] = inst_12080__$1);
return statearr_12101;
})();if(cljs.core.truth_(inst_12081))
{var statearr_12102_12121 = state_12098__$1;(statearr_12102_12121[1] = 5);
} else
{var statearr_12103_12122 = state_12098__$1;(statearr_12103_12122[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12099 === 5))
{var inst_12083 = cljs.core.async.close_BANG_.call(null,out);var state_12098__$1 = state_12098;var statearr_12104_12123 = state_12098__$1;(statearr_12104_12123[2] = inst_12083);
(statearr_12104_12123[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12099 === 6))
{var inst_12080 = (state_12098[7]);var inst_12085 = p.call(null,inst_12080);var state_12098__$1 = state_12098;if(cljs.core.truth_(inst_12085))
{var statearr_12105_12124 = state_12098__$1;(statearr_12105_12124[1] = 8);
} else
{var statearr_12106_12125 = state_12098__$1;(statearr_12106_12125[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12099 === 7))
{var inst_12094 = (state_12098[2]);var state_12098__$1 = state_12098;var statearr_12107_12126 = state_12098__$1;(statearr_12107_12126[2] = inst_12094);
(statearr_12107_12126[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12099 === 8))
{var inst_12080 = (state_12098[7]);var state_12098__$1 = state_12098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12098__$1,11,out,inst_12080);
} else
{if((state_val_12099 === 9))
{var state_12098__$1 = state_12098;var statearr_12108_12127 = state_12098__$1;(statearr_12108_12127[2] = null);
(statearr_12108_12127[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12099 === 10))
{var inst_12091 = (state_12098[2]);var state_12098__$1 = (function (){var statearr_12109 = state_12098;(statearr_12109[8] = inst_12091);
return statearr_12109;
})();var statearr_12110_12128 = state_12098__$1;(statearr_12110_12128[2] = null);
(statearr_12110_12128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12099 === 11))
{var inst_12088 = (state_12098[2]);var state_12098__$1 = state_12098;var statearr_12111_12129 = state_12098__$1;(statearr_12111_12129[2] = inst_12088);
(statearr_12111_12129[1] = 10);
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
});})(c__6248__auto___12119,out))
;return ((function (switch__6233__auto__,c__6248__auto___12119,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12115 = [null,null,null,null,null,null,null,null,null];(statearr_12115[0] = state_machine__6234__auto__);
(statearr_12115[1] = 1);
return statearr_12115;
});
var state_machine__6234__auto____1 = (function (state_12098){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12098);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12116){if((e12116 instanceof Object))
{var ex__6237__auto__ = e12116;var statearr_12117_12130 = state_12098;(statearr_12117_12130[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12098);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12131 = state_12098;
state_12098 = G__12131;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12098){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___12119,out))
})();var state__6250__auto__ = (function (){var statearr_12118 = f__6249__auto__.call(null);(statearr_12118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___12119);
return statearr_12118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___12119,out))
);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6248__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto__){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto__){
return (function (state_12283){var state_val_12284 = (state_12283[1]);if((state_val_12284 === 1))
{var state_12283__$1 = state_12283;var statearr_12285_12322 = state_12283__$1;(statearr_12285_12322[2] = null);
(statearr_12285_12322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 2))
{var state_12283__$1 = state_12283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12283__$1,4,in$);
} else
{if((state_val_12284 === 3))
{var inst_12281 = (state_12283[2]);var state_12283__$1 = state_12283;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12283__$1,inst_12281);
} else
{if((state_val_12284 === 4))
{var inst_12229 = (state_12283[7]);var inst_12229__$1 = (state_12283[2]);var inst_12230 = (inst_12229__$1 == null);var state_12283__$1 = (function (){var statearr_12286 = state_12283;(statearr_12286[7] = inst_12229__$1);
return statearr_12286;
})();if(cljs.core.truth_(inst_12230))
{var statearr_12287_12323 = state_12283__$1;(statearr_12287_12323[1] = 5);
} else
{var statearr_12288_12324 = state_12283__$1;(statearr_12288_12324[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 5))
{var inst_12232 = cljs.core.async.close_BANG_.call(null,out);var state_12283__$1 = state_12283;var statearr_12289_12325 = state_12283__$1;(statearr_12289_12325[2] = inst_12232);
(statearr_12289_12325[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 6))
{var inst_12229 = (state_12283[7]);var inst_12234 = f.call(null,inst_12229);var inst_12239 = cljs.core.seq.call(null,inst_12234);var inst_12240 = inst_12239;var inst_12241 = null;var inst_12242 = 0;var inst_12243 = 0;var state_12283__$1 = (function (){var statearr_12290 = state_12283;(statearr_12290[8] = inst_12242);
(statearr_12290[9] = inst_12243);
(statearr_12290[10] = inst_12240);
(statearr_12290[11] = inst_12241);
return statearr_12290;
})();var statearr_12291_12326 = state_12283__$1;(statearr_12291_12326[2] = null);
(statearr_12291_12326[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 7))
{var inst_12279 = (state_12283[2]);var state_12283__$1 = state_12283;var statearr_12292_12327 = state_12283__$1;(statearr_12292_12327[2] = inst_12279);
(statearr_12292_12327[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 8))
{var inst_12242 = (state_12283[8]);var inst_12243 = (state_12283[9]);var inst_12245 = (inst_12243 < inst_12242);var inst_12246 = inst_12245;var state_12283__$1 = state_12283;if(cljs.core.truth_(inst_12246))
{var statearr_12293_12328 = state_12283__$1;(statearr_12293_12328[1] = 10);
} else
{var statearr_12294_12329 = state_12283__$1;(statearr_12294_12329[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 9))
{var inst_12276 = (state_12283[2]);var state_12283__$1 = (function (){var statearr_12295 = state_12283;(statearr_12295[12] = inst_12276);
return statearr_12295;
})();var statearr_12296_12330 = state_12283__$1;(statearr_12296_12330[2] = null);
(statearr_12296_12330[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 10))
{var inst_12243 = (state_12283[9]);var inst_12241 = (state_12283[11]);var inst_12248 = cljs.core._nth.call(null,inst_12241,inst_12243);var state_12283__$1 = state_12283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12283__$1,13,out,inst_12248);
} else
{if((state_val_12284 === 11))
{var inst_12240 = (state_12283[10]);var inst_12254 = (state_12283[13]);var inst_12254__$1 = cljs.core.seq.call(null,inst_12240);var state_12283__$1 = (function (){var statearr_12300 = state_12283;(statearr_12300[13] = inst_12254__$1);
return statearr_12300;
})();if(inst_12254__$1)
{var statearr_12301_12331 = state_12283__$1;(statearr_12301_12331[1] = 14);
} else
{var statearr_12302_12332 = state_12283__$1;(statearr_12302_12332[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 12))
{var inst_12274 = (state_12283[2]);var state_12283__$1 = state_12283;var statearr_12303_12333 = state_12283__$1;(statearr_12303_12333[2] = inst_12274);
(statearr_12303_12333[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 13))
{var inst_12242 = (state_12283[8]);var inst_12243 = (state_12283[9]);var inst_12240 = (state_12283[10]);var inst_12241 = (state_12283[11]);var inst_12250 = (state_12283[2]);var inst_12251 = (inst_12243 + 1);var tmp12297 = inst_12242;var tmp12298 = inst_12240;var tmp12299 = inst_12241;var inst_12240__$1 = tmp12298;var inst_12241__$1 = tmp12299;var inst_12242__$1 = tmp12297;var inst_12243__$1 = inst_12251;var state_12283__$1 = (function (){var statearr_12304 = state_12283;(statearr_12304[8] = inst_12242__$1);
(statearr_12304[9] = inst_12243__$1);
(statearr_12304[10] = inst_12240__$1);
(statearr_12304[11] = inst_12241__$1);
(statearr_12304[14] = inst_12250);
return statearr_12304;
})();var statearr_12305_12334 = state_12283__$1;(statearr_12305_12334[2] = null);
(statearr_12305_12334[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 14))
{var inst_12254 = (state_12283[13]);var inst_12256 = cljs.core.chunked_seq_QMARK_.call(null,inst_12254);var state_12283__$1 = state_12283;if(inst_12256)
{var statearr_12306_12335 = state_12283__$1;(statearr_12306_12335[1] = 17);
} else
{var statearr_12307_12336 = state_12283__$1;(statearr_12307_12336[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 15))
{var state_12283__$1 = state_12283;var statearr_12308_12337 = state_12283__$1;(statearr_12308_12337[2] = null);
(statearr_12308_12337[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 16))
{var inst_12272 = (state_12283[2]);var state_12283__$1 = state_12283;var statearr_12309_12338 = state_12283__$1;(statearr_12309_12338[2] = inst_12272);
(statearr_12309_12338[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 17))
{var inst_12254 = (state_12283[13]);var inst_12258 = cljs.core.chunk_first.call(null,inst_12254);var inst_12259 = cljs.core.chunk_rest.call(null,inst_12254);var inst_12260 = cljs.core.count.call(null,inst_12258);var inst_12240 = inst_12259;var inst_12241 = inst_12258;var inst_12242 = inst_12260;var inst_12243 = 0;var state_12283__$1 = (function (){var statearr_12310 = state_12283;(statearr_12310[8] = inst_12242);
(statearr_12310[9] = inst_12243);
(statearr_12310[10] = inst_12240);
(statearr_12310[11] = inst_12241);
return statearr_12310;
})();var statearr_12311_12339 = state_12283__$1;(statearr_12311_12339[2] = null);
(statearr_12311_12339[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 18))
{var inst_12254 = (state_12283[13]);var inst_12263 = cljs.core.first.call(null,inst_12254);var state_12283__$1 = state_12283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12283__$1,20,out,inst_12263);
} else
{if((state_val_12284 === 19))
{var inst_12269 = (state_12283[2]);var state_12283__$1 = state_12283;var statearr_12312_12340 = state_12283__$1;(statearr_12312_12340[2] = inst_12269);
(statearr_12312_12340[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12284 === 20))
{var inst_12254 = (state_12283[13]);var inst_12265 = (state_12283[2]);var inst_12266 = cljs.core.next.call(null,inst_12254);var inst_12240 = inst_12266;var inst_12241 = null;var inst_12242 = 0;var inst_12243 = 0;var state_12283__$1 = (function (){var statearr_12313 = state_12283;(statearr_12313[15] = inst_12265);
(statearr_12313[8] = inst_12242);
(statearr_12313[9] = inst_12243);
(statearr_12313[10] = inst_12240);
(statearr_12313[11] = inst_12241);
return statearr_12313;
})();var statearr_12314_12341 = state_12283__$1;(statearr_12314_12341[2] = null);
(statearr_12314_12341[1] = 8);
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
});})(c__6248__auto__))
;return ((function (switch__6233__auto__,c__6248__auto__){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12318[0] = state_machine__6234__auto__);
(statearr_12318[1] = 1);
return statearr_12318;
});
var state_machine__6234__auto____1 = (function (state_12283){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12283);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12319){if((e12319 instanceof Object))
{var ex__6237__auto__ = e12319;var statearr_12320_12342 = state_12283;(statearr_12320_12342[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12283);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12343 = state_12283;
state_12283 = G__12343;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12283){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__))
})();var state__6250__auto__ = (function (){var statearr_12321 = f__6249__auto__.call(null);(statearr_12321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_12321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto__))
);
return c__6248__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6248__auto___12424 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___12424){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___12424){
return (function (state_12403){var state_val_12404 = (state_12403[1]);if((state_val_12404 === 1))
{var state_12403__$1 = state_12403;var statearr_12405_12425 = state_12403__$1;(statearr_12405_12425[2] = null);
(statearr_12405_12425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12404 === 2))
{var state_12403__$1 = state_12403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12403__$1,4,from);
} else
{if((state_val_12404 === 3))
{var inst_12401 = (state_12403[2]);var state_12403__$1 = state_12403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12403__$1,inst_12401);
} else
{if((state_val_12404 === 4))
{var inst_12386 = (state_12403[7]);var inst_12386__$1 = (state_12403[2]);var inst_12387 = (inst_12386__$1 == null);var state_12403__$1 = (function (){var statearr_12406 = state_12403;(statearr_12406[7] = inst_12386__$1);
return statearr_12406;
})();if(cljs.core.truth_(inst_12387))
{var statearr_12407_12426 = state_12403__$1;(statearr_12407_12426[1] = 5);
} else
{var statearr_12408_12427 = state_12403__$1;(statearr_12408_12427[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12404 === 5))
{var state_12403__$1 = state_12403;if(cljs.core.truth_(close_QMARK_))
{var statearr_12409_12428 = state_12403__$1;(statearr_12409_12428[1] = 8);
} else
{var statearr_12410_12429 = state_12403__$1;(statearr_12410_12429[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12404 === 6))
{var inst_12386 = (state_12403[7]);var state_12403__$1 = state_12403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12403__$1,11,to,inst_12386);
} else
{if((state_val_12404 === 7))
{var inst_12399 = (state_12403[2]);var state_12403__$1 = state_12403;var statearr_12411_12430 = state_12403__$1;(statearr_12411_12430[2] = inst_12399);
(statearr_12411_12430[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12404 === 8))
{var inst_12390 = cljs.core.async.close_BANG_.call(null,to);var state_12403__$1 = state_12403;var statearr_12412_12431 = state_12403__$1;(statearr_12412_12431[2] = inst_12390);
(statearr_12412_12431[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12404 === 9))
{var state_12403__$1 = state_12403;var statearr_12413_12432 = state_12403__$1;(statearr_12413_12432[2] = null);
(statearr_12413_12432[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12404 === 10))
{var inst_12393 = (state_12403[2]);var state_12403__$1 = state_12403;var statearr_12414_12433 = state_12403__$1;(statearr_12414_12433[2] = inst_12393);
(statearr_12414_12433[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12404 === 11))
{var inst_12396 = (state_12403[2]);var state_12403__$1 = (function (){var statearr_12415 = state_12403;(statearr_12415[8] = inst_12396);
return statearr_12415;
})();var statearr_12416_12434 = state_12403__$1;(statearr_12416_12434[2] = null);
(statearr_12416_12434[1] = 2);
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
});})(c__6248__auto___12424))
;return ((function (switch__6233__auto__,c__6248__auto___12424){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12420 = [null,null,null,null,null,null,null,null,null];(statearr_12420[0] = state_machine__6234__auto__);
(statearr_12420[1] = 1);
return statearr_12420;
});
var state_machine__6234__auto____1 = (function (state_12403){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12403);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12421){if((e12421 instanceof Object))
{var ex__6237__auto__ = e12421;var statearr_12422_12435 = state_12403;(statearr_12422_12435[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12403);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12421;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12436 = state_12403;
state_12403 = G__12436;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12403){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___12424))
})();var state__6250__auto__ = (function (){var statearr_12423 = f__6249__auto__.call(null);(statearr_12423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___12424);
return statearr_12423;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___12424))
);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6248__auto___12523 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___12523,tc,fc){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___12523,tc,fc){
return (function (state_12501){var state_val_12502 = (state_12501[1]);if((state_val_12502 === 1))
{var state_12501__$1 = state_12501;var statearr_12503_12524 = state_12501__$1;(statearr_12503_12524[2] = null);
(statearr_12503_12524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12502 === 2))
{var state_12501__$1 = state_12501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12501__$1,4,ch);
} else
{if((state_val_12502 === 3))
{var inst_12499 = (state_12501[2]);var state_12501__$1 = state_12501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12501__$1,inst_12499);
} else
{if((state_val_12502 === 4))
{var inst_12482 = (state_12501[7]);var inst_12482__$1 = (state_12501[2]);var inst_12483 = (inst_12482__$1 == null);var state_12501__$1 = (function (){var statearr_12504 = state_12501;(statearr_12504[7] = inst_12482__$1);
return statearr_12504;
})();if(cljs.core.truth_(inst_12483))
{var statearr_12505_12525 = state_12501__$1;(statearr_12505_12525[1] = 5);
} else
{var statearr_12506_12526 = state_12501__$1;(statearr_12506_12526[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12502 === 5))
{var inst_12485 = cljs.core.async.close_BANG_.call(null,tc);var inst_12486 = cljs.core.async.close_BANG_.call(null,fc);var state_12501__$1 = (function (){var statearr_12507 = state_12501;(statearr_12507[8] = inst_12485);
return statearr_12507;
})();var statearr_12508_12527 = state_12501__$1;(statearr_12508_12527[2] = inst_12486);
(statearr_12508_12527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12502 === 6))
{var inst_12482 = (state_12501[7]);var inst_12488 = p.call(null,inst_12482);var state_12501__$1 = state_12501;if(cljs.core.truth_(inst_12488))
{var statearr_12509_12528 = state_12501__$1;(statearr_12509_12528[1] = 9);
} else
{var statearr_12510_12529 = state_12501__$1;(statearr_12510_12529[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12502 === 7))
{var inst_12497 = (state_12501[2]);var state_12501__$1 = state_12501;var statearr_12511_12530 = state_12501__$1;(statearr_12511_12530[2] = inst_12497);
(statearr_12511_12530[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12502 === 8))
{var inst_12494 = (state_12501[2]);var state_12501__$1 = (function (){var statearr_12512 = state_12501;(statearr_12512[9] = inst_12494);
return statearr_12512;
})();var statearr_12513_12531 = state_12501__$1;(statearr_12513_12531[2] = null);
(statearr_12513_12531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12502 === 9))
{var state_12501__$1 = state_12501;var statearr_12514_12532 = state_12501__$1;(statearr_12514_12532[2] = tc);
(statearr_12514_12532[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12502 === 10))
{var state_12501__$1 = state_12501;var statearr_12515_12533 = state_12501__$1;(statearr_12515_12533[2] = fc);
(statearr_12515_12533[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12502 === 11))
{var inst_12482 = (state_12501[7]);var inst_12492 = (state_12501[2]);var state_12501__$1 = state_12501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12501__$1,8,inst_12492,inst_12482);
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
});})(c__6248__auto___12523,tc,fc))
;return ((function (switch__6233__auto__,c__6248__auto___12523,tc,fc){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12519 = [null,null,null,null,null,null,null,null,null,null];(statearr_12519[0] = state_machine__6234__auto__);
(statearr_12519[1] = 1);
return statearr_12519;
});
var state_machine__6234__auto____1 = (function (state_12501){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12501);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12520){if((e12520 instanceof Object))
{var ex__6237__auto__ = e12520;var statearr_12521_12534 = state_12501;(statearr_12521_12534[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12501);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12535 = state_12501;
state_12501 = G__12535;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12501){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___12523,tc,fc))
})();var state__6250__auto__ = (function (){var statearr_12522 = f__6249__auto__.call(null);(statearr_12522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___12523);
return statearr_12522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___12523,tc,fc))
);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6248__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto__){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto__){
return (function (state_12582){var state_val_12583 = (state_12582[1]);if((state_val_12583 === 7))
{var inst_12578 = (state_12582[2]);var state_12582__$1 = state_12582;var statearr_12584_12600 = state_12582__$1;(statearr_12584_12600[2] = inst_12578);
(statearr_12584_12600[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12583 === 6))
{var inst_12568 = (state_12582[7]);var inst_12571 = (state_12582[8]);var inst_12575 = f.call(null,inst_12568,inst_12571);var inst_12568__$1 = inst_12575;var state_12582__$1 = (function (){var statearr_12585 = state_12582;(statearr_12585[7] = inst_12568__$1);
return statearr_12585;
})();var statearr_12586_12601 = state_12582__$1;(statearr_12586_12601[2] = null);
(statearr_12586_12601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12583 === 5))
{var inst_12568 = (state_12582[7]);var state_12582__$1 = state_12582;var statearr_12587_12602 = state_12582__$1;(statearr_12587_12602[2] = inst_12568);
(statearr_12587_12602[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12583 === 4))
{var inst_12571 = (state_12582[8]);var inst_12571__$1 = (state_12582[2]);var inst_12572 = (inst_12571__$1 == null);var state_12582__$1 = (function (){var statearr_12588 = state_12582;(statearr_12588[8] = inst_12571__$1);
return statearr_12588;
})();if(cljs.core.truth_(inst_12572))
{var statearr_12589_12603 = state_12582__$1;(statearr_12589_12603[1] = 5);
} else
{var statearr_12590_12604 = state_12582__$1;(statearr_12590_12604[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12583 === 3))
{var inst_12580 = (state_12582[2]);var state_12582__$1 = state_12582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12582__$1,inst_12580);
} else
{if((state_val_12583 === 2))
{var state_12582__$1 = state_12582;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12582__$1,4,ch);
} else
{if((state_val_12583 === 1))
{var inst_12568 = init;var state_12582__$1 = (function (){var statearr_12591 = state_12582;(statearr_12591[7] = inst_12568);
return statearr_12591;
})();var statearr_12592_12605 = state_12582__$1;(statearr_12592_12605[2] = null);
(statearr_12592_12605[1] = 2);
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
});})(c__6248__auto__))
;return ((function (switch__6233__auto__,c__6248__auto__){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12596 = [null,null,null,null,null,null,null,null,null];(statearr_12596[0] = state_machine__6234__auto__);
(statearr_12596[1] = 1);
return statearr_12596;
});
var state_machine__6234__auto____1 = (function (state_12582){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12582);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12597){if((e12597 instanceof Object))
{var ex__6237__auto__ = e12597;var statearr_12598_12606 = state_12582;(statearr_12598_12606[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12582);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12607 = state_12582;
state_12582 = G__12607;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12582){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__))
})();var state__6250__auto__ = (function (){var statearr_12599 = f__6249__auto__.call(null);(statearr_12599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_12599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto__))
);
return c__6248__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6248__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto__){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto__){
return (function (state_12669){var state_val_12670 = (state_12669[1]);if((state_val_12670 === 1))
{var inst_12649 = cljs.core.seq.call(null,coll);var inst_12650 = inst_12649;var state_12669__$1 = (function (){var statearr_12671 = state_12669;(statearr_12671[7] = inst_12650);
return statearr_12671;
})();var statearr_12672_12690 = state_12669__$1;(statearr_12672_12690[2] = null);
(statearr_12672_12690[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12670 === 2))
{var inst_12650 = (state_12669[7]);var state_12669__$1 = state_12669;if(cljs.core.truth_(inst_12650))
{var statearr_12673_12691 = state_12669__$1;(statearr_12673_12691[1] = 4);
} else
{var statearr_12674_12692 = state_12669__$1;(statearr_12674_12692[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12670 === 3))
{var inst_12667 = (state_12669[2]);var state_12669__$1 = state_12669;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12669__$1,inst_12667);
} else
{if((state_val_12670 === 4))
{var inst_12650 = (state_12669[7]);var inst_12653 = cljs.core.first.call(null,inst_12650);var state_12669__$1 = state_12669;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12669__$1,7,ch,inst_12653);
} else
{if((state_val_12670 === 5))
{var state_12669__$1 = state_12669;if(cljs.core.truth_(close_QMARK_))
{var statearr_12675_12693 = state_12669__$1;(statearr_12675_12693[1] = 8);
} else
{var statearr_12676_12694 = state_12669__$1;(statearr_12676_12694[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12670 === 6))
{var inst_12665 = (state_12669[2]);var state_12669__$1 = state_12669;var statearr_12677_12695 = state_12669__$1;(statearr_12677_12695[2] = inst_12665);
(statearr_12677_12695[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12670 === 7))
{var inst_12650 = (state_12669[7]);var inst_12655 = (state_12669[2]);var inst_12656 = cljs.core.next.call(null,inst_12650);var inst_12650__$1 = inst_12656;var state_12669__$1 = (function (){var statearr_12678 = state_12669;(statearr_12678[8] = inst_12655);
(statearr_12678[7] = inst_12650__$1);
return statearr_12678;
})();var statearr_12679_12696 = state_12669__$1;(statearr_12679_12696[2] = null);
(statearr_12679_12696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12670 === 8))
{var inst_12660 = cljs.core.async.close_BANG_.call(null,ch);var state_12669__$1 = state_12669;var statearr_12680_12697 = state_12669__$1;(statearr_12680_12697[2] = inst_12660);
(statearr_12680_12697[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12670 === 9))
{var state_12669__$1 = state_12669;var statearr_12681_12698 = state_12669__$1;(statearr_12681_12698[2] = null);
(statearr_12681_12698[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12670 === 10))
{var inst_12663 = (state_12669[2]);var state_12669__$1 = state_12669;var statearr_12682_12699 = state_12669__$1;(statearr_12682_12699[2] = inst_12663);
(statearr_12682_12699[1] = 6);
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
});})(c__6248__auto__))
;return ((function (switch__6233__auto__,c__6248__auto__){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12686 = [null,null,null,null,null,null,null,null,null];(statearr_12686[0] = state_machine__6234__auto__);
(statearr_12686[1] = 1);
return statearr_12686;
});
var state_machine__6234__auto____1 = (function (state_12669){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12669);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12687){if((e12687 instanceof Object))
{var ex__6237__auto__ = e12687;var statearr_12688_12700 = state_12669;(statearr_12688_12700[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12669);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12701 = state_12669;
state_12669 = G__12701;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12669){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__))
})();var state__6250__auto__ = (function (){var statearr_12689 = f__6249__auto__.call(null);(statearr_12689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_12689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto__))
);
return c__6248__auto__;
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
cljs.core.async.Mux = (function (){var obj12703 = {};return obj12703;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3466__auto__ = _;if(and__3466__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4105__auto__ = (((_ == null))?null:_);return (function (){var or__3478__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12705 = {};return obj12705;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12929 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12929 = (function (cs,ch,mult,meta12930){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12930 = meta12930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12929.cljs$lang$type = true;
cljs.core.async.t12929.cljs$lang$ctorStr = "cljs.core.async/t12929";
cljs.core.async.t12929.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12929");
});})(cs))
;
cljs.core.async.t12929.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12929.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12929.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12929.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12929.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12929.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12931){var self__ = this;
var _12931__$1 = this;return self__.meta12930;
});})(cs))
;
cljs.core.async.t12929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12931,meta12930__$1){var self__ = this;
var _12931__$1 = this;return (new cljs.core.async.t12929(self__.cs,self__.ch,self__.mult,meta12930__$1));
});})(cs))
;
cljs.core.async.__GT_t12929 = ((function (cs){
return (function __GT_t12929(cs__$1,ch__$1,mult__$1,meta12930){return (new cljs.core.async.t12929(cs__$1,ch__$1,mult__$1,meta12930));
});})(cs))
;
}
return (new cljs.core.async.t12929(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6248__auto___13152 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13152,cs,m,dchan,dctr,done){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13152,cs,m,dchan,dctr,done){
return (function (state_13066){var state_val_13067 = (state_13066[1]);if((state_val_13067 === 32))
{var inst_12934 = (state_13066[7]);var inst_13010 = (state_13066[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13066,31,Object,null,30);var inst_13017 = cljs.core.async.put_BANG_.call(null,inst_13010,inst_12934,done);var state_13066__$1 = state_13066;var statearr_13068_13153 = state_13066__$1;(statearr_13068_13153[2] = inst_13017);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13066__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 1))
{var state_13066__$1 = state_13066;var statearr_13069_13154 = state_13066__$1;(statearr_13069_13154[2] = null);
(statearr_13069_13154[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 33))
{var inst_13023 = (state_13066[9]);var inst_13025 = cljs.core.chunked_seq_QMARK_.call(null,inst_13023);var state_13066__$1 = state_13066;if(inst_13025)
{var statearr_13070_13155 = state_13066__$1;(statearr_13070_13155[1] = 36);
} else
{var statearr_13071_13156 = state_13066__$1;(statearr_13071_13156[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 2))
{var state_13066__$1 = state_13066;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13066__$1,4,ch);
} else
{if((state_val_13067 === 34))
{var state_13066__$1 = state_13066;var statearr_13072_13157 = state_13066__$1;(statearr_13072_13157[2] = null);
(statearr_13072_13157[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 3))
{var inst_13064 = (state_13066[2]);var state_13066__$1 = state_13066;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13066__$1,inst_13064);
} else
{if((state_val_13067 === 35))
{var inst_13048 = (state_13066[2]);var state_13066__$1 = state_13066;var statearr_13073_13158 = state_13066__$1;(statearr_13073_13158[2] = inst_13048);
(statearr_13073_13158[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 4))
{var inst_12934 = (state_13066[7]);var inst_12934__$1 = (state_13066[2]);var inst_12935 = (inst_12934__$1 == null);var state_13066__$1 = (function (){var statearr_13074 = state_13066;(statearr_13074[7] = inst_12934__$1);
return statearr_13074;
})();if(cljs.core.truth_(inst_12935))
{var statearr_13075_13159 = state_13066__$1;(statearr_13075_13159[1] = 5);
} else
{var statearr_13076_13160 = state_13066__$1;(statearr_13076_13160[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 36))
{var inst_13023 = (state_13066[9]);var inst_13027 = cljs.core.chunk_first.call(null,inst_13023);var inst_13028 = cljs.core.chunk_rest.call(null,inst_13023);var inst_13029 = cljs.core.count.call(null,inst_13027);var inst_13002 = inst_13028;var inst_13003 = inst_13027;var inst_13004 = inst_13029;var inst_13005 = 0;var state_13066__$1 = (function (){var statearr_13077 = state_13066;(statearr_13077[10] = inst_13005);
(statearr_13077[11] = inst_13004);
(statearr_13077[12] = inst_13003);
(statearr_13077[13] = inst_13002);
return statearr_13077;
})();var statearr_13078_13161 = state_13066__$1;(statearr_13078_13161[2] = null);
(statearr_13078_13161[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 5))
{var inst_12941 = cljs.core.deref.call(null,cs);var inst_12942 = cljs.core.seq.call(null,inst_12941);var inst_12943 = inst_12942;var inst_12944 = null;var inst_12945 = 0;var inst_12946 = 0;var state_13066__$1 = (function (){var statearr_13079 = state_13066;(statearr_13079[14] = inst_12943);
(statearr_13079[15] = inst_12944);
(statearr_13079[16] = inst_12946);
(statearr_13079[17] = inst_12945);
return statearr_13079;
})();var statearr_13080_13162 = state_13066__$1;(statearr_13080_13162[2] = null);
(statearr_13080_13162[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 37))
{var inst_13023 = (state_13066[9]);var inst_13032 = cljs.core.first.call(null,inst_13023);var state_13066__$1 = (function (){var statearr_13081 = state_13066;(statearr_13081[18] = inst_13032);
return statearr_13081;
})();var statearr_13082_13163 = state_13066__$1;(statearr_13082_13163[2] = null);
(statearr_13082_13163[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 6))
{var inst_12994 = (state_13066[19]);var inst_12993 = cljs.core.deref.call(null,cs);var inst_12994__$1 = cljs.core.keys.call(null,inst_12993);var inst_12995 = cljs.core.count.call(null,inst_12994__$1);var inst_12996 = cljs.core.reset_BANG_.call(null,dctr,inst_12995);var inst_13001 = cljs.core.seq.call(null,inst_12994__$1);var inst_13002 = inst_13001;var inst_13003 = null;var inst_13004 = 0;var inst_13005 = 0;var state_13066__$1 = (function (){var statearr_13083 = state_13066;(statearr_13083[10] = inst_13005);
(statearr_13083[19] = inst_12994__$1);
(statearr_13083[11] = inst_13004);
(statearr_13083[12] = inst_13003);
(statearr_13083[13] = inst_13002);
(statearr_13083[20] = inst_12996);
return statearr_13083;
})();var statearr_13084_13164 = state_13066__$1;(statearr_13084_13164[2] = null);
(statearr_13084_13164[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 38))
{var inst_13045 = (state_13066[2]);var state_13066__$1 = state_13066;var statearr_13085_13165 = state_13066__$1;(statearr_13085_13165[2] = inst_13045);
(statearr_13085_13165[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 7))
{var inst_13062 = (state_13066[2]);var state_13066__$1 = state_13066;var statearr_13086_13166 = state_13066__$1;(statearr_13086_13166[2] = inst_13062);
(statearr_13086_13166[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 39))
{var inst_13023 = (state_13066[9]);var inst_13041 = (state_13066[2]);var inst_13042 = cljs.core.next.call(null,inst_13023);var inst_13002 = inst_13042;var inst_13003 = null;var inst_13004 = 0;var inst_13005 = 0;var state_13066__$1 = (function (){var statearr_13087 = state_13066;(statearr_13087[10] = inst_13005);
(statearr_13087[11] = inst_13004);
(statearr_13087[12] = inst_13003);
(statearr_13087[13] = inst_13002);
(statearr_13087[21] = inst_13041);
return statearr_13087;
})();var statearr_13088_13167 = state_13066__$1;(statearr_13088_13167[2] = null);
(statearr_13088_13167[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 8))
{var inst_12946 = (state_13066[16]);var inst_12945 = (state_13066[17]);var inst_12948 = (inst_12946 < inst_12945);var inst_12949 = inst_12948;var state_13066__$1 = state_13066;if(cljs.core.truth_(inst_12949))
{var statearr_13089_13168 = state_13066__$1;(statearr_13089_13168[1] = 10);
} else
{var statearr_13090_13169 = state_13066__$1;(statearr_13090_13169[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 40))
{var inst_13032 = (state_13066[18]);var inst_13033 = (state_13066[2]);var inst_13034 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13035 = cljs.core.async.untap_STAR_.call(null,m,inst_13032);var state_13066__$1 = (function (){var statearr_13091 = state_13066;(statearr_13091[22] = inst_13034);
(statearr_13091[23] = inst_13033);
return statearr_13091;
})();var statearr_13092_13170 = state_13066__$1;(statearr_13092_13170[2] = inst_13035);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13066__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 9))
{var inst_12991 = (state_13066[2]);var state_13066__$1 = state_13066;var statearr_13093_13171 = state_13066__$1;(statearr_13093_13171[2] = inst_12991);
(statearr_13093_13171[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 41))
{var inst_13032 = (state_13066[18]);var inst_12934 = (state_13066[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13066,40,Object,null,39);var inst_13039 = cljs.core.async.put_BANG_.call(null,inst_13032,inst_12934,done);var state_13066__$1 = state_13066;var statearr_13094_13172 = state_13066__$1;(statearr_13094_13172[2] = inst_13039);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13066__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 10))
{var inst_12944 = (state_13066[15]);var inst_12946 = (state_13066[16]);var inst_12952 = cljs.core._nth.call(null,inst_12944,inst_12946);var inst_12953 = cljs.core.nth.call(null,inst_12952,0,null);var inst_12954 = cljs.core.nth.call(null,inst_12952,1,null);var state_13066__$1 = (function (){var statearr_13095 = state_13066;(statearr_13095[24] = inst_12953);
return statearr_13095;
})();if(cljs.core.truth_(inst_12954))
{var statearr_13096_13173 = state_13066__$1;(statearr_13096_13173[1] = 13);
} else
{var statearr_13097_13174 = state_13066__$1;(statearr_13097_13174[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 42))
{var state_13066__$1 = state_13066;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13066__$1,45,dchan);
} else
{if((state_val_13067 === 11))
{var inst_12943 = (state_13066[14]);var inst_12963 = (state_13066[25]);var inst_12963__$1 = cljs.core.seq.call(null,inst_12943);var state_13066__$1 = (function (){var statearr_13098 = state_13066;(statearr_13098[25] = inst_12963__$1);
return statearr_13098;
})();if(inst_12963__$1)
{var statearr_13099_13175 = state_13066__$1;(statearr_13099_13175[1] = 16);
} else
{var statearr_13100_13176 = state_13066__$1;(statearr_13100_13176[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 43))
{var state_13066__$1 = state_13066;var statearr_13101_13177 = state_13066__$1;(statearr_13101_13177[2] = null);
(statearr_13101_13177[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 12))
{var inst_12989 = (state_13066[2]);var state_13066__$1 = state_13066;var statearr_13102_13178 = state_13066__$1;(statearr_13102_13178[2] = inst_12989);
(statearr_13102_13178[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 44))
{var inst_13059 = (state_13066[2]);var state_13066__$1 = (function (){var statearr_13103 = state_13066;(statearr_13103[26] = inst_13059);
return statearr_13103;
})();var statearr_13104_13179 = state_13066__$1;(statearr_13104_13179[2] = null);
(statearr_13104_13179[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 13))
{var inst_12953 = (state_13066[24]);var inst_12956 = cljs.core.async.close_BANG_.call(null,inst_12953);var state_13066__$1 = state_13066;var statearr_13105_13180 = state_13066__$1;(statearr_13105_13180[2] = inst_12956);
(statearr_13105_13180[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 45))
{var inst_13056 = (state_13066[2]);var state_13066__$1 = state_13066;var statearr_13109_13181 = state_13066__$1;(statearr_13109_13181[2] = inst_13056);
(statearr_13109_13181[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 14))
{var state_13066__$1 = state_13066;var statearr_13110_13182 = state_13066__$1;(statearr_13110_13182[2] = null);
(statearr_13110_13182[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 15))
{var inst_12943 = (state_13066[14]);var inst_12944 = (state_13066[15]);var inst_12946 = (state_13066[16]);var inst_12945 = (state_13066[17]);var inst_12959 = (state_13066[2]);var inst_12960 = (inst_12946 + 1);var tmp13106 = inst_12943;var tmp13107 = inst_12944;var tmp13108 = inst_12945;var inst_12943__$1 = tmp13106;var inst_12944__$1 = tmp13107;var inst_12945__$1 = tmp13108;var inst_12946__$1 = inst_12960;var state_13066__$1 = (function (){var statearr_13111 = state_13066;(statearr_13111[27] = inst_12959);
(statearr_13111[14] = inst_12943__$1);
(statearr_13111[15] = inst_12944__$1);
(statearr_13111[16] = inst_12946__$1);
(statearr_13111[17] = inst_12945__$1);
return statearr_13111;
})();var statearr_13112_13183 = state_13066__$1;(statearr_13112_13183[2] = null);
(statearr_13112_13183[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 16))
{var inst_12963 = (state_13066[25]);var inst_12965 = cljs.core.chunked_seq_QMARK_.call(null,inst_12963);var state_13066__$1 = state_13066;if(inst_12965)
{var statearr_13113_13184 = state_13066__$1;(statearr_13113_13184[1] = 19);
} else
{var statearr_13114_13185 = state_13066__$1;(statearr_13114_13185[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 17))
{var state_13066__$1 = state_13066;var statearr_13115_13186 = state_13066__$1;(statearr_13115_13186[2] = null);
(statearr_13115_13186[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 18))
{var inst_12987 = (state_13066[2]);var state_13066__$1 = state_13066;var statearr_13116_13187 = state_13066__$1;(statearr_13116_13187[2] = inst_12987);
(statearr_13116_13187[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 19))
{var inst_12963 = (state_13066[25]);var inst_12967 = cljs.core.chunk_first.call(null,inst_12963);var inst_12968 = cljs.core.chunk_rest.call(null,inst_12963);var inst_12969 = cljs.core.count.call(null,inst_12967);var inst_12943 = inst_12968;var inst_12944 = inst_12967;var inst_12945 = inst_12969;var inst_12946 = 0;var state_13066__$1 = (function (){var statearr_13117 = state_13066;(statearr_13117[14] = inst_12943);
(statearr_13117[15] = inst_12944);
(statearr_13117[16] = inst_12946);
(statearr_13117[17] = inst_12945);
return statearr_13117;
})();var statearr_13118_13188 = state_13066__$1;(statearr_13118_13188[2] = null);
(statearr_13118_13188[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 20))
{var inst_12963 = (state_13066[25]);var inst_12973 = cljs.core.first.call(null,inst_12963);var inst_12974 = cljs.core.nth.call(null,inst_12973,0,null);var inst_12975 = cljs.core.nth.call(null,inst_12973,1,null);var state_13066__$1 = (function (){var statearr_13119 = state_13066;(statearr_13119[28] = inst_12974);
return statearr_13119;
})();if(cljs.core.truth_(inst_12975))
{var statearr_13120_13189 = state_13066__$1;(statearr_13120_13189[1] = 22);
} else
{var statearr_13121_13190 = state_13066__$1;(statearr_13121_13190[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 21))
{var inst_12984 = (state_13066[2]);var state_13066__$1 = state_13066;var statearr_13122_13191 = state_13066__$1;(statearr_13122_13191[2] = inst_12984);
(statearr_13122_13191[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 22))
{var inst_12974 = (state_13066[28]);var inst_12977 = cljs.core.async.close_BANG_.call(null,inst_12974);var state_13066__$1 = state_13066;var statearr_13123_13192 = state_13066__$1;(statearr_13123_13192[2] = inst_12977);
(statearr_13123_13192[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 23))
{var state_13066__$1 = state_13066;var statearr_13124_13193 = state_13066__$1;(statearr_13124_13193[2] = null);
(statearr_13124_13193[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 24))
{var inst_12963 = (state_13066[25]);var inst_12980 = (state_13066[2]);var inst_12981 = cljs.core.next.call(null,inst_12963);var inst_12943 = inst_12981;var inst_12944 = null;var inst_12945 = 0;var inst_12946 = 0;var state_13066__$1 = (function (){var statearr_13125 = state_13066;(statearr_13125[29] = inst_12980);
(statearr_13125[14] = inst_12943);
(statearr_13125[15] = inst_12944);
(statearr_13125[16] = inst_12946);
(statearr_13125[17] = inst_12945);
return statearr_13125;
})();var statearr_13126_13194 = state_13066__$1;(statearr_13126_13194[2] = null);
(statearr_13126_13194[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 25))
{var inst_13005 = (state_13066[10]);var inst_13004 = (state_13066[11]);var inst_13007 = (inst_13005 < inst_13004);var inst_13008 = inst_13007;var state_13066__$1 = state_13066;if(cljs.core.truth_(inst_13008))
{var statearr_13127_13195 = state_13066__$1;(statearr_13127_13195[1] = 27);
} else
{var statearr_13128_13196 = state_13066__$1;(statearr_13128_13196[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 26))
{var inst_12994 = (state_13066[19]);var inst_13052 = (state_13066[2]);var inst_13053 = cljs.core.seq.call(null,inst_12994);var state_13066__$1 = (function (){var statearr_13129 = state_13066;(statearr_13129[30] = inst_13052);
return statearr_13129;
})();if(inst_13053)
{var statearr_13130_13197 = state_13066__$1;(statearr_13130_13197[1] = 42);
} else
{var statearr_13131_13198 = state_13066__$1;(statearr_13131_13198[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 27))
{var inst_13005 = (state_13066[10]);var inst_13003 = (state_13066[12]);var inst_13010 = cljs.core._nth.call(null,inst_13003,inst_13005);var state_13066__$1 = (function (){var statearr_13132 = state_13066;(statearr_13132[8] = inst_13010);
return statearr_13132;
})();var statearr_13133_13199 = state_13066__$1;(statearr_13133_13199[2] = null);
(statearr_13133_13199[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 28))
{var inst_13002 = (state_13066[13]);var inst_13023 = (state_13066[9]);var inst_13023__$1 = cljs.core.seq.call(null,inst_13002);var state_13066__$1 = (function (){var statearr_13137 = state_13066;(statearr_13137[9] = inst_13023__$1);
return statearr_13137;
})();if(inst_13023__$1)
{var statearr_13138_13200 = state_13066__$1;(statearr_13138_13200[1] = 33);
} else
{var statearr_13139_13201 = state_13066__$1;(statearr_13139_13201[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 29))
{var inst_13050 = (state_13066[2]);var state_13066__$1 = state_13066;var statearr_13140_13202 = state_13066__$1;(statearr_13140_13202[2] = inst_13050);
(statearr_13140_13202[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 30))
{var inst_13005 = (state_13066[10]);var inst_13004 = (state_13066[11]);var inst_13003 = (state_13066[12]);var inst_13002 = (state_13066[13]);var inst_13019 = (state_13066[2]);var inst_13020 = (inst_13005 + 1);var tmp13134 = inst_13004;var tmp13135 = inst_13003;var tmp13136 = inst_13002;var inst_13002__$1 = tmp13136;var inst_13003__$1 = tmp13135;var inst_13004__$1 = tmp13134;var inst_13005__$1 = inst_13020;var state_13066__$1 = (function (){var statearr_13141 = state_13066;(statearr_13141[10] = inst_13005__$1);
(statearr_13141[11] = inst_13004__$1);
(statearr_13141[12] = inst_13003__$1);
(statearr_13141[13] = inst_13002__$1);
(statearr_13141[31] = inst_13019);
return statearr_13141;
})();var statearr_13142_13203 = state_13066__$1;(statearr_13142_13203[2] = null);
(statearr_13142_13203[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 31))
{var inst_13010 = (state_13066[8]);var inst_13011 = (state_13066[2]);var inst_13012 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13013 = cljs.core.async.untap_STAR_.call(null,m,inst_13010);var state_13066__$1 = (function (){var statearr_13143 = state_13066;(statearr_13143[32] = inst_13012);
(statearr_13143[33] = inst_13011);
return statearr_13143;
})();var statearr_13144_13204 = state_13066__$1;(statearr_13144_13204[2] = inst_13013);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13066__$1);
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
});})(c__6248__auto___13152,cs,m,dchan,dctr,done))
;return ((function (switch__6233__auto__,c__6248__auto___13152,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13148[0] = state_machine__6234__auto__);
(statearr_13148[1] = 1);
return statearr_13148;
});
var state_machine__6234__auto____1 = (function (state_13066){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13066);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13149){if((e13149 instanceof Object))
{var ex__6237__auto__ = e13149;var statearr_13150_13205 = state_13066;(statearr_13150_13205[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13066);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13206 = state_13066;
state_13066 = G__13206;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13066){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13152,cs,m,dchan,dctr,done))
})();var state__6250__auto__ = (function (){var statearr_13151 = f__6249__auto__.call(null);(statearr_13151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13152);
return statearr_13151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13152,cs,m,dchan,dctr,done))
);
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
cljs.core.async.Mix = (function (){var obj13208 = {};return obj13208;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t13318 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13318 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13319){
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
this.meta13319 = meta13319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13318.cljs$lang$type = true;
cljs.core.async.t13318.cljs$lang$ctorStr = "cljs.core.async/t13318";
cljs.core.async.t13318.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t13318");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13318.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13318.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13318.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13318.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13318.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13318.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13318.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13318.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13320){var self__ = this;
var _13320__$1 = this;return self__.meta13319;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13320,meta13319__$1){var self__ = this;
var _13320__$1 = this;return (new cljs.core.async.t13318(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13319__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13318 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13318(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13319){return (new cljs.core.async.t13318(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13319));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13318(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6248__auto___13427 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13385){var state_val_13386 = (state_13385[1]);if((state_val_13386 === 1))
{var inst_13324 = (state_13385[7]);var inst_13324__$1 = calc_state.call(null);var inst_13325 = cljs.core.seq_QMARK_.call(null,inst_13324__$1);var state_13385__$1 = (function (){var statearr_13387 = state_13385;(statearr_13387[7] = inst_13324__$1);
return statearr_13387;
})();if(inst_13325)
{var statearr_13388_13428 = state_13385__$1;(statearr_13388_13428[1] = 2);
} else
{var statearr_13389_13429 = state_13385__$1;(statearr_13389_13429[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 2))
{var inst_13324 = (state_13385[7]);var inst_13327 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13324);var state_13385__$1 = state_13385;var statearr_13390_13430 = state_13385__$1;(statearr_13390_13430[2] = inst_13327);
(statearr_13390_13430[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 3))
{var inst_13324 = (state_13385[7]);var state_13385__$1 = state_13385;var statearr_13391_13431 = state_13385__$1;(statearr_13391_13431[2] = inst_13324);
(statearr_13391_13431[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 4))
{var inst_13324 = (state_13385[7]);var inst_13330 = (state_13385[2]);var inst_13331 = cljs.core.get.call(null,inst_13330,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13332 = cljs.core.get.call(null,inst_13330,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13333 = cljs.core.get.call(null,inst_13330,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13334 = inst_13324;var state_13385__$1 = (function (){var statearr_13392 = state_13385;(statearr_13392[8] = inst_13331);
(statearr_13392[9] = inst_13332);
(statearr_13392[10] = inst_13334);
(statearr_13392[11] = inst_13333);
return statearr_13392;
})();var statearr_13393_13432 = state_13385__$1;(statearr_13393_13432[2] = null);
(statearr_13393_13432[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 5))
{var inst_13334 = (state_13385[10]);var inst_13337 = cljs.core.seq_QMARK_.call(null,inst_13334);var state_13385__$1 = state_13385;if(inst_13337)
{var statearr_13394_13433 = state_13385__$1;(statearr_13394_13433[1] = 7);
} else
{var statearr_13395_13434 = state_13385__$1;(statearr_13395_13434[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 6))
{var inst_13383 = (state_13385[2]);var state_13385__$1 = state_13385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13385__$1,inst_13383);
} else
{if((state_val_13386 === 7))
{var inst_13334 = (state_13385[10]);var inst_13339 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13334);var state_13385__$1 = state_13385;var statearr_13396_13435 = state_13385__$1;(statearr_13396_13435[2] = inst_13339);
(statearr_13396_13435[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 8))
{var inst_13334 = (state_13385[10]);var state_13385__$1 = state_13385;var statearr_13397_13436 = state_13385__$1;(statearr_13397_13436[2] = inst_13334);
(statearr_13397_13436[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 9))
{var inst_13342 = (state_13385[12]);var inst_13342__$1 = (state_13385[2]);var inst_13343 = cljs.core.get.call(null,inst_13342__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13344 = cljs.core.get.call(null,inst_13342__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13345 = cljs.core.get.call(null,inst_13342__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13385__$1 = (function (){var statearr_13398 = state_13385;(statearr_13398[13] = inst_13345);
(statearr_13398[14] = inst_13344);
(statearr_13398[12] = inst_13342__$1);
return statearr_13398;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13385__$1,10,inst_13343);
} else
{if((state_val_13386 === 10))
{var inst_13350 = (state_13385[15]);var inst_13349 = (state_13385[16]);var inst_13348 = (state_13385[2]);var inst_13349__$1 = cljs.core.nth.call(null,inst_13348,0,null);var inst_13350__$1 = cljs.core.nth.call(null,inst_13348,1,null);var inst_13351 = (inst_13349__$1 == null);var inst_13352 = cljs.core._EQ_.call(null,inst_13350__$1,change);var inst_13353 = (inst_13351) || (inst_13352);var state_13385__$1 = (function (){var statearr_13399 = state_13385;(statearr_13399[15] = inst_13350__$1);
(statearr_13399[16] = inst_13349__$1);
return statearr_13399;
})();if(cljs.core.truth_(inst_13353))
{var statearr_13400_13437 = state_13385__$1;(statearr_13400_13437[1] = 11);
} else
{var statearr_13401_13438 = state_13385__$1;(statearr_13401_13438[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 11))
{var inst_13349 = (state_13385[16]);var inst_13355 = (inst_13349 == null);var state_13385__$1 = state_13385;if(cljs.core.truth_(inst_13355))
{var statearr_13402_13439 = state_13385__$1;(statearr_13402_13439[1] = 14);
} else
{var statearr_13403_13440 = state_13385__$1;(statearr_13403_13440[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 12))
{var inst_13350 = (state_13385[15]);var inst_13364 = (state_13385[17]);var inst_13345 = (state_13385[13]);var inst_13364__$1 = inst_13345.call(null,inst_13350);var state_13385__$1 = (function (){var statearr_13404 = state_13385;(statearr_13404[17] = inst_13364__$1);
return statearr_13404;
})();if(cljs.core.truth_(inst_13364__$1))
{var statearr_13405_13441 = state_13385__$1;(statearr_13405_13441[1] = 17);
} else
{var statearr_13406_13442 = state_13385__$1;(statearr_13406_13442[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 13))
{var inst_13381 = (state_13385[2]);var state_13385__$1 = state_13385;var statearr_13407_13443 = state_13385__$1;(statearr_13407_13443[2] = inst_13381);
(statearr_13407_13443[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 14))
{var inst_13350 = (state_13385[15]);var inst_13357 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13350);var state_13385__$1 = state_13385;var statearr_13408_13444 = state_13385__$1;(statearr_13408_13444[2] = inst_13357);
(statearr_13408_13444[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 15))
{var state_13385__$1 = state_13385;var statearr_13409_13445 = state_13385__$1;(statearr_13409_13445[2] = null);
(statearr_13409_13445[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 16))
{var inst_13360 = (state_13385[2]);var inst_13361 = calc_state.call(null);var inst_13334 = inst_13361;var state_13385__$1 = (function (){var statearr_13410 = state_13385;(statearr_13410[18] = inst_13360);
(statearr_13410[10] = inst_13334);
return statearr_13410;
})();var statearr_13411_13446 = state_13385__$1;(statearr_13411_13446[2] = null);
(statearr_13411_13446[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 17))
{var inst_13364 = (state_13385[17]);var state_13385__$1 = state_13385;var statearr_13412_13447 = state_13385__$1;(statearr_13412_13447[2] = inst_13364);
(statearr_13412_13447[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 18))
{var inst_13350 = (state_13385[15]);var inst_13345 = (state_13385[13]);var inst_13344 = (state_13385[14]);var inst_13367 = cljs.core.empty_QMARK_.call(null,inst_13345);var inst_13368 = inst_13344.call(null,inst_13350);var inst_13369 = cljs.core.not.call(null,inst_13368);var inst_13370 = (inst_13367) && (inst_13369);var state_13385__$1 = state_13385;var statearr_13413_13448 = state_13385__$1;(statearr_13413_13448[2] = inst_13370);
(statearr_13413_13448[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 19))
{var inst_13372 = (state_13385[2]);var state_13385__$1 = state_13385;if(cljs.core.truth_(inst_13372))
{var statearr_13414_13449 = state_13385__$1;(statearr_13414_13449[1] = 20);
} else
{var statearr_13415_13450 = state_13385__$1;(statearr_13415_13450[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 20))
{var inst_13349 = (state_13385[16]);var state_13385__$1 = state_13385;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13385__$1,23,out,inst_13349);
} else
{if((state_val_13386 === 21))
{var state_13385__$1 = state_13385;var statearr_13416_13451 = state_13385__$1;(statearr_13416_13451[2] = null);
(statearr_13416_13451[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 22))
{var inst_13342 = (state_13385[12]);var inst_13378 = (state_13385[2]);var inst_13334 = inst_13342;var state_13385__$1 = (function (){var statearr_13417 = state_13385;(statearr_13417[10] = inst_13334);
(statearr_13417[19] = inst_13378);
return statearr_13417;
})();var statearr_13418_13452 = state_13385__$1;(statearr_13418_13452[2] = null);
(statearr_13418_13452[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13386 === 23))
{var inst_13375 = (state_13385[2]);var state_13385__$1 = state_13385;var statearr_13419_13453 = state_13385__$1;(statearr_13419_13453[2] = inst_13375);
(statearr_13419_13453[1] = 22);
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
});})(c__6248__auto___13427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6233__auto__,c__6248__auto___13427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13423[0] = state_machine__6234__auto__);
(statearr_13423[1] = 1);
return statearr_13423;
});
var state_machine__6234__auto____1 = (function (state_13385){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13385);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13424){if((e13424 instanceof Object))
{var ex__6237__auto__ = e13424;var statearr_13425_13454 = state_13385;(statearr_13425_13454[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13385);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13455 = state_13385;
state_13385 = G__13455;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13385){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6250__auto__ = (function (){var statearr_13426 = f__6249__auto__.call(null);(statearr_13426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13427);
return statearr_13426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
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
cljs.core.async.Pub = (function (){var obj13457 = {};return obj13457;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
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
return (function (topic){var or__3478__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3478__auto__,mults){
return (function (p1__13458_SHARP_){if(cljs.core.truth_(p1__13458_SHARP_.call(null,topic)))
{return p1__13458_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13458_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3478__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13583 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13583 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13584){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13584 = meta13584;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13583.cljs$lang$type = true;
cljs.core.async.t13583.cljs$lang$ctorStr = "cljs.core.async/t13583";
cljs.core.async.t13583.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t13583");
});})(mults,ensure_mult))
;
cljs.core.async.t13583.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13583.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13583.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13583.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13583.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13583.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13583.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13585){var self__ = this;
var _13585__$1 = this;return self__.meta13584;
});})(mults,ensure_mult))
;
cljs.core.async.t13583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13585,meta13584__$1){var self__ = this;
var _13585__$1 = this;return (new cljs.core.async.t13583(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13584__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13583 = ((function (mults,ensure_mult){
return (function __GT_t13583(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13584){return (new cljs.core.async.t13583(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13584));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13583(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6248__auto___13707 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13707,mults,ensure_mult,p){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13707,mults,ensure_mult,p){
return (function (state_13659){var state_val_13660 = (state_13659[1]);if((state_val_13660 === 1))
{var state_13659__$1 = state_13659;var statearr_13661_13708 = state_13659__$1;(statearr_13661_13708[2] = null);
(statearr_13661_13708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 2))
{var state_13659__$1 = state_13659;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13659__$1,4,ch);
} else
{if((state_val_13660 === 3))
{var inst_13657 = (state_13659[2]);var state_13659__$1 = state_13659;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13659__$1,inst_13657);
} else
{if((state_val_13660 === 4))
{var inst_13588 = (state_13659[7]);var inst_13588__$1 = (state_13659[2]);var inst_13589 = (inst_13588__$1 == null);var state_13659__$1 = (function (){var statearr_13662 = state_13659;(statearr_13662[7] = inst_13588__$1);
return statearr_13662;
})();if(cljs.core.truth_(inst_13589))
{var statearr_13663_13709 = state_13659__$1;(statearr_13663_13709[1] = 5);
} else
{var statearr_13664_13710 = state_13659__$1;(statearr_13664_13710[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 5))
{var inst_13595 = cljs.core.deref.call(null,mults);var inst_13596 = cljs.core.vals.call(null,inst_13595);var inst_13597 = cljs.core.seq.call(null,inst_13596);var inst_13598 = inst_13597;var inst_13599 = null;var inst_13600 = 0;var inst_13601 = 0;var state_13659__$1 = (function (){var statearr_13665 = state_13659;(statearr_13665[8] = inst_13600);
(statearr_13665[9] = inst_13599);
(statearr_13665[10] = inst_13598);
(statearr_13665[11] = inst_13601);
return statearr_13665;
})();var statearr_13666_13711 = state_13659__$1;(statearr_13666_13711[2] = null);
(statearr_13666_13711[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 6))
{var inst_13636 = (state_13659[12]);var inst_13588 = (state_13659[7]);var inst_13638 = (state_13659[13]);var inst_13636__$1 = topic_fn.call(null,inst_13588);var inst_13637 = cljs.core.deref.call(null,mults);var inst_13638__$1 = cljs.core.get.call(null,inst_13637,inst_13636__$1);var state_13659__$1 = (function (){var statearr_13667 = state_13659;(statearr_13667[12] = inst_13636__$1);
(statearr_13667[13] = inst_13638__$1);
return statearr_13667;
})();if(cljs.core.truth_(inst_13638__$1))
{var statearr_13668_13712 = state_13659__$1;(statearr_13668_13712[1] = 19);
} else
{var statearr_13669_13713 = state_13659__$1;(statearr_13669_13713[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 7))
{var inst_13655 = (state_13659[2]);var state_13659__$1 = state_13659;var statearr_13670_13714 = state_13659__$1;(statearr_13670_13714[2] = inst_13655);
(statearr_13670_13714[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 8))
{var inst_13600 = (state_13659[8]);var inst_13601 = (state_13659[11]);var inst_13603 = (inst_13601 < inst_13600);var inst_13604 = inst_13603;var state_13659__$1 = state_13659;if(cljs.core.truth_(inst_13604))
{var statearr_13674_13715 = state_13659__$1;(statearr_13674_13715[1] = 10);
} else
{var statearr_13675_13716 = state_13659__$1;(statearr_13675_13716[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 9))
{var inst_13634 = (state_13659[2]);var state_13659__$1 = state_13659;var statearr_13676_13717 = state_13659__$1;(statearr_13676_13717[2] = inst_13634);
(statearr_13676_13717[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 10))
{var inst_13600 = (state_13659[8]);var inst_13599 = (state_13659[9]);var inst_13598 = (state_13659[10]);var inst_13601 = (state_13659[11]);var inst_13606 = cljs.core._nth.call(null,inst_13599,inst_13601);var inst_13607 = cljs.core.async.muxch_STAR_.call(null,inst_13606);var inst_13608 = cljs.core.async.close_BANG_.call(null,inst_13607);var inst_13609 = (inst_13601 + 1);var tmp13671 = inst_13600;var tmp13672 = inst_13599;var tmp13673 = inst_13598;var inst_13598__$1 = tmp13673;var inst_13599__$1 = tmp13672;var inst_13600__$1 = tmp13671;var inst_13601__$1 = inst_13609;var state_13659__$1 = (function (){var statearr_13677 = state_13659;(statearr_13677[14] = inst_13608);
(statearr_13677[8] = inst_13600__$1);
(statearr_13677[9] = inst_13599__$1);
(statearr_13677[10] = inst_13598__$1);
(statearr_13677[11] = inst_13601__$1);
return statearr_13677;
})();var statearr_13678_13718 = state_13659__$1;(statearr_13678_13718[2] = null);
(statearr_13678_13718[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 11))
{var inst_13598 = (state_13659[10]);var inst_13612 = (state_13659[15]);var inst_13612__$1 = cljs.core.seq.call(null,inst_13598);var state_13659__$1 = (function (){var statearr_13679 = state_13659;(statearr_13679[15] = inst_13612__$1);
return statearr_13679;
})();if(inst_13612__$1)
{var statearr_13680_13719 = state_13659__$1;(statearr_13680_13719[1] = 13);
} else
{var statearr_13681_13720 = state_13659__$1;(statearr_13681_13720[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 12))
{var inst_13632 = (state_13659[2]);var state_13659__$1 = state_13659;var statearr_13682_13721 = state_13659__$1;(statearr_13682_13721[2] = inst_13632);
(statearr_13682_13721[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 13))
{var inst_13612 = (state_13659[15]);var inst_13614 = cljs.core.chunked_seq_QMARK_.call(null,inst_13612);var state_13659__$1 = state_13659;if(inst_13614)
{var statearr_13683_13722 = state_13659__$1;(statearr_13683_13722[1] = 16);
} else
{var statearr_13684_13723 = state_13659__$1;(statearr_13684_13723[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 14))
{var state_13659__$1 = state_13659;var statearr_13685_13724 = state_13659__$1;(statearr_13685_13724[2] = null);
(statearr_13685_13724[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 15))
{var inst_13630 = (state_13659[2]);var state_13659__$1 = state_13659;var statearr_13686_13725 = state_13659__$1;(statearr_13686_13725[2] = inst_13630);
(statearr_13686_13725[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 16))
{var inst_13612 = (state_13659[15]);var inst_13616 = cljs.core.chunk_first.call(null,inst_13612);var inst_13617 = cljs.core.chunk_rest.call(null,inst_13612);var inst_13618 = cljs.core.count.call(null,inst_13616);var inst_13598 = inst_13617;var inst_13599 = inst_13616;var inst_13600 = inst_13618;var inst_13601 = 0;var state_13659__$1 = (function (){var statearr_13687 = state_13659;(statearr_13687[8] = inst_13600);
(statearr_13687[9] = inst_13599);
(statearr_13687[10] = inst_13598);
(statearr_13687[11] = inst_13601);
return statearr_13687;
})();var statearr_13688_13726 = state_13659__$1;(statearr_13688_13726[2] = null);
(statearr_13688_13726[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 17))
{var inst_13612 = (state_13659[15]);var inst_13621 = cljs.core.first.call(null,inst_13612);var inst_13622 = cljs.core.async.muxch_STAR_.call(null,inst_13621);var inst_13623 = cljs.core.async.close_BANG_.call(null,inst_13622);var inst_13624 = cljs.core.next.call(null,inst_13612);var inst_13598 = inst_13624;var inst_13599 = null;var inst_13600 = 0;var inst_13601 = 0;var state_13659__$1 = (function (){var statearr_13689 = state_13659;(statearr_13689[8] = inst_13600);
(statearr_13689[16] = inst_13623);
(statearr_13689[9] = inst_13599);
(statearr_13689[10] = inst_13598);
(statearr_13689[11] = inst_13601);
return statearr_13689;
})();var statearr_13690_13727 = state_13659__$1;(statearr_13690_13727[2] = null);
(statearr_13690_13727[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 18))
{var inst_13627 = (state_13659[2]);var state_13659__$1 = state_13659;var statearr_13691_13728 = state_13659__$1;(statearr_13691_13728[2] = inst_13627);
(statearr_13691_13728[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 19))
{var state_13659__$1 = state_13659;var statearr_13692_13729 = state_13659__$1;(statearr_13692_13729[2] = null);
(statearr_13692_13729[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 20))
{var state_13659__$1 = state_13659;var statearr_13693_13730 = state_13659__$1;(statearr_13693_13730[2] = null);
(statearr_13693_13730[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 21))
{var inst_13652 = (state_13659[2]);var state_13659__$1 = (function (){var statearr_13694 = state_13659;(statearr_13694[17] = inst_13652);
return statearr_13694;
})();var statearr_13695_13731 = state_13659__$1;(statearr_13695_13731[2] = null);
(statearr_13695_13731[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 22))
{var inst_13649 = (state_13659[2]);var state_13659__$1 = state_13659;var statearr_13696_13732 = state_13659__$1;(statearr_13696_13732[2] = inst_13649);
(statearr_13696_13732[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 23))
{var inst_13636 = (state_13659[12]);var inst_13640 = (state_13659[2]);var inst_13641 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13636);var state_13659__$1 = (function (){var statearr_13697 = state_13659;(statearr_13697[18] = inst_13640);
return statearr_13697;
})();var statearr_13698_13733 = state_13659__$1;(statearr_13698_13733[2] = inst_13641);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13659__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13660 === 24))
{var inst_13588 = (state_13659[7]);var inst_13638 = (state_13659[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13659,23,Object,null,22);var inst_13645 = cljs.core.async.muxch_STAR_.call(null,inst_13638);var state_13659__$1 = state_13659;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13659__$1,25,inst_13645,inst_13588);
} else
{if((state_val_13660 === 25))
{var inst_13647 = (state_13659[2]);var state_13659__$1 = state_13659;var statearr_13699_13734 = state_13659__$1;(statearr_13699_13734[2] = inst_13647);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13659__$1);
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
});})(c__6248__auto___13707,mults,ensure_mult,p))
;return ((function (switch__6233__auto__,c__6248__auto___13707,mults,ensure_mult,p){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13703[0] = state_machine__6234__auto__);
(statearr_13703[1] = 1);
return statearr_13703;
});
var state_machine__6234__auto____1 = (function (state_13659){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13659);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13704){if((e13704 instanceof Object))
{var ex__6237__auto__ = e13704;var statearr_13705_13735 = state_13659;(statearr_13705_13735[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13659);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13704;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13736 = state_13659;
state_13659 = G__13736;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13659){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13707,mults,ensure_mult,p))
})();var state__6250__auto__ = (function (){var statearr_13706 = f__6249__auto__.call(null);(statearr_13706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13707);
return statearr_13706;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13707,mults,ensure_mult,p))
);
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
,cljs.core.range.call(null,cnt));var c__6248__auto___13873 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13843){var state_val_13844 = (state_13843[1]);if((state_val_13844 === 1))
{var state_13843__$1 = state_13843;var statearr_13845_13874 = state_13843__$1;(statearr_13845_13874[2] = null);
(statearr_13845_13874[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13844 === 2))
{var inst_13806 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13807 = 0;var state_13843__$1 = (function (){var statearr_13846 = state_13843;(statearr_13846[7] = inst_13806);
(statearr_13846[8] = inst_13807);
return statearr_13846;
})();var statearr_13847_13875 = state_13843__$1;(statearr_13847_13875[2] = null);
(statearr_13847_13875[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13844 === 3))
{var inst_13841 = (state_13843[2]);var state_13843__$1 = state_13843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13843__$1,inst_13841);
} else
{if((state_val_13844 === 4))
{var inst_13807 = (state_13843[8]);var inst_13809 = (inst_13807 < cnt);var state_13843__$1 = state_13843;if(cljs.core.truth_(inst_13809))
{var statearr_13848_13876 = state_13843__$1;(statearr_13848_13876[1] = 6);
} else
{var statearr_13849_13877 = state_13843__$1;(statearr_13849_13877[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13844 === 5))
{var inst_13827 = (state_13843[2]);var state_13843__$1 = (function (){var statearr_13850 = state_13843;(statearr_13850[9] = inst_13827);
return statearr_13850;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13843__$1,12,dchan);
} else
{if((state_val_13844 === 6))
{var state_13843__$1 = state_13843;var statearr_13851_13878 = state_13843__$1;(statearr_13851_13878[2] = null);
(statearr_13851_13878[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13844 === 7))
{var state_13843__$1 = state_13843;var statearr_13852_13879 = state_13843__$1;(statearr_13852_13879[2] = null);
(statearr_13852_13879[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13844 === 8))
{var inst_13825 = (state_13843[2]);var state_13843__$1 = state_13843;var statearr_13853_13880 = state_13843__$1;(statearr_13853_13880[2] = inst_13825);
(statearr_13853_13880[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13844 === 9))
{var inst_13807 = (state_13843[8]);var inst_13820 = (state_13843[2]);var inst_13821 = (inst_13807 + 1);var inst_13807__$1 = inst_13821;var state_13843__$1 = (function (){var statearr_13854 = state_13843;(statearr_13854[8] = inst_13807__$1);
(statearr_13854[10] = inst_13820);
return statearr_13854;
})();var statearr_13855_13881 = state_13843__$1;(statearr_13855_13881[2] = null);
(statearr_13855_13881[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13844 === 10))
{var inst_13811 = (state_13843[2]);var inst_13812 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13843__$1 = (function (){var statearr_13856 = state_13843;(statearr_13856[11] = inst_13811);
return statearr_13856;
})();var statearr_13857_13882 = state_13843__$1;(statearr_13857_13882[2] = inst_13812);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13843__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13844 === 11))
{var inst_13807 = (state_13843[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13843,10,Object,null,9);var inst_13816 = chs__$1.call(null,inst_13807);var inst_13817 = done.call(null,inst_13807);var inst_13818 = cljs.core.async.take_BANG_.call(null,inst_13816,inst_13817);var state_13843__$1 = state_13843;var statearr_13858_13883 = state_13843__$1;(statearr_13858_13883[2] = inst_13818);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13843__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13844 === 12))
{var inst_13829 = (state_13843[12]);var inst_13829__$1 = (state_13843[2]);var inst_13830 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13829__$1);var state_13843__$1 = (function (){var statearr_13859 = state_13843;(statearr_13859[12] = inst_13829__$1);
return statearr_13859;
})();if(cljs.core.truth_(inst_13830))
{var statearr_13860_13884 = state_13843__$1;(statearr_13860_13884[1] = 13);
} else
{var statearr_13861_13885 = state_13843__$1;(statearr_13861_13885[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13844 === 13))
{var inst_13832 = cljs.core.async.close_BANG_.call(null,out);var state_13843__$1 = state_13843;var statearr_13862_13886 = state_13843__$1;(statearr_13862_13886[2] = inst_13832);
(statearr_13862_13886[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13844 === 14))
{var inst_13829 = (state_13843[12]);var inst_13834 = cljs.core.apply.call(null,f,inst_13829);var state_13843__$1 = state_13843;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13843__$1,16,out,inst_13834);
} else
{if((state_val_13844 === 15))
{var inst_13839 = (state_13843[2]);var state_13843__$1 = state_13843;var statearr_13863_13887 = state_13843__$1;(statearr_13863_13887[2] = inst_13839);
(statearr_13863_13887[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13844 === 16))
{var inst_13836 = (state_13843[2]);var state_13843__$1 = (function (){var statearr_13864 = state_13843;(statearr_13864[13] = inst_13836);
return statearr_13864;
})();var statearr_13865_13888 = state_13843__$1;(statearr_13865_13888[2] = null);
(statearr_13865_13888[1] = 2);
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
});})(c__6248__auto___13873,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6233__auto__,c__6248__auto___13873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13869[0] = state_machine__6234__auto__);
(statearr_13869[1] = 1);
return statearr_13869;
});
var state_machine__6234__auto____1 = (function (state_13843){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13843);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13870){if((e13870 instanceof Object))
{var ex__6237__auto__ = e13870;var statearr_13871_13889 = state_13843;(statearr_13871_13889[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13843);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13870;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13890 = state_13843;
state_13843 = G__13890;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13843){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13873,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6250__auto__ = (function (){var statearr_13872 = f__6249__auto__.call(null);(statearr_13872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13873);
return statearr_13872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13873,chs__$1,out,cnt,rets,dchan,dctr,done))
);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___13998 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13998,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13998,out){
return (function (state_13974){var state_val_13975 = (state_13974[1]);if((state_val_13975 === 1))
{var inst_13945 = cljs.core.vec.call(null,chs);var inst_13946 = inst_13945;var state_13974__$1 = (function (){var statearr_13976 = state_13974;(statearr_13976[7] = inst_13946);
return statearr_13976;
})();var statearr_13977_13999 = state_13974__$1;(statearr_13977_13999[2] = null);
(statearr_13977_13999[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13975 === 2))
{var inst_13946 = (state_13974[7]);var inst_13948 = cljs.core.count.call(null,inst_13946);var inst_13949 = (inst_13948 > 0);var state_13974__$1 = state_13974;if(cljs.core.truth_(inst_13949))
{var statearr_13978_14000 = state_13974__$1;(statearr_13978_14000[1] = 4);
} else
{var statearr_13979_14001 = state_13974__$1;(statearr_13979_14001[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13975 === 3))
{var inst_13972 = (state_13974[2]);var state_13974__$1 = state_13974;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13974__$1,inst_13972);
} else
{if((state_val_13975 === 4))
{var inst_13946 = (state_13974[7]);var state_13974__$1 = state_13974;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13974__$1,7,inst_13946);
} else
{if((state_val_13975 === 5))
{var inst_13968 = cljs.core.async.close_BANG_.call(null,out);var state_13974__$1 = state_13974;var statearr_13980_14002 = state_13974__$1;(statearr_13980_14002[2] = inst_13968);
(statearr_13980_14002[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13975 === 6))
{var inst_13970 = (state_13974[2]);var state_13974__$1 = state_13974;var statearr_13981_14003 = state_13974__$1;(statearr_13981_14003[2] = inst_13970);
(statearr_13981_14003[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13975 === 7))
{var inst_13953 = (state_13974[8]);var inst_13954 = (state_13974[9]);var inst_13953__$1 = (state_13974[2]);var inst_13954__$1 = cljs.core.nth.call(null,inst_13953__$1,0,null);var inst_13955 = cljs.core.nth.call(null,inst_13953__$1,1,null);var inst_13956 = (inst_13954__$1 == null);var state_13974__$1 = (function (){var statearr_13982 = state_13974;(statearr_13982[8] = inst_13953__$1);
(statearr_13982[9] = inst_13954__$1);
(statearr_13982[10] = inst_13955);
return statearr_13982;
})();if(cljs.core.truth_(inst_13956))
{var statearr_13983_14004 = state_13974__$1;(statearr_13983_14004[1] = 8);
} else
{var statearr_13984_14005 = state_13974__$1;(statearr_13984_14005[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13975 === 8))
{var inst_13953 = (state_13974[8]);var inst_13954 = (state_13974[9]);var inst_13955 = (state_13974[10]);var inst_13946 = (state_13974[7]);var inst_13958 = (function (){var c = inst_13955;var v = inst_13954;var vec__13951 = inst_13953;var cs = inst_13946;return ((function (c,v,vec__13951,cs,inst_13953,inst_13954,inst_13955,inst_13946,state_val_13975,c__6248__auto___13998,out){
return (function (p1__13891_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13891_SHARP_);
});
;})(c,v,vec__13951,cs,inst_13953,inst_13954,inst_13955,inst_13946,state_val_13975,c__6248__auto___13998,out))
})();var inst_13959 = cljs.core.filterv.call(null,inst_13958,inst_13946);var inst_13946__$1 = inst_13959;var state_13974__$1 = (function (){var statearr_13985 = state_13974;(statearr_13985[7] = inst_13946__$1);
return statearr_13985;
})();var statearr_13986_14006 = state_13974__$1;(statearr_13986_14006[2] = null);
(statearr_13986_14006[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13975 === 9))
{var inst_13954 = (state_13974[9]);var state_13974__$1 = state_13974;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13974__$1,11,out,inst_13954);
} else
{if((state_val_13975 === 10))
{var inst_13966 = (state_13974[2]);var state_13974__$1 = state_13974;var statearr_13988_14007 = state_13974__$1;(statearr_13988_14007[2] = inst_13966);
(statearr_13988_14007[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13975 === 11))
{var inst_13946 = (state_13974[7]);var inst_13963 = (state_13974[2]);var tmp13987 = inst_13946;var inst_13946__$1 = tmp13987;var state_13974__$1 = (function (){var statearr_13989 = state_13974;(statearr_13989[11] = inst_13963);
(statearr_13989[7] = inst_13946__$1);
return statearr_13989;
})();var statearr_13990_14008 = state_13974__$1;(statearr_13990_14008[2] = null);
(statearr_13990_14008[1] = 2);
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
});})(c__6248__auto___13998,out))
;return ((function (switch__6233__auto__,c__6248__auto___13998,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13994 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13994[0] = state_machine__6234__auto__);
(statearr_13994[1] = 1);
return statearr_13994;
});
var state_machine__6234__auto____1 = (function (state_13974){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13974);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13995){if((e13995 instanceof Object))
{var ex__6237__auto__ = e13995;var statearr_13996_14009 = state_13974;(statearr_13996_14009[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13974);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13995;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14010 = state_13974;
state_13974 = G__14010;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13974){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13998,out))
})();var state__6250__auto__ = (function (){var statearr_13997 = f__6249__auto__.call(null);(statearr_13997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13998);
return statearr_13997;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13998,out))
);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___14103 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___14103,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___14103,out){
return (function (state_14080){var state_val_14081 = (state_14080[1]);if((state_val_14081 === 1))
{var inst_14057 = 0;var state_14080__$1 = (function (){var statearr_14082 = state_14080;(statearr_14082[7] = inst_14057);
return statearr_14082;
})();var statearr_14083_14104 = state_14080__$1;(statearr_14083_14104[2] = null);
(statearr_14083_14104[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14081 === 2))
{var inst_14057 = (state_14080[7]);var inst_14059 = (inst_14057 < n);var state_14080__$1 = state_14080;if(cljs.core.truth_(inst_14059))
{var statearr_14084_14105 = state_14080__$1;(statearr_14084_14105[1] = 4);
} else
{var statearr_14085_14106 = state_14080__$1;(statearr_14085_14106[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14081 === 3))
{var inst_14077 = (state_14080[2]);var inst_14078 = cljs.core.async.close_BANG_.call(null,out);var state_14080__$1 = (function (){var statearr_14086 = state_14080;(statearr_14086[8] = inst_14077);
return statearr_14086;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14080__$1,inst_14078);
} else
{if((state_val_14081 === 4))
{var state_14080__$1 = state_14080;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14080__$1,7,ch);
} else
{if((state_val_14081 === 5))
{var state_14080__$1 = state_14080;var statearr_14087_14107 = state_14080__$1;(statearr_14087_14107[2] = null);
(statearr_14087_14107[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14081 === 6))
{var inst_14075 = (state_14080[2]);var state_14080__$1 = state_14080;var statearr_14088_14108 = state_14080__$1;(statearr_14088_14108[2] = inst_14075);
(statearr_14088_14108[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14081 === 7))
{var inst_14062 = (state_14080[9]);var inst_14062__$1 = (state_14080[2]);var inst_14063 = (inst_14062__$1 == null);var inst_14064 = cljs.core.not.call(null,inst_14063);var state_14080__$1 = (function (){var statearr_14089 = state_14080;(statearr_14089[9] = inst_14062__$1);
return statearr_14089;
})();if(inst_14064)
{var statearr_14090_14109 = state_14080__$1;(statearr_14090_14109[1] = 8);
} else
{var statearr_14091_14110 = state_14080__$1;(statearr_14091_14110[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14081 === 8))
{var inst_14062 = (state_14080[9]);var state_14080__$1 = state_14080;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14080__$1,11,out,inst_14062);
} else
{if((state_val_14081 === 9))
{var state_14080__$1 = state_14080;var statearr_14092_14111 = state_14080__$1;(statearr_14092_14111[2] = null);
(statearr_14092_14111[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14081 === 10))
{var inst_14072 = (state_14080[2]);var state_14080__$1 = state_14080;var statearr_14093_14112 = state_14080__$1;(statearr_14093_14112[2] = inst_14072);
(statearr_14093_14112[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14081 === 11))
{var inst_14057 = (state_14080[7]);var inst_14067 = (state_14080[2]);var inst_14068 = (inst_14057 + 1);var inst_14057__$1 = inst_14068;var state_14080__$1 = (function (){var statearr_14094 = state_14080;(statearr_14094[7] = inst_14057__$1);
(statearr_14094[10] = inst_14067);
return statearr_14094;
})();var statearr_14095_14113 = state_14080__$1;(statearr_14095_14113[2] = null);
(statearr_14095_14113[1] = 2);
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
});})(c__6248__auto___14103,out))
;return ((function (switch__6233__auto__,c__6248__auto___14103,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_14099 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14099[0] = state_machine__6234__auto__);
(statearr_14099[1] = 1);
return statearr_14099;
});
var state_machine__6234__auto____1 = (function (state_14080){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_14080);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e14100){if((e14100 instanceof Object))
{var ex__6237__auto__ = e14100;var statearr_14101_14114 = state_14080;(statearr_14101_14114[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14080);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14100;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14115 = state_14080;
state_14080 = G__14115;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_14080){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_14080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___14103,out))
})();var state__6250__auto__ = (function (){var statearr_14102 = f__6249__auto__.call(null);(statearr_14102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___14103);
return statearr_14102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___14103,out))
);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___14212 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___14212,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___14212,out){
return (function (state_14187){var state_val_14188 = (state_14187[1]);if((state_val_14188 === 1))
{var inst_14164 = null;var state_14187__$1 = (function (){var statearr_14189 = state_14187;(statearr_14189[7] = inst_14164);
return statearr_14189;
})();var statearr_14190_14213 = state_14187__$1;(statearr_14190_14213[2] = null);
(statearr_14190_14213[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14188 === 2))
{var state_14187__$1 = state_14187;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14187__$1,4,ch);
} else
{if((state_val_14188 === 3))
{var inst_14184 = (state_14187[2]);var inst_14185 = cljs.core.async.close_BANG_.call(null,out);var state_14187__$1 = (function (){var statearr_14191 = state_14187;(statearr_14191[8] = inst_14184);
return statearr_14191;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14187__$1,inst_14185);
} else
{if((state_val_14188 === 4))
{var inst_14167 = (state_14187[9]);var inst_14167__$1 = (state_14187[2]);var inst_14168 = (inst_14167__$1 == null);var inst_14169 = cljs.core.not.call(null,inst_14168);var state_14187__$1 = (function (){var statearr_14192 = state_14187;(statearr_14192[9] = inst_14167__$1);
return statearr_14192;
})();if(inst_14169)
{var statearr_14193_14214 = state_14187__$1;(statearr_14193_14214[1] = 5);
} else
{var statearr_14194_14215 = state_14187__$1;(statearr_14194_14215[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14188 === 5))
{var inst_14167 = (state_14187[9]);var inst_14164 = (state_14187[7]);var inst_14171 = cljs.core._EQ_.call(null,inst_14167,inst_14164);var state_14187__$1 = state_14187;if(inst_14171)
{var statearr_14195_14216 = state_14187__$1;(statearr_14195_14216[1] = 8);
} else
{var statearr_14196_14217 = state_14187__$1;(statearr_14196_14217[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14188 === 6))
{var state_14187__$1 = state_14187;var statearr_14198_14218 = state_14187__$1;(statearr_14198_14218[2] = null);
(statearr_14198_14218[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14188 === 7))
{var inst_14182 = (state_14187[2]);var state_14187__$1 = state_14187;var statearr_14199_14219 = state_14187__$1;(statearr_14199_14219[2] = inst_14182);
(statearr_14199_14219[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14188 === 8))
{var inst_14164 = (state_14187[7]);var tmp14197 = inst_14164;var inst_14164__$1 = tmp14197;var state_14187__$1 = (function (){var statearr_14200 = state_14187;(statearr_14200[7] = inst_14164__$1);
return statearr_14200;
})();var statearr_14201_14220 = state_14187__$1;(statearr_14201_14220[2] = null);
(statearr_14201_14220[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14188 === 9))
{var inst_14167 = (state_14187[9]);var state_14187__$1 = state_14187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14187__$1,11,out,inst_14167);
} else
{if((state_val_14188 === 10))
{var inst_14179 = (state_14187[2]);var state_14187__$1 = state_14187;var statearr_14202_14221 = state_14187__$1;(statearr_14202_14221[2] = inst_14179);
(statearr_14202_14221[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14188 === 11))
{var inst_14167 = (state_14187[9]);var inst_14176 = (state_14187[2]);var inst_14164 = inst_14167;var state_14187__$1 = (function (){var statearr_14203 = state_14187;(statearr_14203[7] = inst_14164);
(statearr_14203[10] = inst_14176);
return statearr_14203;
})();var statearr_14204_14222 = state_14187__$1;(statearr_14204_14222[2] = null);
(statearr_14204_14222[1] = 2);
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
});})(c__6248__auto___14212,out))
;return ((function (switch__6233__auto__,c__6248__auto___14212,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_14208 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14208[0] = state_machine__6234__auto__);
(statearr_14208[1] = 1);
return statearr_14208;
});
var state_machine__6234__auto____1 = (function (state_14187){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_14187);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e14209){if((e14209 instanceof Object))
{var ex__6237__auto__ = e14209;var statearr_14210_14223 = state_14187;(statearr_14210_14223[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14187);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14224 = state_14187;
state_14187 = G__14224;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_14187){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_14187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___14212,out))
})();var state__6250__auto__ = (function (){var statearr_14211 = f__6249__auto__.call(null);(statearr_14211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___14212);
return statearr_14211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___14212,out))
);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___14359 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___14359,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___14359,out){
return (function (state_14329){var state_val_14330 = (state_14329[1]);if((state_val_14330 === 1))
{var inst_14292 = (new Array(n));var inst_14293 = inst_14292;var inst_14294 = 0;var state_14329__$1 = (function (){var statearr_14331 = state_14329;(statearr_14331[7] = inst_14294);
(statearr_14331[8] = inst_14293);
return statearr_14331;
})();var statearr_14332_14360 = state_14329__$1;(statearr_14332_14360[2] = null);
(statearr_14332_14360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14330 === 2))
{var state_14329__$1 = state_14329;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14329__$1,4,ch);
} else
{if((state_val_14330 === 3))
{var inst_14327 = (state_14329[2]);var state_14329__$1 = state_14329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14329__$1,inst_14327);
} else
{if((state_val_14330 === 4))
{var inst_14297 = (state_14329[9]);var inst_14297__$1 = (state_14329[2]);var inst_14298 = (inst_14297__$1 == null);var inst_14299 = cljs.core.not.call(null,inst_14298);var state_14329__$1 = (function (){var statearr_14333 = state_14329;(statearr_14333[9] = inst_14297__$1);
return statearr_14333;
})();if(inst_14299)
{var statearr_14334_14361 = state_14329__$1;(statearr_14334_14361[1] = 5);
} else
{var statearr_14335_14362 = state_14329__$1;(statearr_14335_14362[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14330 === 5))
{var inst_14297 = (state_14329[9]);var inst_14294 = (state_14329[7]);var inst_14293 = (state_14329[8]);var inst_14302 = (state_14329[10]);var inst_14301 = (inst_14293[inst_14294] = inst_14297);var inst_14302__$1 = (inst_14294 + 1);var inst_14303 = (inst_14302__$1 < n);var state_14329__$1 = (function (){var statearr_14336 = state_14329;(statearr_14336[10] = inst_14302__$1);
(statearr_14336[11] = inst_14301);
return statearr_14336;
})();if(cljs.core.truth_(inst_14303))
{var statearr_14337_14363 = state_14329__$1;(statearr_14337_14363[1] = 8);
} else
{var statearr_14338_14364 = state_14329__$1;(statearr_14338_14364[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14330 === 6))
{var inst_14294 = (state_14329[7]);var inst_14315 = (inst_14294 > 0);var state_14329__$1 = state_14329;if(cljs.core.truth_(inst_14315))
{var statearr_14340_14365 = state_14329__$1;(statearr_14340_14365[1] = 12);
} else
{var statearr_14341_14366 = state_14329__$1;(statearr_14341_14366[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14330 === 7))
{var inst_14325 = (state_14329[2]);var state_14329__$1 = state_14329;var statearr_14342_14367 = state_14329__$1;(statearr_14342_14367[2] = inst_14325);
(statearr_14342_14367[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14330 === 8))
{var inst_14293 = (state_14329[8]);var inst_14302 = (state_14329[10]);var tmp14339 = inst_14293;var inst_14293__$1 = tmp14339;var inst_14294 = inst_14302;var state_14329__$1 = (function (){var statearr_14343 = state_14329;(statearr_14343[7] = inst_14294);
(statearr_14343[8] = inst_14293__$1);
return statearr_14343;
})();var statearr_14344_14368 = state_14329__$1;(statearr_14344_14368[2] = null);
(statearr_14344_14368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14330 === 9))
{var inst_14293 = (state_14329[8]);var inst_14307 = cljs.core.vec.call(null,inst_14293);var state_14329__$1 = state_14329;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14329__$1,11,out,inst_14307);
} else
{if((state_val_14330 === 10))
{var inst_14313 = (state_14329[2]);var state_14329__$1 = state_14329;var statearr_14345_14369 = state_14329__$1;(statearr_14345_14369[2] = inst_14313);
(statearr_14345_14369[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14330 === 11))
{var inst_14309 = (state_14329[2]);var inst_14310 = (new Array(n));var inst_14293 = inst_14310;var inst_14294 = 0;var state_14329__$1 = (function (){var statearr_14346 = state_14329;(statearr_14346[12] = inst_14309);
(statearr_14346[7] = inst_14294);
(statearr_14346[8] = inst_14293);
return statearr_14346;
})();var statearr_14347_14370 = state_14329__$1;(statearr_14347_14370[2] = null);
(statearr_14347_14370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14330 === 12))
{var inst_14293 = (state_14329[8]);var inst_14317 = cljs.core.vec.call(null,inst_14293);var state_14329__$1 = state_14329;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14329__$1,15,out,inst_14317);
} else
{if((state_val_14330 === 13))
{var state_14329__$1 = state_14329;var statearr_14348_14371 = state_14329__$1;(statearr_14348_14371[2] = null);
(statearr_14348_14371[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14330 === 14))
{var inst_14322 = (state_14329[2]);var inst_14323 = cljs.core.async.close_BANG_.call(null,out);var state_14329__$1 = (function (){var statearr_14349 = state_14329;(statearr_14349[13] = inst_14322);
return statearr_14349;
})();var statearr_14350_14372 = state_14329__$1;(statearr_14350_14372[2] = inst_14323);
(statearr_14350_14372[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14330 === 15))
{var inst_14319 = (state_14329[2]);var state_14329__$1 = state_14329;var statearr_14351_14373 = state_14329__$1;(statearr_14351_14373[2] = inst_14319);
(statearr_14351_14373[1] = 14);
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
});})(c__6248__auto___14359,out))
;return ((function (switch__6233__auto__,c__6248__auto___14359,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_14355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14355[0] = state_machine__6234__auto__);
(statearr_14355[1] = 1);
return statearr_14355;
});
var state_machine__6234__auto____1 = (function (state_14329){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_14329);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e14356){if((e14356 instanceof Object))
{var ex__6237__auto__ = e14356;var statearr_14357_14374 = state_14329;(statearr_14357_14374[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14329);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14375 = state_14329;
state_14329 = G__14375;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_14329){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_14329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___14359,out))
})();var state__6250__auto__ = (function (){var statearr_14358 = f__6249__auto__.call(null);(statearr_14358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___14359);
return statearr_14358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___14359,out))
);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___14518 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___14518,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___14518,out){
return (function (state_14488){var state_val_14489 = (state_14488[1]);if((state_val_14489 === 1))
{var inst_14447 = [];var inst_14448 = inst_14447;var inst_14449 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14488__$1 = (function (){var statearr_14490 = state_14488;(statearr_14490[7] = inst_14448);
(statearr_14490[8] = inst_14449);
return statearr_14490;
})();var statearr_14491_14519 = state_14488__$1;(statearr_14491_14519[2] = null);
(statearr_14491_14519[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14489 === 2))
{var state_14488__$1 = state_14488;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14488__$1,4,ch);
} else
{if((state_val_14489 === 3))
{var inst_14486 = (state_14488[2]);var state_14488__$1 = state_14488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14488__$1,inst_14486);
} else
{if((state_val_14489 === 4))
{var inst_14452 = (state_14488[9]);var inst_14452__$1 = (state_14488[2]);var inst_14453 = (inst_14452__$1 == null);var inst_14454 = cljs.core.not.call(null,inst_14453);var state_14488__$1 = (function (){var statearr_14492 = state_14488;(statearr_14492[9] = inst_14452__$1);
return statearr_14492;
})();if(inst_14454)
{var statearr_14493_14520 = state_14488__$1;(statearr_14493_14520[1] = 5);
} else
{var statearr_14494_14521 = state_14488__$1;(statearr_14494_14521[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14489 === 5))
{var inst_14449 = (state_14488[8]);var inst_14456 = (state_14488[10]);var inst_14452 = (state_14488[9]);var inst_14456__$1 = f.call(null,inst_14452);var inst_14457 = cljs.core._EQ_.call(null,inst_14456__$1,inst_14449);var inst_14458 = cljs.core.keyword_identical_QMARK_.call(null,inst_14449,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14459 = (inst_14457) || (inst_14458);var state_14488__$1 = (function (){var statearr_14495 = state_14488;(statearr_14495[10] = inst_14456__$1);
return statearr_14495;
})();if(cljs.core.truth_(inst_14459))
{var statearr_14496_14522 = state_14488__$1;(statearr_14496_14522[1] = 8);
} else
{var statearr_14497_14523 = state_14488__$1;(statearr_14497_14523[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14489 === 6))
{var inst_14448 = (state_14488[7]);var inst_14473 = inst_14448.length;var inst_14474 = (inst_14473 > 0);var state_14488__$1 = state_14488;if(cljs.core.truth_(inst_14474))
{var statearr_14499_14524 = state_14488__$1;(statearr_14499_14524[1] = 12);
} else
{var statearr_14500_14525 = state_14488__$1;(statearr_14500_14525[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14489 === 7))
{var inst_14484 = (state_14488[2]);var state_14488__$1 = state_14488;var statearr_14501_14526 = state_14488__$1;(statearr_14501_14526[2] = inst_14484);
(statearr_14501_14526[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14489 === 8))
{var inst_14448 = (state_14488[7]);var inst_14456 = (state_14488[10]);var inst_14452 = (state_14488[9]);var inst_14461 = inst_14448.push(inst_14452);var tmp14498 = inst_14448;var inst_14448__$1 = tmp14498;var inst_14449 = inst_14456;var state_14488__$1 = (function (){var statearr_14502 = state_14488;(statearr_14502[7] = inst_14448__$1);
(statearr_14502[8] = inst_14449);
(statearr_14502[11] = inst_14461);
return statearr_14502;
})();var statearr_14503_14527 = state_14488__$1;(statearr_14503_14527[2] = null);
(statearr_14503_14527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14489 === 9))
{var inst_14448 = (state_14488[7]);var inst_14464 = cljs.core.vec.call(null,inst_14448);var state_14488__$1 = state_14488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14488__$1,11,out,inst_14464);
} else
{if((state_val_14489 === 10))
{var inst_14471 = (state_14488[2]);var state_14488__$1 = state_14488;var statearr_14504_14528 = state_14488__$1;(statearr_14504_14528[2] = inst_14471);
(statearr_14504_14528[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14489 === 11))
{var inst_14456 = (state_14488[10]);var inst_14452 = (state_14488[9]);var inst_14466 = (state_14488[2]);var inst_14467 = [];var inst_14468 = inst_14467.push(inst_14452);var inst_14448 = inst_14467;var inst_14449 = inst_14456;var state_14488__$1 = (function (){var statearr_14505 = state_14488;(statearr_14505[7] = inst_14448);
(statearr_14505[8] = inst_14449);
(statearr_14505[12] = inst_14468);
(statearr_14505[13] = inst_14466);
return statearr_14505;
})();var statearr_14506_14529 = state_14488__$1;(statearr_14506_14529[2] = null);
(statearr_14506_14529[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14489 === 12))
{var inst_14448 = (state_14488[7]);var inst_14476 = cljs.core.vec.call(null,inst_14448);var state_14488__$1 = state_14488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14488__$1,15,out,inst_14476);
} else
{if((state_val_14489 === 13))
{var state_14488__$1 = state_14488;var statearr_14507_14530 = state_14488__$1;(statearr_14507_14530[2] = null);
(statearr_14507_14530[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14489 === 14))
{var inst_14481 = (state_14488[2]);var inst_14482 = cljs.core.async.close_BANG_.call(null,out);var state_14488__$1 = (function (){var statearr_14508 = state_14488;(statearr_14508[14] = inst_14481);
return statearr_14508;
})();var statearr_14509_14531 = state_14488__$1;(statearr_14509_14531[2] = inst_14482);
(statearr_14509_14531[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14489 === 15))
{var inst_14478 = (state_14488[2]);var state_14488__$1 = state_14488;var statearr_14510_14532 = state_14488__$1;(statearr_14510_14532[2] = inst_14478);
(statearr_14510_14532[1] = 14);
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
});})(c__6248__auto___14518,out))
;return ((function (switch__6233__auto__,c__6248__auto___14518,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_14514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14514[0] = state_machine__6234__auto__);
(statearr_14514[1] = 1);
return statearr_14514;
});
var state_machine__6234__auto____1 = (function (state_14488){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_14488);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e14515){if((e14515 instanceof Object))
{var ex__6237__auto__ = e14515;var statearr_14516_14533 = state_14488;(statearr_14516_14533[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14488);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14515;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14534 = state_14488;
state_14488 = G__14534;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_14488){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_14488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___14518,out))
})();var state__6250__auto__ = (function (){var statearr_14517 = f__6249__auto__.call(null);(statearr_14517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___14518);
return statearr_14517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___14518,out))
);
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