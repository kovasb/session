// Compiled by ClojureScript 0.0-2156
goog.provide('session.loopcreator');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('session.datatypes');
goog.require('session.datatypes');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.string.StringBuffer');
goog.require('React');
session.loopcreator.new_loop_creator = (function new_loop_creator(data,owner,opts){if(typeof session.loopcreator.t9472 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.loopcreator.t9472 = (function (opts,owner,data,new_loop_creator,meta9473){
this.opts = opts;
this.owner = owner;
this.data = data;
this.new_loop_creator = new_loop_creator;
this.meta9473 = meta9473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.loopcreator.t9472.cljs$lang$type = true;
session.loopcreator.t9472.cljs$lang$ctorStr = "session.loopcreator/t9472";
session.loopcreator.t9472.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"session.loopcreator/t9472");
});
session.loopcreator.t9472.prototype.om$core$IRenderState$ = true;
session.loopcreator.t9472.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9475){var self__ = this;
var map__9476 = p__9475;var map__9476__$1 = ((cljs.core.seq_QMARK_.call(null,map__9476))?cljs.core.apply.call(null,cljs.core.hash_map,map__9476):map__9476);var hover = cljs.core.get.call(null,map__9476__$1,new cljs.core.Keyword(null,"hover","hover",1113373870));var ___$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"chan","chan",1016956612).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(self__.data));
}), "onMouseLeave": (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hover","hover",1113373870),false);
}), "onMouseEnter": (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hover","hover",1113373870),true);
}), "id": "new"},React.DOM.div({"style": {"cursor": "pointer", "height": "1em"}},(cljs.core.truth_(hover)?React.DOM.i({"className": "fa fa-long-arrow-right", "style": {"cursor": "pointer"}},""):"\u00A0")));
});
session.loopcreator.t9472.prototype.om$core$IInitState$ = true;
session.loopcreator.t9472.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",1113373870),false], null);
});
session.loopcreator.t9472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9474){var self__ = this;
var _9474__$1 = this;return self__.meta9473;
});
session.loopcreator.t9472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9474,meta9473__$1){var self__ = this;
var _9474__$1 = this;return (new session.loopcreator.t9472(self__.opts,self__.owner,self__.data,self__.new_loop_creator,meta9473__$1));
});
session.loopcreator.__GT_t9472 = (function __GT_t9472(opts__$1,owner__$1,data__$1,new_loop_creator__$1,meta9473){return (new session.loopcreator.t9472(opts__$1,owner__$1,data__$1,new_loop_creator__$1,meta9473));
});
}
return (new session.loopcreator.t9472(opts,owner,data,new_loop_creator,null));
});

//# sourceMappingURL=loopcreator.js.map