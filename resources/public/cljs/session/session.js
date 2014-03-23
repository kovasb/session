// Compiled by ClojureScript 0.0-2156
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
session.session.insert_output = (function insert_output(loops,newout){var i = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__9894_SHARP_,p2__9893_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(newout),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p2__9893_SHARP_)))
{return p1__9894_SHARP_;
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
var G__9895 = cljs.core.conj.call(null,l,x);
var G__9896 = cljs.core.next.call(null,r);
l = G__9895;
r = G__9896;
continue;
}
}
break;
}
}
});
session.session.loop_delete = (function loop_delete(loops,id){return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__9897_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__9897_SHARP_),id);
}),loops));
});
session.session.handle_kernel_response = (function (){var method_table__4261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-kernel-response",(function (response,cursor,owner,opts){return new cljs.core.Keyword(null,"op","op",1013907795).cljs$core$IFn$_invoke$arity$1(response);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
cljs.core._add_method.call(null,session.session.handle_kernel_response,new cljs.core.Keyword(null,"eval-response","eval-response",1466223044),(function (response,cursor,owner,opts){return om.core.transact_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loops","loops",1117061569)], null),session.session.insert_output,response);
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
session.session.on_edit = (function on_edit(title,id,send){console.log("done edit");
return cljs.core.async.put_BANG_.call(null,send,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"update-name","update-name",4689063041),new cljs.core.Keyword(null,"name","name",1017277949),title,new cljs.core.Keyword(null,"id","id",1013907597),id], null));
});
session.session.session_top = (function session_top(cursor,owner,p__9899){var map__9906 = p__9899;var map__9906__$1 = ((cljs.core.seq_QMARK_.call(null,map__9906))?cljs.core.apply.call(null,cljs.core.hash_map,map__9906):map__9906);var opts = map__9906__$1;var on_edit = cljs.core.get.call(null,map__9906__$1,new cljs.core.Keyword(null,"on-edit","on-edit",3936438442));if(typeof session.session.t9907 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t9907 = (function (on_edit,opts,map__9906,p__9899,owner,cursor,session_top,meta9908){
this.on_edit = on_edit;
this.opts = opts;
this.map__9906 = map__9906;
this.p__9899 = p__9899;
this.owner = owner;
this.cursor = cursor;
this.session_top = session_top;
this.meta9908 = meta9908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t9907.cljs$lang$type = true;
session.session.t9907.cljs$lang$ctorStr = "session.session/t9907";
session.session.t9907.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"session.session/t9907");
});
session.session.t9907.prototype.om$core$IRenderState$ = true;
session.session.t9907.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9910){var self__ = this;
var map__9911 = p__9910;var map__9911__$1 = ((cljs.core.seq_QMARK_.call(null,map__9911))?cljs.core.apply.call(null,cljs.core.hash_map,map__9911):map__9911);var editing = cljs.core.get.call(null,map__9911__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var edit_text = cljs.core.get.call(null,map__9911__$1,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));var ___$1 = this;var name = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"name","name",1017277949)], null));var id = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)], null)).uuid;return om.dom.input.call(null,{"onBlur": (function (e){return session.session.end_edit.call(null,name,self__.owner,self__.on_edit);
}), "onKeyPress": (function (p1__9898_SHARP_){if((p1__9898_SHARP_.keyCode === 13))
{om.core.get_node.call(null,self__.owner,"theInput").blur();
return session.session.end_edit.call(null,name,self__.owner,self__.on_edit);
} else
{return null;
}
}), "onChange": (function (e){return om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"name","name",1017277949)], null),(function (___$2){return e.target.value;
}));
}), "value": (cljs.core.truth_(name)?name:id), "style": {"margin-left": "-1px", "padding": "inherit", "fontFamily": "Georgia", "fontSize": "18px", "border": "none", "width": "90%", "outline": "none"}, "ref": "theInput"});
});
session.session.t9907.prototype.om$core$IInitState$ = true;
session.session.t9907.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});
session.session.t9907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9909){var self__ = this;
var _9909__$1 = this;return self__.meta9908;
});
session.session.t9907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9909,meta9908__$1){var self__ = this;
var _9909__$1 = this;return (new session.session.t9907(self__.on_edit,self__.opts,self__.map__9906,self__.p__9899,self__.owner,self__.cursor,self__.session_top,meta9908__$1));
});
session.session.__GT_t9907 = (function __GT_t9907(on_edit__$1,opts__$1,map__9906__$2,p__9899__$1,owner__$1,cursor__$1,session_top__$1,meta9908){return (new session.session.t9907(on_edit__$1,opts__$1,map__9906__$2,p__9899__$1,owner__$1,cursor__$1,session_top__$1,meta9908));
});
}
return (new session.session.t9907(on_edit,opts,map__9906__$1,p__9899,owner,cursor,session_top,null));
});
session.session.session_renderers = new cljs.core.PersistentArrayMap.fromArray([session.datatypes.SessionObject,(function (cursor,owner,opts){if(typeof session.session.t9915 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t9915 = (function (opts,owner,cursor,meta9916){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9916 = meta9916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t9915.cljs$lang$type = true;
session.session.t9915.cljs$lang$ctorStr = "session.session/t9915";
session.session.t9915.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"session.session/t9915");
});
session.session.t9915.prototype.om$core$IRender$ = true;
session.session.t9915.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span(null,"#session/Object ",om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder-raw","builder-raw",3779185256)).call(null,cljs.core.type.call(null,cljs.core.PersistentArrayMap.EMPTY),self__.cursor));
});
session.session.t9915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9917){var self__ = this;
var _9917__$1 = this;return self__.meta9916;
});
session.session.t9915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9917,meta9916__$1){var self__ = this;
var _9917__$1 = this;return (new session.session.t9915(self__.opts,self__.owner,self__.cursor,meta9916__$1));
});
session.session.__GT_t9915 = (function __GT_t9915(opts__$1,owner__$1,cursor__$1,meta9916){return (new session.session.t9915(opts__$1,owner__$1,cursor__$1,meta9916));
});
}
return (new session.session.t9915(opts,owner,cursor,null));
}),session.datatypes.Session,(function (cursor,owner,opts){if(typeof session.session.t9918 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.session.t9918 = (function (opts,owner,cursor,meta9919){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9919 = meta9919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.session.t9918.cljs$lang$type = true;
session.session.t9918.cljs$lang$ctorStr = "session.session/t9918";
session.session.t9918.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"session.session/t9918");
});
session.session.t9918.prototype.om$core$IRender$ = true;
session.session.t9918.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,(function (){var id = cljs.core.get_in.call(null,om.core.value.call(null,self__.cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)], null));var p = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);return om.core.build.call(null,session.session.session_top,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",3936438442),(function (p1__9912_SHARP_){return session.session.on_edit.call(null,p1__9912_SHARP_,id,p);
})], null)], null));
})(),om.core.build.call(null,session.loopcreator.new_loop_creator,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"session-top","session-top",990277904),new cljs.core.Keyword(null,"chan","chan",1016956612),new cljs.core.Keyword(null,"loop-create","loop-create",2966435767).cljs$core$IFn$_invoke$arity$1(self__.opts)], null),self__.cursor)),cljs.core.map.call(null,(function (p1__9913_SHARP_,p2__9914_SHARP_){return om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder","builder",1244848909)).call(null,p1__9913_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword("om.core","index","om.core/index",3166146514),p2__9914_SHARP_,new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));
}),new cljs.core.Keyword(null,"loops","loops",1117061569).cljs$core$IFn$_invoke$arity$1(self__.cursor),cljs.core.range.call(null)));
});
session.session.t9918.prototype.om$core$IWillMount$ = true;
session.session.t9918.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6176__auto___10029 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_9934){var state_val_9935 = (state_9934[1]);if((state_val_9935 === 7))
{var inst_9925 = (state_9934[2]);var inst_9926 = session.session.handle_kernel_response.call(null,inst_9925,self__.cursor,self__.owner,self__.opts);var state_9934__$1 = (function (){var statearr_9936 = state_9934;(statearr_9936[7] = inst_9926);
return statearr_9936;
})();var statearr_9937_10030 = state_9934__$1;(statearr_9937_10030[2] = null);
(statearr_9937_10030[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9935 === 6))
{var inst_9930 = (state_9934[2]);var state_9934__$1 = state_9934;var statearr_9938_10031 = state_9934__$1;(statearr_9938_10031[2] = inst_9930);
(statearr_9938_10031[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9935 === 5))
{var state_9934__$1 = state_9934;var statearr_9939_10032 = state_9934__$1;(statearr_9939_10032[2] = null);
(statearr_9939_10032[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9935 === 4))
{var inst_9923 = new cljs.core.Keyword(null,"kernel-receive","kernel-receive",2518943941).cljs$core$IFn$_invoke$arity$1(self__.opts);var state_9934__$1 = state_9934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9934__$1,7,inst_9923);
} else
{if((state_val_9935 === 3))
{var inst_9932 = (state_9934[2]);var state_9934__$1 = state_9934;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9934__$1,inst_9932);
} else
{if((state_val_9935 === 2))
{var state_9934__$1 = state_9934;if(true)
{var statearr_9940_10033 = state_9934__$1;(statearr_9940_10033[1] = 4);
} else
{var statearr_9941_10034 = state_9934__$1;(statearr_9941_10034[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9935 === 1))
{var state_9934__$1 = state_9934;var statearr_9942_10035 = state_9934__$1;(statearr_9942_10035[2] = null);
(statearr_9942_10035[1] = 2);
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
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_9946 = [null,null,null,null,null,null,null,null];(statearr_9946[0] = state_machine__6162__auto__);
(statearr_9946[1] = 1);
return statearr_9946;
});
var state_machine__6162__auto____1 = (function (state_9934){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_9934);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e9947){if((e9947 instanceof Object))
{var ex__6165__auto__ = e9947;var statearr_9948_10036 = state_9934;(statearr_9948_10036[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9934);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10037 = state_9934;
state_9934 = G__10037;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_9934){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_9934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_9949 = f__6177__auto__.call(null);(statearr_9949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto___10029);
return statearr_9949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
var c_10038 = new cljs.core.Keyword(null,"loop-create","loop-create",2966435767).cljs$core$IFn$_invoke$arity$1(self__.opts);var c__6176__auto___10039 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_9974){var state_val_9975 = (state_9974[1]);if((state_val_9975 === 8))
{var inst_9955 = (state_9974[7]);var inst_9953 = (state_9974[8]);var inst_9962 = (state_9974[2]);var inst_9963 = om.core.get_props.call(null,self__.owner);var inst_9964 = [new cljs.core.Keyword(null,"loops","loops",1117061569)];var inst_9965 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9964,null));var inst_9966 = om.core.transact_BANG_.call(null,inst_9963,inst_9965,session.session.loop_insert,inst_9953,inst_9955);var state_9974__$1 = (function (){var statearr_9976 = state_9974;(statearr_9976[9] = inst_9962);
(statearr_9976[10] = inst_9966);
return statearr_9976;
})();var statearr_9977_10040 = state_9974__$1;(statearr_9977_10040[2] = null);
(statearr_9977_10040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9975 === 7))
{var inst_9955 = (state_9974[7]);var inst_9953 = (state_9974[8]);var inst_9953__$1 = (state_9974[2]);var inst_9954 = session.session.new_id.call(null);var inst_9955__$1 = (new session.datatypes.Loop(inst_9954,"",new cljs.core.Keyword(null,"default","default",2558708147)));var inst_9956 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_9957 = [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"new-id","new-id",4259978202)];var inst_9958 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_9955__$1);var inst_9959 = [new cljs.core.Keyword(null,"insert-loop","insert-loop",864347306),inst_9953__$1,inst_9958];var inst_9960 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9957,inst_9959);var state_9974__$1 = (function (){var statearr_9978 = state_9974;(statearr_9978[7] = inst_9955__$1);
(statearr_9978[8] = inst_9953__$1);
return statearr_9978;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9974__$1,8,inst_9956,inst_9960);
} else
{if((state_val_9975 === 6))
{var inst_9970 = (state_9974[2]);var state_9974__$1 = state_9974;var statearr_9979_10041 = state_9974__$1;(statearr_9979_10041[2] = inst_9970);
(statearr_9979_10041[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9975 === 5))
{var state_9974__$1 = state_9974;var statearr_9980_10042 = state_9974__$1;(statearr_9980_10042[2] = null);
(statearr_9980_10042[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9975 === 4))
{var state_9974__$1 = state_9974;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9974__$1,7,c_10038);
} else
{if((state_val_9975 === 3))
{var inst_9972 = (state_9974[2]);var state_9974__$1 = state_9974;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9974__$1,inst_9972);
} else
{if((state_val_9975 === 2))
{var state_9974__$1 = state_9974;if(true)
{var statearr_9981_10043 = state_9974__$1;(statearr_9981_10043[1] = 4);
} else
{var statearr_9982_10044 = state_9974__$1;(statearr_9982_10044[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9975 === 1))
{var state_9974__$1 = state_9974;var statearr_9983_10045 = state_9974__$1;(statearr_9983_10045[2] = null);
(statearr_9983_10045[1] = 2);
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
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_9987 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9987[0] = state_machine__6162__auto__);
(statearr_9987[1] = 1);
return statearr_9987;
});
var state_machine__6162__auto____1 = (function (state_9974){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_9974);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e9988){if((e9988 instanceof Object))
{var ex__6165__auto__ = e9988;var statearr_9989_10046 = state_9974;(statearr_9989_10046[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9974);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9988;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10047 = state_9974;
state_9974 = G__10047;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_9974){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_9974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_9990 = f__6177__auto__.call(null);(statearr_9990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto___10039);
return statearr_9990;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
var c = new cljs.core.Keyword(null,"loop-delete","loop-delete",2983271526).cljs$core$IFn$_invoke$arity$1(self__.opts);var c__6176__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_10012){var state_val_10013 = (state_10012[1]);if((state_val_10013 === 8))
{var inst_9994 = (state_10012[7]);var inst_10000 = (state_10012[2]);var inst_10001 = om.core.get_props.call(null,self__.owner);var inst_10002 = [new cljs.core.Keyword(null,"loops","loops",1117061569)];var inst_10003 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10002,null));var inst_10004 = om.core.transact_BANG_.call(null,inst_10001,inst_10003,session.session.loop_delete,inst_9994);var state_10012__$1 = (function (){var statearr_10014 = state_10012;(statearr_10014[8] = inst_10004);
(statearr_10014[9] = inst_10000);
return statearr_10014;
})();var statearr_10015_10048 = state_10012__$1;(statearr_10015_10048[2] = null);
(statearr_10015_10048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10013 === 7))
{var inst_9994 = (state_10012[7]);var inst_9994__$1 = (state_10012[2]);var inst_9995 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_9996 = [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_9997 = [new cljs.core.Keyword(null,"delete-loop","delete-loop",4140640504),inst_9994__$1];var inst_9998 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9996,inst_9997);var state_10012__$1 = (function (){var statearr_10016 = state_10012;(statearr_10016[7] = inst_9994__$1);
return statearr_10016;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10012__$1,8,inst_9995,inst_9998);
} else
{if((state_val_10013 === 6))
{var inst_10008 = (state_10012[2]);var state_10012__$1 = state_10012;var statearr_10017_10049 = state_10012__$1;(statearr_10017_10049[2] = inst_10008);
(statearr_10017_10049[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10013 === 5))
{var state_10012__$1 = state_10012;var statearr_10018_10050 = state_10012__$1;(statearr_10018_10050[2] = null);
(statearr_10018_10050[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10013 === 4))
{var state_10012__$1 = state_10012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10012__$1,7,c);
} else
{if((state_val_10013 === 3))
{var inst_10010 = (state_10012[2]);var state_10012__$1 = state_10012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10012__$1,inst_10010);
} else
{if((state_val_10013 === 2))
{var state_10012__$1 = state_10012;if(true)
{var statearr_10019_10051 = state_10012__$1;(statearr_10019_10051[1] = 4);
} else
{var statearr_10020_10052 = state_10012__$1;(statearr_10020_10052[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10013 === 1))
{var state_10012__$1 = state_10012;var statearr_10021_10053 = state_10012__$1;(statearr_10021_10053[2] = null);
(statearr_10021_10053[1] = 2);
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
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_10025 = [null,null,null,null,null,null,null,null,null,null];(statearr_10025[0] = state_machine__6162__auto__);
(statearr_10025[1] = 1);
return statearr_10025;
});
var state_machine__6162__auto____1 = (function (state_10012){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_10012);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e10026){if((e10026 instanceof Object))
{var ex__6165__auto__ = e10026;var statearr_10027_10054 = state_10012;(statearr_10027_10054[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10026;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10055 = state_10012;
state_10012 = G__10055;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_10012){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_10012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_10028 = f__6177__auto__.call(null);(statearr_10028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto__);
return statearr_10028;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return c__6176__auto__;
});
session.session.t9918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9920){var self__ = this;
var _9920__$1 = this;return self__.meta9919;
});
session.session.t9918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9920,meta9919__$1){var self__ = this;
var _9920__$1 = this;return (new session.session.t9918(self__.opts,self__.owner,self__.cursor,meta9919__$1));
});
session.session.__GT_t9918 = (function __GT_t9918(opts__$1,owner__$1,cursor__$1,meta9919){return (new session.session.t9918(opts__$1,owner__$1,cursor__$1,meta9919));
});
}
return (new session.session.t9918(opts,owner,cursor,null));
})], true, false);

//# sourceMappingURL=session.js.map