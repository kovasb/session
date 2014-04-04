// Compiled by ClojureScript 0.0-2197
goog.provide('subpar.core');
goog.require('cljs.core');
goog.require('subpar.paredit');
goog.require('subpar.paredit');
subpar.core.compound_change = (function compound_change(cm,f){return f.call(null,cm);
});
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
subpar.core.open_expression = (function open_expression(cm,pair){var vec__10416 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10416,0,null);var i = cljs.core.nth.call(null,vec__10416,1,null);var s = cljs.core.nth.call(null,vec__10416,2,null);if(subpar.paredit.in_string.call(null,s,i))
{cm.replaceRange(cljs.core.nth.call(null,pair,0),cur);
return cm.setCursor(cur.line,(cur.ch + 1));
} else
{return subpar.core.compound_change.call(null,cm,((function (vec__10416,cur,i,s){
return (function (cm__$1){cm__$1.replaceRange(pair,cur);
cm__$1.setCursor(cur.line,(cur.ch + 1));
return cm__$1.indentLine(cur.line);
});})(vec__10416,cur,i,s))
);
}
});
goog.exportSymbol('subpar.core.open_expression', subpar.core.open_expression);
subpar.core.forward_delete = (function forward_delete(cm){if(subpar.core.nothing_selected_QMARK_.call(null,cm))
{var vec__10421 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10421,0,null);var i = cljs.core.nth.call(null,vec__10421,1,null);var s = cljs.core.nth.call(null,vec__10421,2,null);var act = subpar.paredit.forward_delete_action.call(null,s,i);var s1 = cm.posFromIndex(i);var e1 = cm.posFromIndex((i + 1));var s2 = cm.posFromIndex((i - 1));var e2 = e1;var s3 = s1;var e3 = cm.posFromIndex((i + 2));var pred__10422 = cljs.core._EQ_;var expr__10423 = act;if(cljs.core.truth_(pred__10422.call(null,1,expr__10423)))
{return cm.replaceRange("",s1,e1);
} else
{if(cljs.core.truth_(pred__10422.call(null,2,expr__10423)))
{return cm.replaceRange("",s2,e2);
} else
{if(cljs.core.truth_(pred__10422.call(null,3,expr__10423)))
{return cm.replaceRange("",s3,e3);
} else
{if(cljs.core.truth_(pred__10422.call(null,4,expr__10423)))
{return cm.setCursor(e1);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10423)].join('')));
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
{var vec__10429 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10429,0,null);var i = cljs.core.nth.call(null,vec__10429,1,null);var s = cljs.core.nth.call(null,vec__10429,2,null);var act = subpar.paredit.backward_delete_action.call(null,s,i);var s1 = cm.posFromIndex((i - 1));var e1 = cm.posFromIndex(i);var s2 = s1;var e2 = cm.posFromIndex((i + 1));var s3 = cm.posFromIndex((i - 2));var e3 = e1;var pred__10430 = cljs.core._EQ_;var expr__10431 = act;if(cljs.core.truth_(pred__10430.call(null,1,expr__10431)))
{return cm.replaceRange("",s1,e1);
} else
{if(cljs.core.truth_(pred__10430.call(null,2,expr__10431)))
{return cm.replaceRange("",s2,e2);
} else
{if(cljs.core.truth_(pred__10430.call(null,3,expr__10431)))
{return cm.replaceRange("",s3,e3);
} else
{if(cljs.core.truth_(pred__10430.call(null,4,expr__10431)))
{return cm.setCursor(s1);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10431)].join('')));
}
}
}
}
} else
{return cm.replaceSelection("");
}
});
goog.exportSymbol('subpar.core.backward_delete', subpar.core.backward_delete);
subpar.core.double_quote = (function double_quote(cm){var vec__10437 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10437,0,null);var i = cljs.core.nth.call(null,vec__10437,1,null);var s = cljs.core.nth.call(null,vec__10437,2,null);var act = subpar.paredit.double_quote_action.call(null,s,i);var pred__10438 = cljs.core._EQ_;var expr__10439 = act;if(cljs.core.truth_(pred__10438.call(null,0,expr__10439)))
{return subpar.core.open_expression.call(null,cm,"\"\"");
} else
{if(cljs.core.truth_(pred__10438.call(null,1,expr__10439)))
{return cm.replaceRange("\\\"",cur);
} else
{if(cljs.core.truth_(pred__10438.call(null,2,expr__10439)))
{return subpar.core.go_to_index.call(null,cm,i,(i + 1));
} else
{if(cljs.core.truth_(pred__10438.call(null,3,expr__10439)))
{return cm.replaceRange("\"",cur);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10439)].join('')));
}
}
}
}
});
goog.exportSymbol('subpar.core.double_quote', subpar.core.double_quote);
subpar.core.close_expression = (function close_expression(cm,c){var vec__10443 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10443,0,null);var i = cljs.core.nth.call(null,vec__10443,1,null);var s = cljs.core.nth.call(null,vec__10443,2,null);var p = subpar.paredit.parse.call(null,s);if(subpar.paredit.in_string_QMARK_.call(null,p,i))
{cm.replaceRange(c,cur);
return cm.setCursor(cur.line,(cur.ch + 1));
} else
{var vec__10444 = subpar.paredit.close_expression_vals.call(null,p,i);var del = cljs.core.nth.call(null,vec__10444,0,null);var beg = cljs.core.nth.call(null,vec__10444,1,null);var end = cljs.core.nth.call(null,vec__10444,2,null);var dst = cljs.core.nth.call(null,vec__10444,3,null);if(cljs.core.truth_(dst))
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
subpar.core.go = (function go(cm,f){var vec__10446 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10446,0,null);var i = cljs.core.nth.call(null,vec__10446,1,null);var s = cljs.core.nth.call(null,vec__10446,2,null);var j = f.call(null,s,i);return subpar.core.go_to_index.call(null,cm,i,j);
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
subpar.core.forward_slurp = (function forward_slurp(cm){var vec__10450 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10450,0,null);var i = cljs.core.nth.call(null,vec__10450,1,null);var s = cljs.core.nth.call(null,vec__10450,2,null);var vec__10451 = subpar.paredit.forward_slurp_vals.call(null,s,i);var delimiter = cljs.core.nth.call(null,vec__10451,0,null);var si = cljs.core.nth.call(null,vec__10451,1,null);var di = cljs.core.nth.call(null,vec__10451,2,null);var ri = cljs.core.nth.call(null,vec__10451,3,null);if(cljs.core.truth_(ri))
{var start = cm.posFromIndex(si);var end = cm.posFromIndex((si + 1));var destination = cm.posFromIndex(di);var line = start.line;var update = ((function (start,end,destination,line,vec__10450,cur,i,s,vec__10451,delimiter,si,di,ri){
return (function (cm__$1){cm__$1.replaceRange(delimiter,destination);
cm__$1.replaceRange("",start,end);
return cljs.core.map.call(null,((function (start,end,destination,line,vec__10450,cur,i,s,vec__10451,delimiter,si,di,ri){
return (function (p1__10447_SHARP_){return cm__$1.indentLine(p1__10447_SHARP_);
});})(start,end,destination,line,vec__10450,cur,i,s,vec__10451,delimiter,si,di,ri))
,cljs.core.range.call(null,line,(line + ri)));
});})(start,end,destination,line,vec__10450,cur,i,s,vec__10451,delimiter,si,di,ri))
;return subpar.core.compound_change.call(null,cm,update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_slurp', subpar.core.forward_slurp);
subpar.core.backward_slurp = (function backward_slurp(cm){var vec__10455 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10455,0,null);var i = cljs.core.nth.call(null,vec__10455,1,null);var s = cljs.core.nth.call(null,vec__10455,2,null);var vec__10456 = subpar.paredit.backward_slurp_vals.call(null,s,i);var delimiter = cljs.core.nth.call(null,vec__10456,0,null);var si = cljs.core.nth.call(null,vec__10456,1,null);var di = cljs.core.nth.call(null,vec__10456,2,null);var ri = cljs.core.nth.call(null,vec__10456,3,null);if(cljs.core.truth_(ri))
{var start = cm.posFromIndex(si);var end = cm.posFromIndex((si + 1));var destination = cm.posFromIndex(di);var line = start.line;var update = ((function (start,end,destination,line,vec__10455,cur,i,s,vec__10456,delimiter,si,di,ri){
return (function (cm__$1){cm__$1.replaceRange("",start,end);
cm__$1.replaceRange(delimiter,destination);
return cljs.core.map.call(null,((function (start,end,destination,line,vec__10455,cur,i,s,vec__10456,delimiter,si,di,ri){
return (function (p1__10452_SHARP_){return cm__$1.indentLine(p1__10452_SHARP_);
});})(start,end,destination,line,vec__10455,cur,i,s,vec__10456,delimiter,si,di,ri))
,cljs.core.range.call(null,line,(line + ri)));
});})(start,end,destination,line,vec__10455,cur,i,s,vec__10456,delimiter,si,di,ri))
;return subpar.core.compound_change.call(null,cm,update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_slurp', subpar.core.backward_slurp);
subpar.core.backward_barf = (function backward_barf(cm){var vec__10460 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10460,0,null);var i = cljs.core.nth.call(null,vec__10460,1,null);var s = cljs.core.nth.call(null,vec__10460,2,null);var vec__10461 = subpar.paredit.backward_barf_vals.call(null,s,i);var delimiter = cljs.core.nth.call(null,vec__10461,0,null);var si = cljs.core.nth.call(null,vec__10461,1,null);var di = cljs.core.nth.call(null,vec__10461,2,null);var pad = cljs.core.nth.call(null,vec__10461,3,null);var ri = cljs.core.nth.call(null,vec__10461,4,null);if(cljs.core.truth_(ri))
{var delimiter__$1 = (cljs.core.truth_(pad)?[cljs.core.str(" "),cljs.core.str(delimiter)].join(''):delimiter);var destination = cm.posFromIndex(di);var start = cm.posFromIndex(si);var end = cm.posFromIndex((si + 1));var line = start.line;var update = ((function (delimiter__$1,destination,start,end,line,vec__10460,cur,i,s,vec__10461,delimiter,si,di,pad,ri){
return (function (cm__$1){cm__$1.replaceRange(delimiter__$1,destination);
cm__$1.replaceRange("",start,end);
return cljs.core.map.call(null,((function (delimiter__$1,destination,start,end,line,vec__10460,cur,i,s,vec__10461,delimiter,si,di,pad,ri){
return (function (p1__10457_SHARP_){return cm__$1.indentLine(p1__10457_SHARP_);
});})(delimiter__$1,destination,start,end,line,vec__10460,cur,i,s,vec__10461,delimiter,si,di,pad,ri))
,cljs.core.range.call(null,line,(line + ri)));
});})(delimiter__$1,destination,start,end,line,vec__10460,cur,i,s,vec__10461,delimiter,si,di,pad,ri))
;return subpar.core.compound_change.call(null,cm,update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_barf', subpar.core.backward_barf);
subpar.core.forward_barf = (function forward_barf(cm){var vec__10465 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10465,0,null);var i = cljs.core.nth.call(null,vec__10465,1,null);var s = cljs.core.nth.call(null,vec__10465,2,null);var vec__10466 = subpar.paredit.forward_barf_vals.call(null,s,i);var delimiter = cljs.core.nth.call(null,vec__10466,0,null);var si = cljs.core.nth.call(null,vec__10466,1,null);var di = cljs.core.nth.call(null,vec__10466,2,null);var pad = cljs.core.nth.call(null,vec__10466,3,null);var ri = cljs.core.nth.call(null,vec__10466,4,null);var i0 = cljs.core.nth.call(null,vec__10466,5,null);if(cljs.core.truth_(ri))
{var delimiter__$1 = (cljs.core.truth_(pad)?[cljs.core.str(" "),cljs.core.str(delimiter)].join(''):delimiter);var destination = cm.posFromIndex(di);var start = cm.posFromIndex(si);var end = cm.posFromIndex((si + 1));var line = cm.posFromIndex(i0).line;var update = ((function (delimiter__$1,destination,start,end,line,vec__10465,cur,i,s,vec__10466,delimiter,si,di,pad,ri,i0){
return (function (cm__$1){cm__$1.replaceRange("",start,end);
cm__$1.replaceRange(delimiter__$1,destination);
return cljs.core.map.call(null,((function (delimiter__$1,destination,start,end,line,vec__10465,cur,i,s,vec__10466,delimiter,si,di,pad,ri,i0){
return (function (p1__10462_SHARP_){return cm__$1.indentLine(p1__10462_SHARP_);
});})(delimiter__$1,destination,start,end,line,vec__10465,cur,i,s,vec__10466,delimiter,si,di,pad,ri,i0))
,cljs.core.range.call(null,line,(line + ri)));
});})(delimiter__$1,destination,start,end,line,vec__10465,cur,i,s,vec__10466,delimiter,si,di,pad,ri,i0))
;return subpar.core.compound_change.call(null,cm,update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_barf', subpar.core.forward_barf);
subpar.core.splice_delete_backward = (function splice_delete_backward(cm){var vec__10470 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10470,0,null);var i = cljs.core.nth.call(null,vec__10470,1,null);var s = cljs.core.nth.call(null,vec__10470,2,null);var vec__10471 = subpar.paredit.splice_delete_backward_vals.call(null,s,i);var start = cljs.core.nth.call(null,vec__10471,0,null);var end = cljs.core.nth.call(null,vec__10471,1,null);var closer = cljs.core.nth.call(null,vec__10471,2,null);var reindent = cljs.core.nth.call(null,vec__10471,3,null);var num = cljs.core.nth.call(null,vec__10471,4,null);if(cljs.core.truth_(reindent))
{var line = cm.posFromIndex(reindent).line;var c0 = cm.posFromIndex(closer);var c1 = cm.posFromIndex((closer + 1));var s0 = cm.posFromIndex(start);var s1 = cm.posFromIndex(end);var update = ((function (line,c0,c1,s0,s1,vec__10470,cur,i,s,vec__10471,start,end,closer,reindent,num){
return (function (cm__$1){cm__$1.replaceRange("",c0,c1);
cm__$1.replaceRange("",s0,s1);
return cljs.core.map.call(null,((function (line,c0,c1,s0,s1,vec__10470,cur,i,s,vec__10471,start,end,closer,reindent,num){
return (function (p1__10467_SHARP_){return cm__$1.indentLine(p1__10467_SHARP_);
});})(line,c0,c1,s0,s1,vec__10470,cur,i,s,vec__10471,start,end,closer,reindent,num))
,cljs.core.range.call(null,line,(line + num)));
});})(line,c0,c1,s0,s1,vec__10470,cur,i,s,vec__10471,start,end,closer,reindent,num))
;return subpar.core.compound_change.call(null,cm,update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_backward', subpar.core.splice_delete_backward);
subpar.core.splice_delete_forward = (function splice_delete_forward(cm){var vec__10475 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10475,0,null);var i = cljs.core.nth.call(null,vec__10475,1,null);var s = cljs.core.nth.call(null,vec__10475,2,null);var vec__10476 = subpar.paredit.splice_delete_forward_vals.call(null,s,i);var opener = cljs.core.nth.call(null,vec__10476,0,null);var start = cljs.core.nth.call(null,vec__10476,1,null);var end = cljs.core.nth.call(null,vec__10476,2,null);var reindent = cljs.core.nth.call(null,vec__10476,3,null);var num = cljs.core.nth.call(null,vec__10476,4,null);if(cljs.core.truth_(reindent))
{var line = cm.posFromIndex(reindent).line;var o0 = cm.posFromIndex(opener);var o1 = cm.posFromIndex((opener + 1));var s0 = cm.posFromIndex(start);var s1 = cm.posFromIndex(end);var update = ((function (line,o0,o1,s0,s1,vec__10475,cur,i,s,vec__10476,opener,start,end,reindent,num){
return (function (cm__$1){cm__$1.replaceRange("",s0,s1);
cm__$1.replaceRange("",o0,o1);
return cljs.core.map.call(null,((function (line,o0,o1,s0,s1,vec__10475,cur,i,s,vec__10476,opener,start,end,reindent,num){
return (function (p1__10472_SHARP_){return cm__$1.indentLine(p1__10472_SHARP_);
});})(line,o0,o1,s0,s1,vec__10475,cur,i,s,vec__10476,opener,start,end,reindent,num))
,cljs.core.range.call(null,line,(line + num)));
});})(line,o0,o1,s0,s1,vec__10475,cur,i,s,vec__10476,opener,start,end,reindent,num))
;return subpar.core.compound_change.call(null,cm,update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_forward', subpar.core.splice_delete_forward);
subpar.core.splice = (function splice(cm){var vec__10480 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10480,0,null);var i = cljs.core.nth.call(null,vec__10480,1,null);var s = cljs.core.nth.call(null,vec__10480,2,null);var vec__10481 = subpar.paredit.splice_vals.call(null,s,i);var opener = cljs.core.nth.call(null,vec__10481,0,null);var closer = cljs.core.nth.call(null,vec__10481,1,null);var reindent = cljs.core.nth.call(null,vec__10481,2,null);var num = cljs.core.nth.call(null,vec__10481,3,null);if(cljs.core.truth_(reindent))
{var line = cm.posFromIndex(reindent).line;var o0 = cm.posFromIndex(opener);var o1 = cm.posFromIndex((opener + 1));var c0 = cm.posFromIndex(closer);var c1 = cm.posFromIndex((closer + 1));var update = ((function (line,o0,o1,c0,c1,vec__10480,cur,i,s,vec__10481,opener,closer,reindent,num){
return (function (cm__$1){cm__$1.replaceRange("",c0,c1);
cm__$1.replaceRange("",o0,o1);
return cljs.core.map.call(null,((function (line,o0,o1,c0,c1,vec__10480,cur,i,s,vec__10481,opener,closer,reindent,num){
return (function (p1__10477_SHARP_){return cm__$1.indentLine(p1__10477_SHARP_);
});})(line,o0,o1,c0,c1,vec__10480,cur,i,s,vec__10481,opener,closer,reindent,num))
,cljs.core.range.call(null,line,(line + num)));
});})(line,o0,o1,c0,c1,vec__10480,cur,i,s,vec__10481,opener,closer,reindent,num))
;return subpar.core.compound_change.call(null,cm,update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice', subpar.core.splice);
subpar.core.indent_selection = (function indent_selection(cm){if(cljs.core.truth_(cm.somethingSelected()))
{var start = cm.getCursor(true).line;var end = cm.getCursor(false).line;var f = ((function (start,end){
return (function (cm__$1){return cljs.core.map.call(null,((function (start,end){
return (function (p1__10482_SHARP_){return cm__$1.indentLine(p1__10482_SHARP_);
});})(start,end))
,cljs.core.range.call(null,start,(end + 1)));
});})(start,end))
;return subpar.core.compound_change.call(null,cm,f);
} else
{return cm.indentLine(cm.getCursor().line);
}
});
goog.exportSymbol('subpar.core.indent_selection', subpar.core.indent_selection);

//# sourceMappingURL=core.js.map