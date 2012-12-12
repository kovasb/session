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
var vec__7782__7783 = subpar.core.get_info.call(null,cm);
var cur__7784 = cljs.core.nth.call(null,vec__7782__7783,0,null);
var i__7785 = cljs.core.nth.call(null,vec__7782__7783,1,null);
var s__7786 = cljs.core.nth.call(null,vec__7782__7783,2,null);
if(cljs.core.truth_(subpar.paredit.in_string.call(null,s__7786,i__7785)))
{cm.replaceRange(cljs.core.nth.call(null,pair,0),cur__7784);
return cm.setCursor(cur__7784.line,(cur__7784.ch + 1));
} else
{return cm.compoundChange((function (){
cm.replaceRange(pair,cur__7784);
cm.setCursor(cur__7784.line,(cur__7784.ch + 1));
return cm.indentLine(cur__7784.line);
}));
}
});
goog.exportSymbol('subpar.core.open_expression', subpar.core.open_expression);
subpar.core.forward_delete = (function forward_delete(cm){
if(cljs.core.truth_(subpar.core.nothing_selected_QMARK_.call(null,cm)))
{var vec__7804__7805 = subpar.core.get_info.call(null,cm);
var cur__7806 = cljs.core.nth.call(null,vec__7804__7805,0,null);
var i__7807 = cljs.core.nth.call(null,vec__7804__7805,1,null);
var s__7808 = cljs.core.nth.call(null,vec__7804__7805,2,null);
var act__7809 = subpar.paredit.forward_delete_action.call(null,s__7808,i__7807);
var s1__7810 = cm.posFromIndex(i__7807);
var e1__7811 = cm.posFromIndex((i__7807 + 1));
var s2__7812 = cm.posFromIndex((i__7807 - 1));
var e2__7813 = e1__7811;
var s3__7814 = s1__7810;
var e3__7815 = cm.posFromIndex((i__7807 + 2));
var pred__7816__7819 = cljs.core._EQ_;
var expr__7817__7820 = act__7809;
if(pred__7816__7819.call(null,1,expr__7817__7820))
{return cm.replaceRange("",s1__7810,e1__7811);
} else
{if(pred__7816__7819.call(null,2,expr__7817__7820))
{return cm.replaceRange("",s2__7812,e2__7813);
} else
{if(pred__7816__7819.call(null,3,expr__7817__7820))
{return cm.replaceRange("",s3__7814,e3__7815);
} else
{if(pred__7816__7819.call(null,4,expr__7817__7820))
{return cm.setCursor(e1__7811);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7817__7820)].join('')));
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
{var vec__7838__7839 = subpar.core.get_info.call(null,cm);
var cur__7840 = cljs.core.nth.call(null,vec__7838__7839,0,null);
var i__7841 = cljs.core.nth.call(null,vec__7838__7839,1,null);
var s__7842 = cljs.core.nth.call(null,vec__7838__7839,2,null);
var act__7843 = subpar.paredit.backward_delete_action.call(null,s__7842,i__7841);
var s1__7844 = cm.posFromIndex((i__7841 - 1));
var e1__7845 = cm.posFromIndex(i__7841);
var s2__7846 = s1__7844;
var e2__7847 = cm.posFromIndex((i__7841 + 1));
var s3__7848 = cm.posFromIndex((i__7841 - 2));
var e3__7849 = e1__7845;
var pred__7850__7853 = cljs.core._EQ_;
var expr__7851__7854 = act__7843;
if(pred__7850__7853.call(null,1,expr__7851__7854))
{return cm.replaceRange("",s1__7844,e1__7845);
} else
{if(pred__7850__7853.call(null,2,expr__7851__7854))
{return cm.replaceRange("",s2__7846,e2__7847);
} else
{if(pred__7850__7853.call(null,3,expr__7851__7854))
{return cm.replaceRange("",s3__7848,e3__7849);
} else
{if(pred__7850__7853.call(null,4,expr__7851__7854))
{return cm.setCursor(s1__7844);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7851__7854)].join('')));
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
var vec__7866__7867 = subpar.core.get_info.call(null,cm);
var cur__7868 = cljs.core.nth.call(null,vec__7866__7867,0,null);
var i__7869 = cljs.core.nth.call(null,vec__7866__7867,1,null);
var s__7870 = cljs.core.nth.call(null,vec__7866__7867,2,null);
var act__7871 = subpar.paredit.double_quote_action.call(null,s__7870,i__7869);
var pred__7872__7875 = cljs.core._EQ_;
var expr__7873__7876 = act__7871;
if(pred__7872__7875.call(null,0,expr__7873__7876))
{return subpar.core.open_expression.call(null,cm,"\"\"");
} else
{if(pred__7872__7875.call(null,1,expr__7873__7876))
{return cm.replaceRange("\\\"",cur__7868);
} else
{if(pred__7872__7875.call(null,2,expr__7873__7876))
{return subpar.core.go_to_index.call(null,cm,i__7869,(i__7869 + 1));
} else
{if(pred__7872__7875.call(null,3,expr__7873__7876))
{return cm.replaceRange("\"",cur__7868);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7873__7876)].join('')));
}
}
}
}
});
goog.exportSymbol('subpar.core.double_quote', subpar.core.double_quote);
subpar.core.close_expression = (function close_expression(cm,c){
var vec__7889__7890 = subpar.core.get_info.call(null,cm);
var cur__7891 = cljs.core.nth.call(null,vec__7889__7890,0,null);
var i__7892 = cljs.core.nth.call(null,vec__7889__7890,1,null);
var s__7893 = cljs.core.nth.call(null,vec__7889__7890,2,null);
var p__7894 = subpar.paredit.parse.call(null,s__7893);
if(cljs.core.truth_(subpar.paredit.in_string_QMARK_.call(null,p__7894,i__7892)))
{cm.replaceRange(c,cur__7891);
return cm.setCursor(cur__7891.line,(cur__7891.ch + 1));
} else
{var vec__7895__7896 = subpar.paredit.close_expression_vals.call(null,p__7894,i__7892);
var del__7897 = cljs.core.nth.call(null,vec__7895__7896,0,null);
var beg__7898 = cljs.core.nth.call(null,vec__7895__7896,1,null);
var end__7899 = cljs.core.nth.call(null,vec__7895__7896,2,null);
var dst__7900 = cljs.core.nth.call(null,vec__7895__7896,3,null);
if(cljs.core.truth_(dst__7900))
{if(cljs.core.truth_(del__7897))
{cm.replaceRange("",cm.posFromIndex(beg__7898),cm.posFromIndex(end__7899));
} else
{}
return subpar.core.go_to_index.call(null,cm,i__7892,dst__7900);
} else
{return null;
}
}
});
goog.exportSymbol('subpar.core.close_expression', subpar.core.close_expression);
subpar.core.go = (function go(cm,f){
var vec__7907__7908 = subpar.core.get_info.call(null,cm);
var cur__7909 = cljs.core.nth.call(null,vec__7907__7908,0,null);
var i__7910 = cljs.core.nth.call(null,vec__7907__7908,1,null);
var s__7911 = cljs.core.nth.call(null,vec__7907__7908,2,null);
var j__7912 = f.call(null,s__7911,i__7910);
return subpar.core.go_to_index.call(null,cm,i__7910,j__7912);
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
var vec__7931__7933 = subpar.core.get_info.call(null,cm);
var cur__7934 = cljs.core.nth.call(null,vec__7931__7933,0,null);
var i__7935 = cljs.core.nth.call(null,vec__7931__7933,1,null);
var s__7936 = cljs.core.nth.call(null,vec__7931__7933,2,null);
var vec__7932__7937 = subpar.paredit.forward_slurp_vals.call(null,s__7936,i__7935);
var delimiter__7938 = cljs.core.nth.call(null,vec__7932__7937,0,null);
var si__7939 = cljs.core.nth.call(null,vec__7932__7937,1,null);
var di__7940 = cljs.core.nth.call(null,vec__7932__7937,2,null);
var ri__7941 = cljs.core.nth.call(null,vec__7932__7937,3,null);
if(cljs.core.truth_(ri__7941))
{var start__7942 = cm.posFromIndex(si__7939);
var end__7943 = cm.posFromIndex((si__7939 + 1));
var destination__7944 = cm.posFromIndex(di__7940);
var line__7945 = start__7942.line;
var update__7946 = (function (){
cm.replaceRange(delimiter__7938,destination__7944);
cm.replaceRange("",start__7942,end__7943);
return cljs.core.map.call(null,(function (p1__7913_SHARP_){
return cm.indentLine(p1__7913_SHARP_);
}),cljs.core.range.call(null,line__7945,(line__7945 + ri__7941)));
});
return cm.compoundChange(update__7946);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_slurp', subpar.core.forward_slurp);
subpar.core.backward_slurp = (function backward_slurp(cm){
var vec__7964__7966 = subpar.core.get_info.call(null,cm);
var cur__7967 = cljs.core.nth.call(null,vec__7964__7966,0,null);
var i__7968 = cljs.core.nth.call(null,vec__7964__7966,1,null);
var s__7969 = cljs.core.nth.call(null,vec__7964__7966,2,null);
var vec__7965__7970 = subpar.paredit.backward_slurp_vals.call(null,s__7969,i__7968);
var delimiter__7971 = cljs.core.nth.call(null,vec__7965__7970,0,null);
var si__7972 = cljs.core.nth.call(null,vec__7965__7970,1,null);
var di__7973 = cljs.core.nth.call(null,vec__7965__7970,2,null);
var ri__7974 = cljs.core.nth.call(null,vec__7965__7970,3,null);
if(cljs.core.truth_(ri__7974))
{var start__7975 = cm.posFromIndex(si__7972);
var end__7976 = cm.posFromIndex((si__7972 + 1));
var destination__7977 = cm.posFromIndex(di__7973);
var line__7978 = start__7975.line;
var update__7979 = (function (){
cm.replaceRange("",start__7975,end__7976);
cm.replaceRange(delimiter__7971,destination__7977);
return cljs.core.map.call(null,(function (p1__7914_SHARP_){
return cm.indentLine(p1__7914_SHARP_);
}),cljs.core.range.call(null,line__7978,(line__7978 + ri__7974)));
});
return cm.compoundChange(update__7979);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_slurp', subpar.core.backward_slurp);
subpar.core.backward_barf = (function backward_barf(cm){
var vec__7999__8001 = subpar.core.get_info.call(null,cm);
var cur__8002 = cljs.core.nth.call(null,vec__7999__8001,0,null);
var i__8003 = cljs.core.nth.call(null,vec__7999__8001,1,null);
var s__8004 = cljs.core.nth.call(null,vec__7999__8001,2,null);
var vec__8000__8005 = subpar.paredit.backward_barf_vals.call(null,s__8004,i__8003);
var delimiter__8006 = cljs.core.nth.call(null,vec__8000__8005,0,null);
var si__8007 = cljs.core.nth.call(null,vec__8000__8005,1,null);
var di__8008 = cljs.core.nth.call(null,vec__8000__8005,2,null);
var pad__8009 = cljs.core.nth.call(null,vec__8000__8005,3,null);
var ri__8010 = cljs.core.nth.call(null,vec__8000__8005,4,null);
if(cljs.core.truth_(ri__8010))
{var delimiter__8011 = (cljs.core.truth_(pad__8009)?[cljs.core.str(" "),cljs.core.str(delimiter__8006)].join(''):delimiter__8006);
var destination__8012 = cm.posFromIndex(di__8008);
var start__8013 = cm.posFromIndex(si__8007);
var end__8014 = cm.posFromIndex((si__8007 + 1));
var line__8015 = start__8013.line;
var update__8016 = (function (){
cm.replaceRange(delimiter__8011,destination__8012);
cm.replaceRange("",start__8013,end__8014);
return cljs.core.map.call(null,(function (p1__7947_SHARP_){
return cm.indentLine(p1__7947_SHARP_);
}),cljs.core.range.call(null,line__8015,(line__8015 + ri__8010)));
});
return cm.compoundChange(update__8016);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_barf', subpar.core.backward_barf);
subpar.core.forward_barf = (function forward_barf(cm){
var vec__8037__8039 = subpar.core.get_info.call(null,cm);
var cur__8040 = cljs.core.nth.call(null,vec__8037__8039,0,null);
var i__8041 = cljs.core.nth.call(null,vec__8037__8039,1,null);
var s__8042 = cljs.core.nth.call(null,vec__8037__8039,2,null);
var vec__8038__8043 = subpar.paredit.forward_barf_vals.call(null,s__8042,i__8041);
var delimiter__8044 = cljs.core.nth.call(null,vec__8038__8043,0,null);
var si__8045 = cljs.core.nth.call(null,vec__8038__8043,1,null);
var di__8046 = cljs.core.nth.call(null,vec__8038__8043,2,null);
var pad__8047 = cljs.core.nth.call(null,vec__8038__8043,3,null);
var ri__8048 = cljs.core.nth.call(null,vec__8038__8043,4,null);
var i0__8049 = cljs.core.nth.call(null,vec__8038__8043,5,null);
if(cljs.core.truth_(ri__8048))
{var delimiter__8050 = (cljs.core.truth_(pad__8047)?[cljs.core.str(" "),cljs.core.str(delimiter__8044)].join(''):delimiter__8044);
var destination__8051 = cm.posFromIndex(di__8046);
var start__8052 = cm.posFromIndex(si__8045);
var end__8053 = cm.posFromIndex((si__8045 + 1));
var line__8054 = cm.posFromIndex(i0__8049).line;
var update__8055 = (function (){
cm.replaceRange("",start__8052,end__8053);
cm.replaceRange(delimiter__8050,destination__8051);
return cljs.core.map.call(null,(function (p1__7980_SHARP_){
return cm.indentLine(p1__7980_SHARP_);
}),cljs.core.range.call(null,line__8054,(line__8054 + ri__8048)));
});
return cm.compoundChange(update__8055);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_barf', subpar.core.forward_barf);
subpar.core.splice_delete_backward = (function splice_delete_backward(cm){
var vec__8075__8077 = subpar.core.get_info.call(null,cm);
var cur__8078 = cljs.core.nth.call(null,vec__8075__8077,0,null);
var i__8079 = cljs.core.nth.call(null,vec__8075__8077,1,null);
var s__8080 = cljs.core.nth.call(null,vec__8075__8077,2,null);
var vec__8076__8081 = subpar.paredit.splice_delete_backward_vals.call(null,s__8080,i__8079);
var start__8082 = cljs.core.nth.call(null,vec__8076__8081,0,null);
var end__8083 = cljs.core.nth.call(null,vec__8076__8081,1,null);
var closer__8084 = cljs.core.nth.call(null,vec__8076__8081,2,null);
var reindent__8085 = cljs.core.nth.call(null,vec__8076__8081,3,null);
var num__8086 = cljs.core.nth.call(null,vec__8076__8081,4,null);
if(cljs.core.truth_(reindent__8085))
{var line__8087 = cm.posFromIndex(reindent__8085).line;
var c0__8088 = cm.posFromIndex(closer__8084);
var c1__8089 = cm.posFromIndex((closer__8084 + 1));
var s0__8090 = cm.posFromIndex(start__8082);
var s1__8091 = cm.posFromIndex(end__8083);
var update__8092 = (function (){
cm.replaceRange("",c0__8088,c1__8089);
cm.replaceRange("",s0__8090,s1__8091);
return cljs.core.map.call(null,(function (p1__8017_SHARP_){
return cm.indentLine(p1__8017_SHARP_);
}),cljs.core.range.call(null,line__8087,(line__8087 + num__8086)));
});
return cm.compoundChange(update__8092);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_backward', subpar.core.splice_delete_backward);
subpar.core.splice_delete_forward = (function splice_delete_forward(cm){
var vec__8112__8114 = subpar.core.get_info.call(null,cm);
var cur__8115 = cljs.core.nth.call(null,vec__8112__8114,0,null);
var i__8116 = cljs.core.nth.call(null,vec__8112__8114,1,null);
var s__8117 = cljs.core.nth.call(null,vec__8112__8114,2,null);
var vec__8113__8118 = subpar.paredit.splice_delete_forward_vals.call(null,s__8117,i__8116);
var opener__8119 = cljs.core.nth.call(null,vec__8113__8118,0,null);
var start__8120 = cljs.core.nth.call(null,vec__8113__8118,1,null);
var end__8121 = cljs.core.nth.call(null,vec__8113__8118,2,null);
var reindent__8122 = cljs.core.nth.call(null,vec__8113__8118,3,null);
var num__8123 = cljs.core.nth.call(null,vec__8113__8118,4,null);
if(cljs.core.truth_(reindent__8122))
{var line__8124 = cm.posFromIndex(reindent__8122).line;
var o0__8125 = cm.posFromIndex(opener__8119);
var o1__8126 = cm.posFromIndex((opener__8119 + 1));
var s0__8127 = cm.posFromIndex(start__8120);
var s1__8128 = cm.posFromIndex(end__8121);
var update__8129 = (function (){
cm.replaceRange("",s0__8127,s1__8128);
cm.replaceRange("",o0__8125,o1__8126);
return cljs.core.map.call(null,(function (p1__8056_SHARP_){
return cm.indentLine(p1__8056_SHARP_);
}),cljs.core.range.call(null,line__8124,(line__8124 + num__8123)));
});
return cm.compoundChange(update__8129);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_forward', subpar.core.splice_delete_forward);
subpar.core.splice = (function splice(cm){
var vec__8148__8150 = subpar.core.get_info.call(null,cm);
var cur__8151 = cljs.core.nth.call(null,vec__8148__8150,0,null);
var i__8152 = cljs.core.nth.call(null,vec__8148__8150,1,null);
var s__8153 = cljs.core.nth.call(null,vec__8148__8150,2,null);
var vec__8149__8154 = subpar.paredit.splice_vals.call(null,s__8153,i__8152);
var opener__8155 = cljs.core.nth.call(null,vec__8149__8154,0,null);
var closer__8156 = cljs.core.nth.call(null,vec__8149__8154,1,null);
var reindent__8157 = cljs.core.nth.call(null,vec__8149__8154,2,null);
var num__8158 = cljs.core.nth.call(null,vec__8149__8154,3,null);
if(cljs.core.truth_(reindent__8157))
{var line__8159 = cm.posFromIndex(reindent__8157).line;
var o0__8160 = cm.posFromIndex(opener__8155);
var o1__8161 = cm.posFromIndex((opener__8155 + 1));
var c0__8162 = cm.posFromIndex(closer__8156);
var c1__8163 = cm.posFromIndex((closer__8156 + 1));
var update__8164 = (function (){
cm.replaceRange("",c0__8162,c1__8163);
cm.replaceRange("",o0__8160,o1__8161);
return cljs.core.map.call(null,(function (p1__8093_SHARP_){
return cm.indentLine(p1__8093_SHARP_);
}),cljs.core.range.call(null,line__8159,(line__8159 + num__8158)));
});
return cm.compoundChange(update__8164);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice', subpar.core.splice);
subpar.core.indent_selection = (function indent_selection(cm){
if(cljs.core.truth_(cm.somethingSelected()))
{var start__8168 = cm.getCursor(true).line;
var end__8169 = cm.getCursor(false).line;
var f__8170 = (function (){
return cljs.core.map.call(null,(function (p1__8130_SHARP_){
return cm.indentLine(p1__8130_SHARP_);
}),cljs.core.range.call(null,start__8168,(end__8169 + 1)));
});
return cm.compoundChange(f__8170);
} else
{return cm.indentLine(cm.getCursor().line);
}
});
goog.exportSymbol('subpar.core.indent_selection', subpar.core.indent_selection);
