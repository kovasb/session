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
var or__3824__auto____8175 = cljs.core._EQ_.call(null,x,"\t");
if(or__3824__auto____8175)
{return or__3824__auto____8175;
} else
{var or__3824__auto____8176 = cljs.core._EQ_.call(null,x," ");
if(or__3824__auto____8176)
{return or__3824__auto____8176;
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
var and__3822__auto____8180 = (function (){var and__3822__auto____8179 = (0 <= i);
if(and__3822__auto____8179)
{return (i <= cljs.core.count.call(null,(new cljs.core.Keyword("\uFDD0'chars")).call(null,p)));
} else
{return and__3822__auto____8179;
}
})();
if(cljs.core.truth_(and__3822__auto____8180))
{return cljs.core._EQ_.call(null,mode,subpar.paredit.get_mode.call(null,p,i));
} else
{return and__3822__auto____8180;
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
var and__3822__auto____8184 = i;
if(cljs.core.truth_(and__3822__auto____8184))
{var and__3822__auto____8185 = j;
if(cljs.core.truth_(and__3822__auto____8185))
{return (cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__8181_SHARP_){
return cljs.core._EQ_.call(null,"\n",p1__8181_SHARP_);
}),cljs.core.drop.call(null,i,cljs.core.drop_last.call(null,((cljs.core.count.call(null,s) - j) - 1),cljs.core.take.call(null,cljs.core.count.call(null,s),s))))) + 1);
} else
{return and__3822__auto____8185;
}
} else
{return and__3822__auto____8184;
}
});
/**
* whether the current spot is escaped
*/
subpar.paredit.escaped_QMARK_ = (function escaped_QMARK_(s,i){
return cljs.core.odd_QMARK_.call(null,(function (){var c__8189 = 0;
var j__8190 = (i - 1);
while(true){
var a__8191 = cljs.core.nth.call(null,s,j__8190,null);
if((j__8190 < 0))
{return c__8189;
} else
{if((a__8191 == null))
{return c__8189;
} else
{if(cljs.core.not_EQ_.call(null,"\\",a__8191))
{return c__8189;
} else
{if(true)
{{
var G__8192 = (c__8189 + 1);
var G__8193 = (j__8190 - 1);
c__8189 = G__8192;
j__8190 = G__8193;
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
var vec__8198__8199 = subpar.paredit.get_wrapper.call(null,subpar.paredit.parse.call(null,s),i);
var o__8200 = cljs.core.nth.call(null,vec__8198__8199,0,null);
var c__8201 = cljs.core.nth.call(null,vec__8198__8199,1,null);
if(cljs.core._EQ_.call(null,-1,o__8200))
{return i;
} else
{return o__8200;
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
var p__8206 = subpar.paredit.parse.call(null,s);
var h__8207 = (i - 1);
var j__8208 = (i + 1);
var c__8209 = cljs.core.nth.call(null,s,i,null);
if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,j__8208)))
{return 3;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([h__8207,i], true),subpar.paredit.get_wrapper.call(null,p__8206,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p__8206,i)))
{return 0;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([i,j__8208], true),subpar.paredit.get_wrapper.call(null,p__8206,j__8208)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null,p__8206,i)))
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
var p__8213 = subpar.paredit.parse.call(null,s);
var g__8214 = (i - 2);
var h__8215 = (i - 1);
if((i <= 0))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,h__8215)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,i)))
{return 2;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([g__8214,h__8215], true),subpar.paredit.get_wrapper.call(null,p__8213,h__8215)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p__8213,h__8215)))
{return 4;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([h__8215,i], true),subpar.paredit.get_wrapper.call(null,p__8213,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null,p__8213,h__8215)))
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
var p__8217 = subpar.paredit.parse.call(null,s);
if((i < 0))
{return 0;
} else
{if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.in_comment_QMARK_.call(null,p__8217,i)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.n_str_QMARK_.call(null,p__8217,i)))
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
var vec__8227__8228 = subpar.paredit.get_wrapper.call(null,p,i);
var o__8229 = cljs.core.nth.call(null,vec__8227__8228,0,null);
var c__8230 = cljs.core.nth.call(null,vec__8227__8228,1,null);
if(cljs.core._EQ_.call(null,-1,o__8229))
{return cljs.core.PersistentVector.EMPTY;
} else
{var start__8232 = ((function (){var or__3824__auto____8231 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.identity,p));
if(cljs.core.truth_(or__3824__auto____8231))
{return or__3824__auto____8231;
} else
{return o__8229;
}
})() + 1);
var delete__8233 = cljs.core.not_EQ_.call(null,start__8232,c__8230);
var dest__8234 = ((delete__8233)?(start__8232 + 1):(c__8230 + 1));
return cljs.core.PersistentVector.fromArray([delete__8233,start__8232,c__8230,dest__8234], true);
}
});
/**
* finds the start of the next list/string/vector/map
*/
subpar.paredit.get_start_of_next_list = (function get_start_of_next_list(s,i){
var p__8238 = subpar.paredit.parse.call(null,s);
var r__8240 = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,(function (p1__8218_SHARP_){
var and__3822__auto____8239 = (p1__8218_SHARP_ >= i);
if(and__3822__auto____8239)
{return cljs.core.get_in.call(null,p__8238,cljs.core.PersistentVector.fromArray(["\uFDD0'families",p1__8218_SHARP_], true));
} else
{return and__3822__auto____8239;
}
}),p__8238));
if((r__8240 == null))
{return false;
} else
{return r__8240;
}
});
subpar.paredit.forward_down_fn = (function forward_down_fn(s,i){
var r__8243 = subpar.paredit.get_start_of_next_list.call(null,s,i);
if(cljs.core.truth_(r__8243))
{return (r__8243 + 1);
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
var p__8249 = subpar.paredit.parse.call(null,s);
var b__8250 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,(function (p1__8241_SHARP_){
return (p1__8241_SHARP_ < i);
}),p__8249));
var o__8251 = subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p__8249,i);
var or__3824__auto____8252 = b__8250;
if(cljs.core.truth_(or__3824__auto____8252))
{return or__3824__auto____8252;
} else
{if((o__8251 < 0))
{return 0;
} else
{return o__8251;
}
}
});
/**
* paredit-backward-down
*/
subpar.paredit.backward_down_fn = (function backward_down_fn(s,i){
var p__8257 = subpar.paredit.parse.call(null,s);
var b__8259 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,(function (p1__8244_SHARP_){
var and__3822__auto____8258 = (p1__8244_SHARP_ < i);
if(and__3822__auto____8258)
{return subpar.paredit.closes_list_QMARK_.call(null,p__8257,p1__8244_SHARP_);
} else
{return and__3822__auto____8258;
}
}),p__8257));
var or__3824__auto____8260 = b__8259;
if(cljs.core.truth_(or__3824__auto____8260))
{return or__3824__auto____8260;
} else
{return i;
}
});
/**
* paredit-forward-up
*/
subpar.paredit.forward_up_fn = (function forward_up_fn(s,i){
var p__8269 = subpar.paredit.parse.call(null,s);
var vec__8268__8270 = subpar.paredit.get_wrapper.call(null,p__8269,i);
var o__8271 = cljs.core.nth.call(null,vec__8268__8270,0,null);
var c__8272 = cljs.core.nth.call(null,vec__8268__8270,1,null);
var in_list__8273 = cljs.core.not_EQ_.call(null,-1,o__8271);
if(in_list__8273)
{return (c__8272 + 1);
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
var p__8279 = subpar.paredit.parse.call(null,s);
var b__8280 = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,(function (p1__8261_SHARP_){
return (p1__8261_SHARP_ >= i);
}),p__8279));
var c__8281 = subpar.paredit.get_closing_delimiter_index_with_parse.call(null,p__8279,i);
var l__8282 = cljs.core.count.call(null,s);
if(cljs.core.truth_(b__8280))
{return (b__8280 + 1);
} else
{if(cljs.core.truth_(c__8281))
{return (((c__8281 + 1) < l__8282) ? (c__8281 + 1) : l__8282);
} else
{if(true)
{return l__8282;
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
var p__8297 = subpar.paredit.parse.call(null,s);
var vec__8296__8298 = subpar.paredit.get_wrapper.call(null,p__8297,i);
var o__8299 = cljs.core.nth.call(null,vec__8296__8298,0,null);
var c__8300 = cljs.core.nth.call(null,vec__8296__8298,1,null);
var in_list__8301 = cljs.core.not_EQ_.call(null,-1,o__8299);
var a__8303 = (function (){var and__3822__auto____8302 = in_list__8301;
if(and__3822__auto____8302)
{return cljs.core.nth.call(null,s,c__8300,false);
} else
{return and__3822__auto____8302;
}
})();
var d__8305 = (function (){var and__3822__auto____8304 = in_list__8301;
if(and__3822__auto____8304)
{return cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,o__8299,cljs.core.vals,(function (p1__8274_SHARP_){
return (p1__8274_SHARP_ > c__8300);
}),p__8297));
} else
{return and__3822__auto____8304;
}
})();
if(cljs.core.truth_((function (){var and__3822__auto____8306 = a__8303;
if(cljs.core.truth_(and__3822__auto____8306))
{var and__3822__auto____8307 = c__8300;
if(cljs.core.truth_(and__3822__auto____8307))
{return d__8305;
} else
{return and__3822__auto____8307;
}
} else
{return and__3822__auto____8306;
}
})()))
{return cljs.core.PersistentVector.fromArray([a__8303,c__8300,(d__8305 + 1),subpar.paredit.count_lines.call(null,s,o__8299,(d__8305 + 1))], true);
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
var p__8320 = subpar.paredit.parse.call(null,s);
var vec__8319__8321 = subpar.paredit.get_wrapper.call(null,p__8320,i);
var o__8322 = cljs.core.nth.call(null,vec__8319__8321,0,null);
var c__8323 = cljs.core.nth.call(null,vec__8319__8321,1,null);
var in_list__8324 = cljs.core.not_EQ_.call(null,-1,o__8322);
var d__8326 = (function (){var and__3822__auto____8325 = in_list__8324;
if(and__3822__auto____8325)
{return cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,o__8322,cljs.core.keys,(function (p1__8283_SHARP_){
return (p1__8283_SHARP_ < o__8322);
}),p__8320));
} else
{return and__3822__auto____8325;
}
})();
var a__8328 = (function (){var and__3822__auto____8327 = in_list__8324;
if(and__3822__auto____8327)
{return cljs.core.nth.call(null,s,o__8322,false);
} else
{return and__3822__auto____8327;
}
})();
if(cljs.core.truth_((function (){var and__3822__auto____8329 = a__8328;
if(cljs.core.truth_(and__3822__auto____8329))
{return d__8326;
} else
{return and__3822__auto____8329;
}
})()))
{return cljs.core.PersistentVector.fromArray([a__8328,o__8322,d__8326,subpar.paredit.count_lines.call(null,s,d__8326,c__8323)], true);
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
var p__8345 = subpar.paredit.parse.call(null,s);
var vec__8344__8346 = subpar.paredit.get_wrapper.call(null,p__8345,i);
var o__8347 = cljs.core.nth.call(null,vec__8344__8346,0,null);
var c__8348 = cljs.core.nth.call(null,vec__8344__8346,1,null);
var in_list__8349 = cljs.core.not_EQ_.call(null,-1,o__8347);
var endings__8351 = (function (){var and__3822__auto____8350 = in_list__8349;
if(and__3822__auto____8350)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.constantly.call(null,true),p__8345);
} else
{return and__3822__auto____8350;
}
})();
var a__8354 = (function (){var and__3822__auto____8352 = c__8348;
if(cljs.core.truth_(and__3822__auto____8352))
{var and__3822__auto____8353 = in_list__8349;
if(and__3822__auto____8353)
{return cljs.core.nth.call(null,s,c__8348,null);
} else
{return and__3822__auto____8353;
}
} else
{return and__3822__auto____8352;
}
})();
var r__8356 = (function (){var or__3824__auto____8355 = subpar.paredit.count_lines.call(null,s,o__8347,c__8348);
if(cljs.core.truth_(or__3824__auto____8355))
{return or__3824__auto____8355;
} else
{return 1;
}
})();
var num__8357 = (cljs.core.truth_(endings__8351)?cljs.core.count.call(null,endings__8351):0);
if((num__8357 > 1))
{return cljs.core.PersistentVector.fromArray([a__8354,c__8348,(cljs.core.nth.call(null,endings__8351,(num__8357 - 2)) + 1),false,r__8356,o__8347], true);
} else
{if(cljs.core._EQ_.call(null,num__8357,1))
{return cljs.core.PersistentVector.fromArray([a__8354,c__8348,(o__8347 + 1),true,r__8356,o__8347], true);
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
var p__8373 = subpar.paredit.parse.call(null,s);
var vec__8372__8374 = subpar.paredit.get_wrapper.call(null,p__8373,i);
var o__8375 = cljs.core.nth.call(null,vec__8372__8374,0,null);
var c__8376 = cljs.core.nth.call(null,vec__8372__8374,1,null);
var in_list__8377 = cljs.core.not_EQ_.call(null,-1,o__8375);
var starts__8379 = (function (){var and__3822__auto____8378 = in_list__8377;
if(and__3822__auto____8378)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.keys,cljs.core.constantly.call(null,true),p__8373);
} else
{return and__3822__auto____8378;
}
})();
var a__8382 = (function (){var and__3822__auto____8380 = o__8375;
if(cljs.core.truth_(and__3822__auto____8380))
{var and__3822__auto____8381 = in_list__8377;
if(and__3822__auto____8381)
{return cljs.core.nth.call(null,s,o__8375,null);
} else
{return and__3822__auto____8381;
}
} else
{return and__3822__auto____8380;
}
})();
var r__8384 = (function (){var or__3824__auto____8383 = subpar.paredit.count_lines.call(null,s,o__8375,c__8376);
if(cljs.core.truth_(or__3824__auto____8383))
{return or__3824__auto____8383;
} else
{return 1;
}
})();
var num__8385 = (cljs.core.truth_(starts__8379)?cljs.core.count.call(null,starts__8379):0);
if((num__8385 > 1))
{return cljs.core.PersistentVector.fromArray([a__8382,o__8375,cljs.core.second.call(null,starts__8379),false,r__8384], true);
} else
{if(cljs.core._EQ_.call(null,num__8385,1))
{return cljs.core.PersistentVector.fromArray([a__8382,o__8375,c__8376,true,r__8384], true);
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
var p__8398 = subpar.paredit.parse.call(null,s);
var vec__8397__8399 = subpar.paredit.get_wrapper.call(null,p__8398,i);
var o__8400 = cljs.core.nth.call(null,vec__8397__8399,0,null);
var c__8401 = cljs.core.nth.call(null,vec__8397__8399,1,null);
var in_list__8402 = cljs.core.not_EQ_.call(null,-1,o__8400);
if(in_list__8402)
{var vec__8403__8404 = subpar.paredit.get_wrapper.call(null,p__8398,o__8400);
var n__8405 = cljs.core.nth.call(null,vec__8403__8404,0,null);
var d__8406 = cljs.core.nth.call(null,vec__8403__8404,1,null);
var r__8407 = subpar.paredit.count_lines.call(null,s,n__8405,d__8406);
return cljs.core.PersistentVector.fromArray([o__8400,c__8401,((0 > n__8405) ? 0 : n__8405),r__8407], true);
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
var p__8420 = subpar.paredit.parse.call(null,s);
var vec__8419__8421 = subpar.paredit.get_wrapper.call(null,p__8420,i);
var o__8422 = cljs.core.nth.call(null,vec__8419__8421,0,null);
var c__8423 = cljs.core.nth.call(null,vec__8419__8421,1,null);
var in_list__8424 = cljs.core.not_EQ_.call(null,-1,o__8422);
if(in_list__8424)
{var vec__8425__8426 = subpar.paredit.get_wrapper.call(null,p__8420,o__8422);
var n__8427 = cljs.core.nth.call(null,vec__8425__8426,0,null);
var d__8428 = cljs.core.nth.call(null,vec__8425__8426,1,null);
var r__8429 = subpar.paredit.count_lines.call(null,s,n__8427,d__8428);
return cljs.core.PersistentVector.fromArray([o__8422,((o__8422 > i) ? o__8422 : i),c__8423,((0 > n__8427) ? 0 : n__8427),r__8429], true);
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
var p__8442 = subpar.paredit.parse.call(null,s);
var vec__8441__8443 = subpar.paredit.get_wrapper.call(null,p__8442,i);
var o__8444 = cljs.core.nth.call(null,vec__8441__8443,0,null);
var c__8445 = cljs.core.nth.call(null,vec__8441__8443,1,null);
var in_list__8446 = cljs.core.not_EQ_.call(null,-1,o__8444);
if(in_list__8446)
{var vec__8447__8448 = subpar.paredit.get_wrapper.call(null,p__8442,o__8444);
var n__8449 = cljs.core.nth.call(null,vec__8447__8448,0,null);
var d__8450 = cljs.core.nth.call(null,vec__8447__8448,1,null);
var r__8451 = subpar.paredit.count_lines.call(null,s,n__8449,d__8450);
return cljs.core.PersistentVector.fromArray([o__8444,i,(c__8445 + 1),((0 > n__8449) ? 0 : n__8449),r__8451], true);
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
var s__8490 = [cljs.core.str(ss),cljs.core.str(" ")].join('');
var i__8491 = 0;
var mode__8492 = subpar.paredit.code;
var openings__8493 = cljs.core.list.call(null,-1);
var start__8494 = -1;
var t__8495 = cljs.core.PersistentVector.EMPTY;
var families__8496 = cljs.core.PersistentArrayMap.fromArrays([-1],[cljs.core.ObjMap.fromObject(["\uFDD0'children"],{"\uFDD0'children":cljs.core.ObjMap.EMPTY})]);
var escaping__8497 = false;
var in_word__8498 = false;
while(true){
var a__8499 = cljs.core.nth.call(null,s__8490,i__8491,null);
var j__8500 = (i__8491 + 1);
var o__8501 = cljs.core.peek.call(null,openings__8493);
if(cljs.core.truth_((function (){var and__3822__auto____8502 = (a__8499 == null);
if(and__3822__auto____8502)
{return in_word__8498;
} else
{return and__3822__auto____8502;
}
})()))
{return cljs.core.ObjMap.fromObject(["\uFDD0'chars","\uFDD0'families"],{"\uFDD0'chars":t__8495,"\uFDD0'families":cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8496,cljs.core.PersistentVector.fromArray([-1,"\uFDD0'closer"], true),(i__8491 - 1)),cljs.core.PersistentVector.fromArray([-1,"\uFDD0'children",start__8494], true),(i__8491 - 1))});
} else
{if((a__8499 == null))
{return cljs.core.ObjMap.fromObject(["\uFDD0'chars","\uFDD0'families"],{"\uFDD0'chars":t__8495,"\uFDD0'families":cljs.core.assoc_in.call(null,families__8496,cljs.core.PersistentVector.fromArray([-1,"\uFDD0'closer"], true),(i__8491 - 1))});
} else
{if((function (){var and__3822__auto____8503 = cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode__8492);
if(and__3822__auto____8503)
{var and__3822__auto____8504 = cljs.core._EQ_.call(null,"\\",a__8499);
if(and__3822__auto____8504)
{var and__3822__auto____8505 = cljs.core.not.call(null,escaping__8497);
if(and__3822__auto____8505)
{return cljs.core.not.call(null,in_word__8498);
} else
{return and__3822__auto____8505;
}
} else
{return and__3822__auto____8504;
}
} else
{return and__3822__auto____8503;
}
})())
{{
var G__8528 = j__8500;
var G__8529 = mode__8492;
var G__8530 = openings__8493;
var G__8531 = i__8491;
var G__8532 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8533 = cljs.core.assoc_in.call(null,families__8496,cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'children",i__8491], true),j__8500);
var G__8534 = true;
var G__8535 = true;
i__8491 = G__8528;
mode__8492 = G__8529;
openings__8493 = G__8530;
start__8494 = G__8531;
t__8495 = G__8532;
families__8496 = G__8533;
escaping__8497 = G__8534;
in_word__8498 = G__8535;
continue;
}
} else
{if((function (){var and__3822__auto____8506 = cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode__8492);
if(and__3822__auto____8506)
{var and__3822__auto____8507 = cljs.core._EQ_.call(null,"\\",a__8499);
if(and__3822__auto____8507)
{return cljs.core.not.call(null,escaping__8497);
} else
{return and__3822__auto____8507;
}
} else
{return and__3822__auto____8506;
}
})())
{{
var G__8536 = j__8500;
var G__8537 = mode__8492;
var G__8538 = openings__8493;
var G__8539 = i__8491;
var G__8540 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8541 = families__8496;
var G__8542 = true;
var G__8543 = true;
i__8491 = G__8536;
mode__8492 = G__8537;
openings__8493 = G__8538;
start__8494 = G__8539;
t__8495 = G__8540;
families__8496 = G__8541;
escaping__8497 = G__8542;
in_word__8498 = G__8543;
continue;
}
} else
{if((function (){var and__3822__auto____8508 = cljs.core._EQ_.call(null,subpar.paredit.code,mode__8492);
if(and__3822__auto____8508)
{var and__3822__auto____8509 = cljs.core._EQ_.call(null,";",a__8499);
if(and__3822__auto____8509)
{return cljs.core.not.call(null,escaping__8497);
} else
{return and__3822__auto____8509;
}
} else
{return and__3822__auto____8508;
}
})())
{{
var G__8544 = j__8500;
var G__8545 = subpar.paredit.cmmnt;
var G__8546 = openings__8493;
var G__8547 = start__8494;
var G__8548 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8549 = families__8496;
var G__8550 = false;
var G__8551 = false;
i__8491 = G__8544;
mode__8492 = G__8545;
openings__8493 = G__8546;
start__8494 = G__8547;
t__8495 = G__8548;
families__8496 = G__8549;
escaping__8497 = G__8550;
in_word__8498 = G__8551;
continue;
}
} else
{if((function (){var and__3822__auto____8510 = cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode__8492);
if(and__3822__auto____8510)
{return cljs.core._EQ_.call(null,"\n",a__8499);
} else
{return and__3822__auto____8510;
}
})())
{{
var G__8552 = j__8500;
var G__8553 = subpar.paredit.code;
var G__8554 = openings__8493;
var G__8555 = start__8494;
var G__8556 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8557 = families__8496;
var G__8558 = false;
var G__8559 = false;
i__8491 = G__8552;
mode__8492 = G__8553;
openings__8493 = G__8554;
start__8494 = G__8555;
t__8495 = G__8556;
families__8496 = G__8557;
escaping__8497 = G__8558;
in_word__8498 = G__8559;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode__8492))
{{
var G__8560 = j__8500;
var G__8561 = subpar.paredit.cmmnt;
var G__8562 = openings__8493;
var G__8563 = start__8494;
var G__8564 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8565 = families__8496;
var G__8566 = false;
var G__8567 = false;
i__8491 = G__8560;
mode__8492 = G__8561;
openings__8493 = G__8562;
start__8494 = G__8563;
t__8495 = G__8564;
families__8496 = G__8565;
escaping__8497 = G__8566;
in_word__8498 = G__8567;
continue;
}
} else
{if((function (){var and__3822__auto____8511 = cljs.core._EQ_.call(null,subpar.paredit.code,mode__8492);
if(and__3822__auto____8511)
{var and__3822__auto____8512 = cljs.core._EQ_.call(null,"\"",a__8499);
if(and__3822__auto____8512)
{return cljs.core.not.call(null,escaping__8497);
} else
{return and__3822__auto____8512;
}
} else
{return and__3822__auto____8511;
}
})())
{{
var G__8568 = j__8500;
var G__8569 = subpar.paredit.string;
var G__8570 = cljs.core.conj.call(null,openings__8493,i__8491);
var G__8571 = -1;
var G__8572 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8573 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8496,cljs.core.PersistentVector.fromArray([i__8491,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY),cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'children",i__8491], true),j__8500);
var G__8574 = false;
var G__8575 = false;
i__8491 = G__8568;
mode__8492 = G__8569;
openings__8493 = G__8570;
start__8494 = G__8571;
t__8495 = G__8572;
families__8496 = G__8573;
escaping__8497 = G__8574;
in_word__8498 = G__8575;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8513 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8492);
if(and__3822__auto____8513)
{var and__3822__auto____8514 = cljs.core._EQ_.call(null,"\"",a__8499);
if(and__3822__auto____8514)
{var and__3822__auto____8515 = cljs.core.not.call(null,escaping__8497);
if(and__3822__auto____8515)
{return in_word__8498;
} else
{return and__3822__auto____8515;
}
} else
{return and__3822__auto____8514;
}
} else
{return and__3822__auto____8513;
}
})()))
{{
var G__8576 = j__8500;
var G__8577 = subpar.paredit.code;
var G__8578 = cljs.core.pop.call(null,openings__8493);
var G__8579 = -1;
var G__8580 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8581 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8496,cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'closer"], true),i__8491),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8493),"\uFDD0'children",o__8501], true),i__8491),cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'children",start__8494], true),(i__8491 - 1));
var G__8582 = false;
var G__8583 = false;
i__8491 = G__8576;
mode__8492 = G__8577;
openings__8493 = G__8578;
start__8494 = G__8579;
t__8495 = G__8580;
families__8496 = G__8581;
escaping__8497 = G__8582;
in_word__8498 = G__8583;
continue;
}
} else
{if((function (){var and__3822__auto____8516 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8492);
if(and__3822__auto____8516)
{var and__3822__auto____8517 = cljs.core._EQ_.call(null,"\"",a__8499);
if(and__3822__auto____8517)
{return cljs.core.not.call(null,escaping__8497);
} else
{return and__3822__auto____8517;
}
} else
{return and__3822__auto____8516;
}
})())
{{
var G__8584 = j__8500;
var G__8585 = subpar.paredit.code;
var G__8586 = cljs.core.pop.call(null,openings__8493);
var G__8587 = -1;
var G__8588 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8589 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8496,cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'closer"], true),i__8491),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8493),"\uFDD0'children",o__8501], true),i__8491);
var G__8590 = false;
var G__8591 = false;
i__8491 = G__8584;
mode__8492 = G__8585;
openings__8493 = G__8586;
start__8494 = G__8587;
t__8495 = G__8588;
families__8496 = G__8589;
escaping__8497 = G__8590;
in_word__8498 = G__8591;
continue;
}
} else
{if((function (){var and__3822__auto____8518 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8492);
if(and__3822__auto____8518)
{var and__3822__auto____8519 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8499));
if(and__3822__auto____8519)
{return cljs.core.not.call(null,in_word__8498);
} else
{return and__3822__auto____8519;
}
} else
{return and__3822__auto____8518;
}
})())
{{
var G__8592 = j__8500;
var G__8593 = subpar.paredit.string;
var G__8594 = openings__8493;
var G__8595 = i__8491;
var G__8596 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8597 = cljs.core.assoc_in.call(null,families__8496,cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'children",i__8491], true),i__8491);
var G__8598 = false;
var G__8599 = true;
i__8491 = G__8592;
mode__8492 = G__8593;
openings__8493 = G__8594;
start__8494 = G__8595;
t__8495 = G__8596;
families__8496 = G__8597;
escaping__8497 = G__8598;
in_word__8498 = G__8599;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8520 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8492);
if(and__3822__auto____8520)
{var and__3822__auto____8521 = subpar.paredit.whitespace_QMARK_.call(null,a__8499);
if(cljs.core.truth_(and__3822__auto____8521))
{return in_word__8498;
} else
{return and__3822__auto____8521;
}
} else
{return and__3822__auto____8520;
}
})()))
{{
var G__8600 = j__8500;
var G__8601 = subpar.paredit.string;
var G__8602 = openings__8493;
var G__8603 = -1;
var G__8604 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8605 = cljs.core.assoc_in.call(null,families__8496,cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'children",start__8494], true),(i__8491 - 1));
var G__8606 = false;
var G__8607 = false;
i__8491 = G__8600;
mode__8492 = G__8601;
openings__8493 = G__8602;
start__8494 = G__8603;
t__8495 = G__8604;
families__8496 = G__8605;
escaping__8497 = G__8606;
in_word__8498 = G__8607;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.string,mode__8492))
{{
var G__8608 = j__8500;
var G__8609 = subpar.paredit.string;
var G__8610 = openings__8493;
var G__8611 = start__8494;
var G__8612 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8613 = families__8496;
var G__8614 = false;
var G__8615 = in_word__8498;
i__8491 = G__8608;
mode__8492 = G__8609;
openings__8493 = G__8610;
start__8494 = G__8611;
t__8495 = G__8612;
families__8496 = G__8613;
escaping__8497 = G__8614;
in_word__8498 = G__8615;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8522 = subpar.paredit.opener_QMARK_.call(null,a__8499);
if(cljs.core.truth_(and__3822__auto____8522))
{return in_word__8498;
} else
{return and__3822__auto____8522;
}
})()))
{{
var G__8616 = j__8500;
var G__8617 = subpar.paredit.code;
var G__8618 = cljs.core.conj.call(null,openings__8493,i__8491);
var G__8619 = -1;
var G__8620 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8621 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8496,cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'children",start__8494], true),(i__8491 - 1)),cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'children",i__8491], true),i__8491),cljs.core.PersistentVector.fromArray([i__8491,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY);
var G__8622 = false;
var G__8623 = false;
i__8491 = G__8616;
mode__8492 = G__8617;
openings__8493 = G__8618;
start__8494 = G__8619;
t__8495 = G__8620;
families__8496 = G__8621;
escaping__8497 = G__8622;
in_word__8498 = G__8623;
continue;
}
} else
{if(cljs.core.truth_(subpar.paredit.opener_QMARK_.call(null,a__8499)))
{{
var G__8624 = j__8500;
var G__8625 = subpar.paredit.code;
var G__8626 = cljs.core.conj.call(null,openings__8493,i__8491);
var G__8627 = -1;
var G__8628 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8629 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8496,cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'children",i__8491], true),i__8491),cljs.core.PersistentVector.fromArray([i__8491,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY);
var G__8630 = false;
var G__8631 = false;
i__8491 = G__8624;
mode__8492 = G__8625;
openings__8493 = G__8626;
start__8494 = G__8627;
t__8495 = G__8628;
families__8496 = G__8629;
escaping__8497 = G__8630;
in_word__8498 = G__8631;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8523 = subpar.paredit.closer_QMARK_.call(null,a__8499);
if(cljs.core.truth_(and__3822__auto____8523))
{return in_word__8498;
} else
{return and__3822__auto____8523;
}
})()))
{{
var G__8632 = j__8500;
var G__8633 = subpar.paredit.code;
var G__8634 = cljs.core.pop.call(null,openings__8493);
var G__8635 = -1;
var G__8636 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8637 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8496,cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'children",start__8494], true),(i__8491 - 1)),cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'closer"], true),i__8491),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8493),"\uFDD0'children",o__8501], true),i__8491);
var G__8638 = false;
var G__8639 = false;
i__8491 = G__8632;
mode__8492 = G__8633;
openings__8493 = G__8634;
start__8494 = G__8635;
t__8495 = G__8636;
families__8496 = G__8637;
escaping__8497 = G__8638;
in_word__8498 = G__8639;
continue;
}
} else
{if(cljs.core.truth_(subpar.paredit.closer_QMARK_.call(null,a__8499)))
{{
var G__8640 = j__8500;
var G__8641 = subpar.paredit.code;
var G__8642 = cljs.core.pop.call(null,openings__8493);
var G__8643 = -1;
var G__8644 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8645 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8496,cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'closer"], true),i__8491),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8493),"\uFDD0'children",o__8501], true),i__8491);
var G__8646 = false;
var G__8647 = false;
i__8491 = G__8640;
mode__8492 = G__8641;
openings__8493 = G__8642;
start__8494 = G__8643;
t__8495 = G__8644;
families__8496 = G__8645;
escaping__8497 = G__8646;
in_word__8498 = G__8647;
continue;
}
} else
{if((function (){var and__3822__auto____8524 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8499));
if(and__3822__auto____8524)
{return cljs.core.not.call(null,in_word__8498);
} else
{return and__3822__auto____8524;
}
})())
{{
var G__8648 = j__8500;
var G__8649 = subpar.paredit.code;
var G__8650 = openings__8493;
var G__8651 = i__8491;
var G__8652 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8653 = cljs.core.assoc_in.call(null,families__8496,cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'children",i__8491], true),i__8491);
var G__8654 = false;
var G__8655 = true;
i__8491 = G__8648;
mode__8492 = G__8649;
openings__8493 = G__8650;
start__8494 = G__8651;
t__8495 = G__8652;
families__8496 = G__8653;
escaping__8497 = G__8654;
in_word__8498 = G__8655;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8525 = subpar.paredit.whitespace_QMARK_.call(null,a__8499);
if(cljs.core.truth_(and__3822__auto____8525))
{return in_word__8498;
} else
{return and__3822__auto____8525;
}
})()))
{{
var G__8656 = j__8500;
var G__8657 = subpar.paredit.code;
var G__8658 = openings__8493;
var G__8659 = -1;
var G__8660 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8661 = cljs.core.assoc_in.call(null,families__8496,cljs.core.PersistentVector.fromArray([o__8501,"\uFDD0'children",start__8494], true),(i__8491 - 1));
var G__8662 = false;
var G__8663 = false;
i__8491 = G__8656;
mode__8492 = G__8657;
openings__8493 = G__8658;
start__8494 = G__8659;
t__8495 = G__8660;
families__8496 = G__8661;
escaping__8497 = G__8662;
in_word__8498 = G__8663;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8526 = subpar.paredit.whitespace_QMARK_.call(null,a__8499);
if(cljs.core.truth_(and__3822__auto____8526))
{return cljs.core.not.call(null,in_word__8498);
} else
{return and__3822__auto____8526;
}
})()))
{{
var G__8664 = j__8500;
var G__8665 = subpar.paredit.code;
var G__8666 = openings__8493;
var G__8667 = -1;
var G__8668 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8669 = families__8496;
var G__8670 = false;
var G__8671 = false;
i__8491 = G__8664;
mode__8492 = G__8665;
openings__8493 = G__8666;
start__8494 = G__8667;
t__8495 = G__8668;
families__8496 = G__8669;
escaping__8497 = G__8670;
in_word__8498 = G__8671;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3822__auto____8527 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8499));
if(and__3822__auto____8527)
{return in_word__8498;
} else
{return and__3822__auto____8527;
}
})()))
{{
var G__8672 = j__8500;
var G__8673 = subpar.paredit.code;
var G__8674 = openings__8493;
var G__8675 = start__8494;
var G__8676 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray([mode__8492,o__8501], true));
var G__8677 = families__8496;
var G__8678 = false;
var G__8679 = true;
i__8491 = G__8672;
mode__8492 = G__8673;
openings__8493 = G__8674;
start__8494 = G__8675;
t__8495 = G__8676;
families__8496 = G__8677;
escaping__8497 = G__8678;
in_word__8498 = G__8679;
continue;
}
} else
{if("\uFDD0'default")
{{
var G__8680 = j__8500;
var G__8681 = subpar.paredit.code;
var G__8682 = openings__8493;
var G__8683 = start__8494;
var G__8684 = cljs.core.conj.call(null,t__8495,cljs.core.PersistentVector.fromArray(["?",o__8501], true));
var G__8685 = families__8496;
var G__8686 = escaping__8497;
var G__8687 = in_word__8498;
i__8491 = G__8680;
mode__8492 = G__8681;
openings__8493 = G__8682;
start__8494 = G__8683;
t__8495 = G__8684;
families__8496 = G__8685;
escaping__8497 = G__8686;
in_word__8498 = G__8687;
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
