goog.provide('session.client.mvc');
goog.require('cljs.core');
session.client.mvc.IMVC = {};
session.client.mvc.view = (function view(this$){
if(cljs.core.truth_((function (){var and__3822__auto____3303 = this$;

if(cljs.core.truth_(and__3822__auto____3303))
{return this$.session$client$mvc$IMVC$view;
} else
{return and__3822__auto____3303;
}
})()))
{return this$.session$client$mvc$IMVC$view(this$);
} else
{return (function (){var or__3824__auto____3304 = (session.client.mvc.view[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3304))
{return or__3824__auto____3304;
} else
{var or__3824__auto____3305 = (session.client.mvc.view["_"]);

if(cljs.core.truth_(or__3824__auto____3305))
{return or__3824__auto____3305;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.view",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control = (function control(this$,viewobject){
if(cljs.core.truth_((function (){var and__3822__auto____3306 = this$;

if(cljs.core.truth_(and__3822__auto____3306))
{return this$.session$client$mvc$IMVC$control;
} else
{return and__3822__auto____3306;
}
})()))
{return this$.session$client$mvc$IMVC$control(this$,viewobject);
} else
{return (function (){var or__3824__auto____3307 = (session.client.mvc.control[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3307))
{return or__3824__auto____3307;
} else
{var or__3824__auto____3308 = (session.client.mvc.control["_"]);

if(cljs.core.truth_(or__3824__auto____3308))
{return or__3824__auto____3308;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.control",this$);
}
}
})().call(null,this$,viewobject);
}
});
session.client.mvc.control2 = (function (){var method_table__585__auto____3309 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__586__auto____3310 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__587__auto____3311 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__588__auto____3312 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__589__auto____3313 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("control2",(function (p1__3302_SHARP_){
return cljs.core.identity.call(null,"\uFDD0'view".call(null,cljs.core.meta.call(null,p1__3302_SHARP_)));
}),"\uFDD0'default",hierarchy__589__auto____3313,method_table__585__auto____3309,prefer_table__586__auto____3310,method_cache__587__auto____3311,cached_hierarchy__588__auto____3312));
})();
cljs.core._add_method.call(null,session.client.mvc.control2,"\uFDD0'default",(function (){
return null;
}));
session.client.mvc.view2 = (function (){var method_table__585__auto____3315 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__586__auto____3316 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__587__auto____3317 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__588__auto____3318 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__589__auto____3319 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("view2",(function (p1__3314_SHARP_){
return cljs.core.identity.call(null,"\uFDD0'view".call(null,cljs.core.meta.call(null,p1__3314_SHARP_)));
}),"\uFDD0'default",hierarchy__589__auto____3319,method_table__585__auto____3315,prefer_table__586__auto____3316,method_cache__587__auto____3317,cached_hierarchy__588__auto____3318));
})();
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'dom",(function (arg){
if(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",arg)))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if(cljs.core.truth_((function (){var or__3824__auto____3320 = cljs.core.vector_QMARK_.call(null,arg);

if(cljs.core.truth_(or__3824__auto____3320))
{return or__3824__auto____3320;
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
var v__3321 = session.client.mvc.view.call(null,m);

session.client.mvc.control.call(null,m,v__3321);
return v__3321;
});
