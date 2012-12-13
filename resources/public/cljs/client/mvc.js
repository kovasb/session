goog.provide('session.client.mvc');
goog.require('cljs.core');
session.client.mvc.IMVC = {};
session.client.mvc.view = (function view(this$){
if((function (){var and__3937__auto____7632 = this$;
if(and__3937__auto____7632)
{return this$.session$client$mvc$IMVC$view$arity$1;
} else
{return and__3937__auto____7632;
}
})())
{return this$.session$client$mvc$IMVC$view$arity$1(this$);
} else
{var x__2396__auto____7633 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____7634 = (session.client.mvc.view[goog.typeOf(x__2396__auto____7633)]);
if(or__3939__auto____7634)
{return or__3939__auto____7634;
} else
{var or__3939__auto____7635 = (session.client.mvc.view["_"]);
if(or__3939__auto____7635)
{return or__3939__auto____7635;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.view",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control = (function control(this$){
if((function (){var and__3937__auto____7640 = this$;
if(and__3937__auto____7640)
{return this$.session$client$mvc$IMVC$control$arity$1;
} else
{return and__3937__auto____7640;
}
})())
{return this$.session$client$mvc$IMVC$control$arity$1(this$);
} else
{var x__2396__auto____7641 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____7642 = (session.client.mvc.control[goog.typeOf(x__2396__auto____7641)]);
if(or__3939__auto____7642)
{return or__3939__auto____7642;
} else
{var or__3939__auto____7643 = (session.client.mvc.control["_"]);
if(or__3939__auto____7643)
{return or__3939__auto____7643;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.control",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control2 = (function (){var method_table__2570__auto____7644 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2571__auto____7645 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2572__auto____7646 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2573__auto____7647 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2574__auto____7648 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("control2",(function (p1__7627_SHARP_){
return cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'view")).call(null,cljs.core.meta.call(null,p1__7627_SHARP_)));
}),"\uFDD0'default",hierarchy__2574__auto____7648,method_table__2570__auto____7644,prefer_table__2571__auto____7645,method_cache__2572__auto____7646,cached_hierarchy__2573__auto____7647));
})();
cljs.core._add_method.call(null,session.client.mvc.control2,"\uFDD0'default",(function (){
return null;
}));
session.client.mvc.view2 = (function (){var method_table__2570__auto____7650 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2571__auto____7651 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2572__auto____7652 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2573__auto____7653 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2574__auto____7654 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("view2",(function (p1__7649_SHARP_){
return cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'view")).call(null,cljs.core.meta.call(null,p1__7649_SHARP_)));
}),"\uFDD0'default",hierarchy__2574__auto____7654,method_table__2570__auto____7650,prefer_table__2571__auto____7651,method_cache__2572__auto____7652,cached_hierarchy__2573__auto____7653));
})();
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'dom",(function (arg){
if(cljs.core._EQ_.call(null,"\uFDD0'this",arg))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if((function (){var or__3939__auto____7655 = cljs.core.vector_QMARK_.call(null,arg);
if(or__3939__auto____7655)
{return or__3939__auto____7655;
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
var v__7657 = session.client.mvc.view.call(null,m);
session.client.mvc.control.call(null,m);
return v__7657;
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
