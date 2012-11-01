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
var or__3824__auto____8176 = cljs.core._EQ_.call(null,x,"\t");
if(or__3824__auto____8176)
{return or__3824__auto____8176;
} else
{var or__3824__auto____8177 = cljs.core._EQ_.call(null,x," ");
if(or__3824__auto____8177)
{return or__3824__auto____8177;
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
var and__3822__auto____8181 = (function (){var and__3822__auto____8180 = (0 <= i);
if(and__3822__auto____8180)
{return (i <= cljs.core.count.call(null,(new cljs.core.Keyword("\uFDD0'chars")).call(null,p)));
} else
{return and__3822__auto____8180;
}
})();
if(cljs.core.truth_(and__3822__auto____8181))
{return cljs.core._EQ_.call(null,mode,subpar.paredit.get_mode.call(null,p,i));
} else
{return and__3822__auto____8181;
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
var and__3822__auto____8185 = i;
if(cljs.core.truth_(and__3822__auto____8185))
{var and__3822__auto____8186 = j;
if(cljs.core.truth_(and__3822__auto____8186))
{return (cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__8182_SHARP_){
return cljs.core._EQ_.call(null,"\n",p1__8182_SHARP_);
}),cljs.core.drop.call(null,i,cljs.core.drop_last.call(null,((cljs.core.count.call(null,s) - j) - 1),cljs.core.take.call(null,cljs.core.count.call(null,s),s))))) + 1);
} else
{return and__3822__auto____8186;
}
} else
{return and__3822__auto____8185;
}
});
/**
* whether the current spot is escaped
*/
subpar.paredit.escaped_QMARK_ = (function escaped_QMARK_(s,i){
return cljs.core.odd_QMARK_.call(null,(function (){var c__8190 = 0;
var j__8191 = (i - 1);
while(true){
var a__8192 = cljs.core.nth.call(null,s,j__8191,null);
if((j__8191 < 0))
{return c__8190;
} else
{if((a__8192 == null))
{return c__8190;
} else
{if(cljs.core.not_EQ_.call(null,"\\",a__8192))
{return c__8190;
} else
{if(true)
{{
var G__8193 = (c__8190 + 1);
var G__8194 = (j__8191 - 1);
c__8190 = G__8193;
j__8191 = G__8194;
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
var vec__8199__8200 = subpar.paredit.get_wrapper.call(null,subpar.paredit.parse.call(null,s),i);
var o__8201 = cljs.core.nth.call(null,vec__8199__8200,0,null);
var c__8202 = cljs.core.nth.call(null,vec__8199__8200,1,null);
if(cljs.core._EQ_.call(null,-1,o__8201))
{return i;
} else
{return o__8201;
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
var p__8207 = subpar.paredit.parse.call(null,s);
var h__8208 = (i - 1);
var j__8209 = (i + 1);
var c__8210 = cljs.core.nth.call(null,s,i,null);
if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,j__8209)))
{return 3;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([h__8208,i], true),subpar.paredit.get_wrapper.call(null,p__8207,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p__8207,i)))
{return 0;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([i,j__8209], true),subpar.paredit.get_wrapper.call(null,p__8207,j__8209)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null,p__8207,i)))
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
var p__8214 = subpar.paredit.parse.call(null,s);
var g__8215 = (i - 2);
var h__8216 = (i - 1);
if((i <= 0))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,h__8216)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,i)))
{return 2;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([g__8215,h__8216], true),subpar.paredit.get_wrapper.call(null,p__8214,h__8216)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p__8214,h__8216)))
{return 4;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([h__8216,i], true),subpar.paredit.get_wrapper.call(null,p__8214,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null,p__8214,h__8216)))
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
var p__8218 = subpar.paredit.parse.call(null,s);
if((i < 0))
{return 0;
} else
{if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.in_comment_QMARK_.call(null,p__8218,i)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.n_str_QMARK_.call(null,p__8218,i)))
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
var vec__8228__8229 = subpar.paredit.get_wrapper.call(null,p,i);
var o__8230 = cljs.core.nth.call(null,vec__8228__8229,0,null);
var c__8231 = cljs.core.nth.call(null,vec__8228__8229,1,null);
if(cljs.core._EQ_.call(null,-1,o__8230))
{return cljs.core.PersistentVector.EMPTY;
} else
{var start__8233 = ((function (){var or__3824__auto____8232 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.identity,p));
if(cljs.core.truth_(or__3824__auto____8232))
{return or__3824__auto____8232;
} else
{return o__8230;
}
})() + 1);
var delete__8234 = cljs.core.not_EQ_.call(null,start__8233,c__8231);
var dest__8235 = ((delete__8234)?(start__8233 + 1):(c__8231 + 1));
return cljs.core.PersistentVector.fromArray([delete__8234,start__8233,c__8231,dest__8235], true);
}
});
/**
* finds the start of the next list/string/vector/map
*/
subpar.paredit.get_start_of_next_list = (function get_start_of_next_list(s,i){
var p__8239 = subpar.paredit.parse.call(null,s);
var r__8241 = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,(function (p1__8219_SHARP_){
var and__3822__auto____8240 = (p1__8219_SHARP_ >= i);
if(and__3822__auto____8240)
{return cljs.core.get_in.call(null,p__8239,cljs.core.PersistentVector.fromArray(["\uFDD0'families",p1__8219_SHARP_], true));
} else
{return and__3822__auto____8240;
}
}),p__8239));
if((r__8241 == null))
{return false;
} else
{return r__8241;
}
});
subpar.paredit.forward_down_fn = (function forward_down_fn(s,i){
var r__8244 = subpar.paredit.get_start_of_next_list.call(null,s,i);
if(cljs.core.truth_(r__8244))
{return (r__8244 + 1);
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
var p__8250 = subpar.paredit.parse.call(null,s);
var b__8251 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,(function (p1__8242_SHARP_){
return (p1__8242_SHARP_ < i);
}),p__8250));
var o__8252 = subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p__8250,i);
var or__3824__auto____8253 = b__8251;
if(cljs.core.truth_(or__3824__auto____8253))
{return or__3824__auto____8253;
} else
{if((o__8252 < 0))
{return 0;
} else
{return o__8252;
}
}
});
/**
* paredit-backward-down
*/
subpar.paredit.backward_down_fn = (function backward_down_fn(s,i){
var p__8258 = subpar.paredit.parse.call(null,s);
var b__8260 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,(function (p1__8245_SHARP_){
var and__3822__auto____8259 = (p1__8245_SHARP_ < i);
if(and__3822__auto____8259)
{return subpar.paredit.closes_list_QMARK_.call(null,p__8258,p1__8245_SHARP_);
} else
{return and__3822__auto____8259;
}
}),p__8258));
var or__3824__auto____8261 = b__8260;
if(cljs.core.truth_(or__3824__auto____8261))
{return or__3824__auto____8261;
} else
{return i;
}
});
/**
* paredit-forward-up
*/
subpar.paredit.forward_up_fn = (function forward_up_fn(s,i){
var p__8270 = subpar.paredit.parse.call(null,s);
var vec__8269__8271 = subpar.paredit.get_wrapper.call(null,p__8270,i);
var o__8272 = cljs.core.nth.call(null,vec__8269__8271,0,null);
var c__8273 = cljs.core.nth.call(null,vec__8269__8271,1,null);
var in_list__8274 = cljs.core.not_EQ_.call(null,-1,o__8272);
if(in_list__8274)
{return (c__8273 + 1);
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
var p__8280 = subpar.paredit.parse.call(null,s);
var b__8281 = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,(function (p1__8262_SHARP_){
return (p1__8262_SHARP_ >= i);
}),p__8280));
var c__8282 = subpar.paredit.get_closing_delimiter_index_with_parse.call(null,p__8280,i);
var l__8283 = cljs.core.count.call(null,s);
if(cljs.core.truth_(b__8281))
{return (b__8281 + 1);
} else
{if(cljs.core.truth_(c__8282))
{return (((c__8282 + 1) < l__8283) ? (c__8282 + 1) : l__8283);
} else
{if(true)
{return l__8283;
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
var p__8298 = subpar.paredit.parse.call(null,s);
var vec__8297__8299 = subpar.paredit.get_wrapper.call(null,p__8298,i);
var o__8300 = cljs.core.nth.call(null,vec__8297__8299,0,null);
var c__8301 = cljs.core.nth.call(null,vec__8297__8299,1,null);
var in_list__8302 = cljs.core.not_EQ_.call(null,-1,o__8300);
var a__8304 = (function (){var and__3822__auto____8303 = in_list__8302;
if(and__3822__auto____8303)
{return cljs.core.nth.call(null,s,c__8301,false);
} else
{return and__3822__auto____8303;
}
})();
var d__8306 = (function (){var and__3822__auto____8305 = in_list__8302;
if(and__3822__auto____8305)
{return cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,o__8300,cljs.core.vals,(function (p1__8275_SHARP_){
return (p1__8275_SHARP_ > c__8301);
}),p__8298));
} else
{return and__3822__auto____8305;
}
})();
if(cljs.core.truth_((function (){var and__3822__auto____8307 = a__8304;
if(cljs.core.truth_(and__3822__auto____8307))
{var and__3822__auto____8308 = c__8301;
if(cljs.core.truth_(and__3822__auto____8308))
{return d__8306;
} else
{return and__3822__auto____8308;
}
} else
{return and__3822__auto____8307;
}
})()))
{return cljs.core.PersistentVector.fromArray([a__8304,c__8301,(d__8306 + 1),subpar.paredit.count_lines.call(null,s,o__8300,(d__8306 + 1))], true);
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
var p__8321 = subpar.paredit.parse.call(null,s);
var vec__8320__8322 = subpar.paredit.get_wrapper.call(null,p__8321,i);
var o__8323 = cljs.core.nth.call(null,vec__8320__8322,0,null);
var c__8324 = cljs.core.nth.call(null,vec__8320__8322,1,null);
var in_list__8325 = cljs.core.not_EQ_.call(null,-1,o__8323);
var d__8327 = (function (){var and__3822__auto____8326 = in_list__8325;
if(and__3822__auto____8326)
{return cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,o__8323,cljs.core.keys,(function (p1__8284_SHARP_){
return (p1__8284_SHARP_ < o__8323);
}),p__8321));
} else
{return and__3822__auto____8326;
}
})();
var a__8329 = (function (){var and__3822__auto____8328 = in_list__8325;
if(and__3822__auto____8328)
{return cljs.core.nth.call(null,s,o__8323,false);
} else
{return and__3822__auto____8328;
}
})();
if(cljs.core.truth_((function (){var and__3822__auto____8330 = a__8329;
if(cljs.core.truth_(and__3822__auto____8330))
{return d__8327;
} else
{return and__3822__auto____8330;
}
})()))
{return cljs.core.PersistentVector.fromArray([a__8329,o__8323,d__8327,subpar.paredit.count_lines.call(null,s,d__8327,c__8324)], true);
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
var p__8346 = subpar.paredit.parse.call(null,s);
var vec__8345__8347 = subpar.paredit.get_wrapper.call(null,p__8346,i);
var o__8348 = cljs.core.nth.call(null,vec__8345__8347,0,null);
var c__8349 = cljs.core.nth.call(null,vec__8345__8347,1,null);
var in_list__8350 = cljs.core.not_EQ_.call(null,-1,o__8348);
var endings__8352 = (function (){var and__3822__auto____8351 = in_list__8350;
if(and__3822__auto____8351)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.constantly.call(null,true),p__8346);
} else
{return and__3822__auto____8351;
}
})();
var a__8355 = (function (){var and__3822__auto____8353 = c__8349;
if(cljs.core.truth_(and__3822__auto____8353))
{var and__3822__auto____8354 = in_list__8350;
if(and__3822__auto____8354)
{return cljs.core.nth.call(null,s,c__8349,null);
} else
{return and__3822__auto____8354;
}
} else
{return and__3822__auto____8353;
}
})();
var r__8357 = (function (){var or__3824__auto____8356 = subpar.paredit.count_lines.call(null,s,o__8348,c__8349);
if(cljs.core.truth_(or__3824__auto____8356))
{return or__3824__auto____8356;
} else
{return 1;
}
})();
var num__8358 = (cljs.core.truth_(endings__8352)?cljs.core.count.call(null,endings__8352):0);
if((num__8358 > 1))
{return cljs.core.PersistentVector.fromArray([a__8355,c__8349,(cljs.core.nth.call(null,endings__8352,(num__8358 - 2)) + 1),false,r__8357,o__8348], true);
} else
{if(cljs.core._EQ_.call(null,num__8358,1))
{return cljs.core.PersistentVector.fromArray([a__8355,c__8349,(o__8348 + 1),true,r__8357,o__8348], true);
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
var p__8374 = subpar.paredit.parse.call(null,s);
var vec__8373__8375 = subpar.paredit.get_wrapper.call(null,p__8374,i);
var o__8376 = cljs.core.nth.call(null,vec__8373__8375,0,null);
var c__8377 = cljs.core.nth.call(null,vec__8373__8375,1,null);
var in_list__8378 = cljs.core.not_EQ_.call(null,-1,o__8376);
var starts__8380 = (function (){var and__3822__auto____8379 = in_list__8378;
if(and__3822__auto____8379)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.keys,cljs.core.constantly.call(null,true),p__8374);
} else
{return and__3822__auto____8379;
}
})();
var a__8383 = (function (){var and__3822__auto____8381 = o__8376;
if(cljs.core.truth_(and__3822__auto____8381))
{var and__3822__auto____8382 = in_list__8378;
if(and__3822__auto____8382)
{return cljs.core.nth.call(null,s,o__8376,null);
} else
{return and__3822__auto____8382;
}
} else
{return and__3822__auto____8381;
}
})();
var r__8385 = (function (){var or__3824__auto____8384 = subpar.paredit.count_lines.call(null,s,o__8376,c__8377);
if(cljs.core.truth_(or__3824__auto____8384))
{return or__3824__auto____8384;
} else
{return 1;
}
})();
var num__8386 = (cljs.core.truth_(starts__8380)?cljs.core.count.call(null,starts__8380):0);
if((num__8386 > 1))
{return cljs.core.PersistentVector.fromArray([a__8383,o__8376,cljs.core.second.call(null,starts__8380),false,r__8385], true);
} else
{if(cljs.core._EQ_.call(null,num__8386,1))
{return cljs.core.PersistentVector.fromArray([a__8383,o__8376,c__8377,true,r__8385], true);
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
var p__8399 = subpar.paredit.parse.call(null,s);
var vec__8398__8400 = subpar.paredit.get_wrapper.call(null,p__8399,i);
var o__8401 = cljs.core.nth.call(null,vec__8398__8400,0,null);
var c__8402 = cljs.core.nth.call(null,vec__8398__8400,1,null);
var in_list__8403 = cljs.core.not_EQ_.call(null,-1,o__8401);
if(in_list__8403)
{var vec__8404__8405 = subpar.paredit.get_wrapper.call(null,p__8399,o__8401);
var n__8406 = cljs.core.nth.call(null,vec__8404__8405,0,null);
var d__8407 = cljs.core.nth.call(null,vec__8404__8405,1,null);
var r__8408 = subpar.paredit.count_lines.call(null,s,n__8406,d__8407);
return cljs.core.PersistentVector.fromArray([o__8401,c__8402,((0 > n__8406) ? 0 : n__8406),r__8408], true);
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
var p__8421 = subpar.paredit.parse.call(null,s);
var vec__8420__8422 = subpar.paredit.get_wrapper.call(null,p__8421,i);
var o__8423 = cljs.core.nth.call(null,vec__8420__8422,0,null);
var c__8424 = cljs.core.nth.call(null,vec__8420__8422,1,null);
var in_list__8425 = cljs.core.not_EQ_.call(null,-1,o__8423);
if(in_list__8425)
{var vec__8426__8427 = subpar.paredit.get_wrapper.call(null,p__8421,o__8423);
var n__8428 = cljs.core.nth.call(null,vec__8426__8427,0,null);
var d__8429 = cljs.core.nth.call(null,vec__8426__8427,1,null);
var r__8430 = subpar.paredit.count_lines.call(null,s,n__8428,d__8429);
return cljs.core.PersistentVector.fromArray([o__8423,((o__8423 > i) ? o__8423 : i),c__8424,((0 > n__8428) ? 0 : n__8428),r__8430], true);
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
var p__8443 = subpar.paredit.parse.call(null,s);
var vec__8442__8444 = subpar.paredit.get_wrapper.call(null,p__8443,i);
var o__8445 = cljs.core.nth.call(null,vec__8442__8444,0,null);
var c__8446 = cljs.core.nth.call(null,vec__8442__8444,1,null);
var in_list__8447 = cljs.core.not_EQ_.call(null,-1,o__8445);
if(in_list__8447)
{var vec__8448__8449 = subpar.paredit.get_wrapper.call(null,p__8443,o__8445);
var n__8450 = cljs.core.nth.call(null,vec__8448__8449,0,null);
var d__8451 = cljs.core.nth.call(null,vec__8448__8449,1,null);
var r__8452 = subpar.paredit.count_lines.call(null,s,n__8450,d__8451);
return cljs.core.PersistentVector.fromArray([o__8445,i,(c__8446 + 1),((0 > n__8450) ? 0 : n__8450),r__8452], true);
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
var s__8491 = [cljs.core.str(ss),cljs.core.str(" ")].join('');
var i__8492 = 0;
var mode__8493 = subpar.paredit.code;
var openings__8494 = cljs.core.list.call(null,-1);
var start__8495 = -1;
var t__8496 = cljs.core.PersistentVector.EMPTY;
var families__8497 = cljs.core.PersistentArrayMap.fromArrays([-1],[cljs.core.ObjMap.fromObject(["\uFDD0'children"],{"\uFDD0'children":cljs.core.ObjMap.EMPTY})]);
var escaping__8498 = false;
var in_word__8499 = false;
while(true){
var a__8500 = cljs.core.nth.call(null,s__8491,i__8492,null);
var j__8501 = (i__8492 + 1);
var o__8502 = cljs.core.peek.call(null,openings__8494);
if(cljs.core.truth_((function (){var and__3822__auto____8503 = (a__8500 == null);
if(and__3822__auto____8503)
{return in_word__8499;
} else
{return and__3822__auto____8503;
}
})()))
{return cljs.core.ObjMap.fromObject(["\uFDD0'chars","\uFDD0'families"],{"\uFDD0'chars":t__8496,"\uFDD0'families":cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8497,cljs.core.PersistentVector.fromArray([-1,"\uFDD0'closer"], true),(i__8492 - 1)),cljs.core.PersistentVector.fromArray([-1,"\uFDD0'children",start__8495], true),(i__8492 - 1))});
} else
{if((a__8500 == null))
{return cljs.core.ObjMap.fromObject(["\uFDD0'chars","\uFDD0'families"],{"\uFDD0'chars":t__8496,"\uFDD0'families":cljs.core.assoc_in.call(null,families__8497,cljs.core.PersistentVector.fromArray([-1,"\uFDD0'closer"], true),(i__8492 - 1))});
} else
{if((function (){var and__3822__auto____8504 = cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode__8493);
if(and__3822__auto____8504)
{var and__3822__auto____8505 = cljs.core._EQ_.call(null,"\\",a__8500);
if(and__3822__auto____8505)
{var and__3822__auto____8506 = cljs.core.not.call(null,escaping__8498);
if(and__3822__auto____8506)
{return cljs.core.not.call(null,in_word__8499);
} else
{return and__3822__auto____8506;
}
} else
{return and__3822__auto____8505;
}
} else
{return and__3822__auto____8504;
}
})())
{{
var G__8529 = j__8501;
var G__8530 = mode__8493;
var G__8531 = openings__8494;
var G__8532 = i__8492;
var G__8533 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8534 = cljs.core.assoc_in.call(null,families__8497,cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'children",i__8492], true),j__8501);
var G__8535 = true;
var G__8536 = true;
i__8492 = G__8529;
mode__8493 = G__8530;
openings__8494 = G__8531;
start__8495 = G__8532;
t__8496 = G__8533;
families__8497 = G__8534;
escaping__8498 = G__8535;
in_word__8499 = G__8536;
continue;
}
} else
{if((function (){var and__3822__auto____8507 = cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode__8493);
if(and__3822__auto____8507)
{var and__3822__auto____8508 = cljs.core._EQ_.call(null,"\\",a__8500);
if(and__3822__auto____8508)
{return cljs.core.not.call(null,escaping__8498);
} else
{return and__3822__auto____8508;
}
} else
{return and__3822__auto____8507;
}
})())
{{
var G__8537 = j__8501;
var G__8538 = mode__8493;
var G__8539 = openings__8494;
var G__8540 = i__8492;
var G__8541 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8542 = families__8497;
var G__8543 = true;
var G__8544 = true;
i__8492 = G__8537;
mode__8493 = G__8538;
openings__8494 = G__8539;
start__8495 = G__8540;
t__8496 = G__8541;
families__8497 = G__8542;
escaping__8498 = G__8543;
in_word__8499 = G__8544;
continue;
}
} else
{if((function (){var and__3822__auto____8509 = cljs.core._EQ_.call(null,subpar.paredit.code,mode__8493);
if(and__3822__auto____8509)
{var and__3822__auto____8510 = cljs.core._EQ_.call(null,";",a__8500);
if(and__3822__auto____8510)
{return cljs.core.not.call(null,escaping__8498);
} else
{return and__3822__auto____8510;
}
} else
{return and__3822__auto____8509;
}
})())
{{
var G__8545 = j__8501;
var G__8546 = subpar.paredit.cmmnt;
var G__8547 = openings__8494;
var G__8548 = start__8495;
var G__8549 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8550 = families__8497;
var G__8551 = false;
var G__8552 = false;
i__8492 = G__8545;
mode__8493 = G__8546;
openings__8494 = G__8547;
start__8495 = G__8548;
t__8496 = G__8549;
families__8497 = G__8550;
escaping__8498 = G__8551;
in_word__8499 = G__8552;
continue;
}
} else
{if((function (){var and__3822__auto____8511 = cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode__8493);
if(and__3822__auto____8511)
{return cljs.core._EQ_.call(null,"\n",a__8500);
} else
{return and__3822__auto____8511;
}
})())
{{
var G__8553 = j__8501;
var G__8554 = subpar.paredit.code;
var G__8555 = openings__8494;
var G__8556 = start__8495;
var G__8557 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8558 = families__8497;
var G__8559 = false;
var G__8560 = false;
i__8492 = G__8553;
mode__8493 = G__8554;
openings__8494 = G__8555;
start__8495 = G__8556;
t__8496 = G__8557;
families__8497 = G__8558;
escaping__8498 = G__8559;
in_word__8499 = G__8560;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode__8493))
{{
var G__8561 = j__8501;
var G__8562 = subpar.paredit.cmmnt;
var G__8563 = openings__8494;
var G__8564 = start__8495;
var G__8565 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8566 = families__8497;
var G__8567 = false;
var G__8568 = false;
i__8492 = G__8561;
mode__8493 = G__8562;
openings__8494 = G__8563;
start__8495 = G__8564;
t__8496 = G__8565;
families__8497 = G__8566;
escaping__8498 = G__8567;
in_word__8499 = G__8568;
continue;
}
} else
{if((function (){var and__3822__auto____8512 = cljs.core._EQ_.call(null,subpar.paredit.code,mode__8493);
if(and__3822__auto____8512)
{var and__3822__auto____8513 = cljs.core._EQ_.call(null,"\"",a__8500);
if(and__3822__auto____8513)
{return cljs.core.not.call(null,escaping__8498);
} else
{return and__3822__auto____8513;
}
} else
{return and__3822__auto____8512;
}
})())
{{
var G__8569 = j__8501;
var G__8570 = subpar.paredit.string;
var G__8571 = cljs.core.conj.call(null,openings__8494,i__8492);
var G__8572 = -1;
var G__8573 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8574 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8497,cljs.core.PersistentVector.fromArray([i__8492,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY),cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'children",i__8492], true),j__8501);
var G__8575 = false;
var G__8576 = false;
i__8492 = G__8569;
mode__8493 = G__8570;
openings__8494 = G__8571;
start__8495 = G__8572;
t__8496 = G__8573;
families__8497 = G__8574;
escaping__8498 = G__8575;
in_word__8499 = G__8576;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8514 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8493);
if(and__3822__auto____8514)
{var and__3822__auto____8515 = cljs.core._EQ_.call(null,"\"",a__8500);
if(and__3822__auto____8515)
{var and__3822__auto____8516 = cljs.core.not.call(null,escaping__8498);
if(and__3822__auto____8516)
{return in_word__8499;
} else
{return and__3822__auto____8516;
}
} else
{return and__3822__auto____8515;
}
} else
{return and__3822__auto____8514;
}
})()))
{{
var G__8577 = j__8501;
var G__8578 = subpar.paredit.code;
var G__8579 = cljs.core.pop.call(null,openings__8494);
var G__8580 = -1;
var G__8581 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8582 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8497,cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'closer"], true),i__8492),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8494),"\uFDD0'children",o__8502], true),i__8492),cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'children",start__8495], true),(i__8492 - 1));
var G__8583 = false;
var G__8584 = false;
i__8492 = G__8577;
mode__8493 = G__8578;
openings__8494 = G__8579;
start__8495 = G__8580;
t__8496 = G__8581;
families__8497 = G__8582;
escaping__8498 = G__8583;
in_word__8499 = G__8584;
continue;
}
} else
{if((function (){var and__3822__auto____8517 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8493);
if(and__3822__auto____8517)
{var and__3822__auto____8518 = cljs.core._EQ_.call(null,"\"",a__8500);
if(and__3822__auto____8518)
{return cljs.core.not.call(null,escaping__8498);
} else
{return and__3822__auto____8518;
}
} else
{return and__3822__auto____8517;
}
})())
{{
var G__8585 = j__8501;
var G__8586 = subpar.paredit.code;
var G__8587 = cljs.core.pop.call(null,openings__8494);
var G__8588 = -1;
var G__8589 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8590 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8497,cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'closer"], true),i__8492),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8494),"\uFDD0'children",o__8502], true),i__8492);
var G__8591 = false;
var G__8592 = false;
i__8492 = G__8585;
mode__8493 = G__8586;
openings__8494 = G__8587;
start__8495 = G__8588;
t__8496 = G__8589;
families__8497 = G__8590;
escaping__8498 = G__8591;
in_word__8499 = G__8592;
continue;
}
} else
{if((function (){var and__3822__auto____8519 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8493);
if(and__3822__auto____8519)
{var and__3822__auto____8520 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8500));
if(and__3822__auto____8520)
{return cljs.core.not.call(null,in_word__8499);
} else
{return and__3822__auto____8520;
}
} else
{return and__3822__auto____8519;
}
})())
{{
var G__8593 = j__8501;
var G__8594 = subpar.paredit.string;
var G__8595 = openings__8494;
var G__8596 = i__8492;
var G__8597 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8598 = cljs.core.assoc_in.call(null,families__8497,cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'children",i__8492], true),i__8492);
var G__8599 = false;
var G__8600 = true;
i__8492 = G__8593;
mode__8493 = G__8594;
openings__8494 = G__8595;
start__8495 = G__8596;
t__8496 = G__8597;
families__8497 = G__8598;
escaping__8498 = G__8599;
in_word__8499 = G__8600;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8521 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8493);
if(and__3822__auto____8521)
{var and__3822__auto____8522 = subpar.paredit.whitespace_QMARK_.call(null,a__8500);
if(cljs.core.truth_(and__3822__auto____8522))
{return in_word__8499;
} else
{return and__3822__auto____8522;
}
} else
{return and__3822__auto____8521;
}
})()))
{{
var G__8601 = j__8501;
var G__8602 = subpar.paredit.string;
var G__8603 = openings__8494;
var G__8604 = -1;
var G__8605 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8606 = cljs.core.assoc_in.call(null,families__8497,cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'children",start__8495], true),(i__8492 - 1));
var G__8607 = false;
var G__8608 = false;
i__8492 = G__8601;
mode__8493 = G__8602;
openings__8494 = G__8603;
start__8495 = G__8604;
t__8496 = G__8605;
families__8497 = G__8606;
escaping__8498 = G__8607;
in_word__8499 = G__8608;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.string,mode__8493))
{{
var G__8609 = j__8501;
var G__8610 = subpar.paredit.string;
var G__8611 = openings__8494;
var G__8612 = start__8495;
var G__8613 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8614 = families__8497;
var G__8615 = false;
var G__8616 = in_word__8499;
i__8492 = G__8609;
mode__8493 = G__8610;
openings__8494 = G__8611;
start__8495 = G__8612;
t__8496 = G__8613;
families__8497 = G__8614;
escaping__8498 = G__8615;
in_word__8499 = G__8616;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8523 = subpar.paredit.opener_QMARK_.call(null,a__8500);
if(cljs.core.truth_(and__3822__auto____8523))
{return in_word__8499;
} else
{return and__3822__auto____8523;
}
})()))
{{
var G__8617 = j__8501;
var G__8618 = subpar.paredit.code;
var G__8619 = cljs.core.conj.call(null,openings__8494,i__8492);
var G__8620 = -1;
var G__8621 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8622 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8497,cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'children",start__8495], true),(i__8492 - 1)),cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'children",i__8492], true),i__8492),cljs.core.PersistentVector.fromArray([i__8492,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY);
var G__8623 = false;
var G__8624 = false;
i__8492 = G__8617;
mode__8493 = G__8618;
openings__8494 = G__8619;
start__8495 = G__8620;
t__8496 = G__8621;
families__8497 = G__8622;
escaping__8498 = G__8623;
in_word__8499 = G__8624;
continue;
}
} else
{if(cljs.core.truth_(subpar.paredit.opener_QMARK_.call(null,a__8500)))
{{
var G__8625 = j__8501;
var G__8626 = subpar.paredit.code;
var G__8627 = cljs.core.conj.call(null,openings__8494,i__8492);
var G__8628 = -1;
var G__8629 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8630 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8497,cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'children",i__8492], true),i__8492),cljs.core.PersistentVector.fromArray([i__8492,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY);
var G__8631 = false;
var G__8632 = false;
i__8492 = G__8625;
mode__8493 = G__8626;
openings__8494 = G__8627;
start__8495 = G__8628;
t__8496 = G__8629;
families__8497 = G__8630;
escaping__8498 = G__8631;
in_word__8499 = G__8632;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8524 = subpar.paredit.closer_QMARK_.call(null,a__8500);
if(cljs.core.truth_(and__3822__auto____8524))
{return in_word__8499;
} else
{return and__3822__auto____8524;
}
})()))
{{
var G__8633 = j__8501;
var G__8634 = subpar.paredit.code;
var G__8635 = cljs.core.pop.call(null,openings__8494);
var G__8636 = -1;
var G__8637 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8638 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8497,cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'children",start__8495], true),(i__8492 - 1)),cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'closer"], true),i__8492),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8494),"\uFDD0'children",o__8502], true),i__8492);
var G__8639 = false;
var G__8640 = false;
i__8492 = G__8633;
mode__8493 = G__8634;
openings__8494 = G__8635;
start__8495 = G__8636;
t__8496 = G__8637;
families__8497 = G__8638;
escaping__8498 = G__8639;
in_word__8499 = G__8640;
continue;
}
} else
{if(cljs.core.truth_(subpar.paredit.closer_QMARK_.call(null,a__8500)))
{{
var G__8641 = j__8501;
var G__8642 = subpar.paredit.code;
var G__8643 = cljs.core.pop.call(null,openings__8494);
var G__8644 = -1;
var G__8645 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8646 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8497,cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'closer"], true),i__8492),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8494),"\uFDD0'children",o__8502], true),i__8492);
var G__8647 = false;
var G__8648 = false;
i__8492 = G__8641;
mode__8493 = G__8642;
openings__8494 = G__8643;
start__8495 = G__8644;
t__8496 = G__8645;
families__8497 = G__8646;
escaping__8498 = G__8647;
in_word__8499 = G__8648;
continue;
}
} else
{if((function (){var and__3822__auto____8525 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8500));
if(and__3822__auto____8525)
{return cljs.core.not.call(null,in_word__8499);
} else
{return and__3822__auto____8525;
}
})())
{{
var G__8649 = j__8501;
var G__8650 = subpar.paredit.code;
var G__8651 = openings__8494;
var G__8652 = i__8492;
var G__8653 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8654 = cljs.core.assoc_in.call(null,families__8497,cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'children",i__8492], true),i__8492);
var G__8655 = false;
var G__8656 = true;
i__8492 = G__8649;
mode__8493 = G__8650;
openings__8494 = G__8651;
start__8495 = G__8652;
t__8496 = G__8653;
families__8497 = G__8654;
escaping__8498 = G__8655;
in_word__8499 = G__8656;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8526 = subpar.paredit.whitespace_QMARK_.call(null,a__8500);
if(cljs.core.truth_(and__3822__auto____8526))
{return in_word__8499;
} else
{return and__3822__auto____8526;
}
})()))
{{
var G__8657 = j__8501;
var G__8658 = subpar.paredit.code;
var G__8659 = openings__8494;
var G__8660 = -1;
var G__8661 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8662 = cljs.core.assoc_in.call(null,families__8497,cljs.core.PersistentVector.fromArray([o__8502,"\uFDD0'children",start__8495], true),(i__8492 - 1));
var G__8663 = false;
var G__8664 = false;
i__8492 = G__8657;
mode__8493 = G__8658;
openings__8494 = G__8659;
start__8495 = G__8660;
t__8496 = G__8661;
families__8497 = G__8662;
escaping__8498 = G__8663;
in_word__8499 = G__8664;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8527 = subpar.paredit.whitespace_QMARK_.call(null,a__8500);
if(cljs.core.truth_(and__3822__auto____8527))
{return cljs.core.not.call(null,in_word__8499);
} else
{return and__3822__auto____8527;
}
})()))
{{
var G__8665 = j__8501;
var G__8666 = subpar.paredit.code;
var G__8667 = openings__8494;
var G__8668 = -1;
var G__8669 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8670 = families__8497;
var G__8671 = false;
var G__8672 = false;
i__8492 = G__8665;
mode__8493 = G__8666;
openings__8494 = G__8667;
start__8495 = G__8668;
t__8496 = G__8669;
families__8497 = G__8670;
escaping__8498 = G__8671;
in_word__8499 = G__8672;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8528 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8500));
if(and__3822__auto____8528)
{return in_word__8499;
} else
{return and__3822__auto____8528;
}
})()))
{{
var G__8673 = j__8501;
var G__8674 = subpar.paredit.code;
var G__8675 = openings__8494;
var G__8676 = start__8495;
var G__8677 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray([mode__8493,o__8502], true));
var G__8678 = families__8497;
var G__8679 = false;
var G__8680 = true;
i__8492 = G__8673;
mode__8493 = G__8674;
openings__8494 = G__8675;
start__8495 = G__8676;
t__8496 = G__8677;
families__8497 = G__8678;
escaping__8498 = G__8679;
in_word__8499 = G__8680;
continue;
}
} else
{if("\uFDD0'default")
{{
var G__8681 = j__8501;
var G__8682 = subpar.paredit.code;
var G__8683 = openings__8494;
var G__8684 = start__8495;
var G__8685 = cljs.core.conj.call(null,t__8496,cljs.core.PersistentVector.fromArray(["?",o__8502], true));
var G__8686 = families__8497;
var G__8687 = escaping__8498;
var G__8688 = in_word__8499;
i__8492 = G__8681;
mode__8493 = G__8682;
openings__8494 = G__8683;
start__8495 = G__8684;
t__8496 = G__8685;
families__8497 = G__8686;
escaping__8498 = G__8687;
in_word__8499 = G__8688;
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
