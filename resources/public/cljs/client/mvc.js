goog.provide('session.client.mvc');
goog.require('cljs.core');
session.client.mvc.IMVC = {};
session.client.mvc.view = (function view(this$){
if(cljs.core.truth_((function (){var and__3822__auto____50030 = this$;

if(cljs.core.truth_(and__3822__auto____50030))
{return this$.session$client$mvc$IMVC$view;
} else
{return and__3822__auto____50030;
}
})()))
{return this$.session$client$mvc$IMVC$view(this$);
} else
{return (function (){var or__3824__auto____50031 = (session.client.mvc.view[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50031))
{return or__3824__auto____50031;
} else
{var or__3824__auto____50032 = (session.client.mvc.view["_"]);

if(cljs.core.truth_(or__3824__auto____50032))
{return or__3824__auto____50032;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.view",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control = (function control(this$,viewobject){
if(cljs.core.truth_((function (){var and__3822__auto____50033 = this$;

if(cljs.core.truth_(and__3822__auto____50033))
{return this$.session$client$mvc$IMVC$control;
} else
{return and__3822__auto____50033;
}
})()))
{return this$.session$client$mvc$IMVC$control(this$,viewobject);
} else
{return (function (){var or__3824__auto____50034 = (session.client.mvc.control[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50034))
{return or__3824__auto____50034;
} else
{var or__3824__auto____50035 = (session.client.mvc.control["_"]);

if(cljs.core.truth_(or__3824__auto____50035))
{return or__3824__auto____50035;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.control",this$);
}
}
})().call(null,this$,viewobject);
}
});
session.client.mvc.control2 = (function (){var method_table__585__auto____50036 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__586__auto____50037 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__587__auto____50038 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__588__auto____50039 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__589__auto____50040 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("control2",(function (p1__50029_SHARP_){
return cljs.core.identity.call(null,"\uFDD0'view".call(null,cljs.core.meta.call(null,p1__50029_SHARP_)));
}),"\uFDD0'default",hierarchy__589__auto____50040,method_table__585__auto____50036,prefer_table__586__auto____50037,method_cache__587__auto____50038,cached_hierarchy__588__auto____50039));
})();
cljs.core._add_method.call(null,session.client.mvc.control2,"\uFDD0'default",(function (){
return null;
}));
session.client.mvc.view2 = (function (){var method_table__585__auto____50042 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__586__auto____50043 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__587__auto____50044 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__588__auto____50045 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__589__auto____50046 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("view2",(function (p1__50041_SHARP_){
return cljs.core.identity.call(null,"\uFDD0'view".call(null,cljs.core.meta.call(null,p1__50041_SHARP_)));
}),"\uFDD0'default",hierarchy__589__auto____50046,method_table__585__auto____50042,prefer_table__586__auto____50043,method_cache__587__auto____50044,cached_hierarchy__588__auto____50045));
})();
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'dom",(function (arg){
if(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",arg)))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if(cljs.core.truth_((function (){var or__3824__auto____50047 = cljs.core.vector_QMARK_.call(null,arg);

if(cljs.core.truth_(or__3824__auto____50047))
{return or__3824__auto____50047;
} else
{return cljs.core.keyword_QMARK_.call(null,arg);
}
})()))
{return cljs_jquery.core.dom_create.call(null,arg);
} else
{if(cljs.core.truth_(true))
{return cljs_jquery.core.jquery.call(null,arg);
} else
{return null;
}
}
}
}));
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'default",(function (arg){
if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Element,arg)))
{return arg;
} else
{if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,jQuery,arg)))
{return arg;
} else
{if(cljs.core.truth_(true))
{return cljs.core.pr_str.call(null,arg);
} else
{return null;
}
}
}
}));
session.client.mvc.render = (function render(m){
var v__50048 = session.client.mvc.view.call(null,m);

session.client.mvc.control.call(null,m,v__50048);
return v__50048;
});
