goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____10984 = reader;
if(and__3822__auto____10984)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____10984;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__2363__auto____10985 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____10986 = (cljs.reader.read_char[goog.typeOf(x__2363__auto____10985)]);
if(or__3824__auto____10986)
{return or__3824__auto____10986;
} else
{var or__3824__auto____10987 = (cljs.reader.read_char["_"]);
if(or__3824__auto____10987)
{return or__3824__auto____10987;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____10992 = reader;
if(and__3822__auto____10992)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____10992;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__2363__auto____10993 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____10994 = (cljs.reader.unread[goog.typeOf(x__2363__auto____10993)]);
if(or__3824__auto____10994)
{return or__3824__auto____10994;
} else
{var or__3824__auto____10995 = (cljs.reader.unread["_"]);
if(or__3824__auto____10995)
{return or__3824__auto____10995;
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
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__10996 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__10996.buffer_atom)))
{var idx__10997 = cljs.core.deref.call(null,this__10996.index_atom);
cljs.core.swap_BANG_.call(null,this__10996.index_atom,cljs.core.inc);
return (this__10996.s[idx__10997]);
} else
{var buf__10998 = cljs.core.deref.call(null,this__10996.buffer_atom);
cljs.core.swap_BANG_.call(null,this__10996.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__10998);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__10999 = this;
return cljs.core.swap_BANG_.call(null,this__10999.buffer_atom,(function (p1__10979_SHARP_){
return cljs.core.cons.call(null,ch,p1__10979_SHARP_);
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
var or__3824__auto____11001 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____11001))
{return or__3824__auto____11001;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric(ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3824__auto____11006 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____11006)
{return or__3824__auto____11006;
} else
{var and__3822__auto____11008 = (function (){var or__3824__auto____11007 = ("+" === initch);
if(or__3824__auto____11007)
{return or__3824__auto____11007;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____11008))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__11009 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__11009);
return next_ch__11009;
})());
} else
{return and__3822__auto____11008;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__11010){
var rdr = cljs.core.first(arglist__11010);
var msg = cljs.core.rest(arglist__11010);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____11014 = !((ch === "#"));
if(and__3822__auto____11014)
{var and__3822__auto____11015 = !((ch === "'"));
if(and__3822__auto____11015)
{var and__3822__auto____11016 = !((ch === ":"));
if(and__3822__auto____11016)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____11016;
}
} else
{return and__3822__auto____11015;
}
} else
{return and__3822__auto____11014;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__11021 = (new goog.string.StringBuffer(initch));
var ch__11022 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____11023 = (ch__11022 == null);
if(or__3824__auto____11023)
{return or__3824__auto____11023;
} else
{var or__3824__auto____11024 = cljs.reader.whitespace_QMARK_.call(null,ch__11022);
if(or__3824__auto____11024)
{return or__3824__auto____11024;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__11022);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__11022);
return sb__11021.toString();
} else
{{
var G__11025 = (function (){sb__11021.append(ch__11022);
return sb__11021;
})();
var G__11026 = cljs.reader.read_char.call(null,rdr);
sb__11021 = G__11025;
ch__11022 = G__11026;
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
var ch__11030 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____11031 = (ch__11030 === "n");
if(or__3824__auto____11031)
{return or__3824__auto____11031;
} else
{var or__3824__auto____11032 = (ch__11030 === "r");
if(or__3824__auto____11032)
{return or__3824__auto____11032;
} else
{return (ch__11030 == null);
}
}
})())
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
cljs.reader.re_find_STAR_ = (function re_find_STAR_(re,s){
var matches__11034 = re.exec(s);
if((matches__11034 == null))
{return null;
} else
{if((matches__11034.length === 1))
{return (matches__11034[0]);
} else
{return matches__11034;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__11042 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__11043 = (groups__11042[2]);
if(!((function (){var or__3824__auto____11044 = (group3__11043 == null);
if(or__3824__auto____11044)
{return or__3824__auto____11044;
} else
{return (group3__11043.length < 1);
}
})()))
{return 0;
} else
{var negate__11045 = ((("-" === (groups__11042[1])))?-1:1);
var a__11046 = (cljs.core.truth_((groups__11042[3]))?[(groups__11042[3]),10]:(cljs.core.truth_((groups__11042[4]))?[(groups__11042[4]),16]:(cljs.core.truth_((groups__11042[5]))?[(groups__11042[5]),8]:(cljs.core.truth_((groups__11042[7]))?[(groups__11042[7]),parseInt((groups__11042[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__11047 = (a__11046[0]);
var radix__11048 = (a__11046[1]);
if((n__11047 == null))
{return null;
} else
{return (negate__11045 * parseInt(n__11047,radix__11048));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__11052 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__11053 = (groups__11052[1]);
var denominator__11054 = (groups__11052[2]);
return (parseInt(numinator__11053) / parseInt(denominator__11054));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__11057 = re.exec(s);
if((function (){var and__3822__auto____11058 = !((matches__11057 == null));
if(and__3822__auto____11058)
{return ((matches__11057[0]) === s);
} else
{return and__3822__auto____11058;
}
})())
{if((matches__11057.length === 1))
{return (matches__11057[0]);
} else
{return matches__11057;
}
} else
{return null;
}
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){
if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if("\uFDD0'else")
{return null;
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
cljs.reader.read_2_chars = (function read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{2}");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{4}");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){
var code__11060 = parseInt(code_str,16);
return String.fromCharCode(code__11060);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__11063 = cljs.reader.read_char.call(null,reader);
var mapresult__11064 = cljs.reader.escape_char_map.call(null,ch__11063);
if(cljs.core.truth_(mapresult__11064))
{return mapresult__11064;
} else
{if((ch__11063 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__11063,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__11063 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__11063,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__11063))
{return String.fromCharCode(ch__11063);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__11063);
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__11066 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__11066)))
{{
var G__11067 = cljs.reader.read_char.call(null,rdr);
ch__11066 = G__11067;
continue;
}
} else
{return ch__11066;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__11074 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__11075 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__11075))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__11075))
{return cljs.core.persistent_BANG_.call(null,a__11074);
} else
{var temp__3971__auto____11076 = cljs.reader.macros.call(null,ch__11075);
if(cljs.core.truth_(temp__3971__auto____11076))
{var macrofn__11077 = temp__3971__auto____11076;
var mret__11078 = macrofn__11077.call(null,rdr,ch__11075);
{
var G__11080 = (((mret__11078 === rdr))?a__11074:cljs.core.conj_BANG_.call(null,a__11074,mret__11078));
a__11074 = G__11080;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__11075);
var o__11079 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__11081 = (((o__11079 === rdr))?a__11074:cljs.core.conj_BANG_.call(null,a__11074,o__11079));
a__11074 = G__11081;
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
var ch__11086 = cljs.reader.read_char.call(null,rdr);
var dm__11087 = cljs.reader.dispatch_macros.call(null,ch__11086);
if(cljs.core.truth_(dm__11087))
{return dm__11087.call(null,rdr,_);
} else
{var temp__3971__auto____11088 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__11086);
if(cljs.core.truth_(temp__3971__auto____11088))
{var obj__11089 = temp__3971__auto____11088;
return obj__11089;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__11086);
}
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
var l__11091 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__11091)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__11091);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__11098 = (new goog.string.StringBuffer(initch));
var ch__11099 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____11100 = (ch__11099 == null);
if(or__3824__auto____11100)
{return or__3824__auto____11100;
} else
{var or__3824__auto____11101 = cljs.reader.whitespace_QMARK_.call(null,ch__11099);
if(or__3824__auto____11101)
{return or__3824__auto____11101;
} else
{return cljs.reader.macros.call(null,ch__11099);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__11099);
var s__11102 = buffer__11098.toString();
var or__3824__auto____11103 = cljs.reader.match_number.call(null,s__11102);
if(cljs.core.truth_(or__3824__auto____11103))
{return or__3824__auto____11103;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__11102,"]");
}
} else
{{
var G__11104 = (function (){buffer__11098.append(ch__11099);
return buffer__11098;
})();
var G__11105 = cljs.reader.read_char.call(null,reader);
buffer__11098 = G__11104;
ch__11099 = G__11105;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__11108 = (new goog.string.StringBuffer());
var ch__11109 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__11109 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__11109))
{{
var G__11110 = (function (){buffer__11108.append(cljs.reader.escape_char.call(null,buffer__11108,reader));
return buffer__11108;
})();
var G__11111 = cljs.reader.read_char.call(null,reader);
buffer__11108 = G__11110;
ch__11109 = G__11111;
continue;
}
} else
{if(("\"" === ch__11109))
{return buffer__11108.toString();
} else
{if("\uFDD0'default")
{{
var G__11112 = (function (){buffer__11108.append(ch__11109);
return buffer__11108;
})();
var G__11113 = cljs.reader.read_char.call(null,reader);
buffer__11108 = G__11112;
ch__11109 = G__11113;
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
cljs.reader.special_symbols = (function special_symbols(t,not_found){
if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__11115 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__11115,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__11115,0,token__11115.indexOf("/")),cljs.core.subs.call(null,token__11115,(token__11115.indexOf("/") + 1),token__11115.length));
} else
{return cljs.reader.special_symbols.call(null,token__11115,cljs.core.symbol.call(null,token__11115));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__11125 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__11126 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__11125);
var token__11127 = (a__11126[0]);
var ns__11128 = (a__11126[1]);
var name__11129 = (a__11126[2]);
if(cljs.core.truth_((function (){var or__3824__auto____11131 = (function (){var and__3822__auto____11130 = !((void 0 === ns__11128));
if(and__3822__auto____11130)
{return (ns__11128.substring((ns__11128.length - 2),ns__11128.length) === ":/");
} else
{return and__3822__auto____11130;
}
})();
if(cljs.core.truth_(or__3824__auto____11131))
{return or__3824__auto____11131;
} else
{var or__3824__auto____11132 = ((name__11129[(name__11129.length - 1)]) === ":");
if(or__3824__auto____11132)
{return or__3824__auto____11132;
} else
{return !((token__11127.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__11127);
} else
{if((function (){var and__3822__auto____11133 = !((ns__11128 == null));
if(and__3822__auto____11133)
{return (ns__11128.length > 0);
} else
{return and__3822__auto____11133;
}
})())
{return cljs.core.keyword.call(null,ns__11128.substring(0,ns__11128.indexOf("/")),name__11129);
} else
{return cljs.core.keyword.call(null,token__11127);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.symbol_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.string_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.keyword_QMARK_.call(null,f))
{return cljs.core.PersistentArrayMap.fromArrays([f],[true]);
} else
{if("\uFDD0'else")
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
var m__11139 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__11139))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__11140 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__11141__11142 = o__11140;
if(G__11141__11142)
{if((function (){var or__3824__auto____11143 = (G__11141__11142.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____11143)
{return or__3824__auto____11143;
} else
{return G__11141__11142.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__11141__11142.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__11141__11142);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__11141__11142);
}
})())
{return cljs.core.with_meta.call(null,o__11140,cljs.core.merge.call(null,cljs.core.meta.call(null,o__11140),m__11139));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string_STAR_.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = (function macros(c){
if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.not_implemented;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'quote");
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'deref");
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "%"))
{return cljs.reader.not_implemented;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
} else
{if("\uFDD0'else")
{return null;
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
});
cljs.reader.dispatch_macros = (function dispatch_macros(s){
if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{if("\uFDD0'else")
{return null;
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
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__11147 = cljs.reader.read_char.call(null,reader);
if((ch__11147 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__11147))
{{
var G__11150 = reader;
var G__11151 = eof_is_error;
var G__11152 = sentinel;
var G__11153 = is_recursive;
reader = G__11150;
eof_is_error = G__11151;
sentinel = G__11152;
is_recursive = G__11153;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__11147))
{{
var G__11154 = cljs.reader.read_comment.call(null,reader,ch__11147);
var G__11155 = eof_is_error;
var G__11156 = sentinel;
var G__11157 = is_recursive;
reader = G__11154;
eof_is_error = G__11155;
sentinel = G__11156;
is_recursive = G__11157;
continue;
}
} else
{if("\uFDD0'else")
{var f__11148 = cljs.reader.macros.call(null,ch__11147);
var res__11149 = (cljs.core.truth_(f__11148)?f__11148.call(null,reader,ch__11147):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__11147))?cljs.reader.read_number.call(null,reader,ch__11147):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__11147):null)));
if((res__11149 === reader))
{{
var G__11158 = reader;
var G__11159 = eof_is_error;
var G__11160 = sentinel;
var G__11161 = is_recursive;
reader = G__11158;
eof_is_error = G__11159;
sentinel = G__11160;
is_recursive = G__11161;
continue;
}
} else
{return res__11149;
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
var r__11163 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__11163,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__11165 = (new goog.string.StringBuffer(s));
while(true){
if((b__11165.getLength() < width))
{{
var G__11166 = b__11165.append("0");
b__11165 = G__11166;
continue;
}
} else
{return b__11165.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){
return ((num % div) === 0);
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){
return cljs.core.not.call(null,cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){
var and__3822__auto____11169 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____11169))
{var or__3824__auto____11170 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____11170))
{return or__3824__auto____11170;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____11169;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__11175 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__11176 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__11176:dim_norm__11175),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__11177 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__11179 = (function (low,n,high,msg){
if((function (){var and__3822__auto____11178 = (low <= n);
if(and__3822__auto____11178)
{return (n <= high);
} else
{return and__3822__auto____11178;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____11180 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__11177,ts)));
if(cljs.core.truth_(temp__3974__auto____11180))
{var vec__11181__11184 = temp__3974__auto____11180;
var vec__11182__11185 = cljs.core.nth.call(null,vec__11181__11184,0,null);
var ___11186 = cljs.core.nth.call(null,vec__11182__11185,0,null);
var years__11187 = cljs.core.nth.call(null,vec__11182__11185,1,null);
var months__11188 = cljs.core.nth.call(null,vec__11182__11185,2,null);
var days__11189 = cljs.core.nth.call(null,vec__11182__11185,3,null);
var hours__11190 = cljs.core.nth.call(null,vec__11182__11185,4,null);
var minutes__11191 = cljs.core.nth.call(null,vec__11182__11185,5,null);
var seconds__11192 = cljs.core.nth.call(null,vec__11182__11185,6,null);
var milliseconds__11193 = cljs.core.nth.call(null,vec__11182__11185,7,null);
var vec__11183__11194 = cljs.core.nth.call(null,vec__11181__11184,1,null);
var ___11195 = cljs.core.nth.call(null,vec__11183__11194,0,null);
var ___11196 = cljs.core.nth.call(null,vec__11183__11194,1,null);
var ___11197 = cljs.core.nth.call(null,vec__11183__11194,2,null);
var V__11198 = vec__11181__11184;
var vec__11199__11202 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__11174_SHARP_){
return parseInt(p1__11174_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__11172_SHARP_,p2__11171_SHARP_){
return cljs.core.update_in.call(null,p2__11171_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__11172_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__11173_SHARP_){
if(cljs.core._EQ_.call(null,p1__11173_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__11198));
var vec__11200__11203 = cljs.core.nth.call(null,vec__11199__11202,0,null);
var ___11204 = cljs.core.nth.call(null,vec__11200__11203,0,null);
var y__11205 = cljs.core.nth.call(null,vec__11200__11203,1,null);
var mo__11206 = cljs.core.nth.call(null,vec__11200__11203,2,null);
var d__11207 = cljs.core.nth.call(null,vec__11200__11203,3,null);
var h__11208 = cljs.core.nth.call(null,vec__11200__11203,4,null);
var m__11209 = cljs.core.nth.call(null,vec__11200__11203,5,null);
var s__11210 = cljs.core.nth.call(null,vec__11200__11203,6,null);
var ms__11211 = cljs.core.nth.call(null,vec__11200__11203,7,null);
var vec__11201__11212 = cljs.core.nth.call(null,vec__11199__11202,1,null);
var offset_sign__11213 = cljs.core.nth.call(null,vec__11201__11212,0,null);
var offset_hours__11214 = cljs.core.nth.call(null,vec__11201__11212,1,null);
var offset_minutes__11215 = cljs.core.nth.call(null,vec__11201__11212,2,null);
var offset__11216 = (offset_sign__11213 * ((offset_hours__11214 * 60) + offset_minutes__11215));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__11187))?1970:y__11205),((cljs.core.not.call(null,months__11188))?1:check__11179.call(null,1,mo__11206,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__11189))?1:check__11179.call(null,1,d__11207,cljs.reader.days_in_month.call(null,mo__11206,cljs.reader.leap_year_QMARK_.call(null,y__11205)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__11190))?0:check__11179.call(null,0,h__11208,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__11191))?0:check__11179.call(null,0,m__11209,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__11192))?0:check__11179.call(null,0,s__11210,((cljs.core._EQ_.call(null,m__11209,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__11193))?0:check__11179.call(null,0,ms__11211,999,"timestamp millisecond field must be in range 0..999")),offset__11216], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____11228 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____11228))
{var vec__11229__11230 = temp__3971__auto____11228;
var years__11231 = cljs.core.nth.call(null,vec__11229__11230,0,null);
var months__11232 = cljs.core.nth.call(null,vec__11229__11230,1,null);
var days__11233 = cljs.core.nth.call(null,vec__11229__11230,2,null);
var hours__11234 = cljs.core.nth.call(null,vec__11229__11230,3,null);
var minutes__11235 = cljs.core.nth.call(null,vec__11229__11230,4,null);
var seconds__11236 = cljs.core.nth.call(null,vec__11229__11230,5,null);
var ms__11237 = cljs.core.nth.call(null,vec__11229__11230,6,null);
var offset__11238 = cljs.core.nth.call(null,vec__11229__11230,7,null);
return (new Date((Date.UTC(years__11231,(months__11232 - 1),days__11233,hours__11234,minutes__11235,seconds__11236,ms__11237) - ((offset__11238 * 60) * 1000))));
} else
{return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join(''));
}
});
cljs.reader.read_date = (function read_date(s){
if(cljs.core.string_QMARK_.call(null,s))
{return cljs.reader.parse_timestamp.call(null,s);
} else
{return cljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.reader.read_queue = (function read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){
if(cljs.core.string_QMARK_.call(null,uuid))
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["inst","uuid","queue"],{"inst":cljs.reader.read_date,"uuid":cljs.reader.read_uuid,"queue":cljs.reader.read_queue}));
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag__11242 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____11243 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__11242),null);
if(cljs.core.truth_(temp__3971__auto____11243))
{var pfn__11244 = temp__3971__auto____11243;
return pfn__11244.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__11242)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__11247 = cljs.core.name.call(null,tag);
var old_parser__11248 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__11247,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__11247,f);
return old_parser__11248;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__11251 = cljs.core.name.call(null,tag);
var old_parser__11252 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__11251,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__11251);
return old_parser__11252;
});
