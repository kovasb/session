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
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__10953_SHARP_){
return dom_append.call(null,parent,p1__10953_SHARP_);
}),child));
} else
{return parent.append(child);
}
});
cljs_jquery.core.set_dom_attribute = (function set_dom_attribute(elt,p__10955){
var vec__10960__10961 = p__10955;
var attribute__10962 = cljs.core.nth.call(null,vec__10960__10961,0,null);
var value__10963 = cljs.core.nth.call(null,vec__10960__10961,1,null);
if(cljs.core.string_QMARK_.call(null,value__10963))
{return elt.attr(cljs.core.name.call(null,attribute__10962),value__10963);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'css",attribute__10962))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__10954_SHARP_){
return elt.css(cljs.core.name.call(null,cljs.core.first.call(null,p1__10954_SHARP_)),cljs.core.last.call(null,p1__10954_SHARP_));
}),value__10963));
} else
{return null;
}
}
});
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = (function keyword_to_dom_object(kw){
var vec__10984__10986 = cljs.core.re_matches.call(null,cljs_jquery.core.re_tag,cljs.core.name.call(null,kw));
var ___10987 = cljs.core.nth.call(null,vec__10984__10986,0,null);
var tag__10988 = cljs.core.nth.call(null,vec__10984__10986,1,null);
var id__10989 = cljs.core.nth.call(null,vec__10984__10986,2,null);
var class__10990 = cljs.core.nth.call(null,vec__10984__10986,3,null);
var vec__10985__10997 = (function (){var vec__10991__10992 = clojure.string.split.call(null,tag__10988,/:/);
var nsp__10993 = cljs.core.nth.call(null,vec__10991__10992,0,null);
var t__10994 = cljs.core.nth.call(null,vec__10991__10992,1,null);
var ns_xmlns__10995 = cljs_jquery.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__10993));
if(cljs.core.truth_(t__10994))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3824__auto____10996 = ns_xmlns__10995;
if(cljs.core.truth_(or__3824__auto____10996))
{return or__3824__auto____10996;
} else
{return nsp__10993;
}
})(),t__10994], true);
} else
{return cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'xhtml")).call(null,cljs_jquery.core.xmlns),nsp__10993], true);
}
})();
var nsp__10998 = cljs.core.nth.call(null,vec__10985__10997,0,null);
var tag__10999 = cljs.core.nth.call(null,vec__10985__10997,1,null);
var elt__11000 = cljs_jquery.core.jquery.call(null,document.createElementNS(nsp__10998,tag__10999));
if(cljs.core.truth_(id__10989))
{elt__11000.attr("id",id__10989);
} else
{}
if(cljs.core.truth_(class__10990))
{elt__11000.addClass(clojure.string.replace.call(null,class__10990,/\./," "));
} else
{}
return elt__11000;
});
cljs_jquery.core.hiccup_to_dom_object = (function hiccup_to_dom_object(x){
var elt__11003 = cljs_jquery.core.dom_create.call(null,cljs.core.first.call(null,x));
var nextelt__11004 = cljs.core.next.call(null,x);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt__11004)))
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__10964_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt__11003,p1__10964_SHARP_);
}),cljs.core.first.call(null,nextelt__11004)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__10965_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__11003,cljs_jquery.core.dom_create.call(null,p1__10965_SHARP_));
}),cljs.core.next.call(null,nextelt__11004)));
return elt__11003;
} else
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__10966_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__11003,cljs_jquery.core.dom_create.call(null,p1__10966_SHARP_));
}),nextelt__11004));
return elt__11003;
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
{if(cljs.core.truth_((function (){var and__3822__auto____11006 = cljs.core.vector_QMARK_.call(null,arg);
if(and__3822__auto____11006)
{return cljs.core.first.call(null,arg);
} else
{return and__3822__auto____11006;
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
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__11014){
var vec__11015__11016 = p__11014;
var k__11017 = cljs.core.nth.call(null,vec__11015__11016,0,null);
var v__11018 = cljs.core.nth.call(null,vec__11015__11016,1,null);
var k__11019 = ((cljs.core.keyword_QMARK_.call(null,k__11017))?cljs.core.name.call(null,k__11017):k__11017);
var v__11020 = ((cljs.core.keyword_QMARK_.call(null,v__11018))?cljs.core.name.call(null,v__11018):v__11018);
if(cljs.core.map_QMARK_.call(null,v__11020))
{return cljs.core.PersistentVector.fromArray([k__11019,jsObj.call(null,v__11020)], true);
} else
{return cljs.core.PersistentVector.fromArray([k__11019,v__11020], true);
}
}),obj)).strobj();
});
cljs_jquery.core.camel_case = (function camel_case(fnkeyword){
return cljs.core.name.call(null,fnkeyword);
});
cljs_jquery.core.call_jquery = (function call_jquery(obj,p__11022){
var vec__11034__11035 = p__11022;
var fn__11036 = cljs.core.nth.call(null,vec__11034__11035,0,null);
var args__11037 = cljs.core.nthnext.call(null,vec__11034__11035,1);
if((function (){var and__3822__auto____11038 = !(cljs.core.empty_QMARK_.call(null,args__11037));
if(and__3822__auto____11038)
{return cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,args__11037,0));
} else
{return and__3822__auto____11038;
}
})())
{var method__11039 = obj.get(cljs_jquery.core.camel_case.call(null,fn__11036));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__11021_SHARP_){
return method__11039.call(obj,cljs.core.name.call(null,cljs.core.first.call(null,p1__11021_SHARP_)),cljs.core.last.call(null,p1__11021_SHARP_));
}),cljs.core.nth.call(null,args__11037,0)));
return obj;
} else
{var pred__11040__11043 = cljs.core._EQ_;
var expr__11041__11044 = cljs.core.count.call(null,args__11037);
if(pred__11040__11043.call(null,0,expr__11041__11044))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__11036)).call(obj);
} else
{if(pred__11040__11043.call(null,1,expr__11041__11044))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__11036)).call(obj,cljs.core.nth.call(null,args__11037,0));
} else
{if(pred__11040__11043.call(null,2,expr__11041__11044))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__11036)).call(obj,cljs.core.nth.call(null,args__11037,0),cljs.core.nth.call(null,args__11037,1));
} else
{if(pred__11040__11043.call(null,3,expr__11041__11044))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__11036)).call(obj,cljs.core.nth.call(null,args__11037,0),cljs.core.nth.call(null,args__11037,1),cljs.core.nth.call(null,args__11037,2));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11041__11044)].join('')));
}
}
}
}
}
});
