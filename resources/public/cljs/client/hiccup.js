goog.provide('session.client.hiccup');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('session.client.editor');
goog.require('session.client.mvc');

goog.provide('session.client.hiccup.Hiccup');

/**
* @constructor
*/
session.client.hiccup.Hiccup = (function (model){
this.model = model;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 536870912;
})
session.client.hiccup.Hiccup.cljs$lang$type = true;
session.client.hiccup.Hiccup.cljs$lang$ctorPrSeq = (function (this__2350__auto__){
return cljs.core.list.call(null,"session.client.hiccup/Hiccup");
});
session.client.hiccup.Hiccup.cljs$lang$ctorPrWriter = (function (this__2350__auto__,writer__2351__auto__){
return cljs.core._write.call(null,writer__2351__auto__,"session.client.hiccup/Hiccup");
});
session.client.hiccup.Hiccup.prototype.session$client$mvc$IMVC$ = true;
session.client.hiccup.Hiccup.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var self__ = this;
if(cljs.core._EQ_.call(null,"\uFDD0'this",self__.model))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,self__.model);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,self__.model);
}
})())
{return cljs_jquery.core.dom_create.call(null,self__.model);
} else
{if(true)
{return cljs_jquery.core.jquery.call(null,self__.model);
} else
{return null;
}
}
}
});
session.client.hiccup.Hiccup.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var self__ = this;
return session.client.hiccup.viewobject;
});
session.client.hiccup.Hiccup.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var self__ = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#hiccup "], true),cljs.core._pr_seq.call(null,self__.model,opts),"");
});
session.client.hiccup.Hiccup;
cljs.reader.register_tag_parser_BANG_.call(null,"hiccup",(function (x){
return (new session.client.hiccup.Hiccup(x));
}));
