goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("﷐'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__3182 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__3183 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__3182.call(this,separator);
case  2 :
return join__3183.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_((cljs.core.count.call(null,s) < 2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__3191 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__3192 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__3185 = s;
var limit__3186 = limit;
var parts__3187 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__3186,1)))
{return cljs.core.conj.call(null,parts__3187,s__3185);
} else
{var temp__3971__auto____3188 = cljs.core.re_find.call(null,re,s__3185);

if(cljs.core.truth_(temp__3971__auto____3188))
{var m__3189 = temp__3971__auto____3188;

var index__3190 = s__3185.indexOf(m__3189);

{
var G__3194 = s__3185.substring((index__3190 + cljs.core.count.call(null,m__3189)));
var G__3195 = (limit__3186 - 1);
var G__3196 = cljs.core.conj.call(null,parts__3187,s__3185.substring(0,index__3190));
s__3185 = G__3194;
limit__3186 = G__3195;
parts__3187 = G__3196;
continue;
}
} else
{return cljs.core.conj.call(null,parts__3187,s__3185);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__3191.call(this,s,re);
case  3 :
return split__3192.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__3197 = s.length;

while(true){
if(cljs.core.truth_((index__3197 === 0)))
{return "";
} else
{var ch__3198 = cljs.core.get.call(null,s,(index__3197 - 1));

if(cljs.core.truth_((function (){var or__3824__auto____3199 = cljs.core._EQ_.call(null,ch__3198,"\n");

if(cljs.core.truth_(or__3824__auto____3199))
{return or__3824__auto____3199;
} else
{return cljs.core._EQ_.call(null,ch__3198,"\r");
}
})()))
{{
var G__3200 = (index__3197 - 1);
index__3197 = G__3200;
continue;
}
} else
{return s.substring(0,index__3197);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__3201 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3824__auto____3202 = cljs.core.not.call(null,s__3201);

if(cljs.core.truth_(or__3824__auto____3202))
{return or__3824__auto____3202;
} else
{var or__3824__auto____3203 = cljs.core._EQ_.call(null,"",s__3201);

if(cljs.core.truth_(or__3824__auto____3203))
{return or__3824__auto____3203;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__3201);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__3204 = (new goog.string.StringBuffer());
var length__3205 = s.length;

var index__3206 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__3205,index__3206)))
{return buffer__3204.toString();
} else
{var ch__3207 = s.charAt(index__3206);

var temp__3971__auto____3208 = cljs.core.get.call(null,cmap,ch__3207);

if(cljs.core.truth_(temp__3971__auto____3208))
{var replacement__3209 = temp__3971__auto____3208;

buffer__3204.append(cljs.core.str.call(null,replacement__3209));
} else
{buffer__3204.append(ch__3207);
}
{
var G__3210 = (index__3206 + 1);
index__3206 = G__3210;
continue;
}
}
break;
}
});
