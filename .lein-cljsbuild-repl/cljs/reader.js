goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3822__auto____3456 = reader;

if(cljs.core.truth_(and__3822__auto____3456))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3822__auto____3456;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3824__auto____3457 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3824__auto____3457))
{return or__3824__auto____3457;
} else
{var or__3824__auto____3458 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3824__auto____3458))
{return or__3824__auto____3458;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3822__auto____3459 = reader;

if(cljs.core.truth_(and__3822__auto____3459))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3822__auto____3459;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3824__auto____3460 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3824__auto____3460))
{return or__3824__auto____3460;
} else
{var or__3824__auto____3461 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3824__auto____3461))
{return or__3824__auto____3461;
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
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__3462 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__3462.buffer_atom))))
{var idx__3463 = cljs.core.deref.call(null,this__3462.index_atom);

cljs.core.swap_BANG_.call(null,this__3462.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__3462.s,idx__3463);
} else
{var buf__3464 = cljs.core.deref.call(null,this__3462.buffer_atom);

cljs.core.swap_BANG_.call(null,this__3462.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__3464);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__3465 = this;
return cljs.core.swap_BANG_.call(null,this__3465.buffer_atom,(function (p1__3455_SHARP_){
return cljs.core.cons.call(null,ch,p1__3455_SHARP_);
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
var or__3824__auto____3466 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3824__auto____3466))
{return or__3824__auto____3466;
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
var or__3824__auto____3467 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3824__auto____3467))
{return or__3824__auto____3467;
} else
{var and__3822__auto____3469 = (function (){var or__3824__auto____3468 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3824__auto____3468))
{return or__3824__auto____3468;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3822__auto____3469))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__3470 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__3470);
return next_ch__3470;
})());
} else
{return and__3822__auto____3469;
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
reader_error.cljs$lang$applyTo = (function (arglist__3471){
var rdr = cljs.core.first(arglist__3471);
var msg = cljs.core.rest(arglist__3471);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____3472 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3822__auto____3472))
{var and__3822__auto____3473 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3822__auto____3473))
{var and__3822__auto____3474 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3822__auto____3474))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3822__auto____3474;
}
} else
{return and__3822__auto____3473;
}
} else
{return and__3822__auto____3472;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__3475 = (new goog.string.StringBuffer(initch));
var ch__3476 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____3477 = (ch__3476 === null);

if(cljs.core.truth_(or__3824__auto____3477))
{return or__3824__auto____3477;
} else
{var or__3824__auto____3478 = cljs.reader.whitespace_QMARK_.call(null,ch__3476);

if(cljs.core.truth_(or__3824__auto____3478))
{return or__3824__auto____3478;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__3476);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__3476);
return sb__3475.toString();
} else
{{
var G__3479 = (function (){sb__3475.append(ch__3476);
return sb__3475;
})();
var G__3480 = cljs.reader.read_char.call(null,rdr);
sb__3475 = G__3479;
ch__3476 = G__3480;
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
var ch__3481 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3824__auto____3482 = cljs.core._EQ_.call(null,ch__3481,"n");

if(cljs.core.truth_(or__3824__auto____3482))
{return or__3824__auto____3482;
} else
{var or__3824__auto____3483 = cljs.core._EQ_.call(null,ch__3481,"r");

if(cljs.core.truth_(or__3824__auto____3483))
{return or__3824__auto____3483;
} else
{return (ch__3481 === null);
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
var groups__3484 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__3485 = cljs.core.nth.call(null,groups__3484,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3824__auto____3486 = (void 0 === group3__3485);

if(cljs.core.truth_(or__3824__auto____3486))
{return or__3824__auto____3486;
} else
{return (group3__3485.length < 1);
}
})())))
{return 0;
} else
{var negate__3488 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__3484,1)))?-1:1);
var vec__3487__3489 = (cljs.core.truth_(cljs.core.nth.call(null,groups__3484,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__3484,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3484,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__3484,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3484,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__3484,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3484,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__3484,7),parseInt.call(null,cljs.core.nth.call(null,groups__3484,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__3490 = cljs.core.nth.call(null,vec__3487__3489,0,null);
var radix__3491 = cljs.core.nth.call(null,vec__3487__3489,1,null);

if(cljs.core.truth_((n__3490 === null)))
{return null;
} else
{return (negate__3488 * parseInt.call(null,n__3490,radix__3491));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__3492 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__3493 = cljs.core.nth.call(null,groups__3492,1);
var denominator__3494 = cljs.core.nth.call(null,groups__3492,2);

return (parseInt.call(null,numinator__3493) / parseInt.call(null,denominator__3494));
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
var ch__3495 = cljs.reader.read_char.call(null,reader);
var mapresult__3496 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__3495);

if(cljs.core.truth_(mapresult__3496))
{return mapresult__3496;
} else
{if(cljs.core.truth_((function (){var or__3824__auto____3497 = cljs.core._EQ_.call(null,"u",ch__3495);

if(cljs.core.truth_(or__3824__auto____3497))
{return or__3824__auto____3497;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__3495);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__3495);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__3495);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__3498 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__3498)))
{{
var G__3499 = cljs.reader.read_char.call(null,rdr);
ch__3498 = G__3499;
continue;
}
} else
{return ch__3498;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__3500 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__3501 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__3501))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__3501)))
{return a__3500;
} else
{var temp__3971__auto____3502 = cljs.core.get.call(null,cljs.reader.macros,ch__3501);

if(cljs.core.truth_(temp__3971__auto____3502))
{var macrofn__3503 = temp__3971__auto____3502;

var mret__3504 = macrofn__3503.call(null,rdr,ch__3501);

{
var G__3506 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__3504,rdr))?a__3500:cljs.core.conj.call(null,a__3500,mret__3504));
a__3500 = G__3506;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__3501);
var o__3505 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__3507 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__3505,rdr))?a__3500:cljs.core.conj.call(null,a__3500,o__3505));
a__3500 = G__3507;
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
var ch__3508 = cljs.reader.read_char.call(null,rdr);
var dm__3509 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__3508);

if(cljs.core.truth_(dm__3509))
{return dm__3509.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__3508);
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
var l__3510 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__3510))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__3510);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__3511 = (new goog.string.StringBuffer(initch));
var ch__3512 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____3513 = (ch__3512 === null);

if(cljs.core.truth_(or__3824__auto____3513))
{return or__3824__auto____3513;
} else
{var or__3824__auto____3514 = cljs.reader.whitespace_QMARK_.call(null,ch__3512);

if(cljs.core.truth_(or__3824__auto____3514))
{return or__3824__auto____3514;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__3512);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__3512);
var s__3515 = buffer__3511.toString();

var or__3824__auto____3516 = cljs.reader.match_number.call(null,s__3515);

if(cljs.core.truth_(or__3824__auto____3516))
{return or__3824__auto____3516;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__3515,"]");
}
} else
{{
var G__3517 = (function (){buffer__3511.append(ch__3512);
return buffer__3511;
})();
var G__3518 = cljs.reader.read_char.call(null,reader);
buffer__3511 = G__3517;
ch__3512 = G__3518;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__3519 = (new goog.string.StringBuffer());
var ch__3520 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__3520 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__3520)))
{{
var G__3521 = (function (){buffer__3519.append(cljs.reader.escape_char.call(null,buffer__3519,reader));
return buffer__3519;
})();
var G__3522 = cljs.reader.read_char.call(null,reader);
buffer__3519 = G__3521;
ch__3520 = G__3522;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__3520)))
{return buffer__3519.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__3523 = (function (){buffer__3519.append(ch__3520);
return buffer__3519;
})();
var G__3524 = cljs.reader.read_char.call(null,reader);
buffer__3519 = G__3523;
ch__3520 = G__3524;
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
var token__3525 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__3525,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__3525,0,token__3525.indexOf("/")),cljs.core.subs.call(null,token__3525,(token__3525.indexOf("/") + 1),token__3525.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__3525,cljs.core.symbol.call(null,token__3525));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__3527 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__3526__3528 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__3527);
var token__3529 = cljs.core.nth.call(null,vec__3526__3528,0,null);
var ns__3530 = cljs.core.nth.call(null,vec__3526__3528,1,null);
var name__3531 = cljs.core.nth.call(null,vec__3526__3528,2,null);

if(cljs.core.truth_((function (){var or__3824__auto____3533 = (function (){var and__3822__auto____3532 = cljs.core.not.call(null,(void 0 === ns__3530));

if(cljs.core.truth_(and__3822__auto____3532))
{return (ns__3530.substring((ns__3530.length - 2),ns__3530.length) === ":/");
} else
{return and__3822__auto____3532;
}
})();

if(cljs.core.truth_(or__3824__auto____3533))
{return or__3824__auto____3533;
} else
{var or__3824__auto____3534 = ((name__3531[(name__3531.length - 1)]) === ":");

if(cljs.core.truth_(or__3824__auto____3534))
{return or__3824__auto____3534;
} else
{return cljs.core.not.call(null,(token__3529.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__3529);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__3530.substring(0,ns__3530.indexOf("/")),name__3531);
} else
{return cljs.core.keyword.call(null,token__3529);
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
var m__3535 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__3535)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__3536 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__359__auto____3537 = o__3536;

if(cljs.core.truth_((function (){var and__3822__auto____3538 = x__359__auto____3537;

if(cljs.core.truth_(and__3822__auto____3538))
{var and__3822__auto____3539 = x__359__auto____3537.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3822__auto____3539))
{return cljs.core.not.call(null,x__359__auto____3537.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3822__auto____3539;
}
} else
{return and__3822__auto____3538;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__359__auto____3537);
}
})()))
{return cljs.core.with_meta.call(null,o__3536,cljs.core.merge.call(null,cljs.core.meta.call(null,o__3536),m__3535));
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
var ch__3540 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__3540 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__3540)))
{{
var G__3542 = reader;
var G__3543 = eof_is_error;
var G__3544 = sentinel;
var G__3545 = is_recursive;
reader = G__3542;
eof_is_error = G__3543;
sentinel = G__3544;
is_recursive = G__3545;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__3540)))
{{
var G__3546 = cljs.reader.read_comment.call(null,reader,ch__3540);
var G__3547 = eof_is_error;
var G__3548 = sentinel;
var G__3549 = is_recursive;
reader = G__3546;
eof_is_error = G__3547;
sentinel = G__3548;
is_recursive = G__3549;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__3541 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__3540))?cljs.reader.macros.call(null,ch__3540).call(null,reader,ch__3540):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__3540))?cljs.reader.read_number.call(null,reader,ch__3540):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__3540):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__3541,reader)))
{{
var G__3550 = reader;
var G__3551 = eof_is_error;
var G__3552 = sentinel;
var G__3553 = is_recursive;
reader = G__3550;
eof_is_error = G__3551;
sentinel = G__3552;
is_recursive = G__3553;
continue;
}
} else
{return res__3541;
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
var r__3554 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__3554,true,null,false);
});
