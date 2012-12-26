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
var vec__7716__7717 = subpar.core.get_info.call(null,cm);
var cur__7718 = cljs.core.nth.call(null,vec__7716__7717,0,null);
var i__7719 = cljs.core.nth.call(null,vec__7716__7717,1,null);
var s__7720 = cljs.core.nth.call(null,vec__7716__7717,2,null);
if(cljs.core.truth_(subpar.paredit.in_string.call(null,s__7720,i__7719)))
{cm.replaceRange(cljs.core.nth.call(null,pair,0),cur__7718);
return cm.setCursor(cur__7718.line,(cur__7718.ch + 1));
} else
{return cm.compoundChange((function (){
cm.replaceRange(pair,cur__7718);
cm.setCursor(cur__7718.line,(cur__7718.ch + 1));
return cm.indentLine(cur__7718.line);
}));
}
});
goog.exportSymbol('subpar.core.open_expression', subpar.core.open_expression);
subpar.core.forward_delete = (function forward_delete(cm){
if(cljs.core.truth_(subpar.core.nothing_selected_QMARK_.call(null,cm)))
{var vec__7738__7739 = subpar.core.get_info.call(null,cm);
var cur__7740 = cljs.core.nth.call(null,vec__7738__7739,0,null);
var i__7741 = cljs.core.nth.call(null,vec__7738__7739,1,null);
var s__7742 = cljs.core.nth.call(null,vec__7738__7739,2,null);
var act__7743 = subpar.paredit.forward_delete_action.call(null,s__7742,i__7741);
var s1__7744 = cm.posFromIndex(i__7741);
var e1__7745 = cm.posFromIndex((i__7741 + 1));
var s2__7746 = cm.posFromIndex((i__7741 - 1));
var e2__7747 = e1__7745;
var s3__7748 = s1__7744;
var e3__7749 = cm.posFromIndex((i__7741 + 2));
var pred__7750__7753 = cljs.core._EQ_;
var expr__7751__7754 = act__7743;
if(pred__7750__7753.call(null,1,expr__7751__7754))
{return cm.replaceRange("",s1__7744,e1__7745);
} else
{if(pred__7750__7753.call(null,2,expr__7751__7754))
{return cm.replaceRange("",s2__7746,e2__7747);
} else
{if(pred__7750__7753.call(null,3,expr__7751__7754))
{return cm.replaceRange("",s3__7748,e3__7749);
} else
{if(pred__7750__7753.call(null,4,expr__7751__7754))
{return cm.setCursor(e1__7745);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7751__7754)].join('')));
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
{var vec__7772__7773 = subpar.core.get_info.call(null,cm);
var cur__7774 = cljs.core.nth.call(null,vec__7772__7773,0,null);
var i__7775 = cljs.core.nth.call(null,vec__7772__7773,1,null);
var s__7776 = cljs.core.nth.call(null,vec__7772__7773,2,null);
var act__7777 = subpar.paredit.backward_delete_action.call(null,s__7776,i__7775);
var s1__7778 = cm.posFromIndex((i__7775 - 1));
var e1__7779 = cm.posFromIndex(i__7775);
var s2__7780 = s1__7778;
var e2__7781 = cm.posFromIndex((i__7775 + 1));
var s3__7782 = cm.posFromIndex((i__7775 - 2));
var e3__7783 = e1__7779;
var pred__7784__7787 = cljs.core._EQ_;
var expr__7785__7788 = act__7777;
if(pred__7784__7787.call(null,1,expr__7785__7788))
{return cm.replaceRange("",s1__7778,e1__7779);
} else
{if(pred__7784__7787.call(null,2,expr__7785__7788))
{return cm.replaceRange("",s2__7780,e2__7781);
} else
{if(pred__7784__7787.call(null,3,expr__7785__7788))
{return cm.replaceRange("",s3__7782,e3__7783);
} else
{if(pred__7784__7787.call(null,4,expr__7785__7788))
{return cm.setCursor(s1__7778);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7785__7788)].join('')));
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
var vec__7800__7801 = subpar.core.get_info.call(null,cm);
var cur__7802 = cljs.core.nth.call(null,vec__7800__7801,0,null);
var i__7803 = cljs.core.nth.call(null,vec__7800__7801,1,null);
var s__7804 = cljs.core.nth.call(null,vec__7800__7801,2,null);
var act__7805 = subpar.paredit.double_quote_action.call(null,s__7804,i__7803);
var pred__7806__7809 = cljs.core._EQ_;
var expr__7807__7810 = act__7805;
if(pred__7806__7809.call(null,0,expr__7807__7810))
{return subpar.core.open_expression.call(null,cm,"\"\"");
} else
{if(pred__7806__7809.call(null,1,expr__7807__7810))
{return cm.replaceRange("\\\"",cur__7802);
} else
{if(pred__7806__7809.call(null,2,expr__7807__7810))
{return subpar.core.go_to_index.call(null,cm,i__7803,(i__7803 + 1));
} else
{if(pred__7806__7809.call(null,3,expr__7807__7810))
{return cm.replaceRange("\"",cur__7802);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7807__7810)].join('')));
}
}
}
}
});
goog.exportSymbol('subpar.core.double_quote', subpar.core.double_quote);
subpar.core.close_expression = (function close_expression(cm,c){
var vec__7823__7824 = subpar.core.get_info.call(null,cm);
var cur__7825 = cljs.core.nth.call(null,vec__7823__7824,0,null);
var i__7826 = cljs.core.nth.call(null,vec__7823__7824,1,null);
var s__7827 = cljs.core.nth.call(null,vec__7823__7824,2,null);
var p__7828 = subpar.paredit.parse.call(null,s__7827);
if(cljs.core.truth_(subpar.paredit.in_string_QMARK_.call(null,p__7828,i__7826)))
{cm.replaceRange(c,cur__7825);
return cm.setCursor(cur__7825.line,(cur__7825.ch + 1));
} else
{var vec__7829__7830 = subpar.paredit.close_expression_vals.call(null,p__7828,i__7826);
var del__7831 = cljs.core.nth.call(null,vec__7829__7830,0,null);
var beg__7832 = cljs.core.nth.call(null,vec__7829__7830,1,null);
var end__7833 = cljs.core.nth.call(null,vec__7829__7830,2,null);
var dst__7834 = cljs.core.nth.call(null,vec__7829__7830,3,null);
if(cljs.core.truth_(dst__7834))
{if(cljs.core.truth_(del__7831))
{cm.replaceRange("",cm.posFromIndex(beg__7832),cm.posFromIndex(end__7833));
} else
{}
return subpar.core.go_to_index.call(null,cm,i__7826,dst__7834);
} else
{return null;
}
}
});
goog.exportSymbol('subpar.core.close_expression', subpar.core.close_expression);
subpar.core.go = (function go(cm,f){
var vec__7841__7842 = subpar.core.get_info.call(null,cm);
var cur__7843 = cljs.core.nth.call(null,vec__7841__7842,0,null);
var i__7844 = cljs.core.nth.call(null,vec__7841__7842,1,null);
var s__7845 = cljs.core.nth.call(null,vec__7841__7842,2,null);
var j__7846 = f.call(null,s__7845,i__7844);
return subpar.core.go_to_index.call(null,cm,i__7844,j__7846);
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
var vec__7865__7867 = subpar.core.get_info.call(null,cm);
var cur__7868 = cljs.core.nth.call(null,vec__7865__7867,0,null);
var i__7869 = cljs.core.nth.call(null,vec__7865__7867,1,null);
var s__7870 = cljs.core.nth.call(null,vec__7865__7867,2,null);
var vec__7866__7871 = subpar.paredit.forward_slurp_vals.call(null,s__7870,i__7869);
var delimiter__7872 = cljs.core.nth.call(null,vec__7866__7871,0,null);
var si__7873 = cljs.core.nth.call(null,vec__7866__7871,1,null);
var di__7874 = cljs.core.nth.call(null,vec__7866__7871,2,null);
var ri__7875 = cljs.core.nth.call(null,vec__7866__7871,3,null);
if(cljs.core.truth_(ri__7875))
{var start__7876 = cm.posFromIndex(si__7873);
var end__7877 = cm.posFromIndex((si__7873 + 1));
var destination__7878 = cm.posFromIndex(di__7874);
var line__7879 = start__7876.line;
var update__7880 = (function (){
cm.replaceRange(delimiter__7872,destination__7878);
cm.replaceRange("",start__7876,end__7877);
return cljs.core.map.call(null,(function (p1__7847_SHARP_){
return cm.indentLine(p1__7847_SHARP_);
}),cljs.core.range.call(null,line__7879,(line__7879 + ri__7875)));
});
return cm.compoundChange(update__7880);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_slurp', subpar.core.forward_slurp);
subpar.core.backward_slurp = (function backward_slurp(cm){
var vec__7898__7900 = subpar.core.get_info.call(null,cm);
var cur__7901 = cljs.core.nth.call(null,vec__7898__7900,0,null);
var i__7902 = cljs.core.nth.call(null,vec__7898__7900,1,null);
var s__7903 = cljs.core.nth.call(null,vec__7898__7900,2,null);
var vec__7899__7904 = subpar.paredit.backward_slurp_vals.call(null,s__7903,i__7902);
var delimiter__7905 = cljs.core.nth.call(null,vec__7899__7904,0,null);
var si__7906 = cljs.core.nth.call(null,vec__7899__7904,1,null);
var di__7907 = cljs.core.nth.call(null,vec__7899__7904,2,null);
var ri__7908 = cljs.core.nth.call(null,vec__7899__7904,3,null);
if(cljs.core.truth_(ri__7908))
{var start__7909 = cm.posFromIndex(si__7906);
var end__7910 = cm.posFromIndex((si__7906 + 1));
var destination__7911 = cm.posFromIndex(di__7907);
var line__7912 = start__7909.line;
var update__7913 = (function (){
cm.replaceRange("",start__7909,end__7910);
cm.replaceRange(delimiter__7905,destination__7911);
return cljs.core.map.call(null,(function (p1__7848_SHARP_){
return cm.indentLine(p1__7848_SHARP_);
}),cljs.core.range.call(null,line__7912,(line__7912 + ri__7908)));
});
return cm.compoundChange(update__7913);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_slurp', subpar.core.backward_slurp);
subpar.core.backward_barf = (function backward_barf(cm){
var vec__7933__7935 = subpar.core.get_info.call(null,cm);
var cur__7936 = cljs.core.nth.call(null,vec__7933__7935,0,null);
var i__7937 = cljs.core.nth.call(null,vec__7933__7935,1,null);
var s__7938 = cljs.core.nth.call(null,vec__7933__7935,2,null);
var vec__7934__7939 = subpar.paredit.backward_barf_vals.call(null,s__7938,i__7937);
var delimiter__7940 = cljs.core.nth.call(null,vec__7934__7939,0,null);
var si__7941 = cljs.core.nth.call(null,vec__7934__7939,1,null);
var di__7942 = cljs.core.nth.call(null,vec__7934__7939,2,null);
var pad__7943 = cljs.core.nth.call(null,vec__7934__7939,3,null);
var ri__7944 = cljs.core.nth.call(null,vec__7934__7939,4,null);
if(cljs.core.truth_(ri__7944))
{var delimiter__7945 = (cljs.core.truth_(pad__7943)?[cljs.core.str(" "),cljs.core.str(delimiter__7940)].join(''):delimiter__7940);
var destination__7946 = cm.posFromIndex(di__7942);
var start__7947 = cm.posFromIndex(si__7941);
var end__7948 = cm.posFromIndex((si__7941 + 1));
var line__7949 = start__7947.line;
var update__7950 = (function (){
cm.replaceRange(delimiter__7945,destination__7946);
cm.replaceRange("",start__7947,end__7948);
return cljs.core.map.call(null,(function (p1__7881_SHARP_){
return cm.indentLine(p1__7881_SHARP_);
}),cljs.core.range.call(null,line__7949,(line__7949 + ri__7944)));
});
return cm.compoundChange(update__7950);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_barf', subpar.core.backward_barf);
subpar.core.forward_barf = (function forward_barf(cm){
var vec__7971__7973 = subpar.core.get_info.call(null,cm);
var cur__7974 = cljs.core.nth.call(null,vec__7971__7973,0,null);
var i__7975 = cljs.core.nth.call(null,vec__7971__7973,1,null);
var s__7976 = cljs.core.nth.call(null,vec__7971__7973,2,null);
var vec__7972__7977 = subpar.paredit.forward_barf_vals.call(null,s__7976,i__7975);
var delimiter__7978 = cljs.core.nth.call(null,vec__7972__7977,0,null);
var si__7979 = cljs.core.nth.call(null,vec__7972__7977,1,null);
var di__7980 = cljs.core.nth.call(null,vec__7972__7977,2,null);
var pad__7981 = cljs.core.nth.call(null,vec__7972__7977,3,null);
var ri__7982 = cljs.core.nth.call(null,vec__7972__7977,4,null);
var i0__7983 = cljs.core.nth.call(null,vec__7972__7977,5,null);
if(cljs.core.truth_(ri__7982))
{var delimiter__7984 = (cljs.core.truth_(pad__7981)?[cljs.core.str(" "),cljs.core.str(delimiter__7978)].join(''):delimiter__7978);
var destination__7985 = cm.posFromIndex(di__7980);
var start__7986 = cm.posFromIndex(si__7979);
var end__7987 = cm.posFromIndex((si__7979 + 1));
var line__7988 = cm.posFromIndex(i0__7983).line;
var update__7989 = (function (){
cm.replaceRange("",start__7986,end__7987);
cm.replaceRange(delimiter__7984,destination__7985);
return cljs.core.map.call(null,(function (p1__7914_SHARP_){
return cm.indentLine(p1__7914_SHARP_);
}),cljs.core.range.call(null,line__7988,(line__7988 + ri__7982)));
});
return cm.compoundChange(update__7989);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_barf', subpar.core.forward_barf);
subpar.core.splice_delete_backward = (function splice_delete_backward(cm){
var vec__8009__8011 = subpar.core.get_info.call(null,cm);
var cur__8012 = cljs.core.nth.call(null,vec__8009__8011,0,null);
var i__8013 = cljs.core.nth.call(null,vec__8009__8011,1,null);
var s__8014 = cljs.core.nth.call(null,vec__8009__8011,2,null);
var vec__8010__8015 = subpar.paredit.splice_delete_backward_vals.call(null,s__8014,i__8013);
var start__8016 = cljs.core.nth.call(null,vec__8010__8015,0,null);
var end__8017 = cljs.core.nth.call(null,vec__8010__8015,1,null);
var closer__8018 = cljs.core.nth.call(null,vec__8010__8015,2,null);
var reindent__8019 = cljs.core.nth.call(null,vec__8010__8015,3,null);
var num__8020 = cljs.core.nth.call(null,vec__8010__8015,4,null);
if(cljs.core.truth_(reindent__8019))
{var line__8021 = cm.posFromIndex(reindent__8019).line;
var c0__8022 = cm.posFromIndex(closer__8018);
var c1__8023 = cm.posFromIndex((closer__8018 + 1));
var s0__8024 = cm.posFromIndex(start__8016);
var s1__8025 = cm.posFromIndex(end__8017);
var update__8026 = (function (){
cm.replaceRange("",c0__8022,c1__8023);
cm.replaceRange("",s0__8024,s1__8025);
return cljs.core.map.call(null,(function (p1__7951_SHARP_){
return cm.indentLine(p1__7951_SHARP_);
}),cljs.core.range.call(null,line__8021,(line__8021 + num__8020)));
});
return cm.compoundChange(update__8026);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_backward', subpar.core.splice_delete_backward);
subpar.core.splice_delete_forward = (function splice_delete_forward(cm){
var vec__8046__8048 = subpar.core.get_info.call(null,cm);
var cur__8049 = cljs.core.nth.call(null,vec__8046__8048,0,null);
var i__8050 = cljs.core.nth.call(null,vec__8046__8048,1,null);
var s__8051 = cljs.core.nth.call(null,vec__8046__8048,2,null);
var vec__8047__8052 = subpar.paredit.splice_delete_forward_vals.call(null,s__8051,i__8050);
var opener__8053 = cljs.core.nth.call(null,vec__8047__8052,0,null);
var start__8054 = cljs.core.nth.call(null,vec__8047__8052,1,null);
var end__8055 = cljs.core.nth.call(null,vec__8047__8052,2,null);
var reindent__8056 = cljs.core.nth.call(null,vec__8047__8052,3,null);
var num__8057 = cljs.core.nth.call(null,vec__8047__8052,4,null);
if(cljs.core.truth_(reindent__8056))
{var line__8058 = cm.posFromIndex(reindent__8056).line;
var o0__8059 = cm.posFromIndex(opener__8053);
var o1__8060 = cm.posFromIndex((opener__8053 + 1));
var s0__8061 = cm.posFromIndex(start__8054);
var s1__8062 = cm.posFromIndex(end__8055);
var update__8063 = (function (){
cm.replaceRange("",s0__8061,s1__8062);
cm.replaceRange("",o0__8059,o1__8060);
return cljs.core.map.call(null,(function (p1__7990_SHARP_){
return cm.indentLine(p1__7990_SHARP_);
}),cljs.core.range.call(null,line__8058,(line__8058 + num__8057)));
});
return cm.compoundChange(update__8063);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_forward', subpar.core.splice_delete_forward);
subpar.core.splice = (function splice(cm){
var vec__8082__8084 = subpar.core.get_info.call(null,cm);
var cur__8085 = cljs.core.nth.call(null,vec__8082__8084,0,null);
var i__8086 = cljs.core.nth.call(null,vec__8082__8084,1,null);
var s__8087 = cljs.core.nth.call(null,vec__8082__8084,2,null);
var vec__8083__8088 = subpar.paredit.splice_vals.call(null,s__8087,i__8086);
var opener__8089 = cljs.core.nth.call(null,vec__8083__8088,0,null);
var closer__8090 = cljs.core.nth.call(null,vec__8083__8088,1,null);
var reindent__8091 = cljs.core.nth.call(null,vec__8083__8088,2,null);
var num__8092 = cljs.core.nth.call(null,vec__8083__8088,3,null);
if(cljs.core.truth_(reindent__8091))
{var line__8093 = cm.posFromIndex(reindent__8091).line;
var o0__8094 = cm.posFromIndex(opener__8089);
var o1__8095 = cm.posFromIndex((opener__8089 + 1));
var c0__8096 = cm.posFromIndex(closer__8090);
var c1__8097 = cm.posFromIndex((closer__8090 + 1));
var update__8098 = (function (){
cm.replaceRange("",c0__8096,c1__8097);
cm.replaceRange("",o0__8094,o1__8095);
return cljs.core.map.call(null,(function (p1__8027_SHARP_){
return cm.indentLine(p1__8027_SHARP_);
}),cljs.core.range.call(null,line__8093,(line__8093 + num__8092)));
});
return cm.compoundChange(update__8098);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice', subpar.core.splice);
subpar.core.indent_selection = (function indent_selection(cm){
if(cljs.core.truth_(cm.somethingSelected()))
{var start__8102 = cm.getCursor(true).line;
var end__8103 = cm.getCursor(false).line;
var f__8104 = (function (){
return cljs.core.map.call(null,(function (p1__8064_SHARP_){
return cm.indentLine(p1__8064_SHARP_);
}),cljs.core.range.call(null,start__8102,(end__8103 + 1)));
});
return cm.compoundChange(f__8104);
} else
{return cm.indentLine(cm.getCursor().line);
}
});
goog.exportSymbol('subpar.core.indent_selection', subpar.core.indent_selection);
