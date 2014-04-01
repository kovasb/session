// Compiled by ClojureScript 0.0-2197
goog.provide('session.session');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.core');
goog.require('session.datatypes');
goog.require('om.core');
goog.require('React');
goog.require('session.datatypes');
goog.require('goog.string.StringBuffer');
goog.require('session.loopcreator');
goog.require('om.dom');
goog.require('cljs.core.async');
session.session.new_id = (function new_id(){var f = (function f(){return cljs.core.rand_int.call(null,16).toString(16);
});
var g = (function g(){return (8 | (3 & cljs.core.rand_int.call(null,15))).toString(16);
});
return [cljs.core.str((new goog.string.StringBuffer()).append(f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),"-",f.call(null),f.call(null),f.call(null),f.call(null),"-4",f.call(null),f.call(null),f.call(null),"-",g.call(null),f.call(null),f.call(null),f.call(null),"-",f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null)))].join('');
});
session.session.insert_output = (function insert_output(loops,newout){var i = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__10017_SHARP_,p2__10016_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(newout),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p2__10016_SHARP_)))
{return p1__10017_SHARP_;
} else
{return null;
}
}),loops));return cljs.core.assoc_in.call(null,loops,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"out","out",1014014656)], null),new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(newout));
});
session.session.loop_insert = (function loop_insert(loops,id,newloop){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"session-top","session-top",990277904),id))
{return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [newloop], null),loops));
} else
{var l = cljs.core.PersistentVector.EMPTY;var r = loops;while(true){
var x = cljs.core.first.call(null,r);if(cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(x)))
{return cljs.core.vec.call(null,cljs.core.concat.call(null,l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,newloop], null),cljs.core.next.call(null,r)));
} else
{{
var G__10018 = cljs.core.conj.call(null,l,x);
var G__10019 = cljs.core.next.call(null,r);
l = G__10018;
r = G__10019;
continue;
}
}
break;
}
}
});
session.session.loop_delete = (function loop_delete(loops,id){return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__10020_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__10020_SHARP_),id);
}),loops));
});
session.session.handle_kernel_response = (function (){var method_table__4320__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4321__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4322__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4323__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4324__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-kernel-response",((function (method_table__4320__auto__,prefer_table__4321__auto__,method_cache__4322__auto__,cached_hierarchy__4323__auto__,hierarchy__4324__auto__){
return (function (response,cursor,owner,opts){return new cljs.core.Keyword(null,"op","op",1013907795).cljs$core$IFn$_invoke$arity$1(response);
});})(method_table__4320__auto__,prefer_table__4321__auto__,method_cache__4322__auto__,cached_hierarchy__4323__auto__,hierarchy__4324__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4324__auto__,method_table__4320__auto__,prefer_table__4321__auto__,method_cache__4322__auto__,cached_hierarchy__4323__auto__));
})();
cljs.core._add_method.call(null,session.session.handle_kernel_response,new cljs.core.Keyword(null,"eval-response","eval-response",1466223044),(function (response,cursor,owner,opts){return om.core.transact_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loops","loops",1117061569)], null),(function (p1__10021_SHARP_){return session.session.insert_output.call(null,p1__10021_SHARP_,response);
}));
}));
cljs.core._add_method.call(null,session.session.handle_kernel_response,new cljs.core.Keyword(null,"eval-error","eval-error",4109739273),(function (response,cursor,owner,opts){console.log("eval error:");
return console.log(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(response));
}));
cljs.core._add_method.call(null,session.session.handle_kernel_response,new cljs.core.Keyword(null,"default","default",2558708147),(function (response,cursor,owner,opts){return null;
}));
session.session.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
session.session.end_edit = (function end_edit(text,owner,cb){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",3420907786),false);
return cb.call(null,text);
});
session.session.on_edit = (function on_edit(title,id,send){return cljs.core.async.put_BANG_.call(null,send,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"update-name","update-name",4689063041),new cljs.core.Keyword(null,"name","name",1017277949),title,new cljs.core.Keyword(null,"id","id",1013907597),id], null));
});
session.session.session_top = (function session_top(cursor,owner,p__10023){var map__10030 = p__10023;var map__10030__$1 = ((cljs.core.seq_QMARK_.call(null,map__10030))?cljs.core.apply.call(null,cljs.core.hash_map,map__10030):map__10030);var opts = map__10030__$1;var on_edit = cljs.core.get.call(null,map__10030__$1,new cljs.core.Keyword(null,"on-edit","on-edit",3936438442));if(typeof session.session.t10031 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10031 = (function (on_edit,opts,map__10030,p__10023,owner,cursor,session_top,meta10032){
this.on_edit = on_edit;
this.opts = opts;
this.map__10030 = map__10030;
this.p__10023 = p__10023;
this.owner = owner;
this.cursor = cursor;
this.session_top = session_top;
this.meta10032 = meta10032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10031.cljs$lang$type = true;
session.session.t10031.cljs$lang$ctorStr = "session.session/t10031";
session.session.t10031.cljs$lang$ctorPrWriter = ((function (map__10030,map__10030__$1,opts,on_edit){
return (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"session.session/t10031");
});})(map__10030,map__10030__$1,opts,on_edit))
;
session.session.t10031.prototype.om$core$IRenderState$ = true;
session.session.t10031.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10030,map__10030__$1,opts,on_edit){
return (function (_,p__10034){var self__ = this;
var map__10035 = p__10034;var map__10035__$1 = ((cljs.core.seq_QMARK_.call(null,map__10035))?cljs.core.apply.call(null,cljs.core.hash_map,map__10035):map__10035);var editing = cljs.core.get.call(null,map__10035__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var edit_text = cljs.core.get.call(null,map__10035__$1,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));var ___$1 = this;var name = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"name","name",1017277949)], null));var id = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)], null)).uuid;return om.dom.input.call(null,{"onBlur": ((function (name,id,___$1,map__10035,map__10035__$1,editing,edit_text,map__10030,map__10030__$1,opts,on_edit){
return (function (e){return session.session.end_edit.call(null,name,self__.owner,self__.on_edit);
});})(name,id,___$1,map__10035,map__10035__$1,editing,edit_text,map__10030,map__10030__$1,opts,on_edit))
, "onKeyPress": ((function (name,id,___$1,map__10035,map__10035__$1,editing,edit_text,map__10030,map__10030__$1,opts,on_edit){
return (function (p1__10022_SHARP_){if((p1__10022_SHARP_.keyCode === 13))
{om.core.get_node.call(null,self__.owner,"theInput").blur();
return session.session.end_edit.call(null,name,self__.owner,self__.on_edit);
} else
{return null;
}
});})(name,id,___$1,map__10035,map__10035__$1,editing,edit_text,map__10030,map__10030__$1,opts,on_edit))
, "onChange": ((function (name,id,___$1,map__10035,map__10035__$1,editing,edit_text,map__10030,map__10030__$1,opts,on_edit){
return (function (e){return om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"name","name",1017277949)], null),((function (name,id,___$1,map__10035,map__10035__$1,editing,edit_text,map__10030,map__10030__$1,opts,on_edit){
return (function (___$2){return e.target.value;
});})(name,id,___$1,map__10035,map__10035__$1,editing,edit_text,map__10030,map__10030__$1,opts,on_edit))
);
});})(name,id,___$1,map__10035,map__10035__$1,editing,edit_text,map__10030,map__10030__$1,opts,on_edit))
, "value": (cljs.core.truth_(name)?name:id), "style": {"margin-left": "-1px", "padding": "inherit", "fontFamily": "Georgia", "fontSize": "18px", "border": "none", "width": "90%", "outline": "none"}, "ref": "theInput"});
});})(map__10030,map__10030__$1,opts,on_edit))
;
session.session.t10031.prototype.om$core$IInitState$ = true;
session.session.t10031.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10030,map__10030__$1,opts,on_edit){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});})(map__10030,map__10030__$1,opts,on_edit))
;
session.session.t10031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10030,map__10030__$1,opts,on_edit){
return (function (_10033){var self__ = this;
var _10033__$1 = this;return self__.meta10032;
});})(map__10030,map__10030__$1,opts,on_edit))
;
session.session.t10031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10030,map__10030__$1,opts,on_edit){
return (function (_10033,meta10032__$1){var self__ = this;
var _10033__$1 = this;return (new session.session.t10031(self__.on_edit,self__.opts,self__.map__10030,self__.p__10023,self__.owner,self__.cursor,self__.session_top,meta10032__$1));
});})(map__10030,map__10030__$1,opts,on_edit))
;
session.session.__GT_t10031 = ((function (map__10030,map__10030__$1,opts,on_edit){
return (function __GT_t10031(on_edit__$1,opts__$1,map__10030__$2,p__10023__$1,owner__$1,cursor__$1,session_top__$1,meta10032){return (new session.session.t10031(on_edit__$1,opts__$1,map__10030__$2,p__10023__$1,owner__$1,cursor__$1,session_top__$1,meta10032));
});})(map__10030,map__10030__$1,opts,on_edit))
;
}
return (new session.session.t10031(on_edit,opts,map__10030__$1,p__10023,owner,cursor,session_top,null));
});
session.session.session_renderers = new cljs.core.PersistentArrayMap.fromArray([session.datatypes.SessionObject,(function (cursor,owner,opts){if(typeof session.session.t10041 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10041 = (function (opts,owner,cursor,meta10042){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta10042 = meta10042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10041.cljs$lang$type = true;
session.session.t10041.cljs$lang$ctorStr = "session.session/t10041";
session.session.t10041.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"session.session/t10041");
});
session.session.t10041.prototype.om$core$IRender$ = true;
session.session.t10041.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span(null,"#session/Object ",om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder-raw","builder-raw",3779185256)).call(null,cljs.core.type.call(null,cljs.core.PersistentArrayMap.EMPTY),self__.cursor));
});
session.session.t10041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10043){var self__ = this;
var _10043__$1 = this;return self__.meta10042;
});
session.session.t10041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10043,meta10042__$1){var self__ = this;
var _10043__$1 = this;return (new session.session.t10041(self__.opts,self__.owner,self__.cursor,meta10042__$1));
});
session.session.__GT_t10041 = (function __GT_t10041(opts__$1,owner__$1,cursor__$1,meta10042){return (new session.session.t10041(opts__$1,owner__$1,cursor__$1,meta10042));
});
}
return (new session.session.t10041(opts,owner,cursor,null));
}),session.datatypes.Session,(function (cursor,owner,opts){if(typeof session.session.t10044 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10044 = (function (opts,owner,cursor,meta10045){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta10045 = meta10045;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10044.cljs$lang$type = true;
session.session.t10044.cljs$lang$ctorStr = "session.session/t10044";
session.session.t10044.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"session.session/t10044");
});
session.session.t10044.prototype.om$core$IRender$ = true;
session.session.t10044.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,(function (){var id = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)], null));var p = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);return om.core.build.call(null,session.session.session_top,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",3936438442),((function (id,p,___$1){
return (function (p1__10038_SHARP_){return session.session.on_edit.call(null,p1__10038_SHARP_,id,p);
});})(id,p,___$1))
], null)], null));
})(),om.core.build.call(null,session.loopcreator.new_loop_creator,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"session-top","session-top",990277904),new cljs.core.Keyword(null,"chan","chan",1016956612),new cljs.core.Keyword(null,"loop-create","loop-create",2966435767).cljs$core$IFn$_invoke$arity$1(self__.opts)], null),self__.cursor)),cljs.core.map.call(null,((function (___$1){
return (function (p1__10039_SHARP_,p2__10040_SHARP_){return om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder","builder",1244848909)).call(null,p1__10039_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword("om.core","index","om.core/index",3166146514),p2__10040_SHARP_,new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));
});})(___$1))
,new cljs.core.Keyword(null,"loops","loops",1117061569).cljs$core$IFn$_invoke$arity$1(self__.cursor),cljs.core.range.call(null)));
});
session.session.t10044.prototype.om$core$IWillMount$ = true;
session.session.t10044.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6232__auto___10157 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___10157,___$1){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___10157,___$1){
return (function (state_10060){var state_val_10061 = (state_10060[1]);if((state_val_10061 === 7))
{var inst_10051 = (state_10060[2]);var inst_10052 = session.session.handle_kernel_response.call(null,inst_10051,self__.cursor,self__.owner,self__.opts);var state_10060__$1 = (function (){var statearr_10062 = state_10060;(statearr_10062[7] = inst_10052);
return statearr_10062;
})();var statearr_10063_10158 = state_10060__$1;(statearr_10063_10158[2] = null);
(statearr_10063_10158[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 6))
{var inst_10056 = (state_10060[2]);var state_10060__$1 = state_10060;var statearr_10064_10159 = state_10060__$1;(statearr_10064_10159[2] = inst_10056);
(statearr_10064_10159[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 5))
{var state_10060__$1 = state_10060;var statearr_10065_10160 = state_10060__$1;(statearr_10065_10160[2] = null);
(statearr_10065_10160[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 4))
{var inst_10049 = new cljs.core.Keyword(null,"kernel-receive","kernel-receive",2518943941).cljs$core$IFn$_invoke$arity$1(self__.opts);var state_10060__$1 = state_10060;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10060__$1,7,inst_10049);
} else
{if((state_val_10061 === 3))
{var inst_10058 = (state_10060[2]);var state_10060__$1 = state_10060;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10060__$1,inst_10058);
} else
{if((state_val_10061 === 2))
{var state_10060__$1 = state_10060;if(true)
{var statearr_10066_10161 = state_10060__$1;(statearr_10066_10161[1] = 4);
} else
{var statearr_10067_10162 = state_10060__$1;(statearr_10067_10162[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10061 === 1))
{var state_10060__$1 = state_10060;var statearr_10068_10163 = state_10060__$1;(statearr_10068_10163[2] = null);
(statearr_10068_10163[1] = 2);
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
});})(c__6232__auto___10157,___$1))
;return ((function (switch__6217__auto__,c__6232__auto___10157,___$1){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_10072 = [null,null,null,null,null,null,null,null];(statearr_10072[0] = state_machine__6218__auto__);
(statearr_10072[1] = 1);
return statearr_10072;
});
var state_machine__6218__auto____1 = (function (state_10060){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_10060);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e10073){if((e10073 instanceof Object))
{var ex__6221__auto__ = e10073;var statearr_10074_10164 = state_10060;(statearr_10074_10164[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10060);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10165 = state_10060;
state_10060 = G__10165;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_10060){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_10060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___10157,___$1))
})();var state__6234__auto__ = (function (){var statearr_10075 = f__6233__auto__.call(null);(statearr_10075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___10157);
return statearr_10075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___10157,___$1))
);
var c_10166 = new cljs.core.Keyword(null,"loop-create","loop-create",2966435767).cljs$core$IFn$_invoke$arity$1(self__.opts);var c__6232__auto___10167 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___10167,c_10166,___$1){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___10167,c_10166,___$1){
return (function (state_10101){var state_val_10102 = (state_10101[1]);if((state_val_10102 === 8))
{var inst_10081 = (state_10101[7]);var inst_10079 = (state_10101[8]);var inst_10088 = (state_10101[2]);var inst_10089 = om.core.get_props.call(null,self__.owner);var inst_10090 = [new cljs.core.Keyword(null,"loops","loops",1117061569)];var inst_10091 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10090,null));var inst_10092 = (function (){var new_loop = inst_10081;var insertion_id = inst_10079;return ((function (new_loop,insertion_id,inst_10081,inst_10079,inst_10088,inst_10089,inst_10090,inst_10091,state_val_10102,c__6232__auto___10167,c_10166,___$1){
return (function (p1__10036_SHARP_){return session.session.loop_insert.call(null,p1__10036_SHARP_,insertion_id,new_loop);
});
;})(new_loop,insertion_id,inst_10081,inst_10079,inst_10088,inst_10089,inst_10090,inst_10091,state_val_10102,c__6232__auto___10167,c_10166,___$1))
})();var inst_10093 = om.core.transact_BANG_.call(null,inst_10089,inst_10091,inst_10092);var state_10101__$1 = (function (){var statearr_10103 = state_10101;(statearr_10103[9] = inst_10093);
(statearr_10103[10] = inst_10088);
return statearr_10103;
})();var statearr_10104_10168 = state_10101__$1;(statearr_10104_10168[2] = null);
(statearr_10104_10168[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10102 === 7))
{var inst_10081 = (state_10101[7]);var inst_10079 = (state_10101[8]);var inst_10079__$1 = (state_10101[2]);var inst_10080 = session.session.new_id.call(null);var inst_10081__$1 = (new session.datatypes.Loop(inst_10080,"",new cljs.core.Keyword(null,"default","default",2558708147)));var inst_10082 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_10083 = [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"new-id","new-id",4259978202)];var inst_10084 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_10081__$1);var inst_10085 = [new cljs.core.Keyword(null,"insert-loop","insert-loop",864347306),inst_10079__$1,inst_10084];var inst_10086 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10083,inst_10085);var state_10101__$1 = (function (){var statearr_10105 = state_10101;(statearr_10105[7] = inst_10081__$1);
(statearr_10105[8] = inst_10079__$1);
return statearr_10105;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10101__$1,8,inst_10082,inst_10086);
} else
{if((state_val_10102 === 6))
{var inst_10097 = (state_10101[2]);var state_10101__$1 = state_10101;var statearr_10106_10169 = state_10101__$1;(statearr_10106_10169[2] = inst_10097);
(statearr_10106_10169[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10102 === 5))
{var state_10101__$1 = state_10101;var statearr_10107_10170 = state_10101__$1;(statearr_10107_10170[2] = null);
(statearr_10107_10170[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10102 === 4))
{var state_10101__$1 = state_10101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10101__$1,7,c_10166);
} else
{if((state_val_10102 === 3))
{var inst_10099 = (state_10101[2]);var state_10101__$1 = state_10101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10101__$1,inst_10099);
} else
{if((state_val_10102 === 2))
{var state_10101__$1 = state_10101;if(true)
{var statearr_10108_10171 = state_10101__$1;(statearr_10108_10171[1] = 4);
} else
{var statearr_10109_10172 = state_10101__$1;(statearr_10109_10172[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10102 === 1))
{var state_10101__$1 = state_10101;var statearr_10110_10173 = state_10101__$1;(statearr_10110_10173[2] = null);
(statearr_10110_10173[1] = 2);
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
});})(c__6232__auto___10167,c_10166,___$1))
;return ((function (switch__6217__auto__,c__6232__auto___10167,c_10166,___$1){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_10114 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10114[0] = state_machine__6218__auto__);
(statearr_10114[1] = 1);
return statearr_10114;
});
var state_machine__6218__auto____1 = (function (state_10101){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_10101);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e10115){if((e10115 instanceof Object))
{var ex__6221__auto__ = e10115;var statearr_10116_10174 = state_10101;(statearr_10116_10174[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10101);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10115;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10175 = state_10101;
state_10101 = G__10175;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_10101){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_10101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___10167,c_10166,___$1))
})();var state__6234__auto__ = (function (){var statearr_10117 = f__6233__auto__.call(null);(statearr_10117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___10167);
return statearr_10117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___10167,c_10166,___$1))
);
var c = new cljs.core.Keyword(null,"loop-delete","loop-delete",2983271526).cljs$core$IFn$_invoke$arity$1(self__.opts);var c__6232__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto__,c,___$1){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto__,c,___$1){
return (function (state_10140){var state_val_10141 = (state_10140[1]);if((state_val_10141 === 8))
{var inst_10121 = (state_10140[7]);var inst_10127 = (state_10140[2]);var inst_10128 = om.core.get_props.call(null,self__.owner);var inst_10129 = [new cljs.core.Keyword(null,"loops","loops",1117061569)];var inst_10130 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10129,null));var inst_10131 = (function (){var deletion_id = inst_10121;return ((function (deletion_id,inst_10121,inst_10127,inst_10128,inst_10129,inst_10130,state_val_10141,c__6232__auto__,c,___$1){
return (function (p1__10037_SHARP_){return session.session.loop_delete.call(null,p1__10037_SHARP_,deletion_id);
});
;})(deletion_id,inst_10121,inst_10127,inst_10128,inst_10129,inst_10130,state_val_10141,c__6232__auto__,c,___$1))
})();var inst_10132 = om.core.transact_BANG_.call(null,inst_10128,inst_10130,inst_10131);var state_10140__$1 = (function (){var statearr_10142 = state_10140;(statearr_10142[8] = inst_10127);
(statearr_10142[9] = inst_10132);
return statearr_10142;
})();var statearr_10143_10176 = state_10140__$1;(statearr_10143_10176[2] = null);
(statearr_10143_10176[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10141 === 7))
{var inst_10121 = (state_10140[7]);var inst_10121__$1 = (state_10140[2]);var inst_10122 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_10123 = [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_10124 = [new cljs.core.Keyword(null,"delete-loop","delete-loop",4140640504),inst_10121__$1];var inst_10125 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10123,inst_10124);var state_10140__$1 = (function (){var statearr_10144 = state_10140;(statearr_10144[7] = inst_10121__$1);
return statearr_10144;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10140__$1,8,inst_10122,inst_10125);
} else
{if((state_val_10141 === 6))
{var inst_10136 = (state_10140[2]);var state_10140__$1 = state_10140;var statearr_10145_10177 = state_10140__$1;(statearr_10145_10177[2] = inst_10136);
(statearr_10145_10177[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10141 === 5))
{var state_10140__$1 = state_10140;var statearr_10146_10178 = state_10140__$1;(statearr_10146_10178[2] = null);
(statearr_10146_10178[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10141 === 4))
{var state_10140__$1 = state_10140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10140__$1,7,c);
} else
{if((state_val_10141 === 3))
{var inst_10138 = (state_10140[2]);var state_10140__$1 = state_10140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10140__$1,inst_10138);
} else
{if((state_val_10141 === 2))
{var state_10140__$1 = state_10140;if(true)
{var statearr_10147_10179 = state_10140__$1;(statearr_10147_10179[1] = 4);
} else
{var statearr_10148_10180 = state_10140__$1;(statearr_10148_10180[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10141 === 1))
{var state_10140__$1 = state_10140;var statearr_10149_10181 = state_10140__$1;(statearr_10149_10181[2] = null);
(statearr_10149_10181[1] = 2);
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
});})(c__6232__auto__,c,___$1))
;return ((function (switch__6217__auto__,c__6232__auto__,c,___$1){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_10153 = [null,null,null,null,null,null,null,null,null,null];(statearr_10153[0] = state_machine__6218__auto__);
(statearr_10153[1] = 1);
return statearr_10153;
});
var state_machine__6218__auto____1 = (function (state_10140){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_10140);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e10154){if((e10154 instanceof Object))
{var ex__6221__auto__ = e10154;var statearr_10155_10182 = state_10140;(statearr_10155_10182[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10140);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10183 = state_10140;
state_10140 = G__10183;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_10140){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_10140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto__,c,___$1))
})();var state__6234__auto__ = (function (){var statearr_10156 = f__6233__auto__.call(null);(statearr_10156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto__);
return statearr_10156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto__,c,___$1))
);
return c__6232__auto__;
});
session.session.t10044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10046){var self__ = this;
var _10046__$1 = this;return self__.meta10045;
});
session.session.t10044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10046,meta10045__$1){var self__ = this;
var _10046__$1 = this;return (new session.session.t10044(self__.opts,self__.owner,self__.cursor,meta10045__$1));
});
session.session.__GT_t10044 = (function __GT_t10044(opts__$1,owner__$1,cursor__$1,meta10045){return (new session.session.t10044(opts__$1,owner__$1,cursor__$1,meta10045));
});
}
return (new session.session.t10044(opts,owner,cursor,null));
})], true, false);

//# sourceMappingURL=session.js.map