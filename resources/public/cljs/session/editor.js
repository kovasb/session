// Compiled by ClojureScript 0.0-2197
goog.provide('session.editor');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.string.StringBuffer');
goog.require('React');
session.editor.create_editor = (function create_editor(x,owner,opts){if(typeof session.editor.t9289 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.editor.t9289 = (function (opts,owner,x,create_editor,meta9290){
this.opts = opts;
this.owner = owner;
this.x = x;
this.create_editor = create_editor;
this.meta9290 = meta9290;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.editor.t9289.cljs$lang$type = true;
session.editor.t9289.cljs$lang$ctorStr = "session.editor/t9289";
session.editor.t9289.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"session.editor/t9289");
});
session.editor.t9289.prototype.om$core$IDidMount$ = true;
session.editor.t9289.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var n = om.core.get_node.call(null,self__.owner,"theInput");return CodeMirror.fromTextArea(n,{"onKeyEvent": ((function (n,___$1){
return (function (editor,event){if(cljs.core.truth_((function (){var and__3450__auto__ = event.shiftKey;if(cljs.core.truth_(and__3450__auto__))
{return (cljs.core._EQ_.call(null,"keydown",event.type)) && (cljs.core._EQ_.call(null,"Enter",event.keyIdentifier));
} else
{return and__3450__auto__;
}
})()))
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(self__.opts),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.deref.call(null,om.core.get_props.call(null,self__.owner)),new cljs.core.Keyword(null,"out","out",1014014656)),new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"eval-request","eval-request",2273713616)));
} else
{}
if(cljs.core._EQ_.call(null,event.type,"keyup"))
{om.core.transact_BANG_.call(null,om.core.get_props.call(null,self__.owner),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",1013907607)], null),((function (n,___$1){
return (function (e){return editor.getValue();
});})(n,___$1))
);
} else
{}
return false;
});})(n,___$1))
, "keyMap": "subpar", "mode": "text/x-clojure", "lineNumbers": false});
});
session.editor.t9289.prototype.om$core$IRender$ = true;
session.editor.t9289.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span({"style": {"min-width": "500px", "display": "inline-block", "padding": "-0.4em"}},om.dom.textarea.call(null,{"ref": "theInput"},om.core.value.call(null,new cljs.core.Keyword(null,"in","in",1013907607).cljs$core$IFn$_invoke$arity$1(self__.x))));
});
session.editor.t9289.prototype.om$core$IWillMount$ = true;
session.editor.t9289.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
session.editor.t9289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9291){var self__ = this;
var _9291__$1 = this;return self__.meta9290;
});
session.editor.t9289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9291,meta9290__$1){var self__ = this;
var _9291__$1 = this;return (new session.editor.t9289(self__.opts,self__.owner,self__.x,self__.create_editor,meta9290__$1));
});
session.editor.__GT_t9289 = (function __GT_t9289(opts__$1,owner__$1,x__$1,create_editor__$1,meta9290){return (new session.editor.t9289(opts__$1,owner__$1,x__$1,create_editor__$1,meta9290));
});
}
return (new session.editor.t9289(opts,owner,x,create_editor,null));
});

//# sourceMappingURL=editor.js.map