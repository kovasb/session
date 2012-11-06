goog.provide('session.client.mvc');
goog.require('cljs.core');
session.client.mvc.IMVC = {};
session.client.mvc.view = (function view(this$){
if((function (){var and__3822__auto____96638 = this$;
if(and__3822__auto____96638)
{return this$.session$client$mvc$IMVC$view$arity$1;
} else
{return and__3822__auto____96638;
}
})())
{return this$.session$client$mvc$IMVC$view$arity$1(this$);
} else
{var x__2363__auto____96639 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____96640 = (session.client.mvc.view[goog.typeOf(x__2363__auto____96639)]);
if(or__3824__auto____96640)
{return or__3824__auto____96640;
} else
{var or__3824__auto____96641 = (session.client.mvc.view["_"]);
if(or__3824__auto____96641)
{return or__3824__auto____96641;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.view",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control = (function control(this$){
if((function (){var and__3822__auto____96646 = this$;
if(and__3822__auto____96646)
{return this$.session$client$mvc$IMVC$control$arity$1;
} else
{return and__3822__auto____96646;
}
})())
{return this$.session$client$mvc$IMVC$control$arity$1(this$);
} else
{var x__2363__auto____96647 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____96648 = (session.client.mvc.control[goog.typeOf(x__2363__auto____96647)]);
if(or__3824__auto____96648)
{return or__3824__auto____96648;
} else
{var or__3824__auto____96649 = (session.client.mvc.control["_"]);
if(or__3824__auto____96649)
{return or__3824__auto____96649;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.control",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control2 = (function (){var method_table__2537__auto____96650 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2538__auto____96651 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2539__auto____96652 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2540__auto____96653 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2541__auto____96654 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("control2",(function (p1__96633_SHARP_){
return cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'view")).call(null,cljs.core.meta.call(null,p1__96633_SHARP_)));
}),"\uFDD0'default",hierarchy__2541__auto____96654,method_table__2537__auto____96650,prefer_table__2538__auto____96651,method_cache__2539__auto____96652,cached_hierarchy__2540__auto____96653));
})();
cljs.core._add_method.call(null,session.client.mvc.control2,"\uFDD0'default",(function (){
return null;
}));
session.client.mvc.view2 = (function (){var method_table__2537__auto____96656 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2538__auto____96657 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2539__auto____96658 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2540__auto____96659 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2541__auto____96660 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("view2",(function (p1__96655_SHARP_){
return cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'view")).call(null,cljs.core.meta.call(null,p1__96655_SHARP_)));
}),"\uFDD0'default",hierarchy__2541__auto____96660,method_table__2537__auto____96656,prefer_table__2538__auto____96657,method_cache__2539__auto____96658,cached_hierarchy__2540__auto____96659));
})();
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'dom",(function (arg){
if(cljs.core._EQ_.call(null,"\uFDD0'this",arg))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if((function (){var or__3824__auto____96661 = cljs.core.vector_QMARK_.call(null,arg);
if(or__3824__auto____96661)
{return or__3824__auto____96661;
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
var v__96663 = session.client.mvc.view.call(null,m);
session.client.mvc.control.call(null,m);
return v__96663;
});
(session.client.mvc.IMVC["_"] = true);
(session.client.mvc.view["_"] = (function (this$){
return cljs.core.pr_str.call(null,this$);
}));
(session.client.mvc.control["_"] = (function (this$){
return session.client.mvc.viewobject;
}));
