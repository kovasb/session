// Compiled by ClojureScript 0.0-2197
goog.provide('session.loop');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.style');
goog.require('om.dom');
goog.require('om.core');
goog.require('session.datatypes');
goog.require('om.core');
goog.require('session.editor');
goog.require('React');
goog.require('session.datatypes');
goog.require('session.loopcreator');
goog.require('om.dom');
goog.require('session.editor');
goog.require('cljs.core.async');
goog.require('goog.style');
session.loop.loop_delete_button = (function loop_delete_button(loop_delete_chan,loop_id){return React.DOM.i({"style": {"font-size": "0.7em", "float": "right"}, "className": "fa fa-times", "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,loop_delete_chan,loop_id);
})},"");
});
session.loop.loop_input_indicator = (function loop_input_indicator(){return React.DOM.span({"style": {"padding-right": "5px", "float": "left", "font-family": "monospace", "color": "#888888", "font-size": "10px"}},">>");
});
session.loop.loop_output_block = (function loop_output_block(cursor,owner){if(typeof session.loop.t9668 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.loop.t9668 = (function (owner,cursor,loop_output_block,meta9669){
this.owner = owner;
this.cursor = cursor;
this.loop_output_block = loop_output_block;
this.meta9669 = meta9669;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.loop.t9668.cljs$lang$type = true;
session.loop.t9668.cljs$lang$ctorStr = "session.loop/t9668";
session.loop.t9668.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.loop/t9668");
});
session.loop.t9668.prototype.om$core$IRender$ = true;
session.loop.t9668.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var builder_fn = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder","builder",1244848909));return React.DOM.div({"style": {"font-family": "monospace"}},React.DOM.i({"style": {"padding-right": "5px", "font-size": "0.7em"}, "className": "fa fa-chevron-left"},""),builder_fn.call(null,cljs.core.get_in.call(null,self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"out","out",1014014656)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-key","react-key",4184082563),new cljs.core.Keyword(null,"output","output",4303359091)], null)));
});
session.loop.t9668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9670){var self__ = this;
var _9670__$1 = this;return self__.meta9669;
});
session.loop.t9668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9670,meta9669__$1){var self__ = this;
var _9670__$1 = this;return (new session.loop.t9668(self__.owner,self__.cursor,self__.loop_output_block,meta9669__$1));
});
session.loop.__GT_t9668 = (function __GT_t9668(owner__$1,cursor__$1,loop_output_block__$1,meta9669){return (new session.loop.t9668(owner__$1,cursor__$1,loop_output_block__$1,meta9669));
});
}
return (new session.loop.t9668(owner,cursor,loop_output_block,null));
});
session.loop.loop_input_block = (function loop_input_block(cursor,opts){return React.DOM.div(null,React.DOM.span({"style": {"vertical-align": "top", "display": "inline-block"}},React.DOM.i({"style": {"padding-right": "5px", "font-size": "0.7em"}, "className": "fa fa-chevron-right"},"")),React.DOM.span({"style": {"display": "inline-block", "font-family": "monospace"}},om.core.build.call(null,session.editor.create_editor,cursor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-key","react-key",4184082563),new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.Keyword(null,"opts","opts",1017322386),opts], null))));
});
session.loop.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
session.loop.input_display = (function input_display(show){var ret = {"margin-left": "-1px", "padding": "inherit", "fontFamily": "Georgia", "fontSize": "13px", "border": "none", "width": "90%", "outline": "none"};if(cljs.core.not.call(null,show))
{(ret["display"] = "none");
return ret;
} else
{return ret;
}
});
session.loop.end_edit = (function end_edit(text,owner,cb){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",3420907786),false);
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178),text);
return cb.call(null,text);
});
session.loop.gsize__GT_vec = (function gsize__GT_vec(size){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size.width,size.height], null);
});
session.loop.editable = (function editable(data,owner,p__9673){var map__9680 = p__9673;var map__9680__$1 = ((cljs.core.seq_QMARK_.call(null,map__9680))?cljs.core.apply.call(null,cljs.core.hash_map,map__9680):map__9680);var opts = map__9680__$1;var on_edit = cljs.core.get.call(null,map__9680__$1,new cljs.core.Keyword(null,"on-edit","on-edit",3936438442));var edit_key = cljs.core.get.call(null,map__9680__$1,new cljs.core.Keyword(null,"edit-key","edit-key",2614779790));if(typeof session.loop.t9681 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.loop.t9681 = (function (edit_key,on_edit,opts,map__9680,p__9673,owner,data,editable,meta9682){
this.edit_key = edit_key;
this.on_edit = on_edit;
this.opts = opts;
this.map__9680 = map__9680;
this.p__9673 = p__9673;
this.owner = owner;
this.data = data;
this.editable = editable;
this.meta9682 = meta9682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.loop.t9681.cljs$lang$type = true;
session.loop.t9681.cljs$lang$ctorStr = "session.loop/t9681";
session.loop.t9681.cljs$lang$ctorPrWriter = ((function (map__9680,map__9680__$1,opts,on_edit,edit_key){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.loop/t9681");
});})(map__9680,map__9680__$1,opts,on_edit,edit_key))
;
session.loop.t9681.prototype.om$core$IRenderState$ = true;
session.loop.t9681.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__9680,map__9680__$1,opts,on_edit,edit_key){
return (function (_,p__9684){var self__ = this;
var map__9685 = p__9684;var map__9685__$1 = ((cljs.core.seq_QMARK_.call(null,map__9685))?cljs.core.apply.call(null,cljs.core.hash_map,map__9685):map__9685);var hover = cljs.core.get.call(null,map__9685__$1,new cljs.core.Keyword(null,"hover","hover",1113373870));var editing = cljs.core.get.call(null,map__9685__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var edit_text = cljs.core.get.call(null,map__9685__$1,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));var ___$1 = this;var text = cljs.core.get.call(null,self__.data,self__.edit_key);return React.DOM.div({"style": {"height": "20px", "width": "100%"}, "onMouseLeave": ((function (text,___$1,map__9685,map__9685__$1,hover,editing,edit_text,map__9680,map__9680__$1,opts,on_edit,edit_key){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hover","hover",1113373870),false);
});})(text,___$1,map__9685,map__9685__$1,hover,editing,edit_text,map__9680,map__9680__$1,opts,on_edit,edit_key))
, "onMouseEnter": ((function (text,___$1,map__9685,map__9685__$1,hover,editing,edit_text,map__9680,map__9680__$1,opts,on_edit,edit_key){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hover","hover",1113373870),true);
});})(text,___$1,map__9685,map__9685__$1,hover,editing,edit_text,map__9680,map__9680__$1,opts,on_edit,edit_key))
, "onClick": ((function (text,___$1,map__9685,map__9685__$1,hover,editing,edit_text,map__9680,map__9680__$1,opts,on_edit,edit_key){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),true);
});})(text,___$1,map__9685,map__9685__$1,hover,editing,edit_text,map__9680,map__9680__$1,opts,on_edit,edit_key))
},(cljs.core.truth_(hover)?React.DOM.i({"style": {"padding-right": "5px", "font-size": "0.7em"}, "className": "fa fa-pencil"},""):React.DOM.i({"style": {"padding-right": "5px", "font-size": "0.7em", "opacity": 0}, "className": "fa fa-pencil"},"")),om.dom.input.call(null,{"onBlur": ((function (text,___$1,map__9685,map__9685__$1,hover,editing,edit_text,map__9680,map__9680__$1,opts,on_edit,edit_key){
return (function (e){if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786))))
{return session.loop.end_edit.call(null,text,self__.owner,self__.on_edit);
} else
{return null;
}
});})(text,___$1,map__9685,map__9685__$1,hover,editing,edit_text,map__9680,map__9680__$1,opts,on_edit,edit_key))
, "onKeyPress": ((function (text,___$1,map__9685,map__9685__$1,hover,editing,edit_text,map__9680,map__9680__$1,opts,on_edit,edit_key){
return (function (p1__9672_SHARP_){if(cljs.core.truth_((function (){var and__3466__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786));if(cljs.core.truth_(and__3466__auto__))
{return (p1__9672_SHARP_.keyCode === 13);
} else
{return and__3466__auto__;
}
})()))
{om.core.get_node.call(null,self__.owner,"theInput").blur();
return session.loop.end_edit.call(null,text,self__.owner,self__.on_edit);
} else
{return null;
}
});})(text,___$1,map__9685,map__9685__$1,hover,editing,edit_text,map__9680,map__9680__$1,opts,on_edit,edit_key))
, "onChange": ((function (text,___$1,map__9685,map__9685__$1,hover,editing,edit_text,map__9680,map__9680__$1,opts,on_edit,edit_key){
return (function (p1__9671_SHARP_){return session.loop.handle_change.call(null,p1__9671_SHARP_,self__.data,self__.edit_key,self__.owner);
});})(text,___$1,map__9685,map__9685__$1,hover,editing,edit_text,map__9680,map__9680__$1,opts,on_edit,edit_key))
, "value": edit_text, "style": {"margin-left": "-1px", "padding": "inherit", "fontFamily": "Georgia", "fontSize": "13px", "border": "none", "width": "90%", "outline": "none"}, "ref": "theInput"}),(cljs.core.truth_(hover)?session.loop.loop_delete_button.call(null,new cljs.core.Keyword(null,"loop-delete","loop-delete",2983271526).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(om.core.value.call(null,self__.data))):""));
});})(map__9680,map__9680__$1,opts,on_edit,edit_key))
;
session.loop.t9681.prototype.om$core$IDidMount$ = true;
session.loop.t9681.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__9680,map__9680__$1,opts,on_edit,edit_key){
return (function (_){var self__ = this;
var ___$1 = this;return null;
});})(map__9680,map__9680__$1,opts,on_edit,edit_key))
;
session.loop.t9681.prototype.om$core$IInitState$ = true;
session.loop.t9681.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__9680,map__9680__$1,opts,on_edit,edit_key){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editing","editing",3420907786),false,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178),cljs.core.get.call(null,self__.data,self__.edit_key),new cljs.core.Keyword(null,"hover","hover",1113373870),false,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),null], null);
});})(map__9680,map__9680__$1,opts,on_edit,edit_key))
;
session.loop.t9681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9680,map__9680__$1,opts,on_edit,edit_key){
return (function (_9683){var self__ = this;
var _9683__$1 = this;return self__.meta9682;
});})(map__9680,map__9680__$1,opts,on_edit,edit_key))
;
session.loop.t9681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9680,map__9680__$1,opts,on_edit,edit_key){
return (function (_9683,meta9682__$1){var self__ = this;
var _9683__$1 = this;return (new session.loop.t9681(self__.edit_key,self__.on_edit,self__.opts,self__.map__9680,self__.p__9673,self__.owner,self__.data,self__.editable,meta9682__$1));
});})(map__9680,map__9680__$1,opts,on_edit,edit_key))
;
session.loop.__GT_t9681 = ((function (map__9680,map__9680__$1,opts,on_edit,edit_key){
return (function __GT_t9681(edit_key__$1,on_edit__$1,opts__$1,map__9680__$2,p__9673__$1,owner__$1,data__$1,editable__$1,meta9682){return (new session.loop.t9681(edit_key__$1,on_edit__$1,opts__$1,map__9680__$2,p__9673__$1,owner__$1,data__$1,editable__$1,meta9682));
});})(map__9680,map__9680__$1,opts,on_edit,edit_key))
;
}
return (new session.loop.t9681(edit_key,on_edit,opts,map__9680__$1,p__9673,owner,data,editable,null));
});
session.loop.note_view = (function note_view(cursor,owner,opts){return cljs.core.List.EMPTY;
});
session.loop.loop_toolbar = (function loop_toolbar(cursor,owner,opts){return om.core.build.call(null,session.loop.editable,cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loop-delete","loop-delete",2983271526),new cljs.core.Keyword(null,"loop-delete","loop-delete",2983271526).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"edit-key","edit-key",2614779790),new cljs.core.Keyword(null,"note","note",1017291620),new cljs.core.Keyword(null,"on-edit","on-edit",3936438442),(function (text){cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"update-note","update-note",4689076712),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om.core.get_props.call(null,owner))),new cljs.core.Keyword(null,"note","note",1017291620),text], null));
return om.core.transact_BANG_.call(null,om.core.get_props.call(null,owner),cljs.core.PersistentVector.EMPTY,(function (e){return cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"note","note",1017291620),text);
}));
})], null)], null));
});
session.loop.loop_renderers = new cljs.core.PersistentArrayMap.fromArray([session.datatypes.Loop,(function (cursor,owner,opts){if(typeof session.loop.t9686 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.loop.t9686 = (function (opts,owner,cursor,meta9687){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9687 = meta9687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.loop.t9686.cljs$lang$type = true;
session.loop.t9686.cljs$lang$ctorStr = "session.loop/t9686";
session.loop.t9686.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.loop/t9686");
});
session.loop.t9686.prototype.om$core$IRender$ = true;
session.loop.t9686.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div(null,session.loop.loop_toolbar.call(null,self__.cursor,self__.owner,self__.opts),session.loop.loop_input_block.call(null,self__.cursor,self__.opts),React.DOM.p(null,""),om.core.build.call(null,session.loop.loop_output_block,self__.cursor),om.core.build.call(null,session.loopcreator.new_loop_creator,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(om.core.value.call(null,self__.cursor)),new cljs.core.Keyword(null,"chan","chan",1016956612),new cljs.core.Keyword(null,"loop-create","loop-create",2966435767).cljs$core$IFn$_invoke$arity$1(self__.opts)], null),self__.cursor))));
});
session.loop.t9686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9688){var self__ = this;
var _9688__$1 = this;return self__.meta9687;
});
session.loop.t9686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9688,meta9687__$1){var self__ = this;
var _9688__$1 = this;return (new session.loop.t9686(self__.opts,self__.owner,self__.cursor,meta9687__$1));
});
session.loop.__GT_t9686 = (function __GT_t9686(opts__$1,owner__$1,cursor__$1,meta9687){return (new session.loop.t9686(opts__$1,owner__$1,cursor__$1,meta9687));
});
}
return (new session.loop.t9686(opts,owner,cursor,null));
})], true, false);

//# sourceMappingURL=loop.js.map