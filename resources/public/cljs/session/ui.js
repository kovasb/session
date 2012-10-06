goog.provide('session.ui');
goog.require('cljs.core');
session.ui.youtube = (function youtube(x){
return cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),"hiccup",null).call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'iframe",cljs.core.ObjMap.fromObject(["\uFDD0'width","\uFDD0'height","\uFDD0'src"],{"\uFDD0'width":"420","\uFDD0'height":"315","\uFDD0'src":[cljs.core.str("http://www.youtube.com/embed/"),cljs.core.str(x),cljs.core.str("?rel=0")].join('')})], true));
});
session.ui.table_row = (function table_row(x){
return cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,(function (p1__6955_SHARP_){
return cljs.core.vector.call(null,"\uFDD0'td",[cljs.core.str(p1__6955_SHARP_)].join(''));
}),x)], true);
});
session.ui.table = (function table(x){
return cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),"hiccup",null).call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'table.table.table-bordered.table-striped.table-condensed",cljs.core.map.call(null,session.ui.table_row,x)], true));
});
