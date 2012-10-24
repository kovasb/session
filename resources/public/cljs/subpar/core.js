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
var vec__7784__7785 = subpar.core.get_info.call(null,cm);
var cur__7786 = cljs.core.nth.call(null,vec__7784__7785,0,null);
var i__7787 = cljs.core.nth.call(null,vec__7784__7785,1,null);
var s__7788 = cljs.core.nth.call(null,vec__7784__7785,2,null);
if(cljs.core.truth_(subpar.paredit.in_string.call(null,s__7788,i__7787)))
{cm.replaceRange(cljs.core.nth.call(null,pair,0),cur__7786);
return cm.setCursor(cur__7786.line,(cur__7786.ch + 1));
} else
{return cm.compoundChange((function (){
cm.replaceRange(pair,cur__7786);
cm.setCursor(cur__7786.line,(cur__7786.ch + 1));
return cm.indentLine(cur__7786.line);
}));
}
});
goog.exportSymbol('subpar.core.open_expression', subpar.core.open_expression);
subpar.core.forward_delete = (function forward_delete(cm){
if(cljs.core.truth_(subpar.core.nothing_selected_QMARK_.call(null,cm)))
{var vec__7806__7807 = subpar.core.get_info.call(null,cm);
var cur__7808 = cljs.core.nth.call(null,vec__7806__7807,0,null);
var i__7809 = cljs.core.nth.call(null,vec__7806__7807,1,null);
var s__7810 = cljs.core.nth.call(null,vec__7806__7807,2,null);
var act__7811 = subpar.paredit.forward_delete_action.call(null,s__7810,i__7809);
var s1__7812 = cm.posFromIndex(i__7809);
var e1__7813 = cm.posFromIndex((i__7809 + 1));
var s2__7814 = cm.posFromIndex((i__7809 - 1));
var e2__7815 = e1__7813;
var s3__7816 = s1__7812;
var e3__7817 = cm.posFromIndex((i__7809 + 2));
var pred__7818__7821 = cljs.core._EQ_;
var expr__7819__7822 = act__7811;
if(pred__7818__7821.call(null,1,expr__7819__7822))
{return cm.replaceRange("",s1__7812,e1__7813);
} else
{if(pred__7818__7821.call(null,2,expr__7819__7822))
{return cm.replaceRange("",s2__7814,e2__7815);
} else
{if(pred__7818__7821.call(null,3,expr__7819__7822))
{return cm.replaceRange("",s3__7816,e3__7817);
} else
{if(pred__7818__7821.call(null,4,expr__7819__7822))
{return cm.setCursor(e1__7813);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7819__7822)].join('')));
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
{var vec__7840__7841 = subpar.core.get_info.call(null,cm);
var cur__7842 = cljs.core.nth.call(null,vec__7840__7841,0,null);
var i__7843 = cljs.core.nth.call(null,vec__7840__7841,1,null);
var s__7844 = cljs.core.nth.call(null,vec__7840__7841,2,null);
var act__7845 = subpar.paredit.backward_delete_action.call(null,s__7844,i__7843);
var s1__7846 = cm.posFromIndex((i__7843 - 1));
var e1__7847 = cm.posFromIndex(i__7843);
var s2__7848 = s1__7846;
var e2__7849 = cm.posFromIndex((i__7843 + 1));
var s3__7850 = cm.posFromIndex((i__7843 - 2));
var e3__7851 = e1__7847;
var pred__7852__7855 = cljs.core._EQ_;
var expr__7853__7856 = act__7845;
if(pred__7852__7855.call(null,1,expr__7853__7856))
{return cm.replaceRange("",s1__7846,e1__7847);
} else
{if(pred__7852__7855.call(null,2,expr__7853__7856))
{return cm.replaceRange("",s2__7848,e2__7849);
} else
{if(pred__7852__7855.call(null,3,expr__7853__7856))
{return cm.replaceRange("",s3__7850,e3__7851);
} else
{if(pred__7852__7855.call(null,4,expr__7853__7856))
{return cm.setCursor(s1__7846);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7853__7856)].join('')));
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
var vec__7868__7869 = subpar.core.get_info.call(null,cm);
var cur__7870 = cljs.core.nth.call(null,vec__7868__7869,0,null);
var i__7871 = cljs.core.nth.call(null,vec__7868__7869,1,null);
var s__7872 = cljs.core.nth.call(null,vec__7868__7869,2,null);
var act__7873 = subpar.paredit.double_quote_action.call(null,s__7872,i__7871);
var pred__7874__7877 = cljs.core._EQ_;
var expr__7875__7878 = act__7873;
if(pred__7874__7877.call(null,0,expr__7875__7878))
{return subpar.core.open_expression.call(null,cm,"\"\"");
} else
{if(pred__7874__7877.call(null,1,expr__7875__7878))
{return cm.replaceRange("\\\"",cur__7870);
} else
{if(pred__7874__7877.call(null,2,expr__7875__7878))
{return subpar.core.go_to_index.call(null,cm,i__7871,(i__7871 + 1));
} else
{if(pred__7874__7877.call(null,3,expr__7875__7878))
{return cm.replaceRange("\"",cur__7870);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7875__7878)].join('')));
}
}
}
}
});
goog.exportSymbol('subpar.core.double_quote', subpar.core.double_quote);
subpar.core.close_expression = (function close_expression(cm,c){
var vec__7891__7892 = subpar.core.get_info.call(null,cm);
var cur__7893 = cljs.core.nth.call(null,vec__7891__7892,0,null);
var i__7894 = cljs.core.nth.call(null,vec__7891__7892,1,null);
var s__7895 = cljs.core.nth.call(null,vec__7891__7892,2,null);
var p__7896 = subpar.paredit.parse.call(null,s__7895);
if(cljs.core.truth_(subpar.paredit.in_string_QMARK_.call(null,p__7896,i__7894)))
{cm.replaceRange(c,cur__7893);
return cm.setCursor(cur__7893.line,(cur__7893.ch + 1));
} else
{var vec__7897__7898 = subpar.paredit.close_expression_vals.call(null,p__7896,i__7894);
var del__7899 = cljs.core.nth.call(null,vec__7897__7898,0,null);
var beg__7900 = cljs.core.nth.call(null,vec__7897__7898,1,null);
var end__7901 = cljs.core.nth.call(null,vec__7897__7898,2,null);
var dst__7902 = cljs.core.nth.call(null,vec__7897__7898,3,null);
if(cljs.core.truth_(dst__7902))
{if(cljs.core.truth_(del__7899))
{cm.replaceRange("",cm.posFromIndex(beg__7900),cm.posFromIndex(end__7901));
} else
{}
return subpar.core.go_to_index.call(null,cm,i__7894,dst__7902);
} else
{return null;
}
}
});
goog.exportSymbol('subpar.core.close_expression', subpar.core.close_expression);
subpar.core.go = (function go(cm,f){
var vec__7909__7910 = subpar.core.get_info.call(null,cm);
var cur__7911 = cljs.core.nth.call(null,vec__7909__7910,0,null);
var i__7912 = cljs.core.nth.call(null,vec__7909__7910,1,null);
var s__7913 = cljs.core.nth.call(null,vec__7909__7910,2,null);
var j__7914 = f.call(null,s__7913,i__7912);
return subpar.core.go_to_index.call(null,cm,i__7912,j__7914);
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
var vec__7933__7935 = subpar.core.get_info.call(null,cm);
var cur__7936 = cljs.core.nth.call(null,vec__7933__7935,0,null);
var i__7937 = cljs.core.nth.call(null,vec__7933__7935,1,null);
var s__7938 = cljs.core.nth.call(null,vec__7933__7935,2,null);
var vec__7934__7939 = subpar.paredit.forward_slurp_vals.call(null,s__7938,i__7937);
var delimiter__7940 = cljs.core.nth.call(null,vec__7934__7939,0,null);
var si__7941 = cljs.core.nth.call(null,vec__7934__7939,1,null);
var di__7942 = cljs.core.nth.call(null,vec__7934__7939,2,null);
var ri__7943 = cljs.core.nth.call(null,vec__7934__7939,3,null);
if(cljs.core.truth_(ri__7943))
{var start__7944 = cm.posFromIndex(si__7941);
var end__7945 = cm.posFromIndex((si__7941 + 1));
var destination__7946 = cm.posFromIndex(di__7942);
var line__7947 = start__7944.line;
var update__7948 = (function (){
cm.replaceRange(delimiter__7940,destination__7946);
cm.replaceRange("",start__7944,end__7945);
return cljs.core.map.call(null,(function (p1__7915_SHARP_){
return cm.indentLine(p1__7915_SHARP_);
}),cljs.core.range.call(null,line__7947,(line__7947 + ri__7943)));
});
return cm.compoundChange(update__7948);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_slurp', subpar.core.forward_slurp);
subpar.core.backward_slurp = (function backward_slurp(cm){
var vec__7966__7968 = subpar.core.get_info.call(null,cm);
var cur__7969 = cljs.core.nth.call(null,vec__7966__7968,0,null);
var i__7970 = cljs.core.nth.call(null,vec__7966__7968,1,null);
var s__7971 = cljs.core.nth.call(null,vec__7966__7968,2,null);
var vec__7967__7972 = subpar.paredit.backward_slurp_vals.call(null,s__7971,i__7970);
var delimiter__7973 = cljs.core.nth.call(null,vec__7967__7972,0,null);
var si__7974 = cljs.core.nth.call(null,vec__7967__7972,1,null);
var di__7975 = cljs.core.nth.call(null,vec__7967__7972,2,null);
var ri__7976 = cljs.core.nth.call(null,vec__7967__7972,3,null);
if(cljs.core.truth_(ri__7976))
{var start__7977 = cm.posFromIndex(si__7974);
var end__7978 = cm.posFromIndex((si__7974 + 1));
var destination__7979 = cm.posFromIndex(di__7975);
var line__7980 = start__7977.line;
var update__7981 = (function (){
cm.replaceRange("",start__7977,end__7978);
cm.replaceRange(delimiter__7973,destination__7979);
return cljs.core.map.call(null,(function (p1__7916_SHARP_){
return cm.indentLine(p1__7916_SHARP_);
}),cljs.core.range.call(null,line__7980,(line__7980 + ri__7976)));
});
return cm.compoundChange(update__7981);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_slurp', subpar.core.backward_slurp);
subpar.core.backward_barf = (function backward_barf(cm){
var vec__8001__8003 = subpar.core.get_info.call(null,cm);
var cur__8004 = cljs.core.nth.call(null,vec__8001__8003,0,null);
var i__8005 = cljs.core.nth.call(null,vec__8001__8003,1,null);
var s__8006 = cljs.core.nth.call(null,vec__8001__8003,2,null);
var vec__8002__8007 = subpar.paredit.backward_barf_vals.call(null,s__8006,i__8005);
var delimiter__8008 = cljs.core.nth.call(null,vec__8002__8007,0,null);
var si__8009 = cljs.core.nth.call(null,vec__8002__8007,1,null);
var di__8010 = cljs.core.nth.call(null,vec__8002__8007,2,null);
var pad__8011 = cljs.core.nth.call(null,vec__8002__8007,3,null);
var ri__8012 = cljs.core.nth.call(null,vec__8002__8007,4,null);
if(cljs.core.truth_(ri__8012))
{var delimiter__8013 = (cljs.core.truth_(pad__8011)?[cljs.core.str(" "),cljs.core.str(delimiter__8008)].join(''):delimiter__8008);
var destination__8014 = cm.posFromIndex(di__8010);
var start__8015 = cm.posFromIndex(si__8009);
var end__8016 = cm.posFromIndex((si__8009 + 1));
var line__8017 = start__8015.line;
var update__8018 = (function (){
cm.replaceRange(delimiter__8013,destination__8014);
cm.replaceRange("",start__8015,end__8016);
return cljs.core.map.call(null,(function (p1__7949_SHARP_){
return cm.indentLine(p1__7949_SHARP_);
}),cljs.core.range.call(null,line__8017,(line__8017 + ri__8012)));
});
return cm.compoundChange(update__8018);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_barf', subpar.core.backward_barf);
subpar.core.forward_barf = (function forward_barf(cm){
var vec__8039__8041 = subpar.core.get_info.call(null,cm);
var cur__8042 = cljs.core.nth.call(null,vec__8039__8041,0,null);
var i__8043 = cljs.core.nth.call(null,vec__8039__8041,1,null);
var s__8044 = cljs.core.nth.call(null,vec__8039__8041,2,null);
var vec__8040__8045 = subpar.paredit.forward_barf_vals.call(null,s__8044,i__8043);
var delimiter__8046 = cljs.core.nth.call(null,vec__8040__8045,0,null);
var si__8047 = cljs.core.nth.call(null,vec__8040__8045,1,null);
var di__8048 = cljs.core.nth.call(null,vec__8040__8045,2,null);
var pad__8049 = cljs.core.nth.call(null,vec__8040__8045,3,null);
var ri__8050 = cljs.core.nth.call(null,vec__8040__8045,4,null);
var i0__8051 = cljs.core.nth.call(null,vec__8040__8045,5,null);
if(cljs.core.truth_(ri__8050))
{var delimiter__8052 = (cljs.core.truth_(pad__8049)?[cljs.core.str(" "),cljs.core.str(delimiter__8046)].join(''):delimiter__8046);
var destination__8053 = cm.posFromIndex(di__8048);
var start__8054 = cm.posFromIndex(si__8047);
var end__8055 = cm.posFromIndex((si__8047 + 1));
var line__8056 = cm.posFromIndex(i0__8051).line;
var update__8057 = (function (){
cm.replaceRange("",start__8054,end__8055);
cm.replaceRange(delimiter__8052,destination__8053);
return cljs.core.map.call(null,(function (p1__7982_SHARP_){
return cm.indentLine(p1__7982_SHARP_);
}),cljs.core.range.call(null,line__8056,(line__8056 + ri__8050)));
});
return cm.compoundChange(update__8057);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_barf', subpar.core.forward_barf);
subpar.core.splice_delete_backward = (function splice_delete_backward(cm){
var vec__8077__8079 = subpar.core.get_info.call(null,cm);
var cur__8080 = cljs.core.nth.call(null,vec__8077__8079,0,null);
var i__8081 = cljs.core.nth.call(null,vec__8077__8079,1,null);
var s__8082 = cljs.core.nth.call(null,vec__8077__8079,2,null);
var vec__8078__8083 = subpar.paredit.splice_delete_backward_vals.call(null,s__8082,i__8081);
var start__8084 = cljs.core.nth.call(null,vec__8078__8083,0,null);
var end__8085 = cljs.core.nth.call(null,vec__8078__8083,1,null);
var closer__8086 = cljs.core.nth.call(null,vec__8078__8083,2,null);
var reindent__8087 = cljs.core.nth.call(null,vec__8078__8083,3,null);
var num__8088 = cljs.core.nth.call(null,vec__8078__8083,4,null);
if(cljs.core.truth_(reindent__8087))
{var line__8089 = cm.posFromIndex(reindent__8087).line;
var c0__8090 = cm.posFromIndex(closer__8086);
var c1__8091 = cm.posFromIndex((closer__8086 + 1));
var s0__8092 = cm.posFromIndex(start__8084);
var s1__8093 = cm.posFromIndex(end__8085);
var update__8094 = (function (){
cm.replaceRange("",c0__8090,c1__8091);
cm.replaceRange("",s0__8092,s1__8093);
return cljs.core.map.call(null,(function (p1__8019_SHARP_){
return cm.indentLine(p1__8019_SHARP_);
}),cljs.core.range.call(null,line__8089,(line__8089 + num__8088)));
});
return cm.compoundChange(update__8094);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_backward', subpar.core.splice_delete_backward);
subpar.core.splice_delete_forward = (function splice_delete_forward(cm){
var vec__8114__8116 = subpar.core.get_info.call(null,cm);
var cur__8117 = cljs.core.nth.call(null,vec__8114__8116,0,null);
var i__8118 = cljs.core.nth.call(null,vec__8114__8116,1,null);
var s__8119 = cljs.core.nth.call(null,vec__8114__8116,2,null);
var vec__8115__8120 = subpar.paredit.splice_delete_forward_vals.call(null,s__8119,i__8118);
var opener__8121 = cljs.core.nth.call(null,vec__8115__8120,0,null);
var start__8122 = cljs.core.nth.call(null,vec__8115__8120,1,null);
var end__8123 = cljs.core.nth.call(null,vec__8115__8120,2,null);
var reindent__8124 = cljs.core.nth.call(null,vec__8115__8120,3,null);
var num__8125 = cljs.core.nth.call(null,vec__8115__8120,4,null);
if(cljs.core.truth_(reindent__8124))
{var line__8126 = cm.posFromIndex(reindent__8124).line;
var o0__8127 = cm.posFromIndex(opener__8121);
var o1__8128 = cm.posFromIndex((opener__8121 + 1));
var s0__8129 = cm.posFromIndex(start__8122);
var s1__8130 = cm.posFromIndex(end__8123);
var update__8131 = (function (){
cm.replaceRange("",s0__8129,s1__8130);
cm.replaceRange("",o0__8127,o1__8128);
return cljs.core.map.call(null,(function (p1__8058_SHARP_){
return cm.indentLine(p1__8058_SHARP_);
}),cljs.core.range.call(null,line__8126,(line__8126 + num__8125)));
});
return cm.compoundChange(update__8131);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_forward', subpar.core.splice_delete_forward);
subpar.core.splice = (function splice(cm){
var vec__8150__8152 = subpar.core.get_info.call(null,cm);
var cur__8153 = cljs.core.nth.call(null,vec__8150__8152,0,null);
var i__8154 = cljs.core.nth.call(null,vec__8150__8152,1,null);
var s__8155 = cljs.core.nth.call(null,vec__8150__8152,2,null);
var vec__8151__8156 = subpar.paredit.splice_vals.call(null,s__8155,i__8154);
var opener__8157 = cljs.core.nth.call(null,vec__8151__8156,0,null);
var closer__8158 = cljs.core.nth.call(null,vec__8151__8156,1,null);
var reindent__8159 = cljs.core.nth.call(null,vec__8151__8156,2,null);
var num__8160 = cljs.core.nth.call(null,vec__8151__8156,3,null);
if(cljs.core.truth_(reindent__8159))
{var line__8161 = cm.posFromIndex(reindent__8159).line;
var o0__8162 = cm.posFromIndex(opener__8157);
var o1__8163 = cm.posFromIndex((opener__8157 + 1));
var c0__8164 = cm.posFromIndex(closer__8158);
var c1__8165 = cm.posFromIndex((closer__8158 + 1));
var update__8166 = (function (){
cm.replaceRange("",c0__8164,c1__8165);
cm.replaceRange("",o0__8162,o1__8163);
return cljs.core.map.call(null,(function (p1__8095_SHARP_){
return cm.indentLine(p1__8095_SHARP_);
}),cljs.core.range.call(null,line__8161,(line__8161 + num__8160)));
});
return cm.compoundChange(update__8166);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice', subpar.core.splice);
subpar.core.indent_selection = (function indent_selection(cm){
if(cljs.core.truth_(cm.somethingSelected()))
{var start__8170 = cm.getCursor(true).line;
var end__8171 = cm.getCursor(false).line;
var f__8172 = (function (){
return cljs.core.map.call(null,(function (p1__8132_SHARP_){
return cm.indentLine(p1__8132_SHARP_);
}),cljs.core.range.call(null,start__8170,(end__8171 + 1)));
});
return cm.compoundChange(f__8172);
} else
{return cm.indentLine(cm.getCursor().line);
}
});
goog.exportSymbol('subpar.core.indent_selection', subpar.core.indent_selection);
