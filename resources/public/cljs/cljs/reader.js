goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3937__auto__ = reader;
if(and__3937__auto__)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3937__auto__;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__2408__auto__ = (((reader == null))?null:reader);
return (function (){var or__3939__auto__ = (cljs.reader.read_char[goog.typeOf(x__2408__auto__)]);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{var or__3939__auto____$1 = (cljs.reader.read_char["_"]);
if(or__3939__auto____$1)
{return or__3939__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3937__auto__ = reader;
if(and__3937__auto__)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3937__auto__;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__2408__auto__ = (((reader == null))?null:reader);
return (function (){var or__3939__auto__ = (cljs.reader.unread[goog.typeOf(x__2408__auto__)]);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{var or__3939__auto____$1 = (cljs.reader.unread["_"]);
if(or__3939__auto____$1)
{return or__3939__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

goog.provide('cljs.reader.StringPushbackReader');

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__2350__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__2350__auto__,writer__2351__auto__){
return cljs.core._write.call(null,writer__2351__auto__,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var self__ = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,self__.buffer_atom)))
{var idx = cljs.core.deref.call(null,self__.index_atom);
cljs.core.swap_BANG_.call(null,self__.index_atom,cljs.core.inc);
return (self__.s[idx]);
} else
{var buf = cljs.core.deref.call(null,self__.buffer_atom);
cljs.core.swap_BANG_.call(null,self__.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.buffer_atom,(function (p1__4027_SHARP_){
return cljs.core.cons.call(null,ch,p1__4027_SHARP_);
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
var or__3939__auto__ = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3939__auto__))
{return or__3939__auto__;
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
var or__3939__auto__ = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{var and__3937__auto__ = (function (){var or__3939__auto____$1 = ("+" === initch);
if(or__3939__auto____$1)
{return or__3939__auto____$1;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3937__auto__))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch);
return next_ch;
})());
} else
{return and__3937__auto__;
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
reader_error.cljs$lang$applyTo = (function (arglist__4028){
var rdr = cljs.core.first(arglist__4028);
var msg = cljs.core.rest(arglist__4028);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3937__auto__ = !((ch === "#"));
if(and__3937__auto__)
{var and__3937__auto____$1 = !((ch === "'"));
if(and__3937__auto____$1)
{var and__3937__auto____$2 = !((ch === ":"));
if(and__3937__auto____$2)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3937__auto____$2;
}
} else
{return and__3937__auto____$1;
}
} else
{return and__3937__auto__;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3939__auto__ = (ch == null);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{var or__3939__auto____$1 = cljs.reader.whitespace_QMARK_.call(null,ch);
if(or__3939__auto____$1)
{return or__3939__auto____$1;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch);
return sb.toString();
} else
{{
var G__4029 = (function (){sb.append(ch);
return sb;
})();
var G__4030 = cljs.reader.read_char.call(null,rdr);
sb = G__4029;
ch = G__4030;
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
var ch = cljs.reader.read_char.call(null,reader);
if((function (){var or__3939__auto__ = (ch === "n");
if(or__3939__auto__)
{return or__3939__auto__;
} else
{var or__3939__auto____$1 = (ch === "r");
if(or__3939__auto____$1)
{return or__3939__auto____$1;
} else
{return (ch == null);
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
var matches = re.exec(s);
if((matches == null))
{return null;
} else
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3 = (groups[2]);
if(!((function (){var or__3939__auto__ = (group3 == null);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return (group3.length < 1);
}
})()))
{return 0;
} else
{var negate = ((("-" === (groups[1])))?-1:1);
var a = (cljs.core.truth_((groups[3]))?[(groups[3]),10]:(cljs.core.truth_((groups[4]))?[(groups[4]),16]:(cljs.core.truth_((groups[5]))?[(groups[5]),8]:(cljs.core.truth_((groups[7]))?[(groups[7]),parseInt((groups[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n = (a[0]);
var radix = (a[1]);
if((n == null))
{return null;
} else
{return (negate * parseInt(n,radix));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator = (groups[1]);
var denominator = (groups[2]);
return (parseInt(numinator) / parseInt(denominator));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches = re.exec(s);
if((function (){var and__3937__auto__ = !((matches == null));
if(and__3937__auto__)
{return ((matches[0]) === s);
} else
{return and__3937__auto__;
}
})())
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
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
var code = parseInt(code_str,16);
return String.fromCharCode(code);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch = cljs.reader.read_char.call(null,reader);
var mapresult = cljs.reader.escape_char_map.call(null,ch);
if(cljs.core.truth_(mapresult))
{return mapresult;
} else
{if((ch === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch))
{return String.fromCharCode(ch);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch);
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
var ch = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch)))
{{
var G__4031 = cljs.reader.read_char.call(null,rdr);
ch = G__4031;
continue;
}
} else
{return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch))
{return cljs.core.persistent_BANG_.call(null,a);
} else
{var temp__4086__auto__ = cljs.reader.macros.call(null,ch);
if(cljs.core.truth_(temp__4086__auto__))
{var macrofn = temp__4086__auto__;
var mret = macrofn.call(null,rdr,ch);
{
var G__4032 = (((mret === rdr))?a:cljs.core.conj_BANG_.call(null,a,mret));
a = G__4032;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch);
var o = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__4033 = (((o === rdr))?a:cljs.core.conj_BANG_.call(null,a,o));
a = G__4033;
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
var ch = cljs.reader.read_char.call(null,rdr);
var dm = cljs.reader.dispatch_macros.call(null,ch);
if(cljs.core.truth_(dm))
{return dm.call(null,rdr,_);
} else
{var temp__4086__auto__ = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch);
if(cljs.core.truth_(temp__4086__auto__))
{var obj = temp__4086__auto__;
return obj;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch);
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
var l = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3939__auto__ = (ch == null);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{var or__3939__auto____$1 = cljs.reader.whitespace_QMARK_.call(null,ch);
if(or__3939__auto____$1)
{return or__3939__auto____$1;
} else
{return cljs.reader.macros.call(null,ch);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch);
var s = buffer.toString();
var or__3939__auto__ = cljs.reader.match_number.call(null,s);
if(cljs.core.truth_(or__3939__auto__))
{return or__3939__auto__;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s,"]");
}
} else
{{
var G__4034 = (function (){buffer.append(ch);
return buffer;
})();
var G__4035 = cljs.reader.read_char.call(null,reader);
buffer = G__4034;
ch = G__4035;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char.call(null,reader);
while(true){
if((ch == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch))
{{
var G__4036 = (function (){buffer.append(cljs.reader.escape_char.call(null,buffer,reader));
return buffer;
})();
var G__4037 = cljs.reader.read_char.call(null,reader);
buffer = G__4036;
ch = G__4037;
continue;
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{if("\uFDD0'default")
{{
var G__4038 = (function (){buffer.append(ch);
return buffer;
})();
var G__4039 = cljs.reader.read_char.call(null,reader);
buffer = G__4038;
ch = G__4039;
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
var token = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token,0,token.indexOf("/")),cljs.core.subs.call(null,token,(token.indexOf("/") + 1),token.length));
} else
{return cljs.reader.special_symbols.call(null,token,cljs.core.symbol.call(null,token));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token);
var token__$1 = (a[0]);
var ns = (a[1]);
var name = (a[2]);
if(cljs.core.truth_((function (){var or__3939__auto__ = (function (){var and__3937__auto__ = !((void 0 === ns));
if(and__3937__auto__)
{return (ns.substring((ns.length - 2),ns.length) === ":/");
} else
{return and__3937__auto__;
}
})();
if(cljs.core.truth_(or__3939__auto__))
{return or__3939__auto__;
} else
{var or__3939__auto____$1 = ((name[(name.length - 1)]) === ":");
if(or__3939__auto____$1)
{return or__3939__auto____$1;
} else
{return !((token__$1.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__$1);
} else
{if((function (){var and__3937__auto__ = !((ns == null));
if(and__3937__auto__)
{return (ns.length > 0);
} else
{return and__3937__auto__;
}
})())
{return cljs.core.keyword.call(null,ns.substring(0,ns.indexOf("/")),name);
} else
{return cljs.core.keyword.call(null,token__$1);
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
var m = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__4041 = o;
if(G__4041)
{if((function (){var or__3939__auto__ = (G__4041.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return G__4041.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__4041.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__4041);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__4041);
}
})())
{return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m));
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
var ch = cljs.reader.read_char.call(null,reader);
if((ch == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch))
{{
var G__4042 = reader;
var G__4043 = eof_is_error;
var G__4044 = sentinel;
var G__4045 = is_recursive;
reader = G__4042;
eof_is_error = G__4043;
sentinel = G__4044;
is_recursive = G__4045;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch))
{{
var G__4046 = cljs.reader.read_comment.call(null,reader,ch);
var G__4047 = eof_is_error;
var G__4048 = sentinel;
var G__4049 = is_recursive;
reader = G__4046;
eof_is_error = G__4047;
sentinel = G__4048;
is_recursive = G__4049;
continue;
}
} else
{if("\uFDD0'else")
{var f = cljs.reader.macros.call(null,ch);
var res = (cljs.core.truth_(f)?f.call(null,reader,ch):((cljs.reader.number_literal_QMARK_.call(null,reader,ch))?cljs.reader.read_number.call(null,reader,ch):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch):null)));
if((res === reader))
{{
var G__4050 = reader;
var G__4051 = eof_is_error;
var G__4052 = sentinel;
var G__4053 = is_recursive;
reader = G__4050;
eof_is_error = G__4051;
sentinel = G__4052;
is_recursive = G__4053;
continue;
}
} else
{return res;
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
var r = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width))
{{
var G__4054 = b.append("0");
b = G__4054;
continue;
}
} else
{return b.toString();
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
var and__3937__auto__ = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3937__auto__))
{var or__3939__auto__ = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3939__auto__))
{return or__3939__auto__;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3937__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check = (function (low,n,high,msg){
if((function (){var and__3937__auto__ = (low <= n);
if(and__3937__auto__)
{return (n <= high);
} else
{return and__3937__auto__;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474,"\uFDD0'column",25))))].join('')));
}
return n;
});
return (function (ts){
var temp__4088__auto__ = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp,ts)));
if(cljs.core.truth_(temp__4088__auto__))
{var vec__4059 = temp__4088__auto__;
var vec__4060 = cljs.core.nth.call(null,vec__4059,0,null);
var _ = cljs.core.nth.call(null,vec__4060,0,null);
var years = cljs.core.nth.call(null,vec__4060,1,null);
var months = cljs.core.nth.call(null,vec__4060,2,null);
var days = cljs.core.nth.call(null,vec__4060,3,null);
var hours = cljs.core.nth.call(null,vec__4060,4,null);
var minutes = cljs.core.nth.call(null,vec__4060,5,null);
var seconds = cljs.core.nth.call(null,vec__4060,6,null);
var milliseconds = cljs.core.nth.call(null,vec__4060,7,null);
var vec__4061 = cljs.core.nth.call(null,vec__4059,1,null);
var ___$1 = cljs.core.nth.call(null,vec__4061,0,null);
var ___$2 = cljs.core.nth.call(null,vec__4061,1,null);
var ___$3 = cljs.core.nth.call(null,vec__4061,2,null);
var V = vec__4059;
var vec__4062 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__4058_SHARP_){
return parseInt(p1__4058_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__4056_SHARP_,p2__4055_SHARP_){
return cljs.core.update_in.call(null,p2__4055_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__4056_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__4057_SHARP_){
if(cljs.core._EQ_.call(null,p1__4057_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V));
var vec__4063 = cljs.core.nth.call(null,vec__4062,0,null);
var ___$4 = cljs.core.nth.call(null,vec__4063,0,null);
var y = cljs.core.nth.call(null,vec__4063,1,null);
var mo = cljs.core.nth.call(null,vec__4063,2,null);
var d = cljs.core.nth.call(null,vec__4063,3,null);
var h = cljs.core.nth.call(null,vec__4063,4,null);
var m = cljs.core.nth.call(null,vec__4063,5,null);
var s = cljs.core.nth.call(null,vec__4063,6,null);
var ms = cljs.core.nth.call(null,vec__4063,7,null);
var vec__4064 = cljs.core.nth.call(null,vec__4062,1,null);
var offset_sign = cljs.core.nth.call(null,vec__4064,0,null);
var offset_hours = cljs.core.nth.call(null,vec__4064,1,null);
var offset_minutes = cljs.core.nth.call(null,vec__4064,2,null);
var offset = (offset_sign * ((offset_hours * 60) + offset_minutes));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years))?1970:y),((cljs.core.not.call(null,months))?1:check.call(null,1,mo,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days))?1:check.call(null,1,d,cljs.reader.days_in_month.call(null,mo,cljs.reader.leap_year_QMARK_.call(null,y)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours))?0:check.call(null,0,h,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes))?0:check.call(null,0,m,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds))?0:check.call(null,0,s,((cljs.core._EQ_.call(null,m,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds))?0:check.call(null,0,ms,999,"timestamp millisecond field must be in range 0..999")),offset], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__4086__auto__ = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__4086__auto__))
{var vec__4066 = temp__4086__auto__;
var years = cljs.core.nth.call(null,vec__4066,0,null);
var months = cljs.core.nth.call(null,vec__4066,1,null);
var days = cljs.core.nth.call(null,vec__4066,2,null);
var hours = cljs.core.nth.call(null,vec__4066,3,null);
var minutes = cljs.core.nth.call(null,vec__4066,4,null);
var seconds = cljs.core.nth.call(null,vec__4066,5,null);
var ms = cljs.core.nth.call(null,vec__4066,6,null);
var offset = cljs.core.nth.call(null,vec__4066,7,null);
return (new Date((Date.UTC(years,(months - 1),days,hours,minutes,seconds,ms) - ((offset * 60) * 1000))));
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
var tag = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__4086__auto__ = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag),null);
if(cljs.core.truth_(temp__4086__auto__))
{var pfn = temp__4086__auto__;
return pfn.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__$1 = cljs.core.name.call(null,tag);
var old_parser = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__$1,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);
return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__$1 = cljs.core.name.call(null,tag);
var old_parser = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__$1,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);
return old_parser;
});
