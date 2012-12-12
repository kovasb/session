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
if((function (){var and__3937__auto____7726 = this$;
if(and__3937__auto____7726)
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$2;
} else
{return and__3937__auto____7726;
}
})())
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$2(this$,event);
} else
{var x__2390__auto____7727 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____7728 = (session.client.subsession.insert_new_loop[goog.typeOf(x__2390__auto____7727)]);
if(or__3939__auto____7728)
{return or__3939__auto____7728;
} else
{var or__3939__auto____7729 = (session.client.subsession.insert_new_loop["_"]);
if(or__3939__auto____7729)
{return or__3939__auto____7729;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.insert-new-loop",this$);
}
}
})().call(null,this$,event);
}
});
session.client.subsession.delete_loop = (function delete_loop(this$,event){
if((function (){var and__3937__auto____7734 = this$;
if(and__3937__auto____7734)
{return this$.session$client$subsession$ISubsession$delete_loop$arity$2;
} else
{return and__3937__auto____7734;
}
})())
{return this$.session$client$subsession$ISubsession$delete_loop$arity$2(this$,event);
} else
{var x__2390__auto____7735 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____7736 = (session.client.subsession.delete_loop[goog.typeOf(x__2390__auto____7735)]);
if(or__3939__auto____7736)
{return or__3939__auto____7736;
} else
{var or__3939__auto____7737 = (session.client.subsession.delete_loop["_"]);
if(or__3939__auto____7737)
{return or__3939__auto____7737;
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
session.client.subsession.Subsession.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"session.client.subsession/Subsession");
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$ = true;
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$insert_new_loop$arity$2 = (function (this$,data){
var this__7738 = this;
var loop__7739 = (new cljs.core.Keyword("\uFDD0'loop")).call(null,data);
var position__7740 = (new cljs.core.Keyword("\uFDD0'position")).call(null,data);
var loop_view__7741 = session.client.mvc.render.call(null,loop__7739);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__7741))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7742 = cljs.core.vector_QMARK_.call(null,loop_view__7741);
if(or__3939__auto____7742)
{return or__3939__auto____7742;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__7741);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__7741):((true)?cljs_jquery.core.jquery.call(null,loop_view__7741):null))),cljs.core.PersistentVector.fromArray(["insertAfter",((cljs.core._EQ_.call(null,"\uFDD0'this",[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__7740))].join('')))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7743 = cljs.core.vector_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__7740))].join(''));
if(or__3939__auto____7743)
{return or__3939__auto____7743;
} else
{return cljs.core.keyword_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__7740))].join(''));
}
})())?cljs_jquery.core.dom_create.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__7740))].join('')):((true)?cljs_jquery.core.jquery.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__7740))].join('')):null)))], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__7741))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7744 = cljs.core.vector_QMARK_.call(null,loop_view__7741);
if(or__3939__auto____7744)
{return or__3939__auto____7744;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__7741);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__7741):((true)?cljs_jquery.core.jquery.call(null,loop_view__7741):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$delete_loop$arity$2 = (function (this$,data){
var this__7745 = this;
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join('')))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7746 = cljs.core.vector_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join(''));
if(or__3939__auto____7746)
{return or__3939__auto____7746;
} else
{return cljs.core.keyword_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join(''));
}
})())?cljs_jquery.core.dom_create.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join('')):((true)?cljs_jquery.core.jquery.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join('')):null))),cljs.core.PersistentVector.fromArray(["remove"], true));
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$ = true;
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__7747 = this;
var v__7749 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7747.model)))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7748 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7747.model)))], true));
if(or__3939__auto____7748)
{return or__3939__auto____7748;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7747.model)))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7747.model)))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7747.model)))], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",this__7747.model], true));
cljs.core.reset_BANG_.call(null,this__7747.dom,v__7749);
return v__7749;
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__7750 = this;
session.client.subscribe.subscribe_BANG_.call(null,"subsession",this$);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__7750.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7751 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__7750.dom));
if(or__3939__auto____7751)
{return or__3939__auto____7751;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__7750.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__7750.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__7750.dom)):null))),cljs.core.PersistentVector.fromArray(["on","insert-new-loop",(function (p1__7720_SHARP_){
return session.client.subsession.insert_new_loop.call(null,this$,p1__7720_SHARP_);
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__7750.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7752 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__7750.dom));
if(or__3939__auto____7752)
{return or__3939__auto____7752;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__7750.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__7750.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__7750.dom)):null))),cljs.core.PersistentVector.fromArray(["on","delete-loop",(function (p1__7721_SHARP_){
return session.client.subsession.delete_loop.call(null,this$,p1__7721_SHARP_);
})], true));
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__7753 = this;
return this__7753.model.call(null,k);
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__7754 = this;
return this__7754.model.call(null,k,not_found);
});
session.client.subsession.Subsession.prototype.session$client$subscribe$ISubscribe$ = true;
session.client.subsession.Subsession.prototype.session$client$subscribe$ISubscribe$receive$arity$2 = (function (this$,msg){
var this__7755 = this;
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
