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
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12857_SHARP_){
return dom_append.call(null,parent,p1__12857_SHARP_);
}),child));
} else
{return parent.append(child);
}
});
cljs_jquery.core.set_dom_attribute = (function set_dom_attribute(elt,p__12859){
var vec__12864__12865 = p__12859;
var attribute__12866 = cljs.core.nth.call(null,vec__12864__12865,0,null);
var value__12867 = cljs.core.nth.call(null,vec__12864__12865,1,null);
if(cljs.core.string_QMARK_.call(null,value__12867))
{return elt.attr(cljs.core.name.call(null,attribute__12866),value__12867);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'css",attribute__12866))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12858_SHARP_){
return elt.css(cljs.core.name.call(null,cljs.core.first.call(null,p1__12858_SHARP_)),cljs.core.last.call(null,p1__12858_SHARP_));
}),value__12867));
} else
{return null;
}
}
});
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = (function keyword_to_dom_object(kw){
var vec__12888__12890 = cljs.core.re_matches.call(null,cljs_jquery.core.re_tag,cljs.core.name.call(null,kw));
var ___12891 = cljs.core.nth.call(null,vec__12888__12890,0,null);
var tag__12892 = cljs.core.nth.call(null,vec__12888__12890,1,null);
var id__12893 = cljs.core.nth.call(null,vec__12888__12890,2,null);
var class__12894 = cljs.core.nth.call(null,vec__12888__12890,3,null);
var vec__12889__12901 = (function (){var vec__12895__12896 = clojure.string.split.call(null,tag__12892,/:/);
var nsp__12897 = cljs.core.nth.call(null,vec__12895__12896,0,null);
var t__12898 = cljs.core.nth.call(null,vec__12895__12896,1,null);
var ns_xmlns__12899 = cljs_jquery.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__12897));
if(cljs.core.truth_(t__12898))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3824__auto____12900 = ns_xmlns__12899;
if(cljs.core.truth_(or__3824__auto____12900))
{return or__3824__auto____12900;
} else
{return nsp__12897;
}
})(),t__12898], true);
} else
{return cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'xhtml")).call(null,cljs_jquery.core.xmlns),nsp__12897], true);
}
})();
var nsp__12902 = cljs.core.nth.call(null,vec__12889__12901,0,null);
var tag__12903 = cljs.core.nth.call(null,vec__12889__12901,1,null);
var elt__12904 = cljs_jquery.core.jquery.call(null,document.createElementNS(nsp__12902,tag__12903));
if(cljs.core.truth_(id__12893))
{elt__12904.attr("id",id__12893);
} else
{}
if(cljs.core.truth_(class__12894))
{elt__12904.addClass(clojure.string.replace.call(null,class__12894,/\./," "));
} else
{}
return elt__12904;
});
cljs_jquery.core.hiccup_to_dom_object = (function hiccup_to_dom_object(x){
var elt__12907 = cljs_jquery.core.dom_create.call(null,cljs.core.first.call(null,x));
var nextelt__12908 = cljs.core.next.call(null,x);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt__12908)))
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12868_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt__12907,p1__12868_SHARP_);
}),cljs.core.first.call(null,nextelt__12908)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12869_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__12907,cljs_jquery.core.dom_create.call(null,p1__12869_SHARP_));
}),cljs.core.next.call(null,nextelt__12908)));
return elt__12907;
} else
{cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12870_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__12907,cljs_jquery.core.dom_create.call(null,p1__12870_SHARP_));
}),nextelt__12908));
return elt__12907;
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
{if(cljs.core.truth_((function (){var and__3822__auto____12910 = cljs.core.vector_QMARK_.call(null,arg);
if(and__3822__auto____12910)
{return cljs.core.first.call(null,arg);
} else
{return and__3822__auto____12910;
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
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__12918){
var vec__12919__12920 = p__12918;
var k__12921 = cljs.core.nth.call(null,vec__12919__12920,0,null);
var v__12922 = cljs.core.nth.call(null,vec__12919__12920,1,null);
var k__12923 = ((cljs.core.keyword_QMARK_.call(null,k__12921))?cljs.core.name.call(null,k__12921):k__12921);
var v__12924 = ((cljs.core.keyword_QMARK_.call(null,v__12922))?cljs.core.name.call(null,v__12922):v__12922);
if(cljs.core.map_QMARK_.call(null,v__12924))
{return cljs.core.PersistentVector.fromArray([k__12923,jsObj.call(null,v__12924)], true);
} else
{return cljs.core.PersistentVector.fromArray([k__12923,v__12924], true);
}
}),obj)).strobj();
});
cljs_jquery.core.camel_case = (function camel_case(fnkeyword){
return cljs.core.name.call(null,fnkeyword);
});
cljs_jquery.core.call_jquery = (function call_jquery(obj,p__12926){
var vec__12938__12939 = p__12926;
var fn__12940 = cljs.core.nth.call(null,vec__12938__12939,0,null);
var args__12941 = cljs.core.nthnext.call(null,vec__12938__12939,1);
if((function (){var and__3822__auto____12942 = !(cljs.core.empty_QMARK_.call(null,args__12941));
if(and__3822__auto____12942)
{return cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,args__12941,0));
} else
{return and__3822__auto____12942;
}
})())
{var method__12943 = obj.get(cljs_jquery.core.camel_case.call(null,fn__12940));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12925_SHARP_){
return method__12943.call(obj,cljs.core.name.call(null,cljs.core.first.call(null,p1__12925_SHARP_)),cljs.core.last.call(null,p1__12925_SHARP_));
}),cljs.core.nth.call(null,args__12941,0)));
return obj;
} else
{var pred__12944__12947 = cljs.core._EQ_;
var expr__12945__12948 = cljs.core.count.call(null,args__12941);
if(pred__12944__12947.call(null,0,expr__12945__12948))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12940)).call(obj);
} else
{if(pred__12944__12947.call(null,1,expr__12945__12948))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12940)).call(obj,cljs.core.nth.call(null,args__12941,0));
} else
{if(pred__12944__12947.call(null,2,expr__12945__12948))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12940)).call(obj,cljs.core.nth.call(null,args__12941,0),cljs.core.nth.call(null,args__12941,1));
} else
{if(pred__12944__12947.call(null,3,expr__12945__12948))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__12940)).call(obj,cljs.core.nth.call(null,args__12941,0),cljs.core.nth.call(null,args__12941,1),cljs.core.nth.call(null,args__12941,2));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12945__12948)].join('')));
}
}
}
}
}
});
