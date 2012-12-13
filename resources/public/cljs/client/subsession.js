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
if((function (){var and__3937__auto____7709 = this$;
if(and__3937__auto____7709)
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$2;
} else
{return and__3937__auto____7709;
}
})())
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$2(this$,event);
} else
{var x__2396__auto____7710 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____7711 = (session.client.subsession.insert_new_loop[goog.typeOf(x__2396__auto____7710)]);
if(or__3939__auto____7711)
{return or__3939__auto____7711;
} else
{var or__3939__auto____7712 = (session.client.subsession.insert_new_loop["_"]);
if(or__3939__auto____7712)
{return or__3939__auto____7712;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.insert-new-loop",this$);
}
}
})().call(null,this$,event);
}
});
session.client.subsession.delete_loop = (function delete_loop(this$,event){
if((function (){var and__3937__auto____7717 = this$;
if(and__3937__auto____7717)
{return this$.session$client$subsession$ISubsession$delete_loop$arity$2;
} else
{return and__3937__auto____7717;
}
})())
{return this$.session$client$subsession$ISubsession$delete_loop$arity$2(this$,event);
} else
{var x__2396__auto____7718 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____7719 = (session.client.subsession.delete_loop[goog.typeOf(x__2396__auto____7718)]);
if(or__3939__auto____7719)
{return or__3939__auto____7719;
} else
{var or__3939__auto____7720 = (session.client.subsession.delete_loop["_"]);
if(or__3939__auto____7720)
{return or__3939__auto____7720;
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
session.client.subsession.Subsession.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"session.client.subsession/Subsession");
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$ = true;
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$insert_new_loop$arity$2 = (function (this$,data){
var this__7721 = this;
var loop__7722 = (new cljs.core.Keyword("\uFDD0'loop")).call(null,data);
var position__7723 = (new cljs.core.Keyword("\uFDD0'position")).call(null,data);
var loop_view__7724 = session.client.mvc.render.call(null,loop__7722);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__7724))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7725 = cljs.core.vector_QMARK_.call(null,loop_view__7724);
if(or__3939__auto____7725)
{return or__3939__auto____7725;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__7724);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__7724):((true)?cljs_jquery.core.jquery.call(null,loop_view__7724):null))),cljs.core.PersistentVector.fromArray(["insertAfter",((cljs.core._EQ_.call(null,"\uFDD0'this",[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__7723))].join('')))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7726 = cljs.core.vector_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__7723))].join(''));
if(or__3939__auto____7726)
{return or__3939__auto____7726;
} else
{return cljs.core.keyword_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__7723))].join(''));
}
})())?cljs_jquery.core.dom_create.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__7723))].join('')):((true)?cljs_jquery.core.jquery.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__7723))].join('')):null)))], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__7724))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7727 = cljs.core.vector_QMARK_.call(null,loop_view__7724);
if(or__3939__auto____7727)
{return or__3939__auto____7727;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__7724);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__7724):((true)?cljs_jquery.core.jquery.call(null,loop_view__7724):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$delete_loop$arity$2 = (function (this$,data){
var this__7728 = this;
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join('')))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7729 = cljs.core.vector_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join(''));
if(or__3939__auto____7729)
{return or__3939__auto____7729;
} else
{return cljs.core.keyword_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join(''));
}
})())?cljs_jquery.core.dom_create.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join('')):((true)?cljs_jquery.core.jquery.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'id")).call(null,data))].join('')):null))),cljs.core.PersistentVector.fromArray(["remove"], true));
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$ = true;
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__7730 = this;
var v__7732 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7730.model)))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7731 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7730.model)))], true));
if(or__3939__auto____7731)
{return or__3939__auto____7731;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7730.model)))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7730.model)))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",cljs.core.PersistentVector.fromArray(["\uFDD0'div#subsession-root",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:-20px"}),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator("subsession-root",cljs.core.atom.call(null,null))))], true),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7730.model)))], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",this__7730.model], true));
cljs.core.reset_BANG_.call(null,this__7730.dom,v__7732);
return v__7732;
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__7733 = this;
session.client.subscribe.subscribe_BANG_.call(null,"subsession",this$);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__7733.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7734 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__7733.dom));
if(or__3939__auto____7734)
{return or__3939__auto____7734;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__7733.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__7733.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__7733.dom)):null))),cljs.core.PersistentVector.fromArray(["on","insert-new-loop",(function (p1__7703_SHARP_){
return session.client.subsession.insert_new_loop.call(null,this$,p1__7703_SHARP_);
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__7733.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7735 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__7733.dom));
if(or__3939__auto____7735)
{return or__3939__auto____7735;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__7733.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__7733.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__7733.dom)):null))),cljs.core.PersistentVector.fromArray(["on","delete-loop",(function (p1__7704_SHARP_){
return session.client.subsession.delete_loop.call(null,this$,p1__7704_SHARP_);
})], true));
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__7736 = this;
return this__7736.model.call(null,k);
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__7737 = this;
return this__7737.model.call(null,k,not_found);
});
session.client.subsession.Subsession.prototype.session$client$subscribe$ISubscribe$ = true;
session.client.subsession.Subsession.prototype.session$client$subscribe$ISubscribe$receive$arity$2 = (function (this$,msg){
var this__7738 = this;
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
