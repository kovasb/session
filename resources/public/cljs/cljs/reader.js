goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____12633 = reader;
if(and__3822__auto____12633)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____12633;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__2363__auto____12634 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____12635 = (cljs.reader.read_char[goog.typeOf(x__2363__auto____12634)]);
if(or__3824__auto____12635)
{return or__3824__auto____12635;
} else
{var or__3824__auto____12636 = (cljs.reader.read_char["_"]);
if(or__3824__auto____12636)
{return or__3824__auto____12636;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____12641 = reader;
if(and__3822__auto____12641)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____12641;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__2363__auto____12642 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____12643 = (cljs.reader.unread[goog.typeOf(x__2363__auto____12642)]);
if(or__3824__auto____12643)
{return or__3824__auto____12643;
} else
{var or__3824__auto____12644 = (cljs.reader.unread["_"]);
if(or__3824__auto____12644)
{return or__3824__auto____12644;
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
var this__12645 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__12645.buffer_atom)))
{var idx__12646 = cljs.core.deref.call(null,this__12645.index_atom);
cljs.core.swap_BANG_.call(null,this__12645.index_atom,cljs.core.inc);
return (this__12645.s[idx__12646]);
} else
{var buf__12647 = cljs.core.deref.call(null,this__12645.buffer_atom);
cljs.core.swap_BANG_.call(null,this__12645.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__12647);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__12648 = this;
return cljs.core.swap_BANG_.call(null,this__12648.buffer_atom,(function (p1__12628_SHARP_){
return cljs.core.cons.call(null,ch,p1__12628_SHARP_);
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
var or__3824__auto____12650 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____12650))
{return or__3824__auto____12650;
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
var or__3824__auto____12655 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____12655)
{return or__3824__auto____12655;
} else
{var and__3822__auto____12657 = (function (){var or__3824__auto____12656 = ("+" === initch);
if(or__3824__auto____12656)
{return or__3824__auto____12656;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____12657))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__12658 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__12658);
return next_ch__12658;
})());
} else
{return and__3822__auto____12657;
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
reader_error.cljs$lang$applyTo = (function (arglist__12659){
var rdr = cljs.core.first(arglist__12659);
var msg = cljs.core.rest(arglist__12659);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____12663 = !((ch === "#"));
if(and__3822__auto____12663)
{var and__3822__auto____12664 = !((ch === "'"));
if(and__3822__auto____12664)
{var and__3822__auto____12665 = !((ch === ":"));
if(and__3822__auto____12665)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____12665;
}
} else
{return and__3822__auto____12664;
}
} else
{return and__3822__auto____12663;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__12670 = (new goog.string.StringBuffer(initch));
var ch__12671 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____12672 = (ch__12671 == null);
if(or__3824__auto____12672)
{return or__3824__auto____12672;
} else
{var or__3824__auto____12673 = cljs.reader.whitespace_QMARK_.call(null,ch__12671);
if(or__3824__auto____12673)
{return or__3824__auto____12673;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__12671);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__12671);
return sb__12670.toString();
} else
{{
var G__12674 = (function (){sb__12670.append(ch__12671);
return sb__12670;
})();
var G__12675 = cljs.reader.read_char.call(null,rdr);
sb__12670 = G__12674;
ch__12671 = G__12675;
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
var ch__12679 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____12680 = (ch__12679 === "n");
if(or__3824__auto____12680)
{return or__3824__auto____12680;
} else
{var or__3824__auto____12681 = (ch__12679 === "r");
if(or__3824__auto____12681)
{return or__3824__auto____12681;
} else
{return (ch__12679 == null);
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
var matches__12683 = re.exec(s);
if((matches__12683 == null))
{return null;
} else
{if((matches__12683.length === 1))
{return (matches__12683[0]);
} else
{return matches__12683;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__12691 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__12692 = (groups__12691[2]);
if(!((function (){var or__3824__auto____12693 = (group3__12692 == null);
if(or__3824__auto____12693)
{return or__3824__auto____12693;
} else
{return (group3__12692.length < 1);
}
})()))
{return 0;
} else
{var negate__12694 = ((("-" === (groups__12691[1])))?-1:1);
var a__12695 = (cljs.core.truth_((groups__12691[3]))?[(groups__12691[3]),10]:(cljs.core.truth_((groups__12691[4]))?[(groups__12691[4]),16]:(cljs.core.truth_((groups__12691[5]))?[(groups__12691[5]),8]:(cljs.core.truth_((groups__12691[7]))?[(groups__12691[7]),parseInt((groups__12691[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__12696 = (a__12695[0]);
var radix__12697 = (a__12695[1]);
if((n__12696 == null))
{return null;
} else
{return (negate__12694 * parseInt(n__12696,radix__12697));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__12701 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__12702 = (groups__12701[1]);
var denominator__12703 = (groups__12701[2]);
return (parseInt(numinator__12702) / parseInt(denominator__12703));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__12706 = re.exec(s);
if((function (){var and__3822__auto____12707 = !((matches__12706 == null));
if(and__3822__auto____12707)
{return ((matches__12706[0]) === s);
} else
{return and__3822__auto____12707;
}
})())
{if((matches__12706.length === 1))
{return (matches__12706[0]);
} else
{return matches__12706;
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
var code__12709 = parseInt(code_str,16);
return String.fromCharCode(code__12709);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__12712 = cljs.reader.read_char.call(null,reader);
var mapresult__12713 = cljs.reader.escape_char_map.call(null,ch__12712);
if(cljs.core.truth_(mapresult__12713))
{return mapresult__12713;
} else
{if((ch__12712 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__12712,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__12712 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__12712,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__12712))
{return String.fromCharCode(ch__12712);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__12712);
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
var ch__12715 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__12715)))
{{
var G__12716 = cljs.reader.read_char.call(null,rdr);
ch__12715 = G__12716;
continue;
}
} else
{return ch__12715;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__12723 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__12724 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__12724))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__12724))
{return cljs.core.persistent_BANG_.call(null,a__12723);
} else
{var temp__3971__auto____12725 = cljs.reader.macros.call(null,ch__12724);
if(cljs.core.truth_(temp__3971__auto____12725))
{var macrofn__12726 = temp__3971__auto____12725;
var mret__12727 = macrofn__12726.call(null,rdr,ch__12724);
{
var G__12729 = (((mret__12727 === rdr))?a__12723:cljs.core.conj_BANG_.call(null,a__12723,mret__12727));
a__12723 = G__12729;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__12724);
var o__12728 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__12730 = (((o__12728 === rdr))?a__12723:cljs.core.conj_BANG_.call(null,a__12723,o__12728));
a__12723 = G__12730;
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
var ch__12735 = cljs.reader.read_char.call(null,rdr);
var dm__12736 = cljs.reader.dispatch_macros.call(null,ch__12735);
if(cljs.core.truth_(dm__12736))
{return dm__12736.call(null,rdr,_);
} else
{var temp__3971__auto____12737 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__12735);
if(cljs.core.truth_(temp__3971__auto____12737))
{var obj__12738 = temp__3971__auto____12737;
return obj__12738;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__12735);
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
var l__12740 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__12740)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__12740);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__12747 = (new goog.string.StringBuffer(initch));
var ch__12748 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____12749 = (ch__12748 == null);
if(or__3824__auto____12749)
{return or__3824__auto____12749;
} else
{var or__3824__auto____12750 = cljs.reader.whitespace_QMARK_.call(null,ch__12748);
if(or__3824__auto____12750)
{return or__3824__auto____12750;
} else
{return cljs.reader.macros.call(null,ch__12748);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__12748);
var s__12751 = buffer__12747.toString();
var or__3824__auto____12752 = cljs.reader.match_number.call(null,s__12751);
if(cljs.core.truth_(or__3824__auto____12752))
{return or__3824__auto____12752;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__12751,"]");
}
} else
{{
var G__12753 = (function (){buffer__12747.append(ch__12748);
return buffer__12747;
})();
var G__12754 = cljs.reader.read_char.call(null,reader);
buffer__12747 = G__12753;
ch__12748 = G__12754;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__12757 = (new goog.string.StringBuffer());
var ch__12758 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__12758 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__12758))
{{
var G__12759 = (function (){buffer__12757.append(cljs.reader.escape_char.call(null,buffer__12757,reader));
return buffer__12757;
})();
var G__12760 = cljs.reader.read_char.call(null,reader);
buffer__12757 = G__12759;
ch__12758 = G__12760;
continue;
}
} else
{if(("\"" === ch__12758))
{return buffer__12757.toString();
} else
{if("\uFDD0'default")
{{
var G__12761 = (function (){buffer__12757.append(ch__12758);
return buffer__12757;
})();
var G__12762 = cljs.reader.read_char.call(null,reader);
buffer__12757 = G__12761;
ch__12758 = G__12762;
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
var token__12764 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__12764,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__12764,0,token__12764.indexOf("/")),cljs.core.subs.call(null,token__12764,(token__12764.indexOf("/") + 1),token__12764.length));
} else
{return cljs.reader.special_symbols.call(null,token__12764,cljs.core.symbol.call(null,token__12764));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__12774 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__12775 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__12774);
var token__12776 = (a__12775[0]);
var ns__12777 = (a__12775[1]);
var name__12778 = (a__12775[2]);
if(cljs.core.truth_((function (){var or__3824__auto____12780 = (function (){var and__3822__auto____12779 = !((void 0 === ns__12777));
if(and__3822__auto____12779)
{return (ns__12777.substring((ns__12777.length - 2),ns__12777.length) === ":/");
} else
{return and__3822__auto____12779;
}
})();
if(cljs.core.truth_(or__3824__auto____12780))
{return or__3824__auto____12780;
} else
{var or__3824__auto____12781 = ((name__12778[(name__12778.length - 1)]) === ":");
if(or__3824__auto____12781)
{return or__3824__auto____12781;
} else
{return !((token__12776.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__12776);
} else
{if((function (){var and__3822__auto____12782 = !((ns__12777 == null));
if(and__3822__auto____12782)
{return (ns__12777.length > 0);
} else
{return and__3822__auto____12782;
}
})())
{return cljs.core.keyword.call(null,ns__12777.substring(0,ns__12777.indexOf("/")),name__12778);
} else
{return cljs.core.keyword.call(null,token__12776);
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
var m__12788 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__12788))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__12789 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__12790__12791 = o__12789;
if(G__12790__12791)
{if((function (){var or__3824__auto____12792 = (G__12790__12791.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____12792)
{return or__3824__auto____12792;
} else
{return G__12790__12791.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__12790__12791.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__12790__12791);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__12790__12791);
}
})())
{return cljs.core.with_meta.call(null,o__12789,cljs.core.merge.call(null,cljs.core.meta.call(null,o__12789),m__12788));
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
var ch__12796 = cljs.reader.read_char.call(null,reader);
if((ch__12796 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__12796))
{{
var G__12799 = reader;
var G__12800 = eof_is_error;
var G__12801 = sentinel;
var G__12802 = is_recursive;
reader = G__12799;
eof_is_error = G__12800;
sentinel = G__12801;
is_recursive = G__12802;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__12796))
{{
var G__12803 = cljs.reader.read_comment.call(null,reader,ch__12796);
var G__12804 = eof_is_error;
var G__12805 = sentinel;
var G__12806 = is_recursive;
reader = G__12803;
eof_is_error = G__12804;
sentinel = G__12805;
is_recursive = G__12806;
continue;
}
} else
{if("\uFDD0'else")
{var f__12797 = cljs.reader.macros.call(null,ch__12796);
var res__12798 = (cljs.core.truth_(f__12797)?f__12797.call(null,reader,ch__12796):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__12796))?cljs.reader.read_number.call(null,reader,ch__12796):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__12796):null)));
if((res__12798 === reader))
{{
var G__12807 = reader;
var G__12808 = eof_is_error;
var G__12809 = sentinel;
var G__12810 = is_recursive;
reader = G__12807;
eof_is_error = G__12808;
sentinel = G__12809;
is_recursive = G__12810;
continue;
}
} else
{return res__12798;
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
var r__12812 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__12812,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__12814 = (new goog.string.StringBuffer(s));
while(true){
if((b__12814.getLength() < width))
{{
var G__12815 = b__12814.append("0");
b__12814 = G__12815;
continue;
}
} else
{return b__12814.toString();
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
var and__3822__auto____12818 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____12818))
{var or__3824__auto____12819 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____12819))
{return or__3824__auto____12819;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____12818;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__12824 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__12825 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__12825:dim_norm__12824),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__12826 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__12828 = (function (low,n,high,msg){
if((function (){var and__3822__auto____12827 = (low <= n);
if(and__3822__auto____12827)
{return (n <= high);
} else
{return and__3822__auto____12827;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____12829 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__12826,ts)));
if(cljs.core.truth_(temp__3974__auto____12829))
{var vec__12830__12833 = temp__3974__auto____12829;
var vec__12831__12834 = cljs.core.nth.call(null,vec__12830__12833,0,null);
var ___12835 = cljs.core.nth.call(null,vec__12831__12834,0,null);
var years__12836 = cljs.core.nth.call(null,vec__12831__12834,1,null);
var months__12837 = cljs.core.nth.call(null,vec__12831__12834,2,null);
var days__12838 = cljs.core.nth.call(null,vec__12831__12834,3,null);
var hours__12839 = cljs.core.nth.call(null,vec__12831__12834,4,null);
var minutes__12840 = cljs.core.nth.call(null,vec__12831__12834,5,null);
var seconds__12841 = cljs.core.nth.call(null,vec__12831__12834,6,null);
var milliseconds__12842 = cljs.core.nth.call(null,vec__12831__12834,7,null);
var vec__12832__12843 = cljs.core.nth.call(null,vec__12830__12833,1,null);
var ___12844 = cljs.core.nth.call(null,vec__12832__12843,0,null);
var ___12845 = cljs.core.nth.call(null,vec__12832__12843,1,null);
var ___12846 = cljs.core.nth.call(null,vec__12832__12843,2,null);
var V__12847 = vec__12830__12833;
var vec__12848__12851 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__12823_SHARP_){
return parseInt(p1__12823_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__12821_SHARP_,p2__12820_SHARP_){
return cljs.core.update_in.call(null,p2__12820_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__12821_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__12822_SHARP_){
if(cljs.core._EQ_.call(null,p1__12822_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__12847));
var vec__12849__12852 = cljs.core.nth.call(null,vec__12848__12851,0,null);
var ___12853 = cljs.core.nth.call(null,vec__12849__12852,0,null);
var y__12854 = cljs.core.nth.call(null,vec__12849__12852,1,null);
var mo__12855 = cljs.core.nth.call(null,vec__12849__12852,2,null);
var d__12856 = cljs.core.nth.call(null,vec__12849__12852,3,null);
var h__12857 = cljs.core.nth.call(null,vec__12849__12852,4,null);
var m__12858 = cljs.core.nth.call(null,vec__12849__12852,5,null);
var s__12859 = cljs.core.nth.call(null,vec__12849__12852,6,null);
var ms__12860 = cljs.core.nth.call(null,vec__12849__12852,7,null);
var vec__12850__12861 = cljs.core.nth.call(null,vec__12848__12851,1,null);
var offset_sign__12862 = cljs.core.nth.call(null,vec__12850__12861,0,null);
var offset_hours__12863 = cljs.core.nth.call(null,vec__12850__12861,1,null);
var offset_minutes__12864 = cljs.core.nth.call(null,vec__12850__12861,2,null);
var offset__12865 = (offset_sign__12862 * ((offset_hours__12863 * 60) + offset_minutes__12864));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__12836))?1970:y__12854),((cljs.core.not.call(null,months__12837))?1:check__12828.call(null,1,mo__12855,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__12838))?1:check__12828.call(null,1,d__12856,cljs.reader.days_in_month.call(null,mo__12855,cljs.reader.leap_year_QMARK_.call(null,y__12854)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__12839))?0:check__12828.call(null,0,h__12857,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__12840))?0:check__12828.call(null,0,m__12858,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__12841))?0:check__12828.call(null,0,s__12859,((cljs.core._EQ_.call(null,m__12858,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__12842))?0:check__12828.call(null,0,ms__12860,999,"timestamp millisecond field must be in range 0..999")),offset__12865], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____12877 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____12877))
{var vec__12878__12879 = temp__3971__auto____12877;
var years__12880 = cljs.core.nth.call(null,vec__12878__12879,0,null);
var months__12881 = cljs.core.nth.call(null,vec__12878__12879,1,null);
var days__12882 = cljs.core.nth.call(null,vec__12878__12879,2,null);
var hours__12883 = cljs.core.nth.call(null,vec__12878__12879,3,null);
var minutes__12884 = cljs.core.nth.call(null,vec__12878__12879,4,null);
var seconds__12885 = cljs.core.nth.call(null,vec__12878__12879,5,null);
var ms__12886 = cljs.core.nth.call(null,vec__12878__12879,6,null);
var offset__12887 = cljs.core.nth.call(null,vec__12878__12879,7,null);
return (new Date((Date.UTC(years__12880,(months__12881 - 1),days__12882,hours__12883,minutes__12884,seconds__12885,ms__12886) - ((offset__12887 * 60) * 1000))));
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
var tag__12891 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____12892 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__12891),null);
if(cljs.core.truth_(temp__3971__auto____12892))
{var pfn__12893 = temp__3971__auto____12892;
return pfn__12893.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__12891)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__12896 = cljs.core.name.call(null,tag);
var old_parser__12897 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__12896,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__12896,f);
return old_parser__12897;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__12900 = cljs.core.name.call(null,tag);
var old_parser__12901 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__12900,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__12900);
return old_parser__12901;
});
