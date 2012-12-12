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
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__4067_SHARP_){
return dom_append.call(null,parent,p1__4067_SHARP_);
}),child));
} else
{return parent.append(child);
}
});
cljs_jquery.core.set_dom_attribute = (function set_dom_attribute(elt,p__4069){
var vec__4071 = p__4069;
var attribute = cljs.core.nth.call(null,vec__4071,0,null);
var value = cljs.core.nth.call(null,vec__4071,1,null);
if(cljs.core.string_QMARK_.call(null,value))
{return elt.attr(cljs.core.name.call(null,attribute),value);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'css",attribute))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__4068_SHARP_){
return elt.css(cljs.core.name.call(null,cljs.core.first.call(null,p1__4068_SHARP_)),cljs.core.last.call(null,p1__4068_SHARP_));
}),value));
} else
{return null;
}
}
});
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = (function keyword_to_dom_object(kw){
var vec__4078 = cljs.core.re_matches.call(null,cljs_jquery.core.re_tag,cljs.core.name.call(null,kw));
var _ = cljs.core.nth.call(null,vec__4078,0,null);
var tag = cljs.core.nth.call(null,vec__4078,1,null);
var id = cljs.core.nth.call(null,vec__4078,2,null);
var class$ = cljs.core.nth.call(null,vec__4078,3,null);
var vec__4079 = (function (){var vec__4080 = clojure.string.split.call(null,tag,/:/);
var nsp = cljs.core.nth.call(null,vec__4080,0,null);
var t = cljs.core.nth.call(null,vec__4080,1,null);
var ns_xmlns = cljs_jquery.core.xmlns.call(null,cljs.core.keyword.call(null,nsp));
if(cljs.core.truth_(t))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3939__auto__ = ns_xmlns;
if(cljs.core.truth_(or__3939__auto__))
{return or__3939__auto__;
} else
{return nsp;
}
})(),t], true);
} else
{return cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'xhtml")).call(null,cljs_jquery.core.xmlns),nsp], true);
}
})();
var nsp = cljs.core.nth.call(null,vec__4079,0,null);
var tag__$1 = cljs.core.nth.call(null,vec__4079,1,null);
var elt = cljs_jquery.core.jquery.call(null,document.createElementNS(nsp,tag__$1));
if(cljs.core.truth_(id))
{elt.attr("id",id);
} else
{}
if(cljs.core.truth_(class$))
{elt.addClass(clojure.string.replace.call(null,class$,/\./," "));
} else
{}
return elt;
});
cljs_jquery.core.hiccup_to_dom_object = (function hiccup_to_dom_object(x){
var elt = cljs_jquery.core.dom_create.call(null,cljs.core.first.call(null,x));
var nextelt = cljs.core.next.call(null,x);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt)))
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__4072_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt,p1__4072_SHARP_);
}),cljs.core.first.call(null,nextelt)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__4073_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt,cljs_jquery.core.dom_create.call(null,p1__4073_SHARP_));
}),cljs.core.next.call(null,nextelt)));
return elt;
} else
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__4074_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt,cljs_jquery.core.dom_create.call(null,p1__4074_SHARP_));
}),nextelt));
return elt;
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
{if(cljs.core.truth_((function (){var and__3937__auto__ = cljs.core.vector_QMARK_.call(null,arg);
if(and__3937__auto__)
{return cljs.core.first.call(null,arg);
} else
{return and__3937__auto__;
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
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__4083){
var vec__4084 = p__4083;
var k = cljs.core.nth.call(null,vec__4084,0,null);
var v = cljs.core.nth.call(null,vec__4084,1,null);
var k__$1 = ((cljs.core.keyword_QMARK_.call(null,k))?cljs.core.name.call(null,k):k);
var v__$1 = ((cljs.core.keyword_QMARK_.call(null,v))?cljs.core.name.call(null,v):v);
if(cljs.core.map_QMARK_.call(null,v__$1))
{return cljs.core.PersistentVector.fromArray([k__$1,jsObj.call(null,v__$1)], true);
} else
{return cljs.core.PersistentVector.fromArray([k__$1,v__$1], true);
}
}),obj)).strobj();
});
cljs_jquery.core.camel_case = (function camel_case(fnkeyword){
return cljs.core.name.call(null,fnkeyword);
});
cljs_jquery.core.call_jquery = (function call_jquery(obj,p__4086){
var vec__4091 = p__4086;
var fn = cljs.core.nth.call(null,vec__4091,0,null);
var args = cljs.core.nthnext.call(null,vec__4091,1);
if((function (){var and__3937__auto__ = !(cljs.core.empty_QMARK_.call(null,args));
if(and__3937__auto__)
{return cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,args,0));
} else
{return and__3937__auto__;
}
})())
{var method = obj.get(cljs_jquery.core.camel_case.call(null,fn));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__4085_SHARP_){
return method.call(obj,cljs.core.name.call(null,cljs.core.first.call(null,p1__4085_SHARP_)),cljs.core.last.call(null,p1__4085_SHARP_));
}),cljs.core.nth.call(null,args,0)));
return obj;
} else
{var pred__4092 = cljs.core._EQ_;
var expr__4093 = cljs.core.count.call(null,args);
if(pred__4092.call(null,0,expr__4093))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn)).call(obj);
} else
{if(pred__4092.call(null,1,expr__4093))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn)).call(obj,cljs.core.nth.call(null,args,0));
} else
{if(pred__4092.call(null,2,expr__4093))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn)).call(obj,cljs.core.nth.call(null,args,0),cljs.core.nth.call(null,args,1));
} else
{if(pred__4092.call(null,3,expr__4093))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn)).call(obj,cljs.core.nth.call(null,args,0),cljs.core.nth.call(null,args,1),cljs.core.nth.call(null,args,2));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__4093)].join('')));
}
}
}
}
}
});
