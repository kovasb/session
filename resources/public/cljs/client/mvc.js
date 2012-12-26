goog.provide('session.client.mvc');
goog.require('cljs.core');
session.client.mvc.IMVC = {};
session.client.mvc.view = (function view(this$){
if((function (){var and__3937__auto____7610 = this$;
if(and__3937__auto____7610)
{return this$.session$client$mvc$IMVC$view$arity$1;
} else
{return and__3937__auto____7610;
}
})())
{return this$.session$client$mvc$IMVC$view$arity$1(this$);
} else
{var x__2396__auto____7611 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____7612 = (session.client.mvc.view[goog.typeOf(x__2396__auto____7611)]);
if(or__3939__auto____7612)
{return or__3939__auto____7612;
} else
{var or__3939__auto____7613 = (session.client.mvc.view["_"]);
if(or__3939__auto____7613)
{return or__3939__auto____7613;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.view",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control = (function control(this$){
if((function (){var and__3937__auto____7618 = this$;
if(and__3937__auto____7618)
{return this$.session$client$mvc$IMVC$control$arity$1;
} else
{return and__3937__auto____7618;
}
})())
{return this$.session$client$mvc$IMVC$control$arity$1(this$);
} else
{var x__2396__auto____7619 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____7620 = (session.client.mvc.control[goog.typeOf(x__2396__auto____7619)]);
if(or__3939__auto____7620)
{return or__3939__auto____7620;
} else
{var or__3939__auto____7621 = (session.client.mvc.control["_"]);
if(or__3939__auto____7621)
{return or__3939__auto____7621;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.control",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.render = (function render(m){
var v__7623 = session.client.mvc.view.call(null,m);
session.client.mvc.control.call(null,m);
return v__7623;
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
