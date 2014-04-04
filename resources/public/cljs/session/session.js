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
session.session.insert_output = (function insert_output(loops,newout){var i = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__10394_SHARP_,p2__10393_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(newout),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p2__10393_SHARP_)))
{return p1__10394_SHARP_;
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
var G__10395 = cljs.core.conj.call(null,l,x);
var G__10396 = cljs.core.next.call(null,r);
l = G__10395;
r = G__10396;
continue;
}
}
break;
}
}
});
session.session.loop_delete = (function loop_delete(loops,id){return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__10397_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__10397_SHARP_),id);
}),loops));
});
session.session.handle_kernel_response = (function (){var method_table__4336__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4338__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4340__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-kernel-response",((function (method_table__4336__auto__,prefer_table__4337__auto__,method_cache__4338__auto__,cached_hierarchy__4339__auto__,hierarchy__4340__auto__){
return (function (response,cursor,owner,opts){return new cljs.core.Keyword(null,"op","op",1013907795).cljs$core$IFn$_invoke$arity$1(response);
});})(method_table__4336__auto__,prefer_table__4337__auto__,method_cache__4338__auto__,cached_hierarchy__4339__auto__,hierarchy__4340__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4340__auto__,method_table__4336__auto__,prefer_table__4337__auto__,method_cache__4338__auto__,cached_hierarchy__4339__auto__));
})();
cljs.core._add_method.call(null,session.session.handle_kernel_response,new cljs.core.Keyword(null,"eval-response","eval-response",1466223044),(function (response,cursor,owner,opts){return om.core.transact_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loops","loops",1117061569)], null),(function (p1__10398_SHARP_){return session.session.insert_output.call(null,p1__10398_SHARP_,response);
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
session.session.session_top = (function session_top(cursor,owner,p__10400){var map__10407 = p__10400;var map__10407__$1 = ((cljs.core.seq_QMARK_.call(null,map__10407))?cljs.core.apply.call(null,cljs.core.hash_map,map__10407):map__10407);var opts = map__10407__$1;var on_edit = cljs.core.get.call(null,map__10407__$1,new cljs.core.Keyword(null,"on-edit","on-edit",3936438442));if(typeof session.session.t10408 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10408 = (function (on_edit,opts,map__10407,p__10400,owner,cursor,session_top,meta10409){
this.on_edit = on_edit;
this.opts = opts;
this.map__10407 = map__10407;
this.p__10400 = p__10400;
this.owner = owner;
this.cursor = cursor;
this.session_top = session_top;
this.meta10409 = meta10409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10408.cljs$lang$type = true;
session.session.t10408.cljs$lang$ctorStr = "session.session/t10408";
session.session.t10408.cljs$lang$ctorPrWriter = ((function (map__10407,map__10407__$1,opts,on_edit){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.session/t10408");
});})(map__10407,map__10407__$1,opts,on_edit))
;
session.session.t10408.prototype.om$core$IRenderState$ = true;
session.session.t10408.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10407,map__10407__$1,opts,on_edit){
return (function (_,p__10411){var self__ = this;
var map__10412 = p__10411;var map__10412__$1 = ((cljs.core.seq_QMARK_.call(null,map__10412))?cljs.core.apply.call(null,cljs.core.hash_map,map__10412):map__10412);var editing = cljs.core.get.call(null,map__10412__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var edit_text = cljs.core.get.call(null,map__10412__$1,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));var ___$1 = this;var name = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"name","name",1017277949)], null));var id = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)], null)).uuid;return om.dom.input.call(null,{"onBlur": ((function (name,id,___$1,map__10412,map__10412__$1,editing,edit_text,map__10407,map__10407__$1,opts,on_edit){
return (function (e){return session.session.end_edit.call(null,name,self__.owner,self__.on_edit);
});})(name,id,___$1,map__10412,map__10412__$1,editing,edit_text,map__10407,map__10407__$1,opts,on_edit))
, "onKeyPress": ((function (name,id,___$1,map__10412,map__10412__$1,editing,edit_text,map__10407,map__10407__$1,opts,on_edit){
return (function (p1__10399_SHARP_){if((p1__10399_SHARP_.keyCode === 13))
{om.core.get_node.call(null,self__.owner,"theInput").blur();
return session.session.end_edit.call(null,name,self__.owner,self__.on_edit);
} else
{return null;
}
});})(name,id,___$1,map__10412,map__10412__$1,editing,edit_text,map__10407,map__10407__$1,opts,on_edit))
, "onChange": ((function (name,id,___$1,map__10412,map__10412__$1,editing,edit_text,map__10407,map__10407__$1,opts,on_edit){
return (function (e){return om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"name","name",1017277949)], null),((function (name,id,___$1,map__10412,map__10412__$1,editing,edit_text,map__10407,map__10407__$1,opts,on_edit){
return (function (___$2){return e.target.value;
});})(name,id,___$1,map__10412,map__10412__$1,editing,edit_text,map__10407,map__10407__$1,opts,on_edit))
);
});})(name,id,___$1,map__10412,map__10412__$1,editing,edit_text,map__10407,map__10407__$1,opts,on_edit))
, "value": (cljs.core.truth_(name)?name:id), "style": {"margin-left": "-1px", "padding": "inherit", "fontFamily": "Georgia", "fontSize": "18px", "border": "none", "width": "90%", "outline": "none"}, "ref": "theInput"});
});})(map__10407,map__10407__$1,opts,on_edit))
;
session.session.t10408.prototype.om$core$IInitState$ = true;
session.session.t10408.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10407,map__10407__$1,opts,on_edit){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});})(map__10407,map__10407__$1,opts,on_edit))
;
session.session.t10408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10407,map__10407__$1,opts,on_edit){
return (function (_10410){var self__ = this;
var _10410__$1 = this;return self__.meta10409;
});})(map__10407,map__10407__$1,opts,on_edit))
;
session.session.t10408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10407,map__10407__$1,opts,on_edit){
return (function (_10410,meta10409__$1){var self__ = this;
var _10410__$1 = this;return (new session.session.t10408(self__.on_edit,self__.opts,self__.map__10407,self__.p__10400,self__.owner,self__.cursor,self__.session_top,meta10409__$1));
});})(map__10407,map__10407__$1,opts,on_edit))
;
session.session.__GT_t10408 = ((function (map__10407,map__10407__$1,opts,on_edit){
return (function __GT_t10408(on_edit__$1,opts__$1,map__10407__$2,p__10400__$1,owner__$1,cursor__$1,session_top__$1,meta10409){return (new session.session.t10408(on_edit__$1,opts__$1,map__10407__$2,p__10400__$1,owner__$1,cursor__$1,session_top__$1,meta10409));
});})(map__10407,map__10407__$1,opts,on_edit))
;
}
return (new session.session.t10408(on_edit,opts,map__10407__$1,p__10400,owner,cursor,session_top,null));
});
session.session.session_renderers = new cljs.core.PersistentArrayMap.fromArray([session.datatypes.SessionObject,(function (cursor,owner,opts){if(typeof session.session.t10418 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10418 = (function (opts,owner,cursor,meta10419){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta10419 = meta10419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10418.cljs$lang$type = true;
session.session.t10418.cljs$lang$ctorStr = "session.session/t10418";
session.session.t10418.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.session/t10418");
});
session.session.t10418.prototype.om$core$IRender$ = true;
session.session.t10418.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span(null,"#session/Object ",om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder-raw","builder-raw",3779185256)).call(null,cljs.core.type.call(null,cljs.core.PersistentArrayMap.EMPTY),self__.cursor));
});
session.session.t10418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10420){var self__ = this;
var _10420__$1 = this;return self__.meta10419;
});
session.session.t10418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10420,meta10419__$1){var self__ = this;
var _10420__$1 = this;return (new session.session.t10418(self__.opts,self__.owner,self__.cursor,meta10419__$1));
});
session.session.__GT_t10418 = (function __GT_t10418(opts__$1,owner__$1,cursor__$1,meta10419){return (new session.session.t10418(opts__$1,owner__$1,cursor__$1,meta10419));
});
}
return (new session.session.t10418(opts,owner,cursor,null));
}),session.datatypes.Session,(function (cursor,owner,opts){if(typeof session.session.t10421 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t10421 = (function (opts,owner,cursor,meta10422){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta10422 = meta10422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t10421.cljs$lang$type = true;
session.session.t10421.cljs$lang$ctorStr = "session.session/t10421";
session.session.t10421.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.session/t10421");
});
session.session.t10421.prototype.om$core$IRender$ = true;
session.session.t10421.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,(function (){var id = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)], null));var p = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);return om.core.build.call(null,session.session.session_top,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",3936438442),((function (id,p,___$1){
return (function (p1__10415_SHARP_){return session.session.on_edit.call(null,p1__10415_SHARP_,id,p);
});})(id,p,___$1))
], null)], null));
})(),om.core.build.call(null,session.loopcreator.new_loop_creator,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"session-top","session-top",990277904),new cljs.core.Keyword(null,"chan","chan",1016956612),new cljs.core.Keyword(null,"loop-create","loop-create",2966435767).cljs$core$IFn$_invoke$arity$1(self__.opts)], null),self__.cursor)),cljs.core.map.call(null,((function (___$1){
return (function (p1__10416_SHARP_,p2__10417_SHARP_){return om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder","builder",1244848909)).call(null,p1__10416_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword("om.core","index","om.core/index",3166146514),p2__10417_SHARP_,new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));
});})(___$1))
,new cljs.core.Keyword(null,"loops","loops",1117061569).cljs$core$IFn$_invoke$arity$1(self__.cursor),cljs.core.range.call(null)));
});
session.session.t10421.prototype.om$core$IWillMount$ = true;
session.session.t10421.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6248__auto___10534 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___10534,___$1){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___10534,___$1){
return (function (state_10437){var state_val_10438 = (state_10437[1]);if((state_val_10438 === 7))
{var inst_10428 = (state_10437[2]);var inst_10429 = session.session.handle_kernel_response.call(null,inst_10428,self__.cursor,self__.owner,self__.opts);var state_10437__$1 = (function (){var statearr_10439 = state_10437;(statearr_10439[7] = inst_10429);
return statearr_10439;
})();var statearr_10440_10535 = state_10437__$1;(statearr_10440_10535[2] = null);
(statearr_10440_10535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10438 === 6))
{var inst_10433 = (state_10437[2]);var state_10437__$1 = state_10437;var statearr_10441_10536 = state_10437__$1;(statearr_10441_10536[2] = inst_10433);
(statearr_10441_10536[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10438 === 5))
{var state_10437__$1 = state_10437;var statearr_10442_10537 = state_10437__$1;(statearr_10442_10537[2] = null);
(statearr_10442_10537[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10438 === 4))
{var inst_10426 = new cljs.core.Keyword(null,"kernel-receive","kernel-receive",2518943941).cljs$core$IFn$_invoke$arity$1(self__.opts);var state_10437__$1 = state_10437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10437__$1,7,inst_10426);
} else
{if((state_val_10438 === 3))
{var inst_10435 = (state_10437[2]);var state_10437__$1 = state_10437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10437__$1,inst_10435);
} else
{if((state_val_10438 === 2))
{var state_10437__$1 = state_10437;if(true)
{var statearr_10443_10538 = state_10437__$1;(statearr_10443_10538[1] = 4);
} else
{var statearr_10444_10539 = state_10437__$1;(statearr_10444_10539[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10438 === 1))
{var state_10437__$1 = state_10437;var statearr_10445_10540 = state_10437__$1;(statearr_10445_10540[2] = null);
(statearr_10445_10540[1] = 2);
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
});})(c__6248__auto___10534,___$1))
;return ((function (switch__6233__auto__,c__6248__auto___10534,___$1){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_10449 = [null,null,null,null,null,null,null,null];(statearr_10449[0] = state_machine__6234__auto__);
(statearr_10449[1] = 1);
return statearr_10449;
});
var state_machine__6234__auto____1 = (function (state_10437){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_10437);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e10450){if((e10450 instanceof Object))
{var ex__6237__auto__ = e10450;var statearr_10451_10541 = state_10437;(statearr_10451_10541[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10437);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10542 = state_10437;
state_10437 = G__10542;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_10437){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_10437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___10534,___$1))
})();var state__6250__auto__ = (function (){var statearr_10452 = f__6249__auto__.call(null);(statearr_10452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___10534);
return statearr_10452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___10534,___$1))
);
var c_10543 = new cljs.core.Keyword(null,"loop-create","loop-create",2966435767).cljs$core$IFn$_invoke$arity$1(self__.opts);var c__6248__auto___10544 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___10544,c_10543,___$1){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___10544,c_10543,___$1){
return (function (state_10478){var state_val_10479 = (state_10478[1]);if((state_val_10479 === 8))
{var inst_10456 = (state_10478[7]);var inst_10458 = (state_10478[8]);var inst_10465 = (state_10478[2]);var inst_10466 = om.core.get_props.call(null,self__.owner);var inst_10467 = [new cljs.core.Keyword(null,"loops","loops",1117061569)];var inst_10468 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10467,null));var inst_10469 = (function (){var new_loop = inst_10458;var insertion_id = inst_10456;return ((function (new_loop,insertion_id,inst_10456,inst_10458,inst_10465,inst_10466,inst_10467,inst_10468,state_val_10479,c__6248__auto___10544,c_10543,___$1){
return (function (p1__10413_SHARP_){return session.session.loop_insert.call(null,p1__10413_SHARP_,insertion_id,new_loop);
});
;})(new_loop,insertion_id,inst_10456,inst_10458,inst_10465,inst_10466,inst_10467,inst_10468,state_val_10479,c__6248__auto___10544,c_10543,___$1))
})();var inst_10470 = om.core.transact_BANG_.call(null,inst_10466,inst_10468,inst_10469);var state_10478__$1 = (function (){var statearr_10480 = state_10478;(statearr_10480[9] = inst_10470);
(statearr_10480[10] = inst_10465);
return statearr_10480;
})();var statearr_10481_10545 = state_10478__$1;(statearr_10481_10545[2] = null);
(statearr_10481_10545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10479 === 7))
{var inst_10456 = (state_10478[7]);var inst_10458 = (state_10478[8]);var inst_10456__$1 = (state_10478[2]);var inst_10457 = session.session.new_id.call(null);var inst_10458__$1 = (new session.datatypes.Loop(inst_10457,"",new cljs.core.Keyword(null,"default","default",2558708147)));var inst_10459 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_10460 = [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"new-id","new-id",4259978202)];var inst_10461 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_10458__$1);var inst_10462 = [new cljs.core.Keyword(null,"insert-loop","insert-loop",864347306),inst_10456__$1,inst_10461];var inst_10463 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10460,inst_10462);var state_10478__$1 = (function (){var statearr_10482 = state_10478;(statearr_10482[7] = inst_10456__$1);
(statearr_10482[8] = inst_10458__$1);
return statearr_10482;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10478__$1,8,inst_10459,inst_10463);
} else
{if((state_val_10479 === 6))
{var inst_10474 = (state_10478[2]);var state_10478__$1 = state_10478;var statearr_10483_10546 = state_10478__$1;(statearr_10483_10546[2] = inst_10474);
(statearr_10483_10546[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10479 === 5))
{var state_10478__$1 = state_10478;var statearr_10484_10547 = state_10478__$1;(statearr_10484_10547[2] = null);
(statearr_10484_10547[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10479 === 4))
{var state_10478__$1 = state_10478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10478__$1,7,c_10543);
} else
{if((state_val_10479 === 3))
{var inst_10476 = (state_10478[2]);var state_10478__$1 = state_10478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10478__$1,inst_10476);
} else
{if((state_val_10479 === 2))
{var state_10478__$1 = state_10478;if(true)
{var statearr_10485_10548 = state_10478__$1;(statearr_10485_10548[1] = 4);
} else
{var statearr_10486_10549 = state_10478__$1;(statearr_10486_10549[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10479 === 1))
{var state_10478__$1 = state_10478;var statearr_10487_10550 = state_10478__$1;(statearr_10487_10550[2] = null);
(statearr_10487_10550[1] = 2);
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
});})(c__6248__auto___10544,c_10543,___$1))
;return ((function (switch__6233__auto__,c__6248__auto___10544,c_10543,___$1){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_10491 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10491[0] = state_machine__6234__auto__);
(statearr_10491[1] = 1);
return statearr_10491;
});
var state_machine__6234__auto____1 = (function (state_10478){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_10478);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e10492){if((e10492 instanceof Object))
{var ex__6237__auto__ = e10492;var statearr_10493_10551 = state_10478;(statearr_10493_10551[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10492;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10552 = state_10478;
state_10478 = G__10552;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_10478){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_10478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___10544,c_10543,___$1))
})();var state__6250__auto__ = (function (){var statearr_10494 = f__6249__auto__.call(null);(statearr_10494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___10544);
return statearr_10494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___10544,c_10543,___$1))
);
var c = new cljs.core.Keyword(null,"loop-delete","loop-delete",2983271526).cljs$core$IFn$_invoke$arity$1(self__.opts);var c__6248__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto__,c,___$1){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto__,c,___$1){
return (function (state_10517){var state_val_10518 = (state_10517[1]);if((state_val_10518 === 8))
{var inst_10498 = (state_10517[7]);var inst_10504 = (state_10517[2]);var inst_10505 = om.core.get_props.call(null,self__.owner);var inst_10506 = [new cljs.core.Keyword(null,"loops","loops",1117061569)];var inst_10507 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10506,null));var inst_10508 = (function (){var deletion_id = inst_10498;return ((function (deletion_id,inst_10498,inst_10504,inst_10505,inst_10506,inst_10507,state_val_10518,c__6248__auto__,c,___$1){
return (function (p1__10414_SHARP_){return session.session.loop_delete.call(null,p1__10414_SHARP_,deletion_id);
});
;})(deletion_id,inst_10498,inst_10504,inst_10505,inst_10506,inst_10507,state_val_10518,c__6248__auto__,c,___$1))
})();var inst_10509 = om.core.transact_BANG_.call(null,inst_10505,inst_10507,inst_10508);var state_10517__$1 = (function (){var statearr_10519 = state_10517;(statearr_10519[8] = inst_10504);
(statearr_10519[9] = inst_10509);
return statearr_10519;
})();var statearr_10520_10553 = state_10517__$1;(statearr_10520_10553[2] = null);
(statearr_10520_10553[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10518 === 7))
{var inst_10498 = (state_10517[7]);var inst_10498__$1 = (state_10517[2]);var inst_10499 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_10500 = [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_10501 = [new cljs.core.Keyword(null,"delete-loop","delete-loop",4140640504),inst_10498__$1];var inst_10502 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10500,inst_10501);var state_10517__$1 = (function (){var statearr_10521 = state_10517;(statearr_10521[7] = inst_10498__$1);
return statearr_10521;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10517__$1,8,inst_10499,inst_10502);
} else
{if((state_val_10518 === 6))
{var inst_10513 = (state_10517[2]);var state_10517__$1 = state_10517;var statearr_10522_10554 = state_10517__$1;(statearr_10522_10554[2] = inst_10513);
(statearr_10522_10554[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10518 === 5))
{var state_10517__$1 = state_10517;var statearr_10523_10555 = state_10517__$1;(statearr_10523_10555[2] = null);
(statearr_10523_10555[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10518 === 4))
{var state_10517__$1 = state_10517;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10517__$1,7,c);
} else
{if((state_val_10518 === 3))
{var inst_10515 = (state_10517[2]);var state_10517__$1 = state_10517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10517__$1,inst_10515);
} else
{if((state_val_10518 === 2))
{var state_10517__$1 = state_10517;if(true)
{var statearr_10524_10556 = state_10517__$1;(statearr_10524_10556[1] = 4);
} else
{var statearr_10525_10557 = state_10517__$1;(statearr_10525_10557[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10518 === 1))
{var state_10517__$1 = state_10517;var statearr_10526_10558 = state_10517__$1;(statearr_10526_10558[2] = null);
(statearr_10526_10558[1] = 2);
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
var state_machine__6234__auto____0 = (function (){var statearr_10530 = [null,null,null,null,null,null,null,null,null,null];(statearr_10530[0] = state_machine__6234__auto__);
(statearr_10530[1] = 1);
return statearr_10530;
});
var state_machine__6234__auto____1 = (function (state_10517){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_10517);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e10531){if((e10531 instanceof Object))
{var ex__6237__auto__ = e10531;var statearr_10532_10559 = state_10517;(statearr_10532_10559[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10517);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10531;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10560 = state_10517;
state_10517 = G__10560;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_10517){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_10517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__,c,___$1))
})();var state__6250__auto__ = (function (){var statearr_10533 = f__6249__auto__.call(null);(statearr_10533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_10533;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto__,c,___$1))
);
return c__6248__auto__;
});
session.session.t10421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10423){var self__ = this;
var _10423__$1 = this;return self__.meta10422;
});
session.session.t10421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10423,meta10422__$1){var self__ = this;
var _10423__$1 = this;return (new session.session.t10421(self__.opts,self__.owner,self__.cursor,meta10422__$1));
});
session.session.__GT_t10421 = (function __GT_t10421(opts__$1,owner__$1,cursor__$1,meta10422){return (new session.session.t10421(opts__$1,owner__$1,cursor__$1,meta10422));
});
}
return (new session.session.t10421(opts,owner,cursor,null));
})], true, false);

//# sourceMappingURL=session.js.map