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
return parent.append(child);
});
cljs_jquery.core.set_dom_attribute = (function set_dom_attribute(elt,p__5252){
var vec__5253__5254 = p__5252;
var attribute__5255 = cljs.core.nth.call(null,vec__5253__5254,0,null);
var value__5256 = cljs.core.nth.call(null,vec__5253__5254,1,null);

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,value__5256)))
{return elt.attr(cljs.core.name.call(null,attribute__5255),value__5256);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'css",attribute__5255)))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__5251_SHARP_){
return elt.css(cljs.core.name.call(null,cljs.core.first.call(null,p1__5251_SHARP_)),cljs.core.last.call(null,p1__5251_SHARP_));
}),value__5256));
} else
{return null;
}
}
});
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = (function keyword_to_dom_object(kw){
var vec__5260__5262 = cljs.core.re_matches.call(null,cljs_jquery.core.re_tag,cljs.core.name.call(null,kw));
var ___5263 = cljs.core.nth.call(null,vec__5260__5262,0,null);
var tag__5264 = cljs.core.nth.call(null,vec__5260__5262,1,null);
var id__5265 = cljs.core.nth.call(null,vec__5260__5262,2,null);
var class$__5266 = cljs.core.nth.call(null,vec__5260__5262,3,null);
var vec__5261__5273 = (function (){var vec__5267__5268 = clojure.string.split.call(null,tag__5264,/:/);
var nsp__5269 = cljs.core.nth.call(null,vec__5267__5268,0,null);
var t__5270 = cljs.core.nth.call(null,vec__5267__5268,1,null);
var ns_xmlns__5271 = cljs_jquery.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__5269));

if(cljs.core.truth_(t__5270))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3824__auto____5272 = ns_xmlns__5271;

if(cljs.core.truth_(or__3824__auto____5272))
{return or__3824__auto____5272;
} else
{return nsp__5269;
}
})(),t__5270]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,cljs_jquery.core.xmlns),nsp__5269]);
}
})();
var nsp__5274 = cljs.core.nth.call(null,vec__5261__5273,0,null);
var tag__5275 = cljs.core.nth.call(null,vec__5261__5273,1,null);
var elt__5276 = cljs_jquery.core.jquery.call(null,document.createElementNS(nsp__5274,tag__5275));

if(cljs.core.truth_(id__5265))
{elt__5276.attr("id",id__5265);
} else
{}
if(cljs.core.truth_(class$__5266))
{elt__5276.addClass(clojure.string.replace.call(null,class$__5266,/\./," "));
} else
{}
return elt__5276;
});
cljs_jquery.core.hiccup_to_dom_object = (function hiccup_to_dom_object(x){
var elt__5280 = cljs_jquery.core.dom_create.call(null,cljs.core.first.call(null,x));
var nextelt__5281 = cljs.core.next.call(null,x);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt__5281))))
{
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__5257_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt__5280,p1__5257_SHARP_);
}),cljs.core.first.call(null,nextelt__5281)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__5258_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__5280,cljs_jquery.core.dom_create.call(null,p1__5258_SHARP_));
}),cljs.core.next.call(null,nextelt__5281)));
return elt__5280;
} else
{
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__5259_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__5280,cljs_jquery.core.dom_create.call(null,p1__5259_SHARP_));
}),nextelt__5281));
return elt__5280;
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
{if(cljs.core.truth_((function (){var and__3822__auto____5284 = (function (){var or__3824__auto____5283 = cljs.core.vector_QMARK_.call(null,arg);

if(cljs.core.truth_(or__3824__auto____5283))
{return or__3824__auto____5283;
} else
{return cljs.core.seq_QMARK_.call(null,arg);
}
})();

if(cljs.core.truth_(and__3822__auto____5284))
{return cljs.core.first.call(null,arg);
} else
{return and__3822__auto____5284;
}
})()))
{var elt__5285 = dom_create.call(null,cljs.core.first.call(null,arg));
var nextelt__5286 = cljs.core.next.call(null,arg);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt__5286))))
{
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__5277_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt__5285,p1__5277_SHARP_);
}),cljs.core.first.call(null,nextelt__5286)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__5278_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__5285,dom_create.call(null,p1__5278_SHARP_));
}),cljs.core.next.call(null,nextelt__5286)));
return elt__5285;
} else
{
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__5279_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__5285,dom_create.call(null,p1__5279_SHARP_));
}),nextelt__5286));
return elt__5285;
}
} else
{return null;
}
}
}
}
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
{if(cljs.core.truth_((function (){var and__3822__auto____5287 = cljs.core.vector_QMARK_.call(null,arg);

if(cljs.core.truth_(and__3822__auto____5287))
{return cljs.core.first.call(null,arg);
} else
{return and__3822__auto____5287;
}
})()))
{return cljs_jquery.core.hiccup_to_dom_object.call(null,arg);
} else
{if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,arg)))
{var root__5288 = cljs_jquery.core.jquery.call(null,"");

cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__5282_SHARP_){
return root__5288.add(dom_create.call(null,p1__5282_SHARP_));
}),arg));
return root__5288;
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
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5289){
var vec__5290__5291 = p__5289;
var k__5292 = cljs.core.nth.call(null,vec__5290__5291,0,null);
var v__5293 = cljs.core.nth.call(null,vec__5290__5291,1,null);

var k__5294 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,k__5292))?cljs.core.name.call(null,k__5292):k__5292);
var v__5295 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,v__5293))?cljs.core.name.call(null,v__5293):v__5293);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,v__5295)))
{return cljs.core.PersistentVector.fromArray([k__5294,jsObj.call(null,v__5295)]);
} else
{return cljs.core.PersistentVector.fromArray([k__5294,v__5295]);
}
}),obj)).strobj();
});
cljs_jquery.core.camel_case = (function camel_case(fnkeyword){
return cljs.core.name.call(null,fnkeyword);
});
cljs_jquery.core.call_jquery = (function call_jquery(obj,p__5297){
var vec__5298__5299 = p__5297;
var fn__5300 = cljs.core.nth.call(null,vec__5298__5299,0,null);
var args__5301 = cljs.core.nthnext.call(null,vec__5298__5299,1);

if(cljs.core.truth_((function (){var and__3822__auto____5302 = cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,args__5301));

if(cljs.core.truth_(and__3822__auto____5302))
{return cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,args__5301,0));
} else
{return and__3822__auto____5302;
}
})()))
{var method__5303 = obj.get(cljs_jquery.core.camel_case.call(null,fn__5300));

cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__5296_SHARP_){
return method__5303.call(obj,cljs.core.name.call(null,cljs.core.first.call(null,p1__5296_SHARP_)),cljs.core.last.call(null,p1__5296_SHARP_));
}),cljs.core.nth.call(null,args__5301,0)));
return obj;
} else
{var pred__5304__5307 = cljs.core._EQ_;
var expr__5305__5308 = cljs.core.count.call(null,args__5301);

if(cljs.core.truth_(pred__5304__5307.call(null,0,expr__5305__5308)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__5300)).call(obj);
} else
{if(cljs.core.truth_(pred__5304__5307.call(null,1,expr__5305__5308)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__5300)).call(obj,cljs.core.nth.call(null,args__5301,0));
} else
{if(cljs.core.truth_(pred__5304__5307.call(null,2,expr__5305__5308)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__5300)).call(obj,cljs.core.nth.call(null,args__5301,0),cljs.core.nth.call(null,args__5301,1));
} else
{if(cljs.core.truth_(pred__5304__5307.call(null,3,expr__5305__5308)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__5300)).call(obj,cljs.core.nth.call(null,args__5301,0),cljs.core.nth.call(null,args__5301,1),cljs.core.nth.call(null,args__5301,2));
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__5305__5308)));
}
}
}
}
}
});
