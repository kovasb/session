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
session.session.insert_output = (function insert_output(loops,newout){var i = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__10248_SHARP_,p2__10247_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(newout),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p2__10247_SHARP_)))
{return p1__10248_SHARP_;
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
var G__10249 = cljs.core.conj.call(null,l,x);
var G__10250 = cljs.core.next.call(null,r);
l = G__10249;
r = G__10250;
continue;
}
}
break;
}
}
});
session.session.loop_delete = (function loop_delete(loops,id){return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__10251_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__10251_SHARP_),id);
}),loops));
});
session.session.handle_kernel_response = (function (){var method_table__4336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4338__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4340__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-kernel-response",((function (method_table__4336__auto__,prefer_table__4337__auto__,method_cache__4338__auto__,cached_hierarchy__4339__auto__,hierarchy__4340__auto__){
return (function (response,cursor,owner,opts){return new cljs.core.Keyword(null,"op","op",1013907795).cljs$core$IFn$_invoke$arity$1(response);
});})(method_table__4336__auto__,prefer_table__4337__auto__,method_cache__4338__auto__,cached_hierarchy__4339__auto__,hierarchy__4340__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4340__auto__,method_table__4336__auto__,prefer_table__4337__auto__,method_cache__4338__auto__,cached_hierarchy__4339__auto__));
})();
cljs.core._add_method.call(null,session.session.handle_kernel_response,new cljs.core.Keyword(null,"eval-response","eval-response",1466223044),(function (response,cursor,owner,opts){return om.core.transact_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loops","loops",1117061569)], null),(function (p1__10252_SHARP_){return session.session.insert_output.call(null,p1__10252_SHARP_,response);
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
session.session.session_top = (function session_top(cursor,owner,p__10254){var map__10261 = p__10254;var map__10261__$1 = ((cljs.core.seq_QMARK_.call(null,map__10261))?cljs.core.apply.call(null,cljs.core.hash_map,map__10261):map__10261);var opts = map__10261__$1;var on_edit = cljs.core.get.call(null,map__10261__$1,new cljs.core.Keyword(null,"on-edit","on-edit",3936438442));if(typeof session.session.t10262 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10262 = (function (on_edit,opts,map__10261,p__10254,owner,cursor,session_top,meta10263){
this.on_edit = on_edit;
this.opts = opts;
this.map__10261 = map__10261;
this.p__10254 = p__10254;
this.owner = owner;
this.cursor = cursor;
this.session_top = session_top;
this.meta10263 = meta10263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10262.cljs$lang$type = true;
session.session.t10262.cljs$lang$ctorStr = "session.session/t10262";
session.session.t10262.cljs$lang$ctorPrWriter = ((function (map__10261,map__10261__$1,opts,on_edit){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.session/t10262");
});})(map__10261,map__10261__$1,opts,on_edit))
;
session.session.t10262.prototype.om$core$IRenderState$ = true;
session.session.t10262.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10261,map__10261__$1,opts,on_edit){
return (function (_,p__10265){var self__ = this;
var map__10266 = p__10265;var map__10266__$1 = ((cljs.core.seq_QMARK_.call(null,map__10266))?cljs.core.apply.call(null,cljs.core.hash_map,map__10266):map__10266);var editing = cljs.core.get.call(null,map__10266__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var edit_text = cljs.core.get.call(null,map__10266__$1,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));var ___$1 = this;var name = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"name","name",1017277949)], null));var id = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)], null)).uuid;return om.dom.input.call(null,{"onBlur": ((function (name,id,___$1,map__10266,map__10266__$1,editing,edit_text,map__10261,map__10261__$1,opts,on_edit){
return (function (e){return session.session.end_edit.call(null,name,self__.owner,self__.on_edit);
});})(name,id,___$1,map__10266,map__10266__$1,editing,edit_text,map__10261,map__10261__$1,opts,on_edit))
, "onKeyPress": ((function (name,id,___$1,map__10266,map__10266__$1,editing,edit_text,map__10261,map__10261__$1,opts,on_edit){
return (function (p1__10253_SHARP_){if((p1__10253_SHARP_.keyCode === 13))
{om.core.get_node.call(null,self__.owner,"theInput").blur();
return session.session.end_edit.call(null,name,self__.owner,self__.on_edit);
} else
{return null;
}
});})(name,id,___$1,map__10266,map__10266__$1,editing,edit_text,map__10261,map__10261__$1,opts,on_edit))
, "onChange": ((function (name,id,___$1,map__10266,map__10266__$1,editing,edit_text,map__10261,map__10261__$1,opts,on_edit){
return (function (e){return om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"name","name",1017277949)], null),((function (name,id,___$1,map__10266,map__10266__$1,editing,edit_text,map__10261,map__10261__$1,opts,on_edit){
return (function (___$2){return e.target.value;
});})(name,id,___$1,map__10266,map__10266__$1,editing,edit_text,map__10261,map__10261__$1,opts,on_edit))
);
});})(name,id,___$1,map__10266,map__10266__$1,editing,edit_text,map__10261,map__10261__$1,opts,on_edit))
, "value": (cljs.core.truth_(name)?name:id), "style": {"margin-left": "-1px", "padding": "inherit", "fontFamily": "Georgia", "fontSize": "18px", "border": "none", "width": "90%", "outline": "none"}, "ref": "theInput"});
});})(map__10261,map__10261__$1,opts,on_edit))
;
session.session.t10262.prototype.om$core$IInitState$ = true;
session.session.t10262.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10261,map__10261__$1,opts,on_edit){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});})(map__10261,map__10261__$1,opts,on_edit))
;
session.session.t10262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10261,map__10261__$1,opts,on_edit){
return (function (_10264){var self__ = this;
var _10264__$1 = this;return self__.meta10263;
});})(map__10261,map__10261__$1,opts,on_edit))
;
session.session.t10262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10261,map__10261__$1,opts,on_edit){
return (function (_10264,meta10263__$1){var self__ = this;
var _10264__$1 = this;return (new session.session.t10262(self__.on_edit,self__.opts,self__.map__10261,self__.p__10254,self__.owner,self__.cursor,self__.session_top,meta10263__$1));
});})(map__10261,map__10261__$1,opts,on_edit))
;
session.session.__GT_t10262 = ((function (map__10261,map__10261__$1,opts,on_edit){
return (function __GT_t10262(on_edit__$1,opts__$1,map__10261__$2,p__10254__$1,owner__$1,cursor__$1,session_top__$1,meta10263){return (new session.session.t10262(on_edit__$1,opts__$1,map__10261__$2,p__10254__$1,owner__$1,cursor__$1,session_top__$1,meta10263));
});})(map__10261,map__10261__$1,opts,on_edit))
;
}
return (new session.session.t10262(on_edit,opts,map__10261__$1,p__10254,owner,cursor,session_top,null));
});
session.session.session_renderers = new cljs.core.PersistentArrayMap.fromArray([session.datatypes.SessionObject,(function (cursor,owner,opts){if(typeof session.session.t10272 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10272 = (function (opts,owner,cursor,meta10273){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta10273 = meta10273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10272.cljs$lang$type = true;
session.session.t10272.cljs$lang$ctorStr = "session.session/t10272";
session.session.t10272.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.session/t10272");
});
session.session.t10272.prototype.om$core$IRender$ = true;
session.session.t10272.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span(null,"#session/Object ",om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder-raw","builder-raw",3779185256)).call(null,cljs.core.type.call(null,cljs.core.PersistentArrayMap.EMPTY),self__.cursor));
});
session.session.t10272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10274){var self__ = this;
var _10274__$1 = this;return self__.meta10273;
});
session.session.t10272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10274,meta10273__$1){var self__ = this;
var _10274__$1 = this;return (new session.session.t10272(self__.opts,self__.owner,self__.cursor,meta10273__$1));
});
session.session.__GT_t10272 = (function __GT_t10272(opts__$1,owner__$1,cursor__$1,meta10273){return (new session.session.t10272(opts__$1,owner__$1,cursor__$1,meta10273));
});
}
return (new session.session.t10272(opts,owner,cursor,null));
}),session.datatypes.Session,(function (cursor,owner,opts){if(typeof session.session.t10275 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10275 = (function (opts,owner,cursor,meta10276){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta10276 = meta10276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10275.cljs$lang$type = true;
session.session.t10275.cljs$lang$ctorStr = "session.session/t10275";
session.session.t10275.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.session/t10275");
});
session.session.t10275.prototype.om$core$IRender$ = true;
session.session.t10275.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,(function (){var id = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)], null));var p = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);return om.core.build.call(null,session.session.session_top,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",3936438442),((function (id,p,___$1){
return (function (p1__10269_SHARP_){return session.session.on_edit.call(null,p1__10269_SHARP_,id,p);
});})(id,p,___$1))
], null)], null));
})(),om.core.build.call(null,session.loopcreator.new_loop_creator,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"session-top","session-top",990277904),new cljs.core.Keyword(null,"chan","chan",1016956612),new cljs.core.Keyword(null,"loop-create","loop-create",2966435767).cljs$core$IFn$_invoke$arity$1(self__.opts)], null),self__.cursor)),cljs.core.map.call(null,((function (___$1){
return (function (p1__10270_SHARP_,p2__10271_SHARP_){return om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder","builder",1244848909)).call(null,p1__10270_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword("om.core","index","om.core/index",3166146514),p2__10271_SHARP_,new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));
});})(___$1))
,new cljs.core.Keyword(null,"loops","loops",1117061569).cljs$core$IFn$_invoke$arity$1(self__.cursor),cljs.core.range.call(null)));
});
session.session.t10275.prototype.om$core$IWillMount$ = true;
session.session.t10275.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6248__auto___10388 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___10388,___$1){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___10388,___$1){
return (function (state_10291){var state_val_10292 = (state_10291[1]);if((state_val_10292 === 7))
{var inst_10282 = (state_10291[2]);var inst_10283 = session.session.handle_kernel_response.call(null,inst_10282,self__.cursor,self__.owner,self__.opts);var state_10291__$1 = (function (){var statearr_10293 = state_10291;(statearr_10293[7] = inst_10283);
return statearr_10293;
})();var statearr_10294_10389 = state_10291__$1;(statearr_10294_10389[2] = null);
(statearr_10294_10389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10292 === 6))
{var inst_10287 = (state_10291[2]);var state_10291__$1 = state_10291;var statearr_10295_10390 = state_10291__$1;(statearr_10295_10390[2] = inst_10287);
(statearr_10295_10390[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10292 === 5))
{var state_10291__$1 = state_10291;var statearr_10296_10391 = state_10291__$1;(statearr_10296_10391[2] = null);
(statearr_10296_10391[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10292 === 4))
{var inst_10280 = new cljs.core.Keyword(null,"kernel-receive","kernel-receive",2518943941).cljs$core$IFn$_invoke$arity$1(self__.opts);var state_10291__$1 = state_10291;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10291__$1,7,inst_10280);
} else
{if((state_val_10292 === 3))
{var inst_10289 = (state_10291[2]);var state_10291__$1 = state_10291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10291__$1,inst_10289);
} else
{if((state_val_10292 === 2))
{var state_10291__$1 = state_10291;if(true)
{var statearr_10297_10392 = state_10291__$1;(statearr_10297_10392[1] = 4);
} else
{var statearr_10298_10393 = state_10291__$1;(statearr_10298_10393[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10292 === 1))
{var state_10291__$1 = state_10291;var statearr_10299_10394 = state_10291__$1;(statearr_10299_10394[2] = null);
(statearr_10299_10394[1] = 2);
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
});})(c__6248__auto___10388,___$1))
;return ((function (switch__6233__auto__,c__6248__auto___10388,___$1){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_10303 = [null,null,null,null,null,null,null,null];(statearr_10303[0] = state_machine__6234__auto__);
(statearr_10303[1] = 1);
return statearr_10303;
});
var state_machine__6234__auto____1 = (function (state_10291){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_10291);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e10304){if((e10304 instanceof Object))
{var ex__6237__auto__ = e10304;var statearr_10305_10395 = state_10291;(statearr_10305_10395[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10291);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10304;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10396 = state_10291;
state_10291 = G__10396;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_10291){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_10291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___10388,___$1))
})();var state__6250__auto__ = (function (){var statearr_10306 = f__6249__auto__.call(null);(statearr_10306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___10388);
return statearr_10306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___10388,___$1))
);
var c_10397 = new cljs.core.Keyword(null,"loop-create","loop-create",2966435767).cljs$core$IFn$_invoke$arity$1(self__.opts);var c__6248__auto___10398 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___10398,c_10397,___$1){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___10398,c_10397,___$1){
return (function (state_10332){var state_val_10333 = (state_10332[1]);if((state_val_10333 === 8))
{var inst_10312 = (state_10332[7]);var inst_10310 = (state_10332[8]);var inst_10319 = (state_10332[2]);var inst_10320 = om.core.get_props.call(null,self__.owner);var inst_10321 = [new cljs.core.Keyword(null,"loops","loops",1117061569)];var inst_10322 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10321,null));var inst_10323 = (function (){var new_loop = inst_10312;var insertion_id = inst_10310;return ((function (new_loop,insertion_id,inst_10312,inst_10310,inst_10319,inst_10320,inst_10321,inst_10322,state_val_10333,c__6248__auto___10398,c_10397,___$1){
return (function (p1__10267_SHARP_){return session.session.loop_insert.call(null,p1__10267_SHARP_,insertion_id,new_loop);
});
;})(new_loop,insertion_id,inst_10312,inst_10310,inst_10319,inst_10320,inst_10321,inst_10322,state_val_10333,c__6248__auto___10398,c_10397,___$1))
})();var inst_10324 = om.core.transact_BANG_.call(null,inst_10320,inst_10322,inst_10323);var state_10332__$1 = (function (){var statearr_10334 = state_10332;(statearr_10334[9] = inst_10324);
(statearr_10334[10] = inst_10319);
return statearr_10334;
})();var statearr_10335_10399 = state_10332__$1;(statearr_10335_10399[2] = null);
(statearr_10335_10399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10333 === 7))
{var inst_10312 = (state_10332[7]);var inst_10310 = (state_10332[8]);var inst_10310__$1 = (state_10332[2]);var inst_10311 = session.session.new_id.call(null);var inst_10312__$1 = (new session.datatypes.Loop(inst_10311,"",new cljs.core.Keyword(null,"default","default",2558708147)));var inst_10313 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_10314 = [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"new-id","new-id",4259978202)];var inst_10315 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_10312__$1);var inst_10316 = [new cljs.core.Keyword(null,"insert-loop","insert-loop",864347306),inst_10310__$1,inst_10315];var inst_10317 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10314,inst_10316);var state_10332__$1 = (function (){var statearr_10336 = state_10332;(statearr_10336[7] = inst_10312__$1);
(statearr_10336[8] = inst_10310__$1);
return statearr_10336;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10332__$1,8,inst_10313,inst_10317);
} else
{if((state_val_10333 === 6))
{var inst_10328 = (state_10332[2]);var state_10332__$1 = state_10332;var statearr_10337_10400 = state_10332__$1;(statearr_10337_10400[2] = inst_10328);
(statearr_10337_10400[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10333 === 5))
{var state_10332__$1 = state_10332;var statearr_10338_10401 = state_10332__$1;(statearr_10338_10401[2] = null);
(statearr_10338_10401[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10333 === 4))
{var state_10332__$1 = state_10332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10332__$1,7,c_10397);
} else
{if((state_val_10333 === 3))
{var inst_10330 = (state_10332[2]);var state_10332__$1 = state_10332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10332__$1,inst_10330);
} else
{if((state_val_10333 === 2))
{var state_10332__$1 = state_10332;if(true)
{var statearr_10339_10402 = state_10332__$1;(statearr_10339_10402[1] = 4);
} else
{var statearr_10340_10403 = state_10332__$1;(statearr_10340_10403[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10333 === 1))
{var state_10332__$1 = state_10332;var statearr_10341_10404 = state_10332__$1;(statearr_10341_10404[2] = null);
(statearr_10341_10404[1] = 2);
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
});})(c__6248__auto___10398,c_10397,___$1))
;return ((function (switch__6233__auto__,c__6248__auto___10398,c_10397,___$1){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_10345 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10345[0] = state_machine__6234__auto__);
(statearr_10345[1] = 1);
return statearr_10345;
});
var state_machine__6234__auto____1 = (function (state_10332){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_10332);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e10346){if((e10346 instanceof Object))
{var ex__6237__auto__ = e10346;var statearr_10347_10405 = state_10332;(statearr_10347_10405[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10406 = state_10332;
state_10332 = G__10406;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_10332){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_10332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___10398,c_10397,___$1))
})();var state__6250__auto__ = (function (){var statearr_10348 = f__6249__auto__.call(null);(statearr_10348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___10398);
return statearr_10348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___10398,c_10397,___$1))
);
var c = new cljs.core.Keyword(null,"loop-delete","loop-delete",2983271526).cljs$core$IFn$_invoke$arity$1(self__.opts);var c__6248__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto__,c,___$1){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto__,c,___$1){
return (function (state_10371){var state_val_10372 = (state_10371[1]);if((state_val_10372 === 8))
{var inst_10352 = (state_10371[7]);var inst_10358 = (state_10371[2]);var inst_10359 = om.core.get_props.call(null,self__.owner);var inst_10360 = [new cljs.core.Keyword(null,"loops","loops",1117061569)];var inst_10361 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10360,null));var inst_10362 = (function (){var deletion_id = inst_10352;return ((function (deletion_id,inst_10352,inst_10358,inst_10359,inst_10360,inst_10361,state_val_10372,c__6248__auto__,c,___$1){
return (function (p1__10268_SHARP_){return session.session.loop_delete.call(null,p1__10268_SHARP_,deletion_id);
});
;})(deletion_id,inst_10352,inst_10358,inst_10359,inst_10360,inst_10361,state_val_10372,c__6248__auto__,c,___$1))
})();var inst_10363 = om.core.transact_BANG_.call(null,inst_10359,inst_10361,inst_10362);var state_10371__$1 = (function (){var statearr_10373 = state_10371;(statearr_10373[8] = inst_10358);
(statearr_10373[9] = inst_10363);
return statearr_10373;
})();var statearr_10374_10407 = state_10371__$1;(statearr_10374_10407[2] = null);
(statearr_10374_10407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10372 === 7))
{var inst_10352 = (state_10371[7]);var inst_10352__$1 = (state_10371[2]);var inst_10353 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_10354 = [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_10355 = [new cljs.core.Keyword(null,"delete-loop","delete-loop",4140640504),inst_10352__$1];var inst_10356 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10354,inst_10355);var state_10371__$1 = (function (){var statearr_10375 = state_10371;(statearr_10375[7] = inst_10352__$1);
return statearr_10375;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10371__$1,8,inst_10353,inst_10356);
} else
{if((state_val_10372 === 6))
{var inst_10367 = (state_10371[2]);var state_10371__$1 = state_10371;var statearr_10376_10408 = state_10371__$1;(statearr_10376_10408[2] = inst_10367);
(statearr_10376_10408[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10372 === 5))
{var state_10371__$1 = state_10371;var statearr_10377_10409 = state_10371__$1;(statearr_10377_10409[2] = null);
(statearr_10377_10409[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10372 === 4))
{var state_10371__$1 = state_10371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10371__$1,7,c);
} else
{if((state_val_10372 === 3))
{var inst_10369 = (state_10371[2]);var state_10371__$1 = state_10371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10371__$1,inst_10369);
} else
{if((state_val_10372 === 2))
{var state_10371__$1 = state_10371;if(true)
{var statearr_10378_10410 = state_10371__$1;(statearr_10378_10410[1] = 4);
} else
{var statearr_10379_10411 = state_10371__$1;(statearr_10379_10411[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10372 === 1))
{var state_10371__$1 = state_10371;var statearr_10380_10412 = state_10371__$1;(statearr_10380_10412[2] = null);
(statearr_10380_10412[1] = 2);
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
});})(c__6248__auto__,c,___$1))
;return ((function (switch__6233__auto__,c__6248__auto__,c,___$1){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_10384 = [null,null,null,null,null,null,null,null,null,null];(statearr_10384[0] = state_machine__6234__auto__);
(statearr_10384[1] = 1);
return statearr_10384;
});
var state_machine__6234__auto____1 = (function (state_10371){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_10371);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e10385){if((e10385 instanceof Object))
{var ex__6237__auto__ = e10385;var statearr_10386_10413 = state_10371;(statearr_10386_10413[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10385;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10414 = state_10371;
state_10371 = G__10414;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_10371){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_10371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__,c,___$1))
})();var state__6250__auto__ = (function (){var statearr_10387 = f__6249__auto__.call(null);(statearr_10387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_10387;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto__,c,___$1))
);
return c__6248__auto__;
});
session.session.t10275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10277){var self__ = this;
var _10277__$1 = this;return self__.meta10276;
});
session.session.t10275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10277,meta10276__$1){var self__ = this;
var _10277__$1 = this;return (new session.session.t10275(self__.opts,self__.owner,self__.cursor,meta10276__$1));
});
session.session.__GT_t10275 = (function __GT_t10275(opts__$1,owner__$1,cursor__$1,meta10276){return (new session.session.t10275(opts__$1,owner__$1,cursor__$1,meta10276));
});
}
return (new session.session.t10275(opts,owner,cursor,null));
})], true, false);

//# sourceMappingURL=session.js.map