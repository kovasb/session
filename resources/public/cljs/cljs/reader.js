goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3937__auto____12630 = reader;
if(and__3937__auto____12630)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3937__auto____12630;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__2396__auto____12631 = (((reader == null))?null:reader);
return (function (){var or__3939__auto____12632 = (cljs.reader.read_char[goog.typeOf(x__2396__auto____12631)]);
if(or__3939__auto____12632)
{return or__3939__auto____12632;
} else
{var or__3939__auto____12633 = (cljs.reader.read_char["_"]);
if(or__3939__auto____12633)
{return or__3939__auto____12633;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3937__auto____12638 = reader;
if(and__3937__auto____12638)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3937__auto____12638;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__2396__auto____12639 = (((reader == null))?null:reader);
return (function (){var or__3939__auto____12640 = (cljs.reader.unread[goog.typeOf(x__2396__auto____12639)]);
if(or__3939__auto____12640)
{return or__3939__auto____12640;
} else
{var or__3939__auto____12641 = (cljs.reader.unread["_"]);
if(or__3939__auto____12641)
{return or__3939__auto____12641;
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
var this__12642 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__12642.buffer_atom)))
{var idx__12643 = cljs.core.deref.call(null,this__12642.index_atom);
cljs.core.swap_BANG_.call(null,this__12642.index_atom,cljs.core.inc);
return (this__12642.s[idx__12643]);
} else
{var buf__12644 = cljs.core.deref.call(null,this__12642.buffer_atom);
cljs.core.swap_BANG_.call(null,this__12642.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__12644);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__12645 = this;
return cljs.core.swap_BANG_.call(null,this__12645.buffer_atom,(function (p1__12625_SHARP_){
return cljs.core.cons.call(null,ch,p1__12625_SHARP_);
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
var or__3939__auto____12647 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3939__auto____12647))
{return or__3939__auto____12647;
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
var or__3939__auto____12652 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3939__auto____12652)
{return or__3939__auto____12652;
} else
{var and__3937__auto____12654 = (function (){var or__3939__auto____12653 = ("+" === initch);
if(or__3939__auto____12653)
{return or__3939__auto____12653;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3937__auto____12654))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__12655 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__12655);
return next_ch__12655;
})());
} else
{return and__3937__auto____12654;
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
reader_error.cljs$lang$applyTo = (function (arglist__12656){
var rdr = cljs.core.first(arglist__12656);
var msg = cljs.core.rest(arglist__12656);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3937__auto____12660 = !((ch === "#"));
if(and__3937__auto____12660)
{var and__3937__auto____12661 = !((ch === "'"));
if(and__3937__auto____12661)
{var and__3937__auto____12662 = !((ch === ":"));
if(and__3937__auto____12662)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3937__auto____12662;
}
} else
{return and__3937__auto____12661;
}
} else
{return and__3937__auto____12660;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__12667 = (new goog.string.StringBuffer(initch));
var ch__12668 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3939__auto____12669 = (ch__12668 == null);
if(or__3939__auto____12669)
{return or__3939__auto____12669;
} else
{var or__3939__auto____12670 = cljs.reader.whitespace_QMARK_.call(null,ch__12668);
if(or__3939__auto____12670)
{return or__3939__auto____12670;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__12668);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__12668);
return sb__12667.toString();
} else
{{
var G__12671 = (function (){sb__12667.append(ch__12668);
return sb__12667;
})();
var G__12672 = cljs.reader.read_char.call(null,rdr);
sb__12667 = G__12671;
ch__12668 = G__12672;
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
var ch__12676 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3939__auto____12677 = (ch__12676 === "n");
if(or__3939__auto____12677)
{return or__3939__auto____12677;
} else
{var or__3939__auto____12678 = (ch__12676 === "r");
if(or__3939__auto____12678)
{return or__3939__auto____12678;
} else
{return (ch__12676 == null);
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
var matches__12680 = re.exec(s);
if((matches__12680 == null))
{return null;
} else
{if((matches__12680.length === 1))
{return (matches__12680[0]);
} else
{return matches__12680;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__12688 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__12689 = (groups__12688[2]);
if(!((function (){var or__3939__auto____12690 = (group3__12689 == null);
if(or__3939__auto____12690)
{return or__3939__auto____12690;
} else
{return (group3__12689.length < 1);
}
})()))
{return 0;
} else
{var negate__12691 = ((("-" === (groups__12688[1])))?-1:1);
var a__12692 = (cljs.core.truth_((groups__12688[3]))?[(groups__12688[3]),10]:(cljs.core.truth_((groups__12688[4]))?[(groups__12688[4]),16]:(cljs.core.truth_((groups__12688[5]))?[(groups__12688[5]),8]:(cljs.core.truth_((groups__12688[7]))?[(groups__12688[7]),parseInt((groups__12688[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__12693 = (a__12692[0]);
var radix__12694 = (a__12692[1]);
if((n__12693 == null))
{return null;
} else
{return (negate__12691 * parseInt(n__12693,radix__12694));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__12698 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__12699 = (groups__12698[1]);
var denominator__12700 = (groups__12698[2]);
return (parseInt(numinator__12699) / parseInt(denominator__12700));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__12703 = re.exec(s);
if((function (){var and__3937__auto____12704 = !((matches__12703 == null));
if(and__3937__auto____12704)
{return ((matches__12703[0]) === s);
} else
{return and__3937__auto____12704;
}
})())
{if((matches__12703.length === 1))
{return (matches__12703[0]);
} else
{return matches__12703;
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
var code__12706 = parseInt(code_str,16);
return String.fromCharCode(code__12706);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__12709 = cljs.reader.read_char.call(null,reader);
var mapresult__12710 = cljs.reader.escape_char_map.call(null,ch__12709);
if(cljs.core.truth_(mapresult__12710))
{return mapresult__12710;
} else
{if((ch__12709 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__12709,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__12709 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__12709,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__12709))
{return String.fromCharCode(ch__12709);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__12709);
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
var ch__12712 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__12712)))
{{
var G__12713 = cljs.reader.read_char.call(null,rdr);
ch__12712 = G__12713;
continue;
}
} else
{return ch__12712;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__12720 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__12721 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__12721))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__12721))
{return cljs.core.persistent_BANG_.call(null,a__12720);
} else
{var temp__4086__auto____12722 = cljs.reader.macros.call(null,ch__12721);
if(cljs.core.truth_(temp__4086__auto____12722))
{var macrofn__12723 = temp__4086__auto____12722;
var mret__12724 = macrofn__12723.call(null,rdr,ch__12721);
{
var G__12726 = (((mret__12724 === rdr))?a__12720:cljs.core.conj_BANG_.call(null,a__12720,mret__12724));
a__12720 = G__12726;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__12721);
var o__12725 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__12727 = (((o__12725 === rdr))?a__12720:cljs.core.conj_BANG_.call(null,a__12720,o__12725));
a__12720 = G__12727;
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
var ch__12732 = cljs.reader.read_char.call(null,rdr);
var dm__12733 = cljs.reader.dispatch_macros.call(null,ch__12732);
if(cljs.core.truth_(dm__12733))
{return dm__12733.call(null,rdr,_);
} else
{var temp__4086__auto____12734 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__12732);
if(cljs.core.truth_(temp__4086__auto____12734))
{var obj__12735 = temp__4086__auto____12734;
return obj__12735;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__12732);
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
var l__12737 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__12737)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__12737);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__12744 = (new goog.string.StringBuffer(initch));
var ch__12745 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3939__auto____12746 = (ch__12745 == null);
if(or__3939__auto____12746)
{return or__3939__auto____12746;
} else
{var or__3939__auto____12747 = cljs.reader.whitespace_QMARK_.call(null,ch__12745);
if(or__3939__auto____12747)
{return or__3939__auto____12747;
} else
{return cljs.reader.macros.call(null,ch__12745);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__12745);
var s__12748 = buffer__12744.toString();
var or__3939__auto____12749 = cljs.reader.match_number.call(null,s__12748);
if(cljs.core.truth_(or__3939__auto____12749))
{return or__3939__auto____12749;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__12748,"]");
}
} else
{{
var G__12750 = (function (){buffer__12744.append(ch__12745);
return buffer__12744;
})();
var G__12751 = cljs.reader.read_char.call(null,reader);
buffer__12744 = G__12750;
ch__12745 = G__12751;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__12754 = (new goog.string.StringBuffer());
var ch__12755 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__12755 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__12755))
{{
var G__12756 = (function (){buffer__12754.append(cljs.reader.escape_char.call(null,buffer__12754,reader));
return buffer__12754;
})();
var G__12757 = cljs.reader.read_char.call(null,reader);
buffer__12754 = G__12756;
ch__12755 = G__12757;
continue;
}
} else
{if(("\"" === ch__12755))
{return buffer__12754.toString();
} else
{if("\uFDD0'default")
{{
var G__12758 = (function (){buffer__12754.append(ch__12755);
return buffer__12754;
})();
var G__12759 = cljs.reader.read_char.call(null,reader);
buffer__12754 = G__12758;
ch__12755 = G__12759;
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
var token__12761 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__12761,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__12761,0,token__12761.indexOf("/")),cljs.core.subs.call(null,token__12761,(token__12761.indexOf("/") + 1),token__12761.length));
} else
{return cljs.reader.special_symbols.call(null,token__12761,cljs.core.symbol.call(null,token__12761));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__12771 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__12772 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__12771);
var token__12773 = (a__12772[0]);
var ns__12774 = (a__12772[1]);
var name__12775 = (a__12772[2]);
if(cljs.core.truth_((function (){var or__3939__auto____12777 = (function (){var and__3937__auto____12776 = !((void 0 === ns__12774));
if(and__3937__auto____12776)
{return (ns__12774.substring((ns__12774.length - 2),ns__12774.length) === ":/");
} else
{return and__3937__auto____12776;
}
})();
if(cljs.core.truth_(or__3939__auto____12777))
{return or__3939__auto____12777;
} else
{var or__3939__auto____12778 = ((name__12775[(name__12775.length - 1)]) === ":");
if(or__3939__auto____12778)
{return or__3939__auto____12778;
} else
{return !((token__12773.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__12773);
} else
{if((function (){var and__3937__auto____12779 = !((ns__12774 == null));
if(and__3937__auto____12779)
{return (ns__12774.length > 0);
} else
{return and__3937__auto____12779;
}
})())
{return cljs.core.keyword.call(null,ns__12774.substring(0,ns__12774.indexOf("/")),name__12775);
} else
{return cljs.core.keyword.call(null,token__12773);
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
var m__12785 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__12785))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__12786 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__12787__12788 = o__12786;
if(G__12787__12788)
{if((function (){var or__3939__auto____12789 = (G__12787__12788.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3939__auto____12789)
{return or__3939__auto____12789;
} else
{return G__12787__12788.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__12787__12788.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__12787__12788);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__12787__12788);
}
})())
{return cljs.core.with_meta.call(null,o__12786,cljs.core.merge.call(null,cljs.core.meta.call(null,o__12786),m__12785));
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
var ch__12793 = cljs.reader.read_char.call(null,reader);
if((ch__12793 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__12793))
{{
var G__12796 = reader;
var G__12797 = eof_is_error;
var G__12798 = sentinel;
var G__12799 = is_recursive;
reader = G__12796;
eof_is_error = G__12797;
sentinel = G__12798;
is_recursive = G__12799;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__12793))
{{
var G__12800 = cljs.reader.read_comment.call(null,reader,ch__12793);
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
{if("\uFDD0'else")
{var f__12794 = cljs.reader.macros.call(null,ch__12793);
var res__12795 = (cljs.core.truth_(f__12794)?f__12794.call(null,reader,ch__12793):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__12793))?cljs.reader.read_number.call(null,reader,ch__12793):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__12793):null)));
if((res__12795 === reader))
{{
var G__12804 = reader;
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
{return res__12795;
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
var r__12809 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__12809,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__12811 = (new goog.string.StringBuffer(s));
while(true){
if((b__12811.getLength() < width))
{{
var G__12812 = b__12811.append("0");
b__12811 = G__12812;
continue;
}
} else
{return b__12811.toString();
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
var and__3937__auto____12815 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3937__auto____12815))
{var or__3939__auto____12816 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3939__auto____12816))
{return or__3939__auto____12816;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3937__auto____12815;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__12821 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__12822 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__12822:dim_norm__12821),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__12823 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__12825 = (function (low,n,high,msg){
if((function (){var and__3937__auto____12824 = (low <= n);
if(and__3937__auto____12824)
{return (n <= high);
} else
{return and__3937__auto____12824;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474,"\uFDD0'column",25))))].join('')));
}
return n;
});
return (function (ts){
var temp__4088__auto____12826 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__12823,ts)));
if(cljs.core.truth_(temp__4088__auto____12826))
{var vec__12827__12830 = temp__4088__auto____12826;
var vec__12828__12831 = cljs.core.nth.call(null,vec__12827__12830,0,null);
var ___12832 = cljs.core.nth.call(null,vec__12828__12831,0,null);
var years__12833 = cljs.core.nth.call(null,vec__12828__12831,1,null);
var months__12834 = cljs.core.nth.call(null,vec__12828__12831,2,null);
var days__12835 = cljs.core.nth.call(null,vec__12828__12831,3,null);
var hours__12836 = cljs.core.nth.call(null,vec__12828__12831,4,null);
var minutes__12837 = cljs.core.nth.call(null,vec__12828__12831,5,null);
var seconds__12838 = cljs.core.nth.call(null,vec__12828__12831,6,null);
var milliseconds__12839 = cljs.core.nth.call(null,vec__12828__12831,7,null);
var vec__12829__12840 = cljs.core.nth.call(null,vec__12827__12830,1,null);
var ___12841 = cljs.core.nth.call(null,vec__12829__12840,0,null);
var ___12842 = cljs.core.nth.call(null,vec__12829__12840,1,null);
var ___12843 = cljs.core.nth.call(null,vec__12829__12840,2,null);
var V__12844 = vec__12827__12830;
var vec__12845__12848 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__12820_SHARP_){
return parseInt(p1__12820_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__12818_SHARP_,p2__12817_SHARP_){
return cljs.core.update_in.call(null,p2__12817_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__12818_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__12819_SHARP_){
if(cljs.core._EQ_.call(null,p1__12819_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__12844));
var vec__12846__12849 = cljs.core.nth.call(null,vec__12845__12848,0,null);
var ___12850 = cljs.core.nth.call(null,vec__12846__12849,0,null);
var y__12851 = cljs.core.nth.call(null,vec__12846__12849,1,null);
var mo__12852 = cljs.core.nth.call(null,vec__12846__12849,2,null);
var d__12853 = cljs.core.nth.call(null,vec__12846__12849,3,null);
var h__12854 = cljs.core.nth.call(null,vec__12846__12849,4,null);
var m__12855 = cljs.core.nth.call(null,vec__12846__12849,5,null);
var s__12856 = cljs.core.nth.call(null,vec__12846__12849,6,null);
var ms__12857 = cljs.core.nth.call(null,vec__12846__12849,7,null);
var vec__12847__12858 = cljs.core.nth.call(null,vec__12845__12848,1,null);
var offset_sign__12859 = cljs.core.nth.call(null,vec__12847__12858,0,null);
var offset_hours__12860 = cljs.core.nth.call(null,vec__12847__12858,1,null);
var offset_minutes__12861 = cljs.core.nth.call(null,vec__12847__12858,2,null);
var offset__12862 = (offset_sign__12859 * ((offset_hours__12860 * 60) + offset_minutes__12861));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__12833))?1970:y__12851),((cljs.core.not.call(null,months__12834))?1:check__12825.call(null,1,mo__12852,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__12835))?1:check__12825.call(null,1,d__12853,cljs.reader.days_in_month.call(null,mo__12852,cljs.reader.leap_year_QMARK_.call(null,y__12851)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__12836))?0:check__12825.call(null,0,h__12854,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__12837))?0:check__12825.call(null,0,m__12855,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__12838))?0:check__12825.call(null,0,s__12856,((cljs.core._EQ_.call(null,m__12855,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__12839))?0:check__12825.call(null,0,ms__12857,999,"timestamp millisecond field must be in range 0..999")),offset__12862], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__4086__auto____12874 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__4086__auto____12874))
{var vec__12875__12876 = temp__4086__auto____12874;
var years__12877 = cljs.core.nth.call(null,vec__12875__12876,0,null);
var months__12878 = cljs.core.nth.call(null,vec__12875__12876,1,null);
var days__12879 = cljs.core.nth.call(null,vec__12875__12876,2,null);
var hours__12880 = cljs.core.nth.call(null,vec__12875__12876,3,null);
var minutes__12881 = cljs.core.nth.call(null,vec__12875__12876,4,null);
var seconds__12882 = cljs.core.nth.call(null,vec__12875__12876,5,null);
var ms__12883 = cljs.core.nth.call(null,vec__12875__12876,6,null);
var offset__12884 = cljs.core.nth.call(null,vec__12875__12876,7,null);
return (new Date((Date.UTC(years__12877,(months__12878 - 1),days__12879,hours__12880,minutes__12881,seconds__12882,ms__12883) - ((offset__12884 * 60) * 1000))));
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
var tag__12888 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__4086__auto____12889 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__12888),null);
if(cljs.core.truth_(temp__4086__auto____12889))
{var pfn__12890 = temp__4086__auto____12889;
return pfn__12890.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__12888)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__12893 = cljs.core.name.call(null,tag);
var old_parser__12894 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__12893,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__12893,f);
return old_parser__12894;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__12897 = cljs.core.name.call(null,tag);
var old_parser__12898 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__12897,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__12897);
return old_parser__12898;
});
