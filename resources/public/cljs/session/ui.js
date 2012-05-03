goog.provide('session.ui');
goog.require('cljs.core');
session.ui.youtube = (function youtube(x){
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'iframe",cljs.core.ObjMap.fromObject(["\uFDD0'width","\uFDD0'height","\uFDD0'src"],{"\uFDD0'width":"420","\uFDD0'height":"315","\uFDD0'src":cljs.core.str.call(null,"http://www.youtube.com/embed/",x,"?rel=0")})]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'dom"}));
});
