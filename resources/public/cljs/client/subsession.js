goog.provide('session.client.subsession');
goog.require('cljs.core');
goog.require('session.client.subscribe');
goog.require('cljs.reader');
goog.require('session.client.session');
goog.require('session.client.mvc');
goog.require('session.client.loop');
goog.require('session.client.loop_creator');
session.client.subsession.ISubsession = {};
session.client.subsession.insert_new_loop = (function insert_new_loop(this$,event){
if((function (){var and__3937__auto__ = this$;
if(and__3937__auto__)
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$2;
} else
{return and__3937__auto__;
}
})())
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$2(this$,event);
} else
{var x__2408__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3939__auto__ = (session.client.subsession.insert_new_loop[goog.typeOf(x__2408__auto__)]);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{var or__3939__auto____$1 = (session.client.subsession.insert_new_loop["_"]);
if(or__3939__auto____$1)
{return or__3939__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.insert-new-loop",this$);
}
}
})().call(null,this$,event);
}
});
session.client.subsession.delete_loop = (function delete_loop(this$,event){
if((function (){var and__3937__auto__ = this$;
if(and__3937__auto__)
{return this$.session$client$subsession$ISubsession$delete_loop$arity$2;
} else
{return and__3937__auto__;
}
})())
{return this$.session$client$subsession$ISubsession$delete_loop$arity$2(this$,event);
} else
{var x__2408__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3939__auto__ = (session.client.subsession.delete_loop[goog.typeOf(x__2408__auto__)]);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{var or__3939__auto____$1 = (session.client.subsession.delete_loop["_"]);
if(or__3939__auto____$1)
{return or__3939__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.delete-loop",this$);
}
}
})().call(null,this$,event);
}
});

goog.provide('session.client.subsession.Subsession');

/**
* @constructor
*/
session.client.subsession.Subsession = (function (model,dom){
this.model = model;
this.dom = dom;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 256;
})
session.client.subsession.Subsession.cljs$lang$type = true;
session.client.subsession.Subsession.cljs$lang$ctorPrSeq = (function (this__2350__auto__){
return cljs.core.list.call(null,"session.client.subsession/Subsession");
});
session.client.subsession.Subsession.cljs$lang$ctorPrWriter = (function (this__2350__auto__,writer__2351__auto__){
return cljs.core._write.call(null,writer__2351__auto__,"session.client.subsession/Subsession");
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$ = true;
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$insert_new_loop$arity$2 = (function (this$,data){
var self__ = this;
var loop = (new cljs.core.Keyword("\uFDD0'loop")).call(null,data);
var position = (new cljs.core.Keyword("\uFDD0'position")).call(null,data);
var loop_view = session.client.mvc.render.call(null,loop);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,loop_view);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view):((true)?cljs_jquery.core.jquery.call(null,loop_view):null))),cljs.core.PersistentVector.fromArray(["insertAfter",((cljs.core._EQ_.call(null,"\uFDD0'this",[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position))].join('')))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position))].join(''));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position))].join(''));
}
})())?cljs_jquery.core.dom_create.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position))].join('')):((true)?cljs_jquery.core.jquery.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position))].join('')):null)))], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,loop_view);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view):((true)?cljs_jquery.core.jquery.call(null,loop_view):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$delete_loop$arity$2 = (function (this$,data){
var self__ = this;
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join('')))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join(''));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join(''));
}
})())?cljs_jquery.core.dom_create.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join('')):((true)?cljs_jquery.core.jquery.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join('')):null))),cljs.core.PersistentVector.fromArray(["remove"], true));
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$ = true;
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var self__ = this;
var v = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,self__.model)))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,self__.model)))], true));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,self__.model)))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,self__.model)))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,self__.model)))], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",self__.model], true));
cljs.core.reset_BANG_.call(null,self__.dom,v);
return v;
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var self__ = this;
session.client.subscribe.subscribe_BANG_.call(null,"subsession",this$);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,self__.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,self__.dom));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,self__.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,self__.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,self__.dom)):null))),cljs.core.PersistentVector.fromArray(["on","insert-new-loop",(function (p1__3109_SHARP_){
return session.client.subsession.insert_new_loop.call(null,this$,p1__3109_SHARP_);
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,self__.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,self__.dom));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,self__.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,self__.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,self__.dom)):null))),cljs.core.PersistentVector.fromArray(["on","delete-loop",(function (p1__3110_SHARP_){
return session.client.subsession.delete_loop.call(null,this$,p1__3110_SHARP_);
})], true));
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
return self__.model.call(null,k);
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
return self__.model.call(null,k,not_found);
});
session.client.subsession.Subsession.prototype.session$client$subscribe$ISubscribe$ = true;
session.client.subsession.Subsession.prototype.session$client$subscribe$ISubscribe$receive$arity$2 = (function (this$,msg){
var self__ = this;
if(cljs.core._EQ_.call(null,"\uFDD0'insert-loop",(new cljs.core.Keyword("\uFDD0'op")).call(null,msg)))
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$2(this$,(new cljs.core.Keyword("\uFDD0'data")).call(null,msg));
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'delete-loop",(new cljs.core.Keyword("\uFDD0'op")).call(null,msg)))
{return this$.session$client$subsession$ISubsession$delete_loop$arity$2(this$,(new cljs.core.Keyword("\uFDD0'data")).call(null,msg));
} else
{return null;
}
}
});
session.client.subsession.Subsession;
