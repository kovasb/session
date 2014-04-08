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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11979 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11979 = (function (f,fn_handler,meta11980){
this.f = f;
this.fn_handler = fn_handler;
this.meta11980 = meta11980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11979.cljs$lang$type = true;
cljs.core.async.t11979.cljs$lang$ctorStr = "cljs.core.async/t11979";
cljs.core.async.t11979.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t11979");
});
cljs.core.async.t11979.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11981){var self__ = this;
var _11981__$1 = this;return self__.meta11980;
});
cljs.core.async.t11979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11981,meta11980__$1){var self__ = this;
var _11981__$1 = this;return (new cljs.core.async.t11979(self__.f,self__.fn_handler,meta11980__$1));
});
cljs.core.async.__GT_t11979 = (function __GT_t11979(f__$1,fn_handler__$1,meta11980){return (new cljs.core.async.t11979(f__$1,fn_handler__$1,meta11980));
});
}
return (new cljs.core.async.t11979(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11983 = buff;if(G__11983)
{var bit__4128__auto__ = null;if(cljs.core.truth_((function (){var or__3478__auto__ = bit__4128__auto__;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return G__11983.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11983.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11983);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11983);
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
{var val_11984 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11984);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11984,ret){
return (function (){return fn1.call(null,val_11984);
});})(val_11984,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4326__auto___11985 = n;var x_11986 = 0;while(true){
if((x_11986 < n__4326__auto___11985))
{(a[x_11986] = 0);
{
var G__11987 = (x_11986 + 1);
x_11986 = G__11987;
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
var G__11988 = (i + 1);
i = G__11988;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11992 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11992 = (function (flag,alt_flag,meta11993){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11993 = meta11993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11992.cljs$lang$type = true;
cljs.core.async.t11992.cljs$lang$ctorStr = "cljs.core.async/t11992";
cljs.core.async.t11992.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t11992");
});})(flag))
;
cljs.core.async.t11992.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11994){var self__ = this;
var _11994__$1 = this;return self__.meta11993;
});})(flag))
;
cljs.core.async.t11992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11994,meta11993__$1){var self__ = this;
var _11994__$1 = this;return (new cljs.core.async.t11992(self__.flag,self__.alt_flag,meta11993__$1));
});})(flag))
;
cljs.core.async.__GT_t11992 = ((function (flag){
return (function __GT_t11992(flag__$1,alt_flag__$1,meta11993){return (new cljs.core.async.t11992(flag__$1,alt_flag__$1,meta11993));
});})(flag))
;
}
return (new cljs.core.async.t11992(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11998 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11998 = (function (cb,flag,alt_handler,meta11999){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11999 = meta11999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11998.cljs$lang$type = true;
cljs.core.async.t11998.cljs$lang$ctorStr = "cljs.core.async/t11998";
cljs.core.async.t11998.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t11998");
});
cljs.core.async.t11998.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12000){var self__ = this;
var _12000__$1 = this;return self__.meta11999;
});
cljs.core.async.t11998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12000,meta11999__$1){var self__ = this;
var _12000__$1 = this;return (new cljs.core.async.t11998(self__.cb,self__.flag,self__.alt_handler,meta11999__$1));
});
cljs.core.async.__GT_t11998 = (function __GT_t11998(cb__$1,flag__$1,alt_handler__$1,meta11999){return (new cljs.core.async.t11998(cb__$1,flag__$1,alt_handler__$1,meta11999));
});
}
return (new cljs.core.async.t11998(cb,flag,alt_handler,null));
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
return (function (p1__12001_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12001_SHARP_,port], null));
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
var G__12002 = (i + 1);
i = G__12002;
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
var alts_BANG___delegate = function (ports,p__12003){var map__12005 = p__12003;var map__12005__$1 = ((cljs.core.seq_QMARK_.call(null,map__12005))?cljs.core.apply.call(null,cljs.core.hash_map,map__12005):map__12005);var opts = map__12005__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12003 = null;if (arguments.length > 1) {
  p__12003 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12003);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12006){
var ports = cljs.core.first(arglist__12006);
var p__12003 = cljs.core.rest(arglist__12006);
return alts_BANG___delegate(ports,p__12003);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12014 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12014 = (function (ch,f,map_LT_,meta12015){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12015 = meta12015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12014.cljs$lang$type = true;
cljs.core.async.t12014.cljs$lang$ctorStr = "cljs.core.async/t12014";
cljs.core.async.t12014.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12014");
});
cljs.core.async.t12014.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12014.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12017 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12017 = (function (fn1,_,meta12015,ch,f,map_LT_,meta12018){
this.fn1 = fn1;
this._ = _;
this.meta12015 = meta12015;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12018 = meta12018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12017.cljs$lang$type = true;
cljs.core.async.t12017.cljs$lang$ctorStr = "cljs.core.async/t12017";
cljs.core.async.t12017.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12017");
});})(___$1))
;
cljs.core.async.t12017.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12017.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__12007_SHARP_){return f1.call(null,(((p1__12007_SHARP_ == null))?null:self__.f.call(null,p1__12007_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t12017.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12019){var self__ = this;
var _12019__$1 = this;return self__.meta12018;
});})(___$1))
;
cljs.core.async.t12017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12019,meta12018__$1){var self__ = this;
var _12019__$1 = this;return (new cljs.core.async.t12017(self__.fn1,self__._,self__.meta12015,self__.ch,self__.f,self__.map_LT_,meta12018__$1));
});})(___$1))
;
cljs.core.async.__GT_t12017 = ((function (___$1){
return (function __GT_t12017(fn1__$1,___$2,meta12015__$1,ch__$2,f__$2,map_LT___$2,meta12018){return (new cljs.core.async.t12017(fn1__$1,___$2,meta12015__$1,ch__$2,f__$2,map_LT___$2,meta12018));
});})(___$1))
;
}
return (new cljs.core.async.t12017(fn1,___$1,self__.meta12015,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12014.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12016){var self__ = this;
var _12016__$1 = this;return self__.meta12015;
});
cljs.core.async.t12014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12016,meta12015__$1){var self__ = this;
var _12016__$1 = this;return (new cljs.core.async.t12014(self__.ch,self__.f,self__.map_LT_,meta12015__$1));
});
cljs.core.async.__GT_t12014 = (function __GT_t12014(ch__$1,f__$1,map_LT___$1,meta12015){return (new cljs.core.async.t12014(ch__$1,f__$1,map_LT___$1,meta12015));
});
}
return (new cljs.core.async.t12014(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12023 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12023 = (function (ch,f,map_GT_,meta12024){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12024 = meta12024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12023.cljs$lang$type = true;
cljs.core.async.t12023.cljs$lang$ctorStr = "cljs.core.async/t12023";
cljs.core.async.t12023.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12023");
});
cljs.core.async.t12023.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12023.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12023.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12025){var self__ = this;
var _12025__$1 = this;return self__.meta12024;
});
cljs.core.async.t12023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12025,meta12024__$1){var self__ = this;
var _12025__$1 = this;return (new cljs.core.async.t12023(self__.ch,self__.f,self__.map_GT_,meta12024__$1));
});
cljs.core.async.__GT_t12023 = (function __GT_t12023(ch__$1,f__$1,map_GT___$1,meta12024){return (new cljs.core.async.t12023(ch__$1,f__$1,map_GT___$1,meta12024));
});
}
return (new cljs.core.async.t12023(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12029 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12029 = (function (ch,p,filter_GT_,meta12030){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12030 = meta12030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12029.cljs$lang$type = true;
cljs.core.async.t12029.cljs$lang$ctorStr = "cljs.core.async/t12029";
cljs.core.async.t12029.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12029");
});
cljs.core.async.t12029.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12029.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12029.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12029.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12029.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12029.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12031){var self__ = this;
var _12031__$1 = this;return self__.meta12030;
});
cljs.core.async.t12029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12031,meta12030__$1){var self__ = this;
var _12031__$1 = this;return (new cljs.core.async.t12029(self__.ch,self__.p,self__.filter_GT_,meta12030__$1));
});
cljs.core.async.__GT_t12029 = (function __GT_t12029(ch__$1,p__$1,filter_GT___$1,meta12030){return (new cljs.core.async.t12029(ch__$1,p__$1,filter_GT___$1,meta12030));
});
}
return (new cljs.core.async.t12029(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___12114 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___12114,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___12114,out){
return (function (state_12093){var state_val_12094 = (state_12093[1]);if((state_val_12094 === 1))
{var state_12093__$1 = state_12093;var statearr_12095_12115 = state_12093__$1;(statearr_12095_12115[2] = null);
(statearr_12095_12115[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12094 === 2))
{var state_12093__$1 = state_12093;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12093__$1,4,ch);
} else
{if((state_val_12094 === 3))
{var inst_12091 = (state_12093[2]);var state_12093__$1 = state_12093;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12093__$1,inst_12091);
} else
{if((state_val_12094 === 4))
{var inst_12075 = (state_12093[7]);var inst_12075__$1 = (state_12093[2]);var inst_12076 = (inst_12075__$1 == null);var state_12093__$1 = (function (){var statearr_12096 = state_12093;(statearr_12096[7] = inst_12075__$1);
return statearr_12096;
})();if(cljs.core.truth_(inst_12076))
{var statearr_12097_12116 = state_12093__$1;(statearr_12097_12116[1] = 5);
} else
{var statearr_12098_12117 = state_12093__$1;(statearr_12098_12117[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12094 === 5))
{var inst_12078 = cljs.core.async.close_BANG_.call(null,out);var state_12093__$1 = state_12093;var statearr_12099_12118 = state_12093__$1;(statearr_12099_12118[2] = inst_12078);
(statearr_12099_12118[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12094 === 6))
{var inst_12075 = (state_12093[7]);var inst_12080 = p.call(null,inst_12075);var state_12093__$1 = state_12093;if(cljs.core.truth_(inst_12080))
{var statearr_12100_12119 = state_12093__$1;(statearr_12100_12119[1] = 8);
} else
{var statearr_12101_12120 = state_12093__$1;(statearr_12101_12120[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12094 === 7))
{var inst_12089 = (state_12093[2]);var state_12093__$1 = state_12093;var statearr_12102_12121 = state_12093__$1;(statearr_12102_12121[2] = inst_12089);
(statearr_12102_12121[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12094 === 8))
{var inst_12075 = (state_12093[7]);var state_12093__$1 = state_12093;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12093__$1,11,out,inst_12075);
} else
{if((state_val_12094 === 9))
{var state_12093__$1 = state_12093;var statearr_12103_12122 = state_12093__$1;(statearr_12103_12122[2] = null);
(statearr_12103_12122[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12094 === 10))
{var inst_12086 = (state_12093[2]);var state_12093__$1 = (function (){var statearr_12104 = state_12093;(statearr_12104[8] = inst_12086);
return statearr_12104;
})();var statearr_12105_12123 = state_12093__$1;(statearr_12105_12123[2] = null);
(statearr_12105_12123[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12094 === 11))
{var inst_12083 = (state_12093[2]);var state_12093__$1 = state_12093;var statearr_12106_12124 = state_12093__$1;(statearr_12106_12124[2] = inst_12083);
(statearr_12106_12124[1] = 10);
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
});})(c__6248__auto___12114,out))
;return ((function (switch__6233__auto__,c__6248__auto___12114,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12110 = [null,null,null,null,null,null,null,null,null];(statearr_12110[0] = state_machine__6234__auto__);
(statearr_12110[1] = 1);
return statearr_12110;
});
var state_machine__6234__auto____1 = (function (state_12093){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12093);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12111){if((e12111 instanceof Object))
{var ex__6237__auto__ = e12111;var statearr_12112_12125 = state_12093;(statearr_12112_12125[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12093);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12111;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12126 = state_12093;
state_12093 = G__12126;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12093){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___12114,out))
})();var state__6250__auto__ = (function (){var statearr_12113 = f__6249__auto__.call(null);(statearr_12113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___12114);
return statearr_12113;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___12114,out))
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
return (function (state_12278){var state_val_12279 = (state_12278[1]);if((state_val_12279 === 1))
{var state_12278__$1 = state_12278;var statearr_12280_12317 = state_12278__$1;(statearr_12280_12317[2] = null);
(statearr_12280_12317[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 2))
{var state_12278__$1 = state_12278;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12278__$1,4,in$);
} else
{if((state_val_12279 === 3))
{var inst_12276 = (state_12278[2]);var state_12278__$1 = state_12278;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12278__$1,inst_12276);
} else
{if((state_val_12279 === 4))
{var inst_12224 = (state_12278[7]);var inst_12224__$1 = (state_12278[2]);var inst_12225 = (inst_12224__$1 == null);var state_12278__$1 = (function (){var statearr_12281 = state_12278;(statearr_12281[7] = inst_12224__$1);
return statearr_12281;
})();if(cljs.core.truth_(inst_12225))
{var statearr_12282_12318 = state_12278__$1;(statearr_12282_12318[1] = 5);
} else
{var statearr_12283_12319 = state_12278__$1;(statearr_12283_12319[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 5))
{var inst_12227 = cljs.core.async.close_BANG_.call(null,out);var state_12278__$1 = state_12278;var statearr_12284_12320 = state_12278__$1;(statearr_12284_12320[2] = inst_12227);
(statearr_12284_12320[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 6))
{var inst_12224 = (state_12278[7]);var inst_12229 = f.call(null,inst_12224);var inst_12234 = cljs.core.seq.call(null,inst_12229);var inst_12235 = inst_12234;var inst_12236 = null;var inst_12237 = 0;var inst_12238 = 0;var state_12278__$1 = (function (){var statearr_12285 = state_12278;(statearr_12285[8] = inst_12236);
(statearr_12285[9] = inst_12235);
(statearr_12285[10] = inst_12237);
(statearr_12285[11] = inst_12238);
return statearr_12285;
})();var statearr_12286_12321 = state_12278__$1;(statearr_12286_12321[2] = null);
(statearr_12286_12321[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 7))
{var inst_12274 = (state_12278[2]);var state_12278__$1 = state_12278;var statearr_12287_12322 = state_12278__$1;(statearr_12287_12322[2] = inst_12274);
(statearr_12287_12322[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 8))
{var inst_12237 = (state_12278[10]);var inst_12238 = (state_12278[11]);var inst_12240 = (inst_12238 < inst_12237);var inst_12241 = inst_12240;var state_12278__$1 = state_12278;if(cljs.core.truth_(inst_12241))
{var statearr_12288_12323 = state_12278__$1;(statearr_12288_12323[1] = 10);
} else
{var statearr_12289_12324 = state_12278__$1;(statearr_12289_12324[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 9))
{var inst_12271 = (state_12278[2]);var state_12278__$1 = (function (){var statearr_12290 = state_12278;(statearr_12290[12] = inst_12271);
return statearr_12290;
})();var statearr_12291_12325 = state_12278__$1;(statearr_12291_12325[2] = null);
(statearr_12291_12325[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 10))
{var inst_12236 = (state_12278[8]);var inst_12238 = (state_12278[11]);var inst_12243 = cljs.core._nth.call(null,inst_12236,inst_12238);var state_12278__$1 = state_12278;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12278__$1,13,out,inst_12243);
} else
{if((state_val_12279 === 11))
{var inst_12235 = (state_12278[9]);var inst_12249 = (state_12278[13]);var inst_12249__$1 = cljs.core.seq.call(null,inst_12235);var state_12278__$1 = (function (){var statearr_12295 = state_12278;(statearr_12295[13] = inst_12249__$1);
return statearr_12295;
})();if(inst_12249__$1)
{var statearr_12296_12326 = state_12278__$1;(statearr_12296_12326[1] = 14);
} else
{var statearr_12297_12327 = state_12278__$1;(statearr_12297_12327[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 12))
{var inst_12269 = (state_12278[2]);var state_12278__$1 = state_12278;var statearr_12298_12328 = state_12278__$1;(statearr_12298_12328[2] = inst_12269);
(statearr_12298_12328[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 13))
{var inst_12236 = (state_12278[8]);var inst_12235 = (state_12278[9]);var inst_12237 = (state_12278[10]);var inst_12238 = (state_12278[11]);var inst_12245 = (state_12278[2]);var inst_12246 = (inst_12238 + 1);var tmp12292 = inst_12236;var tmp12293 = inst_12235;var tmp12294 = inst_12237;var inst_12235__$1 = tmp12293;var inst_12236__$1 = tmp12292;var inst_12237__$1 = tmp12294;var inst_12238__$1 = inst_12246;var state_12278__$1 = (function (){var statearr_12299 = state_12278;(statearr_12299[8] = inst_12236__$1);
(statearr_12299[9] = inst_12235__$1);
(statearr_12299[10] = inst_12237__$1);
(statearr_12299[11] = inst_12238__$1);
(statearr_12299[14] = inst_12245);
return statearr_12299;
})();var statearr_12300_12329 = state_12278__$1;(statearr_12300_12329[2] = null);
(statearr_12300_12329[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 14))
{var inst_12249 = (state_12278[13]);var inst_12251 = cljs.core.chunked_seq_QMARK_.call(null,inst_12249);var state_12278__$1 = state_12278;if(inst_12251)
{var statearr_12301_12330 = state_12278__$1;(statearr_12301_12330[1] = 17);
} else
{var statearr_12302_12331 = state_12278__$1;(statearr_12302_12331[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 15))
{var state_12278__$1 = state_12278;var statearr_12303_12332 = state_12278__$1;(statearr_12303_12332[2] = null);
(statearr_12303_12332[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 16))
{var inst_12267 = (state_12278[2]);var state_12278__$1 = state_12278;var statearr_12304_12333 = state_12278__$1;(statearr_12304_12333[2] = inst_12267);
(statearr_12304_12333[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 17))
{var inst_12249 = (state_12278[13]);var inst_12253 = cljs.core.chunk_first.call(null,inst_12249);var inst_12254 = cljs.core.chunk_rest.call(null,inst_12249);var inst_12255 = cljs.core.count.call(null,inst_12253);var inst_12235 = inst_12254;var inst_12236 = inst_12253;var inst_12237 = inst_12255;var inst_12238 = 0;var state_12278__$1 = (function (){var statearr_12305 = state_12278;(statearr_12305[8] = inst_12236);
(statearr_12305[9] = inst_12235);
(statearr_12305[10] = inst_12237);
(statearr_12305[11] = inst_12238);
return statearr_12305;
})();var statearr_12306_12334 = state_12278__$1;(statearr_12306_12334[2] = null);
(statearr_12306_12334[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 18))
{var inst_12249 = (state_12278[13]);var inst_12258 = cljs.core.first.call(null,inst_12249);var state_12278__$1 = state_12278;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12278__$1,20,out,inst_12258);
} else
{if((state_val_12279 === 19))
{var inst_12264 = (state_12278[2]);var state_12278__$1 = state_12278;var statearr_12307_12335 = state_12278__$1;(statearr_12307_12335[2] = inst_12264);
(statearr_12307_12335[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12279 === 20))
{var inst_12249 = (state_12278[13]);var inst_12260 = (state_12278[2]);var inst_12261 = cljs.core.next.call(null,inst_12249);var inst_12235 = inst_12261;var inst_12236 = null;var inst_12237 = 0;var inst_12238 = 0;var state_12278__$1 = (function (){var statearr_12308 = state_12278;(statearr_12308[8] = inst_12236);
(statearr_12308[9] = inst_12235);
(statearr_12308[15] = inst_12260);
(statearr_12308[10] = inst_12237);
(statearr_12308[11] = inst_12238);
return statearr_12308;
})();var statearr_12309_12336 = state_12278__$1;(statearr_12309_12336[2] = null);
(statearr_12309_12336[1] = 8);
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
var state_machine__6234__auto____0 = (function (){var statearr_12313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12313[0] = state_machine__6234__auto__);
(statearr_12313[1] = 1);
return statearr_12313;
});
var state_machine__6234__auto____1 = (function (state_12278){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12278);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12314){if((e12314 instanceof Object))
{var ex__6237__auto__ = e12314;var statearr_12315_12337 = state_12278;(statearr_12315_12337[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12278);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12314;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12338 = state_12278;
state_12278 = G__12338;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12278){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__))
})();var state__6250__auto__ = (function (){var statearr_12316 = f__6249__auto__.call(null);(statearr_12316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_12316;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6248__auto___12419 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___12419){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___12419){
return (function (state_12398){var state_val_12399 = (state_12398[1]);if((state_val_12399 === 1))
{var state_12398__$1 = state_12398;var statearr_12400_12420 = state_12398__$1;(statearr_12400_12420[2] = null);
(statearr_12400_12420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12399 === 2))
{var state_12398__$1 = state_12398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12398__$1,4,from);
} else
{if((state_val_12399 === 3))
{var inst_12396 = (state_12398[2]);var state_12398__$1 = state_12398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12398__$1,inst_12396);
} else
{if((state_val_12399 === 4))
{var inst_12381 = (state_12398[7]);var inst_12381__$1 = (state_12398[2]);var inst_12382 = (inst_12381__$1 == null);var state_12398__$1 = (function (){var statearr_12401 = state_12398;(statearr_12401[7] = inst_12381__$1);
return statearr_12401;
})();if(cljs.core.truth_(inst_12382))
{var statearr_12402_12421 = state_12398__$1;(statearr_12402_12421[1] = 5);
} else
{var statearr_12403_12422 = state_12398__$1;(statearr_12403_12422[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12399 === 5))
{var state_12398__$1 = state_12398;if(cljs.core.truth_(close_QMARK_))
{var statearr_12404_12423 = state_12398__$1;(statearr_12404_12423[1] = 8);
} else
{var statearr_12405_12424 = state_12398__$1;(statearr_12405_12424[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12399 === 6))
{var inst_12381 = (state_12398[7]);var state_12398__$1 = state_12398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12398__$1,11,to,inst_12381);
} else
{if((state_val_12399 === 7))
{var inst_12394 = (state_12398[2]);var state_12398__$1 = state_12398;var statearr_12406_12425 = state_12398__$1;(statearr_12406_12425[2] = inst_12394);
(statearr_12406_12425[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12399 === 8))
{var inst_12385 = cljs.core.async.close_BANG_.call(null,to);var state_12398__$1 = state_12398;var statearr_12407_12426 = state_12398__$1;(statearr_12407_12426[2] = inst_12385);
(statearr_12407_12426[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12399 === 9))
{var state_12398__$1 = state_12398;var statearr_12408_12427 = state_12398__$1;(statearr_12408_12427[2] = null);
(statearr_12408_12427[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12399 === 10))
{var inst_12388 = (state_12398[2]);var state_12398__$1 = state_12398;var statearr_12409_12428 = state_12398__$1;(statearr_12409_12428[2] = inst_12388);
(statearr_12409_12428[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12399 === 11))
{var inst_12391 = (state_12398[2]);var state_12398__$1 = (function (){var statearr_12410 = state_12398;(statearr_12410[8] = inst_12391);
return statearr_12410;
})();var statearr_12411_12429 = state_12398__$1;(statearr_12411_12429[2] = null);
(statearr_12411_12429[1] = 2);
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
});})(c__6248__auto___12419))
;return ((function (switch__6233__auto__,c__6248__auto___12419){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12415 = [null,null,null,null,null,null,null,null,null];(statearr_12415[0] = state_machine__6234__auto__);
(statearr_12415[1] = 1);
return statearr_12415;
});
var state_machine__6234__auto____1 = (function (state_12398){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12398);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12416){if((e12416 instanceof Object))
{var ex__6237__auto__ = e12416;var statearr_12417_12430 = state_12398;(statearr_12417_12430[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12398);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12431 = state_12398;
state_12398 = G__12431;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12398){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___12419))
})();var state__6250__auto__ = (function (){var statearr_12418 = f__6249__auto__.call(null);(statearr_12418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___12419);
return statearr_12418;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___12419))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6248__auto___12518 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___12518,tc,fc){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___12518,tc,fc){
return (function (state_12496){var state_val_12497 = (state_12496[1]);if((state_val_12497 === 1))
{var state_12496__$1 = state_12496;var statearr_12498_12519 = state_12496__$1;(statearr_12498_12519[2] = null);
(statearr_12498_12519[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12497 === 2))
{var state_12496__$1 = state_12496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12496__$1,4,ch);
} else
{if((state_val_12497 === 3))
{var inst_12494 = (state_12496[2]);var state_12496__$1 = state_12496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12496__$1,inst_12494);
} else
{if((state_val_12497 === 4))
{var inst_12477 = (state_12496[7]);var inst_12477__$1 = (state_12496[2]);var inst_12478 = (inst_12477__$1 == null);var state_12496__$1 = (function (){var statearr_12499 = state_12496;(statearr_12499[7] = inst_12477__$1);
return statearr_12499;
})();if(cljs.core.truth_(inst_12478))
{var statearr_12500_12520 = state_12496__$1;(statearr_12500_12520[1] = 5);
} else
{var statearr_12501_12521 = state_12496__$1;(statearr_12501_12521[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12497 === 5))
{var inst_12480 = cljs.core.async.close_BANG_.call(null,tc);var inst_12481 = cljs.core.async.close_BANG_.call(null,fc);var state_12496__$1 = (function (){var statearr_12502 = state_12496;(statearr_12502[8] = inst_12480);
return statearr_12502;
})();var statearr_12503_12522 = state_12496__$1;(statearr_12503_12522[2] = inst_12481);
(statearr_12503_12522[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12497 === 6))
{var inst_12477 = (state_12496[7]);var inst_12483 = p.call(null,inst_12477);var state_12496__$1 = state_12496;if(cljs.core.truth_(inst_12483))
{var statearr_12504_12523 = state_12496__$1;(statearr_12504_12523[1] = 9);
} else
{var statearr_12505_12524 = state_12496__$1;(statearr_12505_12524[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12497 === 7))
{var inst_12492 = (state_12496[2]);var state_12496__$1 = state_12496;var statearr_12506_12525 = state_12496__$1;(statearr_12506_12525[2] = inst_12492);
(statearr_12506_12525[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12497 === 8))
{var inst_12489 = (state_12496[2]);var state_12496__$1 = (function (){var statearr_12507 = state_12496;(statearr_12507[9] = inst_12489);
return statearr_12507;
})();var statearr_12508_12526 = state_12496__$1;(statearr_12508_12526[2] = null);
(statearr_12508_12526[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12497 === 9))
{var state_12496__$1 = state_12496;var statearr_12509_12527 = state_12496__$1;(statearr_12509_12527[2] = tc);
(statearr_12509_12527[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12497 === 10))
{var state_12496__$1 = state_12496;var statearr_12510_12528 = state_12496__$1;(statearr_12510_12528[2] = fc);
(statearr_12510_12528[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12497 === 11))
{var inst_12477 = (state_12496[7]);var inst_12487 = (state_12496[2]);var state_12496__$1 = state_12496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12496__$1,8,inst_12487,inst_12477);
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
});})(c__6248__auto___12518,tc,fc))
;return ((function (switch__6233__auto__,c__6248__auto___12518,tc,fc){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12514 = [null,null,null,null,null,null,null,null,null,null];(statearr_12514[0] = state_machine__6234__auto__);
(statearr_12514[1] = 1);
return statearr_12514;
});
var state_machine__6234__auto____1 = (function (state_12496){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12496);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12515){if((e12515 instanceof Object))
{var ex__6237__auto__ = e12515;var statearr_12516_12529 = state_12496;(statearr_12516_12529[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12496);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12515;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12530 = state_12496;
state_12496 = G__12530;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12496){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___12518,tc,fc))
})();var state__6250__auto__ = (function (){var statearr_12517 = f__6249__auto__.call(null);(statearr_12517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___12518);
return statearr_12517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___12518,tc,fc))
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
return (function (state_12577){var state_val_12578 = (state_12577[1]);if((state_val_12578 === 7))
{var inst_12573 = (state_12577[2]);var state_12577__$1 = state_12577;var statearr_12579_12595 = state_12577__$1;(statearr_12579_12595[2] = inst_12573);
(statearr_12579_12595[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12578 === 6))
{var inst_12566 = (state_12577[7]);var inst_12563 = (state_12577[8]);var inst_12570 = f.call(null,inst_12563,inst_12566);var inst_12563__$1 = inst_12570;var state_12577__$1 = (function (){var statearr_12580 = state_12577;(statearr_12580[8] = inst_12563__$1);
return statearr_12580;
})();var statearr_12581_12596 = state_12577__$1;(statearr_12581_12596[2] = null);
(statearr_12581_12596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12578 === 5))
{var inst_12563 = (state_12577[8]);var state_12577__$1 = state_12577;var statearr_12582_12597 = state_12577__$1;(statearr_12582_12597[2] = inst_12563);
(statearr_12582_12597[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12578 === 4))
{var inst_12566 = (state_12577[7]);var inst_12566__$1 = (state_12577[2]);var inst_12567 = (inst_12566__$1 == null);var state_12577__$1 = (function (){var statearr_12583 = state_12577;(statearr_12583[7] = inst_12566__$1);
return statearr_12583;
})();if(cljs.core.truth_(inst_12567))
{var statearr_12584_12598 = state_12577__$1;(statearr_12584_12598[1] = 5);
} else
{var statearr_12585_12599 = state_12577__$1;(statearr_12585_12599[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12578 === 3))
{var inst_12575 = (state_12577[2]);var state_12577__$1 = state_12577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12577__$1,inst_12575);
} else
{if((state_val_12578 === 2))
{var state_12577__$1 = state_12577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12577__$1,4,ch);
} else
{if((state_val_12578 === 1))
{var inst_12563 = init;var state_12577__$1 = (function (){var statearr_12586 = state_12577;(statearr_12586[8] = inst_12563);
return statearr_12586;
})();var statearr_12587_12600 = state_12577__$1;(statearr_12587_12600[2] = null);
(statearr_12587_12600[1] = 2);
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
var state_machine__6234__auto____0 = (function (){var statearr_12591 = [null,null,null,null,null,null,null,null,null];(statearr_12591[0] = state_machine__6234__auto__);
(statearr_12591[1] = 1);
return statearr_12591;
});
var state_machine__6234__auto____1 = (function (state_12577){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12577);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12592){if((e12592 instanceof Object))
{var ex__6237__auto__ = e12592;var statearr_12593_12601 = state_12577;(statearr_12593_12601[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12577);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12602 = state_12577;
state_12577 = G__12602;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12577){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__))
})();var state__6250__auto__ = (function (){var statearr_12594 = f__6249__auto__.call(null);(statearr_12594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_12594;
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
return (function (state_12664){var state_val_12665 = (state_12664[1]);if((state_val_12665 === 1))
{var inst_12644 = cljs.core.seq.call(null,coll);var inst_12645 = inst_12644;var state_12664__$1 = (function (){var statearr_12666 = state_12664;(statearr_12666[7] = inst_12645);
return statearr_12666;
})();var statearr_12667_12685 = state_12664__$1;(statearr_12667_12685[2] = null);
(statearr_12667_12685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12665 === 2))
{var inst_12645 = (state_12664[7]);var state_12664__$1 = state_12664;if(cljs.core.truth_(inst_12645))
{var statearr_12668_12686 = state_12664__$1;(statearr_12668_12686[1] = 4);
} else
{var statearr_12669_12687 = state_12664__$1;(statearr_12669_12687[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12665 === 3))
{var inst_12662 = (state_12664[2]);var state_12664__$1 = state_12664;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12664__$1,inst_12662);
} else
{if((state_val_12665 === 4))
{var inst_12645 = (state_12664[7]);var inst_12648 = cljs.core.first.call(null,inst_12645);var state_12664__$1 = state_12664;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12664__$1,7,ch,inst_12648);
} else
{if((state_val_12665 === 5))
{var state_12664__$1 = state_12664;if(cljs.core.truth_(close_QMARK_))
{var statearr_12670_12688 = state_12664__$1;(statearr_12670_12688[1] = 8);
} else
{var statearr_12671_12689 = state_12664__$1;(statearr_12671_12689[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12665 === 6))
{var inst_12660 = (state_12664[2]);var state_12664__$1 = state_12664;var statearr_12672_12690 = state_12664__$1;(statearr_12672_12690[2] = inst_12660);
(statearr_12672_12690[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12665 === 7))
{var inst_12645 = (state_12664[7]);var inst_12650 = (state_12664[2]);var inst_12651 = cljs.core.next.call(null,inst_12645);var inst_12645__$1 = inst_12651;var state_12664__$1 = (function (){var statearr_12673 = state_12664;(statearr_12673[7] = inst_12645__$1);
(statearr_12673[8] = inst_12650);
return statearr_12673;
})();var statearr_12674_12691 = state_12664__$1;(statearr_12674_12691[2] = null);
(statearr_12674_12691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12665 === 8))
{var inst_12655 = cljs.core.async.close_BANG_.call(null,ch);var state_12664__$1 = state_12664;var statearr_12675_12692 = state_12664__$1;(statearr_12675_12692[2] = inst_12655);
(statearr_12675_12692[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12665 === 9))
{var state_12664__$1 = state_12664;var statearr_12676_12693 = state_12664__$1;(statearr_12676_12693[2] = null);
(statearr_12676_12693[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12665 === 10))
{var inst_12658 = (state_12664[2]);var state_12664__$1 = state_12664;var statearr_12677_12694 = state_12664__$1;(statearr_12677_12694[2] = inst_12658);
(statearr_12677_12694[1] = 6);
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
var state_machine__6234__auto____0 = (function (){var statearr_12681 = [null,null,null,null,null,null,null,null,null];(statearr_12681[0] = state_machine__6234__auto__);
(statearr_12681[1] = 1);
return statearr_12681;
});
var state_machine__6234__auto____1 = (function (state_12664){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12664);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12682){if((e12682 instanceof Object))
{var ex__6237__auto__ = e12682;var statearr_12683_12695 = state_12664;(statearr_12683_12695[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12664);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12696 = state_12664;
state_12664 = G__12696;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12664){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__))
})();var state__6250__auto__ = (function (){var statearr_12684 = f__6249__auto__.call(null);(statearr_12684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_12684;
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
cljs.core.async.Mux = (function (){var obj12698 = {};return obj12698;
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
cljs.core.async.Mult = (function (){var obj12700 = {};return obj12700;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12924 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12924 = (function (cs,ch,mult,meta12925){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12925 = meta12925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12924.cljs$lang$type = true;
cljs.core.async.t12924.cljs$lang$ctorStr = "cljs.core.async/t12924";
cljs.core.async.t12924.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12924");
});})(cs))
;
cljs.core.async.t12924.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12924.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12924.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12924.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12924.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12924.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12926){var self__ = this;
var _12926__$1 = this;return self__.meta12925;
});})(cs))
;
cljs.core.async.t12924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12926,meta12925__$1){var self__ = this;
var _12926__$1 = this;return (new cljs.core.async.t12924(self__.cs,self__.ch,self__.mult,meta12925__$1));
});})(cs))
;
cljs.core.async.__GT_t12924 = ((function (cs){
return (function __GT_t12924(cs__$1,ch__$1,mult__$1,meta12925){return (new cljs.core.async.t12924(cs__$1,ch__$1,mult__$1,meta12925));
});})(cs))
;
}
return (new cljs.core.async.t12924(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6248__auto___13147 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13147,cs,m,dchan,dctr,done){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13147,cs,m,dchan,dctr,done){
return (function (state_13061){var state_val_13062 = (state_13061[1]);if((state_val_13062 === 32))
{var inst_13005 = (state_13061[7]);var inst_12929 = (state_13061[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13061,31,Object,null,30);var inst_13012 = cljs.core.async.put_BANG_.call(null,inst_13005,inst_12929,done);var state_13061__$1 = state_13061;var statearr_13063_13148 = state_13061__$1;(statearr_13063_13148[2] = inst_13012);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13061__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 1))
{var state_13061__$1 = state_13061;var statearr_13064_13149 = state_13061__$1;(statearr_13064_13149[2] = null);
(statearr_13064_13149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 33))
{var inst_13018 = (state_13061[9]);var inst_13020 = cljs.core.chunked_seq_QMARK_.call(null,inst_13018);var state_13061__$1 = state_13061;if(inst_13020)
{var statearr_13065_13150 = state_13061__$1;(statearr_13065_13150[1] = 36);
} else
{var statearr_13066_13151 = state_13061__$1;(statearr_13066_13151[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 2))
{var state_13061__$1 = state_13061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13061__$1,4,ch);
} else
{if((state_val_13062 === 34))
{var state_13061__$1 = state_13061;var statearr_13067_13152 = state_13061__$1;(statearr_13067_13152[2] = null);
(statearr_13067_13152[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 3))
{var inst_13059 = (state_13061[2]);var state_13061__$1 = state_13061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13061__$1,inst_13059);
} else
{if((state_val_13062 === 35))
{var inst_13043 = (state_13061[2]);var state_13061__$1 = state_13061;var statearr_13068_13153 = state_13061__$1;(statearr_13068_13153[2] = inst_13043);
(statearr_13068_13153[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 4))
{var inst_12929 = (state_13061[8]);var inst_12929__$1 = (state_13061[2]);var inst_12930 = (inst_12929__$1 == null);var state_13061__$1 = (function (){var statearr_13069 = state_13061;(statearr_13069[8] = inst_12929__$1);
return statearr_13069;
})();if(cljs.core.truth_(inst_12930))
{var statearr_13070_13154 = state_13061__$1;(statearr_13070_13154[1] = 5);
} else
{var statearr_13071_13155 = state_13061__$1;(statearr_13071_13155[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 36))
{var inst_13018 = (state_13061[9]);var inst_13022 = cljs.core.chunk_first.call(null,inst_13018);var inst_13023 = cljs.core.chunk_rest.call(null,inst_13018);var inst_13024 = cljs.core.count.call(null,inst_13022);var inst_12997 = inst_13023;var inst_12998 = inst_13022;var inst_12999 = inst_13024;var inst_13000 = 0;var state_13061__$1 = (function (){var statearr_13072 = state_13061;(statearr_13072[10] = inst_13000);
(statearr_13072[11] = inst_12997);
(statearr_13072[12] = inst_12998);
(statearr_13072[13] = inst_12999);
return statearr_13072;
})();var statearr_13073_13156 = state_13061__$1;(statearr_13073_13156[2] = null);
(statearr_13073_13156[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 5))
{var inst_12936 = cljs.core.deref.call(null,cs);var inst_12937 = cljs.core.seq.call(null,inst_12936);var inst_12938 = inst_12937;var inst_12939 = null;var inst_12940 = 0;var inst_12941 = 0;var state_13061__$1 = (function (){var statearr_13074 = state_13061;(statearr_13074[14] = inst_12941);
(statearr_13074[15] = inst_12940);
(statearr_13074[16] = inst_12938);
(statearr_13074[17] = inst_12939);
return statearr_13074;
})();var statearr_13075_13157 = state_13061__$1;(statearr_13075_13157[2] = null);
(statearr_13075_13157[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 37))
{var inst_13018 = (state_13061[9]);var inst_13027 = cljs.core.first.call(null,inst_13018);var state_13061__$1 = (function (){var statearr_13076 = state_13061;(statearr_13076[18] = inst_13027);
return statearr_13076;
})();var statearr_13077_13158 = state_13061__$1;(statearr_13077_13158[2] = null);
(statearr_13077_13158[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 6))
{var inst_12989 = (state_13061[19]);var inst_12988 = cljs.core.deref.call(null,cs);var inst_12989__$1 = cljs.core.keys.call(null,inst_12988);var inst_12990 = cljs.core.count.call(null,inst_12989__$1);var inst_12991 = cljs.core.reset_BANG_.call(null,dctr,inst_12990);var inst_12996 = cljs.core.seq.call(null,inst_12989__$1);var inst_12997 = inst_12996;var inst_12998 = null;var inst_12999 = 0;var inst_13000 = 0;var state_13061__$1 = (function (){var statearr_13078 = state_13061;(statearr_13078[20] = inst_12991);
(statearr_13078[10] = inst_13000);
(statearr_13078[19] = inst_12989__$1);
(statearr_13078[11] = inst_12997);
(statearr_13078[12] = inst_12998);
(statearr_13078[13] = inst_12999);
return statearr_13078;
})();var statearr_13079_13159 = state_13061__$1;(statearr_13079_13159[2] = null);
(statearr_13079_13159[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 38))
{var inst_13040 = (state_13061[2]);var state_13061__$1 = state_13061;var statearr_13080_13160 = state_13061__$1;(statearr_13080_13160[2] = inst_13040);
(statearr_13080_13160[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 7))
{var inst_13057 = (state_13061[2]);var state_13061__$1 = state_13061;var statearr_13081_13161 = state_13061__$1;(statearr_13081_13161[2] = inst_13057);
(statearr_13081_13161[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 39))
{var inst_13018 = (state_13061[9]);var inst_13036 = (state_13061[2]);var inst_13037 = cljs.core.next.call(null,inst_13018);var inst_12997 = inst_13037;var inst_12998 = null;var inst_12999 = 0;var inst_13000 = 0;var state_13061__$1 = (function (){var statearr_13082 = state_13061;(statearr_13082[10] = inst_13000);
(statearr_13082[21] = inst_13036);
(statearr_13082[11] = inst_12997);
(statearr_13082[12] = inst_12998);
(statearr_13082[13] = inst_12999);
return statearr_13082;
})();var statearr_13083_13162 = state_13061__$1;(statearr_13083_13162[2] = null);
(statearr_13083_13162[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 8))
{var inst_12941 = (state_13061[14]);var inst_12940 = (state_13061[15]);var inst_12943 = (inst_12941 < inst_12940);var inst_12944 = inst_12943;var state_13061__$1 = state_13061;if(cljs.core.truth_(inst_12944))
{var statearr_13084_13163 = state_13061__$1;(statearr_13084_13163[1] = 10);
} else
{var statearr_13085_13164 = state_13061__$1;(statearr_13085_13164[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 40))
{var inst_13027 = (state_13061[18]);var inst_13028 = (state_13061[2]);var inst_13029 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13030 = cljs.core.async.untap_STAR_.call(null,m,inst_13027);var state_13061__$1 = (function (){var statearr_13086 = state_13061;(statearr_13086[22] = inst_13029);
(statearr_13086[23] = inst_13028);
return statearr_13086;
})();var statearr_13087_13165 = state_13061__$1;(statearr_13087_13165[2] = inst_13030);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13061__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 9))
{var inst_12986 = (state_13061[2]);var state_13061__$1 = state_13061;var statearr_13088_13166 = state_13061__$1;(statearr_13088_13166[2] = inst_12986);
(statearr_13088_13166[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 41))
{var inst_12929 = (state_13061[8]);var inst_13027 = (state_13061[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13061,40,Object,null,39);var inst_13034 = cljs.core.async.put_BANG_.call(null,inst_13027,inst_12929,done);var state_13061__$1 = state_13061;var statearr_13089_13167 = state_13061__$1;(statearr_13089_13167[2] = inst_13034);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13061__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 10))
{var inst_12941 = (state_13061[14]);var inst_12939 = (state_13061[17]);var inst_12947 = cljs.core._nth.call(null,inst_12939,inst_12941);var inst_12948 = cljs.core.nth.call(null,inst_12947,0,null);var inst_12949 = cljs.core.nth.call(null,inst_12947,1,null);var state_13061__$1 = (function (){var statearr_13090 = state_13061;(statearr_13090[24] = inst_12948);
return statearr_13090;
})();if(cljs.core.truth_(inst_12949))
{var statearr_13091_13168 = state_13061__$1;(statearr_13091_13168[1] = 13);
} else
{var statearr_13092_13169 = state_13061__$1;(statearr_13092_13169[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 42))
{var state_13061__$1 = state_13061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13061__$1,45,dchan);
} else
{if((state_val_13062 === 11))
{var inst_12958 = (state_13061[25]);var inst_12938 = (state_13061[16]);var inst_12958__$1 = cljs.core.seq.call(null,inst_12938);var state_13061__$1 = (function (){var statearr_13093 = state_13061;(statearr_13093[25] = inst_12958__$1);
return statearr_13093;
})();if(inst_12958__$1)
{var statearr_13094_13170 = state_13061__$1;(statearr_13094_13170[1] = 16);
} else
{var statearr_13095_13171 = state_13061__$1;(statearr_13095_13171[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 43))
{var state_13061__$1 = state_13061;var statearr_13096_13172 = state_13061__$1;(statearr_13096_13172[2] = null);
(statearr_13096_13172[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 12))
{var inst_12984 = (state_13061[2]);var state_13061__$1 = state_13061;var statearr_13097_13173 = state_13061__$1;(statearr_13097_13173[2] = inst_12984);
(statearr_13097_13173[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 44))
{var inst_13054 = (state_13061[2]);var state_13061__$1 = (function (){var statearr_13098 = state_13061;(statearr_13098[26] = inst_13054);
return statearr_13098;
})();var statearr_13099_13174 = state_13061__$1;(statearr_13099_13174[2] = null);
(statearr_13099_13174[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 13))
{var inst_12948 = (state_13061[24]);var inst_12951 = cljs.core.async.close_BANG_.call(null,inst_12948);var state_13061__$1 = state_13061;var statearr_13100_13175 = state_13061__$1;(statearr_13100_13175[2] = inst_12951);
(statearr_13100_13175[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 45))
{var inst_13051 = (state_13061[2]);var state_13061__$1 = state_13061;var statearr_13104_13176 = state_13061__$1;(statearr_13104_13176[2] = inst_13051);
(statearr_13104_13176[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 14))
{var state_13061__$1 = state_13061;var statearr_13105_13177 = state_13061__$1;(statearr_13105_13177[2] = null);
(statearr_13105_13177[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 15))
{var inst_12941 = (state_13061[14]);var inst_12940 = (state_13061[15]);var inst_12938 = (state_13061[16]);var inst_12939 = (state_13061[17]);var inst_12954 = (state_13061[2]);var inst_12955 = (inst_12941 + 1);var tmp13101 = inst_12940;var tmp13102 = inst_12938;var tmp13103 = inst_12939;var inst_12938__$1 = tmp13102;var inst_12939__$1 = tmp13103;var inst_12940__$1 = tmp13101;var inst_12941__$1 = inst_12955;var state_13061__$1 = (function (){var statearr_13106 = state_13061;(statearr_13106[14] = inst_12941__$1);
(statearr_13106[15] = inst_12940__$1);
(statearr_13106[16] = inst_12938__$1);
(statearr_13106[17] = inst_12939__$1);
(statearr_13106[27] = inst_12954);
return statearr_13106;
})();var statearr_13107_13178 = state_13061__$1;(statearr_13107_13178[2] = null);
(statearr_13107_13178[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 16))
{var inst_12958 = (state_13061[25]);var inst_12960 = cljs.core.chunked_seq_QMARK_.call(null,inst_12958);var state_13061__$1 = state_13061;if(inst_12960)
{var statearr_13108_13179 = state_13061__$1;(statearr_13108_13179[1] = 19);
} else
{var statearr_13109_13180 = state_13061__$1;(statearr_13109_13180[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 17))
{var state_13061__$1 = state_13061;var statearr_13110_13181 = state_13061__$1;(statearr_13110_13181[2] = null);
(statearr_13110_13181[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 18))
{var inst_12982 = (state_13061[2]);var state_13061__$1 = state_13061;var statearr_13111_13182 = state_13061__$1;(statearr_13111_13182[2] = inst_12982);
(statearr_13111_13182[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 19))
{var inst_12958 = (state_13061[25]);var inst_12962 = cljs.core.chunk_first.call(null,inst_12958);var inst_12963 = cljs.core.chunk_rest.call(null,inst_12958);var inst_12964 = cljs.core.count.call(null,inst_12962);var inst_12938 = inst_12963;var inst_12939 = inst_12962;var inst_12940 = inst_12964;var inst_12941 = 0;var state_13061__$1 = (function (){var statearr_13112 = state_13061;(statearr_13112[14] = inst_12941);
(statearr_13112[15] = inst_12940);
(statearr_13112[16] = inst_12938);
(statearr_13112[17] = inst_12939);
return statearr_13112;
})();var statearr_13113_13183 = state_13061__$1;(statearr_13113_13183[2] = null);
(statearr_13113_13183[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 20))
{var inst_12958 = (state_13061[25]);var inst_12968 = cljs.core.first.call(null,inst_12958);var inst_12969 = cljs.core.nth.call(null,inst_12968,0,null);var inst_12970 = cljs.core.nth.call(null,inst_12968,1,null);var state_13061__$1 = (function (){var statearr_13114 = state_13061;(statearr_13114[28] = inst_12969);
return statearr_13114;
})();if(cljs.core.truth_(inst_12970))
{var statearr_13115_13184 = state_13061__$1;(statearr_13115_13184[1] = 22);
} else
{var statearr_13116_13185 = state_13061__$1;(statearr_13116_13185[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 21))
{var inst_12979 = (state_13061[2]);var state_13061__$1 = state_13061;var statearr_13117_13186 = state_13061__$1;(statearr_13117_13186[2] = inst_12979);
(statearr_13117_13186[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 22))
{var inst_12969 = (state_13061[28]);var inst_12972 = cljs.core.async.close_BANG_.call(null,inst_12969);var state_13061__$1 = state_13061;var statearr_13118_13187 = state_13061__$1;(statearr_13118_13187[2] = inst_12972);
(statearr_13118_13187[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 23))
{var state_13061__$1 = state_13061;var statearr_13119_13188 = state_13061__$1;(statearr_13119_13188[2] = null);
(statearr_13119_13188[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 24))
{var inst_12958 = (state_13061[25]);var inst_12975 = (state_13061[2]);var inst_12976 = cljs.core.next.call(null,inst_12958);var inst_12938 = inst_12976;var inst_12939 = null;var inst_12940 = 0;var inst_12941 = 0;var state_13061__$1 = (function (){var statearr_13120 = state_13061;(statearr_13120[14] = inst_12941);
(statearr_13120[15] = inst_12940);
(statearr_13120[29] = inst_12975);
(statearr_13120[16] = inst_12938);
(statearr_13120[17] = inst_12939);
return statearr_13120;
})();var statearr_13121_13189 = state_13061__$1;(statearr_13121_13189[2] = null);
(statearr_13121_13189[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 25))
{var inst_13000 = (state_13061[10]);var inst_12999 = (state_13061[13]);var inst_13002 = (inst_13000 < inst_12999);var inst_13003 = inst_13002;var state_13061__$1 = state_13061;if(cljs.core.truth_(inst_13003))
{var statearr_13122_13190 = state_13061__$1;(statearr_13122_13190[1] = 27);
} else
{var statearr_13123_13191 = state_13061__$1;(statearr_13123_13191[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 26))
{var inst_12989 = (state_13061[19]);var inst_13047 = (state_13061[2]);var inst_13048 = cljs.core.seq.call(null,inst_12989);var state_13061__$1 = (function (){var statearr_13124 = state_13061;(statearr_13124[30] = inst_13047);
return statearr_13124;
})();if(inst_13048)
{var statearr_13125_13192 = state_13061__$1;(statearr_13125_13192[1] = 42);
} else
{var statearr_13126_13193 = state_13061__$1;(statearr_13126_13193[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 27))
{var inst_13000 = (state_13061[10]);var inst_12998 = (state_13061[12]);var inst_13005 = cljs.core._nth.call(null,inst_12998,inst_13000);var state_13061__$1 = (function (){var statearr_13127 = state_13061;(statearr_13127[7] = inst_13005);
return statearr_13127;
})();var statearr_13128_13194 = state_13061__$1;(statearr_13128_13194[2] = null);
(statearr_13128_13194[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 28))
{var inst_13018 = (state_13061[9]);var inst_12997 = (state_13061[11]);var inst_13018__$1 = cljs.core.seq.call(null,inst_12997);var state_13061__$1 = (function (){var statearr_13132 = state_13061;(statearr_13132[9] = inst_13018__$1);
return statearr_13132;
})();if(inst_13018__$1)
{var statearr_13133_13195 = state_13061__$1;(statearr_13133_13195[1] = 33);
} else
{var statearr_13134_13196 = state_13061__$1;(statearr_13134_13196[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 29))
{var inst_13045 = (state_13061[2]);var state_13061__$1 = state_13061;var statearr_13135_13197 = state_13061__$1;(statearr_13135_13197[2] = inst_13045);
(statearr_13135_13197[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 30))
{var inst_13000 = (state_13061[10]);var inst_12997 = (state_13061[11]);var inst_12998 = (state_13061[12]);var inst_12999 = (state_13061[13]);var inst_13014 = (state_13061[2]);var inst_13015 = (inst_13000 + 1);var tmp13129 = inst_12997;var tmp13130 = inst_12998;var tmp13131 = inst_12999;var inst_12997__$1 = tmp13129;var inst_12998__$1 = tmp13130;var inst_12999__$1 = tmp13131;var inst_13000__$1 = inst_13015;var state_13061__$1 = (function (){var statearr_13136 = state_13061;(statearr_13136[10] = inst_13000__$1);
(statearr_13136[11] = inst_12997__$1);
(statearr_13136[12] = inst_12998__$1);
(statearr_13136[31] = inst_13014);
(statearr_13136[13] = inst_12999__$1);
return statearr_13136;
})();var statearr_13137_13198 = state_13061__$1;(statearr_13137_13198[2] = null);
(statearr_13137_13198[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13062 === 31))
{var inst_13005 = (state_13061[7]);var inst_13006 = (state_13061[2]);var inst_13007 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13008 = cljs.core.async.untap_STAR_.call(null,m,inst_13005);var state_13061__$1 = (function (){var statearr_13138 = state_13061;(statearr_13138[32] = inst_13006);
(statearr_13138[33] = inst_13007);
return statearr_13138;
})();var statearr_13139_13199 = state_13061__$1;(statearr_13139_13199[2] = inst_13008);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13061__$1);
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
});})(c__6248__auto___13147,cs,m,dchan,dctr,done))
;return ((function (switch__6233__auto__,c__6248__auto___13147,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13143[0] = state_machine__6234__auto__);
(statearr_13143[1] = 1);
return statearr_13143;
});
var state_machine__6234__auto____1 = (function (state_13061){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13061);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13144){if((e13144 instanceof Object))
{var ex__6237__auto__ = e13144;var statearr_13145_13200 = state_13061;(statearr_13145_13200[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13061);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13201 = state_13061;
state_13061 = G__13201;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13061){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13147,cs,m,dchan,dctr,done))
})();var state__6250__auto__ = (function (){var statearr_13146 = f__6249__auto__.call(null);(statearr_13146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13147);
return statearr_13146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13147,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13203 = {};return obj13203;
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
;var m = (function (){if(typeof cljs.core.async.t13313 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13313 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13314){
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
this.meta13314 = meta13314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13313.cljs$lang$type = true;
cljs.core.async.t13313.cljs$lang$ctorStr = "cljs.core.async/t13313";
cljs.core.async.t13313.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t13313");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13313.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13313.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13313.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13313.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13313.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13313.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13313.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13315){var self__ = this;
var _13315__$1 = this;return self__.meta13314;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13315,meta13314__$1){var self__ = this;
var _13315__$1 = this;return (new cljs.core.async.t13313(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13314__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13313 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13313(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13314){return (new cljs.core.async.t13313(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13314));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13313(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6248__auto___13422 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13380){var state_val_13381 = (state_13380[1]);if((state_val_13381 === 1))
{var inst_13319 = (state_13380[7]);var inst_13319__$1 = calc_state.call(null);var inst_13320 = cljs.core.seq_QMARK_.call(null,inst_13319__$1);var state_13380__$1 = (function (){var statearr_13382 = state_13380;(statearr_13382[7] = inst_13319__$1);
return statearr_13382;
})();if(inst_13320)
{var statearr_13383_13423 = state_13380__$1;(statearr_13383_13423[1] = 2);
} else
{var statearr_13384_13424 = state_13380__$1;(statearr_13384_13424[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 2))
{var inst_13319 = (state_13380[7]);var inst_13322 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13319);var state_13380__$1 = state_13380;var statearr_13385_13425 = state_13380__$1;(statearr_13385_13425[2] = inst_13322);
(statearr_13385_13425[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 3))
{var inst_13319 = (state_13380[7]);var state_13380__$1 = state_13380;var statearr_13386_13426 = state_13380__$1;(statearr_13386_13426[2] = inst_13319);
(statearr_13386_13426[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 4))
{var inst_13319 = (state_13380[7]);var inst_13325 = (state_13380[2]);var inst_13326 = cljs.core.get.call(null,inst_13325,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13327 = cljs.core.get.call(null,inst_13325,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13328 = cljs.core.get.call(null,inst_13325,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13329 = inst_13319;var state_13380__$1 = (function (){var statearr_13387 = state_13380;(statearr_13387[8] = inst_13326);
(statearr_13387[9] = inst_13327);
(statearr_13387[10] = inst_13328);
(statearr_13387[11] = inst_13329);
return statearr_13387;
})();var statearr_13388_13427 = state_13380__$1;(statearr_13388_13427[2] = null);
(statearr_13388_13427[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 5))
{var inst_13329 = (state_13380[11]);var inst_13332 = cljs.core.seq_QMARK_.call(null,inst_13329);var state_13380__$1 = state_13380;if(inst_13332)
{var statearr_13389_13428 = state_13380__$1;(statearr_13389_13428[1] = 7);
} else
{var statearr_13390_13429 = state_13380__$1;(statearr_13390_13429[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 6))
{var inst_13378 = (state_13380[2]);var state_13380__$1 = state_13380;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13380__$1,inst_13378);
} else
{if((state_val_13381 === 7))
{var inst_13329 = (state_13380[11]);var inst_13334 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13329);var state_13380__$1 = state_13380;var statearr_13391_13430 = state_13380__$1;(statearr_13391_13430[2] = inst_13334);
(statearr_13391_13430[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 8))
{var inst_13329 = (state_13380[11]);var state_13380__$1 = state_13380;var statearr_13392_13431 = state_13380__$1;(statearr_13392_13431[2] = inst_13329);
(statearr_13392_13431[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 9))
{var inst_13337 = (state_13380[12]);var inst_13337__$1 = (state_13380[2]);var inst_13338 = cljs.core.get.call(null,inst_13337__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13339 = cljs.core.get.call(null,inst_13337__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13340 = cljs.core.get.call(null,inst_13337__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13380__$1 = (function (){var statearr_13393 = state_13380;(statearr_13393[12] = inst_13337__$1);
(statearr_13393[13] = inst_13339);
(statearr_13393[14] = inst_13340);
return statearr_13393;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13380__$1,10,inst_13338);
} else
{if((state_val_13381 === 10))
{var inst_13345 = (state_13380[15]);var inst_13344 = (state_13380[16]);var inst_13343 = (state_13380[2]);var inst_13344__$1 = cljs.core.nth.call(null,inst_13343,0,null);var inst_13345__$1 = cljs.core.nth.call(null,inst_13343,1,null);var inst_13346 = (inst_13344__$1 == null);var inst_13347 = cljs.core._EQ_.call(null,inst_13345__$1,change);var inst_13348 = (inst_13346) || (inst_13347);var state_13380__$1 = (function (){var statearr_13394 = state_13380;(statearr_13394[15] = inst_13345__$1);
(statearr_13394[16] = inst_13344__$1);
return statearr_13394;
})();if(cljs.core.truth_(inst_13348))
{var statearr_13395_13432 = state_13380__$1;(statearr_13395_13432[1] = 11);
} else
{var statearr_13396_13433 = state_13380__$1;(statearr_13396_13433[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 11))
{var inst_13344 = (state_13380[16]);var inst_13350 = (inst_13344 == null);var state_13380__$1 = state_13380;if(cljs.core.truth_(inst_13350))
{var statearr_13397_13434 = state_13380__$1;(statearr_13397_13434[1] = 14);
} else
{var statearr_13398_13435 = state_13380__$1;(statearr_13398_13435[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 12))
{var inst_13359 = (state_13380[17]);var inst_13345 = (state_13380[15]);var inst_13340 = (state_13380[14]);var inst_13359__$1 = inst_13340.call(null,inst_13345);var state_13380__$1 = (function (){var statearr_13399 = state_13380;(statearr_13399[17] = inst_13359__$1);
return statearr_13399;
})();if(cljs.core.truth_(inst_13359__$1))
{var statearr_13400_13436 = state_13380__$1;(statearr_13400_13436[1] = 17);
} else
{var statearr_13401_13437 = state_13380__$1;(statearr_13401_13437[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 13))
{var inst_13376 = (state_13380[2]);var state_13380__$1 = state_13380;var statearr_13402_13438 = state_13380__$1;(statearr_13402_13438[2] = inst_13376);
(statearr_13402_13438[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 14))
{var inst_13345 = (state_13380[15]);var inst_13352 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13345);var state_13380__$1 = state_13380;var statearr_13403_13439 = state_13380__$1;(statearr_13403_13439[2] = inst_13352);
(statearr_13403_13439[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 15))
{var state_13380__$1 = state_13380;var statearr_13404_13440 = state_13380__$1;(statearr_13404_13440[2] = null);
(statearr_13404_13440[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 16))
{var inst_13355 = (state_13380[2]);var inst_13356 = calc_state.call(null);var inst_13329 = inst_13356;var state_13380__$1 = (function (){var statearr_13405 = state_13380;(statearr_13405[18] = inst_13355);
(statearr_13405[11] = inst_13329);
return statearr_13405;
})();var statearr_13406_13441 = state_13380__$1;(statearr_13406_13441[2] = null);
(statearr_13406_13441[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 17))
{var inst_13359 = (state_13380[17]);var state_13380__$1 = state_13380;var statearr_13407_13442 = state_13380__$1;(statearr_13407_13442[2] = inst_13359);
(statearr_13407_13442[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 18))
{var inst_13339 = (state_13380[13]);var inst_13345 = (state_13380[15]);var inst_13340 = (state_13380[14]);var inst_13362 = cljs.core.empty_QMARK_.call(null,inst_13340);var inst_13363 = inst_13339.call(null,inst_13345);var inst_13364 = cljs.core.not.call(null,inst_13363);var inst_13365 = (inst_13362) && (inst_13364);var state_13380__$1 = state_13380;var statearr_13408_13443 = state_13380__$1;(statearr_13408_13443[2] = inst_13365);
(statearr_13408_13443[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 19))
{var inst_13367 = (state_13380[2]);var state_13380__$1 = state_13380;if(cljs.core.truth_(inst_13367))
{var statearr_13409_13444 = state_13380__$1;(statearr_13409_13444[1] = 20);
} else
{var statearr_13410_13445 = state_13380__$1;(statearr_13410_13445[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 20))
{var inst_13344 = (state_13380[16]);var state_13380__$1 = state_13380;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13380__$1,23,out,inst_13344);
} else
{if((state_val_13381 === 21))
{var state_13380__$1 = state_13380;var statearr_13411_13446 = state_13380__$1;(statearr_13411_13446[2] = null);
(statearr_13411_13446[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 22))
{var inst_13337 = (state_13380[12]);var inst_13373 = (state_13380[2]);var inst_13329 = inst_13337;var state_13380__$1 = (function (){var statearr_13412 = state_13380;(statearr_13412[19] = inst_13373);
(statearr_13412[11] = inst_13329);
return statearr_13412;
})();var statearr_13413_13447 = state_13380__$1;(statearr_13413_13447[2] = null);
(statearr_13413_13447[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 23))
{var inst_13370 = (state_13380[2]);var state_13380__$1 = state_13380;var statearr_13414_13448 = state_13380__$1;(statearr_13414_13448[2] = inst_13370);
(statearr_13414_13448[1] = 22);
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
});})(c__6248__auto___13422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6233__auto__,c__6248__auto___13422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13418[0] = state_machine__6234__auto__);
(statearr_13418[1] = 1);
return statearr_13418;
});
var state_machine__6234__auto____1 = (function (state_13380){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13380);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13419){if((e13419 instanceof Object))
{var ex__6237__auto__ = e13419;var statearr_13420_13449 = state_13380;(statearr_13420_13449[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13380);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13419;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13450 = state_13380;
state_13380 = G__13450;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13380){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6250__auto__ = (function (){var statearr_13421 = f__6249__auto__.call(null);(statearr_13421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13422);
return statearr_13421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj13452 = {};return obj13452;
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
return (function (p1__13453_SHARP_){if(cljs.core.truth_(p1__13453_SHARP_.call(null,topic)))
{return p1__13453_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13453_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3478__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13578 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13578 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13579){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13579 = meta13579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13578.cljs$lang$type = true;
cljs.core.async.t13578.cljs$lang$ctorStr = "cljs.core.async/t13578";
cljs.core.async.t13578.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t13578");
});})(mults,ensure_mult))
;
cljs.core.async.t13578.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13578.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13578.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13578.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13578.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13578.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13578.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13580){var self__ = this;
var _13580__$1 = this;return self__.meta13579;
});})(mults,ensure_mult))
;
cljs.core.async.t13578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13580,meta13579__$1){var self__ = this;
var _13580__$1 = this;return (new cljs.core.async.t13578(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13579__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13578 = ((function (mults,ensure_mult){
return (function __GT_t13578(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13579){return (new cljs.core.async.t13578(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13579));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13578(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6248__auto___13702 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13702,mults,ensure_mult,p){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13702,mults,ensure_mult,p){
return (function (state_13654){var state_val_13655 = (state_13654[1]);if((state_val_13655 === 1))
{var state_13654__$1 = state_13654;var statearr_13656_13703 = state_13654__$1;(statearr_13656_13703[2] = null);
(statearr_13656_13703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 2))
{var state_13654__$1 = state_13654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13654__$1,4,ch);
} else
{if((state_val_13655 === 3))
{var inst_13652 = (state_13654[2]);var state_13654__$1 = state_13654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13654__$1,inst_13652);
} else
{if((state_val_13655 === 4))
{var inst_13583 = (state_13654[7]);var inst_13583__$1 = (state_13654[2]);var inst_13584 = (inst_13583__$1 == null);var state_13654__$1 = (function (){var statearr_13657 = state_13654;(statearr_13657[7] = inst_13583__$1);
return statearr_13657;
})();if(cljs.core.truth_(inst_13584))
{var statearr_13658_13704 = state_13654__$1;(statearr_13658_13704[1] = 5);
} else
{var statearr_13659_13705 = state_13654__$1;(statearr_13659_13705[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 5))
{var inst_13590 = cljs.core.deref.call(null,mults);var inst_13591 = cljs.core.vals.call(null,inst_13590);var inst_13592 = cljs.core.seq.call(null,inst_13591);var inst_13593 = inst_13592;var inst_13594 = null;var inst_13595 = 0;var inst_13596 = 0;var state_13654__$1 = (function (){var statearr_13660 = state_13654;(statearr_13660[8] = inst_13595);
(statearr_13660[9] = inst_13596);
(statearr_13660[10] = inst_13593);
(statearr_13660[11] = inst_13594);
return statearr_13660;
})();var statearr_13661_13706 = state_13654__$1;(statearr_13661_13706[2] = null);
(statearr_13661_13706[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 6))
{var inst_13633 = (state_13654[12]);var inst_13631 = (state_13654[13]);var inst_13583 = (state_13654[7]);var inst_13631__$1 = topic_fn.call(null,inst_13583);var inst_13632 = cljs.core.deref.call(null,mults);var inst_13633__$1 = cljs.core.get.call(null,inst_13632,inst_13631__$1);var state_13654__$1 = (function (){var statearr_13662 = state_13654;(statearr_13662[12] = inst_13633__$1);
(statearr_13662[13] = inst_13631__$1);
return statearr_13662;
})();if(cljs.core.truth_(inst_13633__$1))
{var statearr_13663_13707 = state_13654__$1;(statearr_13663_13707[1] = 19);
} else
{var statearr_13664_13708 = state_13654__$1;(statearr_13664_13708[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 7))
{var inst_13650 = (state_13654[2]);var state_13654__$1 = state_13654;var statearr_13665_13709 = state_13654__$1;(statearr_13665_13709[2] = inst_13650);
(statearr_13665_13709[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 8))
{var inst_13595 = (state_13654[8]);var inst_13596 = (state_13654[9]);var inst_13598 = (inst_13596 < inst_13595);var inst_13599 = inst_13598;var state_13654__$1 = state_13654;if(cljs.core.truth_(inst_13599))
{var statearr_13669_13710 = state_13654__$1;(statearr_13669_13710[1] = 10);
} else
{var statearr_13670_13711 = state_13654__$1;(statearr_13670_13711[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 9))
{var inst_13629 = (state_13654[2]);var state_13654__$1 = state_13654;var statearr_13671_13712 = state_13654__$1;(statearr_13671_13712[2] = inst_13629);
(statearr_13671_13712[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 10))
{var inst_13595 = (state_13654[8]);var inst_13596 = (state_13654[9]);var inst_13593 = (state_13654[10]);var inst_13594 = (state_13654[11]);var inst_13601 = cljs.core._nth.call(null,inst_13594,inst_13596);var inst_13602 = cljs.core.async.muxch_STAR_.call(null,inst_13601);var inst_13603 = cljs.core.async.close_BANG_.call(null,inst_13602);var inst_13604 = (inst_13596 + 1);var tmp13666 = inst_13595;var tmp13667 = inst_13593;var tmp13668 = inst_13594;var inst_13593__$1 = tmp13667;var inst_13594__$1 = tmp13668;var inst_13595__$1 = tmp13666;var inst_13596__$1 = inst_13604;var state_13654__$1 = (function (){var statearr_13672 = state_13654;(statearr_13672[8] = inst_13595__$1);
(statearr_13672[9] = inst_13596__$1);
(statearr_13672[10] = inst_13593__$1);
(statearr_13672[11] = inst_13594__$1);
(statearr_13672[14] = inst_13603);
return statearr_13672;
})();var statearr_13673_13713 = state_13654__$1;(statearr_13673_13713[2] = null);
(statearr_13673_13713[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 11))
{var inst_13593 = (state_13654[10]);var inst_13607 = (state_13654[15]);var inst_13607__$1 = cljs.core.seq.call(null,inst_13593);var state_13654__$1 = (function (){var statearr_13674 = state_13654;(statearr_13674[15] = inst_13607__$1);
return statearr_13674;
})();if(inst_13607__$1)
{var statearr_13675_13714 = state_13654__$1;(statearr_13675_13714[1] = 13);
} else
{var statearr_13676_13715 = state_13654__$1;(statearr_13676_13715[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 12))
{var inst_13627 = (state_13654[2]);var state_13654__$1 = state_13654;var statearr_13677_13716 = state_13654__$1;(statearr_13677_13716[2] = inst_13627);
(statearr_13677_13716[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 13))
{var inst_13607 = (state_13654[15]);var inst_13609 = cljs.core.chunked_seq_QMARK_.call(null,inst_13607);var state_13654__$1 = state_13654;if(inst_13609)
{var statearr_13678_13717 = state_13654__$1;(statearr_13678_13717[1] = 16);
} else
{var statearr_13679_13718 = state_13654__$1;(statearr_13679_13718[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 14))
{var state_13654__$1 = state_13654;var statearr_13680_13719 = state_13654__$1;(statearr_13680_13719[2] = null);
(statearr_13680_13719[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 15))
{var inst_13625 = (state_13654[2]);var state_13654__$1 = state_13654;var statearr_13681_13720 = state_13654__$1;(statearr_13681_13720[2] = inst_13625);
(statearr_13681_13720[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 16))
{var inst_13607 = (state_13654[15]);var inst_13611 = cljs.core.chunk_first.call(null,inst_13607);var inst_13612 = cljs.core.chunk_rest.call(null,inst_13607);var inst_13613 = cljs.core.count.call(null,inst_13611);var inst_13593 = inst_13612;var inst_13594 = inst_13611;var inst_13595 = inst_13613;var inst_13596 = 0;var state_13654__$1 = (function (){var statearr_13682 = state_13654;(statearr_13682[8] = inst_13595);
(statearr_13682[9] = inst_13596);
(statearr_13682[10] = inst_13593);
(statearr_13682[11] = inst_13594);
return statearr_13682;
})();var statearr_13683_13721 = state_13654__$1;(statearr_13683_13721[2] = null);
(statearr_13683_13721[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 17))
{var inst_13607 = (state_13654[15]);var inst_13616 = cljs.core.first.call(null,inst_13607);var inst_13617 = cljs.core.async.muxch_STAR_.call(null,inst_13616);var inst_13618 = cljs.core.async.close_BANG_.call(null,inst_13617);var inst_13619 = cljs.core.next.call(null,inst_13607);var inst_13593 = inst_13619;var inst_13594 = null;var inst_13595 = 0;var inst_13596 = 0;var state_13654__$1 = (function (){var statearr_13684 = state_13654;(statearr_13684[8] = inst_13595);
(statearr_13684[9] = inst_13596);
(statearr_13684[10] = inst_13593);
(statearr_13684[11] = inst_13594);
(statearr_13684[16] = inst_13618);
return statearr_13684;
})();var statearr_13685_13722 = state_13654__$1;(statearr_13685_13722[2] = null);
(statearr_13685_13722[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 18))
{var inst_13622 = (state_13654[2]);var state_13654__$1 = state_13654;var statearr_13686_13723 = state_13654__$1;(statearr_13686_13723[2] = inst_13622);
(statearr_13686_13723[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 19))
{var state_13654__$1 = state_13654;var statearr_13687_13724 = state_13654__$1;(statearr_13687_13724[2] = null);
(statearr_13687_13724[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 20))
{var state_13654__$1 = state_13654;var statearr_13688_13725 = state_13654__$1;(statearr_13688_13725[2] = null);
(statearr_13688_13725[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 21))
{var inst_13647 = (state_13654[2]);var state_13654__$1 = (function (){var statearr_13689 = state_13654;(statearr_13689[17] = inst_13647);
return statearr_13689;
})();var statearr_13690_13726 = state_13654__$1;(statearr_13690_13726[2] = null);
(statearr_13690_13726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 22))
{var inst_13644 = (state_13654[2]);var state_13654__$1 = state_13654;var statearr_13691_13727 = state_13654__$1;(statearr_13691_13727[2] = inst_13644);
(statearr_13691_13727[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 23))
{var inst_13631 = (state_13654[13]);var inst_13635 = (state_13654[2]);var inst_13636 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13631);var state_13654__$1 = (function (){var statearr_13692 = state_13654;(statearr_13692[18] = inst_13635);
return statearr_13692;
})();var statearr_13693_13728 = state_13654__$1;(statearr_13693_13728[2] = inst_13636);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13654__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13655 === 24))
{var inst_13633 = (state_13654[12]);var inst_13583 = (state_13654[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13654,23,Object,null,22);var inst_13640 = cljs.core.async.muxch_STAR_.call(null,inst_13633);var state_13654__$1 = state_13654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13654__$1,25,inst_13640,inst_13583);
} else
{if((state_val_13655 === 25))
{var inst_13642 = (state_13654[2]);var state_13654__$1 = state_13654;var statearr_13694_13729 = state_13654__$1;(statearr_13694_13729[2] = inst_13642);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13654__$1);
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
});})(c__6248__auto___13702,mults,ensure_mult,p))
;return ((function (switch__6233__auto__,c__6248__auto___13702,mults,ensure_mult,p){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13698[0] = state_machine__6234__auto__);
(statearr_13698[1] = 1);
return statearr_13698;
});
var state_machine__6234__auto____1 = (function (state_13654){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13654);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13699){if((e13699 instanceof Object))
{var ex__6237__auto__ = e13699;var statearr_13700_13730 = state_13654;(statearr_13700_13730[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13654);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13699;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13731 = state_13654;
state_13654 = G__13731;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13654){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13702,mults,ensure_mult,p))
})();var state__6250__auto__ = (function (){var statearr_13701 = f__6249__auto__.call(null);(statearr_13701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13702);
return statearr_13701;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13702,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6248__auto___13868 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13868,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13868,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13838){var state_val_13839 = (state_13838[1]);if((state_val_13839 === 1))
{var state_13838__$1 = state_13838;var statearr_13840_13869 = state_13838__$1;(statearr_13840_13869[2] = null);
(statearr_13840_13869[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13839 === 2))
{var inst_13801 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13802 = 0;var state_13838__$1 = (function (){var statearr_13841 = state_13838;(statearr_13841[7] = inst_13801);
(statearr_13841[8] = inst_13802);
return statearr_13841;
})();var statearr_13842_13870 = state_13838__$1;(statearr_13842_13870[2] = null);
(statearr_13842_13870[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13839 === 3))
{var inst_13836 = (state_13838[2]);var state_13838__$1 = state_13838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13838__$1,inst_13836);
} else
{if((state_val_13839 === 4))
{var inst_13802 = (state_13838[8]);var inst_13804 = (inst_13802 < cnt);var state_13838__$1 = state_13838;if(cljs.core.truth_(inst_13804))
{var statearr_13843_13871 = state_13838__$1;(statearr_13843_13871[1] = 6);
} else
{var statearr_13844_13872 = state_13838__$1;(statearr_13844_13872[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13839 === 5))
{var inst_13822 = (state_13838[2]);var state_13838__$1 = (function (){var statearr_13845 = state_13838;(statearr_13845[9] = inst_13822);
return statearr_13845;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13838__$1,12,dchan);
} else
{if((state_val_13839 === 6))
{var state_13838__$1 = state_13838;var statearr_13846_13873 = state_13838__$1;(statearr_13846_13873[2] = null);
(statearr_13846_13873[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13839 === 7))
{var state_13838__$1 = state_13838;var statearr_13847_13874 = state_13838__$1;(statearr_13847_13874[2] = null);
(statearr_13847_13874[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13839 === 8))
{var inst_13820 = (state_13838[2]);var state_13838__$1 = state_13838;var statearr_13848_13875 = state_13838__$1;(statearr_13848_13875[2] = inst_13820);
(statearr_13848_13875[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13839 === 9))
{var inst_13802 = (state_13838[8]);var inst_13815 = (state_13838[2]);var inst_13816 = (inst_13802 + 1);var inst_13802__$1 = inst_13816;var state_13838__$1 = (function (){var statearr_13849 = state_13838;(statearr_13849[10] = inst_13815);
(statearr_13849[8] = inst_13802__$1);
return statearr_13849;
})();var statearr_13850_13876 = state_13838__$1;(statearr_13850_13876[2] = null);
(statearr_13850_13876[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13839 === 10))
{var inst_13806 = (state_13838[2]);var inst_13807 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13838__$1 = (function (){var statearr_13851 = state_13838;(statearr_13851[11] = inst_13806);
return statearr_13851;
})();var statearr_13852_13877 = state_13838__$1;(statearr_13852_13877[2] = inst_13807);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13838__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13839 === 11))
{var inst_13802 = (state_13838[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13838,10,Object,null,9);var inst_13811 = chs__$1.call(null,inst_13802);var inst_13812 = done.call(null,inst_13802);var inst_13813 = cljs.core.async.take_BANG_.call(null,inst_13811,inst_13812);var state_13838__$1 = state_13838;var statearr_13853_13878 = state_13838__$1;(statearr_13853_13878[2] = inst_13813);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13838__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13839 === 12))
{var inst_13824 = (state_13838[12]);var inst_13824__$1 = (state_13838[2]);var inst_13825 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13824__$1);var state_13838__$1 = (function (){var statearr_13854 = state_13838;(statearr_13854[12] = inst_13824__$1);
return statearr_13854;
})();if(cljs.core.truth_(inst_13825))
{var statearr_13855_13879 = state_13838__$1;(statearr_13855_13879[1] = 13);
} else
{var statearr_13856_13880 = state_13838__$1;(statearr_13856_13880[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13839 === 13))
{var inst_13827 = cljs.core.async.close_BANG_.call(null,out);var state_13838__$1 = state_13838;var statearr_13857_13881 = state_13838__$1;(statearr_13857_13881[2] = inst_13827);
(statearr_13857_13881[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13839 === 14))
{var inst_13824 = (state_13838[12]);var inst_13829 = cljs.core.apply.call(null,f,inst_13824);var state_13838__$1 = state_13838;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13838__$1,16,out,inst_13829);
} else
{if((state_val_13839 === 15))
{var inst_13834 = (state_13838[2]);var state_13838__$1 = state_13838;var statearr_13858_13882 = state_13838__$1;(statearr_13858_13882[2] = inst_13834);
(statearr_13858_13882[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13839 === 16))
{var inst_13831 = (state_13838[2]);var state_13838__$1 = (function (){var statearr_13859 = state_13838;(statearr_13859[13] = inst_13831);
return statearr_13859;
})();var statearr_13860_13883 = state_13838__$1;(statearr_13860_13883[2] = null);
(statearr_13860_13883[1] = 2);
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
});})(c__6248__auto___13868,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6233__auto__,c__6248__auto___13868,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13864[0] = state_machine__6234__auto__);
(statearr_13864[1] = 1);
return statearr_13864;
});
var state_machine__6234__auto____1 = (function (state_13838){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13838);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13865){if((e13865 instanceof Object))
{var ex__6237__auto__ = e13865;var statearr_13866_13884 = state_13838;(statearr_13866_13884[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13838);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13885 = state_13838;
state_13838 = G__13885;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13838){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13868,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6250__auto__ = (function (){var statearr_13867 = f__6249__auto__.call(null);(statearr_13867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13868);
return statearr_13867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13868,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___13993 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13993,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13993,out){
return (function (state_13969){var state_val_13970 = (state_13969[1]);if((state_val_13970 === 1))
{var inst_13940 = cljs.core.vec.call(null,chs);var inst_13941 = inst_13940;var state_13969__$1 = (function (){var statearr_13971 = state_13969;(statearr_13971[7] = inst_13941);
return statearr_13971;
})();var statearr_13972_13994 = state_13969__$1;(statearr_13972_13994[2] = null);
(statearr_13972_13994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 2))
{var inst_13941 = (state_13969[7]);var inst_13943 = cljs.core.count.call(null,inst_13941);var inst_13944 = (inst_13943 > 0);var state_13969__$1 = state_13969;if(cljs.core.truth_(inst_13944))
{var statearr_13973_13995 = state_13969__$1;(statearr_13973_13995[1] = 4);
} else
{var statearr_13974_13996 = state_13969__$1;(statearr_13974_13996[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 3))
{var inst_13967 = (state_13969[2]);var state_13969__$1 = state_13969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13969__$1,inst_13967);
} else
{if((state_val_13970 === 4))
{var inst_13941 = (state_13969[7]);var state_13969__$1 = state_13969;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13969__$1,7,inst_13941);
} else
{if((state_val_13970 === 5))
{var inst_13963 = cljs.core.async.close_BANG_.call(null,out);var state_13969__$1 = state_13969;var statearr_13975_13997 = state_13969__$1;(statearr_13975_13997[2] = inst_13963);
(statearr_13975_13997[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 6))
{var inst_13965 = (state_13969[2]);var state_13969__$1 = state_13969;var statearr_13976_13998 = state_13969__$1;(statearr_13976_13998[2] = inst_13965);
(statearr_13976_13998[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 7))
{var inst_13949 = (state_13969[8]);var inst_13948 = (state_13969[9]);var inst_13948__$1 = (state_13969[2]);var inst_13949__$1 = cljs.core.nth.call(null,inst_13948__$1,0,null);var inst_13950 = cljs.core.nth.call(null,inst_13948__$1,1,null);var inst_13951 = (inst_13949__$1 == null);var state_13969__$1 = (function (){var statearr_13977 = state_13969;(statearr_13977[10] = inst_13950);
(statearr_13977[8] = inst_13949__$1);
(statearr_13977[9] = inst_13948__$1);
return statearr_13977;
})();if(cljs.core.truth_(inst_13951))
{var statearr_13978_13999 = state_13969__$1;(statearr_13978_13999[1] = 8);
} else
{var statearr_13979_14000 = state_13969__$1;(statearr_13979_14000[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 8))
{var inst_13950 = (state_13969[10]);var inst_13949 = (state_13969[8]);var inst_13948 = (state_13969[9]);var inst_13941 = (state_13969[7]);var inst_13953 = (function (){var c = inst_13950;var v = inst_13949;var vec__13946 = inst_13948;var cs = inst_13941;return ((function (c,v,vec__13946,cs,inst_13950,inst_13949,inst_13948,inst_13941,state_val_13970,c__6248__auto___13993,out){
return (function (p1__13886_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13886_SHARP_);
});
;})(c,v,vec__13946,cs,inst_13950,inst_13949,inst_13948,inst_13941,state_val_13970,c__6248__auto___13993,out))
})();var inst_13954 = cljs.core.filterv.call(null,inst_13953,inst_13941);var inst_13941__$1 = inst_13954;var state_13969__$1 = (function (){var statearr_13980 = state_13969;(statearr_13980[7] = inst_13941__$1);
return statearr_13980;
})();var statearr_13981_14001 = state_13969__$1;(statearr_13981_14001[2] = null);
(statearr_13981_14001[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 9))
{var inst_13949 = (state_13969[8]);var state_13969__$1 = state_13969;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13969__$1,11,out,inst_13949);
} else
{if((state_val_13970 === 10))
{var inst_13961 = (state_13969[2]);var state_13969__$1 = state_13969;var statearr_13983_14002 = state_13969__$1;(statearr_13983_14002[2] = inst_13961);
(statearr_13983_14002[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 11))
{var inst_13941 = (state_13969[7]);var inst_13958 = (state_13969[2]);var tmp13982 = inst_13941;var inst_13941__$1 = tmp13982;var state_13969__$1 = (function (){var statearr_13984 = state_13969;(statearr_13984[7] = inst_13941__$1);
(statearr_13984[11] = inst_13958);
return statearr_13984;
})();var statearr_13985_14003 = state_13969__$1;(statearr_13985_14003[2] = null);
(statearr_13985_14003[1] = 2);
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
});})(c__6248__auto___13993,out))
;return ((function (switch__6233__auto__,c__6248__auto___13993,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13989 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13989[0] = state_machine__6234__auto__);
(statearr_13989[1] = 1);
return statearr_13989;
});
var state_machine__6234__auto____1 = (function (state_13969){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13969);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13990){if((e13990 instanceof Object))
{var ex__6237__auto__ = e13990;var statearr_13991_14004 = state_13969;(statearr_13991_14004[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13969);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14005 = state_13969;
state_13969 = G__14005;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13969){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13993,out))
})();var state__6250__auto__ = (function (){var statearr_13992 = f__6249__auto__.call(null);(statearr_13992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13993);
return statearr_13992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13993,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___14098 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___14098,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___14098,out){
return (function (state_14075){var state_val_14076 = (state_14075[1]);if((state_val_14076 === 1))
{var inst_14052 = 0;var state_14075__$1 = (function (){var statearr_14077 = state_14075;(statearr_14077[7] = inst_14052);
return statearr_14077;
})();var statearr_14078_14099 = state_14075__$1;(statearr_14078_14099[2] = null);
(statearr_14078_14099[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14076 === 2))
{var inst_14052 = (state_14075[7]);var inst_14054 = (inst_14052 < n);var state_14075__$1 = state_14075;if(cljs.core.truth_(inst_14054))
{var statearr_14079_14100 = state_14075__$1;(statearr_14079_14100[1] = 4);
} else
{var statearr_14080_14101 = state_14075__$1;(statearr_14080_14101[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14076 === 3))
{var inst_14072 = (state_14075[2]);var inst_14073 = cljs.core.async.close_BANG_.call(null,out);var state_14075__$1 = (function (){var statearr_14081 = state_14075;(statearr_14081[8] = inst_14072);
return statearr_14081;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14075__$1,inst_14073);
} else
{if((state_val_14076 === 4))
{var state_14075__$1 = state_14075;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14075__$1,7,ch);
} else
{if((state_val_14076 === 5))
{var state_14075__$1 = state_14075;var statearr_14082_14102 = state_14075__$1;(statearr_14082_14102[2] = null);
(statearr_14082_14102[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14076 === 6))
{var inst_14070 = (state_14075[2]);var state_14075__$1 = state_14075;var statearr_14083_14103 = state_14075__$1;(statearr_14083_14103[2] = inst_14070);
(statearr_14083_14103[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14076 === 7))
{var inst_14057 = (state_14075[9]);var inst_14057__$1 = (state_14075[2]);var inst_14058 = (inst_14057__$1 == null);var inst_14059 = cljs.core.not.call(null,inst_14058);var state_14075__$1 = (function (){var statearr_14084 = state_14075;(statearr_14084[9] = inst_14057__$1);
return statearr_14084;
})();if(inst_14059)
{var statearr_14085_14104 = state_14075__$1;(statearr_14085_14104[1] = 8);
} else
{var statearr_14086_14105 = state_14075__$1;(statearr_14086_14105[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14076 === 8))
{var inst_14057 = (state_14075[9]);var state_14075__$1 = state_14075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14075__$1,11,out,inst_14057);
} else
{if((state_val_14076 === 9))
{var state_14075__$1 = state_14075;var statearr_14087_14106 = state_14075__$1;(statearr_14087_14106[2] = null);
(statearr_14087_14106[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14076 === 10))
{var inst_14067 = (state_14075[2]);var state_14075__$1 = state_14075;var statearr_14088_14107 = state_14075__$1;(statearr_14088_14107[2] = inst_14067);
(statearr_14088_14107[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14076 === 11))
{var inst_14052 = (state_14075[7]);var inst_14062 = (state_14075[2]);var inst_14063 = (inst_14052 + 1);var inst_14052__$1 = inst_14063;var state_14075__$1 = (function (){var statearr_14089 = state_14075;(statearr_14089[7] = inst_14052__$1);
(statearr_14089[10] = inst_14062);
return statearr_14089;
})();var statearr_14090_14108 = state_14075__$1;(statearr_14090_14108[2] = null);
(statearr_14090_14108[1] = 2);
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
});})(c__6248__auto___14098,out))
;return ((function (switch__6233__auto__,c__6248__auto___14098,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_14094 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14094[0] = state_machine__6234__auto__);
(statearr_14094[1] = 1);
return statearr_14094;
});
var state_machine__6234__auto____1 = (function (state_14075){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_14075);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e14095){if((e14095 instanceof Object))
{var ex__6237__auto__ = e14095;var statearr_14096_14109 = state_14075;(statearr_14096_14109[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14075);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14095;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14110 = state_14075;
state_14075 = G__14110;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_14075){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_14075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___14098,out))
})();var state__6250__auto__ = (function (){var statearr_14097 = f__6249__auto__.call(null);(statearr_14097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___14098);
return statearr_14097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___14098,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___14207 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___14207,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___14207,out){
return (function (state_14182){var state_val_14183 = (state_14182[1]);if((state_val_14183 === 1))
{var inst_14159 = null;var state_14182__$1 = (function (){var statearr_14184 = state_14182;(statearr_14184[7] = inst_14159);
return statearr_14184;
})();var statearr_14185_14208 = state_14182__$1;(statearr_14185_14208[2] = null);
(statearr_14185_14208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14183 === 2))
{var state_14182__$1 = state_14182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14182__$1,4,ch);
} else
{if((state_val_14183 === 3))
{var inst_14179 = (state_14182[2]);var inst_14180 = cljs.core.async.close_BANG_.call(null,out);var state_14182__$1 = (function (){var statearr_14186 = state_14182;(statearr_14186[8] = inst_14179);
return statearr_14186;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14182__$1,inst_14180);
} else
{if((state_val_14183 === 4))
{var inst_14162 = (state_14182[9]);var inst_14162__$1 = (state_14182[2]);var inst_14163 = (inst_14162__$1 == null);var inst_14164 = cljs.core.not.call(null,inst_14163);var state_14182__$1 = (function (){var statearr_14187 = state_14182;(statearr_14187[9] = inst_14162__$1);
return statearr_14187;
})();if(inst_14164)
{var statearr_14188_14209 = state_14182__$1;(statearr_14188_14209[1] = 5);
} else
{var statearr_14189_14210 = state_14182__$1;(statearr_14189_14210[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14183 === 5))
{var inst_14162 = (state_14182[9]);var inst_14159 = (state_14182[7]);var inst_14166 = cljs.core._EQ_.call(null,inst_14162,inst_14159);var state_14182__$1 = state_14182;if(inst_14166)
{var statearr_14190_14211 = state_14182__$1;(statearr_14190_14211[1] = 8);
} else
{var statearr_14191_14212 = state_14182__$1;(statearr_14191_14212[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14183 === 6))
{var state_14182__$1 = state_14182;var statearr_14193_14213 = state_14182__$1;(statearr_14193_14213[2] = null);
(statearr_14193_14213[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14183 === 7))
{var inst_14177 = (state_14182[2]);var state_14182__$1 = state_14182;var statearr_14194_14214 = state_14182__$1;(statearr_14194_14214[2] = inst_14177);
(statearr_14194_14214[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14183 === 8))
{var inst_14159 = (state_14182[7]);var tmp14192 = inst_14159;var inst_14159__$1 = tmp14192;var state_14182__$1 = (function (){var statearr_14195 = state_14182;(statearr_14195[7] = inst_14159__$1);
return statearr_14195;
})();var statearr_14196_14215 = state_14182__$1;(statearr_14196_14215[2] = null);
(statearr_14196_14215[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14183 === 9))
{var inst_14162 = (state_14182[9]);var state_14182__$1 = state_14182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14182__$1,11,out,inst_14162);
} else
{if((state_val_14183 === 10))
{var inst_14174 = (state_14182[2]);var state_14182__$1 = state_14182;var statearr_14197_14216 = state_14182__$1;(statearr_14197_14216[2] = inst_14174);
(statearr_14197_14216[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14183 === 11))
{var inst_14162 = (state_14182[9]);var inst_14171 = (state_14182[2]);var inst_14159 = inst_14162;var state_14182__$1 = (function (){var statearr_14198 = state_14182;(statearr_14198[10] = inst_14171);
(statearr_14198[7] = inst_14159);
return statearr_14198;
})();var statearr_14199_14217 = state_14182__$1;(statearr_14199_14217[2] = null);
(statearr_14199_14217[1] = 2);
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
});})(c__6248__auto___14207,out))
;return ((function (switch__6233__auto__,c__6248__auto___14207,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_14203 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14203[0] = state_machine__6234__auto__);
(statearr_14203[1] = 1);
return statearr_14203;
});
var state_machine__6234__auto____1 = (function (state_14182){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_14182);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e14204){if((e14204 instanceof Object))
{var ex__6237__auto__ = e14204;var statearr_14205_14218 = state_14182;(statearr_14205_14218[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14182);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14219 = state_14182;
state_14182 = G__14219;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_14182){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_14182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___14207,out))
})();var state__6250__auto__ = (function (){var statearr_14206 = f__6249__auto__.call(null);(statearr_14206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___14207);
return statearr_14206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___14207,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___14354 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___14354,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___14354,out){
return (function (state_14324){var state_val_14325 = (state_14324[1]);if((state_val_14325 === 1))
{var inst_14287 = (new Array(n));var inst_14288 = inst_14287;var inst_14289 = 0;var state_14324__$1 = (function (){var statearr_14326 = state_14324;(statearr_14326[7] = inst_14288);
(statearr_14326[8] = inst_14289);
return statearr_14326;
})();var statearr_14327_14355 = state_14324__$1;(statearr_14327_14355[2] = null);
(statearr_14327_14355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 2))
{var state_14324__$1 = state_14324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14324__$1,4,ch);
} else
{if((state_val_14325 === 3))
{var inst_14322 = (state_14324[2]);var state_14324__$1 = state_14324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14324__$1,inst_14322);
} else
{if((state_val_14325 === 4))
{var inst_14292 = (state_14324[9]);var inst_14292__$1 = (state_14324[2]);var inst_14293 = (inst_14292__$1 == null);var inst_14294 = cljs.core.not.call(null,inst_14293);var state_14324__$1 = (function (){var statearr_14328 = state_14324;(statearr_14328[9] = inst_14292__$1);
return statearr_14328;
})();if(inst_14294)
{var statearr_14329_14356 = state_14324__$1;(statearr_14329_14356[1] = 5);
} else
{var statearr_14330_14357 = state_14324__$1;(statearr_14330_14357[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 5))
{var inst_14288 = (state_14324[7]);var inst_14289 = (state_14324[8]);var inst_14297 = (state_14324[10]);var inst_14292 = (state_14324[9]);var inst_14296 = (inst_14288[inst_14289] = inst_14292);var inst_14297__$1 = (inst_14289 + 1);var inst_14298 = (inst_14297__$1 < n);var state_14324__$1 = (function (){var statearr_14331 = state_14324;(statearr_14331[10] = inst_14297__$1);
(statearr_14331[11] = inst_14296);
return statearr_14331;
})();if(cljs.core.truth_(inst_14298))
{var statearr_14332_14358 = state_14324__$1;(statearr_14332_14358[1] = 8);
} else
{var statearr_14333_14359 = state_14324__$1;(statearr_14333_14359[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 6))
{var inst_14289 = (state_14324[8]);var inst_14310 = (inst_14289 > 0);var state_14324__$1 = state_14324;if(cljs.core.truth_(inst_14310))
{var statearr_14335_14360 = state_14324__$1;(statearr_14335_14360[1] = 12);
} else
{var statearr_14336_14361 = state_14324__$1;(statearr_14336_14361[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 7))
{var inst_14320 = (state_14324[2]);var state_14324__$1 = state_14324;var statearr_14337_14362 = state_14324__$1;(statearr_14337_14362[2] = inst_14320);
(statearr_14337_14362[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 8))
{var inst_14288 = (state_14324[7]);var inst_14297 = (state_14324[10]);var tmp14334 = inst_14288;var inst_14288__$1 = tmp14334;var inst_14289 = inst_14297;var state_14324__$1 = (function (){var statearr_14338 = state_14324;(statearr_14338[7] = inst_14288__$1);
(statearr_14338[8] = inst_14289);
return statearr_14338;
})();var statearr_14339_14363 = state_14324__$1;(statearr_14339_14363[2] = null);
(statearr_14339_14363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 9))
{var inst_14288 = (state_14324[7]);var inst_14302 = cljs.core.vec.call(null,inst_14288);var state_14324__$1 = state_14324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14324__$1,11,out,inst_14302);
} else
{if((state_val_14325 === 10))
{var inst_14308 = (state_14324[2]);var state_14324__$1 = state_14324;var statearr_14340_14364 = state_14324__$1;(statearr_14340_14364[2] = inst_14308);
(statearr_14340_14364[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 11))
{var inst_14304 = (state_14324[2]);var inst_14305 = (new Array(n));var inst_14288 = inst_14305;var inst_14289 = 0;var state_14324__$1 = (function (){var statearr_14341 = state_14324;(statearr_14341[7] = inst_14288);
(statearr_14341[8] = inst_14289);
(statearr_14341[12] = inst_14304);
return statearr_14341;
})();var statearr_14342_14365 = state_14324__$1;(statearr_14342_14365[2] = null);
(statearr_14342_14365[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 12))
{var inst_14288 = (state_14324[7]);var inst_14312 = cljs.core.vec.call(null,inst_14288);var state_14324__$1 = state_14324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14324__$1,15,out,inst_14312);
} else
{if((state_val_14325 === 13))
{var state_14324__$1 = state_14324;var statearr_14343_14366 = state_14324__$1;(statearr_14343_14366[2] = null);
(statearr_14343_14366[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 14))
{var inst_14317 = (state_14324[2]);var inst_14318 = cljs.core.async.close_BANG_.call(null,out);var state_14324__$1 = (function (){var statearr_14344 = state_14324;(statearr_14344[13] = inst_14317);
return statearr_14344;
})();var statearr_14345_14367 = state_14324__$1;(statearr_14345_14367[2] = inst_14318);
(statearr_14345_14367[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 15))
{var inst_14314 = (state_14324[2]);var state_14324__$1 = state_14324;var statearr_14346_14368 = state_14324__$1;(statearr_14346_14368[2] = inst_14314);
(statearr_14346_14368[1] = 14);
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
});})(c__6248__auto___14354,out))
;return ((function (switch__6233__auto__,c__6248__auto___14354,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_14350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14350[0] = state_machine__6234__auto__);
(statearr_14350[1] = 1);
return statearr_14350;
});
var state_machine__6234__auto____1 = (function (state_14324){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_14324);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e14351){if((e14351 instanceof Object))
{var ex__6237__auto__ = e14351;var statearr_14352_14369 = state_14324;(statearr_14352_14369[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14324);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14370 = state_14324;
state_14324 = G__14370;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_14324){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_14324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___14354,out))
})();var state__6250__auto__ = (function (){var statearr_14353 = f__6249__auto__.call(null);(statearr_14353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___14354);
return statearr_14353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___14354,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___14513 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___14513,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___14513,out){
return (function (state_14483){var state_val_14484 = (state_14483[1]);if((state_val_14484 === 1))
{var inst_14442 = [];var inst_14443 = inst_14442;var inst_14444 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14483__$1 = (function (){var statearr_14485 = state_14483;(statearr_14485[7] = inst_14443);
(statearr_14485[8] = inst_14444);
return statearr_14485;
})();var statearr_14486_14514 = state_14483__$1;(statearr_14486_14514[2] = null);
(statearr_14486_14514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14484 === 2))
{var state_14483__$1 = state_14483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14483__$1,4,ch);
} else
{if((state_val_14484 === 3))
{var inst_14481 = (state_14483[2]);var state_14483__$1 = state_14483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14483__$1,inst_14481);
} else
{if((state_val_14484 === 4))
{var inst_14447 = (state_14483[9]);var inst_14447__$1 = (state_14483[2]);var inst_14448 = (inst_14447__$1 == null);var inst_14449 = cljs.core.not.call(null,inst_14448);var state_14483__$1 = (function (){var statearr_14487 = state_14483;(statearr_14487[9] = inst_14447__$1);
return statearr_14487;
})();if(inst_14449)
{var statearr_14488_14515 = state_14483__$1;(statearr_14488_14515[1] = 5);
} else
{var statearr_14489_14516 = state_14483__$1;(statearr_14489_14516[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14484 === 5))
{var inst_14451 = (state_14483[10]);var inst_14447 = (state_14483[9]);var inst_14444 = (state_14483[8]);var inst_14451__$1 = f.call(null,inst_14447);var inst_14452 = cljs.core._EQ_.call(null,inst_14451__$1,inst_14444);var inst_14453 = cljs.core.keyword_identical_QMARK_.call(null,inst_14444,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14454 = (inst_14452) || (inst_14453);var state_14483__$1 = (function (){var statearr_14490 = state_14483;(statearr_14490[10] = inst_14451__$1);
return statearr_14490;
})();if(cljs.core.truth_(inst_14454))
{var statearr_14491_14517 = state_14483__$1;(statearr_14491_14517[1] = 8);
} else
{var statearr_14492_14518 = state_14483__$1;(statearr_14492_14518[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14484 === 6))
{var inst_14443 = (state_14483[7]);var inst_14468 = inst_14443.length;var inst_14469 = (inst_14468 > 0);var state_14483__$1 = state_14483;if(cljs.core.truth_(inst_14469))
{var statearr_14494_14519 = state_14483__$1;(statearr_14494_14519[1] = 12);
} else
{var statearr_14495_14520 = state_14483__$1;(statearr_14495_14520[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14484 === 7))
{var inst_14479 = (state_14483[2]);var state_14483__$1 = state_14483;var statearr_14496_14521 = state_14483__$1;(statearr_14496_14521[2] = inst_14479);
(statearr_14496_14521[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14484 === 8))
{var inst_14443 = (state_14483[7]);var inst_14451 = (state_14483[10]);var inst_14447 = (state_14483[9]);var inst_14456 = inst_14443.push(inst_14447);var tmp14493 = inst_14443;var inst_14443__$1 = tmp14493;var inst_14444 = inst_14451;var state_14483__$1 = (function (){var statearr_14497 = state_14483;(statearr_14497[7] = inst_14443__$1);
(statearr_14497[11] = inst_14456);
(statearr_14497[8] = inst_14444);
return statearr_14497;
})();var statearr_14498_14522 = state_14483__$1;(statearr_14498_14522[2] = null);
(statearr_14498_14522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14484 === 9))
{var inst_14443 = (state_14483[7]);var inst_14459 = cljs.core.vec.call(null,inst_14443);var state_14483__$1 = state_14483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14483__$1,11,out,inst_14459);
} else
{if((state_val_14484 === 10))
{var inst_14466 = (state_14483[2]);var state_14483__$1 = state_14483;var statearr_14499_14523 = state_14483__$1;(statearr_14499_14523[2] = inst_14466);
(statearr_14499_14523[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14484 === 11))
{var inst_14451 = (state_14483[10]);var inst_14447 = (state_14483[9]);var inst_14461 = (state_14483[2]);var inst_14462 = [];var inst_14463 = inst_14462.push(inst_14447);var inst_14443 = inst_14462;var inst_14444 = inst_14451;var state_14483__$1 = (function (){var statearr_14500 = state_14483;(statearr_14500[7] = inst_14443);
(statearr_14500[8] = inst_14444);
(statearr_14500[12] = inst_14463);
(statearr_14500[13] = inst_14461);
return statearr_14500;
})();var statearr_14501_14524 = state_14483__$1;(statearr_14501_14524[2] = null);
(statearr_14501_14524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14484 === 12))
{var inst_14443 = (state_14483[7]);var inst_14471 = cljs.core.vec.call(null,inst_14443);var state_14483__$1 = state_14483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14483__$1,15,out,inst_14471);
} else
{if((state_val_14484 === 13))
{var state_14483__$1 = state_14483;var statearr_14502_14525 = state_14483__$1;(statearr_14502_14525[2] = null);
(statearr_14502_14525[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14484 === 14))
{var inst_14476 = (state_14483[2]);var inst_14477 = cljs.core.async.close_BANG_.call(null,out);var state_14483__$1 = (function (){var statearr_14503 = state_14483;(statearr_14503[14] = inst_14476);
return statearr_14503;
})();var statearr_14504_14526 = state_14483__$1;(statearr_14504_14526[2] = inst_14477);
(statearr_14504_14526[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14484 === 15))
{var inst_14473 = (state_14483[2]);var state_14483__$1 = state_14483;var statearr_14505_14527 = state_14483__$1;(statearr_14505_14527[2] = inst_14473);
(statearr_14505_14527[1] = 14);
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
});})(c__6248__auto___14513,out))
;return ((function (switch__6233__auto__,c__6248__auto___14513,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_14509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14509[0] = state_machine__6234__auto__);
(statearr_14509[1] = 1);
return statearr_14509;
});
var state_machine__6234__auto____1 = (function (state_14483){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_14483);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e14510){if((e14510 instanceof Object))
{var ex__6237__auto__ = e14510;var statearr_14511_14528 = state_14483;(statearr_14511_14528[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14510;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14529 = state_14483;
state_14483 = G__14529;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_14483){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_14483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___14513,out))
})();var state__6250__auto__ = (function (){var statearr_14512 = f__6249__auto__.call(null);(statearr_14512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___14513);
return statearr_14512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___14513,out))
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