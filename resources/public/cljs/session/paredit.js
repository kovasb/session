// Compiled by ClojureScript 0.0-2197
goog.provide('session.paredit');
goog.require('cljs.core');
goog.require('clojure.set');
session.paredit.string_contains_QMARK_ = (function string_contains_QMARK_(str,x){return cljs.core.not_EQ_.call(null,str.indexOf(x),-1);
});
session.paredit.selection_QMARK_ = (function selection_QMARK_(e){return e.somethingSelected();
});
session.paredit.kill_line = (function kill_line(e){return CodeMirror.commands.killLine(e);
});
session.paredit.new_line_indent = (function new_line_indent(e){return CodeMirror.commands.newlineAndIndent(e);
});
session.paredit.caret = (function caret(e,side){return e.getCursor(side);
});
/**
* @param {...*} var_args
*/
session.paredit.caret_position = (function() { 
var caret_position__delegate = function (e,p__10134){var vec__10136 = p__10134;var side = cljs.core.nth.call(null,vec__10136,0,null);var pos = session.paredit.caret.call(null,e,side);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),pos.line,new cljs.core.Keyword(null,"ch","ch",1013907415),pos.ch], null);
};
var caret_position = function (e,var_args){
var p__10134 = null;if (arguments.length > 1) {
  p__10134 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return caret_position__delegate.call(this,e,p__10134);};
caret_position.cljs$lang$maxFixedArity = 1;
caret_position.cljs$lang$applyTo = (function (arglist__10137){
var e = cljs.core.first(arglist__10137);
var p__10134 = cljs.core.rest(arglist__10137);
return caret_position__delegate(e,p__10134);
});
caret_position.cljs$core$IFn$_invoke$arity$variadic = caret_position__delegate;
return caret_position;
})()
;
session.paredit.selection_bounds = (function selection_bounds(e){if(cljs.core.truth_(session.paredit.selection_QMARK_.call(null,e)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),session.paredit.caret_position.call(null,e,"start"),new cljs.core.Keyword(null,"to","to",1013907949),session.paredit.caret_position.call(null,e,"end")], null);
} else
{return null;
}
});
session.paredit.token_at = (function token_at(e,pos){return cljs.core.js__GT_clj.call(null,e.getTokenAt(cljs.core.clj__GT_js.call(null,pos)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
session.paredit.get_line = (function get_line(e,l){return e.getLine(l);
});
session.paredit.replace_range = (function() {
var replace_range = null;
var replace_range__3 = (function (editor,start,value){return editor.replaceRange(value,cljs.core.clj__GT_js.call(null,start));
});
var replace_range__4 = (function (editor,start,end,value){return editor.replaceRange(value,cljs.core.clj__GT_js.call(null,start),cljs.core.clj__GT_js.call(null,end));
});
replace_range = function(editor,start,end,value){
switch(arguments.length){
case 3:
return replace_range__3.call(this,editor,start,end);
case 4:
return replace_range__4.call(this,editor,start,end,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_range.cljs$core$IFn$_invoke$arity$3 = replace_range__3;
replace_range.cljs$core$IFn$_invoke$arity$4 = replace_range__4;
return replace_range;
})()
;
session.paredit.get_range = (function get_range(e,from,to){return e.getRange(cljs.core.clj__GT_js.call(null,from),cljs.core.clj__GT_js.call(null,to));
});
session.paredit.pos__GT_index = (function pos__GT_index(e,pos){return e.indexFromPos(cljs.core.clj__GT_js.call(null,pos));
});
session.paredit.set_loc = (function() {
var set_loc = null;
var set_loc__2 = (function (loc,dir){return set_loc.call(null,loc,dir,new cljs.core.Keyword(null,"ch","ch",1013907415));
});
var set_loc__3 = (function (loc,dir,axis){if(cljs.core.truth_(loc))
{return cljs.core.update_in.call(null,loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [axis], null),cljs.core._PLUS_,dir);
} else
{return null;
}
});
set_loc = function(loc,dir,axis){
switch(arguments.length){
case 2:
return set_loc__2.call(this,loc,dir);
case 3:
return set_loc__3.call(this,loc,dir,axis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_loc.cljs$core$IFn$_invoke$arity$2 = set_loc__2;
set_loc.cljs$core$IFn$_invoke$arity$3 = set_loc__3;
return set_loc;
})()
;
session.paredit.token_type_at = (function token_type_at(e,pos){return e.getTokenTypeAt(cljs.core.clj__GT_js.call(null,pos));
});
session.paredit.set_cursor = (function set_cursor(e,pos){return e.setCursor(cljs.core.clj__GT_js.call(null,pos));
});
session.paredit.cm_operation = (function cm_operation(e,func){e.operation(func);
return e;
});
session.paredit.indent_lines = (function indent_lines(editor,start,end,t){var d = (new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end) - new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start));if((d === 0))
{return editor.indentLine(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(end),t);
} else
{var n__4326__auto__ = (d + 1);var x = 0;while(true){
if((x < n__4326__auto__))
{editor.indentLine((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start) + x));
{
var G__10138 = (x + 1);
x = G__10138;
continue;
}
} else
{return null;
}
break;
}
}
});
session.paredit.line_count = (function line_count(e,l){return cljs.core.count.call(null,session.paredit.get_line.call(null,e,l));
});
session.paredit.whitespace_QMARK_ = (function whitespace_QMARK_(s){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [" ",null,"\t",null,"\n",null,"\f",null,"\r",null], null), null),s);
});
session.paredit.pairs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"list","list",1017226256),new cljs.core.Keyword(null,"open","open",1017321916),"(",new cljs.core.Keyword(null,"close","close",1108660586),")"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"open","open",1017321916),"{",new cljs.core.Keyword(null,"close","close",1108660586),"}"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"string","string",4416885635),new cljs.core.Keyword(null,"open","open",1017321916),"\"",new cljs.core.Keyword(null,"close","close",1108660586),"\""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"vector","vector",4488484021),new cljs.core.Keyword(null,"open","open",1017321916),"[",new cljs.core.Keyword(null,"close","close",1108660586),"]"], null)], null);
session.paredit.directions = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward","backward",3135881045),-1,new cljs.core.Keyword(null,"forward","forward",4631725623),1], null);
session.paredit.dir__GT_int = (function dir__GT_int(dir){return cljs.core.get.call(null,session.paredit.directions,dir);
});
session.paredit.pair_chars = (function pair_chars(t){if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"all","all",1014000915)))
{return clojure.set.union.call(null,pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)));
} else
{return cljs.core.set.call(null,cljs.core.map.call(null,t,session.paredit.pairs));
}
});
session.paredit.pair__GT_set = (function pair__GT_set(p){return cljs.core.set.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"open","open",1017321916),new cljs.core.Keyword(null,"close","close",1108660586)).call(null,p));
});
session.paredit.char__GT_pair = (function char__GT_pair(c){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (m){return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(m),c)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"close","close",1108660586).cljs$core$IFn$_invoke$arity$1(m),c));
}),session.paredit.pairs));
});
session.paredit.char_type = (function char_type(p,c){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(p),c))
{return new cljs.core.Keyword(null,"open","open",1017321916);
} else
{return new cljs.core.Keyword(null,"close","close",1108660586);
}
});
session.paredit.type__GT_dir = (function type__GT_dir(t){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",1017321916),t))
{return new cljs.core.Keyword(null,"forward","forward",4631725623);
} else
{return new cljs.core.Keyword(null,"backward","backward",3135881045);
}
});
session.paredit.opposite_char = (function opposite_char(c){var temp__4092__auto__ = session.paredit.char__GT_pair.call(null,c);if(cljs.core.truth_(temp__4092__auto__))
{var p = temp__4092__auto__;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(p),c))
{return new cljs.core.Keyword(null,"close","close",1108660586).cljs$core$IFn$_invoke$arity$1(p);
} else
{return new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(p);
}
} else
{return null;
}
});
session.paredit.char_at_loc = (function char_at_loc(ed,loc){var l = session.paredit.get_line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));var c = cljs.core.get.call(null,l,new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(loc));return c;
});
session.paredit.comment_BAR_string_BAR_char_QMARK_ = (function comment_BAR_string_BAR_char_QMARK_(ed,loc,allow_strings_QMARK_){var temp__4090__auto__ = session.paredit.token_type_at.call(null,ed,session.paredit.set_loc.call(null,loc,1));if(cljs.core.truth_(temp__4090__auto__))
{var tokentype = temp__4090__auto__;if(session.paredit.string_contains_QMARK_.call(null,tokentype,"comment-form"))
{return false;
} else
{if(session.paredit.string_contains_QMARK_.call(null,tokentype,"comment"))
{return true;
} else
{if(session.paredit.string_contains_QMARK_.call(null,tokentype,"char"))
{return true;
} else
{if(session.paredit.string_contains_QMARK_.call(null,tokentype,"string"))
{if(cljs.core.truth_(allow_strings_QMARK_))
{return null;
} else
{return true;
}
} else
{return null;
}
}
}
}
} else
{return false;
}
});
session.paredit.index__GT_pos = (function index__GT_pos(ed,i){return ed.posFromIndex(i);
});
session.paredit.loc_compare_fn = (function loc_compare_fn(f){return (function() { 
var G__10140__delegate = function (ed,locs){return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__10139_SHARP_){return session.paredit.pos__GT_index.call(null,ed,p1__10139_SHARP_);
}),locs));
};
var G__10140 = function (ed,var_args){
var locs = null;if (arguments.length > 1) {
  locs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__10140__delegate.call(this,ed,locs);};
G__10140.cljs$lang$maxFixedArity = 1;
G__10140.cljs$lang$applyTo = (function (arglist__10141){
var ed = cljs.core.first(arglist__10141);
var locs = cljs.core.rest(arglist__10141);
return G__10140__delegate(ed,locs);
});
G__10140.cljs$core$IFn$_invoke$arity$variadic = G__10140__delegate;
return G__10140;
})()
;
});
session.paredit.loc_LT_ = session.paredit.loc_compare_fn.call(null,cljs.core._LT_);
session.paredit.loc_GT_ = session.paredit.loc_compare_fn.call(null,cljs.core._GT_);
session.paredit.loc_GT__EQ_ = session.paredit.loc_compare_fn.call(null,cljs.core._GT__EQ_);
session.paredit.loc_LT__EQ_ = session.paredit.loc_compare_fn.call(null,cljs.core._LT__EQ_);
session.paredit.escaped_char_QMARK_ = (function escaped_char_QMARK_(ed,loc){var loc__$1 = session.paredit.set_loc.call(null,loc,-1);var result = 0;while(true){
var vec__10143 = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"line","line",1017226086)).call(null,loc__$1);var ch = cljs.core.nth.call(null,vec__10143,0,null);var line = cljs.core.nth.call(null,vec__10143,1,null);var c = session.paredit.char_at_loc.call(null,ed,loc__$1);if((ch < 0))
{return cljs.core.odd_QMARK_.call(null,result);
} else
{if(cljs.core._EQ_.call(null,"\\",c))
{{
var G__10144 = session.paredit.set_loc.call(null,loc__$1,-1);
var G__10145 = (result + 1);
loc__$1 = G__10144;
result = G__10145;
continue;
}
} else
{return cljs.core.odd_QMARK_.call(null,result);
}
}
break;
}
});
session.paredit.escapes_char_QMARK_ = (function escapes_char_QMARK_(ed,loc){if(cljs.core.truth_((function (){var and__3466__auto__ = cljs.core._EQ_.call(null,"\\",session.paredit.char_at_loc.call(null,ed,loc));if(and__3466__auto__)
{var and__3466__auto____$1 = !(session.paredit.escaped_char_QMARK_.call(null,ed,loc));if(and__3466__auto____$1)
{return session.paredit.char_at_loc.call(null,ed,session.paredit.set_loc.call(null,loc,1));
} else
{return and__3466__auto____$1;
}
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
session.paredit.find_pos_h = (function() {
var find_pos_h = null;
var find_pos_h__3 = (function (ed,loc,amount){return find_pos_h.call(null,ed,loc,amount,new cljs.core.Keyword(null,"char","char",1016956616),false);
});
var find_pos_h__5 = (function (ed,loc,amount,unit,vis_QMARK_){var pos = ed.findPosH(cljs.core.clj__GT_js.call(null,loc),amount,cljs.core.name.call(null,unit),vis_QMARK_);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),pos.line,new cljs.core.Keyword(null,"ch","ch",1013907415),pos.ch], null);
});
find_pos_h = function(ed,loc,amount,unit,vis_QMARK_){
switch(arguments.length){
case 3:
return find_pos_h__3.call(this,ed,loc,amount);
case 5:
return find_pos_h__5.call(this,ed,loc,amount,unit,vis_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_pos_h.cljs$core$IFn$_invoke$arity$3 = find_pos_h__3;
find_pos_h.cljs$core$IFn$_invoke$arity$5 = find_pos_h__5;
return find_pos_h;
})()
;
session.paredit.string_boundary = (function string_boundary(ed,l,dir){var loc = l;var result = null;while(true){
var token_type = session.paredit.token_type_at.call(null,ed,session.paredit.set_loc.call(null,loc,1));var next_loc = session.paredit.find_pos_h.call(null,ed,loc,session.paredit.dir__GT_int.call(null,dir));if(cljs.core.truth_((function (){var and__3466__auto__ = token_type;if(cljs.core.truth_(and__3466__auto__))
{return session.paredit.string_contains_QMARK_.call(null,token_type,"string");
} else
{return and__3466__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,next_loc,loc))
{var pred__10149 = cljs.core._EQ_;var expr__10150 = dir;if(cljs.core.truth_(pred__10149.call(null,new cljs.core.Keyword(null,"backward","backward",3135881045),expr__10150)))
{return loc;
} else
{if(cljs.core.truth_(pred__10149.call(null,new cljs.core.Keyword(null,"forward","forward",4631725623),expr__10150)))
{return session.paredit.set_loc.call(null,loc,-1);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10150)].join('')));
}
}
} else
{{
var G__10152 = next_loc;
var G__10153 = loc;
loc = G__10152;
result = G__10153;
continue;
}
}
} else
{return result;
}
break;
}
});
session.paredit.string_bounds = (function string_bounds(ed,l){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [session.paredit.string_boundary.call(null,ed,l,new cljs.core.Keyword(null,"backward","backward",3135881045)),session.paredit.string_boundary.call(null,ed,l,new cljs.core.Keyword(null,"forward","forward",4631725623))], null);
});
session.paredit.find_match = (function find_match(ed,l,c){var temp__4092__auto__ = session.paredit.char__GT_pair.call(null,c);if(cljs.core.truth_(temp__4092__auto__))
{var p = temp__4092__auto__;var pair_type = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p);var type = session.paredit.char_type.call(null,p,c);var dir = session.paredit.type__GT_dir.call(null,type);var opposite = session.paredit.opposite_char.call(null,c);if(cljs.core._EQ_.call(null,pair_type,new cljs.core.Keyword(null,"string","string",4416885635)))
{return cljs.core.first.call(null,cljs.core.remove.call(null,((function (pair_type,type,dir,opposite,p,temp__4092__auto__){
return (function (p1__10154_SHARP_){return cljs.core._EQ_.call(null,l,p1__10154_SHARP_);
});})(pair_type,type,dir,opposite,p,temp__4092__auto__))
,session.paredit.string_bounds.call(null,ed,l)));
} else
{var chars = session.paredit.locate_chars.call(null,ed,l,cljs.core.PersistentHashSet.fromArray([c,opposite], true),dir);var stack = 0;while(true){
if(cljs.core.empty_QMARK_.call(null,chars))
{return null;
} else
{var vec__10156 = cljs.core.first.call(null,chars);var char$ = cljs.core.nth.call(null,vec__10156,0,null);var loc = cljs.core.nth.call(null,vec__10156,1,null);if(cljs.core._EQ_.call(null,loc,l))
{{
var G__10157 = cljs.core.rest.call(null,chars);
var G__10158 = stack;
chars = G__10157;
stack = G__10158;
continue;
}
} else
{if(cljs.core._EQ_.call(null,char$,c))
{{
var G__10159 = cljs.core.rest.call(null,chars);
var G__10160 = (stack + 1);
chars = G__10159;
stack = G__10160;
continue;
}
} else
{if(cljs.core._EQ_.call(null,char$,opposite))
{if(cljs.core._EQ_.call(null,0,stack))
{return loc;
} else
{{
var G__10161 = cljs.core.rest.call(null,chars);
var G__10162 = (stack - 1);
chars = G__10161;
stack = G__10162;
continue;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__10163 = cljs.core.rest.call(null,chars);
var G__10164 = stack;
chars = G__10163;
stack = G__10164;
continue;
}
} else
{return null;
}
}
}
}
}
break;
}
}
} else
{return null;
}
});
session.paredit.locate_chars = (function() {
var locate_chars = null;
var locate_chars__4 = (function (ed,l,cs,dir){var next_loc = session.paredit.find_pos_h.call(null,ed,l,session.paredit.dir__GT_int.call(null,dir));var c = session.paredit.char_at_loc.call(null,ed,l);var pair = session.paredit.char__GT_pair.call(null,c);if(cljs.core.truth_((function (){var and__3466__auto__ = pair;if(cljs.core.truth_(and__3466__auto__))
{return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(pair),new cljs.core.Keyword(null,"string","string",4416885635))) && (cljs.core.contains_QMARK_.call(null,cs,c));
} else
{return and__3466__auto__;
}
})()))
{var token = session.paredit.token_at.call(null,ed,session.paredit.set_loc.call(null,l,1));var t = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(token);var start = new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token);var end = (new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token) - 1);if((cljs.core._EQ_.call(null,t,"string")) && ((cljs.core._EQ_.call(null,start,new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(l))) || (cljs.core._EQ_.call(null,end,new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(l)))))
{return (new cljs.core.LazySeq(null,((function (token,t,start,end,next_loc,c,pair){
return (function (){return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,l], null),locate_chars.call(null,ed,next_loc,cs,dir));
});})(token,t,start,end,next_loc,c,pair))
,null,null));
} else
{return (new cljs.core.LazySeq(null,((function (token,t,start,end,next_loc,c,pair){
return (function (){return locate_chars.call(null,ed,next_loc,cs,dir);
});})(token,t,start,end,next_loc,c,pair))
,null,null));
}
} else
{if(cljs.core.truth_(session.paredit.comment_BAR_string_BAR_char_QMARK_.call(null,ed,l,false)))
{return (new cljs.core.LazySeq(null,((function (next_loc,c,pair){
return (function (){return locate_chars.call(null,ed,next_loc,cs,dir);
});})(next_loc,c,pair))
,null,null));
} else
{if(cljs.core.contains_QMARK_.call(null,cs,c))
{if(cljs.core._EQ_.call(null,next_loc,l))
{return (new cljs.core.LazySeq(null,((function (next_loc,c,pair){
return (function (){return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,l], null),cljs.core.List.EMPTY);
});})(next_loc,c,pair))
,null,null));
} else
{return (new cljs.core.LazySeq(null,((function (next_loc,c,pair){
return (function (){return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,l], null),locate_chars.call(null,ed,next_loc,cs,dir));
});})(next_loc,c,pair))
,null,null));
}
} else
{if(cljs.core._EQ_.call(null,next_loc,l))
{return cljs.core.List.EMPTY;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new cljs.core.LazySeq(null,((function (next_loc,c,pair){
return (function (){return locate_chars.call(null,ed,next_loc,cs,dir);
});})(next_loc,c,pair))
,null,null));
} else
{return null;
}
}
}
}
}
});
var locate_chars__5 = (function (ed,l,cs,dir,include_start_QMARK_){var l__$1 = (cljs.core.truth_(include_start_QMARK_)?l:session.paredit.find_pos_h.call(null,ed,l,session.paredit.dir__GT_int.call(null,dir)));return locate_chars.call(null,ed,l__$1,cs,dir);
});
locate_chars = function(ed,l,cs,dir,include_start_QMARK_){
switch(arguments.length){
case 4:
return locate_chars__4.call(this,ed,l,cs,dir);
case 5:
return locate_chars__5.call(this,ed,l,cs,dir,include_start_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
locate_chars.cljs$core$IFn$_invoke$arity$4 = locate_chars__4;
locate_chars.cljs$core$IFn$_invoke$arity$5 = locate_chars__5;
return locate_chars;
})()
;
session.paredit.locate_chars_on_line = (function locate_chars_on_line(ed,l,cs,dir){return cljs.core.take_while.call(null,(function (p__10167){var vec__10168 = p__10167;var c = cljs.core.nth.call(null,vec__10168,0,null);var loc = cljs.core.nth.call(null,vec__10168,1,null);return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));
}),session.paredit.locate_chars.call(null,ed,l,cs,dir));
});
session.paredit.find_unbalanced = (function() {
var find_unbalanced = null;
var find_unbalanced__3 = (function (ed,l,dir){var cs = (function (){var pred__10173 = cljs.core._EQ_;var expr__10174 = dir;if(cljs.core.truth_(pred__10173.call(null,new cljs.core.Keyword(null,"forward","forward",4631725623),expr__10174)))
{return session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586));
} else
{if(cljs.core.truth_(pred__10173.call(null,new cljs.core.Keyword(null,"backward","backward",3135881045),expr__10174)))
{return session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10174)].join('')));
}
}
})();return find_unbalanced.call(null,ed,l,cs,dir);
});
var find_unbalanced__4 = (function (ed,l,cs,dir){return find_unbalanced.call(null,ed,session.paredit.locate_chars.call(null,ed,l,cs,dir),l,cs,dir);
});
var find_unbalanced__5 = (function (ed,locations,l,cs,dir){if(!(cljs.core.empty_QMARK_.call(null,locations)))
{var vec__10176 = cljs.core.first.call(null,locations);var c = cljs.core.nth.call(null,vec__10176,0,null);var loc = cljs.core.nth.call(null,vec__10176,1,null);var temp__4090__auto__ = session.paredit.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4090__auto__))
{var matchloc = temp__4090__auto__;if(((session.paredit.dir__GT_int.call(null,dir) * session.paredit.pos__GT_index.call(null,ed,matchloc)) < (session.paredit.dir__GT_int.call(null,dir) * session.paredit.pos__GT_index.call(null,ed,l))))
{return (new cljs.core.LazySeq(null,((function (matchloc,temp__4090__auto__,vec__10176,c,loc){
return (function (){return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,loc], null),find_unbalanced.call(null,ed,cljs.core.rest.call(null,locations),l,cs,dir));
});})(matchloc,temp__4090__auto__,vec__10176,c,loc))
,null,null));
} else
{return (new cljs.core.LazySeq(null,((function (matchloc,temp__4090__auto__,vec__10176,c,loc){
return (function (){return find_unbalanced.call(null,ed,cljs.core.rest.call(null,locations),l,cs,dir);
});})(matchloc,temp__4090__auto__,vec__10176,c,loc))
,null,null));
}
} else
{return (new cljs.core.LazySeq(null,((function (temp__4090__auto__,vec__10176,c,loc){
return (function (){return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,loc], null),find_unbalanced.call(null,ed,cljs.core.rest.call(null,locations),l,cs,dir));
});})(temp__4090__auto__,vec__10176,c,loc))
,null,null));
}
} else
{return cljs.core.List.EMPTY;
}
});
find_unbalanced = function(ed,locations,l,cs,dir){
switch(arguments.length){
case 3:
return find_unbalanced__3.call(this,ed,locations,l);
case 4:
return find_unbalanced__4.call(this,ed,locations,l,cs);
case 5:
return find_unbalanced__5.call(this,ed,locations,l,cs,dir);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_unbalanced.cljs$core$IFn$_invoke$arity$3 = find_unbalanced__3;
find_unbalanced.cljs$core$IFn$_invoke$arity$4 = find_unbalanced__4;
find_unbalanced.cljs$core$IFn$_invoke$arity$5 = find_unbalanced__5;
return find_unbalanced;
})()
;
session.paredit.pair_bounds = (function pair_bounds(ed,l){var temp__4092__auto__ = cljs.core.first.call(null,session.paredit.find_unbalanced.call(null,ed,l,new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__10178 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__10178,0,null);var loc = cljs.core.nth.call(null,vec__10178,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [session.paredit.find_match.call(null,ed,loc,c),loc], null);
} else
{return null;
}
});
session.paredit.move_cursor_along_pair = (function move_cursor_along_pair(ed,l,dir,side){var temp__4092__auto__ = session.paredit.pair_bounds.call(null,ed,l);if(cljs.core.truth_(temp__4092__auto__))
{var vec__10180 = temp__4092__auto__;var startloc = cljs.core.nth.call(null,vec__10180,0,null);var endloc = cljs.core.nth.call(null,vec__10180,1,null);var adjustment = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",3915985649),0,new cljs.core.Keyword(null,"after","after",1106639182),1], null);var dir__GT_loc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forward","forward",4631725623),endloc,new cljs.core.Keyword(null,"backward","backward",3135881045),startloc], null);return session.paredit.set_cursor.call(null,ed,session.paredit.set_loc.call(null,dir__GT_loc.call(null,dir),side.call(null,adjustment)));
} else
{return null;
}
});
session.paredit.paredit_kill = (function paredit_kill(ed){var startloc = session.paredit.caret_position.call(null,ed);var c = session.paredit.char_at_loc.call(null,ed,startloc);var all_pair_chars = session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"all","all",1014000915));if(cljs.core.contains_QMARK_.call(null,all_pair_chars,c))
{var temp__4092__auto__ = session.paredit.find_match.call(null,ed,startloc,c);if(cljs.core.truth_(temp__4092__auto__))
{var matchloc = temp__4092__auto__;if((session.paredit.pos__GT_index.call(null,ed,matchloc) > session.paredit.pos__GT_index.call(null,ed,startloc)))
{return session.paredit.replace_range.call(null,ed,startloc,session.paredit.set_loc.call(null,matchloc,1),"");
} else
{return session.paredit.replace_range.call(null,ed,session.paredit.set_loc.call(null,startloc,1),matchloc,"");
}
} else
{return null;
}
} else
{var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(startloc);var chars = cljs.core.take_while.call(null,((function (line,startloc,c,all_pair_chars){
return (function (p__10191){var vec__10192 = p__10191;var c__$1 = cljs.core.nth.call(null,vec__10192,0,null);var loc = cljs.core.nth.call(null,vec__10192,1,null);return cljs.core._EQ_.call(null,line,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));
});})(line,startloc,c,all_pair_chars))
,session.paredit.locate_chars.call(null,ed,startloc,all_pair_chars,new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.empty_QMARK_.call(null,chars))
{return session.paredit.kill_line.call(null,ed);
} else
{var temp__4090__auto__ = cljs.core.some.call(null,((function (line,chars,startloc,c,all_pair_chars){
return (function (p__10193){var vec__10194 = p__10193;var c__$1 = cljs.core.nth.call(null,vec__10194,0,null);var loc = cljs.core.nth.call(null,vec__10194,1,null);var temp__4092__auto__ = session.paredit.find_match.call(null,ed,loc,c__$1);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;if(cljs.core.truth_(session.paredit.loc_GT_.call(null,ed,startloc,mloc)))
{return loc;
} else
{return null;
}
} else
{return null;
}
});})(line,chars,startloc,c,all_pair_chars))
,cljs.core.filter.call(null,((function (line,chars,startloc,c,all_pair_chars){
return (function (p__10195){var vec__10196 = p__10195;var c__$1 = cljs.core.nth.call(null,vec__10196,0,null);var _ = cljs.core.nth.call(null,vec__10196,1,null);return cljs.core.contains_QMARK_.call(null,session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),c__$1);
});})(line,chars,startloc,c,all_pair_chars))
,chars));if(cljs.core.truth_(temp__4090__auto__))
{var kl = temp__4090__auto__;return session.paredit.replace_range.call(null,ed,startloc,kl,"");
} else
{var temp__4090__auto____$1 = cljs.core.some.call(null,((function (temp__4090__auto__,line,chars,startloc,c,all_pair_chars){
return (function (p__10197){var vec__10198 = p__10197;var c__$1 = cljs.core.nth.call(null,vec__10198,0,null);var loc = cljs.core.nth.call(null,vec__10198,1,null);var temp__4092__auto__ = session.paredit.find_match.call(null,ed,loc,c__$1);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;if((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(mloc) > new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc)))
{return mloc;
} else
{return null;
}
} else
{return null;
}
});})(temp__4090__auto__,line,chars,startloc,c,all_pair_chars))
,cljs.core.filter.call(null,((function (temp__4090__auto__,line,chars,startloc,c,all_pair_chars){
return (function (p__10199){var vec__10200 = p__10199;var c__$1 = cljs.core.nth.call(null,vec__10200,0,null);var _ = cljs.core.nth.call(null,vec__10200,1,null);return cljs.core.contains_QMARK_.call(null,session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),c__$1);
});})(temp__4090__auto__,line,chars,startloc,c,all_pair_chars))
,chars));if(cljs.core.truth_(temp__4090__auto____$1))
{var kl = temp__4090__auto____$1;return session.paredit.replace_range.call(null,ed,startloc,session.paredit.set_loc.call(null,kl,1),"");
} else
{return session.paredit.kill_line.call(null,ed);
}
}
}
}
});
session.paredit.wrap_region = (function() {
var wrap_region = null;
var wrap_region__3 = (function (ed,p__10201,p){var vec__10205 = p__10201;var startloc = cljs.core.nth.call(null,vec__10205,0,null);var endloc = cljs.core.nth.call(null,vec__10205,1,null);return wrap_region.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [startloc,endloc], null),p,false);
});
var wrap_region__4 = (function (ed,p__10202,p,end_inclusive_QMARK_){var vec__10206 = p__10202;var startloc = cljs.core.nth.call(null,vec__10206,0,null);var endloc = cljs.core.nth.call(null,vec__10206,1,null);return session.paredit.cm_operation.call(null,ed,((function (vec__10206,startloc,endloc){
return (function (){session.paredit.replace_range.call(null,ed,session.paredit.set_loc.call(null,endloc,(cljs.core.truth_(end_inclusive_QMARK_)?1:0)),new cljs.core.Keyword(null,"close","close",1108660586).cljs$core$IFn$_invoke$arity$1(p));
return session.paredit.replace_range.call(null,ed,startloc,new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(p));
});})(vec__10206,startloc,endloc))
);
});
wrap_region = function(ed,p__10202,p,end_inclusive_QMARK_){
switch(arguments.length){
case 3:
return wrap_region__3.call(this,ed,p__10202,p);
case 4:
return wrap_region__4.call(this,ed,p__10202,p,end_inclusive_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wrap_region.cljs$core$IFn$_invoke$arity$3 = wrap_region__3;
wrap_region.cljs$core$IFn$_invoke$arity$4 = wrap_region__4;
return wrap_region;
})()
;
session.paredit.paredit_wrap_with_pair = (function paredit_wrap_with_pair(ed,l,p){var c = session.paredit.char_at_loc.call(null,ed,l);if(cljs.core.truth_(session.paredit.selection_QMARK_.call(null,ed)))
{var bounds = session.paredit.selection_bounds.call(null,ed);return session.paredit.wrap_region.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(bounds)], null),p);
} else
{if(cljs.core.truth_(session.paredit.comment_BAR_string_BAR_char_QMARK_.call(null,ed,l,true)))
{return console.log("Paredit: Illegal context: not available in comments or escaped char");
} else
{if(cljs.core.truth_(session.paredit.comment_BAR_string_BAR_char_QMARK_.call(null,ed,l,false)))
{var temp__4092__auto__ = session.paredit.string_bounds.call(null,ed,l);if(cljs.core.truth_(temp__4092__auto__))
{var bounds = temp__4092__auto__;return session.paredit.wrap_region.call(null,ed,bounds,p,true);
} else
{return null;
}
} else
{if(cljs.core.truth_(session.paredit.char__GT_pair.call(null,c)))
{var temp__4092__auto__ = session.paredit.find_match.call(null,ed,l,c);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;return session.paredit.wrap_region.call(null,ed,cljs.core.sort_by.call(null,((function (mloc,temp__4092__auto__,c){
return (function (p1__10207_SHARP_){return session.paredit.pos__GT_index.call(null,ed,p1__10207_SHARP_);
});})(mloc,temp__4092__auto__,c))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,mloc], null)),p,true);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var token = session.paredit.token_at.call(null,ed,session.paredit.set_loc.call(null,l,1));var startloc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token)], null);var endloc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token)], null);return session.paredit.wrap_region.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [startloc,endloc], null),p);
} else
{return null;
}
}
}
}
}
});
session.paredit.paredit_splice_sexp = (function paredit_splice_sexp(ed,l){var temp__4092__auto__ = cljs.core.first.call(null,session.paredit.find_unbalanced.call(null,ed,l,session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__10209 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__10209,0,null);var loc = cljs.core.nth.call(null,vec__10209,1,null);var temp__4092__auto____$1 = session.paredit.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto____$1))
{var mloc = temp__4092__auto____$1;return session.paredit.cm_operation.call(null,ed,((function (mloc,temp__4092__auto____$1,vec__10209,c,loc,temp__4092__auto__){
return (function (){session.paredit.replace_range.call(null,ed,loc,session.paredit.set_loc.call(null,loc,1),"");
return session.paredit.replace_range.call(null,ed,mloc,session.paredit.set_loc.call(null,mloc,1),"");
});})(mloc,temp__4092__auto____$1,vec__10209,c,loc,temp__4092__auto__))
);
} else
{return null;
}
} else
{return null;
}
});
session.paredit.paredit_splice_sexp_kill = (function paredit_splice_sexp_kill(ed,l,dir){var temp__4092__auto__ = cljs.core.first.call(null,session.paredit.find_unbalanced.call(null,ed,l,session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__10214 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__10214,0,null);var loc = cljs.core.nth.call(null,vec__10214,1,null);var temp__4092__auto____$1 = session.paredit.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto____$1))
{var mloc = temp__4092__auto____$1;var pred__10215 = cljs.core._EQ_;var expr__10216 = dir;if(cljs.core.truth_(pred__10215.call(null,new cljs.core.Keyword(null,"backward","backward",3135881045),expr__10216)))
{return session.paredit.cm_operation.call(null,ed,((function (pred__10215,expr__10216,mloc,temp__4092__auto____$1,vec__10214,c,loc,temp__4092__auto__){
return (function (){session.paredit.replace_range.call(null,ed,loc,session.paredit.set_loc.call(null,loc,1),"");
return session.paredit.replace_range.call(null,ed,mloc,l,"");
});})(pred__10215,expr__10216,mloc,temp__4092__auto____$1,vec__10214,c,loc,temp__4092__auto__))
);
} else
{if(cljs.core.truth_(pred__10215.call(null,new cljs.core.Keyword(null,"forward","forward",4631725623),expr__10216)))
{return session.paredit.cm_operation.call(null,ed,((function (pred__10215,expr__10216,mloc,temp__4092__auto____$1,vec__10214,c,loc,temp__4092__auto__){
return (function (){session.paredit.replace_range.call(null,ed,l,session.paredit.set_loc.call(null,loc,1),"");
return session.paredit.replace_range.call(null,ed,mloc,session.paredit.set_loc.call(null,mloc,1),"");
});})(pred__10215,expr__10216,mloc,temp__4092__auto____$1,vec__10214,c,loc,temp__4092__auto__))
);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10216)].join('')));
}
}
} else
{return null;
}
} else
{return null;
}
});
session.paredit.paredit_split_sexp = (function paredit_split_sexp(ed,l){var temp__4092__auto__ = cljs.core.first.call(null,session.paredit.find_unbalanced.call(null,ed,l,session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__10219 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__10219,0,null);var loc = cljs.core.nth.call(null,vec__10219,1,null);if(cljs.core.truth_(session.paredit.find_match.call(null,ed,loc,c)))
{var p = session.paredit.char__GT_pair.call(null,c);var s = [cljs.core.str(new cljs.core.Keyword(null,"close","close",1108660586).cljs$core$IFn$_invoke$arity$1(p)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(p))].join('');return session.paredit.cm_operation.call(null,ed,((function (p,s,vec__10219,c,loc,temp__4092__auto__){
return (function (){session.paredit.replace_range.call(null,ed,l,s);
return session.paredit.set_cursor.call(null,ed,session.paredit.set_loc.call(null,l,1));
});})(p,s,vec__10219,c,loc,temp__4092__auto__))
);
} else
{return null;
}
} else
{return null;
}
});
session.paredit.paredit_join_sexps = (function paredit_join_sexps(ed,l){var vec__10222 = cljs.core.first.call(null,session.paredit.locate_chars.call(null,ed,l,session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"backward","backward",3135881045)));var lc = cljs.core.nth.call(null,vec__10222,0,null);var ll = cljs.core.nth.call(null,vec__10222,1,null);var vec__10223 = cljs.core.first.call(null,session.paredit.locate_chars.call(null,ed,l,session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),new cljs.core.Keyword(null,"forward","forward",4631725623)));var rc = cljs.core.nth.call(null,vec__10223,0,null);var rl = cljs.core.nth.call(null,vec__10223,1,null);if(cljs.core.truth_((function (){var and__3466__auto__ = lc;if(cljs.core.truth_(and__3466__auto__))
{return rc;
} else
{return and__3466__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,lc,session.paredit.opposite_char.call(null,rc)))
{return session.paredit.cm_operation.call(null,ed,((function (vec__10222,lc,ll,vec__10223,rc,rl){
return (function (){session.paredit.replace_range.call(null,ed,rl,session.paredit.set_loc.call(null,rl,1),"");
session.paredit.replace_range.call(null,ed,ll,session.paredit.set_loc.call(null,ll,1),"");
return session.paredit.indent_lines.call(null,ed,ll,rl,"smart");
});})(vec__10222,lc,ll,vec__10223,rc,rl))
);
} else
{return console.log("Paredit: Mismatched sexps");
}
} else
{return null;
}
});
session.paredit.paredit_forward_delete = (function paredit_forward_delete(ed,l){var l__$1 = session.paredit.caret_position.call(null,ed);var nloc = session.paredit.set_loc.call(null,l__$1,1);var c = session.paredit.char_at_loc.call(null,ed,l__$1);var nc = session.paredit.char_at_loc.call(null,ed,session.paredit.set_loc.call(null,l__$1,1));var pc = session.paredit.char_at_loc.call(null,ed,session.paredit.set_loc.call(null,l__$1,-1));var pair = session.paredit.char__GT_pair.call(null,c);var tokentype = session.paredit.token_type_at.call(null,ed,nloc);if(cljs.core.truth_((function (){var and__3466__auto__ = tokentype;if(cljs.core.truth_(and__3466__auto__))
{return session.paredit.string_contains_QMARK_.call(null,tokentype,"comment");
} else
{return and__3466__auto__;
}
})()))
{if(cljs.core.truth_(nc))
{return session.paredit.replace_range.call(null,ed,l__$1,session.paredit.set_loc.call(null,l__$1,1),"");
} else
{return session.paredit.cm_operation.call(null,ed,((function (l__$1,nloc,c,nc,pc,pair,tokentype){
return (function (){session.paredit.replace_range.call(null,ed,l__$1,session.paredit.set_loc.call(null,l__$1,1),"");
return session.paredit.set_cursor.call(null,ed,session.paredit.set_loc.call(null,l__$1,-1));
});})(l__$1,nloc,c,nc,pc,pair,tokentype))
);
}
} else
{if(session.paredit.escaped_char_QMARK_.call(null,ed,l__$1))
{return session.paredit.replace_range.call(null,ed,session.paredit.set_loc.call(null,l__$1,1),session.paredit.set_loc.call(null,l__$1,-1),"");
} else
{if(session.paredit.escapes_char_QMARK_.call(null,ed,l__$1))
{return session.paredit.replace_range.call(null,ed,l__$1,session.paredit.set_loc.call(null,l__$1,2),"");
} else
{if(cljs.core.truth_(pair))
{if((cljs.core.contains_QMARK_.call(null,session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),c)) && (!(session.paredit.escaped_char_QMARK_.call(null,ed,l__$1))) && (cljs.core._EQ_.call(null,pc,session.paredit.opposite_char.call(null,c))))
{return session.paredit.replace_range.call(null,ed,session.paredit.set_loc.call(null,l__$1,1),session.paredit.set_loc.call(null,l__$1,-1),"");
} else
{if(cljs.core.truth_(nc))
{return session.paredit.set_cursor.call(null,ed,session.paredit.set_loc.call(null,l__$1,1));
} else
{return null;
}
}
} else
{if(cljs.core.truth_(nc))
{return session.paredit.replace_range.call(null,ed,l__$1,session.paredit.set_loc.call(null,l__$1,1),"");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return session.paredit.cm_operation.call(null,ed,((function (l__$1,nloc,c,nc,pc,pair,tokentype){
return (function (){session.paredit.replace_range.call(null,ed,l__$1,session.paredit.set_loc.call(null,l__$1,1),"");
return session.paredit.set_cursor.call(null,ed,session.paredit.set_loc.call(null,l__$1,-1));
});})(l__$1,nloc,c,nc,pc,pair,tokentype))
);
} else
{return null;
}
}
}
}
}
}
});
session.paredit.paredit_backward_delete = (function paredit_backward_delete(ed,l){var l__$1 = session.paredit.caret_position.call(null,ed);var ploc = session.paredit.set_loc.call(null,l__$1,-1);var nloc = session.paredit.set_loc.call(null,l__$1,1);var c = session.paredit.char_at_loc.call(null,ed,l__$1);var pc = session.paredit.char_at_loc.call(null,ed,session.paredit.set_loc.call(null,l__$1,-1));var tokentype = session.paredit.token_type_at.call(null,ed,l__$1);if(cljs.core.not.call(null,pc))
{return session.paredit.replace_range.call(null,ed,l__$1,session.paredit.find_pos_h.call(null,ed,l__$1,-1),"");
} else
{if(cljs.core.truth_((function (){var and__3466__auto__ = tokentype;if(cljs.core.truth_(and__3466__auto__))
{return session.paredit.string_contains_QMARK_.call(null,tokentype,"comment");
} else
{return and__3466__auto__;
}
})()))
{return session.paredit.replace_range.call(null,ed,l__$1,ploc,"");
} else
{if(session.paredit.escaped_char_QMARK_.call(null,ed,ploc))
{return session.paredit.replace_range.call(null,ed,l__$1,session.paredit.set_loc.call(null,l__$1,-2),"");
} else
{if(session.paredit.escapes_char_QMARK_.call(null,ed,ploc))
{return session.paredit.replace_range.call(null,ed,nloc,ploc,"");
} else
{if(cljs.core.contains_QMARK_.call(null,session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),pc))
{if(cljs.core._EQ_.call(null,c,session.paredit.opposite_char.call(null,pc)))
{return session.paredit.replace_range.call(null,ed,nloc,ploc,"");
} else
{return session.paredit.set_cursor.call(null,ed,ploc);
}
} else
{if(cljs.core.contains_QMARK_.call(null,session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),pc))
{return session.paredit.set_cursor.call(null,ed,ploc);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return session.paredit.replace_range.call(null,ed,l__$1,ploc,"");
} else
{return null;
}
}
}
}
}
}
}
});
session.paredit.paredit_duplicate = (function paredit_duplicate(ed,l){var startloc = l;var startindex = session.paredit.pos__GT_index.call(null,ed,startloc);var all_pair_chars = session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"all","all",1014000915));var endloc = (function (){var startloc__$1 = startloc;var chars = session.paredit.locate_chars_on_line.call(null,ed,startloc__$1,all_pair_chars,new cljs.core.Keyword(null,"forward","forward",4631725623));while(true){
if(!(cljs.core.empty_QMARK_.call(null,chars)))
{var vec__10225 = cljs.core.first.call(null,chars);var c = cljs.core.nth.call(null,vec__10225,0,null);var loc = cljs.core.nth.call(null,vec__10225,1,null);var temp__4092__auto__ = session.paredit.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;var sline = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc);var mline = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(mloc);var mindex = session.paredit.pos__GT_index.call(null,ed,mloc);if((mindex < startindex))
{return loc;
} else
{if((mline > sline))
{{
var G__10226 = mloc;
var G__10227 = session.paredit.locate_chars_on_line.call(null,ed,mloc,all_pair_chars,new cljs.core.Keyword(null,"forward","forward",4631725623));
startloc__$1 = G__10226;
chars = G__10227;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__10228 = startloc__$1;
var G__10229 = cljs.core.rest.call(null,chars);
startloc__$1 = G__10228;
chars = G__10229;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),session.paredit.line_count.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(startloc__$1)),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(startloc__$1)], null);
}
break;
}
})();var text_to_dupl = session.paredit.get_range.call(null,ed,startloc,endloc);return session.paredit.cm_operation.call(null,ed,((function (text_to_dupl,startloc,startindex,all_pair_chars,endloc){
return (function (){session.paredit.replace_range.call(null,ed,startloc,endloc,[cljs.core.str(text_to_dupl),cljs.core.str("\n"),cljs.core.str(text_to_dupl)].join(''));
session.paredit.set_cursor.call(null,ed,session.paredit.find_pos_h.call(null,ed,startloc,(cljs.core.count.call(null,text_to_dupl) + 1)));
return session.paredit.indent_lines.call(null,ed,startloc,session.paredit.find_pos_h.call(null,ed,endloc,(cljs.core.count.call(null,text_to_dupl) + 1)),"smart");
});})(text_to_dupl,startloc,startindex,all_pair_chars,endloc))
);
});
session.paredit.delete_pair_contents = (function delete_pair_contents(ed,l){var temp__4092__auto__ = session.paredit.pair_bounds.call(null,ed,l);if(cljs.core.truth_(temp__4092__auto__))
{var vec__10231 = temp__4092__auto__;var start = cljs.core.nth.call(null,vec__10231,0,null);var end = cljs.core.nth.call(null,vec__10231,1,null);return session.paredit.replace_range.call(null,ed,session.paredit.set_loc.call(null,start,1),end,"");
} else
{return null;
}
});
session.paredit.paredit_raise_sexp = (function paredit_raise_sexp(ed,l){while(true){
var c = session.paredit.char_at_loc.call(null,ed,l);var token = session.paredit.token_at.call(null,ed,session.paredit.set_loc.call(null,l,1));var tokentype = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(token);var delete_surrounding = ((function (ed,l,c,token,tokentype){
return (function (p__10236){var vec__10237 = p__10236;var startloc = cljs.core.nth.call(null,vec__10237,0,null);var endloc = cljs.core.nth.call(null,vec__10237,1,null);var temp__4092__auto__ = session.paredit.pair_bounds.call(null,ed,startloc);if(cljs.core.truth_(temp__4092__auto__))
{var vec__10238 = temp__4092__auto__;var p_startloc = cljs.core.nth.call(null,vec__10238,0,null);var p_endloc = cljs.core.nth.call(null,vec__10238,1,null);return session.paredit.cm_operation.call(null,ed,((function (ed,l,vec__10238,p_startloc,p_endloc,temp__4092__auto__,vec__10237,startloc,endloc,c,token,tokentype){
return (function (){session.paredit.replace_range.call(null,ed,session.paredit.set_loc.call(null,endloc,1),session.paredit.set_loc.call(null,p_endloc,1),"");
return session.paredit.replace_range.call(null,ed,p_startloc,startloc,"");
});})(ed,l,vec__10238,p_startloc,p_endloc,temp__4092__auto__,vec__10237,startloc,endloc,c,token,tokentype))
);
} else
{return null;
}
});})(ed,l,c,token,tokentype))
;if(cljs.core.truth_((function (){var and__3466__auto__ = tokentype;if(cljs.core.truth_(and__3466__auto__))
{return (session.paredit.string_contains_QMARK_.call(null,tokentype,"comment")) && (!(session.paredit.string_contains_QMARK_.call(null,tokentype,"comment-form")));
} else
{return and__3466__auto__;
}
})()))
{return console.log("Paredit: Illegal context: not available in comments");
} else
{if(cljs.core.truth_((function (){var and__3466__auto__ = tokentype;if(cljs.core.truth_(and__3466__auto__))
{return session.paredit.string_contains_QMARK_.call(null,tokentype,"string");
} else
{return and__3466__auto__;
}
})()))
{return delete_surrounding.call(null,session.paredit.string_bounds.call(null,ed,l));
} else
{if(cljs.core.contains_QMARK_.call(null,session.paredit.pair_chars.call(null,new cljs.core.Keyword(null,"all","all",1014000915)),c))
{var temp__4092__auto__ = session.paredit.find_match.call(null,ed,l,c);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;return delete_surrounding.call(null,cljs.core.sort_by.call(null,((function (ed,l,mloc,temp__4092__auto__,c,token,tokentype,delete_surrounding){
return (function (p1__10232_SHARP_){return session.paredit.pos__GT_index.call(null,ed,p1__10232_SHARP_);
});})(ed,l,mloc,temp__4092__auto__,c,token,tokentype,delete_surrounding))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,mloc], null)));
} else
{return null;
}
} else
{if((session.paredit.whitespace_QMARK_.call(null,c)) || ((c == null)))
{var nloc = session.paredit.find_pos_h.call(null,ed,l,1);if(cljs.core._EQ_.call(null,l,nloc))
{return null;
} else
{{
var G__10239 = ed;
var G__10240 = nloc;
ed = G__10239;
l = G__10240;
continue;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(l);return delete_surrounding.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token)], null),session.paredit.set_loc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token)], null),-1)], null));
} else
{return null;
}
}
}
}
}
break;
}
});
session.paredit.commands = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__10241_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(p1__10241_SHARP_),new cljs.core.Keyword(null,"exec","exec",1017031683).cljs$core$IFn$_invoke$arity$1(p1__10241_SHARP_)],null));
}),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.raise-sexp","paredit-plus.raise-sexp",2844782255),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Raise sexp",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.paredit_raise_sexp.call(null,ed,session.paredit.caret_position.call(null,ed));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.new-line-after-pair-close","paredit-plus.new-line-after-pair-close",4241192482),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: New line after pair close",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.cm_operation.call(null,ed,(function (ed__$1){session.paredit.move_cursor_along_pair.call(null,ed__$1,session.paredit.caret_position.call(null,ed__$1),new cljs.core.Keyword(null,"forward","forward",4631725623),new cljs.core.Keyword(null,"after","after",1106639182));
return session.paredit.new_line_indent.call(null,ed__$1);
}));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.duplicate","paredit-plus.duplicate",4489000203),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Duplicate",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.paredit_duplicate.call(null,ed,session.paredit.caret_position.call(null,ed));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.delete-pair-contents","paredit-plus.delete-pair-contents",935852591),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Delete contents inside current pair",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.delete_pair_contents.call(null,ed,session.paredit.caret_position.call(null,ed));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.forward-delete","paredit-plus.forward-delete",1438698839),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Forward delete",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.paredit_forward_delete.call(null,ed,session.paredit.caret_position.call(null,ed));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.backward-delete","paredit-plus.backward-delete",3592606805),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Backward delete",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.paredit_backward_delete.call(null,ed,session.paredit.caret_position.call(null,ed));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.join-sexps","paredit-plus.join-sexps",3200795434),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Join sexps",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.paredit_join_sexps.call(null,ed,session.paredit.caret_position.call(null,ed));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.split-sexp","paredit-plus.split-sexp",2384054337),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Split sexp",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.paredit_split_sexp.call(null,ed,session.paredit.caret_position.call(null,ed));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.splice-sexp-killing-forward","paredit-plus.splice-sexp-killing-forward",1545227754),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Splice sexp killing forward",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.paredit_splice_sexp_kill.call(null,ed,session.paredit.caret_position.call(null,ed),new cljs.core.Keyword(null,"forward","forward",4631725623));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.splice-sexp-killing-backward","paredit-plus.splice-sexp-killing-backward",1943727618),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Splice sexp killing backward",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.paredit_splice_sexp_kill.call(null,ed,session.paredit.caret_position.call(null,ed),new cljs.core.Keyword(null,"backward","backward",3135881045));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.splice-sexp","paredit-plus.splice-sexp",4170175995),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Splice sexp",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.paredit_splice_sexp.call(null,ed,session.paredit.caret_position.call(null,ed));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.kill","paredit-plus.kill",2146474370),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Kill",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.paredit_kill.call(null,ed);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap-round","paredit-plus.wrap-round",4530489071),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap round",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.paredit_wrap_with_pair.call(null,ed,session.paredit.caret_position.call(null,ed),session.paredit.char__GT_pair.call(null,"("));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap-square","paredit-plus.wrap-square",2684315776),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap square",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.paredit_wrap_with_pair.call(null,ed,session.paredit.caret_position.call(null,ed),session.paredit.char__GT_pair.call(null,"["));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap-curly","paredit-plus.wrap-curly",4516812078),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap curly",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.paredit_wrap_with_pair.call(null,ed,session.paredit.caret_position.call(null,ed),session.paredit.char__GT_pair.call(null,"{"));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"paredit-plus.wrap-quote","paredit-plus.wrap-quote",4529738717),new cljs.core.Keyword(null,"desc","desc",1016984067),"Paredit Plus: Wrap quote",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (ed){return session.paredit.paredit_wrap_with_pair.call(null,ed,session.paredit.caret_position.call(null,ed),session.paredit.char__GT_pair.call(null,"\""));
})], null)], null)));
session.paredit.paredit = (function paredit(cmd,ed){return session.paredit.commands.call(null,cmd).call(null,ed);
});

//# sourceMappingURL=paredit.js.map