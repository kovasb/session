goog.provide('session.client.readermap');
goog.require('cljs.core');
goog.require('session.client.plot');
goog.require('session.client.hiccup');
goog.require('session.client.subsession');
goog.require('session.client.mvc');
goog.require('session.client.session');
goog.require('session.client.loop');
goog.require('session.client.editor');
goog.require('cljs.reader');
session.client.readermap.register_tag_parsers = (function register_tag_parsers(){
cljs.reader.register_tag_parser_BANG_.call(null,"flot",session.client.plot.series_plot);
cljs.reader.register_tag_parser_BANG_.call(null,"table",session.client.plot.table);
cljs.reader.register_tag_parser_BANG_.call(null,"hiccup",(function (x){
return (new session.client.hiccup.Hiccup(x));
}));
cljs.reader.register_tag_parser_BANG_.call(null,"series-plot",session.client.plot.series_plot);
cljs.reader.register_tag_parser_BANG_.call(null,"timeseries-plot",session.client.plot.timeseries_plot);
cljs.reader.register_tag_parser_BANG_.call(null,"loop",(function (x){
return (new session.client.loop.Loop(cljs.core.assoc.call(null,x,"\uFDD0'input",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,x)),"\uFDD0'output",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,x))),cljs.core.atom.call(null,null)));
}));
cljs.reader.register_tag_parser_BANG_.call(null,"session",(function (x){
return (new session.client.session.Session(x,cljs.core.atom.call(null,null)));
}));
return cljs.reader.register_tag_parser_BANG_.call(null,"subsession",(function (x){
return (new session.client.subsession.Subsession(cljs.core.assoc.call(null,x,"\uFDD0'loops",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,x))),cljs.core.atom.call(null,null)));
}));
});
