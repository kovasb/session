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
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__3349_SHARP_){
return dom_append.call(null,parent,p1__3349_SHARP_);
}),child));
} else
{return parent.append(child);
}
});
cljs_jquery.core.set_dom_attribute = (function set_dom_attribute(elt,p__3351){
var vec__3352__3353 = p__3351;
var attribute__3354 = cljs.core.nth.call(null,vec__3352__3353,0,null);
var value__3355 = cljs.core.nth.call(null,vec__3352__3353,1,null);

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,value__3355)))
{return elt.attr(cljs.core.name.call(null,attribute__3354),value__3355);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'css",attribute__3354)))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__3350_SHARP_){
return elt.css(cljs.core.name.call(null,cljs.core.first.call(null,p1__3350_SHARP_)),cljs.core.last.call(null,p1__3350_SHARP_));
}),value__3355));
} else
{return null;
}
}
});
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = (function keyword_to_dom_object(kw){
var vec__3359__3361 = cljs.core.re_matches.call(null,cljs_jquery.core.re_tag,cljs.core.name.call(null,kw));
var ___3362 = cljs.core.nth.call(null,vec__3359__3361,0,null);
var tag__3363 = cljs.core.nth.call(null,vec__3359__3361,1,null);
var id__3364 = cljs.core.nth.call(null,vec__3359__3361,2,null);
var class$__3365 = cljs.core.nth.call(null,vec__3359__3361,3,null);
var vec__3360__3372 = (function (){var vec__3366__3367 = clojure.string.split.call(null,tag__3363,/:/);
var nsp__3368 = cljs.core.nth.call(null,vec__3366__3367,0,null);
var t__3369 = cljs.core.nth.call(null,vec__3366__3367,1,null);
var ns_xmlns__3370 = cljs_jquery.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__3368));

if(cljs.core.truth_(t__3369))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3824__auto____3371 = ns_xmlns__3370;

if(cljs.core.truth_(or__3824__auto____3371))
{return or__3824__auto____3371;
} else
{return nsp__3368;
}
})(),t__3369]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,cljs_jquery.core.xmlns),nsp__3368]);
}
})();
var nsp__3373 = cljs.core.nth.call(null,vec__3360__3372,0,null);
var tag__3374 = cljs.core.nth.call(null,vec__3360__3372,1,null);
var elt__3375 = cljs_jquery.core.jquery.call(null,document.createElementNS(nsp__3373,tag__3374));

if(cljs.core.truth_(id__3364))
{elt__3375.attr("id",id__3364);
} else
{}
if(cljs.core.truth_(class$__3365))
{elt__3375.addClass(clojure.string.replace.call(null,class$__3365,/\./," "));
} else
{}
return elt__3375;
});
cljs_jquery.core.hiccup_to_dom_object = (function hiccup_to_dom_object(x){
var elt__3377 = cljs_jquery.core.dom_create.call(null,cljs.core.first.call(null,x));
var nextelt__3378 = cljs.core.next.call(null,x);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt__3378))))
{
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__3356_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt__3377,p1__3356_SHARP_);
}),cljs.core.first.call(null,nextelt__3378)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__3357_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__3377,cljs_jquery.core.dom_create.call(null,p1__3357_SHARP_));
}),cljs.core.next.call(null,nextelt__3378)));
return elt__3377;
} else
{
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__3358_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__3377,cljs_jquery.core.dom_create.call(null,p1__3358_SHARP_));
}),nextelt__3378));
return elt__3377;
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
{if(cljs.core.truth_((function (){var and__3822__auto____3379 = cljs.core.vector_QMARK_.call(null,arg);

if(cljs.core.truth_(and__3822__auto____3379))
{return cljs.core.first.call(null,arg);
} else
{return and__3822__auto____3379;
}
})()))
{return cljs_jquery.core.hiccup_to_dom_object.call(null,arg);
} else
{if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,arg)))
{var root__3380 = cljs_jquery.core.jquery.call(null,"");

cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__3376_SHARP_){
return root__3380.add(dom_create.call(null,p1__3376_SHARP_));
}),arg));
return root__3380;
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
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__3381){
var vec__3382__3383 = p__3381;
var k__3384 = cljs.core.nth.call(null,vec__3382__3383,0,null);
var v__3385 = cljs.core.nth.call(null,vec__3382__3383,1,null);

var k__3386 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,k__3384))?cljs.core.name.call(null,k__3384):k__3384);
var v__3387 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,v__3385))?cljs.core.name.call(null,v__3385):v__3385);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,v__3387)))
{return cljs.core.PersistentVector.fromArray([k__3386,jsObj.call(null,v__3387)]);
} else
{return cljs.core.PersistentVector.fromArray([k__3386,v__3387]);
}
}),obj)).strobj();
});
cljs_jquery.core.camel_case = (function camel_case(fnkeyword){
return cljs.core.name.call(null,fnkeyword);
});
cljs_jquery.core.call_jquery = (function call_jquery(obj,p__3389){
var vec__3390__3391 = p__3389;
var fn__3392 = cljs.core.nth.call(null,vec__3390__3391,0,null);
var args__3393 = cljs.core.nthnext.call(null,vec__3390__3391,1);

if(cljs.core.truth_((function (){var and__3822__auto____3394 = cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,args__3393));

if(cljs.core.truth_(and__3822__auto____3394))
{return cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,args__3393,0));
} else
{return and__3822__auto____3394;
}
})()))
{var method__3395 = obj.get(cljs_jquery.core.camel_case.call(null,fn__3392));

cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__3388_SHARP_){
return method__3395.call(obj,cljs.core.name.call(null,cljs.core.first.call(null,p1__3388_SHARP_)),cljs.core.last.call(null,p1__3388_SHARP_));
}),cljs.core.nth.call(null,args__3393,0)));
return obj;
} else
{var pred__3396__3399 = cljs.core._EQ_;
var expr__3397__3400 = cljs.core.count.call(null,args__3393);

if(cljs.core.truth_(pred__3396__3399.call(null,0,expr__3397__3400)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__3392)).call(obj);
} else
{if(cljs.core.truth_(pred__3396__3399.call(null,1,expr__3397__3400)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__3392)).call(obj,cljs.core.nth.call(null,args__3393,0));
} else
{if(cljs.core.truth_(pred__3396__3399.call(null,2,expr__3397__3400)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__3392)).call(obj,cljs.core.nth.call(null,args__3393,0),cljs.core.nth.call(null,args__3393,1));
} else
{if(cljs.core.truth_(pred__3396__3399.call(null,3,expr__3397__3400)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__3392)).call(obj,cljs.core.nth.call(null,args__3393,0),cljs.core.nth.call(null,args__3393,1),cljs.core.nth.call(null,args__3393,2));
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__3397__3400)));
}
}
}
}
}
});
