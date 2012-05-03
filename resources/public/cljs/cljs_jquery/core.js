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
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,child)))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__51989_SHARP_){
return dom_append.call(null,parent,p1__51989_SHARP_);
}),child));
} else
{return parent.append(child);
}
});
cljs_jquery.core.set_dom_attribute = (function set_dom_attribute(elt,p__51991){
var vec__51992__51993 = p__51991;
var attribute__51994 = cljs.core.nth.call(null,vec__51992__51993,0,null);
var value__51995 = cljs.core.nth.call(null,vec__51992__51993,1,null);

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,value__51995)))
{return elt.attr(cljs.core.name.call(null,attribute__51994),value__51995);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'css",attribute__51994)))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__51990_SHARP_){
return elt.css(cljs.core.name.call(null,cljs.core.first.call(null,p1__51990_SHARP_)),cljs.core.last.call(null,p1__51990_SHARP_));
}),value__51995));
} else
{return null;
}
}
});
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = (function keyword_to_dom_object(kw){
var vec__51999__52001 = cljs.core.re_matches.call(null,cljs_jquery.core.re_tag,cljs.core.name.call(null,kw));
var ___52002 = cljs.core.nth.call(null,vec__51999__52001,0,null);
var tag__52003 = cljs.core.nth.call(null,vec__51999__52001,1,null);
var id__52004 = cljs.core.nth.call(null,vec__51999__52001,2,null);
var class$__52005 = cljs.core.nth.call(null,vec__51999__52001,3,null);
var vec__52000__52012 = (function (){var vec__52006__52007 = clojure.string.split.call(null,tag__52003,/:/);
var nsp__52008 = cljs.core.nth.call(null,vec__52006__52007,0,null);
var t__52009 = cljs.core.nth.call(null,vec__52006__52007,1,null);
var ns_xmlns__52010 = cljs_jquery.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__52008));

if(cljs.core.truth_(t__52009))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3824__auto____52011 = ns_xmlns__52010;

if(cljs.core.truth_(or__3824__auto____52011))
{return or__3824__auto____52011;
} else
{return nsp__52008;
}
})(),t__52009]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,cljs_jquery.core.xmlns),nsp__52008]);
}
})();
var nsp__52013 = cljs.core.nth.call(null,vec__52000__52012,0,null);
var tag__52014 = cljs.core.nth.call(null,vec__52000__52012,1,null);
var elt__52015 = cljs_jquery.core.jquery.call(null,document.createElementNS(nsp__52013,tag__52014));

if(cljs.core.truth_(id__52004))
{elt__52015.attr("id",id__52004);
} else
{}
if(cljs.core.truth_(class$__52005))
{elt__52015.addClass(clojure.string.replace.call(null,class$__52005,/\./," "));
} else
{}
return elt__52015;
});
cljs_jquery.core.hiccup_to_dom_object = (function hiccup_to_dom_object(x){
var elt__52016 = cljs_jquery.core.dom_create.call(null,cljs.core.first.call(null,x));
var nextelt__52017 = cljs.core.next.call(null,x);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt__52017))))
{
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__51996_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt__52016,p1__51996_SHARP_);
}),cljs.core.first.call(null,nextelt__52017)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__51997_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__52016,cljs_jquery.core.dom_create.call(null,p1__51997_SHARP_));
}),cljs.core.next.call(null,nextelt__52017)));
return elt__52016;
} else
{
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__51998_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__52016,cljs_jquery.core.dom_create.call(null,p1__51998_SHARP_));
}),nextelt__52017));
return elt__52016;
}
});
cljs_jquery.core.dom_create = (function dom_create(arg){
if(cljs.core.truth_(cljs_jquery.core.dom_element_QMARK_.call(null,arg)))
{return cljs_jquery.core.jquery.call(null,arg);
} else
{if(cljs.core.truth_(cljs_jquery.core.jquery_dom_element_QMARK_.call(null,arg)))
{return arg;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,arg)))
{return cljs_jquery.core.keyword_to_dom_object.call(null,arg);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,arg)))
{return cljs_jquery.core.jquery.call(null,document.createTextNode(arg));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____52018 = cljs.core.vector_QMARK_.call(null,arg);

if(cljs.core.truth_(and__3822__auto____52018))
{return cljs.core.first.call(null,arg);
} else
{return and__3822__auto____52018;
}
})()))
{return cljs_jquery.core.hiccup_to_dom_object.call(null,arg);
} else
{if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,arg)))
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
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__52019){
var vec__52020__52021 = p__52019;
var k__52022 = cljs.core.nth.call(null,vec__52020__52021,0,null);
var v__52023 = cljs.core.nth.call(null,vec__52020__52021,1,null);

var k__52024 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,k__52022))?cljs.core.name.call(null,k__52022):k__52022);
var v__52025 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,v__52023))?cljs.core.name.call(null,v__52023):v__52023);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,v__52025)))
{return cljs.core.PersistentVector.fromArray([k__52024,jsObj.call(null,v__52025)]);
} else
{return cljs.core.PersistentVector.fromArray([k__52024,v__52025]);
}
}),obj)).strobj();
});
cljs_jquery.core.camel_case = (function camel_case(fnkeyword){
return cljs.core.name.call(null,fnkeyword);
});
cljs_jquery.core.call_jquery = (function call_jquery(obj,p__52027){
var vec__52028__52029 = p__52027;
var fn__52030 = cljs.core.nth.call(null,vec__52028__52029,0,null);
var args__52031 = cljs.core.nthnext.call(null,vec__52028__52029,1);

if(cljs.core.truth_((function (){var and__3822__auto____52032 = cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,args__52031));

if(cljs.core.truth_(and__3822__auto____52032))
{return cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,args__52031,0));
} else
{return and__3822__auto____52032;
}
})()))
{var method__52033 = obj.get(cljs_jquery.core.camel_case.call(null,fn__52030));

cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__52026_SHARP_){
return method__52033.call(obj,cljs.core.name.call(null,cljs.core.first.call(null,p1__52026_SHARP_)),cljs.core.last.call(null,p1__52026_SHARP_));
}),cljs.core.nth.call(null,args__52031,0)));
return obj;
} else
{var pred__52034__52037 = cljs.core._EQ_;
var expr__52035__52038 = cljs.core.count.call(null,args__52031);

if(cljs.core.truth_(pred__52034__52037.call(null,0,expr__52035__52038)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__52030)).call(obj);
} else
{if(cljs.core.truth_(pred__52034__52037.call(null,1,expr__52035__52038)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__52030)).call(obj,cljs.core.nth.call(null,args__52031,0));
} else
{if(cljs.core.truth_(pred__52034__52037.call(null,2,expr__52035__52038)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__52030)).call(obj,cljs.core.nth.call(null,args__52031,0),cljs.core.nth.call(null,args__52031,1));
} else
{if(cljs.core.truth_(pred__52034__52037.call(null,3,expr__52035__52038)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__52030)).call(obj,cljs.core.nth.call(null,args__52031,0),cljs.core.nth.call(null,args__52031,1),cljs.core.nth.call(null,args__52031,2));
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__52035__52038)));
}
}
}
}
}
});
