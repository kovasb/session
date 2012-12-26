goog.provide('session.client.hiccup');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('session.client.editor');
goog.require('session.client.mvc');

/**
* @constructor
*/
session.client.hiccup.Hiccup = (function (model){
this.model = model;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 536870912;
})
session.client.hiccup.Hiccup.cljs$lang$type = true;
session.client.hiccup.Hiccup.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"session.client.hiccup/Hiccup");
});
session.client.hiccup.Hiccup.prototype.session$client$mvc$IMVC$ = true;
session.client.hiccup.Hiccup.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__7187 = this;
if(cljs.core._EQ_.call(null,"\uFDD0'this",this__7187.model))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if((function (){var or__3939__auto____7188 = cljs.core.vector_QMARK_.call(null,this__7187.model);
if(or__3939__auto____7188)
{return or__3939__auto____7188;
} else
{return cljs.core.keyword_QMARK_.call(null,this__7187.model);
}
})())
{return cljs_jquery.core.dom_create.call(null,this__7187.model);
} else
{if(true)
{return cljs_jquery.core.jquery.call(null,this__7187.model);
} else
{return null;
}
}
}
});
session.client.hiccup.Hiccup.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__7189 = this;
return this$;
});
session.client.hiccup.Hiccup.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__7190 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#hiccup "], true),cljs.core._pr_seq.call(null,this__7190.model,opts),"");
});
session.client.hiccup.Hiccup;
