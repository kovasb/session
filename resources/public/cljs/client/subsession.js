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
if((function (){var and__3822__auto____713599 = this$;
if(and__3822__auto____713599)
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$2;
} else
{return and__3822__auto____713599;
}
})())
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$2(this$,event);
} else
{var x__2363__auto____713600 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____713601 = (session.client.subsession.insert_new_loop[goog.typeOf(x__2363__auto____713600)]);
if(or__3824__auto____713601)
{return or__3824__auto____713601;
} else
{var or__3824__auto____713602 = (session.client.subsession.insert_new_loop["_"]);
if(or__3824__auto____713602)
{return or__3824__auto____713602;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.insert-new-loop",this$);
}
}
})().call(null,this$,event);
}
});
session.client.subsession.delete_loop = (function delete_loop(this$,event){
if((function (){var and__3822__auto____713607 = this$;
if(and__3822__auto____713607)
{return this$.session$client$subsession$ISubsession$delete_loop$arity$2;
} else
{return and__3822__auto____713607;
}
})())
{return this$.session$client$subsession$ISubsession$delete_loop$arity$2(this$,event);
} else
{var x__2363__auto____713608 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____713609 = (session.client.subsession.delete_loop[goog.typeOf(x__2363__auto____713608)]);
if(or__3824__auto____713609)
{return or__3824__auto____713609;
} else
{var or__3824__auto____713610 = (session.client.subsession.delete_loop["_"]);
if(or__3824__auto____713610)
{return or__3824__auto____713610;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.delete-loop",this$);
}
}
})().call(null,this$,event);
}
});

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
session.client.subsession.Subsession.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"session.client.subsession/Subsession");
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$ = true;
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$insert_new_loop$arity$2 = (function (this$,data){
var this__713611 = this;
var loop__713612 = (new cljs.core.Keyword("\uFDD0'loop")).call(null,data);
var position__713613 = (new cljs.core.Keyword("\uFDD0'position")).call(null,data);
var loop_view__713614 = session.client.mvc.render.call(null,loop__713612);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__713614))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____713615 = cljs.core.vector_QMARK_.call(null,loop_view__713614);
if(or__3824__auto____713615)
{return or__3824__auto____713615;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__713614);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__713614):((true)?cljs_jquery.core.jquery.call(null,loop_view__713614):null))),cljs.core.PersistentVector.fromArray(["insertAfter",((cljs.core._EQ_.call(null,"\uFDD0'this",[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__713613))].join('')))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____713616 = cljs.core.vector_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__713613))].join(''));
if(or__3824__auto____713616)
{return or__3824__auto____713616;
} else
{return cljs.core.keyword_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__713613))].join(''));
}
})())?cljs_jquery.core.dom_create.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__713613))].join('')):((true)?cljs_jquery.core.jquery.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__713613))].join('')):null)))], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__713614))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____713617 = cljs.core.vector_QMARK_.call(null,loop_view__713614);
if(or__3824__auto____713617)
{return or__3824__auto____713617;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__713614);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__713614):((true)?cljs_jquery.core.jquery.call(null,loop_view__713614):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$delete_loop$arity$2 = (function (this$,data){
var this__713618 = this;
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join('')))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____713619 = cljs.core.vector_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join(''));
if(or__3824__auto____713619)
{return or__3824__auto____713619;
} else
{return cljs.core.keyword_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join(''));
}
})())?cljs_jquery.core.dom_create.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join('')):((true)?cljs_jquery.core.jquery.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join('')):null))),cljs.core.PersistentVector.fromArray(["remove"], true));
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$ = true;
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__713620 = this;
var v__713622 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__713620.model)))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____713621 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__713620.model)))], true));
if(or__3824__auto____713621)
{return or__3824__auto____713621;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__713620.model)))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__713620.model)))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__713620.model)))], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",this__713620.model], true));
cljs.core.reset_BANG_.call(null,this__713620.dom,v__713622);
return v__713622;
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__713623 = this;
session.client.subscribe.subscribe_BANG_.call(null,"subsession",this$);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__713623.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____713624 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__713623.dom));
if(or__3824__auto____713624)
{return or__3824__auto____713624;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__713623.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__713623.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__713623.dom)):null))),cljs.core.PersistentVector.fromArray(["on","insert-new-loop",(function (p1__713593_SHARP_){
return session.client.subsession.insert_new_loop.call(null,this$,p1__713593_SHARP_);
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__713623.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____713625 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__713623.dom));
if(or__3824__auto____713625)
{return or__3824__auto____713625;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__713623.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__713623.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__713623.dom)):null))),cljs.core.PersistentVector.fromArray(["on","delete-loop",(function (p1__713594_SHARP_){
return session.client.subsession.delete_loop.call(null,this$,p1__713594_SHARP_);
})], true));
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__713626 = this;
return this__713626.model.call(null,k);
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__713627 = this;
return this__713627.model.call(null,k,not_found);
});
session.client.subsession.Subsession.prototype.session$client$subscribe$ISubscribe$ = true;
session.client.subsession.Subsession.prototype.session$client$subscribe$ISubscribe$receive$arity$2 = (function (this$,msg){
var this__713628 = this;
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
