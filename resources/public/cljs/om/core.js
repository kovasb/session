// Compiled by ClojureScript 0.0-2156
goog.provide('om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_read_enabled_STAR_ = false;
om.core.IInitState = (function (){var obj11361 = {};return obj11361;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3391__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (om.core.init_state[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core.init_state["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj11363 = {};return obj11363;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3391__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (om.core.should_update[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core.should_update["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj11365 = {};return obj11365;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3391__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (om.core.will_mount[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core.will_mount["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj11367 = {};return obj11367;
})();
om.core.did_mount = (function did_mount(this$,node){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.om$core$IDidMount$did_mount$arity$2;
} else
{return and__3391__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$2(this$,node);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (om.core.did_mount[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core.did_mount["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$,node);
}
});
om.core.IWillUnmount = (function (){var obj11369 = {};return obj11369;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3391__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (om.core.will_unmount[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core.will_unmount["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj11371 = {};return obj11371;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3391__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (om.core.will_update[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core.will_update["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj11373 = {};return obj11373;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state,root_node){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$4;
} else
{return and__3391__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$4(this$,prev_props,prev_state,root_node);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (om.core.did_update[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core.did_update["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state,root_node);
}
});
om.core.IRender = (function (){var obj11375 = {};return obj11375;
})();
om.core.render = (function render(this$){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3391__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (om.core.render[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core.render["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderState = (function (){var obj11377 = {};return obj11377;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3391__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (om.core.render_state[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core.render_state["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.IValue = (function (){var obj11379 = {};return obj11379;
})();
om.core._value = (function _value(x){if((function (){var and__3391__auto__ = x;if(and__3391__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__3391__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__4030__auto__ = (((x == null))?null:x);return (function (){var or__3403__auto__ = (om.core._value[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core._value["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj11381 = {};return obj11381;
})();
om.core._path = (function _path(cursor){if((function (){var and__3391__auto__ = cursor;if(and__3391__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3391__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4030__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3403__auto__ = (om.core._path[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core._path["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__3391__auto__ = cursor;if(and__3391__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__3391__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__4030__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3403__auto__ = (om.core._state[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core._state["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core._shared = (function _shared(cursor){if((function (){var and__3391__auto__ = cursor;if(and__3391__auto__)
{return cursor.om$core$ICursor$_shared$arity$1;
} else
{return and__3391__auto__;
}
})())
{return cursor.om$core$ICursor$_shared$arity$1(cursor);
} else
{var x__4030__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3403__auto__ = (om.core._shared[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core._shared["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-shared",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj11383 = {};return obj11383;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__3391__auto__ = value;if(and__3391__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__3391__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__4030__auto__ = (((value == null))?null:value);return (function (){var or__3403__auto__ = (om.core._to_cursor[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core._to_cursor["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__3391__auto__ = value;if(and__3391__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__3391__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__4030__auto__ = (((value == null))?null:value);return (function (){var or__3403__auto__ = (om.core._to_cursor[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core._to_cursor["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
var _to_cursor__4 = (function (value,state,path,shared){if((function (){var and__3391__auto__ = value;if(and__3391__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$4;
} else
{return and__3391__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$4(value,state,path,shared);
} else
{var x__4030__auto__ = (((value == null))?null:value);return (function (){var or__3403__auto__ = (om.core._to_cursor[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core._to_cursor["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path,shared);
}
});
_to_cursor = function(value,state,path,shared){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
case 4:
return _to_cursor__4.call(this,value,state,path,shared);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
_to_cursor.cljs$core$IFn$_invoke$arity$4 = _to_cursor__4;
return _to_cursor;
})()
;
om.core.ITransact = (function (){var obj11385 = {};return obj11385;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,f){if((function (){var and__3391__auto__ = cursor;if(and__3391__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$2(cursor,f);
} else
{var x__4030__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3403__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (om.core._transact_BANG_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,f);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_.call(null,c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_11387 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return c.call(null,node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11387;
}})();
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){var state = owner.state;var or__3403__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return (state["__om_state"]);
}
});
var get_state__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_state.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_state.call(null,owner);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get_in.call(null,get_state.call(null,owner),korks);
} else
{return null;
}
}
}
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){return om.core._shared.call(null,om.core.get_props.call(null,owner));
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_shared.call(null,owner);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);
} else
{return null;
}
}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4092__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4092__auto__))
{var pending_state = temp__4092__auto__;var G__11389 = state;(G__11389["__om_prev_state"] = (state["__om_state"]));
(G__11389["__om_state"] = pending_state);
(G__11389["__om_pending_state"] = null);
return G__11389;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__3403__auto__ = props;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return owner.props;
}
})();var temp__4092__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4092__auto__))
{var props_state = temp__4092__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__3403__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.Pure = React.createClass({"render": (function (){var this$ = this;var c = om.core.children.call(null,this$);var _STAR_read_enabled_STAR_11404 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__11405 = c;if(G__11405)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__11405.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__11405.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__11405);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__11405);
}
})())
{return om.core.render.call(null,c);
} else
{if((function (){var G__11406 = c;if(G__11406)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__11406.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__11406.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__11406);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__11406);
}
})())
{return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return c;
} else
{return null;
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11404;
}}), "componentDidUpdate": (function (prev_props,prev_state,root_node){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__11402 = c;if(G__11402)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__11402.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__11402.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__11402);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__11402);
}
})())
{var state_11407 = this$.state;var _STAR_read_enabled_STAR_11403_11408 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__3403__auto__ = (state_11407["__om_prev_state"]);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return (state_11407["__om_state"]);
}
})(),root_node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11403_11408;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}), "componentWillUpdate": (function (next_props,next_state){var this$ = this;var c_11409 = om.core.children.call(null,this$);if((function (){var G__11400 = c_11409;if(G__11400)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__11400.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__11400.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__11400);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__11400);
}
})())
{var state_11410 = this$.state;var _STAR_read_enabled_STAR_11401_11411 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update.call(null,c_11409,om.core.get_props.call(null,{"props": next_props}),(function (){var or__3403__auto__ = (state_11410["__om_pending_state"]);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return (state_11410["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11401_11411;
}} else
{}
return om.core.merge_pending_state.call(null,this$);
}), "componentWillUnmount": (function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__11398 = c;if(G__11398)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__11398.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__11398.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__11398);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__11398);
}
})())
{var _STAR_read_enabled_STAR_11399 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_unmount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11399;
}} else
{return null;
}
}), "componentDidMount": (function (node){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__11396 = c;if(G__11396)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__11396.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__11396.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__11396);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__11396);
}
})())
{var _STAR_read_enabled_STAR_11397 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount.call(null,c,node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11397;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_11412 = om.core.children.call(null,this$);if((function (){var G__11394 = c_11412;if(G__11394)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__11394.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__11394.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__11394);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__11394);
}
})())
{var _STAR_read_enabled_STAR_11395_11413 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount.call(null,c_11412);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11395_11413;
}} else
{}
return om.core.merge_pending_state.call(null,this$);
}), "shouldComponentUpdate": (function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_11392 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children.call(null,this$);om.core.merge_props_state.call(null,this$,next_props);
if((function (){var G__11393 = c;if(G__11393)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__11393.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__11393.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__11393);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__11393);
}
})())
{return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props}),(this$.state["__om_pending_state"]));
} else
{if(!((om.core._value.call(null,(props["__om_cursor"])) === om.core._value.call(null,(next_props["__om_cursor"])))))
{return true;
} else
{if(!(((state["__om_pending_state"]) == null)))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11392;
}}), "getInitialState": (function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__3403__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var ret = {"__om_state": cljs.core.merge.call(null,istate,(((function (){var G__11390 = c;if(G__11390)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__11390.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__11390.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__11390);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__11390);
}
})())?(function (){var _STAR_read_enabled_STAR_11391 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11391;
}})():null))};(props["__om_init_state"] = null);
return ret;
})});
om.core.path = (function path(cursor){return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){return om.core._value.call(null,cursor);
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__11415 = x;if(G__11415)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__11415.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__11415.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__11415);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__11415);
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path,shared){
this.value = value;
this.state = state;
this.path = path;
this.shared = shared;
this.cljs$lang$protocol_mask$partition0$ = 2158397195;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{var v = cljs.core._lookup.call(null,self__.value,k,not_found);if(!(cljs.core._EQ_.call(null,v,not_found)))
{return om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.call(null,self__.path,k),self__.shared);
} else
{return not_found;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path,self__.shared));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.call = (function() {
var G__11419 = null;
var G__11419__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__11419__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__11419 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__11419__2.call(this,self__,k);
case 3:
return G__11419__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__11419;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args11416){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11416)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.path;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.state;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.om$core$ICursor$_shared$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.shared;
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else
{throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.value;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path,self__.shared));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count.call(null,self__.value) > 0))
{return cljs.core.map.call(null,(function (p__11417){var vec__11418 = p__11417;var k = cljs.core.nth.call(null,vec__11418,0,null);var v = cljs.core.nth.call(null,vec__11418,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.call(null,self__.path,k),self__.shared)], null);
}),self__.value);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count.call(null,self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path,self__.shared));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path,self__.shared));
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta.call(null,self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path,self__.shared));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$2 = (function (_,f){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.state,f,self__.path);
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path,shared){return (new om.core.MapCursor(value,state,path,shared));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path,shared){
this.value = value;
this.state = state;
this.path = path;
this.shared = shared;
this.cljs$lang$protocol_mask$partition0$ = 2175181595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.call(null,this$__$1,n,null);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.call(null,this$__$1,n,not_found);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,n,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core.to_cursor.call(null,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path,self__.shared);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.call = (function() {
var G__11421 = null;
var G__11421__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__11421__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__11421 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__11421__2.call(this,self__,k);
case 3:
return G__11421__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__11421;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args11420){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11420)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.path;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.state;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$_shared$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.shared;
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else
{throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.value;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path,self__.shared));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count.call(null,self__.value) > 0))
{return cljs.core.map.call(null,(function (v,i){return om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.call(null,self__.path,i),self__.shared);
}),self__.value,cljs.core.range.call(null));
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count.call(null,self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core.to_cursor.call(null,cljs.core._peek.call(null,self__.value),self__.state,self__.path,self__.shared);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core.to_cursor.call(null,cljs.core._pop.call(null,self__.value),self__.state,self__.path,self__.shared);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path,self__.shared));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path,self__.shared));
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta.call(null,self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core.to_cursor.call(null,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n),self__.shared);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((n < cljs.core._count.call(null,self__.value)))
{return om.core.to_cursor.call(null,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n),self__.shared);
} else
{return not_found;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$2 = (function (_,f){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.state,f,self__.path);
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path,shared){return (new om.core.IndexedCursor(value,state,path,shared));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path,shared){var x11423 = cljs.core.clone.call(null,val);x11423.cljs$core$IEquiv$ = true;
x11423.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,val,other);
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
x11423.om$core$ITransact$ = true;
x11423.om$core$ITransact$_transact_BANG_$arity$2 = (function (_,f){var ___$1 = this;return cljs.core.swap_BANG_.call(null,state,f,path);
});
x11423.om$core$ICursor$ = true;
x11423.om$core$ICursor$_state$arity$1 = (function (_){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return state;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
x11423.om$core$ICursor$_path$arity$1 = (function (_){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return path;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
x11423.om$core$ICursor$_shared$arity$1 = (function (_){var ___$1 = this;return shared;
});
x11423.cljs$core$IDeref$ = true;
x11423.cljs$core$IDeref$_deref$arity$1 = (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path);
} else
{throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});
return x11423;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY,null);
});
var to_cursor__2 = (function (val,state){return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY,null);
});
var to_cursor__3 = (function (val,state,path){return to_cursor.call(null,val,state,path,null);
});
var to_cursor__4 = (function (val,state,path,shared){if(om.core.cursor_QMARK_.call(null,val))
{return val;
} else
{if((function (){var G__11426 = val;if(G__11426)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__11426.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__11426.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__11426);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__11426);
}
})())
{return om.core._to_cursor.call(null,val,state,path,shared);
} else
{if(cljs.core.indexed_QMARK_.call(null,val))
{return (new om.core.IndexedCursor(val,state,path,shared));
} else
{if(cljs.core.map_QMARK_.call(null,val))
{return (new om.core.MapCursor(val,state,path,shared));
} else
{if((function (){var G__11427 = val;if(G__11427)
{var bit__4053__auto__ = (G__11427.cljs$lang$protocol_mask$partition1$ & 8192);if((bit__4053__auto__) || (G__11427.cljs$core$ICloneable$))
{return true;
} else
{if((!G__11427.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__11427);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__11427);
}
})())
{return om.core.to_cursor_STAR_.call(null,val,state,path,shared);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return val;
} else
{return null;
}
}
}
}
}
}
});
to_cursor = function(val,state,path,shared){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
case 4:
return to_cursor__4.call(this,val,state,path,shared);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
to_cursor.cljs$core$IFn$_invoke$arity$4 = to_cursor__4;
return to_cursor;
})()
;
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__11432 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));var chunk__11433 = null;var count__11434 = 0;var i__11435 = 0;while(true){
if((i__11435 < count__11434))
{var f = cljs.core._nth.call(null,chunk__11433,i__11435);f.call(null);
{
var G__11436 = seq__11432;
var G__11437 = chunk__11433;
var G__11438 = count__11434;
var G__11439 = (i__11435 + 1);
seq__11432 = G__11436;
chunk__11433 = G__11437;
count__11434 = G__11438;
i__11435 = G__11439;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11432);if(temp__4092__auto__)
{var seq__11432__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11432__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__11432__$1);{
var G__11440 = cljs.core.chunk_rest.call(null,seq__11432__$1);
var G__11441 = c__4151__auto__;
var G__11442 = cljs.core.count.call(null,c__4151__auto__);
var G__11443 = 0;
seq__11432 = G__11440;
chunk__11433 = G__11441;
count__11434 = G__11442;
i__11435 = G__11443;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__11432__$1);f.call(null);
{
var G__11444 = cljs.core.next.call(null,seq__11432__$1);
var G__11445 = null;
var G__11446 = 0;
var G__11447 = 0;
seq__11432 = G__11444;
chunk__11433 = G__11445;
count__11434 = G__11446;
i__11435 = G__11447;
continue;
}
}
} else
{return null;
}
}
break;
}
});
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Takes an immutable tree of associative data structures optionally
* wrapped in an atom, an initial function f, and a DOM
* target. Installs an Om/React render loop. f must return an instance
* that at a minimum implements IRender or IRenderState (it may
* implement other React life cycle protocols). f must take two
* arguments, the root cursor and the owning pure node. A cursor is
* just the original data wrapped in an ICursor instance which
* maintains path information. Only one root render loop allowed per
* target element. om.core/root is idempotent, if called again on the
* same target element the previous render loop will be replaced.
* 
* Example:
* 
* (root {:message :hello}
* (fn [data owner]
* ...)
* js/document.body)
*/
om.core.root = (function() {
var root = null;
var root__3 = (function (value,f,target){return root.call(null,value,null,f,target);
});
var root__4 = (function (value,shared,f,target){var roots_SINGLEQUOTE__11452 = cljs.core.deref.call(null,om.core.roots);if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__11452,target))
{cljs.core.get.call(null,roots_SINGLEQUOTE__11452,target).call(null);
} else
{}
var state = (((value instanceof cljs.core.Atom))?value:cljs.core.atom.call(null,value));var rootf = ((function (state){
return (function rootf(){cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref.call(null,state);var cursor = om.core.to_cursor.call(null,value__$1,state,cljs.core.PersistentVector.EMPTY,shared);return React.renderComponent((new om.core.Pure({"__om_cursor": cursor},((function (value__$1,cursor,state){
return (function (this$){var _STAR_read_enabled_STAR_11451 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11451;
}});})(value__$1,cursor,state))
)),target);
});})(state))
;var watch_key = cljs.core.gensym.call(null);cljs.core.add_watch.call(null,state,watch_key,(function (_,___$1,___$2,___$3){if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(om.core.render_all);
} else
{return setTimeout(om.core.render_all,16);
}
}
}));
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,(function (){cljs.core.remove_watch.call(null,state,watch_key);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
}));
return rootf.call(null);
});
root = function(value,shared,f,target){
switch(arguments.length){
case 3:
return root__3.call(this,value,shared,f);
case 4:
return root__4.call(this,value,shared,f,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
root.cljs$core$IFn$_invoke$arity$3 = root__3;
root.cljs$core$IFn$_invoke$arity$4 = root__4;
return root;
})()
;
om.core.valid_QMARK_ = (function valid_QMARK_(m){return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),null,new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"react-key","react-key",4184082563),null,new cljs.core.Keyword("om.core","index","om.core/index",3166146514),null,new cljs.core.Keyword(null,"key","key",1014010321),null,new cljs.core.Keyword(null,"opts","opts",1017322386),null,new cljs.core.Keyword(null,"fn","fn",1013907514),null], null), null),cljs.core.keys.call(null,m));
});
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a cursor, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument will be
* the cursor and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender instance, this
* instance may implement other React life cycle protocols.
* 
* cursor - an ICursor instance
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* 
* Example:
* 
* (build list-of-gadgets cursor
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,cursor){return build.call(null,f,cursor,null);
});
var build__3 = (function (f,cursor,m){if(om.core.valid_QMARK_.call(null,m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid?","valid?",1830611324,null),new cljs.core.Symbol(null,"m","m",-1640531418,null))))].join('')));
}
if((m == null))
{var pure__4962__auto__ = (new om.core.Pure({"__om_cursor": cursor},(function (this$){var _STAR_read_enabled_STAR_11457 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11457;
}})));pure__4962__auto__.constructor = goog.getUid(f);
return pure__4962__auto__;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var map__11458 = m;var map__11458__$1 = ((cljs.core.seq_QMARK_.call(null,map__11458))?cljs.core.apply.call(null,cljs.core.hash_map,map__11458):map__11458);var opts = cljs.core.get.call(null,map__11458__$1,new cljs.core.Keyword(null,"opts","opts",1017322386));var init_state = cljs.core.get.call(null,map__11458__$1,new cljs.core.Keyword(null,"init-state","init-state",4479067398));var state = cljs.core.get.call(null,map__11458__$1,new cljs.core.Keyword(null,"state","state",1123661827));var key = cljs.core.get.call(null,map__11458__$1,new cljs.core.Keyword(null,"key","key",1014010321));var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",1013907514));var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?dataf.call(null,cursor):cursor);var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",4184082563)));var pure__4962__auto__ = (new om.core.Pure({"key": rkey, "__om_state": state, "__om_init_state": init_state, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",3166146514).cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_},(((opts == null))?(function (this$){var _STAR_read_enabled_STAR_11459 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor_SINGLEQUOTE_,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11459;
}}):(function (this$){var _STAR_read_enabled_STAR_11460 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor_SINGLEQUOTE_,this$,opts);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11460;
}}))));pure__4962__auto__.constructor = goog.getUid(f);
return pure__4962__auto__;
} else
{return null;
}
}
});
build = function(f,cursor,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,cursor);
case 3:
return build__3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of cursors, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.call(null,(function (x,i){return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",3166146514),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
/**
* Given a cursor, an optional list of keys ks, mutate the tree at the
* path specified by the cursor + the optional keys by applying f to the
* specified value in the tree. An Om re-render will be triggered.
* @param {...*} var_args
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return om.core._transact_BANG_.call(null,cursor,(function (state,path){if(cljs.core.empty_QMARK_.call(null,path))
{return f.call(null,state);
} else
{return cljs.core.update_in.call(null,state,path,f);
}
}));
});
var transact_BANG___3 = (function (cursor,korks,f){return om.core._transact_BANG_.call(null,cursor,(function (state__4948__auto__,path__4949__auto__){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.update_in.call(null,state__4948__auto__,cljs.core.conj.call(null,path__4949__auto__,korks),f);
} else
{return cljs.core.update_in.call(null,state__4948__auto__,cljs.core.into.call(null,path__4949__auto__,korks),f);
}
}));
});
var transact_BANG___4 = (function (cursor,korks,f,a){return om.core._transact_BANG_.call(null,cursor,(function (state__4948__auto__,path__4949__auto__){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.update_in.call(null,state__4948__auto__,cljs.core.conj.call(null,path__4949__auto__,korks),f,a);
} else
{return cljs.core.update_in.call(null,state__4948__auto__,cljs.core.into.call(null,path__4949__auto__,korks),f,a);
}
}));
});
var transact_BANG___5 = (function (cursor,korks,f,a,b){return om.core._transact_BANG_.call(null,cursor,(function (state__4948__auto__,path__4949__auto__){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.update_in.call(null,state__4948__auto__,cljs.core.conj.call(null,path__4949__auto__,korks),f,a,b);
} else
{return cljs.core.update_in.call(null,state__4948__auto__,cljs.core.into.call(null,path__4949__auto__,korks),f,a,b);
}
}));
});
var transact_BANG___6 = (function (cursor,korks,f,a,b,c){return om.core._transact_BANG_.call(null,cursor,(function (state__4948__auto__,path__4949__auto__){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.update_in.call(null,state__4948__auto__,cljs.core.conj.call(null,path__4949__auto__,korks),f,a,b,c);
} else
{return cljs.core.update_in.call(null,state__4948__auto__,cljs.core.into.call(null,path__4949__auto__,korks),f,a,b,c);
}
}));
});
var transact_BANG___7 = (function (cursor,korks,f,a,b,c,d){return om.core._transact_BANG_.call(null,cursor,(function (state__4948__auto__,path__4949__auto__){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.update_in.call(null,state__4948__auto__,cljs.core.conj.call(null,path__4949__auto__,korks),f,a,b,c,d);
} else
{return cljs.core.update_in.call(null,state__4948__auto__,cljs.core.into.call(null,path__4949__auto__,korks),f,a,b,c,d);
}
}));
});
var transact_BANG___8 = (function() { 
var G__11461__delegate = function (cursor,korks,f,a,b,c,d,args){return om.core._transact_BANG_.call(null,cursor,(function (state,path){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.apply.call(null,cljs.core.update_in,state,cljs.core.conj.call(null,path,korks),f,a,b,c,d,args);
} else
{return cljs.core.apply.call(null,cljs.core.update_in,state,cljs.core.into.call(null,path,korks),f,a,b,c,d,args);
}
}));
};
var G__11461 = function (cursor,korks,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 7) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__11461__delegate.call(this,cursor,korks,f,a,b,c,d,args);};
G__11461.cljs$lang$maxFixedArity = 7;
G__11461.cljs$lang$applyTo = (function (arglist__11462){
var cursor = cljs.core.first(arglist__11462);
arglist__11462 = cljs.core.next(arglist__11462);
var korks = cljs.core.first(arglist__11462);
arglist__11462 = cljs.core.next(arglist__11462);
var f = cljs.core.first(arglist__11462);
arglist__11462 = cljs.core.next(arglist__11462);
var a = cljs.core.first(arglist__11462);
arglist__11462 = cljs.core.next(arglist__11462);
var b = cljs.core.first(arglist__11462);
arglist__11462 = cljs.core.next(arglist__11462);
var c = cljs.core.first(arglist__11462);
arglist__11462 = cljs.core.next(arglist__11462);
var d = cljs.core.first(arglist__11462);
var args = cljs.core.rest(arglist__11462);
return G__11461__delegate(cursor,korks,f,a,b,c,d,args);
});
G__11461.cljs$core$IFn$_invoke$arity$variadic = G__11461__delegate;
return G__11461;
})()
;
transact_BANG_ = function(cursor,korks,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,a);
case 5:
return transact_BANG___5.call(this,cursor,korks,f,a,b);
case 6:
return transact_BANG___6.call(this,cursor,korks,f,a,b,c);
case 7:
return transact_BANG___7.call(this,cursor,korks,f,a,b,c,d);
default:
return transact_BANG___8.cljs$core$IFn$_invoke$arity$variadic(cursor,korks,f,a,b,c,d, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$lang$maxFixedArity = 7;
transact_BANG_.cljs$lang$applyTo = transact_BANG___8.cljs$lang$applyTo;
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
transact_BANG_.cljs$core$IFn$_invoke$arity$5 = transact_BANG___5;
transact_BANG_.cljs$core$IFn$_invoke$arity$6 = transact_BANG___6;
transact_BANG_.cljs$core$IFn$_invoke$arity$7 = transact_BANG___7;
transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = transact_BANG___8.cljs$core$IFn$_invoke$arity$variadic;
return transact_BANG_;
})()
;
/**
* Like transact! but no list of keys given. An Om re-render
* will be triggered.
* @param {...*} var_args
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,f){return om.core._transact_BANG_.call(null,cursor,(function (state__4955__auto__,path__4956__auto__){if(cljs.core.empty_QMARK_.call(null,path__4956__auto__))
{return f.call(null,state__4955__auto__);
} else
{return cljs.core.update_in.call(null,state__4955__auto__,path__4956__auto__,f);
}
}));
});
var update_BANG___3 = (function (cursor,f,a){return om.core._transact_BANG_.call(null,cursor,(function (state__4955__auto__,path__4956__auto__){if(cljs.core.empty_QMARK_.call(null,path__4956__auto__))
{return f.call(null,state__4955__auto__,a);
} else
{return cljs.core.update_in.call(null,state__4955__auto__,path__4956__auto__,f,a);
}
}));
});
var update_BANG___4 = (function (cursor,f,a,b){return om.core._transact_BANG_.call(null,cursor,(function (state__4955__auto__,path__4956__auto__){if(cljs.core.empty_QMARK_.call(null,path__4956__auto__))
{return f.call(null,state__4955__auto__,a,b);
} else
{return cljs.core.update_in.call(null,state__4955__auto__,path__4956__auto__,f,a,b);
}
}));
});
var update_BANG___5 = (function (cursor,f,a,b,c){return om.core._transact_BANG_.call(null,cursor,(function (state__4955__auto__,path__4956__auto__){if(cljs.core.empty_QMARK_.call(null,path__4956__auto__))
{return f.call(null,state__4955__auto__,a,b,c);
} else
{return cljs.core.update_in.call(null,state__4955__auto__,path__4956__auto__,f,a,b,c);
}
}));
});
var update_BANG___6 = (function (cursor,f,a,b,c,d){return om.core._transact_BANG_.call(null,cursor,(function (state__4955__auto__,path__4956__auto__){if(cljs.core.empty_QMARK_.call(null,path__4956__auto__))
{return f.call(null,state__4955__auto__,a,b,c,d);
} else
{return cljs.core.update_in.call(null,state__4955__auto__,path__4956__auto__,f,a,b,c,d);
}
}));
});
var update_BANG___7 = (function() { 
var G__11463__delegate = function (cursor,f,a,b,c,d,args){return om.core._transact_BANG_.call(null,cursor,(function (state,path){if(cljs.core.empty_QMARK_.call(null,path))
{return cljs.core.apply.call(null,f,state,a,b,c,d,args);
} else
{return cljs.core.apply.call(null,cljs.core.update_in,state,path,f,a,b,c,d,args);
}
}));
};
var G__11463 = function (cursor,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__11463__delegate.call(this,cursor,f,a,b,c,d,args);};
G__11463.cljs$lang$maxFixedArity = 6;
G__11463.cljs$lang$applyTo = (function (arglist__11464){
var cursor = cljs.core.first(arglist__11464);
arglist__11464 = cljs.core.next(arglist__11464);
var f = cljs.core.first(arglist__11464);
arglist__11464 = cljs.core.next(arglist__11464);
var a = cljs.core.first(arglist__11464);
arglist__11464 = cljs.core.next(arglist__11464);
var b = cljs.core.first(arglist__11464);
arglist__11464 = cljs.core.next(arglist__11464);
var c = cljs.core.first(arglist__11464);
arglist__11464 = cljs.core.next(arglist__11464);
var d = cljs.core.first(arglist__11464);
var args = cljs.core.rest(arglist__11464);
return G__11463__delegate(cursor,f,a,b,c,d,args);
});
G__11463.cljs$core$IFn$_invoke$arity$variadic = G__11463__delegate;
return G__11463;
})()
;
update_BANG_ = function(cursor,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,f);
case 3:
return update_BANG___3.call(this,cursor,f,a);
case 4:
return update_BANG___4.call(this,cursor,f,a,b);
case 5:
return update_BANG___5.call(this,cursor,f,a,b,c);
case 6:
return update_BANG___6.call(this,cursor,f,a,b,c,d);
default:
return update_BANG___7.cljs$core$IFn$_invoke$arity$variadic(cursor,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$lang$maxFixedArity = 6;
update_BANG_.cljs$lang$applyTo = update_BANG___7.cljs$lang$applyTo;
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
update_BANG_.cljs$core$IFn$_invoke$arity$5 = update_BANG___5;
update_BANG_.cljs$core$IFn$_invoke$arity$6 = update_BANG___6;
update_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_BANG___7.cljs$core$IFn$_invoke$arity$variadic;
return update_BANG_;
})()
;
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function get_node(owner,name){var temp__4092__auto__ = owner.refs;if(cljs.core.truth_(temp__4092__auto__))
{var refs = temp__4092__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function set_state_BANG_(owner,korks,v){var _STAR_read_enabled_STAR_11466 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = owner.props;var state = owner.state;var cursor = (props["__om_cursor"]);var path = om.core._path.call(null,cursor);var pstate = (function (){var or__3403__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return (state["__om_state"]);
}
})();if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{(state["__om_pending_state"] = cljs.core.assoc.call(null,pstate,korks,v));
} else
{(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,korks,v));
}
if(cljs.core.empty_QMARK_.call(null,path))
{return cljs.core.swap_BANG_.call(null,om.core._state.call(null,cursor),cljs.core.clone);
} else
{return cljs.core.swap_BANG_.call(null,om.core._state.call(null,cursor),cljs.core.update_in,path,cljs.core.clone);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11466;
}});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return (owner.state["__om_state"]);
});
var get_render_state__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_render_state.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_render_state.call(null,owner);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get_in.call(null,get_render_state.call(null,owner),korks);
} else
{return null;
}
}
}
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
/**
* Create a cursor instance by attaching to an existing cursor. This
* supports building components which don't need to set app state but
* need to be added to the render tree.
*/
om.core.graft = (function graft(value,cursor){var state = om.core._state.call(null,cursor);var path = om.core._path.call(null,cursor);var shared = om.core._shared.call(null,cursor);if(om.core.cursor_QMARK_.call(null,value))
{throw (new Error([cljs.core.str(value),cljs.core.str(" is already a cursor.")].join('')));
} else
{var x11468 = cljs.core.clone.call(null,value);x11468.om$core$ICursor$ = true;
x11468.om$core$ICursor$_state$arity$1 = (function (_){var ___$1 = this;return state;
});
x11468.om$core$ICursor$_path$arity$1 = (function (_){var ___$1 = this;return path;
});
x11468.om$core$ICursor$_shared$arity$1 = (function (_){var ___$1 = this;return shared;
});
x11468.om$core$IValue$ = true;
x11468.om$core$IValue$_value$arity$1 = (function (_){var ___$1 = this;return value;
});
x11468.om$core$ITransact$ = true;
x11468.om$core$ITransact$_transact_BANG_$arity$2 = (function (_,___$1){var ___$2 = this;throw (new Error("Cannot transact on graft"));
});
return x11468;
}
});

//# sourceMappingURL=core.js.map