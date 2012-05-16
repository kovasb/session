goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3822__auto____32319 = reader;

if(cljs.core.truth_(and__3822__auto____32319))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3822__auto____32319;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3824__auto____32320 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3824__auto____32320))
{return or__3824__auto____32320;
} else
{var or__3824__auto____32321 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3824__auto____32321))
{return or__3824__auto____32321;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3822__auto____32322 = reader;

if(cljs.core.truth_(and__3822__auto____32322))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3822__auto____32322;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3824__auto____32323 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3824__auto____32323))
{return or__3824__auto____32323;
} else
{var or__3824__auto____32324 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3824__auto____32324))
{return or__3824__auto____32324;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__32325 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__32325.buffer_atom))))
{var idx__32326 = cljs.core.deref.call(null,this__32325.index_atom);

cljs.core.swap_BANG_.call(null,this__32325.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__32325.s,idx__32326);
} else
{var buf__32327 = cljs.core.deref.call(null,this__32325.buffer_atom);

cljs.core.swap_BANG_.call(null,this__32325.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__32327);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__32328 = this;
return cljs.core.swap_BANG_.call(null,this__32328.buffer_atom,(function (p1__32318_SHARP_){
return cljs.core.cons.call(null,ch,p1__32318_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3824__auto____32329 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3824__auto____32329))
{return or__3824__auto____32329;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3824__auto____32330 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3824__auto____32330))
{return or__3824__auto____32330;
} else
{var and__3822__auto____32332 = (function (){var or__3824__auto____32331 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3824__auto____32331))
{return or__3824__auto____32331;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3822__auto____32332))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__32333 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__32333);
return next_ch__32333;
})());
} else
{return and__3822__auto____32332;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__32334){
var rdr = cljs.core.first(arglist__32334);
var msg = cljs.core.rest(arglist__32334);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____32335 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3822__auto____32335))
{var and__3822__auto____32336 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3822__auto____32336))
{var and__3822__auto____32337 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3822__auto____32337))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3822__auto____32337;
}
} else
{return and__3822__auto____32336;
}
} else
{return and__3822__auto____32335;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__32338 = (new goog.string.StringBuffer(initch));
var ch__32339 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____32340 = (ch__32339 === null);

if(cljs.core.truth_(or__3824__auto____32340))
{return or__3824__auto____32340;
} else
{var or__3824__auto____32341 = cljs.reader.whitespace_QMARK_.call(null,ch__32339);

if(cljs.core.truth_(or__3824__auto____32341))
{return or__3824__auto____32341;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__32339);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__32339);
return sb__32338.toString();
} else
{{
var G__32342 = (function (){sb__32338.append(ch__32339);
return sb__32338;
})();
var G__32343 = cljs.reader.read_char.call(null,rdr);
sb__32338 = G__32342;
ch__32339 = G__32343;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__32344 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3824__auto____32345 = cljs.core._EQ_.call(null,ch__32344,"n");

if(cljs.core.truth_(or__3824__auto____32345))
{return or__3824__auto____32345;
} else
{var or__3824__auto____32346 = cljs.core._EQ_.call(null,ch__32344,"r");

if(cljs.core.truth_(or__3824__auto____32346))
{return or__3824__auto____32346;
} else
{return (ch__32344 === null);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__32347 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__32348 = cljs.core.nth.call(null,groups__32347,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3824__auto____32349 = (void 0 === group3__32348);

if(cljs.core.truth_(or__3824__auto____32349))
{return or__3824__auto____32349;
} else
{return (group3__32348.length < 1);
}
})())))
{return 0;
} else
{var negate__32351 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__32347,1)))?-1:1);
var vec__32350__32352 = (cljs.core.truth_(cljs.core.nth.call(null,groups__32347,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__32347,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__32347,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__32347,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__32347,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__32347,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__32347,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__32347,7),parseInt.call(null,cljs.core.nth.call(null,groups__32347,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__32353 = cljs.core.nth.call(null,vec__32350__32352,0,null);
var radix__32354 = cljs.core.nth.call(null,vec__32350__32352,1,null);

if(cljs.core.truth_((n__32353 === null)))
{return null;
} else
{return (negate__32351 * parseInt.call(null,n__32353,radix__32354));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__32355 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__32356 = cljs.core.nth.call(null,groups__32355,1);
var denominator__32357 = cljs.core.nth.call(null,groups__32355,2);

return (parseInt.call(null,numinator__32356) / parseInt.call(null,denominator__32357));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__32358 = cljs.reader.read_char.call(null,reader);
var mapresult__32359 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__32358);

if(cljs.core.truth_(mapresult__32359))
{return mapresult__32359;
} else
{if(cljs.core.truth_((function (){var or__3824__auto____32360 = cljs.core._EQ_.call(null,"u",ch__32358);

if(cljs.core.truth_(or__3824__auto____32360))
{return or__3824__auto____32360;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__32358);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__32358);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__32358);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__32361 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__32361)))
{{
var G__32362 = cljs.reader.read_char.call(null,rdr);
ch__32361 = G__32362;
continue;
}
} else
{return ch__32361;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__32363 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__32364 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__32364))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__32364)))
{return a__32363;
} else
{var temp__3971__auto____32365 = cljs.core.get.call(null,cljs.reader.macros,ch__32364);

if(cljs.core.truth_(temp__3971__auto____32365))
{var macrofn__32366 = temp__3971__auto____32365;

var mret__32367 = macrofn__32366.call(null,rdr,ch__32364);

{
var G__32369 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__32367,rdr))?a__32363:cljs.core.conj.call(null,a__32363,mret__32367));
a__32363 = G__32369;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__32364);
var o__32368 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__32370 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__32368,rdr))?a__32363:cljs.core.conj.call(null,a__32363,o__32368));
a__32363 = G__32370;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__32371 = cljs.reader.read_char.call(null,rdr);
var dm__32372 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__32371);

if(cljs.core.truth_(dm__32372))
{return dm__32372.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__32371);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__32373 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__32373))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__32373);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__32374 = (new goog.string.StringBuffer(initch));
var ch__32375 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____32376 = (ch__32375 === null);

if(cljs.core.truth_(or__3824__auto____32376))
{return or__3824__auto____32376;
} else
{var or__3824__auto____32377 = cljs.reader.whitespace_QMARK_.call(null,ch__32375);

if(cljs.core.truth_(or__3824__auto____32377))
{return or__3824__auto____32377;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__32375);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__32375);
var s__32378 = buffer__32374.toString();

var or__3824__auto____32379 = cljs.reader.match_number.call(null,s__32378);

if(cljs.core.truth_(or__3824__auto____32379))
{return or__3824__auto____32379;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__32378,"]");
}
} else
{{
var G__32380 = (function (){buffer__32374.append(ch__32375);
return buffer__32374;
})();
var G__32381 = cljs.reader.read_char.call(null,reader);
buffer__32374 = G__32380;
ch__32375 = G__32381;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__32382 = (new goog.string.StringBuffer());
var ch__32383 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__32383 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__32383)))
{{
var G__32384 = (function (){buffer__32382.append(cljs.reader.escape_char.call(null,buffer__32382,reader));
return buffer__32382;
})();
var G__32385 = cljs.reader.read_char.call(null,reader);
buffer__32382 = G__32384;
ch__32383 = G__32385;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__32383)))
{return buffer__32382.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__32386 = (function (){buffer__32382.append(ch__32383);
return buffer__32382;
})();
var G__32387 = cljs.reader.read_char.call(null,reader);
buffer__32382 = G__32386;
ch__32383 = G__32387;
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
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__32388 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__32388,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__32388,0,token__32388.indexOf("/")),cljs.core.subs.call(null,token__32388,(token__32388.indexOf("/") + 1),token__32388.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__32388,cljs.core.symbol.call(null,token__32388));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__32390 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__32389__32391 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__32390);
var token__32392 = cljs.core.nth.call(null,vec__32389__32391,0,null);
var ns__32393 = cljs.core.nth.call(null,vec__32389__32391,1,null);
var name__32394 = cljs.core.nth.call(null,vec__32389__32391,2,null);

if(cljs.core.truth_((function (){var or__3824__auto____32396 = (function (){var and__3822__auto____32395 = cljs.core.not.call(null,(void 0 === ns__32393));

if(cljs.core.truth_(and__3822__auto____32395))
{return (ns__32393.substring((ns__32393.length - 2),ns__32393.length) === ":/");
} else
{return and__3822__auto____32395;
}
})();

if(cljs.core.truth_(or__3824__auto____32396))
{return or__3824__auto____32396;
} else
{var or__3824__auto____32397 = ((name__32394[(name__32394.length - 1)]) === ":");

if(cljs.core.truth_(or__3824__auto____32397))
{return or__3824__auto____32397;
} else
{return cljs.core.not.call(null,(token__32392.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__32392);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__32393.substring(0,ns__32393.indexOf("/")),name__32394);
} else
{return cljs.core.keyword.call(null,token__32392);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__32398 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__32398)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__32399 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____32400 = o__32399;

if(cljs.core.truth_((function (){var and__3822__auto____32401 = x__451__auto____32400;

if(cljs.core.truth_(and__3822__auto____32401))
{var and__3822__auto____32402 = x__451__auto____32400.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3822__auto____32402))
{return cljs.core.not.call(null,x__451__auto____32400.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3822__auto____32402;
}
} else
{return and__3822__auto____32401;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____32400);
}
})()))
{return cljs.core.with_meta.call(null,o__32399,cljs.core.merge.call(null,cljs.core.meta.call(null,o__32399),m__32398));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"\uFDD1'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"\uFDD1'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__32403 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__32403 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__32403)))
{{
var G__32405 = reader;
var G__32406 = eof_is_error;
var G__32407 = sentinel;
var G__32408 = is_recursive;
reader = G__32405;
eof_is_error = G__32406;
sentinel = G__32407;
is_recursive = G__32408;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__32403)))
{{
var G__32409 = cljs.reader.read_comment.call(null,reader,ch__32403);
var G__32410 = eof_is_error;
var G__32411 = sentinel;
var G__32412 = is_recursive;
reader = G__32409;
eof_is_error = G__32410;
sentinel = G__32411;
is_recursive = G__32412;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__32404 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__32403))?cljs.reader.macros.call(null,ch__32403).call(null,reader,ch__32403):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__32403))?cljs.reader.read_number.call(null,reader,ch__32403):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__32403):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__32404,reader)))
{{
var G__32413 = reader;
var G__32414 = eof_is_error;
var G__32415 = sentinel;
var G__32416 = is_recursive;
reader = G__32413;
eof_is_error = G__32414;
sentinel = G__32415;
is_recursive = G__32416;
continue;
}
} else
{return res__32404;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__32417 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__32417,true,null,false);
});
