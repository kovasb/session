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
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12903_SHARP_){
return dom_append.call(null,parent,p1__12903_SHARP_);
}),child));
} else
{return parent.append(child);
}
});
cljs_jquery.core.set_dom_attribute = (function set_dom_attribute(elt,p__12905){
var vec__12910__12911 = p__12905;
var attribute__12912 = cljs.core.nth.call(null,vec__12910__12911,0,null);
var value__12913 = cljs.core.nth.call(null,vec__12910__12911,1,null);
if(cljs.core.string_QMARK_.call(null,value__12913))
{return elt.attr(cljs.core.name.call(null,attribute__12912),value__12913);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'css",attribute__12912))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12904_SHARP_){
return elt.css(cljs.core.name.call(null,cljs.core.first.call(null,p1__12904_SHARP_)),cljs.core.last.call(null,p1__12904_SHARP_));
}),value__12913));
} else
{return null;
}
}
});
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = (function keyword_to_dom_object(kw){
var vec__12934__12936 = cljs.core.re_matches.call(null,cljs_jquery.core.re_tag,cljs.core.name.call(null,kw));
var ___12937 = cljs.core.nth.call(null,vec__12934__12936,0,null);
var tag__12938 = cljs.core.nth.call(null,vec__12934__12936,1,null);
var id__12939 = cljs.core.nth.call(null,vec__12934__12936,2,null);
var class__12940 = cljs.core.nth.call(null,vec__12934__12936,3,null);
var vec__12935__12947 = (function (){var vec__12941__12942 = clojure.string.split.call(null,tag__12938,/:/);
var nsp__12943 = cljs.core.nth.call(null,vec__12941__12942,0,null);
var t__12944 = cljs.core.nth.call(null,vec__12941__12942,1,null);
var ns_xmlns__12945 = cljs_jquery.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__12943));
if(cljs.core.truth_(t__12944))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3824__auto____12946 = ns_xmlns__12945;
if(cljs.core.truth_(or__3824__auto____12946))
{return or__3824__auto____12946;
} else
{return nsp__12943;
}
})(),t__12944], true);
} else
{return cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'xhtml")).call(null,cljs_jquery.core.xmlns),nsp__12943], true);
}
})();
var nsp__12948 = cljs.core.nth.call(null,vec__12935__12947,0,null);
var tag__12949 = cljs.core.nth.call(null,vec__12935__12947,1,null);
var elt__12950 = cljs_jquery.core.jquery.call(null,document.createElementNS(nsp__12948,tag__12949));
if(cljs.core.truth_(id__12939))
{elt__12950.attr("id",id__12939);
} else
{}
if(cljs.core.truth_(class__12940))
{elt__12950.addClass(clojure.string.replace.call(null,class__12940,/\./," "));
} else
{}
return elt__12950;
});
cljs_jquery.core.hiccup_to_dom_object = (function hiccup_to_dom_object(x){
var elt__12953 = cljs_jquery.core.dom_create.call(null,cljs.core.first.call(null,x));
var nextelt__12954 = cljs.core.next.call(null,x);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt__12954)))
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12914_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt__12953,p1__12914_SHARP_);
}),cljs.core.first.call(null,nextelt__12954)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12915_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__12953,cljs_jquery.core.dom_create.call(null,p1__12915_SHARP_));
}),cljs.core.next.call(null,nextelt__12954)));
return elt__12953;
} else
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12916_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__12953,cljs_jquery.core.dom_create.call(null,p1__12916_SHARP_));
}),nextelt__12954));
return elt__12953;
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
{if(cljs.core.truth_((function (){var and__3822__auto____12956 = cljs.core.vector_QMARK_.call(null,arg);
if(and__3822__auto____12956)
{return cljs.core.first.call(null,arg);
} else
{return and__3822__auto____12956;
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
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__12964){
var vec__12965__12966 = p__12964;
var k__12967 = cljs.core.nth.call(null,vec__12965__12966,0,null);
var v__12968 = cljs.core.nth.call(null,vec__12965__12966,1,null);
var k__12969 = ((cljs.core.keyword_QMARK_.call(null,k__12967))?cljs.core.name.call(null,k__12967):k__12967);
var v__12970 = ((cljs.core.keyword_QMARK_.call(null,v__12968))?cljs.core.name.call(null,v__12968):v__12968);
if(cljs.core.map_QMARK_.call(null,v__12970))
{return cljs.core.PersistentVector.fromArray([k__12969,jsObj.call(null,v__12970)], true);
} else
{return cljs.core.PersistentVector.fromArray([k__12969,v__12970], true);
}
}),obj)).strobj();
});
cljs_jquery.core.camel_case = (function camel_case(fnkeyword){
return cljs.core.name.call(null,fnkeyword);
});
cljs_jquery.core.call_jquery = (function call_jquery(obj,p__12972){
var vec__12984__12985 = p__12972;
var fn__12986 = cljs.core.nth.call(null,vec__12984__12985,0,null);
var args__12987 = cljs.core.nthnext.call(null,vec__12984__12985,1);
if((function (){var and__3822__auto____12988 = !(cljs.core.empty_QMARK_.call(null,args__12987));
if(and__3822__auto____12988)
{return cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,args__12987,0));
} else
{return and__3822__auto____12988;
}
})())
{var method__12989 = obj.get(cljs_jquery.core.camel_case.call(null,fn__12986));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12971_SHARP_){
return method__12989.call(obj,cljs.core.name.call(null,cljs.core.first.call(null,p1__12971_SHARP_)),cljs.core.last.call(null,p1__12971_SHARP_));
}),cljs.core.nth.call(null,args__12987,0)));
return obj;
} else
{var pred__12990__12993 = cljs.core._EQ_;
var expr__12991__12994 = cljs.core.count.call(null,args__12987);
if(pred__12990__12993.call(null,0,expr__12991__12994))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12986)).call(obj);
} else
{if(pred__12990__12993.call(null,1,expr__12991__12994))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12986)).call(obj,cljs.core.nth.call(null,args__12987,0));
} else
{if(pred__12990__12993.call(null,2,expr__12991__12994))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12986)).call(obj,cljs.core.nth.call(null,args__12987,0),cljs.core.nth.call(null,args__12987,1));
} else
{if(pred__12990__12993.call(null,3,expr__12991__12994))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12986)).call(obj,cljs.core.nth.call(null,args__12987,0),cljs.core.nth.call(null,args__12987,1),cljs.core.nth.call(null,args__12987,2));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12991__12994)].join('')));
}
}
}
}
}
});
