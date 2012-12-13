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
var vec__7765__7766 = subpar.core.get_info.call(null,cm);
var cur__7767 = cljs.core.nth.call(null,vec__7765__7766,0,null);
var i__7768 = cljs.core.nth.call(null,vec__7765__7766,1,null);
var s__7769 = cljs.core.nth.call(null,vec__7765__7766,2,null);
if(cljs.core.truth_(subpar.paredit.in_string.call(null,s__7769,i__7768)))
{cm.replaceRange(cljs.core.nth.call(null,pair,0),cur__7767);
return cm.setCursor(cur__7767.line,(cur__7767.ch + 1));
} else
{return cm.compoundChange((function (){
cm.replaceRange(pair,cur__7767);
cm.setCursor(cur__7767.line,(cur__7767.ch + 1));
return cm.indentLine(cur__7767.line);
}));
}
});
goog.exportSymbol('subpar.core.open_expression', subpar.core.open_expression);
subpar.core.forward_delete = (function forward_delete(cm){
if(cljs.core.truth_(subpar.core.nothing_selected_QMARK_.call(null,cm)))
{var vec__7787__7788 = subpar.core.get_info.call(null,cm);
var cur__7789 = cljs.core.nth.call(null,vec__7787__7788,0,null);
var i__7790 = cljs.core.nth.call(null,vec__7787__7788,1,null);
var s__7791 = cljs.core.nth.call(null,vec__7787__7788,2,null);
var act__7792 = subpar.paredit.forward_delete_action.call(null,s__7791,i__7790);
var s1__7793 = cm.posFromIndex(i__7790);
var e1__7794 = cm.posFromIndex((i__7790 + 1));
var s2__7795 = cm.posFromIndex((i__7790 - 1));
var e2__7796 = e1__7794;
var s3__7797 = s1__7793;
var e3__7798 = cm.posFromIndex((i__7790 + 2));
var pred__7799__7802 = cljs.core._EQ_;
var expr__7800__7803 = act__7792;
if(pred__7799__7802.call(null,1,expr__7800__7803))
{return cm.replaceRange("",s1__7793,e1__7794);
} else
{if(pred__7799__7802.call(null,2,expr__7800__7803))
{return cm.replaceRange("",s2__7795,e2__7796);
} else
{if(pred__7799__7802.call(null,3,expr__7800__7803))
{return cm.replaceRange("",s3__7797,e3__7798);
} else
{if(pred__7799__7802.call(null,4,expr__7800__7803))
{return cm.setCursor(e1__7794);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7800__7803)].join('')));
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
{var vec__7821__7822 = subpar.core.get_info.call(null,cm);
var cur__7823 = cljs.core.nth.call(null,vec__7821__7822,0,null);
var i__7824 = cljs.core.nth.call(null,vec__7821__7822,1,null);
var s__7825 = cljs.core.nth.call(null,vec__7821__7822,2,null);
var act__7826 = subpar.paredit.backward_delete_action.call(null,s__7825,i__7824);
var s1__7827 = cm.posFromIndex((i__7824 - 1));
var e1__7828 = cm.posFromIndex(i__7824);
var s2__7829 = s1__7827;
var e2__7830 = cm.posFromIndex((i__7824 + 1));
var s3__7831 = cm.posFromIndex((i__7824 - 2));
var e3__7832 = e1__7828;
var pred__7833__7836 = cljs.core._EQ_;
var expr__7834__7837 = act__7826;
if(pred__7833__7836.call(null,1,expr__7834__7837))
{return cm.replaceRange("",s1__7827,e1__7828);
} else
{if(pred__7833__7836.call(null,2,expr__7834__7837))
{return cm.replaceRange("",s2__7829,e2__7830);
} else
{if(pred__7833__7836.call(null,3,expr__7834__7837))
{return cm.replaceRange("",s3__7831,e3__7832);
} else
{if(pred__7833__7836.call(null,4,expr__7834__7837))
{return cm.setCursor(s1__7827);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7834__7837)].join('')));
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
var vec__7849__7850 = subpar.core.get_info.call(null,cm);
var cur__7851 = cljs.core.nth.call(null,vec__7849__7850,0,null);
var i__7852 = cljs.core.nth.call(null,vec__7849__7850,1,null);
var s__7853 = cljs.core.nth.call(null,vec__7849__7850,2,null);
var act__7854 = subpar.paredit.double_quote_action.call(null,s__7853,i__7852);
var pred__7855__7858 = cljs.core._EQ_;
var expr__7856__7859 = act__7854;
if(pred__7855__7858.call(null,0,expr__7856__7859))
{return subpar.core.open_expression.call(null,cm,"\"\"");
} else
{if(pred__7855__7858.call(null,1,expr__7856__7859))
{return cm.replaceRange("\\\"",cur__7851);
} else
{if(pred__7855__7858.call(null,2,expr__7856__7859))
{return subpar.core.go_to_index.call(null,cm,i__7852,(i__7852 + 1));
} else
{if(pred__7855__7858.call(null,3,expr__7856__7859))
{return cm.replaceRange("\"",cur__7851);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7856__7859)].join('')));
}
}
}
}
});
goog.exportSymbol('subpar.core.double_quote', subpar.core.double_quote);
subpar.core.close_expression = (function close_expression(cm,c){
var vec__7872__7873 = subpar.core.get_info.call(null,cm);
var cur__7874 = cljs.core.nth.call(null,vec__7872__7873,0,null);
var i__7875 = cljs.core.nth.call(null,vec__7872__7873,1,null);
var s__7876 = cljs.core.nth.call(null,vec__7872__7873,2,null);
var p__7877 = subpar.paredit.parse.call(null,s__7876);
if(cljs.core.truth_(subpar.paredit.in_string_QMARK_.call(null,p__7877,i__7875)))
{cm.replaceRange(c,cur__7874);
return cm.setCursor(cur__7874.line,(cur__7874.ch + 1));
} else
{var vec__7878__7879 = subpar.paredit.close_expression_vals.call(null,p__7877,i__7875);
var del__7880 = cljs.core.nth.call(null,vec__7878__7879,0,null);
var beg__7881 = cljs.core.nth.call(null,vec__7878__7879,1,null);
var end__7882 = cljs.core.nth.call(null,vec__7878__7879,2,null);
var dst__7883 = cljs.core.nth.call(null,vec__7878__7879,3,null);
if(cljs.core.truth_(dst__7883))
{if(cljs.core.truth_(del__7880))
{cm.replaceRange("",cm.posFromIndex(beg__7881),cm.posFromIndex(end__7882));
} else
{}
return subpar.core.go_to_index.call(null,cm,i__7875,dst__7883);
} else
{return null;
}
}
});
goog.exportSymbol('subpar.core.close_expression', subpar.core.close_expression);
subpar.core.go = (function go(cm,f){
var vec__7890__7891 = subpar.core.get_info.call(null,cm);
var cur__7892 = cljs.core.nth.call(null,vec__7890__7891,0,null);
var i__7893 = cljs.core.nth.call(null,vec__7890__7891,1,null);
var s__7894 = cljs.core.nth.call(null,vec__7890__7891,2,null);
var j__7895 = f.call(null,s__7894,i__7893);
return subpar.core.go_to_index.call(null,cm,i__7893,j__7895);
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
var vec__7914__7916 = subpar.core.get_info.call(null,cm);
var cur__7917 = cljs.core.nth.call(null,vec__7914__7916,0,null);
var i__7918 = cljs.core.nth.call(null,vec__7914__7916,1,null);
var s__7919 = cljs.core.nth.call(null,vec__7914__7916,2,null);
var vec__7915__7920 = subpar.paredit.forward_slurp_vals.call(null,s__7919,i__7918);
var delimiter__7921 = cljs.core.nth.call(null,vec__7915__7920,0,null);
var si__7922 = cljs.core.nth.call(null,vec__7915__7920,1,null);
var di__7923 = cljs.core.nth.call(null,vec__7915__7920,2,null);
var ri__7924 = cljs.core.nth.call(null,vec__7915__7920,3,null);
if(cljs.core.truth_(ri__7924))
{var start__7925 = cm.posFromIndex(si__7922);
var end__7926 = cm.posFromIndex((si__7922 + 1));
var destination__7927 = cm.posFromIndex(di__7923);
var line__7928 = start__7925.line;
var update__7929 = (function (){
cm.replaceRange(delimiter__7921,destination__7927);
cm.replaceRange("",start__7925,end__7926);
return cljs.core.map.call(null,(function (p1__7896_SHARP_){
return cm.indentLine(p1__7896_SHARP_);
}),cljs.core.range.call(null,line__7928,(line__7928 + ri__7924)));
});
return cm.compoundChange(update__7929);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_slurp', subpar.core.forward_slurp);
subpar.core.backward_slurp = (function backward_slurp(cm){
var vec__7947__7949 = subpar.core.get_info.call(null,cm);
var cur__7950 = cljs.core.nth.call(null,vec__7947__7949,0,null);
var i__7951 = cljs.core.nth.call(null,vec__7947__7949,1,null);
var s__7952 = cljs.core.nth.call(null,vec__7947__7949,2,null);
var vec__7948__7953 = subpar.paredit.backward_slurp_vals.call(null,s__7952,i__7951);
var delimiter__7954 = cljs.core.nth.call(null,vec__7948__7953,0,null);
var si__7955 = cljs.core.nth.call(null,vec__7948__7953,1,null);
var di__7956 = cljs.core.nth.call(null,vec__7948__7953,2,null);
var ri__7957 = cljs.core.nth.call(null,vec__7948__7953,3,null);
if(cljs.core.truth_(ri__7957))
{var start__7958 = cm.posFromIndex(si__7955);
var end__7959 = cm.posFromIndex((si__7955 + 1));
var destination__7960 = cm.posFromIndex(di__7956);
var line__7961 = start__7958.line;
var update__7962 = (function (){
cm.replaceRange("",start__7958,end__7959);
cm.replaceRange(delimiter__7954,destination__7960);
return cljs.core.map.call(null,(function (p1__7897_SHARP_){
return cm.indentLine(p1__7897_SHARP_);
}),cljs.core.range.call(null,line__7961,(line__7961 + ri__7957)));
});
return cm.compoundChange(update__7962);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_slurp', subpar.core.backward_slurp);
subpar.core.backward_barf = (function backward_barf(cm){
var vec__7982__7984 = subpar.core.get_info.call(null,cm);
var cur__7985 = cljs.core.nth.call(null,vec__7982__7984,0,null);
var i__7986 = cljs.core.nth.call(null,vec__7982__7984,1,null);
var s__7987 = cljs.core.nth.call(null,vec__7982__7984,2,null);
var vec__7983__7988 = subpar.paredit.backward_barf_vals.call(null,s__7987,i__7986);
var delimiter__7989 = cljs.core.nth.call(null,vec__7983__7988,0,null);
var si__7990 = cljs.core.nth.call(null,vec__7983__7988,1,null);
var di__7991 = cljs.core.nth.call(null,vec__7983__7988,2,null);
var pad__7992 = cljs.core.nth.call(null,vec__7983__7988,3,null);
var ri__7993 = cljs.core.nth.call(null,vec__7983__7988,4,null);
if(cljs.core.truth_(ri__7993))
{var delimiter__7994 = (cljs.core.truth_(pad__7992)?[cljs.core.str(" "),cljs.core.str(delimiter__7989)].join(''):delimiter__7989);
var destination__7995 = cm.posFromIndex(di__7991);
var start__7996 = cm.posFromIndex(si__7990);
var end__7997 = cm.posFromIndex((si__7990 + 1));
var line__7998 = start__7996.line;
var update__7999 = (function (){
cm.replaceRange(delimiter__7994,destination__7995);
cm.replaceRange("",start__7996,end__7997);
return cljs.core.map.call(null,(function (p1__7930_SHARP_){
return cm.indentLine(p1__7930_SHARP_);
}),cljs.core.range.call(null,line__7998,(line__7998 + ri__7993)));
});
return cm.compoundChange(update__7999);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_barf', subpar.core.backward_barf);
subpar.core.forward_barf = (function forward_barf(cm){
var vec__8020__8022 = subpar.core.get_info.call(null,cm);
var cur__8023 = cljs.core.nth.call(null,vec__8020__8022,0,null);
var i__8024 = cljs.core.nth.call(null,vec__8020__8022,1,null);
var s__8025 = cljs.core.nth.call(null,vec__8020__8022,2,null);
var vec__8021__8026 = subpar.paredit.forward_barf_vals.call(null,s__8025,i__8024);
var delimiter__8027 = cljs.core.nth.call(null,vec__8021__8026,0,null);
var si__8028 = cljs.core.nth.call(null,vec__8021__8026,1,null);
var di__8029 = cljs.core.nth.call(null,vec__8021__8026,2,null);
var pad__8030 = cljs.core.nth.call(null,vec__8021__8026,3,null);
var ri__8031 = cljs.core.nth.call(null,vec__8021__8026,4,null);
var i0__8032 = cljs.core.nth.call(null,vec__8021__8026,5,null);
if(cljs.core.truth_(ri__8031))
{var delimiter__8033 = (cljs.core.truth_(pad__8030)?[cljs.core.str(" "),cljs.core.str(delimiter__8027)].join(''):delimiter__8027);
var destination__8034 = cm.posFromIndex(di__8029);
var start__8035 = cm.posFromIndex(si__8028);
var end__8036 = cm.posFromIndex((si__8028 + 1));
var line__8037 = cm.posFromIndex(i0__8032).line;
var update__8038 = (function (){
cm.replaceRange("",start__8035,end__8036);
cm.replaceRange(delimiter__8033,destination__8034);
return cljs.core.map.call(null,(function (p1__7963_SHARP_){
return cm.indentLine(p1__7963_SHARP_);
}),cljs.core.range.call(null,line__8037,(line__8037 + ri__8031)));
});
return cm.compoundChange(update__8038);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_barf', subpar.core.forward_barf);
subpar.core.splice_delete_backward = (function splice_delete_backward(cm){
var vec__8058__8060 = subpar.core.get_info.call(null,cm);
var cur__8061 = cljs.core.nth.call(null,vec__8058__8060,0,null);
var i__8062 = cljs.core.nth.call(null,vec__8058__8060,1,null);
var s__8063 = cljs.core.nth.call(null,vec__8058__8060,2,null);
var vec__8059__8064 = subpar.paredit.splice_delete_backward_vals.call(null,s__8063,i__8062);
var start__8065 = cljs.core.nth.call(null,vec__8059__8064,0,null);
var end__8066 = cljs.core.nth.call(null,vec__8059__8064,1,null);
var closer__8067 = cljs.core.nth.call(null,vec__8059__8064,2,null);
var reindent__8068 = cljs.core.nth.call(null,vec__8059__8064,3,null);
var num__8069 = cljs.core.nth.call(null,vec__8059__8064,4,null);
if(cljs.core.truth_(reindent__8068))
{var line__8070 = cm.posFromIndex(reindent__8068).line;
var c0__8071 = cm.posFromIndex(closer__8067);
var c1__8072 = cm.posFromIndex((closer__8067 + 1));
var s0__8073 = cm.posFromIndex(start__8065);
var s1__8074 = cm.posFromIndex(end__8066);
var update__8075 = (function (){
cm.replaceRange("",c0__8071,c1__8072);
cm.replaceRange("",s0__8073,s1__8074);
return cljs.core.map.call(null,(function (p1__8000_SHARP_){
return cm.indentLine(p1__8000_SHARP_);
}),cljs.core.range.call(null,line__8070,(line__8070 + num__8069)));
});
return cm.compoundChange(update__8075);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_backward', subpar.core.splice_delete_backward);
subpar.core.splice_delete_forward = (function splice_delete_forward(cm){
var vec__8095__8097 = subpar.core.get_info.call(null,cm);
var cur__8098 = cljs.core.nth.call(null,vec__8095__8097,0,null);
var i__8099 = cljs.core.nth.call(null,vec__8095__8097,1,null);
var s__8100 = cljs.core.nth.call(null,vec__8095__8097,2,null);
var vec__8096__8101 = subpar.paredit.splice_delete_forward_vals.call(null,s__8100,i__8099);
var opener__8102 = cljs.core.nth.call(null,vec__8096__8101,0,null);
var start__8103 = cljs.core.nth.call(null,vec__8096__8101,1,null);
var end__8104 = cljs.core.nth.call(null,vec__8096__8101,2,null);
var reindent__8105 = cljs.core.nth.call(null,vec__8096__8101,3,null);
var num__8106 = cljs.core.nth.call(null,vec__8096__8101,4,null);
if(cljs.core.truth_(reindent__8105))
{var line__8107 = cm.posFromIndex(reindent__8105).line;
var o0__8108 = cm.posFromIndex(opener__8102);
var o1__8109 = cm.posFromIndex((opener__8102 + 1));
var s0__8110 = cm.posFromIndex(start__8103);
var s1__8111 = cm.posFromIndex(end__8104);
var update__8112 = (function (){
cm.replaceRange("",s0__8110,s1__8111);
cm.replaceRange("",o0__8108,o1__8109);
return cljs.core.map.call(null,(function (p1__8039_SHARP_){
return cm.indentLine(p1__8039_SHARP_);
}),cljs.core.range.call(null,line__8107,(line__8107 + num__8106)));
});
return cm.compoundChange(update__8112);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_forward', subpar.core.splice_delete_forward);
subpar.core.splice = (function splice(cm){
var vec__8131__8133 = subpar.core.get_info.call(null,cm);
var cur__8134 = cljs.core.nth.call(null,vec__8131__8133,0,null);
var i__8135 = cljs.core.nth.call(null,vec__8131__8133,1,null);
var s__8136 = cljs.core.nth.call(null,vec__8131__8133,2,null);
var vec__8132__8137 = subpar.paredit.splice_vals.call(null,s__8136,i__8135);
var opener__8138 = cljs.core.nth.call(null,vec__8132__8137,0,null);
var closer__8139 = cljs.core.nth.call(null,vec__8132__8137,1,null);
var reindent__8140 = cljs.core.nth.call(null,vec__8132__8137,2,null);
var num__8141 = cljs.core.nth.call(null,vec__8132__8137,3,null);
if(cljs.core.truth_(reindent__8140))
{var line__8142 = cm.posFromIndex(reindent__8140).line;
var o0__8143 = cm.posFromIndex(opener__8138);
var o1__8144 = cm.posFromIndex((opener__8138 + 1));
var c0__8145 = cm.posFromIndex(closer__8139);
var c1__8146 = cm.posFromIndex((closer__8139 + 1));
var update__8147 = (function (){
cm.replaceRange("",c0__8145,c1__8146);
cm.replaceRange("",o0__8143,o1__8144);
return cljs.core.map.call(null,(function (p1__8076_SHARP_){
return cm.indentLine(p1__8076_SHARP_);
}),cljs.core.range.call(null,line__8142,(line__8142 + num__8141)));
});
return cm.compoundChange(update__8147);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice', subpar.core.splice);
subpar.core.indent_selection = (function indent_selection(cm){
if(cljs.core.truth_(cm.somethingSelected()))
{var start__8151 = cm.getCursor(true).line;
var end__8152 = cm.getCursor(false).line;
var f__8153 = (function (){
return cljs.core.map.call(null,(function (p1__8113_SHARP_){
return cm.indentLine(p1__8113_SHARP_);
}),cljs.core.range.call(null,start__8151,(end__8152 + 1)));
});
return cm.compoundChange(f__8153);
} else
{return cm.indentLine(cm.getCursor().line);
}
});
goog.exportSymbol('subpar.core.indent_selection', subpar.core.indent_selection);
