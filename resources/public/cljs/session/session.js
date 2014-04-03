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
session.session.insert_output = (function insert_output(loops,newout){var i = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__10247_SHARP_,p2__10246_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(newout),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p2__10246_SHARP_)))
{return p1__10247_SHARP_;
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
var G__10248 = cljs.core.conj.call(null,l,x);
var G__10249 = cljs.core.next.call(null,r);
l = G__10248;
r = G__10249;
continue;
}
}
break;
}
}
});
session.session.loop_delete = (function loop_delete(loops,id){return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__10250_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__10250_SHARP_),id);
}),loops));
});
session.session.handle_kernel_response = (function (){var method_table__4336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4338__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4340__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-kernel-response",((function (method_table__4336__auto__,prefer_table__4337__auto__,method_cache__4338__auto__,cached_hierarchy__4339__auto__,hierarchy__4340__auto__){
return (function (response,cursor,owner,opts){return new cljs.core.Keyword(null,"op","op",1013907795).cljs$core$IFn$_invoke$arity$1(response);
});})(method_table__4336__auto__,prefer_table__4337__auto__,method_cache__4338__auto__,cached_hierarchy__4339__auto__,hierarchy__4340__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4340__auto__,method_table__4336__auto__,prefer_table__4337__auto__,method_cache__4338__auto__,cached_hierarchy__4339__auto__));
})();
cljs.core._add_method.call(null,session.session.handle_kernel_response,new cljs.core.Keyword(null,"eval-response","eval-response",1466223044),(function (response,cursor,owner,opts){return om.core.transact_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loops","loops",1117061569)], null),(function (p1__10251_SHARP_){return session.session.insert_output.call(null,p1__10251_SHARP_,response);
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
session.session.session_top = (function session_top(cursor,owner,p__10253){var map__10260 = p__10253;var map__10260__$1 = ((cljs.core.seq_QMARK_.call(null,map__10260))?cljs.core.apply.call(null,cljs.core.hash_map,map__10260):map__10260);var opts = map__10260__$1;var on_edit = cljs.core.get.call(null,map__10260__$1,new cljs.core.Keyword(null,"on-edit","on-edit",3936438442));if(typeof session.session.t10261 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10261 = (function (on_edit,opts,map__10260,p__10253,owner,cursor,session_top,meta10262){
this.on_edit = on_edit;
this.opts = opts;
this.map__10260 = map__10260;
this.p__10253 = p__10253;
this.owner = owner;
this.cursor = cursor;
this.session_top = session_top;
this.meta10262 = meta10262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10261.cljs$lang$type = true;
session.session.t10261.cljs$lang$ctorStr = "session.session/t10261";
session.session.t10261.cljs$lang$ctorPrWriter = ((function (map__10260,map__10260__$1,opts,on_edit){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.session/t10261");
});})(map__10260,map__10260__$1,opts,on_edit))
;
session.session.t10261.prototype.om$core$IRenderState$ = true;
session.session.t10261.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10260,map__10260__$1,opts,on_edit){
return (function (_,p__10264){var self__ = this;
var map__10265 = p__10264;var map__10265__$1 = ((cljs.core.seq_QMARK_.call(null,map__10265))?cljs.core.apply.call(null,cljs.core.hash_map,map__10265):map__10265);var editing = cljs.core.get.call(null,map__10265__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var edit_text = cljs.core.get.call(null,map__10265__$1,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));var ___$1 = this;var name = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"name","name",1017277949)], null));var id = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)], null)).uuid;return om.dom.input.call(null,{"onBlur": ((function (name,id,___$1,map__10265,map__10265__$1,editing,edit_text,map__10260,map__10260__$1,opts,on_edit){
return (function (e){return session.session.end_edit.call(null,name,self__.owner,self__.on_edit);
});})(name,id,___$1,map__10265,map__10265__$1,editing,edit_text,map__10260,map__10260__$1,opts,on_edit))
, "onKeyPress": ((function (name,id,___$1,map__10265,map__10265__$1,editing,edit_text,map__10260,map__10260__$1,opts,on_edit){
return (function (p1__10252_SHARP_){if((p1__10252_SHARP_.keyCode === 13))
{om.core.get_node.call(null,self__.owner,"theInput").blur();
return session.session.end_edit.call(null,name,self__.owner,self__.on_edit);
} else
{return null;
}
});})(name,id,___$1,map__10265,map__10265__$1,editing,edit_text,map__10260,map__10260__$1,opts,on_edit))
, "onChange": ((function (name,id,___$1,map__10265,map__10265__$1,editing,edit_text,map__10260,map__10260__$1,opts,on_edit){
return (function (e){return om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"name","name",1017277949)], null),((function (name,id,___$1,map__10265,map__10265__$1,editing,edit_text,map__10260,map__10260__$1,opts,on_edit){
return (function (___$2){return e.target.value;
});})(name,id,___$1,map__10265,map__10265__$1,editing,edit_text,map__10260,map__10260__$1,opts,on_edit))
);
});})(name,id,___$1,map__10265,map__10265__$1,editing,edit_text,map__10260,map__10260__$1,opts,on_edit))
, "value": (cljs.core.truth_(name)?name:id), "style": {"margin-left": "-1px", "padding": "inherit", "fontFamily": "Georgia", "fontSize": "18px", "border": "none", "width": "90%", "outline": "none"}, "ref": "theInput"});
});})(map__10260,map__10260__$1,opts,on_edit))
;
session.session.t10261.prototype.om$core$IInitState$ = true;
session.session.t10261.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10260,map__10260__$1,opts,on_edit){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});})(map__10260,map__10260__$1,opts,on_edit))
;
session.session.t10261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10260,map__10260__$1,opts,on_edit){
return (function (_10263){var self__ = this;
var _10263__$1 = this;return self__.meta10262;
});})(map__10260,map__10260__$1,opts,on_edit))
;
session.session.t10261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10260,map__10260__$1,opts,on_edit){
return (function (_10263,meta10262__$1){var self__ = this;
var _10263__$1 = this;return (new session.session.t10261(self__.on_edit,self__.opts,self__.map__10260,self__.p__10253,self__.owner,self__.cursor,self__.session_top,meta10262__$1));
});})(map__10260,map__10260__$1,opts,on_edit))
;
session.session.__GT_t10261 = ((function (map__10260,map__10260__$1,opts,on_edit){
return (function __GT_t10261(on_edit__$1,opts__$1,map__10260__$2,p__10253__$1,owner__$1,cursor__$1,session_top__$1,meta10262){return (new session.session.t10261(on_edit__$1,opts__$1,map__10260__$2,p__10253__$1,owner__$1,cursor__$1,session_top__$1,meta10262));
});})(map__10260,map__10260__$1,opts,on_edit))
;
}
return (new session.session.t10261(on_edit,opts,map__10260__$1,p__10253,owner,cursor,session_top,null));
});
session.session.session_renderers = new cljs.core.PersistentArrayMap.fromArray([session.datatypes.SessionObject,(function (cursor,owner,opts){if(typeof session.session.t10271 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10271 = (function (opts,owner,cursor,meta10272){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta10272 = meta10272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10271.cljs$lang$type = true;
session.session.t10271.cljs$lang$ctorStr = "session.session/t10271";
session.session.t10271.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.session/t10271");
});
session.session.t10271.prototype.om$core$IRender$ = true;
session.session.t10271.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span(null,"#session/Object ",om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder-raw","builder-raw",3779185256)).call(null,cljs.core.type.call(null,cljs.core.PersistentArrayMap.EMPTY),self__.cursor));
});
session.session.t10271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10273){var self__ = this;
var _10273__$1 = this;return self__.meta10272;
});
session.session.t10271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10273,meta10272__$1){var self__ = this;
var _10273__$1 = this;return (new session.session.t10271(self__.opts,self__.owner,self__.cursor,meta10272__$1));
});
session.session.__GT_t10271 = (function __GT_t10271(opts__$1,owner__$1,cursor__$1,meta10272){return (new session.session.t10271(opts__$1,owner__$1,cursor__$1,meta10272));
});
}
return (new session.session.t10271(opts,owner,cursor,null));
}),session.datatypes.Session,(function (cursor,owner,opts){if(typeof session.session.t10274 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10274 = (function (opts,owner,cursor,meta10275){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta10275 = meta10275;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10274.cljs$lang$type = true;
session.session.t10274.cljs$lang$ctorStr = "session.session/t10274";
session.session.t10274.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.session/t10274");
});
session.session.t10274.prototype.om$core$IRender$ = true;
session.session.t10274.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,(function (){var id = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)], null));var p = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);return om.core.build.call(null,session.session.session_top,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",3936438442),((function (id,p,___$1){
return (function (p1__10268_SHARP_){return session.session.on_edit.call(null,p1__10268_SHARP_,id,p);
});})(id,p,___$1))
], null)], null));
})(),om.core.build.call(null,session.loopcreator.new_loop_creator,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"session-top","session-top",990277904),new cljs.core.Keyword(null,"chan","chan",1016956612),new cljs.core.Keyword(null,"loop-create","loop-create",2966435767).cljs$core$IFn$_invoke$arity$1(self__.opts)], null),self__.cursor)),cljs.core.map.call(null,((function (___$1){
return (function (p1__10269_SHARP_,p2__10270_SHARP_){return om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder","builder",1244848909)).call(null,p1__10269_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword("om.core","index","om.core/index",3166146514),p2__10270_SHARP_,new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));
});})(___$1))
,new cljs.core.Keyword(null,"loops","loops",1117061569).cljs$core$IFn$_invoke$arity$1(self__.cursor),cljs.core.range.call(null)));
});
session.session.t10274.prototype.om$core$IWillMount$ = true;
session.session.t10274.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6248__auto___10387 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___10387,___$1){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___10387,___$1){
return (function (state_10290){var state_val_10291 = (state_10290[1]);if((state_val_10291 === 7))
{var inst_10281 = (state_10290[2]);var inst_10282 = session.session.handle_kernel_response.call(null,inst_10281,self__.cursor,self__.owner,self__.opts);var state_10290__$1 = (function (){var statearr_10292 = state_10290;(statearr_10292[7] = inst_10282);
return statearr_10292;
})();var statearr_10293_10388 = state_10290__$1;(statearr_10293_10388[2] = null);
(statearr_10293_10388[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10291 === 6))
{var inst_10286 = (state_10290[2]);var state_10290__$1 = state_10290;var statearr_10294_10389 = state_10290__$1;(statearr_10294_10389[2] = inst_10286);
(statearr_10294_10389[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10291 === 5))
{var state_10290__$1 = state_10290;var statearr_10295_10390 = state_10290__$1;(statearr_10295_10390[2] = null);
(statearr_10295_10390[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10291 === 4))
{var inst_10279 = new cljs.core.Keyword(null,"kernel-receive","kernel-receive",2518943941).cljs$core$IFn$_invoke$arity$1(self__.opts);var state_10290__$1 = state_10290;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10290__$1,7,inst_10279);
} else
{if((state_val_10291 === 3))
{var inst_10288 = (state_10290[2]);var state_10290__$1 = state_10290;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10290__$1,inst_10288);
} else
{if((state_val_10291 === 2))
{var state_10290__$1 = state_10290;if(true)
{var statearr_10296_10391 = state_10290__$1;(statearr_10296_10391[1] = 4);
} else
{var statearr_10297_10392 = state_10290__$1;(statearr_10297_10392[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10291 === 1))
{var state_10290__$1 = state_10290;var statearr_10298_10393 = state_10290__$1;(statearr_10298_10393[2] = null);
(statearr_10298_10393[1] = 2);
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
});})(c__6248__auto___10387,___$1))
;return ((function (switch__6233__auto__,c__6248__auto___10387,___$1){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_10302 = [null,null,null,null,null,null,null,null];(statearr_10302[0] = state_machine__6234__auto__);
(statearr_10302[1] = 1);
return statearr_10302;
});
var state_machine__6234__auto____1 = (function (state_10290){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_10290);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e10303){if((e10303 instanceof Object))
{var ex__6237__auto__ = e10303;var statearr_10304_10394 = state_10290;(statearr_10304_10394[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10290);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10395 = state_10290;
state_10290 = G__10395;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_10290){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_10290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___10387,___$1))
})();var state__6250__auto__ = (function (){var statearr_10305 = f__6249__auto__.call(null);(statearr_10305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___10387);
return statearr_10305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___10387,___$1))
);
var c_10396 = new cljs.core.Keyword(null,"loop-create","loop-create",2966435767).cljs$core$IFn$_invoke$arity$1(self__.opts);var c__6248__auto___10397 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___10397,c_10396,___$1){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___10397,c_10396,___$1){
return (function (state_10331){var state_val_10332 = (state_10331[1]);if((state_val_10332 === 8))
{var inst_10309 = (state_10331[7]);var inst_10311 = (state_10331[8]);var inst_10318 = (state_10331[2]);var inst_10319 = om.core.get_props.call(null,self__.owner);var inst_10320 = [new cljs.core.Keyword(null,"loops","loops",1117061569)];var inst_10321 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10320,null));var inst_10322 = (function (){var new_loop = inst_10311;var insertion_id = inst_10309;return ((function (new_loop,insertion_id,inst_10309,inst_10311,inst_10318,inst_10319,inst_10320,inst_10321,state_val_10332,c__6248__auto___10397,c_10396,___$1){
return (function (p1__10266_SHARP_){return session.session.loop_insert.call(null,p1__10266_SHARP_,insertion_id,new_loop);
});
;})(new_loop,insertion_id,inst_10309,inst_10311,inst_10318,inst_10319,inst_10320,inst_10321,state_val_10332,c__6248__auto___10397,c_10396,___$1))
})();var inst_10323 = om.core.transact_BANG_.call(null,inst_10319,inst_10321,inst_10322);var state_10331__$1 = (function (){var statearr_10333 = state_10331;(statearr_10333[9] = inst_10323);
(statearr_10333[10] = inst_10318);
return statearr_10333;
})();var statearr_10334_10398 = state_10331__$1;(statearr_10334_10398[2] = null);
(statearr_10334_10398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 7))
{var inst_10309 = (state_10331[7]);var inst_10311 = (state_10331[8]);var inst_10309__$1 = (state_10331[2]);var inst_10310 = session.session.new_id.call(null);var inst_10311__$1 = (new session.datatypes.Loop(inst_10310,"",new cljs.core.Keyword(null,"default","default",2558708147)));var inst_10312 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_10313 = [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"new-id","new-id",4259978202)];var inst_10314 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_10311__$1);var inst_10315 = [new cljs.core.Keyword(null,"insert-loop","insert-loop",864347306),inst_10309__$1,inst_10314];var inst_10316 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10313,inst_10315);var state_10331__$1 = (function (){var statearr_10335 = state_10331;(statearr_10335[7] = inst_10309__$1);
(statearr_10335[8] = inst_10311__$1);
return statearr_10335;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10331__$1,8,inst_10312,inst_10316);
} else
{if((state_val_10332 === 6))
{var inst_10327 = (state_10331[2]);var state_10331__$1 = state_10331;var statearr_10336_10399 = state_10331__$1;(statearr_10336_10399[2] = inst_10327);
(statearr_10336_10399[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 5))
{var state_10331__$1 = state_10331;var statearr_10337_10400 = state_10331__$1;(statearr_10337_10400[2] = null);
(statearr_10337_10400[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 4))
{var state_10331__$1 = state_10331;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10331__$1,7,c_10396);
} else
{if((state_val_10332 === 3))
{var inst_10329 = (state_10331[2]);var state_10331__$1 = state_10331;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10331__$1,inst_10329);
} else
{if((state_val_10332 === 2))
{var state_10331__$1 = state_10331;if(true)
{var statearr_10338_10401 = state_10331__$1;(statearr_10338_10401[1] = 4);
} else
{var statearr_10339_10402 = state_10331__$1;(statearr_10339_10402[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 1))
{var state_10331__$1 = state_10331;var statearr_10340_10403 = state_10331__$1;(statearr_10340_10403[2] = null);
(statearr_10340_10403[1] = 2);
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
});})(c__6248__auto___10397,c_10396,___$1))
;return ((function (switch__6233__auto__,c__6248__auto___10397,c_10396,___$1){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_10344 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10344[0] = state_machine__6234__auto__);
(statearr_10344[1] = 1);
return statearr_10344;
});
var state_machine__6234__auto____1 = (function (state_10331){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_10331);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e10345){if((e10345 instanceof Object))
{var ex__6237__auto__ = e10345;var statearr_10346_10404 = state_10331;(statearr_10346_10404[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10331);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10405 = state_10331;
state_10331 = G__10405;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_10331){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_10331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___10397,c_10396,___$1))
})();var state__6250__auto__ = (function (){var statearr_10347 = f__6249__auto__.call(null);(statearr_10347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___10397);
return statearr_10347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___10397,c_10396,___$1))
);
var c = new cljs.core.Keyword(null,"loop-delete","loop-delete",2983271526).cljs$core$IFn$_invoke$arity$1(self__.opts);var c__6248__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto__,c,___$1){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto__,c,___$1){
return (function (state_10370){var state_val_10371 = (state_10370[1]);if((state_val_10371 === 8))
{var inst_10351 = (state_10370[7]);var inst_10357 = (state_10370[2]);var inst_10358 = om.core.get_props.call(null,self__.owner);var inst_10359 = [new cljs.core.Keyword(null,"loops","loops",1117061569)];var inst_10360 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10359,null));var inst_10361 = (function (){var deletion_id = inst_10351;return ((function (deletion_id,inst_10351,inst_10357,inst_10358,inst_10359,inst_10360,state_val_10371,c__6248__auto__,c,___$1){
return (function (p1__10267_SHARP_){return session.session.loop_delete.call(null,p1__10267_SHARP_,deletion_id);
});
;})(deletion_id,inst_10351,inst_10357,inst_10358,inst_10359,inst_10360,state_val_10371,c__6248__auto__,c,___$1))
})();var inst_10362 = om.core.transact_BANG_.call(null,inst_10358,inst_10360,inst_10361);var state_10370__$1 = (function (){var statearr_10372 = state_10370;(statearr_10372[8] = inst_10362);
(statearr_10372[9] = inst_10357);
return statearr_10372;
})();var statearr_10373_10406 = state_10370__$1;(statearr_10373_10406[2] = null);
(statearr_10373_10406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10371 === 7))
{var inst_10351 = (state_10370[7]);var inst_10351__$1 = (state_10370[2]);var inst_10352 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_10353 = [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_10354 = [new cljs.core.Keyword(null,"delete-loop","delete-loop",4140640504),inst_10351__$1];var inst_10355 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10353,inst_10354);var state_10370__$1 = (function (){var statearr_10374 = state_10370;(statearr_10374[7] = inst_10351__$1);
return statearr_10374;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10370__$1,8,inst_10352,inst_10355);
} else
{if((state_val_10371 === 6))
{var inst_10366 = (state_10370[2]);var state_10370__$1 = state_10370;var statearr_10375_10407 = state_10370__$1;(statearr_10375_10407[2] = inst_10366);
(statearr_10375_10407[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10371 === 5))
{var state_10370__$1 = state_10370;var statearr_10376_10408 = state_10370__$1;(statearr_10376_10408[2] = null);
(statearr_10376_10408[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10371 === 4))
{var state_10370__$1 = state_10370;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10370__$1,7,c);
} else
{if((state_val_10371 === 3))
{var inst_10368 = (state_10370[2]);var state_10370__$1 = state_10370;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10370__$1,inst_10368);
} else
{if((state_val_10371 === 2))
{var state_10370__$1 = state_10370;if(true)
{var statearr_10377_10409 = state_10370__$1;(statearr_10377_10409[1] = 4);
} else
{var statearr_10378_10410 = state_10370__$1;(statearr_10378_10410[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10371 === 1))
{var state_10370__$1 = state_10370;var statearr_10379_10411 = state_10370__$1;(statearr_10379_10411[2] = null);
(statearr_10379_10411[1] = 2);
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
var state_machine__6234__auto____0 = (function (){var statearr_10383 = [null,null,null,null,null,null,null,null,null,null];(statearr_10383[0] = state_machine__6234__auto__);
(statearr_10383[1] = 1);
return statearr_10383;
});
var state_machine__6234__auto____1 = (function (state_10370){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_10370);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e10384){if((e10384 instanceof Object))
{var ex__6237__auto__ = e10384;var statearr_10385_10412 = state_10370;(statearr_10385_10412[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10370);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10413 = state_10370;
state_10370 = G__10413;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_10370){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_10370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__,c,___$1))
})();var state__6250__auto__ = (function (){var statearr_10386 = f__6249__auto__.call(null);(statearr_10386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_10386;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto__,c,___$1))
);
return c__6248__auto__;
});
session.session.t10274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10276){var self__ = this;
var _10276__$1 = this;return self__.meta10275;
});
session.session.t10274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10276,meta10275__$1){var self__ = this;
var _10276__$1 = this;return (new session.session.t10274(self__.opts,self__.owner,self__.cursor,meta10275__$1));
});
session.session.__GT_t10274 = (function __GT_t10274(opts__$1,owner__$1,cursor__$1,meta10275){return (new session.session.t10274(opts__$1,owner__$1,cursor__$1,meta10275));
});
}
return (new session.session.t10274(opts,owner,cursor,null));
})], true, false);

//# sourceMappingURL=session.js.map