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
var or__3939__auto____8173 = cljs.core._EQ_.call(null,x,"\t");
if(or__3939__auto____8173)
{return or__3939__auto____8173;
} else
{var or__3939__auto____8174 = cljs.core._EQ_.call(null,x," ");
if(or__3939__auto____8174)
{return or__3939__auto____8174;
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
var and__3937__auto____8178 = (function (){var and__3937__auto____8177 = (0 <= i);
if(and__3937__auto____8177)
{return (i <= cljs.core.count.call(null,(new cljs.core.Keyword("\uFDD0'chars")).call(null,p)));
} else
{return and__3937__auto____8177;
}
})();
if(cljs.core.truth_(and__3937__auto____8178))
{return cljs.core._EQ_.call(null,mode,subpar.paredit.get_mode.call(null,p,i));
} else
{return and__3937__auto____8178;
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
var and__3937__auto____8182 = i;
if(cljs.core.truth_(and__3937__auto____8182))
{var and__3937__auto____8183 = j;
if(cljs.core.truth_(and__3937__auto____8183))
{return (cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__8179_SHARP_){
return cljs.core._EQ_.call(null,"\n",p1__8179_SHARP_);
}),cljs.core.drop.call(null,i,cljs.core.drop_last.call(null,((cljs.core.count.call(null,s) - j) - 1),cljs.core.take.call(null,cljs.core.count.call(null,s),s))))) + 1);
} else
{return and__3937__auto____8183;
}
} else
{return and__3937__auto____8182;
}
});
/**
* whether the current spot is escaped
*/
subpar.paredit.escaped_QMARK_ = (function escaped_QMARK_(s,i){
return cljs.core.odd_QMARK_.call(null,(function (){var c__8187 = 0;
var j__8188 = (i - 1);
while(true){
var a__8189 = cljs.core.nth.call(null,s,j__8188,null);
if((j__8188 < 0))
{return c__8187;
} else
{if((a__8189 == null))
{return c__8187;
} else
{if(cljs.core.not_EQ_.call(null,"\\",a__8189))
{return c__8187;
} else
{if(true)
{{
var G__8190 = (c__8187 + 1);
var G__8191 = (j__8188 - 1);
c__8187 = G__8190;
j__8188 = G__8191;
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
var vec__8196__8197 = subpar.paredit.get_wrapper.call(null,subpar.paredit.parse.call(null,s),i);
var o__8198 = cljs.core.nth.call(null,vec__8196__8197,0,null);
var c__8199 = cljs.core.nth.call(null,vec__8196__8197,1,null);
if(cljs.core._EQ_.call(null,-1,o__8198))
{return i;
} else
{return o__8198;
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
var p__8204 = subpar.paredit.parse.call(null,s);
var h__8205 = (i - 1);
var j__8206 = (i + 1);
var c__8207 = cljs.core.nth.call(null,s,i,null);
if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,j__8206)))
{return 3;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([h__8205,i], true),subpar.paredit.get_wrapper.call(null,p__8204,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p__8204,i)))
{return 0;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([i,j__8206], true),subpar.paredit.get_wrapper.call(null,p__8204,j__8206)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null,p__8204,i)))
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
var p__8211 = subpar.paredit.parse.call(null,s);
var g__8212 = (i - 2);
var h__8213 = (i - 1);
if((i <= 0))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,h__8213)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null,s,i)))
{return 2;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([g__8212,h__8213], true),subpar.paredit.get_wrapper.call(null,p__8211,h__8213)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null,p__8211,h__8213)))
{return 4;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray([h__8213,i], true),subpar.paredit.get_wrapper.call(null,p__8211,i)))
{return 2;
} else
{if(cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null,p__8211,h__8213)))
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
var p__8215 = subpar.paredit.parse.call(null,s);
if((i < 0))
{return 0;
} else
{if((i >= cljs.core.count.call(null,s)))
{return 0;
} else
{if(cljs.core.truth_(subpar.paredit.in_comment_QMARK_.call(null,p__8215,i)))
{return 3;
} else
{if(cljs.core.truth_(subpar.paredit.n_str_QMARK_.call(null,p__8215,i)))
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
var vec__8225__8226 = subpar.paredit.get_wrapper.call(null,p,i);
var o__8227 = cljs.core.nth.call(null,vec__8225__8226,0,null);
var c__8228 = cljs.core.nth.call(null,vec__8225__8226,1,null);
if(cljs.core._EQ_.call(null,-1,o__8227))
{return cljs.core.PersistentVector.EMPTY;
} else
{var start__8230 = ((function (){var or__3939__auto____8229 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.identity,p));
if(cljs.core.truth_(or__3939__auto____8229))
{return or__3939__auto____8229;
} else
{return o__8227;
}
})() + 1);
var delete__8231 = cljs.core.not_EQ_.call(null,start__8230,c__8228);
var dest__8232 = ((delete__8231)?(start__8230 + 1):(c__8228 + 1));
return cljs.core.PersistentVector.fromArray([delete__8231,start__8230,c__8228,dest__8232], true);
}
});
/**
* finds the start of the next list/string/vector/map
*/
subpar.paredit.get_start_of_next_list = (function get_start_of_next_list(s,i){
var p__8236 = subpar.paredit.parse.call(null,s);
var r__8238 = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,(function (p1__8216_SHARP_){
var and__3937__auto____8237 = (p1__8216_SHARP_ >= i);
if(and__3937__auto____8237)
{return cljs.core.get_in.call(null,p__8236,cljs.core.PersistentVector.fromArray(["\uFDD0'families",p1__8216_SHARP_], true));
} else
{return and__3937__auto____8237;
}
}),p__8236));
if((r__8238 == null))
{return false;
} else
{return r__8238;
}
});
subpar.paredit.forward_down_fn = (function forward_down_fn(s,i){
var r__8241 = subpar.paredit.get_start_of_next_list.call(null,s,i);
if(cljs.core.truth_(r__8241))
{return (r__8241 + 1);
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
var p__8247 = subpar.paredit.parse.call(null,s);
var b__8248 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.keys,(function (p1__8239_SHARP_){
return (p1__8239_SHARP_ < i);
}),p__8247));
var o__8249 = subpar.paredit.get_opening_delimiter_index_with_parse.call(null,p__8247,i);
var or__3939__auto____8250 = b__8248;
if(cljs.core.truth_(or__3939__auto____8250))
{return or__3939__auto____8250;
} else
{if((o__8249 < 0))
{return 0;
} else
{return o__8249;
}
}
});
/**
* paredit-backward-down
*/
subpar.paredit.backward_down_fn = (function backward_down_fn(s,i){
var p__8255 = subpar.paredit.parse.call(null,s);
var b__8257 = cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,(function (p1__8242_SHARP_){
var and__3937__auto____8256 = (p1__8242_SHARP_ < i);
if(and__3937__auto____8256)
{return subpar.paredit.closes_list_QMARK_.call(null,p__8255,p1__8242_SHARP_);
} else
{return and__3937__auto____8256;
}
}),p__8255));
var or__3939__auto____8258 = b__8257;
if(cljs.core.truth_(or__3939__auto____8258))
{return or__3939__auto____8258;
} else
{return i;
}
});
/**
* paredit-forward-up
*/
subpar.paredit.forward_up_fn = (function forward_up_fn(s,i){
var p__8267 = subpar.paredit.parse.call(null,s);
var vec__8266__8268 = subpar.paredit.get_wrapper.call(null,p__8267,i);
var o__8269 = cljs.core.nth.call(null,vec__8266__8268,0,null);
var c__8270 = cljs.core.nth.call(null,vec__8266__8268,1,null);
var in_list__8271 = cljs.core.not_EQ_.call(null,-1,o__8269);
if(in_list__8271)
{return (c__8270 + 1);
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
var p__8277 = subpar.paredit.parse.call(null,s);
var b__8278 = cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,i,cljs.core.vals,(function (p1__8259_SHARP_){
return (p1__8259_SHARP_ >= i);
}),p__8277));
var c__8279 = subpar.paredit.get_closing_delimiter_index_with_parse.call(null,p__8277,i);
var l__8280 = cljs.core.count.call(null,s);
if(cljs.core.truth_(b__8278))
{return (b__8278 + 1);
} else
{if(cljs.core.truth_(c__8279))
{return (((c__8279 + 1) < l__8280) ? (c__8279 + 1) : l__8280);
} else
{if(true)
{return l__8280;
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
var p__8295 = subpar.paredit.parse.call(null,s);
var vec__8294__8296 = subpar.paredit.get_wrapper.call(null,p__8295,i);
var o__8297 = cljs.core.nth.call(null,vec__8294__8296,0,null);
var c__8298 = cljs.core.nth.call(null,vec__8294__8296,1,null);
var in_list__8299 = cljs.core.not_EQ_.call(null,-1,o__8297);
var a__8301 = (function (){var and__3937__auto____8300 = in_list__8299;
if(and__3937__auto____8300)
{return cljs.core.nth.call(null,s,c__8298,false);
} else
{return and__3937__auto____8300;
}
})();
var d__8303 = (function (){var and__3937__auto____8302 = in_list__8299;
if(and__3937__auto____8302)
{return cljs.core.first.call(null,subpar.paredit.get_siblings.call(null,o__8297,cljs.core.vals,(function (p1__8272_SHARP_){
return (p1__8272_SHARP_ > c__8298);
}),p__8295));
} else
{return and__3937__auto____8302;
}
})();
if(cljs.core.truth_((function (){var and__3937__auto____8304 = a__8301;
if(cljs.core.truth_(and__3937__auto____8304))
{var and__3937__auto____8305 = c__8298;
if(cljs.core.truth_(and__3937__auto____8305))
{return d__8303;
} else
{return and__3937__auto____8305;
}
} else
{return and__3937__auto____8304;
}
})()))
{return cljs.core.PersistentVector.fromArray([a__8301,c__8298,(d__8303 + 1),subpar.paredit.count_lines.call(null,s,o__8297,(d__8303 + 1))], true);
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
var p__8318 = subpar.paredit.parse.call(null,s);
var vec__8317__8319 = subpar.paredit.get_wrapper.call(null,p__8318,i);
var o__8320 = cljs.core.nth.call(null,vec__8317__8319,0,null);
var c__8321 = cljs.core.nth.call(null,vec__8317__8319,1,null);
var in_list__8322 = cljs.core.not_EQ_.call(null,-1,o__8320);
var d__8324 = (function (){var and__3937__auto____8323 = in_list__8322;
if(and__3937__auto____8323)
{return cljs.core.last.call(null,subpar.paredit.get_siblings.call(null,o__8320,cljs.core.keys,(function (p1__8281_SHARP_){
return (p1__8281_SHARP_ < o__8320);
}),p__8318));
} else
{return and__3937__auto____8323;
}
})();
var a__8326 = (function (){var and__3937__auto____8325 = in_list__8322;
if(and__3937__auto____8325)
{return cljs.core.nth.call(null,s,o__8320,false);
} else
{return and__3937__auto____8325;
}
})();
if(cljs.core.truth_((function (){var and__3937__auto____8327 = a__8326;
if(cljs.core.truth_(and__3937__auto____8327))
{return d__8324;
} else
{return and__3937__auto____8327;
}
})()))
{return cljs.core.PersistentVector.fromArray([a__8326,o__8320,d__8324,subpar.paredit.count_lines.call(null,s,d__8324,c__8321)], true);
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
var p__8343 = subpar.paredit.parse.call(null,s);
var vec__8342__8344 = subpar.paredit.get_wrapper.call(null,p__8343,i);
var o__8345 = cljs.core.nth.call(null,vec__8342__8344,0,null);
var c__8346 = cljs.core.nth.call(null,vec__8342__8344,1,null);
var in_list__8347 = cljs.core.not_EQ_.call(null,-1,o__8345);
var endings__8349 = (function (){var and__3937__auto____8348 = in_list__8347;
if(and__3937__auto____8348)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.vals,cljs.core.constantly.call(null,true),p__8343);
} else
{return and__3937__auto____8348;
}
})();
var a__8352 = (function (){var and__3937__auto____8350 = c__8346;
if(cljs.core.truth_(and__3937__auto____8350))
{var and__3937__auto____8351 = in_list__8347;
if(and__3937__auto____8351)
{return cljs.core.nth.call(null,s,c__8346,null);
} else
{return and__3937__auto____8351;
}
} else
{return and__3937__auto____8350;
}
})();
var r__8354 = (function (){var or__3939__auto____8353 = subpar.paredit.count_lines.call(null,s,o__8345,c__8346);
if(cljs.core.truth_(or__3939__auto____8353))
{return or__3939__auto____8353;
} else
{return 1;
}
})();
var num__8355 = (cljs.core.truth_(endings__8349)?cljs.core.count.call(null,endings__8349):0);
if((num__8355 > 1))
{return cljs.core.PersistentVector.fromArray([a__8352,c__8346,(cljs.core.nth.call(null,endings__8349,(num__8355 - 2)) + 1),false,r__8354,o__8345], true);
} else
{if(cljs.core._EQ_.call(null,num__8355,1))
{return cljs.core.PersistentVector.fromArray([a__8352,c__8346,(o__8345 + 1),true,r__8354,o__8345], true);
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
var p__8371 = subpar.paredit.parse.call(null,s);
var vec__8370__8372 = subpar.paredit.get_wrapper.call(null,p__8371,i);
var o__8373 = cljs.core.nth.call(null,vec__8370__8372,0,null);
var c__8374 = cljs.core.nth.call(null,vec__8370__8372,1,null);
var in_list__8375 = cljs.core.not_EQ_.call(null,-1,o__8373);
var starts__8377 = (function (){var and__3937__auto____8376 = in_list__8375;
if(and__3937__auto____8376)
{return subpar.paredit.get_siblings.call(null,i,cljs.core.keys,cljs.core.constantly.call(null,true),p__8371);
} else
{return and__3937__auto____8376;
}
})();
var a__8380 = (function (){var and__3937__auto____8378 = o__8373;
if(cljs.core.truth_(and__3937__auto____8378))
{var and__3937__auto____8379 = in_list__8375;
if(and__3937__auto____8379)
{return cljs.core.nth.call(null,s,o__8373,null);
} else
{return and__3937__auto____8379;
}
} else
{return and__3937__auto____8378;
}
})();
var r__8382 = (function (){var or__3939__auto____8381 = subpar.paredit.count_lines.call(null,s,o__8373,c__8374);
if(cljs.core.truth_(or__3939__auto____8381))
{return or__3939__auto____8381;
} else
{return 1;
}
})();
var num__8383 = (cljs.core.truth_(starts__8377)?cljs.core.count.call(null,starts__8377):0);
if((num__8383 > 1))
{return cljs.core.PersistentVector.fromArray([a__8380,o__8373,cljs.core.second.call(null,starts__8377),false,r__8382], true);
} else
{if(cljs.core._EQ_.call(null,num__8383,1))
{return cljs.core.PersistentVector.fromArray([a__8380,o__8373,c__8374,true,r__8382], true);
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
var p__8396 = subpar.paredit.parse.call(null,s);
var vec__8395__8397 = subpar.paredit.get_wrapper.call(null,p__8396,i);
var o__8398 = cljs.core.nth.call(null,vec__8395__8397,0,null);
var c__8399 = cljs.core.nth.call(null,vec__8395__8397,1,null);
var in_list__8400 = cljs.core.not_EQ_.call(null,-1,o__8398);
if(in_list__8400)
{var vec__8401__8402 = subpar.paredit.get_wrapper.call(null,p__8396,o__8398);
var n__8403 = cljs.core.nth.call(null,vec__8401__8402,0,null);
var d__8404 = cljs.core.nth.call(null,vec__8401__8402,1,null);
var r__8405 = subpar.paredit.count_lines.call(null,s,n__8403,d__8404);
return cljs.core.PersistentVector.fromArray([o__8398,c__8399,((0 > n__8403) ? 0 : n__8403),r__8405], true);
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
var p__8418 = subpar.paredit.parse.call(null,s);
var vec__8417__8419 = subpar.paredit.get_wrapper.call(null,p__8418,i);
var o__8420 = cljs.core.nth.call(null,vec__8417__8419,0,null);
var c__8421 = cljs.core.nth.call(null,vec__8417__8419,1,null);
var in_list__8422 = cljs.core.not_EQ_.call(null,-1,o__8420);
if(in_list__8422)
{var vec__8423__8424 = subpar.paredit.get_wrapper.call(null,p__8418,o__8420);
var n__8425 = cljs.core.nth.call(null,vec__8423__8424,0,null);
var d__8426 = cljs.core.nth.call(null,vec__8423__8424,1,null);
var r__8427 = subpar.paredit.count_lines.call(null,s,n__8425,d__8426);
return cljs.core.PersistentVector.fromArray([o__8420,((o__8420 > i) ? o__8420 : i),c__8421,((0 > n__8425) ? 0 : n__8425),r__8427], true);
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
var p__8440 = subpar.paredit.parse.call(null,s);
var vec__8439__8441 = subpar.paredit.get_wrapper.call(null,p__8440,i);
var o__8442 = cljs.core.nth.call(null,vec__8439__8441,0,null);
var c__8443 = cljs.core.nth.call(null,vec__8439__8441,1,null);
var in_list__8444 = cljs.core.not_EQ_.call(null,-1,o__8442);
if(in_list__8444)
{var vec__8445__8446 = subpar.paredit.get_wrapper.call(null,p__8440,o__8442);
var n__8447 = cljs.core.nth.call(null,vec__8445__8446,0,null);
var d__8448 = cljs.core.nth.call(null,vec__8445__8446,1,null);
var r__8449 = subpar.paredit.count_lines.call(null,s,n__8447,d__8448);
return cljs.core.PersistentVector.fromArray([o__8442,i,(c__8443 + 1),((0 > n__8447) ? 0 : n__8447),r__8449], true);
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
var s__8488 = [cljs.core.str(ss),cljs.core.str(" ")].join('');
var i__8489 = 0;
var mode__8490 = subpar.paredit.code;
var openings__8491 = cljs.core.list.call(null,-1);
var start__8492 = -1;
var t__8493 = cljs.core.PersistentVector.EMPTY;
var families__8494 = cljs.core.PersistentArrayMap.fromArrays([-1],[cljs.core.ObjMap.fromObject(["\uFDD0'children"],{"\uFDD0'children":cljs.core.ObjMap.EMPTY})]);
var escaping__8495 = false;
var in_word__8496 = false;
while(true){
var a__8497 = cljs.core.nth.call(null,s__8488,i__8489,null);
var j__8498 = (i__8489 + 1);
var o__8499 = cljs.core.peek.call(null,openings__8491);
if(cljs.core.truth_((function (){var and__3937__auto____8500 = (a__8497 == null);
if(and__3937__auto____8500)
{return in_word__8496;
} else
{return and__3937__auto____8500;
}
})()))
{return cljs.core.ObjMap.fromObject(["\uFDD0'chars","\uFDD0'families"],{"\uFDD0'chars":t__8493,"\uFDD0'families":cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8494,cljs.core.PersistentVector.fromArray([-1,"\uFDD0'closer"], true),(i__8489 - 1)),cljs.core.PersistentVector.fromArray([-1,"\uFDD0'children",start__8492], true),(i__8489 - 1))});
} else
{if((a__8497 == null))
{return cljs.core.ObjMap.fromObject(["\uFDD0'chars","\uFDD0'families"],{"\uFDD0'chars":t__8493,"\uFDD0'families":cljs.core.assoc_in.call(null,families__8494,cljs.core.PersistentVector.fromArray([-1,"\uFDD0'closer"], true),(i__8489 - 1))});
} else
{if((function (){var and__3937__auto____8501 = cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode__8490);
if(and__3937__auto____8501)
{var and__3937__auto____8502 = cljs.core._EQ_.call(null,"\\",a__8497);
if(and__3937__auto____8502)
{var and__3937__auto____8503 = cljs.core.not.call(null,escaping__8495);
if(and__3937__auto____8503)
{return cljs.core.not.call(null,in_word__8496);
} else
{return and__3937__auto____8503;
}
} else
{return and__3937__auto____8502;
}
} else
{return and__3937__auto____8501;
}
})())
{{
var G__8526 = j__8498;
var G__8527 = mode__8490;
var G__8528 = openings__8491;
var G__8529 = i__8489;
var G__8530 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8531 = cljs.core.assoc_in.call(null,families__8494,cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'children",i__8489], true),j__8498);
var G__8532 = true;
var G__8533 = true;
i__8489 = G__8526;
mode__8490 = G__8527;
openings__8491 = G__8528;
start__8492 = G__8529;
t__8493 = G__8530;
families__8494 = G__8531;
escaping__8495 = G__8532;
in_word__8496 = G__8533;
continue;
}
} else
{if((function (){var and__3937__auto____8504 = cljs.core.not_EQ_.call(null,subpar.paredit.cmmnt,mode__8490);
if(and__3937__auto____8504)
{var and__3937__auto____8505 = cljs.core._EQ_.call(null,"\\",a__8497);
if(and__3937__auto____8505)
{return cljs.core.not.call(null,escaping__8495);
} else
{return and__3937__auto____8505;
}
} else
{return and__3937__auto____8504;
}
})())
{{
var G__8534 = j__8498;
var G__8535 = mode__8490;
var G__8536 = openings__8491;
var G__8537 = i__8489;
var G__8538 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8539 = families__8494;
var G__8540 = true;
var G__8541 = true;
i__8489 = G__8534;
mode__8490 = G__8535;
openings__8491 = G__8536;
start__8492 = G__8537;
t__8493 = G__8538;
families__8494 = G__8539;
escaping__8495 = G__8540;
in_word__8496 = G__8541;
continue;
}
} else
{if((function (){var and__3937__auto____8506 = cljs.core._EQ_.call(null,subpar.paredit.code,mode__8490);
if(and__3937__auto____8506)
{var and__3937__auto____8507 = cljs.core._EQ_.call(null,";",a__8497);
if(and__3937__auto____8507)
{return cljs.core.not.call(null,escaping__8495);
} else
{return and__3937__auto____8507;
}
} else
{return and__3937__auto____8506;
}
})())
{{
var G__8542 = j__8498;
var G__8543 = subpar.paredit.cmmnt;
var G__8544 = openings__8491;
var G__8545 = start__8492;
var G__8546 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8547 = families__8494;
var G__8548 = false;
var G__8549 = false;
i__8489 = G__8542;
mode__8490 = G__8543;
openings__8491 = G__8544;
start__8492 = G__8545;
t__8493 = G__8546;
families__8494 = G__8547;
escaping__8495 = G__8548;
in_word__8496 = G__8549;
continue;
}
} else
{if((function (){var and__3937__auto____8508 = cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode__8490);
if(and__3937__auto____8508)
{return cljs.core._EQ_.call(null,"\n",a__8497);
} else
{return and__3937__auto____8508;
}
})())
{{
var G__8550 = j__8498;
var G__8551 = subpar.paredit.code;
var G__8552 = openings__8491;
var G__8553 = start__8492;
var G__8554 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8555 = families__8494;
var G__8556 = false;
var G__8557 = false;
i__8489 = G__8550;
mode__8490 = G__8551;
openings__8491 = G__8552;
start__8492 = G__8553;
t__8493 = G__8554;
families__8494 = G__8555;
escaping__8495 = G__8556;
in_word__8496 = G__8557;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.cmmnt,mode__8490))
{{
var G__8558 = j__8498;
var G__8559 = subpar.paredit.cmmnt;
var G__8560 = openings__8491;
var G__8561 = start__8492;
var G__8562 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8563 = families__8494;
var G__8564 = false;
var G__8565 = false;
i__8489 = G__8558;
mode__8490 = G__8559;
openings__8491 = G__8560;
start__8492 = G__8561;
t__8493 = G__8562;
families__8494 = G__8563;
escaping__8495 = G__8564;
in_word__8496 = G__8565;
continue;
}
} else
{if((function (){var and__3937__auto____8509 = cljs.core._EQ_.call(null,subpar.paredit.code,mode__8490);
if(and__3937__auto____8509)
{var and__3937__auto____8510 = cljs.core._EQ_.call(null,"\"",a__8497);
if(and__3937__auto____8510)
{return cljs.core.not.call(null,escaping__8495);
} else
{return and__3937__auto____8510;
}
} else
{return and__3937__auto____8509;
}
})())
{{
var G__8566 = j__8498;
var G__8567 = subpar.paredit.string;
var G__8568 = cljs.core.conj.call(null,openings__8491,i__8489);
var G__8569 = -1;
var G__8570 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8571 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8494,cljs.core.PersistentVector.fromArray([i__8489,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY),cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'children",i__8489], true),j__8498);
var G__8572 = false;
var G__8573 = false;
i__8489 = G__8566;
mode__8490 = G__8567;
openings__8491 = G__8568;
start__8492 = G__8569;
t__8493 = G__8570;
families__8494 = G__8571;
escaping__8495 = G__8572;
in_word__8496 = G__8573;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8511 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8490);
if(and__3937__auto____8511)
{var and__3937__auto____8512 = cljs.core._EQ_.call(null,"\"",a__8497);
if(and__3937__auto____8512)
{var and__3937__auto____8513 = cljs.core.not.call(null,escaping__8495);
if(and__3937__auto____8513)
{return in_word__8496;
} else
{return and__3937__auto____8513;
}
} else
{return and__3937__auto____8512;
}
} else
{return and__3937__auto____8511;
}
})()))
{{
var G__8574 = j__8498;
var G__8575 = subpar.paredit.code;
var G__8576 = cljs.core.pop.call(null,openings__8491);
var G__8577 = -1;
var G__8578 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8579 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8494,cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'closer"], true),i__8489),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8491),"\uFDD0'children",o__8499], true),i__8489),cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'children",start__8492], true),(i__8489 - 1));
var G__8580 = false;
var G__8581 = false;
i__8489 = G__8574;
mode__8490 = G__8575;
openings__8491 = G__8576;
start__8492 = G__8577;
t__8493 = G__8578;
families__8494 = G__8579;
escaping__8495 = G__8580;
in_word__8496 = G__8581;
continue;
}
} else
{if((function (){var and__3937__auto____8514 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8490);
if(and__3937__auto____8514)
{var and__3937__auto____8515 = cljs.core._EQ_.call(null,"\"",a__8497);
if(and__3937__auto____8515)
{return cljs.core.not.call(null,escaping__8495);
} else
{return and__3937__auto____8515;
}
} else
{return and__3937__auto____8514;
}
})())
{{
var G__8582 = j__8498;
var G__8583 = subpar.paredit.code;
var G__8584 = cljs.core.pop.call(null,openings__8491);
var G__8585 = -1;
var G__8586 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8587 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8494,cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'closer"], true),i__8489),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8491),"\uFDD0'children",o__8499], true),i__8489);
var G__8588 = false;
var G__8589 = false;
i__8489 = G__8582;
mode__8490 = G__8583;
openings__8491 = G__8584;
start__8492 = G__8585;
t__8493 = G__8586;
families__8494 = G__8587;
escaping__8495 = G__8588;
in_word__8496 = G__8589;
continue;
}
} else
{if((function (){var and__3937__auto____8516 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8490);
if(and__3937__auto____8516)
{var and__3937__auto____8517 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8497));
if(and__3937__auto____8517)
{return cljs.core.not.call(null,in_word__8496);
} else
{return and__3937__auto____8517;
}
} else
{return and__3937__auto____8516;
}
})())
{{
var G__8590 = j__8498;
var G__8591 = subpar.paredit.string;
var G__8592 = openings__8491;
var G__8593 = i__8489;
var G__8594 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8595 = cljs.core.assoc_in.call(null,families__8494,cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'children",i__8489], true),i__8489);
var G__8596 = false;
var G__8597 = true;
i__8489 = G__8590;
mode__8490 = G__8591;
openings__8491 = G__8592;
start__8492 = G__8593;
t__8493 = G__8594;
families__8494 = G__8595;
escaping__8495 = G__8596;
in_word__8496 = G__8597;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8518 = cljs.core._EQ_.call(null,subpar.paredit.string,mode__8490);
if(and__3937__auto____8518)
{var and__3937__auto____8519 = subpar.paredit.whitespace_QMARK_.call(null,a__8497);
if(cljs.core.truth_(and__3937__auto____8519))
{return in_word__8496;
} else
{return and__3937__auto____8519;
}
} else
{return and__3937__auto____8518;
}
})()))
{{
var G__8598 = j__8498;
var G__8599 = subpar.paredit.string;
var G__8600 = openings__8491;
var G__8601 = -1;
var G__8602 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8603 = cljs.core.assoc_in.call(null,families__8494,cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'children",start__8492], true),(i__8489 - 1));
var G__8604 = false;
var G__8605 = false;
i__8489 = G__8598;
mode__8490 = G__8599;
openings__8491 = G__8600;
start__8492 = G__8601;
t__8493 = G__8602;
families__8494 = G__8603;
escaping__8495 = G__8604;
in_word__8496 = G__8605;
continue;
}
} else
{if(cljs.core._EQ_.call(null,subpar.paredit.string,mode__8490))
{{
var G__8606 = j__8498;
var G__8607 = subpar.paredit.string;
var G__8608 = openings__8491;
var G__8609 = start__8492;
var G__8610 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8611 = families__8494;
var G__8612 = false;
var G__8613 = in_word__8496;
i__8489 = G__8606;
mode__8490 = G__8607;
openings__8491 = G__8608;
start__8492 = G__8609;
t__8493 = G__8610;
families__8494 = G__8611;
escaping__8495 = G__8612;
in_word__8496 = G__8613;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8520 = subpar.paredit.opener_QMARK_.call(null,a__8497);
if(cljs.core.truth_(and__3937__auto____8520))
{return in_word__8496;
} else
{return and__3937__auto____8520;
}
})()))
{{
var G__8614 = j__8498;
var G__8615 = subpar.paredit.code;
var G__8616 = cljs.core.conj.call(null,openings__8491,i__8489);
var G__8617 = -1;
var G__8618 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8619 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8494,cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'children",start__8492], true),(i__8489 - 1)),cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'children",i__8489], true),i__8489),cljs.core.PersistentVector.fromArray([i__8489,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY);
var G__8620 = false;
var G__8621 = false;
i__8489 = G__8614;
mode__8490 = G__8615;
openings__8491 = G__8616;
start__8492 = G__8617;
t__8493 = G__8618;
families__8494 = G__8619;
escaping__8495 = G__8620;
in_word__8496 = G__8621;
continue;
}
} else
{if(cljs.core.truth_(subpar.paredit.opener_QMARK_.call(null,a__8497)))
{{
var G__8622 = j__8498;
var G__8623 = subpar.paredit.code;
var G__8624 = cljs.core.conj.call(null,openings__8491,i__8489);
var G__8625 = -1;
var G__8626 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8627 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8494,cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'children",i__8489], true),i__8489),cljs.core.PersistentVector.fromArray([i__8489,"\uFDD0'children"], true),cljs.core.ObjMap.EMPTY);
var G__8628 = false;
var G__8629 = false;
i__8489 = G__8622;
mode__8490 = G__8623;
openings__8491 = G__8624;
start__8492 = G__8625;
t__8493 = G__8626;
families__8494 = G__8627;
escaping__8495 = G__8628;
in_word__8496 = G__8629;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8521 = subpar.paredit.closer_QMARK_.call(null,a__8497);
if(cljs.core.truth_(and__3937__auto____8521))
{return in_word__8496;
} else
{return and__3937__auto____8521;
}
})()))
{{
var G__8630 = j__8498;
var G__8631 = subpar.paredit.code;
var G__8632 = cljs.core.pop.call(null,openings__8491);
var G__8633 = -1;
var G__8634 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8635 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8494,cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'children",start__8492], true),(i__8489 - 1)),cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'closer"], true),i__8489),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8491),"\uFDD0'children",o__8499], true),i__8489);
var G__8636 = false;
var G__8637 = false;
i__8489 = G__8630;
mode__8490 = G__8631;
openings__8491 = G__8632;
start__8492 = G__8633;
t__8493 = G__8634;
families__8494 = G__8635;
escaping__8495 = G__8636;
in_word__8496 = G__8637;
continue;
}
} else
{if(cljs.core.truth_(subpar.paredit.closer_QMARK_.call(null,a__8497)))
{{
var G__8638 = j__8498;
var G__8639 = subpar.paredit.code;
var G__8640 = cljs.core.pop.call(null,openings__8491);
var G__8641 = -1;
var G__8642 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8643 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,families__8494,cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'closer"], true),i__8489),cljs.core.PersistentVector.fromArray([cljs.core.second.call(null,openings__8491),"\uFDD0'children",o__8499], true),i__8489);
var G__8644 = false;
var G__8645 = false;
i__8489 = G__8638;
mode__8490 = G__8639;
openings__8491 = G__8640;
start__8492 = G__8641;
t__8493 = G__8642;
families__8494 = G__8643;
escaping__8495 = G__8644;
in_word__8496 = G__8645;
continue;
}
} else
{if((function (){var and__3937__auto____8522 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8497));
if(and__3937__auto____8522)
{return cljs.core.not.call(null,in_word__8496);
} else
{return and__3937__auto____8522;
}
})())
{{
var G__8646 = j__8498;
var G__8647 = subpar.paredit.code;
var G__8648 = openings__8491;
var G__8649 = i__8489;
var G__8650 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8651 = cljs.core.assoc_in.call(null,families__8494,cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'children",i__8489], true),i__8489);
var G__8652 = false;
var G__8653 = true;
i__8489 = G__8646;
mode__8490 = G__8647;
openings__8491 = G__8648;
start__8492 = G__8649;
t__8493 = G__8650;
families__8494 = G__8651;
escaping__8495 = G__8652;
in_word__8496 = G__8653;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8523 = subpar.paredit.whitespace_QMARK_.call(null,a__8497);
if(cljs.core.truth_(and__3937__auto____8523))
{return in_word__8496;
} else
{return and__3937__auto____8523;
}
})()))
{{
var G__8654 = j__8498;
var G__8655 = subpar.paredit.code;
var G__8656 = openings__8491;
var G__8657 = -1;
var G__8658 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8659 = cljs.core.assoc_in.call(null,families__8494,cljs.core.PersistentVector.fromArray([o__8499,"\uFDD0'children",start__8492], true),(i__8489 - 1));
var G__8660 = false;
var G__8661 = false;
i__8489 = G__8654;
mode__8490 = G__8655;
openings__8491 = G__8656;
start__8492 = G__8657;
t__8493 = G__8658;
families__8494 = G__8659;
escaping__8495 = G__8660;
in_word__8496 = G__8661;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8524 = subpar.paredit.whitespace_QMARK_.call(null,a__8497);
if(cljs.core.truth_(and__3937__auto____8524))
{return cljs.core.not.call(null,in_word__8496);
} else
{return and__3937__auto____8524;
}
})()))
{{
var G__8662 = j__8498;
var G__8663 = subpar.paredit.code;
var G__8664 = openings__8491;
var G__8665 = -1;
var G__8666 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8667 = families__8494;
var G__8668 = false;
var G__8669 = false;
i__8489 = G__8662;
mode__8490 = G__8663;
openings__8491 = G__8664;
start__8492 = G__8665;
t__8493 = G__8666;
families__8494 = G__8667;
escaping__8495 = G__8668;
in_word__8496 = G__8669;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3937__auto____8525 = cljs.core.not.call(null,subpar.paredit.whitespace_QMARK_.call(null,a__8497));
if(and__3937__auto____8525)
{return in_word__8496;
} else
{return and__3937__auto____8525;
}
})()))
{{
var G__8670 = j__8498;
var G__8671 = subpar.paredit.code;
var G__8672 = openings__8491;
var G__8673 = start__8492;
var G__8674 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray([mode__8490,o__8499], true));
var G__8675 = families__8494;
var G__8676 = false;
var G__8677 = true;
i__8489 = G__8670;
mode__8490 = G__8671;
openings__8491 = G__8672;
start__8492 = G__8673;
t__8493 = G__8674;
families__8494 = G__8675;
escaping__8495 = G__8676;
in_word__8496 = G__8677;
continue;
}
} else
{if("\uFDD0'default")
{{
var G__8678 = j__8498;
var G__8679 = subpar.paredit.code;
var G__8680 = openings__8491;
var G__8681 = start__8492;
var G__8682 = cljs.core.conj.call(null,t__8493,cljs.core.PersistentVector.fromArray(["?",o__8499], true));
var G__8683 = families__8494;
var G__8684 = escaping__8495;
var G__8685 = in_word__8496;
i__8489 = G__8678;
mode__8490 = G__8679;
openings__8491 = G__8680;
start__8492 = G__8681;
t__8493 = G__8682;
families__8494 = G__8683;
escaping__8495 = G__8684;
in_word__8496 = G__8685;
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
