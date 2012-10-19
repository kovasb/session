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
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__11253_SHARP_){
return dom_append.call(null,parent,p1__11253_SHARP_);
}),child));
} else
{return parent.append(child);
}
});
cljs_jquery.core.set_dom_attribute = (function set_dom_attribute(elt,p__11255){
var vec__11260__11261 = p__11255;
var attribute__11262 = cljs.core.nth.call(null,vec__11260__11261,0,null);
var value__11263 = cljs.core.nth.call(null,vec__11260__11261,1,null);
if(cljs.core.string_QMARK_.call(null,value__11263))
{return elt.attr(cljs.core.name.call(null,attribute__11262),value__11263);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'css",attribute__11262))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__11254_SHARP_){
return elt.css(cljs.core.name.call(null,cljs.core.first.call(null,p1__11254_SHARP_)),cljs.core.last.call(null,p1__11254_SHARP_));
}),value__11263));
} else
{return null;
}
}
});
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = (function keyword_to_dom_object(kw){
var vec__11284__11286 = cljs.core.re_matches.call(null,cljs_jquery.core.re_tag,cljs.core.name.call(null,kw));
var ___11287 = cljs.core.nth.call(null,vec__11284__11286,0,null);
var tag__11288 = cljs.core.nth.call(null,vec__11284__11286,1,null);
var id__11289 = cljs.core.nth.call(null,vec__11284__11286,2,null);
var class__11290 = cljs.core.nth.call(null,vec__11284__11286,3,null);
var vec__11285__11297 = (function (){var vec__11291__11292 = clojure.string.split.call(null,tag__11288,/:/);
var nsp__11293 = cljs.core.nth.call(null,vec__11291__11292,0,null);
var t__11294 = cljs.core.nth.call(null,vec__11291__11292,1,null);
var ns_xmlns__11295 = cljs_jquery.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__11293));
if(cljs.core.truth_(t__11294))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3824__auto____11296 = ns_xmlns__11295;
if(cljs.core.truth_(or__3824__auto____11296))
{return or__3824__auto____11296;
} else
{return nsp__11293;
}
})(),t__11294], true);
} else
{return cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'xhtml")).call(null,cljs_jquery.core.xmlns),nsp__11293], true);
}
})();
var nsp__11298 = cljs.core.nth.call(null,vec__11285__11297,0,null);
var tag__11299 = cljs.core.nth.call(null,vec__11285__11297,1,null);
var elt__11300 = cljs_jquery.core.jquery.call(null,document.createElementNS(nsp__11298,tag__11299));
if(cljs.core.truth_(id__11289))
{elt__11300.attr("id",id__11289);
} else
{}
if(cljs.core.truth_(class__11290))
{elt__11300.addClass(clojure.string.replace.call(null,class__11290,/\./," "));
} else
{}
return elt__11300;
});
cljs_jquery.core.hiccup_to_dom_object = (function hiccup_to_dom_object(x){
var elt__11303 = cljs_jquery.core.dom_create.call(null,cljs.core.first.call(null,x));
var nextelt__11304 = cljs.core.next.call(null,x);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt__11304)))
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__11264_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt__11303,p1__11264_SHARP_);
}),cljs.core.first.call(null,nextelt__11304)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__11265_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__11303,cljs_jquery.core.dom_create.call(null,p1__11265_SHARP_));
}),cljs.core.next.call(null,nextelt__11304)));
return elt__11303;
} else
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__11266_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__11303,cljs_jquery.core.dom_create.call(null,p1__11266_SHARP_));
}),nextelt__11304));
return elt__11303;
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
{if(cljs.core.truth_((function (){var and__3822__auto____11306 = cljs.core.vector_QMARK_.call(null,arg);
if(and__3822__auto____11306)
{return cljs.core.first.call(null,arg);
} else
{return and__3822__auto____11306;
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
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__11314){
var vec__11315__11316 = p__11314;
var k__11317 = cljs.core.nth.call(null,vec__11315__11316,0,null);
var v__11318 = cljs.core.nth.call(null,vec__11315__11316,1,null);
var k__11319 = ((cljs.core.keyword_QMARK_.call(null,k__11317))?cljs.core.name.call(null,k__11317):k__11317);
var v__11320 = ((cljs.core.keyword_QMARK_.call(null,v__11318))?cljs.core.name.call(null,v__11318):v__11318);
if(cljs.core.map_QMARK_.call(null,v__11320))
{return cljs.core.PersistentVector.fromArray([k__11319,jsObj.call(null,v__11320)], true);
} else
{return cljs.core.PersistentVector.fromArray([k__11319,v__11320], true);
}
}),obj)).strobj();
});
cljs_jquery.core.camel_case = (function camel_case(fnkeyword){
return cljs.core.name.call(null,fnkeyword);
});
cljs_jquery.core.call_jquery = (function call_jquery(obj,p__11322){
var vec__11334__11335 = p__11322;
var fn__11336 = cljs.core.nth.call(null,vec__11334__11335,0,null);
var args__11337 = cljs.core.nthnext.call(null,vec__11334__11335,1);
if((function (){var and__3822__auto____11338 = !(cljs.core.empty_QMARK_.call(null,args__11337));
if(and__3822__auto____11338)
{return cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,args__11337,0));
} else
{return and__3822__auto____11338;
}
})())
{var method__11339 = obj.get(cljs_jquery.core.camel_case.call(null,fn__11336));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__11321_SHARP_){
return method__11339.call(obj,cljs.core.name.call(null,cljs.core.first.call(null,p1__11321_SHARP_)),cljs.core.last.call(null,p1__11321_SHARP_));
}),cljs.core.nth.call(null,args__11337,0)));
return obj;
} else
{var pred__11340__11343 = cljs.core._EQ_;
var expr__11341__11344 = cljs.core.count.call(null,args__11337);
if(pred__11340__11343.call(null,0,expr__11341__11344))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__11336)).call(obj);
} else
{if(pred__11340__11343.call(null,1,expr__11341__11344))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__11336)).call(obj,cljs.core.nth.call(null,args__11337,0));
} else
{if(pred__11340__11343.call(null,2,expr__11341__11344))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__11336)).call(obj,cljs.core.nth.call(null,args__11337,0),cljs.core.nth.call(null,args__11337,1));
} else
{if(pred__11340__11343.call(null,3,expr__11341__11344))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__11336)).call(obj,cljs.core.nth.call(null,args__11337,0),cljs.core.nth.call(null,args__11337,1),cljs.core.nth.call(null,args__11337,2));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11341__11344)].join('')));
}
}
}
}
}
});
