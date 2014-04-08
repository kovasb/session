// Compiled by ClojureScript 0.0-2197
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
subpar.paredit.count_lines = (function count_lines(s,i,j){var and__3466__auto__ = i;if(cljs.core.truth_(and__3466__auto__))
{var and__3466__auto____$1 = j;if(cljs.core.truth_(and__3466__auto____$1))
{return (cljs.core.count.call(null,cljs.core.filter.call(null,((function (and__3466__auto____$1,and__3466__auto__){
return (function (p1__10478_SHARP_){return cljs.core._EQ_.call(null,"\n",p1__10478_SHARP_);
});})(and__3466__auto____$1,and__3466__auto__))
,cljs.core.drop.call(null,i,cljs.core.drop_last.call(null,((cljs.core.count.call(null,s) - j) - 1),cljs.core.take.call(null,cljs.core.count.call(null,s),s))))) + 1);
} else
{return and__3466__auto____$1;
}
} else
{return and__3466__auto__;
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
var G__10479 = (c + 1);
var G__10480 = (j - 1);
c = G__10479;
j = G__10480;
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
subpar.paredit.backward_up_fn = (function backward_up_fn(s,i){var vec__10482 = subpar.paredit.get_wrapper.call(null,subpar.paredit.parse.call(null,s),i);var o = cljs.core.nth.call(null,vec__10482,0,null);var c = cljs.core.nth.call(null,vec__10482,1,null);if(cljs.core._EQ_.call(null,-1,o))
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
subpar.paredit.close_expression_vals = (function close_expression_vals(p,i){var vec__10484 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10484,0,null);var c = cljs.core.nth.call(null,vec__10484,1,null);if(cljs.core._EQ_.call(null,-1,o))
{return cljs.core.PersistentVector.EMPTY;
} else
{var start = ((function (){var or__3478__auto__ = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.identity,p));if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
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
return (function (p1__10485_SHARP_){var and__3466__auto__ = (p1__10485_SHARP_ >= i);if(and__3466__auto__)
{return cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"families","families",1801311860),p1__10485_SHARP_], null));
} else
{return and__3466__auto__;
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
return (function (p1__10486_SHARP_){return (p1__10486_SHARP_ < i);
});})(p))
,p));var o = subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p,i);var or__3478__auto__ = b;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
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
return (function (p1__10487_SHARP_){var and__3466__auto__ = (p1__10487_SHARP_ < i);if(and__3466__auto__)
{return subpar.paredit.closes_list_QMARK_.call(null,p,p1__10487_SHARP_);
} else
{return and__3466__auto__;
}
});})(p))
,p));var or__3478__auto__ = b;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return i;
}
});
/**
* paredit-forward-up
*/
subpar.paredit.forward_up_fn = (function forward_up_fn(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10489 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10489,0,null);var c = cljs.core.nth.call(null,vec__10489,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
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
return (function (p1__10490_SHARP_){return (p1__10490_SHARP_ >= i);
});})(p))
,p));var c = subpar.paredit.get_closing_delimiter_index_with_parse.call(null,p,i);var l = cljs.core.count.call(null,s);if(cljs.core.truth_(b))
{return (b + 1);
} else
{if(cljs.core.truth_(c))
{var x__3792__auto__ = (c + 1);var y__3793__auto__ = l;return ((x__3792__auto__ < y__3793__auto__) ? x__3792__auto__ : y__3793__auto__);
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
subpar.paredit.forward_slurp_vals = (function forward_slurp_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10493 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10493,0,null);var c = cljs.core.nth.call(null,vec__10493,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var a = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
{return cljs.core.nth.call(null,s,c,false);
} else
{return and__3466__auto__;
}
})();var d = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
{return cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,o,cljs.core.vals,((function (and__3466__auto__,p,vec__10493,o,c,in_list,a){
return (function (p1__10491_SHARP_){return (p1__10491_SHARP_ > c);
});})(and__3466__auto__,p,vec__10493,o,c,in_list,a))
,p));
} else
{return and__3466__auto__;
}
})();if(cljs.core.truth_((function (){var and__3466__auto__ = a;if(cljs.core.truth_(and__3466__auto__))
{var and__3466__auto____$1 = c;if(cljs.core.truth_(and__3466__auto____$1))
{return d;
} else
{return and__3466__auto____$1;
}
} else
{return and__3466__auto__;
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
subpar.paredit.backward_slurp_vals = (function backward_slurp_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10496 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10496,0,null);var c = cljs.core.nth.call(null,vec__10496,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var d = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
{return cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,o,cljs.core.keys,((function (and__3466__auto__,p,vec__10496,o,c,in_list){
return (function (p1__10494_SHARP_){return (p1__10494_SHARP_ < o);
});})(and__3466__auto__,p,vec__10496,o,c,in_list))
,p));
} else
{return and__3466__auto__;
}
})();var a = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
{return cljs.core.nth.call(null,s,o,false);
} else
{return and__3466__auto__;
}
})();if(cljs.core.truth_((function (){var and__3466__auto__ = a;if(cljs.core.truth_(and__3466__auto__))
{return d;
} else
{return and__3466__auto__;
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
subpar.paredit.forward_barf_vals = (function forward_barf_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10498 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10498,0,null);var c = cljs.core.nth.call(null,vec__10498,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var endings = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.constantly.call(null,true),p);
} else
{return and__3466__auto__;
}
})();var a = (function (){var and__3466__auto__ = c;if(cljs.core.truth_(and__3466__auto__))
{var and__3466__auto____$1 = in_list;if(and__3466__auto____$1)
{return cljs.core.nth.call(null,s,c,null);
} else
{return and__3466__auto____$1;
}
} else
{return and__3466__auto__;
}
})();var r = (function (){var or__3478__auto__ = subpar.paredit.count_lines.call(null,s,o,c);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
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
subpar.paredit.backward_barf_vals = (function backward_barf_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10500 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10500,0,null);var c = cljs.core.nth.call(null,vec__10500,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var starts = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.keys,cljs.core.constantly.call(null,true),p);
} else
{return and__3466__auto__;
}
})();var a = (function (){var and__3466__auto__ = o;if(cljs.core.truth_(and__3466__auto__))
{var and__3466__auto____$1 = in_list;if(and__3466__auto____$1)
{return cljs.core.nth.call(null,s,o,null);
} else
{return and__3466__auto____$1;
}
} else
{return and__3466__auto__;
}
})();var r = (function (){var or__3478__auto__ = subpar.paredit.count_lines.call(null,s,o,c);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
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
subpar.paredit.splice_vals = (function splice_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10503 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10503,0,null);var c = cljs.core.nth.call(null,vec__10503,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10504 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10504,0,null);var d = cljs.core.nth.call(null,vec__10504,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,c,(function (){var x__3785__auto__ = 0;var y__3786__auto__ = n;return ((x__3785__auto__ > y__3786__auto__) ? x__3785__auto__ : y__3786__auto__);
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
subpar.paredit.splice_delete_backward_vals = (function splice_delete_backward_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10507 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10507,0,null);var c = cljs.core.nth.call(null,vec__10507,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10508 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10508,0,null);var d = cljs.core.nth.call(null,vec__10508,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,(function (){var x__3785__auto__ = o;var y__3786__auto__ = i;return ((x__3785__auto__ > y__3786__auto__) ? x__3785__auto__ : y__3786__auto__);
})(),c,(function (){var x__3785__auto__ = 0;var y__3786__auto__ = n;return ((x__3785__auto__ > y__3786__auto__) ? x__3785__auto__ : y__3786__auto__);
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
subpar.paredit.splice_delete_forward_vals = (function splice_delete_forward_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10511 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10511,0,null);var c = cljs.core.nth.call(null,vec__10511,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10512 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10512,0,null);var d = cljs.core.nth.call(null,vec__10512,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,i,(c + 1),(function (){var x__3785__auto__ = 0;var y__3786__auto__ = n;return ((x__3785__auto__ > y__3786__auto__) ? x__3785__auto__ : y__3786__auto__);
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
var G__10513 = j;
var G__10514 = mode;
var G__10515 = openings;
var G__10516 = i;
var G__10517 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10518 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),j);
var G__10519 = true;
var G__10520 = true;
i = G__10513;
mode = G__10514;
openings = G__10515;
start = G__10516;
t = G__10517;
families = G__10518;
escaping = G__10519;
in_word = G__10520;
continue;
}
} else
{if((cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode)) && (cljs.core._EQ_.call(null,"\\",a)) && (!(escaping)))
{{
var G__10521 = j;
var G__10522 = mode;
var G__10523 = openings;
var G__10524 = i;
var G__10525 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10526 = families;
var G__10527 = true;
var G__10528 = true;
i = G__10521;
mode = G__10522;
openings = G__10523;
start = G__10524;
t = G__10525;
families = G__10526;
escaping = G__10527;
in_word = G__10528;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.code,mode)) && (cljs.core._EQ_.call(null,";",a)) && (!(escaping)))
{{
var G__10529 = j;
var G__10530 = subpar.paredit.cmmnt;
var G__10531 = openings;
var G__10532 = start;
var G__10533 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10534 = families;
var G__10535 = false;
var G__10536 = false;
i = G__10529;
mode = G__10530;
openings = G__10531;
start = G__10532;
t = G__10533;
families = G__10534;
escaping = G__10535;
in_word = G__10536;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode)) && (cljs.core._EQ_.call(null,"\n",a)))
{{
var G__10537 = j;
var G__10538 = subpar.paredit.code;
var G__10539 = openings;
var G__10540 = start;
var G__10541 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10542 = families;
var G__10543 = false;
var G__10544 = false;
i = G__10537;
mode = G__10538;
openings = G__10539;
start = G__10540;
t = G__10541;
families = G__10542;
escaping = G__10543;
in_word = G__10544;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode))
{{
var G__10545 = j;
var G__10546 = subpar.paredit.cmmnt;
var G__10547 = openings;
var G__10548 = start;
var G__10549 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10550 = families;
var G__10551 = false;
var G__10552 = false;
i = G__10545;
mode = G__10546;
openings = G__10547;
start = G__10548;
t = G__10549;
families = G__10550;
escaping = G__10551;
in_word = G__10552;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.code,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)))
{{
var G__10553 = j;
var G__10554 = subpar.paredit.string;
var G__10555 = cljs.core.conj.call(null,openings,i);
var G__10556 = -1;
var G__10557 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10558 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),j);
var G__10559 = false;
var G__10560 = false;
i = G__10553;
mode = G__10554;
openings = G__10555;
start = G__10556;
t = G__10557;
families = G__10558;
escaping = G__10559;
in_word = G__10560;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)) && (in_word))
{{
var G__10561 = j;
var G__10562 = subpar.paredit.code;
var G__10563 = cljs.core.pop.call(null,openings);
var G__10564 = -1;
var G__10565 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10566 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10567 = false;
var G__10568 = false;
i = G__10561;
mode = G__10562;
openings = G__10563;
start = G__10564;
t = G__10565;
families = G__10566;
escaping = G__10567;
in_word = G__10568;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)))
{{
var G__10569 = j;
var G__10570 = subpar.paredit.code;
var G__10571 = cljs.core.pop.call(null,openings);
var G__10572 = -1;
var G__10573 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10574 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10575 = false;
var G__10576 = false;
i = G__10569;
mode = G__10570;
openings = G__10571;
start = G__10572;
t = G__10573;
families = G__10574;
escaping = G__10575;
in_word = G__10576;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (!(in_word)))
{{
var G__10577 = j;
var G__10578 = subpar.paredit.string;
var G__10579 = openings;
var G__10580 = i;
var G__10581 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10582 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i);
var G__10583 = false;
var G__10584 = true;
i = G__10577;
mode = G__10578;
openings = G__10579;
start = G__10580;
t = G__10581;
families = G__10582;
escaping = G__10583;
in_word = G__10584;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (subpar.paredit.whitespace_QMARK_.call(null,a)) && (in_word))
{{
var G__10585 = j;
var G__10586 = subpar.paredit.string;
var G__10587 = openings;
var G__10588 = -1;
var G__10589 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10590 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10591 = false;
var G__10592 = false;
i = G__10585;
mode = G__10586;
openings = G__10587;
start = G__10588;
t = G__10589;
families = G__10590;
escaping = G__10591;
in_word = G__10592;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.string,mode))
{{
var G__10593 = j;
var G__10594 = subpar.paredit.string;
var G__10595 = openings;
var G__10596 = start;
var G__10597 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10598 = families;
var G__10599 = false;
var G__10600 = in_word;
i = G__10593;
mode = G__10594;
openings = G__10595;
start = G__10596;
t = G__10597;
families = G__10598;
escaping = G__10599;
in_word = G__10600;
continue;
}
} else
{if((subpar.paredit.opener_QMARK_.call(null,a)) && (in_word))
{{
var G__10601 = j;
var G__10602 = subpar.paredit.code;
var G__10603 = cljs.core.conj.call(null,openings,i);
var G__10604 = -1;
var G__10605 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10606 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY);
var G__10607 = false;
var G__10608 = false;
i = G__10601;
mode = G__10602;
openings = G__10603;
start = G__10604;
t = G__10605;
families = G__10606;
escaping = G__10607;
in_word = G__10608;
continue;
}
} else
{if(subpar.paredit.opener_QMARK_.call(null,a))
{{
var G__10609 = j;
var G__10610 = subpar.paredit.code;
var G__10611 = cljs.core.conj.call(null,openings,i);
var G__10612 = -1;
var G__10613 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10614 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY);
var G__10615 = false;
var G__10616 = false;
i = G__10609;
mode = G__10610;
openings = G__10611;
start = G__10612;
t = G__10613;
families = G__10614;
escaping = G__10615;
in_word = G__10616;
continue;
}
} else
{if((subpar.paredit.closer_QMARK_.call(null,a)) && (in_word))
{{
var G__10617 = j;
var G__10618 = subpar.paredit.code;
var G__10619 = cljs.core.pop.call(null,openings);
var G__10620 = -1;
var G__10621 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10622 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10623 = false;
var G__10624 = false;
i = G__10617;
mode = G__10618;
openings = G__10619;
start = G__10620;
t = G__10621;
families = G__10622;
escaping = G__10623;
in_word = G__10624;
continue;
}
} else
{if(subpar.paredit.closer_QMARK_.call(null,a))
{{
var G__10625 = j;
var G__10626 = subpar.paredit.code;
var G__10627 = cljs.core.pop.call(null,openings);
var G__10628 = -1;
var G__10629 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10630 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10631 = false;
var G__10632 = false;
i = G__10625;
mode = G__10626;
openings = G__10627;
start = G__10628;
t = G__10629;
families = G__10630;
escaping = G__10631;
in_word = G__10632;
continue;
}
} else
{if((!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (!(in_word)))
{{
var G__10633 = j;
var G__10634 = subpar.paredit.code;
var G__10635 = openings;
var G__10636 = i;
var G__10637 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10638 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i);
var G__10639 = false;
var G__10640 = true;
i = G__10633;
mode = G__10634;
openings = G__10635;
start = G__10636;
t = G__10637;
families = G__10638;
escaping = G__10639;
in_word = G__10640;
continue;
}
} else
{if((subpar.paredit.whitespace_QMARK_.call(null,a)) && (in_word))
{{
var G__10641 = j;
var G__10642 = subpar.paredit.code;
var G__10643 = openings;
var G__10644 = -1;
var G__10645 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10646 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10647 = false;
var G__10648 = false;
i = G__10641;
mode = G__10642;
openings = G__10643;
start = G__10644;
t = G__10645;
families = G__10646;
escaping = G__10647;
in_word = G__10648;
continue;
}
} else
{if((subpar.paredit.whitespace_QMARK_.call(null,a)) && (!(in_word)))
{{
var G__10649 = j;
var G__10650 = subpar.paredit.code;
var G__10651 = openings;
var G__10652 = -1;
var G__10653 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10654 = families;
var G__10655 = false;
var G__10656 = false;
i = G__10649;
mode = G__10650;
openings = G__10651;
start = G__10652;
t = G__10653;
families = G__10654;
escaping = G__10655;
in_word = G__10656;
continue;
}
} else
{if((!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (in_word))
{{
var G__10657 = j;
var G__10658 = subpar.paredit.code;
var G__10659 = openings;
var G__10660 = start;
var G__10661 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10662 = families;
var G__10663 = false;
var G__10664 = true;
i = G__10657;
mode = G__10658;
openings = G__10659;
start = G__10660;
t = G__10661;
families = G__10662;
escaping = G__10663;
in_word = G__10664;
continue;
}
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__10665 = j;
var G__10666 = subpar.paredit.code;
var G__10667 = openings;
var G__10668 = start;
var G__10669 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?",o], null));
var G__10670 = families;
var G__10671 = escaping;
var G__10672 = in_word;
i = G__10665;
mode = G__10666;
openings = G__10667;
start = G__10668;
t = G__10669;
families = G__10670;
escaping = G__10671;
in_word = G__10672;
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