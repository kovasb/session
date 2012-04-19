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
cljs_jquery.core.set_dom_attribute = (function set_dom_attribute(elt,p__3133){
var vec__3134__3135 = p__3133;
var attribute__3136 = cljs.core.nth.call(null,vec__3134__3135,0,null);
var value__3137 = cljs.core.nth.call(null,vec__3134__3135,1,null);

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,value__3137)))
{return elt.attr(cljs.core.name.call(null,attribute__3136),value__3137);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'css",attribute__3136)))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__3132_SHARP_){
return elt.css(cljs.core.name.call(null,cljs.core.first.call(null,p1__3132_SHARP_)),cljs.core.last.call(null,p1__3132_SHARP_));
}),value__3137));
} else
{return null;
}
}
});
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["﷐'xhtml","﷐'svg"],{"﷐'xhtml":"http://www.w3.org/1999/xhtml","﷐'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = (function keyword_to_dom_object(kw){
var vec__3141__3143 = cljs.core.re_matches.call(null,cljs_jquery.core.re_tag,cljs.core.name.call(null,kw));
var ___3144 = cljs.core.nth.call(null,vec__3141__3143,0,null);
var tag__3145 = cljs.core.nth.call(null,vec__3141__3143,1,null);
var id__3146 = cljs.core.nth.call(null,vec__3141__3143,2,null);
var class$__3147 = cljs.core.nth.call(null,vec__3141__3143,3,null);
var vec__3142__3154 = (function (){var vec__3148__3149 = clojure.string.split.call(null,tag__3145,/:/);
var nsp__3150 = cljs.core.nth.call(null,vec__3148__3149,0,null);
var t__3151 = cljs.core.nth.call(null,vec__3148__3149,1,null);
var ns_xmlns__3152 = cljs_jquery.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__3150));

if(cljs.core.truth_(t__3151))
{return cljs.core.Vector.fromArray([(function (){var or__3824__auto____3153 = ns_xmlns__3152;

if(cljs.core.truth_(or__3824__auto____3153))
{return or__3824__auto____3153;
} else
{return nsp__3150;
}
})(),t__3151]);
} else
{return cljs.core.Vector.fromArray(["﷐'xhtml".call(null,cljs_jquery.core.xmlns),nsp__3150]);
}
})();
var nsp__3155 = cljs.core.nth.call(null,vec__3142__3154,0,null);
var tag__3156 = cljs.core.nth.call(null,vec__3142__3154,1,null);
var elt__3157 = cljs_jquery.core.jquery.call(null,document.createElementNS(nsp__3155,tag__3156));

if(cljs.core.truth_(id__3146))
{elt__3157.attr("id",id__3146);
} else
{}
if(cljs.core.truth_(class$__3147))
{elt__3157.addClass(clojure.string.replace.call(null,class$__3147,/\./," "));
} else
{}
return elt__3157;
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
{if(cljs.core.truth_((function (){var and__3822__auto____3159 = (function (){var or__3824__auto____3158 = cljs.core.vector_QMARK_.call(null,arg);

if(cljs.core.truth_(or__3824__auto____3158))
{return or__3824__auto____3158;
} else
{return cljs.core.seq_QMARK_.call(null,arg);
}
})();

if(cljs.core.truth_(and__3822__auto____3159))
{return cljs.core.first.call(null,arg);
} else
{return and__3822__auto____3159;
}
})()))
{var elt__3160 = dom_create.call(null,cljs.core.first.call(null,arg));
var nextelt__3161 = cljs.core.next.call(null,arg);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,nextelt__3161))))
{
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__3138_SHARP_){
return cljs_jquery.core.set_dom_attribute.call(null,elt__3160,p1__3138_SHARP_);
}),cljs.core.first.call(null,nextelt__3161)));
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__3139_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__3160,dom_create.call(null,p1__3139_SHARP_));
}),cljs.core.next.call(null,nextelt__3161)));
return elt__3160;
} else
{
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__3140_SHARP_){
return cljs_jquery.core.dom_append.call(null,elt__3160,dom_create.call(null,p1__3140_SHARP_));
}),nextelt__3161));
return elt__3160;
}
} else
{return null;
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
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__3162){
var vec__3163__3164 = p__3162;
var k__3165 = cljs.core.nth.call(null,vec__3163__3164,0,null);
var v__3166 = cljs.core.nth.call(null,vec__3163__3164,1,null);

var k__3167 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,k__3165))?cljs.core.name.call(null,k__3165):k__3165);
var v__3168 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,v__3166))?cljs.core.name.call(null,v__3166):v__3166);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,v__3168)))
{return cljs.core.Vector.fromArray([k__3167,jsObj.call(null,v__3168)]);
} else
{return cljs.core.Vector.fromArray([k__3167,v__3168]);
}
}),obj)).strobj();
});
cljs_jquery.core.camel_case = (function camel_case(fnkeyword){
return cljs.core.name.call(null,fnkeyword);
});
cljs_jquery.core.call_jquery = (function call_jquery(obj,p__3170){
var vec__3171__3172 = p__3170;
var fn__3173 = cljs.core.nth.call(null,vec__3171__3172,0,null);
var args__3174 = cljs.core.nthnext.call(null,vec__3171__3172,1);

if(cljs.core.truth_((function (){var and__3822__auto____3175 = cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,args__3174));

if(cljs.core.truth_(and__3822__auto____3175))
{return cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,args__3174,0));
} else
{return and__3822__auto____3175;
}
})()))
{var method__3176 = obj.get(cljs_jquery.core.camel_case.call(null,fn__3173));

cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__3169_SHARP_){
return method__3176.call(obj,cljs.core.name.call(null,cljs.core.first.call(null,p1__3169_SHARP_)),cljs.core.last.call(null,p1__3169_SHARP_));
}),cljs.core.nth.call(null,args__3174,0)));
return obj;
} else
{var pred__3177__3180 = cljs.core._EQ_;
var expr__3178__3181 = cljs.core.count.call(null,args__3174);

if(cljs.core.truth_(pred__3177__3180.call(null,0,expr__3178__3181)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__3173)).call(obj);
} else
{if(cljs.core.truth_(pred__3177__3180.call(null,1,expr__3178__3181)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__3173)).call(obj,cljs.core.nth.call(null,args__3174,0));
} else
{if(cljs.core.truth_(pred__3177__3180.call(null,2,expr__3178__3181)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__3173)).call(obj,cljs.core.nth.call(null,args__3174,0),cljs.core.nth.call(null,args__3174,1));
} else
{if(cljs.core.truth_(pred__3177__3180.call(null,3,expr__3178__3181)))
{return obj.get(cljs_jquery.core.camel_case.call(null,fn__3173)).call(obj,cljs.core.nth.call(null,args__3174,0),cljs.core.nth.call(null,args__3174,1),cljs.core.nth.call(null,args__3174,2));
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__3178__3181)));
}
}
}
}
}
});
