goog.provide('session.client.mvc');
goog.require('cljs.core');
void 0;session.client.mvc.IMVC = {};
session.client.mvc.view = (function view(this$){
if((function (){var and__3822__auto____6830 = this$;
if(and__3822__auto____6830)
{return this$.session$client$mvc$IMVC$view$arity$1;
} else
{return and__3822__auto____6830;
}
})())
{return this$.session$client$mvc$IMVC$view$arity$1(this$);
} else
{return (function (){var or__3824__auto____6831 = (session.client.mvc.view[goog.typeOf(this$)]);
if(or__3824__auto____6831)
{return or__3824__auto____6831;
} else
{var or__3824__auto____6832 = (session.client.mvc.view["_"]);
if(or__3824__auto____6832)
{return or__3824__auto____6832;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.view",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control = (function control(this$,viewobject){
if((function (){var and__3822__auto____6836 = this$;
if(and__3822__auto____6836)
{return this$.session$client$mvc$IMVC$control$arity$2;
} else
{return and__3822__auto____6836;
}
})())
{return this$.session$client$mvc$IMVC$control$arity$2(this$,viewobject);
} else
{return (function (){var or__3824__auto____6837 = (session.client.mvc.control[goog.typeOf(this$)]);
if(or__3824__auto____6837)
{return or__3824__auto____6837;
} else
{var or__3824__auto____6838 = (session.client.mvc.control["_"]);
if(or__3824__auto____6838)
{return or__3824__auto____6838;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.control",this$);
}
}
})().call(null,this$,viewobject);
}
});
void 0;session.client.mvc.control2 = (function (){var method_table__2695__auto____6839 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2696__auto____6840 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2697__auto____6841 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2698__auto____6842 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2699__auto____6843 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("control2",(function (p1__6826_SHARP_){
return cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'view")).call(null,cljs.core.meta.call(null,p1__6826_SHARP_)));
}),"\uFDD0'default",hierarchy__2699__auto____6843,method_table__2695__auto____6839,prefer_table__2696__auto____6840,method_cache__2697__auto____6841,cached_hierarchy__2698__auto____6842));
})();
cljs.core._add_method.call(null,session.client.mvc.control2,"\uFDD0'default",(function (){
return null;
}));
session.client.mvc.view2 = (function (){var method_table__2695__auto____6845 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2696__auto____6846 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2697__auto____6847 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2698__auto____6848 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2699__auto____6849 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("view2",(function (p1__6844_SHARP_){
return cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'view")).call(null,cljs.core.meta.call(null,p1__6844_SHARP_)));
}),"\uFDD0'default",hierarchy__2699__auto____6849,method_table__2695__auto____6845,prefer_table__2696__auto____6846,method_cache__2697__auto____6847,cached_hierarchy__2698__auto____6848));
})();
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'dom",(function (arg){
if(cljs.core._EQ_.call(null,"\uFDD0'this",arg))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if((function (){var or__3824__auto____6850 = cljs.core.vector_QMARK_.call(null,arg);
if(or__3824__auto____6850)
{return or__3824__auto____6850;
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
var v__6852 = session.client.mvc.view.call(null,m);
session.client.mvc.control.call(null,m,v__6852);
return v__6852;
});
(session.client.mvc.IMVC["_"] = true);
(session.client.mvc.view["_"] = (function (this$){
return cljs.core.pr_str.call(null,this$);
}));
(session.client.mvc.control["_"] = (function (this$,viewobject){
return viewobject;
}));
