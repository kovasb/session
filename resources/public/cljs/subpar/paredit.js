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
return (function (p1__10482_SHARP_){return cljs.core._EQ_.call(null,"\n",p1__10482_SHARP_);
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
var G__10483 = (c + 1);
var G__10484 = (j - 1);
c = G__10483;
j = G__10484;
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
subpar.paredit.backward_up_fn = (function backward_up_fn(s,i){var vec__10486 = subpar.paredit.get_wrapper.call(null,subpar.paredit.parse.call(null,s),i);var o = cljs.core.nth.call(null,vec__10486,0,null);var c = cljs.core.nth.call(null,vec__10486,1,null);if(cljs.core._EQ_.call(null,-1,o))
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
subpar.paredit.close_expression_vals = (function close_expression_vals(p,i){var vec__10488 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10488,0,null);var c = cljs.core.nth.call(null,vec__10488,1,null);if(cljs.core._EQ_.call(null,-1,o))
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
return (function (p1__10489_SHARP_){var and__3466__auto__ = (p1__10489_SHARP_ >= i);if(and__3466__auto__)
{return cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"families","families",1801311860),p1__10489_SHARP_], null));
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
return (function (p1__10490_SHARP_){return (p1__10490_SHARP_ < i);
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
return (function (p1__10491_SHARP_){var and__3466__auto__ = (p1__10491_SHARP_ < i);if(and__3466__auto__)
{return subpar.paredit.closes_list_QMARK_.call(null,p,p1__10491_SHARP_);
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
subpar.paredit.forward_up_fn = (function forward_up_fn(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10493 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10493,0,null);var c = cljs.core.nth.call(null,vec__10493,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
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
return (function (p1__10494_SHARP_){return (p1__10494_SHARP_ >= i);
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
subpar.paredit.forward_slurp_vals = (function forward_slurp_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10497 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10497,0,null);var c = cljs.core.nth.call(null,vec__10497,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var a = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
{return cljs.core.nth.call(null,s,c,false);
} else
{return and__3466__auto__;
}
})();var d = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
{return cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,o,cljs.core.vals,((function (and__3466__auto__,p,vec__10497,o,c,in_list,a){
return (function (p1__10495_SHARP_){return (p1__10495_SHARP_ > c);
});})(and__3466__auto__,p,vec__10497,o,c,in_list,a))
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
subpar.paredit.backward_slurp_vals = (function backward_slurp_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10500 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10500,0,null);var c = cljs.core.nth.call(null,vec__10500,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var d = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
{return cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,o,cljs.core.keys,((function (and__3466__auto__,p,vec__10500,o,c,in_list){
return (function (p1__10498_SHARP_){return (p1__10498_SHARP_ < o);
});})(and__3466__auto__,p,vec__10500,o,c,in_list))
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
subpar.paredit.forward_barf_vals = (function forward_barf_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10502 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10502,0,null);var c = cljs.core.nth.call(null,vec__10502,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var endings = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
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
subpar.paredit.backward_barf_vals = (function backward_barf_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10504 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10504,0,null);var c = cljs.core.nth.call(null,vec__10504,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var starts = (function (){var and__3466__auto__ = in_list;if(and__3466__auto__)
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
subpar.paredit.splice_vals = (function splice_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10507 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10507,0,null);var c = cljs.core.nth.call(null,vec__10507,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10508 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10508,0,null);var d = cljs.core.nth.call(null,vec__10508,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,c,(function (){var x__3785__auto__ = 0;var y__3786__auto__ = n;return ((x__3785__auto__ > y__3786__auto__) ? x__3785__auto__ : y__3786__auto__);
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
subpar.paredit.splice_delete_backward_vals = (function splice_delete_backward_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10511 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10511,0,null);var c = cljs.core.nth.call(null,vec__10511,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10512 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10512,0,null);var d = cljs.core.nth.call(null,vec__10512,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,(function (){var x__3785__auto__ = o;var y__3786__auto__ = i;return ((x__3785__auto__ > y__3786__auto__) ? x__3785__auto__ : y__3786__auto__);
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
subpar.paredit.splice_delete_forward_vals = (function splice_delete_forward_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10515 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10515,0,null);var c = cljs.core.nth.call(null,vec__10515,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10516 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10516,0,null);var d = cljs.core.nth.call(null,vec__10516,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,i,(c + 1),(function (){var x__3785__auto__ = 0;var y__3786__auto__ = n;return ((x__3785__auto__ > y__3786__auto__) ? x__3785__auto__ : y__3786__auto__);
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
var G__10517 = j;
var G__10518 = mode;
var G__10519 = openings;
var G__10520 = i;
var G__10521 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10522 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),j);
var G__10523 = true;
var G__10524 = true;
i = G__10517;
mode = G__10518;
openings = G__10519;
start = G__10520;
t = G__10521;
families = G__10522;
escaping = G__10523;
in_word = G__10524;
continue;
}
} else
{if((cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode)) && (cljs.core._EQ_.call(null,"\\",a)) && (!(escaping)))
{{
var G__10525 = j;
var G__10526 = mode;
var G__10527 = openings;
var G__10528 = i;
var G__10529 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10530 = families;
var G__10531 = true;
var G__10532 = true;
i = G__10525;
mode = G__10526;
openings = G__10527;
start = G__10528;
t = G__10529;
families = G__10530;
escaping = G__10531;
in_word = G__10532;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.code,mode)) && (cljs.core._EQ_.call(null,";",a)) && (!(escaping)))
{{
var G__10533 = j;
var G__10534 = subpar.paredit.cmmnt;
var G__10535 = openings;
var G__10536 = start;
var G__10537 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10538 = families;
var G__10539 = false;
var G__10540 = false;
i = G__10533;
mode = G__10534;
openings = G__10535;
start = G__10536;
t = G__10537;
families = G__10538;
escaping = G__10539;
in_word = G__10540;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode)) && (cljs.core._EQ_.call(null,"\n",a)))
{{
var G__10541 = j;
var G__10542 = subpar.paredit.code;
var G__10543 = openings;
var G__10544 = start;
var G__10545 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10546 = families;
var G__10547 = false;
var G__10548 = false;
i = G__10541;
mode = G__10542;
openings = G__10543;
start = G__10544;
t = G__10545;
families = G__10546;
escaping = G__10547;
in_word = G__10548;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode))
{{
var G__10549 = j;
var G__10550 = subpar.paredit.cmmnt;
var G__10551 = openings;
var G__10552 = start;
var G__10553 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10554 = families;
var G__10555 = false;
var G__10556 = false;
i = G__10549;
mode = G__10550;
openings = G__10551;
start = G__10552;
t = G__10553;
families = G__10554;
escaping = G__10555;
in_word = G__10556;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.code,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)))
{{
var G__10557 = j;
var G__10558 = subpar.paredit.string;
var G__10559 = cljs.core.conj.call(null,openings,i);
var G__10560 = -1;
var G__10561 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10562 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),j);
var G__10563 = false;
var G__10564 = false;
i = G__10557;
mode = G__10558;
openings = G__10559;
start = G__10560;
t = G__10561;
families = G__10562;
escaping = G__10563;
in_word = G__10564;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)) && (in_word))
{{
var G__10565 = j;
var G__10566 = subpar.paredit.code;
var G__10567 = cljs.core.pop.call(null,openings);
var G__10568 = -1;
var G__10569 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10570 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10571 = false;
var G__10572 = false;
i = G__10565;
mode = G__10566;
openings = G__10567;
start = G__10568;
t = G__10569;
families = G__10570;
escaping = G__10571;
in_word = G__10572;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)))
{{
var G__10573 = j;
var G__10574 = subpar.paredit.code;
var G__10575 = cljs.core.pop.call(null,openings);
var G__10576 = -1;
var G__10577 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10578 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10579 = false;
var G__10580 = false;
i = G__10573;
mode = G__10574;
openings = G__10575;
start = G__10576;
t = G__10577;
families = G__10578;
escaping = G__10579;
in_word = G__10580;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (!(in_word)))
{{
var G__10581 = j;
var G__10582 = subpar.paredit.string;
var G__10583 = openings;
var G__10584 = i;
var G__10585 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10586 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i);
var G__10587 = false;
var G__10588 = true;
i = G__10581;
mode = G__10582;
openings = G__10583;
start = G__10584;
t = G__10585;
families = G__10586;
escaping = G__10587;
in_word = G__10588;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (subpar.paredit.whitespace_QMARK_.call(null,a)) && (in_word))
{{
var G__10589 = j;
var G__10590 = subpar.paredit.string;
var G__10591 = openings;
var G__10592 = -1;
var G__10593 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10594 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10595 = false;
var G__10596 = false;
i = G__10589;
mode = G__10590;
openings = G__10591;
start = G__10592;
t = G__10593;
families = G__10594;
escaping = G__10595;
in_word = G__10596;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.string,mode))
{{
var G__10597 = j;
var G__10598 = subpar.paredit.string;
var G__10599 = openings;
var G__10600 = start;
var G__10601 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10602 = families;
var G__10603 = false;
var G__10604 = in_word;
i = G__10597;
mode = G__10598;
openings = G__10599;
start = G__10600;
t = G__10601;
families = G__10602;
escaping = G__10603;
in_word = G__10604;
continue;
}
} else
{if((subpar.paredit.opener_QMARK_.call(null,a)) && (in_word))
{{
var G__10605 = j;
var G__10606 = subpar.paredit.code;
var G__10607 = cljs.core.conj.call(null,openings,i);
var G__10608 = -1;
var G__10609 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10610 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY);
var G__10611 = false;
var G__10612 = false;
i = G__10605;
mode = G__10606;
openings = G__10607;
start = G__10608;
t = G__10609;
families = G__10610;
escaping = G__10611;
in_word = G__10612;
continue;
}
} else
{if(subpar.paredit.opener_QMARK_.call(null,a))
{{
var G__10613 = j;
var G__10614 = subpar.paredit.code;
var G__10615 = cljs.core.conj.call(null,openings,i);
var G__10616 = -1;
var G__10617 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10618 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY);
var G__10619 = false;
var G__10620 = false;
i = G__10613;
mode = G__10614;
openings = G__10615;
start = G__10616;
t = G__10617;
families = G__10618;
escaping = G__10619;
in_word = G__10620;
continue;
}
} else
{if((subpar.paredit.closer_QMARK_.call(null,a)) && (in_word))
{{
var G__10621 = j;
var G__10622 = subpar.paredit.code;
var G__10623 = cljs.core.pop.call(null,openings);
var G__10624 = -1;
var G__10625 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10626 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10627 = false;
var G__10628 = false;
i = G__10621;
mode = G__10622;
openings = G__10623;
start = G__10624;
t = G__10625;
families = G__10626;
escaping = G__10627;
in_word = G__10628;
continue;
}
} else
{if(subpar.paredit.closer_QMARK_.call(null,a))
{{
var G__10629 = j;
var G__10630 = subpar.paredit.code;
var G__10631 = cljs.core.pop.call(null,openings);
var G__10632 = -1;
var G__10633 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10634 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10635 = false;
var G__10636 = false;
i = G__10629;
mode = G__10630;
openings = G__10631;
start = G__10632;
t = G__10633;
families = G__10634;
escaping = G__10635;
in_word = G__10636;
continue;
}
} else
{if((!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (!(in_word)))
{{
var G__10637 = j;
var G__10638 = subpar.paredit.code;
var G__10639 = openings;
var G__10640 = i;
var G__10641 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10642 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i);
var G__10643 = false;
var G__10644 = true;
i = G__10637;
mode = G__10638;
openings = G__10639;
start = G__10640;
t = G__10641;
families = G__10642;
escaping = G__10643;
in_word = G__10644;
continue;
}
} else
{if((subpar.paredit.whitespace_QMARK_.call(null,a)) && (in_word))
{{
var G__10645 = j;
var G__10646 = subpar.paredit.code;
var G__10647 = openings;
var G__10648 = -1;
var G__10649 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10650 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10651 = false;
var G__10652 = false;
i = G__10645;
mode = G__10646;
openings = G__10647;
start = G__10648;
t = G__10649;
families = G__10650;
escaping = G__10651;
in_word = G__10652;
continue;
}
} else
{if((subpar.paredit.whitespace_QMARK_.call(null,a)) && (!(in_word)))
{{
var G__10653 = j;
var G__10654 = subpar.paredit.code;
var G__10655 = openings;
var G__10656 = -1;
var G__10657 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10658 = families;
var G__10659 = false;
var G__10660 = false;
i = G__10653;
mode = G__10654;
openings = G__10655;
start = G__10656;
t = G__10657;
families = G__10658;
escaping = G__10659;
in_word = G__10660;
continue;
}
} else
{if((!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (in_word))
{{
var G__10661 = j;
var G__10662 = subpar.paredit.code;
var G__10663 = openings;
var G__10664 = start;
var G__10665 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10666 = families;
var G__10667 = false;
var G__10668 = true;
i = G__10661;
mode = G__10662;
openings = G__10663;
start = G__10664;
t = G__10665;
families = G__10666;
escaping = G__10667;
in_word = G__10668;
continue;
}
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__10669 = j;
var G__10670 = subpar.paredit.code;
var G__10671 = openings;
var G__10672 = start;
var G__10673 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?",o], null));
var G__10674 = families;
var G__10675 = escaping;
var G__10676 = in_word;
i = G__10669;
mode = G__10670;
openings = G__10671;
start = G__10672;
t = G__10673;
families = G__10674;
escaping = G__10675;
in_word = G__10676;
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