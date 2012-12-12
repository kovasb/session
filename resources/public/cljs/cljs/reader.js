goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3937__auto____12647 = reader;
if(and__3937__auto____12647)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3937__auto____12647;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__2390__auto____12648 = (((reader == null))?null:reader);
return (function (){var or__3939__auto____12649 = (cljs.reader.read_char[goog.typeOf(x__2390__auto____12648)]);
if(or__3939__auto____12649)
{return or__3939__auto____12649;
} else
{var or__3939__auto____12650 = (cljs.reader.read_char["_"]);
if(or__3939__auto____12650)
{return or__3939__auto____12650;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3937__auto____12655 = reader;
if(and__3937__auto____12655)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3937__auto____12655;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__2390__auto____12656 = (((reader == null))?null:reader);
return (function (){var or__3939__auto____12657 = (cljs.reader.unread[goog.typeOf(x__2390__auto____12656)]);
if(or__3939__auto____12657)
{return or__3939__auto____12657;
} else
{var or__3939__auto____12658 = (cljs.reader.unread["_"]);
if(or__3939__auto____12658)
{return or__3939__auto____12658;
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
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__12659 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__12659.buffer_atom)))
{var idx__12660 = cljs.core.deref.call(null,this__12659.index_atom);
cljs.core.swap_BANG_.call(null,this__12659.index_atom,cljs.core.inc);
return (this__12659.s[idx__12660]);
} else
{var buf__12661 = cljs.core.deref.call(null,this__12659.buffer_atom);
cljs.core.swap_BANG_.call(null,this__12659.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__12661);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__12662 = this;
return cljs.core.swap_BANG_.call(null,this__12662.buffer_atom,(function (p1__12642_SHARP_){
return cljs.core.cons.call(null,ch,p1__12642_SHARP_);
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
var or__3939__auto____12664 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3939__auto____12664))
{return or__3939__auto____12664;
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
var or__3939__auto____12669 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3939__auto____12669)
{return or__3939__auto____12669;
} else
{var and__3937__auto____12671 = (function (){var or__3939__auto____12670 = ("+" === initch);
if(or__3939__auto____12670)
{return or__3939__auto____12670;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3937__auto____12671))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__12672 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__12672);
return next_ch__12672;
})());
} else
{return and__3937__auto____12671;
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
reader_error.cljs$lang$applyTo = (function (arglist__12673){
var rdr = cljs.core.first(arglist__12673);
var msg = cljs.core.rest(arglist__12673);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3937__auto____12677 = !((ch === "#"));
if(and__3937__auto____12677)
{var and__3937__auto____12678 = !((ch === "'"));
if(and__3937__auto____12678)
{var and__3937__auto____12679 = !((ch === ":"));
if(and__3937__auto____12679)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3937__auto____12679;
}
} else
{return and__3937__auto____12678;
}
} else
{return and__3937__auto____12677;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__12684 = (new goog.string.StringBuffer(initch));
var ch__12685 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3939__auto____12686 = (ch__12685 == null);
if(or__3939__auto____12686)
{return or__3939__auto____12686;
} else
{var or__3939__auto____12687 = cljs.reader.whitespace_QMARK_.call(null,ch__12685);
if(or__3939__auto____12687)
{return or__3939__auto____12687;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__12685);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__12685);
return sb__12684.toString();
} else
{{
var G__12688 = (function (){sb__12684.append(ch__12685);
return sb__12684;
})();
var G__12689 = cljs.reader.read_char.call(null,rdr);
sb__12684 = G__12688;
ch__12685 = G__12689;
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
var ch__12693 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3939__auto____12694 = (ch__12693 === "n");
if(or__3939__auto____12694)
{return or__3939__auto____12694;
} else
{var or__3939__auto____12695 = (ch__12693 === "r");
if(or__3939__auto____12695)
{return or__3939__auto____12695;
} else
{return (ch__12693 == null);
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
var matches__12697 = re.exec(s);
if((matches__12697 == null))
{return null;
} else
{if((matches__12697.length === 1))
{return (matches__12697[0]);
} else
{return matches__12697;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__12705 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__12706 = (groups__12705[2]);
if(!((function (){var or__3939__auto____12707 = (group3__12706 == null);
if(or__3939__auto____12707)
{return or__3939__auto____12707;
} else
{return (group3__12706.length < 1);
}
})()))
{return 0;
} else
{var negate__12708 = ((("-" === (groups__12705[1])))?-1:1);
var a__12709 = (cljs.core.truth_((groups__12705[3]))?[(groups__12705[3]),10]:(cljs.core.truth_((groups__12705[4]))?[(groups__12705[4]),16]:(cljs.core.truth_((groups__12705[5]))?[(groups__12705[5]),8]:(cljs.core.truth_((groups__12705[7]))?[(groups__12705[7]),parseInt((groups__12705[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__12710 = (a__12709[0]);
var radix__12711 = (a__12709[1]);
if((n__12710 == null))
{return null;
} else
{return (negate__12708 * parseInt(n__12710,radix__12711));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__12715 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__12716 = (groups__12715[1]);
var denominator__12717 = (groups__12715[2]);
return (parseInt(numinator__12716) / parseInt(denominator__12717));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__12720 = re.exec(s);
if((function (){var and__3937__auto____12721 = !((matches__12720 == null));
if(and__3937__auto____12721)
{return ((matches__12720[0]) === s);
} else
{return and__3937__auto____12721;
}
})())
{if((matches__12720.length === 1))
{return (matches__12720[0]);
} else
{return matches__12720;
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
var code__12723 = parseInt(code_str,16);
return String.fromCharCode(code__12723);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__12726 = cljs.reader.read_char.call(null,reader);
var mapresult__12727 = cljs.reader.escape_char_map.call(null,ch__12726);
if(cljs.core.truth_(mapresult__12727))
{return mapresult__12727;
} else
{if((ch__12726 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__12726,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__12726 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__12726,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__12726))
{return String.fromCharCode(ch__12726);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__12726);
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
var ch__12729 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__12729)))
{{
var G__12730 = cljs.reader.read_char.call(null,rdr);
ch__12729 = G__12730;
continue;
}
} else
{return ch__12729;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__12737 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__12738 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__12738))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__12738))
{return cljs.core.persistent_BANG_.call(null,a__12737);
} else
{var temp__4086__auto____12739 = cljs.reader.macros.call(null,ch__12738);
if(cljs.core.truth_(temp__4086__auto____12739))
{var macrofn__12740 = temp__4086__auto____12739;
var mret__12741 = macrofn__12740.call(null,rdr,ch__12738);
{
var G__12743 = (((mret__12741 === rdr))?a__12737:cljs.core.conj_BANG_.call(null,a__12737,mret__12741));
a__12737 = G__12743;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__12738);
var o__12742 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__12744 = (((o__12742 === rdr))?a__12737:cljs.core.conj_BANG_.call(null,a__12737,o__12742));
a__12737 = G__12744;
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
var ch__12749 = cljs.reader.read_char.call(null,rdr);
var dm__12750 = cljs.reader.dispatch_macros.call(null,ch__12749);
if(cljs.core.truth_(dm__12750))
{return dm__12750.call(null,rdr,_);
} else
{var temp__4086__auto____12751 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__12749);
if(cljs.core.truth_(temp__4086__auto____12751))
{var obj__12752 = temp__4086__auto____12751;
return obj__12752;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__12749);
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
var l__12754 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__12754)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__12754);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__12761 = (new goog.string.StringBuffer(initch));
var ch__12762 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3939__auto____12763 = (ch__12762 == null);
if(or__3939__auto____12763)
{return or__3939__auto____12763;
} else
{var or__3939__auto____12764 = cljs.reader.whitespace_QMARK_.call(null,ch__12762);
if(or__3939__auto____12764)
{return or__3939__auto____12764;
} else
{return cljs.reader.macros.call(null,ch__12762);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__12762);
var s__12765 = buffer__12761.toString();
var or__3939__auto____12766 = cljs.reader.match_number.call(null,s__12765);
if(cljs.core.truth_(or__3939__auto____12766))
{return or__3939__auto____12766;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__12765,"]");
}
} else
{{
var G__12767 = (function (){buffer__12761.append(ch__12762);
return buffer__12761;
})();
var G__12768 = cljs.reader.read_char.call(null,reader);
buffer__12761 = G__12767;
ch__12762 = G__12768;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__12771 = (new goog.string.StringBuffer());
var ch__12772 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__12772 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__12772))
{{
var G__12773 = (function (){buffer__12771.append(cljs.reader.escape_char.call(null,buffer__12771,reader));
return buffer__12771;
})();
var G__12774 = cljs.reader.read_char.call(null,reader);
buffer__12771 = G__12773;
ch__12772 = G__12774;
continue;
}
} else
{if(("\"" === ch__12772))
{return buffer__12771.toString();
} else
{if("\uFDD0'default")
{{
var G__12775 = (function (){buffer__12771.append(ch__12772);
return buffer__12771;
})();
var G__12776 = cljs.reader.read_char.call(null,reader);
buffer__12771 = G__12775;
ch__12772 = G__12776;
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
var token__12778 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__12778,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__12778,0,token__12778.indexOf("/")),cljs.core.subs.call(null,token__12778,(token__12778.indexOf("/") + 1),token__12778.length));
} else
{return cljs.reader.special_symbols.call(null,token__12778,cljs.core.symbol.call(null,token__12778));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__12788 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__12789 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__12788);
var token__12790 = (a__12789[0]);
var ns__12791 = (a__12789[1]);
var name__12792 = (a__12789[2]);
if(cljs.core.truth_((function (){var or__3939__auto____12794 = (function (){var and__3937__auto____12793 = !((void 0 === ns__12791));
if(and__3937__auto____12793)
{return (ns__12791.substring((ns__12791.length - 2),ns__12791.length) === ":/");
} else
{return and__3937__auto____12793;
}
})();
if(cljs.core.truth_(or__3939__auto____12794))
{return or__3939__auto____12794;
} else
{var or__3939__auto____12795 = ((name__12792[(name__12792.length - 1)]) === ":");
if(or__3939__auto____12795)
{return or__3939__auto____12795;
} else
{return !((token__12790.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__12790);
} else
{if((function (){var and__3937__auto____12796 = !((ns__12791 == null));
if(and__3937__auto____12796)
{return (ns__12791.length > 0);
} else
{return and__3937__auto____12796;
}
})())
{return cljs.core.keyword.call(null,ns__12791.substring(0,ns__12791.indexOf("/")),name__12792);
} else
{return cljs.core.keyword.call(null,token__12790);
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
var m__12802 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__12802))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__12803 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__12804__12805 = o__12803;
if(G__12804__12805)
{if((function (){var or__3939__auto____12806 = (G__12804__12805.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3939__auto____12806)
{return or__3939__auto____12806;
} else
{return G__12804__12805.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__12804__12805.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__12804__12805);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__12804__12805);
}
})())
{return cljs.core.with_meta.call(null,o__12803,cljs.core.merge.call(null,cljs.core.meta.call(null,o__12803),m__12802));
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
var ch__12810 = cljs.reader.read_char.call(null,reader);
if((ch__12810 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__12810))
{{
var G__12813 = reader;
var G__12814 = eof_is_error;
var G__12815 = sentinel;
var G__12816 = is_recursive;
reader = G__12813;
eof_is_error = G__12814;
sentinel = G__12815;
is_recursive = G__12816;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__12810))
{{
var G__12817 = cljs.reader.read_comment.call(null,reader,ch__12810);
var G__12818 = eof_is_error;
var G__12819 = sentinel;
var G__12820 = is_recursive;
reader = G__12817;
eof_is_error = G__12818;
sentinel = G__12819;
is_recursive = G__12820;
continue;
}
} else
{if("\uFDD0'else")
{var f__12811 = cljs.reader.macros.call(null,ch__12810);
var res__12812 = (cljs.core.truth_(f__12811)?f__12811.call(null,reader,ch__12810):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__12810))?cljs.reader.read_number.call(null,reader,ch__12810):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__12810):null)));
if((res__12812 === reader))
{{
var G__12821 = reader;
var G__12822 = eof_is_error;
var G__12823 = sentinel;
var G__12824 = is_recursive;
reader = G__12821;
eof_is_error = G__12822;
sentinel = G__12823;
is_recursive = G__12824;
continue;
}
} else
{return res__12812;
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
var r__12826 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__12826,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__12828 = (new goog.string.StringBuffer(s));
while(true){
if((b__12828.getLength() < width))
{{
var G__12829 = b__12828.append("0");
b__12828 = G__12829;
continue;
}
} else
{return b__12828.toString();
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
var and__3937__auto____12832 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3937__auto____12832))
{var or__3939__auto____12833 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3939__auto____12833))
{return or__3939__auto____12833;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3937__auto____12832;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__12838 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__12839 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__12839:dim_norm__12838),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__12840 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__12842 = (function (low,n,high,msg){
if((function (){var and__3937__auto____12841 = (low <= n);
if(and__3937__auto____12841)
{return (n <= high);
} else
{return and__3937__auto____12841;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474,"\uFDD0'column",25))))].join('')));
}
return n;
});
return (function (ts){
var temp__4088__auto____12843 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__12840,ts)));
if(cljs.core.truth_(temp__4088__auto____12843))
{var vec__12844__12847 = temp__4088__auto____12843;
var vec__12845__12848 = cljs.core.nth.call(null,vec__12844__12847,0,null);
var ___12849 = cljs.core.nth.call(null,vec__12845__12848,0,null);
var years__12850 = cljs.core.nth.call(null,vec__12845__12848,1,null);
var months__12851 = cljs.core.nth.call(null,vec__12845__12848,2,null);
var days__12852 = cljs.core.nth.call(null,vec__12845__12848,3,null);
var hours__12853 = cljs.core.nth.call(null,vec__12845__12848,4,null);
var minutes__12854 = cljs.core.nth.call(null,vec__12845__12848,5,null);
var seconds__12855 = cljs.core.nth.call(null,vec__12845__12848,6,null);
var milliseconds__12856 = cljs.core.nth.call(null,vec__12845__12848,7,null);
var vec__12846__12857 = cljs.core.nth.call(null,vec__12844__12847,1,null);
var ___12858 = cljs.core.nth.call(null,vec__12846__12857,0,null);
var ___12859 = cljs.core.nth.call(null,vec__12846__12857,1,null);
var ___12860 = cljs.core.nth.call(null,vec__12846__12857,2,null);
var V__12861 = vec__12844__12847;
var vec__12862__12865 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__12837_SHARP_){
return parseInt(p1__12837_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__12835_SHARP_,p2__12834_SHARP_){
return cljs.core.update_in.call(null,p2__12834_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__12835_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__12836_SHARP_){
if(cljs.core._EQ_.call(null,p1__12836_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__12861));
var vec__12863__12866 = cljs.core.nth.call(null,vec__12862__12865,0,null);
var ___12867 = cljs.core.nth.call(null,vec__12863__12866,0,null);
var y__12868 = cljs.core.nth.call(null,vec__12863__12866,1,null);
var mo__12869 = cljs.core.nth.call(null,vec__12863__12866,2,null);
var d__12870 = cljs.core.nth.call(null,vec__12863__12866,3,null);
var h__12871 = cljs.core.nth.call(null,vec__12863__12866,4,null);
var m__12872 = cljs.core.nth.call(null,vec__12863__12866,5,null);
var s__12873 = cljs.core.nth.call(null,vec__12863__12866,6,null);
var ms__12874 = cljs.core.nth.call(null,vec__12863__12866,7,null);
var vec__12864__12875 = cljs.core.nth.call(null,vec__12862__12865,1,null);
var offset_sign__12876 = cljs.core.nth.call(null,vec__12864__12875,0,null);
var offset_hours__12877 = cljs.core.nth.call(null,vec__12864__12875,1,null);
var offset_minutes__12878 = cljs.core.nth.call(null,vec__12864__12875,2,null);
var offset__12879 = (offset_sign__12876 * ((offset_hours__12877 * 60) + offset_minutes__12878));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__12850))?1970:y__12868),((cljs.core.not.call(null,months__12851))?1:check__12842.call(null,1,mo__12869,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__12852))?1:check__12842.call(null,1,d__12870,cljs.reader.days_in_month.call(null,mo__12869,cljs.reader.leap_year_QMARK_.call(null,y__12868)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__12853))?0:check__12842.call(null,0,h__12871,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__12854))?0:check__12842.call(null,0,m__12872,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__12855))?0:check__12842.call(null,0,s__12873,((cljs.core._EQ_.call(null,m__12872,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__12856))?0:check__12842.call(null,0,ms__12874,999,"timestamp millisecond field must be in range 0..999")),offset__12879], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__4086__auto____12891 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__4086__auto____12891))
{var vec__12892__12893 = temp__4086__auto____12891;
var years__12894 = cljs.core.nth.call(null,vec__12892__12893,0,null);
var months__12895 = cljs.core.nth.call(null,vec__12892__12893,1,null);
var days__12896 = cljs.core.nth.call(null,vec__12892__12893,2,null);
var hours__12897 = cljs.core.nth.call(null,vec__12892__12893,3,null);
var minutes__12898 = cljs.core.nth.call(null,vec__12892__12893,4,null);
var seconds__12899 = cljs.core.nth.call(null,vec__12892__12893,5,null);
var ms__12900 = cljs.core.nth.call(null,vec__12892__12893,6,null);
var offset__12901 = cljs.core.nth.call(null,vec__12892__12893,7,null);
return (new Date((Date.UTC(years__12894,(months__12895 - 1),days__12896,hours__12897,minutes__12898,seconds__12899,ms__12900) - ((offset__12901 * 60) * 1000))));
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
var tag__12905 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__4086__auto____12906 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__12905),null);
if(cljs.core.truth_(temp__4086__auto____12906))
{var pfn__12907 = temp__4086__auto____12906;
return pfn__12907.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__12905)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__12910 = cljs.core.name.call(null,tag);
var old_parser__12911 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__12910,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__12910,f);
return old_parser__12911;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__12914 = cljs.core.name.call(null,tag);
var old_parser__12915 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__12914,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__12914);
return old_parser__12915;
});
