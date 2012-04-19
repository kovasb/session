goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3822__auto____3237 = reader;

if(cljs.core.truth_(and__3822__auto____3237))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3822__auto____3237;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3824__auto____3238 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3824__auto____3238))
{return or__3824__auto____3238;
} else
{var or__3824__auto____3239 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3824__auto____3239))
{return or__3824__auto____3239;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3822__auto____3240 = reader;

if(cljs.core.truth_(and__3822__auto____3240))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3822__auto____3240;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3824__auto____3241 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3824__auto____3241))
{return or__3824__auto____3241;
} else
{var or__3824__auto____3242 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3824__auto____3242))
{return or__3824__auto____3242;
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
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__3243 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__3243.buffer_atom))))
{var idx__3244 = cljs.core.deref.call(null,this__3243.index_atom);

cljs.core.swap_BANG_.call(null,this__3243.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__3243.s,idx__3244);
} else
{var buf__3245 = cljs.core.deref.call(null,this__3243.buffer_atom);

cljs.core.swap_BANG_.call(null,this__3243.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__3245);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__3246 = this;
return cljs.core.swap_BANG_.call(null,this__3246.buffer_atom,(function (p1__3236_SHARP_){
return cljs.core.cons.call(null,ch,p1__3236_SHARP_);
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
var or__3824__auto____3247 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3824__auto____3247))
{return or__3824__auto____3247;
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
var or__3824__auto____3248 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3824__auto____3248))
{return or__3824__auto____3248;
} else
{var and__3822__auto____3250 = (function (){var or__3824__auto____3249 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3824__auto____3249))
{return or__3824__auto____3249;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3822__auto____3250))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__3251 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__3251);
return next_ch__3251;
})());
} else
{return and__3822__auto____3250;
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
reader_error.cljs$lang$applyTo = (function (arglist__3252){
var rdr = cljs.core.first(arglist__3252);
var msg = cljs.core.rest(arglist__3252);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____3253 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3822__auto____3253))
{var and__3822__auto____3254 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3822__auto____3254))
{var and__3822__auto____3255 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3822__auto____3255))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3822__auto____3255;
}
} else
{return and__3822__auto____3254;
}
} else
{return and__3822__auto____3253;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__3256 = (new goog.string.StringBuffer(initch));
var ch__3257 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____3258 = cljs.core.nil_QMARK_.call(null,ch__3257);

if(cljs.core.truth_(or__3824__auto____3258))
{return or__3824__auto____3258;
} else
{var or__3824__auto____3259 = cljs.reader.whitespace_QMARK_.call(null,ch__3257);

if(cljs.core.truth_(or__3824__auto____3259))
{return or__3824__auto____3259;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__3257);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__3257);
return sb__3256.toString();
} else
{{
var G__3260 = (function (){sb__3256.append(ch__3257);
return sb__3256;
})();
var G__3261 = cljs.reader.read_char.call(null,rdr);
sb__3256 = G__3260;
ch__3257 = G__3261;
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
var ch__3262 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3824__auto____3263 = cljs.core._EQ_.call(null,ch__3262,"n");

if(cljs.core.truth_(or__3824__auto____3263))
{return or__3824__auto____3263;
} else
{var or__3824__auto____3264 = cljs.core._EQ_.call(null,ch__3262,"r");

if(cljs.core.truth_(or__3824__auto____3264))
{return or__3824__auto____3264;
} else
{return cljs.core.nil_QMARK_.call(null,ch__3262);
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
var groups__3265 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__3266 = cljs.core.nth.call(null,groups__3265,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3824__auto____3267 = (void 0 === group3__3266);

if(cljs.core.truth_(or__3824__auto____3267))
{return or__3824__auto____3267;
} else
{return (group3__3266.length < 1);
}
})())))
{return 0;
} else
{var negate__3269 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__3265,1)))?-1:1);
var vec__3268__3270 = (cljs.core.truth_(cljs.core.nth.call(null,groups__3265,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3265,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3265,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3265,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3265,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3265,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3265,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3265,7),parseInt.call(null,cljs.core.nth.call(null,groups__3265,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__3271 = cljs.core.nth.call(null,vec__3268__3270,0,null);
var radix__3272 = cljs.core.nth.call(null,vec__3268__3270,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__3271)))
{return null;
} else
{return (negate__3269 * parseInt.call(null,n__3271,radix__3272));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__3273 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__3274 = cljs.core.nth.call(null,groups__3273,1);
var denominator__3275 = cljs.core.nth.call(null,groups__3273,2);

return (parseInt.call(null,numinator__3274) / parseInt.call(null,denominator__3275));
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
var ch__3276 = cljs.reader.read_char.call(null,reader);
var mapresult__3277 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__3276);

if(cljs.core.truth_(mapresult__3277))
{return mapresult__3277;
} else
{if(cljs.core.truth_((function (){var or__3824__auto____3278 = cljs.core._EQ_.call(null,"u",ch__3276);

if(cljs.core.truth_(or__3824__auto____3278))
{return or__3824__auto____3278;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__3276);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__3276);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__3276);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__3279 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__3279)))
{{
var G__3280 = cljs.reader.read_char.call(null,rdr);
ch__3279 = G__3280;
continue;
}
} else
{return ch__3279;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__3281 = cljs.core.Vector.fromArray([]);

while(true){
var ch__3282 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__3282))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__3282)))
{return a__3281;
} else
{var temp__3971__auto____3283 = cljs.core.get.call(null,cljs.reader.macros,ch__3282);

if(cljs.core.truth_(temp__3971__auto____3283))
{var macrofn__3284 = temp__3971__auto____3283;

var mret__3285 = macrofn__3284.call(null,rdr,ch__3282);

{
var G__3287 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__3285,rdr))?a__3281:cljs.core.conj.call(null,a__3281,mret__3285));
a__3281 = G__3287;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__3282);
var o__3286 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__3288 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__3286,rdr))?a__3281:cljs.core.conj.call(null,a__3281,o__3286));
a__3281 = G__3288;
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
var ch__3289 = cljs.reader.read_char.call(null,rdr);
var dm__3290 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__3289);

if(cljs.core.truth_(dm__3290))
{return dm__3290.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__3289);
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
var l__3291 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__3291))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__3291);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__3292 = (new goog.string.StringBuffer(initch));
var ch__3293 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____3294 = cljs.core.nil_QMARK_.call(null,ch__3293);

if(cljs.core.truth_(or__3824__auto____3294))
{return or__3824__auto____3294;
} else
{var or__3824__auto____3295 = cljs.reader.whitespace_QMARK_.call(null,ch__3293);

if(cljs.core.truth_(or__3824__auto____3295))
{return or__3824__auto____3295;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__3293);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__3293);
var s__3296 = buffer__3292.toString();

var or__3824__auto____3297 = cljs.reader.match_number.call(null,s__3296);

if(cljs.core.truth_(or__3824__auto____3297))
{return or__3824__auto____3297;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__3296,"]");
}
} else
{{
var G__3298 = (function (){buffer__3292.append(ch__3293);
return buffer__3292;
})();
var G__3299 = cljs.reader.read_char.call(null,reader);
buffer__3292 = G__3298;
ch__3293 = G__3299;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__3300 = (new goog.string.StringBuffer());
var ch__3301 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__3301)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__3301)))
{{
var G__3302 = (function (){buffer__3300.append(cljs.reader.escape_char.call(null,buffer__3300,reader));
return buffer__3300;
})();
var G__3303 = cljs.reader.read_char.call(null,reader);
buffer__3300 = G__3302;
ch__3301 = G__3303;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__3301)))
{return buffer__3300.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__3304 = (function (){buffer__3300.append(ch__3301);
return buffer__3300;
})();
var G__3305 = cljs.reader.read_char.call(null,reader);
buffer__3300 = G__3304;
ch__3301 = G__3305;
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
var token__3306 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__3306,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__3306,0,token__3306.indexOf("/")),cljs.core.subs.call(null,token__3306,(token__3306.indexOf("/") + 1),token__3306.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__3306,cljs.core.symbol.call(null,token__3306));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__3308 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__3307__3309 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__3308);
var token__3310 = cljs.core.nth.call(null,vec__3307__3309,0,null);
var ns__3311 = cljs.core.nth.call(null,vec__3307__3309,1,null);
var name__3312 = cljs.core.nth.call(null,vec__3307__3309,2,null);

if(cljs.core.truth_((function (){var or__3824__auto____3314 = (function (){var and__3822__auto____3313 = cljs.core.not.call(null,(void 0 === ns__3311));

if(cljs.core.truth_(and__3822__auto____3313))
{return (ns__3311.substring((ns__3311.length - 2),ns__3311.length) === ":/");
} else
{return and__3822__auto____3313;
}
})();

if(cljs.core.truth_(or__3824__auto____3314))
{return or__3824__auto____3314;
} else
{var or__3824__auto____3315 = ((name__3312[(name__3312.length - 1)]) === ":");

if(cljs.core.truth_(or__3824__auto____3315))
{return or__3824__auto____3315;
} else
{return cljs.core.not.call(null,(token__3310.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__3310);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__3311.substring(0,ns__3311.indexOf("/")),name__3312);
} else
{return cljs.core.keyword.call(null,token__3310);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("﷐'else"))
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
var m__3316 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__3316)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__3317 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__353__auto____3318 = o__3317;

if(cljs.core.truth_((function (){var and__3822__auto____3319 = x__353__auto____3318;

if(cljs.core.truth_(and__3822__auto____3319))
{var and__3822__auto____3320 = x__353__auto____3318.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3822__auto____3320))
{return cljs.core.not.call(null,x__353__auto____3318.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3822__auto____3320;
}
} else
{return and__3822__auto____3319;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__353__auto____3318);
}
})()))
{return cljs.core.with_meta.call(null,o__3317,cljs.core.merge.call(null,cljs.core.meta.call(null,o__3317),m__3316));
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
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"﷑'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"﷑'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__3321 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__3321)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__3321)))
{{
var G__3323 = reader;
var G__3324 = eof_is_error;
var G__3325 = sentinel;
var G__3326 = is_recursive;
reader = G__3323;
eof_is_error = G__3324;
sentinel = G__3325;
is_recursive = G__3326;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__3321)))
{{
var G__3327 = cljs.reader.read_comment.call(null,reader,ch__3321);
var G__3328 = eof_is_error;
var G__3329 = sentinel;
var G__3330 = is_recursive;
reader = G__3327;
eof_is_error = G__3328;
sentinel = G__3329;
is_recursive = G__3330;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__3322 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__3321))?cljs.reader.macros.call(null,ch__3321).call(null,reader,ch__3321):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__3321))?cljs.reader.read_number.call(null,reader,ch__3321):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__3321):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__3322,reader)))
{{
var G__3331 = reader;
var G__3332 = eof_is_error;
var G__3333 = sentinel;
var G__3334 = is_recursive;
reader = G__3331;
eof_is_error = G__3332;
sentinel = G__3333;
is_recursive = G__3334;
continue;
}
} else
{return res__3322;
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
var r__3335 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__3335,true,null,false);
});
