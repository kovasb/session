// Compiled by ClojureScript 0.0-2197
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
session.boot.display_index_element = (function display_index_element(cursor,owner,opts){if(typeof session.boot.t9183 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.boot.t9183 = (function (opts,owner,cursor,display_index_element,meta9184){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.display_index_element = display_index_element;
this.meta9184 = meta9184;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.boot.t9183.cljs$lang$type = true;
session.boot.t9183.cljs$lang$ctorStr = "session.boot/t9183";
session.boot.t9183.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"session.boot/t9183");
});
session.boot.t9183.prototype.om$core$IRenderState$ = true;
session.boot.t9183.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9186){var self__ = this;
var map__9187 = p__9186;var map__9187__$1 = ((cljs.core.seq_QMARK_.call(null,map__9187))?cljs.core.apply.call(null,cljs.core.hash_map,map__9187):map__9187);var hover = cljs.core.get.call(null,map__9187__$1,new cljs.core.Keyword(null,"hover","hover",1113373870));var ___$1 = this;var elt = om.core.value.call(null,self__.cursor);return React.DOM.li({"onMouseLeave": ((function (elt,___$1,map__9187,map__9187__$1,hover){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hover","hover",1113373870),false);
});})(elt,___$1,map__9187,map__9187__$1,hover))
, "onMouseEnter": ((function (elt,___$1,map__9187,map__9187__$1,hover){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hover","hover",1113373870),true);
});})(elt,___$1,map__9187,map__9187__$1,hover))
, "style": {"text-decoration": "none", "border-bottom": "1px solid #ccc", "border-top": ((cljs.core._EQ_.call(null,0,cljs.core.last.call(null,self__.cursor.path)))?"1px solid #ccc":""), "width": "400px"}},React.DOM.a({"href": [cljs.core.str("#/sessions/"),cljs.core.str(new cljs.core.Keyword("index","id","index/id",3115525907).cljs$core$IFn$_invoke$arity$1(elt).uuid)].join(''), "style": {"text-decoration": "none"}},React.DOM.i({"style": {"color": (cljs.core.truth_(hover)?"#5479B0":"#000000"), "opacity": (cljs.core.truth_(hover)?1:0), "font-size": "0.8em", "padding-top": "6px", "padding-right": "5px", "float": "left"}, "className": "fa fa-arrow-circle-right"},""),React.DOM.span({"style": {"font": "200 1em/1.5 Helvetica, Verdana, sans-serif", "color": (cljs.core.truth_(hover)?"#5479B0":"#000000")}},(cljs.core.truth_(cljs.core.get_in.call(null,elt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("index","name","index/name",3112195043)], null)))?cljs.core.get_in.call(null,elt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("index","name","index/name",3112195043)], null)):cljs.core.get_in.call(null,elt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("index","id","index/id",3115525907)], null)).uuid))));
});
session.boot.t9183.prototype.om$core$IInitState$ = true;
session.boot.t9183.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",1113373870),false], null);
});
session.boot.t9183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9185){var self__ = this;
var _9185__$1 = this;return self__.meta9184;
});
session.boot.t9183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9185,meta9184__$1){var self__ = this;
var _9185__$1 = this;return (new session.boot.t9183(self__.opts,self__.owner,self__.cursor,self__.display_index_element,meta9184__$1));
});
session.boot.__GT_t9183 = (function __GT_t9183(opts__$1,owner__$1,cursor__$1,display_index_element__$1,meta9184){return (new session.boot.t9183(opts__$1,owner__$1,cursor__$1,display_index_element__$1,meta9184));
});
}
return (new session.boot.t9183(opts,owner,cursor,display_index_element,null));
});
session.boot.display_index = (function display_index(cursor,owner,opts){return React.DOM.div(null,React.DOM.div(null,"available sessions:"),React.DOM.ul({"style": {"margin": "0", "padding": "0", "list-style-type": "none"}},cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__9188_SHARP_){return om.core.build.call(null,session.boot.display_index_element,p1__9188_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),opts], null));
}),new cljs.core.Keyword(null,"session-list","session-list",4576211175).cljs$core$IFn$_invoke$arity$1(cursor)))));
});
session.boot.handle_change = (function handle_change(e,data,edit_key,owner){var value = e.target.value;om.core.transact_BANG_.call(null,data,edit_key,((function (value){
return (function (_){return value;
});})(value))
);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178),value);
});
session.boot.create_new_session = (function create_new_session(cursor,owner,opts){return React.DOM.div(null,React.DOM.div(null,"create new session:"),React.DOM.span(null,om.dom.input.call(null,{"onChange": (function (p1__9189_SHARP_){var value = p1__9189_SHARP_.target.value;return om.core.transact_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-session","new-session",1013080795),new cljs.core.Keyword(null,"name","name",1017277949)], null),((function (value){
return (function (_){return value;
});})(value))
);
}), "value": cljs.core.get_in.call(null,om.core.value.call(null,cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-session","new-session",1013080795),new cljs.core.Keyword(null,"name","name",1017277949)], null)), "size": "36", "style": {"font": "200 1em/1.5 Helvetica, Verdana, sans-serif"}}),(function (){var id = cljs.core.get_in.call(null,om.core.value.call(null,cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-session","new-session",1013080795),new cljs.core.Keyword(null,"id","id",1013907597)], null));var name = cljs.core.get_in.call(null,om.core.value.call(null,cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-session","new-session",1013080795),new cljs.core.Keyword(null,"name","name",1017277949)], null));return React.DOM.button({"onClick": ((function (id,name){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"create-session","create-session",678903351),new cljs.core.Keyword(null,"name","name",1017277949),name,new cljs.core.Keyword(null,"id","id",1013907597),id], null));
});})(id,name))
},"go!");
})()));
});
session.boot.boot_renderers = new cljs.core.PersistentArrayMap.fromArray([session.datatypes.Boot,(function (){var session_connect_chan = cljs.core.async.chan.call(null);return ((function (session_connect_chan){
return (function (cursor,owner,opts){if(typeof session.boot.t9190 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.boot.t9190 = (function (opts,owner,cursor,session_connect_chan,meta9191){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.session_connect_chan = session_connect_chan;
this.meta9191 = meta9191;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.boot.t9190.cljs$lang$type = true;
session.boot.t9190.cljs$lang$ctorStr = "session.boot/t9190";
session.boot.t9190.cljs$lang$ctorPrWriter = ((function (session_connect_chan){
return (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"session.boot/t9190");
});})(session_connect_chan))
;
session.boot.t9190.prototype.om$core$IRender$ = true;
session.boot.t9190.prototype.om$core$IRender$render$arity$1 = ((function (session_connect_chan){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"style": {"font-size": "3em"}},"Session"),session.boot.create_new_session.call(null,self__.cursor,self__.owner,self__.opts),React.DOM.p(null,""),(cljs.core.truth_(new cljs.core.Keyword(null,"session-list","session-list",4576211175).cljs$core$IFn$_invoke$arity$1(om.core.value.call(null,self__.cursor)))?session.boot.display_index.call(null,self__.cursor,self__.owner,self__.opts):React.DOM.div({"key": "initial-load"},"loading session index...")));
});})(session_connect_chan))
;
session.boot.t9190.prototype.om$core$IWillMount$ = true;
session.boot.t9190.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (session_connect_chan){
return (function (_){var self__ = this;
var ___$1 = this;var c__6232__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto__,___$1,session_connect_chan){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto__,___$1,session_connect_chan){
return (function (state_9228){var state_val_9229 = (state_9228[1]);if((state_val_9229 === 1))
{var inst_9193 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_9194 = [new cljs.core.Keyword(null,"op","op",1013907795)];var inst_9195 = [new cljs.core.Keyword(null,"list-sessions","list-sessions",4217202782)];var inst_9196 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9194,inst_9195);var state_9228__$1 = state_9228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9228__$1,2,inst_9193,inst_9196);
} else
{if((state_val_9229 === 2))
{var inst_9198 = (state_9228[2]);var state_9228__$1 = (function (){var statearr_9230 = state_9228;(statearr_9230[7] = inst_9198);
return statearr_9230;
})();var statearr_9231_9250 = state_9228__$1;(statearr_9231_9250[2] = null);
(statearr_9231_9250[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9229 === 3))
{var inst_9200 = new cljs.core.Keyword(null,"kernel-receive","kernel-receive",2518943941).cljs$core$IFn$_invoke$arity$1(self__.opts);var state_9228__$1 = state_9228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9228__$1,5,inst_9200);
} else
{if((state_val_9229 === 4))
{var inst_9226 = (state_9228[2]);var state_9228__$1 = state_9228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9228__$1,inst_9226);
} else
{if((state_val_9229 === 5))
{var inst_9202 = (state_9228[8]);var inst_9206 = (state_9228[9]);var inst_9202__$1 = (state_9228[2]);var inst_9206__$1 = new cljs.core.Keyword(null,"op","op",1013907795).cljs$core$IFn$_invoke$arity$1(inst_9202__$1);var inst_9207 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"list-sessions","list-sessions",4217202782),inst_9206__$1);var state_9228__$1 = (function (){var statearr_9232 = state_9228;(statearr_9232[8] = inst_9202__$1);
(statearr_9232[9] = inst_9206__$1);
return statearr_9232;
})();if(inst_9207)
{var statearr_9233_9251 = state_9228__$1;(statearr_9233_9251[1] = 6);
} else
{var statearr_9234_9252 = state_9228__$1;(statearr_9234_9252[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9229 === 6))
{var inst_9202 = (state_9228[8]);var inst_9206 = (state_9228[9]);var inst_9209 = (function (){var expr__9204 = inst_9206;var pred__9203 = cljs.core._EQ_;var res = inst_9202;return ((function (expr__9204,pred__9203,res,inst_9202,inst_9206,state_val_9229,c__6232__auto__,___$1,session_connect_chan){
return (function (y){return cljs.core.assoc.call(null,y,new cljs.core.Keyword(null,"session-list","session-list",4576211175),new cljs.core.Keyword(null,"session-list","session-list",4576211175).cljs$core$IFn$_invoke$arity$1(res));
});
;})(expr__9204,pred__9203,res,inst_9202,inst_9206,state_val_9229,c__6232__auto__,___$1,session_connect_chan))
})();var inst_9210 = om.core.transact_BANG_.call(null,self__.cursor,cljs.core.PersistentVector.EMPTY,inst_9209);var state_9228__$1 = (function (){var statearr_9235 = state_9228;(statearr_9235[10] = inst_9210);
return statearr_9235;
})();var statearr_9236_9253 = state_9228__$1;(statearr_9236_9253[2] = null);
(statearr_9236_9253[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9229 === 7))
{var inst_9206 = (state_9228[9]);var inst_9213 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"display-session","display-session",2856161277),inst_9206);var state_9228__$1 = state_9228;if(inst_9213)
{var statearr_9237_9254 = state_9228__$1;(statearr_9237_9254[1] = 9);
} else
{var statearr_9238_9255 = state_9228__$1;(statearr_9238_9255[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9229 === 8))
{var inst_9224 = (state_9228[2]);var state_9228__$1 = state_9228;var statearr_9239_9256 = state_9228__$1;(statearr_9239_9256[2] = inst_9224);
(statearr_9239_9256[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9229 === 9))
{var inst_9202 = (state_9228[8]);var inst_9206 = (state_9228[9]);var inst_9215 = (function (){var expr__9204 = inst_9206;var pred__9203 = cljs.core._EQ_;var res = inst_9202;return ((function (expr__9204,pred__9203,res,inst_9202,inst_9206,state_val_9229,c__6232__auto__,___$1,session_connect_chan){
return (function (y){return new cljs.core.Keyword(null,"session","session",2998892040).cljs$core$IFn$_invoke$arity$1(res);
});
;})(expr__9204,pred__9203,res,inst_9202,inst_9206,state_val_9229,c__6232__auto__,___$1,session_connect_chan))
})();var inst_9216 = om.core.transact_BANG_.call(null,self__.cursor,cljs.core.PersistentVector.EMPTY,inst_9215);var state_9228__$1 = state_9228;var statearr_9240_9257 = state_9228__$1;(statearr_9240_9257[2] = inst_9216);
(statearr_9240_9257[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9229 === 10))
{var inst_9206 = (state_9228[9]);var inst_9218 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_9206)].join('');var inst_9219 = (new Error(inst_9218));var inst_9220 = (function(){throw inst_9219})();var state_9228__$1 = state_9228;var statearr_9241_9258 = state_9228__$1;(statearr_9241_9258[2] = inst_9220);
(statearr_9241_9258[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9229 === 11))
{var inst_9222 = (state_9228[2]);var state_9228__$1 = state_9228;var statearr_9242_9259 = state_9228__$1;(statearr_9242_9259[2] = inst_9222);
(statearr_9242_9259[1] = 8);
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
});})(c__6232__auto__,___$1,session_connect_chan))
;return ((function (switch__6217__auto__,c__6232__auto__,___$1,session_connect_chan){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_9246 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9246[0] = state_machine__6218__auto__);
(statearr_9246[1] = 1);
return statearr_9246;
});
var state_machine__6218__auto____1 = (function (state_9228){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_9228);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e9247){if((e9247 instanceof Object))
{var ex__6221__auto__ = e9247;var statearr_9248_9260 = state_9228;(statearr_9248_9260[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9228);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9247;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9261 = state_9228;
state_9228 = G__9261;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_9228){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_9228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto__,___$1,session_connect_chan))
})();var state__6234__auto__ = (function (){var statearr_9249 = f__6233__auto__.call(null);(statearr_9249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto__);
return statearr_9249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto__,___$1,session_connect_chan))
);
return c__6232__auto__;
});})(session_connect_chan))
;
session.boot.t9190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (session_connect_chan){
return (function (_9192){var self__ = this;
var _9192__$1 = this;return self__.meta9191;
});})(session_connect_chan))
;
session.boot.t9190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (session_connect_chan){
return (function (_9192,meta9191__$1){var self__ = this;
var _9192__$1 = this;return (new session.boot.t9190(self__.opts,self__.owner,self__.cursor,self__.session_connect_chan,meta9191__$1));
});})(session_connect_chan))
;
session.boot.__GT_t9190 = ((function (session_connect_chan){
return (function __GT_t9190(opts__$1,owner__$1,cursor__$1,session_connect_chan__$1,meta9191){return (new session.boot.t9190(opts__$1,owner__$1,cursor__$1,session_connect_chan__$1,meta9191));
});})(session_connect_chan))
;
}
return (new session.boot.t9190(opts,owner,cursor,session_connect_chan,null));
});
;})(session_connect_chan))
})()], true, false);

//# sourceMappingURL=boot.js.map