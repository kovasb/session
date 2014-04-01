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
subpar.paredit.count_lines = (function count_lines(s,i,j){var and__3450__auto__ = i;if(cljs.core.truth_(and__3450__auto__))
{var and__3450__auto____$1 = j;if(cljs.core.truth_(and__3450__auto____$1))
{return (cljs.core.count.call(null,cljs.core.filter.call(null,((function (and__3450__auto____$1,and__3450__auto__){
return (function (p1__10252_SHARP_){return cljs.core._EQ_.call(null,"\n",p1__10252_SHARP_);
});})(and__3450__auto____$1,and__3450__auto__))
,cljs.core.drop.call(null,i,cljs.core.drop_last.call(null,((cljs.core.count.call(null,s) - j) - 1),cljs.core.take.call(null,cljs.core.count.call(null,s),s))))) + 1);
} else
{return and__3450__auto____$1;
}
} else
{return and__3450__auto__;
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
var G__10253 = (c + 1);
var G__10254 = (j - 1);
c = G__10253;
j = G__10254;
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
subpar.paredit.backward_up_fn = (function backward_up_fn(s,i){var vec__10256 = subpar.paredit.get_wrapper.call(null,subpar.paredit.parse.call(null,s),i);var o = cljs.core.nth.call(null,vec__10256,0,null);var c = cljs.core.nth.call(null,vec__10256,1,null);if(cljs.core._EQ_.call(null,-1,o))
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
subpar.paredit.close_expression_vals = (function close_expression_vals(p,i){var vec__10258 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10258,0,null);var c = cljs.core.nth.call(null,vec__10258,1,null);if(cljs.core._EQ_.call(null,-1,o))
{return cljs.core.PersistentVector.EMPTY;
} else
{var start = ((function (){var or__3462__auto__ = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.identity,p));if(cljs.core.truth_(or__3462__auto__))
{return or__3462__auto__;
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
return (function (p1__10259_SHARP_){var and__3450__auto__ = (p1__10259_SHARP_ >= i);if(and__3450__auto__)
{return cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"families","families",1801311860),p1__10259_SHARP_], null));
} else
{return and__3450__auto__;
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
return (function (p1__10260_SHARP_){return (p1__10260_SHARP_ < i);
});})(p))
,p));var o = subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p,i);var or__3462__auto__ = b;if(cljs.core.truth_(or__3462__auto__))
{return or__3462__auto__;
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
return (function (p1__10261_SHARP_){var and__3450__auto__ = (p1__10261_SHARP_ < i);if(and__3450__auto__)
{return subpar.paredit.closes_list_QMARK_.call(null,p,p1__10261_SHARP_);
} else
{return and__3450__auto__;
}
});})(p))
,p));var or__3462__auto__ = b;if(cljs.core.truth_(or__3462__auto__))
{return or__3462__auto__;
} else
{return i;
}
});
/**
* paredit-forward-up
*/
subpar.paredit.forward_up_fn = (function forward_up_fn(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10263 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10263,0,null);var c = cljs.core.nth.call(null,vec__10263,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
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
return (function (p1__10264_SHARP_){return (p1__10264_SHARP_ >= i);
});})(p))
,p));var c = subpar.paredit.get_closing_delimiter_index_with_parse.call(null,p,i);var l = cljs.core.count.call(null,s);if(cljs.core.truth_(b))
{return (b + 1);
} else
{if(cljs.core.truth_(c))
{var x__3776__auto__ = (c + 1);var y__3777__auto__ = l;return ((x__3776__auto__ < y__3777__auto__) ? x__3776__auto__ : y__3777__auto__);
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
subpar.paredit.forward_slurp_vals = (function forward_slurp_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10267 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10267,0,null);var c = cljs.core.nth.call(null,vec__10267,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var a = (function (){var and__3450__auto__ = in_list;if(and__3450__auto__)
{return cljs.core.nth.call(null,s,c,false);
} else
{return and__3450__auto__;
}
})();var d = (function (){var and__3450__auto__ = in_list;if(and__3450__auto__)
{return cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,o,cljs.core.vals,((function (and__3450__auto__,p,vec__10267,o,c,in_list,a){
return (function (p1__10265_SHARP_){return (p1__10265_SHARP_ > c);
});})(and__3450__auto__,p,vec__10267,o,c,in_list,a))
,p));
} else
{return and__3450__auto__;
}
})();if(cljs.core.truth_((function (){var and__3450__auto__ = a;if(cljs.core.truth_(and__3450__auto__))
{var and__3450__auto____$1 = c;if(cljs.core.truth_(and__3450__auto____$1))
{return d;
} else
{return and__3450__auto____$1;
}
} else
{return and__3450__auto__;
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
subpar.paredit.backward_slurp_vals = (function backward_slurp_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10270 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10270,0,null);var c = cljs.core.nth.call(null,vec__10270,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var d = (function (){var and__3450__auto__ = in_list;if(and__3450__auto__)
{return cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,o,cljs.core.keys,((function (and__3450__auto__,p,vec__10270,o,c,in_list){
return (function (p1__10268_SHARP_){return (p1__10268_SHARP_ < o);
});})(and__3450__auto__,p,vec__10270,o,c,in_list))
,p));
} else
{return and__3450__auto__;
}
})();var a = (function (){var and__3450__auto__ = in_list;if(and__3450__auto__)
{return cljs.core.nth.call(null,s,o,false);
} else
{return and__3450__auto__;
}
})();if(cljs.core.truth_((function (){var and__3450__auto__ = a;if(cljs.core.truth_(and__3450__auto__))
{return d;
} else
{return and__3450__auto__;
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
subpar.paredit.forward_barf_vals = (function forward_barf_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10272 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10272,0,null);var c = cljs.core.nth.call(null,vec__10272,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var endings = (function (){var and__3450__auto__ = in_list;if(and__3450__auto__)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.constantly.call(null,true),p);
} else
{return and__3450__auto__;
}
})();var a = (function (){var and__3450__auto__ = c;if(cljs.core.truth_(and__3450__auto__))
{var and__3450__auto____$1 = in_list;if(and__3450__auto____$1)
{return cljs.core.nth.call(null,s,c,null);
} else
{return and__3450__auto____$1;
}
} else
{return and__3450__auto__;
}
})();var r = (function (){var or__3462__auto__ = subpar.paredit.count_lines.call(null,s,o,c);if(cljs.core.truth_(or__3462__auto__))
{return or__3462__auto__;
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
subpar.paredit.backward_barf_vals = (function backward_barf_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10274 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10274,0,null);var c = cljs.core.nth.call(null,vec__10274,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);var starts = (function (){var and__3450__auto__ = in_list;if(and__3450__auto__)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.keys,cljs.core.constantly.call(null,true),p);
} else
{return and__3450__auto__;
}
})();var a = (function (){var and__3450__auto__ = o;if(cljs.core.truth_(and__3450__auto__))
{var and__3450__auto____$1 = in_list;if(and__3450__auto____$1)
{return cljs.core.nth.call(null,s,o,null);
} else
{return and__3450__auto____$1;
}
} else
{return and__3450__auto__;
}
})();var r = (function (){var or__3462__auto__ = subpar.paredit.count_lines.call(null,s,o,c);if(cljs.core.truth_(or__3462__auto__))
{return or__3462__auto__;
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
subpar.paredit.splice_vals = (function splice_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10277 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10277,0,null);var c = cljs.core.nth.call(null,vec__10277,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10278 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10278,0,null);var d = cljs.core.nth.call(null,vec__10278,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,c,(function (){var x__3769__auto__ = 0;var y__3770__auto__ = n;return ((x__3769__auto__ > y__3770__auto__) ? x__3769__auto__ : y__3770__auto__);
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
subpar.paredit.splice_delete_backward_vals = (function splice_delete_backward_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10281 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10281,0,null);var c = cljs.core.nth.call(null,vec__10281,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10282 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10282,0,null);var d = cljs.core.nth.call(null,vec__10282,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,(function (){var x__3769__auto__ = o;var y__3770__auto__ = i;return ((x__3769__auto__ > y__3770__auto__) ? x__3769__auto__ : y__3770__auto__);
})(),c,(function (){var x__3769__auto__ = 0;var y__3770__auto__ = n;return ((x__3769__auto__ > y__3770__auto__) ? x__3769__auto__ : y__3770__auto__);
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
subpar.paredit.splice_delete_forward_vals = (function splice_delete_forward_vals(s,i){var p = subpar.paredit.parse.call(null,s);var vec__10285 = subpar.paredit.get_wrapper.call(null,p,i);var o = cljs.core.nth.call(null,vec__10285,0,null);var c = cljs.core.nth.call(null,vec__10285,1,null);var in_list = cljs.core.not_EQ_.call(null,-1,o);if(in_list)
{var vec__10286 = subpar.paredit.get_wrapper.call(null,p,o);var n = cljs.core.nth.call(null,vec__10286,0,null);var d = cljs.core.nth.call(null,vec__10286,1,null);var r = subpar.paredit.count_lines.call(null,s,n,d);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,i,(c + 1),(function (){var x__3769__auto__ = 0;var y__3770__auto__ = n;return ((x__3769__auto__ > y__3770__auto__) ? x__3769__auto__ : y__3770__auto__);
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
var G__10287 = j;
var G__10288 = mode;
var G__10289 = openings;
var G__10290 = i;
var G__10291 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10292 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),j);
var G__10293 = true;
var G__10294 = true;
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
{if((cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode)) && (cljs.core._EQ_.call(null,"\\",a)) && (!(escaping)))
{{
var G__10295 = j;
var G__10296 = mode;
var G__10297 = openings;
var G__10298 = i;
var G__10299 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10300 = families;
var G__10301 = true;
var G__10302 = true;
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
{if((cljs.core._EQ_.call(null,subpar.paredit.code,mode)) && (cljs.core._EQ_.call(null,";",a)) && (!(escaping)))
{{
var G__10303 = j;
var G__10304 = subpar.paredit.cmmnt;
var G__10305 = openings;
var G__10306 = start;
var G__10307 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10308 = families;
var G__10309 = false;
var G__10310 = false;
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
{if((cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode)) && (cljs.core._EQ_.call(null,"\n",a)))
{{
var G__10311 = j;
var G__10312 = subpar.paredit.code;
var G__10313 = openings;
var G__10314 = start;
var G__10315 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10316 = families;
var G__10317 = false;
var G__10318 = false;
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
{if(cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode))
{{
var G__10319 = j;
var G__10320 = subpar.paredit.cmmnt;
var G__10321 = openings;
var G__10322 = start;
var G__10323 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10324 = families;
var G__10325 = false;
var G__10326 = false;
i = G__10319;
mode = G__10320;
openings = G__10321;
start = G__10322;
t = G__10323;
families = G__10324;
escaping = G__10325;
in_word = G__10326;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.code,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)))
{{
var G__10327 = j;
var G__10328 = subpar.paredit.string;
var G__10329 = cljs.core.conj.call(null,openings,i);
var G__10330 = -1;
var G__10331 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10332 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),j);
var G__10333 = false;
var G__10334 = false;
i = G__10327;
mode = G__10328;
openings = G__10329;
start = G__10330;
t = G__10331;
families = G__10332;
escaping = G__10333;
in_word = G__10334;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)) && (in_word))
{{
var G__10335 = j;
var G__10336 = subpar.paredit.code;
var G__10337 = cljs.core.pop.call(null,openings);
var G__10338 = -1;
var G__10339 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10340 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10341 = false;
var G__10342 = false;
i = G__10335;
mode = G__10336;
openings = G__10337;
start = G__10338;
t = G__10339;
families = G__10340;
escaping = G__10341;
in_word = G__10342;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (cljs.core._EQ_.call(null,"\"",a)) && (!(escaping)))
{{
var G__10343 = j;
var G__10344 = subpar.paredit.code;
var G__10345 = cljs.core.pop.call(null,openings);
var G__10346 = -1;
var G__10347 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10348 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10349 = false;
var G__10350 = false;
i = G__10343;
mode = G__10344;
openings = G__10345;
start = G__10346;
t = G__10347;
families = G__10348;
escaping = G__10349;
in_word = G__10350;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (!(in_word)))
{{
var G__10351 = j;
var G__10352 = subpar.paredit.string;
var G__10353 = openings;
var G__10354 = i;
var G__10355 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10356 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i);
var G__10357 = false;
var G__10358 = true;
i = G__10351;
mode = G__10352;
openings = G__10353;
start = G__10354;
t = G__10355;
families = G__10356;
escaping = G__10357;
in_word = G__10358;
continue;
}
} else
{if((cljs.core._EQ_.call(null,subpar.paredit.string,mode)) && (subpar.paredit.whitespace_QMARK_.call(null,a)) && (in_word))
{{
var G__10359 = j;
var G__10360 = subpar.paredit.string;
var G__10361 = openings;
var G__10362 = -1;
var G__10363 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10364 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10365 = false;
var G__10366 = false;
i = G__10359;
mode = G__10360;
openings = G__10361;
start = G__10362;
t = G__10363;
families = G__10364;
escaping = G__10365;
in_word = G__10366;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.string,mode))
{{
var G__10367 = j;
var G__10368 = subpar.paredit.string;
var G__10369 = openings;
var G__10370 = start;
var G__10371 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10372 = families;
var G__10373 = false;
var G__10374 = in_word;
i = G__10367;
mode = G__10368;
openings = G__10369;
start = G__10370;
t = G__10371;
families = G__10372;
escaping = G__10373;
in_word = G__10374;
continue;
}
} else
{if((subpar.paredit.opener_QMARK_.call(null,a)) && (in_word))
{{
var G__10375 = j;
var G__10376 = subpar.paredit.code;
var G__10377 = cljs.core.conj.call(null,openings,i);
var G__10378 = -1;
var G__10379 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10380 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY);
var G__10381 = false;
var G__10382 = false;
i = G__10375;
mode = G__10376;
openings = G__10377;
start = G__10378;
t = G__10379;
families = G__10380;
escaping = G__10381;
in_word = G__10382;
continue;
}
} else
{if(subpar.paredit.opener_QMARK_.call(null,a))
{{
var G__10383 = j;
var G__10384 = subpar.paredit.code;
var G__10385 = cljs.core.conj.call(null,openings,i);
var G__10386 = -1;
var G__10387 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10388 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"children","children",2673430897)], null),cljs.core.PersistentArrayMap.EMPTY);
var G__10389 = false;
var G__10390 = false;
i = G__10383;
mode = G__10384;
openings = G__10385;
start = G__10386;
t = G__10387;
families = G__10388;
escaping = G__10389;
in_word = G__10390;
continue;
}
} else
{if((subpar.paredit.closer_QMARK_.call(null,a)) && (in_word))
{{
var G__10391 = j;
var G__10392 = subpar.paredit.code;
var G__10393 = cljs.core.pop.call(null,openings);
var G__10394 = -1;
var G__10395 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10396 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10397 = false;
var G__10398 = false;
i = G__10391;
mode = G__10392;
openings = G__10393;
start = G__10394;
t = G__10395;
families = G__10396;
escaping = G__10397;
in_word = G__10398;
continue;
}
} else
{if(subpar.paredit.closer_QMARK_.call(null,a))
{{
var G__10399 = j;
var G__10400 = subpar.paredit.code;
var G__10401 = cljs.core.pop.call(null,openings);
var G__10402 = -1;
var G__10403 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10404 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"closer","closer",3951351020)], null),i),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,openings),new cljs.core.Keyword(null,"children","children",2673430897),o], null),i);
var G__10405 = false;
var G__10406 = false;
i = G__10399;
mode = G__10400;
openings = G__10401;
start = G__10402;
t = G__10403;
families = G__10404;
escaping = G__10405;
in_word = G__10406;
continue;
}
} else
{if((!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (!(in_word)))
{{
var G__10407 = j;
var G__10408 = subpar.paredit.code;
var G__10409 = openings;
var G__10410 = i;
var G__10411 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10412 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),i], null),i);
var G__10413 = false;
var G__10414 = true;
i = G__10407;
mode = G__10408;
openings = G__10409;
start = G__10410;
t = G__10411;
families = G__10412;
escaping = G__10413;
in_word = G__10414;
continue;
}
} else
{if((subpar.paredit.whitespace_QMARK_.call(null,a)) && (in_word))
{{
var G__10415 = j;
var G__10416 = subpar.paredit.code;
var G__10417 = openings;
var G__10418 = -1;
var G__10419 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10420 = cljs.core.assoc_in.call(null,families,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,new cljs.core.Keyword(null,"children","children",2673430897),start], null),(i - 1));
var G__10421 = false;
var G__10422 = false;
i = G__10415;
mode = G__10416;
openings = G__10417;
start = G__10418;
t = G__10419;
families = G__10420;
escaping = G__10421;
in_word = G__10422;
continue;
}
} else
{if((subpar.paredit.whitespace_QMARK_.call(null,a)) && (!(in_word)))
{{
var G__10423 = j;
var G__10424 = subpar.paredit.code;
var G__10425 = openings;
var G__10426 = -1;
var G__10427 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10428 = families;
var G__10429 = false;
var G__10430 = false;
i = G__10423;
mode = G__10424;
openings = G__10425;
start = G__10426;
t = G__10427;
families = G__10428;
escaping = G__10429;
in_word = G__10430;
continue;
}
} else
{if((!(subpar.paredit.whitespace_QMARK_.call(null,a))) && (in_word))
{{
var G__10431 = j;
var G__10432 = subpar.paredit.code;
var G__10433 = openings;
var G__10434 = start;
var G__10435 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,o], null));
var G__10436 = families;
var G__10437 = false;
var G__10438 = true;
i = G__10431;
mode = G__10432;
openings = G__10433;
start = G__10434;
t = G__10435;
families = G__10436;
escaping = G__10437;
in_word = G__10438;
continue;
}
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__10439 = j;
var G__10440 = subpar.paredit.code;
var G__10441 = openings;
var G__10442 = start;
var G__10443 = cljs.core.conj.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?",o], null));
var G__10444 = families;
var G__10445 = escaping;
var G__10446 = in_word;
i = G__10439;
mode = G__10440;
openings = G__10441;
start = G__10442;
t = G__10443;
families = G__10444;
escaping = G__10445;
in_word = G__10446;
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