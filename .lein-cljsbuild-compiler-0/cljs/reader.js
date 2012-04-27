goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3822__auto____5493 = reader;

if(cljs.core.truth_(and__3822__auto____5493))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3822__auto____5493;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3824__auto____5494 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3824__auto____5494))
{return or__3824__auto____5494;
} else
{var or__3824__auto____5495 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3824__auto____5495))
{return or__3824__auto____5495;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3822__auto____5496 = reader;

if(cljs.core.truth_(and__3822__auto____5496))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3822__auto____5496;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3824__auto____5497 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3824__auto____5497))
{return or__3824__auto____5497;
} else
{var or__3824__auto____5498 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3824__auto____5498))
{return or__3824__auto____5498;
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
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__5499 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__5499.buffer_atom))))
{var idx__5500 = cljs.core.deref.call(null,this__5499.index_atom);

cljs.core.swap_BANG_.call(null,this__5499.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__5499.s,idx__5500);
} else
{var buf__5501 = cljs.core.deref.call(null,this__5499.buffer_atom);

cljs.core.swap_BANG_.call(null,this__5499.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__5501);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__5502 = this;
return cljs.core.swap_BANG_.call(null,this__5502.buffer_atom,(function (p1__5492_SHARP_){
return cljs.core.cons.call(null,ch,p1__5492_SHARP_);
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
var or__3824__auto____5503 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3824__auto____5503))
{return or__3824__auto____5503;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3824__auto____5504 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3824__auto____5504))
{return or__3824__auto____5504;
} else
{var and__3822__auto____5506 = (function (){var or__3824__auto____5505 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3824__auto____5505))
{return or__3824__auto____5505;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3822__auto____5506))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__5507 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__5507);
return next_ch__5507;
})());
} else
{return and__3822__auto____5506;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__5508){
var rdr = cljs.core.first(arglist__5508);
var msg = cljs.core.rest(arglist__5508);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____5509 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3822__auto____5509))
{var and__3822__auto____5510 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3822__auto____5510))
{var and__3822__auto____5511 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3822__auto____5511))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3822__auto____5511;
}
} else
{return and__3822__auto____5510;
}
} else
{return and__3822__auto____5509;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__5512 = (new goog.string.StringBuffer(initch));
var ch__5513 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____5514 = (ch__5513 === null);

if(cljs.core.truth_(or__3824__auto____5514))
{return or__3824__auto____5514;
} else
{var or__3824__auto____5515 = cljs.reader.whitespace_QMARK_.call(null,ch__5513);

if(cljs.core.truth_(or__3824__auto____5515))
{return or__3824__auto____5515;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__5513);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__5513);
return sb__5512.toString();
} else
{{
var G__5516 = (function (){sb__5512.append(ch__5513);
return sb__5512;
})();
var G__5517 = cljs.reader.read_char.call(null,rdr);
sb__5512 = G__5516;
ch__5513 = G__5517;
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
var ch__5518 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3824__auto____5519 = cljs.core._EQ_.call(null,ch__5518,"n");

if(cljs.core.truth_(or__3824__auto____5519))
{return or__3824__auto____5519;
} else
{var or__3824__auto____5520 = cljs.core._EQ_.call(null,ch__5518,"r");

if(cljs.core.truth_(or__3824__auto____5520))
{return or__3824__auto____5520;
} else
{return (ch__5518 === null);
}
}
})()))
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
cljs.reader.match_int = (function match_int(s){
var groups__5521 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__5522 = cljs.core.nth.call(null,groups__5521,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3824__auto____5523 = (void 0 === group3__5522);

if(cljs.core.truth_(or__3824__auto____5523))
{return or__3824__auto____5523;
} else
{return (group3__5522.length < 1);
}
})())))
{return 0;
} else
{var negate__5525 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__5521,1)))?-1:1);
var vec__5524__5526 = (cljs.core.truth_(cljs.core.nth.call(null,groups__5521,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__5521,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__5521,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__5521,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__5521,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__5521,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__5521,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__5521,7),parseInt.call(null,cljs.core.nth.call(null,groups__5521,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__5527 = cljs.core.nth.call(null,vec__5524__5526,0,null);
var radix__5528 = cljs.core.nth.call(null,vec__5524__5526,1,null);

if(cljs.core.truth_((n__5527 === null)))
{return null;
} else
{return (negate__5525 * parseInt.call(null,n__5527,radix__5528));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__5529 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__5530 = cljs.core.nth.call(null,groups__5529,1);
var denominator__5531 = cljs.core.nth.call(null,groups__5529,2);

return (parseInt.call(null,numinator__5530) / parseInt.call(null,denominator__5531));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__5532 = cljs.reader.read_char.call(null,reader);
var mapresult__5533 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__5532);

if(cljs.core.truth_(mapresult__5533))
{return mapresult__5533;
} else
{if(cljs.core.truth_((function (){var or__3824__auto____5534 = cljs.core._EQ_.call(null,"u",ch__5532);

if(cljs.core.truth_(or__3824__auto____5534))
{return or__3824__auto____5534;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__5532);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__5532);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__5532);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__5535 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__5535)))
{{
var G__5536 = cljs.reader.read_char.call(null,rdr);
ch__5535 = G__5536;
continue;
}
} else
{return ch__5535;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__5537 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__5538 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__5538))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__5538)))
{return a__5537;
} else
{var temp__3971__auto____5539 = cljs.core.get.call(null,cljs.reader.macros,ch__5538);

if(cljs.core.truth_(temp__3971__auto____5539))
{var macrofn__5540 = temp__3971__auto____5539;

var mret__5541 = macrofn__5540.call(null,rdr,ch__5538);

{
var G__5543 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__5541,rdr))?a__5537:cljs.core.conj.call(null,a__5537,mret__5541));
a__5537 = G__5543;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__5538);
var o__5542 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__5544 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__5542,rdr))?a__5537:cljs.core.conj.call(null,a__5537,o__5542));
a__5537 = G__5544;
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
var ch__5545 = cljs.reader.read_char.call(null,rdr);
var dm__5546 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__5545);

if(cljs.core.truth_(dm__5546))
{return dm__5546.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__5545);
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
var l__5547 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__5547))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__5547);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__5548 = (new goog.string.StringBuffer(initch));
var ch__5549 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____5550 = (ch__5549 === null);

if(cljs.core.truth_(or__3824__auto____5550))
{return or__3824__auto____5550;
} else
{var or__3824__auto____5551 = cljs.reader.whitespace_QMARK_.call(null,ch__5549);

if(cljs.core.truth_(or__3824__auto____5551))
{return or__3824__auto____5551;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__5549);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__5549);
var s__5552 = buffer__5548.toString();

var or__3824__auto____5553 = cljs.reader.match_number.call(null,s__5552);

if(cljs.core.truth_(or__3824__auto____5553))
{return or__3824__auto____5553;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__5552,"]");
}
} else
{{
var G__5554 = (function (){buffer__5548.append(ch__5549);
return buffer__5548;
})();
var G__5555 = cljs.reader.read_char.call(null,reader);
buffer__5548 = G__5554;
ch__5549 = G__5555;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__5556 = (new goog.string.StringBuffer());
var ch__5557 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__5557 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__5557)))
{{
var G__5558 = (function (){buffer__5556.append(cljs.reader.escape_char.call(null,buffer__5556,reader));
return buffer__5556;
})();
var G__5559 = cljs.reader.read_char.call(null,reader);
buffer__5556 = G__5558;
ch__5557 = G__5559;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__5557)))
{return buffer__5556.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__5560 = (function (){buffer__5556.append(ch__5557);
return buffer__5556;
})();
var G__5561 = cljs.reader.read_char.call(null,reader);
buffer__5556 = G__5560;
ch__5557 = G__5561;
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
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__5562 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__5562,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__5562,0,token__5562.indexOf("/")),cljs.core.subs.call(null,token__5562,(token__5562.indexOf("/") + 1),token__5562.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__5562,cljs.core.symbol.call(null,token__5562));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__5564 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__5563__5565 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__5564);
var token__5566 = cljs.core.nth.call(null,vec__5563__5565,0,null);
var ns__5567 = cljs.core.nth.call(null,vec__5563__5565,1,null);
var name__5568 = cljs.core.nth.call(null,vec__5563__5565,2,null);

if(cljs.core.truth_((function (){var or__3824__auto____5570 = (function (){var and__3822__auto____5569 = cljs.core.not.call(null,(void 0 === ns__5567));

if(cljs.core.truth_(and__3822__auto____5569))
{return (ns__5567.substring((ns__5567.length - 2),ns__5567.length) === ":/");
} else
{return and__3822__auto____5569;
}
})();

if(cljs.core.truth_(or__3824__auto____5570))
{return or__3824__auto____5570;
} else
{var or__3824__auto____5571 = ((name__5568[(name__5568.length - 1)]) === ":");

if(cljs.core.truth_(or__3824__auto____5571))
{return or__3824__auto____5571;
} else
{return cljs.core.not.call(null,(token__5566.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__5566);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__5567.substring(0,ns__5567.indexOf("/")),name__5568);
} else
{return cljs.core.keyword.call(null,token__5566);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
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
var m__5572 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__5572)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__5573 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____5574 = o__5573;

if(cljs.core.truth_((function (){var and__3822__auto____5575 = x__451__auto____5574;

if(cljs.core.truth_(and__3822__auto____5575))
{var and__3822__auto____5576 = x__451__auto____5574.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3822__auto____5576))
{return cljs.core.not.call(null,x__451__auto____5574.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3822__auto____5576;
}
} else
{return and__3822__auto____5575;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____5574);
}
})()))
{return cljs.core.with_meta.call(null,o__5573,cljs.core.merge.call(null,cljs.core.meta.call(null,o__5573),m__5572));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"\uFDD1'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"\uFDD1'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__5577 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__5577 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__5577)))
{{
var G__5579 = reader;
var G__5580 = eof_is_error;
var G__5581 = sentinel;
var G__5582 = is_recursive;
reader = G__5579;
eof_is_error = G__5580;
sentinel = G__5581;
is_recursive = G__5582;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__5577)))
{{
var G__5583 = cljs.reader.read_comment.call(null,reader,ch__5577);
var G__5584 = eof_is_error;
var G__5585 = sentinel;
var G__5586 = is_recursive;
reader = G__5583;
eof_is_error = G__5584;
sentinel = G__5585;
is_recursive = G__5586;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__5578 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__5577))?cljs.reader.macros.call(null,ch__5577).call(null,reader,ch__5577):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__5577))?cljs.reader.read_number.call(null,reader,ch__5577):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__5577):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__5578,reader)))
{{
var G__5587 = reader;
var G__5588 = eof_is_error;
var G__5589 = sentinel;
var G__5590 = is_recursive;
reader = G__5587;
eof_is_error = G__5588;
sentinel = G__5589;
is_recursive = G__5590;
continue;
}
} else
{return res__5578;
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
var r__5591 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__5591,true,null,false);
});
