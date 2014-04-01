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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11753 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11753 = (function (f,fn_handler,meta11754){
this.f = f;
this.fn_handler = fn_handler;
this.meta11754 = meta11754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11753.cljs$lang$type = true;
cljs.core.async.t11753.cljs$lang$ctorStr = "cljs.core.async/t11753";
cljs.core.async.t11753.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t11753");
});
cljs.core.async.t11753.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11755){var self__ = this;
var _11755__$1 = this;return self__.meta11754;
});
cljs.core.async.t11753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11755,meta11754__$1){var self__ = this;
var _11755__$1 = this;return (new cljs.core.async.t11753(self__.f,self__.fn_handler,meta11754__$1));
});
cljs.core.async.__GT_t11753 = (function __GT_t11753(f__$1,fn_handler__$1,meta11754){return (new cljs.core.async.t11753(f__$1,fn_handler__$1,meta11754));
});
}
return (new cljs.core.async.t11753(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11757 = buff;if(G__11757)
{var bit__4112__auto__ = null;if(cljs.core.truth_((function (){var or__3462__auto__ = bit__4112__auto__;if(cljs.core.truth_(or__3462__auto__))
{return or__3462__auto__;
} else
{return G__11757.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11757.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11757);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11757);
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
{var val_11758 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11758);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11758,ret){
return (function (){return fn1.call(null,val_11758);
});})(val_11758,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3450__auto__ = ret;if(cljs.core.truth_(and__3450__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3450__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4310__auto___11759 = n;var x_11760 = 0;while(true){
if((x_11760 < n__4310__auto___11759))
{(a[x_11760] = 0);
{
var G__11761 = (x_11760 + 1);
x_11760 = G__11761;
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
var G__11762 = (i + 1);
i = G__11762;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11766 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11766 = (function (flag,alt_flag,meta11767){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11767 = meta11767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11766.cljs$lang$type = true;
cljs.core.async.t11766.cljs$lang$ctorStr = "cljs.core.async/t11766";
cljs.core.async.t11766.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t11766");
});})(flag))
;
cljs.core.async.t11766.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11768){var self__ = this;
var _11768__$1 = this;return self__.meta11767;
});})(flag))
;
cljs.core.async.t11766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11768,meta11767__$1){var self__ = this;
var _11768__$1 = this;return (new cljs.core.async.t11766(self__.flag,self__.alt_flag,meta11767__$1));
});})(flag))
;
cljs.core.async.__GT_t11766 = ((function (flag){
return (function __GT_t11766(flag__$1,alt_flag__$1,meta11767){return (new cljs.core.async.t11766(flag__$1,alt_flag__$1,meta11767));
});})(flag))
;
}
return (new cljs.core.async.t11766(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11772 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11772 = (function (cb,flag,alt_handler,meta11773){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11773 = meta11773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11772.cljs$lang$type = true;
cljs.core.async.t11772.cljs$lang$ctorStr = "cljs.core.async/t11772";
cljs.core.async.t11772.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t11772");
});
cljs.core.async.t11772.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11772.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11772.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11774){var self__ = this;
var _11774__$1 = this;return self__.meta11773;
});
cljs.core.async.t11772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11774,meta11773__$1){var self__ = this;
var _11774__$1 = this;return (new cljs.core.async.t11772(self__.cb,self__.flag,self__.alt_handler,meta11773__$1));
});
cljs.core.async.__GT_t11772 = (function __GT_t11772(cb__$1,flag__$1,alt_handler__$1,meta11773){return (new cljs.core.async.t11772(cb__$1,flag__$1,alt_handler__$1,meta11773));
});
}
return (new cljs.core.async.t11772(cb,flag,alt_handler,null));
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
return (function (p1__11775_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11775_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3462__auto__ = wport;if(cljs.core.truth_(or__3462__auto__))
{return or__3462__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11776 = (i + 1);
i = G__11776;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3462__auto__ = ret;if(cljs.core.truth_(or__3462__auto__))
{return or__3462__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3450__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3450__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3450__auto__;
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
var alts_BANG___delegate = function (ports,p__11777){var map__11779 = p__11777;var map__11779__$1 = ((cljs.core.seq_QMARK_.call(null,map__11779))?cljs.core.apply.call(null,cljs.core.hash_map,map__11779):map__11779);var opts = map__11779__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11777 = null;if (arguments.length > 1) {
  p__11777 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11777);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11780){
var ports = cljs.core.first(arglist__11780);
var p__11777 = cljs.core.rest(arglist__11780);
return alts_BANG___delegate(ports,p__11777);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11788 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11788 = (function (ch,f,map_LT_,meta11789){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11789 = meta11789;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11788.cljs$lang$type = true;
cljs.core.async.t11788.cljs$lang$ctorStr = "cljs.core.async/t11788";
cljs.core.async.t11788.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t11788");
});
cljs.core.async.t11788.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11788.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11788.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11788.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11791 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11791 = (function (fn1,_,meta11789,ch,f,map_LT_,meta11792){
this.fn1 = fn1;
this._ = _;
this.meta11789 = meta11789;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11792 = meta11792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11791.cljs$lang$type = true;
cljs.core.async.t11791.cljs$lang$ctorStr = "cljs.core.async/t11791";
cljs.core.async.t11791.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t11791");
});})(___$1))
;
cljs.core.async.t11791.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11791.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11781_SHARP_){return f1.call(null,(((p1__11781_SHARP_ == null))?null:self__.f.call(null,p1__11781_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11793){var self__ = this;
var _11793__$1 = this;return self__.meta11792;
});})(___$1))
;
cljs.core.async.t11791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11793,meta11792__$1){var self__ = this;
var _11793__$1 = this;return (new cljs.core.async.t11791(self__.fn1,self__._,self__.meta11789,self__.ch,self__.f,self__.map_LT_,meta11792__$1));
});})(___$1))
;
cljs.core.async.__GT_t11791 = ((function (___$1){
return (function __GT_t11791(fn1__$1,___$2,meta11789__$1,ch__$2,f__$2,map_LT___$2,meta11792){return (new cljs.core.async.t11791(fn1__$1,___$2,meta11789__$1,ch__$2,f__$2,map_LT___$2,meta11792));
});})(___$1))
;
}
return (new cljs.core.async.t11791(fn1,___$1,self__.meta11789,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3450__auto__ = ret;if(cljs.core.truth_(and__3450__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3450__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11788.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11788.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11790){var self__ = this;
var _11790__$1 = this;return self__.meta11789;
});
cljs.core.async.t11788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11790,meta11789__$1){var self__ = this;
var _11790__$1 = this;return (new cljs.core.async.t11788(self__.ch,self__.f,self__.map_LT_,meta11789__$1));
});
cljs.core.async.__GT_t11788 = (function __GT_t11788(ch__$1,f__$1,map_LT___$1,meta11789){return (new cljs.core.async.t11788(ch__$1,f__$1,map_LT___$1,meta11789));
});
}
return (new cljs.core.async.t11788(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11797 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11797 = (function (ch,f,map_GT_,meta11798){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11798 = meta11798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11797.cljs$lang$type = true;
cljs.core.async.t11797.cljs$lang$ctorStr = "cljs.core.async/t11797";
cljs.core.async.t11797.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t11797");
});
cljs.core.async.t11797.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11797.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11797.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11797.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11797.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11797.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11799){var self__ = this;
var _11799__$1 = this;return self__.meta11798;
});
cljs.core.async.t11797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11799,meta11798__$1){var self__ = this;
var _11799__$1 = this;return (new cljs.core.async.t11797(self__.ch,self__.f,self__.map_GT_,meta11798__$1));
});
cljs.core.async.__GT_t11797 = (function __GT_t11797(ch__$1,f__$1,map_GT___$1,meta11798){return (new cljs.core.async.t11797(ch__$1,f__$1,map_GT___$1,meta11798));
});
}
return (new cljs.core.async.t11797(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11803 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11803 = (function (ch,p,filter_GT_,meta11804){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11804 = meta11804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11803.cljs$lang$type = true;
cljs.core.async.t11803.cljs$lang$ctorStr = "cljs.core.async/t11803";
cljs.core.async.t11803.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t11803");
});
cljs.core.async.t11803.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11803.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11803.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11805){var self__ = this;
var _11805__$1 = this;return self__.meta11804;
});
cljs.core.async.t11803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11805,meta11804__$1){var self__ = this;
var _11805__$1 = this;return (new cljs.core.async.t11803(self__.ch,self__.p,self__.filter_GT_,meta11804__$1));
});
cljs.core.async.__GT_t11803 = (function __GT_t11803(ch__$1,p__$1,filter_GT___$1,meta11804){return (new cljs.core.async.t11803(ch__$1,p__$1,filter_GT___$1,meta11804));
});
}
return (new cljs.core.async.t11803(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___11888 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___11888,out){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___11888,out){
return (function (state_11867){var state_val_11868 = (state_11867[1]);if((state_val_11868 === 1))
{var state_11867__$1 = state_11867;var statearr_11869_11889 = state_11867__$1;(statearr_11869_11889[2] = null);
(statearr_11869_11889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11868 === 2))
{var state_11867__$1 = state_11867;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11867__$1,4,ch);
} else
{if((state_val_11868 === 3))
{var inst_11865 = (state_11867[2]);var state_11867__$1 = state_11867;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11867__$1,inst_11865);
} else
{if((state_val_11868 === 4))
{var inst_11849 = (state_11867[7]);var inst_11849__$1 = (state_11867[2]);var inst_11850 = (inst_11849__$1 == null);var state_11867__$1 = (function (){var statearr_11870 = state_11867;(statearr_11870[7] = inst_11849__$1);
return statearr_11870;
})();if(cljs.core.truth_(inst_11850))
{var statearr_11871_11890 = state_11867__$1;(statearr_11871_11890[1] = 5);
} else
{var statearr_11872_11891 = state_11867__$1;(statearr_11872_11891[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11868 === 5))
{var inst_11852 = cljs.core.async.close_BANG_.call(null,out);var state_11867__$1 = state_11867;var statearr_11873_11892 = state_11867__$1;(statearr_11873_11892[2] = inst_11852);
(statearr_11873_11892[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11868 === 6))
{var inst_11849 = (state_11867[7]);var inst_11854 = p.call(null,inst_11849);var state_11867__$1 = state_11867;if(cljs.core.truth_(inst_11854))
{var statearr_11874_11893 = state_11867__$1;(statearr_11874_11893[1] = 8);
} else
{var statearr_11875_11894 = state_11867__$1;(statearr_11875_11894[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11868 === 7))
{var inst_11863 = (state_11867[2]);var state_11867__$1 = state_11867;var statearr_11876_11895 = state_11867__$1;(statearr_11876_11895[2] = inst_11863);
(statearr_11876_11895[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11868 === 8))
{var inst_11849 = (state_11867[7]);var state_11867__$1 = state_11867;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11867__$1,11,out,inst_11849);
} else
{if((state_val_11868 === 9))
{var state_11867__$1 = state_11867;var statearr_11877_11896 = state_11867__$1;(statearr_11877_11896[2] = null);
(statearr_11877_11896[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11868 === 10))
{var inst_11860 = (state_11867[2]);var state_11867__$1 = (function (){var statearr_11878 = state_11867;(statearr_11878[8] = inst_11860);
return statearr_11878;
})();var statearr_11879_11897 = state_11867__$1;(statearr_11879_11897[2] = null);
(statearr_11879_11897[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11868 === 11))
{var inst_11857 = (state_11867[2]);var state_11867__$1 = state_11867;var statearr_11880_11898 = state_11867__$1;(statearr_11880_11898[2] = inst_11857);
(statearr_11880_11898[1] = 10);
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
});})(c__6232__auto___11888,out))
;return ((function (switch__6217__auto__,c__6232__auto___11888,out){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_11884 = [null,null,null,null,null,null,null,null,null];(statearr_11884[0] = state_machine__6218__auto__);
(statearr_11884[1] = 1);
return statearr_11884;
});
var state_machine__6218__auto____1 = (function (state_11867){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_11867);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e11885){if((e11885 instanceof Object))
{var ex__6221__auto__ = e11885;var statearr_11886_11899 = state_11867;(statearr_11886_11899[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11867);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11885;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11900 = state_11867;
state_11867 = G__11900;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_11867){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_11867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___11888,out))
})();var state__6234__auto__ = (function (){var statearr_11887 = f__6233__auto__.call(null);(statearr_11887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___11888);
return statearr_11887;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___11888,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6232__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto__){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto__){
return (function (state_12052){var state_val_12053 = (state_12052[1]);if((state_val_12053 === 1))
{var state_12052__$1 = state_12052;var statearr_12054_12091 = state_12052__$1;(statearr_12054_12091[2] = null);
(statearr_12054_12091[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 2))
{var state_12052__$1 = state_12052;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12052__$1,4,in$);
} else
{if((state_val_12053 === 3))
{var inst_12050 = (state_12052[2]);var state_12052__$1 = state_12052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12052__$1,inst_12050);
} else
{if((state_val_12053 === 4))
{var inst_11998 = (state_12052[7]);var inst_11998__$1 = (state_12052[2]);var inst_11999 = (inst_11998__$1 == null);var state_12052__$1 = (function (){var statearr_12055 = state_12052;(statearr_12055[7] = inst_11998__$1);
return statearr_12055;
})();if(cljs.core.truth_(inst_11999))
{var statearr_12056_12092 = state_12052__$1;(statearr_12056_12092[1] = 5);
} else
{var statearr_12057_12093 = state_12052__$1;(statearr_12057_12093[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 5))
{var inst_12001 = cljs.core.async.close_BANG_.call(null,out);var state_12052__$1 = state_12052;var statearr_12058_12094 = state_12052__$1;(statearr_12058_12094[2] = inst_12001);
(statearr_12058_12094[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 6))
{var inst_11998 = (state_12052[7]);var inst_12003 = f.call(null,inst_11998);var inst_12008 = cljs.core.seq.call(null,inst_12003);var inst_12009 = inst_12008;var inst_12010 = null;var inst_12011 = 0;var inst_12012 = 0;var state_12052__$1 = (function (){var statearr_12059 = state_12052;(statearr_12059[8] = inst_12009);
(statearr_12059[9] = inst_12011);
(statearr_12059[10] = inst_12012);
(statearr_12059[11] = inst_12010);
return statearr_12059;
})();var statearr_12060_12095 = state_12052__$1;(statearr_12060_12095[2] = null);
(statearr_12060_12095[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 7))
{var inst_12048 = (state_12052[2]);var state_12052__$1 = state_12052;var statearr_12061_12096 = state_12052__$1;(statearr_12061_12096[2] = inst_12048);
(statearr_12061_12096[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 8))
{var inst_12011 = (state_12052[9]);var inst_12012 = (state_12052[10]);var inst_12014 = (inst_12012 < inst_12011);var inst_12015 = inst_12014;var state_12052__$1 = state_12052;if(cljs.core.truth_(inst_12015))
{var statearr_12062_12097 = state_12052__$1;(statearr_12062_12097[1] = 10);
} else
{var statearr_12063_12098 = state_12052__$1;(statearr_12063_12098[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 9))
{var inst_12045 = (state_12052[2]);var state_12052__$1 = (function (){var statearr_12064 = state_12052;(statearr_12064[12] = inst_12045);
return statearr_12064;
})();var statearr_12065_12099 = state_12052__$1;(statearr_12065_12099[2] = null);
(statearr_12065_12099[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 10))
{var inst_12012 = (state_12052[10]);var inst_12010 = (state_12052[11]);var inst_12017 = cljs.core._nth.call(null,inst_12010,inst_12012);var state_12052__$1 = state_12052;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12052__$1,13,out,inst_12017);
} else
{if((state_val_12053 === 11))
{var inst_12023 = (state_12052[13]);var inst_12009 = (state_12052[8]);var inst_12023__$1 = cljs.core.seq.call(null,inst_12009);var state_12052__$1 = (function (){var statearr_12069 = state_12052;(statearr_12069[13] = inst_12023__$1);
return statearr_12069;
})();if(inst_12023__$1)
{var statearr_12070_12100 = state_12052__$1;(statearr_12070_12100[1] = 14);
} else
{var statearr_12071_12101 = state_12052__$1;(statearr_12071_12101[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 12))
{var inst_12043 = (state_12052[2]);var state_12052__$1 = state_12052;var statearr_12072_12102 = state_12052__$1;(statearr_12072_12102[2] = inst_12043);
(statearr_12072_12102[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 13))
{var inst_12009 = (state_12052[8]);var inst_12011 = (state_12052[9]);var inst_12012 = (state_12052[10]);var inst_12010 = (state_12052[11]);var inst_12019 = (state_12052[2]);var inst_12020 = (inst_12012 + 1);var tmp12066 = inst_12009;var tmp12067 = inst_12011;var tmp12068 = inst_12010;var inst_12009__$1 = tmp12066;var inst_12010__$1 = tmp12068;var inst_12011__$1 = tmp12067;var inst_12012__$1 = inst_12020;var state_12052__$1 = (function (){var statearr_12073 = state_12052;(statearr_12073[14] = inst_12019);
(statearr_12073[8] = inst_12009__$1);
(statearr_12073[9] = inst_12011__$1);
(statearr_12073[10] = inst_12012__$1);
(statearr_12073[11] = inst_12010__$1);
return statearr_12073;
})();var statearr_12074_12103 = state_12052__$1;(statearr_12074_12103[2] = null);
(statearr_12074_12103[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 14))
{var inst_12023 = (state_12052[13]);var inst_12025 = cljs.core.chunked_seq_QMARK_.call(null,inst_12023);var state_12052__$1 = state_12052;if(inst_12025)
{var statearr_12075_12104 = state_12052__$1;(statearr_12075_12104[1] = 17);
} else
{var statearr_12076_12105 = state_12052__$1;(statearr_12076_12105[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 15))
{var state_12052__$1 = state_12052;var statearr_12077_12106 = state_12052__$1;(statearr_12077_12106[2] = null);
(statearr_12077_12106[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 16))
{var inst_12041 = (state_12052[2]);var state_12052__$1 = state_12052;var statearr_12078_12107 = state_12052__$1;(statearr_12078_12107[2] = inst_12041);
(statearr_12078_12107[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 17))
{var inst_12023 = (state_12052[13]);var inst_12027 = cljs.core.chunk_first.call(null,inst_12023);var inst_12028 = cljs.core.chunk_rest.call(null,inst_12023);var inst_12029 = cljs.core.count.call(null,inst_12027);var inst_12009 = inst_12028;var inst_12010 = inst_12027;var inst_12011 = inst_12029;var inst_12012 = 0;var state_12052__$1 = (function (){var statearr_12079 = state_12052;(statearr_12079[8] = inst_12009);
(statearr_12079[9] = inst_12011);
(statearr_12079[10] = inst_12012);
(statearr_12079[11] = inst_12010);
return statearr_12079;
})();var statearr_12080_12108 = state_12052__$1;(statearr_12080_12108[2] = null);
(statearr_12080_12108[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 18))
{var inst_12023 = (state_12052[13]);var inst_12032 = cljs.core.first.call(null,inst_12023);var state_12052__$1 = state_12052;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12052__$1,20,out,inst_12032);
} else
{if((state_val_12053 === 19))
{var inst_12038 = (state_12052[2]);var state_12052__$1 = state_12052;var statearr_12081_12109 = state_12052__$1;(statearr_12081_12109[2] = inst_12038);
(statearr_12081_12109[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 20))
{var inst_12023 = (state_12052[13]);var inst_12034 = (state_12052[2]);var inst_12035 = cljs.core.next.call(null,inst_12023);var inst_12009 = inst_12035;var inst_12010 = null;var inst_12011 = 0;var inst_12012 = 0;var state_12052__$1 = (function (){var statearr_12082 = state_12052;(statearr_12082[15] = inst_12034);
(statearr_12082[8] = inst_12009);
(statearr_12082[9] = inst_12011);
(statearr_12082[10] = inst_12012);
(statearr_12082[11] = inst_12010);
return statearr_12082;
})();var statearr_12083_12110 = state_12052__$1;(statearr_12083_12110[2] = null);
(statearr_12083_12110[1] = 8);
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
});})(c__6232__auto__))
;return ((function (switch__6217__auto__,c__6232__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12087[0] = state_machine__6218__auto__);
(statearr_12087[1] = 1);
return statearr_12087;
});
var state_machine__6218__auto____1 = (function (state_12052){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12052);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12088){if((e12088 instanceof Object))
{var ex__6221__auto__ = e12088;var statearr_12089_12111 = state_12052;(statearr_12089_12111[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12052);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12112 = state_12052;
state_12052 = G__12112;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12052){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto__))
})();var state__6234__auto__ = (function (){var statearr_12090 = f__6233__auto__.call(null);(statearr_12090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto__);
return statearr_12090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto__))
);
return c__6232__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6232__auto___12193 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___12193){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___12193){
return (function (state_12172){var state_val_12173 = (state_12172[1]);if((state_val_12173 === 1))
{var state_12172__$1 = state_12172;var statearr_12174_12194 = state_12172__$1;(statearr_12174_12194[2] = null);
(statearr_12174_12194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 2))
{var state_12172__$1 = state_12172;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12172__$1,4,from);
} else
{if((state_val_12173 === 3))
{var inst_12170 = (state_12172[2]);var state_12172__$1 = state_12172;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12172__$1,inst_12170);
} else
{if((state_val_12173 === 4))
{var inst_12155 = (state_12172[7]);var inst_12155__$1 = (state_12172[2]);var inst_12156 = (inst_12155__$1 == null);var state_12172__$1 = (function (){var statearr_12175 = state_12172;(statearr_12175[7] = inst_12155__$1);
return statearr_12175;
})();if(cljs.core.truth_(inst_12156))
{var statearr_12176_12195 = state_12172__$1;(statearr_12176_12195[1] = 5);
} else
{var statearr_12177_12196 = state_12172__$1;(statearr_12177_12196[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 5))
{var state_12172__$1 = state_12172;if(cljs.core.truth_(close_QMARK_))
{var statearr_12178_12197 = state_12172__$1;(statearr_12178_12197[1] = 8);
} else
{var statearr_12179_12198 = state_12172__$1;(statearr_12179_12198[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 6))
{var inst_12155 = (state_12172[7]);var state_12172__$1 = state_12172;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12172__$1,11,to,inst_12155);
} else
{if((state_val_12173 === 7))
{var inst_12168 = (state_12172[2]);var state_12172__$1 = state_12172;var statearr_12180_12199 = state_12172__$1;(statearr_12180_12199[2] = inst_12168);
(statearr_12180_12199[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 8))
{var inst_12159 = cljs.core.async.close_BANG_.call(null,to);var state_12172__$1 = state_12172;var statearr_12181_12200 = state_12172__$1;(statearr_12181_12200[2] = inst_12159);
(statearr_12181_12200[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 9))
{var state_12172__$1 = state_12172;var statearr_12182_12201 = state_12172__$1;(statearr_12182_12201[2] = null);
(statearr_12182_12201[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 10))
{var inst_12162 = (state_12172[2]);var state_12172__$1 = state_12172;var statearr_12183_12202 = state_12172__$1;(statearr_12183_12202[2] = inst_12162);
(statearr_12183_12202[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 11))
{var inst_12165 = (state_12172[2]);var state_12172__$1 = (function (){var statearr_12184 = state_12172;(statearr_12184[8] = inst_12165);
return statearr_12184;
})();var statearr_12185_12203 = state_12172__$1;(statearr_12185_12203[2] = null);
(statearr_12185_12203[1] = 2);
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
});})(c__6232__auto___12193))
;return ((function (switch__6217__auto__,c__6232__auto___12193){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12189 = [null,null,null,null,null,null,null,null,null];(statearr_12189[0] = state_machine__6218__auto__);
(statearr_12189[1] = 1);
return statearr_12189;
});
var state_machine__6218__auto____1 = (function (state_12172){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12172);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12190){if((e12190 instanceof Object))
{var ex__6221__auto__ = e12190;var statearr_12191_12204 = state_12172;(statearr_12191_12204[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12172);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12205 = state_12172;
state_12172 = G__12205;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12172){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___12193))
})();var state__6234__auto__ = (function (){var statearr_12192 = f__6233__auto__.call(null);(statearr_12192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___12193);
return statearr_12192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___12193))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6232__auto___12292 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___12292,tc,fc){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___12292,tc,fc){
return (function (state_12270){var state_val_12271 = (state_12270[1]);if((state_val_12271 === 1))
{var state_12270__$1 = state_12270;var statearr_12272_12293 = state_12270__$1;(statearr_12272_12293[2] = null);
(statearr_12272_12293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12271 === 2))
{var state_12270__$1 = state_12270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12270__$1,4,ch);
} else
{if((state_val_12271 === 3))
{var inst_12268 = (state_12270[2]);var state_12270__$1 = state_12270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12270__$1,inst_12268);
} else
{if((state_val_12271 === 4))
{var inst_12251 = (state_12270[7]);var inst_12251__$1 = (state_12270[2]);var inst_12252 = (inst_12251__$1 == null);var state_12270__$1 = (function (){var statearr_12273 = state_12270;(statearr_12273[7] = inst_12251__$1);
return statearr_12273;
})();if(cljs.core.truth_(inst_12252))
{var statearr_12274_12294 = state_12270__$1;(statearr_12274_12294[1] = 5);
} else
{var statearr_12275_12295 = state_12270__$1;(statearr_12275_12295[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12271 === 5))
{var inst_12254 = cljs.core.async.close_BANG_.call(null,tc);var inst_12255 = cljs.core.async.close_BANG_.call(null,fc);var state_12270__$1 = (function (){var statearr_12276 = state_12270;(statearr_12276[8] = inst_12254);
return statearr_12276;
})();var statearr_12277_12296 = state_12270__$1;(statearr_12277_12296[2] = inst_12255);
(statearr_12277_12296[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12271 === 6))
{var inst_12251 = (state_12270[7]);var inst_12257 = p.call(null,inst_12251);var state_12270__$1 = state_12270;if(cljs.core.truth_(inst_12257))
{var statearr_12278_12297 = state_12270__$1;(statearr_12278_12297[1] = 9);
} else
{var statearr_12279_12298 = state_12270__$1;(statearr_12279_12298[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12271 === 7))
{var inst_12266 = (state_12270[2]);var state_12270__$1 = state_12270;var statearr_12280_12299 = state_12270__$1;(statearr_12280_12299[2] = inst_12266);
(statearr_12280_12299[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12271 === 8))
{var inst_12263 = (state_12270[2]);var state_12270__$1 = (function (){var statearr_12281 = state_12270;(statearr_12281[9] = inst_12263);
return statearr_12281;
})();var statearr_12282_12300 = state_12270__$1;(statearr_12282_12300[2] = null);
(statearr_12282_12300[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12271 === 9))
{var state_12270__$1 = state_12270;var statearr_12283_12301 = state_12270__$1;(statearr_12283_12301[2] = tc);
(statearr_12283_12301[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12271 === 10))
{var state_12270__$1 = state_12270;var statearr_12284_12302 = state_12270__$1;(statearr_12284_12302[2] = fc);
(statearr_12284_12302[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12271 === 11))
{var inst_12251 = (state_12270[7]);var inst_12261 = (state_12270[2]);var state_12270__$1 = state_12270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12270__$1,8,inst_12261,inst_12251);
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
});})(c__6232__auto___12292,tc,fc))
;return ((function (switch__6217__auto__,c__6232__auto___12292,tc,fc){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12288 = [null,null,null,null,null,null,null,null,null,null];(statearr_12288[0] = state_machine__6218__auto__);
(statearr_12288[1] = 1);
return statearr_12288;
});
var state_machine__6218__auto____1 = (function (state_12270){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12270);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12289){if((e12289 instanceof Object))
{var ex__6221__auto__ = e12289;var statearr_12290_12303 = state_12270;(statearr_12290_12303[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12270);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12289;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12304 = state_12270;
state_12270 = G__12304;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12270){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___12292,tc,fc))
})();var state__6234__auto__ = (function (){var statearr_12291 = f__6233__auto__.call(null);(statearr_12291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___12292);
return statearr_12291;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___12292,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6232__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto__){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto__){
return (function (state_12351){var state_val_12352 = (state_12351[1]);if((state_val_12352 === 7))
{var inst_12347 = (state_12351[2]);var state_12351__$1 = state_12351;var statearr_12353_12369 = state_12351__$1;(statearr_12353_12369[2] = inst_12347);
(statearr_12353_12369[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 6))
{var inst_12340 = (state_12351[7]);var inst_12337 = (state_12351[8]);var inst_12344 = f.call(null,inst_12337,inst_12340);var inst_12337__$1 = inst_12344;var state_12351__$1 = (function (){var statearr_12354 = state_12351;(statearr_12354[8] = inst_12337__$1);
return statearr_12354;
})();var statearr_12355_12370 = state_12351__$1;(statearr_12355_12370[2] = null);
(statearr_12355_12370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 5))
{var inst_12337 = (state_12351[8]);var state_12351__$1 = state_12351;var statearr_12356_12371 = state_12351__$1;(statearr_12356_12371[2] = inst_12337);
(statearr_12356_12371[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 4))
{var inst_12340 = (state_12351[7]);var inst_12340__$1 = (state_12351[2]);var inst_12341 = (inst_12340__$1 == null);var state_12351__$1 = (function (){var statearr_12357 = state_12351;(statearr_12357[7] = inst_12340__$1);
return statearr_12357;
})();if(cljs.core.truth_(inst_12341))
{var statearr_12358_12372 = state_12351__$1;(statearr_12358_12372[1] = 5);
} else
{var statearr_12359_12373 = state_12351__$1;(statearr_12359_12373[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12352 === 3))
{var inst_12349 = (state_12351[2]);var state_12351__$1 = state_12351;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12351__$1,inst_12349);
} else
{if((state_val_12352 === 2))
{var state_12351__$1 = state_12351;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12351__$1,4,ch);
} else
{if((state_val_12352 === 1))
{var inst_12337 = init;var state_12351__$1 = (function (){var statearr_12360 = state_12351;(statearr_12360[8] = inst_12337);
return statearr_12360;
})();var statearr_12361_12374 = state_12351__$1;(statearr_12361_12374[2] = null);
(statearr_12361_12374[1] = 2);
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
});})(c__6232__auto__))
;return ((function (switch__6217__auto__,c__6232__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12365 = [null,null,null,null,null,null,null,null,null];(statearr_12365[0] = state_machine__6218__auto__);
(statearr_12365[1] = 1);
return statearr_12365;
});
var state_machine__6218__auto____1 = (function (state_12351){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12351);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12366){if((e12366 instanceof Object))
{var ex__6221__auto__ = e12366;var statearr_12367_12375 = state_12351;(statearr_12367_12375[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12351);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12366;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12376 = state_12351;
state_12351 = G__12376;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12351){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto__))
})();var state__6234__auto__ = (function (){var statearr_12368 = f__6233__auto__.call(null);(statearr_12368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto__);
return statearr_12368;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto__))
);
return c__6232__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6232__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto__){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto__){
return (function (state_12438){var state_val_12439 = (state_12438[1]);if((state_val_12439 === 1))
{var inst_12418 = cljs.core.seq.call(null,coll);var inst_12419 = inst_12418;var state_12438__$1 = (function (){var statearr_12440 = state_12438;(statearr_12440[7] = inst_12419);
return statearr_12440;
})();var statearr_12441_12459 = state_12438__$1;(statearr_12441_12459[2] = null);
(statearr_12441_12459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 2))
{var inst_12419 = (state_12438[7]);var state_12438__$1 = state_12438;if(cljs.core.truth_(inst_12419))
{var statearr_12442_12460 = state_12438__$1;(statearr_12442_12460[1] = 4);
} else
{var statearr_12443_12461 = state_12438__$1;(statearr_12443_12461[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 3))
{var inst_12436 = (state_12438[2]);var state_12438__$1 = state_12438;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12438__$1,inst_12436);
} else
{if((state_val_12439 === 4))
{var inst_12419 = (state_12438[7]);var inst_12422 = cljs.core.first.call(null,inst_12419);var state_12438__$1 = state_12438;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12438__$1,7,ch,inst_12422);
} else
{if((state_val_12439 === 5))
{var state_12438__$1 = state_12438;if(cljs.core.truth_(close_QMARK_))
{var statearr_12444_12462 = state_12438__$1;(statearr_12444_12462[1] = 8);
} else
{var statearr_12445_12463 = state_12438__$1;(statearr_12445_12463[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 6))
{var inst_12434 = (state_12438[2]);var state_12438__$1 = state_12438;var statearr_12446_12464 = state_12438__$1;(statearr_12446_12464[2] = inst_12434);
(statearr_12446_12464[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 7))
{var inst_12419 = (state_12438[7]);var inst_12424 = (state_12438[2]);var inst_12425 = cljs.core.next.call(null,inst_12419);var inst_12419__$1 = inst_12425;var state_12438__$1 = (function (){var statearr_12447 = state_12438;(statearr_12447[8] = inst_12424);
(statearr_12447[7] = inst_12419__$1);
return statearr_12447;
})();var statearr_12448_12465 = state_12438__$1;(statearr_12448_12465[2] = null);
(statearr_12448_12465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 8))
{var inst_12429 = cljs.core.async.close_BANG_.call(null,ch);var state_12438__$1 = state_12438;var statearr_12449_12466 = state_12438__$1;(statearr_12449_12466[2] = inst_12429);
(statearr_12449_12466[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 9))
{var state_12438__$1 = state_12438;var statearr_12450_12467 = state_12438__$1;(statearr_12450_12467[2] = null);
(statearr_12450_12467[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 10))
{var inst_12432 = (state_12438[2]);var state_12438__$1 = state_12438;var statearr_12451_12468 = state_12438__$1;(statearr_12451_12468[2] = inst_12432);
(statearr_12451_12468[1] = 6);
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
});})(c__6232__auto__))
;return ((function (switch__6217__auto__,c__6232__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12455 = [null,null,null,null,null,null,null,null,null];(statearr_12455[0] = state_machine__6218__auto__);
(statearr_12455[1] = 1);
return statearr_12455;
});
var state_machine__6218__auto____1 = (function (state_12438){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12438);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12456){if((e12456 instanceof Object))
{var ex__6221__auto__ = e12456;var statearr_12457_12469 = state_12438;(statearr_12457_12469[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12438);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12456;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12470 = state_12438;
state_12438 = G__12470;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12438){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto__))
})();var state__6234__auto__ = (function (){var statearr_12458 = f__6233__auto__.call(null);(statearr_12458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto__);
return statearr_12458;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto__))
);
return c__6232__auto__;
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
cljs.core.async.Mux = (function (){var obj12472 = {};return obj12472;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3450__auto__ = _;if(and__3450__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3450__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4089__auto__ = (((_ == null))?null:_);return (function (){var or__3462__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12474 = {};return obj12474;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12698 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12698 = (function (cs,ch,mult,meta12699){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12699 = meta12699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12698.cljs$lang$type = true;
cljs.core.async.t12698.cljs$lang$ctorStr = "cljs.core.async/t12698";
cljs.core.async.t12698.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t12698");
});})(cs))
;
cljs.core.async.t12698.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12698.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12698.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12698.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12698.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12698.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12698.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12700){var self__ = this;
var _12700__$1 = this;return self__.meta12699;
});})(cs))
;
cljs.core.async.t12698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12700,meta12699__$1){var self__ = this;
var _12700__$1 = this;return (new cljs.core.async.t12698(self__.cs,self__.ch,self__.mult,meta12699__$1));
});})(cs))
;
cljs.core.async.__GT_t12698 = ((function (cs){
return (function __GT_t12698(cs__$1,ch__$1,mult__$1,meta12699){return (new cljs.core.async.t12698(cs__$1,ch__$1,mult__$1,meta12699));
});})(cs))
;
}
return (new cljs.core.async.t12698(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6232__auto___12921 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___12921,cs,m,dchan,dctr,done){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___12921,cs,m,dchan,dctr,done){
return (function (state_12835){var state_val_12836 = (state_12835[1]);if((state_val_12836 === 32))
{var inst_12779 = (state_12835[7]);var inst_12703 = (state_12835[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12835,31,Object,null,30);var inst_12786 = cljs.core.async.put_BANG_.call(null,inst_12779,inst_12703,done);var state_12835__$1 = state_12835;var statearr_12837_12922 = state_12835__$1;(statearr_12837_12922[2] = inst_12786);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12835__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 1))
{var state_12835__$1 = state_12835;var statearr_12838_12923 = state_12835__$1;(statearr_12838_12923[2] = null);
(statearr_12838_12923[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 33))
{var inst_12792 = (state_12835[9]);var inst_12794 = cljs.core.chunked_seq_QMARK_.call(null,inst_12792);var state_12835__$1 = state_12835;if(inst_12794)
{var statearr_12839_12924 = state_12835__$1;(statearr_12839_12924[1] = 36);
} else
{var statearr_12840_12925 = state_12835__$1;(statearr_12840_12925[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 2))
{var state_12835__$1 = state_12835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12835__$1,4,ch);
} else
{if((state_val_12836 === 34))
{var state_12835__$1 = state_12835;var statearr_12841_12926 = state_12835__$1;(statearr_12841_12926[2] = null);
(statearr_12841_12926[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 3))
{var inst_12833 = (state_12835[2]);var state_12835__$1 = state_12835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12835__$1,inst_12833);
} else
{if((state_val_12836 === 35))
{var inst_12817 = (state_12835[2]);var state_12835__$1 = state_12835;var statearr_12842_12927 = state_12835__$1;(statearr_12842_12927[2] = inst_12817);
(statearr_12842_12927[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 4))
{var inst_12703 = (state_12835[8]);var inst_12703__$1 = (state_12835[2]);var inst_12704 = (inst_12703__$1 == null);var state_12835__$1 = (function (){var statearr_12843 = state_12835;(statearr_12843[8] = inst_12703__$1);
return statearr_12843;
})();if(cljs.core.truth_(inst_12704))
{var statearr_12844_12928 = state_12835__$1;(statearr_12844_12928[1] = 5);
} else
{var statearr_12845_12929 = state_12835__$1;(statearr_12845_12929[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 36))
{var inst_12792 = (state_12835[9]);var inst_12796 = cljs.core.chunk_first.call(null,inst_12792);var inst_12797 = cljs.core.chunk_rest.call(null,inst_12792);var inst_12798 = cljs.core.count.call(null,inst_12796);var inst_12771 = inst_12797;var inst_12772 = inst_12796;var inst_12773 = inst_12798;var inst_12774 = 0;var state_12835__$1 = (function (){var statearr_12846 = state_12835;(statearr_12846[10] = inst_12774);
(statearr_12846[11] = inst_12773);
(statearr_12846[12] = inst_12772);
(statearr_12846[13] = inst_12771);
return statearr_12846;
})();var statearr_12847_12930 = state_12835__$1;(statearr_12847_12930[2] = null);
(statearr_12847_12930[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 5))
{var inst_12710 = cljs.core.deref.call(null,cs);var inst_12711 = cljs.core.seq.call(null,inst_12710);var inst_12712 = inst_12711;var inst_12713 = null;var inst_12714 = 0;var inst_12715 = 0;var state_12835__$1 = (function (){var statearr_12848 = state_12835;(statearr_12848[14] = inst_12715);
(statearr_12848[15] = inst_12714);
(statearr_12848[16] = inst_12712);
(statearr_12848[17] = inst_12713);
return statearr_12848;
})();var statearr_12849_12931 = state_12835__$1;(statearr_12849_12931[2] = null);
(statearr_12849_12931[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 37))
{var inst_12792 = (state_12835[9]);var inst_12801 = cljs.core.first.call(null,inst_12792);var state_12835__$1 = (function (){var statearr_12850 = state_12835;(statearr_12850[18] = inst_12801);
return statearr_12850;
})();var statearr_12851_12932 = state_12835__$1;(statearr_12851_12932[2] = null);
(statearr_12851_12932[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 6))
{var inst_12763 = (state_12835[19]);var inst_12762 = cljs.core.deref.call(null,cs);var inst_12763__$1 = cljs.core.keys.call(null,inst_12762);var inst_12764 = cljs.core.count.call(null,inst_12763__$1);var inst_12765 = cljs.core.reset_BANG_.call(null,dctr,inst_12764);var inst_12770 = cljs.core.seq.call(null,inst_12763__$1);var inst_12771 = inst_12770;var inst_12772 = null;var inst_12773 = 0;var inst_12774 = 0;var state_12835__$1 = (function (){var statearr_12852 = state_12835;(statearr_12852[20] = inst_12765);
(statearr_12852[10] = inst_12774);
(statearr_12852[11] = inst_12773);
(statearr_12852[12] = inst_12772);
(statearr_12852[13] = inst_12771);
(statearr_12852[19] = inst_12763__$1);
return statearr_12852;
})();var statearr_12853_12933 = state_12835__$1;(statearr_12853_12933[2] = null);
(statearr_12853_12933[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 38))
{var inst_12814 = (state_12835[2]);var state_12835__$1 = state_12835;var statearr_12854_12934 = state_12835__$1;(statearr_12854_12934[2] = inst_12814);
(statearr_12854_12934[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 7))
{var inst_12831 = (state_12835[2]);var state_12835__$1 = state_12835;var statearr_12855_12935 = state_12835__$1;(statearr_12855_12935[2] = inst_12831);
(statearr_12855_12935[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 39))
{var inst_12792 = (state_12835[9]);var inst_12810 = (state_12835[2]);var inst_12811 = cljs.core.next.call(null,inst_12792);var inst_12771 = inst_12811;var inst_12772 = null;var inst_12773 = 0;var inst_12774 = 0;var state_12835__$1 = (function (){var statearr_12856 = state_12835;(statearr_12856[21] = inst_12810);
(statearr_12856[10] = inst_12774);
(statearr_12856[11] = inst_12773);
(statearr_12856[12] = inst_12772);
(statearr_12856[13] = inst_12771);
return statearr_12856;
})();var statearr_12857_12936 = state_12835__$1;(statearr_12857_12936[2] = null);
(statearr_12857_12936[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 8))
{var inst_12715 = (state_12835[14]);var inst_12714 = (state_12835[15]);var inst_12717 = (inst_12715 < inst_12714);var inst_12718 = inst_12717;var state_12835__$1 = state_12835;if(cljs.core.truth_(inst_12718))
{var statearr_12858_12937 = state_12835__$1;(statearr_12858_12937[1] = 10);
} else
{var statearr_12859_12938 = state_12835__$1;(statearr_12859_12938[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 40))
{var inst_12801 = (state_12835[18]);var inst_12802 = (state_12835[2]);var inst_12803 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12804 = cljs.core.async.untap_STAR_.call(null,m,inst_12801);var state_12835__$1 = (function (){var statearr_12860 = state_12835;(statearr_12860[22] = inst_12803);
(statearr_12860[23] = inst_12802);
return statearr_12860;
})();var statearr_12861_12939 = state_12835__$1;(statearr_12861_12939[2] = inst_12804);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12835__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 9))
{var inst_12760 = (state_12835[2]);var state_12835__$1 = state_12835;var statearr_12862_12940 = state_12835__$1;(statearr_12862_12940[2] = inst_12760);
(statearr_12862_12940[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 41))
{var inst_12801 = (state_12835[18]);var inst_12703 = (state_12835[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12835,40,Object,null,39);var inst_12808 = cljs.core.async.put_BANG_.call(null,inst_12801,inst_12703,done);var state_12835__$1 = state_12835;var statearr_12863_12941 = state_12835__$1;(statearr_12863_12941[2] = inst_12808);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12835__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 10))
{var inst_12715 = (state_12835[14]);var inst_12713 = (state_12835[17]);var inst_12721 = cljs.core._nth.call(null,inst_12713,inst_12715);var inst_12722 = cljs.core.nth.call(null,inst_12721,0,null);var inst_12723 = cljs.core.nth.call(null,inst_12721,1,null);var state_12835__$1 = (function (){var statearr_12864 = state_12835;(statearr_12864[24] = inst_12722);
return statearr_12864;
})();if(cljs.core.truth_(inst_12723))
{var statearr_12865_12942 = state_12835__$1;(statearr_12865_12942[1] = 13);
} else
{var statearr_12866_12943 = state_12835__$1;(statearr_12866_12943[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 42))
{var state_12835__$1 = state_12835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12835__$1,45,dchan);
} else
{if((state_val_12836 === 11))
{var inst_12732 = (state_12835[25]);var inst_12712 = (state_12835[16]);var inst_12732__$1 = cljs.core.seq.call(null,inst_12712);var state_12835__$1 = (function (){var statearr_12867 = state_12835;(statearr_12867[25] = inst_12732__$1);
return statearr_12867;
})();if(inst_12732__$1)
{var statearr_12868_12944 = state_12835__$1;(statearr_12868_12944[1] = 16);
} else
{var statearr_12869_12945 = state_12835__$1;(statearr_12869_12945[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 43))
{var state_12835__$1 = state_12835;var statearr_12870_12946 = state_12835__$1;(statearr_12870_12946[2] = null);
(statearr_12870_12946[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 12))
{var inst_12758 = (state_12835[2]);var state_12835__$1 = state_12835;var statearr_12871_12947 = state_12835__$1;(statearr_12871_12947[2] = inst_12758);
(statearr_12871_12947[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 44))
{var inst_12828 = (state_12835[2]);var state_12835__$1 = (function (){var statearr_12872 = state_12835;(statearr_12872[26] = inst_12828);
return statearr_12872;
})();var statearr_12873_12948 = state_12835__$1;(statearr_12873_12948[2] = null);
(statearr_12873_12948[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 13))
{var inst_12722 = (state_12835[24]);var inst_12725 = cljs.core.async.close_BANG_.call(null,inst_12722);var state_12835__$1 = state_12835;var statearr_12874_12949 = state_12835__$1;(statearr_12874_12949[2] = inst_12725);
(statearr_12874_12949[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 45))
{var inst_12825 = (state_12835[2]);var state_12835__$1 = state_12835;var statearr_12878_12950 = state_12835__$1;(statearr_12878_12950[2] = inst_12825);
(statearr_12878_12950[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 14))
{var state_12835__$1 = state_12835;var statearr_12879_12951 = state_12835__$1;(statearr_12879_12951[2] = null);
(statearr_12879_12951[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 15))
{var inst_12715 = (state_12835[14]);var inst_12714 = (state_12835[15]);var inst_12712 = (state_12835[16]);var inst_12713 = (state_12835[17]);var inst_12728 = (state_12835[2]);var inst_12729 = (inst_12715 + 1);var tmp12875 = inst_12714;var tmp12876 = inst_12712;var tmp12877 = inst_12713;var inst_12712__$1 = tmp12876;var inst_12713__$1 = tmp12877;var inst_12714__$1 = tmp12875;var inst_12715__$1 = inst_12729;var state_12835__$1 = (function (){var statearr_12880 = state_12835;(statearr_12880[14] = inst_12715__$1);
(statearr_12880[15] = inst_12714__$1);
(statearr_12880[27] = inst_12728);
(statearr_12880[16] = inst_12712__$1);
(statearr_12880[17] = inst_12713__$1);
return statearr_12880;
})();var statearr_12881_12952 = state_12835__$1;(statearr_12881_12952[2] = null);
(statearr_12881_12952[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 16))
{var inst_12732 = (state_12835[25]);var inst_12734 = cljs.core.chunked_seq_QMARK_.call(null,inst_12732);var state_12835__$1 = state_12835;if(inst_12734)
{var statearr_12882_12953 = state_12835__$1;(statearr_12882_12953[1] = 19);
} else
{var statearr_12883_12954 = state_12835__$1;(statearr_12883_12954[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 17))
{var state_12835__$1 = state_12835;var statearr_12884_12955 = state_12835__$1;(statearr_12884_12955[2] = null);
(statearr_12884_12955[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 18))
{var inst_12756 = (state_12835[2]);var state_12835__$1 = state_12835;var statearr_12885_12956 = state_12835__$1;(statearr_12885_12956[2] = inst_12756);
(statearr_12885_12956[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 19))
{var inst_12732 = (state_12835[25]);var inst_12736 = cljs.core.chunk_first.call(null,inst_12732);var inst_12737 = cljs.core.chunk_rest.call(null,inst_12732);var inst_12738 = cljs.core.count.call(null,inst_12736);var inst_12712 = inst_12737;var inst_12713 = inst_12736;var inst_12714 = inst_12738;var inst_12715 = 0;var state_12835__$1 = (function (){var statearr_12886 = state_12835;(statearr_12886[14] = inst_12715);
(statearr_12886[15] = inst_12714);
(statearr_12886[16] = inst_12712);
(statearr_12886[17] = inst_12713);
return statearr_12886;
})();var statearr_12887_12957 = state_12835__$1;(statearr_12887_12957[2] = null);
(statearr_12887_12957[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 20))
{var inst_12732 = (state_12835[25]);var inst_12742 = cljs.core.first.call(null,inst_12732);var inst_12743 = cljs.core.nth.call(null,inst_12742,0,null);var inst_12744 = cljs.core.nth.call(null,inst_12742,1,null);var state_12835__$1 = (function (){var statearr_12888 = state_12835;(statearr_12888[28] = inst_12743);
return statearr_12888;
})();if(cljs.core.truth_(inst_12744))
{var statearr_12889_12958 = state_12835__$1;(statearr_12889_12958[1] = 22);
} else
{var statearr_12890_12959 = state_12835__$1;(statearr_12890_12959[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 21))
{var inst_12753 = (state_12835[2]);var state_12835__$1 = state_12835;var statearr_12891_12960 = state_12835__$1;(statearr_12891_12960[2] = inst_12753);
(statearr_12891_12960[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 22))
{var inst_12743 = (state_12835[28]);var inst_12746 = cljs.core.async.close_BANG_.call(null,inst_12743);var state_12835__$1 = state_12835;var statearr_12892_12961 = state_12835__$1;(statearr_12892_12961[2] = inst_12746);
(statearr_12892_12961[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 23))
{var state_12835__$1 = state_12835;var statearr_12893_12962 = state_12835__$1;(statearr_12893_12962[2] = null);
(statearr_12893_12962[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 24))
{var inst_12732 = (state_12835[25]);var inst_12749 = (state_12835[2]);var inst_12750 = cljs.core.next.call(null,inst_12732);var inst_12712 = inst_12750;var inst_12713 = null;var inst_12714 = 0;var inst_12715 = 0;var state_12835__$1 = (function (){var statearr_12894 = state_12835;(statearr_12894[14] = inst_12715);
(statearr_12894[15] = inst_12714);
(statearr_12894[29] = inst_12749);
(statearr_12894[16] = inst_12712);
(statearr_12894[17] = inst_12713);
return statearr_12894;
})();var statearr_12895_12963 = state_12835__$1;(statearr_12895_12963[2] = null);
(statearr_12895_12963[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 25))
{var inst_12774 = (state_12835[10]);var inst_12773 = (state_12835[11]);var inst_12776 = (inst_12774 < inst_12773);var inst_12777 = inst_12776;var state_12835__$1 = state_12835;if(cljs.core.truth_(inst_12777))
{var statearr_12896_12964 = state_12835__$1;(statearr_12896_12964[1] = 27);
} else
{var statearr_12897_12965 = state_12835__$1;(statearr_12897_12965[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 26))
{var inst_12763 = (state_12835[19]);var inst_12821 = (state_12835[2]);var inst_12822 = cljs.core.seq.call(null,inst_12763);var state_12835__$1 = (function (){var statearr_12898 = state_12835;(statearr_12898[30] = inst_12821);
return statearr_12898;
})();if(inst_12822)
{var statearr_12899_12966 = state_12835__$1;(statearr_12899_12966[1] = 42);
} else
{var statearr_12900_12967 = state_12835__$1;(statearr_12900_12967[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 27))
{var inst_12774 = (state_12835[10]);var inst_12772 = (state_12835[12]);var inst_12779 = cljs.core._nth.call(null,inst_12772,inst_12774);var state_12835__$1 = (function (){var statearr_12901 = state_12835;(statearr_12901[7] = inst_12779);
return statearr_12901;
})();var statearr_12902_12968 = state_12835__$1;(statearr_12902_12968[2] = null);
(statearr_12902_12968[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 28))
{var inst_12792 = (state_12835[9]);var inst_12771 = (state_12835[13]);var inst_12792__$1 = cljs.core.seq.call(null,inst_12771);var state_12835__$1 = (function (){var statearr_12906 = state_12835;(statearr_12906[9] = inst_12792__$1);
return statearr_12906;
})();if(inst_12792__$1)
{var statearr_12907_12969 = state_12835__$1;(statearr_12907_12969[1] = 33);
} else
{var statearr_12908_12970 = state_12835__$1;(statearr_12908_12970[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 29))
{var inst_12819 = (state_12835[2]);var state_12835__$1 = state_12835;var statearr_12909_12971 = state_12835__$1;(statearr_12909_12971[2] = inst_12819);
(statearr_12909_12971[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 30))
{var inst_12774 = (state_12835[10]);var inst_12773 = (state_12835[11]);var inst_12772 = (state_12835[12]);var inst_12771 = (state_12835[13]);var inst_12788 = (state_12835[2]);var inst_12789 = (inst_12774 + 1);var tmp12903 = inst_12773;var tmp12904 = inst_12772;var tmp12905 = inst_12771;var inst_12771__$1 = tmp12905;var inst_12772__$1 = tmp12904;var inst_12773__$1 = tmp12903;var inst_12774__$1 = inst_12789;var state_12835__$1 = (function (){var statearr_12910 = state_12835;(statearr_12910[31] = inst_12788);
(statearr_12910[10] = inst_12774__$1);
(statearr_12910[11] = inst_12773__$1);
(statearr_12910[12] = inst_12772__$1);
(statearr_12910[13] = inst_12771__$1);
return statearr_12910;
})();var statearr_12911_12972 = state_12835__$1;(statearr_12911_12972[2] = null);
(statearr_12911_12972[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 31))
{var inst_12779 = (state_12835[7]);var inst_12780 = (state_12835[2]);var inst_12781 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12782 = cljs.core.async.untap_STAR_.call(null,m,inst_12779);var state_12835__$1 = (function (){var statearr_12912 = state_12835;(statearr_12912[32] = inst_12781);
(statearr_12912[33] = inst_12780);
return statearr_12912;
})();var statearr_12913_12973 = state_12835__$1;(statearr_12913_12973[2] = inst_12782);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12835__$1);
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
});})(c__6232__auto___12921,cs,m,dchan,dctr,done))
;return ((function (switch__6217__auto__,c__6232__auto___12921,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12917[0] = state_machine__6218__auto__);
(statearr_12917[1] = 1);
return statearr_12917;
});
var state_machine__6218__auto____1 = (function (state_12835){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12835);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12918){if((e12918 instanceof Object))
{var ex__6221__auto__ = e12918;var statearr_12919_12974 = state_12835;(statearr_12919_12974[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12835);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12975 = state_12835;
state_12835 = G__12975;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12835){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___12921,cs,m,dchan,dctr,done))
})();var state__6234__auto__ = (function (){var statearr_12920 = f__6233__auto__.call(null);(statearr_12920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___12921);
return statearr_12920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___12921,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12977 = {};return obj12977;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t13087 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13087 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13088){
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
this.meta13088 = meta13088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13087.cljs$lang$type = true;
cljs.core.async.t13087.cljs$lang$ctorStr = "cljs.core.async/t13087";
cljs.core.async.t13087.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t13087");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13087.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13087.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13087.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13087.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13087.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13087.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13087.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13089){var self__ = this;
var _13089__$1 = this;return self__.meta13088;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13089,meta13088__$1){var self__ = this;
var _13089__$1 = this;return (new cljs.core.async.t13087(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13088__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13087 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13087(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13088){return (new cljs.core.async.t13087(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13088));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13087(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6232__auto___13196 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___13196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___13196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13154){var state_val_13155 = (state_13154[1]);if((state_val_13155 === 1))
{var inst_13093 = (state_13154[7]);var inst_13093__$1 = calc_state.call(null);var inst_13094 = cljs.core.seq_QMARK_.call(null,inst_13093__$1);var state_13154__$1 = (function (){var statearr_13156 = state_13154;(statearr_13156[7] = inst_13093__$1);
return statearr_13156;
})();if(inst_13094)
{var statearr_13157_13197 = state_13154__$1;(statearr_13157_13197[1] = 2);
} else
{var statearr_13158_13198 = state_13154__$1;(statearr_13158_13198[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 2))
{var inst_13093 = (state_13154[7]);var inst_13096 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13093);var state_13154__$1 = state_13154;var statearr_13159_13199 = state_13154__$1;(statearr_13159_13199[2] = inst_13096);
(statearr_13159_13199[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 3))
{var inst_13093 = (state_13154[7]);var state_13154__$1 = state_13154;var statearr_13160_13200 = state_13154__$1;(statearr_13160_13200[2] = inst_13093);
(statearr_13160_13200[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 4))
{var inst_13093 = (state_13154[7]);var inst_13099 = (state_13154[2]);var inst_13100 = cljs.core.get.call(null,inst_13099,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13101 = cljs.core.get.call(null,inst_13099,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13102 = cljs.core.get.call(null,inst_13099,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13103 = inst_13093;var state_13154__$1 = (function (){var statearr_13161 = state_13154;(statearr_13161[8] = inst_13103);
(statearr_13161[9] = inst_13102);
(statearr_13161[10] = inst_13100);
(statearr_13161[11] = inst_13101);
return statearr_13161;
})();var statearr_13162_13201 = state_13154__$1;(statearr_13162_13201[2] = null);
(statearr_13162_13201[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 5))
{var inst_13103 = (state_13154[8]);var inst_13106 = cljs.core.seq_QMARK_.call(null,inst_13103);var state_13154__$1 = state_13154;if(inst_13106)
{var statearr_13163_13202 = state_13154__$1;(statearr_13163_13202[1] = 7);
} else
{var statearr_13164_13203 = state_13154__$1;(statearr_13164_13203[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 6))
{var inst_13152 = (state_13154[2]);var state_13154__$1 = state_13154;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13154__$1,inst_13152);
} else
{if((state_val_13155 === 7))
{var inst_13103 = (state_13154[8]);var inst_13108 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13103);var state_13154__$1 = state_13154;var statearr_13165_13204 = state_13154__$1;(statearr_13165_13204[2] = inst_13108);
(statearr_13165_13204[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 8))
{var inst_13103 = (state_13154[8]);var state_13154__$1 = state_13154;var statearr_13166_13205 = state_13154__$1;(statearr_13166_13205[2] = inst_13103);
(statearr_13166_13205[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 9))
{var inst_13111 = (state_13154[12]);var inst_13111__$1 = (state_13154[2]);var inst_13112 = cljs.core.get.call(null,inst_13111__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13113 = cljs.core.get.call(null,inst_13111__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13114 = cljs.core.get.call(null,inst_13111__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13154__$1 = (function (){var statearr_13167 = state_13154;(statearr_13167[12] = inst_13111__$1);
(statearr_13167[13] = inst_13114);
(statearr_13167[14] = inst_13113);
return statearr_13167;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13154__$1,10,inst_13112);
} else
{if((state_val_13155 === 10))
{var inst_13118 = (state_13154[15]);var inst_13119 = (state_13154[16]);var inst_13117 = (state_13154[2]);var inst_13118__$1 = cljs.core.nth.call(null,inst_13117,0,null);var inst_13119__$1 = cljs.core.nth.call(null,inst_13117,1,null);var inst_13120 = (inst_13118__$1 == null);var inst_13121 = cljs.core._EQ_.call(null,inst_13119__$1,change);var inst_13122 = (inst_13120) || (inst_13121);var state_13154__$1 = (function (){var statearr_13168 = state_13154;(statearr_13168[15] = inst_13118__$1);
(statearr_13168[16] = inst_13119__$1);
return statearr_13168;
})();if(cljs.core.truth_(inst_13122))
{var statearr_13169_13206 = state_13154__$1;(statearr_13169_13206[1] = 11);
} else
{var statearr_13170_13207 = state_13154__$1;(statearr_13170_13207[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 11))
{var inst_13118 = (state_13154[15]);var inst_13124 = (inst_13118 == null);var state_13154__$1 = state_13154;if(cljs.core.truth_(inst_13124))
{var statearr_13171_13208 = state_13154__$1;(statearr_13171_13208[1] = 14);
} else
{var statearr_13172_13209 = state_13154__$1;(statearr_13172_13209[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 12))
{var inst_13119 = (state_13154[16]);var inst_13114 = (state_13154[13]);var inst_13133 = (state_13154[17]);var inst_13133__$1 = inst_13114.call(null,inst_13119);var state_13154__$1 = (function (){var statearr_13173 = state_13154;(statearr_13173[17] = inst_13133__$1);
return statearr_13173;
})();if(cljs.core.truth_(inst_13133__$1))
{var statearr_13174_13210 = state_13154__$1;(statearr_13174_13210[1] = 17);
} else
{var statearr_13175_13211 = state_13154__$1;(statearr_13175_13211[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 13))
{var inst_13150 = (state_13154[2]);var state_13154__$1 = state_13154;var statearr_13176_13212 = state_13154__$1;(statearr_13176_13212[2] = inst_13150);
(statearr_13176_13212[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 14))
{var inst_13119 = (state_13154[16]);var inst_13126 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13119);var state_13154__$1 = state_13154;var statearr_13177_13213 = state_13154__$1;(statearr_13177_13213[2] = inst_13126);
(statearr_13177_13213[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 15))
{var state_13154__$1 = state_13154;var statearr_13178_13214 = state_13154__$1;(statearr_13178_13214[2] = null);
(statearr_13178_13214[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 16))
{var inst_13129 = (state_13154[2]);var inst_13130 = calc_state.call(null);var inst_13103 = inst_13130;var state_13154__$1 = (function (){var statearr_13179 = state_13154;(statearr_13179[8] = inst_13103);
(statearr_13179[18] = inst_13129);
return statearr_13179;
})();var statearr_13180_13215 = state_13154__$1;(statearr_13180_13215[2] = null);
(statearr_13180_13215[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 17))
{var inst_13133 = (state_13154[17]);var state_13154__$1 = state_13154;var statearr_13181_13216 = state_13154__$1;(statearr_13181_13216[2] = inst_13133);
(statearr_13181_13216[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 18))
{var inst_13119 = (state_13154[16]);var inst_13114 = (state_13154[13]);var inst_13113 = (state_13154[14]);var inst_13136 = cljs.core.empty_QMARK_.call(null,inst_13114);var inst_13137 = inst_13113.call(null,inst_13119);var inst_13138 = cljs.core.not.call(null,inst_13137);var inst_13139 = (inst_13136) && (inst_13138);var state_13154__$1 = state_13154;var statearr_13182_13217 = state_13154__$1;(statearr_13182_13217[2] = inst_13139);
(statearr_13182_13217[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 19))
{var inst_13141 = (state_13154[2]);var state_13154__$1 = state_13154;if(cljs.core.truth_(inst_13141))
{var statearr_13183_13218 = state_13154__$1;(statearr_13183_13218[1] = 20);
} else
{var statearr_13184_13219 = state_13154__$1;(statearr_13184_13219[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 20))
{var inst_13118 = (state_13154[15]);var state_13154__$1 = state_13154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13154__$1,23,out,inst_13118);
} else
{if((state_val_13155 === 21))
{var state_13154__$1 = state_13154;var statearr_13185_13220 = state_13154__$1;(statearr_13185_13220[2] = null);
(statearr_13185_13220[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 22))
{var inst_13111 = (state_13154[12]);var inst_13147 = (state_13154[2]);var inst_13103 = inst_13111;var state_13154__$1 = (function (){var statearr_13186 = state_13154;(statearr_13186[8] = inst_13103);
(statearr_13186[19] = inst_13147);
return statearr_13186;
})();var statearr_13187_13221 = state_13154__$1;(statearr_13187_13221[2] = null);
(statearr_13187_13221[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 23))
{var inst_13144 = (state_13154[2]);var state_13154__$1 = state_13154;var statearr_13188_13222 = state_13154__$1;(statearr_13188_13222[2] = inst_13144);
(statearr_13188_13222[1] = 22);
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
});})(c__6232__auto___13196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6217__auto__,c__6232__auto___13196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_13192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13192[0] = state_machine__6218__auto__);
(statearr_13192[1] = 1);
return statearr_13192;
});
var state_machine__6218__auto____1 = (function (state_13154){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_13154);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e13193){if((e13193 instanceof Object))
{var ex__6221__auto__ = e13193;var statearr_13194_13223 = state_13154;(statearr_13194_13223[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13154);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13224 = state_13154;
state_13154 = G__13224;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_13154){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_13154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___13196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6234__auto__ = (function (){var statearr_13195 = f__6233__auto__.call(null);(statearr_13195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___13196);
return statearr_13195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___13196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj13226 = {};return obj13226;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3450__auto__ = p;if(and__3450__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3450__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4089__auto__ = (((p == null))?null:p);return (function (){var or__3462__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3450__auto__ = p;if(and__3450__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3450__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4089__auto__ = (((p == null))?null:p);return (function (){var or__3462__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3450__auto__ = p;if(and__3450__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3450__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4089__auto__ = (((p == null))?null:p);return (function (){var or__3462__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3450__auto__ = p;if(and__3450__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3450__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4089__auto__ = (((p == null))?null:p);return (function (){var or__3462__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
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
return (function (topic){var or__3462__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3462__auto__))
{return or__3462__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3462__auto__,mults){
return (function (p1__13227_SHARP_){if(cljs.core.truth_(p1__13227_SHARP_.call(null,topic)))
{return p1__13227_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13227_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3462__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13352 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13352 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13353){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13353 = meta13353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13352.cljs$lang$type = true;
cljs.core.async.t13352.cljs$lang$ctorStr = "cljs.core.async/t13352";
cljs.core.async.t13352.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t13352");
});})(mults,ensure_mult))
;
cljs.core.async.t13352.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13352.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13352.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13352.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13352.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13352.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13352.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13354){var self__ = this;
var _13354__$1 = this;return self__.meta13353;
});})(mults,ensure_mult))
;
cljs.core.async.t13352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13354,meta13353__$1){var self__ = this;
var _13354__$1 = this;return (new cljs.core.async.t13352(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13353__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13352 = ((function (mults,ensure_mult){
return (function __GT_t13352(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13353){return (new cljs.core.async.t13352(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13353));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13352(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6232__auto___13476 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___13476,mults,ensure_mult,p){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___13476,mults,ensure_mult,p){
return (function (state_13428){var state_val_13429 = (state_13428[1]);if((state_val_13429 === 1))
{var state_13428__$1 = state_13428;var statearr_13430_13477 = state_13428__$1;(statearr_13430_13477[2] = null);
(statearr_13430_13477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 2))
{var state_13428__$1 = state_13428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13428__$1,4,ch);
} else
{if((state_val_13429 === 3))
{var inst_13426 = (state_13428[2]);var state_13428__$1 = state_13428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13428__$1,inst_13426);
} else
{if((state_val_13429 === 4))
{var inst_13357 = (state_13428[7]);var inst_13357__$1 = (state_13428[2]);var inst_13358 = (inst_13357__$1 == null);var state_13428__$1 = (function (){var statearr_13431 = state_13428;(statearr_13431[7] = inst_13357__$1);
return statearr_13431;
})();if(cljs.core.truth_(inst_13358))
{var statearr_13432_13478 = state_13428__$1;(statearr_13432_13478[1] = 5);
} else
{var statearr_13433_13479 = state_13428__$1;(statearr_13433_13479[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 5))
{var inst_13364 = cljs.core.deref.call(null,mults);var inst_13365 = cljs.core.vals.call(null,inst_13364);var inst_13366 = cljs.core.seq.call(null,inst_13365);var inst_13367 = inst_13366;var inst_13368 = null;var inst_13369 = 0;var inst_13370 = 0;var state_13428__$1 = (function (){var statearr_13434 = state_13428;(statearr_13434[8] = inst_13369);
(statearr_13434[9] = inst_13368);
(statearr_13434[10] = inst_13367);
(statearr_13434[11] = inst_13370);
return statearr_13434;
})();var statearr_13435_13480 = state_13428__$1;(statearr_13435_13480[2] = null);
(statearr_13435_13480[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 6))
{var inst_13407 = (state_13428[12]);var inst_13357 = (state_13428[7]);var inst_13405 = (state_13428[13]);var inst_13405__$1 = topic_fn.call(null,inst_13357);var inst_13406 = cljs.core.deref.call(null,mults);var inst_13407__$1 = cljs.core.get.call(null,inst_13406,inst_13405__$1);var state_13428__$1 = (function (){var statearr_13436 = state_13428;(statearr_13436[12] = inst_13407__$1);
(statearr_13436[13] = inst_13405__$1);
return statearr_13436;
})();if(cljs.core.truth_(inst_13407__$1))
{var statearr_13437_13481 = state_13428__$1;(statearr_13437_13481[1] = 19);
} else
{var statearr_13438_13482 = state_13428__$1;(statearr_13438_13482[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 7))
{var inst_13424 = (state_13428[2]);var state_13428__$1 = state_13428;var statearr_13439_13483 = state_13428__$1;(statearr_13439_13483[2] = inst_13424);
(statearr_13439_13483[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 8))
{var inst_13369 = (state_13428[8]);var inst_13370 = (state_13428[11]);var inst_13372 = (inst_13370 < inst_13369);var inst_13373 = inst_13372;var state_13428__$1 = state_13428;if(cljs.core.truth_(inst_13373))
{var statearr_13443_13484 = state_13428__$1;(statearr_13443_13484[1] = 10);
} else
{var statearr_13444_13485 = state_13428__$1;(statearr_13444_13485[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 9))
{var inst_13403 = (state_13428[2]);var state_13428__$1 = state_13428;var statearr_13445_13486 = state_13428__$1;(statearr_13445_13486[2] = inst_13403);
(statearr_13445_13486[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 10))
{var inst_13369 = (state_13428[8]);var inst_13368 = (state_13428[9]);var inst_13367 = (state_13428[10]);var inst_13370 = (state_13428[11]);var inst_13375 = cljs.core._nth.call(null,inst_13368,inst_13370);var inst_13376 = cljs.core.async.muxch_STAR_.call(null,inst_13375);var inst_13377 = cljs.core.async.close_BANG_.call(null,inst_13376);var inst_13378 = (inst_13370 + 1);var tmp13440 = inst_13369;var tmp13441 = inst_13368;var tmp13442 = inst_13367;var inst_13367__$1 = tmp13442;var inst_13368__$1 = tmp13441;var inst_13369__$1 = tmp13440;var inst_13370__$1 = inst_13378;var state_13428__$1 = (function (){var statearr_13446 = state_13428;(statearr_13446[8] = inst_13369__$1);
(statearr_13446[9] = inst_13368__$1);
(statearr_13446[10] = inst_13367__$1);
(statearr_13446[11] = inst_13370__$1);
(statearr_13446[14] = inst_13377);
return statearr_13446;
})();var statearr_13447_13487 = state_13428__$1;(statearr_13447_13487[2] = null);
(statearr_13447_13487[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 11))
{var inst_13367 = (state_13428[10]);var inst_13381 = (state_13428[15]);var inst_13381__$1 = cljs.core.seq.call(null,inst_13367);var state_13428__$1 = (function (){var statearr_13448 = state_13428;(statearr_13448[15] = inst_13381__$1);
return statearr_13448;
})();if(inst_13381__$1)
{var statearr_13449_13488 = state_13428__$1;(statearr_13449_13488[1] = 13);
} else
{var statearr_13450_13489 = state_13428__$1;(statearr_13450_13489[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 12))
{var inst_13401 = (state_13428[2]);var state_13428__$1 = state_13428;var statearr_13451_13490 = state_13428__$1;(statearr_13451_13490[2] = inst_13401);
(statearr_13451_13490[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 13))
{var inst_13381 = (state_13428[15]);var inst_13383 = cljs.core.chunked_seq_QMARK_.call(null,inst_13381);var state_13428__$1 = state_13428;if(inst_13383)
{var statearr_13452_13491 = state_13428__$1;(statearr_13452_13491[1] = 16);
} else
{var statearr_13453_13492 = state_13428__$1;(statearr_13453_13492[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 14))
{var state_13428__$1 = state_13428;var statearr_13454_13493 = state_13428__$1;(statearr_13454_13493[2] = null);
(statearr_13454_13493[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 15))
{var inst_13399 = (state_13428[2]);var state_13428__$1 = state_13428;var statearr_13455_13494 = state_13428__$1;(statearr_13455_13494[2] = inst_13399);
(statearr_13455_13494[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 16))
{var inst_13381 = (state_13428[15]);var inst_13385 = cljs.core.chunk_first.call(null,inst_13381);var inst_13386 = cljs.core.chunk_rest.call(null,inst_13381);var inst_13387 = cljs.core.count.call(null,inst_13385);var inst_13367 = inst_13386;var inst_13368 = inst_13385;var inst_13369 = inst_13387;var inst_13370 = 0;var state_13428__$1 = (function (){var statearr_13456 = state_13428;(statearr_13456[8] = inst_13369);
(statearr_13456[9] = inst_13368);
(statearr_13456[10] = inst_13367);
(statearr_13456[11] = inst_13370);
return statearr_13456;
})();var statearr_13457_13495 = state_13428__$1;(statearr_13457_13495[2] = null);
(statearr_13457_13495[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 17))
{var inst_13381 = (state_13428[15]);var inst_13390 = cljs.core.first.call(null,inst_13381);var inst_13391 = cljs.core.async.muxch_STAR_.call(null,inst_13390);var inst_13392 = cljs.core.async.close_BANG_.call(null,inst_13391);var inst_13393 = cljs.core.next.call(null,inst_13381);var inst_13367 = inst_13393;var inst_13368 = null;var inst_13369 = 0;var inst_13370 = 0;var state_13428__$1 = (function (){var statearr_13458 = state_13428;(statearr_13458[8] = inst_13369);
(statearr_13458[16] = inst_13392);
(statearr_13458[9] = inst_13368);
(statearr_13458[10] = inst_13367);
(statearr_13458[11] = inst_13370);
return statearr_13458;
})();var statearr_13459_13496 = state_13428__$1;(statearr_13459_13496[2] = null);
(statearr_13459_13496[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 18))
{var inst_13396 = (state_13428[2]);var state_13428__$1 = state_13428;var statearr_13460_13497 = state_13428__$1;(statearr_13460_13497[2] = inst_13396);
(statearr_13460_13497[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 19))
{var state_13428__$1 = state_13428;var statearr_13461_13498 = state_13428__$1;(statearr_13461_13498[2] = null);
(statearr_13461_13498[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 20))
{var state_13428__$1 = state_13428;var statearr_13462_13499 = state_13428__$1;(statearr_13462_13499[2] = null);
(statearr_13462_13499[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 21))
{var inst_13421 = (state_13428[2]);var state_13428__$1 = (function (){var statearr_13463 = state_13428;(statearr_13463[17] = inst_13421);
return statearr_13463;
})();var statearr_13464_13500 = state_13428__$1;(statearr_13464_13500[2] = null);
(statearr_13464_13500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 22))
{var inst_13418 = (state_13428[2]);var state_13428__$1 = state_13428;var statearr_13465_13501 = state_13428__$1;(statearr_13465_13501[2] = inst_13418);
(statearr_13465_13501[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 23))
{var inst_13405 = (state_13428[13]);var inst_13409 = (state_13428[2]);var inst_13410 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13405);var state_13428__$1 = (function (){var statearr_13466 = state_13428;(statearr_13466[18] = inst_13409);
return statearr_13466;
})();var statearr_13467_13502 = state_13428__$1;(statearr_13467_13502[2] = inst_13410);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13428__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13429 === 24))
{var inst_13407 = (state_13428[12]);var inst_13357 = (state_13428[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13428,23,Object,null,22);var inst_13414 = cljs.core.async.muxch_STAR_.call(null,inst_13407);var state_13428__$1 = state_13428;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13428__$1,25,inst_13414,inst_13357);
} else
{if((state_val_13429 === 25))
{var inst_13416 = (state_13428[2]);var state_13428__$1 = state_13428;var statearr_13468_13503 = state_13428__$1;(statearr_13468_13503[2] = inst_13416);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13428__$1);
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
});})(c__6232__auto___13476,mults,ensure_mult,p))
;return ((function (switch__6217__auto__,c__6232__auto___13476,mults,ensure_mult,p){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_13472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13472[0] = state_machine__6218__auto__);
(statearr_13472[1] = 1);
return statearr_13472;
});
var state_machine__6218__auto____1 = (function (state_13428){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_13428);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e13473){if((e13473 instanceof Object))
{var ex__6221__auto__ = e13473;var statearr_13474_13504 = state_13428;(statearr_13474_13504[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13428);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13505 = state_13428;
state_13428 = G__13505;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_13428){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_13428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___13476,mults,ensure_mult,p))
})();var state__6234__auto__ = (function (){var statearr_13475 = f__6233__auto__.call(null);(statearr_13475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___13476);
return statearr_13475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___13476,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6232__auto___13642 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___13642,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___13642,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13612){var state_val_13613 = (state_13612[1]);if((state_val_13613 === 1))
{var state_13612__$1 = state_13612;var statearr_13614_13643 = state_13612__$1;(statearr_13614_13643[2] = null);
(statearr_13614_13643[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13613 === 2))
{var inst_13575 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13576 = 0;var state_13612__$1 = (function (){var statearr_13615 = state_13612;(statearr_13615[7] = inst_13576);
(statearr_13615[8] = inst_13575);
return statearr_13615;
})();var statearr_13616_13644 = state_13612__$1;(statearr_13616_13644[2] = null);
(statearr_13616_13644[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13613 === 3))
{var inst_13610 = (state_13612[2]);var state_13612__$1 = state_13612;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13612__$1,inst_13610);
} else
{if((state_val_13613 === 4))
{var inst_13576 = (state_13612[7]);var inst_13578 = (inst_13576 < cnt);var state_13612__$1 = state_13612;if(cljs.core.truth_(inst_13578))
{var statearr_13617_13645 = state_13612__$1;(statearr_13617_13645[1] = 6);
} else
{var statearr_13618_13646 = state_13612__$1;(statearr_13618_13646[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13613 === 5))
{var inst_13596 = (state_13612[2]);var state_13612__$1 = (function (){var statearr_13619 = state_13612;(statearr_13619[9] = inst_13596);
return statearr_13619;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13612__$1,12,dchan);
} else
{if((state_val_13613 === 6))
{var state_13612__$1 = state_13612;var statearr_13620_13647 = state_13612__$1;(statearr_13620_13647[2] = null);
(statearr_13620_13647[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13613 === 7))
{var state_13612__$1 = state_13612;var statearr_13621_13648 = state_13612__$1;(statearr_13621_13648[2] = null);
(statearr_13621_13648[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13613 === 8))
{var inst_13594 = (state_13612[2]);var state_13612__$1 = state_13612;var statearr_13622_13649 = state_13612__$1;(statearr_13622_13649[2] = inst_13594);
(statearr_13622_13649[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13613 === 9))
{var inst_13576 = (state_13612[7]);var inst_13589 = (state_13612[2]);var inst_13590 = (inst_13576 + 1);var inst_13576__$1 = inst_13590;var state_13612__$1 = (function (){var statearr_13623 = state_13612;(statearr_13623[10] = inst_13589);
(statearr_13623[7] = inst_13576__$1);
return statearr_13623;
})();var statearr_13624_13650 = state_13612__$1;(statearr_13624_13650[2] = null);
(statearr_13624_13650[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13613 === 10))
{var inst_13580 = (state_13612[2]);var inst_13581 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13612__$1 = (function (){var statearr_13625 = state_13612;(statearr_13625[11] = inst_13580);
return statearr_13625;
})();var statearr_13626_13651 = state_13612__$1;(statearr_13626_13651[2] = inst_13581);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13612__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13613 === 11))
{var inst_13576 = (state_13612[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13612,10,Object,null,9);var inst_13585 = chs__$1.call(null,inst_13576);var inst_13586 = done.call(null,inst_13576);var inst_13587 = cljs.core.async.take_BANG_.call(null,inst_13585,inst_13586);var state_13612__$1 = state_13612;var statearr_13627_13652 = state_13612__$1;(statearr_13627_13652[2] = inst_13587);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13612__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13613 === 12))
{var inst_13598 = (state_13612[12]);var inst_13598__$1 = (state_13612[2]);var inst_13599 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13598__$1);var state_13612__$1 = (function (){var statearr_13628 = state_13612;(statearr_13628[12] = inst_13598__$1);
return statearr_13628;
})();if(cljs.core.truth_(inst_13599))
{var statearr_13629_13653 = state_13612__$1;(statearr_13629_13653[1] = 13);
} else
{var statearr_13630_13654 = state_13612__$1;(statearr_13630_13654[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13613 === 13))
{var inst_13601 = cljs.core.async.close_BANG_.call(null,out);var state_13612__$1 = state_13612;var statearr_13631_13655 = state_13612__$1;(statearr_13631_13655[2] = inst_13601);
(statearr_13631_13655[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13613 === 14))
{var inst_13598 = (state_13612[12]);var inst_13603 = cljs.core.apply.call(null,f,inst_13598);var state_13612__$1 = state_13612;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13612__$1,16,out,inst_13603);
} else
{if((state_val_13613 === 15))
{var inst_13608 = (state_13612[2]);var state_13612__$1 = state_13612;var statearr_13632_13656 = state_13612__$1;(statearr_13632_13656[2] = inst_13608);
(statearr_13632_13656[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13613 === 16))
{var inst_13605 = (state_13612[2]);var state_13612__$1 = (function (){var statearr_13633 = state_13612;(statearr_13633[13] = inst_13605);
return statearr_13633;
})();var statearr_13634_13657 = state_13612__$1;(statearr_13634_13657[2] = null);
(statearr_13634_13657[1] = 2);
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
});})(c__6232__auto___13642,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6217__auto__,c__6232__auto___13642,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_13638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13638[0] = state_machine__6218__auto__);
(statearr_13638[1] = 1);
return statearr_13638;
});
var state_machine__6218__auto____1 = (function (state_13612){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_13612);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e13639){if((e13639 instanceof Object))
{var ex__6221__auto__ = e13639;var statearr_13640_13658 = state_13612;(statearr_13640_13658[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13612);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13639;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13659 = state_13612;
state_13612 = G__13659;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_13612){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_13612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___13642,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6234__auto__ = (function (){var statearr_13641 = f__6233__auto__.call(null);(statearr_13641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___13642);
return statearr_13641;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___13642,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___13767 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___13767,out){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___13767,out){
return (function (state_13743){var state_val_13744 = (state_13743[1]);if((state_val_13744 === 1))
{var inst_13714 = cljs.core.vec.call(null,chs);var inst_13715 = inst_13714;var state_13743__$1 = (function (){var statearr_13745 = state_13743;(statearr_13745[7] = inst_13715);
return statearr_13745;
})();var statearr_13746_13768 = state_13743__$1;(statearr_13746_13768[2] = null);
(statearr_13746_13768[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13744 === 2))
{var inst_13715 = (state_13743[7]);var inst_13717 = cljs.core.count.call(null,inst_13715);var inst_13718 = (inst_13717 > 0);var state_13743__$1 = state_13743;if(cljs.core.truth_(inst_13718))
{var statearr_13747_13769 = state_13743__$1;(statearr_13747_13769[1] = 4);
} else
{var statearr_13748_13770 = state_13743__$1;(statearr_13748_13770[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13744 === 3))
{var inst_13741 = (state_13743[2]);var state_13743__$1 = state_13743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13743__$1,inst_13741);
} else
{if((state_val_13744 === 4))
{var inst_13715 = (state_13743[7]);var state_13743__$1 = state_13743;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13743__$1,7,inst_13715);
} else
{if((state_val_13744 === 5))
{var inst_13737 = cljs.core.async.close_BANG_.call(null,out);var state_13743__$1 = state_13743;var statearr_13749_13771 = state_13743__$1;(statearr_13749_13771[2] = inst_13737);
(statearr_13749_13771[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13744 === 6))
{var inst_13739 = (state_13743[2]);var state_13743__$1 = state_13743;var statearr_13750_13772 = state_13743__$1;(statearr_13750_13772[2] = inst_13739);
(statearr_13750_13772[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13744 === 7))
{var inst_13722 = (state_13743[8]);var inst_13723 = (state_13743[9]);var inst_13722__$1 = (state_13743[2]);var inst_13723__$1 = cljs.core.nth.call(null,inst_13722__$1,0,null);var inst_13724 = cljs.core.nth.call(null,inst_13722__$1,1,null);var inst_13725 = (inst_13723__$1 == null);var state_13743__$1 = (function (){var statearr_13751 = state_13743;(statearr_13751[8] = inst_13722__$1);
(statearr_13751[9] = inst_13723__$1);
(statearr_13751[10] = inst_13724);
return statearr_13751;
})();if(cljs.core.truth_(inst_13725))
{var statearr_13752_13773 = state_13743__$1;(statearr_13752_13773[1] = 8);
} else
{var statearr_13753_13774 = state_13743__$1;(statearr_13753_13774[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13744 === 8))
{var inst_13715 = (state_13743[7]);var inst_13722 = (state_13743[8]);var inst_13723 = (state_13743[9]);var inst_13724 = (state_13743[10]);var inst_13727 = (function (){var c = inst_13724;var v = inst_13723;var vec__13720 = inst_13722;var cs = inst_13715;return ((function (c,v,vec__13720,cs,inst_13715,inst_13722,inst_13723,inst_13724,state_val_13744,c__6232__auto___13767,out){
return (function (p1__13660_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13660_SHARP_);
});
;})(c,v,vec__13720,cs,inst_13715,inst_13722,inst_13723,inst_13724,state_val_13744,c__6232__auto___13767,out))
})();var inst_13728 = cljs.core.filterv.call(null,inst_13727,inst_13715);var inst_13715__$1 = inst_13728;var state_13743__$1 = (function (){var statearr_13754 = state_13743;(statearr_13754[7] = inst_13715__$1);
return statearr_13754;
})();var statearr_13755_13775 = state_13743__$1;(statearr_13755_13775[2] = null);
(statearr_13755_13775[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13744 === 9))
{var inst_13723 = (state_13743[9]);var state_13743__$1 = state_13743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13743__$1,11,out,inst_13723);
} else
{if((state_val_13744 === 10))
{var inst_13735 = (state_13743[2]);var state_13743__$1 = state_13743;var statearr_13757_13776 = state_13743__$1;(statearr_13757_13776[2] = inst_13735);
(statearr_13757_13776[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13744 === 11))
{var inst_13715 = (state_13743[7]);var inst_13732 = (state_13743[2]);var tmp13756 = inst_13715;var inst_13715__$1 = tmp13756;var state_13743__$1 = (function (){var statearr_13758 = state_13743;(statearr_13758[7] = inst_13715__$1);
(statearr_13758[11] = inst_13732);
return statearr_13758;
})();var statearr_13759_13777 = state_13743__$1;(statearr_13759_13777[2] = null);
(statearr_13759_13777[1] = 2);
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
});})(c__6232__auto___13767,out))
;return ((function (switch__6217__auto__,c__6232__auto___13767,out){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_13763 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13763[0] = state_machine__6218__auto__);
(statearr_13763[1] = 1);
return statearr_13763;
});
var state_machine__6218__auto____1 = (function (state_13743){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_13743);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e13764){if((e13764 instanceof Object))
{var ex__6221__auto__ = e13764;var statearr_13765_13778 = state_13743;(statearr_13765_13778[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13743);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13764;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13779 = state_13743;
state_13743 = G__13779;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_13743){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_13743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___13767,out))
})();var state__6234__auto__ = (function (){var statearr_13766 = f__6233__auto__.call(null);(statearr_13766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___13767);
return statearr_13766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___13767,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___13872 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___13872,out){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___13872,out){
return (function (state_13849){var state_val_13850 = (state_13849[1]);if((state_val_13850 === 1))
{var inst_13826 = 0;var state_13849__$1 = (function (){var statearr_13851 = state_13849;(statearr_13851[7] = inst_13826);
return statearr_13851;
})();var statearr_13852_13873 = state_13849__$1;(statearr_13852_13873[2] = null);
(statearr_13852_13873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 2))
{var inst_13826 = (state_13849[7]);var inst_13828 = (inst_13826 < n);var state_13849__$1 = state_13849;if(cljs.core.truth_(inst_13828))
{var statearr_13853_13874 = state_13849__$1;(statearr_13853_13874[1] = 4);
} else
{var statearr_13854_13875 = state_13849__$1;(statearr_13854_13875[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 3))
{var inst_13846 = (state_13849[2]);var inst_13847 = cljs.core.async.close_BANG_.call(null,out);var state_13849__$1 = (function (){var statearr_13855 = state_13849;(statearr_13855[8] = inst_13846);
return statearr_13855;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13849__$1,inst_13847);
} else
{if((state_val_13850 === 4))
{var state_13849__$1 = state_13849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13849__$1,7,ch);
} else
{if((state_val_13850 === 5))
{var state_13849__$1 = state_13849;var statearr_13856_13876 = state_13849__$1;(statearr_13856_13876[2] = null);
(statearr_13856_13876[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 6))
{var inst_13844 = (state_13849[2]);var state_13849__$1 = state_13849;var statearr_13857_13877 = state_13849__$1;(statearr_13857_13877[2] = inst_13844);
(statearr_13857_13877[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 7))
{var inst_13831 = (state_13849[9]);var inst_13831__$1 = (state_13849[2]);var inst_13832 = (inst_13831__$1 == null);var inst_13833 = cljs.core.not.call(null,inst_13832);var state_13849__$1 = (function (){var statearr_13858 = state_13849;(statearr_13858[9] = inst_13831__$1);
return statearr_13858;
})();if(inst_13833)
{var statearr_13859_13878 = state_13849__$1;(statearr_13859_13878[1] = 8);
} else
{var statearr_13860_13879 = state_13849__$1;(statearr_13860_13879[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 8))
{var inst_13831 = (state_13849[9]);var state_13849__$1 = state_13849;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13849__$1,11,out,inst_13831);
} else
{if((state_val_13850 === 9))
{var state_13849__$1 = state_13849;var statearr_13861_13880 = state_13849__$1;(statearr_13861_13880[2] = null);
(statearr_13861_13880[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 10))
{var inst_13841 = (state_13849[2]);var state_13849__$1 = state_13849;var statearr_13862_13881 = state_13849__$1;(statearr_13862_13881[2] = inst_13841);
(statearr_13862_13881[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 11))
{var inst_13826 = (state_13849[7]);var inst_13836 = (state_13849[2]);var inst_13837 = (inst_13826 + 1);var inst_13826__$1 = inst_13837;var state_13849__$1 = (function (){var statearr_13863 = state_13849;(statearr_13863[7] = inst_13826__$1);
(statearr_13863[10] = inst_13836);
return statearr_13863;
})();var statearr_13864_13882 = state_13849__$1;(statearr_13864_13882[2] = null);
(statearr_13864_13882[1] = 2);
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
});})(c__6232__auto___13872,out))
;return ((function (switch__6217__auto__,c__6232__auto___13872,out){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_13868 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13868[0] = state_machine__6218__auto__);
(statearr_13868[1] = 1);
return statearr_13868;
});
var state_machine__6218__auto____1 = (function (state_13849){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_13849);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e13869){if((e13869 instanceof Object))
{var ex__6221__auto__ = e13869;var statearr_13870_13883 = state_13849;(statearr_13870_13883[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13849);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13884 = state_13849;
state_13849 = G__13884;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_13849){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_13849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___13872,out))
})();var state__6234__auto__ = (function (){var statearr_13871 = f__6233__auto__.call(null);(statearr_13871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___13872);
return statearr_13871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___13872,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___13981 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___13981,out){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___13981,out){
return (function (state_13956){var state_val_13957 = (state_13956[1]);if((state_val_13957 === 1))
{var inst_13933 = null;var state_13956__$1 = (function (){var statearr_13958 = state_13956;(statearr_13958[7] = inst_13933);
return statearr_13958;
})();var statearr_13959_13982 = state_13956__$1;(statearr_13959_13982[2] = null);
(statearr_13959_13982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 2))
{var state_13956__$1 = state_13956;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13956__$1,4,ch);
} else
{if((state_val_13957 === 3))
{var inst_13953 = (state_13956[2]);var inst_13954 = cljs.core.async.close_BANG_.call(null,out);var state_13956__$1 = (function (){var statearr_13960 = state_13956;(statearr_13960[8] = inst_13953);
return statearr_13960;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13956__$1,inst_13954);
} else
{if((state_val_13957 === 4))
{var inst_13936 = (state_13956[9]);var inst_13936__$1 = (state_13956[2]);var inst_13937 = (inst_13936__$1 == null);var inst_13938 = cljs.core.not.call(null,inst_13937);var state_13956__$1 = (function (){var statearr_13961 = state_13956;(statearr_13961[9] = inst_13936__$1);
return statearr_13961;
})();if(inst_13938)
{var statearr_13962_13983 = state_13956__$1;(statearr_13962_13983[1] = 5);
} else
{var statearr_13963_13984 = state_13956__$1;(statearr_13963_13984[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 5))
{var inst_13936 = (state_13956[9]);var inst_13933 = (state_13956[7]);var inst_13940 = cljs.core._EQ_.call(null,inst_13936,inst_13933);var state_13956__$1 = state_13956;if(inst_13940)
{var statearr_13964_13985 = state_13956__$1;(statearr_13964_13985[1] = 8);
} else
{var statearr_13965_13986 = state_13956__$1;(statearr_13965_13986[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 6))
{var state_13956__$1 = state_13956;var statearr_13967_13987 = state_13956__$1;(statearr_13967_13987[2] = null);
(statearr_13967_13987[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 7))
{var inst_13951 = (state_13956[2]);var state_13956__$1 = state_13956;var statearr_13968_13988 = state_13956__$1;(statearr_13968_13988[2] = inst_13951);
(statearr_13968_13988[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 8))
{var inst_13933 = (state_13956[7]);var tmp13966 = inst_13933;var inst_13933__$1 = tmp13966;var state_13956__$1 = (function (){var statearr_13969 = state_13956;(statearr_13969[7] = inst_13933__$1);
return statearr_13969;
})();var statearr_13970_13989 = state_13956__$1;(statearr_13970_13989[2] = null);
(statearr_13970_13989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 9))
{var inst_13936 = (state_13956[9]);var state_13956__$1 = state_13956;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13956__$1,11,out,inst_13936);
} else
{if((state_val_13957 === 10))
{var inst_13948 = (state_13956[2]);var state_13956__$1 = state_13956;var statearr_13971_13990 = state_13956__$1;(statearr_13971_13990[2] = inst_13948);
(statearr_13971_13990[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 11))
{var inst_13936 = (state_13956[9]);var inst_13945 = (state_13956[2]);var inst_13933 = inst_13936;var state_13956__$1 = (function (){var statearr_13972 = state_13956;(statearr_13972[10] = inst_13945);
(statearr_13972[7] = inst_13933);
return statearr_13972;
})();var statearr_13973_13991 = state_13956__$1;(statearr_13973_13991[2] = null);
(statearr_13973_13991[1] = 2);
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
});})(c__6232__auto___13981,out))
;return ((function (switch__6217__auto__,c__6232__auto___13981,out){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_13977 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13977[0] = state_machine__6218__auto__);
(statearr_13977[1] = 1);
return statearr_13977;
});
var state_machine__6218__auto____1 = (function (state_13956){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_13956);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e13978){if((e13978 instanceof Object))
{var ex__6221__auto__ = e13978;var statearr_13979_13992 = state_13956;(statearr_13979_13992[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13956);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13993 = state_13956;
state_13956 = G__13993;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_13956){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_13956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___13981,out))
})();var state__6234__auto__ = (function (){var statearr_13980 = f__6233__auto__.call(null);(statearr_13980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___13981);
return statearr_13980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___13981,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___14128 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___14128,out){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___14128,out){
return (function (state_14098){var state_val_14099 = (state_14098[1]);if((state_val_14099 === 1))
{var inst_14061 = (new Array(n));var inst_14062 = inst_14061;var inst_14063 = 0;var state_14098__$1 = (function (){var statearr_14100 = state_14098;(statearr_14100[7] = inst_14063);
(statearr_14100[8] = inst_14062);
return statearr_14100;
})();var statearr_14101_14129 = state_14098__$1;(statearr_14101_14129[2] = null);
(statearr_14101_14129[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14099 === 2))
{var state_14098__$1 = state_14098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14098__$1,4,ch);
} else
{if((state_val_14099 === 3))
{var inst_14096 = (state_14098[2]);var state_14098__$1 = state_14098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14098__$1,inst_14096);
} else
{if((state_val_14099 === 4))
{var inst_14066 = (state_14098[9]);var inst_14066__$1 = (state_14098[2]);var inst_14067 = (inst_14066__$1 == null);var inst_14068 = cljs.core.not.call(null,inst_14067);var state_14098__$1 = (function (){var statearr_14102 = state_14098;(statearr_14102[9] = inst_14066__$1);
return statearr_14102;
})();if(inst_14068)
{var statearr_14103_14130 = state_14098__$1;(statearr_14103_14130[1] = 5);
} else
{var statearr_14104_14131 = state_14098__$1;(statearr_14104_14131[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14099 === 5))
{var inst_14071 = (state_14098[10]);var inst_14066 = (state_14098[9]);var inst_14063 = (state_14098[7]);var inst_14062 = (state_14098[8]);var inst_14070 = (inst_14062[inst_14063] = inst_14066);var inst_14071__$1 = (inst_14063 + 1);var inst_14072 = (inst_14071__$1 < n);var state_14098__$1 = (function (){var statearr_14105 = state_14098;(statearr_14105[11] = inst_14070);
(statearr_14105[10] = inst_14071__$1);
return statearr_14105;
})();if(cljs.core.truth_(inst_14072))
{var statearr_14106_14132 = state_14098__$1;(statearr_14106_14132[1] = 8);
} else
{var statearr_14107_14133 = state_14098__$1;(statearr_14107_14133[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14099 === 6))
{var inst_14063 = (state_14098[7]);var inst_14084 = (inst_14063 > 0);var state_14098__$1 = state_14098;if(cljs.core.truth_(inst_14084))
{var statearr_14109_14134 = state_14098__$1;(statearr_14109_14134[1] = 12);
} else
{var statearr_14110_14135 = state_14098__$1;(statearr_14110_14135[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14099 === 7))
{var inst_14094 = (state_14098[2]);var state_14098__$1 = state_14098;var statearr_14111_14136 = state_14098__$1;(statearr_14111_14136[2] = inst_14094);
(statearr_14111_14136[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14099 === 8))
{var inst_14071 = (state_14098[10]);var inst_14062 = (state_14098[8]);var tmp14108 = inst_14062;var inst_14062__$1 = tmp14108;var inst_14063 = inst_14071;var state_14098__$1 = (function (){var statearr_14112 = state_14098;(statearr_14112[7] = inst_14063);
(statearr_14112[8] = inst_14062__$1);
return statearr_14112;
})();var statearr_14113_14137 = state_14098__$1;(statearr_14113_14137[2] = null);
(statearr_14113_14137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14099 === 9))
{var inst_14062 = (state_14098[8]);var inst_14076 = cljs.core.vec.call(null,inst_14062);var state_14098__$1 = state_14098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14098__$1,11,out,inst_14076);
} else
{if((state_val_14099 === 10))
{var inst_14082 = (state_14098[2]);var state_14098__$1 = state_14098;var statearr_14114_14138 = state_14098__$1;(statearr_14114_14138[2] = inst_14082);
(statearr_14114_14138[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14099 === 11))
{var inst_14078 = (state_14098[2]);var inst_14079 = (new Array(n));var inst_14062 = inst_14079;var inst_14063 = 0;var state_14098__$1 = (function (){var statearr_14115 = state_14098;(statearr_14115[7] = inst_14063);
(statearr_14115[8] = inst_14062);
(statearr_14115[12] = inst_14078);
return statearr_14115;
})();var statearr_14116_14139 = state_14098__$1;(statearr_14116_14139[2] = null);
(statearr_14116_14139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14099 === 12))
{var inst_14062 = (state_14098[8]);var inst_14086 = cljs.core.vec.call(null,inst_14062);var state_14098__$1 = state_14098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14098__$1,15,out,inst_14086);
} else
{if((state_val_14099 === 13))
{var state_14098__$1 = state_14098;var statearr_14117_14140 = state_14098__$1;(statearr_14117_14140[2] = null);
(statearr_14117_14140[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14099 === 14))
{var inst_14091 = (state_14098[2]);var inst_14092 = cljs.core.async.close_BANG_.call(null,out);var state_14098__$1 = (function (){var statearr_14118 = state_14098;(statearr_14118[13] = inst_14091);
return statearr_14118;
})();var statearr_14119_14141 = state_14098__$1;(statearr_14119_14141[2] = inst_14092);
(statearr_14119_14141[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14099 === 15))
{var inst_14088 = (state_14098[2]);var state_14098__$1 = state_14098;var statearr_14120_14142 = state_14098__$1;(statearr_14120_14142[2] = inst_14088);
(statearr_14120_14142[1] = 14);
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
});})(c__6232__auto___14128,out))
;return ((function (switch__6217__auto__,c__6232__auto___14128,out){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_14124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14124[0] = state_machine__6218__auto__);
(statearr_14124[1] = 1);
return statearr_14124;
});
var state_machine__6218__auto____1 = (function (state_14098){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_14098);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e14125){if((e14125 instanceof Object))
{var ex__6221__auto__ = e14125;var statearr_14126_14143 = state_14098;(statearr_14126_14143[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14098);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14125;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14144 = state_14098;
state_14098 = G__14144;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_14098){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_14098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___14128,out))
})();var state__6234__auto__ = (function (){var statearr_14127 = f__6233__auto__.call(null);(statearr_14127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___14128);
return statearr_14127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___14128,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___14287 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___14287,out){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___14287,out){
return (function (state_14257){var state_val_14258 = (state_14257[1]);if((state_val_14258 === 1))
{var inst_14216 = [];var inst_14217 = inst_14216;var inst_14218 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14257__$1 = (function (){var statearr_14259 = state_14257;(statearr_14259[7] = inst_14217);
(statearr_14259[8] = inst_14218);
return statearr_14259;
})();var statearr_14260_14288 = state_14257__$1;(statearr_14260_14288[2] = null);
(statearr_14260_14288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 2))
{var state_14257__$1 = state_14257;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14257__$1,4,ch);
} else
{if((state_val_14258 === 3))
{var inst_14255 = (state_14257[2]);var state_14257__$1 = state_14257;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14257__$1,inst_14255);
} else
{if((state_val_14258 === 4))
{var inst_14221 = (state_14257[9]);var inst_14221__$1 = (state_14257[2]);var inst_14222 = (inst_14221__$1 == null);var inst_14223 = cljs.core.not.call(null,inst_14222);var state_14257__$1 = (function (){var statearr_14261 = state_14257;(statearr_14261[9] = inst_14221__$1);
return statearr_14261;
})();if(inst_14223)
{var statearr_14262_14289 = state_14257__$1;(statearr_14262_14289[1] = 5);
} else
{var statearr_14263_14290 = state_14257__$1;(statearr_14263_14290[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 5))
{var inst_14221 = (state_14257[9]);var inst_14218 = (state_14257[8]);var inst_14225 = (state_14257[10]);var inst_14225__$1 = f.call(null,inst_14221);var inst_14226 = cljs.core._EQ_.call(null,inst_14225__$1,inst_14218);var inst_14227 = cljs.core.keyword_identical_QMARK_.call(null,inst_14218,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14228 = (inst_14226) || (inst_14227);var state_14257__$1 = (function (){var statearr_14264 = state_14257;(statearr_14264[10] = inst_14225__$1);
return statearr_14264;
})();if(cljs.core.truth_(inst_14228))
{var statearr_14265_14291 = state_14257__$1;(statearr_14265_14291[1] = 8);
} else
{var statearr_14266_14292 = state_14257__$1;(statearr_14266_14292[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 6))
{var inst_14217 = (state_14257[7]);var inst_14242 = inst_14217.length;var inst_14243 = (inst_14242 > 0);var state_14257__$1 = state_14257;if(cljs.core.truth_(inst_14243))
{var statearr_14268_14293 = state_14257__$1;(statearr_14268_14293[1] = 12);
} else
{var statearr_14269_14294 = state_14257__$1;(statearr_14269_14294[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 7))
{var inst_14253 = (state_14257[2]);var state_14257__$1 = state_14257;var statearr_14270_14295 = state_14257__$1;(statearr_14270_14295[2] = inst_14253);
(statearr_14270_14295[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 8))
{var inst_14221 = (state_14257[9]);var inst_14217 = (state_14257[7]);var inst_14225 = (state_14257[10]);var inst_14230 = inst_14217.push(inst_14221);var tmp14267 = inst_14217;var inst_14217__$1 = tmp14267;var inst_14218 = inst_14225;var state_14257__$1 = (function (){var statearr_14271 = state_14257;(statearr_14271[7] = inst_14217__$1);
(statearr_14271[8] = inst_14218);
(statearr_14271[11] = inst_14230);
return statearr_14271;
})();var statearr_14272_14296 = state_14257__$1;(statearr_14272_14296[2] = null);
(statearr_14272_14296[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 9))
{var inst_14217 = (state_14257[7]);var inst_14233 = cljs.core.vec.call(null,inst_14217);var state_14257__$1 = state_14257;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14257__$1,11,out,inst_14233);
} else
{if((state_val_14258 === 10))
{var inst_14240 = (state_14257[2]);var state_14257__$1 = state_14257;var statearr_14273_14297 = state_14257__$1;(statearr_14273_14297[2] = inst_14240);
(statearr_14273_14297[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 11))
{var inst_14221 = (state_14257[9]);var inst_14225 = (state_14257[10]);var inst_14235 = (state_14257[2]);var inst_14236 = [];var inst_14237 = inst_14236.push(inst_14221);var inst_14217 = inst_14236;var inst_14218 = inst_14225;var state_14257__$1 = (function (){var statearr_14274 = state_14257;(statearr_14274[12] = inst_14237);
(statearr_14274[13] = inst_14235);
(statearr_14274[7] = inst_14217);
(statearr_14274[8] = inst_14218);
return statearr_14274;
})();var statearr_14275_14298 = state_14257__$1;(statearr_14275_14298[2] = null);
(statearr_14275_14298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 12))
{var inst_14217 = (state_14257[7]);var inst_14245 = cljs.core.vec.call(null,inst_14217);var state_14257__$1 = state_14257;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14257__$1,15,out,inst_14245);
} else
{if((state_val_14258 === 13))
{var state_14257__$1 = state_14257;var statearr_14276_14299 = state_14257__$1;(statearr_14276_14299[2] = null);
(statearr_14276_14299[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 14))
{var inst_14250 = (state_14257[2]);var inst_14251 = cljs.core.async.close_BANG_.call(null,out);var state_14257__$1 = (function (){var statearr_14277 = state_14257;(statearr_14277[14] = inst_14250);
return statearr_14277;
})();var statearr_14278_14300 = state_14257__$1;(statearr_14278_14300[2] = inst_14251);
(statearr_14278_14300[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 15))
{var inst_14247 = (state_14257[2]);var state_14257__$1 = state_14257;var statearr_14279_14301 = state_14257__$1;(statearr_14279_14301[2] = inst_14247);
(statearr_14279_14301[1] = 14);
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
});})(c__6232__auto___14287,out))
;return ((function (switch__6217__auto__,c__6232__auto___14287,out){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_14283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14283[0] = state_machine__6218__auto__);
(statearr_14283[1] = 1);
return statearr_14283;
});
var state_machine__6218__auto____1 = (function (state_14257){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_14257);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e14284){if((e14284 instanceof Object))
{var ex__6221__auto__ = e14284;var statearr_14285_14302 = state_14257;(statearr_14285_14302[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14257);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14303 = state_14257;
state_14257 = G__14303;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_14257){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_14257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___14287,out))
})();var state__6234__auto__ = (function (){var statearr_14286 = f__6233__auto__.call(null);(statearr_14286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___14287);
return statearr_14286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___14287,out))
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