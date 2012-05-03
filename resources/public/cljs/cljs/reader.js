goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3822__auto____52223 = reader;

if(cljs.core.truth_(and__3822__auto____52223))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3822__auto____52223;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3824__auto____52224 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3824__auto____52224))
{return or__3824__auto____52224;
} else
{var or__3824__auto____52225 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3824__auto____52225))
{return or__3824__auto____52225;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3822__auto____52226 = reader;

if(cljs.core.truth_(and__3822__auto____52226))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3822__auto____52226;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3824__auto____52227 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3824__auto____52227))
{return or__3824__auto____52227;
} else
{var or__3824__auto____52228 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3824__auto____52228))
{return or__3824__auto____52228;
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
var this__52229 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__52229.buffer_atom))))
{var idx__52230 = cljs.core.deref.call(null,this__52229.index_atom);

cljs.core.swap_BANG_.call(null,this__52229.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__52229.s,idx__52230);
} else
{var buf__52231 = cljs.core.deref.call(null,this__52229.buffer_atom);

cljs.core.swap_BANG_.call(null,this__52229.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__52231);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__52232 = this;
return cljs.core.swap_BANG_.call(null,this__52232.buffer_atom,(function (p1__52222_SHARP_){
return cljs.core.cons.call(null,ch,p1__52222_SHARP_);
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
var or__3824__auto____52233 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3824__auto____52233))
{return or__3824__auto____52233;
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
var or__3824__auto____52234 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3824__auto____52234))
{return or__3824__auto____52234;
} else
{var and__3822__auto____52236 = (function (){var or__3824__auto____52235 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3824__auto____52235))
{return or__3824__auto____52235;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3822__auto____52236))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__52237 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__52237);
return next_ch__52237;
})());
} else
{return and__3822__auto____52236;
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
reader_error.cljs$lang$applyTo = (function (arglist__52238){
var rdr = cljs.core.first(arglist__52238);
var msg = cljs.core.rest(arglist__52238);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____52239 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3822__auto____52239))
{var and__3822__auto____52240 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3822__auto____52240))
{var and__3822__auto____52241 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3822__auto____52241))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3822__auto____52241;
}
} else
{return and__3822__auto____52240;
}
} else
{return and__3822__auto____52239;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__52242 = (new goog.string.StringBuffer(initch));
var ch__52243 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____52244 = (ch__52243 === null);

if(cljs.core.truth_(or__3824__auto____52244))
{return or__3824__auto____52244;
} else
{var or__3824__auto____52245 = cljs.reader.whitespace_QMARK_.call(null,ch__52243);

if(cljs.core.truth_(or__3824__auto____52245))
{return or__3824__auto____52245;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__52243);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__52243);
return sb__52242.toString();
} else
{{
var G__52246 = (function (){sb__52242.append(ch__52243);
return sb__52242;
})();
var G__52247 = cljs.reader.read_char.call(null,rdr);
sb__52242 = G__52246;
ch__52243 = G__52247;
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
var ch__52248 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3824__auto____52249 = cljs.core._EQ_.call(null,ch__52248,"n");

if(cljs.core.truth_(or__3824__auto____52249))
{return or__3824__auto____52249;
} else
{var or__3824__auto____52250 = cljs.core._EQ_.call(null,ch__52248,"r");

if(cljs.core.truth_(or__3824__auto____52250))
{return or__3824__auto____52250;
} else
{return (ch__52248 === null);
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
var groups__52251 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__52252 = cljs.core.nth.call(null,groups__52251,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3824__auto____52253 = (void 0 === group3__52252);

if(cljs.core.truth_(or__3824__auto____52253))
{return or__3824__auto____52253;
} else
{return (group3__52252.length < 1);
}
})())))
{return 0;
} else
{var negate__52255 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__52251,1)))?-1:1);
var vec__52254__52256 = (cljs.core.truth_(cljs.core.nth.call(null,groups__52251,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__52251,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__52251,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__52251,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__52251,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__52251,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__52251,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__52251,7),parseInt.call(null,cljs.core.nth.call(null,groups__52251,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__52257 = cljs.core.nth.call(null,vec__52254__52256,0,null);
var radix__52258 = cljs.core.nth.call(null,vec__52254__52256,1,null);

if(cljs.core.truth_((n__52257 === null)))
{return null;
} else
{return (negate__52255 * parseInt.call(null,n__52257,radix__52258));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__52259 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__52260 = cljs.core.nth.call(null,groups__52259,1);
var denominator__52261 = cljs.core.nth.call(null,groups__52259,2);

return (parseInt.call(null,numinator__52260) / parseInt.call(null,denominator__52261));
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
var ch__52262 = cljs.reader.read_char.call(null,reader);
var mapresult__52263 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__52262);

if(cljs.core.truth_(mapresult__52263))
{return mapresult__52263;
} else
{if(cljs.core.truth_((function (){var or__3824__auto____52264 = cljs.core._EQ_.call(null,"u",ch__52262);

if(cljs.core.truth_(or__3824__auto____52264))
{return or__3824__auto____52264;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__52262);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__52262);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__52262);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__52265 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__52265)))
{{
var G__52266 = cljs.reader.read_char.call(null,rdr);
ch__52265 = G__52266;
continue;
}
} else
{return ch__52265;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__52267 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__52268 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__52268))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__52268)))
{return a__52267;
} else
{var temp__3971__auto____52269 = cljs.core.get.call(null,cljs.reader.macros,ch__52268);

if(cljs.core.truth_(temp__3971__auto____52269))
{var macrofn__52270 = temp__3971__auto____52269;

var mret__52271 = macrofn__52270.call(null,rdr,ch__52268);

{
var G__52273 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__52271,rdr))?a__52267:cljs.core.conj.call(null,a__52267,mret__52271));
a__52267 = G__52273;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__52268);
var o__52272 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__52274 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__52272,rdr))?a__52267:cljs.core.conj.call(null,a__52267,o__52272));
a__52267 = G__52274;
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
var ch__52275 = cljs.reader.read_char.call(null,rdr);
var dm__52276 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__52275);

if(cljs.core.truth_(dm__52276))
{return dm__52276.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__52275);
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
var l__52277 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__52277))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__52277);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__52278 = (new goog.string.StringBuffer(initch));
var ch__52279 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____52280 = (ch__52279 === null);

if(cljs.core.truth_(or__3824__auto____52280))
{return or__3824__auto____52280;
} else
{var or__3824__auto____52281 = cljs.reader.whitespace_QMARK_.call(null,ch__52279);

if(cljs.core.truth_(or__3824__auto____52281))
{return or__3824__auto____52281;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__52279);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__52279);
var s__52282 = buffer__52278.toString();

var or__3824__auto____52283 = cljs.reader.match_number.call(null,s__52282);

if(cljs.core.truth_(or__3824__auto____52283))
{return or__3824__auto____52283;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__52282,"]");
}
} else
{{
var G__52284 = (function (){buffer__52278.append(ch__52279);
return buffer__52278;
})();
var G__52285 = cljs.reader.read_char.call(null,reader);
buffer__52278 = G__52284;
ch__52279 = G__52285;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__52286 = (new goog.string.StringBuffer());
var ch__52287 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__52287 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__52287)))
{{
var G__52288 = (function (){buffer__52286.append(cljs.reader.escape_char.call(null,buffer__52286,reader));
return buffer__52286;
})();
var G__52289 = cljs.reader.read_char.call(null,reader);
buffer__52286 = G__52288;
ch__52287 = G__52289;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__52287)))
{return buffer__52286.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__52290 = (function (){buffer__52286.append(ch__52287);
return buffer__52286;
})();
var G__52291 = cljs.reader.read_char.call(null,reader);
buffer__52286 = G__52290;
ch__52287 = G__52291;
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
var token__52292 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__52292,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__52292,0,token__52292.indexOf("/")),cljs.core.subs.call(null,token__52292,(token__52292.indexOf("/") + 1),token__52292.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__52292,cljs.core.symbol.call(null,token__52292));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__52294 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__52293__52295 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__52294);
var token__52296 = cljs.core.nth.call(null,vec__52293__52295,0,null);
var ns__52297 = cljs.core.nth.call(null,vec__52293__52295,1,null);
var name__52298 = cljs.core.nth.call(null,vec__52293__52295,2,null);

if(cljs.core.truth_((function (){var or__3824__auto____52300 = (function (){var and__3822__auto____52299 = cljs.core.not.call(null,(void 0 === ns__52297));

if(cljs.core.truth_(and__3822__auto____52299))
{return (ns__52297.substring((ns__52297.length - 2),ns__52297.length) === ":/");
} else
{return and__3822__auto____52299;
}
})();

if(cljs.core.truth_(or__3824__auto____52300))
{return or__3824__auto____52300;
} else
{var or__3824__auto____52301 = ((name__52298[(name__52298.length - 1)]) === ":");

if(cljs.core.truth_(or__3824__auto____52301))
{return or__3824__auto____52301;
} else
{return cljs.core.not.call(null,(token__52296.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__52296);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__52297.substring(0,ns__52297.indexOf("/")),name__52298);
} else
{return cljs.core.keyword.call(null,token__52296);
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
var m__52302 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__52302)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__52303 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____52304 = o__52303;

if(cljs.core.truth_((function (){var and__3822__auto____52305 = x__451__auto____52304;

if(cljs.core.truth_(and__3822__auto____52305))
{var and__3822__auto____52306 = x__451__auto____52304.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3822__auto____52306))
{return cljs.core.not.call(null,x__451__auto____52304.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3822__auto____52306;
}
} else
{return and__3822__auto____52305;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____52304);
}
})()))
{return cljs.core.with_meta.call(null,o__52303,cljs.core.merge.call(null,cljs.core.meta.call(null,o__52303),m__52302));
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
var ch__52307 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__52307 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__52307)))
{{
var G__52309 = reader;
var G__52310 = eof_is_error;
var G__52311 = sentinel;
var G__52312 = is_recursive;
reader = G__52309;
eof_is_error = G__52310;
sentinel = G__52311;
is_recursive = G__52312;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__52307)))
{{
var G__52313 = cljs.reader.read_comment.call(null,reader,ch__52307);
var G__52314 = eof_is_error;
var G__52315 = sentinel;
var G__52316 = is_recursive;
reader = G__52313;
eof_is_error = G__52314;
sentinel = G__52315;
is_recursive = G__52316;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__52308 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__52307))?cljs.reader.macros.call(null,ch__52307).call(null,reader,ch__52307):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__52307))?cljs.reader.read_number.call(null,reader,ch__52307):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__52307):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__52308,reader)))
{{
var G__52317 = reader;
var G__52318 = eof_is_error;
var G__52319 = sentinel;
var G__52320 = is_recursive;
reader = G__52317;
eof_is_error = G__52318;
sentinel = G__52319;
is_recursive = G__52320;
continue;
}
} else
{return res__52308;
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
var r__52321 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__52321,true,null,false);
});
