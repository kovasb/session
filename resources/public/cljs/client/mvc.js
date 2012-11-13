goog.provide('session.client.mvc');
goog.require('cljs.core');
session.client.mvc.IMVC = {};
session.client.mvc.view = (function view(this$){
if((function (){var and__3822__auto____258825 = this$;
if(and__3822__auto____258825)
{return this$.session$client$mvc$IMVC$view$arity$1;
} else
{return and__3822__auto____258825;
}
})())
{return this$.session$client$mvc$IMVC$view$arity$1(this$);
} else
{var x__2363__auto____258826 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____258827 = (session.client.mvc.view[goog.typeOf(x__2363__auto____258826)]);
if(or__3824__auto____258827)
{return or__3824__auto____258827;
} else
{var or__3824__auto____258828 = (session.client.mvc.view["_"]);
if(or__3824__auto____258828)
{return or__3824__auto____258828;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.view",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control = (function control(this$){
if((function (){var and__3822__auto____258833 = this$;
if(and__3822__auto____258833)
{return this$.session$client$mvc$IMVC$control$arity$1;
} else
{return and__3822__auto____258833;
}
})())
{return this$.session$client$mvc$IMVC$control$arity$1(this$);
} else
{var x__2363__auto____258834 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____258835 = (session.client.mvc.control[goog.typeOf(x__2363__auto____258834)]);
if(or__3824__auto____258835)
{return or__3824__auto____258835;
} else
{var or__3824__auto____258836 = (session.client.mvc.control["_"]);
if(or__3824__auto____258836)
{return or__3824__auto____258836;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.control",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control2 = (function (){var method_table__2537__auto____258837 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2538__auto____258838 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2539__auto____258839 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2540__auto____258840 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2541__auto____258841 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("control2",(function (p1__258820_SHARP_){
return cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'view")).call(null,cljs.core.meta.call(null,p1__258820_SHARP_)));
}),"\uFDD0'default",hierarchy__2541__auto____258841,method_table__2537__auto____258837,prefer_table__2538__auto____258838,method_cache__2539__auto____258839,cached_hierarchy__2540__auto____258840));
})();
cljs.core._add_method.call(null,session.client.mvc.control2,"\uFDD0'default",(function (){
return null;
}));
session.client.mvc.view2 = (function (){var method_table__2537__auto____258843 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2538__auto____258844 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2539__auto____258845 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2540__auto____258846 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2541__auto____258847 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("view2",(function (p1__258842_SHARP_){
return cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'view")).call(null,cljs.core.meta.call(null,p1__258842_SHARP_)));
}),"\uFDD0'default",hierarchy__2541__auto____258847,method_table__2537__auto____258843,prefer_table__2538__auto____258844,method_cache__2539__auto____258845,cached_hierarchy__2540__auto____258846));
})();
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'dom",(function (arg){
if(cljs.core._EQ_.call(null,"\uFDD0'this",arg))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if((function (){var or__3824__auto____258848 = cljs.core.vector_QMARK_.call(null,arg);
if(or__3824__auto____258848)
{return or__3824__auto____258848;
} else
{return cljs.core.keyword_QMARK_.call(null,arg);
}
})())
{return cljs_jquery.core.dom_create.call(null,arg);
} else
{if(true)
{return cljs_jquery.core.jquery.call(null,arg);
} else
{return null;
}
}
}
}));
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'default",(function (arg){
if(cljs.core.instance_QMARK_.call(null,Element,arg))
{return arg;
} else
{if(cljs.core.instance_QMARK_.call(null,jQuery,arg))
{return arg;
} else
{if(true)
{return cljs.core.pr_str.call(null,arg);
} else
{return null;
}
}
}
}));
session.client.mvc.render = (function render(m){
var v__258850 = session.client.mvc.view.call(null,m);
session.client.mvc.control.call(null,m);
return v__258850;
});
(session.client.mvc.IMVC["_"] = true);
(session.client.mvc.view["_"] = (function (this$){
if(cljs.core.instance_QMARK_.call(null,Element,this$))
{return this$;
} else
{if(cljs.core.instance_QMARK_.call(null,jQuery,this$))
{return this$;
} else
{if(true)
{return cljs.core.pr_str.call(null,this$);
} else
{return null;
}
}
}
}));
(session.client.mvc.control["_"] = (function (this$){
return this$;
}));
