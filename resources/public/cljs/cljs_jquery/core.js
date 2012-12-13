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
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12899_SHARP_){
return dom_append.call(null,parent,p1__12899_SHARP_);
}),child));
} else
{return parent.append(child);
}
});
cljs_jquery.core.set_dom_attribute = (function set_dom_attribute(elt,p__12901){
var vec__12906__12907 = p__12901;
var attribute__12908 = cljs.core.nth.call(null,vec__12906__12907,0,null);
var value__12909 = cljs.core.nth.call(null,vec__12906__12907,1,null);
if(cljs.core.string_QMARK_.call(null,value__12909))
{return elt.attr(cljs.core.name.call(null,attribute__12908),value__12909);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'css",attribute__12908))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12900_SHARP_){
return elt.css(cljs.core.name.call(null,cljs.core.first.call(null,p1__12900_SHARP_)),cljs.core.last.call(null,p1__12900_SHARP_));
}),value__12909));
} else
{return null;
}
}
});
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = (function keyword_to_dom_object(kw){
var vec__12930__12932 = cljs.core.re_matches.call(null,cljs_jquery.core.re_tag,cljs.core.name.call(null,kw));
var ___12933 = cljs.core.nth.call(null,vec__12930__12932,0,null);
var tag__12934 = cljs.core.nth.call(null,vec__12930__12932,1,null);
var id__12935 = cljs.core.nth.call(null,vec__12930__12932,2,null);
var class__12936 = cljs.core.nth.call(null,vec__12930__12932,3,null);
var vec__12931__12943 = (function (){var vec__12937__12938 = clojure.string.split.call(null,tag__12934,/:/);
var nsp__12939 = cljs.core.nth.call(null,vec__12937__12938,0,null);
var t__12940 = cljs.core.nth.call(null,vec__12937__12938,1,null);
var ns_xmlns__12941 = cljs_jquery.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__12939));
if(cljs.core.truth_(t__12940))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3939__auto____12942 = ns_xmlns__12941;
if(cljs.core.truth_(or__3939__auto____12942))
{return or__3939__auto____12942;
} else
{return nsp__12939;
}
})(),t__12940], true);
} else
{return cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'xhtml")).call(null,cljs_jquery.core.xmlns),nsp__12939], true);
}
})();
var nsp__12944 = cljs.core.nth.call(null,vec__12931__12943,0,null);
var tag__12945 = cljs.core.nth.call(null,vec__12931__12943,1,null);
var elt__12946 = cljs_jquery.core.jquery.call(null,document.createElementNS(nsp__12944,tag__12945));
if(cljs.core.truth_(id__12935))
{elt__12946.attr("id",id__12935);
} else
{}
if(cljs.core.truth_(class__12936))
{elt__12946.addClass(clojure.string.replace.call(null,class__12936,/\./," "));
} else
{}
return elt__12946;
});
cljs_jquery.core.hiccup_to_dom_object = (function hiccup_to_dom_object(x){
var elt__12949 = cljs_jquery.core.dom_create.call(null,cljs.core.first.call(null,x));
var nextelt__12950 = cljs.core.next.call(null,x);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt__12950)))
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12910_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt__12949,p1__12910_SHARP_);
}),cljs.core.first.call(null,nextelt__12950)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12911_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__12949,cljs_jquery.core.dom_create.call(null,p1__12911_SHARP_));
}),cljs.core.next.call(null,nextelt__12950)));
return elt__12949;
} else
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12912_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__12949,cljs_jquery.core.dom_create.call(null,p1__12912_SHARP_));
}),nextelt__12950));
return elt__12949;
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
{if(cljs.core.truth_((function (){var and__3937__auto____12952 = cljs.core.vector_QMARK_.call(null,arg);
if(and__3937__auto____12952)
{return cljs.core.first.call(null,arg);
} else
{return and__3937__auto____12952;
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
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__12960){
var vec__12961__12962 = p__12960;
var k__12963 = cljs.core.nth.call(null,vec__12961__12962,0,null);
var v__12964 = cljs.core.nth.call(null,vec__12961__12962,1,null);
var k__12965 = ((cljs.core.keyword_QMARK_.call(null,k__12963))?cljs.core.name.call(null,k__12963):k__12963);
var v__12966 = ((cljs.core.keyword_QMARK_.call(null,v__12964))?cljs.core.name.call(null,v__12964):v__12964);
if(cljs.core.map_QMARK_.call(null,v__12966))
{return cljs.core.PersistentVector.fromArray([k__12965,jsObj.call(null,v__12966)], true);
} else
{return cljs.core.PersistentVector.fromArray([k__12965,v__12966], true);
}
}),obj)).strobj();
});
cljs_jquery.core.camel_case = (function camel_case(fnkeyword){
return cljs.core.name.call(null,fnkeyword);
});
cljs_jquery.core.call_jquery = (function call_jquery(obj,p__12968){
var vec__12980__12981 = p__12968;
var fn__12982 = cljs.core.nth.call(null,vec__12980__12981,0,null);
var args__12983 = cljs.core.nthnext.call(null,vec__12980__12981,1);
if((function (){var and__3937__auto____12984 = !(cljs.core.empty_QMARK_.call(null,args__12983));
if(and__3937__auto____12984)
{return cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,args__12983,0));
} else
{return and__3937__auto____12984;
}
})())
{var method__12985 = obj.get(cljs_jquery.core.camel_case.call(null,fn__12982));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12967_SHARP_){
return method__12985.call(obj,cljs.core.name.call(null,cljs.core.first.call(null,p1__12967_SHARP_)),cljs.core.last.call(null,p1__12967_SHARP_));
}),cljs.core.nth.call(null,args__12983,0)));
return obj;
} else
{var pred__12986__12989 = cljs.core._EQ_;
var expr__12987__12990 = cljs.core.count.call(null,args__12983);
if(pred__12986__12989.call(null,0,expr__12987__12990))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12982)).call(obj);
} else
{if(pred__12986__12989.call(null,1,expr__12987__12990))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12982)).call(obj,cljs.core.nth.call(null,args__12983,0));
} else
{if(pred__12986__12989.call(null,2,expr__12987__12990))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12982)).call(obj,cljs.core.nth.call(null,args__12983,0),cljs.core.nth.call(null,args__12983,1));
} else
{if(pred__12986__12989.call(null,3,expr__12987__12990))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12982)).call(obj,cljs.core.nth.call(null,args__12983,0),cljs.core.nth.call(null,args__12983,1),cljs.core.nth.call(null,args__12983,2));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12987__12990)].join('')));
}
}
}
}
}
});
