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
var vec__7785__7786 = subpar.core.get_info.call(null,cm);
var cur__7787 = cljs.core.nth.call(null,vec__7785__7786,0,null);
var i__7788 = cljs.core.nth.call(null,vec__7785__7786,1,null);
var s__7789 = cljs.core.nth.call(null,vec__7785__7786,2,null);
if(cljs.core.truth_(subpar.paredit.in_string.call(null,s__7789,i__7788)))
{cm.replaceRange(cljs.core.nth.call(null,pair,0),cur__7787);
return cm.setCursor(cur__7787.line,(cur__7787.ch + 1));
} else
{return cm.compoundChange((function (){
cm.replaceRange(pair,cur__7787);
cm.setCursor(cur__7787.line,(cur__7787.ch + 1));
return cm.indentLine(cur__7787.line);
}));
}
});
goog.exportSymbol('subpar.core.open_expression', subpar.core.open_expression);
subpar.core.forward_delete = (function forward_delete(cm){
if(cljs.core.truth_(subpar.core.nothing_selected_QMARK_.call(null,cm)))
{var vec__7807__7808 = subpar.core.get_info.call(null,cm);
var cur__7809 = cljs.core.nth.call(null,vec__7807__7808,0,null);
var i__7810 = cljs.core.nth.call(null,vec__7807__7808,1,null);
var s__7811 = cljs.core.nth.call(null,vec__7807__7808,2,null);
var act__7812 = subpar.paredit.forward_delete_action.call(null,s__7811,i__7810);
var s1__7813 = cm.posFromIndex(i__7810);
var e1__7814 = cm.posFromIndex((i__7810 + 1));
var s2__7815 = cm.posFromIndex((i__7810 - 1));
var e2__7816 = e1__7814;
var s3__7817 = s1__7813;
var e3__7818 = cm.posFromIndex((i__7810 + 2));
var pred__7819__7822 = cljs.core._EQ_;
var expr__7820__7823 = act__7812;
if(pred__7819__7822.call(null,1,expr__7820__7823))
{return cm.replaceRange("",s1__7813,e1__7814);
} else
{if(pred__7819__7822.call(null,2,expr__7820__7823))
{return cm.replaceRange("",s2__7815,e2__7816);
} else
{if(pred__7819__7822.call(null,3,expr__7820__7823))
{return cm.replaceRange("",s3__7817,e3__7818);
} else
{if(pred__7819__7822.call(null,4,expr__7820__7823))
{return cm.setCursor(e1__7814);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7820__7823)].join('')));
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
{var vec__7841__7842 = subpar.core.get_info.call(null,cm);
var cur__7843 = cljs.core.nth.call(null,vec__7841__7842,0,null);
var i__7844 = cljs.core.nth.call(null,vec__7841__7842,1,null);
var s__7845 = cljs.core.nth.call(null,vec__7841__7842,2,null);
var act__7846 = subpar.paredit.backward_delete_action.call(null,s__7845,i__7844);
var s1__7847 = cm.posFromIndex((i__7844 - 1));
var e1__7848 = cm.posFromIndex(i__7844);
var s2__7849 = s1__7847;
var e2__7850 = cm.posFromIndex((i__7844 + 1));
var s3__7851 = cm.posFromIndex((i__7844 - 2));
var e3__7852 = e1__7848;
var pred__7853__7856 = cljs.core._EQ_;
var expr__7854__7857 = act__7846;
if(pred__7853__7856.call(null,1,expr__7854__7857))
{return cm.replaceRange("",s1__7847,e1__7848);
} else
{if(pred__7853__7856.call(null,2,expr__7854__7857))
{return cm.replaceRange("",s2__7849,e2__7850);
} else
{if(pred__7853__7856.call(null,3,expr__7854__7857))
{return cm.replaceRange("",s3__7851,e3__7852);
} else
{if(pred__7853__7856.call(null,4,expr__7854__7857))
{return cm.setCursor(s1__7847);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7854__7857)].join('')));
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
var vec__7869__7870 = subpar.core.get_info.call(null,cm);
var cur__7871 = cljs.core.nth.call(null,vec__7869__7870,0,null);
var i__7872 = cljs.core.nth.call(null,vec__7869__7870,1,null);
var s__7873 = cljs.core.nth.call(null,vec__7869__7870,2,null);
var act__7874 = subpar.paredit.double_quote_action.call(null,s__7873,i__7872);
var pred__7875__7878 = cljs.core._EQ_;
var expr__7876__7879 = act__7874;
if(pred__7875__7878.call(null,0,expr__7876__7879))
{return subpar.core.open_expression.call(null,cm,"\"\"");
} else
{if(pred__7875__7878.call(null,1,expr__7876__7879))
{return cm.replaceRange("\\\"",cur__7871);
} else
{if(pred__7875__7878.call(null,2,expr__7876__7879))
{return subpar.core.go_to_index.call(null,cm,i__7872,(i__7872 + 1));
} else
{if(pred__7875__7878.call(null,3,expr__7876__7879))
{return cm.replaceRange("\"",cur__7871);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7876__7879)].join('')));
}
}
}
}
});
goog.exportSymbol('subpar.core.double_quote', subpar.core.double_quote);
subpar.core.close_expression = (function close_expression(cm,c){
var vec__7892__7893 = subpar.core.get_info.call(null,cm);
var cur__7894 = cljs.core.nth.call(null,vec__7892__7893,0,null);
var i__7895 = cljs.core.nth.call(null,vec__7892__7893,1,null);
var s__7896 = cljs.core.nth.call(null,vec__7892__7893,2,null);
var p__7897 = subpar.paredit.parse.call(null,s__7896);
if(cljs.core.truth_(subpar.paredit.in_string_QMARK_.call(null,p__7897,i__7895)))
{cm.replaceRange(c,cur__7894);
return cm.setCursor(cur__7894.line,(cur__7894.ch + 1));
} else
{var vec__7898__7899 = subpar.paredit.close_expression_vals.call(null,p__7897,i__7895);
var del__7900 = cljs.core.nth.call(null,vec__7898__7899,0,null);
var beg__7901 = cljs.core.nth.call(null,vec__7898__7899,1,null);
var end__7902 = cljs.core.nth.call(null,vec__7898__7899,2,null);
var dst__7903 = cljs.core.nth.call(null,vec__7898__7899,3,null);
if(cljs.core.truth_(dst__7903))
{if(cljs.core.truth_(del__7900))
{cm.replaceRange("",cm.posFromIndex(beg__7901),cm.posFromIndex(end__7902));
} else
{}
return subpar.core.go_to_index.call(null,cm,i__7895,dst__7903);
} else
{return null;
}
}
});
goog.exportSymbol('subpar.core.close_expression', subpar.core.close_expression);
subpar.core.go = (function go(cm,f){
var vec__7910__7911 = subpar.core.get_info.call(null,cm);
var cur__7912 = cljs.core.nth.call(null,vec__7910__7911,0,null);
var i__7913 = cljs.core.nth.call(null,vec__7910__7911,1,null);
var s__7914 = cljs.core.nth.call(null,vec__7910__7911,2,null);
var j__7915 = f.call(null,s__7914,i__7913);
return subpar.core.go_to_index.call(null,cm,i__7913,j__7915);
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
var vec__7934__7936 = subpar.core.get_info.call(null,cm);
var cur__7937 = cljs.core.nth.call(null,vec__7934__7936,0,null);
var i__7938 = cljs.core.nth.call(null,vec__7934__7936,1,null);
var s__7939 = cljs.core.nth.call(null,vec__7934__7936,2,null);
var vec__7935__7940 = subpar.paredit.forward_slurp_vals.call(null,s__7939,i__7938);
var delimiter__7941 = cljs.core.nth.call(null,vec__7935__7940,0,null);
var si__7942 = cljs.core.nth.call(null,vec__7935__7940,1,null);
var di__7943 = cljs.core.nth.call(null,vec__7935__7940,2,null);
var ri__7944 = cljs.core.nth.call(null,vec__7935__7940,3,null);
if(cljs.core.truth_(ri__7944))
{var start__7945 = cm.posFromIndex(si__7942);
var end__7946 = cm.posFromIndex((si__7942 + 1));
var destination__7947 = cm.posFromIndex(di__7943);
var line__7948 = start__7945.line;
var update__7949 = (function (){
cm.replaceRange(delimiter__7941,destination__7947);
cm.replaceRange("",start__7945,end__7946);
return cljs.core.map.call(null,(function (p1__7916_SHARP_){
return cm.indentLine(p1__7916_SHARP_);
}),cljs.core.range.call(null,line__7948,(line__7948 + ri__7944)));
});
return cm.compoundChange(update__7949);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_slurp', subpar.core.forward_slurp);
subpar.core.backward_slurp = (function backward_slurp(cm){
var vec__7967__7969 = subpar.core.get_info.call(null,cm);
var cur__7970 = cljs.core.nth.call(null,vec__7967__7969,0,null);
var i__7971 = cljs.core.nth.call(null,vec__7967__7969,1,null);
var s__7972 = cljs.core.nth.call(null,vec__7967__7969,2,null);
var vec__7968__7973 = subpar.paredit.backward_slurp_vals.call(null,s__7972,i__7971);
var delimiter__7974 = cljs.core.nth.call(null,vec__7968__7973,0,null);
var si__7975 = cljs.core.nth.call(null,vec__7968__7973,1,null);
var di__7976 = cljs.core.nth.call(null,vec__7968__7973,2,null);
var ri__7977 = cljs.core.nth.call(null,vec__7968__7973,3,null);
if(cljs.core.truth_(ri__7977))
{var start__7978 = cm.posFromIndex(si__7975);
var end__7979 = cm.posFromIndex((si__7975 + 1));
var destination__7980 = cm.posFromIndex(di__7976);
var line__7981 = start__7978.line;
var update__7982 = (function (){
cm.replaceRange("",start__7978,end__7979);
cm.replaceRange(delimiter__7974,destination__7980);
return cljs.core.map.call(null,(function (p1__7917_SHARP_){
return cm.indentLine(p1__7917_SHARP_);
}),cljs.core.range.call(null,line__7981,(line__7981 + ri__7977)));
});
return cm.compoundChange(update__7982);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_slurp', subpar.core.backward_slurp);
subpar.core.backward_barf = (function backward_barf(cm){
var vec__8002__8004 = subpar.core.get_info.call(null,cm);
var cur__8005 = cljs.core.nth.call(null,vec__8002__8004,0,null);
var i__8006 = cljs.core.nth.call(null,vec__8002__8004,1,null);
var s__8007 = cljs.core.nth.call(null,vec__8002__8004,2,null);
var vec__8003__8008 = subpar.paredit.backward_barf_vals.call(null,s__8007,i__8006);
var delimiter__8009 = cljs.core.nth.call(null,vec__8003__8008,0,null);
var si__8010 = cljs.core.nth.call(null,vec__8003__8008,1,null);
var di__8011 = cljs.core.nth.call(null,vec__8003__8008,2,null);
var pad__8012 = cljs.core.nth.call(null,vec__8003__8008,3,null);
var ri__8013 = cljs.core.nth.call(null,vec__8003__8008,4,null);
if(cljs.core.truth_(ri__8013))
{var delimiter__8014 = (cljs.core.truth_(pad__8012)?[cljs.core.str(" "),cljs.core.str(delimiter__8009)].join(''):delimiter__8009);
var destination__8015 = cm.posFromIndex(di__8011);
var start__8016 = cm.posFromIndex(si__8010);
var end__8017 = cm.posFromIndex((si__8010 + 1));
var line__8018 = start__8016.line;
var update__8019 = (function (){
cm.replaceRange(delimiter__8014,destination__8015);
cm.replaceRange("",start__8016,end__8017);
return cljs.core.map.call(null,(function (p1__7950_SHARP_){
return cm.indentLine(p1__7950_SHARP_);
}),cljs.core.range.call(null,line__8018,(line__8018 + ri__8013)));
});
return cm.compoundChange(update__8019);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_barf', subpar.core.backward_barf);
subpar.core.forward_barf = (function forward_barf(cm){
var vec__8040__8042 = subpar.core.get_info.call(null,cm);
var cur__8043 = cljs.core.nth.call(null,vec__8040__8042,0,null);
var i__8044 = cljs.core.nth.call(null,vec__8040__8042,1,null);
var s__8045 = cljs.core.nth.call(null,vec__8040__8042,2,null);
var vec__8041__8046 = subpar.paredit.forward_barf_vals.call(null,s__8045,i__8044);
var delimiter__8047 = cljs.core.nth.call(null,vec__8041__8046,0,null);
var si__8048 = cljs.core.nth.call(null,vec__8041__8046,1,null);
var di__8049 = cljs.core.nth.call(null,vec__8041__8046,2,null);
var pad__8050 = cljs.core.nth.call(null,vec__8041__8046,3,null);
var ri__8051 = cljs.core.nth.call(null,vec__8041__8046,4,null);
var i0__8052 = cljs.core.nth.call(null,vec__8041__8046,5,null);
if(cljs.core.truth_(ri__8051))
{var delimiter__8053 = (cljs.core.truth_(pad__8050)?[cljs.core.str(" "),cljs.core.str(delimiter__8047)].join(''):delimiter__8047);
var destination__8054 = cm.posFromIndex(di__8049);
var start__8055 = cm.posFromIndex(si__8048);
var end__8056 = cm.posFromIndex((si__8048 + 1));
var line__8057 = cm.posFromIndex(i0__8052).line;
var update__8058 = (function (){
cm.replaceRange("",start__8055,end__8056);
cm.replaceRange(delimiter__8053,destination__8054);
return cljs.core.map.call(null,(function (p1__7983_SHARP_){
return cm.indentLine(p1__7983_SHARP_);
}),cljs.core.range.call(null,line__8057,(line__8057 + ri__8051)));
});
return cm.compoundChange(update__8058);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_barf', subpar.core.forward_barf);
subpar.core.splice_delete_backward = (function splice_delete_backward(cm){
var vec__8078__8080 = subpar.core.get_info.call(null,cm);
var cur__8081 = cljs.core.nth.call(null,vec__8078__8080,0,null);
var i__8082 = cljs.core.nth.call(null,vec__8078__8080,1,null);
var s__8083 = cljs.core.nth.call(null,vec__8078__8080,2,null);
var vec__8079__8084 = subpar.paredit.splice_delete_backward_vals.call(null,s__8083,i__8082);
var start__8085 = cljs.core.nth.call(null,vec__8079__8084,0,null);
var end__8086 = cljs.core.nth.call(null,vec__8079__8084,1,null);
var closer__8087 = cljs.core.nth.call(null,vec__8079__8084,2,null);
var reindent__8088 = cljs.core.nth.call(null,vec__8079__8084,3,null);
var num__8089 = cljs.core.nth.call(null,vec__8079__8084,4,null);
if(cljs.core.truth_(reindent__8088))
{var line__8090 = cm.posFromIndex(reindent__8088).line;
var c0__8091 = cm.posFromIndex(closer__8087);
var c1__8092 = cm.posFromIndex((closer__8087 + 1));
var s0__8093 = cm.posFromIndex(start__8085);
var s1__8094 = cm.posFromIndex(end__8086);
var update__8095 = (function (){
cm.replaceRange("",c0__8091,c1__8092);
cm.replaceRange("",s0__8093,s1__8094);
return cljs.core.map.call(null,(function (p1__8020_SHARP_){
return cm.indentLine(p1__8020_SHARP_);
}),cljs.core.range.call(null,line__8090,(line__8090 + num__8089)));
});
return cm.compoundChange(update__8095);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_backward', subpar.core.splice_delete_backward);
subpar.core.splice_delete_forward = (function splice_delete_forward(cm){
var vec__8115__8117 = subpar.core.get_info.call(null,cm);
var cur__8118 = cljs.core.nth.call(null,vec__8115__8117,0,null);
var i__8119 = cljs.core.nth.call(null,vec__8115__8117,1,null);
var s__8120 = cljs.core.nth.call(null,vec__8115__8117,2,null);
var vec__8116__8121 = subpar.paredit.splice_delete_forward_vals.call(null,s__8120,i__8119);
var opener__8122 = cljs.core.nth.call(null,vec__8116__8121,0,null);
var start__8123 = cljs.core.nth.call(null,vec__8116__8121,1,null);
var end__8124 = cljs.core.nth.call(null,vec__8116__8121,2,null);
var reindent__8125 = cljs.core.nth.call(null,vec__8116__8121,3,null);
var num__8126 = cljs.core.nth.call(null,vec__8116__8121,4,null);
if(cljs.core.truth_(reindent__8125))
{var line__8127 = cm.posFromIndex(reindent__8125).line;
var o0__8128 = cm.posFromIndex(opener__8122);
var o1__8129 = cm.posFromIndex((opener__8122 + 1));
var s0__8130 = cm.posFromIndex(start__8123);
var s1__8131 = cm.posFromIndex(end__8124);
var update__8132 = (function (){
cm.replaceRange("",s0__8130,s1__8131);
cm.replaceRange("",o0__8128,o1__8129);
return cljs.core.map.call(null,(function (p1__8059_SHARP_){
return cm.indentLine(p1__8059_SHARP_);
}),cljs.core.range.call(null,line__8127,(line__8127 + num__8126)));
});
return cm.compoundChange(update__8132);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_forward', subpar.core.splice_delete_forward);
subpar.core.splice = (function splice(cm){
var vec__8151__8153 = subpar.core.get_info.call(null,cm);
var cur__8154 = cljs.core.nth.call(null,vec__8151__8153,0,null);
var i__8155 = cljs.core.nth.call(null,vec__8151__8153,1,null);
var s__8156 = cljs.core.nth.call(null,vec__8151__8153,2,null);
var vec__8152__8157 = subpar.paredit.splice_vals.call(null,s__8156,i__8155);
var opener__8158 = cljs.core.nth.call(null,vec__8152__8157,0,null);
var closer__8159 = cljs.core.nth.call(null,vec__8152__8157,1,null);
var reindent__8160 = cljs.core.nth.call(null,vec__8152__8157,2,null);
var num__8161 = cljs.core.nth.call(null,vec__8152__8157,3,null);
if(cljs.core.truth_(reindent__8160))
{var line__8162 = cm.posFromIndex(reindent__8160).line;
var o0__8163 = cm.posFromIndex(opener__8158);
var o1__8164 = cm.posFromIndex((opener__8158 + 1));
var c0__8165 = cm.posFromIndex(closer__8159);
var c1__8166 = cm.posFromIndex((closer__8159 + 1));
var update__8167 = (function (){
cm.replaceRange("",c0__8165,c1__8166);
cm.replaceRange("",o0__8163,o1__8164);
return cljs.core.map.call(null,(function (p1__8096_SHARP_){
return cm.indentLine(p1__8096_SHARP_);
}),cljs.core.range.call(null,line__8162,(line__8162 + num__8161)));
});
return cm.compoundChange(update__8167);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice', subpar.core.splice);
subpar.core.indent_selection = (function indent_selection(cm){
if(cljs.core.truth_(cm.somethingSelected()))
{var start__8171 = cm.getCursor(true).line;
var end__8172 = cm.getCursor(false).line;
var f__8173 = (function (){
return cljs.core.map.call(null,(function (p1__8133_SHARP_){
return cm.indentLine(p1__8133_SHARP_);
}),cljs.core.range.call(null,start__8171,(end__8172 + 1)));
});
return cm.compoundChange(f__8173);
} else
{return cm.indentLine(cm.getCursor().line);
}
});
goog.exportSymbol('subpar.core.indent_selection', subpar.core.indent_selection);
