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
var or__3939__auto____8107 = cljs.core._EQ_.call(null,x,"\t");
if(or__3939__auto____8107)
{return or__3939__auto____8107;
} else
{var or__3939__auto____8108 = cljs.core._EQ_.call(null,x," ");
if(or__3939__auto____8108)
{return or__3939__auto____8108;
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
var and__3937__auto____8112 = (function (){var and__3937__auto____8111 = (0 <= i);
if(and__3937__auto____8111)
{return (i <= cljs.core.count.call(null,(new cljs.core.Keyword("\uFDD0'chars")).call(null,p)));
} else
{return and__3937__auto____8111;
}
})();
if(cljs.core.truth_(and__3937__auto____8112))
{return cljs.core._EQ_.call(null,mode,subpar.paredit.get_mode.call(null,p,i));
} else
{return and__3937__auto____8112;
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
var and__3937__auto____8116 = i;
if(cljs.core.truth_(and__3937__auto____8116))
{var and__3937__auto____8117 = j;
if(cljs.core.truth_(and__3937__auto____8117))
{return (cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__8113_SHARP_){
return cljs.core._EQ_.call(null,"\n",p1__8113_SHARP_);
}),cljs.core.drop.call(null,i,cljs.core.drop_last.call(null,((cljs.core.count.call(null,s) - j) - 1),cljs.core.take.call(null,cljs.core.count.call(null,s),s))))) + 1);
} else
{return and__3937__auto____8117;
}
} else
{return and__3937__auto____8116;
}
});
/**
* whether the current spot is escaped
*/
subpar.paredit.escaped_QMARK_ = (function escaped_QMARK_(s,i){
return cljs.core.odd_QMARK_.call(null,(function (){var c__8121 = 0;
var j__8122 = (i - 1);
while(true){
var a__8123 = cljs.core.nth.call(null,s,j__8122,null);
if((j__8122 < 0))
{return c__8121;
} else
{if((a__8123 == null))
{return c__8121;
} else
{if(cljs.core.not_EQ_.call(null,"\\",a__8123))
{return c__8121;
} else
{if(true)
{{
var G__8124 = (c__8121 + 1);
var G__8125 = (j__8122 - 1);
c__8121 = G__8124;
j__8122 = G__8125;
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
var vec__8130__8131 = subpar.paredit.get_wrapper.call(null,subpar.paredit.parse.call(null,s),i);
var o__8132 = cljs.core.nth.call(null,vec__8130__8131,0,null);
var c__8133 = cljs.core.nth.call(null,vec__8130__8131,1,null);
if(cljs.core._EQ_.call(null,-1,o__8132))
{return i;
} else
{return o__8132;
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
var p__8138 = subpar.paredit.parse.call(null,s);
var h__8139 = (i - 1);
var j__8140 = (i + 1);
var c__8141 = cljs.core.nth.call(null,s,i,null);
if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,j__8140)))
{return 3;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([h__8139,i], true),subpar.paredit.get_wrapper.call(null,p__8138,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p__8138,i)))
{return 0;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([i,j__8140], true),subpar.paredit.get_wrapper.call(null,p__8138,j__8140)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null,p__8138,i)))
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
var p__8145 = subpar.paredit.parse.call(null,s);
var g__8146 = (i - 2);
var h__8147 = (i - 1);
if((i <= 0))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,h__8147)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,i)))
{return 2;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([g__8146,h__8147], true),subpar.paredit.get_wrapper.call(null,p__8145,h__8147)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p__8145,h__8147)))
{return 4;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([h__8147,i], true),subpar.paredit.get_wrapper.call(null,p__8145,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null,p__8145,h__8147)))
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
var p__8149 = subpar.paredit.parse.call(null,s);
if((i < 0))
{return 0;
} else
{if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.in_comment_QMARK_.call(null,p__8149,i)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.n_str_QMARK_.call(null,p__8149,i)))
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
var vec__8159__8160 = subpar.paredit.get_wrapper.call(null,p,i);
var o__8161 = cljs.core.nth.call(null,vec__8159__8160,0,null);
var c__8162 = cljs.core.nth.call(null,vec__8159__8160,1,null);
if(cljs.core._EQ_.call(null,-1,o__8161))
{return cljs.core.PersistentVector.EMPTY;
} else
{var start__8164 = ((function (){var or__3939__auto____8163 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.identity,p));
if(cljs.core.truth_(or__3939__auto____8163))
{return or__3939__auto____8163;
} else
{return o__8161;
}
})() + 1);
var delete__8165 = cljs.core.not_EQ_.call(null,start__8164,c__8162);
var dest__8166 = ((delete__8165)?(start__8164 + 1):(c__8162 + 1));
return cljs.core.PersistentVector.fromArray([delete__8165,start__8164,c__8162,dest__8166], true);
}
});
/**
* finds the start of the next list/string/vector/map
*/
subpar.paredit.get_start_of_next_list = (function get_start_of_next_list(s,i){
var p__8170 = subpar.paredit.parse.call(null,s);
var r__8172 = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,(function (p1__8150_SHARP_){
var and__3937__auto____8171 = (p1__8150_SHARP_ >= i);
if(and__3937__auto____8171)
{return cljs.core.get_in.call(null,p__8170,cljs.core.PersistentVector.fromArray(["\uFDD0'families",p1__8150_SHARP_], true));
} else
{return and__3937__auto____8171;
}
}),p__8170));
if((r__8172 == null))
{return false;
} else
{return r__8172;
}
});
subpar.paredit.forward_down_fn = (function forward_down_fn(s,i){
var r__8175 = subpar.paredit.get_start_of_next_list.call(null,s,i);
if(cljs.core.truth_(r__8175))
{return (r__8175 + 1);
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
var p__8181 = subpar.paredit.parse.call(null,s);
var b__8182 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,(function (p1__8173_SHARP_){
return (p1__8173_SHARP_ < i);
}),p__8181));
var o__8183 = subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p__8181,i);
var or__3939__auto____8184 = b__8182;
if(cljs.core.truth_(or__3939__auto____8184))
{return or__3939__auto____8184;
} else
{if((o__8183 < 0))
{return 0;
} else
{return o__8183;
}
}
});
/**
* paredit-backward-down
*/
subpar.paredit.backward_down_fn = (function backward_down_fn(s,i){
var p__8189 = subpar.paredit.parse.call(null,s);
var b__8191 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,(function (p1__8176_SHARP_){
var and__3937__auto____8190 = (p1__8176_SHARP_ < i);
if(and__3937__auto____8190)
{return subpar.paredit.closes_list_QMARK_.call(null,p__8189,p1__8176_SHARP_);
} else
{return and__3937__auto____8190;
}
}),p__8189));
var or__3939__auto____8192 = b__8191;
if(cljs.core.truth_(or__3939__auto____8192))
{return or__3939__auto____8192;
} else
{return i;
}
});
/**
* paredit-forward-up
*/
subpar.paredit.forward_up_fn = (function forward_up_fn(s,i){
var p__8201 = subpar.paredit.parse.call(null,s);
var vec__8200__8202 = subpar.paredit.get_wrapper.call(null,p__8201,i);
var o__8203 = cljs.core.nth.call(null,vec__8200__8202,0,null);
var c__8204 = cljs.core.nth.call(null,vec__8200__8202,1,null);
var in_list__8205 = cljs.core.not_EQ_.call(null,-1,o__8203);
if(in_list__8205)
{return (c__8204 + 1);
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
var p__8211 = subpar.paredit.parse.call(null,s);
var b__8212 = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,(function (p1__8193_SHARP_){
return (p1__8193_SHARP_ >= i);
}),p__8211));
var c__8213 = subpar.paredit.get_closing_delimiter_index_with_parse.call(null,p__8211,i);
var l__8214 = cljs.core.count.call(null,s);
if(cljs.core.truth_(b__8212))
{return (b__8212 + 1);
} else
{if(cljs.core.truth_(c__8213))
{return (((c__8213 + 1) < l__8214) ? (c__8213 + 1) : l__8214);
} else
{if(true)
{return l__8214;
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
var p__8229 = subpar.paredit.parse.call(null,s);
var vec__8228__8230 = subpar.paredit.get_wrapper.call(null,p__8229,i);
var o__8231 = cljs.core.nth.call(null,vec__8228__8230,0,null);
var c__8232 = cljs.core.nth.call(null,vec__8228__8230,1,null);
var in_list__8233 = cljs.core.not_EQ_.call(null,-1,o__8231);
var a__8235 = (function (){var and__3937__auto____8234 = in_list__8233;
if(and__3937__auto____8234)
{return cljs.core.nth.call(null,s,c__8232,false);
} else
{return and__3937__auto____8234;
}
})();
var d__8237 = (function (){var and__3937__auto____8236 = in_list__8233;
if(and__3937__auto____8236)
{return cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,o__8231,cljs.core.vals,(function (p1__8206_SHARP_){
return (p1__8206_SHARP_ > c__8232);
}),p__8229));
} else
{return and__3937__auto____8236;
}
})();
if(cljs.core.truth_((function (){var and__3937__auto____8238 = a__8235;
if(cljs.core.truth_(and__3937__auto____8238))
{var and__3937__auto____8239 = c__8232;
if(cljs.core.truth_(and__3937__auto____8239))
{return d__8237;
} else
{return and__3937__auto____8239;
}
} else
{return and__3937__auto____8238;
}
})()))
{return cljs.core.PersistentVector.fromArray([a__8235,c__8232,(d__8237 + 1),subpar.paredit.count_lines.call(null,s,o__8231,(d__8237 + 1))], true);
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
var p__8252 = subpar.paredit.parse.call(null,s);
var vec__8251__8253 = subpar.paredit.get_wrapper.call(null,p__8252,i);
var o__8254 = cljs.core.nth.call(null,vec__8251__8253,0,null);
var c__8255 = cljs.core.nth.call(null,vec__8251__8253,1,null);
var in_list__8256 = cljs.core.not_EQ_.call(null,-1,o__8254);
var d__8258 = (function (){var and__3937__auto____8257 = in_list__8256;
if(and__3937__auto____8257)
{return cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,o__8254,cljs.core.keys,(function (p1__8215_SHARP_){
return (p1__8215_SHARP_ < o__8254);
}),p__8252));
} else
{return and__3937__auto____8257;
}
})();
var a__8260 = (function (){var and__3937__auto____8259 = in_list__8256;
if(and__3937__auto____8259)
{return cljs.core.nth.call(null,s,o__8254,false);
} else
{return and__3937__auto____8259;
}
})();
if(cljs.core.truth_((function (){var and__3937__auto____8261 = a__8260;
if(cljs.core.truth_(and__3937__auto____8261))
{return d__8258;
} else
{return and__3937__auto____8261;
}
})()))
{return cljs.core.PersistentVector.fromArray([a__8260,o__8254,d__8258,subpar.paredit.count_lines.call(null,s,d__8258,c__8255)], true);
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
var p__8277 = subpar.paredit.parse.call(null,s);
var vec__8276__8278 = subpar.paredit.get_wrapper.call(null,p__8277,i);
var o__8279 = cljs.core.nth.call(null,vec__8276__8278,0,null);
var c__8280 = cljs.core.nth.call(null,vec__8276__8278,1,null);
var in_list__8281 = cljs.core.not_EQ_.call(null,-1,o__8279);
var endings__8283 = (function (){var and__3937__auto____8282 = in_list__8281;
if(and__3937__auto____8282)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.constantly.call(null,true),p__8277);
} else
{return and__3937__auto____8282;
}
})();
var a__8286 = (function (){var and__3937__auto____8284 = c__8280;
if(cljs.core.truth_(and__3937__auto____8284))
{var and__3937__auto____8285 = in_list__8281;
if(and__3937__auto____8285)
{return cljs.core.nth.call(null,s,c__8280,null);
} else
{return and__3937__auto____8285;
}
} else
{return and__3937__auto____8284;
}
})();
var r__8288 = (function (){var or__3939__auto____8287 = subpar.paredit.count_lines.call(null,s,o__8279,c__8280);
if(cljs.core.truth_(or__3939__auto____8287))
{return or__3939__auto____8287;
} else
{return 1;
}
})();
var num__8289 = (cljs.core.truth_(endings__8283)?cljs.core.count.call(null,endings__8283):0);
if((num__8289 > 1))
{return cljs.core.PersistentVector.fromArray([a__8286,c__8280,(cljs.core.nth.call(null,endings__8283,(num__8289 - 2)) + 1),false,r__8288,o__8279], true);
} else
{if(cljs.core._EQ_.call(null,num__8289,1))
{return cljs.core.PersistentVector.fromArray([a__8286,c__8280,(o__8279 + 1),true,r__8288,o__8279], true);
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
var p__8305 = subpar.paredit.parse.call(null,s);
var vec__8304__8306 = subpar.paredit.get_wrapper.call(null,p__8305,i);
var o__8307 = cljs.core.nth.call(null,vec__8304__8306,0,null);
var c__8308 = cljs.core.nth.call(null,vec__8304__8306,1,null);
var in_list__8309 = cljs.core.not_EQ_.call(null,-1,o__8307);
var starts__8311 = (function (){var and__3937__auto____8310 = in_list__8309;
if(and__3937__auto____8310)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.keys,cljs.core.constantly.call(null,true),p__8305);
} else
{return and__3937__auto____8310;
}
})();
var a__8314 = (function (){var and__3937__auto____8312 = o__8307;
if(cljs.core.truth_(and__3937__auto____8312))
{var and__3937__auto____8313 = in_list__8309;
if(and__3937__auto____8313)
{return cljs.core.nth.call(null,s,o__8307,null);
} else
{return and__3937__auto____8313;
}
} else
{return and__3937__auto____8312;
}
})();
var r__8316 = (function (){var or__3939__auto____8315 = subpar.paredit.count_lines.call(null,s,o__8307,c__8308);
if(cljs.core.truth_(or__3939__auto____8315))
{return or__3939__auto____8315;
} else
{return 1;
}
})();
var num__8317 = (cljs.core.truth_(starts__8311)?cljs.core.count.call(null,starts__8311):0);
if((num__8317 > 1))
{return cljs.core.PersistentVector.fromArray([a__8314,o__8307,cljs.core.second.call(null,starts__8311),false,r__8316], true);
} else
{if(cljs.core._EQ_.call(null,num__8317,1))
{return cljs.core.PersistentVector.fromArray([a__8314,o__8307,c__8308,true,r__8316], true);
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
var p__8330 = subpar.paredit.parse.call(null,s);
var vec__8329__8331 = subpar.paredit.get_wrapper.call(null,p__8330,i);
var o__8332 = cljs.core.nth.call(null,vec__8329__8331,0,null);
var c__8333 = cljs.core.nth.call(null,vec__8329__8331,1,null);
var in_list__8334 = cljs.core.not_EQ_.call(null,-1,o__8332);
if(in_list__8334)
{var vec__8335__8336 = subpar.paredit.get_wrapper.call(null,p__8330,o__8332);
var n__8337 = cljs.core.nth.call(null,vec__8335__8336,0,null);
var d__8338 = cljs.core.nth.call(null,vec__8335__8336,1,null);
var r__8339 = subpar.paredit.count_lines.call(null,s,n__8337,d__8338);
return cljs.core.PersistentVector.fromArray([o__8332,c__8333,((0 > n__8337) ? 0 : n__8337),r__8339], true);
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
var p__8352 = subpar.paredit.parse.call(null,s);
var vec__8351__8353 = subpar.paredit.get_wrapper.call(null,p__8352,i);
var o__8354 = cljs.core.nth.call(null,vec__8351__8353,0,null);
var c__8355 = cljs.core.nth.call(null,vec__8351__8353,1,null);
var in_list__8356 = cljs.core.not_EQ_.call(null,-1,o__8354);
if(in_list__8356)
{var vec__8357__8358 = subpar.paredit.get_wrapper.call(null,p__8352,o__8354);
var n__8359 = cljs.core.nth.call(null,vec__8357__8358,0,null);
var d__8360 = cljs.core.nth.call(null,vec__8357__8358,1,null);
var r__8361 = subpar.paredit.count_lines.call(null,s,n__8359,d__8360);
return cljs.core.PersistentVector.fromArray([o__8354,((o__8354 > i) ? o__8354 : i),c__8355,((0 > n__8359) ? 0 : n__8359),r__8361], true);
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
var p__8374 = subpar.paredit.parse.call(null,s);
var vec__8373__8375 = subpar.paredit.get_wrapper.call(null,p__8374,i);
var o__8376 = cljs.core.nth.call(null,vec__8373__8375,0,null);
var c__8377 = cljs.core.nth.call(null,vec__8373__8375,1,null);
var in_list__8378 = cljs.core.not_EQ_.call(null,-1,o__8376);
if(in_list__8378)
{var vec__8379__8380 = subpar.paredit.get_wrapper.call(null,p__8374,o__8376);
var n__8381 = cljs.core.nth.call(null,vec__8379__8380,0,null);
var d__8382 = cljs.core.nth.call(null,vec__8379__8380,1,null);
var r__8383 = subpar.paredit.count_lines.call(null,s,n__8381,d__8382);
return cljs.core.PersistentVector.fromArray([o__8376,i,(c__8377 + 1),((0 > n__8381) ? 0 : n__8381),r__8383], true);
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
var s__8422 = [cljs.core.str(ss),cljs.core.str(" ")].join('');
var i__8423 = 0;
var mode__8424 = subpar.paredit.code;
var openings__8425 = cljs.core.list.call(null,-1);
var start__8426 = -1;
var t__8427 = cljs.core.PersistentVector.EMPTY;
var families__8428 = cljs.core.PersistentArrayMap.fromArrays([-1],[cljs.core.ObjMap.fromObject(["\uFDD0'children"],{"\uFDD0'children":cljs.core.ObjMap.EMPTY})]);
var escaping__8429 = false;
var in_word__8430 = false;
while(true){
var a__8431 = cljs.core.nth.call(null,s__8422,i__8423,null);
var j__8432 = (i__8423 + 1);
var o__8433 = cljs.core.peek.call(null,openings__8425);
if(cljs.core.truth_((function (){var and__3937__auto____8434 = (a__8431 == null);
if(and__3937__auto____8434)
{return in_word__8430;
} else
{return and__3937__auto____8434;
}
})()))
{return cljs.core.ObjMap.fromObject(["\uFDD0'chars","\uFDD0'families"],{"\uFDD0'chars":t__8427,"\uFDD0'families":cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8428,cljs.core.PersistentVector.fromArray([-1,"\uFDD0'closer"], true),(i__8423 - 1)),cljs.core.PersistentVector.fromArray([-1,"\uFDD0'children",start__8426], true),(i__8423 - 1))});
} else
{if((a__8431 == null))
{return cljs.core.ObjMap.fromObject(["\uFDD0'chars","\uFDD0'families"],{"\uFDD0'chars":t__8427,"\uFDD0'families":cljs.core.assoc_in.call(null,families__8428,cljs.core.PersistentVector.fromArray([-1,"\uFDD0'closer"], true),(i__8423 - 1))});
} else
{if((function (){var and__3937__auto____8435 = cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode__8424);
if(and__3937__auto____8435)
{var and__3937__auto____8436 = cljs.core._EQ_.call(null,"\\",a__8431);
if(and__3937__auto____8436)
{var and__3937__auto____8437 = cljs.core.not.call(null,escaping__8429);
if(and__3937__auto____8437)
{return cljs.core.not.call(null,in_word__8430);
} else
{return and__3937__auto____8437;
}
} else
{return and__3937__auto____8436;
}
} else
{return and__3937__auto____8435;
}
})())
{{
var G__8460 = j__8432;
var G__8461 = mode__8424;
var G__8462 = openings__8425;
var G__8463 = i__8423;
var G__8464 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8465 = cljs.core.assoc_in.call(null,families__8428,cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'children",i__8423], true),j__8432);
var G__8466 = true;
var G__8467 = true;
i__8423 = G__8460;
mode__8424 = G__8461;
openings__8425 = G__8462;
start__8426 = G__8463;
t__8427 = G__8464;
families__8428 = G__8465;
escaping__8429 = G__8466;
in_word__8430 = G__8467;
continue;
}
} else
{if((function (){var and__3937__auto____8438 = cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode__8424);
if(and__3937__auto____8438)
{var and__3937__auto____8439 = cljs.core._EQ_.call(null,"\\",a__8431);
if(and__3937__auto____8439)
{return cljs.core.not.call(null,escaping__8429);
} else
{return and__3937__auto____8439;
}
} else
{return and__3937__auto____8438;
}
})())
{{
var G__8468 = j__8432;
var G__8469 = mode__8424;
var G__8470 = openings__8425;
var G__8471 = i__8423;
var G__8472 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8473 = families__8428;
var G__8474 = true;
var G__8475 = true;
i__8423 = G__8468;
mode__8424 = G__8469;
openings__8425 = G__8470;
start__8426 = G__8471;
t__8427 = G__8472;
families__8428 = G__8473;
escaping__8429 = G__8474;
in_word__8430 = G__8475;
continue;
}
} else
{if((function (){var and__3937__auto____8440 = cljs.core._EQ_.call(null,subpar.paredit.code,mode__8424);
if(and__3937__auto____8440)
{var and__3937__auto____8441 = cljs.core._EQ_.call(null,";",a__8431);
if(and__3937__auto____8441)
{return cljs.core.not.call(null,escaping__8429);
} else
{return and__3937__auto____8441;
}
} else
{return and__3937__auto____8440;
}
})())
{{
var G__8476 = j__8432;
var G__8477 = subpar.paredit.cmmnt;
var G__8478 = openings__8425;
var G__8479 = start__8426;
var G__8480 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8481 = families__8428;
var G__8482 = false;
var G__8483 = false;
i__8423 = G__8476;
mode__8424 = G__8477;
openings__8425 = G__8478;
start__8426 = G__8479;
t__8427 = G__8480;
families__8428 = G__8481;
escaping__8429 = G__8482;
in_word__8430 = G__8483;
continue;
}
} else
{if((function (){var and__3937__auto____8442 = cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode__8424);
if(and__3937__auto____8442)
{return cljs.core._EQ_.call(null,"\n",a__8431);
} else
{return and__3937__auto____8442;
}
})())
{{
var G__8484 = j__8432;
var G__8485 = subpar.paredit.code;
var G__8486 = openings__8425;
var G__8487 = start__8426;
var G__8488 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8489 = families__8428;
var G__8490 = false;
var G__8491 = false;
i__8423 = G__8484;
mode__8424 = G__8485;
openings__8425 = G__8486;
start__8426 = G__8487;
t__8427 = G__8488;
families__8428 = G__8489;
escaping__8429 = G__8490;
in_word__8430 = G__8491;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode__8424))
{{
var G__8492 = j__8432;
var G__8493 = subpar.paredit.cmmnt;
var G__8494 = openings__8425;
var G__8495 = start__8426;
var G__8496 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8497 = families__8428;
var G__8498 = false;
var G__8499 = false;
i__8423 = G__8492;
mode__8424 = G__8493;
openings__8425 = G__8494;
start__8426 = G__8495;
t__8427 = G__8496;
families__8428 = G__8497;
escaping__8429 = G__8498;
in_word__8430 = G__8499;
continue;
}
} else
{if((function (){var and__3937__auto____8443 = cljs.core._EQ_.call(null,subpar.paredit.code,mode__8424);
if(and__3937__auto____8443)
{var and__3937__auto____8444 = cljs.core._EQ_.call(null,"\"",a__8431);
if(and__3937__auto____8444)
{return cljs.core.not.call(null,escaping__8429);
} else
{return and__3937__auto____8444;
}
} else
{return and__3937__auto____8443;
}
})())
{{
var G__8500 = j__8432;
var G__8501 = subpar.paredit.string;
var G__8502 = cljs.core.conj.call(null,openings__8425,i__8423);
var G__8503 = -1;
var G__8504 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8505 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8428,cljs.core.PersistentVector.fromArray([i__8423,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY),cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'children",i__8423], true),j__8432);
var G__8506 = false;
var G__8507 = false;
i__8423 = G__8500;
mode__8424 = G__8501;
openings__8425 = G__8502;
start__8426 = G__8503;
t__8427 = G__8504;
families__8428 = G__8505;
escaping__8429 = G__8506;
in_word__8430 = G__8507;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8445 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8424);
if(and__3937__auto____8445)
{var and__3937__auto____8446 = cljs.core._EQ_.call(null,"\"",a__8431);
if(and__3937__auto____8446)
{var and__3937__auto____8447 = cljs.core.not.call(null,escaping__8429);
if(and__3937__auto____8447)
{return in_word__8430;
} else
{return and__3937__auto____8447;
}
} else
{return and__3937__auto____8446;
}
} else
{return and__3937__auto____8445;
}
})()))
{{
var G__8508 = j__8432;
var G__8509 = subpar.paredit.code;
var G__8510 = cljs.core.pop.call(null,openings__8425);
var G__8511 = -1;
var G__8512 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8513 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8428,cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'closer"], true),i__8423),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8425),"\uFDD0'children",o__8433], true),i__8423),cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'children",start__8426], true),(i__8423 - 1));
var G__8514 = false;
var G__8515 = false;
i__8423 = G__8508;
mode__8424 = G__8509;
openings__8425 = G__8510;
start__8426 = G__8511;
t__8427 = G__8512;
families__8428 = G__8513;
escaping__8429 = G__8514;
in_word__8430 = G__8515;
continue;
}
} else
{if((function (){var and__3937__auto____8448 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8424);
if(and__3937__auto____8448)
{var and__3937__auto____8449 = cljs.core._EQ_.call(null,"\"",a__8431);
if(and__3937__auto____8449)
{return cljs.core.not.call(null,escaping__8429);
} else
{return and__3937__auto____8449;
}
} else
{return and__3937__auto____8448;
}
})())
{{
var G__8516 = j__8432;
var G__8517 = subpar.paredit.code;
var G__8518 = cljs.core.pop.call(null,openings__8425);
var G__8519 = -1;
var G__8520 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8521 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8428,cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'closer"], true),i__8423),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8425),"\uFDD0'children",o__8433], true),i__8423);
var G__8522 = false;
var G__8523 = false;
i__8423 = G__8516;
mode__8424 = G__8517;
openings__8425 = G__8518;
start__8426 = G__8519;
t__8427 = G__8520;
families__8428 = G__8521;
escaping__8429 = G__8522;
in_word__8430 = G__8523;
continue;
}
} else
{if((function (){var and__3937__auto____8450 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8424);
if(and__3937__auto____8450)
{var and__3937__auto____8451 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8431));
if(and__3937__auto____8451)
{return cljs.core.not.call(null,in_word__8430);
} else
{return and__3937__auto____8451;
}
} else
{return and__3937__auto____8450;
}
})())
{{
var G__8524 = j__8432;
var G__8525 = subpar.paredit.string;
var G__8526 = openings__8425;
var G__8527 = i__8423;
var G__8528 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8529 = cljs.core.assoc_in.call(null,families__8428,cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'children",i__8423], true),i__8423);
var G__8530 = false;
var G__8531 = true;
i__8423 = G__8524;
mode__8424 = G__8525;
openings__8425 = G__8526;
start__8426 = G__8527;
t__8427 = G__8528;
families__8428 = G__8529;
escaping__8429 = G__8530;
in_word__8430 = G__8531;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8452 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8424);
if(and__3937__auto____8452)
{var and__3937__auto____8453 = subpar.paredit.whitespace_QMARK_.call(null,a__8431);
if(cljs.core.truth_(and__3937__auto____8453))
{return in_word__8430;
} else
{return and__3937__auto____8453;
}
} else
{return and__3937__auto____8452;
}
})()))
{{
var G__8532 = j__8432;
var G__8533 = subpar.paredit.string;
var G__8534 = openings__8425;
var G__8535 = -1;
var G__8536 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8537 = cljs.core.assoc_in.call(null,families__8428,cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'children",start__8426], true),(i__8423 - 1));
var G__8538 = false;
var G__8539 = false;
i__8423 = G__8532;
mode__8424 = G__8533;
openings__8425 = G__8534;
start__8426 = G__8535;
t__8427 = G__8536;
families__8428 = G__8537;
escaping__8429 = G__8538;
in_word__8430 = G__8539;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.string,mode__8424))
{{
var G__8540 = j__8432;
var G__8541 = subpar.paredit.string;
var G__8542 = openings__8425;
var G__8543 = start__8426;
var G__8544 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8545 = families__8428;
var G__8546 = false;
var G__8547 = in_word__8430;
i__8423 = G__8540;
mode__8424 = G__8541;
openings__8425 = G__8542;
start__8426 = G__8543;
t__8427 = G__8544;
families__8428 = G__8545;
escaping__8429 = G__8546;
in_word__8430 = G__8547;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8454 = subpar.paredit.opener_QMARK_.call(null,a__8431);
if(cljs.core.truth_(and__3937__auto____8454))
{return in_word__8430;
} else
{return and__3937__auto____8454;
}
})()))
{{
var G__8548 = j__8432;
var G__8549 = subpar.paredit.code;
var G__8550 = cljs.core.conj.call(null,openings__8425,i__8423);
var G__8551 = -1;
var G__8552 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8553 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8428,cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'children",start__8426], true),(i__8423 - 1)),cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'children",i__8423], true),i__8423),cljs.core.PersistentVector.fromArray([i__8423,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY);
var G__8554 = false;
var G__8555 = false;
i__8423 = G__8548;
mode__8424 = G__8549;
openings__8425 = G__8550;
start__8426 = G__8551;
t__8427 = G__8552;
families__8428 = G__8553;
escaping__8429 = G__8554;
in_word__8430 = G__8555;
continue;
}
} else
{if(cljs.core.truth_(subpar.paredit.opener_QMARK_.call(null,a__8431)))
{{
var G__8556 = j__8432;
var G__8557 = subpar.paredit.code;
var G__8558 = cljs.core.conj.call(null,openings__8425,i__8423);
var G__8559 = -1;
var G__8560 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8561 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8428,cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'children",i__8423], true),i__8423),cljs.core.PersistentVector.fromArray([i__8423,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY);
var G__8562 = false;
var G__8563 = false;
i__8423 = G__8556;
mode__8424 = G__8557;
openings__8425 = G__8558;
start__8426 = G__8559;
t__8427 = G__8560;
families__8428 = G__8561;
escaping__8429 = G__8562;
in_word__8430 = G__8563;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8455 = subpar.paredit.closer_QMARK_.call(null,a__8431);
if(cljs.core.truth_(and__3937__auto____8455))
{return in_word__8430;
} else
{return and__3937__auto____8455;
}
})()))
{{
var G__8564 = j__8432;
var G__8565 = subpar.paredit.code;
var G__8566 = cljs.core.pop.call(null,openings__8425);
var G__8567 = -1;
var G__8568 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8569 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8428,cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'children",start__8426], true),(i__8423 - 1)),cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'closer"], true),i__8423),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8425),"\uFDD0'children",o__8433], true),i__8423);
var G__8570 = false;
var G__8571 = false;
i__8423 = G__8564;
mode__8424 = G__8565;
openings__8425 = G__8566;
start__8426 = G__8567;
t__8427 = G__8568;
families__8428 = G__8569;
escaping__8429 = G__8570;
in_word__8430 = G__8571;
continue;
}
} else
{if(cljs.core.truth_(subpar.paredit.closer_QMARK_.call(null,a__8431)))
{{
var G__8572 = j__8432;
var G__8573 = subpar.paredit.code;
var G__8574 = cljs.core.pop.call(null,openings__8425);
var G__8575 = -1;
var G__8576 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8577 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8428,cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'closer"], true),i__8423),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8425),"\uFDD0'children",o__8433], true),i__8423);
var G__8578 = false;
var G__8579 = false;
i__8423 = G__8572;
mode__8424 = G__8573;
openings__8425 = G__8574;
start__8426 = G__8575;
t__8427 = G__8576;
families__8428 = G__8577;
escaping__8429 = G__8578;
in_word__8430 = G__8579;
continue;
}
} else
{if((function (){var and__3937__auto____8456 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8431));
if(and__3937__auto____8456)
{return cljs.core.not.call(null,in_word__8430);
} else
{return and__3937__auto____8456;
}
})())
{{
var G__8580 = j__8432;
var G__8581 = subpar.paredit.code;
var G__8582 = openings__8425;
var G__8583 = i__8423;
var G__8584 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8585 = cljs.core.assoc_in.call(null,families__8428,cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'children",i__8423], true),i__8423);
var G__8586 = false;
var G__8587 = true;
i__8423 = G__8580;
mode__8424 = G__8581;
openings__8425 = G__8582;
start__8426 = G__8583;
t__8427 = G__8584;
families__8428 = G__8585;
escaping__8429 = G__8586;
in_word__8430 = G__8587;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8457 = subpar.paredit.whitespace_QMARK_.call(null,a__8431);
if(cljs.core.truth_(and__3937__auto____8457))
{return in_word__8430;
} else
{return and__3937__auto____8457;
}
})()))
{{
var G__8588 = j__8432;
var G__8589 = subpar.paredit.code;
var G__8590 = openings__8425;
var G__8591 = -1;
var G__8592 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8593 = cljs.core.assoc_in.call(null,families__8428,cljs.core.PersistentVector.fromArray([o__8433,"\uFDD0'children",start__8426], true),(i__8423 - 1));
var G__8594 = false;
var G__8595 = false;
i__8423 = G__8588;
mode__8424 = G__8589;
openings__8425 = G__8590;
start__8426 = G__8591;
t__8427 = G__8592;
families__8428 = G__8593;
escaping__8429 = G__8594;
in_word__8430 = G__8595;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8458 = subpar.paredit.whitespace_QMARK_.call(null,a__8431);
if(cljs.core.truth_(and__3937__auto____8458))
{return cljs.core.not.call(null,in_word__8430);
} else
{return and__3937__auto____8458;
}
})()))
{{
var G__8596 = j__8432;
var G__8597 = subpar.paredit.code;
var G__8598 = openings__8425;
var G__8599 = -1;
var G__8600 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8601 = families__8428;
var G__8602 = false;
var G__8603 = false;
i__8423 = G__8596;
mode__8424 = G__8597;
openings__8425 = G__8598;
start__8426 = G__8599;
t__8427 = G__8600;
families__8428 = G__8601;
escaping__8429 = G__8602;
in_word__8430 = G__8603;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8459 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8431));
if(and__3937__auto____8459)
{return in_word__8430;
} else
{return and__3937__auto____8459;
}
})()))
{{
var G__8604 = j__8432;
var G__8605 = subpar.paredit.code;
var G__8606 = openings__8425;
var G__8607 = start__8426;
var G__8608 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray([mode__8424,o__8433], true));
var G__8609 = families__8428;
var G__8610 = false;
var G__8611 = true;
i__8423 = G__8604;
mode__8424 = G__8605;
openings__8425 = G__8606;
start__8426 = G__8607;
t__8427 = G__8608;
families__8428 = G__8609;
escaping__8429 = G__8610;
in_word__8430 = G__8611;
continue;
}
} else
{if("\uFDD0'default")
{{
var G__8612 = j__8432;
var G__8613 = subpar.paredit.code;
var G__8614 = openings__8425;
var G__8615 = start__8426;
var G__8616 = cljs.core.conj.call(null,t__8427,cljs.core.PersistentVector.fromArray(["?",o__8433], true));
var G__8617 = families__8428;
var G__8618 = escaping__8429;
var G__8619 = in_word__8430;
i__8423 = G__8612;
mode__8424 = G__8613;
openings__8425 = G__8614;
start__8426 = G__8615;
t__8427 = G__8616;
families__8428 = G__8617;
escaping__8429 = G__8618;
in_word__8430 = G__8619;
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
