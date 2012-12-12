goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
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
if(cljs.core.string_QMARK_.call(null,match))
{return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if("\uFDD0'else")
{throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
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
var join__1 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__2 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
join.cljs$lang$arity$1 = join__1;
join.cljs$lang$arity$2 = join__2;
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
if((cljs.core.count.call(null,s) < 2))
{return clojure.string.upper_case.call(null,s);
} else
{return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1))),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)))].join('');
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){
return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
});
var split__3 = (function (s,re,limit){
if((limit < 1))
{return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
} else
{var s__13014 = s;
var limit__13015 = limit;
var parts__13016 = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,limit__13015,1))
{return cljs.core.conj.call(null,parts__13016,s__13014);
} else
{var temp__4086__auto____13017 = cljs.core.re_find.call(null,re,s__13014);
if(cljs.core.truth_(temp__4086__auto____13017))
{var m__13018 = temp__4086__auto____13017;
var index__13019 = s__13014.indexOf(m__13018);
{
var G__13020 = s__13014.substring((index__13019 + cljs.core.count.call(null,m__13018)));
var G__13021 = (limit__13015 - 1);
var G__13022 = cljs.core.conj.call(null,parts__13016,s__13014.substring(0,index__13019));
s__13014 = G__13020;
limit__13015 = G__13021;
parts__13016 = G__13022;
continue;
}
} else
{return cljs.core.conj.call(null,parts__13016,s__13014);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case 2:
return split__2.call(this,s,re);
case 3:
return split__3.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
split.cljs$lang$arity$2 = split__2;
split.cljs$lang$arity$3 = split__3;
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
return goog.string.trim(s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft(s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight(s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__13026 = s.length;
while(true){
if((index__13026 === 0))
{return "";
} else
{var ch__13027 = cljs.core._lookup.call(null,s,(index__13026 - 1),null);
if((function (){var or__3939__auto____13028 = cljs.core._EQ_.call(null,ch__13027,"\n");
if(or__3939__auto____13028)
{return or__3939__auto____13028;
} else
{return cljs.core._EQ_.call(null,ch__13027,"\r");
}
})())
{{
var G__13029 = (index__13026 - 1);
index__13026 = G__13029;
continue;
}
} else
{return s.substring(0,index__13026);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__13033 = [cljs.core.str(s)].join('');
if(cljs.core.truth_((function (){var or__3939__auto____13034 = cljs.core.not.call(null,s__13033);
if(or__3939__auto____13034)
{return or__3939__auto____13034;
} else
{var or__3939__auto____13035 = cljs.core._EQ_.call(null,"",s__13033);
if(or__3939__auto____13035)
{return or__3939__auto____13035;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__13033);
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
var buffer__13042 = (new goog.string.StringBuffer());
var length__13043 = s.length;
var index__13044 = 0;
while(true){
if(cljs.core._EQ_.call(null,length__13043,index__13044))
{return buffer__13042.toString();
} else
{var ch__13045 = s.charAt(index__13044);
var temp__4086__auto____13046 = cljs.core._lookup.call(null,cmap,ch__13045,null);
if(cljs.core.truth_(temp__4086__auto____13046))
{var replacement__13047 = temp__4086__auto____13046;
buffer__13042.append([cljs.core.str(replacement__13047)].join(''));
} else
{buffer__13042.append(ch__13045);
}
{
var G__13048 = (index__13044 + 1);
index__13044 = G__13048;
continue;
}
}
break;
}
});
