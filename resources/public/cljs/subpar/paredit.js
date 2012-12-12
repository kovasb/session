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
var or__3939__auto__ = cljs.core._EQ_.call(null,x,"\t");
if(or__3939__auto__)
{return or__3939__auto__;
} else
{var or__3939__auto____$1 = cljs.core._EQ_.call(null,x," ");
if(or__3939__auto____$1)
{return or__3939__auto____$1;
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
var and__3937__auto__ = (function (){var and__3937__auto__ = (0 <= i);
if(and__3937__auto__)
{return (i <= cljs.core.count.call(null,(new cljs.core.Keyword("\uFDD0'chars")).call(null,p)));
} else
{return and__3937__auto__;
}
})();
if(cljs.core.truth_(and__3937__auto__))
{return cljs.core._EQ_.call(null,mode,subpar.paredit.get_mode.call(null,p,i));
} else
{return and__3937__auto__;
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
var and__3937__auto__ = i;
if(cljs.core.truth_(and__3937__auto__))
{var and__3937__auto____$1 = j;
if(cljs.core.truth_(and__3937__auto____$1))
{return (cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__3184_SHARP_){
return cljs.core._EQ_.call(null,"\n",p1__3184_SHARP_);
}),cljs.core.drop.call(null,i,cljs.core.drop_last.call(null,((cljs.core.count.call(null,s) - j) - 1),cljs.core.take.call(null,cljs.core.count.call(null,s),s))))) + 1);
} else
{return and__3937__auto____$1;
}
} else
{return and__3937__auto__;
}
});
/**
* whether the current spot is escaped
*/
subpar.paredit.escaped_QMARK_ = (function escaped_QMARK_(s,i){
return cljs.core.odd_QMARK_.call(null,(function (){var c = 0;
var j = (i - 1);
while(true){
var a = cljs.core.nth.call(null,s,j,null);
if((j < 0))
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
var G__3185 = (c + 1);
var G__3186 = (j - 1);
c = G__3185;
j = G__3186;
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
var vec__3188 = subpar.paredit.get_wrapper.call(null,subpar.paredit.parse.call(null,s),i);
var o = cljs.core.nth.call(null,vec__3188,0,null);
var c = cljs.core.nth.call(null,vec__3188,1,null);
if(cljs.core._EQ_.call(null,-1,o))
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
subpar.paredit.forward_delete_action = (function forward_delete_action(s,i){
var p = subpar.paredit.parse.call(null,s);
var h = (i - 1);
var j = (i + 1);
var c = cljs.core.nth.call(null,s,i,null);
if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,j)))
{return 3;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([h,i], true),subpar.paredit.get_wrapper.call(null,p,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p,i)))
{return 0;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([i,j], true),subpar.paredit.get_wrapper.call(null,p,j)))
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
subpar.paredit.backward_delete_action = (function backward_delete_action(s,i){
var p = subpar.paredit.parse.call(null,s);
var g = (i - 2);
var h = (i - 1);
if((i <= 0))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,h)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,i)))
{return 2;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([g,h], true),subpar.paredit.get_wrapper.call(null,p,h)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p,h)))
{return 4;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([h,i], true),subpar.paredit.get_wrapper.call(null,p,i)))
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
subpar.paredit.double_quote_action = (function double_quote_action(s,i){
var p = subpar.paredit.parse.call(null,s);
if((i < 0))
{return 0;
} else
{if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.in_comment_QMARK_.call(null,p,i)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.n_str_QMARK_.call(null,p,i)))
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
var vec__3191 = subpar.paredit.get_wrapper.call(null,p,i);
var o = cljs.core.nth.call(null,vec__3191,0,null);
var c = cljs.core.nth.call(null,vec__3191,1,null);
if(cljs.core._EQ_.call(null,-1,o))
{return cljs.core.PersistentVector.EMPTY;
} else
{var start = ((function (){var or__3939__auto__ = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.identity,p));
if(cljs.core.truth_(or__3939__auto__))
{return or__3939__auto__;
} else
{return o;
}
})() + 1);
var delete$ = cljs.core.not_EQ_.call(null,start,c);
var dest = ((delete$)?(start + 1):(c + 1));
return cljs.core.PersistentVector.fromArray([delete$,start,c,dest], true);
}
});
/**
* finds the start of the next list/string/vector/map
*/
subpar.paredit.get_start_of_next_list = (function get_start_of_next_list(s,i){
var p = subpar.paredit.parse.call(null,s);
var r = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,(function (p1__3189_SHARP_){
var and__3937__auto__ = (p1__3189_SHARP_ >= i);
if(and__3937__auto__)
{return cljs.core.get_in.call(null,p,cljs.core.PersistentVector.fromArray(["\uFDD0'families",p1__3189_SHARP_], true));
} else
{return and__3937__auto__;
}
}),p));
if((r == null))
{return false;
} else
{return r;
}
});
subpar.paredit.forward_down_fn = (function forward_down_fn(s,i){
var r = subpar.paredit.get_start_of_next_list.call(null,s,i);
if(cljs.core.truth_(r))
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
subpar.paredit.backward_fn = (function backward_fn(s,i){
var p = subpar.paredit.parse.call(null,s);
var b = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,(function (p1__3192_SHARP_){
return (p1__3192_SHARP_ < i);
}),p));
var o = subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p,i);
var or__3939__auto__ = b;
if(cljs.core.truth_(or__3939__auto__))
{return or__3939__auto__;
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
subpar.paredit.backward_down_fn = (function backward_down_fn(s,i){
var p = subpar.paredit.parse.call(null,s);
var b = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,(function (p1__3193_SHARP_){
var and__3937__auto__ = (p1__3193_SHARP_ < i);
if(and__3937__auto__)
{return subpar.paredit.closes_list_QMARK_.call(null,p,p1__3193_SHARP_);
} else
{return and__3937__auto__;
}
}),p));
var or__3939__auto__ = b;
if(cljs.core.truth_(or__3939__auto__))
{return or__3939__auto__;
} else
{return i;
}
});
/**
* paredit-forward-up
*/
subpar.paredit.forward_up_fn = (function forward_up_fn(s,i){
var p = subpar.paredit.parse.call(null,s);
var vec__3196 = subpar.paredit.get_wrapper.call(null,p,i);
var o = cljs.core.nth.call(null,vec__3196,0,null);
var c = cljs.core.nth.call(null,vec__3196,1,null);
var in_list = cljs.core.not_EQ_.call(null,-1,o);
if(in_list)
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
subpar.paredit.forward_fn = (function forward_fn(s,i){
var p = subpar.paredit.parse.call(null,s);
var b = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,(function (p1__3194_SHARP_){
return (p1__3194_SHARP_ >= i);
}),p));
var c = subpar.paredit.get_closing_delimiter_index_with_parse.call(null,p,i);
var l = cljs.core.count.call(null,s);
if(cljs.core.truth_(b))
{return (b + 1);
} else
{if(cljs.core.truth_(c))
{return (((c + 1) < l) ? (c + 1) : l);
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
subpar.paredit.forward_slurp_vals = (function forward_slurp_vals(s,i){
var p = subpar.paredit.parse.call(null,s);
var vec__3200 = subpar.paredit.get_wrapper.call(null,p,i);
var o = cljs.core.nth.call(null,vec__3200,0,null);
var c = cljs.core.nth.call(null,vec__3200,1,null);
var in_list = cljs.core.not_EQ_.call(null,-1,o);
var a = (function (){var and__3937__auto__ = in_list;
if(and__3937__auto__)
{return cljs.core.nth.call(null,s,c,false);
} else
{return and__3937__auto__;
}
})();
var d = (function (){var and__3937__auto__ = in_list;
if(and__3937__auto__)
{return cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,o,cljs.core.vals,(function (p1__3197_SHARP_){
return (p1__3197_SHARP_ > c);
}),p));
} else
{return and__3937__auto__;
}
})();
if(cljs.core.truth_((function (){var and__3937__auto__ = a;
if(cljs.core.truth_(and__3937__auto__))
{var and__3937__auto____$1 = c;
if(cljs.core.truth_(and__3937__auto____$1))
{return d;
} else
{return and__3937__auto____$1;
}
} else
{return and__3937__auto__;
}
})()))
{return cljs.core.PersistentVector.fromArray([a,c,(d + 1),subpar.paredit.count_lines.call(null,s,o,(d + 1))], true);
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
var p = subpar.paredit.parse.call(null,s);
var vec__3202 = subpar.paredit.get_wrapper.call(null,p,i);
var o = cljs.core.nth.call(null,vec__3202,0,null);
var c = cljs.core.nth.call(null,vec__3202,1,null);
var in_list = cljs.core.not_EQ_.call(null,-1,o);
var d = (function (){var and__3937__auto__ = in_list;
if(and__3937__auto__)
{return cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,o,cljs.core.keys,(function (p1__3198_SHARP_){
return (p1__3198_SHARP_ < o);
}),p));
} else
{return and__3937__auto__;
}
})();
var a = (function (){var and__3937__auto__ = in_list;
if(and__3937__auto__)
{return cljs.core.nth.call(null,s,o,false);
} else
{return and__3937__auto__;
}
})();
if(cljs.core.truth_((function (){var and__3937__auto__ = a;
if(cljs.core.truth_(and__3937__auto__))
{return d;
} else
{return and__3937__auto__;
}
})()))
{return cljs.core.PersistentVector.fromArray([a,o,d,subpar.paredit.count_lines.call(null,s,d,c)], true);
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
var p = subpar.paredit.parse.call(null,s);
var vec__3204 = subpar.paredit.get_wrapper.call(null,p,i);
var o = cljs.core.nth.call(null,vec__3204,0,null);
var c = cljs.core.nth.call(null,vec__3204,1,null);
var in_list = cljs.core.not_EQ_.call(null,-1,o);
var endings = (function (){var and__3937__auto__ = in_list;
if(and__3937__auto__)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.constantly.call(null,true),p);
} else
{return and__3937__auto__;
}
})();
var a = (function (){var and__3937__auto__ = c;
if(cljs.core.truth_(and__3937__auto__))
{var and__3937__auto____$1 = in_list;
if(and__3937__auto____$1)
{return cljs.core.nth.call(null,s,c,null);
} else
{return and__3937__auto____$1;
}
} else
{return and__3937__auto__;
}
})();
var r = (function (){var or__3939__auto__ = subpar.paredit.count_lines.call(null,s,o,c);
if(cljs.core.truth_(or__3939__auto__))
{return or__3939__auto__;
} else
{return 1;
}
})();
var num = (cljs.core.truth_(endings)?cljs.core.count.call(null,endings):0);
if((num > 1))
{return cljs.core.PersistentVector.fromArray([a,c,(cljs.core.nth.call(null,endings,(num - 2)) + 1),false,r,o], true);
} else
{if(cljs.core._EQ_.call(null,num,1))
{return cljs.core.PersistentVector.fromArray([a,c,(o + 1),true,r,o], true);
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
var p = subpar.paredit.parse.call(null,s);
var vec__3206 = subpar.paredit.get_wrapper.call(null,p,i);
var o = cljs.core.nth.call(null,vec__3206,0,null);
var c = cljs.core.nth.call(null,vec__3206,1,null);
var in_list = cljs.core.not_EQ_.call(null,-1,o);
var starts = (function (){var and__3937__auto__ = in_list;
if(and__3937__auto__)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.keys,cljs.core.constantly.call(null,true),p);
} else
{return and__3937__auto__;
}
})();
var a = (function (){var and__3937__auto__ = o;
if(cljs.core.truth_(and__3937__auto__))
{var and__3937__auto____$1 = in_list;
if(and__3937__auto____$1)
{return cljs.core.nth.call(null,s,o,null);
} else
{return and__3937__auto____$1;
}
} else
{return and__3937__auto__;
}
})();
var r = (function (){var or__3939__auto__ = subpar.paredit.count_lines.call(null,s,o,c);
if(cljs.core.truth_(or__3939__auto__))
{return or__3939__auto__;
} else
{return 1;
}
})();
var num = (cljs.core.truth_(starts)?cljs.core.count.call(null,starts):0);
if((num > 1))
{return cljs.core.PersistentVector.fromArray([a,o,cljs.core.second.call(null,starts),false,r], true);
} else
{if(cljs.core._EQ_.call(null,num,1))
{return cljs.core.PersistentVector.fromArray([a,o,c,true,r], true);
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
var p = subpar.paredit.parse.call(null,s);
var vec__3209 = subpar.paredit.get_wrapper.call(null,p,i);
var o = cljs.core.nth.call(null,vec__3209,0,null);
var c = cljs.core.nth.call(null,vec__3209,1,null);
var in_list = cljs.core.not_EQ_.call(null,-1,o);
if(in_list)
{var vec__3210 = subpar.paredit.get_wrapper.call(null,p,o);
var n = cljs.core.nth.call(null,vec__3210,0,null);
var d = cljs.core.nth.call(null,vec__3210,1,null);
var r = subpar.paredit.count_lines.call(null,s,n,d);
return cljs.core.PersistentVector.fromArray([o,c,((0 > n) ? 0 : n),r], true);
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
var p = subpar.paredit.parse.call(null,s);
var vec__3213 = subpar.paredit.get_wrapper.call(null,p,i);
var o = cljs.core.nth.call(null,vec__3213,0,null);
var c = cljs.core.nth.call(null,vec__3213,1,null);
var in_list = cljs.core.not_EQ_.call(null,-1,o);
if(in_list)
{var vec__3214 = subpar.paredit.get_wrapper.call(null,p,o);
var n = cljs.core.nth.call(null,vec__3214,0,null);
var d = cljs.core.nth.call(null,vec__3214,1,null);
var r = subpar.paredit.count_lines.call(null,s,n,d);
return cljs.core.PersistentVector.fromArray([o,((o > i) ? o : i),c,((0 > n) ? 0 : n),r], true);
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
var p = subpar.paredit.parse.call(null,s);
var vec__3217 = subpar.paredit.get_wrapper.call(null,p,i);
var o = cljs.core.nth.call(null,vec__3217,0,null);
var c = cljs.core.nth.call(null,vec__3217,1,null);
var in_list = cljs.core.not_EQ_.call(null,-1,o);
if(in_list)
{var vec__3218 = subpar.paredit.get_wrapper.call(null,p,o);
var n = cljs.core.nth.call(null,vec__3218,0,null);
var d = cljs.core.nth.call(null,vec__3218,1,null);
var r = subpar.paredit.count_lines.call(null,s,n,d);
return cljs.core.PersistentVector.fromArray([o,i,(c + 1),((0 > n) ? 0 : n),r], true);
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
var s = [cljs.core.str(ss),cljs.core.str(" ")].join('');
var i = 0;
var mode = subpar.paredit.code;
var openings = cljs.core.list.call(null,-1);
var start = -1;
var t = cljs.core.PersistentVector.EMPTY;
var families = cljs.core.PersistentArrayMap.fromArrays([-1],[cljs.core.ObjMap.fromObject(["\uFDD0'children"],{"\uFDD0'children":cljs.core.ObjMap.EMPTY})]);
var escaping = false;
var in_word = false;
while(true){
var a = cljs.core.nth.call(null,s,i,null);
var j = (i + 1);
var o = cljs.core.peek.call(null,openings);
if(cljs.core.truth_((function (){var and__3937__auto__ = (a == null);
if(and__3937__auto__)
{return in_word;
} else
{return and__3937__auto__;
}
})()))
{return cljs.core.ObjMap.fromObject(["\uFDD0'chars","\uFDD0'families"],{"\uFDD0'chars":t,"\uFDD0'families":cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,cljs.core.PersistentVector.fromArray([-1,"\uFDD0'closer"], true),(i - 1)),cljs.core.PersistentVector.fromArray([-1,"\uFDD0'children",start], true),(i - 1))});
} else
{if((a == null))
{return cljs.core.ObjMap.fromObject(["\uFDD0'chars","\uFDD0'families"],{"\uFDD0'chars":t,"\uFDD0'families":cljs.core.assoc_in.call(null,families,cljs.core.PersistentVector.fromArray([-1,"\uFDD0'closer"], true),(i - 1))});
} else
{if((function (){var and__3937__auto__ = cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode);
if(and__3937__auto__)
{var and__3937__auto____$1 = cljs.core._EQ_.call(null,"\\",a);
if(and__3937__auto____$1)
{var and__3937__auto____$2 = cljs.core.not.call(null,escaping);
if(and__3937__auto____$2)
{return cljs.core.not.call(null,in_word);
} else
{return and__3937__auto____$2;
}
} else
{return and__3937__auto____$1;
}
} else
{return and__3937__auto__;
}
})())
{{
var G__3219 = j;
var G__3220 = mode;
var G__3221 = openings;
var G__3222 = i;
var G__3223 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3224 = cljs.core.assoc_in.call(null,families,cljs.core.PersistentVector.fromArray([o,"\uFDD0'children",i], true),j);
var G__3225 = true;
var G__3226 = true;
i = G__3219;
mode = G__3220;
openings = G__3221;
start = G__3222;
t = G__3223;
families = G__3224;
escaping = G__3225;
in_word = G__3226;
continue;
}
} else
{if((function (){var and__3937__auto__ = cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode);
if(and__3937__auto__)
{var and__3937__auto____$1 = cljs.core._EQ_.call(null,"\\",a);
if(and__3937__auto____$1)
{return cljs.core.not.call(null,escaping);
} else
{return and__3937__auto____$1;
}
} else
{return and__3937__auto__;
}
})())
{{
var G__3227 = j;
var G__3228 = mode;
var G__3229 = openings;
var G__3230 = i;
var G__3231 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3232 = families;
var G__3233 = true;
var G__3234 = true;
i = G__3227;
mode = G__3228;
openings = G__3229;
start = G__3230;
t = G__3231;
families = G__3232;
escaping = G__3233;
in_word = G__3234;
continue;
}
} else
{if((function (){var and__3937__auto__ = cljs.core._EQ_.call(null,subpar.paredit.code,mode);
if(and__3937__auto__)
{var and__3937__auto____$1 = cljs.core._EQ_.call(null,";",a);
if(and__3937__auto____$1)
{return cljs.core.not.call(null,escaping);
} else
{return and__3937__auto____$1;
}
} else
{return and__3937__auto__;
}
})())
{{
var G__3235 = j;
var G__3236 = subpar.paredit.cmmnt;
var G__3237 = openings;
var G__3238 = start;
var G__3239 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3240 = families;
var G__3241 = false;
var G__3242 = false;
i = G__3235;
mode = G__3236;
openings = G__3237;
start = G__3238;
t = G__3239;
families = G__3240;
escaping = G__3241;
in_word = G__3242;
continue;
}
} else
{if((function (){var and__3937__auto__ = cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode);
if(and__3937__auto__)
{return cljs.core._EQ_.call(null,"\n",a);
} else
{return and__3937__auto__;
}
})())
{{
var G__3243 = j;
var G__3244 = subpar.paredit.code;
var G__3245 = openings;
var G__3246 = start;
var G__3247 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3248 = families;
var G__3249 = false;
var G__3250 = false;
i = G__3243;
mode = G__3244;
openings = G__3245;
start = G__3246;
t = G__3247;
families = G__3248;
escaping = G__3249;
in_word = G__3250;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode))
{{
var G__3251 = j;
var G__3252 = subpar.paredit.cmmnt;
var G__3253 = openings;
var G__3254 = start;
var G__3255 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3256 = families;
var G__3257 = false;
var G__3258 = false;
i = G__3251;
mode = G__3252;
openings = G__3253;
start = G__3254;
t = G__3255;
families = G__3256;
escaping = G__3257;
in_word = G__3258;
continue;
}
} else
{if((function (){var and__3937__auto__ = cljs.core._EQ_.call(null,subpar.paredit.code,mode);
if(and__3937__auto__)
{var and__3937__auto____$1 = cljs.core._EQ_.call(null,"\"",a);
if(and__3937__auto____$1)
{return cljs.core.not.call(null,escaping);
} else
{return and__3937__auto____$1;
}
} else
{return and__3937__auto__;
}
})())
{{
var G__3259 = j;
var G__3260 = subpar.paredit.string;
var G__3261 = cljs.core.conj.call(null,openings,i);
var G__3262 = -1;
var G__3263 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3264 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,cljs.core.PersistentVector.fromArray([i,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY),cljs.core.PersistentVector.fromArray([o,"\uFDD0'children",i], true),j);
var G__3265 = false;
var G__3266 = false;
i = G__3259;
mode = G__3260;
openings = G__3261;
start = G__3262;
t = G__3263;
families = G__3264;
escaping = G__3265;
in_word = G__3266;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto__ = cljs.core._EQ_.call(null,subpar.paredit.string,mode);
if(and__3937__auto__)
{var and__3937__auto____$1 = cljs.core._EQ_.call(null,"\"",a);
if(and__3937__auto____$1)
{var and__3937__auto____$2 = cljs.core.not.call(null,escaping);
if(and__3937__auto____$2)
{return in_word;
} else
{return and__3937__auto____$2;
}
} else
{return and__3937__auto____$1;
}
} else
{return and__3937__auto__;
}
})()))
{{
var G__3267 = j;
var G__3268 = subpar.paredit.code;
var G__3269 = cljs.core.pop.call(null,openings);
var G__3270 = -1;
var G__3271 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3272 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,cljs.core.PersistentVector.fromArray([o,"\uFDD0'closer"], true),i),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings),"\uFDD0'children",o], true),i),cljs.core.PersistentVector.fromArray([o,"\uFDD0'children",start], true),(i - 1));
var G__3273 = false;
var G__3274 = false;
i = G__3267;
mode = G__3268;
openings = G__3269;
start = G__3270;
t = G__3271;
families = G__3272;
escaping = G__3273;
in_word = G__3274;
continue;
}
} else
{if((function (){var and__3937__auto__ = cljs.core._EQ_.call(null,subpar.paredit.string,mode);
if(and__3937__auto__)
{var and__3937__auto____$1 = cljs.core._EQ_.call(null,"\"",a);
if(and__3937__auto____$1)
{return cljs.core.not.call(null,escaping);
} else
{return and__3937__auto____$1;
}
} else
{return and__3937__auto__;
}
})())
{{
var G__3275 = j;
var G__3276 = subpar.paredit.code;
var G__3277 = cljs.core.pop.call(null,openings);
var G__3278 = -1;
var G__3279 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3280 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,cljs.core.PersistentVector.fromArray([o,"\uFDD0'closer"], true),i),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings),"\uFDD0'children",o], true),i);
var G__3281 = false;
var G__3282 = false;
i = G__3275;
mode = G__3276;
openings = G__3277;
start = G__3278;
t = G__3279;
families = G__3280;
escaping = G__3281;
in_word = G__3282;
continue;
}
} else
{if((function (){var and__3937__auto__ = cljs.core._EQ_.call(null,subpar.paredit.string,mode);
if(and__3937__auto__)
{var and__3937__auto____$1 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a));
if(and__3937__auto____$1)
{return cljs.core.not.call(null,in_word);
} else
{return and__3937__auto____$1;
}
} else
{return and__3937__auto__;
}
})())
{{
var G__3283 = j;
var G__3284 = subpar.paredit.string;
var G__3285 = openings;
var G__3286 = i;
var G__3287 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3288 = cljs.core.assoc_in.call(null,families,cljs.core.PersistentVector.fromArray([o,"\uFDD0'children",i], true),i);
var G__3289 = false;
var G__3290 = true;
i = G__3283;
mode = G__3284;
openings = G__3285;
start = G__3286;
t = G__3287;
families = G__3288;
escaping = G__3289;
in_word = G__3290;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto__ = cljs.core._EQ_.call(null,subpar.paredit.string,mode);
if(and__3937__auto__)
{var and__3937__auto____$1 = subpar.paredit.whitespace_QMARK_.call(null,a);
if(cljs.core.truth_(and__3937__auto____$1))
{return in_word;
} else
{return and__3937__auto____$1;
}
} else
{return and__3937__auto__;
}
})()))
{{
var G__3291 = j;
var G__3292 = subpar.paredit.string;
var G__3293 = openings;
var G__3294 = -1;
var G__3295 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3296 = cljs.core.assoc_in.call(null,families,cljs.core.PersistentVector.fromArray([o,"\uFDD0'children",start], true),(i - 1));
var G__3297 = false;
var G__3298 = false;
i = G__3291;
mode = G__3292;
openings = G__3293;
start = G__3294;
t = G__3295;
families = G__3296;
escaping = G__3297;
in_word = G__3298;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.string,mode))
{{
var G__3299 = j;
var G__3300 = subpar.paredit.string;
var G__3301 = openings;
var G__3302 = start;
var G__3303 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3304 = families;
var G__3305 = false;
var G__3306 = in_word;
i = G__3299;
mode = G__3300;
openings = G__3301;
start = G__3302;
t = G__3303;
families = G__3304;
escaping = G__3305;
in_word = G__3306;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto__ = subpar.paredit.opener_QMARK_.call(null,a);
if(cljs.core.truth_(and__3937__auto__))
{return in_word;
} else
{return and__3937__auto__;
}
})()))
{{
var G__3307 = j;
var G__3308 = subpar.paredit.code;
var G__3309 = cljs.core.conj.call(null,openings,i);
var G__3310 = -1;
var G__3311 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3312 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,cljs.core.PersistentVector.fromArray([o,"\uFDD0'children",start], true),(i - 1)),cljs.core.PersistentVector.fromArray([o,"\uFDD0'children",i], true),i),cljs.core.PersistentVector.fromArray([i,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY);
var G__3313 = false;
var G__3314 = false;
i = G__3307;
mode = G__3308;
openings = G__3309;
start = G__3310;
t = G__3311;
families = G__3312;
escaping = G__3313;
in_word = G__3314;
continue;
}
} else
{if(cljs.core.truth_(subpar.paredit.opener_QMARK_.call(null,a)))
{{
var G__3315 = j;
var G__3316 = subpar.paredit.code;
var G__3317 = cljs.core.conj.call(null,openings,i);
var G__3318 = -1;
var G__3319 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3320 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,cljs.core.PersistentVector.fromArray([o,"\uFDD0'children",i], true),i),cljs.core.PersistentVector.fromArray([i,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY);
var G__3321 = false;
var G__3322 = false;
i = G__3315;
mode = G__3316;
openings = G__3317;
start = G__3318;
t = G__3319;
families = G__3320;
escaping = G__3321;
in_word = G__3322;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto__ = subpar.paredit.closer_QMARK_.call(null,a);
if(cljs.core.truth_(and__3937__auto__))
{return in_word;
} else
{return and__3937__auto__;
}
})()))
{{
var G__3323 = j;
var G__3324 = subpar.paredit.code;
var G__3325 = cljs.core.pop.call(null,openings);
var G__3326 = -1;
var G__3327 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3328 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,cljs.core.PersistentVector.fromArray([o,"\uFDD0'children",start], true),(i - 1)),cljs.core.PersistentVector.fromArray([o,"\uFDD0'closer"], true),i),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings),"\uFDD0'children",o], true),i);
var G__3329 = false;
var G__3330 = false;
i = G__3323;
mode = G__3324;
openings = G__3325;
start = G__3326;
t = G__3327;
families = G__3328;
escaping = G__3329;
in_word = G__3330;
continue;
}
} else
{if(cljs.core.truth_(subpar.paredit.closer_QMARK_.call(null,a)))
{{
var G__3331 = j;
var G__3332 = subpar.paredit.code;
var G__3333 = cljs.core.pop.call(null,openings);
var G__3334 = -1;
var G__3335 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3336 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families,cljs.core.PersistentVector.fromArray([o,"\uFDD0'closer"], true),i),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings),"\uFDD0'children",o], true),i);
var G__3337 = false;
var G__3338 = false;
i = G__3331;
mode = G__3332;
openings = G__3333;
start = G__3334;
t = G__3335;
families = G__3336;
escaping = G__3337;
in_word = G__3338;
continue;
}
} else
{if((function (){var and__3937__auto__ = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a));
if(and__3937__auto__)
{return cljs.core.not.call(null,in_word);
} else
{return and__3937__auto__;
}
})())
{{
var G__3339 = j;
var G__3340 = subpar.paredit.code;
var G__3341 = openings;
var G__3342 = i;
var G__3343 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3344 = cljs.core.assoc_in.call(null,families,cljs.core.PersistentVector.fromArray([o,"\uFDD0'children",i], true),i);
var G__3345 = false;
var G__3346 = true;
i = G__3339;
mode = G__3340;
openings = G__3341;
start = G__3342;
t = G__3343;
families = G__3344;
escaping = G__3345;
in_word = G__3346;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto__ = subpar.paredit.whitespace_QMARK_.call(null,a);
if(cljs.core.truth_(and__3937__auto__))
{return in_word;
} else
{return and__3937__auto__;
}
})()))
{{
var G__3347 = j;
var G__3348 = subpar.paredit.code;
var G__3349 = openings;
var G__3350 = -1;
var G__3351 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3352 = cljs.core.assoc_in.call(null,families,cljs.core.PersistentVector.fromArray([o,"\uFDD0'children",start], true),(i - 1));
var G__3353 = false;
var G__3354 = false;
i = G__3347;
mode = G__3348;
openings = G__3349;
start = G__3350;
t = G__3351;
families = G__3352;
escaping = G__3353;
in_word = G__3354;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto__ = subpar.paredit.whitespace_QMARK_.call(null,a);
if(cljs.core.truth_(and__3937__auto__))
{return cljs.core.not.call(null,in_word);
} else
{return and__3937__auto__;
}
})()))
{{
var G__3355 = j;
var G__3356 = subpar.paredit.code;
var G__3357 = openings;
var G__3358 = -1;
var G__3359 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3360 = families;
var G__3361 = false;
var G__3362 = false;
i = G__3355;
mode = G__3356;
openings = G__3357;
start = G__3358;
t = G__3359;
families = G__3360;
escaping = G__3361;
in_word = G__3362;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto__ = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a));
if(and__3937__auto__)
{return in_word;
} else
{return and__3937__auto__;
}
})()))
{{
var G__3363 = j;
var G__3364 = subpar.paredit.code;
var G__3365 = openings;
var G__3366 = start;
var G__3367 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray([mode,o], true));
var G__3368 = families;
var G__3369 = false;
var G__3370 = true;
i = G__3363;
mode = G__3364;
openings = G__3365;
start = G__3366;
t = G__3367;
families = G__3368;
escaping = G__3369;
in_word = G__3370;
continue;
}
} else
{if("\uFDD0'default")
{{
var G__3371 = j;
var G__3372 = subpar.paredit.code;
var G__3373 = openings;
var G__3374 = start;
var G__3375 = cljs.core.conj.call(null,t,cljs.core.PersistentVector.fromArray(["?",o], true));
var G__3376 = families;
var G__3377 = escaping;
var G__3378 = in_word;
i = G__3371;
mode = G__3372;
openings = G__3373;
start = G__3374;
t = G__3375;
families = G__3376;
escaping = G__3377;
in_word = G__3378;
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
