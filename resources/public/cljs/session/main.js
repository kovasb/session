// Compiled by ClojureScript 0.0-2197
goog.provide('session.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('session.boot');
goog.require('goog.History');
goog.require('session.keymap');
goog.require('session.loop');
goog.require('session.io');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('yantra.graphics');
goog.require('om.core');
goog.require('React');
goog.require('subpar.core');
goog.require('goog.net.WebSocket');
goog.require('yantra.edn');
goog.require('session.session');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('yantra.plot');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('yantra.dom');
goog.require('yantra.layout');
goog.require('session.keymap');
goog.require('goog.events');
goog.require('yantra.controls');
goog.require('secretary.core');
cljs.core.enable_console_print_BANG_.call(null);
session.main.new_id = (function new_id(){var f = (function f(){return cljs.core.rand_int.call(null,16).toString(16);
});
var g = (function g(){return (8 | (3 & cljs.core.rand_int.call(null,15))).toString(16);
});
return [cljs.core.str((new goog.string.StringBuffer()).append(f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),"-",f.call(null),f.call(null),f.call(null),f.call(null),"-4",f.call(null),f.call(null),f.call(null),"-",g.call(null),f.call(null),f.call(null),f.call(null),"-",f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null)))].join('');
});
session.main.system = (function system(){return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434),new cljs.core.Keyword(null,"history","history",1940838406),new cljs.core.Keyword(null,"host","host",1017112858),new cljs.core.Keyword(null,"loop-create","loop-create",2966435767),new cljs.core.Keyword(null,"eval-receive","eval-receive",2260311588),new cljs.core.Keyword(null,"app-state","app-state",1424976215),new cljs.core.Keyword(null,"kernel-receive","kernel-receive",2518943941),new cljs.core.Keyword(null,"loop-delete","loop-delete",2983271526),new cljs.core.Keyword(null,"eval-send","eval-send",1668363659),new cljs.core.Keyword(null,"socket","socket",4411822821)],[cljs.core.async.chan.call(null),(new goog.History()),(window["location"]["host"]),cljs.core.async.chan.call(null),cljs.core.async.chan.call(null),cljs.core.atom.call(null,cljs.core.assoc.call(null,(new session.datatypes.Boot()),new cljs.core.Keyword(null,"new-session","new-session",1013080795),(function (){var uuid = session.main.new_id.call(null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),uuid,new cljs.core.Keyword(null,"name","name",1017277949),uuid], null);
})())),cljs.core.async.chan.call(null),cljs.core.async.chan.call(null),cljs.core.async.chan.call(null),(new goog.net.WebSocket())]);
});
session.main.all_renderers = cljs.core.merge.call(null,yantra.edn.edn_renderers,yantra.graphics.graphics_renderers,yantra.layout.layout_renderers,yantra.controls.control_renderers,yantra.plot.plot_renderers,yantra.dom.dom_renderers,session.session.session_renderers,session.loop.loop_renderers,session.boot.boot_renderers);
session.main.builder = (function builder(x,y){return om.core.build.call(null,session.main.all_renderers.call(null,cljs.core.type.call(null,om.core.value.call(null,x))),x,y);
});
session.main.builder_raw = (function builder_raw(t,x,y){return om.core.build.call(null,session.main.all_renderers.call(null,t),x,y);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),"#");
var action__9588__auto___9911 = (function (params__9589__auto__){if(cljs.core.map_QMARK_.call(null,params__9589__auto__))
{var map__9909 = params__9589__auto__;var map__9909__$1 = ((cljs.core.seq_QMARK_.call(null,map__9909))?cljs.core.apply.call(null,cljs.core.hash_map,map__9909):map__9909);return null;
} else
{if(cljs.core.vector_QMARK_.call(null,params__9589__auto__))
{var vec__9910 = params__9589__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9588__auto___9911);
/**
* @param {...*} var_args
*/
session.main.home_path = ((function (action__9588__auto___9911){
return (function() { 
var home_path__delegate = function (args__9587__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__9587__auto__);
};
var home_path = function (var_args){
var args__9587__auto__ = null;if (arguments.length > 0) {
  args__9587__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return home_path__delegate.call(this,args__9587__auto__);};
home_path.cljs$lang$maxFixedArity = 0;
home_path.cljs$lang$applyTo = (function (arglist__9912){
var args__9587__auto__ = cljs.core.seq(arglist__9912);
return home_path__delegate(args__9587__auto__);
});
home_path.cljs$core$IFn$_invoke$arity$variadic = home_path__delegate;
return home_path;
})()
;})(action__9588__auto___9911))
;
session.main.start_BANG_ = (function start_BANG_(system){goog.events.listen(new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(system),goog.history.EventType.NAVIGATE,(function (p1__9913_SHARP_){return secretary.core.dispatch_BANG_.call(null,p1__9913_SHARP_.token);
}));
var G__9957_10000 = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(system);G__9957_10000.setEnabled(true);
(CodeMirror.keyMap["subpar"] = session.keymap.subpar_keymap);
cljs.core.enable_console_print_BANG_.call(null);
new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(system).addEventListener(goog.net.WebSocket.EventType.MESSAGE,(function (e){var msg = session.io.read_edn.call(null,e.message);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"display-session","display-session",2856161277),new cljs.core.Keyword(null,"op","op",1013907795).cljs$core$IFn$_invoke$arity$1(msg)))
{console.log("displaying a session");
var G__9958_10001 = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(system);G__9958_10001.setEnabled(false);
new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(system).setToken([cljs.core.str("/sessions/"),cljs.core.str(cljs.core.get_in.call(null,msg,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",2998892040),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)], null)).uuid)].join(''));
} else
{}
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"kernel-receive","kernel-receive",2518943941).cljs$core$IFn$_invoke$arity$1(system),msg);
}));
var socket_opened_10002 = cljs.core.async.chan.call(null);new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(system).addEventListener(goog.net.WebSocket.EventType.OPENED,((function (socket_opened_10002){
return (function (e){return cljs.core.async.put_BANG_.call(null,socket_opened_10002,true);
});})(socket_opened_10002))
);
new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(system).open([cljs.core.str("ws://"),cljs.core.str(new cljs.core.Keyword(null,"host","host",1017112858).cljs$core$IFn$_invoke$arity$1(system)),cljs.core.str("/")].join(''));
var c__6232__auto___10003 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___10003,socket_opened_10002){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___10003,socket_opened_10002){
return (function (state_9980){var state_val_9981 = (state_9980[1]);if((state_val_9981 === 8))
{var inst_9965 = (state_9980[2]);var inst_9966 = cljs.core.pr_str.call(null,inst_9965);var inst_9967 = console.log(inst_9966);var inst_9968 = (new Date());var inst_9969 = session.main.t1 = inst_9968;var inst_9970 = new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(system);var inst_9971 = session.io.write_edn.call(null,inst_9965);var inst_9972 = inst_9970.send(inst_9971);var state_9980__$1 = (function (){var statearr_9982 = state_9980;(statearr_9982[7] = inst_9969);
(statearr_9982[8] = inst_9972);
(statearr_9982[9] = inst_9967);
return statearr_9982;
})();var statearr_9983_10004 = state_9980__$1;(statearr_9983_10004[2] = null);
(statearr_9983_10004[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9981 === 7))
{var inst_9976 = (state_9980[2]);var state_9980__$1 = state_9980;var statearr_9984_10005 = state_9980__$1;(statearr_9984_10005[2] = inst_9976);
(statearr_9984_10005[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9981 === 6))
{var state_9980__$1 = state_9980;var statearr_9985_10006 = state_9980__$1;(statearr_9985_10006[2] = null);
(statearr_9985_10006[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9981 === 5))
{var inst_9963 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(system);var state_9980__$1 = state_9980;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9980__$1,8,inst_9963);
} else
{if((state_val_9981 === 4))
{var inst_9978 = (state_9980[2]);var state_9980__$1 = state_9980;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9980__$1,inst_9978);
} else
{if((state_val_9981 === 3))
{var state_9980__$1 = state_9980;if(true)
{var statearr_9986_10007 = state_9980__$1;(statearr_9986_10007[1] = 5);
} else
{var statearr_9987_10008 = state_9980__$1;(statearr_9987_10008[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9981 === 2))
{var inst_9960 = (state_9980[2]);var state_9980__$1 = (function (){var statearr_9988 = state_9980;(statearr_9988[10] = inst_9960);
return statearr_9988;
})();var statearr_9989_10009 = state_9980__$1;(statearr_9989_10009[2] = null);
(statearr_9989_10009[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9981 === 1))
{var state_9980__$1 = state_9980;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9980__$1,2,socket_opened_10002);
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
});})(c__6232__auto___10003,socket_opened_10002))
;return ((function (switch__6217__auto__,c__6232__auto___10003,socket_opened_10002){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_9993 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9993[0] = state_machine__6218__auto__);
(statearr_9993[1] = 1);
return statearr_9993;
});
var state_machine__6218__auto____1 = (function (state_9980){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_9980);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e9994){if((e9994 instanceof Object))
{var ex__6221__auto__ = e9994;var statearr_9995_10010 = state_9980;(statearr_9995_10010[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9980);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9994;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10011 = state_9980;
state_9980 = G__10011;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_9980){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_9980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___10003,socket_opened_10002))
})();var state__6234__auto__ = (function (){var statearr_9996 = f__6233__auto__.call(null);(statearr_9996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___10003);
return statearr_9996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___10003,socket_opened_10002))
);
return om.core.root.call(null,(function (data,owner){if(typeof session.main.t9997 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.main.t9997 = (function (owner,data,system,start_BANG_,meta9998){
this.owner = owner;
this.data = data;
this.system = system;
this.start_BANG_ = start_BANG_;
this.meta9998 = meta9998;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.main.t9997.cljs$lang$type = true;
session.main.t9997.cljs$lang$ctorStr = "session.main/t9997";
session.main.t9997.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"session.main/t9997");
});
session.main.t9997.prototype.om$core$IRender$ = true;
session.main.t9997.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return session.main.builder.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),cljs.core.dissoc.call(null,self__.system,new cljs.core.Keyword(null,"app-state","app-state",1424976215))], null));
});
session.main.t9997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9999){var self__ = this;
var _9999__$1 = this;return self__.meta9998;
});
session.main.t9997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9999,meta9998__$1){var self__ = this;
var _9999__$1 = this;return (new session.main.t9997(self__.owner,self__.data,self__.system,self__.start_BANG_,meta9998__$1));
});
session.main.__GT_t9997 = (function __GT_t9997(owner__$1,data__$1,system__$1,start_BANG___$1,meta9998){return (new session.main.t9997(owner__$1,data__$1,system__$1,start_BANG___$1,meta9998));
});
}
return (new session.main.t9997(owner,data,system,start_BANG_,null));
}),new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(system),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"builder","builder",1244848909),session.main.builder,new cljs.core.Keyword(null,"builder-raw","builder-raw",3779185256),session.main.builder_raw], null),new cljs.core.Keyword(null,"target","target",4427965699),document.body], null));
});
goog.exportSymbol('session.main.start_BANG_', session.main.start_BANG_);
session.main.the_system = session.main.system.call(null);
var action__9588__auto___10014 = (function (params__9589__auto__){if(cljs.core.map_QMARK_.call(null,params__9589__auto__))
{var map__10012 = params__9589__auto__;var map__10012__$1 = ((cljs.core.seq_QMARK_.call(null,map__10012))?cljs.core.apply.call(null,cljs.core.hash_map,map__10012):map__10012);var uuid = cljs.core.get.call(null,map__10012__$1,new cljs.core.Keyword(null,"uuid","uuid",1017505581));console.log("load session from url");
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(session.main.the_system),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"connect-session","connect-session",3567142949),new cljs.core.Keyword("index","id","index/id",3115525907),uuid], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9589__auto__))
{var vec__10013 = params__9589__auto__;var uuid = cljs.core.nth.call(null,vec__10013,0,null);console.log("load session from url");
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(session.main.the_system),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"connect-session","connect-session",3567142949),new cljs.core.Keyword("index","id","index/id",3115525907),uuid], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/sessions/:uuid",action__9588__auto___10014);
/**
* @param {...*} var_args
*/
session.main.sessions_path = ((function (action__9588__auto___10014){
return (function() { 
var sessions_path__delegate = function (args__9587__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/sessions/:uuid",args__9587__auto__);
};
var sessions_path = function (var_args){
var args__9587__auto__ = null;if (arguments.length > 0) {
  args__9587__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sessions_path__delegate.call(this,args__9587__auto__);};
sessions_path.cljs$lang$maxFixedArity = 0;
sessions_path.cljs$lang$applyTo = (function (arglist__10015){
var args__9587__auto__ = cljs.core.seq(arglist__10015);
return sessions_path__delegate(args__9587__auto__);
});
sessions_path.cljs$core$IFn$_invoke$arity$variadic = sessions_path__delegate;
return sessions_path;
})()
;})(action__9588__auto___10014))
;
session.main.start_BANG_.call(null,session.main.the_system);

//# sourceMappingURL=main.js.map