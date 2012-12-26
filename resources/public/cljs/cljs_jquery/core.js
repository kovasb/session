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
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12850_SHARP_){
return dom_append.call(null,parent,p1__12850_SHARP_);
}),child));
} else
{return parent.append(child);
}
});
cljs_jquery.core.set_dom_attribute = (function set_dom_attribute(elt,p__12852){
var vec__12857__12858 = p__12852;
var attribute__12859 = cljs.core.nth.call(null,vec__12857__12858,0,null);
var value__12860 = cljs.core.nth.call(null,vec__12857__12858,1,null);
if(cljs.core.string_QMARK_.call(null,value__12860))
{return elt.attr(cljs.core.name.call(null,attribute__12859),value__12860);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'css",attribute__12859))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12851_SHARP_){
return elt.css(cljs.core.name.call(null,cljs.core.first.call(null,p1__12851_SHARP_)),cljs.core.last.call(null,p1__12851_SHARP_));
}),value__12860));
} else
{return null;
}
}
});
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = (function keyword_to_dom_object(kw){
var vec__12881__12883 = cljs.core.re_matches.call(null,cljs_jquery.core.re_tag,cljs.core.name.call(null,kw));
var ___12884 = cljs.core.nth.call(null,vec__12881__12883,0,null);
var tag__12885 = cljs.core.nth.call(null,vec__12881__12883,1,null);
var id__12886 = cljs.core.nth.call(null,vec__12881__12883,2,null);
var class__12887 = cljs.core.nth.call(null,vec__12881__12883,3,null);
var vec__12882__12894 = (function (){var vec__12888__12889 = clojure.string.split.call(null,tag__12885,/:/);
var nsp__12890 = cljs.core.nth.call(null,vec__12888__12889,0,null);
var t__12891 = cljs.core.nth.call(null,vec__12888__12889,1,null);
var ns_xmlns__12892 = cljs_jquery.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__12890));
if(cljs.core.truth_(t__12891))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3939__auto____12893 = ns_xmlns__12892;
if(cljs.core.truth_(or__3939__auto____12893))
{return or__3939__auto____12893;
} else
{return nsp__12890;
}
})(),t__12891], true);
} else
{return cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'xhtml")).call(null,cljs_jquery.core.xmlns),nsp__12890], true);
}
})();
var nsp__12895 = cljs.core.nth.call(null,vec__12882__12894,0,null);
var tag__12896 = cljs.core.nth.call(null,vec__12882__12894,1,null);
var elt__12897 = cljs_jquery.core.jquery.call(null,document.createElementNS(nsp__12895,tag__12896));
if(cljs.core.truth_(id__12886))
{elt__12897.attr("id",id__12886);
} else
{}
if(cljs.core.truth_(class__12887))
{elt__12897.addClass(clojure.string.replace.call(null,class__12887,/\./," "));
} else
{}
return elt__12897;
});
cljs_jquery.core.hiccup_to_dom_object = (function hiccup_to_dom_object(x){
var elt__12900 = cljs_jquery.core.dom_create.call(null,cljs.core.first.call(null,x));
var nextelt__12901 = cljs.core.next.call(null,x);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt__12901)))
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12861_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt__12900,p1__12861_SHARP_);
}),cljs.core.first.call(null,nextelt__12901)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12862_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__12900,cljs_jquery.core.dom_create.call(null,p1__12862_SHARP_));
}),cljs.core.next.call(null,nextelt__12901)));
return elt__12900;
} else
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12863_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__12900,cljs_jquery.core.dom_create.call(null,p1__12863_SHARP_));
}),nextelt__12901));
return elt__12900;
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
{if(cljs.core.truth_((function (){var and__3937__auto____12903 = cljs.core.vector_QMARK_.call(null,arg);
if(and__3937__auto____12903)
{return cljs.core.first.call(null,arg);
} else
{return and__3937__auto____12903;
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
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__12911){
var vec__12912__12913 = p__12911;
var k__12914 = cljs.core.nth.call(null,vec__12912__12913,0,null);
var v__12915 = cljs.core.nth.call(null,vec__12912__12913,1,null);
var k__12916 = ((cljs.core.keyword_QMARK_.call(null,k__12914))?cljs.core.name.call(null,k__12914):k__12914);
var v__12917 = ((cljs.core.keyword_QMARK_.call(null,v__12915))?cljs.core.name.call(null,v__12915):v__12915);
if(cljs.core.map_QMARK_.call(null,v__12917))
{return cljs.core.PersistentVector.fromArray([k__12916,jsObj.call(null,v__12917)], true);
} else
{return cljs.core.PersistentVector.fromArray([k__12916,v__12917], true);
}
}),obj)).strobj();
});
cljs_jquery.core.camel_case = (function camel_case(fnkeyword){
return cljs.core.name.call(null,fnkeyword);
});
cljs_jquery.core.call_jquery = (function call_jquery(obj,p__12919){
var vec__12931__12932 = p__12919;
var fn__12933 = cljs.core.nth.call(null,vec__12931__12932,0,null);
var args__12934 = cljs.core.nthnext.call(null,vec__12931__12932,1);
if((function (){var and__3937__auto____12935 = !(cljs.core.empty_QMARK_.call(null,args__12934));
if(and__3937__auto____12935)
{return cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,args__12934,0));
} else
{return and__3937__auto____12935;
}
})())
{var method__12936 = obj.get(cljs_jquery.core.camel_case.call(null,fn__12933));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12918_SHARP_){
return method__12936.call(obj,cljs.core.name.call(null,cljs.core.first.call(null,p1__12918_SHARP_)),cljs.core.last.call(null,p1__12918_SHARP_));
}),cljs.core.nth.call(null,args__12934,0)));
return obj;
} else
{var pred__12937__12940 = cljs.core._EQ_;
var expr__12938__12941 = cljs.core.count.call(null,args__12934);
if(pred__12937__12940.call(null,0,expr__12938__12941))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12933)).call(obj);
} else
{if(pred__12937__12940.call(null,1,expr__12938__12941))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12933)).call(obj,cljs.core.nth.call(null,args__12934,0));
} else
{if(pred__12937__12940.call(null,2,expr__12938__12941))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12933)).call(obj,cljs.core.nth.call(null,args__12934,0),cljs.core.nth.call(null,args__12934,1));
} else
{if(pred__12937__12940.call(null,3,expr__12938__12941))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12933)).call(obj,cljs.core.nth.call(null,args__12934,0),cljs.core.nth.call(null,args__12934,1),cljs.core.nth.call(null,args__12934,2));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12938__12941)].join('')));
}
}
}
}
}
});
