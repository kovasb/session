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
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__13267_SHARP_){
return dom_append.call(null,parent,p1__13267_SHARP_);
}),child));
} else
{return parent.append(child);
}
});
cljs_jquery.core.set_dom_attribute = (function set_dom_attribute(elt,p__13269){
var vec__13274__13275 = p__13269;
var attribute__13276 = cljs.core.nth.call(null,vec__13274__13275,0,null);
var value__13277 = cljs.core.nth.call(null,vec__13274__13275,1,null);
if(cljs.core.string_QMARK_.call(null,value__13277))
{return elt.attr(cljs.core.name.call(null,attribute__13276),value__13277);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'css",attribute__13276))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__13268_SHARP_){
return elt.css(cljs.core.name.call(null,cljs.core.first.call(null,p1__13268_SHARP_)),cljs.core.last.call(null,p1__13268_SHARP_));
}),value__13277));
} else
{return null;
}
}
});
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = (function keyword_to_dom_object(kw){
var vec__13298__13300 = cljs.core.re_matches.call(null,cljs_jquery.core.re_tag,cljs.core.name.call(null,kw));
var ___13301 = cljs.core.nth.call(null,vec__13298__13300,0,null);
var tag__13302 = cljs.core.nth.call(null,vec__13298__13300,1,null);
var id__13303 = cljs.core.nth.call(null,vec__13298__13300,2,null);
var class__13304 = cljs.core.nth.call(null,vec__13298__13300,3,null);
var vec__13299__13311 = (function (){var vec__13305__13306 = clojure.string.split.call(null,tag__13302,/:/);
var nsp__13307 = cljs.core.nth.call(null,vec__13305__13306,0,null);
var t__13308 = cljs.core.nth.call(null,vec__13305__13306,1,null);
var ns_xmlns__13309 = cljs_jquery.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__13307));
if(cljs.core.truth_(t__13308))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3824__auto____13310 = ns_xmlns__13309;
if(cljs.core.truth_(or__3824__auto____13310))
{return or__3824__auto____13310;
} else
{return nsp__13307;
}
})(),t__13308], true);
} else
{return cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'xhtml")).call(null,cljs_jquery.core.xmlns),nsp__13307], true);
}
})();
var nsp__13312 = cljs.core.nth.call(null,vec__13299__13311,0,null);
var tag__13313 = cljs.core.nth.call(null,vec__13299__13311,1,null);
var elt__13314 = cljs_jquery.core.jquery.call(null,document.createElementNS(nsp__13312,tag__13313));
if(cljs.core.truth_(id__13303))
{elt__13314.attr("id",id__13303);
} else
{}
if(cljs.core.truth_(class__13304))
{elt__13314.addClass(clojure.string.replace.call(null,class__13304,/\./," "));
} else
{}
return elt__13314;
});
cljs_jquery.core.hiccup_to_dom_object = (function hiccup_to_dom_object(x){
var elt__13317 = cljs_jquery.core.dom_create.call(null,cljs.core.first.call(null,x));
var nextelt__13318 = cljs.core.next.call(null,x);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt__13318)))
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__13278_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt__13317,p1__13278_SHARP_);
}),cljs.core.first.call(null,nextelt__13318)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__13279_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__13317,cljs_jquery.core.dom_create.call(null,p1__13279_SHARP_));
}),cljs.core.next.call(null,nextelt__13318)));
return elt__13317;
} else
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__13280_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__13317,cljs_jquery.core.dom_create.call(null,p1__13280_SHARP_));
}),nextelt__13318));
return elt__13317;
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
{if(cljs.core.truth_((function (){var and__3822__auto____13320 = cljs.core.vector_QMARK_.call(null,arg);
if(and__3822__auto____13320)
{return cljs.core.first.call(null,arg);
} else
{return and__3822__auto____13320;
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
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__13328){
var vec__13329__13330 = p__13328;
var k__13331 = cljs.core.nth.call(null,vec__13329__13330,0,null);
var v__13332 = cljs.core.nth.call(null,vec__13329__13330,1,null);
var k__13333 = ((cljs.core.keyword_QMARK_.call(null,k__13331))?cljs.core.name.call(null,k__13331):k__13331);
var v__13334 = ((cljs.core.keyword_QMARK_.call(null,v__13332))?cljs.core.name.call(null,v__13332):v__13332);
if(cljs.core.map_QMARK_.call(null,v__13334))
{return cljs.core.PersistentVector.fromArray([k__13333,jsObj.call(null,v__13334)], true);
} else
{return cljs.core.PersistentVector.fromArray([k__13333,v__13334], true);
}
}),obj)).strobj();
});
cljs_jquery.core.camel_case = (function camel_case(fnkeyword){
return cljs.core.name.call(null,fnkeyword);
});
cljs_jquery.core.call_jquery = (function call_jquery(obj,p__13336){
var vec__13348__13349 = p__13336;
var fn__13350 = cljs.core.nth.call(null,vec__13348__13349,0,null);
var args__13351 = cljs.core.nthnext.call(null,vec__13348__13349,1);
if((function (){var and__3822__auto____13352 = !(cljs.core.empty_QMARK_.call(null,args__13351));
if(and__3822__auto____13352)
{return cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,args__13351,0));
} else
{return and__3822__auto____13352;
}
})())
{var method__13353 = obj.get(cljs_jquery.core.camel_case.call(null,fn__13350));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__13335_SHARP_){
return method__13353.call(obj,cljs.core.name.call(null,cljs.core.first.call(null,p1__13335_SHARP_)),cljs.core.last.call(null,p1__13335_SHARP_));
}),cljs.core.nth.call(null,args__13351,0)));
return obj;
} else
{var pred__13354__13357 = cljs.core._EQ_;
var expr__13355__13358 = cljs.core.count.call(null,args__13351);
if(pred__13354__13357.call(null,0,expr__13355__13358))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__13350)).call(obj);
} else
{if(pred__13354__13357.call(null,1,expr__13355__13358))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__13350)).call(obj,cljs.core.nth.call(null,args__13351,0));
} else
{if(pred__13354__13357.call(null,2,expr__13355__13358))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__13350)).call(obj,cljs.core.nth.call(null,args__13351,0),cljs.core.nth.call(null,args__13351,1));
} else
{if(pred__13354__13357.call(null,3,expr__13355__13358))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__13350)).call(obj,cljs.core.nth.call(null,args__13351,0),cljs.core.nth.call(null,args__13351,1),cljs.core.nth.call(null,args__13351,2));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__13355__13358)].join('')));
}
}
}
}
}
});
