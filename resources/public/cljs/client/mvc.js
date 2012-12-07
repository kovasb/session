goog.provide('session.client.mvc');
goog.require('cljs.core');
session.client.mvc.IMVC = {};
session.client.mvc.view = (function view(this$){
if((function (){var and__3822__auto____7606 = this$;
if(and__3822__auto____7606)
{return this$.session$client$mvc$IMVC$view$arity$1;
} else
{return and__3822__auto____7606;
}
})())
{return this$.session$client$mvc$IMVC$view$arity$1(this$);
} else
{var x__2363__auto____7607 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7608 = (session.client.mvc.view[goog.typeOf(x__2363__auto____7607)]);
if(or__3824__auto____7608)
{return or__3824__auto____7608;
} else
{var or__3824__auto____7609 = (session.client.mvc.view["_"]);
if(or__3824__auto____7609)
{return or__3824__auto____7609;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.view",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control = (function control(this$){
if((function (){var and__3822__auto____7614 = this$;
if(and__3822__auto____7614)
{return this$.session$client$mvc$IMVC$control$arity$1;
} else
{return and__3822__auto____7614;
}
})())
{return this$.session$client$mvc$IMVC$control$arity$1(this$);
} else
{var x__2363__auto____7615 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7616 = (session.client.mvc.control[goog.typeOf(x__2363__auto____7615)]);
if(or__3824__auto____7616)
{return or__3824__auto____7616;
} else
{var or__3824__auto____7617 = (session.client.mvc.control["_"]);
if(or__3824__auto____7617)
{return or__3824__auto____7617;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.control",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control2 = (function (){var method_table__2537__auto____7618 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2538__auto____7619 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2539__auto____7620 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2540__auto____7621 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2541__auto____7622 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("control2",(function (p1__7601_SHARP_){
return cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'view")).call(null,cljs.core.meta.call(null,p1__7601_SHARP_)));
}),"\uFDD0'default",hierarchy__2541__auto____7622,method_table__2537__auto____7618,prefer_table__2538__auto____7619,method_cache__2539__auto____7620,cached_hierarchy__2540__auto____7621));
})();
cljs.core._add_method.call(null,session.client.mvc.control2,"\uFDD0'default",(function (){
return null;
}));
session.client.mvc.view2 = (function (){var method_table__2537__auto____7624 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2538__auto____7625 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2539__auto____7626 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2540__auto____7627 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2541__auto____7628 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("view2",(function (p1__7623_SHARP_){
return cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'view")).call(null,cljs.core.meta.call(null,p1__7623_SHARP_)));
}),"\uFDD0'default",hierarchy__2541__auto____7628,method_table__2537__auto____7624,prefer_table__2538__auto____7625,method_cache__2539__auto____7626,cached_hierarchy__2540__auto____7627));
})();
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'dom",(function (arg){
if(cljs.core._EQ_.call(null,"\uFDD0'this",arg))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if((function (){var or__3824__auto____7629 = cljs.core.vector_QMARK_.call(null,arg);
if(or__3824__auto____7629)
{return or__3824__auto____7629;
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
var v__7631 = session.client.mvc.view.call(null,m);
session.client.mvc.control.call(null,m);
return v__7631;
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
