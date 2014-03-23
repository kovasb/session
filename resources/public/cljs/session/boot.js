// Compiled by ClojureScript 0.0-2156
goog.provide('session.boot');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('React');
goog.require('session.datatypes');
goog.require('session.datatypes');
session.boot.display_index_element = (function display_index_element(cursor,owner,opts){if(typeof session.boot.t9084 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.boot.t9084 = (function (opts,owner,cursor,display_index_element,meta9085){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.display_index_element = display_index_element;
this.meta9085 = meta9085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.boot.t9084.cljs$lang$type = true;
session.boot.t9084.cljs$lang$ctorStr = "session.boot/t9084";
session.boot.t9084.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"session.boot/t9084");
});
session.boot.t9084.prototype.om$core$IRenderState$ = true;
session.boot.t9084.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9087){var self__ = this;
var map__9088 = p__9087;var map__9088__$1 = ((cljs.core.seq_QMARK_.call(null,map__9088))?cljs.core.apply.call(null,cljs.core.hash_map,map__9088):map__9088);var hover = cljs.core.get.call(null,map__9088__$1,new cljs.core.Keyword(null,"hover","hover",1113373870));var ___$1 = this;var elt = om.core.value.call(null,self__.cursor);return React.DOM.li({"onMouseLeave": (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hover","hover",1113373870),false);
}), "onMouseEnter": (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hover","hover",1113373870),true);
}), "style": {"text-decoration": "none", "border-bottom": "1px solid #ccc", "border-top": ((cljs.core._EQ_.call(null,0,cljs.core.last.call(null,self__.cursor.path)))?"1px solid #ccc":""), "width": "400px"}},React.DOM.a({"href": [cljs.core.str("#/sessions/"),cljs.core.str(new cljs.core.Keyword("index","id","index/id",3115525907).cljs$core$IFn$_invoke$arity$1(elt).uuid)].join(''), "style": {"text-decoration": "none"}},React.DOM.i({"style": {"color": (cljs.core.truth_(hover)?"#5479B0":"#000000"), "opacity": (cljs.core.truth_(hover)?1:0), "font-size": "0.8em", "padding-top": "6px", "padding-right": "5px", "float": "left"}, "className": "fa fa-arrow-circle-right"},""),React.DOM.span({"style": {"font": "200 1em/1.5 Helvetica, Verdana, sans-serif", "color": (cljs.core.truth_(hover)?"#5479B0":"#000000")}},(cljs.core.truth_(cljs.core.get_in.call(null,elt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("index","name","index/name",3112195043)], null)))?cljs.core.get_in.call(null,elt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("index","name","index/name",3112195043)], null)):cljs.core.get_in.call(null,elt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("index","id","index/id",3115525907)], null)).uuid))));
});
session.boot.t9084.prototype.om$core$IInitState$ = true;
session.boot.t9084.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",1113373870),false], null);
});
session.boot.t9084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9086){var self__ = this;
var _9086__$1 = this;return self__.meta9085;
});
session.boot.t9084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9086,meta9085__$1){var self__ = this;
var _9086__$1 = this;return (new session.boot.t9084(self__.opts,self__.owner,self__.cursor,self__.display_index_element,meta9085__$1));
});
session.boot.__GT_t9084 = (function __GT_t9084(opts__$1,owner__$1,cursor__$1,display_index_element__$1,meta9085){return (new session.boot.t9084(opts__$1,owner__$1,cursor__$1,display_index_element__$1,meta9085));
});
}
return (new session.boot.t9084(opts,owner,cursor,display_index_element,null));
});
session.boot.display_index = (function display_index(cursor,owner,opts){return React.DOM.div(null,React.DOM.div(null,"available sessions:"),React.DOM.ul({"style": {"margin": "0", "padding": "0", "list-style-type": "none"}},cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__9089_SHARP_){return om.core.build.call(null,session.boot.display_index_element,p1__9089_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),opts], null));
}),new cljs.core.Keyword(null,"session-list","session-list",4576211175).cljs$core$IFn$_invoke$arity$1(cursor)))));
});
session.boot.handle_change = (function handle_change(e,data,edit_key,owner){var value = e.target.value;om.core.transact_BANG_.call(null,data,edit_key,(function (_){return value;
}));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178),value);
});
session.boot.create_new_session = (function create_new_session(cursor,owner,opts){return React.DOM.div(null,React.DOM.div(null,"create new session:"),React.DOM.span(null,om.dom.input.call(null,{"onChange": (function (p1__9090_SHARP_){var value = p1__9090_SHARP_.target.value;return om.core.transact_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-session","new-session",1013080795),new cljs.core.Keyword(null,"name","name",1017277949)], null),(function (_){return value;
}));
}), "value": cljs.core.get_in.call(null,om.core.value.call(null,cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-session","new-session",1013080795),new cljs.core.Keyword(null,"name","name",1017277949)], null)), "size": "36", "style": {"font": "200 1em/1.5 Helvetica, Verdana, sans-serif"}}),(function (){var id = cljs.core.get_in.call(null,om.core.value.call(null,cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-session","new-session",1013080795),new cljs.core.Keyword(null,"id","id",1013907597)], null));var name = cljs.core.get_in.call(null,om.core.value.call(null,cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-session","new-session",1013080795),new cljs.core.Keyword(null,"name","name",1017277949)], null));return React.DOM.button({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"create-session","create-session",678903351),new cljs.core.Keyword(null,"name","name",1017277949),name,new cljs.core.Keyword(null,"id","id",1013907597),id], null));
})},"go!");
})()));
});
session.boot.boot_renderers = new cljs.core.PersistentArrayMap.fromArray([session.datatypes.Boot,(function (){var session_connect_chan = cljs.core.async.chan.call(null);return (function (cursor,owner,opts){if(typeof session.boot.t9091 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.boot.t9091 = (function (opts,owner,cursor,session_connect_chan,meta9092){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.session_connect_chan = session_connect_chan;
this.meta9092 = meta9092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.boot.t9091.cljs$lang$type = true;
session.boot.t9091.cljs$lang$ctorStr = "session.boot/t9091";
session.boot.t9091.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"session.boot/t9091");
});
session.boot.t9091.prototype.om$core$IRender$ = true;
session.boot.t9091.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"style": {"font-size": "3em"}},"Session"),session.boot.create_new_session.call(null,self__.cursor,self__.owner,self__.opts),React.DOM.p(null,""),(cljs.core.truth_(new cljs.core.Keyword(null,"session-list","session-list",4576211175).cljs$core$IFn$_invoke$arity$1(om.core.value.call(null,self__.cursor)))?session.boot.display_index.call(null,self__.cursor,self__.owner,self__.opts):React.DOM.div({"key": "initial-load"},"loading session index...")));
});
session.boot.t9091.prototype.om$core$IWillMount$ = true;
session.boot.t9091.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6176__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6177__auto__ = (function (){var switch__6161__auto__ = (function (state_9133){var state_val_9134 = (state_9133[1]);if((state_val_9134 === 1))
{var inst_9094 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_9095 = [new cljs.core.Keyword(null,"op","op",1013907795)];var inst_9096 = [new cljs.core.Keyword(null,"list-sessions","list-sessions",4217202782)];var inst_9097 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9095,inst_9096);var state_9133__$1 = state_9133;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9133__$1,2,inst_9094,inst_9097);
} else
{if((state_val_9134 === 2))
{var inst_9099 = (state_9133[2]);var state_9133__$1 = (function (){var statearr_9135 = state_9133;(statearr_9135[7] = inst_9099);
return statearr_9135;
})();var statearr_9136_9156 = state_9133__$1;(statearr_9136_9156[2] = null);
(statearr_9136_9156[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9134 === 3))
{var inst_9101 = new cljs.core.Keyword(null,"kernel-receive","kernel-receive",2518943941).cljs$core$IFn$_invoke$arity$1(self__.opts);var state_9133__$1 = state_9133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9133__$1,5,inst_9101);
} else
{if((state_val_9134 === 4))
{var inst_9131 = (state_9133[2]);var state_9133__$1 = state_9133;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9133__$1,inst_9131);
} else
{if((state_val_9134 === 5))
{var inst_9103 = (state_9133[8]);var inst_9109 = (state_9133[9]);var inst_9103__$1 = (state_9133[2]);var inst_9104 = cljs.core.pr_str.call(null,"kernel receive: ",inst_9103__$1);var inst_9105 = console.log(inst_9104);var inst_9109__$1 = new cljs.core.Keyword(null,"op","op",1013907795).cljs$core$IFn$_invoke$arity$1(inst_9103__$1);var inst_9110 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"list-sessions","list-sessions",4217202782),inst_9109__$1);var state_9133__$1 = (function (){var statearr_9137 = state_9133;(statearr_9137[10] = inst_9105);
(statearr_9137[8] = inst_9103__$1);
(statearr_9137[9] = inst_9109__$1);
return statearr_9137;
})();if(inst_9110)
{var statearr_9138_9157 = state_9133__$1;(statearr_9138_9157[1] = 6);
} else
{var statearr_9139_9158 = state_9133__$1;(statearr_9139_9158[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9134 === 6))
{var inst_9103 = (state_9133[8]);var inst_9109 = (state_9133[9]);var inst_9112 = (function (){var expr__9107 = inst_9109;var pred__9106 = cljs.core._EQ_;var res = inst_9103;return ((function (expr__9107,pred__9106,res,inst_9103,inst_9109,state_val_9134){
return (function (y,z){return cljs.core.assoc.call(null,y,new cljs.core.Keyword(null,"session-list","session-list",4576211175),new cljs.core.Keyword(null,"session-list","session-list",4576211175).cljs$core$IFn$_invoke$arity$1(res));
});
;})(expr__9107,pred__9106,res,inst_9103,inst_9109,state_val_9134))
})();var inst_9113 = om.core.update_BANG_.call(null,self__.cursor,inst_9112);var state_9133__$1 = (function (){var statearr_9140 = state_9133;(statearr_9140[11] = inst_9113);
return statearr_9140;
})();var statearr_9141_9159 = state_9133__$1;(statearr_9141_9159[2] = null);
(statearr_9141_9159[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9134 === 7))
{var inst_9109 = (state_9133[9]);var inst_9116 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"display-session","display-session",2856161277),inst_9109);var state_9133__$1 = state_9133;if(inst_9116)
{var statearr_9142_9160 = state_9133__$1;(statearr_9142_9160[1] = 9);
} else
{var statearr_9143_9161 = state_9133__$1;(statearr_9143_9161[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9134 === 8))
{var inst_9129 = (state_9133[2]);var state_9133__$1 = state_9133;var statearr_9144_9162 = state_9133__$1;(statearr_9144_9162[2] = inst_9129);
(statearr_9144_9162[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9134 === 9))
{var inst_9103 = (state_9133[8]);var inst_9109 = (state_9133[9]);var inst_9118 = console.log("received session");var inst_9119 = (function (){var expr__9107 = inst_9109;var pred__9106 = cljs.core._EQ_;var res = inst_9103;return ((function (expr__9107,pred__9106,res,inst_9103,inst_9109,inst_9118,state_val_9134){
return (function (y,z){return z;
});
;})(expr__9107,pred__9106,res,inst_9103,inst_9109,inst_9118,state_val_9134))
})();var inst_9120 = new cljs.core.Keyword(null,"session","session",2998892040).cljs$core$IFn$_invoke$arity$1(inst_9103);var inst_9121 = om.core.update_BANG_.call(null,self__.cursor,inst_9119,inst_9120);var state_9133__$1 = (function (){var statearr_9145 = state_9133;(statearr_9145[12] = inst_9118);
return statearr_9145;
})();var statearr_9146_9163 = state_9133__$1;(statearr_9146_9163[2] = inst_9121);
(statearr_9146_9163[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9134 === 10))
{var inst_9109 = (state_9133[9]);var inst_9123 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_9109)].join('');var inst_9124 = (new Error(inst_9123));var inst_9125 = (function(){throw inst_9124})();var state_9133__$1 = state_9133;var statearr_9147_9164 = state_9133__$1;(statearr_9147_9164[2] = inst_9125);
(statearr_9147_9164[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9134 === 11))
{var inst_9127 = (state_9133[2]);var state_9133__$1 = state_9133;var statearr_9148_9165 = state_9133__$1;(statearr_9148_9165[2] = inst_9127);
(statearr_9148_9165[1] = 8);
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
}
}
}
});return ((function (switch__6161__auto__){
return (function() {
var state_machine__6162__auto__ = null;
var state_machine__6162__auto____0 = (function (){var statearr_9152 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9152[0] = state_machine__6162__auto__);
(statearr_9152[1] = 1);
return statearr_9152;
});
var state_machine__6162__auto____1 = (function (state_9133){while(true){
var ret_value__6163__auto__ = (function (){try{while(true){
var result__6164__auto__ = switch__6161__auto__.call(null,state_9133);if(cljs.core.keyword_identical_QMARK_.call(null,result__6164__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6164__auto__;
}
break;
}
}catch (e9153){if((e9153 instanceof Object))
{var ex__6165__auto__ = e9153;var statearr_9154_9166 = state_9133;(statearr_9154_9166[5] = ex__6165__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9133);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9153;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9167 = state_9133;
state_9133 = G__9167;
continue;
}
} else
{return ret_value__6163__auto__;
}
break;
}
});
state_machine__6162__auto__ = function(state_9133){
switch(arguments.length){
case 0:
return state_machine__6162__auto____0.call(this);
case 1:
return state_machine__6162__auto____1.call(this,state_9133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6162__auto____0;
state_machine__6162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6162__auto____1;
return state_machine__6162__auto__;
})()
;})(switch__6161__auto__))
})();var state__6178__auto__ = (function (){var statearr_9155 = f__6177__auto__.call(null);(statearr_9155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6176__auto__);
return statearr_9155;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6178__auto__);
}));
return c__6176__auto__;
});
session.boot.t9091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9093){var self__ = this;
var _9093__$1 = this;return self__.meta9092;
});
session.boot.t9091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9093,meta9092__$1){var self__ = this;
var _9093__$1 = this;return (new session.boot.t9091(self__.opts,self__.owner,self__.cursor,self__.session_connect_chan,meta9092__$1));
});
session.boot.__GT_t9091 = (function __GT_t9091(opts__$1,owner__$1,cursor__$1,session_connect_chan__$1,meta9092){return (new session.boot.t9091(opts__$1,owner__$1,cursor__$1,session_connect_chan__$1,meta9092));
});
}
return (new session.boot.t9091(opts,owner,cursor,session_connect_chan,null));
});
})()], true, false);

//# sourceMappingURL=boot.js.map