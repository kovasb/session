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
var or__3939__auto____8156 = cljs.core._EQ_.call(null,x,"\t");
if(or__3939__auto____8156)
{return or__3939__auto____8156;
} else
{var or__3939__auto____8157 = cljs.core._EQ_.call(null,x," ");
if(or__3939__auto____8157)
{return or__3939__auto____8157;
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
var and__3937__auto____8161 = (function (){var and__3937__auto____8160 = (0 <= i);
if(and__3937__auto____8160)
{return (i <= cljs.core.count.call(null,(new cljs.core.Keyword("\uFDD0'chars")).call(null,p)));
} else
{return and__3937__auto____8160;
}
})();
if(cljs.core.truth_(and__3937__auto____8161))
{return cljs.core._EQ_.call(null,mode,subpar.paredit.get_mode.call(null,p,i));
} else
{return and__3937__auto____8161;
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
var and__3937__auto____8165 = i;
if(cljs.core.truth_(and__3937__auto____8165))
{var and__3937__auto____8166 = j;
if(cljs.core.truth_(and__3937__auto____8166))
{return (cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__8162_SHARP_){
return cljs.core._EQ_.call(null,"\n",p1__8162_SHARP_);
}),cljs.core.drop.call(null,i,cljs.core.drop_last.call(null,((cljs.core.count.call(null,s) - j) - 1),cljs.core.take.call(null,cljs.core.count.call(null,s),s))))) + 1);
} else
{return and__3937__auto____8166;
}
} else
{return and__3937__auto____8165;
}
});
/**
* whether the current spot is escaped
*/
subpar.paredit.escaped_QMARK_ = (function escaped_QMARK_(s,i){
return cljs.core.odd_QMARK_.call(null,(function (){var c__8170 = 0;
var j__8171 = (i - 1);
while(true){
var a__8172 = cljs.core.nth.call(null,s,j__8171,null);
if((j__8171 < 0))
{return c__8170;
} else
{if((a__8172 == null))
{return c__8170;
} else
{if(cljs.core.not_EQ_.call(null,"\\",a__8172))
{return c__8170;
} else
{if(true)
{{
var G__8173 = (c__8170 + 1);
var G__8174 = (j__8171 - 1);
c__8170 = G__8173;
j__8171 = G__8174;
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
var vec__8179__8180 = subpar.paredit.get_wrapper.call(null,subpar.paredit.parse.call(null,s),i);
var o__8181 = cljs.core.nth.call(null,vec__8179__8180,0,null);
var c__8182 = cljs.core.nth.call(null,vec__8179__8180,1,null);
if(cljs.core._EQ_.call(null,-1,o__8181))
{return i;
} else
{return o__8181;
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
var p__8187 = subpar.paredit.parse.call(null,s);
var h__8188 = (i - 1);
var j__8189 = (i + 1);
var c__8190 = cljs.core.nth.call(null,s,i,null);
if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,j__8189)))
{return 3;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([h__8188,i], true),subpar.paredit.get_wrapper.call(null,p__8187,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p__8187,i)))
{return 0;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([i,j__8189], true),subpar.paredit.get_wrapper.call(null,p__8187,j__8189)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null,p__8187,i)))
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
var p__8194 = subpar.paredit.parse.call(null,s);
var g__8195 = (i - 2);
var h__8196 = (i - 1);
if((i <= 0))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,h__8196)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,i)))
{return 2;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([g__8195,h__8196], true),subpar.paredit.get_wrapper.call(null,p__8194,h__8196)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p__8194,h__8196)))
{return 4;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([h__8196,i], true),subpar.paredit.get_wrapper.call(null,p__8194,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null,p__8194,h__8196)))
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
var p__8198 = subpar.paredit.parse.call(null,s);
if((i < 0))
{return 0;
} else
{if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.in_comment_QMARK_.call(null,p__8198,i)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.n_str_QMARK_.call(null,p__8198,i)))
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
var vec__8208__8209 = subpar.paredit.get_wrapper.call(null,p,i);
var o__8210 = cljs.core.nth.call(null,vec__8208__8209,0,null);
var c__8211 = cljs.core.nth.call(null,vec__8208__8209,1,null);
if(cljs.core._EQ_.call(null,-1,o__8210))
{return cljs.core.PersistentVector.EMPTY;
} else
{var start__8213 = ((function (){var or__3939__auto____8212 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.identity,p));
if(cljs.core.truth_(or__3939__auto____8212))
{return or__3939__auto____8212;
} else
{return o__8210;
}
})() + 1);
var delete__8214 = cljs.core.not_EQ_.call(null,start__8213,c__8211);
var dest__8215 = ((delete__8214)?(start__8213 + 1):(c__8211 + 1));
return cljs.core.PersistentVector.fromArray([delete__8214,start__8213,c__8211,dest__8215], true);
}
});
/**
* finds the start of the next list/string/vector/map
*/
subpar.paredit.get_start_of_next_list = (function get_start_of_next_list(s,i){
var p__8219 = subpar.paredit.parse.call(null,s);
var r__8221 = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,(function (p1__8199_SHARP_){
var and__3937__auto____8220 = (p1__8199_SHARP_ >= i);
if(and__3937__auto____8220)
{return cljs.core.get_in.call(null,p__8219,cljs.core.PersistentVector.fromArray(["\uFDD0'families",p1__8199_SHARP_], true));
} else
{return and__3937__auto____8220;
}
}),p__8219));
if((r__8221 == null))
{return false;
} else
{return r__8221;
}
});
subpar.paredit.forward_down_fn = (function forward_down_fn(s,i){
var r__8224 = subpar.paredit.get_start_of_next_list.call(null,s,i);
if(cljs.core.truth_(r__8224))
{return (r__8224 + 1);
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
var p__8230 = subpar.paredit.parse.call(null,s);
var b__8231 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,(function (p1__8222_SHARP_){
return (p1__8222_SHARP_ < i);
}),p__8230));
var o__8232 = subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p__8230,i);
var or__3939__auto____8233 = b__8231;
if(cljs.core.truth_(or__3939__auto____8233))
{return or__3939__auto____8233;
} else
{if((o__8232 < 0))
{return 0;
} else
{return o__8232;
}
}
});
/**
* paredit-backward-down
*/
subpar.paredit.backward_down_fn = (function backward_down_fn(s,i){
var p__8238 = subpar.paredit.parse.call(null,s);
var b__8240 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,(function (p1__8225_SHARP_){
var and__3937__auto____8239 = (p1__8225_SHARP_ < i);
if(and__3937__auto____8239)
{return subpar.paredit.closes_list_QMARK_.call(null,p__8238,p1__8225_SHARP_);
} else
{return and__3937__auto____8239;
}
}),p__8238));
var or__3939__auto____8241 = b__8240;
if(cljs.core.truth_(or__3939__auto____8241))
{return or__3939__auto____8241;
} else
{return i;
}
});
/**
* paredit-forward-up
*/
subpar.paredit.forward_up_fn = (function forward_up_fn(s,i){
var p__8250 = subpar.paredit.parse.call(null,s);
var vec__8249__8251 = subpar.paredit.get_wrapper.call(null,p__8250,i);
var o__8252 = cljs.core.nth.call(null,vec__8249__8251,0,null);
var c__8253 = cljs.core.nth.call(null,vec__8249__8251,1,null);
var in_list__8254 = cljs.core.not_EQ_.call(null,-1,o__8252);
if(in_list__8254)
{return (c__8253 + 1);
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
var p__8260 = subpar.paredit.parse.call(null,s);
var b__8261 = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,(function (p1__8242_SHARP_){
return (p1__8242_SHARP_ >= i);
}),p__8260));
var c__8262 = subpar.paredit.get_closing_delimiter_index_with_parse.call(null,p__8260,i);
var l__8263 = cljs.core.count.call(null,s);
if(cljs.core.truth_(b__8261))
{return (b__8261 + 1);
} else
{if(cljs.core.truth_(c__8262))
{return (((c__8262 + 1) < l__8263) ? (c__8262 + 1) : l__8263);
} else
{if(true)
{return l__8263;
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
var p__8278 = subpar.paredit.parse.call(null,s);
var vec__8277__8279 = subpar.paredit.get_wrapper.call(null,p__8278,i);
var o__8280 = cljs.core.nth.call(null,vec__8277__8279,0,null);
var c__8281 = cljs.core.nth.call(null,vec__8277__8279,1,null);
var in_list__8282 = cljs.core.not_EQ_.call(null,-1,o__8280);
var a__8284 = (function (){var and__3937__auto____8283 = in_list__8282;
if(and__3937__auto____8283)
{return cljs.core.nth.call(null,s,c__8281,false);
} else
{return and__3937__auto____8283;
}
})();
var d__8286 = (function (){var and__3937__auto____8285 = in_list__8282;
if(and__3937__auto____8285)
{return cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,o__8280,cljs.core.vals,(function (p1__8255_SHARP_){
return (p1__8255_SHARP_ > c__8281);
}),p__8278));
} else
{return and__3937__auto____8285;
}
})();
if(cljs.core.truth_((function (){var and__3937__auto____8287 = a__8284;
if(cljs.core.truth_(and__3937__auto____8287))
{var and__3937__auto____8288 = c__8281;
if(cljs.core.truth_(and__3937__auto____8288))
{return d__8286;
} else
{return and__3937__auto____8288;
}
} else
{return and__3937__auto____8287;
}
})()))
{return cljs.core.PersistentVector.fromArray([a__8284,c__8281,(d__8286 + 1),subpar.paredit.count_lines.call(null,s,o__8280,(d__8286 + 1))], true);
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
var p__8301 = subpar.paredit.parse.call(null,s);
var vec__8300__8302 = subpar.paredit.get_wrapper.call(null,p__8301,i);
var o__8303 = cljs.core.nth.call(null,vec__8300__8302,0,null);
var c__8304 = cljs.core.nth.call(null,vec__8300__8302,1,null);
var in_list__8305 = cljs.core.not_EQ_.call(null,-1,o__8303);
var d__8307 = (function (){var and__3937__auto____8306 = in_list__8305;
if(and__3937__auto____8306)
{return cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,o__8303,cljs.core.keys,(function (p1__8264_SHARP_){
return (p1__8264_SHARP_ < o__8303);
}),p__8301));
} else
{return and__3937__auto____8306;
}
})();
var a__8309 = (function (){var and__3937__auto____8308 = in_list__8305;
if(and__3937__auto____8308)
{return cljs.core.nth.call(null,s,o__8303,false);
} else
{return and__3937__auto____8308;
}
})();
if(cljs.core.truth_((function (){var and__3937__auto____8310 = a__8309;
if(cljs.core.truth_(and__3937__auto____8310))
{return d__8307;
} else
{return and__3937__auto____8310;
}
})()))
{return cljs.core.PersistentVector.fromArray([a__8309,o__8303,d__8307,subpar.paredit.count_lines.call(null,s,d__8307,c__8304)], true);
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
var p__8326 = subpar.paredit.parse.call(null,s);
var vec__8325__8327 = subpar.paredit.get_wrapper.call(null,p__8326,i);
var o__8328 = cljs.core.nth.call(null,vec__8325__8327,0,null);
var c__8329 = cljs.core.nth.call(null,vec__8325__8327,1,null);
var in_list__8330 = cljs.core.not_EQ_.call(null,-1,o__8328);
var endings__8332 = (function (){var and__3937__auto____8331 = in_list__8330;
if(and__3937__auto____8331)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.constantly.call(null,true),p__8326);
} else
{return and__3937__auto____8331;
}
})();
var a__8335 = (function (){var and__3937__auto____8333 = c__8329;
if(cljs.core.truth_(and__3937__auto____8333))
{var and__3937__auto____8334 = in_list__8330;
if(and__3937__auto____8334)
{return cljs.core.nth.call(null,s,c__8329,null);
} else
{return and__3937__auto____8334;
}
} else
{return and__3937__auto____8333;
}
})();
var r__8337 = (function (){var or__3939__auto____8336 = subpar.paredit.count_lines.call(null,s,o__8328,c__8329);
if(cljs.core.truth_(or__3939__auto____8336))
{return or__3939__auto____8336;
} else
{return 1;
}
})();
var num__8338 = (cljs.core.truth_(endings__8332)?cljs.core.count.call(null,endings__8332):0);
if((num__8338 > 1))
{return cljs.core.PersistentVector.fromArray([a__8335,c__8329,(cljs.core.nth.call(null,endings__8332,(num__8338 - 2)) + 1),false,r__8337,o__8328], true);
} else
{if(cljs.core._EQ_.call(null,num__8338,1))
{return cljs.core.PersistentVector.fromArray([a__8335,c__8329,(o__8328 + 1),true,r__8337,o__8328], true);
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
var p__8354 = subpar.paredit.parse.call(null,s);
var vec__8353__8355 = subpar.paredit.get_wrapper.call(null,p__8354,i);
var o__8356 = cljs.core.nth.call(null,vec__8353__8355,0,null);
var c__8357 = cljs.core.nth.call(null,vec__8353__8355,1,null);
var in_list__8358 = cljs.core.not_EQ_.call(null,-1,o__8356);
var starts__8360 = (function (){var and__3937__auto____8359 = in_list__8358;
if(and__3937__auto____8359)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.keys,cljs.core.constantly.call(null,true),p__8354);
} else
{return and__3937__auto____8359;
}
})();
var a__8363 = (function (){var and__3937__auto____8361 = o__8356;
if(cljs.core.truth_(and__3937__auto____8361))
{var and__3937__auto____8362 = in_list__8358;
if(and__3937__auto____8362)
{return cljs.core.nth.call(null,s,o__8356,null);
} else
{return and__3937__auto____8362;
}
} else
{return and__3937__auto____8361;
}
})();
var r__8365 = (function (){var or__3939__auto____8364 = subpar.paredit.count_lines.call(null,s,o__8356,c__8357);
if(cljs.core.truth_(or__3939__auto____8364))
{return or__3939__auto____8364;
} else
{return 1;
}
})();
var num__8366 = (cljs.core.truth_(starts__8360)?cljs.core.count.call(null,starts__8360):0);
if((num__8366 > 1))
{return cljs.core.PersistentVector.fromArray([a__8363,o__8356,cljs.core.second.call(null,starts__8360),false,r__8365], true);
} else
{if(cljs.core._EQ_.call(null,num__8366,1))
{return cljs.core.PersistentVector.fromArray([a__8363,o__8356,c__8357,true,r__8365], true);
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
var p__8379 = subpar.paredit.parse.call(null,s);
var vec__8378__8380 = subpar.paredit.get_wrapper.call(null,p__8379,i);
var o__8381 = cljs.core.nth.call(null,vec__8378__8380,0,null);
var c__8382 = cljs.core.nth.call(null,vec__8378__8380,1,null);
var in_list__8383 = cljs.core.not_EQ_.call(null,-1,o__8381);
if(in_list__8383)
{var vec__8384__8385 = subpar.paredit.get_wrapper.call(null,p__8379,o__8381);
var n__8386 = cljs.core.nth.call(null,vec__8384__8385,0,null);
var d__8387 = cljs.core.nth.call(null,vec__8384__8385,1,null);
var r__8388 = subpar.paredit.count_lines.call(null,s,n__8386,d__8387);
return cljs.core.PersistentVector.fromArray([o__8381,c__8382,((0 > n__8386) ? 0 : n__8386),r__8388], true);
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
var p__8401 = subpar.paredit.parse.call(null,s);
var vec__8400__8402 = subpar.paredit.get_wrapper.call(null,p__8401,i);
var o__8403 = cljs.core.nth.call(null,vec__8400__8402,0,null);
var c__8404 = cljs.core.nth.call(null,vec__8400__8402,1,null);
var in_list__8405 = cljs.core.not_EQ_.call(null,-1,o__8403);
if(in_list__8405)
{var vec__8406__8407 = subpar.paredit.get_wrapper.call(null,p__8401,o__8403);
var n__8408 = cljs.core.nth.call(null,vec__8406__8407,0,null);
var d__8409 = cljs.core.nth.call(null,vec__8406__8407,1,null);
var r__8410 = subpar.paredit.count_lines.call(null,s,n__8408,d__8409);
return cljs.core.PersistentVector.fromArray([o__8403,((o__8403 > i) ? o__8403 : i),c__8404,((0 > n__8408) ? 0 : n__8408),r__8410], true);
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
var p__8423 = subpar.paredit.parse.call(null,s);
var vec__8422__8424 = subpar.paredit.get_wrapper.call(null,p__8423,i);
var o__8425 = cljs.core.nth.call(null,vec__8422__8424,0,null);
var c__8426 = cljs.core.nth.call(null,vec__8422__8424,1,null);
var in_list__8427 = cljs.core.not_EQ_.call(null,-1,o__8425);
if(in_list__8427)
{var vec__8428__8429 = subpar.paredit.get_wrapper.call(null,p__8423,o__8425);
var n__8430 = cljs.core.nth.call(null,vec__8428__8429,0,null);
var d__8431 = cljs.core.nth.call(null,vec__8428__8429,1,null);
var r__8432 = subpar.paredit.count_lines.call(null,s,n__8430,d__8431);
return cljs.core.PersistentVector.fromArray([o__8425,i,(c__8426 + 1),((0 > n__8430) ? 0 : n__8430),r__8432], true);
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
var s__8471 = [cljs.core.str(ss),cljs.core.str(" ")].join('');
var i__8472 = 0;
var mode__8473 = subpar.paredit.code;
var openings__8474 = cljs.core.list.call(null,-1);
var start__8475 = -1;
var t__8476 = cljs.core.PersistentVector.EMPTY;
var families__8477 = cljs.core.PersistentArrayMap.fromArrays([-1],[cljs.core.ObjMap.fromObject(["\uFDD0'children"],{"\uFDD0'children":cljs.core.ObjMap.EMPTY})]);
var escaping__8478 = false;
var in_word__8479 = false;
while(true){
var a__8480 = cljs.core.nth.call(null,s__8471,i__8472,null);
var j__8481 = (i__8472 + 1);
var o__8482 = cljs.core.peek.call(null,openings__8474);
if(cljs.core.truth_((function (){var and__3937__auto____8483 = (a__8480 == null);
if(and__3937__auto____8483)
{return in_word__8479;
} else
{return and__3937__auto____8483;
}
})()))
{return cljs.core.ObjMap.fromObject(["\uFDD0'chars","\uFDD0'families"],{"\uFDD0'chars":t__8476,"\uFDD0'families":cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8477,cljs.core.PersistentVector.fromArray([-1,"\uFDD0'closer"], true),(i__8472 - 1)),cljs.core.PersistentVector.fromArray([-1,"\uFDD0'children",start__8475], true),(i__8472 - 1))});
} else
{if((a__8480 == null))
{return cljs.core.ObjMap.fromObject(["\uFDD0'chars","\uFDD0'families"],{"\uFDD0'chars":t__8476,"\uFDD0'families":cljs.core.assoc_in.call(null,families__8477,cljs.core.PersistentVector.fromArray([-1,"\uFDD0'closer"], true),(i__8472 - 1))});
} else
{if((function (){var and__3937__auto____8484 = cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode__8473);
if(and__3937__auto____8484)
{var and__3937__auto____8485 = cljs.core._EQ_.call(null,"\\",a__8480);
if(and__3937__auto____8485)
{var and__3937__auto____8486 = cljs.core.not.call(null,escaping__8478);
if(and__3937__auto____8486)
{return cljs.core.not.call(null,in_word__8479);
} else
{return and__3937__auto____8486;
}
} else
{return and__3937__auto____8485;
}
} else
{return and__3937__auto____8484;
}
})())
{{
var G__8509 = j__8481;
var G__8510 = mode__8473;
var G__8511 = openings__8474;
var G__8512 = i__8472;
var G__8513 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8514 = cljs.core.assoc_in.call(null,families__8477,cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'children",i__8472], true),j__8481);
var G__8515 = true;
var G__8516 = true;
i__8472 = G__8509;
mode__8473 = G__8510;
openings__8474 = G__8511;
start__8475 = G__8512;
t__8476 = G__8513;
families__8477 = G__8514;
escaping__8478 = G__8515;
in_word__8479 = G__8516;
continue;
}
} else
{if((function (){var and__3937__auto____8487 = cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode__8473);
if(and__3937__auto____8487)
{var and__3937__auto____8488 = cljs.core._EQ_.call(null,"\\",a__8480);
if(and__3937__auto____8488)
{return cljs.core.not.call(null,escaping__8478);
} else
{return and__3937__auto____8488;
}
} else
{return and__3937__auto____8487;
}
})())
{{
var G__8517 = j__8481;
var G__8518 = mode__8473;
var G__8519 = openings__8474;
var G__8520 = i__8472;
var G__8521 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8522 = families__8477;
var G__8523 = true;
var G__8524 = true;
i__8472 = G__8517;
mode__8473 = G__8518;
openings__8474 = G__8519;
start__8475 = G__8520;
t__8476 = G__8521;
families__8477 = G__8522;
escaping__8478 = G__8523;
in_word__8479 = G__8524;
continue;
}
} else
{if((function (){var and__3937__auto____8489 = cljs.core._EQ_.call(null,subpar.paredit.code,mode__8473);
if(and__3937__auto____8489)
{var and__3937__auto____8490 = cljs.core._EQ_.call(null,";",a__8480);
if(and__3937__auto____8490)
{return cljs.core.not.call(null,escaping__8478);
} else
{return and__3937__auto____8490;
}
} else
{return and__3937__auto____8489;
}
})())
{{
var G__8525 = j__8481;
var G__8526 = subpar.paredit.cmmnt;
var G__8527 = openings__8474;
var G__8528 = start__8475;
var G__8529 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8530 = families__8477;
var G__8531 = false;
var G__8532 = false;
i__8472 = G__8525;
mode__8473 = G__8526;
openings__8474 = G__8527;
start__8475 = G__8528;
t__8476 = G__8529;
families__8477 = G__8530;
escaping__8478 = G__8531;
in_word__8479 = G__8532;
continue;
}
} else
{if((function (){var and__3937__auto____8491 = cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode__8473);
if(and__3937__auto____8491)
{return cljs.core._EQ_.call(null,"\n",a__8480);
} else
{return and__3937__auto____8491;
}
})())
{{
var G__8533 = j__8481;
var G__8534 = subpar.paredit.code;
var G__8535 = openings__8474;
var G__8536 = start__8475;
var G__8537 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8538 = families__8477;
var G__8539 = false;
var G__8540 = false;
i__8472 = G__8533;
mode__8473 = G__8534;
openings__8474 = G__8535;
start__8475 = G__8536;
t__8476 = G__8537;
families__8477 = G__8538;
escaping__8478 = G__8539;
in_word__8479 = G__8540;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode__8473))
{{
var G__8541 = j__8481;
var G__8542 = subpar.paredit.cmmnt;
var G__8543 = openings__8474;
var G__8544 = start__8475;
var G__8545 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8546 = families__8477;
var G__8547 = false;
var G__8548 = false;
i__8472 = G__8541;
mode__8473 = G__8542;
openings__8474 = G__8543;
start__8475 = G__8544;
t__8476 = G__8545;
families__8477 = G__8546;
escaping__8478 = G__8547;
in_word__8479 = G__8548;
continue;
}
} else
{if((function (){var and__3937__auto____8492 = cljs.core._EQ_.call(null,subpar.paredit.code,mode__8473);
if(and__3937__auto____8492)
{var and__3937__auto____8493 = cljs.core._EQ_.call(null,"\"",a__8480);
if(and__3937__auto____8493)
{return cljs.core.not.call(null,escaping__8478);
} else
{return and__3937__auto____8493;
}
} else
{return and__3937__auto____8492;
}
})())
{{
var G__8549 = j__8481;
var G__8550 = subpar.paredit.string;
var G__8551 = cljs.core.conj.call(null,openings__8474,i__8472);
var G__8552 = -1;
var G__8553 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8554 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8477,cljs.core.PersistentVector.fromArray([i__8472,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY),cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'children",i__8472], true),j__8481);
var G__8555 = false;
var G__8556 = false;
i__8472 = G__8549;
mode__8473 = G__8550;
openings__8474 = G__8551;
start__8475 = G__8552;
t__8476 = G__8553;
families__8477 = G__8554;
escaping__8478 = G__8555;
in_word__8479 = G__8556;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8494 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8473);
if(and__3937__auto____8494)
{var and__3937__auto____8495 = cljs.core._EQ_.call(null,"\"",a__8480);
if(and__3937__auto____8495)
{var and__3937__auto____8496 = cljs.core.not.call(null,escaping__8478);
if(and__3937__auto____8496)
{return in_word__8479;
} else
{return and__3937__auto____8496;
}
} else
{return and__3937__auto____8495;
}
} else
{return and__3937__auto____8494;
}
})()))
{{
var G__8557 = j__8481;
var G__8558 = subpar.paredit.code;
var G__8559 = cljs.core.pop.call(null,openings__8474);
var G__8560 = -1;
var G__8561 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8562 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8477,cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'closer"], true),i__8472),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8474),"\uFDD0'children",o__8482], true),i__8472),cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'children",start__8475], true),(i__8472 - 1));
var G__8563 = false;
var G__8564 = false;
i__8472 = G__8557;
mode__8473 = G__8558;
openings__8474 = G__8559;
start__8475 = G__8560;
t__8476 = G__8561;
families__8477 = G__8562;
escaping__8478 = G__8563;
in_word__8479 = G__8564;
continue;
}
} else
{if((function (){var and__3937__auto____8497 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8473);
if(and__3937__auto____8497)
{var and__3937__auto____8498 = cljs.core._EQ_.call(null,"\"",a__8480);
if(and__3937__auto____8498)
{return cljs.core.not.call(null,escaping__8478);
} else
{return and__3937__auto____8498;
}
} else
{return and__3937__auto____8497;
}
})())
{{
var G__8565 = j__8481;
var G__8566 = subpar.paredit.code;
var G__8567 = cljs.core.pop.call(null,openings__8474);
var G__8568 = -1;
var G__8569 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8570 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8477,cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'closer"], true),i__8472),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8474),"\uFDD0'children",o__8482], true),i__8472);
var G__8571 = false;
var G__8572 = false;
i__8472 = G__8565;
mode__8473 = G__8566;
openings__8474 = G__8567;
start__8475 = G__8568;
t__8476 = G__8569;
families__8477 = G__8570;
escaping__8478 = G__8571;
in_word__8479 = G__8572;
continue;
}
} else
{if((function (){var and__3937__auto____8499 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8473);
if(and__3937__auto____8499)
{var and__3937__auto____8500 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8480));
if(and__3937__auto____8500)
{return cljs.core.not.call(null,in_word__8479);
} else
{return and__3937__auto____8500;
}
} else
{return and__3937__auto____8499;
}
})())
{{
var G__8573 = j__8481;
var G__8574 = subpar.paredit.string;
var G__8575 = openings__8474;
var G__8576 = i__8472;
var G__8577 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8578 = cljs.core.assoc_in.call(null,families__8477,cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'children",i__8472], true),i__8472);
var G__8579 = false;
var G__8580 = true;
i__8472 = G__8573;
mode__8473 = G__8574;
openings__8474 = G__8575;
start__8475 = G__8576;
t__8476 = G__8577;
families__8477 = G__8578;
escaping__8478 = G__8579;
in_word__8479 = G__8580;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8501 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8473);
if(and__3937__auto____8501)
{var and__3937__auto____8502 = subpar.paredit.whitespace_QMARK_.call(null,a__8480);
if(cljs.core.truth_(and__3937__auto____8502))
{return in_word__8479;
} else
{return and__3937__auto____8502;
}
} else
{return and__3937__auto____8501;
}
})()))
{{
var G__8581 = j__8481;
var G__8582 = subpar.paredit.string;
var G__8583 = openings__8474;
var G__8584 = -1;
var G__8585 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8586 = cljs.core.assoc_in.call(null,families__8477,cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'children",start__8475], true),(i__8472 - 1));
var G__8587 = false;
var G__8588 = false;
i__8472 = G__8581;
mode__8473 = G__8582;
openings__8474 = G__8583;
start__8475 = G__8584;
t__8476 = G__8585;
families__8477 = G__8586;
escaping__8478 = G__8587;
in_word__8479 = G__8588;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.string,mode__8473))
{{
var G__8589 = j__8481;
var G__8590 = subpar.paredit.string;
var G__8591 = openings__8474;
var G__8592 = start__8475;
var G__8593 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8594 = families__8477;
var G__8595 = false;
var G__8596 = in_word__8479;
i__8472 = G__8589;
mode__8473 = G__8590;
openings__8474 = G__8591;
start__8475 = G__8592;
t__8476 = G__8593;
families__8477 = G__8594;
escaping__8478 = G__8595;
in_word__8479 = G__8596;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8503 = subpar.paredit.opener_QMARK_.call(null,a__8480);
if(cljs.core.truth_(and__3937__auto____8503))
{return in_word__8479;
} else
{return and__3937__auto____8503;
}
})()))
{{
var G__8597 = j__8481;
var G__8598 = subpar.paredit.code;
var G__8599 = cljs.core.conj.call(null,openings__8474,i__8472);
var G__8600 = -1;
var G__8601 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8602 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8477,cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'children",start__8475], true),(i__8472 - 1)),cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'children",i__8472], true),i__8472),cljs.core.PersistentVector.fromArray([i__8472,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY);
var G__8603 = false;
var G__8604 = false;
i__8472 = G__8597;
mode__8473 = G__8598;
openings__8474 = G__8599;
start__8475 = G__8600;
t__8476 = G__8601;
families__8477 = G__8602;
escaping__8478 = G__8603;
in_word__8479 = G__8604;
continue;
}
} else
{if(cljs.core.truth_(subpar.paredit.opener_QMARK_.call(null,a__8480)))
{{
var G__8605 = j__8481;
var G__8606 = subpar.paredit.code;
var G__8607 = cljs.core.conj.call(null,openings__8474,i__8472);
var G__8608 = -1;
var G__8609 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8610 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8477,cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'children",i__8472], true),i__8472),cljs.core.PersistentVector.fromArray([i__8472,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY);
var G__8611 = false;
var G__8612 = false;
i__8472 = G__8605;
mode__8473 = G__8606;
openings__8474 = G__8607;
start__8475 = G__8608;
t__8476 = G__8609;
families__8477 = G__8610;
escaping__8478 = G__8611;
in_word__8479 = G__8612;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8504 = subpar.paredit.closer_QMARK_.call(null,a__8480);
if(cljs.core.truth_(and__3937__auto____8504))
{return in_word__8479;
} else
{return and__3937__auto____8504;
}
})()))
{{
var G__8613 = j__8481;
var G__8614 = subpar.paredit.code;
var G__8615 = cljs.core.pop.call(null,openings__8474);
var G__8616 = -1;
var G__8617 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8618 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8477,cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'children",start__8475], true),(i__8472 - 1)),cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'closer"], true),i__8472),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8474),"\uFDD0'children",o__8482], true),i__8472);
var G__8619 = false;
var G__8620 = false;
i__8472 = G__8613;
mode__8473 = G__8614;
openings__8474 = G__8615;
start__8475 = G__8616;
t__8476 = G__8617;
families__8477 = G__8618;
escaping__8478 = G__8619;
in_word__8479 = G__8620;
continue;
}
} else
{if(cljs.core.truth_(subpar.paredit.closer_QMARK_.call(null,a__8480)))
{{
var G__8621 = j__8481;
var G__8622 = subpar.paredit.code;
var G__8623 = cljs.core.pop.call(null,openings__8474);
var G__8624 = -1;
var G__8625 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8626 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8477,cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'closer"], true),i__8472),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8474),"\uFDD0'children",o__8482], true),i__8472);
var G__8627 = false;
var G__8628 = false;
i__8472 = G__8621;
mode__8473 = G__8622;
openings__8474 = G__8623;
start__8475 = G__8624;
t__8476 = G__8625;
families__8477 = G__8626;
escaping__8478 = G__8627;
in_word__8479 = G__8628;
continue;
}
} else
{if((function (){var and__3937__auto____8505 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8480));
if(and__3937__auto____8505)
{return cljs.core.not.call(null,in_word__8479);
} else
{return and__3937__auto____8505;
}
})())
{{
var G__8629 = j__8481;
var G__8630 = subpar.paredit.code;
var G__8631 = openings__8474;
var G__8632 = i__8472;
var G__8633 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8634 = cljs.core.assoc_in.call(null,families__8477,cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'children",i__8472], true),i__8472);
var G__8635 = false;
var G__8636 = true;
i__8472 = G__8629;
mode__8473 = G__8630;
openings__8474 = G__8631;
start__8475 = G__8632;
t__8476 = G__8633;
families__8477 = G__8634;
escaping__8478 = G__8635;
in_word__8479 = G__8636;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8506 = subpar.paredit.whitespace_QMARK_.call(null,a__8480);
if(cljs.core.truth_(and__3937__auto____8506))
{return in_word__8479;
} else
{return and__3937__auto____8506;
}
})()))
{{
var G__8637 = j__8481;
var G__8638 = subpar.paredit.code;
var G__8639 = openings__8474;
var G__8640 = -1;
var G__8641 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8642 = cljs.core.assoc_in.call(null,families__8477,cljs.core.PersistentVector.fromArray([o__8482,"\uFDD0'children",start__8475], true),(i__8472 - 1));
var G__8643 = false;
var G__8644 = false;
i__8472 = G__8637;
mode__8473 = G__8638;
openings__8474 = G__8639;
start__8475 = G__8640;
t__8476 = G__8641;
families__8477 = G__8642;
escaping__8478 = G__8643;
in_word__8479 = G__8644;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8507 = subpar.paredit.whitespace_QMARK_.call(null,a__8480);
if(cljs.core.truth_(and__3937__auto____8507))
{return cljs.core.not.call(null,in_word__8479);
} else
{return and__3937__auto____8507;
}
})()))
{{
var G__8645 = j__8481;
var G__8646 = subpar.paredit.code;
var G__8647 = openings__8474;
var G__8648 = -1;
var G__8649 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8650 = families__8477;
var G__8651 = false;
var G__8652 = false;
i__8472 = G__8645;
mode__8473 = G__8646;
openings__8474 = G__8647;
start__8475 = G__8648;
t__8476 = G__8649;
families__8477 = G__8650;
escaping__8478 = G__8651;
in_word__8479 = G__8652;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8508 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8480));
if(and__3937__auto____8508)
{return in_word__8479;
} else
{return and__3937__auto____8508;
}
})()))
{{
var G__8653 = j__8481;
var G__8654 = subpar.paredit.code;
var G__8655 = openings__8474;
var G__8656 = start__8475;
var G__8657 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray([mode__8473,o__8482], true));
var G__8658 = families__8477;
var G__8659 = false;
var G__8660 = true;
i__8472 = G__8653;
mode__8473 = G__8654;
openings__8474 = G__8655;
start__8475 = G__8656;
t__8476 = G__8657;
families__8477 = G__8658;
escaping__8478 = G__8659;
in_word__8479 = G__8660;
continue;
}
} else
{if("\uFDD0'default")
{{
var G__8661 = j__8481;
var G__8662 = subpar.paredit.code;
var G__8663 = openings__8474;
var G__8664 = start__8475;
var G__8665 = cljs.core.conj.call(null,t__8476,cljs.core.PersistentVector.fromArray(["?",o__8482], true));
var G__8666 = families__8477;
var G__8667 = escaping__8478;
var G__8668 = in_word__8479;
i__8472 = G__8661;
mode__8473 = G__8662;
openings__8474 = G__8663;
start__8475 = G__8664;
t__8476 = G__8665;
families__8477 = G__8666;
escaping__8478 = G__8667;
in_word__8479 = G__8668;
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
