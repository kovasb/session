goog.provide('subpar.paredit');
goog.require('cljs.core');
subpar.paredit.code = "c";
subpar.paredit.cmmnt = ";";
subpar.paredit.string = "\"";
subpar.paredit.openers = cljs.core.PersistentHashSet.fromArray(["(","[","{"]);
subpar.paredit.closers = cljs.core.PersistentHashSet.fromArray([")","]","}"]);
subpar.paredit.opener_QMARK_ = (function opener_QMARK_(a){
return cljs.core.contains_QMARK_.call(null,subpar.paredit.openers,a);
});
subpar.paredit.closer_QMARK_ = (function closer_QMARK_(a){
return cljs.core.contains_QMARK_.call(null,subpar.paredit.closers,a);
});
subpar.paredit.whitespace_QMARK_ = (function whitespace_QMARK_(x){
var or__3824__auto____8130 = cljs.core._EQ_.call(null,x,"\t");
if(or__3824__auto____8130)
{return or__3824__auto____8130;
} else
{var or__3824__auto____8131 = cljs.core._EQ_.call(null,x," ");
if(or__3824__auto____8131)
{return or__3824__auto____8131;
} else
{return cljs.core._EQ_.call(null,x,"\n");
}
}
});
subpar.paredit.get_opening_delimiter_index_with_parse = (function get_opening_delimiter_index_with_parse(p,i){
return cljs.core.nth.call(null,cljs.core.nth.call(null,(new cljs.core.Keyword("\uFDD0'chars")).call(null,p),i),1);
});
subpar.paredit.get_closing_delimiter_index_with_parse = (function get_closing_delimiter_index_with_parse(p,i){
return cljs.core.get_in.call(null,p,cljs.core.PersistentVector.fromArray(["\uFDD0'families",subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p,i),"\uFDD0'closer"], true));
});
/**
* returns index of the opening delimiter for the list that contains
* the point. if there is no containing list, this returns -1
*/
subpar.paredit.get_opening_delimiter_index = (function get_opening_delimiter_index(s,i){
return subpar.paredit.get_opening_delimiter_index_with_parse.call(null,subpar.paredit.parse.call(null,s),i);
});
/**
* returns index of the closing delimiter for the list that contains
* the point. if there is no containing list, this returns the length
* of the code
*/
subpar.paredit.get_closing_delimiter_index = (function get_closing_delimiter_index(s,i){
return subpar.paredit.get_closing_delimiter_index_with_parse.call(null,subpar.paredit.parse.call(null,s),i);
});
/**
* returns the indices of the delimiters of the list containing the
* point.
*/
subpar.paredit.get_wrapper = (function get_wrapper(p,i){
return cljs.core.PersistentVector.fromArray([subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p,i),subpar.paredit.get_closing_delimiter_index_with_parse.call(null,p,i)], true);
});
/**
* gets the kind of text containin the point: string, code, comment
*/
subpar.paredit.get_mode = (function get_mode(p,i){
return cljs.core.nth.call(null,cljs.core.nth.call(null,(new cljs.core.Keyword("\uFDD0'chars")).call(null,p),i),0);
});
subpar.paredit.in_QMARK_ = (function in_QMARK_(p,i,mode){
var and__3822__auto____8135 = (function (){var and__3822__auto____8134 = (0 <= i);
if(and__3822__auto____8134)
{return (i <= cljs.core.count.call(null,(new cljs.core.Keyword("\uFDD0'chars")).call(null,p)));
} else
{return and__3822__auto____8134;
}
})();
if(cljs.core.truth_(and__3822__auto____8135))
{return cljs.core._EQ_.call(null,mode,subpar.paredit.get_mode.call(null,p,i));
} else
{return and__3822__auto____8135;
}
});
subpar.paredit.in_comment_QMARK_ = (function in_comment_QMARK_(p,i){
return subpar.paredit.in_QMARK_.call(null,p,i,subpar.paredit.cmmnt);
});
subpar.paredit.in_code_QMARK_ = (function in_code_QMARK_(p,i){
return subpar.paredit.in_QMARK_.call(null,p,i,subpar.paredit.code);
});
subpar.paredit.in_string_QMARK_ = (function in_string_QMARK_(p,i){
return subpar.paredit.in_QMARK_.call(null,p,i,subpar.paredit.string);
});
subpar.paredit.in_string = (function in_string(s,i){
return subpar.paredit.in_string_QMARK_.call(null,subpar.paredit.parse.call(null,s),i);
});
subpar.paredit.n_str_QMARK_ = cljs.core.complement.call(null,subpar.paredit.in_string_QMARK_);
subpar.paredit.get_all_siblings = (function get_all_siblings(i,p){
return cljs.core.get_in.call(null,p,cljs.core.PersistentVector.fromArray(["\uFDD0'families",subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p,i),"\uFDD0'children"], true));
});
/**
* returns a sorted list of the siblings at point 'i' after they have
* been transformed with 'transform' and filtered by 'predicate', both
* single argument fns
*/
subpar.paredit.get_siblings = (function get_siblings(i,transform,predicate,p){
return cljs.core.sort.call(null,cljs.core.filter.call(null,predicate,transform.call(null,subpar.paredit.get_all_siblings.call(null,i,p))));
});
/**
* how many lines contain the code from i to j inclusive
*/
subpar.paredit.count_lines = (function count_lines(s,i,j){
var and__3822__auto____8139 = i;
if(cljs.core.truth_(and__3822__auto____8139))
{var and__3822__auto____8140 = j;
if(cljs.core.truth_(and__3822__auto____8140))
{return (cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__8136_SHARP_){
return cljs.core._EQ_.call(null,"\n",p1__8136_SHARP_);
}),cljs.core.drop.call(null,i,cljs.core.drop_last.call(null,((cljs.core.count.call(null,s) - j) - 1),cljs.core.take.call(null,cljs.core.count.call(null,s),s))))) + 1);
} else
{return and__3822__auto____8140;
}
} else
{return and__3822__auto____8139;
}
});
/**
* whether the current spot is escaped
*/
subpar.paredit.escaped_QMARK_ = (function escaped_QMARK_(s,i){
return cljs.core.odd_QMARK_.call(null,(function (){var c__8144 = 0;
var j__8145 = (i - 1);
while(true){
var a__8146 = cljs.core.nth.call(null,s,j__8145,null);
if((j__8145 < 0))
{return c__8144;
} else
{if((a__8146 == null))
{return c__8144;
} else
{if(cljs.core.not_EQ_.call(null,"\\",a__8146))
{return c__8144;
} else
{if(true)
{{
var G__8147 = (c__8144 + 1);
var G__8148 = (j__8145 - 1);
c__8144 = G__8147;
j__8145 = G__8148;
continue;
}
} else
{return null;
}
}
}
}
break;
}
})());
});
subpar.paredit.closes_list_QMARK_ = (function closes_list_QMARK_(p,i){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([i]),cljs.core.map.call(null,"\uFDD0'closer",cljs.core.vals.call(null,(new cljs.core.Keyword("\uFDD0'families")).call(null,p))));
});
subpar.paredit.opens_list_QMARK_ = (function opens_list_QMARK_(p,i){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([i]),cljs.core.keys.call(null,(new cljs.core.Keyword("\uFDD0'families")).call(null,p)));
});
subpar.paredit.backward_up_fn = (function backward_up_fn(s,i){
var vec__8153__8154 = subpar.paredit.get_wrapper.call(null,subpar.paredit.parse.call(null,s),i);
var o__8155 = cljs.core.nth.call(null,vec__8153__8154,0,null);
var c__8156 = cljs.core.nth.call(null,vec__8153__8154,1,null);
if(cljs.core._EQ_.call(null,-1,o__8155))
{return i;
} else
{return o__8155;
}
});
/**
* returns 0 if nothing should be done (foo |)
* 1 if one character should be deleted
* 2 if a delimiter pair should be deleted and cursor is in pair (|)
* 3 if a delimiter pair should be deleted and cursor is at start |()
* 4 move forward (into a list to delete contents) |(foo)
*/
subpar.paredit.forward_delete_action = (function forward_delete_action(s,i){
var p__8161 = subpar.paredit.parse.call(null,s);
var h__8162 = (i - 1);
var j__8163 = (i + 1);
var c__8164 = cljs.core.nth.call(null,s,i,null);
if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,j__8163)))
{return 3;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([h__8162,i], true),subpar.paredit.get_wrapper.call(null,p__8161,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p__8161,i)))
{return 0;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([i,j__8163], true),subpar.paredit.get_wrapper.call(null,p__8161,j__8163)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null,p__8161,i)))
{return 4;
} else
{if(true)
{return 1;
} else
{return null;
}
}
}
}
}
}
}
}
});
/**
* returns 0 if nothing should be done (| foo)
* 1 if one character should be deleted
* 2 if a delimiter pair should be deleted and cursor is in pair (|)
* 3 if a delimiter pair should be deleted and cursor is at end ()|
* 4 move backward (into a list to delete contents) (foo)|
*/
subpar.paredit.backward_delete_action = (function backward_delete_action(s,i){
var p__8168 = subpar.paredit.parse.call(null,s);
var g__8169 = (i - 2);
var h__8170 = (i - 1);
if((i <= 0))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,h__8170)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,i)))
{return 2;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([g__8169,h__8170], true),subpar.paredit.get_wrapper.call(null,p__8168,h__8170)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p__8168,h__8170)))
{return 4;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([h__8170,i], true),subpar.paredit.get_wrapper.call(null,p__8168,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null,p__8168,h__8170)))
{return 0;
} else
{if(true)
{return 1;
} else
{return null;
}
}
}
}
}
}
}
}
});
/**
* returns 0 if creating a string,
* 1 if escaping a double-quote,
* 2 if ending a string
* 3 if in comment and need a raw double-quote
*/
subpar.paredit.double_quote_action = (function double_quote_action(s,i){
var p__8172 = subpar.paredit.parse.call(null,s);
if((i < 0))
{return 0;
} else
{if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.in_comment_QMARK_.call(null,p__8172,i)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.n_str_QMARK_.call(null,p__8172,i)))
{return 0;
} else
{if(cljs.core._EQ_.call(null,"\"",cljs.core.nth.call(null,s,i)))
{return 2;
} else
{if("\uFDD0'escaping")
{return 1;
} else
{return null;
}
}
}
}
}
}
});
/**
* if nowhere to skip to, returns an emtpy vector.
* 
* otherwise it's an vector of
* 0 - whether we need to delete any whitespace
* 1 - where to start deleting from
* 2 - where to delete to
* 3 - the destination for the cursor
*/
subpar.paredit.close_expression_vals = (function close_expression_vals(p,i){
var vec__8182__8183 = subpar.paredit.get_wrapper.call(null,p,i);
var o__8184 = cljs.core.nth.call(null,vec__8182__8183,0,null);
var c__8185 = cljs.core.nth.call(null,vec__8182__8183,1,null);
if(cljs.core._EQ_.call(null,-1,o__8184))
{return cljs.core.PersistentVector.EMPTY;
} else
{var start__8187 = ((function (){var or__3824__auto____8186 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.identity,p));
if(cljs.core.truth_(or__3824__auto____8186))
{return or__3824__auto____8186;
} else
{return o__8184;
}
})() + 1);
var delete__8188 = cljs.core.not_EQ_.call(null,start__8187,c__8185);
var dest__8189 = ((delete__8188)?(start__8187 + 1):(c__8185 + 1));
return cljs.core.PersistentVector.fromArray([delete__8188,start__8187,c__8185,dest__8189], true);
}
});
/**
* finds the start of the next list/string/vector/map
*/
subpar.paredit.get_start_of_next_list = (function get_start_of_next_list(s,i){
var p__8193 = subpar.paredit.parse.call(null,s);
var r__8195 = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,(function (p1__8173_SHARP_){
var and__3822__auto____8194 = (p1__8173_SHARP_ >= i);
if(and__3822__auto____8194)
{return cljs.core.get_in.call(null,p__8193,cljs.core.PersistentVector.fromArray(["\uFDD0'families",p1__8173_SHARP_], true));
} else
{return and__3822__auto____8194;
}
}),p__8193));
if((r__8195 == null))
{return false;
} else
{return r__8195;
}
});
subpar.paredit.forward_down_fn = (function forward_down_fn(s,i){
var r__8198 = subpar.paredit.get_start_of_next_list.call(null,s,i);
if(cljs.core.truth_(r__8198))
{return (r__8198 + 1);
} else
{return i;
}
});
/**
* returns the index for the cursor position immediately back an
* s-expression or up an s-expression backward. compare to
* paredit-backward. goal: If there are no more S-expressions in this
* one before the opening delimiter, move past that opening delimiter
* backward; otherwise, move move backward past the S-expression
* preceding the point. and if there's nothing left, stay put.
*/
subpar.paredit.backward_fn = (function backward_fn(s,i){
var p__8204 = subpar.paredit.parse.call(null,s);
var b__8205 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,(function (p1__8196_SHARP_){
return (p1__8196_SHARP_ < i);
}),p__8204));
var o__8206 = subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p__8204,i);
var or__3824__auto____8207 = b__8205;
if(cljs.core.truth_(or__3824__auto____8207))
{return or__3824__auto____8207;
} else
{if((o__8206 < 0))
{return 0;
} else
{return o__8206;
}
}
});
/**
* paredit-backward-down
*/
subpar.paredit.backward_down_fn = (function backward_down_fn(s,i){
var p__8212 = subpar.paredit.parse.call(null,s);
var b__8214 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,(function (p1__8199_SHARP_){
var and__3822__auto____8213 = (p1__8199_SHARP_ < i);
if(and__3822__auto____8213)
{return subpar.paredit.closes_list_QMARK_.call(null,p__8212,p1__8199_SHARP_);
} else
{return and__3822__auto____8213;
}
}),p__8212));
var or__3824__auto____8215 = b__8214;
if(cljs.core.truth_(or__3824__auto____8215))
{return or__3824__auto____8215;
} else
{return i;
}
});
/**
* paredit-forward-up
*/
subpar.paredit.forward_up_fn = (function forward_up_fn(s,i){
var p__8224 = subpar.paredit.parse.call(null,s);
var vec__8223__8225 = subpar.paredit.get_wrapper.call(null,p__8224,i);
var o__8226 = cljs.core.nth.call(null,vec__8223__8225,0,null);
var c__8227 = cljs.core.nth.call(null,vec__8223__8225,1,null);
var in_list__8228 = cljs.core.not_EQ_.call(null,-1,o__8226);
if(in_list__8228)
{return (c__8227 + 1);
} else
{return i;
}
});
/**
* returns the index for the cursor position immediately forward an
* s-expression or out the end of an s-expression if already at the
* end. compare to paredit-forward. goal: If there are no more
* S-expressions in this one before the closing delimiter, move past
* that closing delimiter forward; otherwise, move move forward past
* the S-expression at the point. and if there's nothing of interest
* before the end of the file, then go to the end.
*/
subpar.paredit.forward_fn = (function forward_fn(s,i){
var p__8234 = subpar.paredit.parse.call(null,s);
var b__8235 = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,(function (p1__8216_SHARP_){
return (p1__8216_SHARP_ >= i);
}),p__8234));
var c__8236 = subpar.paredit.get_closing_delimiter_index_with_parse.call(null,p__8234,i);
var l__8237 = cljs.core.count.call(null,s);
if(cljs.core.truth_(b__8235))
{return (b__8235 + 1);
} else
{if(cljs.core.truth_(c__8236))
{return (((c__8236 + 1) < l__8237) ? (c__8236 + 1) : l__8237);
} else
{if(true)
{return l__8237;
} else
{return null;
}
}
}
});
/**
* returns an vector of
* 0 - the delimiter that needs to move,
* 1 - the source index,
* 2 - the destination index in the orignal string,
* 3 - the number of lines to indent starting from the source index.
* 
* if nothing should be done, the vector returned will have length 0
*/
subpar.paredit.forward_slurp_vals = (function forward_slurp_vals(s,i){
var p__8252 = subpar.paredit.parse.call(null,s);
var vec__8251__8253 = subpar.paredit.get_wrapper.call(null,p__8252,i);
var o__8254 = cljs.core.nth.call(null,vec__8251__8253,0,null);
var c__8255 = cljs.core.nth.call(null,vec__8251__8253,1,null);
var in_list__8256 = cljs.core.not_EQ_.call(null,-1,o__8254);
var a__8258 = (function (){var and__3822__auto____8257 = in_list__8256;
if(and__3822__auto____8257)
{return cljs.core.nth.call(null,s,c__8255,false);
} else
{return and__3822__auto____8257;
}
})();
var d__8260 = (function (){var and__3822__auto____8259 = in_list__8256;
if(and__3822__auto____8259)
{return cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,o__8254,cljs.core.vals,(function (p1__8229_SHARP_){
return (p1__8229_SHARP_ > c__8255);
}),p__8252));
} else
{return and__3822__auto____8259;
}
})();
if(cljs.core.truth_((function (){var and__3822__auto____8261 = a__8258;
if(cljs.core.truth_(and__3822__auto____8261))
{var and__3822__auto____8262 = c__8255;
if(cljs.core.truth_(and__3822__auto____8262))
{return d__8260;
} else
{return and__3822__auto____8262;
}
} else
{return and__3822__auto____8261;
}
})()))
{return cljs.core.PersistentVector.fromArray([a__8258,c__8255,(d__8260 + 1),subpar.paredit.count_lines.call(null,s,o__8254,(d__8260 + 1))], true);
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
/**
* returns an vector of
* 0 - the delimiter that needs to move,
* 1 - the source index,
* 2 - the destination index in the orignal string,
* 3 - the number of lines to indent starting from the source index.
* 
* if nothing should be done, the vector returned will have length 0
*/
subpar.paredit.backward_slurp_vals = (function backward_slurp_vals(s,i){
var p__8275 = subpar.paredit.parse.call(null,s);
var vec__8274__8276 = subpar.paredit.get_wrapper.call(null,p__8275,i);
var o__8277 = cljs.core.nth.call(null,vec__8274__8276,0,null);
var c__8278 = cljs.core.nth.call(null,vec__8274__8276,1,null);
var in_list__8279 = cljs.core.not_EQ_.call(null,-1,o__8277);
var d__8281 = (function (){var and__3822__auto____8280 = in_list__8279;
if(and__3822__auto____8280)
{return cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,o__8277,cljs.core.keys,(function (p1__8238_SHARP_){
return (p1__8238_SHARP_ < o__8277);
}),p__8275));
} else
{return and__3822__auto____8280;
}
})();
var a__8283 = (function (){var and__3822__auto____8282 = in_list__8279;
if(and__3822__auto____8282)
{return cljs.core.nth.call(null,s,o__8277,false);
} else
{return and__3822__auto____8282;
}
})();
if(cljs.core.truth_((function (){var and__3822__auto____8284 = a__8283;
if(cljs.core.truth_(and__3822__auto____8284))
{return d__8281;
} else
{return and__3822__auto____8284;
}
})()))
{return cljs.core.PersistentVector.fromArray([a__8283,o__8277,d__8281,subpar.paredit.count_lines.call(null,s,d__8281,c__8278)], true);
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
/**
* if nothing should be done, this returns an empty vector.
* 
* if there is something to barf, this returns an vector of
* 0 - the delimiter that needs to move,
* 1 - the source index,
* 2 - the destination index in the orignal string,
* 3 - whether there needs to be a padding space after the delimiter
* 4 - the number of lines to indent
* 5 - the starting index for the indentation
*/
subpar.paredit.forward_barf_vals = (function forward_barf_vals(s,i){
var p__8300 = subpar.paredit.parse.call(null,s);
var vec__8299__8301 = subpar.paredit.get_wrapper.call(null,p__8300,i);
var o__8302 = cljs.core.nth.call(null,vec__8299__8301,0,null);
var c__8303 = cljs.core.nth.call(null,vec__8299__8301,1,null);
var in_list__8304 = cljs.core.not_EQ_.call(null,-1,o__8302);
var endings__8306 = (function (){var and__3822__auto____8305 = in_list__8304;
if(and__3822__auto____8305)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.constantly.call(null,true),p__8300);
} else
{return and__3822__auto____8305;
}
})();
var a__8309 = (function (){var and__3822__auto____8307 = c__8303;
if(cljs.core.truth_(and__3822__auto____8307))
{var and__3822__auto____8308 = in_list__8304;
if(and__3822__auto____8308)
{return cljs.core.nth.call(null,s,c__8303,null);
} else
{return and__3822__auto____8308;
}
} else
{return and__3822__auto____8307;
}
})();
var r__8311 = (function (){var or__3824__auto____8310 = subpar.paredit.count_lines.call(null,s,o__8302,c__8303);
if(cljs.core.truth_(or__3824__auto____8310))
{return or__3824__auto____8310;
} else
{return 1;
}
})();
var num__8312 = (cljs.core.truth_(endings__8306)?cljs.core.count.call(null,endings__8306):0);
if((num__8312 > 1))
{return cljs.core.PersistentVector.fromArray([a__8309,c__8303,(cljs.core.nth.call(null,endings__8306,(num__8312 - 2)) + 1),false,r__8311,o__8302], true);
} else
{if(cljs.core._EQ_.call(null,num__8312,1))
{return cljs.core.PersistentVector.fromArray([a__8309,c__8303,(o__8302 + 1),true,r__8311,o__8302], true);
} else
{if(true)
{return cljs.core.PersistentVector.EMPTY;
} else
{return null;
}
}
}
});
/**
* if nothing should be done this returns an empty vector.
* 
* if there is something to barf, this returns an vector of
* 0 - the delimiter that needs to move,
* 1 - the source index,
* 2 - the destination index in the orignal string,
* 3 - whether there needs to be a padding space before the delimiter
* 4 - the number of lines to indent
*/
subpar.paredit.backward_barf_vals = (function backward_barf_vals(s,i){
var p__8328 = subpar.paredit.parse.call(null,s);
var vec__8327__8329 = subpar.paredit.get_wrapper.call(null,p__8328,i);
var o__8330 = cljs.core.nth.call(null,vec__8327__8329,0,null);
var c__8331 = cljs.core.nth.call(null,vec__8327__8329,1,null);
var in_list__8332 = cljs.core.not_EQ_.call(null,-1,o__8330);
var starts__8334 = (function (){var and__3822__auto____8333 = in_list__8332;
if(and__3822__auto____8333)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.keys,cljs.core.constantly.call(null,true),p__8328);
} else
{return and__3822__auto____8333;
}
})();
var a__8337 = (function (){var and__3822__auto____8335 = o__8330;
if(cljs.core.truth_(and__3822__auto____8335))
{var and__3822__auto____8336 = in_list__8332;
if(and__3822__auto____8336)
{return cljs.core.nth.call(null,s,o__8330,null);
} else
{return and__3822__auto____8336;
}
} else
{return and__3822__auto____8335;
}
})();
var r__8339 = (function (){var or__3824__auto____8338 = subpar.paredit.count_lines.call(null,s,o__8330,c__8331);
if(cljs.core.truth_(or__3824__auto____8338))
{return or__3824__auto____8338;
} else
{return 1;
}
})();
var num__8340 = (cljs.core.truth_(starts__8334)?cljs.core.count.call(null,starts__8334):0);
if((num__8340 > 1))
{return cljs.core.PersistentVector.fromArray([a__8337,o__8330,cljs.core.second.call(null,starts__8334),false,r__8339], true);
} else
{if(cljs.core._EQ_.call(null,num__8340,1))
{return cljs.core.PersistentVector.fromArray([a__8337,o__8330,c__8331,true,r__8339], true);
} else
{if(true)
{return cljs.core.PersistentVector.EMPTY;
} else
{return null;
}
}
}
});
/**
* if nothing should be done this returns an empty vector.
* 
* if there is something to splice, this returns an vector of
* 0 - the opening delimiter of the current list
* 1 - the closing delimiter of the current list
* 2 - the index to start re-indenting from
* 3 - how many lines to re-indent
*/
subpar.paredit.splice_vals = (function splice_vals(s,i){
var p__8353 = subpar.paredit.parse.call(null,s);
var vec__8352__8354 = subpar.paredit.get_wrapper.call(null,p__8353,i);
var o__8355 = cljs.core.nth.call(null,vec__8352__8354,0,null);
var c__8356 = cljs.core.nth.call(null,vec__8352__8354,1,null);
var in_list__8357 = cljs.core.not_EQ_.call(null,-1,o__8355);
if(in_list__8357)
{var vec__8358__8359 = subpar.paredit.get_wrapper.call(null,p__8353,o__8355);
var n__8360 = cljs.core.nth.call(null,vec__8358__8359,0,null);
var d__8361 = cljs.core.nth.call(null,vec__8358__8359,1,null);
var r__8362 = subpar.paredit.count_lines.call(null,s,n__8360,d__8361);
return cljs.core.PersistentVector.fromArray([o__8355,c__8356,((0 > n__8360) ? 0 : n__8360),r__8362], true);
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
/**
* if nothing should be done this returns an empty vector.
* 
* if there is something to splice, this returns an vector of
* 0 - the opening delimiter of the current list (start killing from here)
* 1 - the index to kill to
* 2 - the original index of the closing delimiter to delete as well (delete this guy first)
* 3 - the index to start re-indenting from
* 4 - how many lines to re-indent
*/
subpar.paredit.splice_delete_backward_vals = (function splice_delete_backward_vals(s,i){
var p__8375 = subpar.paredit.parse.call(null,s);
var vec__8374__8376 = subpar.paredit.get_wrapper.call(null,p__8375,i);
var o__8377 = cljs.core.nth.call(null,vec__8374__8376,0,null);
var c__8378 = cljs.core.nth.call(null,vec__8374__8376,1,null);
var in_list__8379 = cljs.core.not_EQ_.call(null,-1,o__8377);
if(in_list__8379)
{var vec__8380__8381 = subpar.paredit.get_wrapper.call(null,p__8375,o__8377);
var n__8382 = cljs.core.nth.call(null,vec__8380__8381,0,null);
var d__8383 = cljs.core.nth.call(null,vec__8380__8381,1,null);
var r__8384 = subpar.paredit.count_lines.call(null,s,n__8382,d__8383);
return cljs.core.PersistentVector.fromArray([o__8377,((o__8377 > i) ? o__8377 : i),c__8378,((0 > n__8382) ? 0 : n__8382),r__8384], true);
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
/**
* if nothing should be done this returns an empty vector.
* 
* if there is something to splice, this returns an vector of
* 0 - the opening delimiter of the current list
* 1 - the index to kill from
* 2 - the original index of the closing delimiter to kill to
* 3 - the index to start re-indenting from
* 4 - how many lines to re-indent
*/
subpar.paredit.splice_delete_forward_vals = (function splice_delete_forward_vals(s,i){
var p__8397 = subpar.paredit.parse.call(null,s);
var vec__8396__8398 = subpar.paredit.get_wrapper.call(null,p__8397,i);
var o__8399 = cljs.core.nth.call(null,vec__8396__8398,0,null);
var c__8400 = cljs.core.nth.call(null,vec__8396__8398,1,null);
var in_list__8401 = cljs.core.not_EQ_.call(null,-1,o__8399);
if(in_list__8401)
{var vec__8402__8403 = subpar.paredit.get_wrapper.call(null,p__8397,o__8399);
var n__8404 = cljs.core.nth.call(null,vec__8402__8403,0,null);
var d__8405 = cljs.core.nth.call(null,vec__8402__8403,1,null);
var r__8406 = subpar.paredit.count_lines.call(null,s,n__8404,d__8405);
return cljs.core.PersistentVector.fromArray([o__8399,i,(c__8400 + 1),((0 > n__8404) ? 0 : n__8404),r__8406], true);
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
/**
* annotates each index in s. assumes/requires all delimiters that are
* not in comments or strings to be paired and properly nested vs ([)].
* 
* returns {:chars [[mode, poi] ... ]
* :families {opener-index {:closer i
* :children {start-index end-index}}}}
* 
* where :chars has one extra element past the end of the string and
* there's a virtual wrapping parent delimiter pair at -1,length
*/
subpar.paredit.parse = (function parse(ss){
var s__8445 = [cljs.core.str(ss),cljs.core.str(" ")].join('');
var i__8446 = 0;
var mode__8447 = subpar.paredit.code;
var openings__8448 = cljs.core.list.call(null,-1);
var start__8449 = -1;
var t__8450 = cljs.core.PersistentVector.EMPTY;
var families__8451 = cljs.core.PersistentArrayMap.fromArrays([-1],[cljs.core.ObjMap.fromObject(["\uFDD0'children"],{"\uFDD0'children":cljs.core.ObjMap.EMPTY})]);
var escaping__8452 = false;
var in_word__8453 = false;
while(true){
var a__8454 = cljs.core.nth.call(null,s__8445,i__8446,null);
var j__8455 = (i__8446 + 1);
var o__8456 = cljs.core.peek.call(null,openings__8448);
if(cljs.core.truth_((function (){var and__3822__auto____8457 = (a__8454 == null);
if(and__3822__auto____8457)
{return in_word__8453;
} else
{return and__3822__auto____8457;
}
})()))
{return cljs.core.ObjMap.fromObject(["\uFDD0'chars","\uFDD0'families"],{"\uFDD0'chars":t__8450,"\uFDD0'families":cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8451,cljs.core.PersistentVector.fromArray([-1,"\uFDD0'closer"], true),(i__8446 - 1)),cljs.core.PersistentVector.fromArray([-1,"\uFDD0'children",start__8449], true),(i__8446 - 1))});
} else
{if((a__8454 == null))
{return cljs.core.ObjMap.fromObject(["\uFDD0'chars","\uFDD0'families"],{"\uFDD0'chars":t__8450,"\uFDD0'families":cljs.core.assoc_in.call(null,families__8451,cljs.core.PersistentVector.fromArray([-1,"\uFDD0'closer"], true),(i__8446 - 1))});
} else
{if((function (){var and__3822__auto____8458 = cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode__8447);
if(and__3822__auto____8458)
{var and__3822__auto____8459 = cljs.core._EQ_.call(null,"\\",a__8454);
if(and__3822__auto____8459)
{var and__3822__auto____8460 = cljs.core.not.call(null,escaping__8452);
if(and__3822__auto____8460)
{return cljs.core.not.call(null,in_word__8453);
} else
{return and__3822__auto____8460;
}
} else
{return and__3822__auto____8459;
}
} else
{return and__3822__auto____8458;
}
})())
{{
var G__8483 = j__8455;
var G__8484 = mode__8447;
var G__8485 = openings__8448;
var G__8486 = i__8446;
var G__8487 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8488 = cljs.core.assoc_in.call(null,families__8451,cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'children",i__8446], true),j__8455);
var G__8489 = true;
var G__8490 = true;
i__8446 = G__8483;
mode__8447 = G__8484;
openings__8448 = G__8485;
start__8449 = G__8486;
t__8450 = G__8487;
families__8451 = G__8488;
escaping__8452 = G__8489;
in_word__8453 = G__8490;
continue;
}
} else
{if((function (){var and__3822__auto____8461 = cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode__8447);
if(and__3822__auto____8461)
{var and__3822__auto____8462 = cljs.core._EQ_.call(null,"\\",a__8454);
if(and__3822__auto____8462)
{return cljs.core.not.call(null,escaping__8452);
} else
{return and__3822__auto____8462;
}
} else
{return and__3822__auto____8461;
}
})())
{{
var G__8491 = j__8455;
var G__8492 = mode__8447;
var G__8493 = openings__8448;
var G__8494 = i__8446;
var G__8495 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8496 = families__8451;
var G__8497 = true;
var G__8498 = true;
i__8446 = G__8491;
mode__8447 = G__8492;
openings__8448 = G__8493;
start__8449 = G__8494;
t__8450 = G__8495;
families__8451 = G__8496;
escaping__8452 = G__8497;
in_word__8453 = G__8498;
continue;
}
} else
{if((function (){var and__3822__auto____8463 = cljs.core._EQ_.call(null,subpar.paredit.code,mode__8447);
if(and__3822__auto____8463)
{var and__3822__auto____8464 = cljs.core._EQ_.call(null,";",a__8454);
if(and__3822__auto____8464)
{return cljs.core.not.call(null,escaping__8452);
} else
{return and__3822__auto____8464;
}
} else
{return and__3822__auto____8463;
}
})())
{{
var G__8499 = j__8455;
var G__8500 = subpar.paredit.cmmnt;
var G__8501 = openings__8448;
var G__8502 = start__8449;
var G__8503 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8504 = families__8451;
var G__8505 = false;
var G__8506 = false;
i__8446 = G__8499;
mode__8447 = G__8500;
openings__8448 = G__8501;
start__8449 = G__8502;
t__8450 = G__8503;
families__8451 = G__8504;
escaping__8452 = G__8505;
in_word__8453 = G__8506;
continue;
}
} else
{if((function (){var and__3822__auto____8465 = cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode__8447);
if(and__3822__auto____8465)
{return cljs.core._EQ_.call(null,"\n",a__8454);
} else
{return and__3822__auto____8465;
}
})())
{{
var G__8507 = j__8455;
var G__8508 = subpar.paredit.code;
var G__8509 = openings__8448;
var G__8510 = start__8449;
var G__8511 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8512 = families__8451;
var G__8513 = false;
var G__8514 = false;
i__8446 = G__8507;
mode__8447 = G__8508;
openings__8448 = G__8509;
start__8449 = G__8510;
t__8450 = G__8511;
families__8451 = G__8512;
escaping__8452 = G__8513;
in_word__8453 = G__8514;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode__8447))
{{
var G__8515 = j__8455;
var G__8516 = subpar.paredit.cmmnt;
var G__8517 = openings__8448;
var G__8518 = start__8449;
var G__8519 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8520 = families__8451;
var G__8521 = false;
var G__8522 = false;
i__8446 = G__8515;
mode__8447 = G__8516;
openings__8448 = G__8517;
start__8449 = G__8518;
t__8450 = G__8519;
families__8451 = G__8520;
escaping__8452 = G__8521;
in_word__8453 = G__8522;
continue;
}
} else
{if((function (){var and__3822__auto____8466 = cljs.core._EQ_.call(null,subpar.paredit.code,mode__8447);
if(and__3822__auto____8466)
{var and__3822__auto____8467 = cljs.core._EQ_.call(null,"\"",a__8454);
if(and__3822__auto____8467)
{return cljs.core.not.call(null,escaping__8452);
} else
{return and__3822__auto____8467;
}
} else
{return and__3822__auto____8466;
}
})())
{{
var G__8523 = j__8455;
var G__8524 = subpar.paredit.string;
var G__8525 = cljs.core.conj.call(null,openings__8448,i__8446);
var G__8526 = -1;
var G__8527 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8528 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8451,cljs.core.PersistentVector.fromArray([i__8446,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY),cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'children",i__8446], true),j__8455);
var G__8529 = false;
var G__8530 = false;
i__8446 = G__8523;
mode__8447 = G__8524;
openings__8448 = G__8525;
start__8449 = G__8526;
t__8450 = G__8527;
families__8451 = G__8528;
escaping__8452 = G__8529;
in_word__8453 = G__8530;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8468 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8447);
if(and__3822__auto____8468)
{var and__3822__auto____8469 = cljs.core._EQ_.call(null,"\"",a__8454);
if(and__3822__auto____8469)
{var and__3822__auto____8470 = cljs.core.not.call(null,escaping__8452);
if(and__3822__auto____8470)
{return in_word__8453;
} else
{return and__3822__auto____8470;
}
} else
{return and__3822__auto____8469;
}
} else
{return and__3822__auto____8468;
}
})()))
{{
var G__8531 = j__8455;
var G__8532 = subpar.paredit.code;
var G__8533 = cljs.core.pop.call(null,openings__8448);
var G__8534 = -1;
var G__8535 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8536 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8451,cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'closer"], true),i__8446),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8448),"\uFDD0'children",o__8456], true),i__8446),cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'children",start__8449], true),(i__8446 - 1));
var G__8537 = false;
var G__8538 = false;
i__8446 = G__8531;
mode__8447 = G__8532;
openings__8448 = G__8533;
start__8449 = G__8534;
t__8450 = G__8535;
families__8451 = G__8536;
escaping__8452 = G__8537;
in_word__8453 = G__8538;
continue;
}
} else
{if((function (){var and__3822__auto____8471 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8447);
if(and__3822__auto____8471)
{var and__3822__auto____8472 = cljs.core._EQ_.call(null,"\"",a__8454);
if(and__3822__auto____8472)
{return cljs.core.not.call(null,escaping__8452);
} else
{return and__3822__auto____8472;
}
} else
{return and__3822__auto____8471;
}
})())
{{
var G__8539 = j__8455;
var G__8540 = subpar.paredit.code;
var G__8541 = cljs.core.pop.call(null,openings__8448);
var G__8542 = -1;
var G__8543 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8544 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8451,cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'closer"], true),i__8446),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8448),"\uFDD0'children",o__8456], true),i__8446);
var G__8545 = false;
var G__8546 = false;
i__8446 = G__8539;
mode__8447 = G__8540;
openings__8448 = G__8541;
start__8449 = G__8542;
t__8450 = G__8543;
families__8451 = G__8544;
escaping__8452 = G__8545;
in_word__8453 = G__8546;
continue;
}
} else
{if((function (){var and__3822__auto____8473 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8447);
if(and__3822__auto____8473)
{var and__3822__auto____8474 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8454));
if(and__3822__auto____8474)
{return cljs.core.not.call(null,in_word__8453);
} else
{return and__3822__auto____8474;
}
} else
{return and__3822__auto____8473;
}
})())
{{
var G__8547 = j__8455;
var G__8548 = subpar.paredit.string;
var G__8549 = openings__8448;
var G__8550 = i__8446;
var G__8551 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8552 = cljs.core.assoc_in.call(null,families__8451,cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'children",i__8446], true),i__8446);
var G__8553 = false;
var G__8554 = true;
i__8446 = G__8547;
mode__8447 = G__8548;
openings__8448 = G__8549;
start__8449 = G__8550;
t__8450 = G__8551;
families__8451 = G__8552;
escaping__8452 = G__8553;
in_word__8453 = G__8554;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8475 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8447);
if(and__3822__auto____8475)
{var and__3822__auto____8476 = subpar.paredit.whitespace_QMARK_.call(null,a__8454);
if(cljs.core.truth_(and__3822__auto____8476))
{return in_word__8453;
} else
{return and__3822__auto____8476;
}
} else
{return and__3822__auto____8475;
}
})()))
{{
var G__8555 = j__8455;
var G__8556 = subpar.paredit.string;
var G__8557 = openings__8448;
var G__8558 = -1;
var G__8559 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8560 = cljs.core.assoc_in.call(null,families__8451,cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'children",start__8449], true),(i__8446 - 1));
var G__8561 = false;
var G__8562 = false;
i__8446 = G__8555;
mode__8447 = G__8556;
openings__8448 = G__8557;
start__8449 = G__8558;
t__8450 = G__8559;
families__8451 = G__8560;
escaping__8452 = G__8561;
in_word__8453 = G__8562;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.string,mode__8447))
{{
var G__8563 = j__8455;
var G__8564 = subpar.paredit.string;
var G__8565 = openings__8448;
var G__8566 = start__8449;
var G__8567 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8568 = families__8451;
var G__8569 = false;
var G__8570 = in_word__8453;
i__8446 = G__8563;
mode__8447 = G__8564;
openings__8448 = G__8565;
start__8449 = G__8566;
t__8450 = G__8567;
families__8451 = G__8568;
escaping__8452 = G__8569;
in_word__8453 = G__8570;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8477 = subpar.paredit.opener_QMARK_.call(null,a__8454);
if(cljs.core.truth_(and__3822__auto____8477))
{return in_word__8453;
} else
{return and__3822__auto____8477;
}
})()))
{{
var G__8571 = j__8455;
var G__8572 = subpar.paredit.code;
var G__8573 = cljs.core.conj.call(null,openings__8448,i__8446);
var G__8574 = -1;
var G__8575 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8576 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8451,cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'children",start__8449], true),(i__8446 - 1)),cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'children",i__8446], true),i__8446),cljs.core.PersistentVector.fromArray([i__8446,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY);
var G__8577 = false;
var G__8578 = false;
i__8446 = G__8571;
mode__8447 = G__8572;
openings__8448 = G__8573;
start__8449 = G__8574;
t__8450 = G__8575;
families__8451 = G__8576;
escaping__8452 = G__8577;
in_word__8453 = G__8578;
continue;
}
} else
{if(cljs.core.truth_(subpar.paredit.opener_QMARK_.call(null,a__8454)))
{{
var G__8579 = j__8455;
var G__8580 = subpar.paredit.code;
var G__8581 = cljs.core.conj.call(null,openings__8448,i__8446);
var G__8582 = -1;
var G__8583 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8584 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8451,cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'children",i__8446], true),i__8446),cljs.core.PersistentVector.fromArray([i__8446,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY);
var G__8585 = false;
var G__8586 = false;
i__8446 = G__8579;
mode__8447 = G__8580;
openings__8448 = G__8581;
start__8449 = G__8582;
t__8450 = G__8583;
families__8451 = G__8584;
escaping__8452 = G__8585;
in_word__8453 = G__8586;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8478 = subpar.paredit.closer_QMARK_.call(null,a__8454);
if(cljs.core.truth_(and__3822__auto____8478))
{return in_word__8453;
} else
{return and__3822__auto____8478;
}
})()))
{{
var G__8587 = j__8455;
var G__8588 = subpar.paredit.code;
var G__8589 = cljs.core.pop.call(null,openings__8448);
var G__8590 = -1;
var G__8591 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8592 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8451,cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'children",start__8449], true),(i__8446 - 1)),cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'closer"], true),i__8446),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8448),"\uFDD0'children",o__8456], true),i__8446);
var G__8593 = false;
var G__8594 = false;
i__8446 = G__8587;
mode__8447 = G__8588;
openings__8448 = G__8589;
start__8449 = G__8590;
t__8450 = G__8591;
families__8451 = G__8592;
escaping__8452 = G__8593;
in_word__8453 = G__8594;
continue;
}
} else
{if(cljs.core.truth_(subpar.paredit.closer_QMARK_.call(null,a__8454)))
{{
var G__8595 = j__8455;
var G__8596 = subpar.paredit.code;
var G__8597 = cljs.core.pop.call(null,openings__8448);
var G__8598 = -1;
var G__8599 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8600 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8451,cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'closer"], true),i__8446),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8448),"\uFDD0'children",o__8456], true),i__8446);
var G__8601 = false;
var G__8602 = false;
i__8446 = G__8595;
mode__8447 = G__8596;
openings__8448 = G__8597;
start__8449 = G__8598;
t__8450 = G__8599;
families__8451 = G__8600;
escaping__8452 = G__8601;
in_word__8453 = G__8602;
continue;
}
} else
{if((function (){var and__3822__auto____8479 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8454));
if(and__3822__auto____8479)
{return cljs.core.not.call(null,in_word__8453);
} else
{return and__3822__auto____8479;
}
})())
{{
var G__8603 = j__8455;
var G__8604 = subpar.paredit.code;
var G__8605 = openings__8448;
var G__8606 = i__8446;
var G__8607 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8608 = cljs.core.assoc_in.call(null,families__8451,cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'children",i__8446], true),i__8446);
var G__8609 = false;
var G__8610 = true;
i__8446 = G__8603;
mode__8447 = G__8604;
openings__8448 = G__8605;
start__8449 = G__8606;
t__8450 = G__8607;
families__8451 = G__8608;
escaping__8452 = G__8609;
in_word__8453 = G__8610;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8480 = subpar.paredit.whitespace_QMARK_.call(null,a__8454);
if(cljs.core.truth_(and__3822__auto____8480))
{return in_word__8453;
} else
{return and__3822__auto____8480;
}
})()))
{{
var G__8611 = j__8455;
var G__8612 = subpar.paredit.code;
var G__8613 = openings__8448;
var G__8614 = -1;
var G__8615 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8616 = cljs.core.assoc_in.call(null,families__8451,cljs.core.PersistentVector.fromArray([o__8456,"\uFDD0'children",start__8449], true),(i__8446 - 1));
var G__8617 = false;
var G__8618 = false;
i__8446 = G__8611;
mode__8447 = G__8612;
openings__8448 = G__8613;
start__8449 = G__8614;
t__8450 = G__8615;
families__8451 = G__8616;
escaping__8452 = G__8617;
in_word__8453 = G__8618;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8481 = subpar.paredit.whitespace_QMARK_.call(null,a__8454);
if(cljs.core.truth_(and__3822__auto____8481))
{return cljs.core.not.call(null,in_word__8453);
} else
{return and__3822__auto____8481;
}
})()))
{{
var G__8619 = j__8455;
var G__8620 = subpar.paredit.code;
var G__8621 = openings__8448;
var G__8622 = -1;
var G__8623 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8624 = families__8451;
var G__8625 = false;
var G__8626 = false;
i__8446 = G__8619;
mode__8447 = G__8620;
openings__8448 = G__8621;
start__8449 = G__8622;
t__8450 = G__8623;
families__8451 = G__8624;
escaping__8452 = G__8625;
in_word__8453 = G__8626;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8482 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8454));
if(and__3822__auto____8482)
{return in_word__8453;
} else
{return and__3822__auto____8482;
}
})()))
{{
var G__8627 = j__8455;
var G__8628 = subpar.paredit.code;
var G__8629 = openings__8448;
var G__8630 = start__8449;
var G__8631 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray([mode__8447,o__8456], true));
var G__8632 = families__8451;
var G__8633 = false;
var G__8634 = true;
i__8446 = G__8627;
mode__8447 = G__8628;
openings__8448 = G__8629;
start__8449 = G__8630;
t__8450 = G__8631;
families__8451 = G__8632;
escaping__8452 = G__8633;
in_word__8453 = G__8634;
continue;
}
} else
{if("\uFDD0'default")
{{
var G__8635 = j__8455;
var G__8636 = subpar.paredit.code;
var G__8637 = openings__8448;
var G__8638 = start__8449;
var G__8639 = cljs.core.conj.call(null,t__8450,cljs.core.PersistentVector.fromArray(["?",o__8456], true));
var G__8640 = families__8451;
var G__8641 = escaping__8452;
var G__8642 = in_word__8453;
i__8446 = G__8635;
mode__8447 = G__8636;
openings__8448 = G__8637;
start__8449 = G__8638;
t__8450 = G__8639;
families__8451 = G__8640;
escaping__8452 = G__8641;
in_word__8453 = G__8642;
continue;
}
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
break;
}
});
