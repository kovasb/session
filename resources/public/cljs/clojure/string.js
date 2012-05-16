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
{if(cljs.core.truth_("\uFDD0'else"))
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
var join__32135 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__32136 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__32135.call(this,separator);
case  2 :
return join__32136.call(this,separator,coll);
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
var split__32144 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__32145 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__32138 = s;
var limit__32139 = limit;
var parts__32140 = cljs.core.PersistentVector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__32139,1)))
{return cljs.core.conj.call(null,parts__32140,s__32138);
} else
{var temp__3971__auto____32141 = cljs.core.re_find.call(null,re,s__32138);

if(cljs.core.truth_(temp__3971__auto____32141))
{var m__32142 = temp__3971__auto____32141;

var index__32143 = s__32138.indexOf(m__32142);

{
var G__32147 = s__32138.substring((index__32143 + cljs.core.count.call(null,m__32142)));
var G__32148 = (limit__32139 - 1);
var G__32149 = cljs.core.conj.call(null,parts__32140,s__32138.substring(0,index__32143));
s__32138 = G__32147;
limit__32139 = G__32148;
parts__32140 = G__32149;
continue;
}
} else
{return cljs.core.conj.call(null,parts__32140,s__32138);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__32144.call(this,s,re);
case  3 :
return split__32145.call(this,s,re,limit);
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
var index__32150 = s.length;

while(true){
if(cljs.core.truth_((index__32150 === 0)))
{return "";
} else
{var ch__32151 = cljs.core.get.call(null,s,(index__32150 - 1));

if(cljs.core.truth_((function (){var or__3824__auto____32152 = cljs.core._EQ_.call(null,ch__32151,"\n");

if(cljs.core.truth_(or__3824__auto____32152))
{return or__3824__auto____32152;
} else
{return cljs.core._EQ_.call(null,ch__32151,"\r");
}
})()))
{{
var G__32153 = (index__32150 - 1);
index__32150 = G__32153;
continue;
}
} else
{return s.substring(0,index__32150);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__32154 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3824__auto____32155 = cljs.core.not.call(null,s__32154);

if(cljs.core.truth_(or__3824__auto____32155))
{return or__3824__auto____32155;
} else
{var or__3824__auto____32156 = cljs.core._EQ_.call(null,"",s__32154);

if(cljs.core.truth_(or__3824__auto____32156))
{return or__3824__auto____32156;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__32154);
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
var buffer__32157 = (new goog.string.StringBuffer());
var length__32158 = s.length;

var index__32159 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__32158,index__32159)))
{return buffer__32157.toString();
} else
{var ch__32160 = s.charAt(index__32159);

var temp__3971__auto____32161 = cljs.core.get.call(null,cmap,ch__32160);

if(cljs.core.truth_(temp__3971__auto____32161))
{var replacement__32162 = temp__3971__auto____32161;

buffer__32157.append(cljs.core.str.call(null,replacement__32162));
} else
{buffer__32157.append(ch__32160);
}
{
var G__32163 = (index__32159 + 1);
index__32159 = G__32163;
continue;
}
}
break;
}
});
