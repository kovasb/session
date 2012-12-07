goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____12588 = reader;
if(and__3822__auto____12588)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____12588;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__2363__auto____12589 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____12590 = (cljs.reader.read_char[goog.typeOf(x__2363__auto____12589)]);
if(or__3824__auto____12590)
{return or__3824__auto____12590;
} else
{var or__3824__auto____12591 = (cljs.reader.read_char["_"]);
if(or__3824__auto____12591)
{return or__3824__auto____12591;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____12596 = reader;
if(and__3822__auto____12596)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____12596;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__2363__auto____12597 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____12598 = (cljs.reader.unread[goog.typeOf(x__2363__auto____12597)]);
if(or__3824__auto____12598)
{return or__3824__auto____12598;
} else
{var or__3824__auto____12599 = (cljs.reader.unread["_"]);
if(or__3824__auto____12599)
{return or__3824__auto____12599;
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
var this__12600 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__12600.buffer_atom)))
{var idx__12601 = cljs.core.deref.call(null,this__12600.index_atom);
cljs.core.swap_BANG_.call(null,this__12600.index_atom,cljs.core.inc);
return (this__12600.s[idx__12601]);
} else
{var buf__12602 = cljs.core.deref.call(null,this__12600.buffer_atom);
cljs.core.swap_BANG_.call(null,this__12600.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__12602);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__12603 = this;
return cljs.core.swap_BANG_.call(null,this__12603.buffer_atom,(function (p1__12583_SHARP_){
return cljs.core.cons.call(null,ch,p1__12583_SHARP_);
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
var or__3824__auto____12605 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____12605))
{return or__3824__auto____12605;
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
var or__3824__auto____12610 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____12610)
{return or__3824__auto____12610;
} else
{var and__3822__auto____12612 = (function (){var or__3824__auto____12611 = ("+" === initch);
if(or__3824__auto____12611)
{return or__3824__auto____12611;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____12612))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__12613 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__12613);
return next_ch__12613;
})());
} else
{return and__3822__auto____12612;
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
reader_error.cljs$lang$applyTo = (function (arglist__12614){
var rdr = cljs.core.first(arglist__12614);
var msg = cljs.core.rest(arglist__12614);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____12618 = !((ch === "#"));
if(and__3822__auto____12618)
{var and__3822__auto____12619 = !((ch === "'"));
if(and__3822__auto____12619)
{var and__3822__auto____12620 = !((ch === ":"));
if(and__3822__auto____12620)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____12620;
}
} else
{return and__3822__auto____12619;
}
} else
{return and__3822__auto____12618;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__12625 = (new goog.string.StringBuffer(initch));
var ch__12626 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____12627 = (ch__12626 == null);
if(or__3824__auto____12627)
{return or__3824__auto____12627;
} else
{var or__3824__auto____12628 = cljs.reader.whitespace_QMARK_.call(null,ch__12626);
if(or__3824__auto____12628)
{return or__3824__auto____12628;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__12626);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__12626);
return sb__12625.toString();
} else
{{
var G__12629 = (function (){sb__12625.append(ch__12626);
return sb__12625;
})();
var G__12630 = cljs.reader.read_char.call(null,rdr);
sb__12625 = G__12629;
ch__12626 = G__12630;
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
var ch__12634 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____12635 = (ch__12634 === "n");
if(or__3824__auto____12635)
{return or__3824__auto____12635;
} else
{var or__3824__auto____12636 = (ch__12634 === "r");
if(or__3824__auto____12636)
{return or__3824__auto____12636;
} else
{return (ch__12634 == null);
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
var matches__12638 = re.exec(s);
if((matches__12638 == null))
{return null;
} else
{if((matches__12638.length === 1))
{return (matches__12638[0]);
} else
{return matches__12638;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__12646 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__12647 = (groups__12646[2]);
if(!((function (){var or__3824__auto____12648 = (group3__12647 == null);
if(or__3824__auto____12648)
{return or__3824__auto____12648;
} else
{return (group3__12647.length < 1);
}
})()))
{return 0;
} else
{var negate__12649 = ((("-" === (groups__12646[1])))?-1:1);
var a__12650 = (cljs.core.truth_((groups__12646[3]))?[(groups__12646[3]),10]:(cljs.core.truth_((groups__12646[4]))?[(groups__12646[4]),16]:(cljs.core.truth_((groups__12646[5]))?[(groups__12646[5]),8]:(cljs.core.truth_((groups__12646[7]))?[(groups__12646[7]),parseInt((groups__12646[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__12651 = (a__12650[0]);
var radix__12652 = (a__12650[1]);
if((n__12651 == null))
{return null;
} else
{return (negate__12649 * parseInt(n__12651,radix__12652));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__12656 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__12657 = (groups__12656[1]);
var denominator__12658 = (groups__12656[2]);
return (parseInt(numinator__12657) / parseInt(denominator__12658));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__12661 = re.exec(s);
if((function (){var and__3822__auto____12662 = !((matches__12661 == null));
if(and__3822__auto____12662)
{return ((matches__12661[0]) === s);
} else
{return and__3822__auto____12662;
}
})())
{if((matches__12661.length === 1))
{return (matches__12661[0]);
} else
{return matches__12661;
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
var code__12664 = parseInt(code_str,16);
return String.fromCharCode(code__12664);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__12667 = cljs.reader.read_char.call(null,reader);
var mapresult__12668 = cljs.reader.escape_char_map.call(null,ch__12667);
if(cljs.core.truth_(mapresult__12668))
{return mapresult__12668;
} else
{if((ch__12667 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__12667,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__12667 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__12667,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__12667))
{return String.fromCharCode(ch__12667);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__12667);
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
var ch__12670 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__12670)))
{{
var G__12671 = cljs.reader.read_char.call(null,rdr);
ch__12670 = G__12671;
continue;
}
} else
{return ch__12670;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__12678 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__12679 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__12679))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__12679))
{return cljs.core.persistent_BANG_.call(null,a__12678);
} else
{var temp__3971__auto____12680 = cljs.reader.macros.call(null,ch__12679);
if(cljs.core.truth_(temp__3971__auto____12680))
{var macrofn__12681 = temp__3971__auto____12680;
var mret__12682 = macrofn__12681.call(null,rdr,ch__12679);
{
var G__12684 = (((mret__12682 === rdr))?a__12678:cljs.core.conj_BANG_.call(null,a__12678,mret__12682));
a__12678 = G__12684;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__12679);
var o__12683 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__12685 = (((o__12683 === rdr))?a__12678:cljs.core.conj_BANG_.call(null,a__12678,o__12683));
a__12678 = G__12685;
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
var ch__12690 = cljs.reader.read_char.call(null,rdr);
var dm__12691 = cljs.reader.dispatch_macros.call(null,ch__12690);
if(cljs.core.truth_(dm__12691))
{return dm__12691.call(null,rdr,_);
} else
{var temp__3971__auto____12692 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__12690);
if(cljs.core.truth_(temp__3971__auto____12692))
{var obj__12693 = temp__3971__auto____12692;
return obj__12693;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__12690);
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
var l__12695 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__12695)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__12695);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__12702 = (new goog.string.StringBuffer(initch));
var ch__12703 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____12704 = (ch__12703 == null);
if(or__3824__auto____12704)
{return or__3824__auto____12704;
} else
{var or__3824__auto____12705 = cljs.reader.whitespace_QMARK_.call(null,ch__12703);
if(or__3824__auto____12705)
{return or__3824__auto____12705;
} else
{return cljs.reader.macros.call(null,ch__12703);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__12703);
var s__12706 = buffer__12702.toString();
var or__3824__auto____12707 = cljs.reader.match_number.call(null,s__12706);
if(cljs.core.truth_(or__3824__auto____12707))
{return or__3824__auto____12707;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__12706,"]");
}
} else
{{
var G__12708 = (function (){buffer__12702.append(ch__12703);
return buffer__12702;
})();
var G__12709 = cljs.reader.read_char.call(null,reader);
buffer__12702 = G__12708;
ch__12703 = G__12709;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__12712 = (new goog.string.StringBuffer());
var ch__12713 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__12713 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__12713))
{{
var G__12714 = (function (){buffer__12712.append(cljs.reader.escape_char.call(null,buffer__12712,reader));
return buffer__12712;
})();
var G__12715 = cljs.reader.read_char.call(null,reader);
buffer__12712 = G__12714;
ch__12713 = G__12715;
continue;
}
} else
{if(("\"" === ch__12713))
{return buffer__12712.toString();
} else
{if("\uFDD0'default")
{{
var G__12716 = (function (){buffer__12712.append(ch__12713);
return buffer__12712;
})();
var G__12717 = cljs.reader.read_char.call(null,reader);
buffer__12712 = G__12716;
ch__12713 = G__12717;
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
var token__12719 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__12719,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__12719,0,token__12719.indexOf("/")),cljs.core.subs.call(null,token__12719,(token__12719.indexOf("/") + 1),token__12719.length));
} else
{return cljs.reader.special_symbols.call(null,token__12719,cljs.core.symbol.call(null,token__12719));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__12729 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__12730 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__12729);
var token__12731 = (a__12730[0]);
var ns__12732 = (a__12730[1]);
var name__12733 = (a__12730[2]);
if(cljs.core.truth_((function (){var or__3824__auto____12735 = (function (){var and__3822__auto____12734 = !((void 0 === ns__12732));
if(and__3822__auto____12734)
{return (ns__12732.substring((ns__12732.length - 2),ns__12732.length) === ":/");
} else
{return and__3822__auto____12734;
}
})();
if(cljs.core.truth_(or__3824__auto____12735))
{return or__3824__auto____12735;
} else
{var or__3824__auto____12736 = ((name__12733[(name__12733.length - 1)]) === ":");
if(or__3824__auto____12736)
{return or__3824__auto____12736;
} else
{return !((token__12731.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__12731);
} else
{if((function (){var and__3822__auto____12737 = !((ns__12732 == null));
if(and__3822__auto____12737)
{return (ns__12732.length > 0);
} else
{return and__3822__auto____12737;
}
})())
{return cljs.core.keyword.call(null,ns__12732.substring(0,ns__12732.indexOf("/")),name__12733);
} else
{return cljs.core.keyword.call(null,token__12731);
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
var m__12743 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__12743))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__12744 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__12745__12746 = o__12744;
if(G__12745__12746)
{if((function (){var or__3824__auto____12747 = (G__12745__12746.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____12747)
{return or__3824__auto____12747;
} else
{return G__12745__12746.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__12745__12746.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__12745__12746);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__12745__12746);
}
})())
{return cljs.core.with_meta.call(null,o__12744,cljs.core.merge.call(null,cljs.core.meta.call(null,o__12744),m__12743));
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
var ch__12751 = cljs.reader.read_char.call(null,reader);
if((ch__12751 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__12751))
{{
var G__12754 = reader;
var G__12755 = eof_is_error;
var G__12756 = sentinel;
var G__12757 = is_recursive;
reader = G__12754;
eof_is_error = G__12755;
sentinel = G__12756;
is_recursive = G__12757;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__12751))
{{
var G__12758 = cljs.reader.read_comment.call(null,reader,ch__12751);
var G__12759 = eof_is_error;
var G__12760 = sentinel;
var G__12761 = is_recursive;
reader = G__12758;
eof_is_error = G__12759;
sentinel = G__12760;
is_recursive = G__12761;
continue;
}
} else
{if("\uFDD0'else")
{var f__12752 = cljs.reader.macros.call(null,ch__12751);
var res__12753 = (cljs.core.truth_(f__12752)?f__12752.call(null,reader,ch__12751):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__12751))?cljs.reader.read_number.call(null,reader,ch__12751):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__12751):null)));
if((res__12753 === reader))
{{
var G__12762 = reader;
var G__12763 = eof_is_error;
var G__12764 = sentinel;
var G__12765 = is_recursive;
reader = G__12762;
eof_is_error = G__12763;
sentinel = G__12764;
is_recursive = G__12765;
continue;
}
} else
{return res__12753;
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
var r__12767 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__12767,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__12769 = (new goog.string.StringBuffer(s));
while(true){
if((b__12769.getLength() < width))
{{
var G__12770 = b__12769.append("0");
b__12769 = G__12770;
continue;
}
} else
{return b__12769.toString();
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
var and__3822__auto____12773 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____12773))
{var or__3824__auto____12774 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____12774))
{return or__3824__auto____12774;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____12773;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__12779 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__12780 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__12780:dim_norm__12779),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__12781 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__12783 = (function (low,n,high,msg){
if((function (){var and__3822__auto____12782 = (low <= n);
if(and__3822__auto____12782)
{return (n <= high);
} else
{return and__3822__auto____12782;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____12784 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__12781,ts)));
if(cljs.core.truth_(temp__3974__auto____12784))
{var vec__12785__12788 = temp__3974__auto____12784;
var vec__12786__12789 = cljs.core.nth.call(null,vec__12785__12788,0,null);
var ___12790 = cljs.core.nth.call(null,vec__12786__12789,0,null);
var years__12791 = cljs.core.nth.call(null,vec__12786__12789,1,null);
var months__12792 = cljs.core.nth.call(null,vec__12786__12789,2,null);
var days__12793 = cljs.core.nth.call(null,vec__12786__12789,3,null);
var hours__12794 = cljs.core.nth.call(null,vec__12786__12789,4,null);
var minutes__12795 = cljs.core.nth.call(null,vec__12786__12789,5,null);
var seconds__12796 = cljs.core.nth.call(null,vec__12786__12789,6,null);
var milliseconds__12797 = cljs.core.nth.call(null,vec__12786__12789,7,null);
var vec__12787__12798 = cljs.core.nth.call(null,vec__12785__12788,1,null);
var ___12799 = cljs.core.nth.call(null,vec__12787__12798,0,null);
var ___12800 = cljs.core.nth.call(null,vec__12787__12798,1,null);
var ___12801 = cljs.core.nth.call(null,vec__12787__12798,2,null);
var V__12802 = vec__12785__12788;
var vec__12803__12806 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__12778_SHARP_){
return parseInt(p1__12778_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__12776_SHARP_,p2__12775_SHARP_){
return cljs.core.update_in.call(null,p2__12775_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__12776_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__12777_SHARP_){
if(cljs.core._EQ_.call(null,p1__12777_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__12802));
var vec__12804__12807 = cljs.core.nth.call(null,vec__12803__12806,0,null);
var ___12808 = cljs.core.nth.call(null,vec__12804__12807,0,null);
var y__12809 = cljs.core.nth.call(null,vec__12804__12807,1,null);
var mo__12810 = cljs.core.nth.call(null,vec__12804__12807,2,null);
var d__12811 = cljs.core.nth.call(null,vec__12804__12807,3,null);
var h__12812 = cljs.core.nth.call(null,vec__12804__12807,4,null);
var m__12813 = cljs.core.nth.call(null,vec__12804__12807,5,null);
var s__12814 = cljs.core.nth.call(null,vec__12804__12807,6,null);
var ms__12815 = cljs.core.nth.call(null,vec__12804__12807,7,null);
var vec__12805__12816 = cljs.core.nth.call(null,vec__12803__12806,1,null);
var offset_sign__12817 = cljs.core.nth.call(null,vec__12805__12816,0,null);
var offset_hours__12818 = cljs.core.nth.call(null,vec__12805__12816,1,null);
var offset_minutes__12819 = cljs.core.nth.call(null,vec__12805__12816,2,null);
var offset__12820 = (offset_sign__12817 * ((offset_hours__12818 * 60) + offset_minutes__12819));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__12791))?1970:y__12809),((cljs.core.not.call(null,months__12792))?1:check__12783.call(null,1,mo__12810,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__12793))?1:check__12783.call(null,1,d__12811,cljs.reader.days_in_month.call(null,mo__12810,cljs.reader.leap_year_QMARK_.call(null,y__12809)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__12794))?0:check__12783.call(null,0,h__12812,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__12795))?0:check__12783.call(null,0,m__12813,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__12796))?0:check__12783.call(null,0,s__12814,((cljs.core._EQ_.call(null,m__12813,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__12797))?0:check__12783.call(null,0,ms__12815,999,"timestamp millisecond field must be in range 0..999")),offset__12820], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____12832 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____12832))
{var vec__12833__12834 = temp__3971__auto____12832;
var years__12835 = cljs.core.nth.call(null,vec__12833__12834,0,null);
var months__12836 = cljs.core.nth.call(null,vec__12833__12834,1,null);
var days__12837 = cljs.core.nth.call(null,vec__12833__12834,2,null);
var hours__12838 = cljs.core.nth.call(null,vec__12833__12834,3,null);
var minutes__12839 = cljs.core.nth.call(null,vec__12833__12834,4,null);
var seconds__12840 = cljs.core.nth.call(null,vec__12833__12834,5,null);
var ms__12841 = cljs.core.nth.call(null,vec__12833__12834,6,null);
var offset__12842 = cljs.core.nth.call(null,vec__12833__12834,7,null);
return (new Date((Date.UTC(years__12835,(months__12836 - 1),days__12837,hours__12838,minutes__12839,seconds__12840,ms__12841) - ((offset__12842 * 60) * 1000))));
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
var tag__12846 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____12847 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__12846),null);
if(cljs.core.truth_(temp__3971__auto____12847))
{var pfn__12848 = temp__3971__auto____12847;
return pfn__12848.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__12846)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__12851 = cljs.core.name.call(null,tag);
var old_parser__12852 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__12851,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__12851,f);
return old_parser__12852;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__12855 = cljs.core.name.call(null,tag);
var old_parser__12856 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__12855,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__12855);
return old_parser__12856;
});
