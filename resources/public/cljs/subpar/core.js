// Compiled by ClojureScript 0.0-2197
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
subpar.core.open_expression = (function open_expression(cm,pair){var vec__10185 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10185,0,null);var i = cljs.core.nth.call(null,vec__10185,1,null);var s = cljs.core.nth.call(null,vec__10185,2,null);if(subpar.paredit.in_string.call(null,s,i))
{cm.replaceRange(cljs.core.nth.call(null,pair,0),cur);
return cm.setCursor(cur.line,(cur.ch + 1));
} else
{return cm.compoundChange(((function (vec__10185,cur,i,s){
return (function (){cm.replaceRange(pair,cur);
cm.setCursor(cur.line,(cur.ch + 1));
return cm.indentLine(cur.line);
});})(vec__10185,cur,i,s))
);
}
});
goog.exportSymbol('subpar.core.open_expression', subpar.core.open_expression);
subpar.core.forward_delete = (function forward_delete(cm){if(subpar.core.nothing_selected_QMARK_.call(null,cm))
{var vec__10190 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10190,0,null);var i = cljs.core.nth.call(null,vec__10190,1,null);var s = cljs.core.nth.call(null,vec__10190,2,null);var act = subpar.paredit.forward_delete_action.call(null,s,i);var s1 = cm.posFromIndex(i);var e1 = cm.posFromIndex((i + 1));var s2 = cm.posFromIndex((i - 1));var e2 = e1;var s3 = s1;var e3 = cm.posFromIndex((i + 2));var pred__10191 = cljs.core._EQ_;var expr__10192 = act;if(cljs.core.truth_(pred__10191.call(null,1,expr__10192)))
{return cm.replaceRange("",s1,e1);
} else
{if(cljs.core.truth_(pred__10191.call(null,2,expr__10192)))
{return cm.replaceRange("",s2,e2);
} else
{if(cljs.core.truth_(pred__10191.call(null,3,expr__10192)))
{return cm.replaceRange("",s3,e3);
} else
{if(cljs.core.truth_(pred__10191.call(null,4,expr__10192)))
{return cm.setCursor(e1);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10192)].join('')));
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
{var vec__10198 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10198,0,null);var i = cljs.core.nth.call(null,vec__10198,1,null);var s = cljs.core.nth.call(null,vec__10198,2,null);var act = subpar.paredit.backward_delete_action.call(null,s,i);var s1 = cm.posFromIndex((i - 1));var e1 = cm.posFromIndex(i);var s2 = s1;var e2 = cm.posFromIndex((i + 1));var s3 = cm.posFromIndex((i - 2));var e3 = e1;var pred__10199 = cljs.core._EQ_;var expr__10200 = act;if(cljs.core.truth_(pred__10199.call(null,1,expr__10200)))
{return cm.replaceRange("",s1,e1);
} else
{if(cljs.core.truth_(pred__10199.call(null,2,expr__10200)))
{return cm.replaceRange("",s2,e2);
} else
{if(cljs.core.truth_(pred__10199.call(null,3,expr__10200)))
{return cm.replaceRange("",s3,e3);
} else
{if(cljs.core.truth_(pred__10199.call(null,4,expr__10200)))
{return cm.setCursor(s1);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10200)].join('')));
}
}
}
}
} else
{return cm.replaceSelection("");
}
});
goog.exportSymbol('subpar.core.backward_delete', subpar.core.backward_delete);
subpar.core.double_quote = (function double_quote(cm){var vec__10206 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10206,0,null);var i = cljs.core.nth.call(null,vec__10206,1,null);var s = cljs.core.nth.call(null,vec__10206,2,null);var act = subpar.paredit.double_quote_action.call(null,s,i);var pred__10207 = cljs.core._EQ_;var expr__10208 = act;if(cljs.core.truth_(pred__10207.call(null,0,expr__10208)))
{return subpar.core.open_expression.call(null,cm,"\"\"");
} else
{if(cljs.core.truth_(pred__10207.call(null,1,expr__10208)))
{return cm.replaceRange("\\\"",cur);
} else
{if(cljs.core.truth_(pred__10207.call(null,2,expr__10208)))
{return subpar.core.go_to_index.call(null,cm,i,(i + 1));
} else
{if(cljs.core.truth_(pred__10207.call(null,3,expr__10208)))
{return cm.replaceRange("\"",cur);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10208)].join('')));
}
}
}
}
});
goog.exportSymbol('subpar.core.double_quote', subpar.core.double_quote);
subpar.core.close_expression = (function close_expression(cm,c){var vec__10212 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10212,0,null);var i = cljs.core.nth.call(null,vec__10212,1,null);var s = cljs.core.nth.call(null,vec__10212,2,null);var p = subpar.paredit.parse.call(null,s);if(subpar.paredit.in_string_QMARK_.call(null,p,i))
{cm.replaceRange(c,cur);
return cm.setCursor(cur.line,(cur.ch + 1));
} else
{var vec__10213 = subpar.paredit.close_expression_vals.call(null,p,i);var del = cljs.core.nth.call(null,vec__10213,0,null);var beg = cljs.core.nth.call(null,vec__10213,1,null);var end = cljs.core.nth.call(null,vec__10213,2,null);var dst = cljs.core.nth.call(null,vec__10213,3,null);if(cljs.core.truth_(dst))
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
subpar.core.go = (function go(cm,f){var vec__10215 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10215,0,null);var i = cljs.core.nth.call(null,vec__10215,1,null);var s = cljs.core.nth.call(null,vec__10215,2,null);var j = f.call(null,s,i);return subpar.core.go_to_index.call(null,cm,i,j);
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
subpar.core.forward_slurp = (function forward_slurp(cm){var vec__10219 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10219,0,null);var i = cljs.core.nth.call(null,vec__10219,1,null);var s = cljs.core.nth.call(null,vec__10219,2,null);var vec__10220 = subpar.paredit.forward_slurp_vals.call(null,s,i);var delimiter = cljs.core.nth.call(null,vec__10220,0,null);var si = cljs.core.nth.call(null,vec__10220,1,null);var di = cljs.core.nth.call(null,vec__10220,2,null);var ri = cljs.core.nth.call(null,vec__10220,3,null);if(cljs.core.truth_(ri))
{var start = cm.posFromIndex(si);var end = cm.posFromIndex((si + 1));var destination = cm.posFromIndex(di);var line = start.line;var update = ((function (start,end,destination,line,vec__10219,cur,i,s,vec__10220,delimiter,si,di,ri){
return (function (){cm.replaceRange(delimiter,destination);
cm.replaceRange("",start,end);
return cljs.core.map.call(null,((function (start,end,destination,line,vec__10219,cur,i,s,vec__10220,delimiter,si,di,ri){
return (function (p1__10216_SHARP_){return cm.indentLine(p1__10216_SHARP_);
});})(start,end,destination,line,vec__10219,cur,i,s,vec__10220,delimiter,si,di,ri))
,cljs.core.range.call(null,line,(line + ri)));
});})(start,end,destination,line,vec__10219,cur,i,s,vec__10220,delimiter,si,di,ri))
;return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_slurp', subpar.core.forward_slurp);
subpar.core.backward_slurp = (function backward_slurp(cm){var vec__10224 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10224,0,null);var i = cljs.core.nth.call(null,vec__10224,1,null);var s = cljs.core.nth.call(null,vec__10224,2,null);var vec__10225 = subpar.paredit.backward_slurp_vals.call(null,s,i);var delimiter = cljs.core.nth.call(null,vec__10225,0,null);var si = cljs.core.nth.call(null,vec__10225,1,null);var di = cljs.core.nth.call(null,vec__10225,2,null);var ri = cljs.core.nth.call(null,vec__10225,3,null);if(cljs.core.truth_(ri))
{var start = cm.posFromIndex(si);var end = cm.posFromIndex((si + 1));var destination = cm.posFromIndex(di);var line = start.line;var update = ((function (start,end,destination,line,vec__10224,cur,i,s,vec__10225,delimiter,si,di,ri){
return (function (){cm.replaceRange("",start,end);
cm.replaceRange(delimiter,destination);
return cljs.core.map.call(null,((function (start,end,destination,line,vec__10224,cur,i,s,vec__10225,delimiter,si,di,ri){
return (function (p1__10221_SHARP_){return cm.indentLine(p1__10221_SHARP_);
});})(start,end,destination,line,vec__10224,cur,i,s,vec__10225,delimiter,si,di,ri))
,cljs.core.range.call(null,line,(line + ri)));
});})(start,end,destination,line,vec__10224,cur,i,s,vec__10225,delimiter,si,di,ri))
;return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_slurp', subpar.core.backward_slurp);
subpar.core.backward_barf = (function backward_barf(cm){var vec__10229 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10229,0,null);var i = cljs.core.nth.call(null,vec__10229,1,null);var s = cljs.core.nth.call(null,vec__10229,2,null);var vec__10230 = subpar.paredit.backward_barf_vals.call(null,s,i);var delimiter = cljs.core.nth.call(null,vec__10230,0,null);var si = cljs.core.nth.call(null,vec__10230,1,null);var di = cljs.core.nth.call(null,vec__10230,2,null);var pad = cljs.core.nth.call(null,vec__10230,3,null);var ri = cljs.core.nth.call(null,vec__10230,4,null);if(cljs.core.truth_(ri))
{var delimiter__$1 = (cljs.core.truth_(pad)?[cljs.core.str(" "),cljs.core.str(delimiter)].join(''):delimiter);var destination = cm.posFromIndex(di);var start = cm.posFromIndex(si);var end = cm.posFromIndex((si + 1));var line = start.line;var update = ((function (delimiter__$1,destination,start,end,line,vec__10229,cur,i,s,vec__10230,delimiter,si,di,pad,ri){
return (function (){cm.replaceRange(delimiter__$1,destination);
cm.replaceRange("",start,end);
return cljs.core.map.call(null,((function (delimiter__$1,destination,start,end,line,vec__10229,cur,i,s,vec__10230,delimiter,si,di,pad,ri){
return (function (p1__10226_SHARP_){return cm.indentLine(p1__10226_SHARP_);
});})(delimiter__$1,destination,start,end,line,vec__10229,cur,i,s,vec__10230,delimiter,si,di,pad,ri))
,cljs.core.range.call(null,line,(line + ri)));
});})(delimiter__$1,destination,start,end,line,vec__10229,cur,i,s,vec__10230,delimiter,si,di,pad,ri))
;return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_barf', subpar.core.backward_barf);
subpar.core.forward_barf = (function forward_barf(cm){var vec__10234 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10234,0,null);var i = cljs.core.nth.call(null,vec__10234,1,null);var s = cljs.core.nth.call(null,vec__10234,2,null);var vec__10235 = subpar.paredit.forward_barf_vals.call(null,s,i);var delimiter = cljs.core.nth.call(null,vec__10235,0,null);var si = cljs.core.nth.call(null,vec__10235,1,null);var di = cljs.core.nth.call(null,vec__10235,2,null);var pad = cljs.core.nth.call(null,vec__10235,3,null);var ri = cljs.core.nth.call(null,vec__10235,4,null);var i0 = cljs.core.nth.call(null,vec__10235,5,null);if(cljs.core.truth_(ri))
{var delimiter__$1 = (cljs.core.truth_(pad)?[cljs.core.str(" "),cljs.core.str(delimiter)].join(''):delimiter);var destination = cm.posFromIndex(di);var start = cm.posFromIndex(si);var end = cm.posFromIndex((si + 1));var line = cm.posFromIndex(i0).line;var update = ((function (delimiter__$1,destination,start,end,line,vec__10234,cur,i,s,vec__10235,delimiter,si,di,pad,ri,i0){
return (function (){cm.replaceRange("",start,end);
cm.replaceRange(delimiter__$1,destination);
return cljs.core.map.call(null,((function (delimiter__$1,destination,start,end,line,vec__10234,cur,i,s,vec__10235,delimiter,si,di,pad,ri,i0){
return (function (p1__10231_SHARP_){return cm.indentLine(p1__10231_SHARP_);
});})(delimiter__$1,destination,start,end,line,vec__10234,cur,i,s,vec__10235,delimiter,si,di,pad,ri,i0))
,cljs.core.range.call(null,line,(line + ri)));
});})(delimiter__$1,destination,start,end,line,vec__10234,cur,i,s,vec__10235,delimiter,si,di,pad,ri,i0))
;return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_barf', subpar.core.forward_barf);
subpar.core.splice_delete_backward = (function splice_delete_backward(cm){var vec__10239 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10239,0,null);var i = cljs.core.nth.call(null,vec__10239,1,null);var s = cljs.core.nth.call(null,vec__10239,2,null);var vec__10240 = subpar.paredit.splice_delete_backward_vals.call(null,s,i);var start = cljs.core.nth.call(null,vec__10240,0,null);var end = cljs.core.nth.call(null,vec__10240,1,null);var closer = cljs.core.nth.call(null,vec__10240,2,null);var reindent = cljs.core.nth.call(null,vec__10240,3,null);var num = cljs.core.nth.call(null,vec__10240,4,null);if(cljs.core.truth_(reindent))
{var line = cm.posFromIndex(reindent).line;var c0 = cm.posFromIndex(closer);var c1 = cm.posFromIndex((closer + 1));var s0 = cm.posFromIndex(start);var s1 = cm.posFromIndex(end);var update = ((function (line,c0,c1,s0,s1,vec__10239,cur,i,s,vec__10240,start,end,closer,reindent,num){
return (function (){cm.replaceRange("",c0,c1);
cm.replaceRange("",s0,s1);
return cljs.core.map.call(null,((function (line,c0,c1,s0,s1,vec__10239,cur,i,s,vec__10240,start,end,closer,reindent,num){
return (function (p1__10236_SHARP_){return cm.indentLine(p1__10236_SHARP_);
});})(line,c0,c1,s0,s1,vec__10239,cur,i,s,vec__10240,start,end,closer,reindent,num))
,cljs.core.range.call(null,line,(line + num)));
});})(line,c0,c1,s0,s1,vec__10239,cur,i,s,vec__10240,start,end,closer,reindent,num))
;return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_backward', subpar.core.splice_delete_backward);
subpar.core.splice_delete_forward = (function splice_delete_forward(cm){var vec__10244 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10244,0,null);var i = cljs.core.nth.call(null,vec__10244,1,null);var s = cljs.core.nth.call(null,vec__10244,2,null);var vec__10245 = subpar.paredit.splice_delete_forward_vals.call(null,s,i);var opener = cljs.core.nth.call(null,vec__10245,0,null);var start = cljs.core.nth.call(null,vec__10245,1,null);var end = cljs.core.nth.call(null,vec__10245,2,null);var reindent = cljs.core.nth.call(null,vec__10245,3,null);var num = cljs.core.nth.call(null,vec__10245,4,null);if(cljs.core.truth_(reindent))
{var line = cm.posFromIndex(reindent).line;var o0 = cm.posFromIndex(opener);var o1 = cm.posFromIndex((opener + 1));var s0 = cm.posFromIndex(start);var s1 = cm.posFromIndex(end);var update = ((function (line,o0,o1,s0,s1,vec__10244,cur,i,s,vec__10245,opener,start,end,reindent,num){
return (function (){cm.replaceRange("",s0,s1);
cm.replaceRange("",o0,o1);
return cljs.core.map.call(null,((function (line,o0,o1,s0,s1,vec__10244,cur,i,s,vec__10245,opener,start,end,reindent,num){
return (function (p1__10241_SHARP_){return cm.indentLine(p1__10241_SHARP_);
});})(line,o0,o1,s0,s1,vec__10244,cur,i,s,vec__10245,opener,start,end,reindent,num))
,cljs.core.range.call(null,line,(line + num)));
});})(line,o0,o1,s0,s1,vec__10244,cur,i,s,vec__10245,opener,start,end,reindent,num))
;return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_forward', subpar.core.splice_delete_forward);
subpar.core.splice = (function splice(cm){var vec__10249 = subpar.core.get_info.call(null,cm);var cur = cljs.core.nth.call(null,vec__10249,0,null);var i = cljs.core.nth.call(null,vec__10249,1,null);var s = cljs.core.nth.call(null,vec__10249,2,null);var vec__10250 = subpar.paredit.splice_vals.call(null,s,i);var opener = cljs.core.nth.call(null,vec__10250,0,null);var closer = cljs.core.nth.call(null,vec__10250,1,null);var reindent = cljs.core.nth.call(null,vec__10250,2,null);var num = cljs.core.nth.call(null,vec__10250,3,null);if(cljs.core.truth_(reindent))
{var line = cm.posFromIndex(reindent).line;var o0 = cm.posFromIndex(opener);var o1 = cm.posFromIndex((opener + 1));var c0 = cm.posFromIndex(closer);var c1 = cm.posFromIndex((closer + 1));var update = ((function (line,o0,o1,c0,c1,vec__10249,cur,i,s,vec__10250,opener,closer,reindent,num){
return (function (){cm.replaceRange("",c0,c1);
cm.replaceRange("",o0,o1);
return cljs.core.map.call(null,((function (line,o0,o1,c0,c1,vec__10249,cur,i,s,vec__10250,opener,closer,reindent,num){
return (function (p1__10246_SHARP_){return cm.indentLine(p1__10246_SHARP_);
});})(line,o0,o1,c0,c1,vec__10249,cur,i,s,vec__10250,opener,closer,reindent,num))
,cljs.core.range.call(null,line,(line + num)));
});})(line,o0,o1,c0,c1,vec__10249,cur,i,s,vec__10250,opener,closer,reindent,num))
;return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice', subpar.core.splice);
subpar.core.indent_selection = (function indent_selection(cm){if(cljs.core.truth_(cm.somethingSelected()))
{var start = cm.getCursor(true).line;var end = cm.getCursor(false).line;var f = ((function (start,end){
return (function (){return cljs.core.map.call(null,((function (start,end){
return (function (p1__10251_SHARP_){return cm.indentLine(p1__10251_SHARP_);
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