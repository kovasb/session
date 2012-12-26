goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3937__auto____12581 = reader;
if(and__3937__auto____12581)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3937__auto____12581;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__2396__auto____12582 = (((reader == null))?null:reader);
return (function (){var or__3939__auto____12583 = (cljs.reader.read_char[goog.typeOf(x__2396__auto____12582)]);
if(or__3939__auto____12583)
{return or__3939__auto____12583;
} else
{var or__3939__auto____12584 = (cljs.reader.read_char["_"]);
if(or__3939__auto____12584)
{return or__3939__auto____12584;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3937__auto____12589 = reader;
if(and__3937__auto____12589)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3937__auto____12589;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__2396__auto____12590 = (((reader == null))?null:reader);
return (function (){var or__3939__auto____12591 = (cljs.reader.unread[goog.typeOf(x__2396__auto____12590)]);
if(or__3939__auto____12591)
{return or__3939__auto____12591;
} else
{var or__3939__auto____12592 = (cljs.reader.unread["_"]);
if(or__3939__auto____12592)
{return or__3939__auto____12592;
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
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__12593 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__12593.buffer_atom)))
{var idx__12594 = cljs.core.deref.call(null,this__12593.index_atom);
cljs.core.swap_BANG_.call(null,this__12593.index_atom,cljs.core.inc);
return (this__12593.s[idx__12594]);
} else
{var buf__12595 = cljs.core.deref.call(null,this__12593.buffer_atom);
cljs.core.swap_BANG_.call(null,this__12593.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__12595);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__12596 = this;
return cljs.core.swap_BANG_.call(null,this__12596.buffer_atom,(function (p1__12576_SHARP_){
return cljs.core.cons.call(null,ch,p1__12576_SHARP_);
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
var or__3939__auto____12598 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3939__auto____12598))
{return or__3939__auto____12598;
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
var or__3939__auto____12603 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3939__auto____12603)
{return or__3939__auto____12603;
} else
{var and__3937__auto____12605 = (function (){var or__3939__auto____12604 = ("+" === initch);
if(or__3939__auto____12604)
{return or__3939__auto____12604;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3937__auto____12605))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__12606 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__12606);
return next_ch__12606;
})());
} else
{return and__3937__auto____12605;
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
reader_error.cljs$lang$applyTo = (function (arglist__12607){
var rdr = cljs.core.first(arglist__12607);
var msg = cljs.core.rest(arglist__12607);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3937__auto____12611 = !((ch === "#"));
if(and__3937__auto____12611)
{var and__3937__auto____12612 = !((ch === "'"));
if(and__3937__auto____12612)
{var and__3937__auto____12613 = !((ch === ":"));
if(and__3937__auto____12613)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3937__auto____12613;
}
} else
{return and__3937__auto____12612;
}
} else
{return and__3937__auto____12611;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__12618 = (new goog.string.StringBuffer(initch));
var ch__12619 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3939__auto____12620 = (ch__12619 == null);
if(or__3939__auto____12620)
{return or__3939__auto____12620;
} else
{var or__3939__auto____12621 = cljs.reader.whitespace_QMARK_.call(null,ch__12619);
if(or__3939__auto____12621)
{return or__3939__auto____12621;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__12619);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__12619);
return sb__12618.toString();
} else
{{
var G__12622 = (function (){sb__12618.append(ch__12619);
return sb__12618;
})();
var G__12623 = cljs.reader.read_char.call(null,rdr);
sb__12618 = G__12622;
ch__12619 = G__12623;
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
var ch__12627 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3939__auto____12628 = (ch__12627 === "n");
if(or__3939__auto____12628)
{return or__3939__auto____12628;
} else
{var or__3939__auto____12629 = (ch__12627 === "r");
if(or__3939__auto____12629)
{return or__3939__auto____12629;
} else
{return (ch__12627 == null);
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
var matches__12631 = re.exec(s);
if((matches__12631 == null))
{return null;
} else
{if((matches__12631.length === 1))
{return (matches__12631[0]);
} else
{return matches__12631;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__12639 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__12640 = (groups__12639[2]);
if(!((function (){var or__3939__auto____12641 = (group3__12640 == null);
if(or__3939__auto____12641)
{return or__3939__auto____12641;
} else
{return (group3__12640.length < 1);
}
})()))
{return 0;
} else
{var negate__12642 = ((("-" === (groups__12639[1])))?-1:1);
var a__12643 = (cljs.core.truth_((groups__12639[3]))?[(groups__12639[3]),10]:(cljs.core.truth_((groups__12639[4]))?[(groups__12639[4]),16]:(cljs.core.truth_((groups__12639[5]))?[(groups__12639[5]),8]:(cljs.core.truth_((groups__12639[7]))?[(groups__12639[7]),parseInt((groups__12639[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__12644 = (a__12643[0]);
var radix__12645 = (a__12643[1]);
if((n__12644 == null))
{return null;
} else
{return (negate__12642 * parseInt(n__12644,radix__12645));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__12649 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__12650 = (groups__12649[1]);
var denominator__12651 = (groups__12649[2]);
return (parseInt(numinator__12650) / parseInt(denominator__12651));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__12654 = re.exec(s);
if((function (){var and__3937__auto____12655 = !((matches__12654 == null));
if(and__3937__auto____12655)
{return ((matches__12654[0]) === s);
} else
{return and__3937__auto____12655;
}
})())
{if((matches__12654.length === 1))
{return (matches__12654[0]);
} else
{return matches__12654;
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
var code__12657 = parseInt(code_str,16);
return String.fromCharCode(code__12657);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__12660 = cljs.reader.read_char.call(null,reader);
var mapresult__12661 = cljs.reader.escape_char_map.call(null,ch__12660);
if(cljs.core.truth_(mapresult__12661))
{return mapresult__12661;
} else
{if((ch__12660 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__12660,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__12660 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__12660,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__12660))
{return String.fromCharCode(ch__12660);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__12660);
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
var ch__12663 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__12663)))
{{
var G__12664 = cljs.reader.read_char.call(null,rdr);
ch__12663 = G__12664;
continue;
}
} else
{return ch__12663;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__12671 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__12672 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__12672))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__12672))
{return cljs.core.persistent_BANG_.call(null,a__12671);
} else
{var temp__4086__auto____12673 = cljs.reader.macros.call(null,ch__12672);
if(cljs.core.truth_(temp__4086__auto____12673))
{var macrofn__12674 = temp__4086__auto____12673;
var mret__12675 = macrofn__12674.call(null,rdr,ch__12672);
{
var G__12677 = (((mret__12675 === rdr))?a__12671:cljs.core.conj_BANG_.call(null,a__12671,mret__12675));
a__12671 = G__12677;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__12672);
var o__12676 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__12678 = (((o__12676 === rdr))?a__12671:cljs.core.conj_BANG_.call(null,a__12671,o__12676));
a__12671 = G__12678;
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
var ch__12683 = cljs.reader.read_char.call(null,rdr);
var dm__12684 = cljs.reader.dispatch_macros.call(null,ch__12683);
if(cljs.core.truth_(dm__12684))
{return dm__12684.call(null,rdr,_);
} else
{var temp__4086__auto____12685 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__12683);
if(cljs.core.truth_(temp__4086__auto____12685))
{var obj__12686 = temp__4086__auto____12685;
return obj__12686;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__12683);
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
var l__12688 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__12688)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__12688);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__12695 = (new goog.string.StringBuffer(initch));
var ch__12696 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3939__auto____12697 = (ch__12696 == null);
if(or__3939__auto____12697)
{return or__3939__auto____12697;
} else
{var or__3939__auto____12698 = cljs.reader.whitespace_QMARK_.call(null,ch__12696);
if(or__3939__auto____12698)
{return or__3939__auto____12698;
} else
{return cljs.reader.macros.call(null,ch__12696);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__12696);
var s__12699 = buffer__12695.toString();
var or__3939__auto____12700 = cljs.reader.match_number.call(null,s__12699);
if(cljs.core.truth_(or__3939__auto____12700))
{return or__3939__auto____12700;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__12699,"]");
}
} else
{{
var G__12701 = (function (){buffer__12695.append(ch__12696);
return buffer__12695;
})();
var G__12702 = cljs.reader.read_char.call(null,reader);
buffer__12695 = G__12701;
ch__12696 = G__12702;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__12705 = (new goog.string.StringBuffer());
var ch__12706 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__12706 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__12706))
{{
var G__12707 = (function (){buffer__12705.append(cljs.reader.escape_char.call(null,buffer__12705,reader));
return buffer__12705;
})();
var G__12708 = cljs.reader.read_char.call(null,reader);
buffer__12705 = G__12707;
ch__12706 = G__12708;
continue;
}
} else
{if(("\"" === ch__12706))
{return buffer__12705.toString();
} else
{if("\uFDD0'default")
{{
var G__12709 = (function (){buffer__12705.append(ch__12706);
return buffer__12705;
})();
var G__12710 = cljs.reader.read_char.call(null,reader);
buffer__12705 = G__12709;
ch__12706 = G__12710;
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
var token__12712 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__12712,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__12712,0,token__12712.indexOf("/")),cljs.core.subs.call(null,token__12712,(token__12712.indexOf("/") + 1),token__12712.length));
} else
{return cljs.reader.special_symbols.call(null,token__12712,cljs.core.symbol.call(null,token__12712));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__12722 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__12723 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__12722);
var token__12724 = (a__12723[0]);
var ns__12725 = (a__12723[1]);
var name__12726 = (a__12723[2]);
if(cljs.core.truth_((function (){var or__3939__auto____12728 = (function (){var and__3937__auto____12727 = !((void 0 === ns__12725));
if(and__3937__auto____12727)
{return (ns__12725.substring((ns__12725.length - 2),ns__12725.length) === ":/");
} else
{return and__3937__auto____12727;
}
})();
if(cljs.core.truth_(or__3939__auto____12728))
{return or__3939__auto____12728;
} else
{var or__3939__auto____12729 = ((name__12726[(name__12726.length - 1)]) === ":");
if(or__3939__auto____12729)
{return or__3939__auto____12729;
} else
{return !((token__12724.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__12724);
} else
{if((function (){var and__3937__auto____12730 = !((ns__12725 == null));
if(and__3937__auto____12730)
{return (ns__12725.length > 0);
} else
{return and__3937__auto____12730;
}
})())
{return cljs.core.keyword.call(null,ns__12725.substring(0,ns__12725.indexOf("/")),name__12726);
} else
{return cljs.core.keyword.call(null,token__12724);
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
var m__12736 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__12736))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__12737 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__12738__12739 = o__12737;
if(G__12738__12739)
{if((function (){var or__3939__auto____12740 = (G__12738__12739.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3939__auto____12740)
{return or__3939__auto____12740;
} else
{return G__12738__12739.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__12738__12739.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__12738__12739);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__12738__12739);
}
})())
{return cljs.core.with_meta.call(null,o__12737,cljs.core.merge.call(null,cljs.core.meta.call(null,o__12737),m__12736));
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
var ch__12744 = cljs.reader.read_char.call(null,reader);
if((ch__12744 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__12744))
{{
var G__12747 = reader;
var G__12748 = eof_is_error;
var G__12749 = sentinel;
var G__12750 = is_recursive;
reader = G__12747;
eof_is_error = G__12748;
sentinel = G__12749;
is_recursive = G__12750;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__12744))
{{
var G__12751 = cljs.reader.read_comment.call(null,reader,ch__12744);
var G__12752 = eof_is_error;
var G__12753 = sentinel;
var G__12754 = is_recursive;
reader = G__12751;
eof_is_error = G__12752;
sentinel = G__12753;
is_recursive = G__12754;
continue;
}
} else
{if("\uFDD0'else")
{var f__12745 = cljs.reader.macros.call(null,ch__12744);
var res__12746 = (cljs.core.truth_(f__12745)?f__12745.call(null,reader,ch__12744):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__12744))?cljs.reader.read_number.call(null,reader,ch__12744):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__12744):null)));
if((res__12746 === reader))
{{
var G__12755 = reader;
var G__12756 = eof_is_error;
var G__12757 = sentinel;
var G__12758 = is_recursive;
reader = G__12755;
eof_is_error = G__12756;
sentinel = G__12757;
is_recursive = G__12758;
continue;
}
} else
{return res__12746;
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
var r__12760 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__12760,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__12762 = (new goog.string.StringBuffer(s));
while(true){
if((b__12762.getLength() < width))
{{
var G__12763 = b__12762.append("0");
b__12762 = G__12763;
continue;
}
} else
{return b__12762.toString();
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
var and__3937__auto____12766 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3937__auto____12766))
{var or__3939__auto____12767 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3939__auto____12767))
{return or__3939__auto____12767;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3937__auto____12766;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__12772 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__12773 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__12773:dim_norm__12772),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__12774 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__12776 = (function (low,n,high,msg){
if((function (){var and__3937__auto____12775 = (low <= n);
if(and__3937__auto____12775)
{return (n <= high);
} else
{return and__3937__auto____12775;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474,"\uFDD0'column",25))))].join('')));
}
return n;
});
return (function (ts){
var temp__4088__auto____12777 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__12774,ts)));
if(cljs.core.truth_(temp__4088__auto____12777))
{var vec__12778__12781 = temp__4088__auto____12777;
var vec__12779__12782 = cljs.core.nth.call(null,vec__12778__12781,0,null);
var ___12783 = cljs.core.nth.call(null,vec__12779__12782,0,null);
var years__12784 = cljs.core.nth.call(null,vec__12779__12782,1,null);
var months__12785 = cljs.core.nth.call(null,vec__12779__12782,2,null);
var days__12786 = cljs.core.nth.call(null,vec__12779__12782,3,null);
var hours__12787 = cljs.core.nth.call(null,vec__12779__12782,4,null);
var minutes__12788 = cljs.core.nth.call(null,vec__12779__12782,5,null);
var seconds__12789 = cljs.core.nth.call(null,vec__12779__12782,6,null);
var milliseconds__12790 = cljs.core.nth.call(null,vec__12779__12782,7,null);
var vec__12780__12791 = cljs.core.nth.call(null,vec__12778__12781,1,null);
var ___12792 = cljs.core.nth.call(null,vec__12780__12791,0,null);
var ___12793 = cljs.core.nth.call(null,vec__12780__12791,1,null);
var ___12794 = cljs.core.nth.call(null,vec__12780__12791,2,null);
var V__12795 = vec__12778__12781;
var vec__12796__12799 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__12771_SHARP_){
return parseInt(p1__12771_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__12769_SHARP_,p2__12768_SHARP_){
return cljs.core.update_in.call(null,p2__12768_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__12769_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__12770_SHARP_){
if(cljs.core._EQ_.call(null,p1__12770_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__12795));
var vec__12797__12800 = cljs.core.nth.call(null,vec__12796__12799,0,null);
var ___12801 = cljs.core.nth.call(null,vec__12797__12800,0,null);
var y__12802 = cljs.core.nth.call(null,vec__12797__12800,1,null);
var mo__12803 = cljs.core.nth.call(null,vec__12797__12800,2,null);
var d__12804 = cljs.core.nth.call(null,vec__12797__12800,3,null);
var h__12805 = cljs.core.nth.call(null,vec__12797__12800,4,null);
var m__12806 = cljs.core.nth.call(null,vec__12797__12800,5,null);
var s__12807 = cljs.core.nth.call(null,vec__12797__12800,6,null);
var ms__12808 = cljs.core.nth.call(null,vec__12797__12800,7,null);
var vec__12798__12809 = cljs.core.nth.call(null,vec__12796__12799,1,null);
var offset_sign__12810 = cljs.core.nth.call(null,vec__12798__12809,0,null);
var offset_hours__12811 = cljs.core.nth.call(null,vec__12798__12809,1,null);
var offset_minutes__12812 = cljs.core.nth.call(null,vec__12798__12809,2,null);
var offset__12813 = (offset_sign__12810 * ((offset_hours__12811 * 60) + offset_minutes__12812));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__12784))?1970:y__12802),((cljs.core.not.call(null,months__12785))?1:check__12776.call(null,1,mo__12803,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__12786))?1:check__12776.call(null,1,d__12804,cljs.reader.days_in_month.call(null,mo__12803,cljs.reader.leap_year_QMARK_.call(null,y__12802)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__12787))?0:check__12776.call(null,0,h__12805,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__12788))?0:check__12776.call(null,0,m__12806,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__12789))?0:check__12776.call(null,0,s__12807,((cljs.core._EQ_.call(null,m__12806,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__12790))?0:check__12776.call(null,0,ms__12808,999,"timestamp millisecond field must be in range 0..999")),offset__12813], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__4086__auto____12825 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__4086__auto____12825))
{var vec__12826__12827 = temp__4086__auto____12825;
var years__12828 = cljs.core.nth.call(null,vec__12826__12827,0,null);
var months__12829 = cljs.core.nth.call(null,vec__12826__12827,1,null);
var days__12830 = cljs.core.nth.call(null,vec__12826__12827,2,null);
var hours__12831 = cljs.core.nth.call(null,vec__12826__12827,3,null);
var minutes__12832 = cljs.core.nth.call(null,vec__12826__12827,4,null);
var seconds__12833 = cljs.core.nth.call(null,vec__12826__12827,5,null);
var ms__12834 = cljs.core.nth.call(null,vec__12826__12827,6,null);
var offset__12835 = cljs.core.nth.call(null,vec__12826__12827,7,null);
return (new Date((Date.UTC(years__12828,(months__12829 - 1),days__12830,hours__12831,minutes__12832,seconds__12833,ms__12834) - ((offset__12835 * 60) * 1000))));
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
var tag__12839 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__4086__auto____12840 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__12839),null);
if(cljs.core.truth_(temp__4086__auto____12840))
{var pfn__12841 = temp__4086__auto____12840;
return pfn__12841.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__12839)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__12844 = cljs.core.name.call(null,tag);
var old_parser__12845 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__12844,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__12844,f);
return old_parser__12845;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__12848 = cljs.core.name.call(null,tag);
var old_parser__12849 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__12848,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__12848);
return old_parser__12849;
});
