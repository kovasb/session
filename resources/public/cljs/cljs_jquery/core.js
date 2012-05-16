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
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__32085_SHARP_){
return dom_append.call(null,parent,p1__32085_SHARP_);
}),child));
} else
{return parent.append(child);
}
});
cljs_jquery.core.set_dom_attribute = (function set_dom_attribute(elt,p__32087){
var vec__32088__32089 = p__32087;
var attribute__32090 = cljs.core.nth.call(null,vec__32088__32089,0,null);
var value__32091 = cljs.core.nth.call(null,vec__32088__32089,1,null);

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,value__32091)))
{return elt.attr(cljs.core.name.call(null,attribute__32090),value__32091);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'css",attribute__32090)))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__32086_SHARP_){
return elt.css(cljs.core.name.call(null,cljs.core.first.call(null,p1__32086_SHARP_)),cljs.core.last.call(null,p1__32086_SHARP_));
}),value__32091));
} else
{return null;
}
}
});
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = (function keyword_to_dom_object(kw){
var vec__32095__32097 = cljs.core.re_matches.call(null,cljs_jquery.core.re_tag,cljs.core.name.call(null,kw));
var ___32098 = cljs.core.nth.call(null,vec__32095__32097,0,null);
var tag__32099 = cljs.core.nth.call(null,vec__32095__32097,1,null);
var id__32100 = cljs.core.nth.call(null,vec__32095__32097,2,null);
var class$__32101 = cljs.core.nth.call(null,vec__32095__32097,3,null);
var vec__32096__32108 = (function (){var vec__32102__32103 = clojure.string.split.call(null,tag__32099,/:/);
var nsp__32104 = cljs.core.nth.call(null,vec__32102__32103,0,null);
var t__32105 = cljs.core.nth.call(null,vec__32102__32103,1,null);
var ns_xmlns__32106 = cljs_jquery.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__32104));

if(cljs.core.truth_(t__32105))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3824__auto____32107 = ns_xmlns__32106;

if(cljs.core.truth_(or__3824__auto____32107))
{return or__3824__auto____32107;
} else
{return nsp__32104;
}
})(),t__32105]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,cljs_jquery.core.xmlns),nsp__32104]);
}
})();
var nsp__32109 = cljs.core.nth.call(null,vec__32096__32108,0,null);
var tag__32110 = cljs.core.nth.call(null,vec__32096__32108,1,null);
var elt__32111 = cljs_jquery.core.jquery.call(null,document.createElementNS(nsp__32109,tag__32110));

if(cljs.core.truth_(id__32100))
{elt__32111.attr("id",id__32100);
} else
{}
if(cljs.core.truth_(class$__32101))
{elt__32111.addClass(clojure.string.replace.call(null,class$__32101,/\./," "));
} else
{}
return elt__32111;
});
cljs_jquery.core.hiccup_to_dom_object = (function hiccup_to_dom_object(x){
var elt__32112 = cljs_jquery.core.dom_create.call(null,cljs.core.first.call(null,x));
var nextelt__32113 = cljs.core.next.call(null,x);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt__32113))))
{
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__32092_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt__32112,p1__32092_SHARP_);
}),cljs.core.first.call(null,nextelt__32113)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__32093_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__32112,cljs_jquery.core.dom_create.call(null,p1__32093_SHARP_));
}),cljs.core.next.call(null,nextelt__32113)));
return elt__32112;
} else
{
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__32094_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__32112,cljs_jquery.core.dom_create.call(null,p1__32094_SHARP_));
}),nextelt__32113));
return elt__32112;
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
{if(cljs.core.truth_((function (){var and__3822__auto____32114 = cljs.core.vector_QMARK_.call(null,arg);

if(cljs.core.truth_(and__3822__auto____32114))
{return cljs.core.first.call(null,arg);
} else
{return and__3822__auto____32114;
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
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__32115){
var vec__32116__32117 = p__32115;
var k__32118 = cljs.core.nth.call(null,vec__32116__32117,0,null);
var v__32119 = cljs.core.nth.call(null,vec__32116__32117,1,null);

var k__32120 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,k__32118))?cljs.core.name.call(null,k__32118):k__32118);
var v__32121 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,v__32119))?cljs.core.name.call(null,v__32119):v__32119);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,v__32121)))
{return cljs.core.PersistentVector.fromArray([k__32120,jsObj.call(null,v__32121)]);
} else
{return cljs.core.PersistentVector.fromArray([k__32120,v__32121]);
}
}),obj)).strobj();
});
cljs_jquery.core.camel_case = (function camel_case(fnkeyword){
return cljs.core.name.call(null,fnkeyword);
});
cljs_jquery.core.call_jquery = (function call_jquery(obj,p__32123){
var vec__32124__32125 = p__32123;
var fn__32126 = cljs.core.nth.call(null,vec__32124__32125,0,null);
var args__32127 = cljs.core.nthnext.call(null,vec__32124__32125,1);

if(cljs.core.truth_((function (){var and__3822__auto____32128 = cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,args__32127));

if(cljs.core.truth_(and__3822__auto____32128))
{return cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,args__32127,0));
} else
{return and__3822__auto____32128;
}
})()))
{var method__32129 = obj.get(cljs_jquery.core.camel_case.call(null,fn__32126));

cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__32122_SHARP_){
return method__32129.call(obj,cljs.core.name.call(null,cljs.core.first.call(null,p1__32122_SHARP_)),cljs.core.last.call(null,p1__32122_SHARP_));
}),cljs.core.nth.call(null,args__32127,0)));
return obj;
} else
{var pred__32130__32133 = cljs.core._EQ_;
var expr__32131__32134 = cljs.core.count.call(null,args__32127);

if(cljs.core.truth_(pred__32130__32133.call(null,0,expr__32131__32134)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__32126)).call(obj);
} else
{if(cljs.core.truth_(pred__32130__32133.call(null,1,expr__32131__32134)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__32126)).call(obj,cljs.core.nth.call(null,args__32127,0));
} else
{if(cljs.core.truth_(pred__32130__32133.call(null,2,expr__32131__32134)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__32126)).call(obj,cljs.core.nth.call(null,args__32127,0),cljs.core.nth.call(null,args__32127,1));
} else
{if(cljs.core.truth_(pred__32130__32133.call(null,3,expr__32131__32134)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__32126)).call(obj,cljs.core.nth.call(null,args__32127,0),cljs.core.nth.call(null,args__32127,1),cljs.core.nth.call(null,args__32127,2));
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__32131__32134)));
}
}
}
}
}
});
