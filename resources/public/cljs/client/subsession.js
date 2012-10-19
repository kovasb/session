goog.provide('session.client.subsession');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('session.client.session');
goog.require('session.client.mvc');
goog.require('session.client.loop');
goog.require('session.client.loop_creator');
session.client.subsession.ISubsession = {};
session.client.subsession.insert_new_loop = (function insert_new_loop(this$,session_view,event){
if((function (){var and__3822__auto____32712 = this$;
if(and__3822__auto____32712)
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$3;
} else
{return and__3822__auto____32712;
}
})())
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$3(this$,session_view,event);
} else
{var x__2363__auto____32713 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____32714 = (session.client.subsession.insert_new_loop[goog.typeOf(x__2363__auto____32713)]);
if(or__3824__auto____32714)
{return or__3824__auto____32714;
} else
{var or__3824__auto____32715 = (session.client.subsession.insert_new_loop["_"]);
if(or__3824__auto____32715)
{return or__3824__auto____32715;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.insert-new-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.delete_loop = (function delete_loop(this$,session_view,event){
if((function (){var and__3822__auto____32720 = this$;
if(and__3822__auto____32720)
{return this$.session$client$subsession$ISubsession$delete_loop$arity$3;
} else
{return and__3822__auto____32720;
}
})())
{return this$.session$client$subsession$ISubsession$delete_loop$arity$3(this$,session_view,event);
} else
{var x__2363__auto____32721 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____32722 = (session.client.subsession.delete_loop[goog.typeOf(x__2363__auto____32721)]);
if(or__3824__auto____32722)
{return or__3824__auto____32722;
} else
{var or__3824__auto____32723 = (session.client.subsession.delete_loop["_"]);
if(or__3824__auto____32723)
{return or__3824__auto____32723;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.delete-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.evaluate_loop = (function evaluate_loop(this$){
if((function (){var and__3822__auto____32728 = this$;
if(and__3822__auto____32728)
{return this$.session$client$subsession$ISubsession$evaluate_loop$arity$1;
} else
{return and__3822__auto____32728;
}
})())
{return this$.session$client$subsession$ISubsession$evaluate_loop$arity$1(this$);
} else
{var x__2363__auto____32729 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____32730 = (session.client.subsession.evaluate_loop[goog.typeOf(x__2363__auto____32729)]);
if(or__3824__auto____32730)
{return or__3824__auto____32730;
} else
{var or__3824__auto____32731 = (session.client.subsession.evaluate_loop["_"]);
if(or__3824__auto____32731)
{return or__3824__auto____32731;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.evaluate-loop",this$);
}
}
})().call(null,this$);
}
});
session.client.subsession.callbacks = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
session.client.subsession.ws = (new WebSocket("ws://localhost:8090/service"));
(session.client.subsession.ws["onmessage"] = (function (e){
var data__32733 = cljs.reader.read_string.call(null,e.data);
alert(cljs.core.pr_str.call(null,data__32733));
return cljs.core.deref.call(null,session.client.subsession.callbacks).call(null,(new cljs.core.Keyword("\uFDD0'id")).call(null,data__32733)).call(null,(new cljs.core.Keyword("\uFDD0'data")).call(null,data__32733));
}));
session.client.subsession.response_handler = (function response_handler(event_model){
return (function (p1__32732_SHARP_){
return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,event_model),p1__32732_SHARP_);
});
});
session.client.subsession.evaluate_clj = (function evaluate_clj(event_model){
cljs.core.swap_BANG_.call(null,session.client.subsession.callbacks,cljs.core.assoc,(new cljs.core.Keyword("\uFDD0'id")).call(null,event_model),session.client.subsession.response_handler.call(null,event_model));
return session.client.subsession.ws.send(cljs.core.pr_str.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'data","\uFDD0'id"],{"\uFDD0'op":"\uFDD0'evaluate-clj","\uFDD0'data":cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,event_model)),"\uFDD0'id":(new cljs.core.Keyword("\uFDD0'id")).call(null,event_model)})));
});
session.client.subsession.evaluate_cljs = (function evaluate_cljs(event_model){
return fetch.remotes.remote_callback.call(null,"compile-expr-string",cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,event_model)),(new cljs.core.Keyword("\uFDD0'id")).call(null,event_model)], true),(function (result){
return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,event_model),(function (){var x__32741 = eval((new cljs.core.Keyword("\uFDD0'result")).call(null,result));
if(cljs.core.truth_(x__32741))
{return x__32741;
} else
{return null;
}
})());
}));
});

/**
* @constructor
*/
session.client.subsession.Subsession = (function (model){
this.model = model;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 536871168;
})
session.client.subsession.Subsession.cljs$lang$type = true;
session.client.subsession.Subsession.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"session.client.subsession/Subsession");
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$ = true;
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$insert_new_loop$arity$3 = (function (this$,session_view,event){
var this__32742 = this;
var event_target__32743 = event.target;
var event_model__32745 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__32743))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____32744 = cljs.core.vector_QMARK_.call(null,event_target__32743);
if(or__3824__auto____32744)
{return or__3824__auto____32744;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__32743);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__32743):((true)?cljs_jquery.core.jquery.call(null,event_target__32743):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var loop_model__32747 = (function (){var id__32746 = session.client.session.new_loop_id.call(null);
return (new session.client.loop.Loop(cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'input","\uFDD0'output"],{"\uFDD0'id":id__32746,"\uFDD0'input":cljs.core.atom.call(null,""),"\uFDD0'output":cljs.core.atom.call(null,null)})));
})();
var loop_view__32748 = session.client.mvc.render.call(null,loop_model__32747);
var session_model__32749 = this$;
if(cljs.core._EQ_.call(null,event_model__32745,"loop-creator"))
{cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__32749),(function (p1__32737_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([loop_model__32747], true),p1__32737_SHARP_));
}));
} else
{cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__32749),(function (p1__32738_SHARP_){
var vec__32750__32751 = cljs.core.split_with.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__32745);
}),p1__32738_SHARP_);
var left__32752 = cljs.core.nth.call(null,vec__32750__32751,0,null);
var right__32753 = cljs.core.nth.call(null,vec__32750__32751,1,null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,left__32752,cljs.core.PersistentVector.fromArray([event_model__32745,loop_model__32747], true),cljs.core.rest.call(null,right__32753)));
}));
}
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__32748))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____32754 = cljs.core.vector_QMARK_.call(null,loop_view__32748);
if(or__3824__auto____32754)
{return or__3824__auto____32754;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__32748);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__32748):((true)?cljs_jquery.core.jquery.call(null,loop_view__32748):null))),cljs.core.PersistentVector.fromArray(["insertAfter",event_target__32743], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__32748))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____32755 = cljs.core.vector_QMARK_.call(null,loop_view__32748);
if(or__3824__auto____32755)
{return or__3824__auto____32755;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__32748);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__32748):((true)?cljs_jquery.core.jquery.call(null,loop_view__32748):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$delete_loop$arity$3 = (function (this$,session_view,event){
var this__32756 = this;
var event_target__32757 = event.target;
var event_model__32759 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__32757))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____32758 = cljs.core.vector_QMARK_.call(null,event_target__32757);
if(or__3824__auto____32758)
{return or__3824__auto____32758;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__32757);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__32757):((true)?cljs_jquery.core.jquery.call(null,event_target__32757):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var session_model__32760 = this$;
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__32757))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____32761 = cljs.core.vector_QMARK_.call(null,event_target__32757);
if(or__3824__auto____32761)
{return or__3824__auto____32761;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__32757);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__32757):((true)?cljs_jquery.core.jquery.call(null,event_target__32757):null))),cljs.core.PersistentVector.fromArray(["remove"], true));
return cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__32760),(function (p1__32739_SHARP_){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__32759);
}),p1__32739_SHARP_));
}));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$evaluate_loop$arity$3 = (function (this$,session_view,event){
var this__32762 = this;
var event_target__32763 = event.target;
var event_model__32765 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__32763))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____32764 = cljs.core.vector_QMARK_.call(null,event_target__32763);
if(or__3824__auto____32764)
{return or__3824__auto____32764;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__32763);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__32763):((true)?cljs_jquery.core.jquery.call(null,event_target__32763):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
if(cljs.core._EQ_.call(null,"\uFDD0'cljs",(new cljs.core.Keyword("\uFDD0'type")).call(null,this$)))
{return session.client.subsession.evaluate_cljs.call(null,event_model__32765);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'clj",(new cljs.core.Keyword("\uFDD0'type")).call(null,this$)))
{return session.client.subsession.evaluate_clj.call(null,event_model__32765);
} else
{return null;
}
}
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$ = true;
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__32766 = this;
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__32766.model)))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____32767 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__32766.model)))], true));
if(or__3824__auto____32767)
{return or__3824__auto____32767;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__32766.model)))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__32766.model)))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__32766.model)))], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",this__32766.model], true));
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$control$arity$2 = (function (this$,session_view){
var this__32768 = this;
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____32769 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____32769)
{return or__3824__auto____32769;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","insert-new-loop",(function (p1__32734_SHARP_){
return session.client.subsession.insert_new_loop.call(null,this$,session_view,p1__32734_SHARP_);
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____32770 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____32770)
{return or__3824__auto____32770;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","delete-loop",(function (p1__32735_SHARP_){
return session.client.subsession.delete_loop.call(null,this$,session_view,p1__32735_SHARP_);
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____32771 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____32771)
{return or__3824__auto____32771;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-loop",(function (p1__32736_SHARP_){
return session.client.subsession.evaluate_loop.call(null,this$,session_view,p1__32736_SHARP_);
})], true));
});
session.client.subsession.Subsession.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__32772 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/subsession "], true),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,this__32772.model,"\uFDD0'loops",cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__32772.model))),opts),"");
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__32773 = this;
return this__32773.model.call(null,k);
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__32774 = this;
return this__32774.model.call(null,k,not_found);
});
session.client.subsession.Subsession;
cljs.reader.register_tag_parser_BANG_.call(null,"subsession",(function (x){
return (new session.client.subsession.Subsession(cljs.core.assoc.call(null,x,"\uFDD0'loops",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,x)))));
}));
