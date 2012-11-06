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
if((function (){var and__3822__auto____213138 = this$;
if(and__3822__auto____213138)
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$2;
} else
{return and__3822__auto____213138;
}
})())
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$2(this$,event);
} else
{var x__2363__auto____213139 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____213140 = (session.client.subsession.insert_new_loop[goog.typeOf(x__2363__auto____213139)]);
if(or__3824__auto____213140)
{return or__3824__auto____213140;
} else
{var or__3824__auto____213141 = (session.client.subsession.insert_new_loop["_"]);
if(or__3824__auto____213141)
{return or__3824__auto____213141;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.insert-new-loop",this$);
}
}
})().call(null,this$,event);
}
});
session.client.subsession.delete_loop = (function delete_loop(this$,event){
if((function (){var and__3822__auto____213146 = this$;
if(and__3822__auto____213146)
{return this$.session$client$subsession$ISubsession$delete_loop$arity$2;
} else
{return and__3822__auto____213146;
}
})())
{return this$.session$client$subsession$ISubsession$delete_loop$arity$2(this$,event);
} else
{var x__2363__auto____213147 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____213148 = (session.client.subsession.delete_loop[goog.typeOf(x__2363__auto____213147)]);
if(or__3824__auto____213148)
{return or__3824__auto____213148;
} else
{var or__3824__auto____213149 = (session.client.subsession.delete_loop["_"]);
if(or__3824__auto____213149)
{return or__3824__auto____213149;
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
var this__213150 = this;
var loop__213151 = (new cljs.core.Keyword("\uFDD0'loop")).call(null,data);
var position__213152 = (new cljs.core.Keyword("\uFDD0'position")).call(null,data);
var loop_view__213153 = session.client.mvc.render.call(null,loop__213151);
if(cljs.core._EQ_.call(null,"subsession-root",(new cljs.core.Keyword("\uFDD0'after")).call(null,position__213152)))
{cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this$),(function (p1__213131_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([loop__213151], true),p1__213131_SHARP_));
}));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__213153))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____213154 = cljs.core.vector_QMARK_.call(null,loop_view__213153);
if(or__3824__auto____213154)
{return or__3824__auto____213154;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__213153);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__213153):((true)?cljs_jquery.core.jquery.call(null,loop_view__213153):null))),cljs.core.PersistentVector.fromArray(["insertAfter",((cljs.core._EQ_.call(null,"\uFDD0'this","#subsession-root-lc"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____213155 = cljs.core.vector_QMARK_.call(null,"#subsession-root-lc");
if(or__3824__auto____213155)
{return or__3824__auto____213155;
} else
{return cljs.core.keyword_QMARK_.call(null,"#subsession-root-lc");
}
})())?cljs_jquery.core.dom_create.call(null,"#subsession-root-lc"):((true)?cljs_jquery.core.jquery.call(null,"#subsession-root-lc"):null)))], true));
} else
{cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this$),(function (p1__213132_SHARP_){
var vec__213156__213157 = cljs.core.split_with.call(null,(function (m){
return cljs.core.not_EQ_.call(null,(new cljs.core.Keyword("\uFDD0'id")).call(null,m),(new cljs.core.Keyword("\uFDD0'after")).call(null,position__213152));
}),p1__213132_SHARP_);
var left__213158 = cljs.core.nth.call(null,vec__213156__213157,0,null);
var right__213159 = cljs.core.nth.call(null,vec__213156__213157,1,null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,left__213158,(cljs.core.truth_(cljs.core.first.call(null,right__213159))?cljs.core.PersistentVector.fromArray([session.client.subsession.frist.call(null,right__213159)], true):null),cljs.core.PersistentVector.fromArray([loop__213151], true),cljs.core.rest.call(null,right__213159)));
}));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__213153))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____213160 = cljs.core.vector_QMARK_.call(null,loop_view__213153);
if(or__3824__auto____213160)
{return or__3824__auto____213160;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__213153);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__213153):((true)?cljs_jquery.core.jquery.call(null,loop_view__213153):null))),cljs.core.PersistentVector.fromArray(["insertAfter",((cljs.core._EQ_.call(null,"\uFDD0'this",[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__213152))].join('')))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____213161 = cljs.core.vector_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__213152))].join(''));
if(or__3824__auto____213161)
{return or__3824__auto____213161;
} else
{return cljs.core.keyword_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__213152))].join(''));
}
})())?cljs_jquery.core.dom_create.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__213152))].join('')):((true)?cljs_jquery.core.jquery.call(null,[cljs.core.str("#"),cljs.core.str((new cljs.core.Keyword("\uFDD0'after")).call(null,position__213152))].join('')):null)))], true));
}
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__213153))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____213162 = cljs.core.vector_QMARK_.call(null,loop_view__213153);
if(or__3824__auto____213162)
{return or__3824__auto____213162;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__213153);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__213153):((true)?cljs_jquery.core.jquery.call(null,loop_view__213153):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$delete_loop$arity$2 = (function (this$,event){
var this__213163 = this;
var event_target__213164 = event.target;
var event_model__213166 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__213164))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____213165 = cljs.core.vector_QMARK_.call(null,event_target__213164);
if(or__3824__auto____213165)
{return or__3824__auto____213165;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__213164);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__213164):((true)?cljs_jquery.core.jquery.call(null,event_target__213164):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var session_model__213167 = this$;
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__213164))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____213168 = cljs.core.vector_QMARK_.call(null,event_target__213164);
if(or__3824__auto____213168)
{return or__3824__auto____213168;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__213164);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__213164):((true)?cljs_jquery.core.jquery.call(null,event_target__213164):null))),cljs.core.PersistentVector.fromArray(["remove"], true));
return cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__213167),(function (p1__213133_SHARP_){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__213166);
}),p1__213133_SHARP_));
}));
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$ = true;
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__213169 = this;
var v__213171 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true,cljs.core.atom.call(null,null)))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__213169.model)))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____213170 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true,cljs.core.atom.call(null,null)))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__213169.model)))], true));
if(or__3824__auto____213170)
{return or__3824__auto____213170;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true,cljs.core.atom.call(null,null)))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__213169.model)))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true,cljs.core.atom.call(null,null)))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__213169.model)))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true,cljs.core.atom.call(null,null)))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__213169.model)))], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",this__213169.model], true));
cljs.core.reset_BANG_.call(null,this__213169.dom,v__213171);
return v__213171;
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__213172 = this;
session.client.subscribe.subscribe_BANG_.call(null,"subsession",this$);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__213172.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____213173 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__213172.dom));
if(or__3824__auto____213173)
{return or__3824__auto____213173;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__213172.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__213172.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__213172.dom)):null))),cljs.core.PersistentVector.fromArray(["on","insert-new-loop",(function (p1__213129_SHARP_){
return session.client.subsession.insert_new_loop.call(null,this$,p1__213129_SHARP_);
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__213172.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____213174 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__213172.dom));
if(or__3824__auto____213174)
{return or__3824__auto____213174;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__213172.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__213172.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__213172.dom)):null))),cljs.core.PersistentVector.fromArray(["on","delete-loop",(function (p1__213130_SHARP_){
return session.client.subsession.delete_loop.call(null,this$,p1__213130_SHARP_);
})], true));
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__213175 = this;
return this__213175.model.call(null,k);
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__213176 = this;
return this__213176.model.call(null,k,not_found);
});
session.client.subsession.Subsession.prototype.session$client$subscribe$ISubscribe$ = true;
session.client.subsession.Subsession.prototype.session$client$subscribe$ISubscribe$receive$arity$2 = (function (this$,msg){
var this__213177 = this;
if(cljs.core._EQ_.call(null,"\uFDD0'insert-loop",(new cljs.core.Keyword("\uFDD0'op")).call(null,msg)))
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$2(this$,(new cljs.core.Keyword("\uFDD0'data")).call(null,msg));
} else
{return null;
}
});
session.client.subsession.Subsession;
