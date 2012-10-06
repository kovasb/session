goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
void 0;cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____10687 = reader;
if(and__3822__auto____10687)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____10687;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{return (function (){var or__3824__auto____10688 = (cljs.reader.read_char[goog.typeOf(reader)]);
if(or__3824__auto____10688)
{return or__3824__auto____10688;
} else
{var or__3824__auto____10689 = (cljs.reader.read_char["_"]);
if(or__3824__auto____10689)
{return or__3824__auto____10689;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____10693 = reader;
if(and__3822__auto____10693)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____10693;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{return (function (){var or__3824__auto____10694 = (cljs.reader.unread[goog.typeOf(reader)]);
if(or__3824__auto____10694)
{return or__3824__auto____10694;
} else
{var or__3824__auto____10695 = (cljs.reader.unread["_"]);
if(or__3824__auto____10695)
{return or__3824__auto____10695;
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
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__10696 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__10696.buffer_atom)))
{var idx__10697 = cljs.core.deref.call(null,this__10696.index_atom);
cljs.core.swap_BANG_.call(null,this__10696.index_atom,cljs.core.inc);
return (this__10696.s[idx__10697]);
} else
{var buf__10698 = cljs.core.deref.call(null,this__10696.buffer_atom);
cljs.core.swap_BANG_.call(null,this__10696.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__10698);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__10699 = this;
return cljs.core.swap_BANG_.call(null,this__10699.buffer_atom,(function (p1__10683_SHARP_){
return cljs.core.cons.call(null,ch,p1__10683_SHARP_);
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
var or__3824__auto____10701 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____10701))
{return or__3824__auto____10701;
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
var or__3824__auto____10706 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____10706)
{return or__3824__auto____10706;
} else
{var and__3822__auto____10708 = (function (){var or__3824__auto____10707 = ("+" === initch);
if(or__3824__auto____10707)
{return or__3824__auto____10707;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____10708))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__10709 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__10709);
return next_ch__10709;
})());
} else
{return and__3822__auto____10708;
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
reader_error.cljs$lang$applyTo = (function (arglist__10710){
var rdr = cljs.core.first(arglist__10710);
var msg = cljs.core.rest(arglist__10710);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____10714 = !((ch === "#"));
if(and__3822__auto____10714)
{var and__3822__auto____10715 = !((ch === "'"));
if(and__3822__auto____10715)
{var and__3822__auto____10716 = !((ch === ":"));
if(and__3822__auto____10716)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____10716;
}
} else
{return and__3822__auto____10715;
}
} else
{return and__3822__auto____10714;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__10721 = (new goog.string.StringBuffer(initch));
var ch__10722 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____10723 = (ch__10722 == null);
if(or__3824__auto____10723)
{return or__3824__auto____10723;
} else
{var or__3824__auto____10724 = cljs.reader.whitespace_QMARK_.call(null,ch__10722);
if(or__3824__auto____10724)
{return or__3824__auto____10724;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__10722);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__10722);
return sb__10721.toString();
} else
{{
var G__10725 = (function (){sb__10721.append(ch__10722);
return sb__10721;
})();
var G__10726 = cljs.reader.read_char.call(null,rdr);
sb__10721 = G__10725;
ch__10722 = G__10726;
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
var ch__10730 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____10731 = (ch__10730 === "n");
if(or__3824__auto____10731)
{return or__3824__auto____10731;
} else
{var or__3824__auto____10732 = (ch__10730 === "r");
if(or__3824__auto____10732)
{return or__3824__auto____10732;
} else
{return (ch__10730 == null);
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
var matches__10734 = re.exec(s);
if((matches__10734 == null))
{return null;
} else
{if((matches__10734.length === 1))
{return (matches__10734[0]);
} else
{return matches__10734;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__10742 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__10743 = (groups__10742[2]);
if(!((function (){var or__3824__auto____10744 = (group3__10743 == null);
if(or__3824__auto____10744)
{return or__3824__auto____10744;
} else
{return (group3__10743.length < 1);
}
})()))
{return 0;
} else
{var negate__10745 = ((("-" === (groups__10742[1])))?-1:1);
var a__10746 = (cljs.core.truth_((groups__10742[3]))?[(groups__10742[3]),10]:(cljs.core.truth_((groups__10742[4]))?[(groups__10742[4]),16]:(cljs.core.truth_((groups__10742[5]))?[(groups__10742[5]),8]:(cljs.core.truth_((groups__10742[7]))?[(groups__10742[7]),parseInt((groups__10742[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__10747 = (a__10746[0]);
var radix__10748 = (a__10746[1]);
if((n__10747 == null))
{return null;
} else
{return (negate__10745 * parseInt(n__10747,radix__10748));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__10752 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__10753 = (groups__10752[1]);
var denominator__10754 = (groups__10752[2]);
return (parseInt(numinator__10753) / parseInt(denominator__10754));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__10757 = re.exec(s);
if((function (){var and__3822__auto____10758 = !((matches__10757 == null));
if(and__3822__auto____10758)
{return ((matches__10757[0]) === s);
} else
{return and__3822__auto____10758;
}
})())
{if((matches__10757.length === 1))
{return (matches__10757[0]);
} else
{return matches__10757;
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
var code__10760 = parseInt(code_str,16);
return String.fromCharCode(code__10760);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__10763 = cljs.reader.read_char.call(null,reader);
var mapresult__10764 = cljs.reader.escape_char_map.call(null,ch__10763);
if(cljs.core.truth_(mapresult__10764))
{return mapresult__10764;
} else
{if((ch__10763 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__10763,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__10763 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__10763,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__10763))
{return String.fromCharCode(ch__10763);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__10763);
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
var ch__10766 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__10766)))
{{
var G__10767 = cljs.reader.read_char.call(null,rdr);
ch__10766 = G__10767;
continue;
}
} else
{return ch__10766;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__10774 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__10775 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__10775))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__10775))
{return cljs.core.persistent_BANG_.call(null,a__10774);
} else
{var temp__3971__auto____10776 = cljs.reader.macros.call(null,ch__10775);
if(cljs.core.truth_(temp__3971__auto____10776))
{var macrofn__10777 = temp__3971__auto____10776;
var mret__10778 = macrofn__10777.call(null,rdr,ch__10775);
{
var G__10780 = (((mret__10778 === rdr))?a__10774:cljs.core.conj_BANG_.call(null,a__10774,mret__10778));
a__10774 = G__10780;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__10775);
var o__10779 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__10781 = (((o__10779 === rdr))?a__10774:cljs.core.conj_BANG_.call(null,a__10774,o__10779));
a__10774 = G__10781;
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
var ch__10786 = cljs.reader.read_char.call(null,rdr);
var dm__10787 = cljs.reader.dispatch_macros.call(null,ch__10786);
if(cljs.core.truth_(dm__10787))
{return dm__10787.call(null,rdr,_);
} else
{var temp__3971__auto____10788 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__10786);
if(cljs.core.truth_(temp__3971__auto____10788))
{var obj__10789 = temp__3971__auto____10788;
return obj__10789;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__10786);
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
var l__10791 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__10791)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__10791);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__10798 = (new goog.string.StringBuffer(initch));
var ch__10799 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____10800 = (ch__10799 == null);
if(or__3824__auto____10800)
{return or__3824__auto____10800;
} else
{var or__3824__auto____10801 = cljs.reader.whitespace_QMARK_.call(null,ch__10799);
if(or__3824__auto____10801)
{return or__3824__auto____10801;
} else
{return cljs.reader.macros.call(null,ch__10799);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__10799);
var s__10802 = buffer__10798.toString();
var or__3824__auto____10803 = cljs.reader.match_number.call(null,s__10802);
if(cljs.core.truth_(or__3824__auto____10803))
{return or__3824__auto____10803;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__10802,"]");
}
} else
{{
var G__10804 = (function (){buffer__10798.append(ch__10799);
return buffer__10798;
})();
var G__10805 = cljs.reader.read_char.call(null,reader);
buffer__10798 = G__10804;
ch__10799 = G__10805;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__10808 = (new goog.string.StringBuffer());
var ch__10809 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__10809 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__10809))
{{
var G__10810 = (function (){buffer__10808.append(cljs.reader.escape_char.call(null,buffer__10808,reader));
return buffer__10808;
})();
var G__10811 = cljs.reader.read_char.call(null,reader);
buffer__10808 = G__10810;
ch__10809 = G__10811;
continue;
}
} else
{if(("\"" === ch__10809))
{return buffer__10808.toString();
} else
{if("\uFDD0'default")
{{
var G__10812 = (function (){buffer__10808.append(ch__10809);
return buffer__10808;
})();
var G__10813 = cljs.reader.read_char.call(null,reader);
buffer__10808 = G__10812;
ch__10809 = G__10813;
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
var token__10815 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__10815,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__10815,0,token__10815.indexOf("/")),cljs.core.subs.call(null,token__10815,(token__10815.indexOf("/") + 1),token__10815.length));
} else
{return cljs.reader.special_symbols.call(null,token__10815,cljs.core.symbol.call(null,token__10815));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__10825 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__10826 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__10825);
var token__10827 = (a__10826[0]);
var ns__10828 = (a__10826[1]);
var name__10829 = (a__10826[2]);
if(cljs.core.truth_((function (){var or__3824__auto____10831 = (function (){var and__3822__auto____10830 = !((void 0 === ns__10828));
if(and__3822__auto____10830)
{return (ns__10828.substring((ns__10828.length - 2),ns__10828.length) === ":/");
} else
{return and__3822__auto____10830;
}
})();
if(cljs.core.truth_(or__3824__auto____10831))
{return or__3824__auto____10831;
} else
{var or__3824__auto____10832 = ((name__10829[(name__10829.length - 1)]) === ":");
if(or__3824__auto____10832)
{return or__3824__auto____10832;
} else
{return !((token__10827.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__10827);
} else
{if((function (){var and__3822__auto____10833 = !((ns__10828 == null));
if(and__3822__auto____10833)
{return (ns__10828.length > 0);
} else
{return and__3822__auto____10833;
}
})())
{return cljs.core.keyword.call(null,ns__10828.substring(0,ns__10828.indexOf("/")),name__10829);
} else
{return cljs.core.keyword.call(null,token__10827);
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
var m__10839 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__10839))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__10840 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__10841__10842 = o__10840;
if(G__10841__10842)
{if((function (){var or__3824__auto____10843 = (G__10841__10842.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____10843)
{return or__3824__auto____10843;
} else
{return G__10841__10842.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__10841__10842.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__10841__10842);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__10841__10842);
}
})())
{return cljs.core.with_meta.call(null,o__10840,cljs.core.merge.call(null,cljs.core.meta.call(null,o__10840),m__10839));
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
var ch__10847 = cljs.reader.read_char.call(null,reader);
if((ch__10847 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__10847))
{{
var G__10850 = reader;
var G__10851 = eof_is_error;
var G__10852 = sentinel;
var G__10853 = is_recursive;
reader = G__10850;
eof_is_error = G__10851;
sentinel = G__10852;
is_recursive = G__10853;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__10847))
{{
var G__10854 = cljs.reader.read_comment.call(null,reader,ch__10847);
var G__10855 = eof_is_error;
var G__10856 = sentinel;
var G__10857 = is_recursive;
reader = G__10854;
eof_is_error = G__10855;
sentinel = G__10856;
is_recursive = G__10857;
continue;
}
} else
{if("\uFDD0'else")
{var f__10848 = cljs.reader.macros.call(null,ch__10847);
var res__10849 = (cljs.core.truth_(f__10848)?f__10848.call(null,reader,ch__10847):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__10847))?cljs.reader.read_number.call(null,reader,ch__10847):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__10847):null)));
if((res__10849 === reader))
{{
var G__10858 = reader;
var G__10859 = eof_is_error;
var G__10860 = sentinel;
var G__10861 = is_recursive;
reader = G__10858;
eof_is_error = G__10859;
sentinel = G__10860;
is_recursive = G__10861;
continue;
}
} else
{return res__10849;
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
var r__10863 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__10863,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__10865 = (new goog.string.StringBuffer(s));
while(true){
if((b__10865.getLength() < width))
{{
var G__10866 = b__10865.append("0");
b__10865 = G__10866;
continue;
}
} else
{return b__10865.toString();
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
var and__3822__auto____10869 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____10869))
{var or__3824__auto____10870 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____10870))
{return or__3824__auto____10870;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____10869;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__10875 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__10876 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__10876:dim_norm__10875),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__10877 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__10879 = (function (low,n,high,msg){
if((function (){var and__3822__auto____10878 = (low <= n);
if(and__3822__auto____10878)
{return (n <= high);
} else
{return and__3822__auto____10878;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____10880 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__10877,ts)));
if(cljs.core.truth_(temp__3974__auto____10880))
{var vec__10881__10884 = temp__3974__auto____10880;
var vec__10882__10885 = cljs.core.nth.call(null,vec__10881__10884,0,null);
var ___10886 = cljs.core.nth.call(null,vec__10882__10885,0,null);
var years__10887 = cljs.core.nth.call(null,vec__10882__10885,1,null);
var months__10888 = cljs.core.nth.call(null,vec__10882__10885,2,null);
var days__10889 = cljs.core.nth.call(null,vec__10882__10885,3,null);
var hours__10890 = cljs.core.nth.call(null,vec__10882__10885,4,null);
var minutes__10891 = cljs.core.nth.call(null,vec__10882__10885,5,null);
var seconds__10892 = cljs.core.nth.call(null,vec__10882__10885,6,null);
var milliseconds__10893 = cljs.core.nth.call(null,vec__10882__10885,7,null);
var vec__10883__10894 = cljs.core.nth.call(null,vec__10881__10884,1,null);
var ___10895 = cljs.core.nth.call(null,vec__10883__10894,0,null);
var ___10896 = cljs.core.nth.call(null,vec__10883__10894,1,null);
var ___10897 = cljs.core.nth.call(null,vec__10883__10894,2,null);
var V__10898 = vec__10881__10884;
var vec__10899__10902 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__10874_SHARP_){
return parseInt(p1__10874_SHARP_);
}),v);
}),cljs.core.map.call(null,(function (p1__10872_SHARP_,p2__10871_SHARP_){
return cljs.core.update_in.call(null,p2__10871_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__10872_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__10873_SHARP_){
if(cljs.core._EQ_.call(null,p1__10873_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__10898));
var vec__10900__10903 = cljs.core.nth.call(null,vec__10899__10902,0,null);
var ___10904 = cljs.core.nth.call(null,vec__10900__10903,0,null);
var y__10905 = cljs.core.nth.call(null,vec__10900__10903,1,null);
var mo__10906 = cljs.core.nth.call(null,vec__10900__10903,2,null);
var d__10907 = cljs.core.nth.call(null,vec__10900__10903,3,null);
var h__10908 = cljs.core.nth.call(null,vec__10900__10903,4,null);
var m__10909 = cljs.core.nth.call(null,vec__10900__10903,5,null);
var s__10910 = cljs.core.nth.call(null,vec__10900__10903,6,null);
var ms__10911 = cljs.core.nth.call(null,vec__10900__10903,7,null);
var vec__10901__10912 = cljs.core.nth.call(null,vec__10899__10902,1,null);
var offset_sign__10913 = cljs.core.nth.call(null,vec__10901__10912,0,null);
var offset_hours__10914 = cljs.core.nth.call(null,vec__10901__10912,1,null);
var offset_minutes__10915 = cljs.core.nth.call(null,vec__10901__10912,2,null);
var offset__10916 = (offset_sign__10913 * ((offset_hours__10914 * 60) + offset_minutes__10915));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__10887))?1970:y__10905),((cljs.core.not.call(null,months__10888))?1:check__10879.call(null,1,mo__10906,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__10889))?1:check__10879.call(null,1,d__10907,cljs.reader.days_in_month.call(null,mo__10906,cljs.reader.leap_year_QMARK_.call(null,y__10905)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__10890))?0:check__10879.call(null,0,h__10908,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__10891))?0:check__10879.call(null,0,m__10909,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__10892))?0:check__10879.call(null,0,s__10910,((cljs.core._EQ_.call(null,m__10909,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__10893))?0:check__10879.call(null,0,ms__10911,999,"timestamp millisecond field must be in range 0..999")),offset__10916], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____10928 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____10928))
{var vec__10929__10930 = temp__3971__auto____10928;
var years__10931 = cljs.core.nth.call(null,vec__10929__10930,0,null);
var months__10932 = cljs.core.nth.call(null,vec__10929__10930,1,null);
var days__10933 = cljs.core.nth.call(null,vec__10929__10930,2,null);
var hours__10934 = cljs.core.nth.call(null,vec__10929__10930,3,null);
var minutes__10935 = cljs.core.nth.call(null,vec__10929__10930,4,null);
var seconds__10936 = cljs.core.nth.call(null,vec__10929__10930,5,null);
var ms__10937 = cljs.core.nth.call(null,vec__10929__10930,6,null);
var offset__10938 = cljs.core.nth.call(null,vec__10929__10930,7,null);
return (new Date((Date.UTC(years__10931,(months__10932 - 1),days__10933,hours__10934,minutes__10935,seconds__10936,ms__10937) - ((offset__10938 * 60) * 1000))));
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
var tag__10942 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____10943 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__10942),null);
if(cljs.core.truth_(temp__3971__auto____10943))
{var pfn__10944 = temp__3971__auto____10943;
return pfn__10944.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__10942)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__10947 = cljs.core.name.call(null,tag);
var old_parser__10948 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__10947,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__10947,f);
return old_parser__10948;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__10951 = cljs.core.name.call(null,tag);
var old_parser__10952 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__10951,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__10951);
return old_parser__10952;
});
