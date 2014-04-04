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
return (function (p1__10483_SHARP_){return cljs.core._EQ_.call(null,"\n",p1__10483_SHARP_);
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
var G__10484 = (c + 1);
var G__10485 = (j - 1);
c = G__10484;
j = G__10485;
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
subpar.paredit.backward_up_fn = (function backward_up_fn(s,i){var vec__10487 = subpar.paredit.get_wrapper.call(null,subpar.paredit.parse.call(null,s),i);var o = cljs.core.nth.call(null,vec__10487,0,null);var c = cljs.core.nth.call(null,vec__10487,1,null);if(cljs.core._EQ_.call(null,-1,o))
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
subpar.paredit.close_expression_vals = (function close_expression_vals(p,i){var vec__10489 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10489,0,null);var c = cljs.core.nth.call(null,vec__10489,1,null);if(cljs.core._EQ_.call(null,-1,o))
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
return (function (p1__10490_SHARP_){var and__3466__auto__ = (p1__10490_SHARP_ >= i);if(and__3466__auto__)
{return cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"families","families",1801311860),p1__10490_SHARP_], null));
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
return (function (p1__10491_SHARP_){return (p1__10491_SHARP_ < i);
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
return (function (p1__10492_SHARP_){var and__3466__auto__ = (p1__10492_SHARP_ < i);if(and__3466__auto__)
{return subpar.paredit.closes_list_QMARK_.call(null,p,p1__10492_SHARP_);
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
subpar.paredit.forward_up_fn = (function forward_up_fn(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10494 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10494,0,null);var c = cljs.core.nth.call(null,vec__10494,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
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
return (function (p1__10495_SHARP_){return (p1__10495_SHARP_ >= i);
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
subpar.paredit.forward_slurp_vals = (function forward_slurp_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10498 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10498,0,null);var c = cljs.core.nth.call(null,vec__10498,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var a = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
{return cljs.core.nth.call(null,s,c,false);
} else
{return and__3466__auto__;
}
})();var d = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
{return cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,o,cljs.core.vals,((function (and__3466__auto__,p,vec__10498,o,c,in_list,a){
return (function (p1__10496_SHARP_){return (p1__10496_SHARP_ > c);
});})(and__3466__auto__,p,vec__10498,o,c,in_list,a))
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
subpar.paredit.backward_slurp_vals = (function backward_slurp_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10501 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10501,0,null);var c = cljs.core.nth.call(null,vec__10501,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var d = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
{return cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,o,cljs.core.keys,((function (and__3466__auto__,p,vec__10501,o,c,in_list){
return (function (p1__10499_SHARP_){return (p1__10499_SHARP_ < o);
});})(and__3466__auto__,p,vec__10501,o,c,in_list))
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
subpar.paredit.forward_barf_vals = (function forward_barf_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10503 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10503,0,null);var c = cljs.core.nth.call(null,vec__10503,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var endings = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
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
subpar.paredit.backward_barf_vals = (function backward_barf_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10505 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10505,0,null);var c = cljs.core.nth.call(null,vec__10505,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var starts = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
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
subpar.paredit.splice_vals = (function splice_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10508 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10508,0,null);var c = cljs.core.nth.call(null,vec__10508,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10509 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10509,0,null);var d = cljs.core.nth.call(null,vec__10509,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,c,(function (){var x__3785__auto__ = 0;var y__3786__auto__ = n;return ((x__3785__auto__ > y__3786__auto__) ? x__3785__auto__ : y__3786__auto__);
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
subpar.paredit.splice_delete_backward_vals = (function splice_delete_backward_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10512 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10512,0,null);var c = cljs.core.nth.call(null,vec__10512,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10513 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10513,0,null);var d = cljs.core.nth.call(null,vec__10513,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,(function (){var x__3785__auto__ = o;var y__3786__auto__ = i;return ((x__3785__auto__ > y__3786__auto__) ? x__3785__auto__ : y__3786__auto__);
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
subpar.paredit.splice_delete_forward_vals = (function splice_delete_forward_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10516 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10516,0,null);var c = cljs.core.nth.call(null,vec__10516,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10517 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10517,0,null);var d = cljs.core.nth.call(null,vec__10517,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,i,(c + 1),(function (){var x__3785__auto__ = 0;var y__3786__auto__ = n;return ((x__3785__auto__ > y__3786__auto__) ? x__3785__auto__ : y__3786__auto__);
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
var G__10518 = j;
var G__10519 = mode;
var G__10520 = openings;
var G__10521 = i;
var G__10522 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10523 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),j);
var G__10524 = true;
var G__10525 = true;
i = G__10518;
mode = G__10519;
openings = G__10520;
start = G__10521;
t = G__10522;
families = G__10523;
escaping = G__10524;
in_word = G__10525;
continue;
}
} else
{if((cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode)) && (cljs.core._EQ_.call(null,"\\",a)) && (!(escaping)))
{{
var G__10526 = j;
var G__10527 = mode;
var G__10528 = openings;
var G__10529 = i;
var G__10530 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10531 = families;
var G__10532 = true;
var G__10533 = true;
i = G__10526;
mode = G__10527;
openings = G__10528;
start = G__10529;
t = G__10530;
families = G__10531;
escaping = G__10532;
in_word = G__10533;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.code,mode)) && (cljs.core._EQ_.call(null,";",a)) && (!(escaping)))
{{
var G__10534 = j;
var G__10535 = subpar.paredit.cmmnt;
var G__10536 = openings;
var G__10537 = start;
var G__10538 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10539 = families;
var G__10540 = false;
var G__10541 = false;
i = G__10534;
mode = G__10535;
openings = G__10536;
start = G__10537;
t = G__10538;
families = G__10539;
escaping = G__10540;
in_word = G__10541;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode)) && (cljs.core._EQ_.call(null,"\n",a)))
{{
var G__10542 = j;
var G__10543 = subpar.paredit.code;
var G__10544 = openings;
var G__10545 = start;
var G__10546 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10547 = families;
var G__10548 = false;
var G__10549 = false;
i = G__10542;
mode = G__10543;
openings = G__10544;
start = G__10545;
t = G__10546;
families = G__10547;
escaping = G__10548;
in_word = G__10549;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode))
{{
var G__10550 = j;
var G__10551 = subpar.paredit.cmmnt;
var G__10552 = openings;
var G__10553 = start;
var G__10554 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10555 = families;
var G__10556 = false;
var G__10557 = false;
i = G__10550;
mode = G__10551;
openings = G__10552;
start = G__10553;
t = G__10554;
families = G__10555;
escaping = G__10556;
in_word = G__10557;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.code,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)))
{{
var G__10558 = j;
var G__10559 = subpar.paredit.string;
var G__10560 = cljs.core.conj.call(null,openings,i);
var G__10561 = -1;
var G__10562 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10563 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),j);
var G__10564 = false;
var G__10565 = false;
i = G__10558;
mode = G__10559;
openings = G__10560;
start = G__10561;
t = G__10562;
families = G__10563;
escaping = G__10564;
in_word = G__10565;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)) && (in_word))
{{
var G__10566 = j;
var G__10567 = subpar.paredit.code;
var G__10568 = cljs.core.pop.call(null,openings);
var G__10569 = -1;
var G__10570 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10571 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10572 = false;
var G__10573 = false;
i = G__10566;
mode = G__10567;
openings = G__10568;
start = G__10569;
t = G__10570;
families = G__10571;
escaping = G__10572;
in_word = G__10573;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)))
{{
var G__10574 = j;
var G__10575 = subpar.paredit.code;
var G__10576 = cljs.core.pop.call(null,openings);
var G__10577 = -1;
var G__10578 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10579 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10580 = false;
var G__10581 = false;
i = G__10574;
mode = G__10575;
openings = G__10576;
start = G__10577;
t = G__10578;
families = G__10579;
escaping = G__10580;
in_word = G__10581;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (!(in_word)))
{{
var G__10582 = j;
var G__10583 = subpar.paredit.string;
var G__10584 = openings;
var G__10585 = i;
var G__10586 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10587 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i);
var G__10588 = false;
var G__10589 = true;
i = G__10582;
mode = G__10583;
openings = G__10584;
start = G__10585;
t = G__10586;
families = G__10587;
escaping = G__10588;
in_word = G__10589;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (subpar.paredit.whitespace_QMARK_.call(null,a)) && (in_word))
{{
var G__10590 = j;
var G__10591 = subpar.paredit.string;
var G__10592 = openings;
var G__10593 = -1;
var G__10594 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10595 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10596 = false;
var G__10597 = false;
i = G__10590;
mode = G__10591;
openings = G__10592;
start = G__10593;
t = G__10594;
families = G__10595;
escaping = G__10596;
in_word = G__10597;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.string,mode))
{{
var G__10598 = j;
var G__10599 = subpar.paredit.string;
var G__10600 = openings;
var G__10601 = start;
var G__10602 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10603 = families;
var G__10604 = false;
var G__10605 = in_word;
i = G__10598;
mode = G__10599;
openings = G__10600;
start = G__10601;
t = G__10602;
families = G__10603;
escaping = G__10604;
in_word = G__10605;
continue;
}
} else
{if((subpar.paredit.opener_QMARK_.call(null,a)) && (in_word))
{{
var G__10606 = j;
var G__10607 = subpar.paredit.code;
var G__10608 = cljs.core.conj.call(null,openings,i);
var G__10609 = -1;
var G__10610 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10611 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY);
var G__10612 = false;
var G__10613 = false;
i = G__10606;
mode = G__10607;
openings = G__10608;
start = G__10609;
t = G__10610;
families = G__10611;
escaping = G__10612;
in_word = G__10613;
continue;
}
} else
{if(subpar.paredit.opener_QMARK_.call(null,a))
{{
var G__10614 = j;
var G__10615 = subpar.paredit.code;
var G__10616 = cljs.core.conj.call(null,openings,i);
var G__10617 = -1;
var G__10618 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10619 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY);
var G__10620 = false;
var G__10621 = false;
i = G__10614;
mode = G__10615;
openings = G__10616;
start = G__10617;
t = G__10618;
families = G__10619;
escaping = G__10620;
in_word = G__10621;
continue;
}
} else
{if((subpar.paredit.closer_QMARK_.call(null,a)) && (in_word))
{{
var G__10622 = j;
var G__10623 = subpar.paredit.code;
var G__10624 = cljs.core.pop.call(null,openings);
var G__10625 = -1;
var G__10626 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10627 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10628 = false;
var G__10629 = false;
i = G__10622;
mode = G__10623;
openings = G__10624;
start = G__10625;
t = G__10626;
families = G__10627;
escaping = G__10628;
in_word = G__10629;
continue;
}
} else
{if(subpar.paredit.closer_QMARK_.call(null,a))
{{
var G__10630 = j;
var G__10631 = subpar.paredit.code;
var G__10632 = cljs.core.pop.call(null,openings);
var G__10633 = -1;
var G__10634 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10635 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10636 = false;
var G__10637 = false;
i = G__10630;
mode = G__10631;
openings = G__10632;
start = G__10633;
t = G__10634;
families = G__10635;
escaping = G__10636;
in_word = G__10637;
continue;
}
} else
{if((!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (!(in_word)))
{{
var G__10638 = j;
var G__10639 = subpar.paredit.code;
var G__10640 = openings;
var G__10641 = i;
var G__10642 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10643 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i);
var G__10644 = false;
var G__10645 = true;
i = G__10638;
mode = G__10639;
openings = G__10640;
start = G__10641;
t = G__10642;
families = G__10643;
escaping = G__10644;
in_word = G__10645;
continue;
}
} else
{if((subpar.paredit.whitespace_QMARK_.call(null,a)) && (in_word))
{{
var G__10646 = j;
var G__10647 = subpar.paredit.code;
var G__10648 = openings;
var G__10649 = -1;
var G__10650 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10651 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10652 = false;
var G__10653 = false;
i = G__10646;
mode = G__10647;
openings = G__10648;
start = G__10649;
t = G__10650;
families = G__10651;
escaping = G__10652;
in_word = G__10653;
continue;
}
} else
{if((subpar.paredit.whitespace_QMARK_.call(null,a)) && (!(in_word)))
{{
var G__10654 = j;
var G__10655 = subpar.paredit.code;
var G__10656 = openings;
var G__10657 = -1;
var G__10658 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10659 = families;
var G__10660 = false;
var G__10661 = false;
i = G__10654;
mode = G__10655;
openings = G__10656;
start = G__10657;
t = G__10658;
families = G__10659;
escaping = G__10660;
in_word = G__10661;
continue;
}
} else
{if((!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (in_word))
{{
var G__10662 = j;
var G__10663 = subpar.paredit.code;
var G__10664 = openings;
var G__10665 = start;
var G__10666 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10667 = families;
var G__10668 = false;
var G__10669 = true;
i = G__10662;
mode = G__10663;
openings = G__10664;
start = G__10665;
t = G__10666;
families = G__10667;
escaping = G__10668;
in_word = G__10669;
continue;
}
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__10670 = j;
var G__10671 = subpar.paredit.code;
var G__10672 = openings;
var G__10673 = start;
var G__10674 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?",o], null));
var G__10675 = families;
var G__10676 = escaping;
var G__10677 = in_word;
i = G__10670;
mode = G__10671;
openings = G__10672;
start = G__10673;
t = G__10674;
families = G__10675;
escaping = G__10676;
in_word = G__10677;
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