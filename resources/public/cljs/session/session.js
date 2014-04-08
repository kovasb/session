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
session.session.insert_output = (function insert_output(loops,newout){var i = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__10243_SHARP_,p2__10242_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(newout),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p2__10242_SHARP_)))
{return p1__10243_SHARP_;
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
var G__10244 = cljs.core.conj.call(null,l,x);
var G__10245 = cljs.core.next.call(null,r);
l = G__10244;
r = G__10245;
continue;
}
}
break;
}
}
});
session.session.loop_delete = (function loop_delete(loops,id){return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__10246_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__10246_SHARP_),id);
}),loops));
});
session.session.handle_kernel_response = (function (){var method_table__4336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4338__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4340__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-kernel-response",((function (method_table__4336__auto__,prefer_table__4337__auto__,method_cache__4338__auto__,cached_hierarchy__4339__auto__,hierarchy__4340__auto__){
return (function (response,cursor,owner,opts){return new cljs.core.Keyword(null,"op","op",1013907795).cljs$core$IFn$_invoke$arity$1(response);
});})(method_table__4336__auto__,prefer_table__4337__auto__,method_cache__4338__auto__,cached_hierarchy__4339__auto__,hierarchy__4340__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4340__auto__,method_table__4336__auto__,prefer_table__4337__auto__,method_cache__4338__auto__,cached_hierarchy__4339__auto__));
})();
cljs.core._add_method.call(null,session.session.handle_kernel_response,new cljs.core.Keyword(null,"eval-response","eval-response",1466223044),(function (response,cursor,owner,opts){return om.core.transact_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loops","loops",1117061569)], null),(function (p1__10247_SHARP_){return session.session.insert_output.call(null,p1__10247_SHARP_,response);
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
session.session.session_top = (function session_top(cursor,owner,p__10249){var map__10256 = p__10249;var map__10256__$1 = ((cljs.core.seq_QMARK_.call(null,map__10256))?cljs.core.apply.call(null,cljs.core.hash_map,map__10256):map__10256);var opts = map__10256__$1;var on_edit = cljs.core.get.call(null,map__10256__$1,new cljs.core.Keyword(null,"on-edit","on-edit",3936438442));if(typeof session.session.t10257 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10257 = (function (on_edit,opts,map__10256,p__10249,owner,cursor,session_top,meta10258){
this.on_edit = on_edit;
this.opts = opts;
this.map__10256 = map__10256;
this.p__10249 = p__10249;
this.owner = owner;
this.cursor = cursor;
this.session_top = session_top;
this.meta10258 = meta10258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10257.cljs$lang$type = true;
session.session.t10257.cljs$lang$ctorStr = "session.session/t10257";
session.session.t10257.cljs$lang$ctorPrWriter = ((function (map__10256,map__10256__$1,opts,on_edit){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.session/t10257");
});})(map__10256,map__10256__$1,opts,on_edit))
;
session.session.t10257.prototype.om$core$IRenderState$ = true;
session.session.t10257.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10256,map__10256__$1,opts,on_edit){
return (function (_,p__10260){var self__ = this;
var map__10261 = p__10260;var map__10261__$1 = ((cljs.core.seq_QMARK_.call(null,map__10261))?cljs.core.apply.call(null,cljs.core.hash_map,map__10261):map__10261);var editing = cljs.core.get.call(null,map__10261__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var edit_text = cljs.core.get.call(null,map__10261__$1,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));var ___$1 = this;var name = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"name","name",1017277949)], null));var id = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)], null)).uuid;return om.dom.input.call(null,{"onBlur": ((function (name,id,___$1,map__10261,map__10261__$1,editing,edit_text,map__10256,map__10256__$1,opts,on_edit){
return (function (e){return session.session.end_edit.call(null,name,self__.owner,self__.on_edit);
});})(name,id,___$1,map__10261,map__10261__$1,editing,edit_text,map__10256,map__10256__$1,opts,on_edit))
, "onKeyPress": ((function (name,id,___$1,map__10261,map__10261__$1,editing,edit_text,map__10256,map__10256__$1,opts,on_edit){
return (function (p1__10248_SHARP_){if((p1__10248_SHARP_.keyCode === 13))
{om.core.get_node.call(null,self__.owner,"theInput").blur();
return session.session.end_edit.call(null,name,self__.owner,self__.on_edit);
} else
{return null;
}
});})(name,id,___$1,map__10261,map__10261__$1,editing,edit_text,map__10256,map__10256__$1,opts,on_edit))
, "onChange": ((function (name,id,___$1,map__10261,map__10261__$1,editing,edit_text,map__10256,map__10256__$1,opts,on_edit){
return (function (e){return om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"name","name",1017277949)], null),((function (name,id,___$1,map__10261,map__10261__$1,editing,edit_text,map__10256,map__10256__$1,opts,on_edit){
return (function (___$2){return e.target.value;
});})(name,id,___$1,map__10261,map__10261__$1,editing,edit_text,map__10256,map__10256__$1,opts,on_edit))
);
});})(name,id,___$1,map__10261,map__10261__$1,editing,edit_text,map__10256,map__10256__$1,opts,on_edit))
, "value": (cljs.core.truth_(name)?name:id), "style": {"margin-left": "-1px", "padding": "inherit", "fontFamily": "Georgia", "fontSize": "18px", "border": "none", "width": "90%", "outline": "none"}, "ref": "theInput"});
});})(map__10256,map__10256__$1,opts,on_edit))
;
session.session.t10257.prototype.om$core$IInitState$ = true;
session.session.t10257.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10256,map__10256__$1,opts,on_edit){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});})(map__10256,map__10256__$1,opts,on_edit))
;
session.session.t10257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10256,map__10256__$1,opts,on_edit){
return (function (_10259){var self__ = this;
var _10259__$1 = this;return self__.meta10258;
});})(map__10256,map__10256__$1,opts,on_edit))
;
session.session.t10257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10256,map__10256__$1,opts,on_edit){
return (function (_10259,meta10258__$1){var self__ = this;
var _10259__$1 = this;return (new session.session.t10257(self__.on_edit,self__.opts,self__.map__10256,self__.p__10249,self__.owner,self__.cursor,self__.session_top,meta10258__$1));
});})(map__10256,map__10256__$1,opts,on_edit))
;
session.session.__GT_t10257 = ((function (map__10256,map__10256__$1,opts,on_edit){
return (function __GT_t10257(on_edit__$1,opts__$1,map__10256__$2,p__10249__$1,owner__$1,cursor__$1,session_top__$1,meta10258){return (new session.session.t10257(on_edit__$1,opts__$1,map__10256__$2,p__10249__$1,owner__$1,cursor__$1,session_top__$1,meta10258));
});})(map__10256,map__10256__$1,opts,on_edit))
;
}
return (new session.session.t10257(on_edit,opts,map__10256__$1,p__10249,owner,cursor,session_top,null));
});
session.session.session_renderers = new cljs.core.PersistentArrayMap.fromArray([session.datatypes.SessionObject,(function (cursor,owner,opts){if(typeof session.session.t10267 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10267 = (function (opts,owner,cursor,meta10268){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta10268 = meta10268;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10267.cljs$lang$type = true;
session.session.t10267.cljs$lang$ctorStr = "session.session/t10267";
session.session.t10267.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.session/t10267");
});
session.session.t10267.prototype.om$core$IRender$ = true;
session.session.t10267.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span(null,"#session/Object ",om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder-raw","builder-raw",3779185256)).call(null,cljs.core.type.call(null,cljs.core.PersistentArrayMap.EMPTY),self__.cursor));
});
session.session.t10267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10269){var self__ = this;
var _10269__$1 = this;return self__.meta10268;
});
session.session.t10267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10269,meta10268__$1){var self__ = this;
var _10269__$1 = this;return (new session.session.t10267(self__.opts,self__.owner,self__.cursor,meta10268__$1));
});
session.session.__GT_t10267 = (function __GT_t10267(opts__$1,owner__$1,cursor__$1,meta10268){return (new session.session.t10267(opts__$1,owner__$1,cursor__$1,meta10268));
});
}
return (new session.session.t10267(opts,owner,cursor,null));
}),session.datatypes.Session,(function (cursor,owner,opts){if(typeof session.session.t10270 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10270 = (function (opts,owner,cursor,meta10271){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta10271 = meta10271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10270.cljs$lang$type = true;
session.session.t10270.cljs$lang$ctorStr = "session.session/t10270";
session.session.t10270.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.session/t10270");
});
session.session.t10270.prototype.om$core$IRender$ = true;
session.session.t10270.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,(function (){var id = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)], null));var p = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);return om.core.build.call(null,session.session.session_top,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",3936438442),((function (id,p,___$1){
return (function (p1__10264_SHARP_){return session.session.on_edit.call(null,p1__10264_SHARP_,id,p);
});})(id,p,___$1))
], null)], null));
})(),om.core.build.call(null,session.loopcreator.new_loop_creator,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"session-top","session-top",990277904),new cljs.core.Keyword(null,"chan","chan",1016956612),new cljs.core.Keyword(null,"loop-create","loop-create",2966435767).cljs$core$IFn$_invoke$arity$1(self__.opts)], null),self__.cursor)),cljs.core.map.call(null,((function (___$1){
return (function (p1__10265_SHARP_,p2__10266_SHARP_){return om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder","builder",1244848909)).call(null,p1__10265_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword("om.core","index","om.core/index",3166146514),p2__10266_SHARP_,new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));
});})(___$1))
,new cljs.core.Keyword(null,"loops","loops",1117061569).cljs$core$IFn$_invoke$arity$1(self__.cursor),cljs.core.range.call(null)));
});
session.session.t10270.prototype.om$core$IWillMount$ = true;
session.session.t10270.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6248__auto___10383 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___10383,___$1){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___10383,___$1){
return (function (state_10286){var state_val_10287 = (state_10286[1]);if((state_val_10287 === 7))
{var inst_10277 = (state_10286[2]);var inst_10278 = session.session.handle_kernel_response.call(null,inst_10277,self__.cursor,self__.owner,self__.opts);var state_10286__$1 = (function (){var statearr_10288 = state_10286;(statearr_10288[7] = inst_10278);
return statearr_10288;
})();var statearr_10289_10384 = state_10286__$1;(statearr_10289_10384[2] = null);
(statearr_10289_10384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10287 === 6))
{var inst_10282 = (state_10286[2]);var state_10286__$1 = state_10286;var statearr_10290_10385 = state_10286__$1;(statearr_10290_10385[2] = inst_10282);
(statearr_10290_10385[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10287 === 5))
{var state_10286__$1 = state_10286;var statearr_10291_10386 = state_10286__$1;(statearr_10291_10386[2] = null);
(statearr_10291_10386[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10287 === 4))
{var inst_10275 = new cljs.core.Keyword(null,"kernel-receive","kernel-receive",2518943941).cljs$core$IFn$_invoke$arity$1(self__.opts);var state_10286__$1 = state_10286;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10286__$1,7,inst_10275);
} else
{if((state_val_10287 === 3))
{var inst_10284 = (state_10286[2]);var state_10286__$1 = state_10286;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10286__$1,inst_10284);
} else
{if((state_val_10287 === 2))
{var state_10286__$1 = state_10286;if(true)
{var statearr_10292_10387 = state_10286__$1;(statearr_10292_10387[1] = 4);
} else
{var statearr_10293_10388 = state_10286__$1;(statearr_10293_10388[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10287 === 1))
{var state_10286__$1 = state_10286;var statearr_10294_10389 = state_10286__$1;(statearr_10294_10389[2] = null);
(statearr_10294_10389[1] = 2);
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
});})(c__6248__auto___10383,___$1))
;return ((function (switch__6233__auto__,c__6248__auto___10383,___$1){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_10298 = [null,null,null,null,null,null,null,null];(statearr_10298[0] = state_machine__6234__auto__);
(statearr_10298[1] = 1);
return statearr_10298;
});
var state_machine__6234__auto____1 = (function (state_10286){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_10286);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e10299){if((e10299 instanceof Object))
{var ex__6237__auto__ = e10299;var statearr_10300_10390 = state_10286;(statearr_10300_10390[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10286);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10391 = state_10286;
state_10286 = G__10391;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_10286){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_10286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___10383,___$1))
})();var state__6250__auto__ = (function (){var statearr_10301 = f__6249__auto__.call(null);(statearr_10301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___10383);
return statearr_10301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___10383,___$1))
);
var c_10392 = new cljs.core.Keyword(null,"loop-create","loop-create",2966435767).cljs$core$IFn$_invoke$arity$1(self__.opts);var c__6248__auto___10393 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___10393,c_10392,___$1){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___10393,c_10392,___$1){
return (function (state_10327){var state_val_10328 = (state_10327[1]);if((state_val_10328 === 8))
{var inst_10305 = (state_10327[7]);var inst_10307 = (state_10327[8]);var inst_10314 = (state_10327[2]);var inst_10315 = om.core.get_props.call(null,self__.owner);var inst_10316 = [new cljs.core.Keyword(null,"loops","loops",1117061569)];var inst_10317 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10316,null));var inst_10318 = (function (){var new_loop = inst_10307;var insertion_id = inst_10305;return ((function (new_loop,insertion_id,inst_10305,inst_10307,inst_10314,inst_10315,inst_10316,inst_10317,state_val_10328,c__6248__auto___10393,c_10392,___$1){
return (function (p1__10262_SHARP_){return session.session.loop_insert.call(null,p1__10262_SHARP_,insertion_id,new_loop);
});
;})(new_loop,insertion_id,inst_10305,inst_10307,inst_10314,inst_10315,inst_10316,inst_10317,state_val_10328,c__6248__auto___10393,c_10392,___$1))
})();var inst_10319 = om.core.transact_BANG_.call(null,inst_10315,inst_10317,inst_10318);var state_10327__$1 = (function (){var statearr_10329 = state_10327;(statearr_10329[9] = inst_10314);
(statearr_10329[10] = inst_10319);
return statearr_10329;
})();var statearr_10330_10394 = state_10327__$1;(statearr_10330_10394[2] = null);
(statearr_10330_10394[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10328 === 7))
{var inst_10305 = (state_10327[7]);var inst_10307 = (state_10327[8]);var inst_10305__$1 = (state_10327[2]);var inst_10306 = session.session.new_id.call(null);var inst_10307__$1 = (new session.datatypes.Loop(inst_10306,"",new cljs.core.Keyword(null,"default","default",2558708147)));var inst_10308 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_10309 = [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"new-id","new-id",4259978202)];var inst_10310 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_10307__$1);var inst_10311 = [new cljs.core.Keyword(null,"insert-loop","insert-loop",864347306),inst_10305__$1,inst_10310];var inst_10312 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10309,inst_10311);var state_10327__$1 = (function (){var statearr_10331 = state_10327;(statearr_10331[7] = inst_10305__$1);
(statearr_10331[8] = inst_10307__$1);
return statearr_10331;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10327__$1,8,inst_10308,inst_10312);
} else
{if((state_val_10328 === 6))
{var inst_10323 = (state_10327[2]);var state_10327__$1 = state_10327;var statearr_10332_10395 = state_10327__$1;(statearr_10332_10395[2] = inst_10323);
(statearr_10332_10395[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10328 === 5))
{var state_10327__$1 = state_10327;var statearr_10333_10396 = state_10327__$1;(statearr_10333_10396[2] = null);
(statearr_10333_10396[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10328 === 4))
{var state_10327__$1 = state_10327;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10327__$1,7,c_10392);
} else
{if((state_val_10328 === 3))
{var inst_10325 = (state_10327[2]);var state_10327__$1 = state_10327;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10327__$1,inst_10325);
} else
{if((state_val_10328 === 2))
{var state_10327__$1 = state_10327;if(true)
{var statearr_10334_10397 = state_10327__$1;(statearr_10334_10397[1] = 4);
} else
{var statearr_10335_10398 = state_10327__$1;(statearr_10335_10398[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10328 === 1))
{var state_10327__$1 = state_10327;var statearr_10336_10399 = state_10327__$1;(statearr_10336_10399[2] = null);
(statearr_10336_10399[1] = 2);
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
});})(c__6248__auto___10393,c_10392,___$1))
;return ((function (switch__6233__auto__,c__6248__auto___10393,c_10392,___$1){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_10340 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10340[0] = state_machine__6234__auto__);
(statearr_10340[1] = 1);
return statearr_10340;
});
var state_machine__6234__auto____1 = (function (state_10327){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_10327);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e10341){if((e10341 instanceof Object))
{var ex__6237__auto__ = e10341;var statearr_10342_10400 = state_10327;(statearr_10342_10400[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10327);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10401 = state_10327;
state_10327 = G__10401;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_10327){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_10327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___10393,c_10392,___$1))
})();var state__6250__auto__ = (function (){var statearr_10343 = f__6249__auto__.call(null);(statearr_10343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___10393);
return statearr_10343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___10393,c_10392,___$1))
);
var c = new cljs.core.Keyword(null,"loop-delete","loop-delete",2983271526).cljs$core$IFn$_invoke$arity$1(self__.opts);var c__6248__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto__,c,___$1){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto__,c,___$1){
return (function (state_10366){var state_val_10367 = (state_10366[1]);if((state_val_10367 === 8))
{var inst_10347 = (state_10366[7]);var inst_10353 = (state_10366[2]);var inst_10354 = om.core.get_props.call(null,self__.owner);var inst_10355 = [new cljs.core.Keyword(null,"loops","loops",1117061569)];var inst_10356 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10355,null));var inst_10357 = (function (){var deletion_id = inst_10347;return ((function (deletion_id,inst_10347,inst_10353,inst_10354,inst_10355,inst_10356,state_val_10367,c__6248__auto__,c,___$1){
return (function (p1__10263_SHARP_){return session.session.loop_delete.call(null,p1__10263_SHARP_,deletion_id);
});
;})(deletion_id,inst_10347,inst_10353,inst_10354,inst_10355,inst_10356,state_val_10367,c__6248__auto__,c,___$1))
})();var inst_10358 = om.core.transact_BANG_.call(null,inst_10354,inst_10356,inst_10357);var state_10366__$1 = (function (){var statearr_10368 = state_10366;(statearr_10368[8] = inst_10358);
(statearr_10368[9] = inst_10353);
return statearr_10368;
})();var statearr_10369_10402 = state_10366__$1;(statearr_10369_10402[2] = null);
(statearr_10369_10402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10367 === 7))
{var inst_10347 = (state_10366[7]);var inst_10347__$1 = (state_10366[2]);var inst_10348 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_10349 = [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_10350 = [new cljs.core.Keyword(null,"delete-loop","delete-loop",4140640504),inst_10347__$1];var inst_10351 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10349,inst_10350);var state_10366__$1 = (function (){var statearr_10370 = state_10366;(statearr_10370[7] = inst_10347__$1);
return statearr_10370;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10366__$1,8,inst_10348,inst_10351);
} else
{if((state_val_10367 === 6))
{var inst_10362 = (state_10366[2]);var state_10366__$1 = state_10366;var statearr_10371_10403 = state_10366__$1;(statearr_10371_10403[2] = inst_10362);
(statearr_10371_10403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10367 === 5))
{var state_10366__$1 = state_10366;var statearr_10372_10404 = state_10366__$1;(statearr_10372_10404[2] = null);
(statearr_10372_10404[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10367 === 4))
{var state_10366__$1 = state_10366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10366__$1,7,c);
} else
{if((state_val_10367 === 3))
{var inst_10364 = (state_10366[2]);var state_10366__$1 = state_10366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10366__$1,inst_10364);
} else
{if((state_val_10367 === 2))
{var state_10366__$1 = state_10366;if(true)
{var statearr_10373_10405 = state_10366__$1;(statearr_10373_10405[1] = 4);
} else
{var statearr_10374_10406 = state_10366__$1;(statearr_10374_10406[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10367 === 1))
{var state_10366__$1 = state_10366;var statearr_10375_10407 = state_10366__$1;(statearr_10375_10407[2] = null);
(statearr_10375_10407[1] = 2);
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
var state_machine__6234__auto____0 = (function (){var statearr_10379 = [null,null,null,null,null,null,null,null,null,null];(statearr_10379[0] = state_machine__6234__auto__);
(statearr_10379[1] = 1);
return statearr_10379;
});
var state_machine__6234__auto____1 = (function (state_10366){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_10366);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e10380){if((e10380 instanceof Object))
{var ex__6237__auto__ = e10380;var statearr_10381_10408 = state_10366;(statearr_10381_10408[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10366);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10409 = state_10366;
state_10366 = G__10409;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_10366){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_10366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__,c,___$1))
})();var state__6250__auto__ = (function (){var statearr_10382 = f__6249__auto__.call(null);(statearr_10382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_10382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto__,c,___$1))
);
return c__6248__auto__;
});
session.session.t10270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10272){var self__ = this;
var _10272__$1 = this;return self__.meta10271;
});
session.session.t10270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10272,meta10271__$1){var self__ = this;
var _10272__$1 = this;return (new session.session.t10270(self__.opts,self__.owner,self__.cursor,meta10271__$1));
});
session.session.__GT_t10270 = (function __GT_t10270(opts__$1,owner__$1,cursor__$1,meta10271){return (new session.session.t10270(opts__$1,owner__$1,cursor__$1,meta10271));
});
}
return (new session.session.t10270(opts,owner,cursor,null));
})], true, false);

//# sourceMappingURL=session.js.map