goog.provide('session.client.mvc');
goog.require('cljs.core');
session.client.mvc.IMVC = {};
session.client.mvc.view = (function view(this$){
if((function (){var and__3937__auto____7649 = this$;
if(and__3937__auto____7649)
{return this$.session$client$mvc$IMVC$view$arity$1;
} else
{return and__3937__auto____7649;
}
})())
{return this$.session$client$mvc$IMVC$view$arity$1(this$);
} else
{var x__2390__auto____7650 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____7651 = (session.client.mvc.view[goog.typeOf(x__2390__auto____7650)]);
if(or__3939__auto____7651)
{return or__3939__auto____7651;
} else
{var or__3939__auto____7652 = (session.client.mvc.view["_"]);
if(or__3939__auto____7652)
{return or__3939__auto____7652;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.view",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control = (function control(this$){
if((function (){var and__3937__auto____7657 = this$;
if(and__3937__auto____7657)
{return this$.session$client$mvc$IMVC$control$arity$1;
} else
{return and__3937__auto____7657;
}
})())
{return this$.session$client$mvc$IMVC$control$arity$1(this$);
} else
{var x__2390__auto____7658 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____7659 = (session.client.mvc.control[goog.typeOf(x__2390__auto____7658)]);
if(or__3939__auto____7659)
{return or__3939__auto____7659;
} else
{var or__3939__auto____7660 = (session.client.mvc.control["_"]);
if(or__3939__auto____7660)
{return or__3939__auto____7660;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.control",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control2 = (function (){var method_table__2564__auto____7661 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2565__auto____7662 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2566__auto____7663 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2567__auto____7664 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2568__auto____7665 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("control2",(function (p1__7644_SHARP_){
return cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'view")).call(null,cljs.core.meta.call(null,p1__7644_SHARP_)));
}),"\uFDD0'default",hierarchy__2568__auto____7665,method_table__2564__auto____7661,prefer_table__2565__auto____7662,method_cache__2566__auto____7663,cached_hierarchy__2567__auto____7664));
})();
cljs.core._add_method.call(null,session.client.mvc.control2,"\uFDD0'default",(function (){
return null;
}));
session.client.mvc.view2 = (function (){var method_table__2564__auto____7667 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2565__auto____7668 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2566__auto____7669 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2567__auto____7670 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2568__auto____7671 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("view2",(function (p1__7666_SHARP_){
return cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'view")).call(null,cljs.core.meta.call(null,p1__7666_SHARP_)));
}),"\uFDD0'default",hierarchy__2568__auto____7671,method_table__2564__auto____7667,prefer_table__2565__auto____7668,method_cache__2566__auto____7669,cached_hierarchy__2567__auto____7670));
})();
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'dom",(function (arg){
if(cljs.core._EQ_.call(null,"\uFDD0'this",arg))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if((function (){var or__3939__auto____7672 = cljs.core.vector_QMARK_.call(null,arg);
if(or__3939__auto____7672)
{return or__3939__auto____7672;
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
var v__7674 = session.client.mvc.view.call(null,m);
session.client.mvc.control.call(null,m);
return v__7674;
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
