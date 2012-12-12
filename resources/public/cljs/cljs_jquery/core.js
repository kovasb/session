goog.provide('cljs_jquery.core');
goog.require('cljs.core');
goog.require('clojure.string');
cljs_jquery.core.jquery = $;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
cljs_jquery.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
cljs_jquery.core.dom_element_QMARK_ = (function dom_element_QMARK_(elt){
return cljs.core.instance_QMARK_.call(null,Element,elt);
});
cljs_jquery.core.jquery_dom_element_QMARK_ = (function jquery_dom_element_QMARK_(elt){
return cljs.core.instance_QMARK_.call(null,cljs_jquery.core.jquery,elt);
});
cljs_jquery.core.dom_append = (function dom_append(parent,child){
if(cljs.core.seq_QMARK_.call(null,child))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12916_SHARP_){
return dom_append.call(null,parent,p1__12916_SHARP_);
}),child));
} else
{return parent.append(child);
}
});
cljs_jquery.core.set_dom_attribute = (function set_dom_attribute(elt,p__12918){
var vec__12923__12924 = p__12918;
var attribute__12925 = cljs.core.nth.call(null,vec__12923__12924,0,null);
var value__12926 = cljs.core.nth.call(null,vec__12923__12924,1,null);
if(cljs.core.string_QMARK_.call(null,value__12926))
{return elt.attr(cljs.core.name.call(null,attribute__12925),value__12926);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'css",attribute__12925))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12917_SHARP_){
return elt.css(cljs.core.name.call(null,cljs.core.first.call(null,p1__12917_SHARP_)),cljs.core.last.call(null,p1__12917_SHARP_));
}),value__12926));
} else
{return null;
}
}
});
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = (function keyword_to_dom_object(kw){
var vec__12947__12949 = cljs.core.re_matches.call(null,cljs_jquery.core.re_tag,cljs.core.name.call(null,kw));
var ___12950 = cljs.core.nth.call(null,vec__12947__12949,0,null);
var tag__12951 = cljs.core.nth.call(null,vec__12947__12949,1,null);
var id__12952 = cljs.core.nth.call(null,vec__12947__12949,2,null);
var class__12953 = cljs.core.nth.call(null,vec__12947__12949,3,null);
var vec__12948__12960 = (function (){var vec__12954__12955 = clojure.string.split.call(null,tag__12951,/:/);
var nsp__12956 = cljs.core.nth.call(null,vec__12954__12955,0,null);
var t__12957 = cljs.core.nth.call(null,vec__12954__12955,1,null);
var ns_xmlns__12958 = cljs_jquery.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__12956));
if(cljs.core.truth_(t__12957))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3939__auto____12959 = ns_xmlns__12958;
if(cljs.core.truth_(or__3939__auto____12959))
{return or__3939__auto____12959;
} else
{return nsp__12956;
}
})(),t__12957], true);
} else
{return cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'xhtml")).call(null,cljs_jquery.core.xmlns),nsp__12956], true);
}
})();
var nsp__12961 = cljs.core.nth.call(null,vec__12948__12960,0,null);
var tag__12962 = cljs.core.nth.call(null,vec__12948__12960,1,null);
var elt__12963 = cljs_jquery.core.jquery.call(null,document.createElementNS(nsp__12961,tag__12962));
if(cljs.core.truth_(id__12952))
{elt__12963.attr("id",id__12952);
} else
{}
if(cljs.core.truth_(class__12953))
{elt__12963.addClass(clojure.string.replace.call(null,class__12953,/\./," "));
} else
{}
return elt__12963;
});
cljs_jquery.core.hiccup_to_dom_object = (function hiccup_to_dom_object(x){
var elt__12966 = cljs_jquery.core.dom_create.call(null,cljs.core.first.call(null,x));
var nextelt__12967 = cljs.core.next.call(null,x);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt__12967)))
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12927_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt__12966,p1__12927_SHARP_);
}),cljs.core.first.call(null,nextelt__12967)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12928_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__12966,cljs_jquery.core.dom_create.call(null,p1__12928_SHARP_));
}),cljs.core.next.call(null,nextelt__12967)));
return elt__12966;
} else
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12929_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__12966,cljs_jquery.core.dom_create.call(null,p1__12929_SHARP_));
}),nextelt__12967));
return elt__12966;
}
});
cljs_jquery.core.dom_create = (function dom_create(arg){
if(cljs.core.truth_(cljs_jquery.core.dom_element_QMARK_.call(null,arg)))
{return cljs_jquery.core.jquery.call(null,arg);
} else
{if(cljs.core.truth_(cljs_jquery.core.jquery_dom_element_QMARK_.call(null,arg)))
{return arg;
} else
{if(cljs.core.keyword_QMARK_.call(null,arg))
{return cljs_jquery.core.keyword_to_dom_object.call(null,arg);
} else
{if(cljs.core.string_QMARK_.call(null,arg))
{return cljs_jquery.core.jquery.call(null,document.createTextNode(arg));
} else
{if(cljs.core.truth_((function (){var and__3937__auto____12969 = cljs.core.vector_QMARK_.call(null,arg);
if(and__3937__auto____12969)
{return cljs.core.first.call(null,arg);
} else
{return and__3937__auto____12969;
}
})()))
{return cljs_jquery.core.hiccup_to_dom_object.call(null,arg);
} else
{if(cljs.core.seq_QMARK_.call(null,arg))
{return cljs.core.map.call(null,dom_create,arg);
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
* Convert a clojure map into a JavaScript object
*/
cljs_jquery.core.jsObj = (function jsObj(obj){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__12977){
var vec__12978__12979 = p__12977;
var k__12980 = cljs.core.nth.call(null,vec__12978__12979,0,null);
var v__12981 = cljs.core.nth.call(null,vec__12978__12979,1,null);
var k__12982 = ((cljs.core.keyword_QMARK_.call(null,k__12980))?cljs.core.name.call(null,k__12980):k__12980);
var v__12983 = ((cljs.core.keyword_QMARK_.call(null,v__12981))?cljs.core.name.call(null,v__12981):v__12981);
if(cljs.core.map_QMARK_.call(null,v__12983))
{return cljs.core.PersistentVector.fromArray([k__12982,jsObj.call(null,v__12983)], true);
} else
{return cljs.core.PersistentVector.fromArray([k__12982,v__12983], true);
}
}),obj)).strobj();
});
cljs_jquery.core.camel_case = (function camel_case(fnkeyword){
return cljs.core.name.call(null,fnkeyword);
});
cljs_jquery.core.call_jquery = (function call_jquery(obj,p__12985){
var vec__12997__12998 = p__12985;
var fn__12999 = cljs.core.nth.call(null,vec__12997__12998,0,null);
var args__13000 = cljs.core.nthnext.call(null,vec__12997__12998,1);
if((function (){var and__3937__auto____13001 = !(cljs.core.empty_QMARK_.call(null,args__13000));
if(and__3937__auto____13001)
{return cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,args__13000,0));
} else
{return and__3937__auto____13001;
}
})())
{var method__13002 = obj.get(cljs_jquery.core.camel_case.call(null,fn__12999));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12984_SHARP_){
return method__13002.call(obj,cljs.core.name.call(null,cljs.core.first.call(null,p1__12984_SHARP_)),cljs.core.last.call(null,p1__12984_SHARP_));
}),cljs.core.nth.call(null,args__13000,0)));
return obj;
} else
{var pred__13003__13006 = cljs.core._EQ_;
var expr__13004__13007 = cljs.core.count.call(null,args__13000);
if(pred__13003__13006.call(null,0,expr__13004__13007))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12999)).call(obj);
} else
{if(pred__13003__13006.call(null,1,expr__13004__13007))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12999)).call(obj,cljs.core.nth.call(null,args__13000,0));
} else
{if(pred__13003__13006.call(null,2,expr__13004__13007))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12999)).call(obj,cljs.core.nth.call(null,args__13000,0),cljs.core.nth.call(null,args__13000,1));
} else
{if(pred__13003__13006.call(null,3,expr__13004__13007))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12999)).call(obj,cljs.core.nth.call(null,args__13000,0),cljs.core.nth.call(null,args__13000,1),cljs.core.nth.call(null,args__13000,2));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__13004__13007)].join('')));
}
}
}
}
}
});
