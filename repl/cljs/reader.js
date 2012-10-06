goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
void 0;cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____13001 = reader;
if(and__3822__auto____13001)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____13001;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{return (function (){var or__3824__auto____13002 = (cljs.reader.read_char[goog.typeOf(reader)]);
if(or__3824__auto____13002)
{return or__3824__auto____13002;
} else
{var or__3824__auto____13003 = (cljs.reader.read_char["_"]);
if(or__3824__auto____13003)
{return or__3824__auto____13003;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____13007 = reader;
if(and__3822__auto____13007)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____13007;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{return (function (){var or__3824__auto____13008 = (cljs.reader.unread[goog.typeOf(reader)]);
if(or__3824__auto____13008)
{return or__3824__auto____13008;
} else
{var or__3824__auto____13009 = (cljs.reader.unread["_"]);
if(or__3824__auto____13009)
{return or__3824__auto____13009;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});
void 0;
/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__5225__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__13010 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__13010.buffer_atom)))
{var idx__13011 = cljs.core.deref.call(null,this__13010.index_atom);
cljs.core.swap_BANG_.call(null,this__13010.index_atom,cljs.core.inc);
return (this__13010.s[idx__13011]);
} else
{var buf__13012 = cljs.core.deref.call(null,this__13010.buffer_atom);
cljs.core.swap_BANG_.call(null,this__13010.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__13012);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__13013 = this;
return cljs.core.swap_BANG_.call(null,this__13013.buffer_atom,(function (p1__12997_SHARP_){
return cljs.core.cons.call(null,ch,p1__12997_SHARP_);
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
var or__3824__auto____13015 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____13015))
{return or__3824__auto____13015;
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
var or__3824__auto____13020 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____13020)
{return or__3824__auto____13020;
} else
{var and__3822__auto____13022 = (function (){var or__3824__auto____13021 = ("+" === initch);
if(or__3824__auto____13021)
{return or__3824__auto____13021;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____13022))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__13023 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__13023);
return next_ch__13023;
})());
} else
{return and__3822__auto____13022;
}
}
});
void 0;
void 0;
void 0;
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
reader_error.cljs$lang$applyTo = (function (arglist__13024){
var rdr = cljs.core.first(arglist__13024);
var msg = cljs.core.rest(arglist__13024);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____13028 = !((ch === "#"));
if(and__3822__auto____13028)
{var and__3822__auto____13029 = !((ch === "'"));
if(and__3822__auto____13029)
{var and__3822__auto____13030 = !((ch === ":"));
if(and__3822__auto____13030)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____13030;
}
} else
{return and__3822__auto____13029;
}
} else
{return and__3822__auto____13028;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__13035 = (new goog.string.StringBuffer(initch));
var ch__13036 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____13037 = (ch__13036 == null);
if(or__3824__auto____13037)
{return or__3824__auto____13037;
} else
{var or__3824__auto____13038 = cljs.reader.whitespace_QMARK_.call(null,ch__13036);
if(or__3824__auto____13038)
{return or__3824__auto____13038;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__13036);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__13036);
return sb__13035.toString();
} else
{{
var G__13039 = (function (){sb__13035.append(ch__13036);
return sb__13035;
})();
var G__13040 = cljs.reader.read_char.call(null,rdr);
sb__13035 = G__13039;
ch__13036 = G__13040;
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
var ch__13044 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____13045 = (ch__13044 === "n");
if(or__3824__auto____13045)
{return or__3824__auto____13045;
} else
{var or__3824__auto____13046 = (ch__13044 === "r");
if(or__3824__auto____13046)
{return or__3824__auto____13046;
} else
{return (ch__13044 == null);
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
var matches__13048 = re.exec(s);
if((matches__13048 == null))
{return null;
} else
{if((matches__13048.length === 1))
{return (matches__13048[0]);
} else
{return matches__13048;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__13056 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__13057 = (groups__13056[2]);
if(!((function (){var or__3824__auto____13058 = (group3__13057 == null);
if(or__3824__auto____13058)
{return or__3824__auto____13058;
} else
{return (group3__13057.length < 1);
}
})()))
{return 0;
} else
{var negate__13059 = ((("-" === (groups__13056[1])))?-1:1);
var a__13060 = (cljs.core.truth_((groups__13056[3]))?[(groups__13056[3]),10]:(cljs.core.truth_((groups__13056[4]))?[(groups__13056[4]),16]:(cljs.core.truth_((groups__13056[5]))?[(groups__13056[5]),8]:(cljs.core.truth_((groups__13056[7]))?[(groups__13056[7]),parseInt((groups__13056[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__13061 = (a__13060[0]);
var radix__13062 = (a__13060[1]);
if((n__13061 == null))
{return null;
} else
{return (negate__13059 * parseInt(n__13061,radix__13062));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__13066 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__13067 = (groups__13066[1]);
var denominator__13068 = (groups__13066[2]);
return (parseInt(numinator__13067) / parseInt(denominator__13068));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__13071 = re.exec(s);
if((function (){var and__3822__auto____13072 = !((matches__13071 == null));
if(and__3822__auto____13072)
{return ((matches__13071[0]) === s);
} else
{return and__3822__auto____13072;
}
})())
{if((matches__13071.length === 1))
{return (matches__13071[0]);
} else
{return matches__13071;
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
var code__13074 = parseInt(code_str,16);
return String.fromCharCode(code__13074);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__13077 = cljs.reader.read_char.call(null,reader);
var mapresult__13078 = cljs.reader.escape_char_map.call(null,ch__13077);
if(cljs.core.truth_(mapresult__13078))
{return mapresult__13078;
} else
{if((ch__13077 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__13077,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__13077 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__13077,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__13077))
{return String.fromCharCode(ch__13077);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__13077);
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
var ch__13080 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__13080)))
{{
var G__13081 = cljs.reader.read_char.call(null,rdr);
ch__13080 = G__13081;
continue;
}
} else
{return ch__13080;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__13088 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__13089 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__13089))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__13089))
{return cljs.core.persistent_BANG_.call(null,a__13088);
} else
{var temp__3971__auto____13090 = cljs.reader.macros.call(null,ch__13089);
if(cljs.core.truth_(temp__3971__auto____13090))
{var macrofn__13091 = temp__3971__auto____13090;
var mret__13092 = macrofn__13091.call(null,rdr,ch__13089);
{
var G__13094 = (((mret__13092 === rdr))?a__13088:cljs.core.conj_BANG_.call(null,a__13088,mret__13092));
a__13088 = G__13094;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__13089);
var o__13093 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__13095 = (((o__13093 === rdr))?a__13088:cljs.core.conj_BANG_.call(null,a__13088,o__13093));
a__13088 = G__13095;
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
void 0;
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__13100 = cljs.reader.read_char.call(null,rdr);
var dm__13101 = cljs.reader.dispatch_macros.call(null,ch__13100);
if(cljs.core.truth_(dm__13101))
{return dm__13101.call(null,rdr,_);
} else
{var temp__3971__auto____13102 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__13100);
if(cljs.core.truth_(temp__3971__auto____13102))
{var obj__13103 = temp__3971__auto____13102;
return obj__13103;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__13100);
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
var l__13105 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__13105)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__13105);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__13112 = (new goog.string.StringBuffer(initch));
var ch__13113 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____13114 = (ch__13113 == null);
if(or__3824__auto____13114)
{return or__3824__auto____13114;
} else
{var or__3824__auto____13115 = cljs.reader.whitespace_QMARK_.call(null,ch__13113);
if(or__3824__auto____13115)
{return or__3824__auto____13115;
} else
{return cljs.reader.macros.call(null,ch__13113);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__13113);
var s__13116 = buffer__13112.toString();
var or__3824__auto____13117 = cljs.reader.match_number.call(null,s__13116);
if(cljs.core.truth_(or__3824__auto____13117))
{return or__3824__auto____13117;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__13116,"]");
}
} else
{{
var G__13118 = (function (){buffer__13112.append(ch__13113);
return buffer__13112;
})();
var G__13119 = cljs.reader.read_char.call(null,reader);
buffer__13112 = G__13118;
ch__13113 = G__13119;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__13122 = (new goog.string.StringBuffer());
var ch__13123 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__13123 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__13123))
{{
var G__13124 = (function (){buffer__13122.append(cljs.reader.escape_char.call(null,buffer__13122,reader));
return buffer__13122;
})();
var G__13125 = cljs.reader.read_char.call(null,reader);
buffer__13122 = G__13124;
ch__13123 = G__13125;
continue;
}
} else
{if(("\"" === ch__13123))
{return buffer__13122.toString();
} else
{if("\uFDD0'default")
{{
var G__13126 = (function (){buffer__13122.append(ch__13123);
return buffer__13122;
})();
var G__13127 = cljs.reader.read_char.call(null,reader);
buffer__13122 = G__13126;
ch__13123 = G__13127;
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
var token__13129 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__13129,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__13129,0,token__13129.indexOf("/")),cljs.core.subs.call(null,token__13129,(token__13129.indexOf("/") + 1),token__13129.length));
} else
{return cljs.reader.special_symbols.call(null,token__13129,cljs.core.symbol.call(null,token__13129));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__13139 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__13140 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__13139);
var token__13141 = (a__13140[0]);
var ns__13142 = (a__13140[1]);
var name__13143 = (a__13140[2]);
if(cljs.core.truth_((function (){var or__3824__auto____13145 = (function (){var and__3822__auto____13144 = !((void 0 === ns__13142));
if(and__3822__auto____13144)
{return (ns__13142.substring((ns__13142.length - 2),ns__13142.length) === ":/");
} else
{return and__3822__auto____13144;
}
})();
if(cljs.core.truth_(or__3824__auto____13145))
{return or__3824__auto____13145;
} else
{var or__3824__auto____13146 = ((name__13143[(name__13143.length - 1)]) === ":");
if(or__3824__auto____13146)
{return or__3824__auto____13146;
} else
{return !((token__13141.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__13141);
} else
{if((function (){var and__3822__auto____13147 = !((ns__13142 == null));
if(and__3822__auto____13147)
{return (ns__13142.length > 0);
} else
{return and__3822__auto____13147;
}
})())
{return cljs.core.keyword.call(null,ns__13142.substring(0,ns__13142.indexOf("/")),name__13143);
} else
{return cljs.core.keyword.call(null,token__13141);
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
var m__13153 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__13153))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__13154 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__13155__13156 = o__13154;
if(G__13155__13156)
{if((function (){var or__3824__auto____13157 = (G__13155__13156.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____13157)
{return or__3824__auto____13157;
} else
{return G__13155__13156.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__13155__13156.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__13155__13156);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__13155__13156);
}
})())
{return cljs.core.with_meta.call(null,o__13154,cljs.core.merge.call(null,cljs.core.meta.call(null,o__13154),m__13153));
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
var ch__13161 = cljs.reader.read_char.call(null,reader);
if((ch__13161 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__13161))
{{
var G__13164 = reader;
var G__13165 = eof_is_error;
var G__13166 = sentinel;
var G__13167 = is_recursive;
reader = G__13164;
eof_is_error = G__13165;
sentinel = G__13166;
is_recursive = G__13167;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__13161))
{{
var G__13168 = cljs.reader.read_comment.call(null,reader,ch__13161);
var G__13169 = eof_is_error;
var G__13170 = sentinel;
var G__13171 = is_recursive;
reader = G__13168;
eof_is_error = G__13169;
sentinel = G__13170;
is_recursive = G__13171;
continue;
}
} else
{if("\uFDD0'else")
{var f__13162 = cljs.reader.macros.call(null,ch__13161);
var res__13163 = (cljs.core.truth_(f__13162)?f__13162.call(null,reader,ch__13161):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__13161))?cljs.reader.read_number.call(null,reader,ch__13161):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__13161):null)));
if((res__13163 === reader))
{{
var G__13172 = reader;
var G__13173 = eof_is_error;
var G__13174 = sentinel;
var G__13175 = is_recursive;
reader = G__13172;
eof_is_error = G__13173;
sentinel = G__13174;
is_recursive = G__13175;
continue;
}
} else
{return res__13163;
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
var r__13177 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__13177,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__13179 = (new goog.string.StringBuffer(s));
while(true){
if((b__13179.getLength() < width))
{{
var G__13180 = b__13179.append("0");
b__13179 = G__13180;
continue;
}
} else
{return b__13179.toString();
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
var and__3822__auto____13183 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____13183))
{var or__3824__auto____13184 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____13184))
{return or__3824__auto____13184;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____13183;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__13189 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__13190 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__13190:dim_norm__13189),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__13191 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__13193 = (function (low,n,high,msg){
if((function (){var and__3822__auto____13192 = (low <= n);
if(and__3822__auto____13192)
{return (n <= high);
} else
{return and__3822__auto____13192;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____13194 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__13191,ts)));
if(cljs.core.truth_(temp__3974__auto____13194))
{var vec__13195__13198 = temp__3974__auto____13194;
var vec__13196__13199 = cljs.core.nth.call(null,vec__13195__13198,0,null);
var ___13200 = cljs.core.nth.call(null,vec__13196__13199,0,null);
var years__13201 = cljs.core.nth.call(null,vec__13196__13199,1,null);
var months__13202 = cljs.core.nth.call(null,vec__13196__13199,2,null);
var days__13203 = cljs.core.nth.call(null,vec__13196__13199,3,null);
var hours__13204 = cljs.core.nth.call(null,vec__13196__13199,4,null);
var minutes__13205 = cljs.core.nth.call(null,vec__13196__13199,5,null);
var seconds__13206 = cljs.core.nth.call(null,vec__13196__13199,6,null);
var milliseconds__13207 = cljs.core.nth.call(null,vec__13196__13199,7,null);
var vec__13197__13208 = cljs.core.nth.call(null,vec__13195__13198,1,null);
var ___13209 = cljs.core.nth.call(null,vec__13197__13208,0,null);
var ___13210 = cljs.core.nth.call(null,vec__13197__13208,1,null);
var ___13211 = cljs.core.nth.call(null,vec__13197__13208,2,null);
var V__13212 = vec__13195__13198;
var vec__13213__13216 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__13188_SHARP_){
return parseInt(p1__13188_SHARP_);
}),v);
}),cljs.core.map.call(null,(function (p1__13186_SHARP_,p2__13185_SHARP_){
return cljs.core.update_in.call(null,p2__13185_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__13186_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__13187_SHARP_){
if(cljs.core._EQ_.call(null,p1__13187_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__13212));
var vec__13214__13217 = cljs.core.nth.call(null,vec__13213__13216,0,null);
var ___13218 = cljs.core.nth.call(null,vec__13214__13217,0,null);
var y__13219 = cljs.core.nth.call(null,vec__13214__13217,1,null);
var mo__13220 = cljs.core.nth.call(null,vec__13214__13217,2,null);
var d__13221 = cljs.core.nth.call(null,vec__13214__13217,3,null);
var h__13222 = cljs.core.nth.call(null,vec__13214__13217,4,null);
var m__13223 = cljs.core.nth.call(null,vec__13214__13217,5,null);
var s__13224 = cljs.core.nth.call(null,vec__13214__13217,6,null);
var ms__13225 = cljs.core.nth.call(null,vec__13214__13217,7,null);
var vec__13215__13226 = cljs.core.nth.call(null,vec__13213__13216,1,null);
var offset_sign__13227 = cljs.core.nth.call(null,vec__13215__13226,0,null);
var offset_hours__13228 = cljs.core.nth.call(null,vec__13215__13226,1,null);
var offset_minutes__13229 = cljs.core.nth.call(null,vec__13215__13226,2,null);
var offset__13230 = (offset_sign__13227 * ((offset_hours__13228 * 60) + offset_minutes__13229));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__13201))?1970:y__13219),((cljs.core.not.call(null,months__13202))?1:check__13193.call(null,1,mo__13220,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__13203))?1:check__13193.call(null,1,d__13221,cljs.reader.days_in_month.call(null,mo__13220,cljs.reader.leap_year_QMARK_.call(null,y__13219)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__13204))?0:check__13193.call(null,0,h__13222,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__13205))?0:check__13193.call(null,0,m__13223,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__13206))?0:check__13193.call(null,0,s__13224,((cljs.core._EQ_.call(null,m__13223,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__13207))?0:check__13193.call(null,0,ms__13225,999,"timestamp millisecond field must be in range 0..999")),offset__13230], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____13242 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____13242))
{var vec__13243__13244 = temp__3971__auto____13242;
var years__13245 = cljs.core.nth.call(null,vec__13243__13244,0,null);
var months__13246 = cljs.core.nth.call(null,vec__13243__13244,1,null);
var days__13247 = cljs.core.nth.call(null,vec__13243__13244,2,null);
var hours__13248 = cljs.core.nth.call(null,vec__13243__13244,3,null);
var minutes__13249 = cljs.core.nth.call(null,vec__13243__13244,4,null);
var seconds__13250 = cljs.core.nth.call(null,vec__13243__13244,5,null);
var ms__13251 = cljs.core.nth.call(null,vec__13243__13244,6,null);
var offset__13252 = cljs.core.nth.call(null,vec__13243__13244,7,null);
return (new Date((Date.UTC(years__13245,(months__13246 - 1),days__13247,hours__13248,minutes__13249,seconds__13250,ms__13251) - ((offset__13252 * 60) * 1000))));
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
var tag__13256 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____13257 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__13256),null);
if(cljs.core.truth_(temp__3971__auto____13257))
{var pfn__13258 = temp__3971__auto____13257;
return pfn__13258.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__13256)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__13261 = cljs.core.name.call(null,tag);
var old_parser__13262 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__13261,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__13261,f);
return old_parser__13262;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__13265 = cljs.core.name.call(null,tag);
var old_parser__13266 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__13265,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__13265);
return old_parser__13266;
});
