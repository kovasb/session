goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____12634 = reader;
if(and__3822__auto____12634)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____12634;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__2363__auto____12635 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____12636 = (cljs.reader.read_char[goog.typeOf(x__2363__auto____12635)]);
if(or__3824__auto____12636)
{return or__3824__auto____12636;
} else
{var or__3824__auto____12637 = (cljs.reader.read_char["_"]);
if(or__3824__auto____12637)
{return or__3824__auto____12637;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____12642 = reader;
if(and__3822__auto____12642)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____12642;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__2363__auto____12643 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____12644 = (cljs.reader.unread[goog.typeOf(x__2363__auto____12643)]);
if(or__3824__auto____12644)
{return or__3824__auto____12644;
} else
{var or__3824__auto____12645 = (cljs.reader.unread["_"]);
if(or__3824__auto____12645)
{return or__3824__auto____12645;
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
var this__12646 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__12646.buffer_atom)))
{var idx__12647 = cljs.core.deref.call(null,this__12646.index_atom);
cljs.core.swap_BANG_.call(null,this__12646.index_atom,cljs.core.inc);
return (this__12646.s[idx__12647]);
} else
{var buf__12648 = cljs.core.deref.call(null,this__12646.buffer_atom);
cljs.core.swap_BANG_.call(null,this__12646.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__12648);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__12649 = this;
return cljs.core.swap_BANG_.call(null,this__12649.buffer_atom,(function (p1__12629_SHARP_){
return cljs.core.cons.call(null,ch,p1__12629_SHARP_);
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
var or__3824__auto____12651 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____12651))
{return or__3824__auto____12651;
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
var or__3824__auto____12656 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____12656)
{return or__3824__auto____12656;
} else
{var and__3822__auto____12658 = (function (){var or__3824__auto____12657 = ("+" === initch);
if(or__3824__auto____12657)
{return or__3824__auto____12657;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____12658))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__12659 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__12659);
return next_ch__12659;
})());
} else
{return and__3822__auto____12658;
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
reader_error.cljs$lang$applyTo = (function (arglist__12660){
var rdr = cljs.core.first(arglist__12660);
var msg = cljs.core.rest(arglist__12660);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____12664 = !((ch === "#"));
if(and__3822__auto____12664)
{var and__3822__auto____12665 = !((ch === "'"));
if(and__3822__auto____12665)
{var and__3822__auto____12666 = !((ch === ":"));
if(and__3822__auto____12666)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____12666;
}
} else
{return and__3822__auto____12665;
}
} else
{return and__3822__auto____12664;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__12671 = (new goog.string.StringBuffer(initch));
var ch__12672 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____12673 = (ch__12672 == null);
if(or__3824__auto____12673)
{return or__3824__auto____12673;
} else
{var or__3824__auto____12674 = cljs.reader.whitespace_QMARK_.call(null,ch__12672);
if(or__3824__auto____12674)
{return or__3824__auto____12674;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__12672);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__12672);
return sb__12671.toString();
} else
{{
var G__12675 = (function (){sb__12671.append(ch__12672);
return sb__12671;
})();
var G__12676 = cljs.reader.read_char.call(null,rdr);
sb__12671 = G__12675;
ch__12672 = G__12676;
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
var ch__12680 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____12681 = (ch__12680 === "n");
if(or__3824__auto____12681)
{return or__3824__auto____12681;
} else
{var or__3824__auto____12682 = (ch__12680 === "r");
if(or__3824__auto____12682)
{return or__3824__auto____12682;
} else
{return (ch__12680 == null);
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
var matches__12684 = re.exec(s);
if((matches__12684 == null))
{return null;
} else
{if((matches__12684.length === 1))
{return (matches__12684[0]);
} else
{return matches__12684;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__12692 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__12693 = (groups__12692[2]);
if(!((function (){var or__3824__auto____12694 = (group3__12693 == null);
if(or__3824__auto____12694)
{return or__3824__auto____12694;
} else
{return (group3__12693.length < 1);
}
})()))
{return 0;
} else
{var negate__12695 = ((("-" === (groups__12692[1])))?-1:1);
var a__12696 = (cljs.core.truth_((groups__12692[3]))?[(groups__12692[3]),10]:(cljs.core.truth_((groups__12692[4]))?[(groups__12692[4]),16]:(cljs.core.truth_((groups__12692[5]))?[(groups__12692[5]),8]:(cljs.core.truth_((groups__12692[7]))?[(groups__12692[7]),parseInt((groups__12692[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__12697 = (a__12696[0]);
var radix__12698 = (a__12696[1]);
if((n__12697 == null))
{return null;
} else
{return (negate__12695 * parseInt(n__12697,radix__12698));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__12702 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__12703 = (groups__12702[1]);
var denominator__12704 = (groups__12702[2]);
return (parseInt(numinator__12703) / parseInt(denominator__12704));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__12707 = re.exec(s);
if((function (){var and__3822__auto____12708 = !((matches__12707 == null));
if(and__3822__auto____12708)
{return ((matches__12707[0]) === s);
} else
{return and__3822__auto____12708;
}
})())
{if((matches__12707.length === 1))
{return (matches__12707[0]);
} else
{return matches__12707;
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
var code__12710 = parseInt(code_str,16);
return String.fromCharCode(code__12710);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__12713 = cljs.reader.read_char.call(null,reader);
var mapresult__12714 = cljs.reader.escape_char_map.call(null,ch__12713);
if(cljs.core.truth_(mapresult__12714))
{return mapresult__12714;
} else
{if((ch__12713 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__12713,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__12713 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__12713,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__12713))
{return String.fromCharCode(ch__12713);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__12713);
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
var ch__12716 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__12716)))
{{
var G__12717 = cljs.reader.read_char.call(null,rdr);
ch__12716 = G__12717;
continue;
}
} else
{return ch__12716;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__12724 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__12725 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__12725))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__12725))
{return cljs.core.persistent_BANG_.call(null,a__12724);
} else
{var temp__3971__auto____12726 = cljs.reader.macros.call(null,ch__12725);
if(cljs.core.truth_(temp__3971__auto____12726))
{var macrofn__12727 = temp__3971__auto____12726;
var mret__12728 = macrofn__12727.call(null,rdr,ch__12725);
{
var G__12730 = (((mret__12728 === rdr))?a__12724:cljs.core.conj_BANG_.call(null,a__12724,mret__12728));
a__12724 = G__12730;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__12725);
var o__12729 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__12731 = (((o__12729 === rdr))?a__12724:cljs.core.conj_BANG_.call(null,a__12724,o__12729));
a__12724 = G__12731;
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
var ch__12736 = cljs.reader.read_char.call(null,rdr);
var dm__12737 = cljs.reader.dispatch_macros.call(null,ch__12736);
if(cljs.core.truth_(dm__12737))
{return dm__12737.call(null,rdr,_);
} else
{var temp__3971__auto____12738 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__12736);
if(cljs.core.truth_(temp__3971__auto____12738))
{var obj__12739 = temp__3971__auto____12738;
return obj__12739;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__12736);
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
var l__12741 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__12741)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__12741);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__12748 = (new goog.string.StringBuffer(initch));
var ch__12749 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____12750 = (ch__12749 == null);
if(or__3824__auto____12750)
{return or__3824__auto____12750;
} else
{var or__3824__auto____12751 = cljs.reader.whitespace_QMARK_.call(null,ch__12749);
if(or__3824__auto____12751)
{return or__3824__auto____12751;
} else
{return cljs.reader.macros.call(null,ch__12749);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__12749);
var s__12752 = buffer__12748.toString();
var or__3824__auto____12753 = cljs.reader.match_number.call(null,s__12752);
if(cljs.core.truth_(or__3824__auto____12753))
{return or__3824__auto____12753;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__12752,"]");
}
} else
{{
var G__12754 = (function (){buffer__12748.append(ch__12749);
return buffer__12748;
})();
var G__12755 = cljs.reader.read_char.call(null,reader);
buffer__12748 = G__12754;
ch__12749 = G__12755;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__12758 = (new goog.string.StringBuffer());
var ch__12759 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__12759 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__12759))
{{
var G__12760 = (function (){buffer__12758.append(cljs.reader.escape_char.call(null,buffer__12758,reader));
return buffer__12758;
})();
var G__12761 = cljs.reader.read_char.call(null,reader);
buffer__12758 = G__12760;
ch__12759 = G__12761;
continue;
}
} else
{if(("\"" === ch__12759))
{return buffer__12758.toString();
} else
{if("\uFDD0'default")
{{
var G__12762 = (function (){buffer__12758.append(ch__12759);
return buffer__12758;
})();
var G__12763 = cljs.reader.read_char.call(null,reader);
buffer__12758 = G__12762;
ch__12759 = G__12763;
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
var token__12765 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__12765,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__12765,0,token__12765.indexOf("/")),cljs.core.subs.call(null,token__12765,(token__12765.indexOf("/") + 1),token__12765.length));
} else
{return cljs.reader.special_symbols.call(null,token__12765,cljs.core.symbol.call(null,token__12765));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__12775 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__12776 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__12775);
var token__12777 = (a__12776[0]);
var ns__12778 = (a__12776[1]);
var name__12779 = (a__12776[2]);
if(cljs.core.truth_((function (){var or__3824__auto____12781 = (function (){var and__3822__auto____12780 = !((void 0 === ns__12778));
if(and__3822__auto____12780)
{return (ns__12778.substring((ns__12778.length - 2),ns__12778.length) === ":/");
} else
{return and__3822__auto____12780;
}
})();
if(cljs.core.truth_(or__3824__auto____12781))
{return or__3824__auto____12781;
} else
{var or__3824__auto____12782 = ((name__12779[(name__12779.length - 1)]) === ":");
if(or__3824__auto____12782)
{return or__3824__auto____12782;
} else
{return !((token__12777.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__12777);
} else
{if((function (){var and__3822__auto____12783 = !((ns__12778 == null));
if(and__3822__auto____12783)
{return (ns__12778.length > 0);
} else
{return and__3822__auto____12783;
}
})())
{return cljs.core.keyword.call(null,ns__12778.substring(0,ns__12778.indexOf("/")),name__12779);
} else
{return cljs.core.keyword.call(null,token__12777);
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
var m__12789 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__12789))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__12790 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__12791__12792 = o__12790;
if(G__12791__12792)
{if((function (){var or__3824__auto____12793 = (G__12791__12792.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____12793)
{return or__3824__auto____12793;
} else
{return G__12791__12792.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__12791__12792.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__12791__12792);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__12791__12792);
}
})())
{return cljs.core.with_meta.call(null,o__12790,cljs.core.merge.call(null,cljs.core.meta.call(null,o__12790),m__12789));
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
var ch__12797 = cljs.reader.read_char.call(null,reader);
if((ch__12797 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__12797))
{{
var G__12800 = reader;
var G__12801 = eof_is_error;
var G__12802 = sentinel;
var G__12803 = is_recursive;
reader = G__12800;
eof_is_error = G__12801;
sentinel = G__12802;
is_recursive = G__12803;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__12797))
{{
var G__12804 = cljs.reader.read_comment.call(null,reader,ch__12797);
var G__12805 = eof_is_error;
var G__12806 = sentinel;
var G__12807 = is_recursive;
reader = G__12804;
eof_is_error = G__12805;
sentinel = G__12806;
is_recursive = G__12807;
continue;
}
} else
{if("\uFDD0'else")
{var f__12798 = cljs.reader.macros.call(null,ch__12797);
var res__12799 = (cljs.core.truth_(f__12798)?f__12798.call(null,reader,ch__12797):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__12797))?cljs.reader.read_number.call(null,reader,ch__12797):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__12797):null)));
if((res__12799 === reader))
{{
var G__12808 = reader;
var G__12809 = eof_is_error;
var G__12810 = sentinel;
var G__12811 = is_recursive;
reader = G__12808;
eof_is_error = G__12809;
sentinel = G__12810;
is_recursive = G__12811;
continue;
}
} else
{return res__12799;
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
var r__12813 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__12813,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__12815 = (new goog.string.StringBuffer(s));
while(true){
if((b__12815.getLength() < width))
{{
var G__12816 = b__12815.append("0");
b__12815 = G__12816;
continue;
}
} else
{return b__12815.toString();
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
var and__3822__auto____12819 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____12819))
{var or__3824__auto____12820 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____12820))
{return or__3824__auto____12820;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____12819;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__12825 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__12826 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__12826:dim_norm__12825),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__12827 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__12829 = (function (low,n,high,msg){
if((function (){var and__3822__auto____12828 = (low <= n);
if(and__3822__auto____12828)
{return (n <= high);
} else
{return and__3822__auto____12828;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____12830 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__12827,ts)));
if(cljs.core.truth_(temp__3974__auto____12830))
{var vec__12831__12834 = temp__3974__auto____12830;
var vec__12832__12835 = cljs.core.nth.call(null,vec__12831__12834,0,null);
var ___12836 = cljs.core.nth.call(null,vec__12832__12835,0,null);
var years__12837 = cljs.core.nth.call(null,vec__12832__12835,1,null);
var months__12838 = cljs.core.nth.call(null,vec__12832__12835,2,null);
var days__12839 = cljs.core.nth.call(null,vec__12832__12835,3,null);
var hours__12840 = cljs.core.nth.call(null,vec__12832__12835,4,null);
var minutes__12841 = cljs.core.nth.call(null,vec__12832__12835,5,null);
var seconds__12842 = cljs.core.nth.call(null,vec__12832__12835,6,null);
var milliseconds__12843 = cljs.core.nth.call(null,vec__12832__12835,7,null);
var vec__12833__12844 = cljs.core.nth.call(null,vec__12831__12834,1,null);
var ___12845 = cljs.core.nth.call(null,vec__12833__12844,0,null);
var ___12846 = cljs.core.nth.call(null,vec__12833__12844,1,null);
var ___12847 = cljs.core.nth.call(null,vec__12833__12844,2,null);
var V__12848 = vec__12831__12834;
var vec__12849__12852 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__12824_SHARP_){
return parseInt(p1__12824_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__12822_SHARP_,p2__12821_SHARP_){
return cljs.core.update_in.call(null,p2__12821_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__12822_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__12823_SHARP_){
if(cljs.core._EQ_.call(null,p1__12823_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__12848));
var vec__12850__12853 = cljs.core.nth.call(null,vec__12849__12852,0,null);
var ___12854 = cljs.core.nth.call(null,vec__12850__12853,0,null);
var y__12855 = cljs.core.nth.call(null,vec__12850__12853,1,null);
var mo__12856 = cljs.core.nth.call(null,vec__12850__12853,2,null);
var d__12857 = cljs.core.nth.call(null,vec__12850__12853,3,null);
var h__12858 = cljs.core.nth.call(null,vec__12850__12853,4,null);
var m__12859 = cljs.core.nth.call(null,vec__12850__12853,5,null);
var s__12860 = cljs.core.nth.call(null,vec__12850__12853,6,null);
var ms__12861 = cljs.core.nth.call(null,vec__12850__12853,7,null);
var vec__12851__12862 = cljs.core.nth.call(null,vec__12849__12852,1,null);
var offset_sign__12863 = cljs.core.nth.call(null,vec__12851__12862,0,null);
var offset_hours__12864 = cljs.core.nth.call(null,vec__12851__12862,1,null);
var offset_minutes__12865 = cljs.core.nth.call(null,vec__12851__12862,2,null);
var offset__12866 = (offset_sign__12863 * ((offset_hours__12864 * 60) + offset_minutes__12865));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__12837))?1970:y__12855),((cljs.core.not.call(null,months__12838))?1:check__12829.call(null,1,mo__12856,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__12839))?1:check__12829.call(null,1,d__12857,cljs.reader.days_in_month.call(null,mo__12856,cljs.reader.leap_year_QMARK_.call(null,y__12855)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__12840))?0:check__12829.call(null,0,h__12858,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__12841))?0:check__12829.call(null,0,m__12859,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__12842))?0:check__12829.call(null,0,s__12860,((cljs.core._EQ_.call(null,m__12859,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__12843))?0:check__12829.call(null,0,ms__12861,999,"timestamp millisecond field must be in range 0..999")),offset__12866], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____12878 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____12878))
{var vec__12879__12880 = temp__3971__auto____12878;
var years__12881 = cljs.core.nth.call(null,vec__12879__12880,0,null);
var months__12882 = cljs.core.nth.call(null,vec__12879__12880,1,null);
var days__12883 = cljs.core.nth.call(null,vec__12879__12880,2,null);
var hours__12884 = cljs.core.nth.call(null,vec__12879__12880,3,null);
var minutes__12885 = cljs.core.nth.call(null,vec__12879__12880,4,null);
var seconds__12886 = cljs.core.nth.call(null,vec__12879__12880,5,null);
var ms__12887 = cljs.core.nth.call(null,vec__12879__12880,6,null);
var offset__12888 = cljs.core.nth.call(null,vec__12879__12880,7,null);
return (new Date((Date.UTC(years__12881,(months__12882 - 1),days__12883,hours__12884,minutes__12885,seconds__12886,ms__12887) - ((offset__12888 * 60) * 1000))));
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
var tag__12892 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____12893 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__12892),null);
if(cljs.core.truth_(temp__3971__auto____12893))
{var pfn__12894 = temp__3971__auto____12893;
return pfn__12894.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__12892)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__12897 = cljs.core.name.call(null,tag);
var old_parser__12898 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__12897,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__12897,f);
return old_parser__12898;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__12901 = cljs.core.name.call(null,tag);
var old_parser__12902 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__12901,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__12901);
return old_parser__12902;
});
