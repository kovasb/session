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
var vec__7739__7740 = subpar.core.get_info.call(null,cm);
var cur__7741 = cljs.core.nth.call(null,vec__7739__7740,0,null);
var i__7742 = cljs.core.nth.call(null,vec__7739__7740,1,null);
var s__7743 = cljs.core.nth.call(null,vec__7739__7740,2,null);
if(cljs.core.truth_(subpar.paredit.in_string.call(null,s__7743,i__7742)))
{cm.replaceRange(cljs.core.nth.call(null,pair,0),cur__7741);
return cm.setCursor(cur__7741.line,(cur__7741.ch + 1));
} else
{return cm.compoundChange((function (){
cm.replaceRange(pair,cur__7741);
cm.setCursor(cur__7741.line,(cur__7741.ch + 1));
return cm.indentLine(cur__7741.line);
}));
}
});
goog.exportSymbol('subpar.core.open_expression', subpar.core.open_expression);
subpar.core.forward_delete = (function forward_delete(cm){
if(cljs.core.truth_(subpar.core.nothing_selected_QMARK_.call(null,cm)))
{var vec__7761__7762 = subpar.core.get_info.call(null,cm);
var cur__7763 = cljs.core.nth.call(null,vec__7761__7762,0,null);
var i__7764 = cljs.core.nth.call(null,vec__7761__7762,1,null);
var s__7765 = cljs.core.nth.call(null,vec__7761__7762,2,null);
var act__7766 = subpar.paredit.forward_delete_action.call(null,s__7765,i__7764);
var s1__7767 = cm.posFromIndex(i__7764);
var e1__7768 = cm.posFromIndex((i__7764 + 1));
var s2__7769 = cm.posFromIndex((i__7764 - 1));
var e2__7770 = e1__7768;
var s3__7771 = s1__7767;
var e3__7772 = cm.posFromIndex((i__7764 + 2));
var pred__7773__7776 = cljs.core._EQ_;
var expr__7774__7777 = act__7766;
if(pred__7773__7776.call(null,1,expr__7774__7777))
{return cm.replaceRange("",s1__7767,e1__7768);
} else
{if(pred__7773__7776.call(null,2,expr__7774__7777))
{return cm.replaceRange("",s2__7769,e2__7770);
} else
{if(pred__7773__7776.call(null,3,expr__7774__7777))
{return cm.replaceRange("",s3__7771,e3__7772);
} else
{if(pred__7773__7776.call(null,4,expr__7774__7777))
{return cm.setCursor(e1__7768);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7774__7777)].join('')));
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
{var vec__7795__7796 = subpar.core.get_info.call(null,cm);
var cur__7797 = cljs.core.nth.call(null,vec__7795__7796,0,null);
var i__7798 = cljs.core.nth.call(null,vec__7795__7796,1,null);
var s__7799 = cljs.core.nth.call(null,vec__7795__7796,2,null);
var act__7800 = subpar.paredit.backward_delete_action.call(null,s__7799,i__7798);
var s1__7801 = cm.posFromIndex((i__7798 - 1));
var e1__7802 = cm.posFromIndex(i__7798);
var s2__7803 = s1__7801;
var e2__7804 = cm.posFromIndex((i__7798 + 1));
var s3__7805 = cm.posFromIndex((i__7798 - 2));
var e3__7806 = e1__7802;
var pred__7807__7810 = cljs.core._EQ_;
var expr__7808__7811 = act__7800;
if(pred__7807__7810.call(null,1,expr__7808__7811))
{return cm.replaceRange("",s1__7801,e1__7802);
} else
{if(pred__7807__7810.call(null,2,expr__7808__7811))
{return cm.replaceRange("",s2__7803,e2__7804);
} else
{if(pred__7807__7810.call(null,3,expr__7808__7811))
{return cm.replaceRange("",s3__7805,e3__7806);
} else
{if(pred__7807__7810.call(null,4,expr__7808__7811))
{return cm.setCursor(s1__7801);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7808__7811)].join('')));
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
var vec__7823__7824 = subpar.core.get_info.call(null,cm);
var cur__7825 = cljs.core.nth.call(null,vec__7823__7824,0,null);
var i__7826 = cljs.core.nth.call(null,vec__7823__7824,1,null);
var s__7827 = cljs.core.nth.call(null,vec__7823__7824,2,null);
var act__7828 = subpar.paredit.double_quote_action.call(null,s__7827,i__7826);
var pred__7829__7832 = cljs.core._EQ_;
var expr__7830__7833 = act__7828;
if(pred__7829__7832.call(null,0,expr__7830__7833))
{return subpar.core.open_expression.call(null,cm,"\"\"");
} else
{if(pred__7829__7832.call(null,1,expr__7830__7833))
{return cm.replaceRange("\\\"",cur__7825);
} else
{if(pred__7829__7832.call(null,2,expr__7830__7833))
{return subpar.core.go_to_index.call(null,cm,i__7826,(i__7826 + 1));
} else
{if(pred__7829__7832.call(null,3,expr__7830__7833))
{return cm.replaceRange("\"",cur__7825);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7830__7833)].join('')));
}
}
}
}
});
goog.exportSymbol('subpar.core.double_quote', subpar.core.double_quote);
subpar.core.close_expression = (function close_expression(cm,c){
var vec__7846__7847 = subpar.core.get_info.call(null,cm);
var cur__7848 = cljs.core.nth.call(null,vec__7846__7847,0,null);
var i__7849 = cljs.core.nth.call(null,vec__7846__7847,1,null);
var s__7850 = cljs.core.nth.call(null,vec__7846__7847,2,null);
var p__7851 = subpar.paredit.parse.call(null,s__7850);
if(cljs.core.truth_(subpar.paredit.in_string_QMARK_.call(null,p__7851,i__7849)))
{cm.replaceRange(c,cur__7848);
return cm.setCursor(cur__7848.line,(cur__7848.ch + 1));
} else
{var vec__7852__7853 = subpar.paredit.close_expression_vals.call(null,p__7851,i__7849);
var del__7854 = cljs.core.nth.call(null,vec__7852__7853,0,null);
var beg__7855 = cljs.core.nth.call(null,vec__7852__7853,1,null);
var end__7856 = cljs.core.nth.call(null,vec__7852__7853,2,null);
var dst__7857 = cljs.core.nth.call(null,vec__7852__7853,3,null);
if(cljs.core.truth_(dst__7857))
{if(cljs.core.truth_(del__7854))
{cm.replaceRange("",cm.posFromIndex(beg__7855),cm.posFromIndex(end__7856));
} else
{}
return subpar.core.go_to_index.call(null,cm,i__7849,dst__7857);
} else
{return null;
}
}
});
goog.exportSymbol('subpar.core.close_expression', subpar.core.close_expression);
subpar.core.go = (function go(cm,f){
var vec__7864__7865 = subpar.core.get_info.call(null,cm);
var cur__7866 = cljs.core.nth.call(null,vec__7864__7865,0,null);
var i__7867 = cljs.core.nth.call(null,vec__7864__7865,1,null);
var s__7868 = cljs.core.nth.call(null,vec__7864__7865,2,null);
var j__7869 = f.call(null,s__7868,i__7867);
return subpar.core.go_to_index.call(null,cm,i__7867,j__7869);
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
var vec__7888__7890 = subpar.core.get_info.call(null,cm);
var cur__7891 = cljs.core.nth.call(null,vec__7888__7890,0,null);
var i__7892 = cljs.core.nth.call(null,vec__7888__7890,1,null);
var s__7893 = cljs.core.nth.call(null,vec__7888__7890,2,null);
var vec__7889__7894 = subpar.paredit.forward_slurp_vals.call(null,s__7893,i__7892);
var delimiter__7895 = cljs.core.nth.call(null,vec__7889__7894,0,null);
var si__7896 = cljs.core.nth.call(null,vec__7889__7894,1,null);
var di__7897 = cljs.core.nth.call(null,vec__7889__7894,2,null);
var ri__7898 = cljs.core.nth.call(null,vec__7889__7894,3,null);
if(cljs.core.truth_(ri__7898))
{var start__7899 = cm.posFromIndex(si__7896);
var end__7900 = cm.posFromIndex((si__7896 + 1));
var destination__7901 = cm.posFromIndex(di__7897);
var line__7902 = start__7899.line;
var update__7903 = (function (){
cm.replaceRange(delimiter__7895,destination__7901);
cm.replaceRange("",start__7899,end__7900);
return cljs.core.map.call(null,(function (p1__7870_SHARP_){
return cm.indentLine(p1__7870_SHARP_);
}),cljs.core.range.call(null,line__7902,(line__7902 + ri__7898)));
});
return cm.compoundChange(update__7903);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_slurp', subpar.core.forward_slurp);
subpar.core.backward_slurp = (function backward_slurp(cm){
var vec__7921__7923 = subpar.core.get_info.call(null,cm);
var cur__7924 = cljs.core.nth.call(null,vec__7921__7923,0,null);
var i__7925 = cljs.core.nth.call(null,vec__7921__7923,1,null);
var s__7926 = cljs.core.nth.call(null,vec__7921__7923,2,null);
var vec__7922__7927 = subpar.paredit.backward_slurp_vals.call(null,s__7926,i__7925);
var delimiter__7928 = cljs.core.nth.call(null,vec__7922__7927,0,null);
var si__7929 = cljs.core.nth.call(null,vec__7922__7927,1,null);
var di__7930 = cljs.core.nth.call(null,vec__7922__7927,2,null);
var ri__7931 = cljs.core.nth.call(null,vec__7922__7927,3,null);
if(cljs.core.truth_(ri__7931))
{var start__7932 = cm.posFromIndex(si__7929);
var end__7933 = cm.posFromIndex((si__7929 + 1));
var destination__7934 = cm.posFromIndex(di__7930);
var line__7935 = start__7932.line;
var update__7936 = (function (){
cm.replaceRange("",start__7932,end__7933);
cm.replaceRange(delimiter__7928,destination__7934);
return cljs.core.map.call(null,(function (p1__7871_SHARP_){
return cm.indentLine(p1__7871_SHARP_);
}),cljs.core.range.call(null,line__7935,(line__7935 + ri__7931)));
});
return cm.compoundChange(update__7936);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_slurp', subpar.core.backward_slurp);
subpar.core.backward_barf = (function backward_barf(cm){
var vec__7956__7958 = subpar.core.get_info.call(null,cm);
var cur__7959 = cljs.core.nth.call(null,vec__7956__7958,0,null);
var i__7960 = cljs.core.nth.call(null,vec__7956__7958,1,null);
var s__7961 = cljs.core.nth.call(null,vec__7956__7958,2,null);
var vec__7957__7962 = subpar.paredit.backward_barf_vals.call(null,s__7961,i__7960);
var delimiter__7963 = cljs.core.nth.call(null,vec__7957__7962,0,null);
var si__7964 = cljs.core.nth.call(null,vec__7957__7962,1,null);
var di__7965 = cljs.core.nth.call(null,vec__7957__7962,2,null);
var pad__7966 = cljs.core.nth.call(null,vec__7957__7962,3,null);
var ri__7967 = cljs.core.nth.call(null,vec__7957__7962,4,null);
if(cljs.core.truth_(ri__7967))
{var delimiter__7968 = (cljs.core.truth_(pad__7966)?[cljs.core.str(" "),cljs.core.str(delimiter__7963)].join(''):delimiter__7963);
var destination__7969 = cm.posFromIndex(di__7965);
var start__7970 = cm.posFromIndex(si__7964);
var end__7971 = cm.posFromIndex((si__7964 + 1));
var line__7972 = start__7970.line;
var update__7973 = (function (){
cm.replaceRange(delimiter__7968,destination__7969);
cm.replaceRange("",start__7970,end__7971);
return cljs.core.map.call(null,(function (p1__7904_SHARP_){
return cm.indentLine(p1__7904_SHARP_);
}),cljs.core.range.call(null,line__7972,(line__7972 + ri__7967)));
});
return cm.compoundChange(update__7973);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.backward_barf', subpar.core.backward_barf);
subpar.core.forward_barf = (function forward_barf(cm){
var vec__7994__7996 = subpar.core.get_info.call(null,cm);
var cur__7997 = cljs.core.nth.call(null,vec__7994__7996,0,null);
var i__7998 = cljs.core.nth.call(null,vec__7994__7996,1,null);
var s__7999 = cljs.core.nth.call(null,vec__7994__7996,2,null);
var vec__7995__8000 = subpar.paredit.forward_barf_vals.call(null,s__7999,i__7998);
var delimiter__8001 = cljs.core.nth.call(null,vec__7995__8000,0,null);
var si__8002 = cljs.core.nth.call(null,vec__7995__8000,1,null);
var di__8003 = cljs.core.nth.call(null,vec__7995__8000,2,null);
var pad__8004 = cljs.core.nth.call(null,vec__7995__8000,3,null);
var ri__8005 = cljs.core.nth.call(null,vec__7995__8000,4,null);
var i0__8006 = cljs.core.nth.call(null,vec__7995__8000,5,null);
if(cljs.core.truth_(ri__8005))
{var delimiter__8007 = (cljs.core.truth_(pad__8004)?[cljs.core.str(" "),cljs.core.str(delimiter__8001)].join(''):delimiter__8001);
var destination__8008 = cm.posFromIndex(di__8003);
var start__8009 = cm.posFromIndex(si__8002);
var end__8010 = cm.posFromIndex((si__8002 + 1));
var line__8011 = cm.posFromIndex(i0__8006).line;
var update__8012 = (function (){
cm.replaceRange("",start__8009,end__8010);
cm.replaceRange(delimiter__8007,destination__8008);
return cljs.core.map.call(null,(function (p1__7937_SHARP_){
return cm.indentLine(p1__7937_SHARP_);
}),cljs.core.range.call(null,line__8011,(line__8011 + ri__8005)));
});
return cm.compoundChange(update__8012);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.forward_barf', subpar.core.forward_barf);
subpar.core.splice_delete_backward = (function splice_delete_backward(cm){
var vec__8032__8034 = subpar.core.get_info.call(null,cm);
var cur__8035 = cljs.core.nth.call(null,vec__8032__8034,0,null);
var i__8036 = cljs.core.nth.call(null,vec__8032__8034,1,null);
var s__8037 = cljs.core.nth.call(null,vec__8032__8034,2,null);
var vec__8033__8038 = subpar.paredit.splice_delete_backward_vals.call(null,s__8037,i__8036);
var start__8039 = cljs.core.nth.call(null,vec__8033__8038,0,null);
var end__8040 = cljs.core.nth.call(null,vec__8033__8038,1,null);
var closer__8041 = cljs.core.nth.call(null,vec__8033__8038,2,null);
var reindent__8042 = cljs.core.nth.call(null,vec__8033__8038,3,null);
var num__8043 = cljs.core.nth.call(null,vec__8033__8038,4,null);
if(cljs.core.truth_(reindent__8042))
{var line__8044 = cm.posFromIndex(reindent__8042).line;
var c0__8045 = cm.posFromIndex(closer__8041);
var c1__8046 = cm.posFromIndex((closer__8041 + 1));
var s0__8047 = cm.posFromIndex(start__8039);
var s1__8048 = cm.posFromIndex(end__8040);
var update__8049 = (function (){
cm.replaceRange("",c0__8045,c1__8046);
cm.replaceRange("",s0__8047,s1__8048);
return cljs.core.map.call(null,(function (p1__7974_SHARP_){
return cm.indentLine(p1__7974_SHARP_);
}),cljs.core.range.call(null,line__8044,(line__8044 + num__8043)));
});
return cm.compoundChange(update__8049);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_backward', subpar.core.splice_delete_backward);
subpar.core.splice_delete_forward = (function splice_delete_forward(cm){
var vec__8069__8071 = subpar.core.get_info.call(null,cm);
var cur__8072 = cljs.core.nth.call(null,vec__8069__8071,0,null);
var i__8073 = cljs.core.nth.call(null,vec__8069__8071,1,null);
var s__8074 = cljs.core.nth.call(null,vec__8069__8071,2,null);
var vec__8070__8075 = subpar.paredit.splice_delete_forward_vals.call(null,s__8074,i__8073);
var opener__8076 = cljs.core.nth.call(null,vec__8070__8075,0,null);
var start__8077 = cljs.core.nth.call(null,vec__8070__8075,1,null);
var end__8078 = cljs.core.nth.call(null,vec__8070__8075,2,null);
var reindent__8079 = cljs.core.nth.call(null,vec__8070__8075,3,null);
var num__8080 = cljs.core.nth.call(null,vec__8070__8075,4,null);
if(cljs.core.truth_(reindent__8079))
{var line__8081 = cm.posFromIndex(reindent__8079).line;
var o0__8082 = cm.posFromIndex(opener__8076);
var o1__8083 = cm.posFromIndex((opener__8076 + 1));
var s0__8084 = cm.posFromIndex(start__8077);
var s1__8085 = cm.posFromIndex(end__8078);
var update__8086 = (function (){
cm.replaceRange("",s0__8084,s1__8085);
cm.replaceRange("",o0__8082,o1__8083);
return cljs.core.map.call(null,(function (p1__8013_SHARP_){
return cm.indentLine(p1__8013_SHARP_);
}),cljs.core.range.call(null,line__8081,(line__8081 + num__8080)));
});
return cm.compoundChange(update__8086);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice_delete_forward', subpar.core.splice_delete_forward);
subpar.core.splice = (function splice(cm){
var vec__8105__8107 = subpar.core.get_info.call(null,cm);
var cur__8108 = cljs.core.nth.call(null,vec__8105__8107,0,null);
var i__8109 = cljs.core.nth.call(null,vec__8105__8107,1,null);
var s__8110 = cljs.core.nth.call(null,vec__8105__8107,2,null);
var vec__8106__8111 = subpar.paredit.splice_vals.call(null,s__8110,i__8109);
var opener__8112 = cljs.core.nth.call(null,vec__8106__8111,0,null);
var closer__8113 = cljs.core.nth.call(null,vec__8106__8111,1,null);
var reindent__8114 = cljs.core.nth.call(null,vec__8106__8111,2,null);
var num__8115 = cljs.core.nth.call(null,vec__8106__8111,3,null);
if(cljs.core.truth_(reindent__8114))
{var line__8116 = cm.posFromIndex(reindent__8114).line;
var o0__8117 = cm.posFromIndex(opener__8112);
var o1__8118 = cm.posFromIndex((opener__8112 + 1));
var c0__8119 = cm.posFromIndex(closer__8113);
var c1__8120 = cm.posFromIndex((closer__8113 + 1));
var update__8121 = (function (){
cm.replaceRange("",c0__8119,c1__8120);
cm.replaceRange("",o0__8117,o1__8118);
return cljs.core.map.call(null,(function (p1__8050_SHARP_){
return cm.indentLine(p1__8050_SHARP_);
}),cljs.core.range.call(null,line__8116,(line__8116 + num__8115)));
});
return cm.compoundChange(update__8121);
} else
{return null;
}
});
goog.exportSymbol('subpar.core.splice', subpar.core.splice);
subpar.core.indent_selection = (function indent_selection(cm){
if(cljs.core.truth_(cm.somethingSelected()))
{var start__8125 = cm.getCursor(true).line;
var end__8126 = cm.getCursor(false).line;
var f__8127 = (function (){
return cljs.core.map.call(null,(function (p1__8087_SHARP_){
return cm.indentLine(p1__8087_SHARP_);
}),cljs.core.range.call(null,start__8125,(end__8126 + 1)));
});
return cm.compoundChange(f__8127);
} else
{return cm.indentLine(cm.getCursor().line);
}
});
goog.exportSymbol('subpar.core.indent_selection', subpar.core.indent_selection);
