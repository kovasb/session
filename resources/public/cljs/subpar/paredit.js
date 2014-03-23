// Compiled by ClojureScript 0.0-2156
goog.provide('subpar.paredit');
goog.require('cljs.core');
subpar.paredit.code = "c";
subpar.paredit.cmmnt = ";";
subpar.paredit.string = "\"";
subpar.paredit.openers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["(",null,"[",null,"{",null], null), null);
subpar.paredit.closers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [")",null,"]",null,"}",null], null), null);
subpar.paredit.opener_QMARK_ = (function opener_QMARK_(a){return cljs.core.contains_QMARK_.call(null,subpar.paredit.openers,a);
});
subpar.paredit.closer_QMARK_ = (function closer_QMARK_(a){return cljs.core.contains_QMARK_.call(null,subpar.paredit.closers,a);
});
subpar.paredit.whitespace_QMARK_ = (function whitespace_QMARK_(x){return (cljs.core._EQ_.call(null,x,"\t")) || (cljs.core._EQ_.call(null,x," ")) || (cljs.core._EQ_.call(null,x,"\n"));
});
subpar.paredit.get_opening_delimiter_index_with_parse = (function get_opening_delimiter_index_with_parse(p,i){return cljs.core.nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"chars","chars",1108527951).cljs$core$IFn$_invoke$arity$1(p),i),1);
});
subpar.paredit.get_closing_delimiter_index_with_parse = (function get_closing_delimiter_index_with_parse(p,i){return cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"families","families",1801311860),subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p,i),new cljs.core.Keyword(null,"closer","closer",3951351020)], null));
});
/**
* returns index of the opening delimiter for the list that contains
* the point. if there is no containing list, this returns -1
*/
subpar.paredit.get_opening_delimiter_index = (function get_opening_delimiter_index(s,i){return subpar.paredit.get_opening_delimiter_index_with_parse.call(null,subpar.paredit.parse.call(null,s),i);
});
/**
* returns index of the closing delimiter for the list that contains
* the point. if there is no containing list, this returns the length
* of the code
*/
subpar.paredit.get_closing_delimiter_index = (function get_closing_delimiter_index(s,i){return subpar.paredit.get_closing_delimiter_index_with_parse.call(null,subpar.paredit.parse.call(null,s),i);
});
/**
* returns the indices of the delimiters of the list containing the
* point.
*/
subpar.paredit.get_wrapper = (function get_wrapper(p,i){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p,i),subpar.paredit.get_closing_delimiter_index_with_parse.call(null,p,i)], null);
});
/**
* gets the kind of text containin the point: string, code, comment
*/
subpar.paredit.get_mode = (function get_mode(p,i){return cljs.core.nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"chars","chars",1108527951).cljs$core$IFn$_invoke$arity$1(p),i),0);
});
subpar.paredit.in_QMARK_ = (function in_QMARK_(p,i,mode){return (((0 <= i)) && ((i <= cljs.core.count.call(null,new cljs.core.Keyword(null,"chars","chars",1108527951).cljs$core$IFn$_invoke$arity$1(p))))) && (cljs.core._EQ_.call(null,mode,subpar.paredit.get_mode.call(null,p,i)));
});
subpar.paredit.in_comment_QMARK_ = (function in_comment_QMARK_(p,i){return subpar.paredit.in_QMARK_.call(null,p,i,subpar.paredit.cmmnt);
});
subpar.paredit.in_code_QMARK_ = (function in_code_QMARK_(p,i){return subpar.paredit.in_QMARK_.call(null,p,i,subpar.paredit.code);
});
subpar.paredit.in_string_QMARK_ = (function in_string_QMARK_(p,i){return subpar.paredit.in_QMARK_.call(null,p,i,subpar.paredit.string);
});
subpar.paredit.in_string = (function in_string(s,i){return subpar.paredit.in_string_QMARK_.call(null,subpar.paredit.parse.call(null,s),i);
});
subpar.paredit.n_str_QMARK_ = cljs.core.complement.call(null,subpar.paredit.in_string_QMARK_);
subpar.paredit.get_all_siblings = (function get_all_siblings(i,p){return cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"families","families",1801311860),subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p,i),new cljs.core.Keyword(null,"children","children",2673430897)], null));
});
/**
* returns a sorted list of the siblings at point 'i' after they have
* been transformed with 'transform' and filtered by 'predicate', both
* single argument fns
*/
subpar.paredit.get_siblings = (function get_siblings(i,transform,predicate,p){return cljs.core.sort.call(null,cljs.core.filter.call(null,predicate,transform.call(null,subpar.paredit.get_all_siblings.call(null,i,p))));
});
/**
* how many lines contain the code from i to j inclusive
*/
subpar.paredit.count_lines = (function count_lines(s,i,j){var and__3391__auto__ = i;if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = j;if(cljs.core.truth_(and__3391__auto____$1))
{return (cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__10124_SHARP_){return cljs.core._EQ_.call(null,"\n",p1__10124_SHARP_);
}),cljs.core.drop.call(null,i,cljs.core.drop_last.call(null,((cljs.core.count.call(null,s) - j) - 1),cljs.core.take.call(null,cljs.core.count.call(null,s),s))))) + 1);
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
});
/**
* whether the current spot is escaped
*/
subpar.paredit.escaped_QMARK_ = (function escaped_QMARK_(s,i){return cljs.core.odd_QMARK_.call(null,(function (){var c = 0;var j = (i - 1);while(true){
var a = cljs.core.nth.call(null,s,j,null);if((j < 0))
{return c;
} else
{if((a == null))
{return c;
} else
{if(cljs.core.not_EQ_.call(null,"\\",a))
{return c;
} else
{if(true)
{{
var G__10125 = (c + 1);
var G__10126 = (j - 1);
c = G__10125;
j = G__10126;
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
subpar.paredit.closes_list_QMARK_ = (function closes_list_QMARK_(p,i){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([i], true),cljs.core.map.call(null,new cljs.core.Keyword(null,"closer","closer",3951351020),cljs.core.vals.call(null,new cljs.core.Keyword(null,"families","families",1801311860).cljs$core$IFn$_invoke$arity$1(p))));
});
subpar.paredit.opens_list_QMARK_ = (function opens_list_QMARK_(p,i){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([i], true),cljs.core.keys.call(null,new cljs.core.Keyword(null,"families","families",1801311860).cljs$core$IFn$_invoke$arity$1(p)));
});
subpar.paredit.backward_up_fn = (function backward_up_fn(s,i){var vec__10128 = subpar.paredit.get_wrapper.call(null,subpar.paredit.parse.call(null,s),i);var o = cljs.core.nth.call(null,vec__10128,0,null);var c = cljs.core.nth.call(null,vec__10128,1,null);if(cljs.core._EQ_.call(null,-1,o))
{return i;
} else
{return o;
}
});
/**
* returns 0 if nothing should be done (foo |)
* 1 if one character should be deleted
* 2 if a delimiter pair should be deleted and cursor is in pair (|)
* 3 if a delimiter pair should be deleted and cursor is at start |()
* 4 move forward (into a list to delete contents) |(foo)
*/
subpar.paredit.forward_delete_action = (function forward_delete_action(s,i){var p = subpar.paredit.parse.call(null,s);var h = (i - 1);var j = (i + 1);var c = cljs.core.nth.call(null,s,i,null);if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(subpar.paredit.escaped_QMARK_.call(null,s,i))
{return 2;
} else
{if(subpar.paredit.escaped_QMARK_.call(null,s,j))
{return 3;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,i], null),subpar.paredit.get_wrapper.call(null,p,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p,i)))
{return 0;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),subpar.paredit.get_wrapper.call(null,p,j)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null,p,i)))
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
subpar.paredit.backward_delete_action = (function backward_delete_action(s,i){var p = subpar.paredit.parse.call(null,s);var g = (i - 2);var h = (i - 1);if((i <= 0))
{return 0;
} else
{if(subpar.paredit.escaped_QMARK_.call(null,s,h))
{return 3;
} else
{if(subpar.paredit.escaped_QMARK_.call(null,s,i))
{return 2;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),subpar.paredit.get_wrapper.call(null,p,h)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p,h)))
{return 4;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,i], null),subpar.paredit.get_wrapper.call(null,p,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null,p,h)))
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
subpar.paredit.double_quote_action = (function double_quote_action(s,i){var p = subpar.paredit.parse.call(null,s);if((i < 0))
{return 0;
} else
{if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(subpar.paredit.in_comment_QMARK_.call(null,p,i))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.n_str_QMARK_.call(null,p,i)))
{return 0;
} else
{if(cljs.core._EQ_.call(null,"\"",cljs.core.nth.call(null,s,i)))
{return 2;
} else
{if(new cljs.core.Keyword(null,"escaping","escaping",2855105648))
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
subpar.paredit.close_expression_vals = (function close_expression_vals(p,i){var vec__10130 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10130,0,null);var c = cljs.core.nth.call(null,vec__10130,1,null);if(cljs.core._EQ_.call(null,-1,o))
{return cljs.core.PersistentVector.EMPTY;
} else
{var start = ((function (){var or__3403__auto__ = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.identity,p));if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return o;
}
})() + 1);var delete$ = cljs.core.not_EQ_.call(null,start,c);var dest = ((delete$)?(start + 1):(c + 1));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [delete$,start,c,dest], null);
}
});
/**
* finds the start of the next list/string/vector/map
*/
subpar.paredit.get_start_of_next_list = (function get_start_of_next_list(s,i){var p = subpar.paredit.parse.call(null,s);var r = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,((function (p){
return (function (p1__10131_SHARP_){var and__3391__auto__ = (p1__10131_SHARP_ >= i);if(and__3391__auto__)
{return cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"families","families",1801311860),p1__10131_SHARP_], null));
} else
{return and__3391__auto__;
}
});})(p))
,p));if((r == null))
{return false;
} else
{return r;
}
});
subpar.paredit.forward_down_fn = (function forward_down_fn(s,i){var r = subpar.paredit.get_start_of_next_list.call(null,s,i);if(cljs.core.truth_(r))
{return (r + 1);
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
subpar.paredit.backward_fn = (function backward_fn(s,i){var p = subpar.paredit.parse.call(null,s);var b = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,((function (p){
return (function (p1__10132_SHARP_){return (p1__10132_SHARP_ < i);
});})(p))
,p));var o = subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p,i);var or__3403__auto__ = b;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{if((o < 0))
{return 0;
} else
{return o;
}
}
});
/**
* paredit-backward-down
*/
subpar.paredit.backward_down_fn = (function backward_down_fn(s,i){var p = subpar.paredit.parse.call(null,s);var b = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,((function (p){
return (function (p1__10133_SHARP_){var and__3391__auto__ = (p1__10133_SHARP_ < i);if(and__3391__auto__)
{return subpar.paredit.closes_list_QMARK_.call(null,p,p1__10133_SHARP_);
} else
{return and__3391__auto__;
}
});})(p))
,p));var or__3403__auto__ = b;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return i;
}
});
/**
* paredit-forward-up
*/
subpar.paredit.forward_up_fn = (function forward_up_fn(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10135 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10135,0,null);var c = cljs.core.nth.call(null,vec__10135,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{return (c + 1);
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
subpar.paredit.forward_fn = (function forward_fn(s,i){var p = subpar.paredit.parse.call(null,s);var b = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,((function (p){
return (function (p1__10136_SHARP_){return (p1__10136_SHARP_ >= i);
});})(p))
,p));var c = subpar.paredit.get_closing_delimiter_index_with_parse.call(null,p,i);var l = cljs.core.count.call(null,s);if(cljs.core.truth_(b))
{return (b + 1);
} else
{if(cljs.core.truth_(c))
{var x__3717__auto__ = (c + 1);var y__3718__auto__ = l;return ((x__3717__auto__ < y__3718__auto__) ? x__3717__auto__ : y__3718__auto__);
} else
{if(true)
{return l;
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
subpar.paredit.forward_slurp_vals = (function forward_slurp_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10139 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10139,0,null);var c = cljs.core.nth.call(null,vec__10139,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var a = (function (){var and__3391__auto__ = in_list;if(and__3391__auto__)
{return cljs.core.nth.call(null,s,c,false);
} else
{return and__3391__auto__;
}
})();var d = (function (){var and__3391__auto__ = in_list;if(and__3391__auto__)
{return cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,o,cljs.core.vals,((function (and__3391__auto__,p,vec__10139,o,c,in_list,a){
return (function (p1__10137_SHARP_){return (p1__10137_SHARP_ > c);
});})(and__3391__auto__,p,vec__10139,o,c,in_list,a))
,p));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_((function (){var and__3391__auto__ = a;if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = c;if(cljs.core.truth_(and__3391__auto____$1))
{return d;
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,(d + 1),subpar.paredit.count_lines.call(null,s,o,(d + 1))], null);
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
subpar.paredit.backward_slurp_vals = (function backward_slurp_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10142 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10142,0,null);var c = cljs.core.nth.call(null,vec__10142,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var d = (function (){var and__3391__auto__ = in_list;if(and__3391__auto__)
{return cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,o,cljs.core.keys,((function (and__3391__auto__,p,vec__10142,o,c,in_list){
return (function (p1__10140_SHARP_){return (p1__10140_SHARP_ < o);
});})(and__3391__auto__,p,vec__10142,o,c,in_list))
,p));
} else
{return and__3391__auto__;
}
})();var a = (function (){var and__3391__auto__ = in_list;if(and__3391__auto__)
{return cljs.core.nth.call(null,s,o,false);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_((function (){var and__3391__auto__ = a;if(cljs.core.truth_(and__3391__auto__))
{return d;
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,o,d,subpar.paredit.count_lines.call(null,s,d,c)], null);
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
subpar.paredit.forward_barf_vals = (function forward_barf_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10144 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10144,0,null);var c = cljs.core.nth.call(null,vec__10144,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var endings = (function (){var and__3391__auto__ = in_list;if(and__3391__auto__)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.constantly.call(null,true),p);
} else
{return and__3391__auto__;
}
})();var a = (function (){var and__3391__auto__ = c;if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = in_list;if(and__3391__auto____$1)
{return cljs.core.nth.call(null,s,c,null);
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})();var r = (function (){var or__3403__auto__ = subpar.paredit.count_lines.call(null,s,o,c);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return 1;
}
})();var num = (cljs.core.truth_(endings)?cljs.core.count.call(null,endings):0);if((num > 1))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,(cljs.core.nth.call(null,endings,(num - 2)) + 1),false,r,o], null);
} else
{if(cljs.core._EQ_.call(null,num,1))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,(o + 1),true,r,o], null);
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
subpar.paredit.backward_barf_vals = (function backward_barf_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10146 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10146,0,null);var c = cljs.core.nth.call(null,vec__10146,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var starts = (function (){var and__3391__auto__ = in_list;if(and__3391__auto__)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.keys,cljs.core.constantly.call(null,true),p);
} else
{return and__3391__auto__;
}
})();var a = (function (){var and__3391__auto__ = o;if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = in_list;if(and__3391__auto____$1)
{return cljs.core.nth.call(null,s,o,null);
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})();var r = (function (){var or__3403__auto__ = subpar.paredit.count_lines.call(null,s,o,c);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return 1;
}
})();var num = (cljs.core.truth_(starts)?cljs.core.count.call(null,starts):0);if((num > 1))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,o,cljs.core.second.call(null,starts),false,r], null);
} else
{if(cljs.core._EQ_.call(null,num,1))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,o,c,true,r], null);
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
subpar.paredit.splice_vals = (function splice_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10149 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10149,0,null);var c = cljs.core.nth.call(null,vec__10149,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10150 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10150,0,null);var d = cljs.core.nth.call(null,vec__10150,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,c,(function (){var x__3710__auto__ = 0;var y__3711__auto__ = n;return ((x__3710__auto__ > y__3711__auto__) ? x__3710__auto__ : y__3711__auto__);
})(),r], null);
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
subpar.paredit.splice_delete_backward_vals = (function splice_delete_backward_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10153 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10153,0,null);var c = cljs.core.nth.call(null,vec__10153,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10154 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10154,0,null);var d = cljs.core.nth.call(null,vec__10154,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,(function (){var x__3710__auto__ = o;var y__3711__auto__ = i;return ((x__3710__auto__ > y__3711__auto__) ? x__3710__auto__ : y__3711__auto__);
})(),c,(function (){var x__3710__auto__ = 0;var y__3711__auto__ = n;return ((x__3710__auto__ > y__3711__auto__) ? x__3710__auto__ : y__3711__auto__);
})(),r], null);
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
subpar.paredit.splice_delete_forward_vals = (function splice_delete_forward_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10157 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10157,0,null);var c = cljs.core.nth.call(null,vec__10157,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10158 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10158,0,null);var d = cljs.core.nth.call(null,vec__10158,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,i,(c + 1),(function (){var x__3710__auto__ = 0;var y__3711__auto__ = n;return ((x__3710__auto__ > y__3711__auto__) ? x__3710__auto__ : y__3711__auto__);
})(),r], null);
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
subpar.paredit.parse = (function parse(ss){var s = [cljs.core.str(ss),cljs.core.str(" ")].join('');var i = 0;var mode = subpar.paredit.code;var openings = cljs.core._conj.call(null,cljs.core.List.EMPTY,-1);var start = -1;var t = cljs.core.PersistentVector.EMPTY;var families = new cljs.core.PersistentArrayMap(null, 1, [-1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",2673430897),cljs.core.PersistentArrayMap.EMPTY], null)], null);var escaping = false;var in_word = false;while(true){
var a = cljs.core.nth.call(null,s,i,null);var j = (i + 1);var o = cljs.core.peek.call(null,openings);if(((a == null)) && (in_word))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chars","chars",1108527951),t,new cljs.core.Keyword(null,"families","families",1801311860),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),(i - 1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1))], null);
} else
{if((a == null))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chars","chars",1108527951),t,new cljs.core.Keyword(null,"families","families",1801311860),cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),(i - 1))], null);
} else
{if((cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode)) && (cljs.core._EQ_.call(null,"\\",a)) && (!(escaping)) && (!(in_word)))
{{
var G__10159 = j;
var G__10160 = mode;
var G__10161 = openings;
var G__10162 = i;
var G__10163 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10164 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),j);
var G__10165 = true;
var G__10166 = true;
i = G__10159;
mode = G__10160;
openings = G__10161;
start = G__10162;
t = G__10163;
families = G__10164;
escaping = G__10165;
in_word = G__10166;
continue;
}
} else
{if((cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode)) && (cljs.core._EQ_.call(null,"\\",a)) && (!(escaping)))
{{
var G__10167 = j;
var G__10168 = mode;
var G__10169 = openings;
var G__10170 = i;
var G__10171 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10172 = families;
var G__10173 = true;
var G__10174 = true;
i = G__10167;
mode = G__10168;
openings = G__10169;
start = G__10170;
t = G__10171;
families = G__10172;
escaping = G__10173;
in_word = G__10174;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.code,mode)) && (cljs.core._EQ_.call(null,";",a)) && (!(escaping)))
{{
var G__10175 = j;
var G__10176 = subpar.paredit.cmmnt;
var G__10177 = openings;
var G__10178 = start;
var G__10179 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10180 = families;
var G__10181 = false;
var G__10182 = false;
i = G__10175;
mode = G__10176;
openings = G__10177;
start = G__10178;
t = G__10179;
families = G__10180;
escaping = G__10181;
in_word = G__10182;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode)) && (cljs.core._EQ_.call(null,"\n",a)))
{{
var G__10183 = j;
var G__10184 = subpar.paredit.code;
var G__10185 = openings;
var G__10186 = start;
var G__10187 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10188 = families;
var G__10189 = false;
var G__10190 = false;
i = G__10183;
mode = G__10184;
openings = G__10185;
start = G__10186;
t = G__10187;
families = G__10188;
escaping = G__10189;
in_word = G__10190;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode))
{{
var G__10191 = j;
var G__10192 = subpar.paredit.cmmnt;
var G__10193 = openings;
var G__10194 = start;
var G__10195 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10196 = families;
var G__10197 = false;
var G__10198 = false;
i = G__10191;
mode = G__10192;
openings = G__10193;
start = G__10194;
t = G__10195;
families = G__10196;
escaping = G__10197;
in_word = G__10198;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.code,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)))
{{
var G__10199 = j;
var G__10200 = subpar.paredit.string;
var G__10201 = cljs.core.conj.call(null,openings,i);
var G__10202 = -1;
var G__10203 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10204 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),j);
var G__10205 = false;
var G__10206 = false;
i = G__10199;
mode = G__10200;
openings = G__10201;
start = G__10202;
t = G__10203;
families = G__10204;
escaping = G__10205;
in_word = G__10206;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)) && (in_word))
{{
var G__10207 = j;
var G__10208 = subpar.paredit.code;
var G__10209 = cljs.core.pop.call(null,openings);
var G__10210 = -1;
var G__10211 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10212 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10213 = false;
var G__10214 = false;
i = G__10207;
mode = G__10208;
openings = G__10209;
start = G__10210;
t = G__10211;
families = G__10212;
escaping = G__10213;
in_word = G__10214;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)))
{{
var G__10215 = j;
var G__10216 = subpar.paredit.code;
var G__10217 = cljs.core.pop.call(null,openings);
var G__10218 = -1;
var G__10219 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10220 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10221 = false;
var G__10222 = false;
i = G__10215;
mode = G__10216;
openings = G__10217;
start = G__10218;
t = G__10219;
families = G__10220;
escaping = G__10221;
in_word = G__10222;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (!(in_word)))
{{
var G__10223 = j;
var G__10224 = subpar.paredit.string;
var G__10225 = openings;
var G__10226 = i;
var G__10227 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10228 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i);
var G__10229 = false;
var G__10230 = true;
i = G__10223;
mode = G__10224;
openings = G__10225;
start = G__10226;
t = G__10227;
families = G__10228;
escaping = G__10229;
in_word = G__10230;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (subpar.paredit.whitespace_QMARK_.call(null,a)) && (in_word))
{{
var G__10231 = j;
var G__10232 = subpar.paredit.string;
var G__10233 = openings;
var G__10234 = -1;
var G__10235 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10236 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10237 = false;
var G__10238 = false;
i = G__10231;
mode = G__10232;
openings = G__10233;
start = G__10234;
t = G__10235;
families = G__10236;
escaping = G__10237;
in_word = G__10238;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.string,mode))
{{
var G__10239 = j;
var G__10240 = subpar.paredit.string;
var G__10241 = openings;
var G__10242 = start;
var G__10243 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10244 = families;
var G__10245 = false;
var G__10246 = in_word;
i = G__10239;
mode = G__10240;
openings = G__10241;
start = G__10242;
t = G__10243;
families = G__10244;
escaping = G__10245;
in_word = G__10246;
continue;
}
} else
{if((subpar.paredit.opener_QMARK_.call(null,a)) && (in_word))
{{
var G__10247 = j;
var G__10248 = subpar.paredit.code;
var G__10249 = cljs.core.conj.call(null,openings,i);
var G__10250 = -1;
var G__10251 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10252 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY);
var G__10253 = false;
var G__10254 = false;
i = G__10247;
mode = G__10248;
openings = G__10249;
start = G__10250;
t = G__10251;
families = G__10252;
escaping = G__10253;
in_word = G__10254;
continue;
}
} else
{if(subpar.paredit.opener_QMARK_.call(null,a))
{{
var G__10255 = j;
var G__10256 = subpar.paredit.code;
var G__10257 = cljs.core.conj.call(null,openings,i);
var G__10258 = -1;
var G__10259 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10260 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY);
var G__10261 = false;
var G__10262 = false;
i = G__10255;
mode = G__10256;
openings = G__10257;
start = G__10258;
t = G__10259;
families = G__10260;
escaping = G__10261;
in_word = G__10262;
continue;
}
} else
{if((subpar.paredit.closer_QMARK_.call(null,a)) && (in_word))
{{
var G__10263 = j;
var G__10264 = subpar.paredit.code;
var G__10265 = cljs.core.pop.call(null,openings);
var G__10266 = -1;
var G__10267 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10268 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10269 = false;
var G__10270 = false;
i = G__10263;
mode = G__10264;
openings = G__10265;
start = G__10266;
t = G__10267;
families = G__10268;
escaping = G__10269;
in_word = G__10270;
continue;
}
} else
{if(subpar.paredit.closer_QMARK_.call(null,a))
{{
var G__10271 = j;
var G__10272 = subpar.paredit.code;
var G__10273 = cljs.core.pop.call(null,openings);
var G__10274 = -1;
var G__10275 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10276 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10277 = false;
var G__10278 = false;
i = G__10271;
mode = G__10272;
openings = G__10273;
start = G__10274;
t = G__10275;
families = G__10276;
escaping = G__10277;
in_word = G__10278;
continue;
}
} else
{if((!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (!(in_word)))
{{
var G__10279 = j;
var G__10280 = subpar.paredit.code;
var G__10281 = openings;
var G__10282 = i;
var G__10283 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10284 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i);
var G__10285 = false;
var G__10286 = true;
i = G__10279;
mode = G__10280;
openings = G__10281;
start = G__10282;
t = G__10283;
families = G__10284;
escaping = G__10285;
in_word = G__10286;
continue;
}
} else
{if((subpar.paredit.whitespace_QMARK_.call(null,a)) && (in_word))
{{
var G__10287 = j;
var G__10288 = subpar.paredit.code;
var G__10289 = openings;
var G__10290 = -1;
var G__10291 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10292 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10293 = false;
var G__10294 = false;
i = G__10287;
mode = G__10288;
openings = G__10289;
start = G__10290;
t = G__10291;
families = G__10292;
escaping = G__10293;
in_word = G__10294;
continue;
}
} else
{if((subpar.paredit.whitespace_QMARK_.call(null,a)) && (!(in_word)))
{{
var G__10295 = j;
var G__10296 = subpar.paredit.code;
var G__10297 = openings;
var G__10298 = -1;
var G__10299 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10300 = families;
var G__10301 = false;
var G__10302 = false;
i = G__10295;
mode = G__10296;
openings = G__10297;
start = G__10298;
t = G__10299;
families = G__10300;
escaping = G__10301;
in_word = G__10302;
continue;
}
} else
{if((!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (in_word))
{{
var G__10303 = j;
var G__10304 = subpar.paredit.code;
var G__10305 = openings;
var G__10306 = start;
var G__10307 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10308 = families;
var G__10309 = false;
var G__10310 = true;
i = G__10303;
mode = G__10304;
openings = G__10305;
start = G__10306;
t = G__10307;
families = G__10308;
escaping = G__10309;
in_word = G__10310;
continue;
}
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__10311 = j;
var G__10312 = subpar.paredit.code;
var G__10313 = openings;
var G__10314 = start;
var G__10315 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?",o], null));
var G__10316 = families;
var G__10317 = escaping;
var G__10318 = in_word;
i = G__10311;
mode = G__10312;
openings = G__10313;
start = G__10314;
t = G__10315;
families = G__10316;
escaping = G__10317;
in_word = G__10318;
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

//# sourceMappingURL=paredit.js.map