// Compiled by ClojureScript 0.0-2156
goog.provide('subpar.core');
goog.require('cljs.core');
goog.require('subpar.paredit');
goog.require('subpar.paredit');
subpar.core.get_index = (function get_index(cm){return cm.indexFromPos(cm.getCursor());
});
/**
* moves the point from i to j as long as they're different
*/
subpar.core.go_to_index = (function go_to_index(cm,i,j){if(cljs.core.not_EQ_.call(null,i,j))
{return cm.setCursor(cm.posFromIndex(j));
} else
{return null;
}
});
subpar.core.nothing_selected_QMARK_ = (function nothing_selected_QMARK_(cm){return cljs.core._EQ_.call(null,"",cm.getSelection());
});
subpar.core.get_info = (function get_info(cm){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cm.getCursor(),subpar.core.get_index.call(null,cm),cm.getValue()], null);
});
subpar.core.open_expression = (function open_expression(cm,pair){var vec__10057 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10057,0,null);var i = cljs.core.nth.call(null,vec__10057,1,null);var s = cljs.core.nth.call(null,vec__10057,2,null);if(subpar.paredit.in_string.call(null,s,i))
{cm.replaceRange(cljs.core.nth.call(null,pair,0),cur);
return cm.setCursor(cur.line,(cur.ch + 1));
} else
{return cm.compoundChange((function (){cm.replaceRange(pair,cur);
cm.setCursor(cur.line,(cur.ch + 1));
return cm.indentLine(cur.line);
}));
}
});
goog.exportSymbol('subpar.core.open_expression', subpar.core.open_expression);
subpar.core.forward_delete = (function forward_delete(cm){if(subpar.core.nothing_selected_QMARK_.call(null,cm))
{var vec__10062 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10062,0,null);var i = cljs.core.nth.call(null,vec__10062,1,null);var s = cljs.core.nth.call(null,vec__10062,2,null);var act = subpar.paredit.forward_delete_action.call(null,s,i);var s1 = cm.posFromIndex(i);var e1 = cm.posFromIndex((i + 1));var s2 = cm.posFromIndex((i - 1));var e2 = e1;var s3 = s1;var e3 = cm.posFromIndex((i + 2));var pred__10063 = cljs.core._EQ_;var expr__10064 = act;if(cljs.core.truth_(pred__10063.call(null,1,expr__10064)))
{return cm.replaceRange("",s1,e1);
} else
{if(cljs.core.truth_(pred__10063.call(null,2,expr__10064)))
{return cm.replaceRange("",s2,e2);
} else
{if(cljs.core.truth_(pred__10063.call(null,3,expr__10064)))
{return cm.replaceRange("",s3,e3);
} else
{if(cljs.core.truth_(pred__10063.call(null,4,expr__10064)))
{return cm.setCursor(e1);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10064)].join('')));
}
}
}
}
} else
{return cm.replaceSelection("");
}
});
goog.exportSymbol('subpar.core.forward_delete', subpar.core.forward_delete);
subpar.core.backward_delete = (function backward_delete(cm){if(subpar.core.nothing_selected_QMARK_.call(null,cm))
{var vec__10070 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10070,0,null);var i = cljs.core.nth.call(null,vec__10070,1,null);var s = cljs.core.nth.call(null,vec__10070,2,null);var act = subpar.paredit.backward_delete_action.call(null,s,i);var s1 = cm.posFromIndex((i - 1));var e1 = cm.posFromIndex(i);var s2 = s1;var e2 = cm.posFromIndex((i + 1));var s3 = cm.posFromIndex((i - 2));var e3 = e1;var pred__10071 = cljs.core._EQ_;var expr__10072 = act;if(cljs.core.truth_(pred__10071.call(null,1,expr__10072)))
{return cm.replaceRange("",s1,e1);
} else
{if(cljs.core.truth_(pred__10071.call(null,2,expr__10072)))
{return cm.replaceRange("",s2,e2);
} else
{if(cljs.core.truth_(pred__10071.call(null,3,expr__10072)))
{return cm.replaceRange("",s3,e3);
} else
{if(cljs.core.truth_(pred__10071.call(null,4,expr__10072)))
{return cm.setCursor(s1);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10072)].join('')));
}
}
}
}
} else
{return cm.replaceSelection("");
}
});
goog.exportSymbol('subpar.core.backward_delete', subpar.core.backward_delete);
subpar.core.double_quote = (function double_quote(cm){var vec__10078 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10078,0,null);var i = cljs.core.nth.call(null,vec__10078,1,null);var s = cljs.core.nth.call(null,vec__10078,2,null);var act = subpar.paredit.double_quote_action.call(null,s,i);var pred__10079 = cljs.core._EQ_;var expr__10080 = act;if(cljs.core.truth_(pred__10079.call(null,0,expr__10080)))
{return subpar.core.open_expression.call(null,cm,"\"\"");
} else
{if(cljs.core.truth_(pred__10079.call(null,1,expr__10080)))
{return cm.replaceRange("\\\"",cur);
} else
{if(cljs.core.truth_(pred__10079.call(null,2,expr__10080)))
{return subpar.core.go_to_index.call(null,cm,i,(i + 1));
} else
{if(cljs.core.truth_(pred__10079.call(null,3,expr__10080)))
{return cm.replaceRange("\"",cur);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10080)].join('')));
}
}
}
}
});
goog.exportSymbol('subpar.core.double_quote', subpar.core.double_quote);
subpar.core.close_expression = (function close_expression(cm,c){var vec__10084 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10084,0,null);var i = cljs.core.nth.call(null,vec__10084,1,null);var s = cljs.core.nth.call(null,vec__10084,2,null);var p = subpar.paredit.parse.call(null,s);if(subpar.paredit.in_string_QMARK_.call(null,p,i))
{cm.replaceRange(c,cur);
return cm.setCursor(cur.line,(cur.ch + 1));
} else
{var vec__10085 = subpar.paredit.close_expression_vals.call(null,p,i);var del = cljs.core.nth.call(null,vec__10085,0,null);var beg = cljs.core.nth.call(null,vec__10085,1,null);var end = cljs.core.nth.call(null,vec__10085,2,null);var dst = cljs.core.nth.call(null,vec__10085,3,null);if(cljs.core.truth_(dst))
{if(cljs.core.truth_(del))
{cm.replaceRange("",cm.posFromIndex(beg),cm.posFromIndex(end));
} else
{}
return subpar.core.go_to_index.call(null,cm,i,dst);
} else
{return null;
}
}
});
goog.exportSymbol('subpar.core.close_expression', subpar.core.close_expression);
subpar.core.go = (function go(cm,f){var vec__10087 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10087,0,null);var i = cljs.core.nth.call(null,vec__10087,1,null);var s = cljs.core.nth.call(null,vec__10087,2,null);var j = f.call(null,s,i);return subpar.core.go_to_index.call(null,cm,i,j);
});
subpar.core.backward_up = (function backward_up(cm){return subpar.core.go.call(null,cm,subpar.paredit.backward_up_fn);
});
goog.exportSymbol('subpar.core.backward_up', subpar.core.backward_up);
subpar.core.forward_down = (function forward_down(cm){return subpar.core.go.call(null,cm,subpar.paredit.forward_down_fn);
});
goog.exportSymbol('subpar.core.forward_down', subpar.core.forward_down);
subpar.core.backward = (function backward(cm){return subpar.core.go.call(null,cm,subpar.paredit.backward_fn);
});
goog.exportSymbol('subpar.core.backward', subpar.core.backward);
subpar.core.forward = (function forward(cm){return subpar.core.go.call(null,cm,subpar.paredit.forward_fn);
});
goog.exportSymbol('subpar.core.forward', subpar.core.forward);
subpar.core.backward_down = (function backward_down(cm){return subpar.core.go.call(null,cm,subpar.paredit.backward_down_fn);
});
goog.exportSymbol('subpar.core.backward_down', subpar.core.backward_down);
subpar.core.forward_up = (function forward_up(cm){return subpar.core.go.call(null,cm,subpar.paredit.forward_up_fn);
});
goog.exportSymbol('subpar.core.forward_up', subpar.core.forward_up);
subpar.core.forward_slurp = (function forward_slurp(cm){var vec__10091 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10091,0,null);var i = cljs.core.nth.call(null,vec__10091,1,null);var s = cljs.core.nth.call(null,vec__10091,2,null);var vec__10092 = subpar.paredit.forward_slurp_vals.call(null,s,i);var delimiter = cljs.core.nth.call(null,vec__10092,0,null);var si = cljs.core.nth.call(null,vec__10092,1,null);var di = cljs.core.nth.call(null,vec__10092,2,null);var ri = cljs.core.nth.call(null,vec__10092,3,null);if(cljs.core.truth_(ri))
{var start = cm.posFromIndex(si);var end = cm.posFromIndex((si + 1));var destination = cm.posFromIndex(di);var line = start.line;var update = ((function (start,end,destination,line){
return (function (){cm.replaceRange(delimiter,destination);
cm.replaceRange("",start,end);
return cljs.core.map.call(null,((function (start,end,destination,line){
return (function (p1__10088_SHARP_){return cm.indentLine(p1__10088_SHARP_);
});})(start,end,destination,line))
,cljs.core.range.call(null,line,(line + ri)));
});})(start,end,destination,line))
;return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_slurp', subpar.core.forward_slurp);
subpar.core.backward_slurp = (function backward_slurp(cm){var vec__10096 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10096,0,null);var i = cljs.core.nth.call(null,vec__10096,1,null);var s = cljs.core.nth.call(null,vec__10096,2,null);var vec__10097 = subpar.paredit.backward_slurp_vals.call(null,s,i);var delimiter = cljs.core.nth.call(null,vec__10097,0,null);var si = cljs.core.nth.call(null,vec__10097,1,null);var di = cljs.core.nth.call(null,vec__10097,2,null);var ri = cljs.core.nth.call(null,vec__10097,3,null);if(cljs.core.truth_(ri))
{var start = cm.posFromIndex(si);var end = cm.posFromIndex((si + 1));var destination = cm.posFromIndex(di);var line = start.line;var update = ((function (start,end,destination,line){
return (function (){cm.replaceRange("",start,end);
cm.replaceRange(delimiter,destination);
return cljs.core.map.call(null,((function (start,end,destination,line){
return (function (p1__10093_SHARP_){return cm.indentLine(p1__10093_SHARP_);
});})(start,end,destination,line))
,cljs.core.range.call(null,line,(line + ri)));
});})(start,end,destination,line))
;return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_slurp', subpar.core.backward_slurp);
subpar.core.backward_barf = (function backward_barf(cm){var vec__10101 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10101,0,null);var i = cljs.core.nth.call(null,vec__10101,1,null);var s = cljs.core.nth.call(null,vec__10101,2,null);var vec__10102 = subpar.paredit.backward_barf_vals.call(null,s,i);var delimiter = cljs.core.nth.call(null,vec__10102,0,null);var si = cljs.core.nth.call(null,vec__10102,1,null);var di = cljs.core.nth.call(null,vec__10102,2,null);var pad = cljs.core.nth.call(null,vec__10102,3,null);var ri = cljs.core.nth.call(null,vec__10102,4,null);if(cljs.core.truth_(ri))
{var delimiter__$1 = (cljs.core.truth_(pad)?[cljs.core.str(" "),cljs.core.str(delimiter)].join(''):delimiter);var destination = cm.posFromIndex(di);var start = cm.posFromIndex(si);var end = cm.posFromIndex((si + 1));var line = start.line;var update = ((function (delimiter__$1,destination,start,end,line){
return (function (){cm.replaceRange(delimiter__$1,destination);
cm.replaceRange("",start,end);
return cljs.core.map.call(null,((function (delimiter__$1,destination,start,end,line){
return (function (p1__10098_SHARP_){return cm.indentLine(p1__10098_SHARP_);
});})(delimiter__$1,destination,start,end,line))
,cljs.core.range.call(null,line,(line + ri)));
});})(delimiter__$1,destination,start,end,line))
;return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_barf', subpar.core.backward_barf);
subpar.core.forward_barf = (function forward_barf(cm){var vec__10106 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10106,0,null);var i = cljs.core.nth.call(null,vec__10106,1,null);var s = cljs.core.nth.call(null,vec__10106,2,null);var vec__10107 = subpar.paredit.forward_barf_vals.call(null,s,i);var delimiter = cljs.core.nth.call(null,vec__10107,0,null);var si = cljs.core.nth.call(null,vec__10107,1,null);var di = cljs.core.nth.call(null,vec__10107,2,null);var pad = cljs.core.nth.call(null,vec__10107,3,null);var ri = cljs.core.nth.call(null,vec__10107,4,null);var i0 = cljs.core.nth.call(null,vec__10107,5,null);if(cljs.core.truth_(ri))
{var delimiter__$1 = (cljs.core.truth_(pad)?[cljs.core.str(" "),cljs.core.str(delimiter)].join(''):delimiter);var destination = cm.posFromIndex(di);var start = cm.posFromIndex(si);var end = cm.posFromIndex((si + 1));var line = cm.posFromIndex(i0).line;var update = ((function (delimiter__$1,destination,start,end,line){
return (function (){cm.replaceRange("",start,end);
cm.replaceRange(delimiter__$1,destination);
return cljs.core.map.call(null,((function (delimiter__$1,destination,start,end,line){
return (function (p1__10103_SHARP_){return cm.indentLine(p1__10103_SHARP_);
});})(delimiter__$1,destination,start,end,line))
,cljs.core.range.call(null,line,(line + ri)));
});})(delimiter__$1,destination,start,end,line))
;return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_barf', subpar.core.forward_barf);
subpar.core.splice_delete_backward = (function splice_delete_backward(cm){var vec__10111 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10111,0,null);var i = cljs.core.nth.call(null,vec__10111,1,null);var s = cljs.core.nth.call(null,vec__10111,2,null);var vec__10112 = subpar.paredit.splice_delete_backward_vals.call(null,s,i);var start = cljs.core.nth.call(null,vec__10112,0,null);var end = cljs.core.nth.call(null,vec__10112,1,null);var closer = cljs.core.nth.call(null,vec__10112,2,null);var reindent = cljs.core.nth.call(null,vec__10112,3,null);var num = cljs.core.nth.call(null,vec__10112,4,null);if(cljs.core.truth_(reindent))
{var line = cm.posFromIndex(reindent).line;var c0 = cm.posFromIndex(closer);var c1 = cm.posFromIndex((closer + 1));var s0 = cm.posFromIndex(start);var s1 = cm.posFromIndex(end);var update = ((function (line,c0,c1,s0,s1){
return (function (){cm.replaceRange("",c0,c1);
cm.replaceRange("",s0,s1);
return cljs.core.map.call(null,((function (line,c0,c1,s0,s1){
return (function (p1__10108_SHARP_){return cm.indentLine(p1__10108_SHARP_);
});})(line,c0,c1,s0,s1))
,cljs.core.range.call(null,line,(line + num)));
});})(line,c0,c1,s0,s1))
;return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_backward', subpar.core.splice_delete_backward);
subpar.core.splice_delete_forward = (function splice_delete_forward(cm){var vec__10116 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10116,0,null);var i = cljs.core.nth.call(null,vec__10116,1,null);var s = cljs.core.nth.call(null,vec__10116,2,null);var vec__10117 = subpar.paredit.splice_delete_forward_vals.call(null,s,i);var opener = cljs.core.nth.call(null,vec__10117,0,null);var start = cljs.core.nth.call(null,vec__10117,1,null);var end = cljs.core.nth.call(null,vec__10117,2,null);var reindent = cljs.core.nth.call(null,vec__10117,3,null);var num = cljs.core.nth.call(null,vec__10117,4,null);if(cljs.core.truth_(reindent))
{var line = cm.posFromIndex(reindent).line;var o0 = cm.posFromIndex(opener);var o1 = cm.posFromIndex((opener + 1));var s0 = cm.posFromIndex(start);var s1 = cm.posFromIndex(end);var update = ((function (line,o0,o1,s0,s1){
return (function (){cm.replaceRange("",s0,s1);
cm.replaceRange("",o0,o1);
return cljs.core.map.call(null,((function (line,o0,o1,s0,s1){
return (function (p1__10113_SHARP_){return cm.indentLine(p1__10113_SHARP_);
});})(line,o0,o1,s0,s1))
,cljs.core.range.call(null,line,(line + num)));
});})(line,o0,o1,s0,s1))
;return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_forward', subpar.core.splice_delete_forward);
subpar.core.splice = (function splice(cm){var vec__10121 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10121,0,null);var i = cljs.core.nth.call(null,vec__10121,1,null);var s = cljs.core.nth.call(null,vec__10121,2,null);var vec__10122 = subpar.paredit.splice_vals.call(null,s,i);var opener = cljs.core.nth.call(null,vec__10122,0,null);var closer = cljs.core.nth.call(null,vec__10122,1,null);var reindent = cljs.core.nth.call(null,vec__10122,2,null);var num = cljs.core.nth.call(null,vec__10122,3,null);if(cljs.core.truth_(reindent))
{var line = cm.posFromIndex(reindent).line;var o0 = cm.posFromIndex(opener);var o1 = cm.posFromIndex((opener + 1));var c0 = cm.posFromIndex(closer);var c1 = cm.posFromIndex((closer + 1));var update = ((function (line,o0,o1,c0,c1){
return (function (){cm.replaceRange("",c0,c1);
cm.replaceRange("",o0,o1);
return cljs.core.map.call(null,((function (line,o0,o1,c0,c1){
return (function (p1__10118_SHARP_){return cm.indentLine(p1__10118_SHARP_);
});})(line,o0,o1,c0,c1))
,cljs.core.range.call(null,line,(line + num)));
});})(line,o0,o1,c0,c1))
;return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice', subpar.core.splice);
subpar.core.indent_selection = (function indent_selection(cm){if(cljs.core.truth_(cm.somethingSelected()))
{var start = cm.getCursor(true).line;var end = cm.getCursor(false).line;var f = ((function (start,end){
return (function (){return cljs.core.map.call(null,((function (start,end){
return (function (p1__10123_SHARP_){return cm.indentLine(p1__10123_SHARP_);
});})(start,end))
,cljs.core.range.call(null,start,(end + 1)));
});})(start,end))
;return cm.compoundChange(f);
} else
{return cm.indentLine(cm.getCursor().line);
}
});
goog.exportSymbol('subpar.core.indent_selection', subpar.core.indent_selection);

//# sourceMappingURL=core.js.map