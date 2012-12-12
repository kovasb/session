goog.provide('subpar.core');
goog.require('cljs.core');
goog.require('subpar.paredit');
goog.require('subpar.paredit');
subpar.core.get_index = (function get_index(cm){
return cm.indexFromPos(cm.getCursor());
});
/**
* moves the point from i to j as long as they're different
*/
subpar.core.go_to_index = (function go_to_index(cm,i,j){
if(cljs.core.not_EQ_.call(null,i,j))
{return cm.setCursor(cm.posFromIndex(j));
} else
{return null;
}
});
subpar.core.nothing_selected_QMARK_ = (function nothing_selected_QMARK_(cm){
return cljs.core._EQ_.call(null,"",cm.getSelection());
});
subpar.core.get_info = (function get_info(cm){
return cljs.core.PersistentVector.fromArray([cm.getCursor(),subpar.core.get_index.call(null,cm),cm.getValue()], true);
});
subpar.core.open_expression = (function open_expression(cm,pair){
var vec__3117 = subpar.core.get_info.call(null,cm);
var cur = cljs.core.nth.call(null,vec__3117,0,null);
var i = cljs.core.nth.call(null,vec__3117,1,null);
var s = cljs.core.nth.call(null,vec__3117,2,null);
if(cljs.core.truth_(subpar.paredit.in_string.call(null,s,i)))
{cm.replaceRange(cljs.core.nth.call(null,pair,0),cur);
return cm.setCursor(cur.line,(cur.ch + 1));
} else
{return cm.compoundChange((function (){
cm.replaceRange(pair,cur);
cm.setCursor(cur.line,(cur.ch + 1));
return cm.indentLine(cur.line);
}));
}
});
goog.exportSymbol('subpar.core.open_expression', subpar.core.open_expression);
subpar.core.forward_delete = (function forward_delete(cm){
if(cljs.core.truth_(subpar.core.nothing_selected_QMARK_.call(null,cm)))
{var vec__3122 = subpar.core.get_info.call(null,cm);
var cur = cljs.core.nth.call(null,vec__3122,0,null);
var i = cljs.core.nth.call(null,vec__3122,1,null);
var s = cljs.core.nth.call(null,vec__3122,2,null);
var act = subpar.paredit.forward_delete_action.call(null,s,i);
var s1 = cm.posFromIndex(i);
var e1 = cm.posFromIndex((i + 1));
var s2 = cm.posFromIndex((i - 1));
var e2 = e1;
var s3 = s1;
var e3 = cm.posFromIndex((i + 2));
var pred__3123 = cljs.core._EQ_;
var expr__3124 = act;
if(pred__3123.call(null,1,expr__3124))
{return cm.replaceRange("",s1,e1);
} else
{if(pred__3123.call(null,2,expr__3124))
{return cm.replaceRange("",s2,e2);
} else
{if(pred__3123.call(null,3,expr__3124))
{return cm.replaceRange("",s3,e3);
} else
{if(pred__3123.call(null,4,expr__3124))
{return cm.setCursor(e1);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__3124)].join('')));
}
}
}
}
} else
{return cm.replaceSelection("");
}
});
goog.exportSymbol('subpar.core.forward_delete', subpar.core.forward_delete);
subpar.core.backward_delete = (function backward_delete(cm){
if(cljs.core.truth_(subpar.core.nothing_selected_QMARK_.call(null,cm)))
{var vec__3130 = subpar.core.get_info.call(null,cm);
var cur = cljs.core.nth.call(null,vec__3130,0,null);
var i = cljs.core.nth.call(null,vec__3130,1,null);
var s = cljs.core.nth.call(null,vec__3130,2,null);
var act = subpar.paredit.backward_delete_action.call(null,s,i);
var s1 = cm.posFromIndex((i - 1));
var e1 = cm.posFromIndex(i);
var s2 = s1;
var e2 = cm.posFromIndex((i + 1));
var s3 = cm.posFromIndex((i - 2));
var e3 = e1;
var pred__3131 = cljs.core._EQ_;
var expr__3132 = act;
if(pred__3131.call(null,1,expr__3132))
{return cm.replaceRange("",s1,e1);
} else
{if(pred__3131.call(null,2,expr__3132))
{return cm.replaceRange("",s2,e2);
} else
{if(pred__3131.call(null,3,expr__3132))
{return cm.replaceRange("",s3,e3);
} else
{if(pred__3131.call(null,4,expr__3132))
{return cm.setCursor(s1);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__3132)].join('')));
}
}
}
}
} else
{return cm.replaceSelection("");
}
});
goog.exportSymbol('subpar.core.backward_delete', subpar.core.backward_delete);
subpar.core.double_quote = (function double_quote(cm){
var vec__3138 = subpar.core.get_info.call(null,cm);
var cur = cljs.core.nth.call(null,vec__3138,0,null);
var i = cljs.core.nth.call(null,vec__3138,1,null);
var s = cljs.core.nth.call(null,vec__3138,2,null);
var act = subpar.paredit.double_quote_action.call(null,s,i);
var pred__3139 = cljs.core._EQ_;
var expr__3140 = act;
if(pred__3139.call(null,0,expr__3140))
{return subpar.core.open_expression.call(null,cm,"\"\"");
} else
{if(pred__3139.call(null,1,expr__3140))
{return cm.replaceRange("\\\"",cur);
} else
{if(pred__3139.call(null,2,expr__3140))
{return subpar.core.go_to_index.call(null,cm,i,(i + 1));
} else
{if(pred__3139.call(null,3,expr__3140))
{return cm.replaceRange("\"",cur);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__3140)].join('')));
}
}
}
}
});
goog.exportSymbol('subpar.core.double_quote', subpar.core.double_quote);
subpar.core.close_expression = (function close_expression(cm,c){
var vec__3144 = subpar.core.get_info.call(null,cm);
var cur = cljs.core.nth.call(null,vec__3144,0,null);
var i = cljs.core.nth.call(null,vec__3144,1,null);
var s = cljs.core.nth.call(null,vec__3144,2,null);
var p = subpar.paredit.parse.call(null,s);
if(cljs.core.truth_(subpar.paredit.in_string_QMARK_.call(null,p,i)))
{cm.replaceRange(c,cur);
return cm.setCursor(cur.line,(cur.ch + 1));
} else
{var vec__3145 = subpar.paredit.close_expression_vals.call(null,p,i);
var del = cljs.core.nth.call(null,vec__3145,0,null);
var beg = cljs.core.nth.call(null,vec__3145,1,null);
var end = cljs.core.nth.call(null,vec__3145,2,null);
var dst = cljs.core.nth.call(null,vec__3145,3,null);
if(cljs.core.truth_(dst))
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
subpar.core.go = (function go(cm,f){
var vec__3147 = subpar.core.get_info.call(null,cm);
var cur = cljs.core.nth.call(null,vec__3147,0,null);
var i = cljs.core.nth.call(null,vec__3147,1,null);
var s = cljs.core.nth.call(null,vec__3147,2,null);
var j = f.call(null,s,i);
return subpar.core.go_to_index.call(null,cm,i,j);
});
subpar.core.backward_up = (function backward_up(cm){
return subpar.core.go.call(null,cm,subpar.paredit.backward_up_fn);
});
goog.exportSymbol('subpar.core.backward_up', subpar.core.backward_up);
subpar.core.forward_down = (function forward_down(cm){
return subpar.core.go.call(null,cm,subpar.paredit.forward_down_fn);
});
goog.exportSymbol('subpar.core.forward_down', subpar.core.forward_down);
subpar.core.backward = (function backward(cm){
return subpar.core.go.call(null,cm,subpar.paredit.backward_fn);
});
goog.exportSymbol('subpar.core.backward', subpar.core.backward);
subpar.core.forward = (function forward(cm){
return subpar.core.go.call(null,cm,subpar.paredit.forward_fn);
});
goog.exportSymbol('subpar.core.forward', subpar.core.forward);
subpar.core.backward_down = (function backward_down(cm){
return subpar.core.go.call(null,cm,subpar.paredit.backward_down_fn);
});
goog.exportSymbol('subpar.core.backward_down', subpar.core.backward_down);
subpar.core.forward_up = (function forward_up(cm){
return subpar.core.go.call(null,cm,subpar.paredit.forward_up_fn);
});
goog.exportSymbol('subpar.core.forward_up', subpar.core.forward_up);
subpar.core.forward_slurp = (function forward_slurp(cm){
var vec__3152 = subpar.core.get_info.call(null,cm);
var cur = cljs.core.nth.call(null,vec__3152,0,null);
var i = cljs.core.nth.call(null,vec__3152,1,null);
var s = cljs.core.nth.call(null,vec__3152,2,null);
var vec__3153 = subpar.paredit.forward_slurp_vals.call(null,s,i);
var delimiter = cljs.core.nth.call(null,vec__3153,0,null);
var si = cljs.core.nth.call(null,vec__3153,1,null);
var di = cljs.core.nth.call(null,vec__3153,2,null);
var ri = cljs.core.nth.call(null,vec__3153,3,null);
if(cljs.core.truth_(ri))
{var start = cm.posFromIndex(si);
var end = cm.posFromIndex((si + 1));
var destination = cm.posFromIndex(di);
var line = start.line;
var update = (function (){
cm.replaceRange(delimiter,destination);
cm.replaceRange("",start,end);
return cljs.core.map.call(null,(function (p1__3148_SHARP_){
return cm.indentLine(p1__3148_SHARP_);
}),cljs.core.range.call(null,line,(line + ri)));
});
return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_slurp', subpar.core.forward_slurp);
subpar.core.backward_slurp = (function backward_slurp(cm){
var vec__3157 = subpar.core.get_info.call(null,cm);
var cur = cljs.core.nth.call(null,vec__3157,0,null);
var i = cljs.core.nth.call(null,vec__3157,1,null);
var s = cljs.core.nth.call(null,vec__3157,2,null);
var vec__3158 = subpar.paredit.backward_slurp_vals.call(null,s,i);
var delimiter = cljs.core.nth.call(null,vec__3158,0,null);
var si = cljs.core.nth.call(null,vec__3158,1,null);
var di = cljs.core.nth.call(null,vec__3158,2,null);
var ri = cljs.core.nth.call(null,vec__3158,3,null);
if(cljs.core.truth_(ri))
{var start = cm.posFromIndex(si);
var end = cm.posFromIndex((si + 1));
var destination = cm.posFromIndex(di);
var line = start.line;
var update = (function (){
cm.replaceRange("",start,end);
cm.replaceRange(delimiter,destination);
return cljs.core.map.call(null,(function (p1__3149_SHARP_){
return cm.indentLine(p1__3149_SHARP_);
}),cljs.core.range.call(null,line,(line + ri)));
});
return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_slurp', subpar.core.backward_slurp);
subpar.core.backward_barf = (function backward_barf(cm){
var vec__3162 = subpar.core.get_info.call(null,cm);
var cur = cljs.core.nth.call(null,vec__3162,0,null);
var i = cljs.core.nth.call(null,vec__3162,1,null);
var s = cljs.core.nth.call(null,vec__3162,2,null);
var vec__3163 = subpar.paredit.backward_barf_vals.call(null,s,i);
var delimiter = cljs.core.nth.call(null,vec__3163,0,null);
var si = cljs.core.nth.call(null,vec__3163,1,null);
var di = cljs.core.nth.call(null,vec__3163,2,null);
var pad = cljs.core.nth.call(null,vec__3163,3,null);
var ri = cljs.core.nth.call(null,vec__3163,4,null);
if(cljs.core.truth_(ri))
{var delimiter__$1 = (cljs.core.truth_(pad)?[cljs.core.str(" "),cljs.core.str(delimiter)].join(''):delimiter);
var destination = cm.posFromIndex(di);
var start = cm.posFromIndex(si);
var end = cm.posFromIndex((si + 1));
var line = start.line;
var update = (function (){
cm.replaceRange(delimiter__$1,destination);
cm.replaceRange("",start,end);
return cljs.core.map.call(null,(function (p1__3154_SHARP_){
return cm.indentLine(p1__3154_SHARP_);
}),cljs.core.range.call(null,line,(line + ri)));
});
return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_barf', subpar.core.backward_barf);
subpar.core.forward_barf = (function forward_barf(cm){
var vec__3167 = subpar.core.get_info.call(null,cm);
var cur = cljs.core.nth.call(null,vec__3167,0,null);
var i = cljs.core.nth.call(null,vec__3167,1,null);
var s = cljs.core.nth.call(null,vec__3167,2,null);
var vec__3168 = subpar.paredit.forward_barf_vals.call(null,s,i);
var delimiter = cljs.core.nth.call(null,vec__3168,0,null);
var si = cljs.core.nth.call(null,vec__3168,1,null);
var di = cljs.core.nth.call(null,vec__3168,2,null);
var pad = cljs.core.nth.call(null,vec__3168,3,null);
var ri = cljs.core.nth.call(null,vec__3168,4,null);
var i0 = cljs.core.nth.call(null,vec__3168,5,null);
if(cljs.core.truth_(ri))
{var delimiter__$1 = (cljs.core.truth_(pad)?[cljs.core.str(" "),cljs.core.str(delimiter)].join(''):delimiter);
var destination = cm.posFromIndex(di);
var start = cm.posFromIndex(si);
var end = cm.posFromIndex((si + 1));
var line = cm.posFromIndex(i0).line;
var update = (function (){
cm.replaceRange("",start,end);
cm.replaceRange(delimiter__$1,destination);
return cljs.core.map.call(null,(function (p1__3159_SHARP_){
return cm.indentLine(p1__3159_SHARP_);
}),cljs.core.range.call(null,line,(line + ri)));
});
return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_barf', subpar.core.forward_barf);
subpar.core.splice_delete_backward = (function splice_delete_backward(cm){
var vec__3172 = subpar.core.get_info.call(null,cm);
var cur = cljs.core.nth.call(null,vec__3172,0,null);
var i = cljs.core.nth.call(null,vec__3172,1,null);
var s = cljs.core.nth.call(null,vec__3172,2,null);
var vec__3173 = subpar.paredit.splice_delete_backward_vals.call(null,s,i);
var start = cljs.core.nth.call(null,vec__3173,0,null);
var end = cljs.core.nth.call(null,vec__3173,1,null);
var closer = cljs.core.nth.call(null,vec__3173,2,null);
var reindent = cljs.core.nth.call(null,vec__3173,3,null);
var num = cljs.core.nth.call(null,vec__3173,4,null);
if(cljs.core.truth_(reindent))
{var line = cm.posFromIndex(reindent).line;
var c0 = cm.posFromIndex(closer);
var c1 = cm.posFromIndex((closer + 1));
var s0 = cm.posFromIndex(start);
var s1 = cm.posFromIndex(end);
var update = (function (){
cm.replaceRange("",c0,c1);
cm.replaceRange("",s0,s1);
return cljs.core.map.call(null,(function (p1__3164_SHARP_){
return cm.indentLine(p1__3164_SHARP_);
}),cljs.core.range.call(null,line,(line + num)));
});
return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_backward', subpar.core.splice_delete_backward);
subpar.core.splice_delete_forward = (function splice_delete_forward(cm){
var vec__3177 = subpar.core.get_info.call(null,cm);
var cur = cljs.core.nth.call(null,vec__3177,0,null);
var i = cljs.core.nth.call(null,vec__3177,1,null);
var s = cljs.core.nth.call(null,vec__3177,2,null);
var vec__3178 = subpar.paredit.splice_delete_forward_vals.call(null,s,i);
var opener = cljs.core.nth.call(null,vec__3178,0,null);
var start = cljs.core.nth.call(null,vec__3178,1,null);
var end = cljs.core.nth.call(null,vec__3178,2,null);
var reindent = cljs.core.nth.call(null,vec__3178,3,null);
var num = cljs.core.nth.call(null,vec__3178,4,null);
if(cljs.core.truth_(reindent))
{var line = cm.posFromIndex(reindent).line;
var o0 = cm.posFromIndex(opener);
var o1 = cm.posFromIndex((opener + 1));
var s0 = cm.posFromIndex(start);
var s1 = cm.posFromIndex(end);
var update = (function (){
cm.replaceRange("",s0,s1);
cm.replaceRange("",o0,o1);
return cljs.core.map.call(null,(function (p1__3169_SHARP_){
return cm.indentLine(p1__3169_SHARP_);
}),cljs.core.range.call(null,line,(line + num)));
});
return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_forward', subpar.core.splice_delete_forward);
subpar.core.splice = (function splice(cm){
var vec__3182 = subpar.core.get_info.call(null,cm);
var cur = cljs.core.nth.call(null,vec__3182,0,null);
var i = cljs.core.nth.call(null,vec__3182,1,null);
var s = cljs.core.nth.call(null,vec__3182,2,null);
var vec__3183 = subpar.paredit.splice_vals.call(null,s,i);
var opener = cljs.core.nth.call(null,vec__3183,0,null);
var closer = cljs.core.nth.call(null,vec__3183,1,null);
var reindent = cljs.core.nth.call(null,vec__3183,2,null);
var num = cljs.core.nth.call(null,vec__3183,3,null);
if(cljs.core.truth_(reindent))
{var line = cm.posFromIndex(reindent).line;
var o0 = cm.posFromIndex(opener);
var o1 = cm.posFromIndex((opener + 1));
var c0 = cm.posFromIndex(closer);
var c1 = cm.posFromIndex((closer + 1));
var update = (function (){
cm.replaceRange("",c0,c1);
cm.replaceRange("",o0,o1);
return cljs.core.map.call(null,(function (p1__3174_SHARP_){
return cm.indentLine(p1__3174_SHARP_);
}),cljs.core.range.call(null,line,(line + num)));
});
return cm.compoundChange(update);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice', subpar.core.splice);
subpar.core.indent_selection = (function indent_selection(cm){
if(cljs.core.truth_(cm.somethingSelected()))
{var start = cm.getCursor(true).line;
var end = cm.getCursor(false).line;
var f = (function (){
return cljs.core.map.call(null,(function (p1__3179_SHARP_){
return cm.indentLine(p1__3179_SHARP_);
}),cljs.core.range.call(null,start,(end + 1)));
});
return cm.compoundChange(f);
} else
{return cm.indentLine(cm.getCursor().line);
}
});
goog.exportSymbol('subpar.core.indent_selection', subpar.core.indent_selection);
