goog.provide('session.ui');
goog.require('cljs.core');
session.ui.youtube = (function youtube(x){
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'iframe",cljs.core.ObjMap.fromObject(["\uFDD0'width","\uFDD0'height","\uFDD0'src"],{"\uFDD0'width":"420","\uFDD0'height":"315","\uFDD0'src":cljs.core.str.call(null,"http://www.youtube.com/embed/",x,"?rel=0")})]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'dom"}));
});
session.ui.table_row = (function table_row(x){
return cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,(function (p1__30289_SHARP_){
return cljs.core.vector.call(null,"\uFDD0'td",cljs.core.str.call(null,p1__30289_SHARP_));
}),x)]);
});
session.ui.table = (function table(x){
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'table.table.table-bordered.table-striped.table-condensed",cljs.core.map.call(null,session.ui.table_row,x)]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'dom"}));
});
