var COMPILED = !0, goog = goog || {};
goog.global = this;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.provide = function(a) {
  if(!COMPILED) {
    if(goog.isProvided_(a)) {
      throw Error('Namespace "' + a + '" already declared.');
    }
    delete goog.implicitNamespaces_[a];
    for(var b = a;(b = b.substring(0, b.lastIndexOf("."))) && !goog.getObjectByName(b);) {
      goog.implicitNamespaces_[b] = !0
    }
  }
  goog.exportPath_(a)
};
goog.setTestOnly = function(a) {
  if(COMPILED && !goog.DEBUG) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + a ? ": " + a : ".");
  }
};
COMPILED || (goog.isProvided_ = function(a) {
  return!goog.implicitNamespaces_[a] && !!goog.getObjectByName(a)
}, goog.implicitNamespaces_ = {});
goog.exportPath_ = function(a, b, c) {
  a = a.split(".");
  c = c || goog.global;
  !(a[0] in c) && c.execScript && c.execScript("var " + a[0]);
  for(var d;a.length && (d = a.shift());) {
    !a.length && goog.isDef(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {}
  }
};
goog.getObjectByName = function(a, b) {
  for(var c = a.split("."), d = b || goog.global, e;e = c.shift();) {
    if(goog.isDefAndNotNull(d[e])) {
      d = d[e]
    }else {
      return null
    }
  }
  return d
};
goog.globalize = function(a, b) {
  var c = b || goog.global, d;
  for(d in a) {
    c[d] = a[d]
  }
};
goog.addDependency = function(a, b, c) {
  if(!COMPILED) {
    for(var d, a = a.replace(/\\/g, "/"), e = goog.dependencies_, f = 0;d = b[f];f++) {
      e.nameToPath[d] = a;
      a in e.pathToNames || (e.pathToNames[a] = {});
      e.pathToNames[a][d] = true
    }
    for(d = 0;b = c[d];d++) {
      a in e.requires || (e.requires[a] = {});
      e.requires[a][b] = true
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.require = function(a) {
  if(!COMPILED && !goog.isProvided_(a)) {
    if(goog.ENABLE_DEBUG_LOADER) {
      var b = goog.getPathFromDeps_(a);
      if(b) {
        goog.included_[b] = true;
        goog.writeScripts_();
        return
      }
    }
    a = "goog.require could not find: " + a;
    goog.global.console && goog.global.console.error(a);
    throw Error(a);
  }
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.identityFunction = function(a) {
  return a
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(a) {
  a.getInstance = function() {
    return a.instance_ || (a.instance_ = new a)
  }
};
!COMPILED && goog.ENABLE_DEBUG_LOADER && (goog.included_ = {}, goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}}, goog.inHtmlDocument_ = function() {
  var a = goog.global.document;
  return typeof a != "undefined" && "write" in a
}, goog.findBasePath_ = function() {
  if(goog.global.CLOSURE_BASE_PATH) {
    goog.basePath = goog.global.CLOSURE_BASE_PATH
  }else {
    if(goog.inHtmlDocument_()) {
      for(var a = goog.global.document.getElementsByTagName("script"), b = a.length - 1;b >= 0;--b) {
        var c = a[b].src, d = c.lastIndexOf("?"), d = d == -1 ? c.length : d;
        if(c.substr(d - 7, 7) == "base.js") {
          goog.basePath = c.substr(0, d - 7);
          break
        }
      }
    }
  }
}, goog.importScript_ = function(a) {
  var b = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
  !goog.dependencies_.written[a] && b(a) && (goog.dependencies_.written[a] = true)
}, goog.writeScriptTag_ = function(a) {
  if(goog.inHtmlDocument_()) {
    goog.global.document.write('<script type="text/javascript" src="' + a + '"><\/script>');
    return true
  }
  return false
}, goog.writeScripts_ = function() {
  function a(e) {
    if(!(e in d.written)) {
      if(!(e in d.visited)) {
        d.visited[e] = true;
        if(e in d.requires) {
          for(var g in d.requires[e]) {
            if(!goog.isProvided_(g)) {
              if(g in d.nameToPath) {
                a(d.nameToPath[g])
              }else {
                throw Error("Undefined nameToPath for " + g);
              }
            }
          }
        }
      }
      if(!(e in c)) {
        c[e] = true;
        b.push(e)
      }
    }
  }
  var b = [], c = {}, d = goog.dependencies_, e;
  for(e in goog.included_) {
    d.written[e] || a(e)
  }
  for(e = 0;e < b.length;e++) {
    if(b[e]) {
      goog.importScript_(goog.basePath + b[e])
    }else {
      throw Error("Undefined script input");
    }
  }
}, goog.getPathFromDeps_ = function(a) {
  return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null
}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));
goog.typeOf = function(a) {
  var b = typeof a;
  if(b == "object") {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if(c == "[object Window]") {
        return"object"
      }
      if(c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(b == "function" && typeof a.call == "undefined") {
      return"object"
    }
  }
  return b
};
goog.propertyIsEnumerableCustom_ = function(a, b) {
  if(b in a) {
    for(var c in a) {
      if(c == b && Object.prototype.hasOwnProperty.call(a, b)) {
        return true
      }
    }
  }
  return false
};
goog.propertyIsEnumerable_ = function(a, b) {
  return a instanceof Object ? Object.prototype.propertyIsEnumerable.call(a, b) : goog.propertyIsEnumerableCustom_(a, b)
};
goog.isDef = function(a) {
  return a !== void 0
};
goog.isNull = function(a) {
  return a === null
};
goog.isDefAndNotNull = function(a) {
  return a != null
};
goog.isArray = function(a) {
  return goog.typeOf(a) == "array"
};
goog.isArrayLike = function(a) {
  var b = goog.typeOf(a);
  return b == "array" || b == "object" && typeof a.length == "number"
};
goog.isDateLike = function(a) {
  return goog.isObject(a) && typeof a.getFullYear == "function"
};
goog.isString = function(a) {
  return typeof a == "string"
};
goog.isBoolean = function(a) {
  return typeof a == "boolean"
};
goog.isNumber = function(a) {
  return typeof a == "number"
};
goog.isFunction = function(a) {
  return goog.typeOf(a) == "function"
};
goog.isObject = function(a) {
  a = goog.typeOf(a);
  return a == "object" || a == "array" || a == "function"
};
goog.getUid = function(a) {
  return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_)
};
goog.removeUid = function(a) {
  "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete a[goog.UID_PROPERTY_]
  }catch(b) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(a) {
  var b = goog.typeOf(a);
  if(b == "object" || b == "array") {
    if(a.clone) {
      return a.clone()
    }
    var b = b == "array" ? [] : {}, c;
    for(c in a) {
      b[c] = goog.cloneObject(a[c])
    }
    return b
  }
  return a
};
goog.bindNative_ = function(a, b, c) {
  return a.call.apply(a.bind, arguments)
};
goog.bindJs_ = function(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
};
goog.bind = function(a, b, c) {
  goog.bind = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
};
goog.mixin = function(a, b) {
  for(var c in b) {
    a[c] = b[c]
  }
};
goog.now = Date.now || function() {
  return+new Date
};
goog.globalEval = function(a) {
  if(goog.global.execScript) {
    goog.global.execScript(a, "JavaScript")
  }else {
    if(goog.global.eval) {
      if(goog.evalWorksForGlobals_ == null) {
        goog.global.eval("var _et_ = 1;");
        if(typeof goog.global._et_ != "undefined") {
          delete goog.global._et_;
          goog.evalWorksForGlobals_ = true
        }else {
          goog.evalWorksForGlobals_ = false
        }
      }
      if(goog.evalWorksForGlobals_) {
        goog.global.eval(a)
      }else {
        var b = goog.global.document, c = b.createElement("script");
        c.type = "text/javascript";
        c.defer = false;
        c.appendChild(b.createTextNode(a));
        b.body.appendChild(c);
        b.body.removeChild(c)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(a, b) {
  var c = function(a) {
    return goog.cssNameMapping_[a] || a
  }, d = function(a) {
    for(var a = a.split("-"), b = [], d = 0;d < a.length;d++) {
      b.push(c(a[d]))
    }
    return b.join("-")
  }, d = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? c : d : function(a) {
    return a
  };
  return b ? a + "-" + d(b) : d(a)
};
goog.setCssNameMapping = function(a, b) {
  goog.cssNameMapping_ = a;
  goog.cssNameMappingStyle_ = b
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.getMsg = function(a, b) {
  var c = b || {}, d;
  for(d in c) {
    var e = ("" + c[d]).replace(/\$/g, "$$$$"), a = a.replace(RegExp("\\{\\$" + d + "\\}", "gi"), e)
  }
  return a
};
goog.exportSymbol = function(a, b, c) {
  goog.exportPath_(a, b, c)
};
goog.exportProperty = function(a, b, c) {
  a[b] = c
};
goog.inherits = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.superClass_ = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
};
goog.base = function(a, b, c) {
  var d = arguments.callee.caller;
  if(d.superClass_) {
    return d.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1))
  }
  for(var e = Array.prototype.slice.call(arguments, 2), f = false, g = a.constructor;g;g = g.superClass_ && g.superClass_.constructor) {
    if(g.prototype[b] === d) {
      f = true
    }else {
      if(f) {
        return g.prototype[b].apply(a, e)
      }
    }
  }
  if(a[b] === d) {
    return a.constructor.prototype[b].apply(a, e)
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
goog.scope = function(a) {
  a.call(goog.global)
};
goog.debug = {};
goog.debug.Error = function(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.string = {};
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = function(a, b) {
  return 0 == a.lastIndexOf(b, 0)
};
goog.string.endsWith = function(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c
};
goog.string.caseInsensitiveStartsWith = function(a, b) {
  return 0 == goog.string.caseInsensitiveCompare(b, a.substr(0, b.length))
};
goog.string.caseInsensitiveEndsWith = function(a, b) {
  return 0 == goog.string.caseInsensitiveCompare(b, a.substr(a.length - b.length, b.length))
};
goog.string.subs = function(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
};
goog.string.collapseWhitespace = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
};
goog.string.isEmpty = function(a) {
  return/^[\s\xa0]*$/.test(a)
};
goog.string.isEmptySafe = function(a) {
  return goog.string.isEmpty(goog.string.makeSafe(a))
};
goog.string.isBreakingWhitespace = function(a) {
  return!/[^\t\n\r ]/.test(a)
};
goog.string.isAlpha = function(a) {
  return!/[^a-zA-Z]/.test(a)
};
goog.string.isNumeric = function(a) {
  return!/[^0-9]/.test(a)
};
goog.string.isAlphaNumeric = function(a) {
  return!/[^a-zA-Z0-9]/.test(a)
};
goog.string.isSpace = function(a) {
  return" " == a
};
goog.string.isUnicodeChar = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a
};
goog.string.stripNewlines = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ")
};
goog.string.canonicalizeNewlines = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n")
};
goog.string.normalizeWhitespace = function(a) {
  return a.replace(/\xa0|\s/g, " ")
};
goog.string.normalizeSpaces = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ")
};
goog.string.collapseBreakingSpaces = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
goog.string.trim = function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
goog.string.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "")
};
goog.string.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "")
};
goog.string.caseInsensitiveCompare = function(a, b) {
  var c = ("" + a).toLowerCase(), d = ("" + b).toLowerCase();
  return c < d ? -1 : c == d ? 0 : 1
};
goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare = function(a, b) {
  if(a == b) {
    return 0
  }
  if(!a) {
    return-1
  }
  if(!b) {
    return 1
  }
  for(var c = a.toLowerCase().match(goog.string.numerateCompareRegExp_), d = b.toLowerCase().match(goog.string.numerateCompareRegExp_), e = Math.min(c.length, d.length), f = 0;f < e;f++) {
    var g = c[f], h = d[f];
    if(g != h) {
      return c = parseInt(g, 10), !isNaN(c) && (d = parseInt(h, 10), !isNaN(d) && c - d) ? c - d : g < h ? -1 : 1
    }
  }
  return c.length != d.length ? c.length - d.length : a < b ? -1 : 1
};
goog.string.encodeUriRegExp_ = /^[a-zA-Z0-9\-_.!~*'()]*$/;
goog.string.urlEncode = function(a) {
  a = "" + a;
  return!goog.string.encodeUriRegExp_.test(a) ? encodeURIComponent(a) : a
};
goog.string.urlDecode = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "))
};
goog.string.newLineToBr = function(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
};
goog.string.htmlEscape = function(a, b) {
  if(b) {
    return a.replace(goog.string.amperRe_, "&amp;").replace(goog.string.ltRe_, "&lt;").replace(goog.string.gtRe_, "&gt;").replace(goog.string.quotRe_, "&quot;")
  }
  if(!goog.string.allRe_.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(goog.string.amperRe_, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(goog.string.ltRe_, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(goog.string.gtRe_, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(goog.string.quotRe_, "&quot;"));
  return a
};
goog.string.amperRe_ = /&/g;
goog.string.ltRe_ = /</g;
goog.string.gtRe_ = />/g;
goog.string.quotRe_ = /\"/g;
goog.string.allRe_ = /[&<>\"]/;
goog.string.unescapeEntities = function(a) {
  return goog.string.contains(a, "&") ? "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a) : goog.string.unescapePureXmlEntities_(a) : a
};
goog.string.unescapeEntitiesUsingDom_ = function(a) {
  var b = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, c = document.createElement("div");
  return a.replace(goog.string.HTML_ENTITY_PATTERN_, function(a, e) {
    var f = b[a];
    if(f) {
      return f
    }
    if("#" == e.charAt(0)) {
      var g = Number("0" + e.substr(1));
      isNaN(g) || (f = String.fromCharCode(g))
    }
    f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
    return b[a] = f
  })
};
goog.string.unescapePureXmlEntities_ = function(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return"&";
      case "lt":
        return"<";
      case "gt":
        return">";
      case "quot":
        return'"';
      default:
        if("#" == c.charAt(0)) {
          var d = Number("0" + c.substr(1));
          if(!isNaN(d)) {
            return String.fromCharCode(d)
          }
        }
        return a
    }
  })
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function(a, b) {
  return goog.string.newLineToBr(a.replace(/  /g, " &#160;"), b)
};
goog.string.stripQuotes = function(a, b) {
  for(var c = b.length, d = 0;d < c;d++) {
    var e = 1 == c ? b : b.charAt(d);
    if(a.charAt(0) == e && a.charAt(a.length - 1) == e) {
      return a.substring(1, a.length - 1)
    }
  }
  return a
};
goog.string.truncate = function(a, b, c) {
  c && (a = goog.string.unescapeEntities(a));
  a.length > b && (a = a.substring(0, b - 3) + "...");
  c && (a = goog.string.htmlEscape(a));
  return a
};
goog.string.truncateMiddle = function(a, b, c, d) {
  c && (a = goog.string.unescapeEntities(a));
  if(d && a.length > b) {
    d > b && (d = b);
    var e = a.length - d, a = a.substring(0, b - d) + "..." + a.substring(e)
  }else {
    a.length > b && (d = Math.floor(b / 2), e = a.length - d, a = a.substring(0, d + b % 2) + "..." + a.substring(e))
  }
  c && (a = goog.string.htmlEscape(a));
  return a
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function(a) {
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var b = ['"'], c = 0;c < a.length;c++) {
    var d = a.charAt(c), e = d.charCodeAt(0);
    b[c + 1] = goog.string.specialEscapeChars_[d] || (31 < e && 127 > e ? d : goog.string.escapeChar(d))
  }
  b.push('"');
  return b.join("")
};
goog.string.escapeString = function(a) {
  for(var b = [], c = 0;c < a.length;c++) {
    b[c] = goog.string.escapeChar(a.charAt(c))
  }
  return b.join("")
};
goog.string.escapeChar = function(a) {
  if(a in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[a]
  }
  if(a in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[a] = goog.string.specialEscapeChars_[a]
  }
  var b = a, c = a.charCodeAt(0);
  if(31 < c && 127 > c) {
    b = a
  }else {
    if(256 > c) {
      if(b = "\\x", 16 > c || 256 < c) {
        b += "0"
      }
    }else {
      b = "\\u", 4096 > c && (b += "0")
    }
    b += c.toString(16).toUpperCase()
  }
  return goog.string.jsEscapeCache_[a] = b
};
goog.string.toMap = function(a) {
  for(var b = {}, c = 0;c < a.length;c++) {
    b[a.charAt(c)] = !0
  }
  return b
};
goog.string.contains = function(a, b) {
  return-1 != a.indexOf(b)
};
goog.string.removeAt = function(a, b, c) {
  var d = a;
  0 <= b && (b < a.length && 0 < c) && (d = a.substr(0, b) + a.substr(b + c, a.length - b - c));
  return d
};
goog.string.remove = function(a, b) {
  var c = RegExp(goog.string.regExpEscape(b), "");
  return a.replace(c, "")
};
goog.string.removeAll = function(a, b) {
  var c = RegExp(goog.string.regExpEscape(b), "g");
  return a.replace(c, "")
};
goog.string.regExpEscape = function(a) {
  return("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
};
goog.string.repeat = function(a, b) {
  return Array(b + 1).join(a)
};
goog.string.padNumber = function(a, b, c) {
  a = goog.isDef(c) ? a.toFixed(c) : "" + a;
  c = a.indexOf(".");
  -1 == c && (c = a.length);
  return goog.string.repeat("0", Math.max(0, b - c)) + a
};
goog.string.makeSafe = function(a) {
  return null == a ? "" : "" + a
};
goog.string.buildString = function(a) {
  return Array.prototype.join.call(arguments, "")
};
goog.string.getRandomString = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
};
goog.string.compareVersions = function(a, b) {
  for(var c = 0, d = goog.string.trim("" + a).split("."), e = goog.string.trim("" + b).split("."), f = Math.max(d.length, e.length), g = 0;0 == c && g < f;g++) {
    var h = d[g] || "", i = e[g] || "", j = RegExp("(\\d*)(\\D*)", "g"), k = RegExp("(\\d*)(\\D*)", "g");
    do {
      var m = j.exec(h) || ["", "", ""], l = k.exec(i) || ["", "", ""];
      if(0 == m[0].length && 0 == l[0].length) {
        break
      }
      var c = 0 == m[1].length ? 0 : parseInt(m[1], 10), n = 0 == l[1].length ? 0 : parseInt(l[1], 10), c = goog.string.compareElements_(c, n) || goog.string.compareElements_(0 == m[2].length, 0 == l[2].length) || goog.string.compareElements_(m[2], l[2])
    }while(0 == c)
  }
  return c
};
goog.string.compareElements_ = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0
};
goog.string.HASHCODE_MAX_ = 4294967296;
goog.string.hashCode = function(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= goog.string.HASHCODE_MAX_
  }
  return b
};
goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
goog.string.createUniqueString = function() {
  return"goog_" + goog.string.uniqueStringCounter_++
};
goog.string.toNumber = function(a) {
  var b = Number(a);
  return 0 == b && goog.string.isEmpty(a) ? NaN : b
};
goog.string.toCamelCaseCache_ = {};
goog.string.toCamelCase = function(a) {
  return goog.string.toCamelCaseCache_[a] || (goog.string.toCamelCaseCache_[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
};
goog.string.toSelectorCaseCache_ = {};
goog.string.toSelectorCase = function(a) {
  return goog.string.toSelectorCaseCache_[a] || (goog.string.toSelectorCaseCache_[a] = ("" + a).replace(/([A-Z])/g, "-$1").toLowerCase())
};
goog.asserts = {};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function(a, b) {
  b.unshift(a);
  goog.debug.Error.call(this, goog.string.subs.apply(null, b));
  b.shift();
  this.messagePattern = a
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.doAssertFailure_ = function(a, b, c, d) {
  var e = "Assertion failed";
  if(c) {
    var e = e + (": " + c), f = d
  }else {
    a && (e += ": " + a, f = b)
  }
  throw new goog.asserts.AssertionError("" + e, f || []);
};
goog.asserts.assert = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !a && goog.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.fail = function(a, b) {
  if(goog.asserts.ENABLE_ASSERTS) {
    throw new goog.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  }
};
goog.asserts.assertNumber = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isNumber(a) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertString = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isString(a) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertFunction = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertObject = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isObject(a) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertArray = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isArray(a) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertBoolean = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(a) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a
};
goog.asserts.assertInstanceof = function(a, b, c, d) {
  goog.asserts.ENABLE_ASSERTS && !(a instanceof b) && goog.asserts.doAssertFailure_("instanceof check failed.", null, c, Array.prototype.slice.call(arguments, 3))
};
goog.array = {};
goog.NATIVE_ARRAY_PROTOTYPES = !0;
goog.array.peek = function(a) {
  return a[a.length - 1]
};
goog.array.ARRAY_PROTOTYPE_ = Array.prototype;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.indexOf ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(goog.isString(a)) {
    return!goog.isString(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.lastIndexOf ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
} : function(a, b, c) {
  c = null == c ? a.length - 1 : c;
  0 > c && (c = Math.max(0, a.length + c));
  if(goog.isString(a)) {
    return!goog.isString(b) || 1 != b.length ? -1 : a.lastIndexOf(b, c)
  }
  for(;0 <= c;c--) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.forEach ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  goog.array.ARRAY_PROTOTYPE_.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
};
goog.array.forEachRight = function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, d = d - 1;0 <= d;--d) {
    d in e && b.call(c, e[d], d, a)
  }
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.filter ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, g = goog.isString(a) ? a.split("") : a, h = 0;h < d;h++) {
    if(h in g) {
      var i = g[h];
      b.call(c, i, h, a) && (e[f++] = i)
    }
  }
  return e
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.map ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), f = goog.isString(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && (e[g] = b.call(c, f[g], g, a))
  }
  return e
};
goog.array.reduce = function(a, b, c, d) {
  if(a.reduce) {
    return d ? a.reduce(goog.bind(b, d), c) : a.reduce(b, c)
  }
  var e = c;
  goog.array.forEach(a, function(c, g) {
    e = b.call(d, e, c, g, a)
  });
  return e
};
goog.array.reduceRight = function(a, b, c, d) {
  if(a.reduceRight) {
    return d ? a.reduceRight(goog.bind(b, d), c) : a.reduceRight(b, c)
  }
  var e = c;
  goog.array.forEachRight(a, function(c, g) {
    e = b.call(d, e, c, g, a)
  });
  return e
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.some ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && b.call(c, e[f], f, a)) {
      return!0
    }
  }
  return!1
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.every ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && !b.call(c, e[f], f, a)) {
      return!1
    }
  }
  return!0
};
goog.array.find = function(a, b, c) {
  b = goog.array.findIndex(a, b, c);
  return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b]
};
goog.array.findIndex = function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && b.call(c, e[f], f, a)) {
      return f
    }
  }
  return-1
};
goog.array.findRight = function(a, b, c) {
  b = goog.array.findIndexRight(a, b, c);
  return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b]
};
goog.array.findIndexRight = function(a, b, c) {
  for(var d = a.length, e = goog.isString(a) ? a.split("") : a, d = d - 1;0 <= d;d--) {
    if(d in e && b.call(c, e[d], d, a)) {
      return d
    }
  }
  return-1
};
goog.array.contains = function(a, b) {
  return 0 <= goog.array.indexOf(a, b)
};
goog.array.isEmpty = function(a) {
  return 0 == a.length
};
goog.array.clear = function(a) {
  if(!goog.isArray(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0
};
goog.array.insert = function(a, b) {
  goog.array.contains(a, b) || a.push(b)
};
goog.array.insertAt = function(a, b, c) {
  goog.array.splice(a, c, 0, b)
};
goog.array.insertArrayAt = function(a, b, c) {
  goog.partial(goog.array.splice, a, c, 0).apply(null, b)
};
goog.array.insertBefore = function(a, b, c) {
  var d;
  2 == arguments.length || 0 > (d = goog.array.indexOf(a, c)) ? a.push(b) : goog.array.insertAt(a, b, d)
};
goog.array.remove = function(a, b) {
  var c = goog.array.indexOf(a, b), d;
  (d = 0 <= c) && goog.array.removeAt(a, c);
  return d
};
goog.array.removeAt = function(a, b) {
  goog.asserts.assert(null != a.length);
  return 1 == goog.array.ARRAY_PROTOTYPE_.splice.call(a, b, 1).length
};
goog.array.removeIf = function(a, b, c) {
  b = goog.array.findIndex(a, b, c);
  return 0 <= b ? (goog.array.removeAt(a, b), !0) : !1
};
goog.array.concat = function(a) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
};
goog.array.clone = function(a) {
  if(goog.isArray(a)) {
    return goog.array.concat(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
};
goog.array.toArray = function(a) {
  return goog.isArray(a) ? goog.array.concat(a) : goog.array.clone(a)
};
goog.array.extend = function(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if(goog.isArray(d) || (e = goog.isArrayLike(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(e) {
        for(var f = a.length, g = d.length, h = 0;h < g;h++) {
          a[f + h] = d[h]
        }
      }else {
        a.push(d)
      }
    }
  }
};
goog.array.splice = function(a, b, c, d) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.splice.apply(a, goog.array.slice(arguments, 1))
};
goog.array.slice = function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return 2 >= arguments.length ? goog.array.ARRAY_PROTOTYPE_.slice.call(a, b) : goog.array.ARRAY_PROTOTYPE_.slice.call(a, b, c)
};
goog.array.removeDuplicates = function(a, b) {
  for(var c = b || a, d = {}, e = 0, f = 0;f < a.length;) {
    var g = a[f++], h = goog.isObject(g) ? "o" + goog.getUid(g) : (typeof g).charAt(0) + g;
    Object.prototype.hasOwnProperty.call(d, h) || (d[h] = !0, c[e++] = g)
  }
  c.length = e
};
goog.array.binarySearch = function(a, b, c) {
  return goog.array.binarySearch_(a, c || goog.array.defaultCompare, !1, b)
};
goog.array.binarySelect = function(a, b, c) {
  return goog.array.binarySearch_(a, b, !0, void 0, c)
};
goog.array.binarySearch_ = function(a, b, c, d, e) {
  for(var f = 0, g = a.length, h;f < g;) {
    var i = f + g >> 1, j;
    j = c ? b.call(e, a[i], i, a) : b(d, a[i]);
    0 < j ? f = i + 1 : (g = i, h = !j)
  }
  return h ? f : ~f
};
goog.array.sort = function(a, b) {
  goog.asserts.assert(null != a.length);
  goog.array.ARRAY_PROTOTYPE_.sort.call(a, b || goog.array.defaultCompare)
};
goog.array.stableSort = function(a, b) {
  for(var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]}
  }
  var d = b || goog.array.defaultCompare;
  goog.array.sort(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index
  });
  for(c = 0;c < a.length;c++) {
    a[c] = a[c].value
  }
};
goog.array.sortObjectsByKey = function(a, b, c) {
  var d = c || goog.array.defaultCompare;
  goog.array.sort(a, function(a, c) {
    return d(a[b], c[b])
  })
};
goog.array.isSorted = function(a, b, c) {
  for(var b = b || goog.array.defaultCompare, d = 1;d < a.length;d++) {
    var e = b(a[d - 1], a[d]);
    if(0 < e || 0 == e && c) {
      return!1
    }
  }
  return!0
};
goog.array.equals = function(a, b, c) {
  if(!goog.isArrayLike(a) || !goog.isArrayLike(b) || a.length != b.length) {
    return!1
  }
  for(var d = a.length, c = c || goog.array.defaultCompareEquality, e = 0;e < d;e++) {
    if(!c(a[e], b[e])) {
      return!1
    }
  }
  return!0
};
goog.array.compare = function(a, b, c) {
  return goog.array.equals(a, b, c)
};
goog.array.compare3 = function(a, b, c) {
  for(var c = c || goog.array.defaultCompare, d = Math.min(a.length, b.length), e = 0;e < d;e++) {
    var f = c(a[e], b[e]);
    if(0 != f) {
      return f
    }
  }
  return goog.array.defaultCompare(a.length, b.length)
};
goog.array.defaultCompare = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
};
goog.array.defaultCompareEquality = function(a, b) {
  return a === b
};
goog.array.binaryInsert = function(a, b, c) {
  c = goog.array.binarySearch(a, b, c);
  return 0 > c ? (goog.array.insertAt(a, b, -(c + 1)), !0) : !1
};
goog.array.binaryRemove = function(a, b, c) {
  b = goog.array.binarySearch(a, b, c);
  return 0 <= b ? goog.array.removeAt(a, b) : !1
};
goog.array.bucket = function(a, b) {
  for(var c = {}, d = 0;d < a.length;d++) {
    var e = a[d], f = b(e, d, a);
    goog.isDef(f) && (c[f] || (c[f] = [])).push(e)
  }
  return c
};
goog.array.repeat = function(a, b) {
  for(var c = [], d = 0;d < b;d++) {
    c[d] = a
  }
  return c
};
goog.array.flatten = function(a) {
  for(var b = [], c = 0;c < arguments.length;c++) {
    var d = arguments[c];
    goog.isArray(d) ? b.push.apply(b, goog.array.flatten.apply(null, d)) : b.push(d)
  }
  return b
};
goog.array.rotate = function(a, b) {
  goog.asserts.assert(null != a.length);
  a.length && (b %= a.length, 0 < b ? goog.array.ARRAY_PROTOTYPE_.unshift.apply(a, a.splice(-b, b)) : 0 > b && goog.array.ARRAY_PROTOTYPE_.push.apply(a, a.splice(0, -b)));
  return a
};
goog.array.zip = function(a) {
  if(!arguments.length) {
    return[]
  }
  for(var b = [], c = 0;;c++) {
    for(var d = [], e = 0;e < arguments.length;e++) {
      var f = arguments[e];
      if(c >= f.length) {
        return b
      }
      d.push(f[c])
    }
    b.push(d)
  }
};
goog.array.shuffle = function(a, b) {
  for(var c = b || Math.random, d = a.length - 1;0 < d;d--) {
    var e = Math.floor(c() * (d + 1)), f = a[d];
    a[d] = a[e];
    a[e] = f
  }
};
goog.object = {};
goog.object.forEach = function(a, b, c) {
  for(var d in a) {
    b.call(c, a[d], d, a)
  }
};
goog.object.filter = function(a, b, c) {
  var d = {}, e;
  for(e in a) {
    b.call(c, a[e], e, a) && (d[e] = a[e])
  }
  return d
};
goog.object.map = function(a, b, c) {
  var d = {}, e;
  for(e in a) {
    d[e] = b.call(c, a[e], e, a)
  }
  return d
};
goog.object.some = function(a, b, c) {
  for(var d in a) {
    if(b.call(c, a[d], d, a)) {
      return!0
    }
  }
  return!1
};
goog.object.every = function(a, b, c) {
  for(var d in a) {
    if(!b.call(c, a[d], d, a)) {
      return!1
    }
  }
  return!0
};
goog.object.getCount = function(a) {
  var b = 0, c;
  for(c in a) {
    b++
  }
  return b
};
goog.object.getAnyKey = function(a) {
  for(var b in a) {
    return b
  }
};
goog.object.getAnyValue = function(a) {
  for(var b in a) {
    return a[b]
  }
};
goog.object.contains = function(a, b) {
  return goog.object.containsValue(a, b)
};
goog.object.getValues = function(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
};
goog.object.getKeys = function(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
};
goog.object.getValueByKeys = function(a, b) {
  for(var c = goog.isArrayLike(b), d = c ? b : arguments, c = c ? 0 : 1;c < d.length && !(a = a[d[c]], !goog.isDef(a));c++) {
  }
  return a
};
goog.object.containsKey = function(a, b) {
  return b in a
};
goog.object.containsValue = function(a, b) {
  for(var c in a) {
    if(a[c] == b) {
      return!0
    }
  }
  return!1
};
goog.object.findKey = function(a, b, c) {
  for(var d in a) {
    if(b.call(c, a[d], d, a)) {
      return d
    }
  }
};
goog.object.findValue = function(a, b, c) {
  return(b = goog.object.findKey(a, b, c)) && a[b]
};
goog.object.isEmpty = function(a) {
  for(var b in a) {
    return!1
  }
  return!0
};
goog.object.clear = function(a) {
  for(var b in a) {
    delete a[b]
  }
};
goog.object.remove = function(a, b) {
  var c;
  (c = b in a) && delete a[b];
  return c
};
goog.object.add = function(a, b, c) {
  if(b in a) {
    throw Error('The object already contains the key "' + b + '"');
  }
  goog.object.set(a, b, c)
};
goog.object.get = function(a, b, c) {
  return b in a ? a[b] : c
};
goog.object.set = function(a, b, c) {
  a[b] = c
};
goog.object.setIfUndefined = function(a, b, c) {
  return b in a ? a[b] : a[b] = c
};
goog.object.clone = function(a) {
  var b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  return b
};
goog.object.unsafeClone = function(a) {
  var b = goog.typeOf(a);
  if("object" == b || "array" == b) {
    if(a.clone) {
      return a.clone()
    }
    var b = "array" == b ? [] : {}, c;
    for(c in a) {
      b[c] = goog.object.unsafeClone(a[c])
    }
    return b
  }
  return a
};
goog.object.transpose = function(a) {
  var b = {}, c;
  for(c in a) {
    b[a[c]] = c
  }
  return b
};
goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend = function(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < goog.object.PROTOTYPE_FIELDS_.length;f++) {
      c = goog.object.PROTOTYPE_FIELDS_[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
};
goog.object.create = function(a) {
  var b = arguments.length;
  if(1 == b && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0])
  }
  if(b % 2) {
    throw Error("Uneven number of arguments");
  }
  for(var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1]
  }
  return c
};
goog.object.createSet = function(a) {
  var b = arguments.length;
  if(1 == b && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0])
  }
  for(var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0
  }
  return c
};
goog.string.format = function(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, h, i, j, k, m) {
    if("%" == j) {
      return"%"
    }
    var l = c.shift();
    if("undefined" == typeof l) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = l;
    return goog.string.format.demuxes_[j].apply(null, arguments)
  })
};
goog.string.format.demuxes_ = {};
goog.string.format.demuxes_.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + goog.string.repeat(" ", c - a.length) : goog.string.repeat(" ", c - a.length) + a
};
goog.string.format.demuxes_.f = function(a, b, c, d, e) {
  d = a.toString();
  isNaN(e) || "" == e || (d = a.toFixed(e));
  var f;
  f = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = f + d);
  if(isNaN(c) || d.length >= c) {
    return d
  }
  d = isNaN(e) ? Math.abs(a).toString() : Math.abs(a).toFixed(e);
  a = c - d.length - f.length;
  0 <= b.indexOf("-", 0) ? d = f + d + goog.string.repeat(" ", a) : (b = 0 <= b.indexOf("0", 0) ? "0" : " ", d = f + goog.string.repeat(b, a) + d);
  return d
};
goog.string.format.demuxes_.d = function(a, b, c, d, e, f, g, h) {
  return goog.string.format.demuxes_.f(parseInt(a, 10), b, c, d, 0, f, g, h)
};
goog.string.format.demuxes_.i = goog.string.format.demuxes_.d;
goog.string.format.demuxes_.u = goog.string.format.demuxes_.d;
goog.userAgent = {};
goog.userAgent.jscript = {};
goog.userAgent.jscript.ASSUME_NO_JSCRIPT = !1;
goog.userAgent.jscript.init_ = function() {
  goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_ = "ScriptEngine" in goog.global && "JScript" == goog.global.ScriptEngine();
  goog.userAgent.jscript.DETECTED_VERSION_ = goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_ ? goog.global.ScriptEngineMajorVersion() + "." + goog.global.ScriptEngineMinorVersion() + "." + goog.global.ScriptEngineBuildVersion() : "0"
};
goog.userAgent.jscript.ASSUME_NO_JSCRIPT || goog.userAgent.jscript.init_();
goog.userAgent.jscript.HAS_JSCRIPT = goog.userAgent.jscript.ASSUME_NO_JSCRIPT ? !1 : goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_;
goog.userAgent.jscript.VERSION = goog.userAgent.jscript.ASSUME_NO_JSCRIPT ? "0" : goog.userAgent.jscript.DETECTED_VERSION_;
goog.userAgent.jscript.isVersion = function(a) {
  return 0 <= goog.string.compareVersions(goog.userAgent.jscript.VERSION, a)
};
goog.string.StringBuffer = function(a, b) {
  this.buffer_ = goog.userAgent.jscript.HAS_JSCRIPT ? [] : "";
  null != a && this.append.apply(this, arguments)
};
goog.string.StringBuffer.prototype.set = function(a) {
  this.clear();
  this.append(a)
};
goog.userAgent.jscript.HAS_JSCRIPT ? (goog.string.StringBuffer.prototype.bufferLength_ = 0, goog.string.StringBuffer.prototype.append = function(a, b, c) {
  null == b ? this.buffer_[this.bufferLength_++] = a : (this.buffer_.push.apply(this.buffer_, arguments), this.bufferLength_ = this.buffer_.length);
  return this
}) : goog.string.StringBuffer.prototype.append = function(a, b, c) {
  this.buffer_ += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.buffer_ += arguments[d]
    }
  }
  return this
};
goog.string.StringBuffer.prototype.clear = function() {
  if(goog.userAgent.jscript.HAS_JSCRIPT) {
    this.bufferLength_ = this.buffer_.length = 0
  }else {
    this.buffer_ = ""
  }
};
goog.string.StringBuffer.prototype.getLength = function() {
  return this.toString().length
};
goog.string.StringBuffer.prototype.toString = function() {
  if(goog.userAgent.jscript.HAS_JSCRIPT) {
    var a = this.buffer_.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.buffer_
};
var cljs = {core:{}};
cljs.core._STAR_unchecked_if_STAR_ = !1;
cljs.core._STAR_print_fn_STAR_ = function() {
  throw Error("No *print-fn* fn set for evaluation environment");
};
cljs.core.truth_ = function(a) {
  return null != a && !1 !== a
};
cljs.core.type_satisfies_ = function(a, b) {
  return a[goog.typeOf(null == b ? null : b)] ? !0 : a._ ? !0 : !1
};
cljs.core.is_proto_ = function(a) {
  return a.constructor.prototype === a
};
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = function(a, b) {
  return Error(["No protocol method ", a, " defined for type ", goog.typeOf(b), ": ", b].join(""))
};
cljs.core.aclone = function(a) {
  return a.slice()
};
cljs.core.array = function(a) {
  return Array.prototype.slice.call(arguments)
};
cljs.core.make_array = function() {
  var a = null, b = function(b, d) {
    return a.call(null, d)
  }, a = function(a, d) {
    switch(arguments.length) {
      case 1:
        return Array(a);
      case 2:
        return b.call(this, a, d)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = function(a) {
    return Array(a)
  };
  a.cljs$lang$arity$2 = b;
  return a
}();
cljs.core.aget = function() {
  var a = null, b = function() {
    var b = function(b, c, d) {
      return cljs.core.apply.call(null, a, a.call(null, b, c), d)
    }, d = function(a, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, d, h)
    };
    d.cljs$lang$maxFixedArity = 2;
    d.cljs$lang$applyTo = function(a) {
      var d = cljs.core.first(a), g = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b(d, g, a)
    };
    d.cljs$lang$arity$variadic = b;
    return d
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return a[d];
      default:
        return b.cljs$lang$arity$variadic(a, d, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.cljs$lang$arity$2 = function(a, b) {
    return a[b]
  };
  a.cljs$lang$arity$variadic = b.cljs$lang$arity$variadic;
  return a
}();
cljs.core.aset = function(a, b, c) {
  return a[b] = c
};
cljs.core.alength = function(a) {
  return a.length
};
cljs.core.into_array = function() {
  var a = null, b = function(b) {
    return a.call(null, null, b)
  }, c = function(a, b) {
    return cljs.core.reduce.call(null, function(a, b) {
      a.push(b);
      return a
    }, [], b)
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.IFn = {};
cljs.core._invoke = function() {
  var a = null, b = function(a) {
    if(a ? a.cljs$core$IFn$_invoke$arity$1 : a) {
      return a.cljs$core$IFn$_invoke$arity$1(a)
    }
    var b;
    b = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!b && (b = cljs.core._invoke._, !b)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return b.call(null, a)
  }, c = function(a, b) {
    if(a ? a.cljs$core$IFn$_invoke$arity$2 : a) {
      return a.cljs$core$IFn$_invoke$arity$2(a, b)
    }
    var c;
    c = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!c && (c = cljs.core._invoke._, !c)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return c.call(null, a, b)
  }, d = function(a, b, c) {
    if(a ? a.cljs$core$IFn$_invoke$arity$3 : a) {
      return a.cljs$core$IFn$_invoke$arity$3(a, b, c)
    }
    var d;
    d = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!d && (d = cljs.core._invoke._, !d)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return d.call(null, a, b, c)
  }, e = function(a, b, c, d) {
    if(a ? a.cljs$core$IFn$_invoke$arity$4 : a) {
      return a.cljs$core$IFn$_invoke$arity$4(a, b, c, d)
    }
    var e;
    e = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!e && (e = cljs.core._invoke._, !e)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return e.call(null, a, b, c, d)
  }, f = function(a, b, c, d, e) {
    if(a ? a.cljs$core$IFn$_invoke$arity$5 : a) {
      return a.cljs$core$IFn$_invoke$arity$5(a, b, c, d, e)
    }
    var f;
    f = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!f && (f = cljs.core._invoke._, !f)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return f.call(null, a, b, c, d, e)
  }, g = function(a, b, c, d, e, f) {
    if(a ? a.cljs$core$IFn$_invoke$arity$6 : a) {
      return a.cljs$core$IFn$_invoke$arity$6(a, b, c, d, e, f)
    }
    var g;
    g = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!g && (g = cljs.core._invoke._, !g)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return g.call(null, a, b, c, d, e, f)
  }, h = function(a, b, c, d, e, f, g) {
    if(a ? a.cljs$core$IFn$_invoke$arity$7 : a) {
      return a.cljs$core$IFn$_invoke$arity$7(a, b, c, d, e, f, g)
    }
    var h;
    h = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!h && (h = cljs.core._invoke._, !h)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return h.call(null, a, b, c, d, e, f, g)
  }, i = function(a, b, c, d, e, f, g, h) {
    if(a ? a.cljs$core$IFn$_invoke$arity$8 : a) {
      return a.cljs$core$IFn$_invoke$arity$8(a, b, c, d, e, f, g, h)
    }
    var i;
    i = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!i && (i = cljs.core._invoke._, !i)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return i.call(null, a, b, c, d, e, f, g, h)
  }, j = function(a, b, c, d, e, f, g, h, i) {
    if(a ? a.cljs$core$IFn$_invoke$arity$9 : a) {
      return a.cljs$core$IFn$_invoke$arity$9(a, b, c, d, e, f, g, h, i)
    }
    var j;
    j = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!j && (j = cljs.core._invoke._, !j)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return j.call(null, a, b, c, d, e, f, g, h, i)
  }, k = function(a, b, c, d, e, f, g, h, i, j) {
    if(a ? a.cljs$core$IFn$_invoke$arity$10 : a) {
      return a.cljs$core$IFn$_invoke$arity$10(a, b, c, d, e, f, g, h, i, j)
    }
    var k;
    k = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!k && (k = cljs.core._invoke._, !k)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return k.call(null, a, b, c, d, e, f, g, h, i, j)
  }, m = function(a, b, c, d, e, f, g, h, i, j, k) {
    if(a ? a.cljs$core$IFn$_invoke$arity$11 : a) {
      return a.cljs$core$IFn$_invoke$arity$11(a, b, c, d, e, f, g, h, i, j, k)
    }
    var m;
    m = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!m && (m = cljs.core._invoke._, !m)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return m.call(null, a, b, c, d, e, f, g, h, i, j, k)
  }, l = function(a, b, c, d, e, f, g, h, i, j, k, m) {
    if(a ? a.cljs$core$IFn$_invoke$arity$12 : a) {
      return a.cljs$core$IFn$_invoke$arity$12(a, b, c, d, e, f, g, h, i, j, k, m)
    }
    var l;
    l = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!l && (l = cljs.core._invoke._, !l)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return l.call(null, a, b, c, d, e, f, g, h, i, j, k, m)
  }, n = function(a, b, c, d, e, f, g, h, i, j, k, m, l) {
    if(a ? a.cljs$core$IFn$_invoke$arity$13 : a) {
      return a.cljs$core$IFn$_invoke$arity$13(a, b, c, d, e, f, g, h, i, j, k, m, l)
    }
    var n;
    n = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!n && (n = cljs.core._invoke._, !n)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return n.call(null, a, b, c, d, e, f, g, h, i, j, k, m, l)
  }, o = function(a, b, c, d, e, f, g, h, i, j, k, m, l, n) {
    if(a ? a.cljs$core$IFn$_invoke$arity$14 : a) {
      return a.cljs$core$IFn$_invoke$arity$14(a, b, c, d, e, f, g, h, i, j, k, m, l, n)
    }
    var o;
    o = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!o && (o = cljs.core._invoke._, !o)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return o.call(null, a, b, c, d, e, f, g, h, i, j, k, m, l, n)
  }, p = function(a, b, c, d, e, f, g, h, i, j, k, m, l, n, o) {
    if(a ? a.cljs$core$IFn$_invoke$arity$15 : a) {
      return a.cljs$core$IFn$_invoke$arity$15(a, b, c, d, e, f, g, h, i, j, k, m, l, n, o)
    }
    var p;
    p = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!p && (p = cljs.core._invoke._, !p)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return p.call(null, a, b, c, d, e, f, g, h, i, j, k, m, l, n, o)
  }, q = function(a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p) {
    if(a ? a.cljs$core$IFn$_invoke$arity$16 : a) {
      return a.cljs$core$IFn$_invoke$arity$16(a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p)
    }
    var q;
    q = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!q && (q = cljs.core._invoke._, !q)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return q.call(null, a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p)
  }, r = function(a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q) {
    if(a ? a.cljs$core$IFn$_invoke$arity$17 : a) {
      return a.cljs$core$IFn$_invoke$arity$17(a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q)
    }
    var s;
    s = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!s && (s = cljs.core._invoke._, !s)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return s.call(null, a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q)
  }, t = function(a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q, s) {
    if(a ? a.cljs$core$IFn$_invoke$arity$18 : a) {
      return a.cljs$core$IFn$_invoke$arity$18(a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q, s)
    }
    var r;
    r = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!r && (r = cljs.core._invoke._, !r)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return r.call(null, a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q, s)
  }, s = function(a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q, s, r) {
    if(a ? a.cljs$core$IFn$_invoke$arity$19 : a) {
      return a.cljs$core$IFn$_invoke$arity$19(a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q, s, r)
    }
    var t;
    t = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!t && (t = cljs.core._invoke._, !t)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return t.call(null, a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q, s, r)
  }, y = function(a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q, s, r, t) {
    if(a ? a.cljs$core$IFn$_invoke$arity$20 : a) {
      return a.cljs$core$IFn$_invoke$arity$20(a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q, s, r, t)
    }
    var y;
    y = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!y && (y = cljs.core._invoke._, !y)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return y.call(null, a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q, s, r, t)
  }, F = function(a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q, s, r, t, y) {
    if(a ? a.cljs$core$IFn$_invoke$arity$21 : a) {
      return a.cljs$core$IFn$_invoke$arity$21(a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q, s, r, t, y)
    }
    var F;
    F = cljs.core._invoke[goog.typeOf(null == a ? null : a)];
    if(!F && (F = cljs.core._invoke._, !F)) {
      throw cljs.core.missing_protocol.call(null, "IFn.-invoke", a);
    }
    return F.call(null, a, b, c, d, e, f, g, h, i, j, k, m, l, n, o, p, q, s, r, t, y)
  }, a = function(a, u, v, w, x, z, A, B, C, D, E, G, H, I, J, K, L, M, N, O, P) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, u);
      case 3:
        return d.call(this, a, u, v);
      case 4:
        return e.call(this, a, u, v, w);
      case 5:
        return f.call(this, a, u, v, w, x);
      case 6:
        return g.call(this, a, u, v, w, x, z);
      case 7:
        return h.call(this, a, u, v, w, x, z, A);
      case 8:
        return i.call(this, a, u, v, w, x, z, A, B);
      case 9:
        return j.call(this, a, u, v, w, x, z, A, B, C);
      case 10:
        return k.call(this, a, u, v, w, x, z, A, B, C, D);
      case 11:
        return m.call(this, a, u, v, w, x, z, A, B, C, D, E);
      case 12:
        return l.call(this, a, u, v, w, x, z, A, B, C, D, E, G);
      case 13:
        return n.call(this, a, u, v, w, x, z, A, B, C, D, E, G, H);
      case 14:
        return o.call(this, a, u, v, w, x, z, A, B, C, D, E, G, H, I);
      case 15:
        return p.call(this, a, u, v, w, x, z, A, B, C, D, E, G, H, I, J);
      case 16:
        return q.call(this, a, u, v, w, x, z, A, B, C, D, E, G, H, I, J, K);
      case 17:
        return r.call(this, a, u, v, w, x, z, A, B, C, D, E, G, H, I, J, K, L);
      case 18:
        return t.call(this, a, u, v, w, x, z, A, B, C, D, E, G, H, I, J, K, L, M);
      case 19:
        return s.call(this, a, u, v, w, x, z, A, B, C, D, E, G, H, I, J, K, L, M, N);
      case 20:
        return y.call(this, a, u, v, w, x, z, A, B, C, D, E, G, H, I, J, K, L, M, N, O);
      case 21:
        return F.call(this, a, u, v, w, x, z, A, B, C, D, E, G, H, I, J, K, L, M, N, O, P)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  a.cljs$lang$arity$3 = d;
  a.cljs$lang$arity$4 = e;
  a.cljs$lang$arity$5 = f;
  a.cljs$lang$arity$6 = g;
  a.cljs$lang$arity$7 = h;
  a.cljs$lang$arity$8 = i;
  a.cljs$lang$arity$9 = j;
  a.cljs$lang$arity$10 = k;
  a.cljs$lang$arity$11 = m;
  a.cljs$lang$arity$12 = l;
  a.cljs$lang$arity$13 = n;
  a.cljs$lang$arity$14 = o;
  a.cljs$lang$arity$15 = p;
  a.cljs$lang$arity$16 = q;
  a.cljs$lang$arity$17 = r;
  a.cljs$lang$arity$18 = t;
  a.cljs$lang$arity$19 = s;
  a.cljs$lang$arity$20 = y;
  a.cljs$lang$arity$21 = F;
  return a
}();
cljs.core.ICounted = {};
cljs.core._count = function(a) {
  if(a ? a.cljs$core$ICounted$_count$arity$1 : a) {
    return a.cljs$core$ICounted$_count$arity$1(a)
  }
  var b;
  b = cljs.core._count[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._count._, !b)) {
    throw cljs.core.missing_protocol.call(null, "ICounted.-count", a);
  }
  return b.call(null, a)
};
cljs.core.IEmptyableCollection = {};
cljs.core._empty = function(a) {
  if(a ? a.cljs$core$IEmptyableCollection$_empty$arity$1 : a) {
    return a.cljs$core$IEmptyableCollection$_empty$arity$1(a)
  }
  var b;
  b = cljs.core._empty[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._empty._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IEmptyableCollection.-empty", a);
  }
  return b.call(null, a)
};
cljs.core.ICollection = {};
cljs.core._conj = function(a, b) {
  if(a ? a.cljs$core$ICollection$_conj$arity$2 : a) {
    return a.cljs$core$ICollection$_conj$arity$2(a, b)
  }
  var c;
  c = cljs.core._conj[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._conj._, !c)) {
    throw cljs.core.missing_protocol.call(null, "ICollection.-conj", a);
  }
  return c.call(null, a, b)
};
cljs.core.IIndexed = {};
cljs.core._nth = function() {
  var a = null, b = function(a, b) {
    if(a ? a.cljs$core$IIndexed$_nth$arity$2 : a) {
      return a.cljs$core$IIndexed$_nth$arity$2(a, b)
    }
    var c;
    c = cljs.core._nth[goog.typeOf(null == a ? null : a)];
    if(!c && (c = cljs.core._nth._, !c)) {
      throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", a);
    }
    return c.call(null, a, b)
  }, c = function(a, b, c) {
    if(a ? a.cljs$core$IIndexed$_nth$arity$3 : a) {
      return a.cljs$core$IIndexed$_nth$arity$3(a, b, c)
    }
    var g;
    g = cljs.core._nth[goog.typeOf(null == a ? null : a)];
    if(!g && (g = cljs.core._nth._, !g)) {
      throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", a);
    }
    return g.call(null, a, b, c)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = function(a) {
  if(a ? a.cljs$core$ISeq$_first$arity$1 : a) {
    return a.cljs$core$ISeq$_first$arity$1(a)
  }
  var b;
  b = cljs.core._first[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._first._, !b)) {
    throw cljs.core.missing_protocol.call(null, "ISeq.-first", a);
  }
  return b.call(null, a)
};
cljs.core._rest = function(a) {
  if(a ? a.cljs$core$ISeq$_rest$arity$1 : a) {
    return a.cljs$core$ISeq$_rest$arity$1(a)
  }
  var b;
  b = cljs.core._rest[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._rest._, !b)) {
    throw cljs.core.missing_protocol.call(null, "ISeq.-rest", a);
  }
  return b.call(null, a)
};
cljs.core.INext = {};
cljs.core._next = function(a) {
  if(a ? a.cljs$core$INext$_next$arity$1 : a) {
    return a.cljs$core$INext$_next$arity$1(a)
  }
  var b;
  b = cljs.core._next[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._next._, !b)) {
    throw cljs.core.missing_protocol.call(null, "INext.-next", a);
  }
  return b.call(null, a)
};
cljs.core.ILookup = {};
cljs.core._lookup = function() {
  var a = null, b = function(a, b) {
    if(a ? a.cljs$core$ILookup$_lookup$arity$2 : a) {
      return a.cljs$core$ILookup$_lookup$arity$2(a, b)
    }
    var c;
    c = cljs.core._lookup[goog.typeOf(null == a ? null : a)];
    if(!c && (c = cljs.core._lookup._, !c)) {
      throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", a);
    }
    return c.call(null, a, b)
  }, c = function(a, b, c) {
    if(a ? a.cljs$core$ILookup$_lookup$arity$3 : a) {
      return a.cljs$core$ILookup$_lookup$arity$3(a, b, c)
    }
    var g;
    g = cljs.core._lookup[goog.typeOf(null == a ? null : a)];
    if(!g && (g = cljs.core._lookup._, !g)) {
      throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", a);
    }
    return g.call(null, a, b, c)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = function(a, b) {
  if(a ? a.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 : a) {
    return a.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(a, b)
  }
  var c;
  c = cljs.core._contains_key_QMARK_[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._contains_key_QMARK_._, !c)) {
    throw cljs.core.missing_protocol.call(null, "IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b)
};
cljs.core._assoc = function(a, b, c) {
  if(a ? a.cljs$core$IAssociative$_assoc$arity$3 : a) {
    return a.cljs$core$IAssociative$_assoc$arity$3(a, b, c)
  }
  var d;
  d = cljs.core._assoc[goog.typeOf(null == a ? null : a)];
  if(!d && (d = cljs.core._assoc._, !d)) {
    throw cljs.core.missing_protocol.call(null, "IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
};
cljs.core.IMap = {};
cljs.core._dissoc = function(a, b) {
  if(a ? a.cljs$core$IMap$_dissoc$arity$2 : a) {
    return a.cljs$core$IMap$_dissoc$arity$2(a, b)
  }
  var c;
  c = cljs.core._dissoc[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._dissoc._, !c)) {
    throw cljs.core.missing_protocol.call(null, "IMap.-dissoc", a);
  }
  return c.call(null, a, b)
};
cljs.core.IMapEntry = {};
cljs.core._key = function(a) {
  if(a ? a.cljs$core$IMapEntry$_key$arity$1 : a) {
    return a.cljs$core$IMapEntry$_key$arity$1(a)
  }
  var b;
  b = cljs.core._key[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._key._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IMapEntry.-key", a);
  }
  return b.call(null, a)
};
cljs.core._val = function(a) {
  if(a ? a.cljs$core$IMapEntry$_val$arity$1 : a) {
    return a.cljs$core$IMapEntry$_val$arity$1(a)
  }
  var b;
  b = cljs.core._val[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._val._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IMapEntry.-val", a);
  }
  return b.call(null, a)
};
cljs.core.ISet = {};
cljs.core._disjoin = function(a, b) {
  if(a ? a.cljs$core$ISet$_disjoin$arity$2 : a) {
    return a.cljs$core$ISet$_disjoin$arity$2(a, b)
  }
  var c;
  c = cljs.core._disjoin[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._disjoin._, !c)) {
    throw cljs.core.missing_protocol.call(null, "ISet.-disjoin", a);
  }
  return c.call(null, a, b)
};
cljs.core.IStack = {};
cljs.core._peek = function(a) {
  if(a ? a.cljs$core$IStack$_peek$arity$1 : a) {
    return a.cljs$core$IStack$_peek$arity$1(a)
  }
  var b;
  b = cljs.core._peek[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._peek._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IStack.-peek", a);
  }
  return b.call(null, a)
};
cljs.core._pop = function(a) {
  if(a ? a.cljs$core$IStack$_pop$arity$1 : a) {
    return a.cljs$core$IStack$_pop$arity$1(a)
  }
  var b;
  b = cljs.core._pop[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._pop._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IStack.-pop", a);
  }
  return b.call(null, a)
};
cljs.core.IVector = {};
cljs.core._assoc_n = function(a, b, c) {
  if(a ? a.cljs$core$IVector$_assoc_n$arity$3 : a) {
    return a.cljs$core$IVector$_assoc_n$arity$3(a, b, c)
  }
  var d;
  d = cljs.core._assoc_n[goog.typeOf(null == a ? null : a)];
  if(!d && (d = cljs.core._assoc_n._, !d)) {
    throw cljs.core.missing_protocol.call(null, "IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
};
cljs.core.IDeref = {};
cljs.core._deref = function(a) {
  if(a ? a.cljs$core$IDeref$_deref$arity$1 : a) {
    return a.cljs$core$IDeref$_deref$arity$1(a)
  }
  var b;
  b = cljs.core._deref[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._deref._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IDeref.-deref", a);
  }
  return b.call(null, a)
};
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = function(a, b, c) {
  if(a ? a.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 : a) {
    return a.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(a, b, c)
  }
  var d;
  d = cljs.core._deref_with_timeout[goog.typeOf(null == a ? null : a)];
  if(!d && (d = cljs.core._deref_with_timeout._, !d)) {
    throw cljs.core.missing_protocol.call(null, "IDerefWithTimeout.-deref-with-timeout", a);
  }
  return d.call(null, a, b, c)
};
cljs.core.IMeta = {};
cljs.core._meta = function(a) {
  if(a ? a.cljs$core$IMeta$_meta$arity$1 : a) {
    return a.cljs$core$IMeta$_meta$arity$1(a)
  }
  var b;
  b = cljs.core._meta[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._meta._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IMeta.-meta", a);
  }
  return b.call(null, a)
};
cljs.core.IWithMeta = {};
cljs.core._with_meta = function(a, b) {
  if(a ? a.cljs$core$IWithMeta$_with_meta$arity$2 : a) {
    return a.cljs$core$IWithMeta$_with_meta$arity$2(a, b)
  }
  var c;
  c = cljs.core._with_meta[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._with_meta._, !c)) {
    throw cljs.core.missing_protocol.call(null, "IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
};
cljs.core.IReduce = {};
cljs.core._reduce = function() {
  var a = null, b = function(a, b) {
    if(a ? a.cljs$core$IReduce$_reduce$arity$2 : a) {
      return a.cljs$core$IReduce$_reduce$arity$2(a, b)
    }
    var c;
    c = cljs.core._reduce[goog.typeOf(null == a ? null : a)];
    if(!c && (c = cljs.core._reduce._, !c)) {
      throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", a);
    }
    return c.call(null, a, b)
  }, c = function(a, b, c) {
    if(a ? a.cljs$core$IReduce$_reduce$arity$3 : a) {
      return a.cljs$core$IReduce$_reduce$arity$3(a, b, c)
    }
    var g;
    g = cljs.core._reduce[goog.typeOf(null == a ? null : a)];
    if(!g && (g = cljs.core._reduce._, !g)) {
      throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", a);
    }
    return g.call(null, a, b, c)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = function(a, b, c) {
  if(a ? a.cljs$core$IKVReduce$_kv_reduce$arity$3 : a) {
    return a.cljs$core$IKVReduce$_kv_reduce$arity$3(a, b, c)
  }
  var d;
  d = cljs.core._kv_reduce[goog.typeOf(null == a ? null : a)];
  if(!d && (d = cljs.core._kv_reduce._, !d)) {
    throw cljs.core.missing_protocol.call(null, "IKVReduce.-kv-reduce", a);
  }
  return d.call(null, a, b, c)
};
cljs.core.IEquiv = {};
cljs.core._equiv = function(a, b) {
  if(a ? a.cljs$core$IEquiv$_equiv$arity$2 : a) {
    return a.cljs$core$IEquiv$_equiv$arity$2(a, b)
  }
  var c;
  c = cljs.core._equiv[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._equiv._, !c)) {
    throw cljs.core.missing_protocol.call(null, "IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
};
cljs.core.IHash = {};
cljs.core._hash = function(a) {
  if(a ? a.cljs$core$IHash$_hash$arity$1 : a) {
    return a.cljs$core$IHash$_hash$arity$1(a)
  }
  var b;
  b = cljs.core._hash[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._hash._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IHash.-hash", a);
  }
  return b.call(null, a)
};
cljs.core.ISeqable = {};
cljs.core._seq = function(a) {
  if(a ? a.cljs$core$ISeqable$_seq$arity$1 : a) {
    return a.cljs$core$ISeqable$_seq$arity$1(a)
  }
  var b;
  b = cljs.core._seq[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._seq._, !b)) {
    throw cljs.core.missing_protocol.call(null, "ISeqable.-seq", a);
  }
  return b.call(null, a)
};
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = function(a) {
  if(a ? a.cljs$core$IReversible$_rseq$arity$1 : a) {
    return a.cljs$core$IReversible$_rseq$arity$1(a)
  }
  var b;
  b = cljs.core._rseq[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._rseq._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IReversible.-rseq", a);
  }
  return b.call(null, a)
};
cljs.core.ISorted = {};
cljs.core._sorted_seq = function(a, b) {
  if(a ? a.cljs$core$ISorted$_sorted_seq$arity$2 : a) {
    return a.cljs$core$ISorted$_sorted_seq$arity$2(a, b)
  }
  var c;
  c = cljs.core._sorted_seq[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._sorted_seq._, !c)) {
    throw cljs.core.missing_protocol.call(null, "ISorted.-sorted-seq", a);
  }
  return c.call(null, a, b)
};
cljs.core._sorted_seq_from = function(a, b, c) {
  if(a ? a.cljs$core$ISorted$_sorted_seq_from$arity$3 : a) {
    return a.cljs$core$ISorted$_sorted_seq_from$arity$3(a, b, c)
  }
  var d;
  d = cljs.core._sorted_seq_from[goog.typeOf(null == a ? null : a)];
  if(!d && (d = cljs.core._sorted_seq_from._, !d)) {
    throw cljs.core.missing_protocol.call(null, "ISorted.-sorted-seq-from", a);
  }
  return d.call(null, a, b, c)
};
cljs.core._entry_key = function(a, b) {
  if(a ? a.cljs$core$ISorted$_entry_key$arity$2 : a) {
    return a.cljs$core$ISorted$_entry_key$arity$2(a, b)
  }
  var c;
  c = cljs.core._entry_key[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._entry_key._, !c)) {
    throw cljs.core.missing_protocol.call(null, "ISorted.-entry-key", a);
  }
  return c.call(null, a, b)
};
cljs.core._comparator = function(a) {
  if(a ? a.cljs$core$ISorted$_comparator$arity$1 : a) {
    return a.cljs$core$ISorted$_comparator$arity$1(a)
  }
  var b;
  b = cljs.core._comparator[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._comparator._, !b)) {
    throw cljs.core.missing_protocol.call(null, "ISorted.-comparator", a);
  }
  return b.call(null, a)
};
cljs.core.IPrintable = {};
cljs.core._pr_seq = function(a, b) {
  if(a ? a.cljs$core$IPrintable$_pr_seq$arity$2 : a) {
    return a.cljs$core$IPrintable$_pr_seq$arity$2(a, b)
  }
  var c;
  c = cljs.core._pr_seq[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._pr_seq._, !c)) {
    throw cljs.core.missing_protocol.call(null, "IPrintable.-pr-seq", a);
  }
  return c.call(null, a, b)
};
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = function(a) {
  if(a ? a.cljs$core$IPending$_realized_QMARK_$arity$1 : a) {
    return a.cljs$core$IPending$_realized_QMARK_$arity$1(a)
  }
  var b;
  b = cljs.core._realized_QMARK_[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._realized_QMARK_._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IPending.-realized?", a);
  }
  return b.call(null, a)
};
cljs.core.IWatchable = {};
cljs.core._notify_watches = function(a, b, c) {
  if(a ? a.cljs$core$IWatchable$_notify_watches$arity$3 : a) {
    return a.cljs$core$IWatchable$_notify_watches$arity$3(a, b, c)
  }
  var d;
  d = cljs.core._notify_watches[goog.typeOf(null == a ? null : a)];
  if(!d && (d = cljs.core._notify_watches._, !d)) {
    throw cljs.core.missing_protocol.call(null, "IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c)
};
cljs.core._add_watch = function(a, b, c) {
  if(a ? a.cljs$core$IWatchable$_add_watch$arity$3 : a) {
    return a.cljs$core$IWatchable$_add_watch$arity$3(a, b, c)
  }
  var d;
  d = cljs.core._add_watch[goog.typeOf(null == a ? null : a)];
  if(!d && (d = cljs.core._add_watch._, !d)) {
    throw cljs.core.missing_protocol.call(null, "IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c)
};
cljs.core._remove_watch = function(a, b) {
  if(a ? a.cljs$core$IWatchable$_remove_watch$arity$2 : a) {
    return a.cljs$core$IWatchable$_remove_watch$arity$2(a, b)
  }
  var c;
  c = cljs.core._remove_watch[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._remove_watch._, !c)) {
    throw cljs.core.missing_protocol.call(null, "IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b)
};
cljs.core.IEditableCollection = {};
cljs.core._as_transient = function(a) {
  if(a ? a.cljs$core$IEditableCollection$_as_transient$arity$1 : a) {
    return a.cljs$core$IEditableCollection$_as_transient$arity$1(a)
  }
  var b;
  b = cljs.core._as_transient[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._as_transient._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
};
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = function(a, b) {
  if(a ? a.cljs$core$ITransientCollection$_conj_BANG_$arity$2 : a) {
    return a.cljs$core$ITransientCollection$_conj_BANG_$arity$2(a, b)
  }
  var c;
  c = cljs.core._conj_BANG_[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._conj_BANG_._, !c)) {
    throw cljs.core.missing_protocol.call(null, "ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
};
cljs.core._persistent_BANG_ = function(a) {
  if(a ? a.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 : a) {
    return a.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(a)
  }
  var b;
  b = cljs.core._persistent_BANG_[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._persistent_BANG_._, !b)) {
    throw cljs.core.missing_protocol.call(null, "ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
};
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = function(a, b, c) {
  if(a ? a.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 : a) {
    return a.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(a, b, c)
  }
  var d;
  d = cljs.core._assoc_BANG_[goog.typeOf(null == a ? null : a)];
  if(!d && (d = cljs.core._assoc_BANG_._, !d)) {
    throw cljs.core.missing_protocol.call(null, "ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
};
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = function(a, b) {
  if(a ? a.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 : a) {
    return a.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(a, b)
  }
  var c;
  c = cljs.core._dissoc_BANG_[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._dissoc_BANG_._, !c)) {
    throw cljs.core.missing_protocol.call(null, "ITransientMap.-dissoc!", a);
  }
  return c.call(null, a, b)
};
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = function(a, b, c) {
  if(a ? a.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 : a) {
    return a.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(a, b, c)
  }
  var d;
  d = cljs.core._assoc_n_BANG_[goog.typeOf(null == a ? null : a)];
  if(!d && (d = cljs.core._assoc_n_BANG_._, !d)) {
    throw cljs.core.missing_protocol.call(null, "ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c)
};
cljs.core._pop_BANG_ = function(a) {
  if(a ? a.cljs$core$ITransientVector$_pop_BANG_$arity$1 : a) {
    return a.cljs$core$ITransientVector$_pop_BANG_$arity$1(a)
  }
  var b;
  b = cljs.core._pop_BANG_[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._pop_BANG_._, !b)) {
    throw cljs.core.missing_protocol.call(null, "ITransientVector.-pop!", a);
  }
  return b.call(null, a)
};
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = function(a, b) {
  if(a ? a.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 : a) {
    return a.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(a, b)
  }
  var c;
  c = cljs.core._disjoin_BANG_[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._disjoin_BANG_._, !c)) {
    throw cljs.core.missing_protocol.call(null, "ITransientSet.-disjoin!", a);
  }
  return c.call(null, a, b)
};
cljs.core.IComparable = {};
cljs.core._compare = function(a, b) {
  if(a ? a.cljs$core$IComparable$_compare$arity$2 : a) {
    return a.cljs$core$IComparable$_compare$arity$2(a, b)
  }
  var c;
  c = cljs.core._compare[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._compare._, !c)) {
    throw cljs.core.missing_protocol.call(null, "IComparable.-compare", a);
  }
  return c.call(null, a, b)
};
cljs.core.IChunk = {};
cljs.core._drop_first = function(a) {
  if(a ? a.cljs$core$IChunk$_drop_first$arity$1 : a) {
    return a.cljs$core$IChunk$_drop_first$arity$1(a)
  }
  var b;
  b = cljs.core._drop_first[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._drop_first._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IChunk.-drop-first", a);
  }
  return b.call(null, a)
};
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = function(a) {
  if(a ? a.cljs$core$IChunkedSeq$_chunked_first$arity$1 : a) {
    return a.cljs$core$IChunkedSeq$_chunked_first$arity$1(a)
  }
  var b;
  b = cljs.core._chunked_first[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._chunked_first._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
};
cljs.core._chunked_rest = function(a) {
  if(a ? a.cljs$core$IChunkedSeq$_chunked_rest$arity$1 : a) {
    return a.cljs$core$IChunkedSeq$_chunked_rest$arity$1(a)
  }
  var b;
  b = cljs.core._chunked_rest[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._chunked_rest._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
};
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = function(a) {
  if(a ? a.cljs$core$IChunkedNext$_chunked_next$arity$1 : a) {
    return a.cljs$core$IChunkedNext$_chunked_next$arity$1(a)
  }
  var b;
  b = cljs.core._chunked_next[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._chunked_next._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a)
};
cljs.core.identical_QMARK_ = function(a, b) {
  return a === b
};
cljs.core._EQ_ = function() {
  var a = null, b = function(a, b) {
    var c = a === b;
    return c ? c : cljs.core._equiv.call(null, a, b)
  }, c = function() {
    var b = function(b, c, d) {
      for(;;) {
        if(cljs.core.truth_(a.call(null, b, c))) {
          if(cljs.core.next.call(null, d)) {
            b = c, c = cljs.core.first.call(null, d), d = cljs.core.next.call(null, d)
          }else {
            return a.call(null, c, cljs.core.first.call(null, d))
          }
        }else {
          return!1
        }
      }
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b(c, e, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return b.call(this, a, e);
      default:
        return c.cljs$lang$arity$variadic(a, e, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = function() {
    return!0
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.nil_QMARK_ = function(a) {
  return null == a
};
cljs.core.type = function(a) {
  return null == a ? null : a.constructor
};
cljs.core.instance_QMARK_ = function(a, b) {
  return b instanceof a
};
cljs.core.IHash["null"] = !0;
cljs.core._hash["null"] = function() {
  return 0
};
cljs.core.ILookup["null"] = !0;
cljs.core._lookup["null"] = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return null;
      case 3:
        return d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IAssociative["null"] = !0;
cljs.core._assoc["null"] = function(a, b, c) {
  return cljs.core.hash_map.call(null, b, c)
};
cljs.core.INext["null"] = !0;
cljs.core._next["null"] = function() {
  return null
};
cljs.core.ICollection["null"] = !0;
cljs.core._conj["null"] = function(a, b) {
  return cljs.core.list.call(null, b)
};
cljs.core.IReduce["null"] = !0;
cljs.core._reduce["null"] = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c.call(null);
      case 3:
        return d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IPrintable["null"] = !0;
cljs.core._pr_seq["null"] = function() {
  return cljs.core.list.call(null, "nil")
};
cljs.core.ISet["null"] = !0;
cljs.core._disjoin["null"] = function() {
  return null
};
cljs.core.ICounted["null"] = !0;
cljs.core._count["null"] = function() {
  return 0
};
cljs.core.IStack["null"] = !0;
cljs.core._peek["null"] = function() {
  return null
};
cljs.core._pop["null"] = function() {
  return null
};
cljs.core.ISeq["null"] = !0;
cljs.core._first["null"] = function() {
  return null
};
cljs.core._rest["null"] = function() {
  return cljs.core.list.call(null)
};
cljs.core.IEquiv["null"] = !0;
cljs.core._equiv["null"] = function(a, b) {
  return null == b
};
cljs.core.IWithMeta["null"] = !0;
cljs.core._with_meta["null"] = function() {
  return null
};
cljs.core.IMeta["null"] = !0;
cljs.core._meta["null"] = function() {
  return null
};
cljs.core.IIndexed["null"] = !0;
cljs.core._nth["null"] = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return null;
      case 3:
        return d
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IEmptyableCollection["null"] = !0;
cljs.core._empty["null"] = function() {
  return null
};
cljs.core.IMap["null"] = !0;
cljs.core._dissoc["null"] = function() {
  return null
};
Date.prototype.cljs$core$IEquiv$ = !0;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  var c = cljs.core.instance_QMARK_.call(null, Date, b);
  return c ? a.toString() === b.toString() : c
};
cljs.core.IHash.number = !0;
cljs.core._hash.number = function(a) {
  return a
};
cljs.core.IEquiv.number = !0;
cljs.core._equiv.number = function(a, b) {
  return a === b
};
cljs.core.IHash["boolean"] = !0;
cljs.core._hash["boolean"] = function(a) {
  return!0 === a ? 1 : 0
};
cljs.core.IHash._ = !0;
cljs.core._hash._ = function(a) {
  return goog.getUid(a)
};
cljs.core.inc = function(a) {
  return a + 1
};
cljs.core.ci_reduce = function() {
  var a = null, b = function(a, b) {
    var c = cljs.core._count.call(null, a);
    if(0 === c) {
      return b.call(null)
    }
    for(var d = cljs.core._nth.call(null, a, 0), i = 1;;) {
      if(i < c) {
        d = b.call(null, d, cljs.core._nth.call(null, a, i));
        if(cljs.core.reduced_QMARK_.call(null, d)) {
          return cljs.core.deref.call(null, d)
        }
        i += 1
      }else {
        return d
      }
    }
  }, c = function(a, b, c) {
    for(var d = cljs.core._count.call(null, a), i = 0;;) {
      if(i < d) {
        c = b.call(null, c, cljs.core._nth.call(null, a, i));
        if(cljs.core.reduced_QMARK_.call(null, c)) {
          return cljs.core.deref.call(null, c)
        }
        i += 1
      }else {
        return c
      }
    }
  }, d = function(a, b, c, d) {
    for(var i = cljs.core._count.call(null, a);;) {
      if(d < i) {
        c = b.call(null, c, cljs.core._nth.call(null, a, d));
        if(cljs.core.reduced_QMARK_.call(null, c)) {
          return cljs.core.deref.call(null, c)
        }
        d += 1
      }else {
        return c
      }
    }
  }, a = function(a, f, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, f);
      case 3:
        return c.call(this, a, f, g);
      case 4:
        return d.call(this, a, f, g, h)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  a.cljs$lang$arity$4 = d;
  return a
}();
cljs.core.array_reduce = function() {
  var a = null, b = function(a, b) {
    var c = a.length;
    if(0 === a.length) {
      return b.call(null)
    }
    for(var d = a[0], i = 1;;) {
      if(i < c) {
        d = b.call(null, d, a[i]);
        if(cljs.core.reduced_QMARK_.call(null, d)) {
          return cljs.core.deref.call(null, d)
        }
        i += 1
      }else {
        return d
      }
    }
  }, c = function(a, b, c) {
    for(var d = a.length, i = 0;;) {
      if(i < d) {
        c = b.call(null, c, a[i]);
        if(cljs.core.reduced_QMARK_.call(null, c)) {
          return cljs.core.deref.call(null, c)
        }
        i += 1
      }else {
        return c
      }
    }
  }, d = function(a, b, c, d) {
    for(var i = a.length;;) {
      if(d < i) {
        c = b.call(null, c, a[d]);
        if(cljs.core.reduced_QMARK_.call(null, c)) {
          return cljs.core.deref.call(null, c)
        }
        d += 1
      }else {
        return c
      }
    }
  }, a = function(a, f, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, f);
      case 3:
        return c.call(this, a, f, g);
      case 4:
        return d.call(this, a, f, g, h)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  a.cljs$lang$arity$4 = d;
  return a
}();
cljs.core.IndexedSeq = function(a, b) {
  this.a = a;
  this.i = b;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 166199546
};
cljs.core.IndexedSeq.cljs$lang$type = !0;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/IndexedSeq")
};
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = function() {
  return this.i + 1 < this.a.length ? new cljs.core.IndexedSeq(this.a, this.i + 1) : null
};
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons.call(null, b, a)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = function(a) {
  var b = a.cljs$core$ICounted$_count$arity$1(a);
  return 0 < b ? new cljs.core.RSeq(a, b - 1, null) : cljs.core.List.EMPTY
};
cljs.core.IndexedSeq.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.counted_QMARK_.call(null, this.a) ? cljs.core.ci_reduce.call(null, this.a, b, this.a[this.i], this.i + 1) : cljs.core.ci_reduce.call(null, a, b, this.a[this.i], 0)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.counted_QMARK_.call(null, this.a) ? cljs.core.ci_reduce.call(null, this.a, b, c, this.i) : cljs.core.ci_reduce.call(null, a, b, c, 0)
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return a
};
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return this.a.length - this.i
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = function() {
  return this.a[this.i]
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function() {
  return this.i + 1 < this.a.length ? new cljs.core.IndexedSeq(this.a, this.i + 1) : cljs.core.list.call(null)
};
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  var c = b + this.i;
  return c < this.a.length ? this.a[c] : null
};
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  a = b + this.i;
  return a < this.a.length ? this.a[a] : c
};
cljs.core.IndexedSeq;
cljs.core.prim_seq = function() {
  var a = null, b = function(b) {
    return a.call(null, b, 0)
  }, c = function(a, b) {
    return 0 === a.length ? null : new cljs.core.IndexedSeq(a, b)
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.array_seq = function() {
  var a = null, b = function(a) {
    return cljs.core.prim_seq.call(null, a, 0)
  }, c = function(a, b) {
    return cljs.core.prim_seq.call(null, a, b)
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.IReduce.array = !0;
cljs.core._reduce.array = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.ci_reduce.call(null, a, c);
      case 3:
        return cljs.core.ci_reduce.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ILookup.array = !0;
cljs.core._lookup.array = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a[c];
      case 3:
        return cljs.core._nth.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IIndexed.array = !0;
cljs.core._nth.array = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        e = c < a.length ? a[c] : null;
        return e;
      case 3:
        return e = c < a.length ? a[c] : d, e
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ICounted.array = !0;
cljs.core._count.array = function(a) {
  return a.length
};
cljs.core.ISeqable.array = !0;
cljs.core._seq.array = function(a) {
  return cljs.core.array_seq.call(null, a, 0)
};
cljs.core.RSeq = function(a, b, c) {
  this.ci = a;
  this.i = b;
  this.meta = c;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 31850570
};
cljs.core.RSeq.cljs$lang$type = !0;
cljs.core.RSeq.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/RSeq")
};
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return cljs.core.hash_coll.call(null, a)
};
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons.call(null, b, a)
};
cljs.core.RSeq.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return a
};
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return this.i + 1
};
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = function() {
  return cljs.core._nth.call(null, this.ci, this.i)
};
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function() {
  return 0 < this.i ? new cljs.core.RSeq(this.ci, this.i - 1, null) : cljs.core.List.EMPTY
};
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.RSeq(this.ci, this.i, b)
};
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.RSeq;
cljs.core.seq = function(a) {
  if(null == a) {
    a = null
  }else {
    var b;
    a ? (b = (b = a.cljs$lang$protocol_mask$partition0$ & 32) ? b : a.cljs$core$ASeq$, b = b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.ASeq, a)) : b = cljs.core.type_satisfies_.call(null, cljs.core.ASeq, a);
    a = b ? a : cljs.core._seq.call(null, a)
  }
  return a
};
cljs.core.first = function(a) {
  if(null == a) {
    return null
  }
  var b;
  a ? (b = (b = a.cljs$lang$protocol_mask$partition0$ & 64) ? b : a.cljs$core$ISeq$, b = b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.ISeq, a)) : b = cljs.core.type_satisfies_.call(null, cljs.core.ISeq, a);
  if(b) {
    return cljs.core._first.call(null, a)
  }
  a = cljs.core.seq.call(null, a);
  return null == a ? null : cljs.core._first.call(null, a)
};
cljs.core.rest = function(a) {
  if(null != a) {
    var b;
    a ? (b = (b = a.cljs$lang$protocol_mask$partition0$ & 64) ? b : a.cljs$core$ISeq$, b = b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.ISeq, a)) : b = cljs.core.type_satisfies_.call(null, cljs.core.ISeq, a);
    if(b) {
      return cljs.core._rest.call(null, a)
    }
    a = cljs.core.seq.call(null, a);
    return null != a ? cljs.core._rest.call(null, a) : cljs.core.List.EMPTY
  }
  return cljs.core.List.EMPTY
};
cljs.core.next = function(a) {
  if(null == a) {
    a = null
  }else {
    var b;
    a ? (b = (b = a.cljs$lang$protocol_mask$partition0$ & 128) ? b : a.cljs$core$INext$, b = b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.INext, a)) : b = cljs.core.type_satisfies_.call(null, cljs.core.INext, a);
    a = b ? cljs.core._next.call(null, a) : cljs.core.seq.call(null, cljs.core.rest.call(null, a))
  }
  return a
};
cljs.core.second = function(a) {
  return cljs.core.first.call(null, cljs.core.next.call(null, a))
};
cljs.core.ffirst = function(a) {
  return cljs.core.first.call(null, cljs.core.first.call(null, a))
};
cljs.core.nfirst = function(a) {
  return cljs.core.next.call(null, cljs.core.first.call(null, a))
};
cljs.core.fnext = function(a) {
  return cljs.core.first.call(null, cljs.core.next.call(null, a))
};
cljs.core.nnext = function(a) {
  return cljs.core.next.call(null, cljs.core.next.call(null, a))
};
cljs.core.last = function(a) {
  for(;;) {
    var b = cljs.core.next.call(null, a);
    if(null != b) {
      a = b
    }else {
      return cljs.core.first.call(null, a)
    }
  }
};
cljs.core.IEquiv._ = !0;
cljs.core._equiv._ = function(a, b) {
  return a === b
};
cljs.core.not = function(a) {
  return cljs.core.truth_(a) ? !1 : !0
};
cljs.core.conj = function() {
  var a = null, b = function(a, b) {
    return cljs.core._conj.call(null, a, b)
  }, c = function() {
    var b = function(b, c, d) {
      for(;;) {
        if(cljs.core.truth_(d)) {
          b = a.call(null, b, c), c = cljs.core.first.call(null, d), d = cljs.core.next.call(null, d)
        }else {
          return a.call(null, b, c)
        }
      }
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b(c, e, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      default:
        return c.cljs$lang$arity$variadic(a, e, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.empty = function(a) {
  return cljs.core._empty.call(null, a)
};
cljs.core.accumulating_seq_count = function(a) {
  for(var a = cljs.core.seq.call(null, a), b = 0;;) {
    if(cljs.core.counted_QMARK_.call(null, a)) {
      return b + cljs.core._count.call(null, a)
    }
    a = cljs.core.next.call(null, a);
    b += 1
  }
};
cljs.core.count = function(a) {
  return cljs.core.counted_QMARK_.call(null, a) ? cljs.core._count.call(null, a) : cljs.core.accumulating_seq_count.call(null, a)
};
cljs.core.linear_traversal_nth = function() {
  var a = null, b = function(b, c) {
    if(null == b) {
      throw Error("Index out of bounds");
    }
    if(0 === c) {
      if(cljs.core.seq.call(null, b)) {
        return cljs.core.first.call(null, b)
      }
      throw Error("Index out of bounds");
    }
    if(cljs.core.indexed_QMARK_.call(null, b)) {
      return cljs.core._nth.call(null, b, c)
    }
    if(cljs.core.seq.call(null, b)) {
      return a.call(null, cljs.core.next.call(null, b), c - 1)
    }
    throw Error("Index out of bounds");
  }, c = function(b, c, f) {
    return null == b ? f : 0 === c ? cljs.core.seq.call(null, b) ? cljs.core.first.call(null, b) : f : cljs.core.indexed_QMARK_.call(null, b) ? cljs.core._nth.call(null, b, c, f) : cljs.core.seq.call(null, b) ? a.call(null, cljs.core.next.call(null, b), c - 1, f) : f
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.nth = function() {
  var a = null, b = function(a, b) {
    var c;
    null == a ? c = null : (a ? (c = (c = a.cljs$lang$protocol_mask$partition0$ & 16) ? c : a.cljs$core$IIndexed$, c = c ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, a)) : c = cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, a), c = c ? cljs.core._nth.call(null, a, Math.floor(b)) : cljs.core.linear_traversal_nth.call(null, a, Math.floor(b)));
    return c
  }, c = function(a, b, c) {
    if(null != a) {
      var g;
      a ? (g = (g = a.cljs$lang$protocol_mask$partition0$ & 16) ? g : a.cljs$core$IIndexed$, g = g ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, a)) : g = cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, a);
      a = g ? cljs.core._nth.call(null, a, Math.floor(b), c) : cljs.core.linear_traversal_nth.call(null, a, Math.floor(b), c)
    }else {
      a = c
    }
    return a
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.get = function() {
  var a = null, b = function(a, b) {
    return cljs.core._lookup.call(null, a, b)
  }, c = function(a, b, c) {
    return cljs.core._lookup.call(null, a, b, c)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.assoc = function() {
  var a = null, b = function(a, b, c) {
    return cljs.core._assoc.call(null, a, b, c)
  }, c = function() {
    var b = function(b, c, d, e) {
      for(;;) {
        if(b = a.call(null, b, c, d), cljs.core.truth_(e)) {
          c = cljs.core.first.call(null, e), d = cljs.core.second.call(null, e), e = cljs.core.nnext.call(null, e)
        }else {
          return b
        }
      }
    }, c = function(a, c, e, i) {
      var j = null;
      goog.isDef(i) && (j = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, a, c, e, j)
    };
    c.cljs$lang$maxFixedArity = 3;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), i = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
      return b(c, e, i, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, a, e, f);
      default:
        return c.cljs$lang$arity$variadic(a, e, f, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$3 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.dissoc = function() {
  var a = null, b = function(a, b) {
    return cljs.core._dissoc.call(null, a, b)
  }, c = function() {
    var b = function(b, c, d) {
      for(;;) {
        if(b = a.call(null, b, c), cljs.core.truth_(d)) {
          c = cljs.core.first.call(null, d), d = cljs.core.next.call(null, d)
        }else {
          return b
        }
      }
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b(c, e, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return b.call(this, a, e);
      default:
        return c.cljs$lang$arity$variadic(a, e, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = function(a) {
    return a
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.with_meta = function(a, b) {
  return cljs.core._with_meta.call(null, a, b)
};
cljs.core.meta = function(a) {
  var b;
  a ? (b = (b = a.cljs$lang$protocol_mask$partition0$ & 131072) ? b : a.cljs$core$IMeta$, b = b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IMeta, a)) : b = cljs.core.type_satisfies_.call(null, cljs.core.IMeta, a);
  return b ? cljs.core._meta.call(null, a) : null
};
cljs.core.peek = function(a) {
  return cljs.core._peek.call(null, a)
};
cljs.core.pop = function(a) {
  return cljs.core._pop.call(null, a)
};
cljs.core.disj = function() {
  var a = null, b = function(a, b) {
    return cljs.core._disjoin.call(null, a, b)
  }, c = function() {
    var b = function(b, c, d) {
      for(;;) {
        if(b = a.call(null, b, c), cljs.core.truth_(d)) {
          c = cljs.core.first.call(null, d), d = cljs.core.next.call(null, d)
        }else {
          return b
        }
      }
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b(c, e, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return b.call(this, a, e);
      default:
        return c.cljs$lang$arity$variadic(a, e, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = function(a) {
    return a
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = function(a) {
  var b = goog.string.hashCode(a);
  cljs.core.string_hash_cache[a] = b;
  cljs.core.string_hash_cache_count += 1;
  return b
};
cljs.core.check_string_hash_cache = function(a) {
  255 < cljs.core.string_hash_cache_count && (cljs.core.string_hash_cache = {}, cljs.core.string_hash_cache_count = 0);
  var b = cljs.core.string_hash_cache[a];
  return null != b ? b : cljs.core.add_to_string_hash_cache.call(null, a)
};
cljs.core.hash = function() {
  var a = null, b = function(b) {
    return a.call(null, b, !0)
  }, c = function(a, b) {
    var c = goog.isString(a);
    return(c ? b : c) ? cljs.core.check_string_hash_cache.call(null, a) : cljs.core._hash.call(null, a)
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.empty_QMARK_ = function(a) {
  return cljs.core.not.call(null, cljs.core.seq.call(null, a))
};
cljs.core.coll_QMARK_ = function(a) {
  if(null == a) {
    return!1
  }
  if(a) {
    var b;
    b = (b = a.cljs$lang$protocol_mask$partition0$ & 8) ? b : a.cljs$core$ICollection$;
    return b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.ICollection, a)
  }
  return cljs.core.type_satisfies_.call(null, cljs.core.ICollection, a)
};
cljs.core.set_QMARK_ = function(a) {
  if(null == a) {
    return!1
  }
  if(a) {
    var b;
    b = (b = a.cljs$lang$protocol_mask$partition0$ & 4096) ? b : a.cljs$core$ISet$;
    return b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.ISet, a)
  }
  return cljs.core.type_satisfies_.call(null, cljs.core.ISet, a)
};
cljs.core.associative_QMARK_ = function(a) {
  if(a) {
    var b;
    b = (b = a.cljs$lang$protocol_mask$partition0$ & 512) ? b : a.cljs$core$IAssociative$;
    return b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IAssociative, a)
  }
  return cljs.core.type_satisfies_.call(null, cljs.core.IAssociative, a)
};
cljs.core.sequential_QMARK_ = function(a) {
  if(a) {
    var b;
    b = (b = a.cljs$lang$protocol_mask$partition0$ & 16777216) ? b : a.cljs$core$ISequential$;
    return b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.ISequential, a)
  }
  return cljs.core.type_satisfies_.call(null, cljs.core.ISequential, a)
};
cljs.core.counted_QMARK_ = function(a) {
  if(a) {
    var b;
    b = (b = a.cljs$lang$protocol_mask$partition0$ & 2) ? b : a.cljs$core$ICounted$;
    return b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.ICounted, a)
  }
  return cljs.core.type_satisfies_.call(null, cljs.core.ICounted, a)
};
cljs.core.indexed_QMARK_ = function(a) {
  if(a) {
    var b;
    b = (b = a.cljs$lang$protocol_mask$partition0$ & 16) ? b : a.cljs$core$IIndexed$;
    return b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, a)
  }
  return cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, a)
};
cljs.core.reduceable_QMARK_ = function(a) {
  if(a) {
    var b;
    b = (b = a.cljs$lang$protocol_mask$partition0$ & 524288) ? b : a.cljs$core$IReduce$;
    return b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IReduce, a)
  }
  return cljs.core.type_satisfies_.call(null, cljs.core.IReduce, a)
};
cljs.core.map_QMARK_ = function(a) {
  if(null == a) {
    return!1
  }
  if(a) {
    var b;
    b = (b = a.cljs$lang$protocol_mask$partition0$ & 1024) ? b : a.cljs$core$IMap$;
    return b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IMap, a)
  }
  return cljs.core.type_satisfies_.call(null, cljs.core.IMap, a)
};
cljs.core.vector_QMARK_ = function(a) {
  if(a) {
    var b;
    b = (b = a.cljs$lang$protocol_mask$partition0$ & 16384) ? b : a.cljs$core$IVector$;
    return b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IVector, a)
  }
  return cljs.core.type_satisfies_.call(null, cljs.core.IVector, a)
};
cljs.core.chunked_seq_QMARK_ = function(a) {
  return a ? cljs.core.truth_(cljs.core.truth_(null) ? null : a.cljs$core$IChunkedSeq$) ? !0 : a.cljs$lang$protocol_mask$partition$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IChunkedSeq, a) : cljs.core.type_satisfies_.call(null, cljs.core.IChunkedSeq, a)
};
cljs.core.js_obj = function() {
  var a = null, b = function() {
    var a = function(a) {
      return cljs.core.apply.call(null, goog.object.create, a)
    }, b = function(b) {
      var d = null;
      goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
      return a.call(this, d)
    };
    b.cljs$lang$maxFixedArity = 0;
    b.cljs$lang$applyTo = function(b) {
      b = cljs.core.seq(b);
      return a(b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a) {
    switch(arguments.length) {
      case 0:
        return{};
      default:
        return b.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 0;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.cljs$lang$arity$0 = function() {
    return{}
  };
  a.cljs$lang$arity$variadic = b.cljs$lang$arity$variadic;
  return a
}();
cljs.core.js_keys = function(a) {
  var b = [];
  goog.object.forEach(a, function(a, d) {
    return b.push(d)
  });
  return b
};
cljs.core.js_delete = function(a, b) {
  return delete a[b]
};
cljs.core.array_copy = function(a, b, c, d, e) {
  for(;;) {
    if(0 === e) {
      return c
    }
    c[d] = a[b];
    d += 1;
    e -= 1;
    b += 1
  }
};
cljs.core.array_copy_downward = function(a, b, c, d, e) {
  b += e - 1;
  for(d += e - 1;;) {
    if(0 === e) {
      return c
    }
    c[d] = a[b];
    d -= 1;
    e -= 1;
    b -= 1
  }
};
cljs.core.lookup_sentinel = {};
cljs.core.false_QMARK_ = function(a) {
  return!1 === a
};
cljs.core.true_QMARK_ = function(a) {
  return!0 === a
};
cljs.core.undefined_QMARK_ = function(a) {
  return void 0 === a
};
cljs.core.seq_QMARK_ = function(a) {
  if(null == a) {
    return!1
  }
  if(a) {
    var b;
    b = (b = a.cljs$lang$protocol_mask$partition0$ & 64) ? b : a.cljs$core$ISeq$;
    return b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.ISeq, a)
  }
  return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, a)
};
cljs.core.seqable_QMARK_ = function(a) {
  if(a) {
    var b;
    b = (b = a.cljs$lang$protocol_mask$partition0$ & 8388608) ? b : a.cljs$core$ISeqable$;
    return b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, a)
  }
  return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, a)
};
cljs.core.boolean$ = function(a) {
  return cljs.core.truth_(a) ? !0 : !1
};
cljs.core.string_QMARK_ = function(a) {
  var b = goog.isString(a);
  return b ? (a = (b = "\ufdd0" === a.charAt(0)) ? b : "\ufdd1" === a.charAt(0), !a) : b
};
cljs.core.keyword_QMARK_ = function(a) {
  var b = goog.isString(a);
  return b ? "\ufdd0" === a.charAt(0) : b
};
cljs.core.symbol_QMARK_ = function(a) {
  var b = goog.isString(a);
  return b ? "\ufdd1" === a.charAt(0) : b
};
cljs.core.number_QMARK_ = function(a) {
  return goog.isNumber(a)
};
cljs.core.fn_QMARK_ = function(a) {
  return goog.isFunction(a)
};
cljs.core.ifn_QMARK_ = function(a) {
  var b = cljs.core.fn_QMARK_.call(null, a);
  return b ? b : a ? (b = (b = a.cljs$lang$protocol_mask$partition0$ & 1) ? b : a.cljs$core$IFn$, b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IFn, a)) : cljs.core.type_satisfies_.call(null, cljs.core.IFn, a)
};
cljs.core.integer_QMARK_ = function(a) {
  var b = cljs.core.number_QMARK_.call(null, a);
  return b ? a == a.toFixed() : b
};
cljs.core.contains_QMARK_ = function(a, b) {
  return cljs.core._lookup.call(null, a, b, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel ? !1 : !0
};
cljs.core.find = function(a, b) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(a)) {
      var c = cljs.core.associative_QMARK_.call(null, a);
      return c ? cljs.core.contains_QMARK_.call(null, a, b) : c
    }
    return a
  }()) ? cljs.core.PersistentVector.fromArray([b, cljs.core._lookup.call(null, a, b)], !0) : null
};
cljs.core.distinct_QMARK_ = function() {
  var a = null, b = function(a, b) {
    return!cljs.core._EQ_.call(null, a, b)
  }, c = function() {
    var a = function(a, b, c) {
      if(cljs.core._EQ_.call(null, a, b)) {
        return!1
      }
      a = cljs.core.PersistentHashSet.fromArray([b, a]);
      for(b = c;;) {
        var d = cljs.core.first.call(null, b), c = cljs.core.next.call(null, b);
        if(cljs.core.truth_(b)) {
          if(cljs.core.contains_QMARK_.call(null, a, d)) {
            return!1
          }
          a = cljs.core.conj.call(null, a, d);
          b = c
        }else {
          return!0
        }
      }
    }, b = function(b, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, c, i)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a(c, e, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return b.call(this, a, e);
      default:
        return c.cljs$lang$arity$variadic(a, e, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = function() {
    return!0
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.compare = function(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(cljs.core.type.call(null, a) === cljs.core.type.call(null, b)) {
    return(a ? cljs.core.truth_(cljs.core.truth_(null) ? null : a.cljs$core$IComparable$) || (a.cljs$lang$protocol_mask$partition$ ? 0 : cljs.core.type_satisfies_.call(null, cljs.core.IComparable, a)) : cljs.core.type_satisfies_.call(null, cljs.core.IComparable, a)) ? cljs.core._compare.call(null, a, b) : goog.array.defaultCompare(a, b)
  }
  throw Error("compare on non-nil objects of different types");
};
cljs.core.compare_indexed = function() {
  var a = null, b = function(b, c) {
    var f = cljs.core.count.call(null, b), g = cljs.core.count.call(null, c);
    return f < g ? -1 : f > g ? 1 : a.call(null, b, c, f, 0)
  }, c = function(a, b, c, g) {
    for(;;) {
      var h = cljs.core.compare.call(null, cljs.core.nth.call(null, a, g), cljs.core.nth.call(null, b, g)), i;
      i = (i = 0 === h) ? g + 1 < c : i;
      if(i) {
        g += 1
      }else {
        return h
      }
    }
  }, a = function(a, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 4:
        return c.call(this, a, e, f, g)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$4 = c;
  return a
}();
cljs.core.fn__GT_comparator = function(a) {
  return cljs.core._EQ_.call(null, a, cljs.core.compare) ? cljs.core.compare : function(b, c) {
    var d = a.call(null, b, c);
    return cljs.core.number_QMARK_.call(null, d) ? d : cljs.core.truth_(d) ? -1 : cljs.core.truth_(a.call(null, c, b)) ? 1 : 0
  }
};
cljs.core.sort = function() {
  var a = null, b = function(b) {
    return a.call(null, cljs.core.compare, b)
  }, c = function(a, b) {
    if(cljs.core.seq.call(null, b)) {
      var c = cljs.core.to_array.call(null, b);
      goog.array.stableSort(c, cljs.core.fn__GT_comparator.call(null, a));
      return cljs.core.seq.call(null, c)
    }
    return cljs.core.List.EMPTY
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.sort_by = function() {
  var a = null, b = function(b, c) {
    return a.call(null, b, cljs.core.compare, c)
  }, c = function(a, b, c) {
    return cljs.core.sort.call(null, function(c, f) {
      return cljs.core.fn__GT_comparator.call(null, b).call(null, a.call(null, c), a.call(null, f))
    }, c)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.seq_reduce = function() {
  var a = null, b = function(a, b) {
    var c = cljs.core.seq.call(null, b);
    return c ? cljs.core.reduce.call(null, a, cljs.core.first.call(null, c), cljs.core.next.call(null, c)) : a.call(null)
  }, c = function(a, b, c) {
    for(c = cljs.core.seq.call(null, c);;) {
      if(c) {
        b = a.call(null, b, cljs.core.first.call(null, c));
        if(cljs.core.reduced_QMARK_.call(null, b)) {
          return cljs.core.deref.call(null, b)
        }
        c = cljs.core.next.call(null, c)
      }else {
        return b
      }
    }
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.shuffle = function(a) {
  a = cljs.core.to_array.call(null, a);
  goog.array.shuffle(a);
  return cljs.core.vec.call(null, a)
};
cljs.core.reduce = function() {
  var a = null, b = function(a, b) {
    var c;
    b ? (c = (c = b.cljs$lang$protocol_mask$partition0$ & 524288) ? c : b.cljs$core$IReduce$, c = c ? !0 : b.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IReduce, b)) : c = cljs.core.type_satisfies_.call(null, cljs.core.IReduce, b);
    return c ? cljs.core._reduce.call(null, b, a) : cljs.core.seq_reduce.call(null, a, b)
  }, c = function(a, b, c) {
    var g;
    c ? (g = (g = c.cljs$lang$protocol_mask$partition0$ & 524288) ? g : c.cljs$core$IReduce$, g = g ? !0 : c.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IReduce, c)) : g = cljs.core.type_satisfies_.call(null, cljs.core.IReduce, c);
    return g ? cljs.core._reduce.call(null, c, a, b) : cljs.core.seq_reduce.call(null, a, b, c)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.reduce_kv = function(a, b, c) {
  return cljs.core._kv_reduce.call(null, c, a, b)
};
cljs.core.Reduced = function(a) {
  this.val = a;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32768
};
cljs.core.Reduced.cljs$lang$type = !0;
cljs.core.Reduced.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/Reduced")
};
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = function() {
  return this.val
};
cljs.core.Reduced;
cljs.core.reduced_QMARK_ = function(a) {
  return cljs.core.instance_QMARK_.call(null, cljs.core.Reduced, a)
};
cljs.core.reduced = function(a) {
  return new cljs.core.Reduced(a)
};
cljs.core._PLUS_ = function() {
  var a = null, b = function() {
    var b = function(b, c, d) {
      return cljs.core.reduce.call(null, a, b + c, d)
    }, d = function(a, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, d, h)
    };
    d.cljs$lang$maxFixedArity = 2;
    d.cljs$lang$applyTo = function(a) {
      var d = cljs.core.first(a), g = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b(d, g, a)
    };
    d.cljs$lang$arity$variadic = b;
    return d
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.cljs$lang$arity$variadic(a, d, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.cljs$lang$arity$0 = function() {
    return 0
  };
  a.cljs$lang$arity$1 = function(a) {
    return a
  };
  a.cljs$lang$arity$2 = function(a, b) {
    return a + b
  };
  a.cljs$lang$arity$variadic = b.cljs$lang$arity$variadic;
  return a
}();
cljs.core._ = function() {
  var a = null, b = function() {
    var b = function(b, c, d) {
      return cljs.core.reduce.call(null, a, b - c, d)
    }, d = function(a, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, d, h)
    };
    d.cljs$lang$maxFixedArity = 2;
    d.cljs$lang$applyTo = function(a) {
      var d = cljs.core.first(a), g = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b(d, g, a)
    };
    d.cljs$lang$arity$variadic = b;
    return d
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return-a;
      case 2:
        return a - d;
      default:
        return b.cljs$lang$arity$variadic(a, d, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = function(a) {
    return-a
  };
  a.cljs$lang$arity$2 = function(a, b) {
    return a - b
  };
  a.cljs$lang$arity$variadic = b.cljs$lang$arity$variadic;
  return a
}();
cljs.core._STAR_ = function() {
  var a = null, b = function() {
    var b = function(b, c, d) {
      return cljs.core.reduce.call(null, a, b * c, d)
    }, d = function(a, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, d, h)
    };
    d.cljs$lang$maxFixedArity = 2;
    d.cljs$lang$applyTo = function(a) {
      var d = cljs.core.first(a), g = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b(d, g, a)
    };
    d.cljs$lang$arity$variadic = b;
    return d
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 1;
      case 1:
        return a;
      case 2:
        return a * d;
      default:
        return b.cljs$lang$arity$variadic(a, d, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.cljs$lang$arity$0 = function() {
    return 1
  };
  a.cljs$lang$arity$1 = function(a) {
    return a
  };
  a.cljs$lang$arity$2 = function(a, b) {
    return a * b
  };
  a.cljs$lang$arity$variadic = b.cljs$lang$arity$variadic;
  return a
}();
cljs.core._SLASH_ = function() {
  var a = null, b = function(b) {
    return a.call(null, 1, b)
  }, c = function() {
    var b = function(b, c, d) {
      return cljs.core.reduce.call(null, a, a.call(null, b, c), d)
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b(c, e, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return a / e;
      default:
        return c.cljs$lang$arity$variadic(a, e, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = function(a, b) {
    return a / b
  };
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core._LT_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      for(;;) {
        if(a < b) {
          if(cljs.core.next.call(null, c)) {
            a = b, b = cljs.core.first.call(null, c), c = cljs.core.next.call(null, c)
          }else {
            return b < cljs.core.first.call(null, c)
          }
        }else {
          return!1
        }
      }
    }, b = function(b, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, d, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a(d, g, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a < d;
      default:
        return b.cljs$lang$arity$variadic(a, d, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = function() {
    return!0
  };
  a.cljs$lang$arity$2 = function(a, b) {
    return a < b
  };
  a.cljs$lang$arity$variadic = b.cljs$lang$arity$variadic;
  return a
}();
cljs.core._LT__EQ_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      for(;;) {
        if(a <= b) {
          if(cljs.core.next.call(null, c)) {
            a = b, b = cljs.core.first.call(null, c), c = cljs.core.next.call(null, c)
          }else {
            return b <= cljs.core.first.call(null, c)
          }
        }else {
          return!1
        }
      }
    }, b = function(b, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, d, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a(d, g, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a <= d;
      default:
        return b.cljs$lang$arity$variadic(a, d, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = function() {
    return!0
  };
  a.cljs$lang$arity$2 = function(a, b) {
    return a <= b
  };
  a.cljs$lang$arity$variadic = b.cljs$lang$arity$variadic;
  return a
}();
cljs.core._GT_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      for(;;) {
        if(a > b) {
          if(cljs.core.next.call(null, c)) {
            a = b, b = cljs.core.first.call(null, c), c = cljs.core.next.call(null, c)
          }else {
            return b > cljs.core.first.call(null, c)
          }
        }else {
          return!1
        }
      }
    }, b = function(b, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, d, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a(d, g, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a > d;
      default:
        return b.cljs$lang$arity$variadic(a, d, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = function() {
    return!0
  };
  a.cljs$lang$arity$2 = function(a, b) {
    return a > b
  };
  a.cljs$lang$arity$variadic = b.cljs$lang$arity$variadic;
  return a
}();
cljs.core._GT__EQ_ = function() {
  var a = null, b = function() {
    var a = function(a, b, c) {
      for(;;) {
        if(a >= b) {
          if(cljs.core.next.call(null, c)) {
            a = b, b = cljs.core.first.call(null, c), c = cljs.core.next.call(null, c)
          }else {
            return b >= cljs.core.first.call(null, c)
          }
        }else {
          return!1
        }
      }
    }, b = function(b, d, g) {
      var h = null;
      goog.isDef(g) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, d, h)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var d = cljs.core.first(b), g = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a(d, g, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a >= d;
      default:
        return b.cljs$lang$arity$variadic(a, d, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = b.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = function() {
    return!0
  };
  a.cljs$lang$arity$2 = function(a, b) {
    return a >= b
  };
  a.cljs$lang$arity$variadic = b.cljs$lang$arity$variadic;
  return a
}();
cljs.core.dec = function(a) {
  return a - 1
};
cljs.core.max = function() {
  var a = null, b = function(a, b) {
    return a > b ? a : b
  }, c = function() {
    var b = function(b, c, d) {
      return cljs.core.reduce.call(null, a, b > c ? b : c, d)
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b(c, e, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return b.call(this, a, e);
      default:
        return c.cljs$lang$arity$variadic(a, e, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = function(a) {
    return a
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.min = function() {
  var a = null, b = function(a, b) {
    return a < b ? a : b
  }, c = function() {
    var b = function(b, c, d) {
      return cljs.core.reduce.call(null, a, b < c ? b : c, d)
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b(c, e, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return b.call(this, a, e);
      default:
        return c.cljs$lang$arity$variadic(a, e, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = function(a) {
    return a
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.fix = function(a) {
  return 0 <= a ? Math.floor.call(null, a) : Math.ceil.call(null, a)
};
cljs.core.int$ = function(a) {
  return cljs.core.fix.call(null, a)
};
cljs.core.long$ = function(a) {
  return cljs.core.fix.call(null, a)
};
cljs.core.mod = function(a, b) {
  return a % b
};
cljs.core.quot = function(a, b) {
  return cljs.core.fix.call(null, (a - a % b) / b)
};
cljs.core.rem = function(a, b) {
  var c = cljs.core.quot.call(null, a, b);
  return a - b * c
};
cljs.core.rand = function() {
  var a = null, b = function() {
    return Math.random.call(null)
  }, c = function(b) {
    return b * a.call(null)
  }, a = function(a) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c.call(this, a)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$0 = b;
  a.cljs$lang$arity$1 = c;
  return a
}();
cljs.core.rand_int = function(a) {
  return cljs.core.fix.call(null, cljs.core.rand.call(null, a))
};
cljs.core.bit_xor = function(a, b) {
  return a ^ b
};
cljs.core.bit_and = function(a, b) {
  return a & b
};
cljs.core.bit_or = function(a, b) {
  return a | b
};
cljs.core.bit_and_not = function(a, b) {
  return a & ~b
};
cljs.core.bit_clear = function(a, b) {
  return a & ~(1 << b)
};
cljs.core.bit_flip = function(a, b) {
  return a ^ 1 << b
};
cljs.core.bit_not = function(a) {
  return~a
};
cljs.core.bit_set = function(a, b) {
  return a | 1 << b
};
cljs.core.bit_test = function(a, b) {
  return 0 != (a & 1 << b)
};
cljs.core.bit_shift_left = function(a, b) {
  return a << b
};
cljs.core.bit_shift_right = function(a, b) {
  return a >> b
};
cljs.core.bit_shift_right_zero_fill = function(a, b) {
  return a >>> b
};
cljs.core.bit_count = function(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
};
cljs.core._EQ__EQ_ = function() {
  var a = null, b = function(a, b) {
    return cljs.core._equiv.call(null, a, b)
  }, c = function() {
    var b = function(b, c, d) {
      for(;;) {
        if(cljs.core.truth_(a.call(null, b, c))) {
          if(cljs.core.next.call(null, d)) {
            b = c, c = cljs.core.first.call(null, d), d = cljs.core.next.call(null, d)
          }else {
            return a.call(null, c, cljs.core.first.call(null, d))
          }
        }else {
          return!1
        }
      }
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b(c, e, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return b.call(this, a, e);
      default:
        return c.cljs$lang$arity$variadic(a, e, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = function() {
    return!0
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.pos_QMARK_ = function(a) {
  return 0 < a
};
cljs.core.zero_QMARK_ = function(a) {
  return 0 === a
};
cljs.core.neg_QMARK_ = function(a) {
  return 0 > a
};
cljs.core.nthnext = function(a, b) {
  for(var c = b, d = cljs.core.seq.call(null, a);;) {
    if(cljs.core.truth_(function() {
      var a = d;
      return a ? 0 < c : a
    }())) {
      var e = c - 1, f = cljs.core.next.call(null, d), c = e, d = f
    }else {
      return d
    }
  }
};
cljs.core.str_STAR_ = function() {
  var a = null, b = function(a) {
    return null == a ? "" : a.toString()
  }, c = function() {
    var b = function(b, c) {
      return function(b, c) {
        for(;;) {
          if(cljs.core.truth_(c)) {
            var d = b.append(a.call(null, cljs.core.first.call(null, c))), e = cljs.core.next.call(null, c), b = d, c = e
          }else {
            return a.call(null, b)
          }
        }
      }.call(null, new goog.string.StringBuffer(a.call(null, b)), c)
    }, c = function(a, c) {
      var e = null;
      goog.isDef(c) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, a, e)
    };
    c.cljs$lang$maxFixedArity = 1;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), a = cljs.core.rest(a);
      return b(c, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return b.call(this, a);
      default:
        return c.cljs$lang$arity$variadic(a, cljs.core.array_seq(arguments, 1))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$0 = function() {
    return""
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.str = function() {
  var a = null, b = function(a) {
    return cljs.core.symbol_QMARK_.call(null, a) ? a.substring(2, a.length) : cljs.core.keyword_QMARK_.call(null, a) ? cljs.core.str_STAR_.call(null, ":", a.substring(2, a.length)) : null == a ? "" : a.toString()
  }, c = function() {
    var b = function(b, c) {
      return function(b, c) {
        for(;;) {
          if(cljs.core.truth_(c)) {
            var d = b.append(a.call(null, cljs.core.first.call(null, c))), e = cljs.core.next.call(null, c), b = d, c = e
          }else {
            return cljs.core.str_STAR_.call(null, b)
          }
        }
      }.call(null, new goog.string.StringBuffer(a.call(null, b)), c)
    }, c = function(a, c) {
      var e = null;
      goog.isDef(c) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, a, e)
    };
    c.cljs$lang$maxFixedArity = 1;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), a = cljs.core.rest(a);
      return b(c, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return b.call(this, a);
      default:
        return c.cljs$lang$arity$variadic(a, cljs.core.array_seq(arguments, 1))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$0 = function() {
    return""
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.subs = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = function(a, c) {
    return a.substring(c)
  };
  a.cljs$lang$arity$3 = function(a, c, d) {
    return a.substring(c, d)
  };
  return a
}();
cljs.core.format = function() {
  var a = function(a, b) {
    return cljs.core.apply.call(null, goog.string.format, a, b)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a(d, b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.symbol = function() {
  var a = null, b = function(a) {
    cljs.core.symbol_QMARK_.call(null, a) ? a : cljs.core.keyword_QMARK_.call(null, a) && cljs.core.str_STAR_.call(null, "\ufdd1", "'", cljs.core.subs.call(null, a, 2));
    return cljs.core.str_STAR_.call(null, "\ufdd1", "'", a)
  }, c = function(b, c) {
    return a.call(null, cljs.core.str_STAR_.call(null, b, "/", c))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.keyword = function() {
  var a = null, b = function(a) {
    return cljs.core.keyword_QMARK_.call(null, a) ? a : cljs.core.symbol_QMARK_.call(null, a) ? cljs.core.str_STAR_.call(null, "\ufdd0", "'", cljs.core.subs.call(null, a, 2)) : cljs.core.str_STAR_.call(null, "\ufdd0", "'", a)
  }, c = function(b, c) {
    return a.call(null, cljs.core.str_STAR_.call(null, b, "/", c))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.equiv_sequential = function(a, b) {
  return cljs.core.boolean$.call(null, cljs.core.sequential_QMARK_.call(null, b) ? function() {
    for(var c = cljs.core.seq.call(null, a), d = cljs.core.seq.call(null, b);;) {
      if(null == c) {
        return null == d
      }
      if(null != d && cljs.core._EQ_.call(null, cljs.core.first.call(null, c), cljs.core.first.call(null, d))) {
        c = cljs.core.next.call(null, c), d = cljs.core.next.call(null, d)
      }else {
        return!1
      }
    }
  }() : null)
};
cljs.core.hash_combine = function(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
};
cljs.core.hash_coll = function(a) {
  return cljs.core.reduce.call(null, function(a, c) {
    return cljs.core.hash_combine.call(null, a, cljs.core.hash.call(null, c, !1))
  }, cljs.core.hash.call(null, cljs.core.first.call(null, a), !1), cljs.core.next.call(null, a))
};
cljs.core.hash_imap = function(a) {
  for(var b = 0, a = cljs.core.seq.call(null, a);;) {
    if(a) {
      var c = cljs.core.first.call(null, a), b = (b + (cljs.core.hash.call(null, cljs.core.key.call(null, c)) ^ cljs.core.hash.call(null, cljs.core.val.call(null, c)))) % 4503599627370496, a = cljs.core.next.call(null, a)
    }else {
      return b
    }
  }
};
cljs.core.hash_iset = function(a) {
  for(var b = 0, a = cljs.core.seq.call(null, a);;) {
    if(a) {
      var c = cljs.core.first.call(null, a), b = (b + cljs.core.hash.call(null, c)) % 4503599627370496, a = cljs.core.next.call(null, a)
    }else {
      return b
    }
  }
};
cljs.core.extend_object_BANG_ = function(a, b) {
  var c = cljs.core.seq.call(null, b);
  if(c) {
    var d = cljs.core.first.call(null, c);
    cljs.core.nth.call(null, d, 0, null);
    for(cljs.core.nth.call(null, d, 1, null);;) {
      var e = d, d = cljs.core.nth.call(null, e, 0, null), e = cljs.core.nth.call(null, e, 1, null), d = cljs.core.name.call(null, d);
      a[d] = e;
      if(c = cljs.core.next.call(null, c)) {
        d = c, c = cljs.core.first.call(null, d), e = d, d = c, c = e
      }else {
        break
      }
    }
  }
  return a
};
cljs.core.List = function(a, b, c, d, e) {
  this.meta = a;
  this.first = b;
  this.rest = c;
  this.count = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 65413358
};
cljs.core.List.cljs$lang$type = !0;
cljs.core.List.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/List")
};
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_coll.call(null, a)
};
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = function() {
  return 1 === this.count ? null : this.rest
};
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return new cljs.core.List(this.meta, b, a, this.count + 1, null)
};
cljs.core.List.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return a
};
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return this.count
};
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = function() {
  return this.first
};
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = function(a) {
  return a.cljs$core$ISeq$_rest$arity$1(a)
};
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = function() {
  return this.first
};
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = function() {
  return 1 === this.count ? cljs.core.List.EMPTY : this.rest
};
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.List(b, this.first, this.rest, this.count, this.__hash)
};
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.List.EMPTY
};
cljs.core.List;
cljs.core.EmptyList = function(a) {
  this.meta = a;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 65413326
};
cljs.core.EmptyList.cljs$lang$type = !0;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/EmptyList")
};
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = function() {
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = function() {
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return new cljs.core.List(this.meta, b, null, 1, null)
};
cljs.core.EmptyList.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = function() {
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = function() {
  throw Error("Can't pop empty list");
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = function() {
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = function() {
  return cljs.core.List.EMPTY
};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.EmptyList(b)
};
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(a) {
  return a
};
cljs.core.EmptyList;
cljs.core.List.EMPTY = new cljs.core.EmptyList(null);
cljs.core.reversible_QMARK_ = function(a) {
  if(a) {
    var b;
    b = (b = a.cljs$lang$protocol_mask$partition0$ & 134217728) ? b : a.cljs$core$IReversible$;
    return b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IReversible, a)
  }
  return cljs.core.type_satisfies_.call(null, cljs.core.IReversible, a)
};
cljs.core.rseq = function(a) {
  return cljs.core._rseq.call(null, a)
};
cljs.core.reverse = function(a) {
  return cljs.core.reversible_QMARK_.call(null, a) ? cljs.core.rseq.call(null, a) : cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, a)
};
cljs.core.list = function() {
  var a = null, b = function() {
    return cljs.core.List.EMPTY
  }, c = function(a) {
    return cljs.core.conj.call(null, cljs.core.List.EMPTY, a)
  }, d = function(b, c) {
    return cljs.core.conj.call(null, a.call(null, c), b)
  }, e = function(b, c, d) {
    return cljs.core.conj.call(null, a.call(null, c, d), b)
  }, f = function() {
    var a = function(a, b, c, d) {
      return cljs.core.conj.call(null, cljs.core.conj.call(null, cljs.core.conj.call(null, cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, cljs.core.reverse.call(null, d)), c), b), a)
    }, b = function(b, c, d, e) {
      var f = null;
      goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return a.call(this, b, c, d, f)
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
      return a(c, d, e, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, h, i, j) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c.call(this, a);
      case 2:
        return d.call(this, a, h);
      case 3:
        return e.call(this, a, h, i);
      default:
        return f.cljs$lang$arity$variadic(a, h, i, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = f.cljs$lang$applyTo;
  a.cljs$lang$arity$0 = b;
  a.cljs$lang$arity$1 = c;
  a.cljs$lang$arity$2 = d;
  a.cljs$lang$arity$3 = e;
  a.cljs$lang$arity$variadic = f.cljs$lang$arity$variadic;
  return a
}();
cljs.core.Cons = function(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.rest = c;
  this.__hash = d;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 65405164
};
cljs.core.Cons.cljs$lang$type = !0;
cljs.core.Cons.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/Cons")
};
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_coll.call(null, a)
};
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = function() {
  return null == this.rest ? null : cljs.core._seq.call(null, this.rest)
};
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return new cljs.core.Cons(null, b, a, this.__hash)
};
cljs.core.Cons.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return a
};
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = function() {
  return this.first
};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = function() {
  return null == this.rest ? cljs.core.List.EMPTY : this.rest
};
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.Cons(b, this.first, this.rest, this.__hash)
};
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this.meta)
};
cljs.core.Cons;
cljs.core.cons = function(a, b) {
  return function() {
    var a = null == b;
    return a ? a : b ? (a = (a = b.cljs$lang$protocol_mask$partition0$ & 64) ? a : b.cljs$core$ISeq$, a ? !0 : b.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.ISeq, b)) : cljs.core.type_satisfies_.call(null, cljs.core.ISeq, b)
  }() ? new cljs.core.Cons(null, a, b, null) : new cljs.core.Cons(null, a, cljs.core.seq.call(null, b), null)
};
cljs.core.list_QMARK_ = function(a) {
  if(a) {
    var b;
    b = (b = a.cljs$lang$protocol_mask$partition0$ & 33554432) ? b : a.cljs$core$IList$;
    return b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IList, a)
  }
  return cljs.core.type_satisfies_.call(null, cljs.core.IList, a)
};
cljs.core.IReduce.string = !0;
cljs.core._reduce.string = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core.ci_reduce.call(null, a, c);
      case 3:
        return cljs.core.ci_reduce.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ILookup.string = !0;
cljs.core._lookup.string = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._nth.call(null, a, c);
      case 3:
        return cljs.core._nth.call(null, a, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.IIndexed.string = !0;
cljs.core._nth.string = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        e = c < cljs.core._count.call(null, a) ? a.charAt(c) : null;
        return e;
      case 3:
        return e = c < cljs.core._count.call(null, a) ? a.charAt(c) : d, e
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ICounted.string = !0;
cljs.core._count.string = function(a) {
  return a.length
};
cljs.core.ISeqable.string = !0;
cljs.core._seq.string = function(a) {
  return cljs.core.prim_seq.call(null, a, 0)
};
cljs.core.IHash.string = !0;
cljs.core._hash.string = function(a) {
  return goog.string.hashCode(a)
};
cljs.core.Keyword = function(a) {
  this.k = a;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 1
};
cljs.core.Keyword.cljs$lang$type = !0;
cljs.core.Keyword.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/Keyword")
};
cljs.core.Keyword.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        null == c ? e = null : (e = c.strobj, e = null == e ? cljs.core._lookup.call(null, c, this.k, null) : e[this.k]);
        return e;
      case 3:
        return e = null == c ? d : cljs.core._lookup.call(null, c, this.k, d), e
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Keyword.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = !0;
String.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return cljs.core._lookup.call(null, c, this.toString(), null);
      case 3:
        return cljs.core._lookup.call(null, c, this.toString(), d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > cljs.core.count.call(null, b) ? cljs.core._lookup.call(null, b[0], a, null) : cljs.core._lookup.call(null, b[0], a, b[1])
};
cljs.core.lazy_seq_value = function(a) {
  var b = a.x;
  if(a.realized) {
    return b
  }
  a.x = b.call(null);
  a.realized = !0;
  return a.x
};
cljs.core.LazySeq = function(a, b, c, d) {
  this.meta = a;
  this.realized = b;
  this.x = c;
  this.__hash = d;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 31850700
};
cljs.core.LazySeq.cljs$lang$type = !0;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/LazySeq")
};
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_coll.call(null, a)
};
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  return cljs.core._seq.call(null, a.cljs$core$ISeq$_rest$arity$1(a))
};
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons.call(null, b, a)
};
cljs.core.LazySeq.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return cljs.core.seq.call(null, cljs.core.lazy_seq_value.call(null, a))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = function(a) {
  return cljs.core.first.call(null, cljs.core.lazy_seq_value.call(null, a))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return cljs.core.rest.call(null, cljs.core.lazy_seq_value.call(null, a))
};
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.LazySeq(b, this.realized, this.x, this.__hash)
};
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this.meta)
};
cljs.core.LazySeq;
cljs.core.ChunkBuffer = function(a, b) {
  this.buf = a;
  this.end = b;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 2
};
cljs.core.ChunkBuffer.cljs$lang$type = !0;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/ChunkBuffer")
};
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return this.end
};
cljs.core.ChunkBuffer.prototype.add = function(a) {
  this.buf[this.end] = a;
  return this.end += 1
};
cljs.core.ChunkBuffer.prototype.chunk = function() {
  var a = new cljs.core.ArrayChunk(this.buf, 0, this.end);
  this.buf = null;
  return a
};
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = function(a) {
  return new cljs.core.ChunkBuffer(cljs.core.make_array.call(null, a), 0)
};
cljs.core.ArrayChunk = function(a, b, c) {
  this.arr = a;
  this.off = b;
  this.end = c;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 524306
};
cljs.core.ArrayChunk.cljs$lang$type = !0;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/ArrayChunk")
};
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.ci_reduce.call(null, a, b, this.arr[this.off], this.off + 1)
};
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.ci_reduce.call(null, a, b, c, this.off)
};
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = !0;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = function() {
  if(this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new cljs.core.ArrayChunk(this.arr, this.off + 1, this.end)
};
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  return this.arr[this.off + b]
};
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  a = (a = 0 <= b) ? b < this.end - this.off : a;
  return a ? this.arr[this.off + b] : c
};
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return this.end - this.off
};
cljs.core.ArrayChunk;
cljs.core.array_chunk = function() {
  var a = null, b = function(b) {
    return a.call(null, b, 0, b.length)
  }, c = function(b, c) {
    return a.call(null, b, c, b.length)
  }, d = function(a, b, c) {
    return new cljs.core.ArrayChunk(a, b, c)
  }, a = function(a, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, f);
      case 3:
        return d.call(this, a, f, g)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  a.cljs$lang$arity$3 = d;
  return a
}();
cljs.core.ChunkedCons = function(a, b, c) {
  this.chunk = a;
  this.more = b;
  this.meta = c;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 27656296
};
cljs.core.ChunkedCons.cljs$lang$type = !0;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/ChunkedCons")
};
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons.call(null, b, a)
};
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return a
};
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = function() {
  return cljs.core._nth.call(null, this.chunk, 0)
};
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = function() {
  return 1 < cljs.core._count.call(null, this.chunk) ? new cljs.core.ChunkedCons(cljs.core._drop_first.call(null, this.chunk), this.more, this.meta) : null == this.more ? cljs.core.List.EMPTY : this.more
};
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = !0;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = function() {
  return null == this.more ? null : this.more
};
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.ChunkedCons(this.chunk, this.more, b)
};
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = !0;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = function() {
  return this.chunk
};
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = function() {
  return null == this.more ? cljs.core.List.EMPTY : this.more
};
cljs.core.ChunkedCons;
cljs.core.chunk_cons = function(a, b) {
  return 0 === cljs.core._count.call(null, a) ? b : new cljs.core.ChunkedCons(a, b, null)
};
cljs.core.chunk_append = function(a, b) {
  return a.add(b)
};
cljs.core.chunk = function(a) {
  return a.chunk()
};
cljs.core.chunk_first = function(a) {
  return cljs.core._chunked_first.call(null, a)
};
cljs.core.chunk_rest = function(a) {
  return cljs.core._chunked_rest.call(null, a)
};
cljs.core.chunk_next = function(a) {
  return(a ? cljs.core.truth_(cljs.core.truth_(null) ? null : a.cljs$core$IChunkedNext$) || (a.cljs$lang$protocol_mask$partition$ ? 0 : cljs.core.type_satisfies_.call(null, cljs.core.IChunkedNext, a)) : cljs.core.type_satisfies_.call(null, cljs.core.IChunkedNext, a)) ? cljs.core._chunked_next.call(null, a) : cljs.core.seq.call(null, cljs.core._chunked_rest.call(null, a))
};
cljs.core.to_array = function(a) {
  for(var b = [];;) {
    if(cljs.core.seq.call(null, a)) {
      b.push(cljs.core.first.call(null, a)), a = cljs.core.next.call(null, a)
    }else {
      return b
    }
  }
};
cljs.core.to_array_2d = function(a) {
  for(var b = cljs.core.make_array.call(null, cljs.core.count.call(null, a)), c = 0, a = cljs.core.seq.call(null, a);;) {
    if(a) {
      b[c] = cljs.core.to_array.call(null, cljs.core.first.call(null, a)), c += 1, a = cljs.core.next.call(null, a)
    }else {
      break
    }
  }
  return b
};
cljs.core.long_array = function() {
  var a = null, b = function(b) {
    if(cljs.core.number_QMARK_.call(null, b)) {
      return a.call(null, b, null)
    }
    if(cljs.core.seq_QMARK_.call(null, b)) {
      return cljs.core.into_array.call(null, b)
    }
    throw Error("long-array called with something other than size or ISeq");
  }, c = function(a, b) {
    var c = cljs.core.make_array.call(null, a);
    if(cljs.core.seq_QMARK_.call(null, b)) {
      for(var g = 0, h = cljs.core.seq.call(null, b);;) {
        if(cljs.core.truth_(function() {
          var b = h;
          return b ? g < a : b
        }())) {
          c[g] = cljs.core.first.call(null, h);
          var i = g + 1, j = cljs.core.next.call(null, h), g = i, h = j
        }else {
          return c
        }
      }
    }else {
      for(i = 0;;) {
        if(i < a) {
          c[i] = b, i += 1
        }else {
          break
        }
      }
      return c
    }
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.double_array = function() {
  var a = null, b = function(b) {
    if(cljs.core.number_QMARK_.call(null, b)) {
      return a.call(null, b, null)
    }
    if(cljs.core.seq_QMARK_.call(null, b)) {
      return cljs.core.into_array.call(null, b)
    }
    throw Error("double-array called with something other than size or ISeq");
  }, c = function(a, b) {
    var c = cljs.core.make_array.call(null, a);
    if(cljs.core.seq_QMARK_.call(null, b)) {
      for(var g = 0, h = cljs.core.seq.call(null, b);;) {
        if(cljs.core.truth_(function() {
          var b = h;
          return b ? g < a : b
        }())) {
          c[g] = cljs.core.first.call(null, h);
          var i = g + 1, j = cljs.core.next.call(null, h), g = i, h = j
        }else {
          return c
        }
      }
    }else {
      for(i = 0;;) {
        if(i < a) {
          c[i] = b, i += 1
        }else {
          break
        }
      }
      return c
    }
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.object_array = function() {
  var a = null, b = function(b) {
    if(cljs.core.number_QMARK_.call(null, b)) {
      return a.call(null, b, null)
    }
    if(cljs.core.seq_QMARK_.call(null, b)) {
      return cljs.core.into_array.call(null, b)
    }
    throw Error("object-array called with something other than size or ISeq");
  }, c = function(a, b) {
    var c = cljs.core.make_array.call(null, a);
    if(cljs.core.seq_QMARK_.call(null, b)) {
      for(var g = 0, h = cljs.core.seq.call(null, b);;) {
        if(cljs.core.truth_(function() {
          var b = h;
          return b ? g < a : b
        }())) {
          c[g] = cljs.core.first.call(null, h);
          var i = g + 1, j = cljs.core.next.call(null, h), g = i, h = j
        }else {
          return c
        }
      }
    }else {
      for(i = 0;;) {
        if(i < a) {
          c[i] = b, i += 1
        }else {
          break
        }
      }
      return c
    }
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.bounded_count = function(a, b) {
  if(cljs.core.counted_QMARK_.call(null, a)) {
    return cljs.core.count.call(null, a)
  }
  for(var c = a, d = b, e = 0;;) {
    if(cljs.core.truth_(function() {
      var a = 0 < d;
      return a ? cljs.core.seq.call(null, c) : a
    }())) {
      var f = cljs.core.next.call(null, c), g = d - 1, e = e + 1, c = f, d = g
    }else {
      return e
    }
  }
};
cljs.core.spread = function spread(b) {
  return null == b ? null : null == cljs.core.next.call(null, b) ? cljs.core.seq.call(null, cljs.core.first.call(null, b)) : cljs.core.cons.call(null, cljs.core.first.call(null, b), spread.call(null, cljs.core.next.call(null, b)))
};
cljs.core.concat = function() {
  var a = null, b = function() {
    return new cljs.core.LazySeq(null, !1, function() {
      return null
    }, null)
  }, c = function(a) {
    return new cljs.core.LazySeq(null, !1, function() {
      return a
    }, null)
  }, d = function(b, c) {
    return new cljs.core.LazySeq(null, !1, function() {
      var d = cljs.core.seq.call(null, b);
      return d ? cljs.core.chunked_seq_QMARK_.call(null, d) ? cljs.core.chunk_cons.call(null, cljs.core.chunk_first.call(null, d), a.call(null, cljs.core.chunk_rest.call(null, d), c)) : cljs.core.cons.call(null, cljs.core.first.call(null, d), a.call(null, cljs.core.rest.call(null, d), c)) : c
    }, null)
  }, e = function() {
    var b = function(b, c, d) {
      return function m(a, b) {
        return new cljs.core.LazySeq(null, !1, function() {
          var c = cljs.core.seq.call(null, a);
          return c ? cljs.core.chunked_seq_QMARK_.call(null, c) ? cljs.core.chunk_cons.call(null, cljs.core.chunk_first.call(null, c), m.call(null, cljs.core.chunk_rest.call(null, c), b)) : cljs.core.cons.call(null, cljs.core.first.call(null, c), m.call(null, cljs.core.rest.call(null, c), b)) : cljs.core.truth_(b) ? m.call(null, cljs.core.first.call(null, b), cljs.core.next.call(null, b)) : null
        }, null)
      }.call(null, a.call(null, b, c), d)
    }, c = function(a, c, d) {
      var e = null;
      goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, e)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b(c, d, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, g, h) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c.call(this, a);
      case 2:
        return d.call(this, a, g);
      default:
        return e.cljs$lang$arity$variadic(a, g, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.cljs$lang$arity$0 = b;
  a.cljs$lang$arity$1 = c;
  a.cljs$lang$arity$2 = d;
  a.cljs$lang$arity$variadic = e.cljs$lang$arity$variadic;
  return a
}();
cljs.core.list_STAR_ = function() {
  var a = null, b = function(a) {
    return cljs.core.seq.call(null, a)
  }, c = function(a, b) {
    return cljs.core.cons.call(null, a, b)
  }, d = function(a, b, c) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, c))
  }, e = function(a, b, c, d) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, d)))
  }, f = function() {
    var a = function(a, b, c, d, e) {
      return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, e)))))
    }, b = function(b, c, d, e, f) {
      var h = null;
      goog.isDef(f) && (h = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0));
      return a.call(this, b, c, d, e, h)
    };
    b.cljs$lang$maxFixedArity = 4;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), f = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(b)))), b = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(b))));
      return a(c, d, e, f, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, h, i, j, k) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, h);
      case 3:
        return d.call(this, a, h, i);
      case 4:
        return e.call(this, a, h, i, j);
      default:
        return f.cljs$lang$arity$variadic(a, h, i, j, cljs.core.array_seq(arguments, 4))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 4;
  a.cljs$lang$applyTo = f.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  a.cljs$lang$arity$3 = d;
  a.cljs$lang$arity$4 = e;
  a.cljs$lang$arity$variadic = f.cljs$lang$arity$variadic;
  return a
}();
cljs.core.transient$ = function(a) {
  return cljs.core._as_transient.call(null, a)
};
cljs.core.persistent_BANG_ = function(a) {
  return cljs.core._persistent_BANG_.call(null, a)
};
cljs.core.conj_BANG_ = function(a, b) {
  return cljs.core._conj_BANG_.call(null, a, b)
};
cljs.core.assoc_BANG_ = function(a, b, c) {
  return cljs.core._assoc_BANG_.call(null, a, b, c)
};
cljs.core.dissoc_BANG_ = function(a, b) {
  return cljs.core._dissoc_BANG_.call(null, a, b)
};
cljs.core.pop_BANG_ = function(a) {
  return cljs.core._pop_BANG_.call(null, a)
};
cljs.core.disj_BANG_ = function(a, b) {
  return cljs.core._disjoin_BANG_.call(null, a, b)
};
cljs.core.apply_to = function(a, b, c) {
  var d = cljs.core.seq.call(null, c);
  if(0 === b) {
    return a.call(null)
  }
  var c = cljs.core._first.call(null, d), e = cljs.core._rest.call(null, d);
  if(1 === b) {
    return a.cljs$lang$arity$1 ? a.cljs$lang$arity$1(c) : a.call(null, c)
  }
  var d = cljs.core._first.call(null, e), f = cljs.core._rest.call(null, e);
  if(2 === b) {
    return a.cljs$lang$arity$2 ? a.cljs$lang$arity$2(c, d) : a.call(null, c, d)
  }
  var e = cljs.core._first.call(null, f), g = cljs.core._rest.call(null, f);
  if(3 === b) {
    return a.cljs$lang$arity$3 ? a.cljs$lang$arity$3(c, d, e) : a.call(null, c, d, e)
  }
  var f = cljs.core._first.call(null, g), h = cljs.core._rest.call(null, g);
  if(4 === b) {
    return a.cljs$lang$arity$4 ? a.cljs$lang$arity$4(c, d, e, f) : a.call(null, c, d, e, f)
  }
  g = cljs.core._first.call(null, h);
  h = cljs.core._rest.call(null, h);
  if(5 === b) {
    return a.cljs$lang$arity$5 ? a.cljs$lang$arity$5(c, d, e, f, g) : a.call(null, c, d, e, f, g)
  }
  var a = cljs.core._first.call(null, h), i = cljs.core._rest.call(null, h);
  if(6 === b) {
    return a.cljs$lang$arity$6 ? a.cljs$lang$arity$6(c, d, e, f, g, a) : a.call(null, c, d, e, f, g, a)
  }
  var h = cljs.core._first.call(null, i), j = cljs.core._rest.call(null, i);
  if(7 === b) {
    return a.cljs$lang$arity$7 ? a.cljs$lang$arity$7(c, d, e, f, g, a, h) : a.call(null, c, d, e, f, g, a, h)
  }
  var i = cljs.core._first.call(null, j), k = cljs.core._rest.call(null, j);
  if(8 === b) {
    return a.cljs$lang$arity$8 ? a.cljs$lang$arity$8(c, d, e, f, g, a, h, i) : a.call(null, c, d, e, f, g, a, h, i)
  }
  var j = cljs.core._first.call(null, k), m = cljs.core._rest.call(null, k);
  if(9 === b) {
    return a.cljs$lang$arity$9 ? a.cljs$lang$arity$9(c, d, e, f, g, a, h, i, j) : a.call(null, c, d, e, f, g, a, h, i, j)
  }
  var k = cljs.core._first.call(null, m), l = cljs.core._rest.call(null, m);
  if(10 === b) {
    return a.cljs$lang$arity$10 ? a.cljs$lang$arity$10(c, d, e, f, g, a, h, i, j, k) : a.call(null, c, d, e, f, g, a, h, i, j, k)
  }
  var m = cljs.core._first.call(null, l), n = cljs.core._rest.call(null, l);
  if(11 === b) {
    return a.cljs$lang$arity$11 ? a.cljs$lang$arity$11(c, d, e, f, g, a, h, i, j, k, m) : a.call(null, c, d, e, f, g, a, h, i, j, k, m)
  }
  var l = cljs.core._first.call(null, n), o = cljs.core._rest.call(null, n);
  if(12 === b) {
    return a.cljs$lang$arity$12 ? a.cljs$lang$arity$12(c, d, e, f, g, a, h, i, j, k, m, l) : a.call(null, c, d, e, f, g, a, h, i, j, k, m, l)
  }
  var n = cljs.core._first.call(null, o), p = cljs.core._rest.call(null, o);
  if(13 === b) {
    return a.cljs$lang$arity$13 ? a.cljs$lang$arity$13(c, d, e, f, g, a, h, i, j, k, m, l, n) : a.call(null, c, d, e, f, g, a, h, i, j, k, m, l, n)
  }
  var o = cljs.core._first.call(null, p), q = cljs.core._rest.call(null, p);
  if(14 === b) {
    return a.cljs$lang$arity$14 ? a.cljs$lang$arity$14(c, d, e, f, g, a, h, i, j, k, m, l, n, o) : a.call(null, c, d, e, f, g, a, h, i, j, k, m, l, n, o)
  }
  var p = cljs.core._first.call(null, q), r = cljs.core._rest.call(null, q);
  if(15 === b) {
    return a.cljs$lang$arity$15 ? a.cljs$lang$arity$15(c, d, e, f, g, a, h, i, j, k, m, l, n, o, p) : a.call(null, c, d, e, f, g, a, h, i, j, k, m, l, n, o, p)
  }
  var q = cljs.core._first.call(null, r), t = cljs.core._rest.call(null, r);
  if(16 === b) {
    return a.cljs$lang$arity$16 ? a.cljs$lang$arity$16(c, d, e, f, g, a, h, i, j, k, m, l, n, o, p, q) : a.call(null, c, d, e, f, g, a, h, i, j, k, m, l, n, o, p, q)
  }
  var r = cljs.core._first.call(null, t), s = cljs.core._rest.call(null, t);
  if(17 === b) {
    return a.cljs$lang$arity$17 ? a.cljs$lang$arity$17(c, d, e, f, g, a, h, i, j, k, m, l, n, o, p, q, r) : a.call(null, c, d, e, f, g, a, h, i, j, k, m, l, n, o, p, q, r)
  }
  var t = cljs.core._first.call(null, s), y = cljs.core._rest.call(null, s);
  if(18 === b) {
    return a.cljs$lang$arity$18 ? a.cljs$lang$arity$18(c, d, e, f, g, a, h, i, j, k, m, l, n, o, p, q, r, t) : a.call(null, c, d, e, f, g, a, h, i, j, k, m, l, n, o, p, q, r, t)
  }
  s = cljs.core._first.call(null, y);
  y = cljs.core._rest.call(null, y);
  if(19 === b) {
    return a.cljs$lang$arity$19 ? a.cljs$lang$arity$19(c, d, e, f, g, a, h, i, j, k, m, l, n, o, p, q, r, t, s) : a.call(null, c, d, e, f, g, a, h, i, j, k, m, l, n, o, p, q, r, t, s)
  }
  var F = cljs.core._first.call(null, y);
  cljs.core._rest.call(null, y);
  if(20 === b) {
    return a.cljs$lang$arity$20 ? a.cljs$lang$arity$20(c, d, e, f, g, a, h, i, j, k, m, l, n, o, p, q, r, t, s, F) : a.call(null, c, d, e, f, g, a, h, i, j, k, m, l, n, o, p, q, r, t, s, F)
  }
  throw Error("Only up to 20 arguments supported on functions");
};
cljs.core.apply = function() {
  var a = null, b = function(a, b) {
    var c = a.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(a.cljs$lang$applyTo)) {
      var d = cljs.core.bounded_count.call(null, b, c + 1);
      return d <= c ? cljs.core.apply_to.call(null, a, d, b) : a.cljs$lang$applyTo(b)
    }
    return a.apply(a, cljs.core.to_array.call(null, b))
  }, c = function(a, b, c) {
    b = cljs.core.list_STAR_.call(null, b, c);
    c = a.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(a.cljs$lang$applyTo)) {
      var d = cljs.core.bounded_count.call(null, b, c + 1);
      return d <= c ? cljs.core.apply_to.call(null, a, d, b) : a.cljs$lang$applyTo(b)
    }
    return a.apply(a, cljs.core.to_array.call(null, b))
  }, d = function(a, b, c, d) {
    b = cljs.core.list_STAR_.call(null, b, c, d);
    c = a.cljs$lang$maxFixedArity;
    return cljs.core.truth_(a.cljs$lang$applyTo) ? (d = cljs.core.bounded_count.call(null, b, c + 1), d <= c ? cljs.core.apply_to.call(null, a, d, b) : a.cljs$lang$applyTo(b)) : a.apply(a, cljs.core.to_array.call(null, b))
  }, e = function(a, b, c, d, e) {
    b = cljs.core.list_STAR_.call(null, b, c, d, e);
    c = a.cljs$lang$maxFixedArity;
    return cljs.core.truth_(a.cljs$lang$applyTo) ? (d = cljs.core.bounded_count.call(null, b, c + 1), d <= c ? cljs.core.apply_to.call(null, a, d, b) : a.cljs$lang$applyTo(b)) : a.apply(a, cljs.core.to_array.call(null, b))
  }, f = function() {
    var a = function(a, b, c, d, e, f) {
      b = cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.cons.call(null, e, cljs.core.spread.call(null, f)))));
      c = a.cljs$lang$maxFixedArity;
      return cljs.core.truth_(a.cljs$lang$applyTo) ? (d = cljs.core.bounded_count.call(null, b, c + 1), d <= c ? cljs.core.apply_to.call(null, a, d, b) : a.cljs$lang$applyTo(b)) : a.apply(a, cljs.core.to_array.call(null, b))
    }, b = function(b, c, d, e, f, h) {
      var o = null;
      goog.isDef(h) && (o = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0));
      return a.call(this, b, c, d, e, f, o)
    };
    b.cljs$lang$maxFixedArity = 5;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), f = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(b)))), h = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(b))))), b = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(b)))));
      return a(c, d, e, f, h, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, h, i, j, k, m) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, h);
      case 3:
        return c.call(this, a, h, i);
      case 4:
        return d.call(this, a, h, i, j);
      case 5:
        return e.call(this, a, h, i, j, k);
      default:
        return f.cljs$lang$arity$variadic(a, h, i, j, k, cljs.core.array_seq(arguments, 5))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 5;
  a.cljs$lang$applyTo = f.cljs$lang$applyTo;
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  a.cljs$lang$arity$4 = d;
  a.cljs$lang$arity$5 = e;
  a.cljs$lang$arity$variadic = f.cljs$lang$arity$variadic;
  return a
}();
cljs.core.vary_meta = function() {
  var a = function(a, b, e) {
    return cljs.core.with_meta.call(null, a, cljs.core.apply.call(null, b, cljs.core.meta.call(null, a), e))
  }, b = function(b, d, e) {
    var f = null;
    goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
    return a.call(this, b, d, f)
  };
  b.cljs$lang$maxFixedArity = 2;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
    return a(d, e, b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.not_EQ_ = function() {
  var a = null, b = function(a, b) {
    return!cljs.core._EQ_.call(null, a, b)
  }, c = function() {
    var a = function(a, b, c) {
      return cljs.core.not.call(null, cljs.core.apply.call(null, cljs.core._EQ_, a, b, c))
    }, b = function(b, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, c, i)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a(c, e, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return b.call(this, a, e);
      default:
        return c.cljs$lang$arity$variadic(a, e, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = function() {
    return!1
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.not_empty = function(a) {
  return cljs.core.seq.call(null, a) ? a : null
};
cljs.core.every_QMARK_ = function(a, b) {
  for(;;) {
    if(null == cljs.core.seq.call(null, b)) {
      return!0
    }
    if(cljs.core.truth_(a.call(null, cljs.core.first.call(null, b)))) {
      var c = a, d = cljs.core.next.call(null, b), a = c, b = d
    }else {
      return!1
    }
  }
};
cljs.core.not_every_QMARK_ = function(a, b) {
  return!cljs.core.every_QMARK_.call(null, a, b)
};
cljs.core.some = function(a, b) {
  for(;;) {
    if(cljs.core.seq.call(null, b)) {
      var c = a.call(null, cljs.core.first.call(null, b));
      if(cljs.core.truth_(c)) {
        return c
      }
      var c = a, d = cljs.core.next.call(null, b), a = c, b = d
    }else {
      return null
    }
  }
};
cljs.core.not_any_QMARK_ = function(a, b) {
  return cljs.core.not.call(null, cljs.core.some.call(null, a, b))
};
cljs.core.even_QMARK_ = function(a) {
  if(cljs.core.integer_QMARK_.call(null, a)) {
    return 0 === (a & 1)
  }
  throw Error([cljs.core.str("Argument must be an integer: "), cljs.core.str(a)].join(""));
};
cljs.core.odd_QMARK_ = function(a) {
  return!cljs.core.even_QMARK_.call(null, a)
};
cljs.core.identity = function(a) {
  return a
};
cljs.core.complement = function(a) {
  return function() {
    var b = null, c = function() {
      var b = function(b, c, d) {
        return cljs.core.not.call(null, cljs.core.apply.call(null, a, b, c, d))
      }, c = function(a, c, e) {
        var i = null;
        goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
        return b.call(this, a, c, i)
      };
      c.cljs$lang$maxFixedArity = 2;
      c.cljs$lang$applyTo = function(a) {
        var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
        return b(c, e, a)
      };
      c.cljs$lang$arity$variadic = b;
      return c
    }(), b = function(b, e, f) {
      switch(arguments.length) {
        case 0:
          return cljs.core.not.call(null, a.call(null));
        case 1:
          return cljs.core.not.call(null, a.call(null, b));
        case 2:
          return cljs.core.not.call(null, a.call(null, b, e));
        default:
          return c.cljs$lang$arity$variadic(b, e, cljs.core.array_seq(arguments, 2))
      }
      throw"Invalid arity: " + arguments.length;
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = c.cljs$lang$applyTo;
    return b
  }()
};
cljs.core.constantly = function(a) {
  return function() {
    var b = function(b) {
      goog.isDef(b) && cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0);
      return a
    };
    b.cljs$lang$maxFixedArity = 0;
    b.cljs$lang$applyTo = function(b) {
      cljs.core.seq(b);
      return a
    };
    b.cljs$lang$arity$variadic = function() {
      return a
    };
    return b
  }()
};
cljs.core.comp = function() {
  var a = null, b = function() {
    return cljs.core.identity
  }, c = function(a, b) {
    return function() {
      var c = null, d = function() {
        var c = function(c, d, e, h) {
          return a.call(null, cljs.core.apply.call(null, b, c, d, e, h))
        }, d = function(a, b, d, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, b, d, f)
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return c(b, d, e, a)
        };
        d.cljs$lang$arity$variadic = c;
        return d
      }(), c = function(c, e, h, l) {
        switch(arguments.length) {
          case 0:
            return a.call(null, b.call(null));
          case 1:
            return a.call(null, b.call(null, c));
          case 2:
            return a.call(null, b.call(null, c, e));
          case 3:
            return a.call(null, b.call(null, c, e, h));
          default:
            return d.cljs$lang$arity$variadic(c, e, h, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = d.cljs$lang$applyTo;
      return c
    }()
  }, d = function(a, b, c) {
    return function() {
      var d = null, e = function() {
        var d = function(d, e, i, j) {
          return a.call(null, b.call(null, cljs.core.apply.call(null, c, d, e, i, j)))
        }, e = function(a, b, c, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, c, f)
        };
        e.cljs$lang$maxFixedArity = 3;
        e.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return d(b, c, e, a)
        };
        e.cljs$lang$arity$variadic = d;
        return e
      }(), d = function(d, i, l, n) {
        switch(arguments.length) {
          case 0:
            return a.call(null, b.call(null, c.call(null)));
          case 1:
            return a.call(null, b.call(null, c.call(null, d)));
          case 2:
            return a.call(null, b.call(null, c.call(null, d, i)));
          case 3:
            return a.call(null, b.call(null, c.call(null, d, i, l)));
          default:
            return e.cljs$lang$arity$variadic(d, i, l, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = e.cljs$lang$applyTo;
      return d
    }()
  }, e = function() {
    var a = function(a, b, c, d) {
      var e = cljs.core.reverse.call(null, cljs.core.list_STAR_.call(null, a, b, c, d));
      return function() {
        var a = function(a) {
          for(var a = cljs.core.apply.call(null, cljs.core.first.call(null, e), a), b = cljs.core.next.call(null, e);;) {
            if(b) {
              a = cljs.core.first.call(null, b).call(null, a), b = cljs.core.next.call(null, b)
            }else {
              return a
            }
          }
        }, b = function(b) {
          var c = null;
          goog.isDef(b) && (c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
          return a.call(this, c)
        };
        b.cljs$lang$maxFixedArity = 0;
        b.cljs$lang$applyTo = function(b) {
          b = cljs.core.seq(b);
          return a(b)
        };
        b.cljs$lang$arity$variadic = a;
        return b
      }()
    }, b = function(b, c, d, e) {
      var g = null;
      goog.isDef(e) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return a.call(this, b, c, d, g)
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
      return a(c, d, e, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, g, h, i) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a;
      case 2:
        return c.call(this, a, g);
      case 3:
        return d.call(this, a, g, h);
      default:
        return e.cljs$lang$arity$variadic(a, g, h, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.cljs$lang$arity$0 = b;
  a.cljs$lang$arity$1 = function(a) {
    return a
  };
  a.cljs$lang$arity$2 = c;
  a.cljs$lang$arity$3 = d;
  a.cljs$lang$arity$variadic = e.cljs$lang$arity$variadic;
  return a
}();
cljs.core.partial = function() {
  var a = null, b = function(a, b) {
    return function() {
      var c = function(c) {
        return cljs.core.apply.call(null, a, b, c)
      }, d = function(a) {
        var b = null;
        goog.isDef(a) && (b = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, b)
      };
      d.cljs$lang$maxFixedArity = 0;
      d.cljs$lang$applyTo = function(a) {
        a = cljs.core.seq(a);
        return c(a)
      };
      d.cljs$lang$arity$variadic = c;
      return d
    }()
  }, c = function(a, b, c) {
    return function() {
      var d = function(d) {
        return cljs.core.apply.call(null, a, b, c, d)
      }, e = function(a) {
        var b = null;
        goog.isDef(a) && (b = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b)
      };
      e.cljs$lang$maxFixedArity = 0;
      e.cljs$lang$applyTo = function(a) {
        a = cljs.core.seq(a);
        return d(a)
      };
      e.cljs$lang$arity$variadic = d;
      return e
    }()
  }, d = function(a, b, c, d) {
    return function() {
      var e = function(e) {
        return cljs.core.apply.call(null, a, b, c, d, e)
      }, k = function(a) {
        var b = null;
        goog.isDef(a) && (b = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b)
      };
      k.cljs$lang$maxFixedArity = 0;
      k.cljs$lang$applyTo = function(a) {
        a = cljs.core.seq(a);
        return e(a)
      };
      k.cljs$lang$arity$variadic = e;
      return k
    }()
  }, e = function() {
    var a = function(a, b, c, d, e) {
      return function() {
        var f = function(f) {
          return cljs.core.apply.call(null, a, b, c, d, cljs.core.concat.call(null, e, f))
        }, g = function(a) {
          var b = null;
          goog.isDef(a) && (b = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
          return f.call(this, b)
        };
        g.cljs$lang$maxFixedArity = 0;
        g.cljs$lang$applyTo = function(a) {
          a = cljs.core.seq(a);
          return f(a)
        };
        g.cljs$lang$arity$variadic = f;
        return g
      }()
    }, b = function(b, c, d, e, g) {
      var l = null;
      goog.isDef(g) && (l = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0));
      return a.call(this, b, c, d, e, l)
    };
    b.cljs$lang$maxFixedArity = 4;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), g = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(b)))), b = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(b))));
      return a(c, d, e, g, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, g, h, i, j) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, g);
      case 3:
        return c.call(this, a, g, h);
      case 4:
        return d.call(this, a, g, h, i);
      default:
        return e.cljs$lang$arity$variadic(a, g, h, i, cljs.core.array_seq(arguments, 4))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 4;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  a.cljs$lang$arity$4 = d;
  a.cljs$lang$arity$variadic = e.cljs$lang$arity$variadic;
  return a
}();
cljs.core.fnil = function() {
  var a = null, b = function(a, b) {
    return function() {
      var c = null, d = function() {
        var c = function(c, d, g, h) {
          return cljs.core.apply.call(null, a, null == c ? b : c, d, g, h)
        }, d = function(a, b, d, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, b, d, f)
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return c(b, d, e, a)
        };
        d.cljs$lang$arity$variadic = c;
        return d
      }(), c = function(c, g, k, m) {
        switch(arguments.length) {
          case 1:
            return a.call(null, null == c ? b : c);
          case 2:
            return a.call(null, null == c ? b : c, g);
          case 3:
            return a.call(null, null == c ? b : c, g, k);
          default:
            return d.cljs$lang$arity$variadic(c, g, k, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = d.cljs$lang$applyTo;
      return c
    }()
  }, c = function(a, b, c) {
    return function() {
      var d = null, i = function() {
        var d = function(d, h, i, j) {
          return cljs.core.apply.call(null, a, null == d ? b : d, null == h ? c : h, i, j)
        }, h = function(a, b, c, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, c, f)
        };
        h.cljs$lang$maxFixedArity = 3;
        h.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return d(b, c, e, a)
        };
        h.cljs$lang$arity$variadic = d;
        return h
      }(), d = function(d, h, m, l) {
        switch(arguments.length) {
          case 2:
            return a.call(null, null == d ? b : d, null == h ? c : h);
          case 3:
            return a.call(null, null == d ? b : d, null == h ? c : h, m);
          default:
            return i.cljs$lang$arity$variadic(d, h, m, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = i.cljs$lang$applyTo;
      return d
    }()
  }, d = function(a, b, c, d) {
    return function() {
      var i = null, j = function() {
        var i = function(i, j, k, m) {
          return cljs.core.apply.call(null, a, null == i ? b : i, null == j ? c : j, null == k ? d : k, m)
        }, j = function(a, b, c, d) {
          var e = null;
          goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return i.call(this, a, b, c, e)
        };
        j.cljs$lang$maxFixedArity = 3;
        j.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), d = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return i(b, c, d, a)
        };
        j.cljs$lang$arity$variadic = i;
        return j
      }(), i = function(i, m, l, n) {
        switch(arguments.length) {
          case 2:
            return a.call(null, null == i ? b : i, null == m ? c : m);
          case 3:
            return a.call(null, null == i ? b : i, null == m ? c : m, null == l ? d : l);
          default:
            return j.cljs$lang$arity$variadic(i, m, l, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      i.cljs$lang$maxFixedArity = 3;
      i.cljs$lang$applyTo = j.cljs$lang$applyTo;
      return i
    }()
  }, a = function(a, f, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, f);
      case 3:
        return c.call(this, a, f, g);
      case 4:
        return d.call(this, a, f, g, h)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  a.cljs$lang$arity$4 = d;
  return a
}();
cljs.core.map_indexed = function(a, b) {
  return function d(b, f) {
    return new cljs.core.LazySeq(null, !1, function() {
      var g = cljs.core.seq.call(null, f);
      if(g) {
        if(cljs.core.chunked_seq_QMARK_.call(null, g)) {
          for(var h = cljs.core.chunk_first.call(null, g), i = cljs.core.count.call(null, h), j = cljs.core.chunk_buffer.call(null, i), k = 0;;) {
            if(k < i) {
              cljs.core.chunk_append.call(null, j, a.call(null, b + k, cljs.core._nth.call(null, h, k)));
              k = k + 1
            }else {
              break
            }
          }
          return cljs.core.chunk_cons.call(null, cljs.core.chunk.call(null, j), d.call(null, b + i, cljs.core.chunk_rest.call(null, g)))
        }
        return cljs.core.cons.call(null, a.call(null, b, cljs.core.first.call(null, g)), d.call(null, b + 1, cljs.core.rest.call(null, g)))
      }
      return null
    }, null)
  }.call(null, 0, b)
};
cljs.core.keep = function keep(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq.call(null, c);
    if(d) {
      if(cljs.core.chunked_seq_QMARK_.call(null, d)) {
        for(var e = cljs.core.chunk_first.call(null, d), f = cljs.core.count.call(null, e), g = cljs.core.chunk_buffer.call(null, f), h = 0;;) {
          if(h < f) {
            var i = b.call(null, cljs.core._nth.call(null, e, h));
            i != null && cljs.core.chunk_append.call(null, g, i);
            h = h + 1
          }else {
            break
          }
        }
        return cljs.core.chunk_cons.call(null, cljs.core.chunk.call(null, g), keep.call(null, b, cljs.core.chunk_rest.call(null, d)))
      }
      e = b.call(null, cljs.core.first.call(null, d));
      return e == null ? keep.call(null, b, cljs.core.rest.call(null, d)) : cljs.core.cons.call(null, e, keep.call(null, b, cljs.core.rest.call(null, d)))
    }
    return null
  }, null)
};
cljs.core.keep_indexed = function(a, b) {
  return function d(b, f) {
    return new cljs.core.LazySeq(null, !1, function() {
      var g = cljs.core.seq.call(null, f);
      if(g) {
        if(cljs.core.chunked_seq_QMARK_.call(null, g)) {
          for(var h = cljs.core.chunk_first.call(null, g), i = cljs.core.count.call(null, h), j = cljs.core.chunk_buffer.call(null, i), k = 0;;) {
            if(k < i) {
              var m = a.call(null, b + k, cljs.core._nth.call(null, h, k));
              m != null && cljs.core.chunk_append.call(null, j, m);
              k = k + 1
            }else {
              break
            }
          }
          return cljs.core.chunk_cons.call(null, cljs.core.chunk.call(null, j), d.call(null, b + i, cljs.core.chunk_rest.call(null, g)))
        }
        h = a.call(null, b, cljs.core.first.call(null, g));
        return h == null ? d.call(null, b + 1, cljs.core.rest.call(null, g)) : cljs.core.cons.call(null, h, d.call(null, b + 1, cljs.core.rest.call(null, g)))
      }
      return null
    }, null)
  }.call(null, 0, b)
};
cljs.core.every_pred = function() {
  var a = null, b = function(a) {
    return function() {
      var b = null, c = function(b) {
        return cljs.core.boolean$.call(null, a.call(null, b))
      }, d = function(b, c) {
        return cljs.core.boolean$.call(null, function() {
          var d = a.call(null, b);
          return cljs.core.truth_(d) ? a.call(null, c) : d
        }())
      }, e = function(b, c, d) {
        return cljs.core.boolean$.call(null, function() {
          var e = a.call(null, b);
          return cljs.core.truth_(e) ? (e = a.call(null, c), cljs.core.truth_(e) ? a.call(null, d) : e) : e
        }())
      }, k = function() {
        var c = function(c, d, e, h) {
          return cljs.core.boolean$.call(null, function() {
            var i = b.call(null, c, d, e);
            return cljs.core.truth_(i) ? cljs.core.every_QMARK_.call(null, a, h) : i
          }())
        }, d = function(a, b, d, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, b, d, f)
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return c(b, d, e, a)
        };
        d.cljs$lang$arity$variadic = c;
        return d
      }(), b = function(a, b, f, g) {
        switch(arguments.length) {
          case 0:
            return!0;
          case 1:
            return c.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return e.call(this, a, b, f);
          default:
            return k.cljs$lang$arity$variadic(a, b, f, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      b.cljs$lang$maxFixedArity = 3;
      b.cljs$lang$applyTo = k.cljs$lang$applyTo;
      b.cljs$lang$arity$0 = function() {
        return!0
      };
      b.cljs$lang$arity$1 = c;
      b.cljs$lang$arity$2 = d;
      b.cljs$lang$arity$3 = e;
      b.cljs$lang$arity$variadic = k.cljs$lang$arity$variadic;
      return b
    }()
  }, c = function(a, b) {
    return function() {
      var c = null, d = function(c) {
        return cljs.core.boolean$.call(null, function() {
          var d = a.call(null, c);
          return cljs.core.truth_(d) ? b.call(null, c) : d
        }())
      }, e = function(c, d) {
        return cljs.core.boolean$.call(null, function() {
          var e = a.call(null, c);
          return cljs.core.truth_(e) && (e = a.call(null, d), cljs.core.truth_(e)) ? (e = b.call(null, c), cljs.core.truth_(e) ? b.call(null, d) : e) : e
        }())
      }, k = function(c, d, e) {
        return cljs.core.boolean$.call(null, function() {
          var h = a.call(null, c);
          return cljs.core.truth_(h) && (h = a.call(null, d), cljs.core.truth_(h) && (h = a.call(null, e), cljs.core.truth_(h) && (h = b.call(null, c), cljs.core.truth_(h)))) ? (h = b.call(null, d), cljs.core.truth_(h) ? b.call(null, e) : h) : h
        }())
      }, m = function() {
        var d = function(d, e, i, j) {
          return cljs.core.boolean$.call(null, function() {
            var k = c.call(null, d, e, i);
            return cljs.core.truth_(k) ? cljs.core.every_QMARK_.call(null, function(c) {
              var d = a.call(null, c);
              return cljs.core.truth_(d) ? b.call(null, c) : d
            }, j) : k
          }())
        }, e = function(a, b, c, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, c, f)
        };
        e.cljs$lang$maxFixedArity = 3;
        e.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return d(b, c, e, a)
        };
        e.cljs$lang$arity$variadic = d;
        return e
      }(), c = function(a, b, c, f) {
        switch(arguments.length) {
          case 0:
            return!0;
          case 1:
            return d.call(this, a);
          case 2:
            return e.call(this, a, b);
          case 3:
            return k.call(this, a, b, c);
          default:
            return m.cljs$lang$arity$variadic(a, b, c, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = m.cljs$lang$applyTo;
      c.cljs$lang$arity$0 = function() {
        return!0
      };
      c.cljs$lang$arity$1 = d;
      c.cljs$lang$arity$2 = e;
      c.cljs$lang$arity$3 = k;
      c.cljs$lang$arity$variadic = m.cljs$lang$arity$variadic;
      return c
    }()
  }, d = function(a, b, c) {
    return function() {
      var d = null, e = function(d) {
        return cljs.core.boolean$.call(null, function() {
          var e = a.call(null, d);
          return cljs.core.truth_(e) ? (e = b.call(null, d), cljs.core.truth_(e) ? c.call(null, d) : e) : e
        }())
      }, k = function(d, e) {
        return cljs.core.boolean$.call(null, function() {
          var i = a.call(null, d);
          return cljs.core.truth_(i) && (i = b.call(null, d), cljs.core.truth_(i) && (i = c.call(null, d), cljs.core.truth_(i) && (i = a.call(null, e), cljs.core.truth_(i)))) ? (i = b.call(null, e), cljs.core.truth_(i) ? c.call(null, e) : i) : i
        }())
      }, m = function(d, e, i) {
        return cljs.core.boolean$.call(null, function() {
          var j = a.call(null, d);
          return cljs.core.truth_(j) && (j = b.call(null, d), cljs.core.truth_(j) && (j = c.call(null, d), cljs.core.truth_(j) && (j = a.call(null, e), cljs.core.truth_(j) && (j = b.call(null, e), cljs.core.truth_(j) && (j = c.call(null, e), cljs.core.truth_(j) && (j = a.call(null, i), cljs.core.truth_(j))))))) ? (j = b.call(null, i), cljs.core.truth_(j) ? c.call(null, i) : j) : j
        }())
      }, l = function() {
        var e = function(e, j, k, m) {
          return cljs.core.boolean$.call(null, function() {
            var l = d.call(null, e, j, k);
            return cljs.core.truth_(l) ? cljs.core.every_QMARK_.call(null, function(d) {
              var e = a.call(null, d);
              return cljs.core.truth_(e) ? (e = b.call(null, d), cljs.core.truth_(e) ? c.call(null, d) : e) : e
            }, m) : l
          }())
        }, j = function(a, b, c, d) {
          var f = null;
          goog.isDef(d) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, f)
        };
        j.cljs$lang$maxFixedArity = 3;
        j.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), d = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return e(b, c, d, a)
        };
        j.cljs$lang$arity$variadic = e;
        return j
      }(), d = function(a, b, c, d) {
        switch(arguments.length) {
          case 0:
            return!0;
          case 1:
            return e.call(this, a);
          case 2:
            return k.call(this, a, b);
          case 3:
            return m.call(this, a, b, c);
          default:
            return l.cljs$lang$arity$variadic(a, b, c, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = l.cljs$lang$applyTo;
      d.cljs$lang$arity$0 = function() {
        return!0
      };
      d.cljs$lang$arity$1 = e;
      d.cljs$lang$arity$2 = k;
      d.cljs$lang$arity$3 = m;
      d.cljs$lang$arity$variadic = l.cljs$lang$arity$variadic;
      return d
    }()
  }, e = function() {
    var a = function(a, b, c, d) {
      var e = cljs.core.list_STAR_.call(null, a, b, c, d);
      return function() {
        var a = null, b = function(a) {
          return cljs.core.every_QMARK_.call(null, function(b) {
            return b.call(null, a)
          }, e)
        }, c = function(a, b) {
          return cljs.core.every_QMARK_.call(null, function(c) {
            var d = c.call(null, a);
            return cljs.core.truth_(d) ? c.call(null, b) : d
          }, e)
        }, d = function(a, b, c) {
          return cljs.core.every_QMARK_.call(null, function(d) {
            var e = d.call(null, a);
            return cljs.core.truth_(e) ? (e = d.call(null, b), cljs.core.truth_(e) ? d.call(null, c) : e) : e
          }, e)
        }, f = function() {
          var b = function(b, c, d, f) {
            return cljs.core.boolean$.call(null, function() {
              var g = a.call(null, b, c, d);
              return cljs.core.truth_(g) ? cljs.core.every_QMARK_.call(null, function(a) {
                return cljs.core.every_QMARK_.call(null, a, f)
              }, e) : g
            }())
          }, c = function(a, c, d, e) {
            var f = null;
            goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
            return b.call(this, a, c, d, f)
          };
          c.cljs$lang$maxFixedArity = 3;
          c.cljs$lang$applyTo = function(a) {
            var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
            return b(c, d, e, a)
          };
          c.cljs$lang$arity$variadic = b;
          return c
        }(), a = function(a, e, g, h) {
          switch(arguments.length) {
            case 0:
              return!0;
            case 1:
              return b.call(this, a);
            case 2:
              return c.call(this, a, e);
            case 3:
              return d.call(this, a, e, g);
            default:
              return f.cljs$lang$arity$variadic(a, e, g, cljs.core.array_seq(arguments, 3))
          }
          throw"Invalid arity: " + arguments.length;
        };
        a.cljs$lang$maxFixedArity = 3;
        a.cljs$lang$applyTo = f.cljs$lang$applyTo;
        a.cljs$lang$arity$0 = function() {
          return!0
        };
        a.cljs$lang$arity$1 = b;
        a.cljs$lang$arity$2 = c;
        a.cljs$lang$arity$3 = d;
        a.cljs$lang$arity$variadic = f.cljs$lang$arity$variadic;
        return a
      }()
    }, b = function(b, c, d, e) {
      var g = null;
      goog.isDef(e) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return a.call(this, b, c, d, g)
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
      return a(c, d, e, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, g, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, g);
      case 3:
        return d.call(this, a, g, h);
      default:
        return e.cljs$lang$arity$variadic(a, g, h, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  a.cljs$lang$arity$3 = d;
  a.cljs$lang$arity$variadic = e.cljs$lang$arity$variadic;
  return a
}();
cljs.core.some_fn = function() {
  var a = null, b = function(a) {
    return function() {
      var b = null, c = function(b) {
        return a.call(null, b)
      }, d = function(b, c) {
        var d = a.call(null, b);
        return cljs.core.truth_(d) ? d : a.call(null, c)
      }, e = function(b, c, d) {
        b = a.call(null, b);
        if(cljs.core.truth_(b)) {
          return b
        }
        c = a.call(null, c);
        return cljs.core.truth_(c) ? c : a.call(null, d)
      }, k = function() {
        var c = function(c, d, e, h) {
          c = b.call(null, c, d, e);
          return cljs.core.truth_(c) ? c : cljs.core.some.call(null, a, h)
        }, d = function(a, b, d, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, b, d, f)
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return c(b, d, e, a)
        };
        d.cljs$lang$arity$variadic = c;
        return d
      }(), b = function(a, b, f, g) {
        switch(arguments.length) {
          case 0:
            return null;
          case 1:
            return c.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return e.call(this, a, b, f);
          default:
            return k.cljs$lang$arity$variadic(a, b, f, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      b.cljs$lang$maxFixedArity = 3;
      b.cljs$lang$applyTo = k.cljs$lang$applyTo;
      b.cljs$lang$arity$0 = function() {
        return null
      };
      b.cljs$lang$arity$1 = c;
      b.cljs$lang$arity$2 = d;
      b.cljs$lang$arity$3 = e;
      b.cljs$lang$arity$variadic = k.cljs$lang$arity$variadic;
      return b
    }()
  }, c = function(a, b) {
    return function() {
      var c = null, d = function(c) {
        var d = a.call(null, c);
        return cljs.core.truth_(d) ? d : b.call(null, c)
      }, e = function(c, d) {
        var e = a.call(null, c);
        if(cljs.core.truth_(e)) {
          return e
        }
        e = a.call(null, d);
        if(cljs.core.truth_(e)) {
          return e
        }
        e = b.call(null, c);
        return cljs.core.truth_(e) ? e : b.call(null, d)
      }, k = function(c, d, e) {
        var h = a.call(null, c);
        if(cljs.core.truth_(h)) {
          return h
        }
        h = a.call(null, d);
        if(cljs.core.truth_(h)) {
          return h
        }
        h = a.call(null, e);
        if(cljs.core.truth_(h)) {
          return h
        }
        c = b.call(null, c);
        if(cljs.core.truth_(c)) {
          return c
        }
        d = b.call(null, d);
        return cljs.core.truth_(d) ? d : b.call(null, e)
      }, m = function() {
        var d = function(d, e, i, j) {
          d = c.call(null, d, e, i);
          return cljs.core.truth_(d) ? d : cljs.core.some.call(null, function(c) {
            var d = a.call(null, c);
            return cljs.core.truth_(d) ? d : b.call(null, c)
          }, j)
        }, e = function(a, b, c, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, c, f)
        };
        e.cljs$lang$maxFixedArity = 3;
        e.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return d(b, c, e, a)
        };
        e.cljs$lang$arity$variadic = d;
        return e
      }(), c = function(a, b, c, f) {
        switch(arguments.length) {
          case 0:
            return null;
          case 1:
            return d.call(this, a);
          case 2:
            return e.call(this, a, b);
          case 3:
            return k.call(this, a, b, c);
          default:
            return m.cljs$lang$arity$variadic(a, b, c, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = m.cljs$lang$applyTo;
      c.cljs$lang$arity$0 = function() {
        return null
      };
      c.cljs$lang$arity$1 = d;
      c.cljs$lang$arity$2 = e;
      c.cljs$lang$arity$3 = k;
      c.cljs$lang$arity$variadic = m.cljs$lang$arity$variadic;
      return c
    }()
  }, d = function(a, b, c) {
    return function() {
      var d = null, e = function(d) {
        var e = a.call(null, d);
        if(cljs.core.truth_(e)) {
          return e
        }
        e = b.call(null, d);
        return cljs.core.truth_(e) ? e : c.call(null, d)
      }, k = function(d, e) {
        var i = a.call(null, d);
        if(cljs.core.truth_(i)) {
          return i
        }
        i = b.call(null, d);
        if(cljs.core.truth_(i)) {
          return i
        }
        i = c.call(null, d);
        if(cljs.core.truth_(i)) {
          return i
        }
        i = a.call(null, e);
        if(cljs.core.truth_(i)) {
          return i
        }
        i = b.call(null, e);
        return cljs.core.truth_(i) ? i : c.call(null, e)
      }, m = function(d, e, i) {
        var j = a.call(null, d);
        if(cljs.core.truth_(j)) {
          return j
        }
        j = b.call(null, d);
        if(cljs.core.truth_(j)) {
          return j
        }
        d = c.call(null, d);
        if(cljs.core.truth_(d)) {
          return d
        }
        d = a.call(null, e);
        if(cljs.core.truth_(d)) {
          return d
        }
        d = b.call(null, e);
        if(cljs.core.truth_(d)) {
          return d
        }
        e = c.call(null, e);
        if(cljs.core.truth_(e)) {
          return e
        }
        e = a.call(null, i);
        if(cljs.core.truth_(e)) {
          return e
        }
        e = b.call(null, i);
        return cljs.core.truth_(e) ? e : c.call(null, i)
      }, l = function() {
        var e = function(e, j, k, m) {
          e = d.call(null, e, j, k);
          return cljs.core.truth_(e) ? e : cljs.core.some.call(null, function(d) {
            var e = a.call(null, d);
            if(cljs.core.truth_(e)) {
              return e
            }
            e = b.call(null, d);
            return cljs.core.truth_(e) ? e : c.call(null, d)
          }, m)
        }, j = function(a, b, c, d) {
          var f = null;
          goog.isDef(d) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, f)
        };
        j.cljs$lang$maxFixedArity = 3;
        j.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), d = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return e(b, c, d, a)
        };
        j.cljs$lang$arity$variadic = e;
        return j
      }(), d = function(a, b, c, d) {
        switch(arguments.length) {
          case 0:
            return null;
          case 1:
            return e.call(this, a);
          case 2:
            return k.call(this, a, b);
          case 3:
            return m.call(this, a, b, c);
          default:
            return l.cljs$lang$arity$variadic(a, b, c, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = l.cljs$lang$applyTo;
      d.cljs$lang$arity$0 = function() {
        return null
      };
      d.cljs$lang$arity$1 = e;
      d.cljs$lang$arity$2 = k;
      d.cljs$lang$arity$3 = m;
      d.cljs$lang$arity$variadic = l.cljs$lang$arity$variadic;
      return d
    }()
  }, e = function() {
    var a = function(a, b, c, d) {
      var e = cljs.core.list_STAR_.call(null, a, b, c, d);
      return function() {
        var a = null, b = function(a) {
          return cljs.core.some.call(null, function(b) {
            return b.call(null, a)
          }, e)
        }, c = function(a, b) {
          return cljs.core.some.call(null, function(c) {
            var d = c.call(null, a);
            return cljs.core.truth_(d) ? d : c.call(null, b)
          }, e)
        }, d = function(a, b, c) {
          return cljs.core.some.call(null, function(d) {
            var e = d.call(null, a);
            if(cljs.core.truth_(e)) {
              return e
            }
            e = d.call(null, b);
            return cljs.core.truth_(e) ? e : d.call(null, c)
          }, e)
        }, f = function() {
          var b = function(b, c, d, f) {
            b = a.call(null, b, c, d);
            return cljs.core.truth_(b) ? b : cljs.core.some.call(null, function(a) {
              return cljs.core.some.call(null, a, f)
            }, e)
          }, c = function(a, c, d, e) {
            var f = null;
            goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
            return b.call(this, a, c, d, f)
          };
          c.cljs$lang$maxFixedArity = 3;
          c.cljs$lang$applyTo = function(a) {
            var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
            return b(c, d, e, a)
          };
          c.cljs$lang$arity$variadic = b;
          return c
        }(), a = function(a, e, g, h) {
          switch(arguments.length) {
            case 0:
              return null;
            case 1:
              return b.call(this, a);
            case 2:
              return c.call(this, a, e);
            case 3:
              return d.call(this, a, e, g);
            default:
              return f.cljs$lang$arity$variadic(a, e, g, cljs.core.array_seq(arguments, 3))
          }
          throw"Invalid arity: " + arguments.length;
        };
        a.cljs$lang$maxFixedArity = 3;
        a.cljs$lang$applyTo = f.cljs$lang$applyTo;
        a.cljs$lang$arity$0 = function() {
          return null
        };
        a.cljs$lang$arity$1 = b;
        a.cljs$lang$arity$2 = c;
        a.cljs$lang$arity$3 = d;
        a.cljs$lang$arity$variadic = f.cljs$lang$arity$variadic;
        return a
      }()
    }, b = function(b, c, d, e) {
      var g = null;
      goog.isDef(e) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return a.call(this, b, c, d, g)
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
      return a(c, d, e, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, g, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, g);
      case 3:
        return d.call(this, a, g, h);
      default:
        return e.cljs$lang$arity$variadic(a, g, h, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  a.cljs$lang$arity$3 = d;
  a.cljs$lang$arity$variadic = e.cljs$lang$arity$variadic;
  return a
}();
cljs.core.map = function() {
  var a = null, b = function(b, c) {
    return new cljs.core.LazySeq(null, !1, function() {
      var d = cljs.core.seq.call(null, c);
      if(d) {
        if(cljs.core.chunked_seq_QMARK_.call(null, d)) {
          for(var e = cljs.core.chunk_first.call(null, d), j = cljs.core.count.call(null, e), k = cljs.core.chunk_buffer.call(null, j), m = 0;;) {
            if(m < j) {
              cljs.core.chunk_append.call(null, k, b.call(null, cljs.core._nth.call(null, e, m)));
              m = m + 1
            }else {
              break
            }
          }
          return cljs.core.chunk_cons.call(null, cljs.core.chunk.call(null, k), a.call(null, b, cljs.core.chunk_rest.call(null, d)))
        }
        return cljs.core.cons.call(null, b.call(null, cljs.core.first.call(null, d)), a.call(null, b, cljs.core.rest.call(null, d)))
      }
      return null
    }, null)
  }, c = function(b, c, d) {
    return new cljs.core.LazySeq(null, !1, function() {
      var e = cljs.core.seq.call(null, c), j = cljs.core.seq.call(null, d);
      return(e ? j : e) ? cljs.core.cons.call(null, b.call(null, cljs.core.first.call(null, e), cljs.core.first.call(null, j)), a.call(null, b, cljs.core.rest.call(null, e), cljs.core.rest.call(null, j))) : null
    }, null)
  }, d = function(b, c, d, e) {
    return new cljs.core.LazySeq(null, !1, function() {
      var j = cljs.core.seq.call(null, c), k = cljs.core.seq.call(null, d), m = cljs.core.seq.call(null, e);
      return(j ? k ? m : k : j) ? cljs.core.cons.call(null, b.call(null, cljs.core.first.call(null, j), cljs.core.first.call(null, k), cljs.core.first.call(null, m)), a.call(null, b, cljs.core.rest.call(null, j), cljs.core.rest.call(null, k), cljs.core.rest.call(null, m))) : null
    }, null)
  }, e = function() {
    var b = function(b, c, d, e, f) {
      return a.call(null, function(a) {
        return cljs.core.apply.call(null, b, a)
      }, function n(b) {
        return new cljs.core.LazySeq(null, !1, function() {
          var c = a.call(null, cljs.core.seq, b);
          return cljs.core.every_QMARK_.call(null, cljs.core.identity, c) ? cljs.core.cons.call(null, a.call(null, cljs.core.first, c), n.call(null, a.call(null, cljs.core.rest, c))) : null
        }, null)
      }.call(null, cljs.core.conj.call(null, f, e, d, c)))
    }, c = function(a, c, d, e, g) {
      var l = null;
      goog.isDef(g) && (l = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, a, c, d, e, l)
    };
    c.cljs$lang$maxFixedArity = 4;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), g = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(a)))), a = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(a))));
      return b(c, d, e, g, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, g, h, i, j) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, g);
      case 3:
        return c.call(this, a, g, h);
      case 4:
        return d.call(this, a, g, h, i);
      default:
        return e.cljs$lang$arity$variadic(a, g, h, i, cljs.core.array_seq(arguments, 4))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 4;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  a.cljs$lang$arity$4 = d;
  a.cljs$lang$arity$variadic = e.cljs$lang$arity$variadic;
  return a
}();
cljs.core.take = function take(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    if(b > 0) {
      var d = cljs.core.seq.call(null, c);
      return d ? cljs.core.cons.call(null, cljs.core.first.call(null, d), take.call(null, b - 1, cljs.core.rest.call(null, d))) : null
    }
    return null
  }, null)
};
cljs.core.drop = function(a, b) {
  var c = function(a, b) {
    for(;;) {
      var c = cljs.core.seq.call(null, b);
      if(cljs.core.truth_(function() {
        var b = 0 < a;
        return b ? c : b
      }())) {
        var g = a - 1, h = cljs.core.rest.call(null, c), a = g, b = h
      }else {
        return c
      }
    }
  };
  return new cljs.core.LazySeq(null, !1, function() {
    return c.call(null, a, b)
  }, null)
};
cljs.core.drop_last = function() {
  var a = null, b = function(b) {
    return a.call(null, 1, b)
  }, c = function(a, b) {
    return cljs.core.map.call(null, function(a) {
      return a
    }, b, cljs.core.drop.call(null, a, b))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.take_last = function(a, b) {
  for(var c = cljs.core.seq.call(null, b), d = cljs.core.seq.call(null, cljs.core.drop.call(null, a, b));;) {
    if(d) {
      c = cljs.core.next.call(null, c), d = cljs.core.next.call(null, d)
    }else {
      return c
    }
  }
};
cljs.core.drop_while = function(a, b) {
  var c = function(a, b) {
    for(;;) {
      var c = cljs.core.seq.call(null, b);
      if(cljs.core.truth_(function() {
        var b = c;
        return b ? a.call(null, cljs.core.first.call(null, c)) : b
      }())) {
        var g = a, h = cljs.core.rest.call(null, c), a = g, b = h
      }else {
        return c
      }
    }
  };
  return new cljs.core.LazySeq(null, !1, function() {
    return c.call(null, a, b)
  }, null)
};
cljs.core.cycle = function cycle(b) {
  return new cljs.core.LazySeq(null, !1, function() {
    var c = cljs.core.seq.call(null, b);
    return c ? cljs.core.concat.call(null, c, cycle.call(null, c)) : null
  }, null)
};
cljs.core.split_at = function(a, b) {
  return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null, a, b), cljs.core.drop.call(null, a, b)], !0)
};
cljs.core.repeat = function() {
  var a = null, b = function(b) {
    return new cljs.core.LazySeq(null, !1, function() {
      return cljs.core.cons.call(null, b, a.call(null, b))
    }, null)
  }, c = function(b, c) {
    return cljs.core.take.call(null, b, a.call(null, c))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.replicate = function(a, b) {
  return cljs.core.take.call(null, a, cljs.core.repeat.call(null, b))
};
cljs.core.repeatedly = function() {
  var a = null, b = function(b) {
    return new cljs.core.LazySeq(null, !1, function() {
      return cljs.core.cons.call(null, b.call(null), a.call(null, b))
    }, null)
  }, c = function(b, c) {
    return cljs.core.take.call(null, b, a.call(null, c))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.iterate = function iterate(b, c) {
  return cljs.core.cons.call(null, c, new cljs.core.LazySeq(null, !1, function() {
    return iterate.call(null, b, b.call(null, c))
  }, null))
};
cljs.core.interleave = function() {
  var a = null, b = function(b, c) {
    return new cljs.core.LazySeq(null, !1, function() {
      var f = cljs.core.seq.call(null, b), g = cljs.core.seq.call(null, c);
      return(f ? g : f) ? cljs.core.cons.call(null, cljs.core.first.call(null, f), cljs.core.cons.call(null, cljs.core.first.call(null, g), a.call(null, cljs.core.rest.call(null, f), cljs.core.rest.call(null, g)))) : null
    }, null)
  }, c = function() {
    var b = function(b, c, d) {
      return new cljs.core.LazySeq(null, !1, function() {
        var e = cljs.core.map.call(null, cljs.core.seq, cljs.core.conj.call(null, d, c, b));
        return cljs.core.every_QMARK_.call(null, cljs.core.identity, e) ? cljs.core.concat.call(null, cljs.core.map.call(null, cljs.core.first, e), cljs.core.apply.call(null, a, cljs.core.map.call(null, cljs.core.rest, e))) : null
      }, null)
    }, c = function(a, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, a, c, i)
    };
    c.cljs$lang$maxFixedArity = 2;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), a = cljs.core.rest(cljs.core.next(a));
      return b(c, e, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      default:
        return c.cljs$lang$arity$variadic(a, e, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.interpose = function(a, b) {
  return cljs.core.drop.call(null, 1, cljs.core.interleave.call(null, cljs.core.repeat.call(null, a), b))
};
cljs.core.flatten1 = function(a) {
  return function c(a, e) {
    return new cljs.core.LazySeq(null, !1, function() {
      var f = cljs.core.seq.call(null, a);
      return f ? cljs.core.cons.call(null, cljs.core.first.call(null, f), c.call(null, cljs.core.rest.call(null, f), e)) : cljs.core.seq.call(null, e) ? c.call(null, cljs.core.first.call(null, e), cljs.core.rest.call(null, e)) : null
    }, null)
  }.call(null, null, a)
};
cljs.core.mapcat = function() {
  var a = null, b = function(a, b) {
    return cljs.core.flatten1.call(null, cljs.core.map.call(null, a, b))
  }, c = function() {
    var a = function(a, b, c) {
      return cljs.core.flatten1.call(null, cljs.core.apply.call(null, cljs.core.map, a, b, c))
    }, b = function(b, c, e) {
      var i = null;
      goog.isDef(e) && (i = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
      return a.call(this, b, c, i)
    };
    b.cljs$lang$maxFixedArity = 2;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
      return a(c, e, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      default:
        return c.cljs$lang$arity$variadic(a, e, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 2;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.filter = function filter(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq.call(null, c);
    if(d) {
      if(cljs.core.chunked_seq_QMARK_.call(null, d)) {
        for(var e = cljs.core.chunk_first.call(null, d), f = cljs.core.count.call(null, e), g = cljs.core.chunk_buffer.call(null, f), h = 0;;) {
          if(h < f) {
            cljs.core.truth_(b.call(null, cljs.core._nth.call(null, e, h))) && cljs.core.chunk_append.call(null, g, cljs.core._nth.call(null, e, h));
            h = h + 1
          }else {
            break
          }
        }
        return cljs.core.chunk_cons.call(null, cljs.core.chunk.call(null, g), filter.call(null, b, cljs.core.chunk_rest.call(null, d)))
      }
      e = cljs.core.first.call(null, d);
      d = cljs.core.rest.call(null, d);
      return cljs.core.truth_(b.call(null, e)) ? cljs.core.cons.call(null, e, filter.call(null, b, d)) : filter.call(null, b, d)
    }
    return null
  }, null)
};
cljs.core.remove = function(a, b) {
  return cljs.core.filter.call(null, cljs.core.complement.call(null, a), b)
};
cljs.core.tree_seq = function(a, b, c) {
  return function e(c) {
    return new cljs.core.LazySeq(null, !1, function() {
      return cljs.core.cons.call(null, c, cljs.core.truth_(a.call(null, c)) ? cljs.core.mapcat.call(null, e, b.call(null, c)) : null)
    }, null)
  }.call(null, c)
};
cljs.core.flatten = function(a) {
  return cljs.core.filter.call(null, function(a) {
    return!cljs.core.sequential_QMARK_.call(null, a)
  }, cljs.core.rest.call(null, cljs.core.tree_seq.call(null, cljs.core.sequential_QMARK_, cljs.core.seq, a)))
};
cljs.core.into = function(a, b) {
  var c;
  a ? (c = (c = a.cljs$lang$protocol_mask$partition1$ & 1) ? c : a.cljs$core$IEditableCollection$, c = c ? !0 : a.cljs$lang$protocol_mask$partition1$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IEditableCollection, a)) : c = cljs.core.type_satisfies_.call(null, cljs.core.IEditableCollection, a);
  return c ? cljs.core.persistent_BANG_.call(null, cljs.core.reduce.call(null, cljs.core._conj_BANG_, cljs.core.transient$.call(null, a), b)) : cljs.core.reduce.call(null, cljs.core._conj, a, b)
};
cljs.core.mapv = function() {
  var a = null, b = function(a, b) {
    return cljs.core.persistent_BANG_.call(null, cljs.core.reduce.call(null, function(b, c) {
      return cljs.core.conj_BANG_.call(null, b, a.call(null, c))
    }, cljs.core.transient$.call(null, cljs.core.PersistentVector.EMPTY), b))
  }, c = function(a, b, c) {
    return cljs.core.into.call(null, cljs.core.PersistentVector.EMPTY, cljs.core.map.call(null, a, b, c))
  }, d = function(a, b, c, d) {
    return cljs.core.into.call(null, cljs.core.PersistentVector.EMPTY, cljs.core.map.call(null, a, b, c, d))
  }, e = function() {
    var a = function(a, b, c, d, e) {
      return cljs.core.into.call(null, cljs.core.PersistentVector.EMPTY, cljs.core.apply.call(null, cljs.core.map, a, b, c, d, e))
    }, b = function(b, c, d, e, g) {
      var l = null;
      goog.isDef(g) && (l = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0));
      return a.call(this, b, c, d, e, l)
    };
    b.cljs$lang$maxFixedArity = 4;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), g = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(b)))), b = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(b))));
      return a(c, d, e, g, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, g, h, i, j) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, g);
      case 3:
        return c.call(this, a, g, h);
      case 4:
        return d.call(this, a, g, h, i);
      default:
        return e.cljs$lang$arity$variadic(a, g, h, i, cljs.core.array_seq(arguments, 4))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 4;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  a.cljs$lang$arity$4 = d;
  a.cljs$lang$arity$variadic = e.cljs$lang$arity$variadic;
  return a
}();
cljs.core.filterv = function(a, b) {
  return cljs.core.persistent_BANG_.call(null, cljs.core.reduce.call(null, function(b, d) {
    return cljs.core.truth_(a.call(null, d)) ? cljs.core.conj_BANG_.call(null, b, d) : b
  }, cljs.core.transient$.call(null, cljs.core.PersistentVector.EMPTY), b))
};
cljs.core.partition = function() {
  var a = null, b = function(b, c) {
    return a.call(null, b, b, c)
  }, c = function(b, c, d) {
    return new cljs.core.LazySeq(null, !1, function() {
      var h = cljs.core.seq.call(null, d);
      if(h) {
        var i = cljs.core.take.call(null, b, h);
        return b === cljs.core.count.call(null, i) ? cljs.core.cons.call(null, i, a.call(null, b, c, cljs.core.drop.call(null, c, h))) : null
      }
      return null
    }, null)
  }, d = function(b, c, d, h) {
    return new cljs.core.LazySeq(null, !1, function() {
      var i = cljs.core.seq.call(null, h);
      if(i) {
        var j = cljs.core.take.call(null, b, i);
        return b === cljs.core.count.call(null, j) ? cljs.core.cons.call(null, j, a.call(null, b, c, d, cljs.core.drop.call(null, c, i))) : cljs.core.list.call(null, cljs.core.take.call(null, b, cljs.core.concat.call(null, j, d)))
      }
      return null
    }, null)
  }, a = function(a, f, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, f);
      case 3:
        return c.call(this, a, f, g);
      case 4:
        return d.call(this, a, f, g, h)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  a.cljs$lang$arity$4 = d;
  return a
}();
cljs.core.get_in = function() {
  var a = null, b = function(a, b) {
    return cljs.core.reduce.call(null, cljs.core.get, a, b)
  }, c = function(a, b, c) {
    for(var g = cljs.core.lookup_sentinel, b = cljs.core.seq.call(null, b);;) {
      if(b) {
        a = cljs.core._lookup.call(null, a, cljs.core.first.call(null, b), g);
        if(g === a) {
          return c
        }
        b = cljs.core.next.call(null, b)
      }else {
        return a
      }
    }
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.assoc_in = function assoc_in(b, c, d) {
  var e = cljs.core.nth.call(null, c, 0, null), c = cljs.core.nthnext.call(null, c, 1);
  return cljs.core.truth_(c) ? cljs.core.assoc.call(null, b, e, assoc_in.call(null, cljs.core._lookup.call(null, b, e, null), c, d)) : cljs.core.assoc.call(null, b, e, d)
};
cljs.core.update_in = function() {
  var a = function(a, d, e, f) {
    var g = cljs.core.nth.call(null, d, 0, null), d = cljs.core.nthnext.call(null, d, 1);
    return cljs.core.truth_(d) ? cljs.core.assoc.call(null, a, g, cljs.core.apply.call(null, b, cljs.core._lookup.call(null, a, g, null), d, e, f)) : cljs.core.assoc.call(null, a, g, cljs.core.apply.call(null, e, cljs.core._lookup.call(null, a, g, null), f))
  }, b = function(b, d, e, f) {
    var g = null;
    goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
    return a.call(this, b, d, e, g)
  };
  b.cljs$lang$maxFixedArity = 3;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), f = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
    return a(d, e, f, b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.Vector = function(a, b, c) {
  this.meta = a;
  this.array = b;
  this.__hash = c;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32400159
};
cljs.core.Vector.cljs$lang$type = !0;
cljs.core.Vector.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/Vector")
};
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_coll.call(null, a)
};
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$IIndexed$_nth$arity$3(a, b, null)
};
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return a.cljs$core$IIndexed$_nth$arity$3(a, b, c)
};
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  a = this.array.slice();
  a[b] = c;
  return new cljs.core.Vector(this.meta, a, null)
};
cljs.core.Vector.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(this, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Vector.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  var c = this.array.slice();
  c.push(b);
  return new cljs.core.Vector(this.meta, c, null)
};
cljs.core.Vector.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.ci_reduce.call(null, this.array, b)
};
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.ci_reduce.call(null, this.array, b, c)
};
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  var a = this;
  return 0 < a.array.length ? function c(d) {
    return new cljs.core.LazySeq(null, !1, function() {
      return d < a.array.length ? cljs.core.cons.call(null, a.array[d], c.call(null, d + 1)) : null
    }, null)
  }.call(null, 0) : null
};
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return this.array.length
};
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = function() {
  var a = this.array.length;
  return 0 < a ? this.array[a - 1] : null
};
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = function() {
  if(0 < this.array.length) {
    var a = this.array.slice();
    a.pop();
    return new cljs.core.Vector(this.meta, a, null)
  }
  throw Error("Can't pop empty vector");
};
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(a, b, c) {
  return a.cljs$core$IAssociative$_assoc$arity$3(a, b, c)
};
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.Vector(b, this.array, this.__hash)
};
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  var c;
  c = (c = 0 <= b) ? b < this.array.length : c;
  return c ? this.array[b] : null
};
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  a = (a = 0 <= b) ? b < this.array.length : a;
  return a ? this.array[b] : c
};
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this.meta)
};
cljs.core.Vector;
cljs.core.Vector.EMPTY = new cljs.core.Vector(null, [], 0);
cljs.core.Vector.fromArray = function(a) {
  return new cljs.core.Vector(null, a, null)
};
cljs.core.VectorNode = function(a, b) {
  this.edit = a;
  this.arr = b
};
cljs.core.VectorNode.cljs$lang$type = !0;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/VectorNode")
};
cljs.core.VectorNode;
cljs.core.pv_fresh_node = function(a) {
  return new cljs.core.VectorNode(a, cljs.core.make_array.call(null, 32))
};
cljs.core.pv_aget = function(a, b) {
  return a.arr[b]
};
cljs.core.pv_aset = function(a, b, c) {
  return a.arr[b] = c
};
cljs.core.pv_clone_node = function(a) {
  return new cljs.core.VectorNode(a.edit, a.arr.slice())
};
cljs.core.tail_off = function(a) {
  a = a.cnt;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
};
cljs.core.new_path = function(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = cljs.core.pv_fresh_node.call(null, a);
    cljs.core.pv_aset.call(null, d, 0, c);
    c = d;
    b -= 5
  }
};
cljs.core.push_tail = function push_tail(b, c, d, e) {
  var f = cljs.core.pv_clone_node.call(null, d), g = b.cnt - 1 >>> c & 31;
  5 === c ? cljs.core.pv_aset.call(null, f, g, e) : (d = cljs.core.pv_aget.call(null, d, g), b = null != d ? push_tail.call(null, b, c - 5, d, e) : cljs.core.new_path.call(null, null, c - 5, e), cljs.core.pv_aset.call(null, f, g, b));
  return f
};
cljs.core.array_for = function(a, b) {
  var c;
  c = (c = 0 <= b) ? b < a.cnt : c;
  if(c) {
    if(b >= cljs.core.tail_off.call(null, a)) {
      return a.tail
    }
    c = a.root;
    for(var d = a.shift;;) {
      if(0 < d) {
        c = cljs.core.pv_aget.call(null, c, b >>> d & 31), d -= 5
      }else {
        return c.arr
      }
    }
  }else {
    throw Error([cljs.core.str("No item "), cljs.core.str(b), cljs.core.str(" in vector of length "), cljs.core.str(a.cnt)].join(""));
  }
};
cljs.core.do_assoc = function do_assoc(b, c, d, e, f) {
  var g = cljs.core.pv_clone_node.call(null, d);
  if(0 === c) {
    cljs.core.pv_aset.call(null, g, e & 31, f)
  }else {
    var h = e >>> c & 31;
    cljs.core.pv_aset.call(null, g, h, do_assoc.call(null, b, c - 5, cljs.core.pv_aget.call(null, d, h), e, f))
  }
  return g
};
cljs.core.pop_tail = function pop_tail(b, c, d) {
  var e = b.cnt - 2 >>> c & 31;
  if(5 < c) {
    b = pop_tail.call(null, b, c - 5, cljs.core.pv_aget.call(null, d, e));
    c = null == b;
    if(c ? 0 === e : c) {
      return null
    }
    d = cljs.core.pv_clone_node.call(null, d);
    cljs.core.pv_aset.call(null, d, e, b);
    return d
  }
  if(0 === e) {
    return null
  }
  d = cljs.core.pv_clone_node.call(null, d);
  cljs.core.pv_aset.call(null, d, e, null);
  return d
};
cljs.core.PersistentVector = function(a, b, c, d, e, f) {
  this.meta = a;
  this.cnt = b;
  this.shift = c;
  this.root = d;
  this.tail = e;
  this.__hash = f;
  this.cljs$lang$protocol_mask$partition1$ = 1;
  this.cljs$lang$protocol_mask$partition0$ = 167668511
};
cljs.core.PersistentVector.cljs$lang$type = !0;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/PersistentVector")
};
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function() {
  return new cljs.core.TransientVector(this.cnt, this.shift, cljs.core.tv_editable_root.call(null, this.root), cljs.core.tv_editable_tail.call(null, this.tail))
};
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_coll.call(null, a)
};
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$IIndexed$_nth$arity$3(a, b, null)
};
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return a.cljs$core$IIndexed$_nth$arity$3(a, b, c)
};
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  var d;
  d = (d = 0 <= b) ? b < this.cnt : d;
  if(d) {
    return cljs.core.tail_off.call(null, a) <= b ? (a = this.tail.slice(), a[b & 31] = c, new cljs.core.PersistentVector(this.meta, this.cnt, this.shift, this.root, a, null)) : new cljs.core.PersistentVector(this.meta, this.cnt, this.shift, cljs.core.do_assoc.call(null, a, this.shift, this.root, b, c), this.tail, null)
  }
  if(b === this.cnt) {
    return a.cljs$core$ICollection$_conj$arity$2(a, c)
  }
  throw Error([cljs.core.str("Index "), cljs.core.str(b), cljs.core.str(" out of bounds  [0,"), cljs.core.str(this.cnt), cljs.core.str("]")].join(""));
};
cljs.core.PersistentVector.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(this, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.PersistentVector.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(a, b, c) {
  for(var c = [0, c], d = 0;;) {
    if(d < this.cnt) {
      var e = cljs.core.array_for.call(null, a, d), f = e.length;
      a: {
        for(var g = 0, h = c[1];;) {
          if(g < f) {
            if(h = b.call(null, h, g + d, e[g]), cljs.core.reduced_QMARK_.call(null, h)) {
              e = h;
              break a
            }else {
              g += 1
            }
          }else {
            c[0] = f;
            e = c[1] = h;
            break a
          }
        }
        e = void 0
      }
      if(cljs.core.reduced_QMARK_.call(null, e)) {
        return cljs.core.deref.call(null, e)
      }
      d += c[0]
    }else {
      return c[1]
    }
  }
};
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  if(32 > this.cnt - cljs.core.tail_off.call(null, a)) {
    var c = this.tail.slice();
    c.push(b);
    return new cljs.core.PersistentVector(this.meta, this.cnt + 1, this.shift, this.root, c, null)
  }
  var d = this.cnt >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  d ? (d = cljs.core.pv_fresh_node.call(null, null), cljs.core.pv_aset.call(null, d, 0, this.root), cljs.core.pv_aset.call(null, d, 1, cljs.core.new_path.call(null, null, this.shift, new cljs.core.VectorNode(null, this.tail)))) : d = cljs.core.push_tail.call(null, a, this.shift, this.root, new cljs.core.VectorNode(null, this.tail));
  return new cljs.core.PersistentVector(this.meta, this.cnt + 1, c, d, [b], null)
};
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = function(a) {
  return 0 < this.cnt ? new cljs.core.RSeq(a, this.cnt - 1, null) : cljs.core.List.EMPTY
};
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = function(a) {
  return a.cljs$core$IIndexed$_nth$arity$2(a, 0)
};
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = function(a) {
  return a.cljs$core$IIndexed$_nth$arity$2(a, 1)
};
cljs.core.PersistentVector.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.ci_reduce.call(null, a, b)
};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.ci_reduce.call(null, a, b, c)
};
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return 0 === this.cnt ? null : cljs.core.chunked_seq.call(null, a, 0, 0)
};
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return this.cnt
};
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = function(a) {
  return 0 < this.cnt ? a.cljs$core$IIndexed$_nth$arity$2(a, this.cnt - 1) : null
};
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = function(a) {
  if(0 === this.cnt) {
    throw Error("Can't pop empty vector");
  }
  if(1 === this.cnt) {
    return cljs.core._with_meta.call(null, cljs.core.PersistentVector.EMPTY, this.meta)
  }
  if(1 < this.cnt - cljs.core.tail_off.call(null, a)) {
    return new cljs.core.PersistentVector(this.meta, this.cnt - 1, this.shift, this.root, this.tail.slice(0, -1), null)
  }
  var b = cljs.core.array_for.call(null, a, this.cnt - 2), a = cljs.core.pop_tail.call(null, a, this.shift, this.root), a = null == a ? cljs.core.PersistentVector.EMPTY_NODE : a, c = this.cnt - 1, d;
  d = (d = 5 < this.shift) ? null == cljs.core.pv_aget.call(null, a, 1) : d;
  return d ? new cljs.core.PersistentVector(this.meta, c, this.shift - 5, cljs.core.pv_aget.call(null, a, 0), b, null) : new cljs.core.PersistentVector(this.meta, c, this.shift, a, b, null)
};
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(a, b, c) {
  return a.cljs$core$IAssociative$_assoc$arity$3(a, b, c)
};
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentVector(b, this.cnt, this.shift, this.root, this.tail, this.__hash)
};
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  return cljs.core.array_for.call(null, a, b)[b & 31]
};
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  var d;
  d = (d = 0 <= b) ? b < this.cnt : d;
  return d ? a.cljs$core$IIndexed$_nth$arity$2(a, b) : c
};
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.PersistentVector.EMPTY, this.meta)
};
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null, null);
cljs.core.PersistentVector.EMPTY = new cljs.core.PersistentVector(null, 0, 5, cljs.core.PersistentVector.EMPTY_NODE, [], 0);
cljs.core.PersistentVector.fromArray = function(a, b) {
  var c = a.length, d = !0 === b ? a : a.slice();
  if(32 > c) {
    return new cljs.core.PersistentVector(null, c, 5, cljs.core.PersistentVector.EMPTY_NODE, d, null)
  }
  for(var e = d.slice(0, 32), f = new cljs.core.PersistentVector(null, 32, 5, cljs.core.PersistentVector.EMPTY_NODE, e, null), e = 32, g = cljs.core._as_transient.call(null, f);;) {
    if(e < c) {
      f = e + 1, g = cljs.core.conj_BANG_.call(null, g, d[e]), e = f
    }else {
      return cljs.core.persistent_BANG_.call(null, g)
    }
  }
};
cljs.core.vec = function(a) {
  return cljs.core._persistent_BANG_.call(null, cljs.core.reduce.call(null, cljs.core._conj_BANG_, cljs.core._as_transient.call(null, cljs.core.PersistentVector.EMPTY), a))
};
cljs.core.vector = function() {
  var a = function(a) {
    return cljs.core.vec.call(null, a)
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.ChunkedSeq = function(a, b, c, d, e) {
  this.vec = a;
  this.node = b;
  this.i = c;
  this.off = d;
  this.meta = e;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 27525356
};
cljs.core.ChunkedSeq.cljs$lang$type = !0;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/ChunkedSeq")
};
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = function(a) {
  return this.off + 1 < this.node.length ? (a = cljs.core.chunked_seq.call(null, this.vec, this.node, this.i, this.off + 1), null == a ? null : a) : a.cljs$core$IChunkedNext$_chunked_next$arity$1(a)
};
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons.call(null, b, a)
};
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return a
};
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = function() {
  return this.node[this.off]
};
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return this.off + 1 < this.node.length ? (a = cljs.core.chunked_seq.call(null, this.vec, this.node, this.i, this.off + 1), null == a ? cljs.core.List.EMPTY : a) : a.cljs$core$IChunkedSeq$_chunked_rest$arity$1(a)
};
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = !0;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = function() {
  var a = this.node.length, a = this.i + a < cljs.core._count.call(null, this.vec) ? cljs.core.chunked_seq.call(null, this.vec, this.i + a, 0) : null;
  return null == a ? null : a
};
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return cljs.core.chunked_seq.call(null, this.vec, this.node, this.i, this.off, b)
};
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.PersistentVector.EMPTY, this.meta)
};
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = !0;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = function() {
  return cljs.core.array_chunk.call(null, this.node, this.off)
};
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = function() {
  var a = this.node.length, a = this.i + a < cljs.core._count.call(null, this.vec) ? cljs.core.chunked_seq.call(null, this.vec, this.i + a, 0) : null;
  return null == a ? cljs.core.List.EMPTY : a
};
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = function() {
  var a = null, b = function(b, c, d) {
    return a.call(null, b, cljs.core.array_for.call(null, b, c), c, d, null)
  }, c = function(b, c, d, h) {
    return a.call(null, b, c, d, h, null)
  }, d = function(a, b, c, d, i) {
    return new cljs.core.ChunkedSeq(a, b, c, d, i)
  }, a = function(a, f, g, h, i) {
    switch(arguments.length) {
      case 3:
        return b.call(this, a, f, g);
      case 4:
        return c.call(this, a, f, g, h);
      case 5:
        return d.call(this, a, f, g, h, i)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$3 = b;
  a.cljs$lang$arity$4 = c;
  a.cljs$lang$arity$5 = d;
  return a
}();
cljs.core.Subvec = function(a, b, c, d, e) {
  this.meta = a;
  this.v = b;
  this.start = c;
  this.end = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32400159
};
cljs.core.Subvec.cljs$lang$type = !0;
cljs.core.Subvec.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/Subvec")
};
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_coll.call(null, a)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$IIndexed$_nth$arity$3(a, b, null)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return a.cljs$core$IIndexed$_nth$arity$3(a, b, c)
};
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  a = this.start + b;
  return new cljs.core.Subvec(this.meta, cljs.core._assoc.call(null, this.v, a, c), this.start, this.end > a + 1 ? this.end : a + 1, null)
};
cljs.core.Subvec.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(this, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.Subvec.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return new cljs.core.Subvec(this.meta, cljs.core._assoc_n.call(null, this.v, this.end, b), this.start, this.end + 1, null)
};
cljs.core.Subvec.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.ci_reduce.call(null, a, b)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.ci_reduce.call(null, a, b, c)
};
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : cljs.core.cons.call(null, cljs.core._nth.call(null, a.v, d), new cljs.core.LazySeq(null, !1, function() {
      return c.call(null, d + 1)
    }, null))
  }.call(null, a.start)
};
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return this.end - this.start
};
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = function() {
  return cljs.core._nth.call(null, this.v, this.end - 1)
};
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = function() {
  if(this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return new cljs.core.Subvec(this.meta, this.v, this.start, this.end - 1, null)
};
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(a, b, c) {
  return a.cljs$core$IAssociative$_assoc$arity$3(a, b, c)
};
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.Subvec(b, this.v, this.start, this.end, this.__hash)
};
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  return cljs.core._nth.call(null, this.v, this.start + b)
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  return cljs.core._nth.call(null, this.v, this.start + b, c)
};
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this.meta)
};
cljs.core.Subvec;
cljs.core.subvec = function() {
  var a = null, b = function(b, c) {
    return a.call(null, b, c, cljs.core.count.call(null, b))
  }, c = function(a, b, c) {
    return new cljs.core.Subvec(null, a, b, c, null)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.tv_ensure_editable = function(a, b) {
  return a === b.edit ? b : new cljs.core.VectorNode(a, b.arr.slice())
};
cljs.core.tv_editable_root = function(a) {
  return new cljs.core.VectorNode({}, a.arr.slice())
};
cljs.core.tv_editable_tail = function(a) {
  var b = cljs.core.make_array.call(null, 32);
  cljs.core.array_copy.call(null, a, 0, b, 0, a.length);
  return b
};
cljs.core.tv_push_tail = function tv_push_tail(b, c, d, e) {
  var f = cljs.core.tv_ensure_editable.call(null, b.root.edit, d), g = b.cnt - 1 >>> c & 31;
  cljs.core.pv_aset.call(null, f, g, 5 === c ? e : function() {
    var d = cljs.core.pv_aget.call(null, f, g);
    return null != d ? tv_push_tail.call(null, b, c - 5, d, e) : cljs.core.new_path.call(null, b.root.edit, c - 5, e)
  }());
  return f
};
cljs.core.tv_pop_tail = function tv_pop_tail(b, c, d) {
  var d = cljs.core.tv_ensure_editable.call(null, b.root.edit, d), e = b.cnt - 2 >>> c & 31;
  if(5 < c) {
    b = tv_pop_tail.call(null, b, c - 5, cljs.core.pv_aget.call(null, d, e));
    c = null == b;
    if(c ? 0 === e : c) {
      return null
    }
    cljs.core.pv_aset.call(null, d, e, b);
    return d
  }
  if(0 === e) {
    return null
  }
  cljs.core.pv_aset.call(null, d, e, null);
  return d
};
cljs.core.editable_array_for = function(a, b) {
  var c;
  c = (c = 0 <= b) ? b < a.cnt : c;
  if(c) {
    if(b >= cljs.core.tail_off.call(null, a)) {
      return a.tail
    }
    for(var d = c = a.root, e = a.shift;;) {
      if(0 < e) {
        d = cljs.core.tv_ensure_editable.call(null, c.edit, cljs.core.pv_aget.call(null, d, b >>> e & 31)), e -= 5
      }else {
        return d.arr
      }
    }
  }else {
    throw Error([cljs.core.str("No item "), cljs.core.str(b), cljs.core.str(" in transient vector of length "), cljs.core.str(a.cnt)].join(""));
  }
};
cljs.core.TransientVector = function(a, b, c, d) {
  this.cnt = a;
  this.shift = b;
  this.root = c;
  this.tail = d;
  this.cljs$lang$protocol_mask$partition0$ = 275;
  this.cljs$lang$protocol_mask$partition1$ = 22
};
cljs.core.TransientVector.cljs$lang$type = !0;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/TransientVector")
};
cljs.core.TransientVector.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(this, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.TransientVector.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$IIndexed$_nth$arity$3(a, b, null)
};
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return a.cljs$core$IIndexed$_nth$arity$3(a, b, c)
};
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  if(this.root.edit) {
    return cljs.core.array_for.call(null, a, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  var d;
  d = (d = 0 <= b) ? b < this.cnt : d;
  return d ? a.cljs$core$IIndexed$_nth$arity$2(a, b) : c
};
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  if(this.root.edit) {
    return this.cnt
  }
  throw Error("count after persistent!");
};
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = function(a, b, c) {
  var d = this;
  if(d.root.edit) {
    if(function() {
      var a = 0 <= b;
      return a ? b < d.cnt : a
    }()) {
      if(cljs.core.tail_off.call(null, a) <= b) {
        d.tail[b & 31] = c
      }else {
        var e = function g(a, e) {
          var j = cljs.core.tv_ensure_editable.call(null, d.root.edit, e);
          if(0 === a) {
            cljs.core.pv_aset.call(null, j, b & 31, c)
          }else {
            var k = b >>> a & 31;
            cljs.core.pv_aset.call(null, j, k, g.call(null, a - 5, cljs.core.pv_aget.call(null, j, k)))
          }
          return j
        }.call(null, d.shift, d.root);
        d.root = e
      }
      return a
    }
    if(b === d.cnt) {
      return a.cljs$core$ITransientCollection$_conj_BANG_$arity$2(a, c)
    }
    throw Error([cljs.core.str("Index "), cljs.core.str(b), cljs.core.str(" out of bounds for TransientVector of length"), cljs.core.str(d.cnt)].join(""));
  }
  throw Error("assoc! after persistent!");
};
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = function(a) {
  var b = this;
  if(b.root.edit) {
    if(0 === b.cnt) {
      throw Error("Can't pop empty vector");
    }
    if(1 === b.cnt) {
      b.cnt = 0
    }else {
      if(0 < (b.cnt - 1 & 31)) {
        b.cnt -= 1
      }else {
        var c = cljs.core.editable_array_for.call(null, a, b.cnt - 2), d = function() {
          var c = cljs.core.tv_pop_tail.call(null, a, b.shift, b.root);
          return null != c ? c : new cljs.core.VectorNode(b.root.edit, cljs.core.make_array.call(null, 32))
        }();
        if(function() {
          var a = 5 < b.shift;
          return a ? null == cljs.core.pv_aget.call(null, d, 1) : a
        }()) {
          var e = cljs.core.tv_ensure_editable.call(null, b.root.edit, cljs.core.pv_aget.call(null, d, 0));
          b.root = e;
          b.shift -= 5
        }else {
          b.root = d
        }
        b.cnt -= 1;
        b.tail = c
      }
    }
    return a
  }
  throw Error("pop! after persistent!");
};
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = function(a, b, c) {
  return a.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(a, b, c)
};
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(a, b) {
  if(this.root.edit) {
    if(32 > this.cnt - cljs.core.tail_off.call(null, a)) {
      this.tail[this.cnt & 31] = b
    }else {
      var c = new cljs.core.VectorNode(this.root.edit, this.tail), d = cljs.core.make_array.call(null, 32);
      d[0] = b;
      this.tail = d;
      if(this.cnt >>> 5 > 1 << this.shift) {
        var d = cljs.core.make_array.call(null, 32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = cljs.core.new_path.call(null, this.root.edit, this.shift, c);
        this.root = new cljs.core.VectorNode(this.root.edit, d);
        this.shift = e
      }else {
        this.root = cljs.core.tv_push_tail.call(null, a, this.shift, this.root, c)
      }
    }
    this.cnt += 1;
    return a
  }
  throw Error("conj! after persistent!");
};
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function(a) {
  if(this.root.edit) {
    this.root.edit = null;
    var a = this.cnt - cljs.core.tail_off.call(null, a), b = cljs.core.make_array.call(null, a);
    cljs.core.array_copy.call(null, this.tail, 0, b, 0, a);
    return new cljs.core.PersistentVector(null, this.cnt, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
cljs.core.TransientVector;
cljs.core.PersistentQueueSeq = function(a, b, c, d) {
  this.meta = a;
  this.front = b;
  this.rear = c;
  this.__hash = d;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 31850572
};
cljs.core.PersistentQueueSeq.cljs$lang$type = !0;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/PersistentQueueSeq")
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_coll.call(null, a)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons.call(null, b, a)
};
cljs.core.PersistentQueueSeq.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return a
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = function() {
  return cljs.core._first.call(null, this.front)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  var b = cljs.core.next.call(null, this.front);
  return b ? new cljs.core.PersistentQueueSeq(this.meta, b, this.rear, null) : null == this.rear ? a.cljs$core$IEmptyableCollection$_empty$arity$1(a) : new cljs.core.PersistentQueueSeq(this.meta, this.rear, null, null)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentQueueSeq(b, this.front, this.rear, this.__hash)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this.meta)
};
cljs.core.PersistentQueueSeq;
cljs.core.PersistentQueue = function(a, b, c, d, e) {
  this.meta = a;
  this.count = b;
  this.front = c;
  this.rear = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 31858766
};
cljs.core.PersistentQueue.cljs$lang$type = !0;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/PersistentQueue")
};
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_coll.call(null, a)
};
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  var c = this;
  return cljs.core.truth_(c.front) ? new cljs.core.PersistentQueue(c.meta, c.count + 1, c.front, cljs.core.conj.call(null, function() {
    var a = c.rear;
    return cljs.core.truth_(a) ? a : cljs.core.PersistentVector.EMPTY
  }(), b), null) : new cljs.core.PersistentQueue(c.meta, c.count + 1, cljs.core.conj.call(null, c.front, b), cljs.core.PersistentVector.EMPTY, null)
};
cljs.core.PersistentQueue.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  var a = this, b = cljs.core.seq.call(null, a.rear);
  return cljs.core.truth_(function() {
    var c = a.front;
    return cljs.core.truth_(c) ? c : b
  }()) ? new cljs.core.PersistentQueueSeq(null, a.front, cljs.core.seq.call(null, b), null) : null
};
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return this.count
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = function() {
  return cljs.core._first.call(null, this.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = function(a) {
  return cljs.core.truth_(this.front) ? (a = cljs.core.next.call(null, this.front)) ? new cljs.core.PersistentQueue(this.meta, this.count - 1, a, this.rear, null) : new cljs.core.PersistentQueue(this.meta, this.count - 1, cljs.core.seq.call(null, this.rear), cljs.core.PersistentVector.EMPTY, null) : a
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = function() {
  return cljs.core.first.call(null, this.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return cljs.core.rest.call(null, cljs.core.seq.call(null, a))
};
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentQueue(b, this.count, this.front, this.rear, this.__hash)
};
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.PersistentQueue.EMPTY
};
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = new cljs.core.PersistentQueue(null, 0, null, cljs.core.PersistentVector.EMPTY, 0);
cljs.core.NeverEquiv = function() {
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 2097152
};
cljs.core.NeverEquiv.cljs$lang$type = !0;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/NeverEquiv")
};
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = function() {
  return!1
};
cljs.core.NeverEquiv;
cljs.core.never_equiv = new cljs.core.NeverEquiv;
cljs.core.equiv_map = function(a, b) {
  return cljs.core.boolean$.call(null, cljs.core.map_QMARK_.call(null, b) ? cljs.core.count.call(null, a) === cljs.core.count.call(null, b) ? cljs.core.every_QMARK_.call(null, cljs.core.identity, cljs.core.map.call(null, function(a) {
    return cljs.core._EQ_.call(null, cljs.core._lookup.call(null, b, cljs.core.first.call(null, a), cljs.core.never_equiv), cljs.core.second.call(null, a))
  }, a)) : null : null)
};
cljs.core.scan_array = function(a, b, c) {
  for(var d = c.length, e = 0;;) {
    if(e < d) {
      if(b === c[e]) {
        return e
      }
      e += a
    }else {
      return null
    }
  }
};
cljs.core.obj_map_compare_keys = function(a, b) {
  var c = cljs.core.hash.call(null, a), d = cljs.core.hash.call(null, b);
  return c < d ? -1 : c > d ? 1 : 0
};
cljs.core.obj_map__GT_hash_map = function(a, b, c) {
  for(var d = a.keys, e = d.length, f = a.strobj, g = cljs.core.with_meta.call(null, cljs.core.PersistentHashMap.EMPTY, cljs.core.meta.call(null, a)), a = 0, g = cljs.core.transient$.call(null, g);;) {
    if(a < e) {
      var h = d[a], a = a + 1, g = cljs.core.assoc_BANG_.call(null, g, h, f[h])
    }else {
      return cljs.core.persistent_BANG_.call(null, cljs.core.assoc_BANG_.call(null, g, b, c))
    }
  }
};
cljs.core.obj_clone = function(a, b) {
  for(var c = {}, d = b.length, e = 0;;) {
    if(e < d) {
      var f = b[e];
      c[f] = a[f];
      e += 1
    }else {
      break
    }
  }
  return c
};
cljs.core.ObjMap = function(a, b, c, d, e) {
  this.meta = a;
  this.keys = b;
  this.strobj = c;
  this.update_count = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition1$ = 1;
  this.cljs$lang$protocol_mask$partition0$ = 15075087
};
cljs.core.ObjMap.cljs$lang$type = !0;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/ObjMap")
};
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(a) {
  return cljs.core.transient$.call(null, cljs.core.into.call(null, cljs.core.hash_map.call(null), a))
};
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_imap.call(null, a)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$ILookup$_lookup$arity$3(a, b, null)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  a = (a = goog.isString(b)) ? null != cljs.core.scan_array.call(null, 1, b, this.keys) : a;
  return a ? this.strobj[b] : c
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  if(goog.isString(b)) {
    var d;
    d = (d = this.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD) ? d : this.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD;
    if(d) {
      return cljs.core.obj_map__GT_hash_map.call(null, a, b, c)
    }
    if(null != cljs.core.scan_array.call(null, 1, b, this.keys)) {
      return a = cljs.core.obj_clone.call(null, this.strobj, this.keys), a[b] = c, new cljs.core.ObjMap(this.meta, this.keys, a, this.update_count + 1, null)
    }
    a = cljs.core.obj_clone.call(null, this.strobj, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new cljs.core.ObjMap(this.meta, d, a, this.update_count + 1, null)
  }
  return cljs.core.obj_map__GT_hash_map.call(null, a, b, c)
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(a, b) {
  var c;
  c = (c = goog.isString(b)) ? null != cljs.core.scan_array.call(null, 1, b, this.keys) : c;
  return c ? !0 : !1
};
cljs.core.ObjMap.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(this, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.ObjMap.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.vector_QMARK_.call(null, b) ? a.cljs$core$IAssociative$_assoc$arity$3(a, cljs.core._nth.call(null, b, 0), cljs.core._nth.call(null, b, 1)) : cljs.core.reduce.call(null, cljs.core._conj, a, b)
};
cljs.core.ObjMap.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  var a = this;
  return 0 < a.keys.length ? cljs.core.map.call(null, function(b) {
    return cljs.core.vector.call(null, b, a.strobj[b])
  }, a.keys.sort(cljs.core.obj_map_compare_keys)) : null
};
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return this.keys.length
};
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_map.call(null, a, b)
};
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.ObjMap(b, this.keys, this.strobj, this.update_count, this.__hash)
};
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.ObjMap.EMPTY, this.meta)
};
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(a, b) {
  var c;
  c = (c = goog.isString(b)) ? null != cljs.core.scan_array.call(null, 1, b, this.keys) : c;
  if(c) {
    c = this.keys.slice();
    var d = cljs.core.obj_clone.call(null, this.strobj, this.keys);
    c.splice(cljs.core.scan_array.call(null, 1, b, c), 1);
    cljs.core.js_delete.call(null, d, b);
    return new cljs.core.ObjMap(this.meta, c, d, this.update_count + 1, null)
  }
  return a
};
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = new cljs.core.ObjMap(null, [], {}, 0, 0);
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = function(a, b) {
  return new cljs.core.ObjMap(null, a, b, 0, null)
};
cljs.core.HashMap = function(a, b, c, d) {
  this.meta = a;
  this.count = b;
  this.hashobj = c;
  this.__hash = d;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 15075087
};
cljs.core.HashMap.cljs$lang$type = !0;
cljs.core.HashMap.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/HashMap")
};
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_imap.call(null, a)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$ILookup$_lookup$arity$3(a, b, null)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  a = this.hashobj[cljs.core.hash.call(null, b)];
  b = cljs.core.truth_(a) ? cljs.core.scan_array.call(null, 2, b, a) : null;
  return cljs.core.truth_(b) ? a[b + 1] : c
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  var a = cljs.core.hash.call(null, b), d = this.hashobj[a];
  if(cljs.core.truth_(d)) {
    var d = d.slice(), e = goog.object.clone(this.hashobj);
    e[a] = d;
    a = cljs.core.scan_array.call(null, 2, b, d);
    if(cljs.core.truth_(a)) {
      return d[a + 1] = c, new cljs.core.HashMap(this.meta, this.count, e, null)
    }
    d.push(b, c);
    return new cljs.core.HashMap(this.meta, this.count + 1, e, null)
  }
  d = goog.object.clone(this.hashobj);
  d[a] = [b, c];
  return new cljs.core.HashMap(this.meta, this.count + 1, d, null)
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(a, b) {
  var c = this.hashobj[cljs.core.hash.call(null, b)], c = cljs.core.truth_(c) ? cljs.core.scan_array.call(null, 2, b, c) : null;
  return cljs.core.truth_(c) ? !0 : !1
};
cljs.core.HashMap.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(this, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.HashMap.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.vector_QMARK_.call(null, b) ? a.cljs$core$IAssociative$_assoc$arity$3(a, cljs.core._nth.call(null, b, 0), cljs.core._nth.call(null, b, 1)) : cljs.core.reduce.call(null, cljs.core._conj, a, b)
};
cljs.core.HashMap.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  var a = this;
  if(0 < a.count) {
    var b = cljs.core.js_keys.call(null, a.hashobj).sort();
    return cljs.core.mapcat.call(null, function(b) {
      return cljs.core.map.call(null, cljs.core.vec, cljs.core.partition.call(null, 2, a.hashobj[b]))
    }, b)
  }
  return null
};
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return this.count
};
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_map.call(null, a, b)
};
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.HashMap(b, this.count, this.hashobj, this.__hash)
};
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.HashMap.EMPTY, this.meta)
};
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(a, b) {
  var c = cljs.core.hash.call(null, b), d = this.hashobj[c], e = cljs.core.truth_(d) ? cljs.core.scan_array.call(null, 2, b, d) : null;
  if(cljs.core.not.call(null, e)) {
    return a
  }
  var f = goog.object.clone(this.hashobj);
  3 > d.length ? cljs.core.js_delete.call(null, f, c) : (d = d.slice(), d.splice(e, 2), f[c] = d);
  return new cljs.core.HashMap(this.meta, this.count - 1, f, null)
};
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = new cljs.core.HashMap(null, 0, {}, 0);
cljs.core.HashMap.fromArrays = function(a, b) {
  for(var c = a.length, d = 0, e = cljs.core.HashMap.EMPTY;;) {
    if(d < c) {
      var f = d + 1, e = cljs.core.assoc.call(null, e, a[d], b[d]), d = f
    }else {
      return e
    }
  }
};
cljs.core.array_map_index_of = function(a, b) {
  for(var c = a.arr, d = c.length, e = 0;;) {
    if(d <= e) {
      return-1
    }
    if(cljs.core._EQ_.call(null, c[e], b)) {
      return e
    }
    e += 2
  }
};
cljs.core.PersistentArrayMap = function(a, b, c, d) {
  this.meta = a;
  this.cnt = b;
  this.arr = c;
  this.__hash = d;
  this.cljs$lang$protocol_mask$partition1$ = 1;
  this.cljs$lang$protocol_mask$partition0$ = 16123663
};
cljs.core.PersistentArrayMap.cljs$lang$type = !0;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/PersistentArrayMap")
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function() {
  return new cljs.core.TransientArrayMap({}, this.arr.length, this.arr.slice())
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_imap.call(null, a)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$ILookup$_lookup$arity$3(a, b, null)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  a = cljs.core.array_map_index_of.call(null, a, b);
  return-1 === a ? c : this.arr[a + 1]
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  var d = this, e = cljs.core.array_map_index_of.call(null, a, b);
  return-1 === e ? d.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD ? new cljs.core.PersistentArrayMap(d.meta, d.cnt + 1, function() {
    var a = d.arr.slice();
    a.push(b);
    a.push(c);
    return a
  }(), null) : cljs.core.persistent_BANG_.call(null, cljs.core.assoc_BANG_.call(null, cljs.core.transient$.call(null, cljs.core.into.call(null, cljs.core.PersistentHashMap.EMPTY, a)), b, c)) : c === d.arr[e + 1] ? a : new cljs.core.PersistentArrayMap(d.meta, d.cnt, function() {
    var a = d.arr.slice();
    a[e + 1] = c;
    return a
  }(), null)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(a, b) {
  return-1 !== cljs.core.array_map_index_of.call(null, a, b)
};
cljs.core.PersistentArrayMap.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(this, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.PersistentArrayMap.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(a, b, c) {
  for(var a = this.arr.length, d = 0;;) {
    if(d < a) {
      c = b.call(null, c, this.arr[d], this.arr[d + 1]);
      if(cljs.core.reduced_QMARK_.call(null, c)) {
        return cljs.core.deref.call(null, c)
      }
      d += 2
    }else {
      return null
    }
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.vector_QMARK_.call(null, b) ? a.cljs$core$IAssociative$_assoc$arity$3(a, cljs.core._nth.call(null, b, 0), cljs.core._nth.call(null, b, 1)) : cljs.core.reduce.call(null, cljs.core._conj, a, b)
};
cljs.core.PersistentArrayMap.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  var a = this;
  if(0 < a.cnt) {
    var b = a.arr.length;
    return function d(e) {
      return new cljs.core.LazySeq(null, !1, function() {
        return e < b ? cljs.core.cons.call(null, cljs.core.PersistentVector.fromArray([a.arr[e], a.arr[e + 1]], true), d.call(null, e + 2)) : null
      }, null)
    }.call(null, 0)
  }
  return null
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return this.cnt
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_map.call(null, a, b)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentArrayMap(b, this.cnt, this.arr, this.__hash)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core._with_meta.call(null, cljs.core.PersistentArrayMap.EMPTY, this.meta)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(a, b) {
  if(0 <= cljs.core.array_map_index_of.call(null, a, b)) {
    var c = this.arr.length, d = c - 2;
    if(0 === d) {
      return a.cljs$core$IEmptyableCollection$_empty$arity$1(a)
    }
    for(var d = cljs.core.make_array.call(null, d), e = 0, f = 0;;) {
      if(e >= c) {
        return new cljs.core.PersistentArrayMap(this.meta, this.cnt - 1, d, null)
      }
      cljs.core._EQ_.call(null, b, this.arr[e]) || (d[f] = this.arr[e], d[f + 1] = this.arr[e + 1], f += 2);
      e += 2
    }
  }else {
    return a
  }
};
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = new cljs.core.PersistentArrayMap(null, 0, [], null);
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = function(a, b) {
  for(var c = cljs.core.count.call(null, a), d = 0, e = cljs.core.transient$.call(null, cljs.core.PersistentArrayMap.EMPTY);;) {
    if(d < c) {
      var f = d + 1, e = cljs.core.assoc_BANG_.call(null, e, a[d], b[d]), d = f
    }else {
      return cljs.core.persistent_BANG_.call(null, e)
    }
  }
};
cljs.core.TransientArrayMap = function(a, b, c) {
  this.editable_QMARK_ = a;
  this.len = b;
  this.arr = c;
  this.cljs$lang$protocol_mask$partition1$ = 14;
  this.cljs$lang$protocol_mask$partition0$ = 258
};
cljs.core.TransientArrayMap.cljs$lang$type = !0;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/TransientArrayMap")
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = function(a, b) {
  if(cljs.core.truth_(this.editable_QMARK_)) {
    var c = cljs.core.array_map_index_of.call(null, a, b);
    0 <= c && (this.arr[c] = this.arr[this.len - 2], this.arr[c + 1] = this.arr[this.len - 1], c = this.arr, c.pop(), c.pop(), c, this.len -= 2);
    return a
  }
  throw Error("dissoc! after persistent!");
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = function(a, b, c) {
  if(cljs.core.truth_(this.editable_QMARK_)) {
    var d = cljs.core.array_map_index_of.call(null, a, b);
    if(-1 === d) {
      return this.len + 2 <= 2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD ? (this.len += 2, this.arr.push(b), this.arr.push(c), a) : cljs.core.assoc_BANG_.call(null, cljs.core.array__GT_transient_hash_map.call(null, this.len, this.arr), b, c)
    }
    c !== this.arr[d + 1] && (this.arr[d + 1] = c);
    return a
  }
  throw Error("assoc! after persistent!");
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(a, b) {
  if(cljs.core.truth_(this.editable_QMARK_)) {
    var c;
    b ? (c = (c = b.cljs$lang$protocol_mask$partition0$ & 2048) ? c : b.cljs$core$IMapEntry$, c = c ? !0 : b.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IMapEntry, b)) : c = cljs.core.type_satisfies_.call(null, cljs.core.IMapEntry, b);
    if(c) {
      return a.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(a, cljs.core.key.call(null, b), cljs.core.val.call(null, b))
    }
    c = cljs.core.seq.call(null, b);
    for(var d = a;;) {
      var e = cljs.core.first.call(null, c);
      if(cljs.core.truth_(e)) {
        c = cljs.core.next.call(null, c), d = d.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(d, cljs.core.key.call(null, e), cljs.core.val.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function() {
  if(cljs.core.truth_(this.editable_QMARK_)) {
    return this.editable_QMARK_ = !1, new cljs.core.PersistentArrayMap(null, cljs.core.quot.call(null, this.len, 2), this.arr, null)
  }
  throw Error("persistent! called twice");
};
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$ILookup$_lookup$arity$3(a, b, null)
};
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  if(cljs.core.truth_(this.editable_QMARK_)) {
    return a = cljs.core.array_map_index_of.call(null, a, b), -1 === a ? c : this.arr[a + 1]
  }
  throw Error("lookup after persistent!");
};
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  if(cljs.core.truth_(this.editable_QMARK_)) {
    return cljs.core.quot.call(null, this.len, 2)
  }
  throw Error("count after persistent!");
};
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = function(a, b) {
  for(var c = cljs.core.transient$.call(null, cljs.core.ObjMap.EMPTY), d = 0;;) {
    if(d < a) {
      c = cljs.core.assoc_BANG_.call(null, c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
};
cljs.core.Box = function(a) {
  this.val = a
};
cljs.core.Box.cljs$lang$type = !0;
cljs.core.Box.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/Box")
};
cljs.core.Box;
cljs.core.key_test = function(a, b) {
  return goog.isString(a) ? a === b : cljs.core._EQ_.call(null, a, b)
};
cljs.core.mask = function(a, b) {
  return a >>> b & 31
};
cljs.core.clone_and_set = function() {
  var a = null, b = function(a, b, c) {
    a = a.slice();
    a[b] = c;
    return a
  }, c = function(a, b, c, g, h) {
    a = a.slice();
    a[b] = c;
    a[g] = h;
    return a
  }, a = function(a, e, f, g, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, a, e, f);
      case 5:
        return c.call(this, a, e, f, g, h)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$3 = b;
  a.cljs$lang$arity$5 = c;
  return a
}();
cljs.core.remove_pair = function(a, b) {
  var c = cljs.core.make_array.call(null, a.length - 2);
  cljs.core.array_copy.call(null, a, 0, c, 0, 2 * b);
  cljs.core.array_copy.call(null, a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
};
cljs.core.bitmap_indexed_node_index = function(a, b) {
  return cljs.core.bit_count.call(null, a & b - 1)
};
cljs.core.bitpos = function(a, b) {
  return 1 << (a >>> b & 31)
};
cljs.core.edit_and_set = function() {
  var a = null, b = function(a, b, c, g) {
    a = a.ensure_editable(b);
    a.arr[c] = g;
    return a
  }, c = function(a, b, c, g, h, i) {
    a = a.ensure_editable(b);
    a.arr[c] = g;
    a.arr[h] = i;
    return a
  }, a = function(a, e, f, g, h, i) {
    switch(arguments.length) {
      case 4:
        return b.call(this, a, e, f, g);
      case 6:
        return c.call(this, a, e, f, g, h, i)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$4 = b;
  a.cljs$lang$arity$6 = c;
  return a
}();
cljs.core.inode_kv_reduce = function(a, b, c) {
  for(var d = a.length, e = 0;;) {
    if(e < d) {
      var f = a[e];
      null != f ? c = b.call(null, c, f, a[e + 1]) : (f = a[e + 1], c = null != f ? f.kv_reduce(b, c) : c);
      if(cljs.core.reduced_QMARK_.call(null, c)) {
        return cljs.core.deref.call(null, c)
      }
      e += 2
    }else {
      return c
    }
  }
};
cljs.core.BitmapIndexedNode = function(a, b, c) {
  this.edit = a;
  this.bitmap = b;
  this.arr = c
};
cljs.core.BitmapIndexedNode.cljs$lang$type = !0;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/BitmapIndexedNode")
};
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = function(a, b, c) {
  if(this.bitmap === b) {
    return null
  }
  var a = this.ensure_editable(a), d = a.arr, e = d.length;
  a.bitmap ^= b;
  cljs.core.array_copy.call(null, d, 2 * (c + 1), d, 2 * c, e - 2 * (c + 1));
  d[e - 2] = null;
  d[e - 1] = null;
  return a
};
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), h = cljs.core.bitmap_indexed_node_index.call(null, this.bitmap, g);
  if(0 === (this.bitmap & g)) {
    var i = cljs.core.bit_count.call(null, this.bitmap);
    if(2 * i < this.arr.length) {
      return a = this.ensure_editable(a), b = a.arr, f.val = !0, cljs.core.array_copy_downward.call(null, b, 2 * h, b, 2 * (h + 1), 2 * (i - h)), b[2 * h] = d, b[2 * h + 1] = e, a.bitmap |= g, a
    }
    if(16 <= i) {
      h = cljs.core.make_array.call(null, 32);
      h[c >>> b & 31] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(a, b + 5, c, d, e, f);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.bitmap >>> d & 1) && (h[d] = null != this.arr[e] ? cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(a, b + 5, cljs.core.hash.call(null, this.arr[e]), this.arr[e], this.arr[e + 1], f) : this.arr[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new cljs.core.ArrayNode(a, i + 1, h)
    }
    b = cljs.core.make_array.call(null, 2 * (i + 4));
    cljs.core.array_copy.call(null, this.arr, 0, b, 0, 2 * h);
    b[2 * h] = d;
    b[2 * h + 1] = e;
    cljs.core.array_copy.call(null, this.arr, 2 * h, b, 2 * (h + 1), 2 * (i - h));
    f.val = !0;
    f = this.ensure_editable(a);
    f.arr = b;
    f.bitmap |= g;
    return f
  }
  g = this.arr[2 * h];
  i = this.arr[2 * h + 1];
  if(null == g) {
    return f = i.inode_assoc_BANG_(a, b + 5, c, d, e, f), f === i ? this : cljs.core.edit_and_set.call(null, this, a, 2 * h + 1, f)
  }
  if(cljs.core.key_test.call(null, d, g)) {
    return e === i ? this : cljs.core.edit_and_set.call(null, this, a, 2 * h + 1, e)
  }
  f.val = !0;
  return cljs.core.edit_and_set.call(null, this, a, 2 * h, null, 2 * h + 1, cljs.core.create_node.call(null, a, b + 5, g, i, c, d, e))
};
cljs.core.BitmapIndexedNode.prototype.inode_seq = function() {
  return cljs.core.create_inode_seq.call(null, this.arr)
};
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = function(a, b, c, d, e) {
  var f = 1 << (c >>> b & 31);
  if(0 === (this.bitmap & f)) {
    return this
  }
  var g = cljs.core.bitmap_indexed_node_index.call(null, this.bitmap, f), h = this.arr[2 * g], i = this.arr[2 * g + 1];
  return null == h ? (b = i.inode_without_BANG_(a, b + 5, c, d, e), b === i ? this : null != b ? cljs.core.edit_and_set.call(null, this, a, 2 * g + 1, b) : this.bitmap === f ? null : this.edit_and_remove_pair(a, f, g)) : cljs.core.key_test.call(null, d, h) ? (e[0] = !0, this.edit_and_remove_pair(a, f, g)) : this
};
cljs.core.BitmapIndexedNode.prototype.ensure_editable = function(a) {
  if(a === this.edit) {
    return this
  }
  var b = cljs.core.bit_count.call(null, this.bitmap), c = cljs.core.make_array.call(null, 0 > b ? 4 : 2 * (b + 1));
  cljs.core.array_copy.call(null, this.arr, 0, c, 0, 2 * b);
  return new cljs.core.BitmapIndexedNode(a, this.bitmap, c)
};
cljs.core.BitmapIndexedNode.prototype.kv_reduce = function(a, b) {
  return cljs.core.inode_kv_reduce.call(null, this.arr, a, b)
};
cljs.core.BitmapIndexedNode.prototype.inode_find = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.bitmap & e)) {
    return d
  }
  var f = cljs.core.bitmap_indexed_node_index.call(null, this.bitmap, e), e = this.arr[2 * f], f = this.arr[2 * f + 1];
  return null == e ? f.inode_find(a + 5, b, c, d) : cljs.core.key_test.call(null, c, e) ? cljs.core.PersistentVector.fromArray([e, f], !0) : d
};
cljs.core.BitmapIndexedNode.prototype.inode_without = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.bitmap & d)) {
    return this
  }
  var e = cljs.core.bitmap_indexed_node_index.call(null, this.bitmap, d), f = this.arr[2 * e], g = this.arr[2 * e + 1];
  return null == f ? (a = g.inode_without(a + 5, b, c), a === g ? this : null != a ? new cljs.core.BitmapIndexedNode(null, this.bitmap, cljs.core.clone_and_set.call(null, this.arr, 2 * e + 1, a)) : this.bitmap === d ? null : new cljs.core.BitmapIndexedNode(null, this.bitmap ^ d, cljs.core.remove_pair.call(null, this.arr, e))) : cljs.core.key_test.call(null, c, f) ? new cljs.core.BitmapIndexedNode(null, this.bitmap ^ d, cljs.core.remove_pair.call(null, this.arr, e)) : this
};
cljs.core.BitmapIndexedNode.prototype.inode_assoc = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = cljs.core.bitmap_indexed_node_index.call(null, this.bitmap, f);
  if(0 === (this.bitmap & f)) {
    var h = cljs.core.bit_count.call(null, this.bitmap);
    if(16 <= h) {
      g = cljs.core.make_array.call(null, 32);
      g[b >>> a & 31] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.bitmap >>> c & 1) && (g[c] = null != this.arr[d] ? cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(a + 5, cljs.core.hash.call(null, this.arr[d]), this.arr[d], this.arr[d + 1], e) : this.arr[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new cljs.core.ArrayNode(null, h + 1, g)
    }
    a = cljs.core.make_array.call(null, 2 * (h + 1));
    cljs.core.array_copy.call(null, this.arr, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    cljs.core.array_copy.call(null, this.arr, 2 * g, a, 2 * (g + 1), 2 * (h - g));
    e.val = !0;
    return new cljs.core.BitmapIndexedNode(null, this.bitmap | f, a)
  }
  f = this.arr[2 * g];
  h = this.arr[2 * g + 1];
  if(null == f) {
    return e = h.inode_assoc(a + 5, b, c, d, e), e === h ? this : new cljs.core.BitmapIndexedNode(null, this.bitmap, cljs.core.clone_and_set.call(null, this.arr, 2 * g + 1, e))
  }
  if(cljs.core.key_test.call(null, c, f)) {
    return d === h ? this : new cljs.core.BitmapIndexedNode(null, this.bitmap, cljs.core.clone_and_set.call(null, this.arr, 2 * g + 1, d))
  }
  e.val = !0;
  return new cljs.core.BitmapIndexedNode(null, this.bitmap, cljs.core.clone_and_set.call(null, this.arr, 2 * g, null, 2 * g + 1, cljs.core.create_node.call(null, a + 5, f, h, b, c, d)))
};
cljs.core.BitmapIndexedNode.prototype.inode_lookup = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.bitmap & e)) {
    return d
  }
  var f = cljs.core.bitmap_indexed_node_index.call(null, this.bitmap, e), e = this.arr[2 * f], f = this.arr[2 * f + 1];
  return null == e ? f.inode_lookup(a + 5, b, c, d) : cljs.core.key_test.call(null, c, e) ? f : d
};
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = new cljs.core.BitmapIndexedNode(null, 0, cljs.core.make_array.call(null, 0));
cljs.core.pack_array_node = function(a, b, c) {
  for(var d = a.arr, a = 2 * (a.cnt - 1), e = cljs.core.make_array.call(null, a), f = 0, g = 1, h = 0;;) {
    if(f < a) {
      var i;
      i = (i = f !== c) ? null != d[f] : i;
      i && (e[g] = d[f], g += 2, h |= 1 << f);
      f += 1
    }else {
      return new cljs.core.BitmapIndexedNode(b, h, e)
    }
  }
};
cljs.core.ArrayNode = function(a, b, c) {
  this.edit = a;
  this.cnt = b;
  this.arr = c
};
cljs.core.ArrayNode.cljs$lang$type = !0;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/ArrayNode")
};
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, h = this.arr[g];
  if(null == h) {
    return a = cljs.core.edit_and_set.call(null, this, a, g, cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(a, b + 5, c, d, e, f)), a.cnt += 1, a
  }
  b = h.inode_assoc_BANG_(a, b + 5, c, d, e, f);
  return b === h ? this : cljs.core.edit_and_set.call(null, this, a, g, b)
};
cljs.core.ArrayNode.prototype.inode_seq = function() {
  return cljs.core.create_array_node_seq.call(null, this.arr)
};
cljs.core.ArrayNode.prototype.inode_without_BANG_ = function(a, b, c, d, e) {
  var f = c >>> b & 31, g = this.arr[f];
  if(null == g) {
    return this
  }
  b = g.inode_without_BANG_(a, b + 5, c, d, e);
  if(b === g) {
    return this
  }
  if(null == b) {
    if(8 >= this.cnt) {
      return cljs.core.pack_array_node.call(null, this, a, f)
    }
    a = cljs.core.edit_and_set.call(null, this, a, f, b);
    a.cnt -= 1;
    return a
  }
  return cljs.core.edit_and_set.call(null, this, a, f, b)
};
cljs.core.ArrayNode.prototype.ensure_editable = function(a) {
  return a === this.edit ? this : new cljs.core.ArrayNode(a, this.cnt, this.arr.slice())
};
cljs.core.ArrayNode.prototype.kv_reduce = function(a, b) {
  for(var c = this.arr.length, d = 0, e = b;;) {
    if(d < c) {
      var f = this.arr[d];
      if(null != f) {
        e = f.kv_reduce(a, e);
        if(cljs.core.reduced_QMARK_.call(null, e)) {
          return cljs.core.deref.call(null, e)
        }
        d += 1
      }else {
        return null
      }
    }else {
      return e
    }
  }
};
cljs.core.ArrayNode.prototype.inode_find = function(a, b, c, d) {
  var e = this.arr[b >>> a & 31];
  return null != e ? e.inode_find(a + 5, b, c, d) : d
};
cljs.core.ArrayNode.prototype.inode_without = function(a, b, c) {
  var d = b >>> a & 31, e = this.arr[d];
  return null != e ? (a = e.inode_without(a + 5, b, c), a === e ? this : null == a ? 8 >= this.cnt ? cljs.core.pack_array_node.call(null, this, null, d) : new cljs.core.ArrayNode(null, this.cnt - 1, cljs.core.clone_and_set.call(null, this.arr, d, a)) : new cljs.core.ArrayNode(null, this.cnt, cljs.core.clone_and_set.call(null, this.arr, d, a))) : this
};
cljs.core.ArrayNode.prototype.inode_assoc = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.arr[f];
  if(null == g) {
    return new cljs.core.ArrayNode(null, this.cnt + 1, cljs.core.clone_and_set.call(null, this.arr, f, cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(a + 5, b, c, d, e)))
  }
  a = g.inode_assoc(a + 5, b, c, d, e);
  return a === g ? this : new cljs.core.ArrayNode(null, this.cnt, cljs.core.clone_and_set.call(null, this.arr, f, a))
};
cljs.core.ArrayNode.prototype.inode_lookup = function(a, b, c, d) {
  var e = this.arr[b >>> a & 31];
  return null != e ? e.inode_lookup(a + 5, b, c, d) : d
};
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = function(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(cljs.core.key_test.call(null, c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
};
cljs.core.HashCollisionNode = function(a, b, c, d) {
  this.edit = a;
  this.collision_hash = b;
  this.cnt = c;
  this.arr = d
};
cljs.core.HashCollisionNode.cljs$lang$type = !0;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/HashCollisionNode")
};
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = function(a, b, c, d, e, f) {
  if(c === this.collision_hash) {
    b = cljs.core.hash_collision_node_find_index.call(null, this.arr, this.cnt, d);
    if(-1 === b) {
      if(this.arr.length > 2 * this.cnt) {
        return a = cljs.core.edit_and_set.call(null, this, a, 2 * this.cnt, d, 2 * this.cnt + 1, e), f.val = !0, a.cnt += 1, a
      }
      b = this.arr.length;
      c = cljs.core.make_array.call(null, b + 2);
      cljs.core.array_copy.call(null, this.arr, 0, c, 0, b);
      c[b] = d;
      c[b + 1] = e;
      f.val = !0;
      return this.ensure_editable_array(a, this.cnt + 1, c)
    }
    return this.arr[b + 1] === e ? this : cljs.core.edit_and_set.call(null, this, a, b + 1, e)
  }
  return(new cljs.core.BitmapIndexedNode(a, 1 << (this.collision_hash >>> b & 31), [null, this, null, null])).inode_assoc_BANG_(a, b, c, d, e, f)
};
cljs.core.HashCollisionNode.prototype.inode_seq = function() {
  return cljs.core.create_inode_seq.call(null, this.arr)
};
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = function(a, b, c, d, e) {
  b = cljs.core.hash_collision_node_find_index.call(null, this.arr, this.cnt, d);
  if(-1 === b) {
    return this
  }
  e[0] = !0;
  if(1 === this.cnt) {
    return null
  }
  a = this.ensure_editable(a);
  e = a.arr;
  e[b] = e[2 * this.cnt - 2];
  e[b + 1] = e[2 * this.cnt - 1];
  e[2 * this.cnt - 1] = null;
  e[2 * this.cnt - 2] = null;
  a.cnt -= 1;
  return a
};
cljs.core.HashCollisionNode.prototype.ensure_editable = function(a) {
  if(a === this.edit) {
    return this
  }
  var b = cljs.core.make_array.call(null, 2 * (this.cnt + 1));
  cljs.core.array_copy.call(null, this.arr, 0, b, 0, 2 * this.cnt);
  return new cljs.core.HashCollisionNode(a, this.collision_hash, this.cnt, b)
};
cljs.core.HashCollisionNode.prototype.kv_reduce = function(a, b) {
  return cljs.core.inode_kv_reduce.call(null, this.arr, a, b)
};
cljs.core.HashCollisionNode.prototype.inode_find = function(a, b, c, d) {
  a = cljs.core.hash_collision_node_find_index.call(null, this.arr, this.cnt, c);
  return 0 > a ? d : cljs.core.key_test.call(null, c, this.arr[a]) ? cljs.core.PersistentVector.fromArray([this.arr[a], this.arr[a + 1]], !0) : d
};
cljs.core.HashCollisionNode.prototype.inode_without = function(a, b, c) {
  a = cljs.core.hash_collision_node_find_index.call(null, this.arr, this.cnt, c);
  return-1 === a ? this : 1 === this.cnt ? null : new cljs.core.HashCollisionNode(null, this.collision_hash, this.cnt - 1, cljs.core.remove_pair.call(null, this.arr, cljs.core.quot.call(null, a, 2)))
};
cljs.core.HashCollisionNode.prototype.inode_assoc = function(a, b, c, d, e) {
  return b === this.collision_hash ? (a = cljs.core.hash_collision_node_find_index.call(null, this.arr, this.cnt, c), -1 === a ? (a = this.arr.length, b = cljs.core.make_array.call(null, a + 2), cljs.core.array_copy.call(null, this.arr, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.val = !0, new cljs.core.HashCollisionNode(null, this.collision_hash, this.cnt + 1, b)) : cljs.core._EQ_.call(null, this.arr[a], d) ? this : new cljs.core.HashCollisionNode(null, this.collision_hash, this.cnt, cljs.core.clone_and_set.call(null, 
  this.arr, a + 1, d))) : (new cljs.core.BitmapIndexedNode(null, 1 << (this.collision_hash >>> a & 31), [null, this])).inode_assoc(a, b, c, d, e)
};
cljs.core.HashCollisionNode.prototype.inode_lookup = function(a, b, c, d) {
  a = cljs.core.hash_collision_node_find_index.call(null, this.arr, this.cnt, c);
  return 0 > a ? d : cljs.core.key_test.call(null, c, this.arr[a]) ? this.arr[a + 1] : d
};
cljs.core.HashCollisionNode.prototype.ensure_editable_array = function(a, b, c) {
  return a === this.edit ? (this.arr = c, this.cnt = b, this) : new cljs.core.HashCollisionNode(this.edit, this.collision_hash, b, c)
};
cljs.core.HashCollisionNode;
cljs.core.create_node = function() {
  var a = null, b = function(a, b, c, g, h, i) {
    var j = cljs.core.hash.call(null, b);
    if(j === g) {
      return new cljs.core.HashCollisionNode(null, j, 2, [b, c, h, i])
    }
    var k = new cljs.core.Box(!1);
    return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(a, j, b, c, k).inode_assoc(a, g, h, i, k)
  }, c = function(a, b, c, g, h, i, j) {
    var k = cljs.core.hash.call(null, c);
    if(k === h) {
      return new cljs.core.HashCollisionNode(null, k, 2, [c, g, i, j])
    }
    var m = new cljs.core.Box(!1);
    return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(a, b, k, c, g, m).inode_assoc_BANG_(a, b, h, i, j, m)
  }, a = function(a, e, f, g, h, i, j) {
    switch(arguments.length) {
      case 6:
        return b.call(this, a, e, f, g, h, i);
      case 7:
        return c.call(this, a, e, f, g, h, i, j)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$6 = b;
  a.cljs$lang$arity$7 = c;
  return a
}();
cljs.core.NodeSeq = function(a, b, c, d, e) {
  this.meta = a;
  this.nodes = b;
  this.i = c;
  this.s = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 31850572
};
cljs.core.NodeSeq.cljs$lang$type = !0;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/NodeSeq")
};
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_coll.call(null, a)
};
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons.call(null, b, a)
};
cljs.core.NodeSeq.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return a
};
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = function() {
  return null == this.s ? cljs.core.PersistentVector.fromArray([this.nodes[this.i], this.nodes[this.i + 1]], !0) : cljs.core.first.call(null, this.s)
};
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function() {
  return null == this.s ? cljs.core.create_inode_seq.call(null, this.nodes, this.i + 2, null) : cljs.core.create_inode_seq.call(null, this.nodes, this.i, cljs.core.next.call(null, this.s))
};
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.NodeSeq(b, this.nodes, this.i, this.s, this.__hash)
};
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this.meta)
};
cljs.core.NodeSeq;
cljs.core.create_inode_seq = function() {
  var a = null, b = function(b) {
    return a.call(null, b, 0, null)
  }, c = function(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new cljs.core.NodeSeq(null, a, b, null, null)
          }
          var g = a[b + 1];
          if(cljs.core.truth_(g) && (g = g.inode_seq(), cljs.core.truth_(g))) {
            return new cljs.core.NodeSeq(null, a, b + 2, g, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new cljs.core.NodeSeq(null, a, b, c, null)
    }
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.ArrayNodeSeq = function(a, b, c, d, e) {
  this.meta = a;
  this.nodes = b;
  this.i = c;
  this.s = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 31850572
};
cljs.core.ArrayNodeSeq.cljs$lang$type = !0;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/ArrayNodeSeq")
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_coll.call(null, a)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons.call(null, b, a)
};
cljs.core.ArrayNodeSeq.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return a
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = function() {
  return cljs.core.first.call(null, this.s)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function() {
  return cljs.core.create_array_node_seq.call(null, null, this.nodes, this.i, cljs.core.next.call(null, this.s))
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.ArrayNodeSeq(b, this.nodes, this.i, this.s, this.__hash)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this.meta)
};
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = function() {
  var a = null, b = function(b) {
    return a.call(null, null, b, 0, null)
  }, c = function(a, b, c, g) {
    if(null == g) {
      for(g = b.length;;) {
        if(c < g) {
          var h = b[c];
          if(cljs.core.truth_(h) && (h = h.inode_seq(), cljs.core.truth_(h))) {
            return new cljs.core.ArrayNodeSeq(a, b, c + 1, h, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new cljs.core.ArrayNodeSeq(a, b, c, g, null)
    }
  }, a = function(a, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 4:
        return c.call(this, a, e, f, g)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$4 = c;
  return a
}();
cljs.core.PersistentHashMap = function(a, b, c, d, e, f) {
  this.meta = a;
  this.cnt = b;
  this.root = c;
  this.has_nil_QMARK_ = d;
  this.nil_val = e;
  this.__hash = f;
  this.cljs$lang$protocol_mask$partition1$ = 1;
  this.cljs$lang$protocol_mask$partition0$ = 16123663
};
cljs.core.PersistentHashMap.cljs$lang$type = !0;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/PersistentHashMap")
};
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function() {
  return new cljs.core.TransientHashMap({}, this.root, this.cnt, this.has_nil_QMARK_, this.nil_val)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_imap.call(null, a)
};
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$ILookup$_lookup$arity$3(a, b, null)
};
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return null == b ? this.has_nil_QMARK_ ? this.nil_val : c : null == this.root ? c : this.root.inode_lookup(0, cljs.core.hash.call(null, b), b, c)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  if(null == b) {
    var d;
    d = (d = this.has_nil_QMARK_) ? c === this.nil_val : d;
    return d ? a : new cljs.core.PersistentHashMap(this.meta, this.has_nil_QMARK_ ? this.cnt : this.cnt + 1, this.root, !0, c, null)
  }
  d = new cljs.core.Box(!1);
  c = (null == this.root ? cljs.core.BitmapIndexedNode.EMPTY : this.root).inode_assoc(0, cljs.core.hash.call(null, b), b, c, d);
  return c === this.root ? a : new cljs.core.PersistentHashMap(this.meta, d.val ? this.cnt + 1 : this.cnt, c, this.has_nil_QMARK_, this.nil_val, null)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(a, b) {
  return null == b ? this.has_nil_QMARK_ : null == this.root ? !1 : this.root.inode_lookup(0, cljs.core.hash.call(null, b), b, cljs.core.lookup_sentinel) !== cljs.core.lookup_sentinel
};
cljs.core.PersistentHashMap.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(this, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.PersistentHashMap.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(a, b, c) {
  a = this.has_nil_QMARK_ ? b.call(null, c, null, this.nil_val) : c;
  return cljs.core.reduced_QMARK_.call(null, a) ? cljs.core.deref.call(null, a) : null != this.root ? this.root.kv_reduce(b, a) : a
};
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.vector_QMARK_.call(null, b) ? a.cljs$core$IAssociative$_assoc$arity$3(a, cljs.core._nth.call(null, b, 0), cljs.core._nth.call(null, b, 1)) : cljs.core.reduce.call(null, cljs.core._conj, a, b)
};
cljs.core.PersistentHashMap.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  if(0 < this.cnt) {
    var a = null != this.root ? this.root.inode_seq() : null;
    return this.has_nil_QMARK_ ? cljs.core.cons.call(null, cljs.core.PersistentVector.fromArray([null, this.nil_val], !0), a) : a
  }
  return null
};
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return this.cnt
};
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_map.call(null, a, b)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentHashMap(b, this.cnt, this.root, this.has_nil_QMARK_, this.nil_val, this.__hash)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core._with_meta.call(null, cljs.core.PersistentHashMap.EMPTY, this.meta)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(a, b) {
  if(null == b) {
    return this.has_nil_QMARK_ ? new cljs.core.PersistentHashMap(this.meta, this.cnt - 1, this.root, !1, null, null) : a
  }
  if(null == this.root) {
    return a
  }
  var c = this.root.inode_without(0, cljs.core.hash.call(null, b), b);
  return c === this.root ? a : new cljs.core.PersistentHashMap(this.meta, this.cnt - 1, c, this.has_nil_QMARK_, this.nil_val, null)
};
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = new cljs.core.PersistentHashMap(null, 0, null, !1, null, 0);
cljs.core.PersistentHashMap.fromArrays = function(a, b) {
  for(var c = a.length, d = 0, e = cljs.core.transient$.call(null, cljs.core.PersistentHashMap.EMPTY);;) {
    if(d < c) {
      var f = d + 1, e = cljs.core.assoc_BANG_.call(null, e, a[d], b[d]), d = f
    }else {
      return cljs.core.persistent_BANG_.call(null, e)
    }
  }
};
cljs.core.TransientHashMap = function(a, b, c, d, e) {
  this.edit = a;
  this.root = b;
  this.count = c;
  this.has_nil_QMARK_ = d;
  this.nil_val = e;
  this.cljs$lang$protocol_mask$partition1$ = 14;
  this.cljs$lang$protocol_mask$partition0$ = 258
};
cljs.core.TransientHashMap.cljs$lang$type = !0;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/TransientHashMap")
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = function(a, b) {
  return a.without_BANG_(b)
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = function(a, b, c) {
  return a.assoc_BANG_(b, c)
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(a, b) {
  return a.conj_BANG_(b)
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function(a) {
  return a.persistent_BANG_()
};
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return null == b ? this.has_nil_QMARK_ ? this.nil_val : null : null == this.root ? null : this.root.inode_lookup(0, cljs.core.hash.call(null, b), b)
};
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return null == b ? this.has_nil_QMARK_ ? this.nil_val : c : null == this.root ? c : this.root.inode_lookup(0, cljs.core.hash.call(null, b), b, c)
};
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  if(this.edit) {
    return this.count
  }
  throw Error("count after persistent!");
};
cljs.core.TransientHashMap.prototype.conj_BANG_ = function(a) {
  if(this.edit) {
    var b;
    a ? (b = (b = a.cljs$lang$protocol_mask$partition0$ & 2048) ? b : a.cljs$core$IMapEntry$, b = b ? !0 : a.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IMapEntry, a)) : b = cljs.core.type_satisfies_.call(null, cljs.core.IMapEntry, a);
    if(b) {
      return this.assoc_BANG_(cljs.core.key.call(null, a), cljs.core.val.call(null, a))
    }
    a = cljs.core.seq.call(null, a);
    for(b = this;;) {
      var c = cljs.core.first.call(null, a);
      if(cljs.core.truth_(c)) {
        a = cljs.core.next.call(null, a), b = b.assoc_BANG_(cljs.core.key.call(null, c), cljs.core.val.call(null, c))
      }else {
        return b
      }
    }
  }else {
    throw Error("conj! after persistent");
  }
};
cljs.core.TransientHashMap.prototype.assoc_BANG_ = function(a, b) {
  if(this.edit) {
    if(null == a) {
      if(this.nil_val !== b && (this.nil_val = b), !this.has_nil_QMARK_) {
        this.count += 1, this.has_nil_QMARK_ = !0
      }
    }else {
      var c = new cljs.core.Box(!1), d = (null == this.root ? cljs.core.BitmapIndexedNode.EMPTY : this.root).inode_assoc_BANG_(this.edit, 0, cljs.core.hash.call(null, a), a, b, c);
      d !== this.root && (this.root = d);
      c.val && (this.count += 1)
    }
    return this
  }
  throw Error("assoc! after persistent!");
};
cljs.core.TransientHashMap.prototype.without_BANG_ = function(a) {
  if(this.edit) {
    if(null == a) {
      this.has_nil_QMARK_ && (this.has_nil_QMARK_ = !1, this.nil_val = null, this.count -= 1)
    }else {
      if(null != this.root) {
        var b = new cljs.core.Box(!1), a = this.root.inode_without_BANG_(this.edit, 0, cljs.core.hash.call(null, a), a, b);
        a !== this.root && (this.root = a);
        cljs.core.truth_(b[0]) && (this.count -= 1)
      }
    }
    return this
  }
  throw Error("dissoc! after persistent!");
};
cljs.core.TransientHashMap.prototype.persistent_BANG_ = function() {
  if(this.edit) {
    return this.edit = null, new cljs.core.PersistentHashMap(null, this.count, this.root, this.has_nil_QMARK_, this.nil_val, null)
  }
  throw Error("persistent! called twice");
};
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = function(a, b, c) {
  for(var d = b;;) {
    if(null != a) {
      b = c ? a.left : a.right, d = cljs.core.conj.call(null, d, a), a = b
    }else {
      return d
    }
  }
};
cljs.core.PersistentTreeMapSeq = function(a, b, c, d, e) {
  this.meta = a;
  this.stack = b;
  this.ascending_QMARK_ = c;
  this.cnt = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 31850570
};
cljs.core.PersistentTreeMapSeq.cljs$lang$type = !0;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/PersistentTreeMapSeq")
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_coll.call(null, a)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons.call(null, b, a)
};
cljs.core.PersistentTreeMapSeq.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return a
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return 0 > this.cnt ? cljs.core.count.call(null, cljs.core.next.call(null, a)) + 1 : this.cnt
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = function() {
  return cljs.core.peek.call(null, this.stack)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function() {
  var a = cljs.core.first.call(null, this.stack), a = cljs.core.tree_map_seq_push.call(null, this.ascending_QMARK_ ? a.right : a.left, cljs.core.next.call(null, this.stack), this.ascending_QMARK_);
  return null != a ? new cljs.core.PersistentTreeMapSeq(null, a, this.ascending_QMARK_, this.cnt - 1, null) : cljs.core.List.EMPTY
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentTreeMapSeq(b, this.stack, this.ascending_QMARK_, this.cnt, this.__hash)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = function(a, b, c) {
  return new cljs.core.PersistentTreeMapSeq(null, cljs.core.tree_map_seq_push.call(null, a, null, b), b, c, null)
};
cljs.core.balance_left = function(a, b, c, d) {
  return cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, c) ? cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, c.left) ? new cljs.core.RedNode(c.key, c.val, c.left.blacken(), new cljs.core.BlackNode(a, b, c.right, d, null), null) : cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, c.right) ? new cljs.core.RedNode(c.right.key, c.right.val, new cljs.core.BlackNode(c.key, c.val, c.left, c.right.left, null), new cljs.core.BlackNode(a, b, c.right.right, d, null), null) : new cljs.core.BlackNode(a, 
  b, c, d, null) : new cljs.core.BlackNode(a, b, c, d, null)
};
cljs.core.balance_right = function(a, b, c, d) {
  return cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, d) ? cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, d.right) ? new cljs.core.RedNode(d.key, d.val, new cljs.core.BlackNode(a, b, c, d.left, null), d.right.blacken(), null) : cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, d.left) ? new cljs.core.RedNode(d.left.key, d.left.val, new cljs.core.BlackNode(a, b, c, d.left.left, null), new cljs.core.BlackNode(d.key, d.val, d.left.right, d.right, null), null) : new cljs.core.BlackNode(a, 
  b, c, d, null) : new cljs.core.BlackNode(a, b, c, d, null)
};
cljs.core.balance_left_del = function(a, b, c, d) {
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, c)) {
    return new cljs.core.RedNode(a, b, c.blacken(), d, null)
  }
  if(cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, d)) {
    return cljs.core.balance_right.call(null, a, b, c, d.redden())
  }
  var e;
  e = (e = cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, d)) ? cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, d.left) : e;
  if(e) {
    return new cljs.core.RedNode(d.left.key, d.left.val, new cljs.core.BlackNode(a, b, c, d.left.left, null), cljs.core.balance_right.call(null, d.key, d.val, d.left.right, d.right.redden()), null)
  }
  throw Error("red-black tree invariant violation");
};
cljs.core.balance_right_del = function(a, b, c, d) {
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, d)) {
    return new cljs.core.RedNode(a, b, c, d.blacken(), null)
  }
  if(cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, c)) {
    return cljs.core.balance_left.call(null, a, b, c.redden(), d)
  }
  var e;
  e = (e = cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, c)) ? cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, c.right) : e;
  if(e) {
    return new cljs.core.RedNode(c.right.key, c.right.val, cljs.core.balance_left.call(null, c.key, c.val, c.left.redden(), c.right.left), new cljs.core.BlackNode(a, b, c.right.right, d, null), null)
  }
  throw Error("red-black tree invariant violation");
};
cljs.core.tree_map_kv_reduce = function tree_map_kv_reduce(b, c, d) {
  d = c.call(null, d, b.key, b.val);
  if(cljs.core.reduced_QMARK_.call(null, d)) {
    return cljs.core.deref.call(null, d)
  }
  d = null != b.left ? tree_map_kv_reduce.call(null, b.left, c, d) : d;
  if(cljs.core.reduced_QMARK_.call(null, d)) {
    return cljs.core.deref.call(null, d)
  }
  b = null != b.right ? tree_map_kv_reduce.call(null, b.right, c, d) : d;
  return cljs.core.reduced_QMARK_.call(null, b) ? cljs.core.deref.call(null, b) : b
};
cljs.core.BlackNode = function(a, b, c, d, e) {
  this.key = a;
  this.val = b;
  this.left = c;
  this.right = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32402207
};
cljs.core.BlackNode.cljs$lang$type = !0;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/BlackNode")
};
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_coll.call(null, a)
};
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$IIndexed$_nth$arity$3(a, b, null)
};
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return a.cljs$core$IIndexed$_nth$arity$3(a, b, c)
};
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  return cljs.core.assoc.call(null, cljs.core.PersistentVector.fromArray([this.key, this.val], !0), b, c)
};
cljs.core.BlackNode.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(this, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.BlackNode.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.PersistentVector.fromArray([this.key, this.val, b], !0)
};
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = function() {
  return this.key
};
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = function() {
  return this.val
};
cljs.core.BlackNode.prototype.add_right = function(a) {
  return a.balance_right(this)
};
cljs.core.BlackNode.prototype.redden = function() {
  return new cljs.core.RedNode(this.key, this.val, this.left, this.right, null)
};
cljs.core.BlackNode.prototype.remove_right = function(a) {
  return cljs.core.balance_right_del.call(null, this.key, this.val, this.left, a)
};
cljs.core.BlackNode.prototype.replace = function(a, b, c, d) {
  return new cljs.core.BlackNode(a, b, c, d, null)
};
cljs.core.BlackNode.prototype.kv_reduce = function(a, b) {
  return cljs.core.tree_map_kv_reduce.call(null, this, a, b)
};
cljs.core.BlackNode.prototype.remove_left = function(a) {
  return cljs.core.balance_left_del.call(null, this.key, this.val, a, this.right)
};
cljs.core.BlackNode.prototype.add_left = function(a) {
  return a.balance_left(this)
};
cljs.core.BlackNode.prototype.balance_left = function(a) {
  return new cljs.core.BlackNode(a.key, a.val, this, a.right, null)
};
cljs.core.BlackNode.prototype.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return cljs.core.pr_str.call(null, this)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.BlackNode.prototype.balance_right = function(a) {
  return new cljs.core.BlackNode(a.key, a.val, a.left, this, null)
};
cljs.core.BlackNode.prototype.blacken = function() {
  return this
};
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.ci_reduce.call(null, a, b)
};
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.ci_reduce.call(null, a, b, c)
};
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  return cljs.core.list.call(null, this.key, this.val)
};
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return 2
};
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = function() {
  return this.val
};
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = function() {
  return cljs.core.PersistentVector.fromArray([this.key], !0)
};
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(a, b, c) {
  return cljs.core._assoc_n.call(null, cljs.core.PersistentVector.fromArray([this.key, this.val], !0), b, c)
};
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return cljs.core.with_meta.call(null, cljs.core.PersistentVector.fromArray([this.key, this.val], !0), b)
};
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return null
};
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.val : null
};
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : c
};
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.PersistentVector.EMPTY
};
cljs.core.BlackNode;
cljs.core.RedNode = function(a, b, c, d, e) {
  this.key = a;
  this.val = b;
  this.left = c;
  this.right = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32402207
};
cljs.core.RedNode.cljs$lang$type = !0;
cljs.core.RedNode.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/RedNode")
};
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_coll.call(null, a)
};
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$IIndexed$_nth$arity$3(a, b, null)
};
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return a.cljs$core$IIndexed$_nth$arity$3(a, b, c)
};
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  return cljs.core.assoc.call(null, cljs.core.PersistentVector.fromArray([this.key, this.val], !0), b, c)
};
cljs.core.RedNode.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(this, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.RedNode.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.PersistentVector.fromArray([this.key, this.val, b], !0)
};
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = function() {
  return this.key
};
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = function() {
  return this.val
};
cljs.core.RedNode.prototype.add_right = function(a) {
  return new cljs.core.RedNode(this.key, this.val, this.left, a, null)
};
cljs.core.RedNode.prototype.redden = function() {
  throw Error("red-black tree invariant violation");
};
cljs.core.RedNode.prototype.remove_right = function(a) {
  return new cljs.core.RedNode(this.key, this.val, this.left, a, null)
};
cljs.core.RedNode.prototype.replace = function(a, b, c, d) {
  return new cljs.core.RedNode(a, b, c, d, null)
};
cljs.core.RedNode.prototype.kv_reduce = function(a, b) {
  return cljs.core.tree_map_kv_reduce.call(null, this, a, b)
};
cljs.core.RedNode.prototype.remove_left = function(a) {
  return new cljs.core.RedNode(this.key, this.val, a, this.right, null)
};
cljs.core.RedNode.prototype.add_left = function(a) {
  return new cljs.core.RedNode(this.key, this.val, a, this.right, null)
};
cljs.core.RedNode.prototype.balance_left = function(a) {
  return cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, this.left) ? new cljs.core.RedNode(this.key, this.val, this.left.blacken(), new cljs.core.BlackNode(a.key, a.val, this.right, a.right, null), null) : cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, this.right) ? new cljs.core.RedNode(this.right.key, this.right.val, new cljs.core.BlackNode(this.key, this.val, this.left, this.right.left, null), new cljs.core.BlackNode(a.key, a.val, this.right.right, a.right, null), null) : new cljs.core.BlackNode(a.key, 
  a.val, this, a.right, null)
};
cljs.core.RedNode.prototype.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return cljs.core.pr_str.call(null, this)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.RedNode.prototype.balance_right = function(a) {
  return cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, this.right) ? new cljs.core.RedNode(this.key, this.val, new cljs.core.BlackNode(a.key, a.val, a.left, this.left, null), this.right.blacken(), null) : cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, this.left) ? new cljs.core.RedNode(this.left.key, this.left.val, new cljs.core.BlackNode(a.key, a.val, a.left, this.left.left, null), new cljs.core.BlackNode(this.key, this.val, this.left.right, this.right, null), null) : new cljs.core.BlackNode(a.key, 
  a.val, a.left, this, null)
};
cljs.core.RedNode.prototype.blacken = function() {
  return new cljs.core.BlackNode(this.key, this.val, this.left, this.right, null)
};
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.ci_reduce.call(null, a, b)
};
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.ci_reduce.call(null, a, b, c)
};
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  return cljs.core.list.call(null, this.key, this.val)
};
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return 2
};
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = function() {
  return this.val
};
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = function() {
  return cljs.core.PersistentVector.fromArray([this.key], !0)
};
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(a, b, c) {
  return cljs.core._assoc_n.call(null, cljs.core.PersistentVector.fromArray([this.key, this.val], !0), b, c)
};
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return cljs.core.with_meta.call(null, cljs.core.PersistentVector.fromArray([this.key, this.val], !0), b)
};
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return null
};
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.val : null
};
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : c
};
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.PersistentVector.EMPTY
};
cljs.core.RedNode;
cljs.core.tree_map_add = function tree_map_add(b, c, d, e, f) {
  if(null == c) {
    return new cljs.core.RedNode(d, e, null, null, null)
  }
  var g = b.call(null, d, c.key);
  if(0 === g) {
    return f[0] = c, null
  }
  if(0 > g) {
    return b = tree_map_add.call(null, b, c.left, d, e, f), null != b ? c.add_left(b) : null
  }
  b = tree_map_add.call(null, b, c.right, d, e, f);
  return null != b ? c.add_right(b) : null
};
cljs.core.tree_map_append = function tree_map_append(b, c) {
  if(null == b) {
    return c
  }
  if(null == c) {
    return b
  }
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, b)) {
    if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, c)) {
      var d = tree_map_append.call(null, b.right, c.left);
      return cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, d) ? new cljs.core.RedNode(d.key, d.val, new cljs.core.RedNode(b.key, b.val, b.left, d.left, null), new cljs.core.RedNode(c.key, c.val, d.right, c.right, null), null) : new cljs.core.RedNode(b.key, b.val, b.left, new cljs.core.RedNode(c.key, c.val, d, c.right, null), null)
    }
    return new cljs.core.RedNode(b.key, b.val, b.left, tree_map_append.call(null, b.right, c), null)
  }
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, c)) {
    return new cljs.core.RedNode(c.key, c.val, tree_map_append.call(null, b, c.left), c.right, null)
  }
  d = tree_map_append.call(null, b.right, c.left);
  return cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, d) ? new cljs.core.RedNode(d.key, d.val, new cljs.core.BlackNode(b.key, b.val, b.left, d.left, null), new cljs.core.BlackNode(c.key, c.val, d.right, c.right, null), null) : cljs.core.balance_left_del.call(null, b.key, b.val, b.left, new cljs.core.BlackNode(c.key, c.val, d, c.right, null))
};
cljs.core.tree_map_remove = function tree_map_remove(b, c, d, e) {
  if(null != c) {
    var f = b.call(null, d, c.key);
    if(0 === f) {
      return e[0] = c, cljs.core.tree_map_append.call(null, c.left, c.right)
    }
    if(0 > f) {
      var g = tree_map_remove.call(null, b, c.left, d, e);
      return function() {
        var b = null != g;
        return b ? b : null != e[0]
      }() ? cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, c.left) ? cljs.core.balance_left_del.call(null, c.key, c.val, g, c.right) : new cljs.core.RedNode(c.key, c.val, g, c.right, null) : null
    }
    var h = tree_map_remove.call(null, b, c.right, d, e);
    return function() {
      var b = null != h;
      return b ? b : null != e[0]
    }() ? cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, c.right) ? cljs.core.balance_right_del.call(null, c.key, c.val, c.left, h) : new cljs.core.RedNode(c.key, c.val, c.left, h, null) : null
  }
  return null
};
cljs.core.tree_map_replace = function tree_map_replace(b, c, d, e) {
  var f = c.key, g = b.call(null, d, f);
  return 0 === g ? c.replace(f, e, c.left, c.right) : 0 > g ? c.replace(f, c.val, tree_map_replace.call(null, b, c.left, d, e), c.right) : c.replace(f, c.val, c.left, tree_map_replace.call(null, b, c.right, d, e))
};
cljs.core.PersistentTreeMap = function(a, b, c, d, e) {
  this.comp = a;
  this.tree = b;
  this.cnt = c;
  this.meta = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 418776847
};
cljs.core.PersistentTreeMap.cljs$lang$type = !0;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/PersistentTreeMap")
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_imap.call(null, a)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$ILookup$_lookup$arity$3(a, b, null)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  a = a.entry_at(b);
  return null != a ? a.val : c
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  var d = [null], e = cljs.core.tree_map_add.call(null, this.comp, this.tree, b, c, d);
  return null == e ? (d = cljs.core.nth.call(null, d, 0), cljs.core._EQ_.call(null, c, d.val) ? a : new cljs.core.PersistentTreeMap(this.comp, cljs.core.tree_map_replace.call(null, this.comp, this.tree, b, c), this.cnt, this.meta, null)) : new cljs.core.PersistentTreeMap(this.comp, e.blacken(), this.cnt + 1, this.meta, null)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(a, b) {
  return null != a.entry_at(b)
};
cljs.core.PersistentTreeMap.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(this, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.PersistentTreeMap.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(a, b, c) {
  return null != this.tree ? cljs.core.tree_map_kv_reduce.call(null, this.tree, b, c) : c
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.vector_QMARK_.call(null, b) ? a.cljs$core$IAssociative$_assoc$arity$3(a, cljs.core._nth.call(null, b, 0), cljs.core._nth.call(null, b, 1)) : cljs.core.reduce.call(null, cljs.core._conj, a, b)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = function() {
  return 0 < this.cnt ? cljs.core.create_tree_map_seq.call(null, this.tree, !1, this.cnt) : null
};
cljs.core.PersistentTreeMap.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.PersistentTreeMap.prototype.entry_at = function(a) {
  for(var b = this.tree;;) {
    if(null != b) {
      var c = this.comp.call(null, a, b.key);
      if(0 === c) {
        return b
      }
      b = 0 > c ? b.left : b.right
    }else {
      return null
    }
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = function(a, b) {
  return 0 < this.cnt ? cljs.core.create_tree_map_seq.call(null, this.tree, b, this.cnt) : null
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = function(a, b, c) {
  if(0 < this.cnt) {
    for(var a = null, d = this.tree;;) {
      if(null != d) {
        var e = this.comp.call(null, b, d.key);
        if(0 === e) {
          return new cljs.core.PersistentTreeMapSeq(null, cljs.core.conj.call(null, a, d), c, -1, null)
        }
        cljs.core.truth_(c) ? 0 > e ? (a = cljs.core.conj.call(null, a, d), d = d.left) : d = d.right : 0 < e ? (a = cljs.core.conj.call(null, a, d), d = d.right) : d = d.left
      }else {
        return null == a ? new cljs.core.PersistentTreeMapSeq(null, a, c, -1, null) : null
      }
    }
  }else {
    return null
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = function(a, b) {
  return cljs.core.key.call(null, b)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = function() {
  return this.comp
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  return 0 < this.cnt ? cljs.core.create_tree_map_seq.call(null, this.tree, !0, this.cnt) : null
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return this.cnt
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_map.call(null, a, b)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentTreeMap(this.comp, this.tree, this.cnt, b, this.__hash)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.PersistentTreeMap.EMPTY, this.meta)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(a, b) {
  var c = [null], d = cljs.core.tree_map_remove.call(null, this.comp, this.tree, b, c);
  return null == d ? null == cljs.core.nth.call(null, c, 0) ? a : new cljs.core.PersistentTreeMap(this.comp, null, 0, this.meta, null) : new cljs.core.PersistentTreeMap(this.comp, d.blacken(), this.cnt - 1, this.meta, null)
};
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = new cljs.core.PersistentTreeMap(cljs.core.compare, null, 0, null, 0);
cljs.core.hash_map = function() {
  var a = function(a) {
    for(var a = cljs.core.seq.call(null, a), b = cljs.core.transient$.call(null, cljs.core.PersistentHashMap.EMPTY);;) {
      if(a) {
        var e = cljs.core.nnext.call(null, a), b = cljs.core.assoc_BANG_.call(null, b, cljs.core.first.call(null, a), cljs.core.second.call(null, a)), a = e
      }else {
        return cljs.core.persistent_BANG_.call(null, b)
      }
    }
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.array_map = function() {
  var a = function(a) {
    return new cljs.core.PersistentArrayMap(null, cljs.core.quot.call(null, cljs.core.count.call(null, a), 2), cljs.core.apply.call(null, cljs.core.array, a), null)
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.obj_map = function() {
  var a = function(a) {
    for(var b = [], e = {}, a = cljs.core.seq.call(null, a);;) {
      if(a) {
        b.push(cljs.core.first.call(null, a)), e[cljs.core.first.call(null, a)] = cljs.core.second.call(null, a), a = cljs.core.nnext.call(null, a)
      }else {
        return cljs.core.ObjMap.fromObject.call(null, b, e)
      }
    }
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.sorted_map = function() {
  var a = function(a) {
    for(var a = cljs.core.seq.call(null, a), b = cljs.core.PersistentTreeMap.EMPTY;;) {
      if(a) {
        var e = cljs.core.nnext.call(null, a), b = cljs.core.assoc.call(null, b, cljs.core.first.call(null, a), cljs.core.second.call(null, a)), a = e
      }else {
        return b
      }
    }
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.sorted_map_by = function() {
  var a = function(a, b) {
    for(var e = cljs.core.seq.call(null, b), f = new cljs.core.PersistentTreeMap(a, null, 0, null, 0);;) {
      if(e) {
        var g = cljs.core.nnext.call(null, e), f = cljs.core.assoc.call(null, f, cljs.core.first.call(null, e), cljs.core.second.call(null, e)), e = g
      }else {
        return f
      }
    }
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a(d, b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.keys = function(a) {
  return cljs.core.seq.call(null, cljs.core.map.call(null, cljs.core.first, a))
};
cljs.core.key = function(a) {
  return cljs.core._key.call(null, a)
};
cljs.core.vals = function(a) {
  return cljs.core.seq.call(null, cljs.core.map.call(null, cljs.core.second, a))
};
cljs.core.val = function(a) {
  return cljs.core._val.call(null, a)
};
cljs.core.merge = function() {
  var a = function(a) {
    return cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, a)) ? cljs.core.reduce.call(null, function(a, b) {
      return cljs.core.conj.call(null, cljs.core.truth_(a) ? a : cljs.core.ObjMap.EMPTY, b)
    }, a) : null
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.merge_with = function() {
  var a = function(a, b) {
    if(cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, b))) {
      var e = function(b, d) {
        var e = cljs.core.first.call(null, d), i = cljs.core.second.call(null, d);
        return cljs.core.contains_QMARK_.call(null, b, e) ? cljs.core.assoc.call(null, b, e, a.call(null, cljs.core._lookup.call(null, b, e, null), i)) : cljs.core.assoc.call(null, b, e, i)
      };
      return cljs.core.reduce.call(null, function(a, b) {
        return cljs.core.reduce.call(null, e, cljs.core.truth_(a) ? a : cljs.core.ObjMap.EMPTY, cljs.core.seq.call(null, b))
      }, b)
    }
    return null
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a(d, b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.select_keys = function(a, b) {
  for(var c = cljs.core.ObjMap.EMPTY, d = cljs.core.seq.call(null, b);;) {
    if(d) {
      var e = cljs.core.first.call(null, d), f = cljs.core._lookup.call(null, a, e, "\ufdd0'cljs.core/not-found"), c = cljs.core.not_EQ_.call(null, f, "\ufdd0'cljs.core/not-found") ? cljs.core.assoc.call(null, c, e, f) : c, d = cljs.core.next.call(null, d)
    }else {
      return c
    }
  }
};
cljs.core.PersistentHashSet = function(a, b, c) {
  this.meta = a;
  this.hash_map = b;
  this.__hash = c;
  this.cljs$lang$protocol_mask$partition1$ = 1;
  this.cljs$lang$protocol_mask$partition0$ = 15077647
};
cljs.core.PersistentHashSet.cljs$lang$type = !0;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/PersistentHashSet")
};
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function() {
  return new cljs.core.TransientHashSet(cljs.core.transient$.call(null, this.hash_map))
};
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_iset.call(null, a)
};
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$ILookup$_lookup$arity$3(a, b, null)
};
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null, this.hash_map, b)) ? b : c
};
cljs.core.PersistentHashSet.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(this, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.PersistentHashSet.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return new cljs.core.PersistentHashSet(this.meta, cljs.core.assoc.call(null, this.hash_map, b, null), null)
};
cljs.core.PersistentHashSet.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  return cljs.core.keys.call(null, this.hash_map)
};
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = function(a, b) {
  return new cljs.core.PersistentHashSet(this.meta, cljs.core.dissoc.call(null, this.hash_map, b), null)
};
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return cljs.core.count.call(null, cljs.core.seq.call(null, a))
};
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  var c = cljs.core.set_QMARK_.call(null, b);
  return c ? (c = cljs.core.count.call(null, a) === cljs.core.count.call(null, b)) ? cljs.core.every_QMARK_.call(null, function(b) {
    return cljs.core.contains_QMARK_.call(null, a, b)
  }, b) : c : c
};
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentHashSet(b, this.hash_map, this.__hash)
};
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.PersistentHashSet.EMPTY, this.meta)
};
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = new cljs.core.PersistentHashSet(null, cljs.core.hash_map.call(null), 0);
cljs.core.PersistentHashSet.fromArray = function(a) {
  for(var b = cljs.core.count.call(null, a), c = 0, d = cljs.core.transient$.call(null, cljs.core.PersistentHashSet.EMPTY);;) {
    if(c < b) {
      var e = c + 1, d = cljs.core.conj_BANG_.call(null, d, a[c]), c = e
    }else {
      return cljs.core.persistent_BANG_.call(null, d)
    }
  }
};
cljs.core.TransientHashSet = function(a) {
  this.transient_map = a;
  this.cljs$lang$protocol_mask$partition0$ = 259;
  this.cljs$lang$protocol_mask$partition1$ = 34
};
cljs.core.TransientHashSet.cljs$lang$type = !0;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/TransientHashSet")
};
cljs.core.TransientHashSet.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        e = cljs.core._lookup.call(null, this.transient_map, c, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel ? null : c;
        return e;
      case 3:
        return e = cljs.core._lookup.call(null, this.transient_map, c, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel ? d : c, e
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.TransientHashSet.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$ILookup$_lookup$arity$3(a, b, null)
};
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return cljs.core._lookup.call(null, this.transient_map, b, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel ? c : b
};
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return cljs.core.count.call(null, this.transient_map)
};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = function(a, b) {
  this.transient_map = cljs.core.dissoc_BANG_.call(null, this.transient_map, b);
  return a
};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(a, b) {
  this.transient_map = cljs.core.assoc_BANG_.call(null, this.transient_map, b, null);
  return a
};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function() {
  return new cljs.core.PersistentHashSet(null, cljs.core.persistent_BANG_.call(null, this.transient_map), null)
};
cljs.core.TransientHashSet;
cljs.core.PersistentTreeSet = function(a, b, c) {
  this.meta = a;
  this.tree_map = b;
  this.__hash = c;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 417730831
};
cljs.core.PersistentTreeSet.cljs$lang$type = !0;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/PersistentTreeSet")
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_iset.call(null, a)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$ILookup$_lookup$arity$3(a, b, null)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null, this.tree_map, b)) ? b : c
};
cljs.core.PersistentTreeSet.prototype.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.cljs$core$ILookup$_lookup$arity$2(this, c);
      case 3:
        return this.cljs$core$ILookup$_lookup$arity$3(this, c, d)
    }
    throw"Invalid arity: " + arguments.length;
  }
}();
cljs.core.PersistentTreeSet.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return new cljs.core.PersistentTreeSet(this.meta, cljs.core.assoc.call(null, this.tree_map, b, null), null)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = function() {
  return cljs.core.map.call(null, cljs.core.key, cljs.core.rseq.call(null, this.tree_map))
};
cljs.core.PersistentTreeSet.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = function(a, b) {
  return cljs.core.map.call(null, cljs.core.key, cljs.core._sorted_seq.call(null, this.tree_map, b))
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = function(a, b, c) {
  return cljs.core.map.call(null, cljs.core.key, cljs.core._sorted_seq_from.call(null, this.tree_map, b, c))
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = function(a, b) {
  return b
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = function() {
  return cljs.core._comparator.call(null, this.tree_map)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  return cljs.core.keys.call(null, this.tree_map)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = function(a, b) {
  return new cljs.core.PersistentTreeSet(this.meta, cljs.core.dissoc.call(null, this.tree_map, b), null)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return cljs.core.count.call(null, this.tree_map)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  var c = cljs.core.set_QMARK_.call(null, b);
  return c ? (c = cljs.core.count.call(null, a) === cljs.core.count.call(null, b)) ? cljs.core.every_QMARK_.call(null, function(b) {
    return cljs.core.contains_QMARK_.call(null, a, b)
  }, b) : c : c
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.PersistentTreeSet(b, this.tree_map, this.__hash)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.PersistentTreeSet.EMPTY, this.meta)
};
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = new cljs.core.PersistentTreeSet(null, cljs.core.sorted_map.call(null), 0);
cljs.core.hash_set = function() {
  var a = null, b = function() {
    return cljs.core.PersistentHashSet.EMPTY
  }, c = function() {
    var a = function(a) {
      for(var a = cljs.core.seq.call(null, a), b = cljs.core.transient$.call(null, cljs.core.PersistentHashSet.EMPTY);;) {
        if(cljs.core.seq.call(null, a)) {
          var c = cljs.core.next.call(null, a), b = cljs.core.conj_BANG_.call(null, b, cljs.core.first.call(null, a)), a = c
        }else {
          return cljs.core.persistent_BANG_.call(null, b)
        }
      }
    }, b = function(b) {
      var c = null;
      goog.isDef(b) && (c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
      return a.call(this, c)
    };
    b.cljs$lang$maxFixedArity = 0;
    b.cljs$lang$applyTo = function(b) {
      b = cljs.core.seq(b);
      return a(b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      default:
        return c.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 0;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$0 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.set = function(a) {
  return cljs.core.apply.call(null, cljs.core.hash_set, a)
};
cljs.core.sorted_set = function() {
  var a = function(a) {
    return cljs.core.reduce.call(null, cljs.core._conj, cljs.core.PersistentTreeSet.EMPTY, a)
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.sorted_set_by = function() {
  var a = function(a, b) {
    return cljs.core.reduce.call(null, cljs.core._conj, new cljs.core.PersistentTreeSet(null, cljs.core.sorted_map_by.call(null, a), 0), b)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a(d, b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.replace = function(a, b) {
  if(cljs.core.vector_QMARK_.call(null, b)) {
    var c = cljs.core.count.call(null, b);
    return cljs.core.reduce.call(null, function(b, c) {
      var f = cljs.core.find.call(null, a, cljs.core.nth.call(null, b, c));
      return cljs.core.truth_(f) ? cljs.core.assoc.call(null, b, c, cljs.core.second.call(null, f)) : b
    }, b, cljs.core.take.call(null, c, cljs.core.iterate.call(null, cljs.core.inc, 0)))
  }
  return cljs.core.map.call(null, function(b) {
    var c = cljs.core.find.call(null, a, b);
    return cljs.core.truth_(c) ? cljs.core.second.call(null, c) : b
  }, b)
};
cljs.core.distinct = function(a) {
  return function c(a, e) {
    return new cljs.core.LazySeq(null, !1, function() {
      return function(a, d) {
        for(;;) {
          var e = a, i = cljs.core.nth.call(null, e, 0, null);
          if(e = cljs.core.seq.call(null, e)) {
            if(cljs.core.contains_QMARK_.call(null, d, i)) {
              i = cljs.core.rest.call(null, e);
              e = d;
              a = i;
              d = e
            }else {
              return cljs.core.cons.call(null, i, c.call(null, cljs.core.rest.call(null, e), cljs.core.conj.call(null, d, i)))
            }
          }else {
            return null
          }
        }
      }.call(null, a, e)
    }, null)
  }.call(null, a, cljs.core.PersistentHashSet.EMPTY)
};
cljs.core.butlast = function(a) {
  for(var b = cljs.core.PersistentVector.EMPTY;;) {
    if(cljs.core.next.call(null, a)) {
      b = cljs.core.conj.call(null, b, cljs.core.first.call(null, a)), a = cljs.core.next.call(null, a)
    }else {
      return cljs.core.seq.call(null, b)
    }
  }
};
cljs.core.name = function(a) {
  if(cljs.core.string_QMARK_.call(null, a)) {
    return a
  }
  var b;
  b = (b = cljs.core.keyword_QMARK_.call(null, a)) ? b : cljs.core.symbol_QMARK_.call(null, a);
  if(b) {
    return b = a.lastIndexOf("/"), 0 > b ? cljs.core.subs.call(null, a, 2) : cljs.core.subs.call(null, a, b + 1)
  }
  throw Error([cljs.core.str("Doesn't support name: "), cljs.core.str(a)].join(""));
};
cljs.core.namespace = function(a) {
  var b;
  b = (b = cljs.core.keyword_QMARK_.call(null, a)) ? b : cljs.core.symbol_QMARK_.call(null, a);
  if(b) {
    return b = a.lastIndexOf("/"), -1 < b ? cljs.core.subs.call(null, a, 2, b) : null
  }
  throw Error([cljs.core.str("Doesn't support namespace: "), cljs.core.str(a)].join(""));
};
cljs.core.zipmap = function(a, b) {
  for(var c = cljs.core.ObjMap.EMPTY, d = cljs.core.seq.call(null, a), e = cljs.core.seq.call(null, b);;) {
    var f;
    f = (f = d) ? e : f;
    if(f) {
      c = cljs.core.assoc.call(null, c, cljs.core.first.call(null, d), cljs.core.first.call(null, e)), d = cljs.core.next.call(null, d), e = cljs.core.next.call(null, e)
    }else {
      return c
    }
  }
};
cljs.core.max_key = function() {
  var a = null, b = function(a, b, c) {
    return a.call(null, b) > a.call(null, c) ? b : c
  }, c = function() {
    var b = function(b, c, d, e) {
      return cljs.core.reduce.call(null, function(c, d) {
        return a.call(null, b, c, d)
      }, a.call(null, b, c, d), e)
    }, c = function(a, c, e, i) {
      var j = null;
      goog.isDef(i) && (j = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, a, c, e, j)
    };
    c.cljs$lang$maxFixedArity = 3;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), i = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
      return b(c, e, i, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e, f, g) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return b.call(this, a, e, f);
      default:
        return c.cljs$lang$arity$variadic(a, e, f, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$2 = function(a, b) {
    return b
  };
  a.cljs$lang$arity$3 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.min_key = function() {
  var a = null, b = function(a, b, c) {
    return a.call(null, b) < a.call(null, c) ? b : c
  }, c = function() {
    var b = function(b, c, d, e) {
      return cljs.core.reduce.call(null, function(c, d) {
        return a.call(null, b, c, d)
      }, a.call(null, b, c, d), e)
    }, c = function(a, c, e, i) {
      var j = null;
      goog.isDef(i) && (j = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, a, c, e, j)
    };
    c.cljs$lang$maxFixedArity = 3;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), e = cljs.core.first(cljs.core.next(a)), i = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
      return b(c, e, i, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e, f, g) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return b.call(this, a, e, f);
      default:
        return c.cljs$lang$arity$variadic(a, e, f, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$2 = function(a, b) {
    return b
  };
  a.cljs$lang$arity$3 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.partition_all = function() {
  var a = null, b = function(b, c) {
    return a.call(null, b, b, c)
  }, c = function(b, c, f) {
    return new cljs.core.LazySeq(null, !1, function() {
      var g = cljs.core.seq.call(null, f);
      return g ? cljs.core.cons.call(null, cljs.core.take.call(null, b, g), a.call(null, b, c, cljs.core.drop.call(null, c, g))) : null
    }, null)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.take_while = function take_while(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq.call(null, c);
    return d ? cljs.core.truth_(b.call(null, cljs.core.first.call(null, d))) ? cljs.core.cons.call(null, cljs.core.first.call(null, d), take_while.call(null, b, cljs.core.rest.call(null, d))) : null : null
  }, null)
};
cljs.core.mk_bound_fn = function(a, b, c) {
  return function(d) {
    var e = cljs.core._comparator.call(null, a);
    return b.call(null, e.call(null, cljs.core._entry_key.call(null, a, d), c), 0)
  }
};
cljs.core.subseq = function() {
  var a = null, b = function(a, b, c) {
    var g = cljs.core.mk_bound_fn.call(null, a, b, c);
    return cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_, cljs.core._GT__EQ_]).call(null, b)) ? (a = cljs.core._sorted_seq_from.call(null, a, c, !0), cljs.core.truth_(a) ? (b = cljs.core.nth.call(null, a, 0, null), cljs.core.truth_(g.call(null, b)) ? a : cljs.core.next.call(null, a)) : null) : cljs.core.take_while.call(null, g, cljs.core._sorted_seq.call(null, a, !0))
  }, c = function(a, b, c, g, h) {
    var i = cljs.core._sorted_seq_from.call(null, a, c, !0);
    if(cljs.core.truth_(i)) {
      var j = cljs.core.nth.call(null, i, 0, null);
      return cljs.core.take_while.call(null, cljs.core.mk_bound_fn.call(null, a, g, h), cljs.core.truth_(cljs.core.mk_bound_fn.call(null, a, b, c).call(null, j)) ? i : cljs.core.next.call(null, i))
    }
    return null
  }, a = function(a, e, f, g, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, a, e, f);
      case 5:
        return c.call(this, a, e, f, g, h)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$3 = b;
  a.cljs$lang$arity$5 = c;
  return a
}();
cljs.core.rsubseq = function() {
  var a = null, b = function(a, b, c) {
    var g = cljs.core.mk_bound_fn.call(null, a, b, c);
    return cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_, cljs.core._LT__EQ_]).call(null, b)) ? (a = cljs.core._sorted_seq_from.call(null, a, c, !1), cljs.core.truth_(a) ? (b = cljs.core.nth.call(null, a, 0, null), cljs.core.truth_(g.call(null, b)) ? a : cljs.core.next.call(null, a)) : null) : cljs.core.take_while.call(null, g, cljs.core._sorted_seq.call(null, a, !1))
  }, c = function(a, b, c, g, h) {
    var i = cljs.core._sorted_seq_from.call(null, a, h, !1);
    if(cljs.core.truth_(i)) {
      var j = cljs.core.nth.call(null, i, 0, null);
      return cljs.core.take_while.call(null, cljs.core.mk_bound_fn.call(null, a, b, c), cljs.core.truth_(cljs.core.mk_bound_fn.call(null, a, g, h).call(null, j)) ? i : cljs.core.next.call(null, i))
    }
    return null
  }, a = function(a, e, f, g, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, a, e, f);
      case 5:
        return c.call(this, a, e, f, g, h)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$3 = b;
  a.cljs$lang$arity$5 = c;
  return a
}();
cljs.core.Range = function(a, b, c, d, e) {
  this.meta = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.__hash = e;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32375006
};
cljs.core.Range.cljs$lang$type = !0;
cljs.core.Range.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/Range")
};
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_coll.call(null, a)
};
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new cljs.core.Range(this.meta, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new cljs.core.Range(this.meta, this.start + this.step, this.end, this.step, null) : null
};
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.cons.call(null, b, a)
};
cljs.core.Range.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = function(a, b) {
  return cljs.core.ci_reduce.call(null, a, b)
};
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = function(a, b, c) {
  return cljs.core.ci_reduce.call(null, a, b, c)
};
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = function(a) {
  return 0 < this.step ? this.start < this.end ? a : null : this.start > this.end ? a : null
};
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = function(a) {
  return cljs.core.not.call(null, a.cljs$core$ISeqable$_seq$arity$1(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = function() {
  return this.start
};
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = function(a) {
  return null != a.cljs$core$ISeqable$_seq$arity$1(a) ? new cljs.core.Range(this.meta, this.start + this.step, this.end, this.step, null) : cljs.core.List.EMPTY
};
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.equiv_sequential.call(null, a, b)
};
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new cljs.core.Range(b, this.start, this.end, this.step, this.__hash)
};
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = function(a, b) {
  if(b < a.cljs$core$ICounted$_count$arity$1(a)) {
    return this.start + b * this.step
  }
  var c;
  c = (c = this.start > this.end) ? 0 === this.step : c;
  if(c) {
    return this.start
  }
  throw Error("Index out of bounds");
};
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = function(a, b, c) {
  if(b < a.cljs$core$ICounted$_count$arity$1(a)) {
    return this.start + b * this.step
  }
  a = (a = this.start > this.end) ? 0 === this.step : a;
  return a ? this.start : c
};
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function() {
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this.meta)
};
cljs.core.Range;
cljs.core.range = function() {
  var a = null, b = function() {
    return a.call(null, 0, Number.MAX_VALUE, 1)
  }, c = function(b) {
    return a.call(null, 0, b, 1)
  }, d = function(b, c) {
    return a.call(null, b, c, 1)
  }, e = function(a, b, c) {
    return new cljs.core.Range(null, a, b, c, null)
  }, a = function(a, g, h) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c.call(this, a);
      case 2:
        return d.call(this, a, g);
      case 3:
        return e.call(this, a, g, h)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$0 = b;
  a.cljs$lang$arity$1 = c;
  a.cljs$lang$arity$2 = d;
  a.cljs$lang$arity$3 = e;
  return a
}();
cljs.core.take_nth = function take_nth(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq.call(null, c);
    return d ? cljs.core.cons.call(null, cljs.core.first.call(null, d), take_nth.call(null, b, cljs.core.drop.call(null, b, d))) : null
  }, null)
};
cljs.core.split_with = function(a, b) {
  return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null, a, b), cljs.core.drop_while.call(null, a, b)], !0)
};
cljs.core.partition_by = function partition_by(b, c) {
  return new cljs.core.LazySeq(null, !1, function() {
    var d = cljs.core.seq.call(null, c);
    if(d) {
      var e = cljs.core.first.call(null, d), f = b.call(null, e), e = cljs.core.cons.call(null, e, cljs.core.take_while.call(null, function(c) {
        return cljs.core._EQ_.call(null, f, b.call(null, c))
      }, cljs.core.next.call(null, d)));
      return cljs.core.cons.call(null, e, partition_by.call(null, b, cljs.core.seq.call(null, cljs.core.drop.call(null, cljs.core.count.call(null, e), d))))
    }
    return null
  }, null)
};
cljs.core.frequencies = function(a) {
  return cljs.core.persistent_BANG_.call(null, cljs.core.reduce.call(null, function(a, c) {
    return cljs.core.assoc_BANG_.call(null, a, c, cljs.core._lookup.call(null, a, c, 0) + 1)
  }, cljs.core.transient$.call(null, cljs.core.ObjMap.EMPTY), a))
};
cljs.core.reductions = function() {
  var a = null, b = function(b, c) {
    return new cljs.core.LazySeq(null, !1, function() {
      var f = cljs.core.seq.call(null, c);
      return f ? a.call(null, b, cljs.core.first.call(null, f), cljs.core.rest.call(null, f)) : cljs.core.list.call(null, b.call(null))
    }, null)
  }, c = function(b, c, f) {
    return cljs.core.cons.call(null, c, new cljs.core.LazySeq(null, !1, function() {
      var g = cljs.core.seq.call(null, f);
      return g ? a.call(null, b, b.call(null, c, cljs.core.first.call(null, g)), cljs.core.rest.call(null, g)) : null
    }, null))
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.juxt = function() {
  var a = null, b = function(a) {
    return function() {
      var b = null, c = function() {
        var b = function(b, c, d, e) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, a, b, c, d, e))
        }, c = function(a, c, d, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return b.call(this, a, c, d, f)
        };
        c.cljs$lang$maxFixedArity = 3;
        c.cljs$lang$applyTo = function(a) {
          var c = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return b(c, d, e, a)
        };
        c.cljs$lang$arity$variadic = b;
        return c
      }(), b = function(b, d, e, g) {
        switch(arguments.length) {
          case 0:
            return cljs.core.vector.call(null, a.call(null));
          case 1:
            return cljs.core.vector.call(null, a.call(null, b));
          case 2:
            return cljs.core.vector.call(null, a.call(null, b, d));
          case 3:
            return cljs.core.vector.call(null, a.call(null, b, d, e));
          default:
            return c.cljs$lang$arity$variadic(b, d, e, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      b.cljs$lang$maxFixedArity = 3;
      b.cljs$lang$applyTo = c.cljs$lang$applyTo;
      return b
    }()
  }, c = function(a, b) {
    return function() {
      var c = null, d = function() {
        var c = function(c, d, e, h) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, a, c, d, e, h), cljs.core.apply.call(null, b, c, d, e, h))
        }, d = function(a, b, d, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, b, d, f)
        };
        d.cljs$lang$maxFixedArity = 3;
        d.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), d = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return c(b, d, e, a)
        };
        d.cljs$lang$arity$variadic = c;
        return d
      }(), c = function(c, e, h, l) {
        switch(arguments.length) {
          case 0:
            return cljs.core.vector.call(null, a.call(null), b.call(null));
          case 1:
            return cljs.core.vector.call(null, a.call(null, c), b.call(null, c));
          case 2:
            return cljs.core.vector.call(null, a.call(null, c, e), b.call(null, c, e));
          case 3:
            return cljs.core.vector.call(null, a.call(null, c, e, h), b.call(null, c, e, h));
          default:
            return d.cljs$lang$arity$variadic(c, e, h, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      c.cljs$lang$maxFixedArity = 3;
      c.cljs$lang$applyTo = d.cljs$lang$applyTo;
      return c
    }()
  }, d = function(a, b, c) {
    return function() {
      var d = null, e = function() {
        var d = function(d, e, i, j) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, a, d, e, i, j), cljs.core.apply.call(null, b, d, e, i, j), cljs.core.apply.call(null, c, d, e, i, j))
        }, e = function(a, b, c, e) {
          var f = null;
          goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, c, f)
        };
        e.cljs$lang$maxFixedArity = 3;
        e.cljs$lang$applyTo = function(a) {
          var b = cljs.core.first(a), c = cljs.core.first(cljs.core.next(a)), e = cljs.core.first(cljs.core.next(cljs.core.next(a))), a = cljs.core.rest(cljs.core.next(cljs.core.next(a)));
          return d(b, c, e, a)
        };
        e.cljs$lang$arity$variadic = d;
        return e
      }(), d = function(d, i, l, n) {
        switch(arguments.length) {
          case 0:
            return cljs.core.vector.call(null, a.call(null), b.call(null), c.call(null));
          case 1:
            return cljs.core.vector.call(null, a.call(null, d), b.call(null, d), c.call(null, d));
          case 2:
            return cljs.core.vector.call(null, a.call(null, d, i), b.call(null, d, i), c.call(null, d, i));
          case 3:
            return cljs.core.vector.call(null, a.call(null, d, i, l), b.call(null, d, i, l), c.call(null, d, i, l));
          default:
            return e.cljs$lang$arity$variadic(d, i, l, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      d.cljs$lang$maxFixedArity = 3;
      d.cljs$lang$applyTo = e.cljs$lang$applyTo;
      return d
    }()
  }, e = function() {
    var a = function(a, b, c, d) {
      var e = cljs.core.list_STAR_.call(null, a, b, c, d);
      return function() {
        var a = null, b = function() {
          return cljs.core.reduce.call(null, function(a, b) {
            return cljs.core.conj.call(null, a, b.call(null))
          }, cljs.core.PersistentVector.EMPTY, e)
        }, c = function(a) {
          return cljs.core.reduce.call(null, function(b, c) {
            return cljs.core.conj.call(null, b, c.call(null, a))
          }, cljs.core.PersistentVector.EMPTY, e)
        }, d = function(a, b) {
          return cljs.core.reduce.call(null, function(c, d) {
            return cljs.core.conj.call(null, c, d.call(null, a, b))
          }, cljs.core.PersistentVector.EMPTY, e)
        }, f = function(a, b, c) {
          return cljs.core.reduce.call(null, function(d, e) {
            return cljs.core.conj.call(null, d, e.call(null, a, b, c))
          }, cljs.core.PersistentVector.EMPTY, e)
        }, g = function() {
          var a = function(a, b, c, d) {
            return cljs.core.reduce.call(null, function(e, f) {
              return cljs.core.conj.call(null, e, cljs.core.apply.call(null, f, a, b, c, d))
            }, cljs.core.PersistentVector.EMPTY, e)
          }, b = function(b, c, d, e) {
            var f = null;
            goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
            return a.call(this, b, c, d, f)
          };
          b.cljs$lang$maxFixedArity = 3;
          b.cljs$lang$applyTo = function(b) {
            var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
            return a(c, d, e, b)
          };
          b.cljs$lang$arity$variadic = a;
          return b
        }(), a = function(a, e, h, i) {
          switch(arguments.length) {
            case 0:
              return b.call(this);
            case 1:
              return c.call(this, a);
            case 2:
              return d.call(this, a, e);
            case 3:
              return f.call(this, a, e, h);
            default:
              return g.cljs$lang$arity$variadic(a, e, h, cljs.core.array_seq(arguments, 3))
          }
          throw"Invalid arity: " + arguments.length;
        };
        a.cljs$lang$maxFixedArity = 3;
        a.cljs$lang$applyTo = g.cljs$lang$applyTo;
        return a
      }()
    }, b = function(b, c, d, e) {
      var g = null;
      goog.isDef(e) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
      return a.call(this, b, c, d, g)
    };
    b.cljs$lang$maxFixedArity = 3;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
      return a(c, d, e, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, g, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, g);
      case 3:
        return d.call(this, a, g, h);
      default:
        return e.cljs$lang$arity$variadic(a, g, h, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 3;
  a.cljs$lang$applyTo = e.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  a.cljs$lang$arity$3 = d;
  a.cljs$lang$arity$variadic = e.cljs$lang$arity$variadic;
  return a
}();
cljs.core.dorun = function() {
  var a = null, b = function(a) {
    for(;;) {
      if(cljs.core.seq.call(null, a)) {
        a = cljs.core.next.call(null, a)
      }else {
        return null
      }
    }
  }, c = function(a, b) {
    for(;;) {
      if(cljs.core.truth_(function() {
        var c = cljs.core.seq.call(null, b);
        return c ? 0 < a : c
      }())) {
        var c = a - 1, g = cljs.core.next.call(null, b), a = c, b = g
      }else {
        return null
      }
    }
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.doall = function() {
  var a = null, b = function(a) {
    cljs.core.dorun.call(null, a);
    return a
  }, c = function(a, b) {
    cljs.core.dorun.call(null, a, b);
    return b
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.regexp_QMARK_ = function(a) {
  return a instanceof RegExp
};
cljs.core.re_matches = function(a, b) {
  var c = a.exec(b);
  return cljs.core._EQ_.call(null, cljs.core.first.call(null, c), b) ? 1 === cljs.core.count.call(null, c) ? cljs.core.first.call(null, c) : cljs.core.vec.call(null, c) : null
};
cljs.core.re_find = function(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === cljs.core.count.call(null, c) ? cljs.core.first.call(null, c) : cljs.core.vec.call(null, c)
};
cljs.core.re_seq = function re_seq(b, c) {
  var d = cljs.core.re_find.call(null, b, c), e = c.search(b), f = cljs.core.coll_QMARK_.call(null, d) ? cljs.core.first.call(null, d) : d, g = cljs.core.subs.call(null, c, e + cljs.core.count.call(null, f));
  return cljs.core.truth_(d) ? new cljs.core.LazySeq(null, !1, function() {
    return cljs.core.cons.call(null, d, re_seq.call(null, b, g))
  }, null) : null
};
cljs.core.re_pattern = function(a) {
  var b = cljs.core.re_find.call(null, /^(?:\(\?([idmsux]*)\))?(.*)/, a);
  cljs.core.nth.call(null, b, 0, null);
  a = cljs.core.nth.call(null, b, 1, null);
  b = cljs.core.nth.call(null, b, 2, null);
  return RegExp(b, a)
};
cljs.core.pr_sequential = function(a, b, c, d, e, f) {
  return cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray([b], !0), cljs.core.flatten1.call(null, cljs.core.interpose.call(null, cljs.core.PersistentVector.fromArray([c], !0), cljs.core.map.call(null, function(b) {
    return a.call(null, b, e)
  }, f))), cljs.core.PersistentVector.fromArray([d], !0))
};
cljs.core.string_print = function(a) {
  cljs.core._STAR_print_fn_STAR_.call(null, a);
  return null
};
cljs.core.flush = function() {
  return null
};
cljs.core.pr_seq = function pr_seq(b, c) {
  return null == b ? cljs.core.list.call(null, "nil") : void 0 === b ? cljs.core.list.call(null, "#<undefined>") : cljs.core.concat.call(null, cljs.core.truth_(function() {
    var d = cljs.core._lookup.call(null, c, "\ufdd0'meta", null);
    return cljs.core.truth_(d) ? (b ? (d = (d = b.cljs$lang$protocol_mask$partition0$ & 131072) ? d : b.cljs$core$IMeta$, d = d ? !0 : b.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IMeta, b)) : d = cljs.core.type_satisfies_.call(null, cljs.core.IMeta, b), cljs.core.truth_(d) ? cljs.core.meta.call(null, b) : d) : d
  }()) ? cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray(["^"], !0), pr_seq.call(null, cljs.core.meta.call(null, b), c), cljs.core.PersistentVector.fromArray([" "], !0)) : null, function() {
    var c = null != b;
    return c ? b.cljs$lang$type : c
  }() ? b.cljs$lang$ctorPrSeq(b) : function() {
    if(b) {
      var c;
      c = (c = b.cljs$lang$protocol_mask$partition0$ & 536870912) ? c : b.cljs$core$IPrintable$;
      return c ? !0 : b.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IPrintable, b)
    }
    return cljs.core.type_satisfies_.call(null, cljs.core.IPrintable, b)
  }() ? cljs.core._pr_seq.call(null, b, c) : cljs.core.truth_(cljs.core.regexp_QMARK_.call(null, b)) ? cljs.core.list.call(null, '#"', b.source, '"') : cljs.core.list.call(null, "#<", "" + cljs.core.str(b), ">"))
};
cljs.core.pr_sb = function(a, b) {
  var c = new goog.string.StringBuffer, d = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, cljs.core.first.call(null, a), b));
  if(d) {
    for(var e = cljs.core.first.call(null, d);;) {
      if(c.append(e), e = cljs.core.next.call(null, d)) {
        d = e, e = cljs.core.first.call(null, d)
      }else {
        break
      }
    }
  }
  if(e = cljs.core.seq.call(null, cljs.core.next.call(null, a))) {
    for(d = cljs.core.first.call(null, e);;) {
      c.append(" ");
      var f = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, d, b));
      if(f) {
        for(d = cljs.core.first.call(null, f);;) {
          if(c.append(d), d = cljs.core.next.call(null, f)) {
            f = d, d = cljs.core.first.call(null, f)
          }else {
            break
          }
        }
      }
      if(e = cljs.core.next.call(null, e)) {
        d = e, e = cljs.core.first.call(null, d), f = d, d = e, e = f
      }else {
        break
      }
    }
  }
  return c
};
cljs.core.pr_str_with_opts = function(a, b) {
  return"" + cljs.core.str(cljs.core.pr_sb.call(null, a, b))
};
cljs.core.prn_str_with_opts = function(a, b) {
  var c = cljs.core.pr_sb.call(null, a, b);
  c.append("\n");
  return"" + cljs.core.str(c)
};
cljs.core.pr_with_opts = function(a, b) {
  var c = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, cljs.core.first.call(null, a), b));
  if(c) {
    for(var d = cljs.core.first.call(null, c);;) {
      if(cljs.core.string_print.call(null, d), d = cljs.core.next.call(null, c)) {
        c = d, d = cljs.core.first.call(null, c)
      }else {
        break
      }
    }
  }
  if(d = cljs.core.seq.call(null, cljs.core.next.call(null, a))) {
    for(c = cljs.core.first.call(null, d);;) {
      cljs.core.string_print.call(null, " ");
      var e = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, c, b));
      if(e) {
        for(c = cljs.core.first.call(null, e);;) {
          if(cljs.core.string_print.call(null, c), c = cljs.core.next.call(null, e)) {
            e = c, c = cljs.core.first.call(null, e)
          }else {
            break
          }
        }
      }
      if(d = cljs.core.next.call(null, d)) {
        c = d, d = cljs.core.first.call(null, c), e = c, c = d, d = e
      }else {
        return null
      }
    }
  }else {
    return null
  }
};
cljs.core.newline = function(a) {
  cljs.core.string_print.call(null, "\n");
  return cljs.core.truth_(cljs.core._lookup.call(null, a, "\ufdd0'flush-on-newline", null)) ? cljs.core.flush.call(null) : null
};
cljs.core._STAR_flush_on_newline_STAR_ = !0;
cljs.core._STAR_print_readably_STAR_ = !0;
cljs.core._STAR_print_meta_STAR_ = !1;
cljs.core._STAR_print_dup_STAR_ = !1;
cljs.core.pr_opts = function() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_, "\ufdd0'readably":cljs.core._STAR_print_readably_STAR_, "\ufdd0'meta":cljs.core._STAR_print_meta_STAR_, "\ufdd0'dup":cljs.core._STAR_print_dup_STAR_})
};
cljs.core.pr_str = function() {
  var a = function(a) {
    return cljs.core.pr_str_with_opts.call(null, a, cljs.core.pr_opts.call(null))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.prn_str = function() {
  var a = function(a) {
    return cljs.core.prn_str_with_opts.call(null, a, cljs.core.pr_opts.call(null))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.pr = function() {
  var a = function(a) {
    return cljs.core.pr_with_opts.call(null, a, cljs.core.pr_opts.call(null))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.print = function() {
  var a = function(a) {
    return cljs.core.pr_with_opts.call(null, a, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", !1))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.print_str = function() {
  var a = function(a) {
    return cljs.core.pr_str_with_opts.call(null, a, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", !1))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.println = function() {
  var a = function(a) {
    cljs.core.pr_with_opts.call(null, a, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", !1));
    return cljs.core.newline.call(null, cljs.core.pr_opts.call(null))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.println_str = function() {
  var a = function(a) {
    return cljs.core.prn_str_with_opts.call(null, a, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", !1))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.prn = function() {
  var a = function(a) {
    cljs.core.pr_with_opts.call(null, a, cljs.core.pr_opts.call(null));
    return cljs.core.newline.call(null, cljs.core.pr_opts.call(null))
  }, b = function(b) {
    var d = null;
    goog.isDef(b) && (d = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
    return a.call(this, d)
  };
  b.cljs$lang$maxFixedArity = 0;
  b.cljs$lang$applyTo = function(b) {
    b = cljs.core.seq(b);
    return a(b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.printf = function() {
  var a = function(a, b) {
    return cljs.core.print.call(null, cljs.core.apply.call(null, cljs.core.format, a, b))
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a(d, b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = !0;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, function(a) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
cljs.core.IPrintable.number = !0;
cljs.core._pr_seq.number = function(a) {
  return cljs.core.list.call(null, "" + cljs.core.str(a))
};
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = !0;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", b, a)
};
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = !0;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = !0;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, function(a) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = !0;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, function(a) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = !0;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#queue [", " ", "]", b, cljs.core.seq.call(null, a))
};
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = !0;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = !0;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = !0;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#{", " ", "}", b, a)
};
cljs.core.IPrintable["boolean"] = !0;
cljs.core._pr_seq["boolean"] = function(a) {
  return cljs.core.list.call(null, "" + cljs.core.str(a))
};
cljs.core.IPrintable.string = !0;
cljs.core._pr_seq.string = function(a, b) {
  return cljs.core.keyword_QMARK_.call(null, a) ? cljs.core.list.call(null, [cljs.core.str(":"), cljs.core.str(function() {
    var b = cljs.core.namespace.call(null, a);
    return cljs.core.truth_(b) ? [cljs.core.str(b), cljs.core.str("/")].join("") : null
  }()), cljs.core.str(cljs.core.name.call(null, a))].join("")) : cljs.core.symbol_QMARK_.call(null, a) ? cljs.core.list.call(null, [cljs.core.str(function() {
    var b = cljs.core.namespace.call(null, a);
    return cljs.core.truth_(b) ? [cljs.core.str(b), cljs.core.str("/")].join("") : null
  }()), cljs.core.str(cljs.core.name.call(null, a))].join("")) : cljs.core.list.call(null, cljs.core.truth_((new cljs.core.Keyword("\ufdd0'readably")).call(null, b)) ? goog.string.quote(a) : a)
};
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = !0;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = !0;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", b, a)
};
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = !0;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = !0;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, function(a) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
cljs.core.Vector.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", b, a)
};
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = !0;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#{", " ", "}", b, a)
};
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", b, a)
};
cljs.core.List.prototype.cljs$core$IPrintable$ = !0;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.IPrintable.array = !0;
cljs.core._pr_seq.array = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#<Array [", ", ", "]>", b, a)
};
cljs.core.IPrintable["function"] = !0;
cljs.core._pr_seq["function"] = function(a) {
  return cljs.core.list.call(null, "#<", "" + cljs.core.str(a), ">")
};
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = !0;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function() {
  return cljs.core.list.call(null, "()")
};
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = !0;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", b, a)
};
Date.prototype.cljs$core$IPrintable$ = !0;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a) {
  var b = function(a, b) {
    for(var e = "" + cljs.core.str(a);;) {
      if(cljs.core.count.call(null, e) < b) {
        e = [cljs.core.str("0"), cljs.core.str(e)].join("")
      }else {
        return e
      }
    }
  };
  return cljs.core.list.call(null, [cljs.core.str('#inst "'), cljs.core.str(a.getUTCFullYear()), cljs.core.str("-"), cljs.core.str(b.call(null, a.getUTCMonth() + 1, 2)), cljs.core.str("-"), cljs.core.str(b.call(null, a.getUTCDate(), 2)), cljs.core.str("T"), cljs.core.str(b.call(null, a.getUTCHours(), 2)), cljs.core.str(":"), cljs.core.str(b.call(null, a.getUTCMinutes(), 2)), cljs.core.str(":"), cljs.core.str(b.call(null, a.getUTCSeconds(), 2)), cljs.core.str("."), cljs.core.str(b.call(null, a.getUTCMilliseconds(), 
  3)), cljs.core.str("-"), cljs.core.str('00:00"')].join(""))
};
cljs.core.Cons.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.Range.prototype.cljs$core$IPrintable$ = !0;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = !0;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = !0;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, function(a) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = !0;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", b, a)
};
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = !0;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = function(a, b) {
  return cljs.core.compare_indexed.call(null, a, b)
};
cljs.core.Atom = function(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.validator = c;
  this.watches = d;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 2690809856
};
cljs.core.Atom.cljs$lang$type = !0;
cljs.core.Atom.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/Atom")
};
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return goog.getUid(a)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = function(a, b, c) {
  var d = cljs.core.seq.call(null, this.watches);
  if(d) {
    var e = cljs.core.first.call(null, d);
    cljs.core.nth.call(null, e, 0, null);
    for(cljs.core.nth.call(null, e, 1, null);;) {
      var f = e, e = cljs.core.nth.call(null, f, 0, null), f = cljs.core.nth.call(null, f, 1, null);
      f.call(null, e, a, b, c);
      if(d = cljs.core.next.call(null, d)) {
        e = d, d = cljs.core.first.call(null, e), f = e, e = d, d = f
      }else {
        return null
      }
    }
  }else {
    return null
  }
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = function(a, b, c) {
  return a.watches = cljs.core.assoc.call(null, this.watches, b, c)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = function(a, b) {
  return a.watches = cljs.core.dissoc.call(null, this.watches, b)
};
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray(["#<Atom: "], !0), cljs.core._pr_seq.call(null, this.state, b), ">")
};
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.meta
};
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = function() {
  return this.state
};
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return a === b
};
cljs.core.Atom;
cljs.core.atom = function() {
  var a = null, b = function(a) {
    return new cljs.core.Atom(a, null, null, null)
  }, c = function() {
    var a = function(a, b) {
      var c = cljs.core.seq_QMARK_.call(null, b) ? cljs.core.apply.call(null, cljs.core.hash_map, b) : b, d = cljs.core._lookup.call(null, c, "\ufdd0'validator", null), c = cljs.core._lookup.call(null, c, "\ufdd0'meta", null);
      return new cljs.core.Atom(a, c, d, null)
    }, b = function(b, c) {
      var e = null;
      goog.isDef(c) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
      return a.call(this, b, e)
    };
    b.cljs$lang$maxFixedArity = 1;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), b = cljs.core.rest(b);
      return a(c, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      default:
        return c.cljs$lang$arity$variadic(a, cljs.core.array_seq(arguments, 1))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.reset_BANG_ = function(a, b) {
  var c = a.validator;
  if(cljs.core.truth_(c) && !cljs.core.truth_(c.call(null, b))) {
    throw Error([cljs.core.str("Assert failed: "), cljs.core.str("Validator rejected reference state"), cljs.core.str("\n"), cljs.core.str(cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'validate", "\ufdd1'new-value"), cljs.core.hash_map("\ufdd0'line", 6440, "\ufdd0'column", 13))))].join(""));
  }
  c = a.state;
  a.state = b;
  cljs.core._notify_watches.call(null, a, c, b);
  return b
};
cljs.core.swap_BANG_ = function() {
  var a = null, b = function(a, b) {
    return cljs.core.reset_BANG_.call(null, a, b.call(null, a.state))
  }, c = function(a, b, c) {
    return cljs.core.reset_BANG_.call(null, a, b.call(null, a.state, c))
  }, d = function(a, b, c, d) {
    return cljs.core.reset_BANG_.call(null, a, b.call(null, a.state, c, d))
  }, e = function(a, b, c, d, e) {
    return cljs.core.reset_BANG_.call(null, a, b.call(null, a.state, c, d, e))
  }, f = function() {
    var a = function(a, b, c, d, e, f) {
      return cljs.core.reset_BANG_.call(null, a, cljs.core.apply.call(null, b, a.state, c, d, e, f))
    }, b = function(b, c, d, e, f, h) {
      var o = null;
      goog.isDef(h) && (o = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0));
      return a.call(this, b, c, d, e, f, o)
    };
    b.cljs$lang$maxFixedArity = 5;
    b.cljs$lang$applyTo = function(b) {
      var c = cljs.core.first(b), d = cljs.core.first(cljs.core.next(b)), e = cljs.core.first(cljs.core.next(cljs.core.next(b))), f = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(b)))), h = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(b))))), b = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(b)))));
      return a(c, d, e, f, h, b)
    };
    b.cljs$lang$arity$variadic = a;
    return b
  }(), a = function(a, h, i, j, k, m) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, h);
      case 3:
        return c.call(this, a, h, i);
      case 4:
        return d.call(this, a, h, i, j);
      case 5:
        return e.call(this, a, h, i, j, k);
      default:
        return f.cljs$lang$arity$variadic(a, h, i, j, k, cljs.core.array_seq(arguments, 5))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 5;
  a.cljs$lang$applyTo = f.cljs$lang$applyTo;
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  a.cljs$lang$arity$4 = d;
  a.cljs$lang$arity$5 = e;
  a.cljs$lang$arity$variadic = f.cljs$lang$arity$variadic;
  return a
}();
cljs.core.compare_and_set_BANG_ = function(a, b, c) {
  return cljs.core._EQ_.call(null, a.state, b) ? (cljs.core.reset_BANG_.call(null, a, c), !0) : !1
};
cljs.core.deref = function(a) {
  return cljs.core._deref.call(null, a)
};
cljs.core.set_validator_BANG_ = function(a, b) {
  return a.validator = b
};
cljs.core.get_validator = function(a) {
  return a.validator
};
cljs.core.alter_meta_BANG_ = function() {
  var a = function(a, b, e) {
    return a.meta = cljs.core.apply.call(null, b, a.meta, e)
  }, b = function(b, d, e) {
    var f = null;
    goog.isDef(e) && (f = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0));
    return a.call(this, b, d, f)
  };
  b.cljs$lang$maxFixedArity = 2;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), b = cljs.core.rest(cljs.core.next(b));
    return a(d, e, b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.reset_meta_BANG_ = function(a, b) {
  return a.meta = b
};
cljs.core.add_watch = function(a, b, c) {
  return cljs.core._add_watch.call(null, a, b, c)
};
cljs.core.remove_watch = function(a, b) {
  return cljs.core._remove_watch.call(null, a, b)
};
cljs.core.gensym_counter = null;
cljs.core.gensym = function() {
  var a = null, b = function() {
    return a.call(null, "G__")
  }, c = function(a) {
    null == cljs.core.gensym_counter && (cljs.core.gensym_counter = cljs.core.atom.call(null, 0));
    return cljs.core.symbol.call(null, [cljs.core.str(a), cljs.core.str(cljs.core.swap_BANG_.call(null, cljs.core.gensym_counter, cljs.core.inc))].join(""))
  }, a = function(a) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c.call(this, a)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$0 = b;
  a.cljs$lang$arity$1 = c;
  return a
}();
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;
cljs.core.Delay = function(a, b) {
  this.state = a;
  this.f = b;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 1073774592
};
cljs.core.Delay.cljs$lang$type = !0;
cljs.core.Delay.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/Delay")
};
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = function() {
  return(new cljs.core.Keyword("\ufdd0'done")).call(null, cljs.core.deref.call(null, this.state))
};
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = function() {
  var a = this;
  return(new cljs.core.Keyword("\ufdd0'value")).call(null, cljs.core.swap_BANG_.call(null, a.state, function(b) {
    var b = cljs.core.seq_QMARK_.call(null, b) ? cljs.core.apply.call(null, cljs.core.hash_map, b) : b, c = cljs.core._lookup.call(null, b, "\ufdd0'done", null);
    return cljs.core.truth_(c) ? b : cljs.core.ObjMap.fromObject(["\ufdd0'done", "\ufdd0'value"], {"\ufdd0'done":!0, "\ufdd0'value":a.f.call(null)})
  }))
};
cljs.core.Delay;
cljs.core.delay_QMARK_ = function(a) {
  return cljs.core.instance_QMARK_.call(null, cljs.core.Delay, a)
};
cljs.core.force = function(a) {
  return cljs.core.delay_QMARK_.call(null, a) ? cljs.core.deref.call(null, a) : a
};
cljs.core.realized_QMARK_ = function(a) {
  return cljs.core._realized_QMARK_.call(null, a)
};
cljs.core.js__GT_clj = function() {
  var a = function(a, b) {
    var e = cljs.core.seq_QMARK_.call(null, b) ? cljs.core.apply.call(null, cljs.core.hash_map, b) : b, e = cljs.core._lookup.call(null, e, "\ufdd0'keywordize-keys", null), f = cljs.core.truth_(e) ? cljs.core.keyword : cljs.core.str;
    return function h(a) {
      return cljs.core.seq_QMARK_.call(null, a) ? cljs.core.doall.call(null, cljs.core.map.call(null, h, a)) : cljs.core.coll_QMARK_.call(null, a) ? cljs.core.into.call(null, cljs.core.empty.call(null, a), cljs.core.map.call(null, h, a)) : cljs.core.truth_(goog.isArray(a)) ? cljs.core.vec.call(null, cljs.core.map.call(null, h, a)) : cljs.core.type.call(null, a) === Object ? cljs.core.into.call(null, cljs.core.ObjMap.EMPTY, function() {
        return function k(b) {
          return new cljs.core.LazySeq(null, !1, function() {
            for(;;) {
              var c = cljs.core.seq.call(null, b);
              if(c) {
                c = cljs.core.first.call(null, c);
                return cljs.core.cons.call(null, cljs.core.PersistentVector.fromArray([f.call(null, c), h.call(null, a[c])], true), k.call(null, cljs.core.rest.call(null, b)))
              }
              return null
            }
          }, null)
        }.call(null, cljs.core.js_keys.call(null, a))
      }()) : a
    }.call(null, a)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a(d, b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.memoize = function(a) {
  var b = cljs.core.atom.call(null, cljs.core.ObjMap.EMPTY);
  return function() {
    var c = function(c) {
      var d = cljs.core._lookup.call(null, cljs.core.deref.call(null, b), c, null);
      if(cljs.core.truth_(d)) {
        return d
      }
      d = cljs.core.apply.call(null, a, c);
      cljs.core.swap_BANG_.call(null, b, cljs.core.assoc, c, d);
      return d
    }, d = function(a) {
      var b = null;
      goog.isDef(a) && (b = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, b)
    };
    d.cljs$lang$maxFixedArity = 0;
    d.cljs$lang$applyTo = function(a) {
      a = cljs.core.seq(a);
      return c(a)
    };
    d.cljs$lang$arity$variadic = c;
    return d
  }()
};
cljs.core.trampoline = function() {
  var a = null, b = function(a) {
    for(;;) {
      if(a = a.call(null), !cljs.core.fn_QMARK_.call(null, a)) {
        return a
      }
    }
  }, c = function() {
    var b = function(b, c) {
      return a.call(null, function() {
        return cljs.core.apply.call(null, b, c)
      })
    }, c = function(a, c) {
      var e = null;
      goog.isDef(c) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, a, e)
    };
    c.cljs$lang$maxFixedArity = 1;
    c.cljs$lang$applyTo = function(a) {
      var c = cljs.core.first(a), a = cljs.core.rest(a);
      return b(c, a)
    };
    c.cljs$lang$arity$variadic = b;
    return c
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      default:
        return c.cljs$lang$arity$variadic(a, cljs.core.array_seq(arguments, 1))
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$maxFixedArity = 1;
  a.cljs$lang$applyTo = c.cljs$lang$applyTo;
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$variadic = c.cljs$lang$arity$variadic;
  return a
}();
cljs.core.rand = function() {
  var a = null, b = function() {
    return a.call(null, 1)
  }, c = function(a) {
    return Math.random.call(null) * a
  }, a = function(a) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c.call(this, a)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$0 = b;
  a.cljs$lang$arity$1 = c;
  return a
}();
cljs.core.rand_int = function(a) {
  return Math.floor.call(null, Math.random.call(null) * a)
};
cljs.core.rand_nth = function(a) {
  return cljs.core.nth.call(null, a, cljs.core.rand_int.call(null, cljs.core.count.call(null, a)))
};
cljs.core.group_by = function(a, b) {
  return cljs.core.reduce.call(null, function(b, d) {
    var e = a.call(null, d);
    return cljs.core.assoc.call(null, b, e, cljs.core.conj.call(null, cljs.core._lookup.call(null, b, e, cljs.core.PersistentVector.EMPTY), d))
  }, cljs.core.ObjMap.EMPTY, b)
};
cljs.core.make_hierarchy = function() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":cljs.core.ObjMap.EMPTY, "\ufdd0'descendants":cljs.core.ObjMap.EMPTY, "\ufdd0'ancestors":cljs.core.ObjMap.EMPTY})
};
cljs.core.global_hierarchy = cljs.core.atom.call(null, cljs.core.make_hierarchy.call(null));
cljs.core.isa_QMARK_ = function() {
  var a = null, b = function(b, c) {
    return a.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), b, c)
  }, c = function(b, c, f) {
    var g = cljs.core._EQ_.call(null, c, f);
    if(!g && !(g = cljs.core.contains_QMARK_.call(null, (new cljs.core.Keyword("\ufdd0'ancestors")).call(null, b).call(null, c), f)) && (g = cljs.core.vector_QMARK_.call(null, f))) {
      if(g = cljs.core.vector_QMARK_.call(null, c)) {
        if(g = cljs.core.count.call(null, f) === cljs.core.count.call(null, c)) {
          for(var g = !0, h = 0;;) {
            var i;
            i = (i = cljs.core.not.call(null, g)) ? i : h === cljs.core.count.call(null, f);
            if(i) {
              return g
            }
            g = a.call(null, b, c.call(null, h), f.call(null, h));
            h += 1
          }
        }else {
          return g
        }
      }else {
        return g
      }
    }else {
      return g
    }
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.parents = function() {
  var a = null, b = function(b) {
    return a.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), b)
  }, c = function(a, b) {
    return cljs.core.not_empty.call(null, cljs.core._lookup.call(null, (new cljs.core.Keyword("\ufdd0'parents")).call(null, a), b, null))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.ancestors = function() {
  var a = null, b = function(b) {
    return a.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), b)
  }, c = function(a, b) {
    return cljs.core.not_empty.call(null, cljs.core._lookup.call(null, (new cljs.core.Keyword("\ufdd0'ancestors")).call(null, a), b, null))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.descendants = function() {
  var a = null, b = function(b) {
    return a.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), b)
  }, c = function(a, b) {
    return cljs.core.not_empty.call(null, cljs.core._lookup.call(null, (new cljs.core.Keyword("\ufdd0'descendants")).call(null, a), b, null))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
cljs.core.derive = function() {
  var a = null, b = function(b, c) {
    if(!cljs.core.truth_(cljs.core.namespace.call(null, c))) {
      throw Error([cljs.core.str("Assert failed: "), cljs.core.str(cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'namespace", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 6724, "\ufdd0'column", 12))))].join(""));
    }
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, a, b, c);
    return null
  }, c = function(a, b, c) {
    if(!cljs.core.not_EQ_.call(null, b, c)) {
      throw Error([cljs.core.str("Assert failed: "), cljs.core.str(cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'not=", "\ufdd1'tag", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 6728, "\ufdd0'column", 12))))].join(""));
    }
    var g = (new cljs.core.Keyword("\ufdd0'parents")).call(null, a), h = (new cljs.core.Keyword("\ufdd0'descendants")).call(null, a), i = (new cljs.core.Keyword("\ufdd0'ancestors")).call(null, a), j = function(a, b, c, d, e) {
      return cljs.core.reduce.call(null, function(a, b) {
        return cljs.core.assoc.call(null, a, b, cljs.core.reduce.call(null, cljs.core.conj, cljs.core._lookup.call(null, e, b, cljs.core.PersistentHashSet.EMPTY), cljs.core.cons.call(null, d, e.call(null, d))))
      }, a, cljs.core.cons.call(null, b, c.call(null, b)))
    };
    if(cljs.core.contains_QMARK_.call(null, g.call(null, b), c)) {
      b = null
    }else {
      if(cljs.core.contains_QMARK_.call(null, i.call(null, b), c)) {
        throw Error([cljs.core.str(b), cljs.core.str("already has"), cljs.core.str(c), cljs.core.str("as ancestor")].join(""));
      }
      if(cljs.core.contains_QMARK_.call(null, i.call(null, c), b)) {
        throw Error([cljs.core.str("Cyclic derivation:"), cljs.core.str(c), cljs.core.str("has"), cljs.core.str(b), cljs.core.str("as ancestor")].join(""));
      }
      b = cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'ancestors", "\ufdd0'descendants"], {"\ufdd0'parents":cljs.core.assoc.call(null, (new cljs.core.Keyword("\ufdd0'parents")).call(null, a), b, cljs.core.conj.call(null, cljs.core._lookup.call(null, g, b, cljs.core.PersistentHashSet.EMPTY), c)), "\ufdd0'ancestors":j.call(null, (new cljs.core.Keyword("\ufdd0'ancestors")).call(null, a), b, h, c, i), "\ufdd0'descendants":j.call(null, (new cljs.core.Keyword("\ufdd0'descendants")).call(null, 
      a), c, i, b, h)})
    }
    return cljs.core.truth_(b) ? b : a
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.underive = function() {
  var a = null, b = function(b, c) {
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, a, b, c);
    return null
  }, c = function(a, b, c) {
    var g = (new cljs.core.Keyword("\ufdd0'parents")).call(null, a), h = cljs.core.truth_(g.call(null, b)) ? cljs.core.disj.call(null, g.call(null, b), c) : cljs.core.PersistentHashSet.EMPTY, h = cljs.core.truth_(cljs.core.not_empty.call(null, h)) ? cljs.core.assoc.call(null, g, b, h) : cljs.core.dissoc.call(null, g, b), h = cljs.core.flatten.call(null, cljs.core.map.call(null, function(a) {
      return cljs.core.cons.call(null, cljs.core.first.call(null, a), cljs.core.interpose.call(null, cljs.core.first.call(null, a), cljs.core.second.call(null, a)))
    }, cljs.core.seq.call(null, h)));
    return cljs.core.contains_QMARK_.call(null, g.call(null, b), c) ? cljs.core.reduce.call(null, function(a, b) {
      return cljs.core.apply.call(null, cljs.core.derive, a, b)
    }, cljs.core.make_hierarchy.call(null), cljs.core.partition.call(null, 2, h)) : a
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
cljs.core.reset_cache = function(a, b, c, d) {
  cljs.core.swap_BANG_.call(null, a, function() {
    return cljs.core.deref.call(null, b)
  });
  return cljs.core.swap_BANG_.call(null, c, function() {
    return cljs.core.deref.call(null, d)
  })
};
cljs.core.prefers_STAR_ = function prefers_STAR_(b, c, d) {
  var e = cljs.core.deref.call(null, d).call(null, b), e = cljs.core.truth_(cljs.core.truth_(e) ? e.call(null, c) : e) ? !0 : null;
  if(cljs.core.truth_(e)) {
    return e
  }
  e = function() {
    for(var e = cljs.core.parents.call(null, c);;) {
      if(0 < cljs.core.count.call(null, e)) {
        cljs.core.truth_(prefers_STAR_.call(null, b, cljs.core.first.call(null, e), d)), e = cljs.core.rest.call(null, e)
      }else {
        return null
      }
    }
  }();
  if(cljs.core.truth_(e)) {
    return e
  }
  e = function() {
    for(var e = cljs.core.parents.call(null, b);;) {
      if(0 < cljs.core.count.call(null, e)) {
        cljs.core.truth_(prefers_STAR_.call(null, cljs.core.first.call(null, e), c, d)), e = cljs.core.rest.call(null, e)
      }else {
        return null
      }
    }
  }();
  return cljs.core.truth_(e) ? e : !1
};
cljs.core.dominates = function(a, b, c) {
  c = cljs.core.prefers_STAR_.call(null, a, b, c);
  return cljs.core.truth_(c) ? c : cljs.core.isa_QMARK_.call(null, a, b)
};
cljs.core.find_and_cache_best_method = function find_and_cache_best_method(b, c, d, e, f, g, h) {
  var i = cljs.core.reduce.call(null, function(d, e) {
    var g = cljs.core.nth.call(null, e, 0, null);
    cljs.core.nth.call(null, e, 1, null);
    if(cljs.core.isa_QMARK_.call(null, c, g)) {
      var h = cljs.core.truth_(function() {
        var b = null == d;
        return b ? b : cljs.core.dominates.call(null, g, cljs.core.first.call(null, d), f)
      }()) ? e : d;
      if(!cljs.core.truth_(cljs.core.dominates.call(null, cljs.core.first.call(null, h), g, f))) {
        throw Error([cljs.core.str("Multiple methods in multimethod '"), cljs.core.str(b), cljs.core.str("' match dispatch value: "), cljs.core.str(c), cljs.core.str(" -> "), cljs.core.str(g), cljs.core.str(" and "), cljs.core.str(cljs.core.first.call(null, h)), cljs.core.str(", and neither is preferred")].join(""));
      }
      return h
    }
    return d
  }, null, cljs.core.deref.call(null, e));
  if(cljs.core.truth_(i)) {
    if(cljs.core._EQ_.call(null, cljs.core.deref.call(null, h), cljs.core.deref.call(null, d))) {
      return cljs.core.swap_BANG_.call(null, g, cljs.core.assoc, c, cljs.core.second.call(null, i)), cljs.core.second.call(null, i)
    }
    cljs.core.reset_cache.call(null, g, e, h, d);
    return find_and_cache_best_method.call(null, b, c, d, e, f, g, h)
  }
  return null
};
cljs.core.IMultiFn = {};
cljs.core._reset = function(a) {
  if(a ? a.cljs$core$IMultiFn$_reset$arity$1 : a) {
    return a.cljs$core$IMultiFn$_reset$arity$1(a)
  }
  var b;
  b = cljs.core._reset[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._reset._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IMultiFn.-reset", a);
  }
  return b.call(null, a)
};
cljs.core._add_method = function(a, b, c) {
  if(a ? a.cljs$core$IMultiFn$_add_method$arity$3 : a) {
    return a.cljs$core$IMultiFn$_add_method$arity$3(a, b, c)
  }
  var d;
  d = cljs.core._add_method[goog.typeOf(null == a ? null : a)];
  if(!d && (d = cljs.core._add_method._, !d)) {
    throw cljs.core.missing_protocol.call(null, "IMultiFn.-add-method", a);
  }
  return d.call(null, a, b, c)
};
cljs.core._remove_method = function(a, b) {
  if(a ? a.cljs$core$IMultiFn$_remove_method$arity$2 : a) {
    return a.cljs$core$IMultiFn$_remove_method$arity$2(a, b)
  }
  var c;
  c = cljs.core._remove_method[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._remove_method._, !c)) {
    throw cljs.core.missing_protocol.call(null, "IMultiFn.-remove-method", a);
  }
  return c.call(null, a, b)
};
cljs.core._prefer_method = function(a, b, c) {
  if(a ? a.cljs$core$IMultiFn$_prefer_method$arity$3 : a) {
    return a.cljs$core$IMultiFn$_prefer_method$arity$3(a, b, c)
  }
  var d;
  d = cljs.core._prefer_method[goog.typeOf(null == a ? null : a)];
  if(!d && (d = cljs.core._prefer_method._, !d)) {
    throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefer-method", a);
  }
  return d.call(null, a, b, c)
};
cljs.core._get_method = function(a, b) {
  if(a ? a.cljs$core$IMultiFn$_get_method$arity$2 : a) {
    return a.cljs$core$IMultiFn$_get_method$arity$2(a, b)
  }
  var c;
  c = cljs.core._get_method[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._get_method._, !c)) {
    throw cljs.core.missing_protocol.call(null, "IMultiFn.-get-method", a);
  }
  return c.call(null, a, b)
};
cljs.core._methods = function(a) {
  if(a ? a.cljs$core$IMultiFn$_methods$arity$1 : a) {
    return a.cljs$core$IMultiFn$_methods$arity$1(a)
  }
  var b;
  b = cljs.core._methods[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._methods._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IMultiFn.-methods", a);
  }
  return b.call(null, a)
};
cljs.core._prefers = function(a) {
  if(a ? a.cljs$core$IMultiFn$_prefers$arity$1 : a) {
    return a.cljs$core$IMultiFn$_prefers$arity$1(a)
  }
  var b;
  b = cljs.core._prefers[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.core._prefers._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefers", a);
  }
  return b.call(null, a)
};
cljs.core._dispatch = function(a, b) {
  if(a ? a.cljs$core$IMultiFn$_dispatch$arity$2 : a) {
    return a.cljs$core$IMultiFn$_dispatch$arity$2(a, b)
  }
  var c;
  c = cljs.core._dispatch[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.core._dispatch._, !c)) {
    throw cljs.core.missing_protocol.call(null, "IMultiFn.-dispatch", a);
  }
  return c.call(null, a, b)
};
cljs.core.do_dispatch = function(a, b, c) {
  b = cljs.core.apply.call(null, b, c);
  a = cljs.core._get_method.call(null, a, b);
  if(!cljs.core.truth_(a)) {
    throw Error([cljs.core.str("No method in multimethod '"), cljs.core.str(cljs.core.name), cljs.core.str("' for dispatch value: "), cljs.core.str(b)].join(""));
  }
  return cljs.core.apply.call(null, a, c)
};
cljs.core.MultiFn = function(a, b, c, d, e, f, g, h) {
  this.name = a;
  this.dispatch_fn = b;
  this.default_dispatch_val = c;
  this.hierarchy = d;
  this.method_table = e;
  this.prefer_table = f;
  this.method_cache = g;
  this.cached_hierarchy = h;
  this.cljs$lang$protocol_mask$partition0$ = 4194304;
  this.cljs$lang$protocol_mask$partition1$ = 64
};
cljs.core.MultiFn.cljs$lang$type = !0;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/MultiFn")
};
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return goog.getUid(a)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = function(a) {
  cljs.core.swap_BANG_.call(null, this.method_table, function() {
    return cljs.core.ObjMap.EMPTY
  });
  cljs.core.swap_BANG_.call(null, this.method_cache, function() {
    return cljs.core.ObjMap.EMPTY
  });
  cljs.core.swap_BANG_.call(null, this.prefer_table, function() {
    return cljs.core.ObjMap.EMPTY
  });
  cljs.core.swap_BANG_.call(null, this.cached_hierarchy, function() {
    return null
  });
  return a
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = function(a, b, c) {
  cljs.core.swap_BANG_.call(null, this.method_table, cljs.core.assoc, b, c);
  cljs.core.reset_cache.call(null, this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy);
  return a
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = function(a, b) {
  cljs.core.swap_BANG_.call(null, this.method_table, cljs.core.dissoc, b);
  cljs.core.reset_cache.call(null, this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy);
  return a
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = function(a, b) {
  cljs.core._EQ_.call(null, cljs.core.deref.call(null, this.cached_hierarchy), cljs.core.deref.call(null, this.hierarchy)) || cljs.core.reset_cache.call(null, this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy);
  var c = cljs.core.deref.call(null, this.method_cache).call(null, b);
  if(cljs.core.truth_(c)) {
    return c
  }
  c = cljs.core.find_and_cache_best_method.call(null, this.name, b, this.hierarchy, this.method_table, this.prefer_table, this.method_cache, this.cached_hierarchy);
  return cljs.core.truth_(c) ? c : cljs.core.deref.call(null, this.method_table).call(null, this.default_dispatch_val)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = function(a, b, c) {
  if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null, b, c, this.prefer_table))) {
    throw Error([cljs.core.str("Preference conflict in multimethod '"), cljs.core.str(this.name), cljs.core.str("': "), cljs.core.str(c), cljs.core.str(" is already preferred to "), cljs.core.str(b)].join(""));
  }
  cljs.core.swap_BANG_.call(null, this.prefer_table, function(a) {
    return cljs.core.assoc.call(null, a, b, cljs.core.conj.call(null, cljs.core._lookup.call(null, a, b, cljs.core.PersistentHashSet.EMPTY), c))
  });
  return cljs.core.reset_cache.call(null, this.method_cache, this.method_table, this.cached_hierarchy, this.hierarchy)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = function() {
  return cljs.core.deref.call(null, this.method_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = function() {
  return cljs.core.deref.call(null, this.prefer_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = function(a, b) {
  return cljs.core.do_dispatch.call(null, a, this.dispatch_fn, b)
};
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = function() {
  var a = function(a, b) {
    return cljs.core._dispatch.call(null, this, b)
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a(d, b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.core.MultiFn.prototype.apply = function(a, b) {
  return cljs.core._dispatch.call(null, this, b)
};
cljs.core.remove_all_methods = function(a) {
  return cljs.core._reset.call(null, a)
};
cljs.core.remove_method = function(a, b) {
  return cljs.core._remove_method.call(null, a, b)
};
cljs.core.prefer_method = function(a, b, c) {
  return cljs.core._prefer_method.call(null, a, b, c)
};
cljs.core.methods$ = function(a) {
  return cljs.core._methods.call(null, a)
};
cljs.core.get_method = function(a, b) {
  return cljs.core._get_method.call(null, a, b)
};
cljs.core.prefers = function(a) {
  return cljs.core._prefers.call(null, a)
};
cljs.core.UUID = function(a) {
  this.uuid = a;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 543162368
};
cljs.core.UUID.cljs$lang$type = !0;
cljs.core.UUID.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.core/UUID")
};
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  return goog.string.hashCode(cljs.core.pr_str.call(null, a))
};
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function() {
  return cljs.core.list.call(null, [cljs.core.str('#uuid "'), cljs.core.str(this.uuid), cljs.core.str('"')].join(""))
};
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  var c = cljs.core.instance_QMARK_.call(null, cljs.core.UUID, b);
  return c ? this.uuid === b.uuid : c
};
cljs.core.UUID.prototype.toString = function() {
  return cljs.core.pr_str.call(null, this)
};
cljs.core.UUID;
var subpar = {paredit:{}};
subpar.paredit.code = "c";
subpar.paredit.cmmnt = ";";
subpar.paredit.string = '"';
subpar.paredit.openers = cljs.core.PersistentHashSet.fromArray(["(", "[", "{"]);
subpar.paredit.closers = cljs.core.PersistentHashSet.fromArray([")", "]", "}"]);
subpar.paredit.opener_QMARK_ = function(a) {
  return cljs.core.contains_QMARK_.call(null, subpar.paredit.openers, a)
};
subpar.paredit.closer_QMARK_ = function(a) {
  return cljs.core.contains_QMARK_.call(null, subpar.paredit.closers, a)
};
subpar.paredit.whitespace_QMARK_ = function(a) {
  var b = cljs.core._EQ_.call(null, a, "\t");
  return b ? b : (b = cljs.core._EQ_.call(null, a, " ")) ? b : cljs.core._EQ_.call(null, a, "\n")
};
subpar.paredit.get_opening_delimiter_index_with_parse = function(a, b) {
  return cljs.core.nth.call(null, cljs.core.nth.call(null, (new cljs.core.Keyword("\ufdd0'chars")).call(null, a), b), 1)
};
subpar.paredit.get_closing_delimiter_index_with_parse = function(a, b) {
  return cljs.core.get_in.call(null, a, cljs.core.PersistentVector.fromArray(["\ufdd0'families", subpar.paredit.get_opening_delimiter_index_with_parse.call(null, a, b), "\ufdd0'closer"], !0))
};
subpar.paredit.get_opening_delimiter_index = function(a, b) {
  return subpar.paredit.get_opening_delimiter_index_with_parse.call(null, subpar.paredit.parse.call(null, a), b)
};
subpar.paredit.get_closing_delimiter_index = function(a, b) {
  return subpar.paredit.get_closing_delimiter_index_with_parse.call(null, subpar.paredit.parse.call(null, a), b)
};
subpar.paredit.get_wrapper = function(a, b) {
  return cljs.core.PersistentVector.fromArray([subpar.paredit.get_opening_delimiter_index_with_parse.call(null, a, b), subpar.paredit.get_closing_delimiter_index_with_parse.call(null, a, b)], !0)
};
subpar.paredit.get_mode = function(a, b) {
  return cljs.core.nth.call(null, cljs.core.nth.call(null, (new cljs.core.Keyword("\ufdd0'chars")).call(null, a), b), 0)
};
subpar.paredit.in_QMARK_ = function(a, b, c) {
  var d;
  d = (d = 0 <= b) ? b <= cljs.core.count.call(null, (new cljs.core.Keyword("\ufdd0'chars")).call(null, a)) : d;
  return cljs.core.truth_(d) ? cljs.core._EQ_.call(null, c, subpar.paredit.get_mode.call(null, a, b)) : d
};
subpar.paredit.in_comment_QMARK_ = function(a, b) {
  return subpar.paredit.in_QMARK_.call(null, a, b, subpar.paredit.cmmnt)
};
subpar.paredit.in_code_QMARK_ = function(a, b) {
  return subpar.paredit.in_QMARK_.call(null, a, b, subpar.paredit.code)
};
subpar.paredit.in_string_QMARK_ = function(a, b) {
  return subpar.paredit.in_QMARK_.call(null, a, b, subpar.paredit.string)
};
subpar.paredit.in_string = function(a, b) {
  return subpar.paredit.in_string_QMARK_.call(null, subpar.paredit.parse.call(null, a), b)
};
subpar.paredit.n_str_QMARK_ = cljs.core.complement.call(null, subpar.paredit.in_string_QMARK_);
subpar.paredit.get_all_siblings = function(a, b) {
  return cljs.core.get_in.call(null, b, cljs.core.PersistentVector.fromArray(["\ufdd0'families", subpar.paredit.get_opening_delimiter_index_with_parse.call(null, b, a), "\ufdd0'children"], !0))
};
subpar.paredit.get_siblings = function(a, b, c, d) {
  return cljs.core.sort.call(null, cljs.core.filter.call(null, c, b.call(null, subpar.paredit.get_all_siblings.call(null, a, d))))
};
subpar.paredit.count_lines = function(a, b, c) {
  return cljs.core.truth_(b) ? cljs.core.truth_(c) ? cljs.core.count.call(null, cljs.core.filter.call(null, function(a) {
    return cljs.core._EQ_.call(null, "\n", a)
  }, cljs.core.drop.call(null, b, cljs.core.drop_last.call(null, cljs.core.count.call(null, a) - c - 1, cljs.core.take.call(null, cljs.core.count.call(null, a), a))))) + 1 : c : b
};
subpar.paredit.escaped_QMARK_ = function(a, b) {
  return cljs.core.odd_QMARK_.call(null, function() {
    for(var c = 0, d = b - 1;;) {
      var e = cljs.core.nth.call(null, a, d, null);
      if(0 > d || null == e || cljs.core.not_EQ_.call(null, "\\", e)) {
        return c
      }
      d -= 1;
      c += 1
    }
  }())
};
subpar.paredit.closes_list_QMARK_ = function(a, b) {
  return cljs.core.some.call(null, cljs.core.PersistentHashSet.fromArray([b]), cljs.core.map.call(null, "\ufdd0'closer", cljs.core.vals.call(null, (new cljs.core.Keyword("\ufdd0'families")).call(null, a))))
};
subpar.paredit.opens_list_QMARK_ = function(a, b) {
  return cljs.core.some.call(null, cljs.core.PersistentHashSet.fromArray([b]), cljs.core.keys.call(null, (new cljs.core.Keyword("\ufdd0'families")).call(null, a)))
};
subpar.paredit.backward_up_fn = function(a, b) {
  var c = subpar.paredit.get_wrapper.call(null, subpar.paredit.parse.call(null, a), b), d = cljs.core.nth.call(null, c, 0, null);
  cljs.core.nth.call(null, c, 1, null);
  return cljs.core._EQ_.call(null, -1, d) ? b : d
};
subpar.paredit.forward_delete_action = function(a, b) {
  var c = subpar.paredit.parse.call(null, a), d = b - 1, e = b + 1;
  cljs.core.nth.call(null, a, b, null);
  return b >= cljs.core.count.call(null, a) ? 0 : cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null, a, b)) ? 2 : cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null, a, e)) ? 3 : cljs.core._EQ_.call(null, cljs.core.PersistentVector.fromArray([d, b], !0), subpar.paredit.get_wrapper.call(null, c, b)) ? 2 : cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null, c, b)) ? 0 : cljs.core._EQ_.call(null, cljs.core.PersistentVector.fromArray([b, e], !0), subpar.paredit.get_wrapper.call(null, 
  c, e)) ? 3 : cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null, c, b)) ? 4 : 1
};
subpar.paredit.backward_delete_action = function(a, b) {
  var c = subpar.paredit.parse.call(null, a), d = b - 2, e = b - 1;
  return 0 >= b ? 0 : cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null, a, e)) ? 3 : cljs.core.truth_(subpar.paredit.escaped_QMARK_.call(null, a, b)) ? 2 : cljs.core._EQ_.call(null, cljs.core.PersistentVector.fromArray([d, e], !0), subpar.paredit.get_wrapper.call(null, c, e)) ? 3 : cljs.core.truth_(subpar.paredit.closes_list_QMARK_.call(null, c, e)) ? 4 : cljs.core._EQ_.call(null, cljs.core.PersistentVector.fromArray([e, b], !0), subpar.paredit.get_wrapper.call(null, c, b)) ? 2 : cljs.core.truth_(subpar.paredit.opens_list_QMARK_.call(null, 
  c, e)) ? 0 : 1
};
subpar.paredit.double_quote_action = function(a, b) {
  var c = subpar.paredit.parse.call(null, a);
  return 0 > b ? 0 : b >= cljs.core.count.call(null, a) ? 0 : cljs.core.truth_(subpar.paredit.in_comment_QMARK_.call(null, c, b)) ? 3 : cljs.core.truth_(subpar.paredit.n_str_QMARK_.call(null, c, b)) ? 0 : cljs.core._EQ_.call(null, '"', cljs.core.nth.call(null, a, b)) ? 2 : 1
};
subpar.paredit.close_expression_vals = function(a, b) {
  var c = subpar.paredit.get_wrapper.call(null, a, b), d = cljs.core.nth.call(null, c, 0, null), c = cljs.core.nth.call(null, c, 1, null);
  if(cljs.core._EQ_.call(null, -1, d)) {
    return cljs.core.PersistentVector.EMPTY
  }
  var e = cljs.core.last.call(null, subpar.paredit.get_siblings.call(null, b, cljs.core.vals, cljs.core.identity, a)), d = cljs.core.truth_(e) ? e : d;
  d += 1;
  e = cljs.core.not_EQ_.call(null, d, c);
  return cljs.core.PersistentVector.fromArray([e, d, c, e ? d + 1 : c + 1], !0)
};
subpar.paredit.get_start_of_next_list = function(a, b) {
  var c = subpar.paredit.parse.call(null, a), d = cljs.core.first.call(null, subpar.paredit.get_siblings.call(null, b, cljs.core.keys, function(a) {
    var d = a >= b;
    return d ? cljs.core.get_in.call(null, c, cljs.core.PersistentVector.fromArray(["\ufdd0'families", a], !0)) : d
  }, c));
  return null == d ? !1 : d
};
subpar.paredit.forward_down_fn = function(a, b) {
  var c = subpar.paredit.get_start_of_next_list.call(null, a, b);
  return cljs.core.truth_(c) ? c + 1 : b
};
subpar.paredit.backward_fn = function(a, b) {
  var c = subpar.paredit.parse.call(null, a), d = cljs.core.last.call(null, subpar.paredit.get_siblings.call(null, b, cljs.core.keys, function(a) {
    return a < b
  }, c)), c = subpar.paredit.get_opening_delimiter_index_with_parse.call(null, c, b);
  return cljs.core.truth_(d) ? d : 0 > c ? 0 : c
};
subpar.paredit.backward_down_fn = function(a, b) {
  var c = subpar.paredit.parse.call(null, a), d = cljs.core.last.call(null, subpar.paredit.get_siblings.call(null, b, cljs.core.vals, function(a) {
    var d = a < b;
    return d ? subpar.paredit.closes_list_QMARK_.call(null, c, a) : d
  }, c));
  return cljs.core.truth_(d) ? d : b
};
subpar.paredit.forward_up_fn = function(a, b) {
  var c = subpar.paredit.parse.call(null, a), d = subpar.paredit.get_wrapper.call(null, c, b), c = cljs.core.nth.call(null, d, 0, null), d = cljs.core.nth.call(null, d, 1, null);
  return cljs.core.not_EQ_.call(null, -1, c) ? d + 1 : b
};
subpar.paredit.forward_fn = function(a, b) {
  var c = subpar.paredit.parse.call(null, a), d = cljs.core.first.call(null, subpar.paredit.get_siblings.call(null, b, cljs.core.vals, function(a) {
    return a >= b
  }, c)), c = subpar.paredit.get_closing_delimiter_index_with_parse.call(null, c, b), e = cljs.core.count.call(null, a);
  return cljs.core.truth_(d) ? d + 1 : cljs.core.truth_(c) ? c + 1 < e ? c + 1 : e : e
};
subpar.paredit.forward_slurp_vals = function(a, b) {
  var c = subpar.paredit.parse.call(null, a), d = subpar.paredit.get_wrapper.call(null, c, b), e = cljs.core.nth.call(null, d, 0, null), f = cljs.core.nth.call(null, d, 1, null), g = cljs.core.not_EQ_.call(null, -1, e), d = g ? cljs.core.nth.call(null, a, f, !1) : g, h = function() {
    return g ? cljs.core.first.call(null, subpar.paredit.get_siblings.call(null, e, cljs.core.vals, function(a) {
      return a > f
    }, c)) : g
  }();
  return cljs.core.truth_(cljs.core.truth_(d) ? cljs.core.truth_(f) ? h : f : d) ? cljs.core.PersistentVector.fromArray([d, f, h + 1, subpar.paredit.count_lines.call(null, a, e, h + 1)], !0) : cljs.core.PersistentVector.EMPTY
};
subpar.paredit.backward_slurp_vals = function(a, b) {
  var c = subpar.paredit.parse.call(null, a), d = subpar.paredit.get_wrapper.call(null, c, b), e = cljs.core.nth.call(null, d, 0, null), d = cljs.core.nth.call(null, d, 1, null), f = cljs.core.not_EQ_.call(null, -1, e), g = function() {
    return f ? cljs.core.last.call(null, subpar.paredit.get_siblings.call(null, e, cljs.core.keys, function(a) {
      return a < e
    }, c)) : f
  }(), h = f ? cljs.core.nth.call(null, a, e, !1) : f;
  return cljs.core.truth_(cljs.core.truth_(h) ? g : h) ? cljs.core.PersistentVector.fromArray([h, e, g, subpar.paredit.count_lines.call(null, a, g, d)], !0) : cljs.core.PersistentVector.EMPTY
};
subpar.paredit.forward_barf_vals = function(a, b) {
  var c = subpar.paredit.parse.call(null, a), d = subpar.paredit.get_wrapper.call(null, c, b), e = cljs.core.nth.call(null, d, 0, null), d = cljs.core.nth.call(null, d, 1, null), f = cljs.core.not_EQ_.call(null, -1, e), c = f ? subpar.paredit.get_siblings.call(null, b, cljs.core.vals, cljs.core.constantly.call(null, !0), c) : f, f = cljs.core.truth_(d) ? f ? cljs.core.nth.call(null, a, d, null) : f : d, g;
  g = subpar.paredit.count_lines.call(null, a, e, d);
  g = cljs.core.truth_(g) ? g : 1;
  var h = cljs.core.truth_(c) ? cljs.core.count.call(null, c) : 0;
  return 1 < h ? cljs.core.PersistentVector.fromArray([f, d, cljs.core.nth.call(null, c, h - 2) + 1, !1, g, e], !0) : cljs.core._EQ_.call(null, h, 1) ? cljs.core.PersistentVector.fromArray([f, d, e + 1, !0, g, e], !0) : cljs.core.PersistentVector.EMPTY
};
subpar.paredit.backward_barf_vals = function(a, b) {
  var c = subpar.paredit.parse.call(null, a), d = subpar.paredit.get_wrapper.call(null, c, b), e = cljs.core.nth.call(null, d, 0, null), d = cljs.core.nth.call(null, d, 1, null), f = cljs.core.not_EQ_.call(null, -1, e), c = f ? subpar.paredit.get_siblings.call(null, b, cljs.core.keys, cljs.core.constantly.call(null, !0), c) : f, f = cljs.core.truth_(e) ? f ? cljs.core.nth.call(null, a, e, null) : f : e, g;
  g = subpar.paredit.count_lines.call(null, a, e, d);
  g = cljs.core.truth_(g) ? g : 1;
  var h = cljs.core.truth_(c) ? cljs.core.count.call(null, c) : 0;
  return 1 < h ? cljs.core.PersistentVector.fromArray([f, e, cljs.core.second.call(null, c), !1, g], !0) : cljs.core._EQ_.call(null, h, 1) ? cljs.core.PersistentVector.fromArray([f, e, d, !0, g], !0) : cljs.core.PersistentVector.EMPTY
};
subpar.paredit.splice_vals = function(a, b) {
  var c = subpar.paredit.parse.call(null, a), d = subpar.paredit.get_wrapper.call(null, c, b), e = cljs.core.nth.call(null, d, 0, null), d = cljs.core.nth.call(null, d, 1, null);
  if(cljs.core.not_EQ_.call(null, -1, e)) {
    var f = subpar.paredit.get_wrapper.call(null, c, e), c = cljs.core.nth.call(null, f, 0, null), f = cljs.core.nth.call(null, f, 1, null), f = subpar.paredit.count_lines.call(null, a, c, f);
    return cljs.core.PersistentVector.fromArray([e, d, 0 > c ? 0 : c, f], !0)
  }
  return cljs.core.PersistentVector.EMPTY
};
subpar.paredit.splice_delete_backward_vals = function(a, b) {
  var c = subpar.paredit.parse.call(null, a), d = subpar.paredit.get_wrapper.call(null, c, b), e = cljs.core.nth.call(null, d, 0, null), d = cljs.core.nth.call(null, d, 1, null);
  if(cljs.core.not_EQ_.call(null, -1, e)) {
    var f = subpar.paredit.get_wrapper.call(null, c, e), c = cljs.core.nth.call(null, f, 0, null), f = cljs.core.nth.call(null, f, 1, null), f = subpar.paredit.count_lines.call(null, a, c, f);
    return cljs.core.PersistentVector.fromArray([e, e > b ? e : b, d, 0 > c ? 0 : c, f], !0)
  }
  return cljs.core.PersistentVector.EMPTY
};
subpar.paredit.splice_delete_forward_vals = function(a, b) {
  var c = subpar.paredit.parse.call(null, a), d = subpar.paredit.get_wrapper.call(null, c, b), e = cljs.core.nth.call(null, d, 0, null), d = cljs.core.nth.call(null, d, 1, null);
  if(cljs.core.not_EQ_.call(null, -1, e)) {
    var f = subpar.paredit.get_wrapper.call(null, c, e), c = cljs.core.nth.call(null, f, 0, null), f = cljs.core.nth.call(null, f, 1, null), f = subpar.paredit.count_lines.call(null, a, c, f);
    return cljs.core.PersistentVector.fromArray([e, b, d + 1, 0 > c ? 0 : c, f], !0)
  }
  return cljs.core.PersistentVector.EMPTY
};
subpar.paredit.parse = function(a) {
  for(var b = [cljs.core.str(a), cljs.core.str(" ")].join(""), c = 0, d = subpar.paredit.code, e = cljs.core.list.call(null, -1), f = -1, g = cljs.core.PersistentVector.EMPTY, h = cljs.core.PersistentArrayMap.fromArrays([-1], [cljs.core.ObjMap.fromObject(["\ufdd0'children"], {"\ufdd0'children":cljs.core.ObjMap.EMPTY})]), i = !1, j = !1;;) {
    var k = cljs.core.nth.call(null, b, c, null), m = c + 1, l = cljs.core.peek.call(null, e);
    if(cljs.core.truth_(function() {
      var a = null == k;
      return a ? j : a
    }())) {
      return cljs.core.ObjMap.fromObject(["\ufdd0'chars", "\ufdd0'families"], {"\ufdd0'chars":g, "\ufdd0'families":cljs.core.assoc_in.call(null, cljs.core.assoc_in.call(null, h, cljs.core.PersistentVector.fromArray([-1, "\ufdd0'closer"], !0), c - 1), cljs.core.PersistentVector.fromArray([-1, "\ufdd0'children", f], !0), c - 1)})
    }
    if(null == k) {
      return cljs.core.ObjMap.fromObject(["\ufdd0'chars", "\ufdd0'families"], {"\ufdd0'chars":g, "\ufdd0'families":cljs.core.assoc_in.call(null, h, cljs.core.PersistentVector.fromArray([-1, "\ufdd0'closer"], !0), c - 1)})
    }
    if(function() {
      var a = cljs.core.not_EQ_.call(null, subpar.paredit.cmmnt, d);
      return a && (a = cljs.core._EQ_.call(null, "\\", k)) ? (a = cljs.core.not.call(null, i)) ? cljs.core.not.call(null, j) : a : a
    }()) {
      var n = m, o = d, p = e, q = c, r = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), t = cljs.core.assoc_in.call(null, h, cljs.core.PersistentVector.fromArray([l, "\ufdd0'children", c], !0), m), c = n, d = o, e = p, f = q, g = r, h = t, j = i = !0
    }else {
      if(function() {
        var a = cljs.core.not_EQ_.call(null, subpar.paredit.cmmnt, d);
        return a ? (a = cljs.core._EQ_.call(null, "\\", k)) ? cljs.core.not.call(null, i) : a : a
      }()) {
        var s = m, y = d, F = e, Q = c, u = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), v = h, c = s, d = y, e = F, f = Q, g = u, h = v, j = i = !0
      }else {
        if(function() {
          var a = cljs.core._EQ_.call(null, subpar.paredit.code, d);
          return a ? (a = cljs.core._EQ_.call(null, ";", k)) ? cljs.core.not.call(null, i) : a : a
        }()) {
          var w = m, x = subpar.paredit.cmmnt, z = e, A = f, B = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), C = h, c = w, d = x, e = z, f = A, g = B, h = C, j = i = !1
        }else {
          if(function() {
            var a = cljs.core._EQ_.call(null, subpar.paredit.cmmnt, d);
            return a ? cljs.core._EQ_.call(null, "\n", k) : a
          }()) {
            var D = m, E = subpar.paredit.code, G = e, H = f, I = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), J = h, c = D, d = E, e = G, f = H, g = I, h = J, j = i = !1
          }else {
            if(cljs.core._EQ_.call(null, subpar.paredit.cmmnt, d)) {
              var K = m, L = subpar.paredit.cmmnt, M = e, N = f, O = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), P = h, c = K, d = L, e = M, f = N, g = O, h = P, j = i = !1
            }else {
              if(function() {
                var a = cljs.core._EQ_.call(null, subpar.paredit.code, d);
                return a ? (a = cljs.core._EQ_.call(null, '"', k)) ? cljs.core.not.call(null, i) : a : a
              }()) {
                var R = m, S = subpar.paredit.string, T = cljs.core.conj.call(null, e, c), U = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), V = cljs.core.assoc_in.call(null, cljs.core.assoc_in.call(null, h, cljs.core.PersistentVector.fromArray([c, "\ufdd0'children"], !0), cljs.core.ObjMap.EMPTY), cljs.core.PersistentVector.fromArray([l, "\ufdd0'children", c], !0), m), c = R, d = S, e = T, f = -1, g = U, h = V, j = i = !1
              }else {
                if(cljs.core.truth_(function() {
                  var a = cljs.core._EQ_.call(null, subpar.paredit.string, d);
                  return a && (a = cljs.core._EQ_.call(null, '"', k)) ? (a = cljs.core.not.call(null, i)) ? j : a : a
                }())) {
                  var W = m, X = subpar.paredit.code, Y = cljs.core.pop.call(null, e), Z = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), aa = cljs.core.assoc_in.call(null, cljs.core.assoc_in.call(null, cljs.core.assoc_in.call(null, h, cljs.core.PersistentVector.fromArray([l, "\ufdd0'closer"], !0), c), cljs.core.PersistentVector.fromArray([cljs.core.second.call(null, e), "\ufdd0'children", l], !0), c), cljs.core.PersistentVector.fromArray([l, "\ufdd0'children", f], 
                  !0), c - 1), c = W, d = X, e = Y, f = -1, g = Z, h = aa, j = i = !1
                }else {
                  if(function() {
                    var a = cljs.core._EQ_.call(null, subpar.paredit.string, d);
                    return a ? (a = cljs.core._EQ_.call(null, '"', k)) ? cljs.core.not.call(null, i) : a : a
                  }()) {
                    var ba = m, ca = subpar.paredit.code, da = cljs.core.pop.call(null, e), ea = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), fa = cljs.core.assoc_in.call(null, cljs.core.assoc_in.call(null, h, cljs.core.PersistentVector.fromArray([l, "\ufdd0'closer"], !0), c), cljs.core.PersistentVector.fromArray([cljs.core.second.call(null, e), "\ufdd0'children", l], !0), c), c = ba, d = ca, e = da, f = -1, g = ea, h = fa, j = i = !1
                  }else {
                    if(function() {
                      var a = cljs.core._EQ_.call(null, subpar.paredit.string, d);
                      return a ? (a = cljs.core.not.call(null, subpar.paredit.whitespace_QMARK_.call(null, k))) ? cljs.core.not.call(null, j) : a : a
                    }()) {
                      var ga = m, ha = subpar.paredit.string, ia = e, ja = c, ka = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), la = cljs.core.assoc_in.call(null, h, cljs.core.PersistentVector.fromArray([l, "\ufdd0'children", c], !0), c), c = ga, d = ha, e = ia, f = ja, g = ka, h = la, i = !1, j = !0
                    }else {
                      if(cljs.core.truth_(function() {
                        var a = cljs.core._EQ_.call(null, subpar.paredit.string, d);
                        return a ? (a = subpar.paredit.whitespace_QMARK_.call(null, k), cljs.core.truth_(a) ? j : a) : a
                      }())) {
                        var ma = m, na = subpar.paredit.string, oa = e, pa = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), qa = cljs.core.assoc_in.call(null, h, cljs.core.PersistentVector.fromArray([l, "\ufdd0'children", f], !0), c - 1), c = ma, d = na, e = oa, f = -1, g = pa, h = qa, j = i = !1
                      }else {
                        if(cljs.core._EQ_.call(null, subpar.paredit.string, d)) {
                          var ra = m, sa = subpar.paredit.string, ta = e, ua = f, va = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), wa = h, xa = j, c = ra, d = sa, e = ta, f = ua, g = va, h = wa, i = !1, j = xa
                        }else {
                          if(cljs.core.truth_(function() {
                            var a = subpar.paredit.opener_QMARK_.call(null, k);
                            return cljs.core.truth_(a) ? j : a
                          }())) {
                            var ya = m, za = subpar.paredit.code, Aa = cljs.core.conj.call(null, e, c), Ba = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), Ca = cljs.core.assoc_in.call(null, cljs.core.assoc_in.call(null, cljs.core.assoc_in.call(null, h, cljs.core.PersistentVector.fromArray([l, "\ufdd0'children", f], !0), c - 1), cljs.core.PersistentVector.fromArray([l, "\ufdd0'children", c], !0), c), cljs.core.PersistentVector.fromArray([c, "\ufdd0'children"], !0), 
                            cljs.core.ObjMap.EMPTY), c = ya, d = za, e = Aa, f = -1, g = Ba, h = Ca, j = i = !1
                          }else {
                            if(cljs.core.truth_(subpar.paredit.opener_QMARK_.call(null, k))) {
                              var Da = m, Ea = subpar.paredit.code, Fa = cljs.core.conj.call(null, e, c), Ga = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), Ha = cljs.core.assoc_in.call(null, cljs.core.assoc_in.call(null, h, cljs.core.PersistentVector.fromArray([l, "\ufdd0'children", c], !0), c), cljs.core.PersistentVector.fromArray([c, "\ufdd0'children"], !0), cljs.core.ObjMap.EMPTY), c = Da, d = Ea, e = Fa, f = -1, g = Ga, h = Ha, j = i = !1
                            }else {
                              if(cljs.core.truth_(function() {
                                var a = subpar.paredit.closer_QMARK_.call(null, k);
                                return cljs.core.truth_(a) ? j : a
                              }())) {
                                var Ia = m, Ja = subpar.paredit.code, Ka = cljs.core.pop.call(null, e), La = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), Ma = cljs.core.assoc_in.call(null, cljs.core.assoc_in.call(null, cljs.core.assoc_in.call(null, h, cljs.core.PersistentVector.fromArray([l, "\ufdd0'children", f], !0), c - 1), cljs.core.PersistentVector.fromArray([l, "\ufdd0'closer"], !0), c), cljs.core.PersistentVector.fromArray([cljs.core.second.call(null, e), 
                                "\ufdd0'children", l], !0), c), c = Ia, d = Ja, e = Ka, f = -1, g = La, h = Ma, j = i = !1
                              }else {
                                if(cljs.core.truth_(subpar.paredit.closer_QMARK_.call(null, k))) {
                                  var Na = m, Oa = subpar.paredit.code, Pa = cljs.core.pop.call(null, e), Qa = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), Ra = cljs.core.assoc_in.call(null, cljs.core.assoc_in.call(null, h, cljs.core.PersistentVector.fromArray([l, "\ufdd0'closer"], !0), c), cljs.core.PersistentVector.fromArray([cljs.core.second.call(null, e), "\ufdd0'children", l], !0), c), c = Na, d = Oa, e = Pa, f = -1, g = Qa, h = Ra, j = i = !1
                                }else {
                                  if(function() {
                                    var a = cljs.core.not.call(null, subpar.paredit.whitespace_QMARK_.call(null, k));
                                    return a ? cljs.core.not.call(null, j) : a
                                  }()) {
                                    var Sa = m, Ta = subpar.paredit.code, Ua = e, Va = c, Wa = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), Xa = cljs.core.assoc_in.call(null, h, cljs.core.PersistentVector.fromArray([l, "\ufdd0'children", c], !0), c), c = Sa, d = Ta, e = Ua, f = Va, g = Wa, h = Xa, i = !1, j = !0
                                  }else {
                                    if(cljs.core.truth_(function() {
                                      var a = subpar.paredit.whitespace_QMARK_.call(null, k);
                                      return cljs.core.truth_(a) ? j : a
                                    }())) {
                                      var Ya = m, Za = subpar.paredit.code, $a = e, ab = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), bb = cljs.core.assoc_in.call(null, h, cljs.core.PersistentVector.fromArray([l, "\ufdd0'children", f], !0), c - 1), c = Ya, d = Za, e = $a, f = -1, g = ab, h = bb, j = i = !1
                                    }else {
                                      if(cljs.core.truth_(function() {
                                        var a = subpar.paredit.whitespace_QMARK_.call(null, k);
                                        return cljs.core.truth_(a) ? cljs.core.not.call(null, j) : a
                                      }())) {
                                        var cb = m, db = subpar.paredit.code, eb = e, fb = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), gb = h, c = cb, d = db, e = eb, f = -1, g = fb, h = gb, j = i = !1
                                      }else {
                                        if(cljs.core.truth_(function() {
                                          var a = cljs.core.not.call(null, subpar.paredit.whitespace_QMARK_.call(null, k));
                                          return a ? j : a
                                        }())) {
                                          var hb = m, ib = subpar.paredit.code, jb = e, kb = f, lb = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray([d, l], !0)), mb = h, c = hb, d = ib, e = jb, f = kb, g = lb, h = mb, i = !1, j = !0
                                        }else {
                                          var nb = m, ob = subpar.paredit.code, pb = e, qb = f, rb = cljs.core.conj.call(null, g, cljs.core.PersistentVector.fromArray(["?", l], !0)), sb = h, tb = i, ub = j, c = nb, d = ob, e = pb, f = qb, g = rb, h = sb, i = tb, j = ub
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
goog.disposable = {};
goog.disposable.IDisposable = function() {
};
goog.Disposable = function() {
  goog.Disposable.ENABLE_MONITORING && (goog.Disposable.instances_[goog.getUid(this)] = this)
};
goog.Disposable.ENABLE_MONITORING = !1;
goog.Disposable.instances_ = {};
goog.Disposable.getUndisposedObjects = function() {
  var a = [], b;
  for(b in goog.Disposable.instances_) {
    goog.Disposable.instances_.hasOwnProperty(b) && a.push(goog.Disposable.instances_[Number(b)])
  }
  return a
};
goog.Disposable.clearUndisposedObjects = function() {
  goog.Disposable.instances_ = {}
};
goog.Disposable.prototype.disposed_ = !1;
goog.Disposable.prototype.isDisposed = function() {
  return this.disposed_
};
goog.Disposable.prototype.getDisposed = goog.Disposable.prototype.isDisposed;
goog.Disposable.prototype.dispose = function() {
  if(!this.disposed_ && (this.disposed_ = !0, this.disposeInternal(), goog.Disposable.ENABLE_MONITORING)) {
    var a = goog.getUid(this);
    if(!goog.Disposable.instances_.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete goog.Disposable.instances_[a]
  }
};
goog.Disposable.prototype.registerDisposable = function(a) {
  this.dependentDisposables_ || (this.dependentDisposables_ = []);
  this.dependentDisposables_.push(a)
};
goog.Disposable.prototype.disposeInternal = function() {
  this.dependentDisposables_ && goog.disposeAll.apply(null, this.dependentDisposables_)
};
goog.dispose = function(a) {
  a && "function" == typeof a.dispose && a.dispose()
};
goog.disposeAll = function(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    goog.isArrayLike(d) ? goog.disposeAll.apply(null, d) : goog.dispose(d)
  }
};
goog.debug.entryPointRegistry = {};
goog.debug.EntryPointMonitor = function() {
};
goog.debug.entryPointRegistry.refList_ = [];
goog.debug.entryPointRegistry.monitors_ = [];
goog.debug.entryPointRegistry.monitorsMayExist_ = !1;
goog.debug.entryPointRegistry.register = function(a) {
  goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = a;
  if(goog.debug.entryPointRegistry.monitorsMayExist_) {
    for(var b = goog.debug.entryPointRegistry.monitors_, c = 0;c < b.length;c++) {
      a(goog.bind(b[c].wrap, b[c]))
    }
  }
};
goog.debug.entryPointRegistry.monitorAll = function(a) {
  goog.debug.entryPointRegistry.monitorsMayExist_ = !0;
  for(var b = goog.bind(a.wrap, a), c = 0;c < goog.debug.entryPointRegistry.refList_.length;c++) {
    goog.debug.entryPointRegistry.refList_[c](b)
  }
  goog.debug.entryPointRegistry.monitors_.push(a)
};
goog.debug.entryPointRegistry.unmonitorAllIfPossible = function(a) {
  var b = goog.debug.entryPointRegistry.monitors_;
  goog.asserts.assert(a == b[b.length - 1], "Only the most recent monitor can be unwrapped.");
  for(var a = goog.bind(a.unwrap, a), c = 0;c < goog.debug.entryPointRegistry.refList_.length;c++) {
    goog.debug.entryPointRegistry.refList_[c](a)
  }
  b.length--
};
goog.debug.errorHandlerWeakDep = {protectEntryPoint:function(a) {
  return a
}};
goog.userAgent.ASSUME_IE = !1;
goog.userAgent.ASSUME_GECKO = !1;
goog.userAgent.ASSUME_WEBKIT = !1;
goog.userAgent.ASSUME_MOBILE_WEBKIT = !1;
goog.userAgent.ASSUME_OPERA = !1;
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function() {
  return goog.global.navigator ? goog.global.navigator.userAgent : null
};
goog.userAgent.getNavigator = function() {
  return goog.global.navigator
};
goog.userAgent.init_ = function() {
  goog.userAgent.detectedOpera_ = !1;
  goog.userAgent.detectedIe_ = !1;
  goog.userAgent.detectedWebkit_ = !1;
  goog.userAgent.detectedMobile_ = !1;
  goog.userAgent.detectedGecko_ = !1;
  var a;
  if(!goog.userAgent.BROWSER_KNOWN_ && (a = goog.userAgent.getUserAgentString())) {
    var b = goog.userAgent.getNavigator();
    goog.userAgent.detectedOpera_ = 0 == a.indexOf("Opera");
    goog.userAgent.detectedIe_ = !goog.userAgent.detectedOpera_ && -1 != a.indexOf("MSIE");
    goog.userAgent.detectedWebkit_ = !goog.userAgent.detectedOpera_ && -1 != a.indexOf("WebKit");
    goog.userAgent.detectedMobile_ = goog.userAgent.detectedWebkit_ && -1 != a.indexOf("Mobile");
    goog.userAgent.detectedGecko_ = !goog.userAgent.detectedOpera_ && !goog.userAgent.detectedWebkit_ && "Gecko" == b.product
  }
};
goog.userAgent.BROWSER_KNOWN_ || goog.userAgent.init_();
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.userAgent.detectedOpera_;
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.userAgent.detectedIe_;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.userAgent.detectedGecko_;
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.userAgent.detectedWebkit_;
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.detectedMobile_;
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function() {
  var a = goog.userAgent.getNavigator();
  return a && a.platform || ""
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = !1;
goog.userAgent.ASSUME_WINDOWS = !1;
goog.userAgent.ASSUME_LINUX = !1;
goog.userAgent.ASSUME_X11 = !1;
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11;
goog.userAgent.initPlatform_ = function() {
  goog.userAgent.detectedMac_ = goog.string.contains(goog.userAgent.PLATFORM, "Mac");
  goog.userAgent.detectedWindows_ = goog.string.contains(goog.userAgent.PLATFORM, "Win");
  goog.userAgent.detectedLinux_ = goog.string.contains(goog.userAgent.PLATFORM, "Linux");
  goog.userAgent.detectedX11_ = !!goog.userAgent.getNavigator() && goog.string.contains(goog.userAgent.getNavigator().appVersion || "", "X11")
};
goog.userAgent.PLATFORM_KNOWN_ || goog.userAgent.initPlatform_();
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.userAgent.detectedMac_;
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.userAgent.detectedWindows_;
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.detectedLinux_;
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.detectedX11_;
goog.userAgent.determineVersion_ = function() {
  var a = "", b;
  goog.userAgent.OPERA && goog.global.opera ? (a = goog.global.opera.version, a = "function" == typeof a ? a() : a) : (goog.userAgent.GECKO ? b = /rv\:([^\);]+)(\)|;)/ : goog.userAgent.IE ? b = /MSIE\s+([^\);]+)(\)|;)/ : goog.userAgent.WEBKIT && (b = /WebKit\/(\S+)/), b && (a = (a = b.exec(goog.userAgent.getUserAgentString())) ? a[1] : ""));
  return goog.userAgent.IE && (b = goog.userAgent.getDocumentMode_(), b > parseFloat(a)) ? "" + b : a
};
goog.userAgent.getDocumentMode_ = function() {
  var a = goog.global.document;
  return a ? a.documentMode : void 0
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function(a, b) {
  return goog.string.compareVersions(a, b)
};
goog.userAgent.isVersionCache_ = {};
goog.userAgent.isVersion = function(a) {
  return goog.userAgent.isVersionCache_[a] || (goog.userAgent.isVersionCache_[a] = 0 <= goog.string.compareVersions(goog.userAgent.VERSION, a))
};
goog.userAgent.isDocumentModeCache_ = {};
goog.userAgent.isDocumentMode = function(a) {
  return goog.userAgent.isDocumentModeCache_[a] || (goog.userAgent.isDocumentModeCache_[a] = goog.userAgent.IE && document.documentMode && document.documentMode >= a)
};
goog.events = {};
goog.events.BrowserFeature = {HAS_W3C_BUTTON:!goog.userAgent.IE || goog.userAgent.isDocumentMode(9), HAS_W3C_EVENT_SUPPORT:!goog.userAgent.IE || goog.userAgent.isDocumentMode(9), SET_KEY_CODE_TO_PREVENT_DEFAULT:goog.userAgent.IE && !goog.userAgent.isVersion("8")};
goog.events.Event = function(a, b) {
  goog.Disposable.call(this);
  this.type = a;
  this.currentTarget = this.target = b
};
goog.inherits(goog.events.Event, goog.Disposable);
goog.events.Event.prototype.disposeInternal = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
goog.events.Event.prototype.propagationStopped_ = !1;
goog.events.Event.prototype.returnValue_ = !0;
goog.events.Event.prototype.stopPropagation = function() {
  this.propagationStopped_ = !0
};
goog.events.Event.prototype.preventDefault = function() {
  this.returnValue_ = !1
};
goog.events.Event.stopPropagation = function(a) {
  a.stopPropagation()
};
goog.events.Event.preventDefault = function(a) {
  a.preventDefault()
};
goog.events.EventType = {CLICK:"click", DBLCLICK:"dblclick", MOUSEDOWN:"mousedown", MOUSEUP:"mouseup", MOUSEOVER:"mouseover", MOUSEOUT:"mouseout", MOUSEMOVE:"mousemove", SELECTSTART:"selectstart", KEYPRESS:"keypress", KEYDOWN:"keydown", KEYUP:"keyup", BLUR:"blur", FOCUS:"focus", DEACTIVATE:"deactivate", FOCUSIN:goog.userAgent.IE ? "focusin" : "DOMFocusIn", FOCUSOUT:goog.userAgent.IE ? "focusout" : "DOMFocusOut", CHANGE:"change", SELECT:"select", SUBMIT:"submit", INPUT:"input", PROPERTYCHANGE:"propertychange", 
DRAGSTART:"dragstart", DRAGENTER:"dragenter", DRAGOVER:"dragover", DRAGLEAVE:"dragleave", DROP:"drop", TOUCHSTART:"touchstart", TOUCHMOVE:"touchmove", TOUCHEND:"touchend", TOUCHCANCEL:"touchcancel", CONTEXTMENU:"contextmenu", ERROR:"error", HELP:"help", LOAD:"load", LOSECAPTURE:"losecapture", READYSTATECHANGE:"readystatechange", RESIZE:"resize", SCROLL:"scroll", UNLOAD:"unload", HASHCHANGE:"hashchange", PAGEHIDE:"pagehide", PAGESHOW:"pageshow", POPSTATE:"popstate", COPY:"copy", PASTE:"paste", CUT:"cut", 
BEFORECOPY:"beforecopy", BEFORECUT:"beforecut", BEFOREPASTE:"beforepaste", MESSAGE:"message", CONNECT:"connect", TRANSITIONEND:goog.userAgent.WEBKIT ? "webkitTransitionEnd" : goog.userAgent.OPERA ? "oTransitionEnd" : "transitionend"};
goog.reflect = {};
goog.reflect.object = function(a, b) {
  return b
};
goog.reflect.sinkValue = function(a) {
  goog.reflect.sinkValue[" "](a);
  return a
};
goog.reflect.sinkValue[" "] = goog.nullFunction;
goog.reflect.canAccessProperty = function(a, b) {
  try {
    return goog.reflect.sinkValue(a[b]), !0
  }catch(c) {
  }
  return!1
};
goog.events.BrowserEvent = function(a, b) {
  a && this.init(a, b)
};
goog.inherits(goog.events.BrowserEvent, goog.events.Event);
goog.events.BrowserEvent.MouseButton = {LEFT:0, MIDDLE:1, RIGHT:2};
goog.events.BrowserEvent.IEButtonMap = [1, 4, 2];
goog.events.BrowserEvent.prototype.target = null;
goog.events.BrowserEvent.prototype.relatedTarget = null;
goog.events.BrowserEvent.prototype.offsetX = 0;
goog.events.BrowserEvent.prototype.offsetY = 0;
goog.events.BrowserEvent.prototype.clientX = 0;
goog.events.BrowserEvent.prototype.clientY = 0;
goog.events.BrowserEvent.prototype.screenX = 0;
goog.events.BrowserEvent.prototype.screenY = 0;
goog.events.BrowserEvent.prototype.button = 0;
goog.events.BrowserEvent.prototype.keyCode = 0;
goog.events.BrowserEvent.prototype.charCode = 0;
goog.events.BrowserEvent.prototype.ctrlKey = !1;
goog.events.BrowserEvent.prototype.altKey = !1;
goog.events.BrowserEvent.prototype.shiftKey = !1;
goog.events.BrowserEvent.prototype.metaKey = !1;
goog.events.BrowserEvent.prototype.platformModifierKey = !1;
goog.events.BrowserEvent.prototype.event_ = null;
goog.events.BrowserEvent.prototype.init = function(a, b) {
  var c = this.type = a.type;
  goog.events.Event.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  d ? goog.userAgent.GECKO && (goog.reflect.canAccessProperty(d, "nodeName") || (d = null)) : c == goog.events.EventType.MOUSEOVER ? d = a.fromElement : c == goog.events.EventType.MOUSEOUT && (d = a.toElement);
  this.relatedTarget = d;
  this.offsetX = void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.platformModifierKey = goog.userAgent.MAC ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.event_ = a;
  delete this.returnValue_;
  delete this.propagationStopped_
};
goog.events.BrowserEvent.prototype.isButton = function(a) {
  return goog.events.BrowserFeature.HAS_W3C_BUTTON ? this.event_.button == a : "click" == this.type ? a == goog.events.BrowserEvent.MouseButton.LEFT : !!(this.event_.button & goog.events.BrowserEvent.IEButtonMap[a])
};
goog.events.BrowserEvent.prototype.isMouseActionButton = function() {
  return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) && !(goog.userAgent.WEBKIT && goog.userAgent.MAC && this.ctrlKey)
};
goog.events.BrowserEvent.prototype.stopPropagation = function() {
  goog.events.BrowserEvent.superClass_.stopPropagation.call(this);
  this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0
};
goog.events.BrowserEvent.prototype.preventDefault = function() {
  goog.events.BrowserEvent.superClass_.preventDefault.call(this);
  var a = this.event_;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
goog.events.BrowserEvent.prototype.getBrowserEvent = function() {
  return this.event_
};
goog.events.BrowserEvent.prototype.disposeInternal = function() {
  goog.events.BrowserEvent.superClass_.disposeInternal.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.event_ = null
};
goog.events.EventWrapper = function() {
};
goog.events.EventWrapper.prototype.listen = function() {
};
goog.events.EventWrapper.prototype.unlisten = function() {
};
goog.events.Listener = function() {
};
goog.events.Listener.counter_ = 0;
goog.events.Listener.prototype.key = 0;
goog.events.Listener.prototype.removed = !1;
goog.events.Listener.prototype.callOnce = !1;
goog.events.Listener.prototype.init = function(a, b, c, d, e, f) {
  if(goog.isFunction(a)) {
    this.isFunctionListener_ = !0
  }else {
    if(a && a.handleEvent && goog.isFunction(a.handleEvent)) {
      this.isFunctionListener_ = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.listener = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.handler = f;
  this.callOnce = !1;
  this.key = ++goog.events.Listener.counter_;
  this.removed = !1
};
goog.events.Listener.prototype.handleEvent = function(a) {
  return this.isFunctionListener_ ? this.listener.call(this.handler || this.src, a) : this.listener.handleEvent.call(this.listener, a)
};
goog.events.ASSUME_GOOD_GC = !1;
goog.events.listeners_ = {};
goog.events.listenerTree_ = {};
goog.events.sources_ = {};
goog.events.onString_ = "on";
goog.events.onStringMap_ = {};
goog.events.keySeparator_ = "_";
goog.events.listen = function(a, b, c, d, e) {
  if(b) {
    if(goog.isArray(b)) {
      for(var f = 0;f < b.length;f++) {
        goog.events.listen(a, b[f], c, d, e)
      }
      return null
    }
    var d = !!d, g = goog.events.listenerTree_;
    b in g || (g[b] = {count_:0, remaining_:0});
    g = g[b];
    d in g || (g[d] = {count_:0, remaining_:0}, g.count_++);
    var g = g[d], h = goog.getUid(a), i;
    g.remaining_++;
    if(g[h]) {
      i = g[h];
      for(f = 0;f < i.length;f++) {
        if(g = i[f], g.listener == c && g.handler == e) {
          if(g.removed) {
            break
          }
          return i[f].key
        }
      }
    }else {
      i = g[h] = [], g.count_++
    }
    f = goog.events.getProxy();
    f.src = a;
    g = new goog.events.Listener;
    g.init(c, f, a, b, d, e);
    c = g.key;
    f.key = c;
    i.push(g);
    goog.events.listeners_[c] = g;
    goog.events.sources_[h] || (goog.events.sources_[h] = []);
    goog.events.sources_[h].push(g);
    a.addEventListener ? (a == goog.global || !a.customEvent_) && a.addEventListener(b, f, d) : a.attachEvent(goog.events.getOnString_(b), f);
    return c
  }
  throw Error("Invalid event type");
};
goog.events.getProxy = function() {
  var a = goog.events.handleBrowserEvent_, b = goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
};
goog.events.listenOnce = function(a, b, c, d, e) {
  if(goog.isArray(b)) {
    for(var f = 0;f < b.length;f++) {
      goog.events.listenOnce(a, b[f], c, d, e)
    }
    return null
  }
  a = goog.events.listen(a, b, c, d, e);
  goog.events.listeners_[a].callOnce = !0;
  return a
};
goog.events.listenWithWrapper = function(a, b, c, d, e) {
  b.listen(a, c, d, e)
};
goog.events.unlisten = function(a, b, c, d, e) {
  if(goog.isArray(b)) {
    for(var f = 0;f < b.length;f++) {
      goog.events.unlisten(a, b[f], c, d, e)
    }
    return null
  }
  d = !!d;
  a = goog.events.getListeners_(a, b, d);
  if(!a) {
    return!1
  }
  for(f = 0;f < a.length;f++) {
    if(a[f].listener == c && a[f].capture == d && a[f].handler == e) {
      return goog.events.unlistenByKey(a[f].key)
    }
  }
  return!1
};
goog.events.unlistenByKey = function(a) {
  if(!goog.events.listeners_[a]) {
    return!1
  }
  var b = goog.events.listeners_[a];
  if(b.removed) {
    return!1
  }
  var c = b.src, d = b.type, e = b.proxy, f = b.capture;
  c.removeEventListener ? (c == goog.global || !c.customEvent_) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(goog.events.getOnString_(d), e);
  c = goog.getUid(c);
  e = goog.events.listenerTree_[d][f][c];
  if(goog.events.sources_[c]) {
    var g = goog.events.sources_[c];
    goog.array.remove(g, b);
    0 == g.length && delete goog.events.sources_[c]
  }
  b.removed = !0;
  e.needsCleanup_ = !0;
  goog.events.cleanUp_(d, f, c, e);
  delete goog.events.listeners_[a];
  return!0
};
goog.events.unlistenWithWrapper = function(a, b, c, d, e) {
  b.unlisten(a, c, d, e)
};
goog.events.cleanUp_ = function(a, b, c, d) {
  if(!d.locked_ && d.needsCleanup_) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].removed ? d[e].proxy.src = null : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.needsCleanup_ = !1;
    0 == f && (delete goog.events.listenerTree_[a][b][c], goog.events.listenerTree_[a][b].count_--, 0 == goog.events.listenerTree_[a][b].count_ && (delete goog.events.listenerTree_[a][b], goog.events.listenerTree_[a].count_--), 0 == goog.events.listenerTree_[a].count_ && delete goog.events.listenerTree_[a])
  }
};
goog.events.removeAll = function(a, b, c) {
  var d = 0, e = null == b, f = null == c, c = !!c;
  if(null == a) {
    goog.object.forEach(goog.events.sources_, function(a) {
      for(var g = a.length - 1;0 <= g;g--) {
        var h = a[g];
        if((e || b == h.type) && (f || c == h.capture)) {
          goog.events.unlistenByKey(h.key), d++
        }
      }
    })
  }else {
    if(a = goog.getUid(a), goog.events.sources_[a]) {
      for(var a = goog.events.sources_[a], g = a.length - 1;0 <= g;g--) {
        var h = a[g];
        if((e || b == h.type) && (f || c == h.capture)) {
          goog.events.unlistenByKey(h.key), d++
        }
      }
    }
  }
  return d
};
goog.events.getListeners = function(a, b, c) {
  return goog.events.getListeners_(a, b, c) || []
};
goog.events.getListeners_ = function(a, b, c) {
  var d = goog.events.listenerTree_;
  return b in d && (d = d[b], c in d && (d = d[c], a = goog.getUid(a), d[a])) ? d[a] : null
};
goog.events.getListener = function(a, b, c, d, e) {
  d = !!d;
  if(a = goog.events.getListeners_(a, b, d)) {
    for(b = 0;b < a.length;b++) {
      if(!a[b].removed && a[b].listener == c && a[b].capture == d && a[b].handler == e) {
        return a[b]
      }
    }
  }
  return null
};
goog.events.hasListener = function(a, b, c) {
  var a = goog.getUid(a), d = goog.events.sources_[a];
  if(d) {
    var e = goog.isDef(b), f = goog.isDef(c);
    return e && f ? (d = goog.events.listenerTree_[b], !!d && !!d[c] && a in d[c]) : !e && !f ? !0 : goog.array.some(d, function(a) {
      return e && a.type == b || f && a.capture == c
    })
  }
  return!1
};
goog.events.expose = function(a) {
  var b = [], c;
  for(c in a) {
    a[c] && a[c].id ? b.push(c + " = " + a[c] + " (" + a[c].id + ")") : b.push(c + " = " + a[c])
  }
  return b.join("\n")
};
goog.events.getOnString_ = function(a) {
  return a in goog.events.onStringMap_ ? goog.events.onStringMap_[a] : goog.events.onStringMap_[a] = goog.events.onString_ + a
};
goog.events.fireListeners = function(a, b, c, d) {
  var e = goog.events.listenerTree_;
  return b in e && (e = e[b], c in e) ? goog.events.fireListeners_(e[c], a, b, c, d) : !0
};
goog.events.fireListeners_ = function(a, b, c, d, e) {
  var f = 1, b = goog.getUid(b);
  if(a[b]) {
    a.remaining_--;
    a = a[b];
    a.locked_ ? a.locked_++ : a.locked_ = 1;
    try {
      for(var g = a.length, h = 0;h < g;h++) {
        var i = a[h];
        i && !i.removed && (f &= !1 !== goog.events.fireListener(i, e))
      }
    }finally {
      a.locked_--, goog.events.cleanUp_(c, d, b, a)
    }
  }
  return Boolean(f)
};
goog.events.fireListener = function(a, b) {
  var c = a.handleEvent(b);
  a.callOnce && goog.events.unlistenByKey(a.key);
  return c
};
goog.events.getTotalListenerCount = function() {
  return goog.object.getCount(goog.events.listeners_)
};
goog.events.dispatchEvent = function(a, b) {
  var c = b.type || b, d = goog.events.listenerTree_;
  if(!(c in d)) {
    return!0
  }
  if(goog.isString(b)) {
    b = new goog.events.Event(b, a)
  }else {
    if(b instanceof goog.events.Event) {
      b.target = b.target || a
    }else {
      var e = b, b = new goog.events.Event(c, a);
      goog.object.extend(b, e)
    }
  }
  var e = 1, f, d = d[c], c = !0 in d, g;
  if(c) {
    f = [];
    for(g = a;g;g = g.getParentEventTarget()) {
      f.push(g)
    }
    g = d[!0];
    g.remaining_ = g.count_;
    for(var h = f.length - 1;!b.propagationStopped_ && 0 <= h && g.remaining_;h--) {
      b.currentTarget = f[h], e &= goog.events.fireListeners_(g, f[h], b.type, !0, b) && !1 != b.returnValue_
    }
  }
  if(!1 in d) {
    if(g = d[!1], g.remaining_ = g.count_, c) {
      for(h = 0;!b.propagationStopped_ && h < f.length && g.remaining_;h++) {
        b.currentTarget = f[h], e &= goog.events.fireListeners_(g, f[h], b.type, !1, b) && !1 != b.returnValue_
      }
    }else {
      for(d = a;!b.propagationStopped_ && d && g.remaining_;d = d.getParentEventTarget()) {
        b.currentTarget = d, e &= goog.events.fireListeners_(g, d, b.type, !1, b) && !1 != b.returnValue_
      }
    }
  }
  return Boolean(e)
};
goog.events.protectBrowserEventEntryPoint = function(a) {
  goog.events.handleBrowserEvent_ = a.protectEntryPoint(goog.events.handleBrowserEvent_)
};
goog.events.handleBrowserEvent_ = function(a, b) {
  if(!goog.events.listeners_[a]) {
    return!0
  }
  var c = goog.events.listeners_[a], d = c.type, e = goog.events.listenerTree_;
  if(!(d in e)) {
    return!0
  }
  var e = e[d], f, g;
  if(!goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
    f = b || goog.getObjectByName("window.event");
    var h = !0 in e, i = !1 in e;
    if(h) {
      if(goog.events.isMarkedIeEvent_(f)) {
        return!0
      }
      goog.events.markIeEvent_(f)
    }
    var j = new goog.events.BrowserEvent;
    j.init(f, this);
    f = !0;
    try {
      if(h) {
        for(var k = [], m = j.currentTarget;m;m = m.parentNode) {
          k.push(m)
        }
        g = e[!0];
        g.remaining_ = g.count_;
        for(var l = k.length - 1;!j.propagationStopped_ && 0 <= l && g.remaining_;l--) {
          j.currentTarget = k[l], f &= goog.events.fireListeners_(g, k[l], d, !0, j)
        }
        if(i) {
          g = e[!1];
          g.remaining_ = g.count_;
          for(l = 0;!j.propagationStopped_ && l < k.length && g.remaining_;l++) {
            j.currentTarget = k[l], f &= goog.events.fireListeners_(g, k[l], d, !1, j)
          }
        }
      }else {
        f = goog.events.fireListener(c, j)
      }
    }finally {
      k && (k.length = 0), j.dispose()
    }
    return f
  }
  d = new goog.events.BrowserEvent(b, this);
  try {
    f = goog.events.fireListener(c, d)
  }finally {
    d.dispose()
  }
  return f
};
goog.events.markIeEvent_ = function(a) {
  var b = !1;
  if(0 == a.keyCode) {
    try {
      a.keyCode = -1;
      return
    }catch(c) {
      b = !0
    }
  }
  if(b || void 0 == a.returnValue) {
    a.returnValue = !0
  }
};
goog.events.isMarkedIeEvent_ = function(a) {
  return 0 > a.keyCode || void 0 != a.returnValue
};
goog.events.uniqueIdCounter_ = 0;
goog.events.getUniqueId = function(a) {
  return a + "_" + goog.events.uniqueIdCounter_++
};
goog.debug.entryPointRegistry.register(function(a) {
  goog.events.handleBrowserEvent_ = a(goog.events.handleBrowserEvent_)
});
goog.events.EventTarget = function() {
  goog.Disposable.call(this)
};
goog.inherits(goog.events.EventTarget, goog.Disposable);
goog.events.EventTarget.prototype.customEvent_ = !0;
goog.events.EventTarget.prototype.parentEventTarget_ = null;
goog.events.EventTarget.prototype.getParentEventTarget = function() {
  return this.parentEventTarget_
};
goog.events.EventTarget.prototype.setParentEventTarget = function(a) {
  this.parentEventTarget_ = a
};
goog.events.EventTarget.prototype.addEventListener = function(a, b, c, d) {
  goog.events.listen(this, a, b, c, d)
};
goog.events.EventTarget.prototype.removeEventListener = function(a, b, c, d) {
  goog.events.unlisten(this, a, b, c, d)
};
goog.events.EventTarget.prototype.dispatchEvent = function(a) {
  return goog.events.dispatchEvent(this, a)
};
goog.events.EventTarget.prototype.disposeInternal = function() {
  goog.events.EventTarget.superClass_.disposeInternal.call(this);
  goog.events.removeAll(this);
  this.parentEventTarget_ = null
};
goog.Timer = function(a, b) {
  goog.events.EventTarget.call(this);
  this.interval_ = a || 1;
  this.timerObject_ = b || goog.Timer.defaultTimerObject;
  this.boundTick_ = goog.bind(this.tick_, this);
  this.last_ = goog.now()
};
goog.inherits(goog.Timer, goog.events.EventTarget);
goog.Timer.MAX_TIMEOUT_ = 2147483647;
goog.Timer.prototype.enabled = !1;
goog.Timer.defaultTimerObject = goog.global.window;
goog.Timer.intervalScale = 0.8;
goog.Timer.prototype.timer_ = null;
goog.Timer.prototype.getInterval = function() {
  return this.interval_
};
goog.Timer.prototype.setInterval = function(a) {
  this.interval_ = a;
  this.timer_ && this.enabled ? (this.stop(), this.start()) : this.timer_ && this.stop()
};
goog.Timer.prototype.tick_ = function() {
  if(this.enabled) {
    var a = goog.now() - this.last_;
    0 < a && a < this.interval_ * goog.Timer.intervalScale ? this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - a) : (this.dispatchTick(), this.enabled && (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = goog.now()))
  }
};
goog.Timer.prototype.dispatchTick = function() {
  this.dispatchEvent(goog.Timer.TICK)
};
goog.Timer.prototype.start = function() {
  this.enabled = !0;
  this.timer_ || (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = goog.now())
};
goog.Timer.prototype.stop = function() {
  this.enabled = !1;
  this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null)
};
goog.Timer.prototype.disposeInternal = function() {
  goog.Timer.superClass_.disposeInternal.call(this);
  this.stop();
  delete this.timerObject_
};
goog.Timer.TICK = "tick";
goog.Timer.callOnce = function(a, b, c) {
  if(goog.isFunction(a)) {
    c && (a = goog.bind(a, c))
  }else {
    if(a && "function" == typeof a.handleEvent) {
      a = goog.bind(a.handleEvent, a)
    }else {
      throw Error("Invalid listener argument");
    }
  }
  return b > goog.Timer.MAX_TIMEOUT_ ? -1 : goog.Timer.defaultTimerObject.setTimeout(a, b || 0)
};
goog.Timer.clear = function(a) {
  goog.Timer.defaultTimerObject.clearTimeout(a)
};
goog.structs = {};
goog.structs.getCount = function(a) {
  return"function" == typeof a.getCount ? a.getCount() : goog.isArrayLike(a) || goog.isString(a) ? a.length : goog.object.getCount(a)
};
goog.structs.getValues = function(a) {
  if("function" == typeof a.getValues) {
    return a.getValues()
  }
  if(goog.isString(a)) {
    return a.split("")
  }
  if(goog.isArrayLike(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return goog.object.getValues(a)
};
goog.structs.getKeys = function(a) {
  if("function" == typeof a.getKeys) {
    return a.getKeys()
  }
  if("function" != typeof a.getValues) {
    if(goog.isArrayLike(a) || goog.isString(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return goog.object.getKeys(a)
  }
};
goog.structs.contains = function(a, b) {
  return"function" == typeof a.contains ? a.contains(b) : "function" == typeof a.containsValue ? a.containsValue(b) : goog.isArrayLike(a) || goog.isString(a) ? goog.array.contains(a, b) : goog.object.containsValue(a, b)
};
goog.structs.isEmpty = function(a) {
  return"function" == typeof a.isEmpty ? a.isEmpty() : goog.isArrayLike(a) || goog.isString(a) ? goog.array.isEmpty(a) : goog.object.isEmpty(a)
};
goog.structs.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : goog.isArrayLike(a) ? goog.array.clear(a) : goog.object.clear(a)
};
goog.structs.forEach = function(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(goog.isArrayLike(a) || goog.isString(a)) {
      goog.array.forEach(a, b, c)
    }else {
      for(var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0;g < f;g++) {
        b.call(c, e[g], d && d[g], a)
      }
    }
  }
};
goog.structs.filter = function(a, b, c) {
  if("function" == typeof a.filter) {
    return a.filter(b, c)
  }
  if(goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.filter(a, b, c)
  }
  var d, e = goog.structs.getKeys(a), f = goog.structs.getValues(a), g = f.length;
  if(e) {
    d = {};
    for(var h = 0;h < g;h++) {
      b.call(c, f[h], e[h], a) && (d[e[h]] = f[h])
    }
  }else {
    d = [];
    for(h = 0;h < g;h++) {
      b.call(c, f[h], void 0, a) && d.push(f[h])
    }
  }
  return d
};
goog.structs.map = function(a, b, c) {
  if("function" == typeof a.map) {
    return a.map(b, c)
  }
  if(goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.map(a, b, c)
  }
  var d, e = goog.structs.getKeys(a), f = goog.structs.getValues(a), g = f.length;
  if(e) {
    d = {};
    for(var h = 0;h < g;h++) {
      d[e[h]] = b.call(c, f[h], e[h], a)
    }
  }else {
    d = [];
    for(h = 0;h < g;h++) {
      d[h] = b.call(c, f[h], void 0, a)
    }
  }
  return d
};
goog.structs.some = function(a, b, c) {
  if("function" == typeof a.some) {
    return a.some(b, c)
  }
  if(goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.some(a, b, c)
  }
  for(var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0;g < f;g++) {
    if(b.call(c, e[g], d && d[g], a)) {
      return!0
    }
  }
  return!1
};
goog.structs.every = function(a, b, c) {
  if("function" == typeof a.every) {
    return a.every(b, c)
  }
  if(goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.every(a, b, c)
  }
  for(var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0;g < f;g++) {
    if(!b.call(c, e[g], d && d[g], a)) {
      return!1
    }
  }
  return!0
};
goog.structs.Collection = function() {
};
goog.iter = {};
goog.iter.StopIteration = "StopIteration" in goog.global ? goog.global.StopIteration : Error("StopIteration");
goog.iter.Iterator = function() {
};
goog.iter.Iterator.prototype.next = function() {
  throw goog.iter.StopIteration;
};
goog.iter.Iterator.prototype.__iterator__ = function() {
  return this
};
goog.iter.toIterator = function(a) {
  if(a instanceof goog.iter.Iterator) {
    return a
  }
  if("function" == typeof a.__iterator__) {
    return a.__iterator__(!1)
  }
  if(goog.isArrayLike(a)) {
    var b = 0, c = new goog.iter.Iterator;
    c.next = function() {
      for(;;) {
        if(b >= a.length) {
          throw goog.iter.StopIteration;
        }
        if(b in a) {
          return a[b++]
        }
        b++
      }
    };
    return c
  }
  throw Error("Not implemented");
};
goog.iter.forEach = function(a, b, c) {
  if(goog.isArrayLike(a)) {
    try {
      goog.array.forEach(a, b, c)
    }catch(d) {
      if(d !== goog.iter.StopIteration) {
        throw d;
      }
    }
  }else {
    a = goog.iter.toIterator(a);
    try {
      for(;;) {
        b.call(c, a.next(), void 0, a)
      }
    }catch(e) {
      if(e !== goog.iter.StopIteration) {
        throw e;
      }
    }
  }
};
goog.iter.filter = function(a, b, c) {
  var a = goog.iter.toIterator(a), d = new goog.iter.Iterator;
  d.next = function() {
    for(;;) {
      var d = a.next();
      if(b.call(c, d, void 0, a)) {
        return d
      }
    }
  };
  return d
};
goog.iter.range = function(a, b, c) {
  var d = 0, e = a, f = c || 1;
  1 < arguments.length && (d = a, e = b);
  if(0 == f) {
    throw Error("Range step argument must not be zero");
  }
  var g = new goog.iter.Iterator;
  g.next = function() {
    if(f > 0 && d >= e || f < 0 && d <= e) {
      throw goog.iter.StopIteration;
    }
    var a = d;
    d = d + f;
    return a
  };
  return g
};
goog.iter.join = function(a, b) {
  return goog.iter.toArray(a).join(b)
};
goog.iter.map = function(a, b, c) {
  var a = goog.iter.toIterator(a), d = new goog.iter.Iterator;
  d.next = function() {
    for(;;) {
      var d = a.next();
      return b.call(c, d, void 0, a)
    }
  };
  return d
};
goog.iter.reduce = function(a, b, c, d) {
  var e = c;
  goog.iter.forEach(a, function(a) {
    e = b.call(d, e, a)
  });
  return e
};
goog.iter.some = function(a, b, c) {
  a = goog.iter.toIterator(a);
  try {
    for(;;) {
      if(b.call(c, a.next(), void 0, a)) {
        return!0
      }
    }
  }catch(d) {
    if(d !== goog.iter.StopIteration) {
      throw d;
    }
  }
  return!1
};
goog.iter.every = function(a, b, c) {
  a = goog.iter.toIterator(a);
  try {
    for(;;) {
      if(!b.call(c, a.next(), void 0, a)) {
        return!1
      }
    }
  }catch(d) {
    if(d !== goog.iter.StopIteration) {
      throw d;
    }
  }
  return!0
};
goog.iter.chain = function(a) {
  var b = arguments, c = b.length, d = 0, e = new goog.iter.Iterator;
  e.next = function() {
    try {
      if(d >= c) {
        throw goog.iter.StopIteration;
      }
      return goog.iter.toIterator(b[d]).next()
    }catch(a) {
      if(a !== goog.iter.StopIteration || d >= c) {
        throw a;
      }
      d++;
      return this.next()
    }
  };
  return e
};
goog.iter.dropWhile = function(a, b, c) {
  var a = goog.iter.toIterator(a), d = new goog.iter.Iterator, e = !0;
  d.next = function() {
    for(;;) {
      var d = a.next();
      if(!e || !b.call(c, d, void 0, a)) {
        return e = !1, d
      }
    }
  };
  return d
};
goog.iter.takeWhile = function(a, b, c) {
  var a = goog.iter.toIterator(a), d = new goog.iter.Iterator, e = !0;
  d.next = function() {
    for(;;) {
      if(e) {
        var d = a.next();
        if(b.call(c, d, void 0, a)) {
          return d
        }
        e = !1
      }else {
        throw goog.iter.StopIteration;
      }
    }
  };
  return d
};
goog.iter.toArray = function(a) {
  if(goog.isArrayLike(a)) {
    return goog.array.toArray(a)
  }
  var a = goog.iter.toIterator(a), b = [];
  goog.iter.forEach(a, function(a) {
    b.push(a)
  });
  return b
};
goog.iter.equals = function(a, b) {
  var a = goog.iter.toIterator(a), b = goog.iter.toIterator(b), c, d;
  try {
    for(;;) {
      c = d = !1;
      var e = a.next();
      c = !0;
      var f = b.next();
      d = !0;
      if(e != f) {
        break
      }
    }
  }catch(g) {
    if(g !== goog.iter.StopIteration) {
      throw g;
    }
    if(c && !d) {
      return!1
    }
    if(!d) {
      try {
        b.next()
      }catch(h) {
        if(h !== goog.iter.StopIteration) {
          throw h;
        }
        return!0
      }
    }
  }
  return!1
};
goog.iter.nextOrValue = function(a, b) {
  try {
    return goog.iter.toIterator(a).next()
  }catch(c) {
    if(c != goog.iter.StopIteration) {
      throw c;
    }
    return b
  }
};
goog.iter.product = function(a) {
  if(goog.array.some(arguments, function(a) {
    return!a.length
  }) || !arguments.length) {
    return new goog.iter.Iterator
  }
  var b = new goog.iter.Iterator, c = arguments, d = goog.array.repeat(0, c.length);
  b.next = function() {
    if(d) {
      for(var a = goog.array.map(d, function(a, b) {
        return c[b][a]
      }), b = d.length - 1;0 <= b;b--) {
        goog.asserts.assert(d);
        if(d[b] < c[b].length - 1) {
          d[b]++;
          break
        }
        if(0 == b) {
          d = null;
          break
        }
        d[b] = 0
      }
      return a
    }
    throw goog.iter.StopIteration;
  };
  return b
};
goog.iter.cycle = function(a) {
  var b = goog.iter.toIterator(a), c = [], d = 0, a = new goog.iter.Iterator, e = !1;
  a.next = function() {
    var a = null;
    if(!e) {
      try {
        return a = b.next(), c.push(a), a
      }catch(g) {
        if(g != goog.iter.StopIteration || goog.array.isEmpty(c)) {
          throw g;
        }
        e = !0
      }
    }
    a = c[d];
    d = (d + 1) % c.length;
    return a
  };
  return a
};
goog.structs.Map = function(a, b) {
  this.map_ = {};
  this.keys_ = [];
  var c = arguments.length;
  if(1 < c) {
    if(c % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.addAll(a)
  }
};
goog.structs.Map.prototype.count_ = 0;
goog.structs.Map.prototype.version_ = 0;
goog.structs.Map.prototype.getCount = function() {
  return this.count_
};
goog.structs.Map.prototype.getValues = function() {
  this.cleanupKeysArray_();
  for(var a = [], b = 0;b < this.keys_.length;b++) {
    a.push(this.map_[this.keys_[b]])
  }
  return a
};
goog.structs.Map.prototype.getKeys = function() {
  this.cleanupKeysArray_();
  return this.keys_.concat()
};
goog.structs.Map.prototype.containsKey = function(a) {
  return goog.structs.Map.hasKey_(this.map_, a)
};
goog.structs.Map.prototype.containsValue = function(a) {
  for(var b = 0;b < this.keys_.length;b++) {
    var c = this.keys_[b];
    if(goog.structs.Map.hasKey_(this.map_, c) && this.map_[c] == a) {
      return!0
    }
  }
  return!1
};
goog.structs.Map.prototype.equals = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.count_ != a.getCount()) {
    return!1
  }
  var c = b || goog.structs.Map.defaultEquals;
  this.cleanupKeysArray_();
  for(var d, e = 0;d = this.keys_[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
goog.structs.Map.defaultEquals = function(a, b) {
  return a === b
};
goog.structs.Map.prototype.isEmpty = function() {
  return 0 == this.count_
};
goog.structs.Map.prototype.clear = function() {
  this.map_ = {};
  this.version_ = this.count_ = this.keys_.length = 0
};
goog.structs.Map.prototype.remove = function(a) {
  return goog.structs.Map.hasKey_(this.map_, a) ? (delete this.map_[a], this.count_--, this.version_++, this.keys_.length > 2 * this.count_ && this.cleanupKeysArray_(), !0) : !1
};
goog.structs.Map.prototype.cleanupKeysArray_ = function() {
  if(this.count_ != this.keys_.length) {
    for(var a = 0, b = 0;a < this.keys_.length;) {
      var c = this.keys_[a];
      goog.structs.Map.hasKey_(this.map_, c) && (this.keys_[b++] = c);
      a++
    }
    this.keys_.length = b
  }
  if(this.count_ != this.keys_.length) {
    for(var d = {}, b = a = 0;a < this.keys_.length;) {
      c = this.keys_[a], goog.structs.Map.hasKey_(d, c) || (this.keys_[b++] = c, d[c] = 1), a++
    }
    this.keys_.length = b
  }
};
goog.structs.Map.prototype.get = function(a, b) {
  return goog.structs.Map.hasKey_(this.map_, a) ? this.map_[a] : b
};
goog.structs.Map.prototype.set = function(a, b) {
  goog.structs.Map.hasKey_(this.map_, a) || (this.count_++, this.keys_.push(a), this.version_++);
  this.map_[a] = b
};
goog.structs.Map.prototype.addAll = function(a) {
  var b;
  a instanceof goog.structs.Map ? (b = a.getKeys(), a = a.getValues()) : (b = goog.object.getKeys(a), a = goog.object.getValues(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
goog.structs.Map.prototype.clone = function() {
  return new goog.structs.Map(this)
};
goog.structs.Map.prototype.transpose = function() {
  for(var a = new goog.structs.Map, b = 0;b < this.keys_.length;b++) {
    var c = this.keys_[b];
    a.set(this.map_[c], c)
  }
  return a
};
goog.structs.Map.prototype.toObject = function() {
  this.cleanupKeysArray_();
  for(var a = {}, b = 0;b < this.keys_.length;b++) {
    var c = this.keys_[b];
    a[c] = this.map_[c]
  }
  return a
};
goog.structs.Map.prototype.getKeyIterator = function() {
  return this.__iterator__(!0)
};
goog.structs.Map.prototype.getValueIterator = function() {
  return this.__iterator__(!1)
};
goog.structs.Map.prototype.__iterator__ = function(a) {
  this.cleanupKeysArray_();
  var b = 0, c = this.keys_, d = this.map_, e = this.version_, f = this, g = new goog.iter.Iterator;
  g.next = function() {
    for(;;) {
      if(e != f.version_) {
        throw Error("The map has changed since the iterator was created");
      }
      if(b >= c.length) {
        throw goog.iter.StopIteration;
      }
      var g = c[b++];
      return a ? g : d[g]
    }
  };
  return g
};
goog.structs.Map.hasKey_ = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
};
goog.structs.Set = function(a) {
  this.map_ = new goog.structs.Map;
  a && this.addAll(a)
};
goog.structs.Set.getKey_ = function(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + goog.getUid(a) : b.substr(0, 1) + a
};
goog.structs.Set.prototype.getCount = function() {
  return this.map_.getCount()
};
goog.structs.Set.prototype.add = function(a) {
  this.map_.set(goog.structs.Set.getKey_(a), a)
};
goog.structs.Set.prototype.addAll = function(a) {
  for(var a = goog.structs.getValues(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
goog.structs.Set.prototype.removeAll = function(a) {
  for(var a = goog.structs.getValues(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
goog.structs.Set.prototype.remove = function(a) {
  return this.map_.remove(goog.structs.Set.getKey_(a))
};
goog.structs.Set.prototype.clear = function() {
  this.map_.clear()
};
goog.structs.Set.prototype.isEmpty = function() {
  return this.map_.isEmpty()
};
goog.structs.Set.prototype.contains = function(a) {
  return this.map_.containsKey(goog.structs.Set.getKey_(a))
};
goog.structs.Set.prototype.containsAll = function(a) {
  return goog.structs.every(a, this.contains, this)
};
goog.structs.Set.prototype.intersection = function(a) {
  for(var b = new goog.structs.Set, a = goog.structs.getValues(a), c = 0;c < a.length;c++) {
    var d = a[c];
    this.contains(d) && b.add(d)
  }
  return b
};
goog.structs.Set.prototype.getValues = function() {
  return this.map_.getValues()
};
goog.structs.Set.prototype.clone = function() {
  return new goog.structs.Set(this)
};
goog.structs.Set.prototype.equals = function(a) {
  return this.getCount() == goog.structs.getCount(a) && this.isSubsetOf(a)
};
goog.structs.Set.prototype.isSubsetOf = function(a) {
  var b = goog.structs.getCount(a);
  if(this.getCount() > b) {
    return!1
  }
  !(a instanceof goog.structs.Set) && 5 < b && (a = new goog.structs.Set(a));
  return goog.structs.every(this, function(b) {
    return goog.structs.contains(a, b)
  })
};
goog.structs.Set.prototype.__iterator__ = function() {
  return this.map_.__iterator__(!1)
};
goog.debug.catchErrors = function(a, b, c) {
  var c = c || goog.global, d = c.onerror, e = goog.userAgent.WEBKIT ? !b : !!b;
  c.onerror = function(b, c, h) {
    d && d(b, c, h);
    a({message:b, fileName:c, line:h});
    return e
  }
};
goog.debug.expose = function(a, b) {
  if("undefined" == typeof a) {
    return"undefined"
  }
  if(null == a) {
    return"NULL"
  }
  var c = [], d;
  for(d in a) {
    if(b || !goog.isFunction(a[d])) {
      var e = d + " = ";
      try {
        e += a[d]
      }catch(f) {
        e += "*** " + f + " ***"
      }
      c.push(e)
    }
  }
  return c.join("\n")
};
goog.debug.deepExpose = function(a, b) {
  var c = new goog.structs.Set, d = [], e = function(a, g) {
    var h = g + "  ";
    try {
      if(goog.isDef(a)) {
        if(goog.isNull(a)) {
          d.push("NULL")
        }else {
          if(goog.isString(a)) {
            d.push('"' + a.replace(/\n/g, "\n" + g) + '"')
          }else {
            if(goog.isFunction(a)) {
              d.push(("" + a).replace(/\n/g, "\n" + g))
            }else {
              if(goog.isObject(a)) {
                if(c.contains(a)) {
                  d.push("*** reference loop detected ***")
                }else {
                  c.add(a);
                  d.push("{");
                  for(var i in a) {
                    if(b || !goog.isFunction(a[i])) {
                      d.push("\n"), d.push(h), d.push(i + " = "), e(a[i], h)
                    }
                  }
                  d.push("\n" + g + "}")
                }
              }else {
                d.push(a)
              }
            }
          }
        }
      }else {
        d.push("undefined")
      }
    }catch(j) {
      d.push("*** " + j + " ***")
    }
  };
  e(a, "");
  return d.join("")
};
goog.debug.exposeArray = function(a) {
  for(var b = [], c = 0;c < a.length;c++) {
    goog.isArray(a[c]) ? b.push(goog.debug.exposeArray(a[c])) : b.push(a[c])
  }
  return"[ " + b.join(", ") + " ]"
};
goog.debug.exposeException = function(a, b) {
  try {
    var c = goog.debug.normalizeErrorObject(a);
    return"Message: " + goog.string.htmlEscape(c.message) + '\nUrl: <a href="view-source:' + c.fileName + '" target="_new">' + c.fileName + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + goog.string.htmlEscape(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + goog.string.htmlEscape(goog.debug.getStacktrace(b) + "-> ")
  }catch(d) {
    return"Exception trying to expose exception! You win, we lose. " + d
  }
};
goog.debug.normalizeErrorObject = function(a) {
  var b = goog.getObjectByName("window.location.href");
  if(goog.isString(a)) {
    return{message:a, name:"Unknown error", lineNumber:"Not available", fileName:b, stack:"Not available"}
  }
  var c, d, e = !1;
  try {
    c = a.lineNumber || a.line || "Not available"
  }catch(f) {
    c = "Not available", e = !0
  }
  try {
    d = a.fileName || a.filename || a.sourceURL || b
  }catch(g) {
    d = "Not available", e = !0
  }
  return e || !a.lineNumber || !a.fileName || !a.stack ? {message:a.message, name:a.name, lineNumber:c, fileName:d, stack:a.stack || "Not available"} : a
};
goog.debug.enhanceError = function(a, b) {
  var c = "string" == typeof a ? Error(a) : a;
  c.stack || (c.stack = goog.debug.getStacktrace(arguments.callee.caller));
  if(b) {
    for(var d = 0;c["message" + d];) {
      ++d
    }
    c["message" + d] = "" + b
  }
  return c
};
goog.debug.getStacktraceSimple = function(a) {
  for(var b = [], c = arguments.callee.caller, d = 0;c && (!a || d < a);) {
    b.push(goog.debug.getFunctionName(c));
    b.push("()\n");
    try {
      c = c.caller
    }catch(e) {
      b.push("[exception trying to get caller]\n");
      break
    }
    d++;
    if(d >= goog.debug.MAX_STACK_DEPTH) {
      b.push("[...long stack...]");
      break
    }
  }
  a && d >= a ? b.push("[...reached max depth limit...]") : b.push("[end]");
  return b.join("")
};
goog.debug.MAX_STACK_DEPTH = 50;
goog.debug.getStacktrace = function(a) {
  return goog.debug.getStacktraceHelper_(a || arguments.callee.caller, [])
};
goog.debug.getStacktraceHelper_ = function(a, b) {
  var c = [];
  if(goog.array.contains(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < goog.debug.MAX_STACK_DEPTH) {
      c.push(goog.debug.getFunctionName(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = "" + f;
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = goog.debug.getFunctionName(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(goog.debug.getStacktraceHelper_(a.caller, b))
      }catch(g) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
};
goog.debug.setFunctionResolver = function(a) {
  goog.debug.fnNameResolver_ = a
};
goog.debug.getFunctionName = function(a) {
  if(goog.debug.fnNameCache_[a]) {
    return goog.debug.fnNameCache_[a]
  }
  if(goog.debug.fnNameResolver_) {
    var b = goog.debug.fnNameResolver_(a);
    if(b) {
      return goog.debug.fnNameCache_[a] = b
    }
  }
  a = "" + a;
  goog.debug.fnNameCache_[a] || (b = /function ([^\(]+)/.exec(a), goog.debug.fnNameCache_[a] = b ? b[1] : "[Anonymous]");
  return goog.debug.fnNameCache_[a]
};
goog.debug.makeWhitespaceVisible = function(a) {
  return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]")
};
goog.debug.fnNameCache_ = {};
goog.debug.LogRecord = function(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
};
goog.debug.LogRecord.prototype.sequenceNumber_ = 0;
goog.debug.LogRecord.prototype.exception_ = null;
goog.debug.LogRecord.prototype.exceptionText_ = null;
goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS = !0;
goog.debug.LogRecord.nextSequenceNumber_ = 0;
goog.debug.LogRecord.prototype.reset = function(a, b, c, d, e) {
  goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS && (this.sequenceNumber_ = "number" == typeof e ? e : goog.debug.LogRecord.nextSequenceNumber_++);
  this.time_ = d || goog.now();
  this.level_ = a;
  this.msg_ = b;
  this.loggerName_ = c;
  delete this.exception_;
  delete this.exceptionText_
};
goog.debug.LogRecord.prototype.getLoggerName = function() {
  return this.loggerName_
};
goog.debug.LogRecord.prototype.getException = function() {
  return this.exception_
};
goog.debug.LogRecord.prototype.setException = function(a) {
  this.exception_ = a
};
goog.debug.LogRecord.prototype.getExceptionText = function() {
  return this.exceptionText_
};
goog.debug.LogRecord.prototype.setExceptionText = function(a) {
  this.exceptionText_ = a
};
goog.debug.LogRecord.prototype.setLoggerName = function(a) {
  this.loggerName_ = a
};
goog.debug.LogRecord.prototype.getLevel = function() {
  return this.level_
};
goog.debug.LogRecord.prototype.setLevel = function(a) {
  this.level_ = a
};
goog.debug.LogRecord.prototype.getMessage = function() {
  return this.msg_
};
goog.debug.LogRecord.prototype.setMessage = function(a) {
  this.msg_ = a
};
goog.debug.LogRecord.prototype.getMillis = function() {
  return this.time_
};
goog.debug.LogRecord.prototype.setMillis = function(a) {
  this.time_ = a
};
goog.debug.LogRecord.prototype.getSequenceNumber = function() {
  return this.sequenceNumber_
};
goog.debug.LogBuffer = function() {
  goog.asserts.assert(goog.debug.LogBuffer.isBufferingEnabled(), "Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY.");
  this.clear()
};
goog.debug.LogBuffer.getInstance = function() {
  goog.debug.LogBuffer.instance_ || (goog.debug.LogBuffer.instance_ = new goog.debug.LogBuffer);
  return goog.debug.LogBuffer.instance_
};
goog.debug.LogBuffer.CAPACITY = 0;
goog.debug.LogBuffer.prototype.addRecord = function(a, b, c) {
  var d = (this.curIndex_ + 1) % goog.debug.LogBuffer.CAPACITY;
  this.curIndex_ = d;
  if(this.isFull_) {
    return d = this.buffer_[d], d.reset(a, b, c), d
  }
  this.isFull_ = d == goog.debug.LogBuffer.CAPACITY - 1;
  return this.buffer_[d] = new goog.debug.LogRecord(a, b, c)
};
goog.debug.LogBuffer.isBufferingEnabled = function() {
  return 0 < goog.debug.LogBuffer.CAPACITY
};
goog.debug.LogBuffer.prototype.clear = function() {
  this.buffer_ = Array(goog.debug.LogBuffer.CAPACITY);
  this.curIndex_ = -1;
  this.isFull_ = !1
};
goog.debug.LogBuffer.prototype.forEachRecord = function(a) {
  var b = this.buffer_;
  if(b[0]) {
    var c = this.curIndex_, d = this.isFull_ ? c : -1;
    do {
      d = (d + 1) % goog.debug.LogBuffer.CAPACITY, a(b[d])
    }while(d != c)
  }
};
goog.debug.Logger = function(a) {
  this.name_ = a
};
goog.debug.Logger.prototype.parent_ = null;
goog.debug.Logger.prototype.level_ = null;
goog.debug.Logger.prototype.children_ = null;
goog.debug.Logger.prototype.handlers_ = null;
goog.debug.Logger.ENABLE_HIERARCHY = !0;
goog.debug.Logger.ENABLE_HIERARCHY || (goog.debug.Logger.rootHandlers_ = []);
goog.debug.Logger.Level = function(a, b) {
  this.name = a;
  this.value = b
};
goog.debug.Logger.Level.prototype.toString = function() {
  return this.name
};
goog.debug.Logger.Level.OFF = new goog.debug.Logger.Level("OFF", Infinity);
goog.debug.Logger.Level.SHOUT = new goog.debug.Logger.Level("SHOUT", 1200);
goog.debug.Logger.Level.SEVERE = new goog.debug.Logger.Level("SEVERE", 1E3);
goog.debug.Logger.Level.WARNING = new goog.debug.Logger.Level("WARNING", 900);
goog.debug.Logger.Level.INFO = new goog.debug.Logger.Level("INFO", 800);
goog.debug.Logger.Level.CONFIG = new goog.debug.Logger.Level("CONFIG", 700);
goog.debug.Logger.Level.FINE = new goog.debug.Logger.Level("FINE", 500);
goog.debug.Logger.Level.FINER = new goog.debug.Logger.Level("FINER", 400);
goog.debug.Logger.Level.FINEST = new goog.debug.Logger.Level("FINEST", 300);
goog.debug.Logger.Level.ALL = new goog.debug.Logger.Level("ALL", 0);
goog.debug.Logger.Level.PREDEFINED_LEVELS = [goog.debug.Logger.Level.OFF, goog.debug.Logger.Level.SHOUT, goog.debug.Logger.Level.SEVERE, goog.debug.Logger.Level.WARNING, goog.debug.Logger.Level.INFO, goog.debug.Logger.Level.CONFIG, goog.debug.Logger.Level.FINE, goog.debug.Logger.Level.FINER, goog.debug.Logger.Level.FINEST, goog.debug.Logger.Level.ALL];
goog.debug.Logger.Level.predefinedLevelsCache_ = null;
goog.debug.Logger.Level.createPredefinedLevelsCache_ = function() {
  goog.debug.Logger.Level.predefinedLevelsCache_ = {};
  for(var a = 0, b;b = goog.debug.Logger.Level.PREDEFINED_LEVELS[a];a++) {
    goog.debug.Logger.Level.predefinedLevelsCache_[b.value] = b;
    goog.debug.Logger.Level.predefinedLevelsCache_[b.name] = b
  }
};
goog.debug.Logger.Level.getPredefinedLevel = function(a) {
  goog.debug.Logger.Level.predefinedLevelsCache_ || goog.debug.Logger.Level.createPredefinedLevelsCache_();
  return goog.debug.Logger.Level.predefinedLevelsCache_[a] || null
};
goog.debug.Logger.Level.getPredefinedLevelByValue = function(a) {
  goog.debug.Logger.Level.predefinedLevelsCache_ || goog.debug.Logger.Level.createPredefinedLevelsCache_();
  if(a in goog.debug.Logger.Level.predefinedLevelsCache_) {
    return goog.debug.Logger.Level.predefinedLevelsCache_[a]
  }
  for(var b = 0;b < goog.debug.Logger.Level.PREDEFINED_LEVELS.length;++b) {
    var c = goog.debug.Logger.Level.PREDEFINED_LEVELS[b];
    if(c.value <= a) {
      return c
    }
  }
  return null
};
goog.debug.Logger.getLogger = function(a) {
  return goog.debug.LogManager.getLogger(a)
};
goog.debug.Logger.logToProfilers = function(a) {
  goog.global.console && (goog.global.console.timeStamp ? goog.global.console.timeStamp(a) : goog.global.console.markTimeline && goog.global.console.markTimeline(a));
  goog.global.msWriteProfilerMark && goog.global.msWriteProfilerMark(a)
};
goog.debug.Logger.prototype.getName = function() {
  return this.name_
};
goog.debug.Logger.prototype.addHandler = function(a) {
  if(goog.debug.Logger.ENABLE_HIERARCHY) {
    if(!this.handlers_) {
      this.handlers_ = []
    }
    this.handlers_.push(a)
  }else {
    goog.asserts.assert(!this.name_, "Cannot call addHandler on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false.");
    goog.debug.Logger.rootHandlers_.push(a)
  }
};
goog.debug.Logger.prototype.removeHandler = function(a) {
  var b = goog.debug.Logger.ENABLE_HIERARCHY ? this.handlers_ : goog.debug.Logger.rootHandlers_;
  return!!b && goog.array.remove(b, a)
};
goog.debug.Logger.prototype.getParent = function() {
  return this.parent_
};
goog.debug.Logger.prototype.getChildren = function() {
  if(!this.children_) {
    this.children_ = {}
  }
  return this.children_
};
goog.debug.Logger.prototype.setLevel = function(a) {
  if(goog.debug.Logger.ENABLE_HIERARCHY) {
    this.level_ = a
  }else {
    goog.asserts.assert(!this.name_, "Cannot call setLevel() on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false.");
    goog.debug.Logger.rootLevel_ = a
  }
};
goog.debug.Logger.prototype.getLevel = function() {
  return this.level_
};
goog.debug.Logger.prototype.getEffectiveLevel = function() {
  if(!goog.debug.Logger.ENABLE_HIERARCHY) {
    return goog.debug.Logger.rootLevel_
  }
  if(this.level_) {
    return this.level_
  }
  if(this.parent_) {
    return this.parent_.getEffectiveLevel()
  }
  goog.asserts.fail("Root logger has no level set.");
  return null
};
goog.debug.Logger.prototype.isLoggable = function(a) {
  return a.value >= this.getEffectiveLevel().value
};
goog.debug.Logger.prototype.log = function(a, b, c) {
  this.isLoggable(a) && this.doLogRecord_(this.getLogRecord(a, b, c))
};
goog.debug.Logger.prototype.getLogRecord = function(a, b, c) {
  var d = goog.debug.LogBuffer.isBufferingEnabled() ? goog.debug.LogBuffer.getInstance().addRecord(a, b, this.name_) : new goog.debug.LogRecord(a, "" + b, this.name_);
  if(c) {
    d.setException(c);
    d.setExceptionText(goog.debug.exposeException(c, arguments.callee.caller))
  }
  return d
};
goog.debug.Logger.prototype.shout = function(a, b) {
  this.log(goog.debug.Logger.Level.SHOUT, a, b)
};
goog.debug.Logger.prototype.severe = function(a, b) {
  this.log(goog.debug.Logger.Level.SEVERE, a, b)
};
goog.debug.Logger.prototype.warning = function(a, b) {
  this.log(goog.debug.Logger.Level.WARNING, a, b)
};
goog.debug.Logger.prototype.info = function(a, b) {
  this.log(goog.debug.Logger.Level.INFO, a, b)
};
goog.debug.Logger.prototype.config = function(a, b) {
  this.log(goog.debug.Logger.Level.CONFIG, a, b)
};
goog.debug.Logger.prototype.fine = function(a, b) {
  this.log(goog.debug.Logger.Level.FINE, a, b)
};
goog.debug.Logger.prototype.finer = function(a, b) {
  this.log(goog.debug.Logger.Level.FINER, a, b)
};
goog.debug.Logger.prototype.finest = function(a, b) {
  this.log(goog.debug.Logger.Level.FINEST, a, b)
};
goog.debug.Logger.prototype.logRecord = function(a) {
  this.isLoggable(a.getLevel()) && this.doLogRecord_(a)
};
goog.debug.Logger.prototype.doLogRecord_ = function(a) {
  goog.debug.Logger.logToProfilers("log:" + a.getMessage());
  if(goog.debug.Logger.ENABLE_HIERARCHY) {
    for(var b = this;b;) {
      b.callPublish_(a);
      b = b.getParent()
    }
  }else {
    for(var b = 0, c;c = goog.debug.Logger.rootHandlers_[b++];) {
      c(a)
    }
  }
};
goog.debug.Logger.prototype.callPublish_ = function(a) {
  if(this.handlers_) {
    for(var b = 0, c;c = this.handlers_[b];b++) {
      c(a)
    }
  }
};
goog.debug.Logger.prototype.setParent_ = function(a) {
  this.parent_ = a
};
goog.debug.Logger.prototype.addChild_ = function(a, b) {
  this.getChildren()[a] = b
};
goog.debug.LogManager = {};
goog.debug.LogManager.loggers_ = {};
goog.debug.LogManager.rootLogger_ = null;
goog.debug.LogManager.initialize = function() {
  if(!goog.debug.LogManager.rootLogger_) {
    goog.debug.LogManager.rootLogger_ = new goog.debug.Logger("");
    goog.debug.LogManager.loggers_[""] = goog.debug.LogManager.rootLogger_;
    goog.debug.LogManager.rootLogger_.setLevel(goog.debug.Logger.Level.CONFIG)
  }
};
goog.debug.LogManager.getLoggers = function() {
  return goog.debug.LogManager.loggers_
};
goog.debug.LogManager.getRoot = function() {
  goog.debug.LogManager.initialize();
  return goog.debug.LogManager.rootLogger_
};
goog.debug.LogManager.getLogger = function(a) {
  goog.debug.LogManager.initialize();
  return goog.debug.LogManager.loggers_[a] || goog.debug.LogManager.createLogger_(a)
};
goog.debug.LogManager.createFunctionForCatchErrors = function(a) {
  return function(b) {
    (a || goog.debug.LogManager.getRoot()).severe("Error: " + b.message + " (" + b.fileName + " @ Line: " + b.line + ")")
  }
};
goog.debug.LogManager.createLogger_ = function(a) {
  var b = new goog.debug.Logger(a);
  if(goog.debug.Logger.ENABLE_HIERARCHY) {
    var c = a.lastIndexOf("."), d = a.substr(0, c), c = a.substr(c + 1), d = goog.debug.LogManager.getLogger(d);
    d.addChild_(c, b);
    b.setParent_(d)
  }
  return goog.debug.LogManager.loggers_[a] = b
};
goog.json = {};
goog.json.isValid_ = function(a) {
  return/^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
};
goog.json.parse = function(a) {
  a = "" + a;
  if(goog.json.isValid_(a)) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
};
goog.json.unsafeParse = function(a) {
  return eval("(" + a + ")")
};
goog.json.serialize = function(a, b) {
  return(new goog.json.Serializer(b)).serialize(a)
};
goog.json.Serializer = function(a) {
  this.replacer_ = a
};
goog.json.Serializer.prototype.serialize = function(a) {
  var b = [];
  this.serialize_(a, b);
  return b.join("")
};
goog.json.Serializer.prototype.serialize_ = function(a, b) {
  switch(typeof a) {
    case "string":
      this.serializeString_(a, b);
      break;
    case "number":
      this.serializeNumber_(a, b);
      break;
    case "boolean":
      b.push(a);
      break;
    case "undefined":
      b.push("null");
      break;
    case "object":
      if(null == a) {
        b.push("null");
        break
      }
      if(goog.isArray(a)) {
        this.serializeArray_(a, b);
        break
      }
      this.serializeObject_(a, b);
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof a);
  }
};
goog.json.Serializer.charToJsonCharCache_ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
goog.json.Serializer.charsToReplace_ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
goog.json.Serializer.prototype.serializeString_ = function(a, b) {
  b.push('"', a.replace(goog.json.Serializer.charsToReplace_, function(a) {
    if(a in goog.json.Serializer.charToJsonCharCache_) {
      return goog.json.Serializer.charToJsonCharCache_[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return goog.json.Serializer.charToJsonCharCache_[a] = e + b.toString(16)
  }), '"')
};
goog.json.Serializer.prototype.serializeNumber_ = function(a, b) {
  b.push(isFinite(a) && !isNaN(a) ? a : "null")
};
goog.json.Serializer.prototype.serializeArray_ = function(a, b) {
  var c = a.length;
  b.push("[");
  for(var d = "", e = 0;e < c;e++) {
    b.push(d), d = a[e], this.serialize_(this.replacer_ ? this.replacer_.call(a, "" + e, d) : d, b), d = ","
  }
  b.push("]")
};
goog.json.Serializer.prototype.serializeObject_ = function(a, b) {
  b.push("{");
  var c = "", d;
  for(d in a) {
    if(Object.prototype.hasOwnProperty.call(a, d)) {
      var e = a[d];
      "function" != typeof e && (b.push(c), this.serializeString_(d, b), b.push(":"), this.serialize_(this.replacer_ ? this.replacer_.call(a, d, e) : e, b), c = ",")
    }
  }
  b.push("}")
};
goog.net = {};
goog.net.ErrorCode = {NO_ERROR:0, ACCESS_DENIED:1, FILE_NOT_FOUND:2, FF_SILENT_ERROR:3, CUSTOM_ERROR:4, EXCEPTION:5, HTTP_ERROR:6, ABORT:7, TIMEOUT:8, OFFLINE:9};
goog.net.ErrorCode.getDebugMessage = function(a) {
  switch(a) {
    case goog.net.ErrorCode.NO_ERROR:
      return"No Error";
    case goog.net.ErrorCode.ACCESS_DENIED:
      return"Access denied to content document";
    case goog.net.ErrorCode.FILE_NOT_FOUND:
      return"File not found";
    case goog.net.ErrorCode.FF_SILENT_ERROR:
      return"Firefox silently errored";
    case goog.net.ErrorCode.CUSTOM_ERROR:
      return"Application custom error";
    case goog.net.ErrorCode.EXCEPTION:
      return"An exception occurred";
    case goog.net.ErrorCode.HTTP_ERROR:
      return"Http response at 400 or 500 level";
    case goog.net.ErrorCode.ABORT:
      return"Request was aborted";
    case goog.net.ErrorCode.TIMEOUT:
      return"Request timed out";
    case goog.net.ErrorCode.OFFLINE:
      return"The resource is not available offline";
    default:
      return"Unrecognized error code"
  }
};
goog.net.EventType = {COMPLETE:"complete", SUCCESS:"success", ERROR:"error", ABORT:"abort", READY:"ready", READY_STATE_CHANGE:"readystatechange", TIMEOUT:"timeout", INCREMENTAL_DATA:"incrementaldata", PROGRESS:"progress"};
goog.net.HttpStatus = {CONTINUE:100, SWITCHING_PROTOCOLS:101, OK:200, CREATED:201, ACCEPTED:202, NON_AUTHORITATIVE_INFORMATION:203, NO_CONTENT:204, RESET_CONTENT:205, PARTIAL_CONTENT:206, MULTIPLE_CHOICES:300, MOVED_PERMANENTLY:301, FOUND:302, SEE_OTHER:303, NOT_MODIFIED:304, USE_PROXY:305, TEMPORARY_REDIRECT:307, BAD_REQUEST:400, UNAUTHORIZED:401, PAYMENT_REQUIRED:402, FORBIDDEN:403, NOT_FOUND:404, METHOD_NOT_ALLOWED:405, NOT_ACCEPTABLE:406, PROXY_AUTHENTICATION_REQUIRED:407, REQUEST_TIMEOUT:408, 
CONFLICT:409, GONE:410, LENGTH_REQUIRED:411, PRECONDITION_FAILED:412, REQUEST_ENTITY_TOO_LARGE:413, REQUEST_URI_TOO_LONG:414, UNSUPPORTED_MEDIA_TYPE:415, REQUEST_RANGE_NOT_SATISFIABLE:416, EXPECTATION_FAILED:417, INTERNAL_SERVER_ERROR:500, NOT_IMPLEMENTED:501, BAD_GATEWAY:502, SERVICE_UNAVAILABLE:503, GATEWAY_TIMEOUT:504, HTTP_VERSION_NOT_SUPPORTED:505, QUIRK_IE_NO_CONTENT:1223};
goog.net.XmlHttpFactory = function() {
};
goog.net.XmlHttpFactory.prototype.cachedOptions_ = null;
goog.net.XmlHttpFactory.prototype.getOptions = function() {
  return this.cachedOptions_ || (this.cachedOptions_ = this.internalGetOptions())
};
goog.net.WrapperXmlHttpFactory = function(a, b) {
  goog.net.XmlHttpFactory.call(this);
  this.xhrFactory_ = a;
  this.optionsFactory_ = b
};
goog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);
goog.net.WrapperXmlHttpFactory.prototype.createInstance = function() {
  return this.xhrFactory_()
};
goog.net.WrapperXmlHttpFactory.prototype.getOptions = function() {
  return this.optionsFactory_()
};
goog.net.XmlHttp = function() {
  return goog.net.XmlHttp.factory_.createInstance()
};
goog.net.XmlHttp.getOptions = function() {
  return goog.net.XmlHttp.factory_.getOptions()
};
goog.net.XmlHttp.OptionType = {USE_NULL_FUNCTION:0, LOCAL_REQUEST_ERROR:1};
goog.net.XmlHttp.ReadyState = {UNINITIALIZED:0, LOADING:1, LOADED:2, INTERACTIVE:3, COMPLETE:4};
goog.net.XmlHttp.setFactory = function(a, b) {
  goog.net.XmlHttp.setGlobalFactory(new goog.net.WrapperXmlHttpFactory(a, b))
};
goog.net.XmlHttp.setGlobalFactory = function(a) {
  goog.net.XmlHttp.factory_ = a
};
goog.net.DefaultXmlHttpFactory = function() {
  goog.net.XmlHttpFactory.call(this)
};
goog.inherits(goog.net.DefaultXmlHttpFactory, goog.net.XmlHttpFactory);
goog.net.DefaultXmlHttpFactory.prototype.createInstance = function() {
  var a = this.getProgId_();
  return a ? new ActiveXObject(a) : new XMLHttpRequest
};
goog.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function() {
  var a = {};
  this.getProgId_() && (a[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = !0, a[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = !0);
  return a
};
goog.net.DefaultXmlHttpFactory.prototype.ieProgId_ = null;
goog.net.DefaultXmlHttpFactory.prototype.getProgId_ = function() {
  if(!this.ieProgId_ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        return new ActiveXObject(c), this.ieProgId_ = c
      }catch(d) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return this.ieProgId_
};
goog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory);
goog.net.XhrMonitor_ = function() {
  goog.userAgent.GECKO && (this.contextsToXhr_ = {}, this.xhrToContexts_ = {}, this.stack_ = [])
};
goog.net.XhrMonitor_.getKey = function(a) {
  return goog.isString(a) ? a : goog.isObject(a) ? goog.getUid(a) : ""
};
goog.net.XhrMonitor_.prototype.logger_ = goog.debug.Logger.getLogger("goog.net.xhrMonitor");
goog.net.XhrMonitor_.prototype.enabled_ = goog.userAgent.GECKO;
goog.net.XhrMonitor_.prototype.setEnabled = function(a) {
  this.enabled_ = goog.userAgent.GECKO && a
};
goog.net.XhrMonitor_.prototype.pushContext = function(a) {
  if(this.enabled_) {
    var b = goog.net.XhrMonitor_.getKey(a);
    this.logger_.finest("Pushing context: " + a + " (" + b + ")");
    this.stack_.push(b)
  }
};
goog.net.XhrMonitor_.prototype.popContext = function() {
  if(this.enabled_) {
    var a = this.stack_.pop();
    this.logger_.finest("Popping context: " + a);
    this.updateDependentContexts_(a)
  }
};
goog.net.XhrMonitor_.prototype.isContextSafe = function(a) {
  if(!this.enabled_) {
    return!0
  }
  var b = this.contextsToXhr_[goog.net.XhrMonitor_.getKey(a)];
  this.logger_.fine("Context is safe : " + a + " - " + b);
  return!b
};
goog.net.XhrMonitor_.prototype.markXhrOpen = function(a) {
  if(this.enabled_) {
    a = goog.getUid(a);
    this.logger_.fine("Opening XHR : " + a);
    for(var b = 0;b < this.stack_.length;b++) {
      var c = this.stack_[b];
      this.addToMap_(this.contextsToXhr_, c, a);
      this.addToMap_(this.xhrToContexts_, a, c)
    }
  }
};
goog.net.XhrMonitor_.prototype.markXhrClosed = function(a) {
  if(this.enabled_) {
    a = goog.getUid(a);
    this.logger_.fine("Closing XHR : " + a);
    delete this.xhrToContexts_[a];
    for(var b in this.contextsToXhr_) {
      goog.array.remove(this.contextsToXhr_[b], a), 0 == this.contextsToXhr_[b].length && delete this.contextsToXhr_[b]
    }
  }
};
goog.net.XhrMonitor_.prototype.updateDependentContexts_ = function(a) {
  var b = this.xhrToContexts_[a], c = this.contextsToXhr_[a];
  b && c && (this.logger_.finest("Updating dependent contexts"), goog.array.forEach(b, function(a) {
    goog.array.forEach(c, function(b) {
      this.addToMap_(this.contextsToXhr_, a, b);
      this.addToMap_(this.xhrToContexts_, b, a)
    }, this)
  }, this))
};
goog.net.XhrMonitor_.prototype.addToMap_ = function(a, b, c) {
  a[b] || (a[b] = []);
  goog.array.contains(a[b], c) || a[b].push(c)
};
goog.net.xhrMonitor = new goog.net.XhrMonitor_;
goog.uri = {};
goog.uri.utils = {};
goog.uri.utils.CharCode_ = {AMPERSAND:38, EQUAL:61, HASH:35, QUESTION:63};
goog.uri.utils.buildFromEncodedParts = function(a, b, c, d, e, f, g) {
  var h = [];
  a && h.push(a, ":");
  c && (h.push("//"), b && h.push(b, "@"), h.push(c), d && h.push(":", d));
  e && h.push(e);
  f && h.push("?", f);
  g && h.push("#", g);
  return h.join("")
};
goog.uri.utils.splitRe_ = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
goog.uri.utils.ComponentIndex = {SCHEME:1, USER_INFO:2, DOMAIN:3, PORT:4, PATH:5, QUERY_DATA:6, FRAGMENT:7};
goog.uri.utils.split = function(a) {
  return a.match(goog.uri.utils.splitRe_)
};
goog.uri.utils.decodeIfPossible_ = function(a) {
  return a && decodeURIComponent(a)
};
goog.uri.utils.getComponentByIndex_ = function(a, b) {
  return goog.uri.utils.split(b)[a] || null
};
goog.uri.utils.getScheme = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.SCHEME, a)
};
goog.uri.utils.getUserInfoEncoded = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.USER_INFO, a)
};
goog.uri.utils.getUserInfo = function(a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getUserInfoEncoded(a))
};
goog.uri.utils.getDomainEncoded = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.DOMAIN, a)
};
goog.uri.utils.getDomain = function(a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getDomainEncoded(a))
};
goog.uri.utils.getPort = function(a) {
  return Number(goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PORT, a)) || null
};
goog.uri.utils.getPathEncoded = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PATH, a)
};
goog.uri.utils.getPath = function(a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getPathEncoded(a))
};
goog.uri.utils.getQueryData = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.QUERY_DATA, a)
};
goog.uri.utils.getFragmentEncoded = function(a) {
  var b = a.indexOf("#");
  return 0 > b ? null : a.substr(b + 1)
};
goog.uri.utils.setFragmentEncoded = function(a, b) {
  return goog.uri.utils.removeFragment(a) + (b ? "#" + b : "")
};
goog.uri.utils.getFragment = function(a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getFragmentEncoded(a))
};
goog.uri.utils.getHost = function(a) {
  a = goog.uri.utils.split(a);
  return goog.uri.utils.buildFromEncodedParts(a[goog.uri.utils.ComponentIndex.SCHEME], a[goog.uri.utils.ComponentIndex.USER_INFO], a[goog.uri.utils.ComponentIndex.DOMAIN], a[goog.uri.utils.ComponentIndex.PORT])
};
goog.uri.utils.getPathAndAfter = function(a) {
  a = goog.uri.utils.split(a);
  return goog.uri.utils.buildFromEncodedParts(null, null, null, null, a[goog.uri.utils.ComponentIndex.PATH], a[goog.uri.utils.ComponentIndex.QUERY_DATA], a[goog.uri.utils.ComponentIndex.FRAGMENT])
};
goog.uri.utils.removeFragment = function(a) {
  var b = a.indexOf("#");
  return 0 > b ? a : a.substr(0, b)
};
goog.uri.utils.haveSameDomain = function(a, b) {
  var c = goog.uri.utils.split(a), d = goog.uri.utils.split(b);
  return c[goog.uri.utils.ComponentIndex.DOMAIN] == d[goog.uri.utils.ComponentIndex.DOMAIN] && c[goog.uri.utils.ComponentIndex.SCHEME] == d[goog.uri.utils.ComponentIndex.SCHEME] && c[goog.uri.utils.ComponentIndex.PORT] == d[goog.uri.utils.ComponentIndex.PORT]
};
goog.uri.utils.assertNoFragmentsOrQueries_ = function(a) {
  if(goog.DEBUG && (0 <= a.indexOf("#") || 0 <= a.indexOf("?"))) {
    throw Error("goog.uri.utils: Fragment or query identifiers are not supported: [" + a + "]");
  }
};
goog.uri.utils.appendQueryData_ = function(a) {
  if(a[1]) {
    var b = a[0], c = b.indexOf("#");
    0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
    c = b.indexOf("?");
    0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
  }
  return a.join("")
};
goog.uri.utils.appendKeyValuePairs_ = function(a, b, c) {
  if(goog.isArray(b)) {
    for(var d = 0;d < b.length;d++) {
      c.push("&", a), "" !== b[d] && c.push("=", goog.string.urlEncode(b[d]))
    }
  }else {
    null != b && (c.push("&", a), "" !== b && c.push("=", goog.string.urlEncode(b)))
  }
};
goog.uri.utils.buildQueryDataBuffer_ = function(a, b, c) {
  goog.asserts.assert(0 == Math.max(b.length - (c || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
  for(c = c || 0;c < b.length;c += 2) {
    goog.uri.utils.appendKeyValuePairs_(b[c], b[c + 1], a)
  }
  return a
};
goog.uri.utils.buildQueryData = function(a, b) {
  var c = goog.uri.utils.buildQueryDataBuffer_([], a, b);
  c[0] = "";
  return c.join("")
};
goog.uri.utils.buildQueryDataBufferFromMap_ = function(a, b) {
  for(var c in b) {
    goog.uri.utils.appendKeyValuePairs_(c, b[c], a)
  }
  return a
};
goog.uri.utils.buildQueryDataFromMap = function(a) {
  a = goog.uri.utils.buildQueryDataBufferFromMap_([], a);
  a[0] = "";
  return a.join("")
};
goog.uri.utils.appendParams = function(a, b) {
  return goog.uri.utils.appendQueryData_(2 == arguments.length ? goog.uri.utils.buildQueryDataBuffer_([a], arguments[1], 0) : goog.uri.utils.buildQueryDataBuffer_([a], arguments, 1))
};
goog.uri.utils.appendParamsFromMap = function(a, b) {
  return goog.uri.utils.appendQueryData_(goog.uri.utils.buildQueryDataBufferFromMap_([a], b))
};
goog.uri.utils.appendParam = function(a, b, c) {
  return goog.uri.utils.appendQueryData_([a, "&", b, "=", goog.string.urlEncode(c)])
};
goog.uri.utils.findParam_ = function(a, b, c, d) {
  for(var e = c.length;0 <= (b = a.indexOf(c, b)) && b < d;) {
    var f = a.charCodeAt(b - 1);
    if(f == goog.uri.utils.CharCode_.AMPERSAND || f == goog.uri.utils.CharCode_.QUESTION) {
      if(f = a.charCodeAt(b + e), !f || f == goog.uri.utils.CharCode_.EQUAL || f == goog.uri.utils.CharCode_.AMPERSAND || f == goog.uri.utils.CharCode_.HASH) {
        return b
      }
    }
    b += e + 1
  }
  return-1
};
goog.uri.utils.hashOrEndRe_ = /#|$/;
goog.uri.utils.hasParam = function(a, b) {
  return 0 <= goog.uri.utils.findParam_(a, 0, b, a.search(goog.uri.utils.hashOrEndRe_))
};
goog.uri.utils.getParamValue = function(a, b) {
  var c = a.search(goog.uri.utils.hashOrEndRe_), d = goog.uri.utils.findParam_(a, 0, b, c);
  if(0 > d) {
    return null
  }
  var e = a.indexOf("&", d);
  if(0 > e || e > c) {
    e = c
  }
  d += b.length + 1;
  return goog.string.urlDecode(a.substr(d, e - d))
};
goog.uri.utils.getParamValues = function(a, b) {
  for(var c = a.search(goog.uri.utils.hashOrEndRe_), d = 0, e, f = [];0 <= (e = goog.uri.utils.findParam_(a, d, b, c));) {
    d = a.indexOf("&", e);
    if(0 > d || d > c) {
      d = c
    }
    e += b.length + 1;
    f.push(goog.string.urlDecode(a.substr(e, d - e)))
  }
  return f
};
goog.uri.utils.trailingQueryPunctuationRe_ = /[?&]($|#)/;
goog.uri.utils.removeParam = function(a, b) {
  for(var c = a.search(goog.uri.utils.hashOrEndRe_), d = 0, e, f = [];0 <= (e = goog.uri.utils.findParam_(a, d, b, c));) {
    f.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c)
  }
  f.push(a.substr(d));
  return f.join("").replace(goog.uri.utils.trailingQueryPunctuationRe_, "$1")
};
goog.uri.utils.setParam = function(a, b, c) {
  return goog.uri.utils.appendParam(goog.uri.utils.removeParam(a, b), b, c)
};
goog.uri.utils.appendPath = function(a, b) {
  goog.uri.utils.assertNoFragmentsOrQueries_(a);
  goog.string.endsWith(a, "/") && (a = a.substr(0, a.length - 1));
  goog.string.startsWith(b, "/") && (b = b.substr(1));
  return goog.string.buildString(a, "/", b)
};
goog.uri.utils.StandardQueryParam = {RANDOM:"zx"};
goog.uri.utils.makeUnique = function(a) {
  return goog.uri.utils.setParam(a, goog.uri.utils.StandardQueryParam.RANDOM, goog.string.getRandomString())
};
goog.net.XhrIo = function(a) {
  goog.events.EventTarget.call(this);
  this.headers = new goog.structs.Map;
  this.xmlHttpFactory_ = a || null
};
goog.inherits(goog.net.XhrIo, goog.events.EventTarget);
goog.net.XhrIo.ResponseType = {DEFAULT:"", TEXT:"text", DOCUMENT:"document", BLOB:"blob", ARRAY_BUFFER:"arraybuffer"};
goog.net.XhrIo.prototype.logger_ = goog.debug.Logger.getLogger("goog.net.XhrIo");
goog.net.XhrIo.CONTENT_TYPE_HEADER = "Content-Type";
goog.net.XhrIo.HTTP_SCHEME_PATTERN = /^https?:?$/i;
goog.net.XhrIo.FORM_CONTENT_TYPE = "application/x-www-form-urlencoded;charset=utf-8";
goog.net.XhrIo.sendInstances_ = [];
goog.net.XhrIo.send = function(a, b, c, d, e, f) {
  var g = new goog.net.XhrIo;
  goog.net.XhrIo.sendInstances_.push(g);
  b && goog.events.listen(g, goog.net.EventType.COMPLETE, b);
  goog.events.listen(g, goog.net.EventType.READY, goog.partial(goog.net.XhrIo.cleanupSend_, g));
  f && g.setTimeoutInterval(f);
  g.send(a, c, d, e)
};
goog.net.XhrIo.cleanup = function() {
  for(var a = goog.net.XhrIo.sendInstances_;a.length;) {
    a.pop().dispose()
  }
};
goog.net.XhrIo.protectEntryPoints = function(a) {
  goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = a.protectEntryPoint(goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_)
};
goog.net.XhrIo.cleanupSend_ = function(a) {
  a.dispose();
  goog.array.remove(goog.net.XhrIo.sendInstances_, a)
};
goog.net.XhrIo.prototype.active_ = !1;
goog.net.XhrIo.prototype.xhr_ = null;
goog.net.XhrIo.prototype.xhrOptions_ = null;
goog.net.XhrIo.prototype.lastUri_ = "";
goog.net.XhrIo.prototype.lastMethod_ = "";
goog.net.XhrIo.prototype.lastErrorCode_ = goog.net.ErrorCode.NO_ERROR;
goog.net.XhrIo.prototype.lastError_ = "";
goog.net.XhrIo.prototype.errorDispatched_ = !1;
goog.net.XhrIo.prototype.inSend_ = !1;
goog.net.XhrIo.prototype.inOpen_ = !1;
goog.net.XhrIo.prototype.inAbort_ = !1;
goog.net.XhrIo.prototype.timeoutInterval_ = 0;
goog.net.XhrIo.prototype.timeoutId_ = null;
goog.net.XhrIo.prototype.responseType_ = goog.net.XhrIo.ResponseType.DEFAULT;
goog.net.XhrIo.prototype.withCredentials_ = !1;
goog.net.XhrIo.prototype.getTimeoutInterval = function() {
  return this.timeoutInterval_
};
goog.net.XhrIo.prototype.setTimeoutInterval = function(a) {
  this.timeoutInterval_ = Math.max(0, a)
};
goog.net.XhrIo.prototype.setResponseType = function(a) {
  this.responseType_ = a
};
goog.net.XhrIo.prototype.getResponseType = function() {
  return this.responseType_
};
goog.net.XhrIo.prototype.setWithCredentials = function(a) {
  this.withCredentials_ = a
};
goog.net.XhrIo.prototype.getWithCredentials = function() {
  return this.withCredentials_
};
goog.net.XhrIo.prototype.send = function(a, b, c, d) {
  if(this.xhr_) {
    throw Error("[goog.net.XhrIo] Object is active with another request");
  }
  b = b ? b.toUpperCase() : "GET";
  this.lastUri_ = a;
  this.lastError_ = "";
  this.lastErrorCode_ = goog.net.ErrorCode.NO_ERROR;
  this.lastMethod_ = b;
  this.errorDispatched_ = !1;
  this.active_ = !0;
  this.xhr_ = this.createXhr();
  this.xhrOptions_ = this.xmlHttpFactory_ ? this.xmlHttpFactory_.getOptions() : goog.net.XmlHttp.getOptions();
  goog.net.xhrMonitor.markXhrOpen(this.xhr_);
  this.xhr_.onreadystatechange = goog.bind(this.onReadyStateChange_, this);
  try {
    this.logger_.fine(this.formatMsg_("Opening Xhr")), this.inOpen_ = !0, this.xhr_.open(b, a, !0), this.inOpen_ = !1
  }catch(e) {
    this.logger_.fine(this.formatMsg_("Error opening Xhr: " + e.message));
    this.error_(goog.net.ErrorCode.EXCEPTION, e);
    return
  }
  var a = c || "", f = this.headers.clone();
  d && goog.structs.forEach(d, function(a, b) {
    f.set(b, a)
  });
  "POST" == b && !f.containsKey(goog.net.XhrIo.CONTENT_TYPE_HEADER) && f.set(goog.net.XhrIo.CONTENT_TYPE_HEADER, goog.net.XhrIo.FORM_CONTENT_TYPE);
  goog.structs.forEach(f, function(a, b) {
    this.xhr_.setRequestHeader(b, a)
  }, this);
  this.responseType_ && (this.xhr_.responseType = this.responseType_);
  goog.object.containsKey(this.xhr_, "withCredentials") && (this.xhr_.withCredentials = this.withCredentials_);
  try {
    this.timeoutId_ && (goog.Timer.defaultTimerObject.clearTimeout(this.timeoutId_), this.timeoutId_ = null), 0 < this.timeoutInterval_ && (this.logger_.fine(this.formatMsg_("Will abort after " + this.timeoutInterval_ + "ms if incomplete")), this.timeoutId_ = goog.Timer.defaultTimerObject.setTimeout(goog.bind(this.timeout_, this), this.timeoutInterval_)), this.logger_.fine(this.formatMsg_("Sending request")), this.inSend_ = !0, this.xhr_.send(a), this.inSend_ = !1
  }catch(g) {
    this.logger_.fine(this.formatMsg_("Send error: " + g.message)), this.error_(goog.net.ErrorCode.EXCEPTION, g)
  }
};
goog.net.XhrIo.prototype.createXhr = function() {
  return this.xmlHttpFactory_ ? this.xmlHttpFactory_.createInstance() : goog.net.XmlHttp()
};
goog.net.XhrIo.prototype.dispatchEvent = function(a) {
  if(this.xhr_) {
    goog.net.xhrMonitor.pushContext(this.xhr_);
    try {
      return goog.net.XhrIo.superClass_.dispatchEvent.call(this, a)
    }finally {
      goog.net.xhrMonitor.popContext()
    }
  }else {
    return goog.net.XhrIo.superClass_.dispatchEvent.call(this, a)
  }
};
goog.net.XhrIo.prototype.timeout_ = function() {
  "undefined" != typeof goog && this.xhr_ && (this.lastError_ = "Timed out after " + this.timeoutInterval_ + "ms, aborting", this.lastErrorCode_ = goog.net.ErrorCode.TIMEOUT, this.logger_.fine(this.formatMsg_(this.lastError_)), this.dispatchEvent(goog.net.EventType.TIMEOUT), this.abort(goog.net.ErrorCode.TIMEOUT))
};
goog.net.XhrIo.prototype.error_ = function(a, b) {
  this.active_ = !1;
  this.xhr_ && (this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1);
  this.lastError_ = b;
  this.lastErrorCode_ = a;
  this.dispatchErrors_();
  this.cleanUpXhr_()
};
goog.net.XhrIo.prototype.dispatchErrors_ = function() {
  this.errorDispatched_ || (this.errorDispatched_ = !0, this.dispatchEvent(goog.net.EventType.COMPLETE), this.dispatchEvent(goog.net.EventType.ERROR))
};
goog.net.XhrIo.prototype.abort = function(a) {
  this.xhr_ && this.active_ && (this.logger_.fine(this.formatMsg_("Aborting")), this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1, this.lastErrorCode_ = a || goog.net.ErrorCode.ABORT, this.dispatchEvent(goog.net.EventType.COMPLETE), this.dispatchEvent(goog.net.EventType.ABORT), this.cleanUpXhr_())
};
goog.net.XhrIo.prototype.disposeInternal = function() {
  this.xhr_ && (this.active_ && (this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1), this.cleanUpXhr_(!0));
  goog.net.XhrIo.superClass_.disposeInternal.call(this)
};
goog.net.XhrIo.prototype.onReadyStateChange_ = function() {
  if(!this.inOpen_ && !this.inSend_ && !this.inAbort_) {
    this.onReadyStateChangeEntryPoint_()
  }else {
    this.onReadyStateChangeHelper_()
  }
};
goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = function() {
  this.onReadyStateChangeHelper_()
};
goog.net.XhrIo.prototype.onReadyStateChangeHelper_ = function() {
  this.active_ && "undefined" != typeof goog && (this.xhrOptions_[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] && this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE && 2 == this.getStatus() ? this.logger_.fine(this.formatMsg_("Local request error detected and ignored")) : this.inSend_ && this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE ? goog.Timer.defaultTimerObject.setTimeout(goog.bind(this.onReadyStateChange_, this), 0) : (this.dispatchEvent(goog.net.EventType.READY_STATE_CHANGE), 
  this.isComplete() && (this.logger_.fine(this.formatMsg_("Request complete")), this.active_ = !1, this.isSuccess() ? (this.dispatchEvent(goog.net.EventType.COMPLETE), this.dispatchEvent(goog.net.EventType.SUCCESS)) : (this.lastErrorCode_ = goog.net.ErrorCode.HTTP_ERROR, this.lastError_ = this.getStatusText() + " [" + this.getStatus() + "]", this.dispatchErrors_()), this.cleanUpXhr_())))
};
goog.net.XhrIo.prototype.cleanUpXhr_ = function(a) {
  if(this.xhr_) {
    var b = this.xhr_, c = this.xhrOptions_[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] ? goog.nullFunction : null;
    this.xhrOptions_ = this.xhr_ = null;
    this.timeoutId_ && (goog.Timer.defaultTimerObject.clearTimeout(this.timeoutId_), this.timeoutId_ = null);
    a || (goog.net.xhrMonitor.pushContext(b), this.dispatchEvent(goog.net.EventType.READY), goog.net.xhrMonitor.popContext());
    goog.net.xhrMonitor.markXhrClosed(b);
    try {
      b.onreadystatechange = c
    }catch(d) {
      this.logger_.severe("Problem encountered resetting onreadystatechange: " + d.message)
    }
  }
};
goog.net.XhrIo.prototype.isActive = function() {
  return!!this.xhr_
};
goog.net.XhrIo.prototype.isComplete = function() {
  return this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE
};
goog.net.XhrIo.prototype.isSuccess = function() {
  switch(this.getStatus()) {
    case 0:
      return!this.isLastUriEffectiveSchemeHttp_();
    case goog.net.HttpStatus.OK:
    ;
    case goog.net.HttpStatus.CREATED:
    ;
    case goog.net.HttpStatus.ACCEPTED:
    ;
    case goog.net.HttpStatus.NO_CONTENT:
    ;
    case goog.net.HttpStatus.NOT_MODIFIED:
    ;
    case goog.net.HttpStatus.QUIRK_IE_NO_CONTENT:
      return!0;
    default:
      return!1
  }
};
goog.net.XhrIo.prototype.isLastUriEffectiveSchemeHttp_ = function() {
  var a = goog.isString(this.lastUri_) ? goog.uri.utils.getScheme(this.lastUri_) : this.lastUri_.getScheme();
  return a ? goog.net.XhrIo.HTTP_SCHEME_PATTERN.test(a) : self.location ? goog.net.XhrIo.HTTP_SCHEME_PATTERN.test(self.location.protocol) : !0
};
goog.net.XhrIo.prototype.getReadyState = function() {
  return this.xhr_ ? this.xhr_.readyState : goog.net.XmlHttp.ReadyState.UNINITIALIZED
};
goog.net.XhrIo.prototype.getStatus = function() {
  try {
    return this.getReadyState() > goog.net.XmlHttp.ReadyState.LOADED ? this.xhr_.status : -1
  }catch(a) {
    return this.logger_.warning("Can not get status: " + a.message), -1
  }
};
goog.net.XhrIo.prototype.getStatusText = function() {
  try {
    return this.getReadyState() > goog.net.XmlHttp.ReadyState.LOADED ? this.xhr_.statusText : ""
  }catch(a) {
    return this.logger_.fine("Can not get status: " + a.message), ""
  }
};
goog.net.XhrIo.prototype.getLastUri = function() {
  return"" + this.lastUri_
};
goog.net.XhrIo.prototype.getResponseText = function() {
  try {
    return this.xhr_ ? this.xhr_.responseText : ""
  }catch(a) {
    return this.logger_.fine("Can not get responseText: " + a.message), ""
  }
};
goog.net.XhrIo.prototype.getResponseXml = function() {
  try {
    return this.xhr_ ? this.xhr_.responseXML : null
  }catch(a) {
    return this.logger_.fine("Can not get responseXML: " + a.message), null
  }
};
goog.net.XhrIo.prototype.getResponseJson = function(a) {
  if(this.xhr_) {
    var b = this.xhr_.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return goog.json.parse(b)
  }
};
goog.net.XhrIo.prototype.getResponse = function() {
  try {
    if(!this.xhr_) {
      return null
    }
    if("response" in this.xhr_) {
      return this.xhr_.response
    }
    switch(this.responseType_) {
      case goog.net.XhrIo.ResponseType.DEFAULT:
      ;
      case goog.net.XhrIo.ResponseType.TEXT:
        return this.xhr_.responseText;
      case goog.net.XhrIo.ResponseType.ARRAY_BUFFER:
        if("mozResponseArrayBuffer" in this.xhr_) {
          return this.xhr_.mozResponseArrayBuffer
        }
    }
    this.logger_.severe("Response type " + this.responseType_ + " is not supported on this browser");
    return null
  }catch(a) {
    return this.logger_.fine("Can not get response: " + a.message), null
  }
};
goog.net.XhrIo.prototype.getResponseHeader = function(a) {
  return this.xhr_ && this.isComplete() ? this.xhr_.getResponseHeader(a) : void 0
};
goog.net.XhrIo.prototype.getAllResponseHeaders = function() {
  return this.xhr_ && this.isComplete() ? this.xhr_.getAllResponseHeaders() : ""
};
goog.net.XhrIo.prototype.getLastErrorCode = function() {
  return this.lastErrorCode_
};
goog.net.XhrIo.prototype.getLastError = function() {
  return goog.isString(this.lastError_) ? this.lastError_ : "" + this.lastError_
};
goog.net.XhrIo.prototype.formatMsg_ = function(a) {
  return a + " [" + this.lastMethod_ + " " + this.lastUri_ + " " + this.getStatus() + "]"
};
goog.debug.entryPointRegistry.register(function(a) {
  goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = a(goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_)
});
var session = {client:{}};
session.client.subscribe = {};
session.client.subscribe.ISubscribe = {};
session.client.subscribe.receive = function(a, b) {
  if(a ? a.session$client$subscribe$ISubscribe$receive$arity$2 : a) {
    return a.session$client$subscribe$ISubscribe$receive$arity$2(a, b)
  }
  var c;
  c = session.client.subscribe.receive[goog.typeOf(null == a ? null : a)];
  if(!c && (c = session.client.subscribe.receive._, !c)) {
    throw cljs.core.missing_protocol.call(null, "ISubscribe.receive", a);
  }
  return c.call(null, a, b)
};
session.client.subscribe.ws = new WebSocket([cljs.core.str("ws://"), cljs.core.str(document.location.host), cljs.core.str("/service")].join(""));
session.client.subscribe.callbacks = cljs.core.atom.call(null, cljs.core.ObjMap.EMPTY);
session.client.subscribe.subscribe_BANG_ = function(a, b) {
  return cljs.core.swap_BANG_.call(null, session.client.subscribe.callbacks, cljs.core.assoc, a, function(a) {
    return session.client.subscribe.receive.call(null, b, a)
  })
};
session.client.subscribe.ws.onmessage = function(a) {
  a = cljs.reader.read_string.call(null, a.data);
  return cljs.core.deref.call(null, session.client.subscribe.callbacks).call(null, (new cljs.core.Keyword("\ufdd0'id")).call(null, a)).call(null, a)
};
session.client.subscribe.send_BANG_ = function(a) {
  return session.client.subscribe.ws.send(cljs.core.pr_str.call(null, a))
};
cljs.reader = {};
cljs.reader.PushbackReader = {};
cljs.reader.read_char = function(a) {
  if(a ? a.cljs$reader$PushbackReader$read_char$arity$1 : a) {
    return a.cljs$reader$PushbackReader$read_char$arity$1(a)
  }
  var b;
  b = cljs.reader.read_char[goog.typeOf(null == a ? null : a)];
  if(!b && (b = cljs.reader.read_char._, !b)) {
    throw cljs.core.missing_protocol.call(null, "PushbackReader.read-char", a);
  }
  return b.call(null, a)
};
cljs.reader.unread = function(a, b) {
  if(a ? a.cljs$reader$PushbackReader$unread$arity$2 : a) {
    return a.cljs$reader$PushbackReader$unread$arity$2(a, b)
  }
  var c;
  c = cljs.reader.unread[goog.typeOf(null == a ? null : a)];
  if(!c && (c = cljs.reader.unread._, !c)) {
    throw cljs.core.missing_protocol.call(null, "PushbackReader.unread", a);
  }
  return c.call(null, a, b)
};
cljs.reader.StringPushbackReader = function(a, b, c) {
  this.s = a;
  this.index_atom = b;
  this.buffer_atom = c
};
cljs.reader.StringPushbackReader.cljs$lang$type = !0;
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "cljs.reader/StringPushbackReader")
};
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = !0;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = function() {
  if(cljs.core.empty_QMARK_.call(null, cljs.core.deref.call(null, this.buffer_atom))) {
    var a = cljs.core.deref.call(null, this.index_atom);
    cljs.core.swap_BANG_.call(null, this.index_atom, cljs.core.inc);
    return this.s[a]
  }
  a = cljs.core.deref.call(null, this.buffer_atom);
  cljs.core.swap_BANG_.call(null, this.buffer_atom, cljs.core.rest);
  return cljs.core.first.call(null, a)
};
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = function(a, b) {
  return cljs.core.swap_BANG_.call(null, this.buffer_atom, function(a) {
    return cljs.core.cons.call(null, b, a)
  })
};
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = function(a) {
  return new cljs.reader.StringPushbackReader(a, cljs.core.atom.call(null, 0), cljs.core.atom.call(null, null))
};
cljs.reader.whitespace_QMARK_ = function(a) {
  var b = goog.string.isBreakingWhitespace(a);
  return cljs.core.truth_(b) ? b : "," === a
};
cljs.reader.numeric_QMARK_ = function(a) {
  return goog.string.isNumeric(a)
};
cljs.reader.comment_prefix_QMARK_ = function(a) {
  return";" === a
};
cljs.reader.number_literal_QMARK_ = function(a, b) {
  var c = cljs.reader.numeric_QMARK_.call(null, b);
  if(c) {
    return c
  }
  c = function() {
    var a = "+" === b;
    return a ? a : "-" === b
  }();
  return cljs.core.truth_(c) ? cljs.reader.numeric_QMARK_.call(null, function() {
    var b = cljs.reader.read_char.call(null, a);
    cljs.reader.unread.call(null, a, b);
    return b
  }()) : c
};
cljs.reader.reader_error = function() {
  var a = function(a, b) {
    throw Error(cljs.core.apply.call(null, cljs.core.str, b));
  }, b = function(b, d) {
    var e = null;
    goog.isDef(d) && (e = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0));
    return a.call(this, b, e)
  };
  b.cljs$lang$maxFixedArity = 1;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), b = cljs.core.rest(b);
    return a(d, b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
cljs.reader.macro_terminating_QMARK_ = function(a) {
  var b = "#" !== a;
  return b && (b = "'" !== a) ? (b = ":" !== a) ? cljs.reader.macros.call(null, a) : b : b
};
cljs.reader.read_token = function(a, b) {
  for(var c = new goog.string.StringBuffer(b), d = cljs.reader.read_char.call(null, a);;) {
    var e;
    e = null == d;
    e || (e = (e = cljs.reader.whitespace_QMARK_.call(null, d)) ? e : cljs.reader.macro_terminating_QMARK_.call(null, d));
    if(e) {
      return cljs.reader.unread.call(null, a, d), c.toString()
    }
    c.append(d);
    d = cljs.reader.read_char.call(null, a)
  }
};
cljs.reader.skip_line = function(a) {
  for(;;) {
    var b = cljs.reader.read_char.call(null, a);
    var c = "n" === b;
    b = c ? c : (c = "r" === b) ? c : null == b;
    if(b) {
      return a
    }
  }
};
cljs.reader.int_pattern = cljs.core.re_pattern.call(null, "([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null, "([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null, "([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null, "[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.re_find_STAR_ = function(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === c.length ? c[0] : c
};
cljs.reader.match_int = function(a) {
  var a = cljs.reader.re_find_STAR_.call(null, cljs.reader.int_pattern, a), b = a[2];
  var c = null == b, b = c ? c : 1 > b.length;
  if(!b) {
    return 0
  }
  b = "-" === a[1] ? -1 : 1;
  c = cljs.core.truth_(a[3]) ? [a[3], 10] : cljs.core.truth_(a[4]) ? [a[4], 16] : cljs.core.truth_(a[5]) ? [a[5], 8] : cljs.core.truth_(a[7]) ? [a[7], parseInt(a[7])] : [null, null];
  a = c[0];
  c = c[1];
  return null == a ? null : b * parseInt(a, c)
};
cljs.reader.match_ratio = function(a) {
  var a = cljs.reader.re_find_STAR_.call(null, cljs.reader.ratio_pattern, a), b = a[2];
  return parseInt(a[1]) / parseInt(b)
};
cljs.reader.match_float = function(a) {
  return parseFloat(a)
};
cljs.reader.re_matches_STAR_ = function(a, b) {
  var c = a.exec(b), d;
  d = (d = null != c) ? c[0] === b : d;
  return d ? 1 === c.length ? c[0] : c : null
};
cljs.reader.match_number = function(a) {
  return cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null, cljs.reader.int_pattern, a)) ? cljs.reader.match_int.call(null, a) : cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null, cljs.reader.ratio_pattern, a)) ? cljs.reader.match_ratio.call(null, a) : cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null, cljs.reader.float_pattern, a)) ? cljs.reader.match_float.call(null, a) : null
};
cljs.reader.escape_char_map = function(a) {
  return"t" === a ? "\t" : "r" === a ? "\r" : "n" === a ? "\n" : "\\" === a ? "\\" : '"' === a ? '"' : "b" === a ? "\u0008" : "f" === a ? "\u000c" : null
};
cljs.reader.read_2_chars = function(a) {
  return(new goog.string.StringBuffer(cljs.reader.read_char.call(null, a), cljs.reader.read_char.call(null, a))).toString()
};
cljs.reader.read_4_chars = function(a) {
  return(new goog.string.StringBuffer(cljs.reader.read_char.call(null, a), cljs.reader.read_char.call(null, a), cljs.reader.read_char.call(null, a), cljs.reader.read_char.call(null, a))).toString()
};
cljs.reader.unicode_2_pattern = cljs.core.re_pattern.call(null, "[0-9A-Fa-f]{2}");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern.call(null, "[0-9A-Fa-f]{4}");
cljs.reader.validate_unicode_escape = function(a, b, c, d) {
  return cljs.core.truth_(cljs.core.re_matches.call(null, a, d)) ? d : cljs.reader.reader_error.call(null, b, "Unexpected unicode escape \\", c, d)
};
cljs.reader.make_unicode_char = function(a) {
  a = parseInt(a, 16);
  return String.fromCharCode(a)
};
cljs.reader.escape_char = function(a, b) {
  var c = cljs.reader.read_char.call(null, b), d = cljs.reader.escape_char_map.call(null, c);
  return cljs.core.truth_(d) ? d : "x" === c ? cljs.reader.make_unicode_char.call(null, cljs.reader.validate_unicode_escape.call(null, cljs.reader.unicode_2_pattern, b, c, cljs.reader.read_2_chars.call(null, b))) : "u" === c ? cljs.reader.make_unicode_char.call(null, cljs.reader.validate_unicode_escape.call(null, cljs.reader.unicode_4_pattern, b, c, cljs.reader.read_4_chars.call(null, b))) : cljs.reader.numeric_QMARK_.call(null, c) ? String.fromCharCode(c) : cljs.reader.reader_error.call(null, b, 
  "Unexpected unicode escape \\", c)
};
cljs.reader.read_past = function(a, b) {
  for(var c = cljs.reader.read_char.call(null, b);;) {
    if(cljs.core.truth_(a.call(null, c))) {
      c = cljs.reader.read_char.call(null, b)
    }else {
      return c
    }
  }
};
cljs.reader.read_delimited_list = function(a, b, c) {
  for(var d = cljs.core.transient$.call(null, cljs.core.PersistentVector.EMPTY);;) {
    var e = cljs.reader.read_past.call(null, cljs.reader.whitespace_QMARK_, b);
    cljs.core.truth_(e) || cljs.reader.reader_error.call(null, b, "EOF");
    if(a === e) {
      return cljs.core.persistent_BANG_.call(null, d)
    }
    var f = cljs.reader.macros.call(null, e);
    cljs.core.truth_(f) ? e = f.call(null, b, e) : (cljs.reader.unread.call(null, b, e), e = cljs.reader.read.call(null, b, !0, null, c));
    d = e === b ? d : cljs.core.conj_BANG_.call(null, d, e)
  }
};
cljs.reader.not_implemented = function(a, b) {
  return cljs.reader.reader_error.call(null, a, "Reader for ", b, " not implemented yet")
};
cljs.reader.read_dispatch = function(a, b) {
  var c = cljs.reader.read_char.call(null, a), d = cljs.reader.dispatch_macros.call(null, c);
  if(cljs.core.truth_(d)) {
    return d.call(null, a, b)
  }
  d = cljs.reader.maybe_read_tagged_type.call(null, a, c);
  return cljs.core.truth_(d) ? d : cljs.reader.reader_error.call(null, a, "No dispatch macro for ", c)
};
cljs.reader.read_unmatched_delimiter = function(a, b) {
  return cljs.reader.reader_error.call(null, a, "Unmached delimiter ", b)
};
cljs.reader.read_list = function(a) {
  return cljs.core.apply.call(null, cljs.core.list, cljs.reader.read_delimited_list.call(null, ")", a, !0))
};
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = function(a) {
  return cljs.reader.read_delimited_list.call(null, "]", a, !0)
};
cljs.reader.read_map = function(a) {
  var b = cljs.reader.read_delimited_list.call(null, "}", a, !0);
  cljs.core.odd_QMARK_.call(null, cljs.core.count.call(null, b)) && cljs.reader.reader_error.call(null, a, "Map literal must contain an even number of forms");
  return cljs.core.apply.call(null, cljs.core.hash_map, b)
};
cljs.reader.read_number = function(a, b) {
  for(var c = new goog.string.StringBuffer(b), d = cljs.reader.read_char.call(null, a);;) {
    if(cljs.core.truth_(function() {
      var a = null == d;
      return a ? a : (a = cljs.reader.whitespace_QMARK_.call(null, d)) ? a : cljs.reader.macros.call(null, d)
    }())) {
      cljs.reader.unread.call(null, a, d);
      var e = c.toString(), c = cljs.reader.match_number.call(null, e);
      return cljs.core.truth_(c) ? c : cljs.reader.reader_error.call(null, a, "Invalid number format [", e, "]")
    }
    c.append(d);
    d = e = cljs.reader.read_char.call(null, a)
  }
};
cljs.reader.read_string_STAR_ = function(a) {
  for(var b = new goog.string.StringBuffer, c = cljs.reader.read_char.call(null, a);;) {
    if(null == c) {
      return cljs.reader.reader_error.call(null, a, "EOF while reading string")
    }
    if("\\" === c) {
      b.append(cljs.reader.escape_char.call(null, b, a))
    }else {
      if('"' === c) {
        return b.toString()
      }
      b.append(c)
    }
    c = cljs.reader.read_char.call(null, a)
  }
};
cljs.reader.special_symbols = function(a, b) {
  return"nil" === a ? null : "true" === a ? !0 : "false" === a ? !1 : b
};
cljs.reader.read_symbol = function(a, b) {
  var c = cljs.reader.read_token.call(null, a, b);
  return cljs.core.truth_(goog.string.contains(c, "/")) ? cljs.core.symbol.call(null, cljs.core.subs.call(null, c, 0, c.indexOf("/")), cljs.core.subs.call(null, c, c.indexOf("/") + 1, c.length)) : cljs.reader.special_symbols.call(null, c, cljs.core.symbol.call(null, c))
};
cljs.reader.read_keyword = function(a) {
  var b = cljs.reader.read_token.call(null, a, cljs.reader.read_char.call(null, a)), b = cljs.reader.re_matches_STAR_.call(null, cljs.reader.symbol_pattern, b), c = b[0], d = b[1], e = b[2];
  return cljs.core.truth_(function() {
    var a;
    a = (a = void 0 !== d) ? ":/" === d.substring(d.length - 2, d.length) : a;
    return cljs.core.truth_(a) ? a : (a = ":" === e[e.length - 1]) ? a : -1 !== c.indexOf("::", 1)
  }()) ? cljs.reader.reader_error.call(null, a, "Invalid token: ", c) : function() {
    var a = null != d;
    return a ? 0 < d.length : a
  }() ? cljs.core.keyword.call(null, d.substring(0, d.indexOf("/")), e) : cljs.core.keyword.call(null, c)
};
cljs.reader.desugar_meta = function(a) {
  return cljs.core.symbol_QMARK_.call(null, a) ? cljs.core.ObjMap.fromObject(["\ufdd0'tag"], {"\ufdd0'tag":a}) : cljs.core.string_QMARK_.call(null, a) ? cljs.core.ObjMap.fromObject(["\ufdd0'tag"], {"\ufdd0'tag":a}) : cljs.core.keyword_QMARK_.call(null, a) ? cljs.core.PersistentArrayMap.fromArrays([a], [!0]) : a
};
cljs.reader.wrapping_reader = function(a) {
  return function(b) {
    return cljs.core.list.call(null, a, cljs.reader.read.call(null, b, !0, null, !0))
  }
};
cljs.reader.throwing_reader = function(a) {
  return function(b) {
    return cljs.reader.reader_error.call(null, b, a)
  }
};
cljs.reader.read_meta = function(a) {
  var b = cljs.reader.desugar_meta.call(null, cljs.reader.read.call(null, a, !0, null, !0));
  cljs.core.map_QMARK_.call(null, b) || cljs.reader.reader_error.call(null, a, "Metadata must be Symbol,Keyword,String or Map");
  var c = cljs.reader.read.call(null, a, !0, null, !0), d;
  c ? (d = (d = c.cljs$lang$protocol_mask$partition0$ & 262144) ? d : c.cljs$core$IWithMeta$, d = d ? !0 : c.cljs$lang$protocol_mask$partition0$ ? !1 : cljs.core.type_satisfies_.call(null, cljs.core.IWithMeta, c)) : d = cljs.core.type_satisfies_.call(null, cljs.core.IWithMeta, c);
  return d ? cljs.core.with_meta.call(null, c, cljs.core.merge.call(null, cljs.core.meta.call(null, c), b)) : cljs.reader.reader_error.call(null, a, "Metadata can only be applied to IWithMetas")
};
cljs.reader.read_set = function(a) {
  return cljs.core.set.call(null, cljs.reader.read_delimited_list.call(null, "}", a, !0))
};
cljs.reader.read_regex = function(a, b) {
  return cljs.core.re_pattern.call(null, cljs.reader.read_string_STAR_.call(null, a, b))
};
cljs.reader.read_discard = function(a) {
  cljs.reader.read.call(null, a, !0, null, !0);
  return a
};
cljs.reader.macros = function(a) {
  return'"' === a ? cljs.reader.read_string_STAR_ : ":" === a ? cljs.reader.read_keyword : ";" === a ? cljs.reader.not_implemented : "'" === a ? cljs.reader.wrapping_reader.call(null, "\ufdd1'quote") : "@" === a ? cljs.reader.wrapping_reader.call(null, "\ufdd1'deref") : "^" === a ? cljs.reader.read_meta : "`" === a ? cljs.reader.not_implemented : "~" === a ? cljs.reader.not_implemented : "(" === a ? cljs.reader.read_list : ")" === a ? cljs.reader.read_unmatched_delimiter : "[" === a ? cljs.reader.read_vector : 
  "]" === a ? cljs.reader.read_unmatched_delimiter : "{" === a ? cljs.reader.read_map : "}" === a ? cljs.reader.read_unmatched_delimiter : "\\" === a ? cljs.reader.read_char : "%" === a ? cljs.reader.not_implemented : "#" === a ? cljs.reader.read_dispatch : null
};
cljs.reader.dispatch_macros = function(a) {
  return"{" === a ? cljs.reader.read_set : "<" === a ? cljs.reader.throwing_reader.call(null, "Unreadable form") : '"' === a ? cljs.reader.read_regex : "!" === a ? cljs.reader.read_comment : "_" === a ? cljs.reader.read_discard : null
};
cljs.reader.read = function(a, b, c) {
  for(;;) {
    var d = cljs.reader.read_char.call(null, a);
    if(null == d) {
      return cljs.core.truth_(b) ? cljs.reader.reader_error.call(null, a, "EOF") : c
    }
    if(!cljs.reader.whitespace_QMARK_.call(null, d)) {
      if(cljs.reader.comment_prefix_QMARK_.call(null, d)) {
        a = cljs.reader.read_comment.call(null, a, d)
      }else {
        var e = cljs.reader.macros.call(null, d), d = cljs.core.truth_(e) ? e.call(null, a, d) : cljs.reader.number_literal_QMARK_.call(null, a, d) ? cljs.reader.read_number.call(null, a, d) : cljs.reader.read_symbol.call(null, a, d);
        if(d !== a) {
          return d
        }
      }
    }
  }
};
cljs.reader.read_string = function(a) {
  a = cljs.reader.push_back_reader.call(null, a);
  return cljs.reader.read.call(null, a, !0, null, !1)
};
cljs.reader.zero_fill_right = function(a, b) {
  if(cljs.core._EQ_.call(null, b, cljs.core.count.call(null, a))) {
    return a
  }
  if(b < cljs.core.count.call(null, a)) {
    return a.substring(0, b)
  }
  for(var c = new goog.string.StringBuffer(a);;) {
    if(c.getLength() < b) {
      c = c.append("0")
    }else {
      return c.toString()
    }
  }
};
cljs.reader.divisible_QMARK_ = function(a, b) {
  return 0 === a % b
};
cljs.reader.indivisible_QMARK_ = function(a, b) {
  return cljs.core.not.call(null, cljs.reader.divisible_QMARK_.call(null, a, b))
};
cljs.reader.leap_year_QMARK_ = function(a) {
  var b = cljs.reader.divisible_QMARK_.call(null, a, 4);
  return cljs.core.truth_(b) ? (b = cljs.reader.indivisible_QMARK_.call(null, a, 100), cljs.core.truth_(b) ? b : cljs.reader.divisible_QMARK_.call(null, a, 400)) : b
};
cljs.reader.days_in_month = function() {
  var a = cljs.core.PersistentVector.fromArray([null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], !0), b = cljs.core.PersistentVector.fromArray([null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], !0);
  return function(c, d) {
    return cljs.core._lookup.call(null, cljs.core.truth_(d) ? b : a, c, null)
  }
}();
cljs.reader.parse_and_validate_timestamp = function() {
  var a = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/, b = function(a, b, e, f) {
    var g = a <= b;
    if(!(g ? b <= e : g)) {
      throw Error([cljs.core.str("Assert failed: "), cljs.core.str([cljs.core.str(f), cljs.core.str(" Failed:  "), cljs.core.str(a), cljs.core.str("<="), cljs.core.str(b), cljs.core.str("<="), cljs.core.str(e)].join("")), cljs.core.str("\n"), cljs.core.str(cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'<=", "\ufdd1'low", "\ufdd1'n", "\ufdd1'high"), cljs.core.hash_map("\ufdd0'line", 474, "\ufdd0'column", 25))))].join(""));
    }
    return b
  };
  return function(c) {
    var d = cljs.core.map.call(null, cljs.core.vec, cljs.core.split_at.call(null, 8, cljs.core.re_matches.call(null, a, c)));
    if(cljs.core.truth_(d)) {
      var e = cljs.core.nth.call(null, d, 0, null);
      cljs.core.nth.call(null, e, 0, null);
      var c = cljs.core.nth.call(null, e, 1, null), f = cljs.core.nth.call(null, e, 2, null), g = cljs.core.nth.call(null, e, 3, null), h = cljs.core.nth.call(null, e, 4, null), i = cljs.core.nth.call(null, e, 5, null), j = cljs.core.nth.call(null, e, 6, null), e = cljs.core.nth.call(null, e, 7, null), k = cljs.core.nth.call(null, d, 1, null);
      cljs.core.nth.call(null, k, 0, null);
      cljs.core.nth.call(null, k, 1, null);
      cljs.core.nth.call(null, k, 2, null);
      var m = cljs.core.map.call(null, function(a) {
        return cljs.core.map.call(null, function(a) {
          return parseInt(a, 10)
        }, a)
      }, cljs.core.map.call(null, function(a, b) {
        return cljs.core.update_in.call(null, b, cljs.core.PersistentVector.fromArray([0], !0), a)
      }, cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null, null), function(a) {
        return cljs.core._EQ_.call(null, a, "-") ? "-1" : "1"
      }], !0), d)), l = cljs.core.nth.call(null, m, 0, null);
      cljs.core.nth.call(null, l, 0, null);
      var d = cljs.core.nth.call(null, l, 1, null), k = cljs.core.nth.call(null, l, 2, null), n = cljs.core.nth.call(null, l, 3, null), o = cljs.core.nth.call(null, l, 4, null), p = cljs.core.nth.call(null, l, 5, null), q = cljs.core.nth.call(null, l, 6, null), l = cljs.core.nth.call(null, l, 7, null), r = cljs.core.nth.call(null, m, 1, null), m = cljs.core.nth.call(null, r, 0, null), t = cljs.core.nth.call(null, r, 1, null), r = cljs.core.nth.call(null, r, 2, null);
      return cljs.core.PersistentVector.fromArray([cljs.core.not.call(null, c) ? 1970 : d, cljs.core.not.call(null, f) ? 1 : b.call(null, 1, k, 12, "timestamp month field must be in range 1..12"), cljs.core.not.call(null, g) ? 1 : b.call(null, 1, n, cljs.reader.days_in_month.call(null, k, cljs.reader.leap_year_QMARK_.call(null, d)), "timestamp day field must be in range 1..last day in month"), cljs.core.not.call(null, h) ? 0 : b.call(null, 0, o, 23, "timestamp hour field must be in range 0..23"), 
      cljs.core.not.call(null, i) ? 0 : b.call(null, 0, p, 59, "timestamp minute field must be in range 0..59"), cljs.core.not.call(null, j) ? 0 : b.call(null, 0, q, cljs.core._EQ_.call(null, p, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), cljs.core.not.call(null, e) ? 0 : b.call(null, 0, l, 999, "timestamp millisecond field must be in range 0..999"), m * (60 * t + r)], !0)
    }
    return null
  }
}();
cljs.reader.parse_timestamp = function(a) {
  var b = cljs.reader.parse_and_validate_timestamp.call(null, a);
  if(cljs.core.truth_(b)) {
    var a = cljs.core.nth.call(null, b, 0, null), c = cljs.core.nth.call(null, b, 1, null), d = cljs.core.nth.call(null, b, 2, null), e = cljs.core.nth.call(null, b, 3, null), f = cljs.core.nth.call(null, b, 4, null), g = cljs.core.nth.call(null, b, 5, null), h = cljs.core.nth.call(null, b, 6, null), b = cljs.core.nth.call(null, b, 7, null);
    return new Date(Date.UTC(a, c - 1, d, e, f, g, h) - 6E4 * b)
  }
  return cljs.reader.reader_error.call(null, null, [cljs.core.str("Unrecognized date/time syntax: "), cljs.core.str(a)].join(""))
};
cljs.reader.read_date = function(a) {
  return cljs.core.string_QMARK_.call(null, a) ? cljs.reader.parse_timestamp.call(null, a) : cljs.reader.reader_error.call(null, null, "Instance literal expects a string for its timestamp.")
};
cljs.reader.read_queue = function(a) {
  return cljs.core.vector_QMARK_.call(null, a) ? cljs.core.into.call(null, cljs.core.PersistentQueue.EMPTY, a) : cljs.reader.reader_error.call(null, null, "Queue literal expects a vector for its elements.")
};
cljs.reader.read_uuid = function(a) {
  return cljs.core.string_QMARK_.call(null, a) ? new cljs.core.UUID(a) : cljs.reader.reader_error.call(null, null, "UUID literal expects a string as its representation.")
};
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject(["inst", "uuid", "queue"], {inst:cljs.reader.read_date, uuid:cljs.reader.read_uuid, queue:cljs.reader.read_queue}));
cljs.reader.maybe_read_tagged_type = function(a, b) {
  var c = cljs.reader.read_symbol.call(null, a, b), d = cljs.core._lookup.call(null, cljs.core.deref.call(null, cljs.reader._STAR_tag_table_STAR_), cljs.core.name.call(null, c), null);
  return cljs.core.truth_(d) ? d.call(null, cljs.reader.read.call(null, a, !0, null, !1)) : cljs.reader.reader_error.call(null, a, "Could not find tag parser for ", cljs.core.name.call(null, c), " in ", cljs.core.pr_str.call(null, cljs.core.keys.call(null, cljs.core.deref.call(null, cljs.reader._STAR_tag_table_STAR_))))
};
cljs.reader.register_tag_parser_BANG_ = function(a, b) {
  var c = cljs.core.name.call(null, a), d = cljs.core._lookup.call(null, cljs.core.deref.call(null, cljs.reader._STAR_tag_table_STAR_), c, null);
  cljs.core.swap_BANG_.call(null, cljs.reader._STAR_tag_table_STAR_, cljs.core.assoc, c, b);
  return d
};
cljs.reader.deregister_tag_parser_BANG_ = function(a) {
  var a = cljs.core.name.call(null, a), b = cljs.core._lookup.call(null, cljs.core.deref.call(null, cljs.reader._STAR_tag_table_STAR_), a, null);
  cljs.core.swap_BANG_.call(null, cljs.reader._STAR_tag_table_STAR_, cljs.core.dissoc, a);
  return b
};
session.client.mvc = {};
session.client.mvc.IMVC = {};
session.client.mvc.view = function(a) {
  if(a ? a.session$client$mvc$IMVC$view$arity$1 : a) {
    return a.session$client$mvc$IMVC$view$arity$1(a)
  }
  var b;
  b = session.client.mvc.view[goog.typeOf(null == a ? null : a)];
  if(!b && (b = session.client.mvc.view._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IMVC.view", a);
  }
  return b.call(null, a)
};
session.client.mvc.control = function(a) {
  if(a ? a.session$client$mvc$IMVC$control$arity$1 : a) {
    return a.session$client$mvc$IMVC$control$arity$1(a)
  }
  var b;
  b = session.client.mvc.control[goog.typeOf(null == a ? null : a)];
  if(!b && (b = session.client.mvc.control._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IMVC.control", a);
  }
  return b.call(null, a)
};
session.client.mvc.control2 = function() {
  var a = cljs.core.atom.call(null, cljs.core.ObjMap.EMPTY), b = cljs.core.atom.call(null, cljs.core.ObjMap.EMPTY), c = cljs.core.atom.call(null, cljs.core.ObjMap.EMPTY), d = cljs.core.atom.call(null, cljs.core.ObjMap.EMPTY), e = cljs.core._lookup.call(null, cljs.core.ObjMap.EMPTY, "\ufdd0'hierarchy", cljs.core.global_hierarchy);
  return new cljs.core.MultiFn("control2", function(a) {
    return cljs.core.identity.call(null, (new cljs.core.Keyword("\ufdd0'view")).call(null, cljs.core.meta.call(null, a)))
  }, "\ufdd0'default", e, a, b, c, d)
}();
cljs.core._add_method.call(null, session.client.mvc.control2, "\ufdd0'default", function() {
  return null
});
session.client.mvc.view2 = function() {
  var a = cljs.core.atom.call(null, cljs.core.ObjMap.EMPTY), b = cljs.core.atom.call(null, cljs.core.ObjMap.EMPTY), c = cljs.core.atom.call(null, cljs.core.ObjMap.EMPTY), d = cljs.core.atom.call(null, cljs.core.ObjMap.EMPTY), e = cljs.core._lookup.call(null, cljs.core.ObjMap.EMPTY, "\ufdd0'hierarchy", cljs.core.global_hierarchy);
  return new cljs.core.MultiFn("view2", function(a) {
    return cljs.core.identity.call(null, (new cljs.core.Keyword("\ufdd0'view")).call(null, cljs.core.meta.call(null, a)))
  }, "\ufdd0'default", e, a, b, c, d)
}();
cljs.core._add_method.call(null, session.client.mvc.view2, "\ufdd0'dom", function(a) {
  if(cljs.core._EQ_.call(null, "\ufdd0'this", a)) {
    return cljs_jquery.core.jquery.call(null, this)
  }
  var b;
  b = (b = cljs.core.vector_QMARK_.call(null, a)) ? b : cljs.core.keyword_QMARK_.call(null, a);
  return b ? cljs_jquery.core.dom_create.call(null, a) : cljs_jquery.core.jquery.call(null, a)
});
cljs.core._add_method.call(null, session.client.mvc.view2, "\ufdd0'default", function(a) {
  return cljs.core.instance_QMARK_.call(null, Element, a) ? a : cljs.core.instance_QMARK_.call(null, jQuery, a) ? a : cljs.core.pr_str.call(null, a)
});
session.client.mvc.render = function(a) {
  var b = session.client.mvc.view.call(null, a);
  session.client.mvc.control.call(null, a);
  return b
};
session.client.mvc.IMVC._ = !0;
session.client.mvc.view._ = function(a) {
  return cljs.core.instance_QMARK_.call(null, Element, a) ? a : cljs.core.instance_QMARK_.call(null, jQuery, a) ? a : cljs.core.pr_str.call(null, a)
};
session.client.mvc.control._ = function(a) {
  return a
};
subpar.core = {};
subpar.core.get_index = function(a) {
  return a.indexFromPos(a.getCursor())
};
subpar.core.go_to_index = function(a, b, c) {
  return cljs.core.not_EQ_.call(null, b, c) ? a.setCursor(a.posFromIndex(c)) : null
};
subpar.core.nothing_selected_QMARK_ = function(a) {
  return cljs.core._EQ_.call(null, "", a.getSelection())
};
subpar.core.get_info = function(a) {
  return cljs.core.PersistentVector.fromArray([a.getCursor(), subpar.core.get_index.call(null, a), a.getValue()], !0)
};
subpar.core.open_expression = function(a, b) {
  var c = subpar.core.get_info.call(null, a), d = cljs.core.nth.call(null, c, 0, null), e = cljs.core.nth.call(null, c, 1, null), c = cljs.core.nth.call(null, c, 2, null);
  return cljs.core.truth_(subpar.paredit.in_string.call(null, c, e)) ? (a.replaceRange(cljs.core.nth.call(null, b, 0), d), a.setCursor(d.line, d.ch + 1)) : a.compoundChange(function() {
    a.replaceRange(b, d);
    a.setCursor(d.line, d.ch + 1);
    return a.indentLine(d.line)
  })
};
goog.exportSymbol("subpar.core.open_expression", subpar.core.open_expression);
subpar.core.forward_delete = function(a) {
  if(cljs.core.truth_(subpar.core.nothing_selected_QMARK_.call(null, a))) {
    var b = subpar.core.get_info.call(null, a);
    cljs.core.nth.call(null, b, 0, null);
    var c = cljs.core.nth.call(null, b, 1, null), b = cljs.core.nth.call(null, b, 2, null), b = subpar.paredit.forward_delete_action.call(null, b, c), d = a.posFromIndex(c), e = a.posFromIndex(c + 1), f = a.posFromIndex(c - 1), c = a.posFromIndex(c + 2), g = cljs.core._EQ_;
    if(g.call(null, 1, b)) {
      return a.replaceRange("", d, e)
    }
    if(g.call(null, 2, b)) {
      return a.replaceRange("", f, e)
    }
    if(g.call(null, 3, b)) {
      return a.replaceRange("", d, c)
    }
    if(g.call(null, 4, b)) {
      return a.setCursor(e)
    }
    throw Error([cljs.core.str("No matching clause: "), cljs.core.str(b)].join(""));
  }
  return a.replaceSelection("")
};
goog.exportSymbol("subpar.core.forward_delete", subpar.core.forward_delete);
subpar.core.backward_delete = function(a) {
  if(cljs.core.truth_(subpar.core.nothing_selected_QMARK_.call(null, a))) {
    var b = subpar.core.get_info.call(null, a);
    cljs.core.nth.call(null, b, 0, null);
    var c = cljs.core.nth.call(null, b, 1, null), b = cljs.core.nth.call(null, b, 2, null), b = subpar.paredit.backward_delete_action.call(null, b, c), d = a.posFromIndex(c - 1), e = a.posFromIndex(c), f = a.posFromIndex(c + 1), c = a.posFromIndex(c - 2), g = cljs.core._EQ_;
    if(g.call(null, 1, b)) {
      return a.replaceRange("", d, e)
    }
    if(g.call(null, 2, b)) {
      return a.replaceRange("", d, f)
    }
    if(g.call(null, 3, b)) {
      return a.replaceRange("", c, e)
    }
    if(g.call(null, 4, b)) {
      return a.setCursor(d)
    }
    throw Error([cljs.core.str("No matching clause: "), cljs.core.str(b)].join(""));
  }
  return a.replaceSelection("")
};
goog.exportSymbol("subpar.core.backward_delete", subpar.core.backward_delete);
subpar.core.double_quote = function(a) {
  var b = subpar.core.get_info.call(null, a), c = cljs.core.nth.call(null, b, 0, null), d = cljs.core.nth.call(null, b, 1, null), b = cljs.core.nth.call(null, b, 2, null), b = subpar.paredit.double_quote_action.call(null, b, d), e = cljs.core._EQ_;
  if(e.call(null, 0, b)) {
    return subpar.core.open_expression.call(null, a, '""')
  }
  if(e.call(null, 1, b)) {
    return a.replaceRange('\\"', c)
  }
  if(e.call(null, 2, b)) {
    return subpar.core.go_to_index.call(null, a, d, d + 1)
  }
  if(e.call(null, 3, b)) {
    return a.replaceRange('"', c)
  }
  throw Error([cljs.core.str("No matching clause: "), cljs.core.str(b)].join(""));
};
goog.exportSymbol("subpar.core.double_quote", subpar.core.double_quote);
subpar.core.close_expression = function(a, b) {
  var c = subpar.core.get_info.call(null, a), d = cljs.core.nth.call(null, c, 0, null), e = cljs.core.nth.call(null, c, 1, null), c = cljs.core.nth.call(null, c, 2, null), c = subpar.paredit.parse.call(null, c);
  if(cljs.core.truth_(subpar.paredit.in_string_QMARK_.call(null, c, e))) {
    return a.replaceRange(b, d), a.setCursor(d.line, d.ch + 1)
  }
  var f = subpar.paredit.close_expression_vals.call(null, c, e), d = cljs.core.nth.call(null, f, 0, null), c = cljs.core.nth.call(null, f, 1, null), g = cljs.core.nth.call(null, f, 2, null), f = cljs.core.nth.call(null, f, 3, null);
  return cljs.core.truth_(f) ? (cljs.core.truth_(d) && a.replaceRange("", a.posFromIndex(c), a.posFromIndex(g)), subpar.core.go_to_index.call(null, a, e, f)) : null
};
goog.exportSymbol("subpar.core.close_expression", subpar.core.close_expression);
subpar.core.go = function(a, b) {
  var c = subpar.core.get_info.call(null, a);
  cljs.core.nth.call(null, c, 0, null);
  var d = cljs.core.nth.call(null, c, 1, null), c = cljs.core.nth.call(null, c, 2, null), c = b.call(null, c, d);
  return subpar.core.go_to_index.call(null, a, d, c)
};
subpar.core.backward_up = function(a) {
  return subpar.core.go.call(null, a, subpar.paredit.backward_up_fn)
};
goog.exportSymbol("subpar.core.backward_up", subpar.core.backward_up);
subpar.core.forward_down = function(a) {
  return subpar.core.go.call(null, a, subpar.paredit.forward_down_fn)
};
goog.exportSymbol("subpar.core.forward_down", subpar.core.forward_down);
subpar.core.backward = function(a) {
  return subpar.core.go.call(null, a, subpar.paredit.backward_fn)
};
goog.exportSymbol("subpar.core.backward", subpar.core.backward);
subpar.core.forward = function(a) {
  return subpar.core.go.call(null, a, subpar.paredit.forward_fn)
};
goog.exportSymbol("subpar.core.forward", subpar.core.forward);
subpar.core.backward_down = function(a) {
  return subpar.core.go.call(null, a, subpar.paredit.backward_down_fn)
};
goog.exportSymbol("subpar.core.backward_down", subpar.core.backward_down);
subpar.core.forward_up = function(a) {
  return subpar.core.go.call(null, a, subpar.paredit.forward_up_fn)
};
goog.exportSymbol("subpar.core.forward_up", subpar.core.forward_up);
subpar.core.forward_slurp = function(a) {
  var b = subpar.core.get_info.call(null, a);
  cljs.core.nth.call(null, b, 0, null);
  var c = cljs.core.nth.call(null, b, 1, null), b = cljs.core.nth.call(null, b, 2, null), c = subpar.paredit.forward_slurp_vals.call(null, b, c), d = cljs.core.nth.call(null, c, 0, null), b = cljs.core.nth.call(null, c, 1, null), e = cljs.core.nth.call(null, c, 2, null), f = cljs.core.nth.call(null, c, 3, null);
  if(cljs.core.truth_(f)) {
    var g = a.posFromIndex(b), h = a.posFromIndex(b + 1), i = a.posFromIndex(e), j = g.line;
    return a.compoundChange(function() {
      a.replaceRange(d, i);
      a.replaceRange("", g, h);
      return cljs.core.map.call(null, function(b) {
        return a.indentLine(b)
      }, cljs.core.range.call(null, j, j + f))
    })
  }
  return null
};
goog.exportSymbol("subpar.core.forward_slurp", subpar.core.forward_slurp);
subpar.core.backward_slurp = function(a) {
  var b = subpar.core.get_info.call(null, a);
  cljs.core.nth.call(null, b, 0, null);
  var c = cljs.core.nth.call(null, b, 1, null), b = cljs.core.nth.call(null, b, 2, null), c = subpar.paredit.backward_slurp_vals.call(null, b, c), d = cljs.core.nth.call(null, c, 0, null), b = cljs.core.nth.call(null, c, 1, null), e = cljs.core.nth.call(null, c, 2, null), f = cljs.core.nth.call(null, c, 3, null);
  if(cljs.core.truth_(f)) {
    var g = a.posFromIndex(b), h = a.posFromIndex(b + 1), i = a.posFromIndex(e), j = g.line;
    return a.compoundChange(function() {
      a.replaceRange("", g, h);
      a.replaceRange(d, i);
      return cljs.core.map.call(null, function(b) {
        return a.indentLine(b)
      }, cljs.core.range.call(null, j, j + f))
    })
  }
  return null
};
goog.exportSymbol("subpar.core.backward_slurp", subpar.core.backward_slurp);
subpar.core.backward_barf = function(a) {
  var b = subpar.core.get_info.call(null, a);
  cljs.core.nth.call(null, b, 0, null);
  var c = cljs.core.nth.call(null, b, 1, null), b = cljs.core.nth.call(null, b, 2, null), c = subpar.paredit.backward_barf_vals.call(null, b, c), b = cljs.core.nth.call(null, c, 0, null), d = cljs.core.nth.call(null, c, 1, null), e = cljs.core.nth.call(null, c, 2, null), f = cljs.core.nth.call(null, c, 3, null), g = cljs.core.nth.call(null, c, 4, null);
  if(cljs.core.truth_(g)) {
    var h = cljs.core.truth_(f) ? [cljs.core.str(" "), cljs.core.str(b)].join("") : b, i = a.posFromIndex(e), j = a.posFromIndex(d), k = a.posFromIndex(d + 1), m = j.line;
    return a.compoundChange(function() {
      a.replaceRange(h, i);
      a.replaceRange("", j, k);
      return cljs.core.map.call(null, function(b) {
        return a.indentLine(b)
      }, cljs.core.range.call(null, m, m + g))
    })
  }
  return null
};
goog.exportSymbol("subpar.core.backward_barf", subpar.core.backward_barf);
subpar.core.forward_barf = function(a) {
  var b = subpar.core.get_info.call(null, a);
  cljs.core.nth.call(null, b, 0, null);
  var c = cljs.core.nth.call(null, b, 1, null), b = cljs.core.nth.call(null, b, 2, null), d = subpar.paredit.forward_barf_vals.call(null, b, c), c = cljs.core.nth.call(null, d, 0, null), b = cljs.core.nth.call(null, d, 1, null), e = cljs.core.nth.call(null, d, 2, null), f = cljs.core.nth.call(null, d, 3, null), g = cljs.core.nth.call(null, d, 4, null), d = cljs.core.nth.call(null, d, 5, null);
  if(cljs.core.truth_(g)) {
    var h = cljs.core.truth_(f) ? [cljs.core.str(" "), cljs.core.str(c)].join("") : c, i = a.posFromIndex(e), j = a.posFromIndex(b), k = a.posFromIndex(b + 1), m = a.posFromIndex(d).line;
    return a.compoundChange(function() {
      a.replaceRange("", j, k);
      a.replaceRange(h, i);
      return cljs.core.map.call(null, function(b) {
        return a.indentLine(b)
      }, cljs.core.range.call(null, m, m + g))
    })
  }
  return null
};
goog.exportSymbol("subpar.core.forward_barf", subpar.core.forward_barf);
subpar.core.splice_delete_backward = function(a) {
  var b = subpar.core.get_info.call(null, a);
  cljs.core.nth.call(null, b, 0, null);
  var c = cljs.core.nth.call(null, b, 1, null), b = cljs.core.nth.call(null, b, 2, null), c = subpar.paredit.splice_delete_backward_vals.call(null, b, c), b = cljs.core.nth.call(null, c, 0, null), d = cljs.core.nth.call(null, c, 1, null), e = cljs.core.nth.call(null, c, 2, null), f = cljs.core.nth.call(null, c, 3, null), g = cljs.core.nth.call(null, c, 4, null);
  if(cljs.core.truth_(f)) {
    var h = a.posFromIndex(f).line, i = a.posFromIndex(e), j = a.posFromIndex(e + 1), k = a.posFromIndex(b), m = a.posFromIndex(d);
    return a.compoundChange(function() {
      a.replaceRange("", i, j);
      a.replaceRange("", k, m);
      return cljs.core.map.call(null, function(b) {
        return a.indentLine(b)
      }, cljs.core.range.call(null, h, h + g))
    })
  }
  return null
};
goog.exportSymbol("subpar.core.splice_delete_backward", subpar.core.splice_delete_backward);
subpar.core.splice_delete_forward = function(a) {
  var b = subpar.core.get_info.call(null, a);
  cljs.core.nth.call(null, b, 0, null);
  var c = cljs.core.nth.call(null, b, 1, null), b = cljs.core.nth.call(null, b, 2, null), c = subpar.paredit.splice_delete_forward_vals.call(null, b, c), b = cljs.core.nth.call(null, c, 0, null), d = cljs.core.nth.call(null, c, 1, null), e = cljs.core.nth.call(null, c, 2, null), f = cljs.core.nth.call(null, c, 3, null), g = cljs.core.nth.call(null, c, 4, null);
  if(cljs.core.truth_(f)) {
    var h = a.posFromIndex(f).line, i = a.posFromIndex(b), j = a.posFromIndex(b + 1), k = a.posFromIndex(d), m = a.posFromIndex(e);
    return a.compoundChange(function() {
      a.replaceRange("", k, m);
      a.replaceRange("", i, j);
      return cljs.core.map.call(null, function(b) {
        return a.indentLine(b)
      }, cljs.core.range.call(null, h, h + g))
    })
  }
  return null
};
goog.exportSymbol("subpar.core.splice_delete_forward", subpar.core.splice_delete_forward);
subpar.core.splice = function(a) {
  var b = subpar.core.get_info.call(null, a);
  cljs.core.nth.call(null, b, 0, null);
  var c = cljs.core.nth.call(null, b, 1, null), b = cljs.core.nth.call(null, b, 2, null), c = subpar.paredit.splice_vals.call(null, b, c), b = cljs.core.nth.call(null, c, 0, null), d = cljs.core.nth.call(null, c, 1, null), e = cljs.core.nth.call(null, c, 2, null), f = cljs.core.nth.call(null, c, 3, null);
  if(cljs.core.truth_(e)) {
    var g = a.posFromIndex(e).line, h = a.posFromIndex(b), i = a.posFromIndex(b + 1), j = a.posFromIndex(d), k = a.posFromIndex(d + 1);
    return a.compoundChange(function() {
      a.replaceRange("", j, k);
      a.replaceRange("", h, i);
      return cljs.core.map.call(null, function(b) {
        return a.indentLine(b)
      }, cljs.core.range.call(null, g, g + f))
    })
  }
  return null
};
goog.exportSymbol("subpar.core.splice", subpar.core.splice);
subpar.core.indent_selection = function(a) {
  if(cljs.core.truth_(a.somethingSelected())) {
    var b = a.getCursor(!0).line, c = a.getCursor(!1).line;
    return a.compoundChange(function() {
      return cljs.core.map.call(null, function(b) {
        return a.indentLine(b)
      }, cljs.core.range.call(null, b, c + 1))
    })
  }
  return a.indentLine(a.getCursor().line)
};
goog.exportSymbol("subpar.core.indent_selection", subpar.core.indent_selection);
session.client.editor = {};
session.client.editor.uuid = function() {
  var a = cljs.core.repeatedly.call(null, 30, function() {
    return cljs.core.rand_int.call(null, 16).toString(16)
  });
  return cljs.core.apply.call(null, cljs.core.str, cljs.core.concat.call(null, cljs.core.take.call(null, 8, a), cljs.core.PersistentVector.fromArray(["-"], !0), cljs.core.take.call(null, 4, cljs.core.drop.call(null, 8, a)), cljs.core.PersistentVector.fromArray(["-4"], !0), cljs.core.take.call(null, 3, cljs.core.drop.call(null, 12, a)), cljs.core.PersistentVector.fromArray(["-"], !0), cljs.core.PersistentVector.fromArray([(8 | 3 & cljs.core.rand_int.call(null, 15)).toString(16)], !0), cljs.core.take.call(null, 
  3, cljs.core.drop.call(null, 15, a)), cljs.core.PersistentVector.fromArray(["-"], !0), cljs.core.take.call(null, 12, cljs.core.drop.call(null, 18, a))))
};
session.client.editor.session_uuid = session.client.editor.uuid.call(null);
session.client.editor.create_editor = function(a) {
  return CodeMirror.fromTextArea(document.getElementById([cljs.core.str("area"), cljs.core.str(a)].join("")), {lineNumbers:!1, mode:"text/x-clojure", onKeyEvent:function(b, c) {
    var d = b.getValue();
    cljs.core._EQ_.call(null, c.type, "keyup") && session.client.subscribe.send_BANG_.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'op", "\ufdd0'id", "\ufdd0'input", "\ufdd0'origin"], {"\ufdd0'op":"\ufdd0'update-textarea", "\ufdd0'id":a, "\ufdd0'input":d, "\ufdd0'origin":session.client.editor.session_uuid}));
    return!1
  }, keyMap:"subpar"})
};
session.client.loop_creator = {};
session.client.loop_creator.foobar = function(a) {
  return a
};
session.client.loop_creator.LoopCreator = function(a, b, c, d) {
  this.x = a;
  this.dom = b;
  this.__meta = c;
  this.__extmap = d;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 619054858;
  2 < arguments.length ? (this.__meta = c, this.__extmap = d) : this.__extmap = this.__meta = null
};
session.client.loop_creator.LoopCreator.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_imap.call(null, a)
};
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$ILookup$_lookup$arity$3(a, b, null)
};
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return"\ufdd0'x" === b ? this.x : "\ufdd0'dom" === b ? this.dom : cljs.core._lookup.call(null, this.__extmap, b, c)
};
session.client.loop_creator.LoopCreator.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  a = cljs.core.identical_QMARK_;
  return a.call(null, "\ufdd0'x", b) ? new session.client.loop_creator.LoopCreator(c, this.dom, this.__meta, this.__extmap, null) : a.call(null, "\ufdd0'dom", b) ? new session.client.loop_creator.LoopCreator(this.x, c, this.__meta, this.__extmap, null) : new session.client.loop_creator.LoopCreator(this.x, this.dom, this.__meta, cljs.core.assoc.call(null, this.__extmap, b, c), null)
};
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.vector_QMARK_.call(null, b) ? a.cljs$core$IAssociative$_assoc$arity$3(a, cljs.core._nth.call(null, b, 0), cljs.core._nth.call(null, b, 1)) : cljs.core.reduce.call(null, cljs.core._conj, a, b)
};
session.client.loop_creator.LoopCreator.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  return cljs.core.seq.call(null, cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null, "\ufdd0'x", this.x), cljs.core.vector.call(null, "\ufdd0'dom", this.dom)], !0), this.__extmap))
};
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$ = !0;
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$view$arity$1 = function() {
  var a = cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.PersistentVector.fromArray(["\ufdd0'div.loop-creator", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}), cljs.core.PersistentVector.fromArray(["\ufdd0'i.new-loop-icon", ""], !0)], !0)) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.loop-creator", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}), cljs.core.PersistentVector.fromArray(["\ufdd0'i.new-loop-icon", ""], !0)], !0));
    return a ? a : cljs.core.keyword_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.loop-creator", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}), cljs.core.PersistentVector.fromArray(["\ufdd0'i.new-loop-icon", ""], !0)], !0))
  }() ? cljs_jquery.core.dom_create.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.loop-creator", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}), cljs.core.PersistentVector.fromArray(["\ufdd0'i.new-loop-icon", ""], !0)], !0)) : cljs_jquery.core.jquery.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.loop-creator", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}), 
  cljs.core.PersistentVector.fromArray(["\ufdd0'i.new-loop-icon", ""], !0)], !0)), cljs.core.PersistentVector.fromArray(["data", "model", "loop-creator"], !0));
  cljs.core.reset_BANG_.call(null, this.dom, a);
  return a
};
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$control$arity$1 = function() {
  var a = this;
  cljs.core.truth_(a.x) && cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.deref.call(null, a.dom)) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var b = cljs.core.vector_QMARK_.call(null, cljs.core.deref.call(null, a.dom));
    return b ? b : cljs.core.keyword_QMARK_.call(null, cljs.core.deref.call(null, a.dom))
  }() ? cljs_jquery.core.dom_create.call(null, cljs.core.deref.call(null, a.dom)) : cljs_jquery.core.jquery.call(null, cljs.core.deref.call(null, a.dom)), cljs.core.PersistentVector.fromArray(["on", "click", function() {
    return session.client.subscribe.send_BANG_.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'op", "\ufdd0'id", "\ufdd0'data"], {"\ufdd0'op":"\ufdd0'insert-loop", "\ufdd0'id":"a", "\ufdd0'data":cljs.core.ObjMap.fromObject(["\ufdd0'position"], {"\ufdd0'position":cljs.core.ObjMap.fromObject(["\ufdd0'after"], {"\ufdd0'after":a.x})})}))
  }], !0));
  cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.deref.call(null, a.dom)) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var b = cljs.core.vector_QMARK_.call(null, cljs.core.deref.call(null, a.dom));
    return b ? b : cljs.core.keyword_QMARK_.call(null, cljs.core.deref.call(null, a.dom))
  }() ? cljs_jquery.core.dom_create.call(null, cljs.core.deref.call(null, a.dom)) : cljs_jquery.core.jquery.call(null, cljs.core.deref.call(null, a.dom)), cljs.core.PersistentVector.fromArray(["on", "mouseover", function() {
    return cljs_jquery.core.call_jquery.call(null, cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", "\ufdd0'this") ? cljs_jquery.core.jquery.call(null, this) : function() {
      var a = cljs.core.vector_QMARK_.call(null, "\ufdd0'this");
      return a ? a : cljs.core.keyword_QMARK_.call(null, "\ufdd0'this")
    }() ? cljs_jquery.core.dom_create.call(null, "\ufdd0'this") : cljs_jquery.core.jquery.call(null, "\ufdd0'this"), cljs.core.PersistentVector.fromArray(["find", ".new-loop-icon"], !0)), cljs.core.PersistentVector.fromArray(["toggleClass", "icon-arrow-right"], !0))
  }], !0));
  return cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.deref.call(null, a.dom)) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var b = cljs.core.vector_QMARK_.call(null, cljs.core.deref.call(null, a.dom));
    return b ? b : cljs.core.keyword_QMARK_.call(null, cljs.core.deref.call(null, a.dom))
  }() ? cljs_jquery.core.dom_create.call(null, cljs.core.deref.call(null, a.dom)) : cljs_jquery.core.jquery.call(null, cljs.core.deref.call(null, a.dom)), cljs.core.PersistentVector.fromArray(["on", "mouseout", function() {
    return cljs_jquery.core.call_jquery.call(null, cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", "\ufdd0'this") ? cljs_jquery.core.jquery.call(null, this) : function() {
      var a = cljs.core.vector_QMARK_.call(null, "\ufdd0'this");
      return a ? a : cljs.core.keyword_QMARK_.call(null, "\ufdd0'this")
    }() ? cljs_jquery.core.dom_create.call(null, "\ufdd0'this") : cljs_jquery.core.jquery.call(null, "\ufdd0'this"), cljs.core.PersistentVector.fromArray(["find", ".new-loop-icon"], !0)), cljs.core.PersistentVector.fromArray(["toggleClass", "icon-arrow-right"], !0))
  }], !0))
};
session.client.loop_creator.LoopCreator.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, function(a) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", b, a)
  }, [cljs.core.str("#"), cljs.core.str("LoopCreator"), cljs.core.str("{")].join(""), ", ", "}", b, cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null, "\ufdd0'x", this.x), cljs.core.vector.call(null, "\ufdd0'dom", this.dom)], !0), this.__extmap))
};
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return 2 + cljs.core.count.call(null, this.__extmap)
};
session.client.loop_creator.LoopCreator.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(b)) {
      var c = a.constructor === b.constructor;
      return c ? cljs.core.equiv_map.call(null, a, b) : c
    }
    return b
  }()) ? !0 : !1
};
session.client.loop_creator.LoopCreator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new session.client.loop_creator.LoopCreator(this.x, this.dom, b, this.__extmap, this.__hash)
};
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.__meta
};
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMap$_dissoc$arity$2 = function(a, b) {
  return cljs.core.contains_QMARK_.call(null, cljs.core.PersistentHashSet.fromArray(["\ufdd0'dom", "\ufdd0'x"]), b) ? cljs.core.dissoc.call(null, cljs.core.with_meta.call(null, cljs.core.into.call(null, cljs.core.ObjMap.EMPTY, a), this.__meta), b) : new session.client.loop_creator.LoopCreator(this.x, this.dom, this.__meta, cljs.core.not_empty.call(null, cljs.core.dissoc.call(null, this.__extmap, b)), null)
};
session.client.loop_creator.LoopCreator.cljs$lang$type = !0;
session.client.loop_creator.LoopCreator.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "session.client.loop-creator/LoopCreator")
};
session.client.loop_creator.__GT_LoopCreator = function(a, b) {
  return new session.client.loop_creator.LoopCreator(a, b)
};
session.client.loop_creator.map__GT_LoopCreator = function(a) {
  return new session.client.loop_creator.LoopCreator((new cljs.core.Keyword("\ufdd0'x")).call(null, a), (new cljs.core.Keyword("\ufdd0'dom")).call(null, a), null, cljs.core.dissoc.call(null, a, "\ufdd0'x", "\ufdd0'dom"))
};
session.client.loop_creator.LoopCreator;
session.client.loop = {};
session.client.loop.render_loop_output = function(a) {
  a = session.client.mvc.view.call(null, a);
  if(cljs.core.string_QMARK_.call(null, a)) {
    try {
      var b = document.createElement("div");
      CodeMirror.runMode(a, "text/x-clojure", b);
      return b
    }catch(c) {
      if(cljs.core.instance_QMARK_.call(null, Error, c)) {
        return alert(cljs.core.pr_str.call(null, cljs.core.PersistentVector.fromArray([a, c], !0)))
      }
      throw c;
    }
  }else {
    return a
  }
};
session.client.loop.Loop = function(a, b) {
  this.model = a;
  this.dom = b;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 256
};
session.client.loop.Loop.cljs$lang$type = !0;
session.client.loop.Loop.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "session.client.loop/Loop")
};
session.client.loop.Loop.prototype.session$client$mvc$IMVC$ = !0;
session.client.loop.Loop.prototype.session$client$mvc$IMVC$view$arity$1 = function(a) {
  var b = function() {
    var b = (new cljs.core.Keyword("\ufdd0'id")).call(null, a);
    return cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'id", "\ufdd0'style"], {"\ufdd0'id":b, "\ufdd0'style":"position:relative"}), cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), 
    ""], !0)) ? cljs_jquery.core.jquery.call(null, this) : function() {
      var a = cljs.core.vector_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0));
      return a ? a : cljs.core.keyword_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0))
    }() ? cljs_jquery.core.dom_create.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0)) : cljs_jquery.core.jquery.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0)), cljs.core.PersistentVector.fromArray(["click", function() {
      return session.client.subscribe.send_BANG_.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'op", "\ufdd0'id", "\ufdd0'data"], {"\ufdd0'op":"\ufdd0'delete-loop", "\ufdd0'id":b, "\ufdd0'data":cljs.core.ObjMap.fromObject(["\ufdd0'id"], {"\ufdd0'id":b})}))
    }], !0)), cljs.core.PersistentVector.fromArray(["\ufdd0'div.span12", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row.loop-container", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}), cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-chevron-right", cljs.core.ObjMap.fromObject(["\ufdd0'height", 
    "\ufdd0'style"], {"\ufdd0'height":"18px", "\ufdd0'style":"opacity:.8;position:absolute;left:0px;top:2px"}), ""], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'textarea", cljs.core.ObjMap.fromObject(["\ufdd0'id", "\ufdd0'class"], {"\ufdd0'id":[cljs.core.str("area"), cljs.core.str(b)].join(""), "\ufdd0'class":"exp-input"}), cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'input")).call(null, a))], !0)], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row", cljs.core.ObjMap.fromObject(["\ufdd0'style"], 
    {"\ufdd0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}), cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-chevron-left", cljs.core.ObjMap.fromObject(["\ufdd0'height", "\ufdd0'style"], {"\ufdd0'height":"18px", "\ufdd0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}), ""], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.loopout.cm-s-default", cljs.core.ObjMap.fromObject(["\ufdd0'style"], 
    {"\ufdd0'style":"background-color:#FFF"}), session.client.loop.render_loop_output.call(null, cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'output")).call(null, a)))], !0)], !0)], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row", session.client.mvc.render.call(null, new session.client.loop_creator.LoopCreator(b, cljs.core.atom.call(null, null)))], !0)], !0)) ? cljs_jquery.core.jquery.call(null, this) : function() {
      var d = cljs.core.vector_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'id", "\ufdd0'style"], {"\ufdd0'id":b, "\ufdd0'style":"position:relative"}), cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0)) ? cljs_jquery.core.jquery.call(null, 
      this) : function() {
        var a = cljs.core.vector_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0));
        return a ? a : cljs.core.keyword_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0))
      }() ? cljs_jquery.core.dom_create.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0)) : cljs_jquery.core.jquery.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0)), cljs.core.PersistentVector.fromArray(["click", function() {
        return session.client.subscribe.send_BANG_.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'op", "\ufdd0'id", "\ufdd0'data"], {"\ufdd0'op":"\ufdd0'delete-loop", "\ufdd0'id":b, "\ufdd0'data":cljs.core.ObjMap.fromObject(["\ufdd0'id"], {"\ufdd0'id":b})}))
      }], !0)), cljs.core.PersistentVector.fromArray(["\ufdd0'div.span12", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row.loop-container", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}), cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-chevron-right", cljs.core.ObjMap.fromObject(["\ufdd0'height", 
      "\ufdd0'style"], {"\ufdd0'height":"18px", "\ufdd0'style":"opacity:.8;position:absolute;left:0px;top:2px"}), ""], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'textarea", cljs.core.ObjMap.fromObject(["\ufdd0'id", "\ufdd0'class"], {"\ufdd0'id":[cljs.core.str("area"), cljs.core.str(b)].join(""), "\ufdd0'class":"exp-input"}), cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'input")).call(null, a))], !0)], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row", cljs.core.ObjMap.fromObject(["\ufdd0'style"], 
      {"\ufdd0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}), cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-chevron-left", cljs.core.ObjMap.fromObject(["\ufdd0'height", "\ufdd0'style"], {"\ufdd0'height":"18px", "\ufdd0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}), ""], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.loopout.cm-s-default", cljs.core.ObjMap.fromObject(["\ufdd0'style"], 
      {"\ufdd0'style":"background-color:#FFF"}), session.client.loop.render_loop_output.call(null, cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'output")).call(null, a)))], !0)], !0)], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row", session.client.mvc.render.call(null, new session.client.loop_creator.LoopCreator(b, cljs.core.atom.call(null, null)))], !0)], !0));
      return d ? d : cljs.core.keyword_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'id", "\ufdd0'style"], {"\ufdd0'id":b, "\ufdd0'style":"position:relative"}), cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0)) ? cljs_jquery.core.jquery.call(null, 
      this) : function() {
        var a = cljs.core.vector_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0));
        return a ? a : cljs.core.keyword_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0))
      }() ? cljs_jquery.core.dom_create.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0)) : cljs_jquery.core.jquery.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0)), cljs.core.PersistentVector.fromArray(["click", function() {
        return session.client.subscribe.send_BANG_.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'op", "\ufdd0'id", "\ufdd0'data"], {"\ufdd0'op":"\ufdd0'delete-loop", "\ufdd0'id":b, "\ufdd0'data":cljs.core.ObjMap.fromObject(["\ufdd0'id"], {"\ufdd0'id":b})}))
      }], !0)), cljs.core.PersistentVector.fromArray(["\ufdd0'div.span12", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row.loop-container", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}), cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-chevron-right", cljs.core.ObjMap.fromObject(["\ufdd0'height", 
      "\ufdd0'style"], {"\ufdd0'height":"18px", "\ufdd0'style":"opacity:.8;position:absolute;left:0px;top:2px"}), ""], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'textarea", cljs.core.ObjMap.fromObject(["\ufdd0'id", "\ufdd0'class"], {"\ufdd0'id":[cljs.core.str("area"), cljs.core.str(b)].join(""), "\ufdd0'class":"exp-input"}), cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'input")).call(null, a))], !0)], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row", cljs.core.ObjMap.fromObject(["\ufdd0'style"], 
      {"\ufdd0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}), cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-chevron-left", cljs.core.ObjMap.fromObject(["\ufdd0'height", "\ufdd0'style"], {"\ufdd0'height":"18px", "\ufdd0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}), ""], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.loopout.cm-s-default", cljs.core.ObjMap.fromObject(["\ufdd0'style"], 
      {"\ufdd0'style":"background-color:#FFF"}), session.client.loop.render_loop_output.call(null, cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'output")).call(null, a)))], !0)], !0)], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row", session.client.mvc.render.call(null, new session.client.loop_creator.LoopCreator(b, cljs.core.atom.call(null, null)))], !0)], !0))
    }() ? cljs_jquery.core.dom_create.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'id", "\ufdd0'style"], {"\ufdd0'id":b, "\ufdd0'style":"position:relative"}), cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0)) ? cljs_jquery.core.jquery.call(null, 
    this) : function() {
      var a = cljs.core.vector_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0));
      return a ? a : cljs.core.keyword_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0))
    }() ? cljs_jquery.core.dom_create.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0)) : cljs_jquery.core.jquery.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0)), cljs.core.PersistentVector.fromArray(["click", function() {
      return session.client.subscribe.send_BANG_.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'op", "\ufdd0'id", "\ufdd0'data"], {"\ufdd0'op":"\ufdd0'delete-loop", "\ufdd0'id":b, "\ufdd0'data":cljs.core.ObjMap.fromObject(["\ufdd0'id"], {"\ufdd0'id":b})}))
    }], !0)), cljs.core.PersistentVector.fromArray(["\ufdd0'div.span12", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row.loop-container", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}), cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-chevron-right", cljs.core.ObjMap.fromObject(["\ufdd0'height", 
    "\ufdd0'style"], {"\ufdd0'height":"18px", "\ufdd0'style":"opacity:.8;position:absolute;left:0px;top:2px"}), ""], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'textarea", cljs.core.ObjMap.fromObject(["\ufdd0'id", "\ufdd0'class"], {"\ufdd0'id":[cljs.core.str("area"), cljs.core.str(b)].join(""), "\ufdd0'class":"exp-input"}), cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'input")).call(null, a))], !0)], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row", cljs.core.ObjMap.fromObject(["\ufdd0'style"], 
    {"\ufdd0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}), cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-chevron-left", cljs.core.ObjMap.fromObject(["\ufdd0'height", "\ufdd0'style"], {"\ufdd0'height":"18px", "\ufdd0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}), ""], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.loopout.cm-s-default", cljs.core.ObjMap.fromObject(["\ufdd0'style"], 
    {"\ufdd0'style":"background-color:#FFF"}), session.client.loop.render_loop_output.call(null, cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'output")).call(null, a)))], !0)], !0)], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row", session.client.mvc.render.call(null, new session.client.loop_creator.LoopCreator(b, cljs.core.atom.call(null, null)))], !0)], !0)) : cljs_jquery.core.jquery.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'id", 
    "\ufdd0'style"], {"\ufdd0'id":b, "\ufdd0'style":"position:relative"}), cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0)) ? cljs_jquery.core.jquery.call(null, this) : function() {
      var a = cljs.core.vector_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0));
      return a ? a : cljs.core.keyword_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0))
    }() ? cljs_jquery.core.dom_create.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0)) : cljs_jquery.core.jquery.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-remove", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"position:absolute;top:2px;right:-20px"}), ""], !0)), cljs.core.PersistentVector.fromArray(["click", function() {
      return session.client.subscribe.send_BANG_.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'op", "\ufdd0'id", "\ufdd0'data"], {"\ufdd0'op":"\ufdd0'delete-loop", "\ufdd0'id":b, "\ufdd0'data":cljs.core.ObjMap.fromObject(["\ufdd0'id"], {"\ufdd0'id":b})}))
    }], !0)), cljs.core.PersistentVector.fromArray(["\ufdd0'div.span12", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row.loop-container", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}), cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-chevron-right", cljs.core.ObjMap.fromObject(["\ufdd0'height", 
    "\ufdd0'style"], {"\ufdd0'height":"18px", "\ufdd0'style":"opacity:.8;position:absolute;left:0px;top:2px"}), ""], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'textarea", cljs.core.ObjMap.fromObject(["\ufdd0'id", "\ufdd0'class"], {"\ufdd0'id":[cljs.core.str("area"), cljs.core.str(b)].join(""), "\ufdd0'class":"exp-input"}), cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'input")).call(null, a))], !0)], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row", cljs.core.ObjMap.fromObject(["\ufdd0'style"], 
    {"\ufdd0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}), cljs.core.PersistentVector.fromArray(["\ufdd0'i.icon-chevron-left", cljs.core.ObjMap.fromObject(["\ufdd0'height", "\ufdd0'style"], {"\ufdd0'height":"18px", "\ufdd0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}), ""], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.loopout.cm-s-default", cljs.core.ObjMap.fromObject(["\ufdd0'style"], 
    {"\ufdd0'style":"background-color:#FFF"}), session.client.loop.render_loop_output.call(null, cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'output")).call(null, a)))], !0)], !0)], !0), cljs.core.PersistentVector.fromArray(["\ufdd0'div.row", session.client.mvc.render.call(null, new session.client.loop_creator.LoopCreator(b, cljs.core.atom.call(null, null)))], !0)], !0)), cljs.core.PersistentVector.fromArray(["data", "model", a], !0))
  }();
  cljs.core.reset_BANG_.call(null, this.dom, b);
  return b
};
session.client.loop.Loop.prototype.session$client$mvc$IMVC$control$arity$1 = function(a) {
  var b = this, c = cljs.core.deref.call(null, b.dom);
  session.client.subscribe.subscribe_BANG_.call(null, (new cljs.core.Keyword("\ufdd0'id")).call(null, b.model), a);
  var d = (new cljs.core.Keyword("\ufdd0'id")).call(null, b.model), e = cljs.core.atom.call(null, cljs.core.PersistentVector.EMPTY);
  cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", c) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, c);
    return a ? a : cljs.core.keyword_QMARK_.call(null, c)
  }() ? cljs_jquery.core.dom_create.call(null, c) : cljs_jquery.core.jquery.call(null, c), cljs.core.PersistentVector.fromArray(["on", "post-render", function() {
    return cljs.core.reset_BANG_.call(null, e, session.client.editor.create_editor.call(null, d))
  }], !0));
  cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", c) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, c);
    return a ? a : cljs.core.keyword_QMARK_.call(null, c)
  }() ? cljs_jquery.core.dom_create.call(null, c) : cljs_jquery.core.jquery.call(null, c), cljs.core.PersistentVector.fromArray(["on", "click", ".loop-deleter", function() {
    return cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", c) ? cljs_jquery.core.jquery.call(null, this) : function() {
      var a = cljs.core.vector_QMARK_.call(null, c);
      return a ? a : cljs.core.keyword_QMARK_.call(null, c)
    }() ? cljs_jquery.core.dom_create.call(null, c) : cljs_jquery.core.jquery.call(null, c), cljs.core.PersistentVector.fromArray(["trigger", "delete-loop"], !0))
  }], !0));
  cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", c) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, c);
    return a ? a : cljs.core.keyword_QMARK_.call(null, c)
  }() ? cljs_jquery.core.dom_create.call(null, c) : cljs_jquery.core.jquery.call(null, c), cljs.core.PersistentVector.fromArray(["on", "evaluate-input", function() {
    cljs_jquery.core.call_jquery.call(null, cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", c) ? cljs_jquery.core.jquery.call(null, this) : function() {
      var a = cljs.core.vector_QMARK_.call(null, c);
      return a ? a : cljs.core.keyword_QMARK_.call(null, c)
    }() ? cljs_jquery.core.dom_create.call(null, c) : cljs_jquery.core.jquery.call(null, c), cljs.core.PersistentVector.fromArray(["find", ".loopout"], !0)), cljs.core.PersistentVector.fromArray(["html", ""], !0));
    cljs.core.reset_BANG_.call(null, (new cljs.core.Keyword("\ufdd0'input")).call(null, b.model), cljs.core.deref.call(null, e).getValue());
    return session.client.subscribe.send_BANG_.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'op", "\ufdd0'id", "\ufdd0'data"], {"\ufdd0'op":"\ufdd0'evaluate-clj", "\ufdd0'id":(new cljs.core.Keyword("\ufdd0'id")).call(null, b.model), "\ufdd0'data":cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'input")).call(null, b.model))}))
  }], !0));
  cljs.core.add_watch.call(null, (new cljs.core.Keyword("\ufdd0'output")).call(null, b.model), "\ufdd0'update-output", function(a, b, d, e) {
    session.client.mvc.view.call(null, e);
    return cljs_jquery.core.call_jquery.call(null, cljs_jquery.core.call_jquery.call(null, cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", c) ? cljs_jquery.core.jquery.call(null, this) : function() {
      var a = cljs.core.vector_QMARK_.call(null, c);
      return a ? a : cljs.core.keyword_QMARK_.call(null, c)
    }() ? cljs_jquery.core.dom_create.call(null, c) : cljs_jquery.core.jquery.call(null, c), cljs.core.PersistentVector.fromArray(["find", ".loopout"], !0)), cljs.core.PersistentVector.fromArray(["html", ""], !0)), cljs.core.PersistentVector.fromArray(["append", cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.PersistentVector.fromArray(["\ufdd0'div.cm-s-default", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"background-color:#FFF"}), session.client.loop.render_loop_output.call(null, 
    e)], !0)) ? cljs_jquery.core.jquery.call(null, this) : function() {
      var a = cljs.core.vector_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.cm-s-default", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"background-color:#FFF"}), session.client.loop.render_loop_output.call(null, e)], !0));
      return a ? a : cljs.core.keyword_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.cm-s-default", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"background-color:#FFF"}), session.client.loop.render_loop_output.call(null, e)], !0))
    }() ? cljs_jquery.core.dom_create.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.cm-s-default", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"background-color:#FFF"}), session.client.loop.render_loop_output.call(null, e)], !0)) : cljs_jquery.core.jquery.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.cm-s-default", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"background-color:#FFF"}), session.client.loop.render_loop_output.call(null, 
    e)], !0))], !0))
  });
  return cljs.core.add_watch.call(null, (new cljs.core.Keyword("\ufdd0'input")).call(null, b.model), "\ufdd0'input-output", function(a, b, d, i) {
    cljs_jquery.core.call_jquery.call(null, cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", c) ? cljs_jquery.core.jquery.call(null, this) : function() {
      var a = cljs.core.vector_QMARK_.call(null, c);
      return a ? a : cljs.core.keyword_QMARK_.call(null, c)
    }() ? cljs_jquery.core.dom_create.call(null, c) : cljs_jquery.core.jquery.call(null, c), cljs.core.PersistentVector.fromArray(["find", "textarea.exp-input"], !0)), cljs.core.PersistentVector.fromArray(["html", i], !0));
    return cljs.core.deref.call(null, e).setValue(i)
  })
};
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.model.call(null, b)
};
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return this.model.call(null, b, c)
};
session.client.loop.Loop.prototype.session$client$subscribe$ISubscribe$ = !0;
session.client.loop.Loop.prototype.session$client$subscribe$ISubscribe$receive$arity$2 = function(a, b) {
  cljs.core.truth_((new cljs.core.Keyword("\ufdd0'data")).call(null, b)) && cljs.core.reset_BANG_.call(null, (new cljs.core.Keyword("\ufdd0'output")).call(null, this.model), (new cljs.core.Keyword("\ufdd0'data")).call(null, b));
  return cljs.core._EQ_.call(null, (new cljs.core.Keyword("\ufdd0'origin")).call(null, b), session.client.editor.session_uuid) ? null : cljs.core.reset_BANG_.call(null, (new cljs.core.Keyword("\ufdd0'input")).call(null, this.model), (new cljs.core.Keyword("\ufdd0'input")).call(null, b))
};
session.client.loop.Loop;
session.client.session = {};
session.client.session.last_loop_id = cljs.core.atom.call(null, 0);
session.client.session.new_loop_id = function() {
  var a = cljs.core.swap_BANG_.call(null, session.client.session.last_loop_id, function(a) {
    return 1 + a
  });
  fetch.remotes.remote_callback.call(null, "new-loop", cljs.core.PersistentVector.fromArray([a], !0), function(a) {
    return a
  });
  return"" + cljs.core.str(a)
};
session.client.session.Session = function(a, b, c, d) {
  this.model = a;
  this.dom = b;
  this.__meta = c;
  this.__extmap = d;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 619054858;
  2 < arguments.length ? (this.__meta = c, this.__extmap = d) : this.__extmap = this.__meta = null
};
session.client.session.Session.prototype.cljs$core$IHash$_hash$arity$1 = function(a) {
  var b = this.__hash;
  return null != b ? b : this.__hash = a = cljs.core.hash_imap.call(null, a)
};
session.client.session.Session.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return a.cljs$core$ILookup$_lookup$arity$3(a, b, null)
};
session.client.session.Session.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return"\ufdd0'model" === b ? this.model : "\ufdd0'dom" === b ? this.dom : cljs.core._lookup.call(null, this.__extmap, b, c)
};
session.client.session.Session.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(a, b, c) {
  a = cljs.core.identical_QMARK_;
  return a.call(null, "\ufdd0'model", b) ? new session.client.session.Session(c, this.dom, this.__meta, this.__extmap, null) : a.call(null, "\ufdd0'dom", b) ? new session.client.session.Session(this.model, c, this.__meta, this.__extmap, null) : new session.client.session.Session(this.model, this.dom, this.__meta, cljs.core.assoc.call(null, this.__extmap, b, c), null)
};
session.client.session.Session.prototype.cljs$core$ICollection$_conj$arity$2 = function(a, b) {
  return cljs.core.vector_QMARK_.call(null, b) ? a.cljs$core$IAssociative$_assoc$arity$3(a, cljs.core._nth.call(null, b, 0), cljs.core._nth.call(null, b, 1)) : cljs.core.reduce.call(null, cljs.core._conj, a, b)
};
session.client.session.Session.prototype.cljs$core$ISeqable$_seq$arity$1 = function() {
  return cljs.core.seq.call(null, cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null, "\ufdd0'model", this.model), cljs.core.vector.call(null, "\ufdd0'dom", this.dom)], !0), this.__extmap))
};
session.client.session.Session.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.pr_sequential.call(null, function(a) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", b, a)
  }, [cljs.core.str("#"), cljs.core.str("Session"), cljs.core.str("{")].join(""), ", ", "}", b, cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null, "\ufdd0'model", this.model), cljs.core.vector.call(null, "\ufdd0'dom", this.dom)], !0), this.__extmap))
};
session.client.session.Session.prototype.cljs$core$ICounted$_count$arity$1 = function() {
  return 2 + cljs.core.count.call(null, this.__extmap)
};
session.client.session.Session.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(a, b) {
  return cljs.core.truth_(function() {
    if(cljs.core.truth_(b)) {
      var c = a.constructor === b.constructor;
      return c ? cljs.core.equiv_map.call(null, a, b) : c
    }
    return b
  }()) ? !0 : !1
};
session.client.session.Session.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(a, b) {
  return new session.client.session.Session(this.model, this.dom, b, this.__extmap, this.__hash)
};
session.client.session.Session.prototype.cljs$core$IMeta$_meta$arity$1 = function() {
  return this.__meta
};
session.client.session.Session.prototype.cljs$core$IMap$_dissoc$arity$2 = function(a, b) {
  return cljs.core.contains_QMARK_.call(null, cljs.core.PersistentHashSet.fromArray(["\ufdd0'model", "\ufdd0'dom"]), b) ? cljs.core.dissoc.call(null, cljs.core.with_meta.call(null, cljs.core.into.call(null, cljs.core.ObjMap.EMPTY, a), this.__meta), b) : new session.client.session.Session(this.model, this.dom, this.__meta, cljs.core.not_empty.call(null, cljs.core.dissoc.call(null, this.__extmap, b)), null)
};
session.client.session.Session.cljs$lang$type = !0;
session.client.session.Session.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "session.client.session/Session")
};
session.client.session.__GT_Session = function(a, b) {
  return new session.client.session.Session(a, b)
};
session.client.session.map__GT_Session = function(a) {
  return new session.client.session.Session((new cljs.core.Keyword("\ufdd0'model")).call(null, a), (new cljs.core.Keyword("\ufdd0'dom")).call(null, a), null, cljs.core.dissoc.call(null, a, "\ufdd0'model", "\ufdd0'dom"))
};
session.client.session.Session;
session.client.session.load_subsession_tab = function(a) {
  cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.PersistentVector.fromArray(["\ufdd0'tab-pane", session.client.mvc.render.call(null, a)], !0)) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var b = cljs.core.vector_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'tab-pane", session.client.mvc.render.call(null, a)], !0));
    return b ? b : cljs.core.keyword_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'tab-pane", session.client.mvc.render.call(null, a)], !0))
  }() ? cljs_jquery.core.dom_create.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'tab-pane", session.client.mvc.render.call(null, a)], !0)) : cljs_jquery.core.jquery.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'tab-pane", session.client.mvc.render.call(null, a)], !0)), cljs.core.PersistentVector.fromArray(["appendTo", cljs.core._EQ_.call(null, "\ufdd0'this", ".tab-content") ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, ".tab-content");
    return a ? a : cljs.core.keyword_QMARK_.call(null, ".tab-content")
  }() ? cljs_jquery.core.dom_create.call(null, ".tab-content") : cljs_jquery.core.jquery.call(null, ".tab-content")], !0));
  return cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", ".loop-container") ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, ".loop-container");
    return a ? a : cljs.core.keyword_QMARK_.call(null, ".loop-container")
  }() ? cljs_jquery.core.dom_create.call(null, ".loop-container") : cljs_jquery.core.jquery.call(null, ".loop-container"), cljs.core.PersistentVector.fromArray(["trigger", "post-render"], !0))
};
session.client.session.Session.prototype.session$client$mvc$IMVC$ = !0;
session.client.session.Session.prototype.session$client$mvc$IMVC$view$arity$1 = function(a) {
  return cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.PersistentVector.fromArray(["\ufdd0'div.session.row", cljs.core.PersistentVector.fromArray(["\ufdd0'div.tab-content", ""], !0)], !0)) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.session.row", cljs.core.PersistentVector.fromArray(["\ufdd0'div.tab-content", ""], !0)], !0));
    return a ? a : cljs.core.keyword_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.session.row", cljs.core.PersistentVector.fromArray(["\ufdd0'div.tab-content", ""], !0)], !0))
  }() ? cljs_jquery.core.dom_create.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.session.row", cljs.core.PersistentVector.fromArray(["\ufdd0'div.tab-content", ""], !0)], !0)) : cljs_jquery.core.jquery.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.session.row", cljs.core.PersistentVector.fromArray(["\ufdd0'div.tab-content", ""], !0)], !0)), cljs.core.PersistentVector.fromArray(["data", "model", (new cljs.core.Keyword("\ufdd0'model")).call(null, a)], !0))
};
session.client.session.Session.prototype.session$client$mvc$IMVC$control$arity$1 = function(a) {
  return cljs.core.reset_BANG_.call(null, session.client.session.last_loop_id, (new cljs.core.Keyword("\ufdd0'last-loop-id")).call(null, (new cljs.core.Keyword("\ufdd0'model")).call(null, a)))
};
session.client.subsession = {};
session.client.subsession.ISubsession = {};
session.client.subsession.insert_new_loop = function(a, b) {
  if(a ? a.session$client$subsession$ISubsession$insert_new_loop$arity$2 : a) {
    return a.session$client$subsession$ISubsession$insert_new_loop$arity$2(a, b)
  }
  var c;
  c = session.client.subsession.insert_new_loop[goog.typeOf(null == a ? null : a)];
  if(!c && (c = session.client.subsession.insert_new_loop._, !c)) {
    throw cljs.core.missing_protocol.call(null, "ISubsession.insert-new-loop", a);
  }
  return c.call(null, a, b)
};
session.client.subsession.delete_loop = function(a, b) {
  if(a ? a.session$client$subsession$ISubsession$delete_loop$arity$2 : a) {
    return a.session$client$subsession$ISubsession$delete_loop$arity$2(a, b)
  }
  var c;
  c = session.client.subsession.delete_loop[goog.typeOf(null == a ? null : a)];
  if(!c && (c = session.client.subsession.delete_loop._, !c)) {
    throw cljs.core.missing_protocol.call(null, "ISubsession.delete-loop", a);
  }
  return c.call(null, a, b)
};
session.client.subsession.Subsession = function(a, b) {
  this.model = a;
  this.dom = b;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 256
};
session.client.subsession.Subsession.cljs$lang$type = !0;
session.client.subsession.Subsession.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "session.client.subsession/Subsession")
};
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$ = !0;
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$insert_new_loop$arity$2 = function(a, b) {
  var c = (new cljs.core.Keyword("\ufdd0'loop")).call(null, b), d = (new cljs.core.Keyword("\ufdd0'position")).call(null, b), e = session.client.mvc.render.call(null, c);
  cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", e) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, e);
    return a ? a : cljs.core.keyword_QMARK_.call(null, e)
  }() ? cljs_jquery.core.dom_create.call(null, e) : cljs_jquery.core.jquery.call(null, e), cljs.core.PersistentVector.fromArray(["insertAfter", cljs.core._EQ_.call(null, "\ufdd0'this", [cljs.core.str("#"), cljs.core.str((new cljs.core.Keyword("\ufdd0'after")).call(null, d))].join("")) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, [cljs.core.str("#"), cljs.core.str((new cljs.core.Keyword("\ufdd0'after")).call(null, d))].join(""));
    return a ? a : cljs.core.keyword_QMARK_.call(null, [cljs.core.str("#"), cljs.core.str((new cljs.core.Keyword("\ufdd0'after")).call(null, d))].join(""))
  }() ? cljs_jquery.core.dom_create.call(null, [cljs.core.str("#"), cljs.core.str((new cljs.core.Keyword("\ufdd0'after")).call(null, d))].join("")) : cljs_jquery.core.jquery.call(null, [cljs.core.str("#"), cljs.core.str((new cljs.core.Keyword("\ufdd0'after")).call(null, d))].join(""))], !0));
  return cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", e) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, e);
    return a ? a : cljs.core.keyword_QMARK_.call(null, e)
  }() ? cljs_jquery.core.dom_create.call(null, e) : cljs_jquery.core.jquery.call(null, e), cljs.core.PersistentVector.fromArray(["trigger", "post-render"], !0))
};
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$delete_loop$arity$2 = function(a, b) {
  return cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", [cljs.core.str("#"), cljs.core.str((new cljs.core.Keyword("\ufdd0'id")).call(null, b))].join("")) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, [cljs.core.str("#"), cljs.core.str((new cljs.core.Keyword("\ufdd0'id")).call(null, b))].join(""));
    return a ? a : cljs.core.keyword_QMARK_.call(null, [cljs.core.str("#"), cljs.core.str((new cljs.core.Keyword("\ufdd0'id")).call(null, b))].join(""))
  }() ? cljs_jquery.core.dom_create.call(null, [cljs.core.str("#"), cljs.core.str((new cljs.core.Keyword("\ufdd0'id")).call(null, b))].join("")) : cljs_jquery.core.jquery.call(null, [cljs.core.str("#"), cljs.core.str((new cljs.core.Keyword("\ufdd0'id")).call(null, b))].join("")), cljs.core.PersistentVector.fromArray(["remove"], !0))
};
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$ = !0;
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$view$arity$1 = function() {
  var a = this, b = cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.PersistentVector.fromArray(["\ufdd0'div.subsession", cljs.core.PersistentVector.fromArray(["\ufdd0'div#subsession-root", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:-20px"}), session.client.mvc.render.call(null, new session.client.loop_creator.LoopCreator("subsession-root", cljs.core.atom.call(null, null)))], !0), cljs.core.map.call(null, session.client.mvc.render, 
  cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'loops")).call(null, a.model)))], !0)) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var b = cljs.core.vector_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.subsession", cljs.core.PersistentVector.fromArray(["\ufdd0'div#subsession-root", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:-20px"}), session.client.mvc.render.call(null, new session.client.loop_creator.LoopCreator("subsession-root", cljs.core.atom.call(null, null)))], !0), cljs.core.map.call(null, session.client.mvc.render, cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'loops")).call(null, 
    a.model)))], !0));
    return b ? b : cljs.core.keyword_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.subsession", cljs.core.PersistentVector.fromArray(["\ufdd0'div#subsession-root", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:-20px"}), session.client.mvc.render.call(null, new session.client.loop_creator.LoopCreator("subsession-root", cljs.core.atom.call(null, null)))], !0), cljs.core.map.call(null, session.client.mvc.render, cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'loops")).call(null, 
    a.model)))], !0))
  }() ? cljs_jquery.core.dom_create.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.subsession", cljs.core.PersistentVector.fromArray(["\ufdd0'div#subsession-root", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:-20px"}), session.client.mvc.render.call(null, new session.client.loop_creator.LoopCreator("subsession-root", cljs.core.atom.call(null, null)))], !0), cljs.core.map.call(null, session.client.mvc.render, cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'loops")).call(null, 
  a.model)))], !0)) : cljs_jquery.core.jquery.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div.subsession", cljs.core.PersistentVector.fromArray(["\ufdd0'div#subsession-root", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"margin-left:-20px"}), session.client.mvc.render.call(null, new session.client.loop_creator.LoopCreator("subsession-root", cljs.core.atom.call(null, null)))], !0), cljs.core.map.call(null, session.client.mvc.render, cljs.core.deref.call(null, (new cljs.core.Keyword("\ufdd0'loops")).call(null, 
  a.model)))], !0)), cljs.core.PersistentVector.fromArray(["data", "model", a.model], !0));
  cljs.core.reset_BANG_.call(null, a.dom, b);
  return b
};
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$control$arity$1 = function(a) {
  var b = this;
  session.client.subscribe.subscribe_BANG_.call(null, "subsession", a);
  cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.deref.call(null, b.dom)) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, cljs.core.deref.call(null, b.dom));
    return a ? a : cljs.core.keyword_QMARK_.call(null, cljs.core.deref.call(null, b.dom))
  }() ? cljs_jquery.core.dom_create.call(null, cljs.core.deref.call(null, b.dom)) : cljs_jquery.core.jquery.call(null, cljs.core.deref.call(null, b.dom)), cljs.core.PersistentVector.fromArray(["on", "insert-new-loop", function(b) {
    return session.client.subsession.insert_new_loop.call(null, a, b)
  }], !0));
  return cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.deref.call(null, b.dom)) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, cljs.core.deref.call(null, b.dom));
    return a ? a : cljs.core.keyword_QMARK_.call(null, cljs.core.deref.call(null, b.dom))
  }() ? cljs_jquery.core.dom_create.call(null, cljs.core.deref.call(null, b.dom)) : cljs_jquery.core.jquery.call(null, cljs.core.deref.call(null, b.dom)), cljs.core.PersistentVector.fromArray(["on", "delete-loop", function(b) {
    return session.client.subsession.delete_loop.call(null, a, b)
  }], !0))
};
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$2 = function(a, b) {
  return this.model.call(null, b)
};
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$3 = function(a, b, c) {
  return this.model.call(null, b, c)
};
session.client.subsession.Subsession.prototype.session$client$subscribe$ISubscribe$ = !0;
session.client.subsession.Subsession.prototype.session$client$subscribe$ISubscribe$receive$arity$2 = function(a, b) {
  return cljs.core._EQ_.call(null, "\ufdd0'insert-loop", (new cljs.core.Keyword("\ufdd0'op")).call(null, b)) ? a.session$client$subsession$ISubsession$insert_new_loop$arity$2(a, (new cljs.core.Keyword("\ufdd0'data")).call(null, b)) : cljs.core._EQ_.call(null, "\ufdd0'delete-loop", (new cljs.core.Keyword("\ufdd0'op")).call(null, b)) ? a.session$client$subsession$ISubsession$delete_loop$arity$2(a, (new cljs.core.Keyword("\ufdd0'data")).call(null, b)) : null
};
session.client.subsession.Subsession;
goog.net.xpc = {};
goog.net.xpc.TransportTypes = {NATIVE_MESSAGING:1, FRAME_ELEMENT_METHOD:2, IFRAME_RELAY:3, IFRAME_POLLING:4, FLASH:5, NIX:6};
goog.net.xpc.TransportNames = {1:"NativeMessagingTransport", 2:"FrameElementMethodTransport", 3:"IframeRelayTransport", 4:"IframePollingTransport", 5:"FlashTransport", 6:"NixTransport"};
goog.net.xpc.CfgFields = {CHANNEL_NAME:"cn", AUTH_TOKEN:"at", REMOTE_AUTH_TOKEN:"rat", PEER_URI:"pu", IFRAME_ID:"ifrid", TRANSPORT:"tp", LOCAL_RELAY_URI:"lru", PEER_RELAY_URI:"pru", LOCAL_POLL_URI:"lpu", PEER_POLL_URI:"ppu", PEER_HOSTNAME:"ph"};
goog.net.xpc.UriCfgFields = [goog.net.xpc.CfgFields.PEER_URI, goog.net.xpc.CfgFields.LOCAL_RELAY_URI, goog.net.xpc.CfgFields.PEER_RELAY_URI, goog.net.xpc.CfgFields.LOCAL_POLL_URI, goog.net.xpc.CfgFields.PEER_POLL_URI];
goog.net.xpc.ChannelStates = {NOT_CONNECTED:1, CONNECTED:2, CLOSED:3};
goog.net.xpc.TRANSPORT_SERVICE_ = "tp";
goog.net.xpc.SETUP = "SETUP";
goog.net.xpc.SETUP_ACK_ = "SETUP_ACK";
goog.net.xpc.channels_ = {};
goog.net.xpc.getRandomString = function(a, b) {
  for(var c = b || goog.net.xpc.randomStringCharacters_, d = c.length, e = "";0 < a--;) {
    e += c.charAt(Math.floor(Math.random() * d))
  }
  return e
};
goog.net.xpc.randomStringCharacters_ = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
goog.net.xpc.logger = goog.debug.Logger.getLogger("goog.net.xpc");
goog.Uri = function(a, b) {
  var c;
  a instanceof goog.Uri ? (this.setIgnoreCase(null == b ? a.getIgnoreCase() : b), this.setScheme(a.getScheme()), this.setUserInfo(a.getUserInfo()), this.setDomain(a.getDomain()), this.setPort(a.getPort()), this.setPath(a.getPath()), this.setQueryData(a.getQueryData().clone()), this.setFragment(a.getFragment())) : a && (c = goog.uri.utils.split("" + a)) ? (this.setIgnoreCase(!!b), this.setScheme(c[goog.uri.utils.ComponentIndex.SCHEME] || "", !0), this.setUserInfo(c[goog.uri.utils.ComponentIndex.USER_INFO] || 
  "", !0), this.setDomain(c[goog.uri.utils.ComponentIndex.DOMAIN] || "", !0), this.setPort(c[goog.uri.utils.ComponentIndex.PORT]), this.setPath(c[goog.uri.utils.ComponentIndex.PATH] || "", !0), this.setQuery(c[goog.uri.utils.ComponentIndex.QUERY_DATA] || "", !0), this.setFragment(c[goog.uri.utils.ComponentIndex.FRAGMENT] || "", !0)) : (this.setIgnoreCase(!!b), this.queryData_ = new goog.Uri.QueryData(null, this, this.ignoreCase_))
};
goog.Uri.RANDOM_PARAM = goog.uri.utils.StandardQueryParam.RANDOM;
goog.Uri.prototype.scheme_ = "";
goog.Uri.prototype.userInfo_ = "";
goog.Uri.prototype.domain_ = "";
goog.Uri.prototype.port_ = null;
goog.Uri.prototype.path_ = "";
goog.Uri.prototype.fragment_ = "";
goog.Uri.prototype.isReadOnly_ = !1;
goog.Uri.prototype.ignoreCase_ = !1;
goog.Uri.prototype.toString = function() {
  if(this.cachedToString_) {
    return this.cachedToString_
  }
  var a = [];
  this.scheme_ && a.push(goog.Uri.encodeSpecialChars_(this.scheme_, goog.Uri.reDisallowedInSchemeOrUserInfo_), ":");
  this.domain_ && (a.push("//"), this.userInfo_ && a.push(goog.Uri.encodeSpecialChars_(this.userInfo_, goog.Uri.reDisallowedInSchemeOrUserInfo_), "@"), a.push(goog.Uri.encodeString_(this.domain_)), null != this.port_ && a.push(":", "" + this.getPort()));
  this.path_ && (this.hasDomain() && "/" != this.path_.charAt(0) && a.push("/"), a.push(goog.Uri.encodeSpecialChars_(this.path_, "/" == this.path_.charAt(0) ? goog.Uri.reDisallowedInAbsolutePath_ : goog.Uri.reDisallowedInRelativePath_)));
  var b = "" + this.queryData_;
  b && a.push("?", b);
  this.fragment_ && a.push("#", goog.Uri.encodeSpecialChars_(this.fragment_, goog.Uri.reDisallowedInFragment_));
  return this.cachedToString_ = a.join("")
};
goog.Uri.prototype.resolve = function(a) {
  var b = this.clone(), c = a.hasScheme();
  c ? b.setScheme(a.getScheme()) : c = a.hasUserInfo();
  c ? b.setUserInfo(a.getUserInfo()) : c = a.hasDomain();
  c ? b.setDomain(a.getDomain()) : c = a.hasPort();
  var d = a.getPath();
  if(c) {
    b.setPort(a.getPort())
  }else {
    if(c = a.hasPath()) {
      if("/" != d.charAt(0)) {
        if(this.hasDomain() && !this.hasPath()) {
          d = "/" + d
        }else {
          var e = b.getPath().lastIndexOf("/");
          -1 != e && (d = b.getPath().substr(0, e + 1) + d)
        }
      }
      d = goog.Uri.removeDotSegments(d)
    }
  }
  c ? b.setPath(d) : c = a.hasQuery();
  c ? b.setQuery(a.getDecodedQuery()) : c = a.hasFragment();
  c && b.setFragment(a.getFragment());
  return b
};
goog.Uri.prototype.clone = function() {
  return goog.Uri.create(this.scheme_, this.userInfo_, this.domain_, this.port_, this.path_, this.queryData_.clone(), this.fragment_, this.ignoreCase_)
};
goog.Uri.prototype.getScheme = function() {
  return this.scheme_
};
goog.Uri.prototype.setScheme = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  if(this.scheme_ = b ? goog.Uri.decodeOrEmpty_(a) : a) {
    this.scheme_ = this.scheme_.replace(/:$/, "")
  }
  return this
};
goog.Uri.prototype.hasScheme = function() {
  return!!this.scheme_
};
goog.Uri.prototype.getUserInfo = function() {
  return this.userInfo_
};
goog.Uri.prototype.setUserInfo = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  this.userInfo_ = b ? goog.Uri.decodeOrEmpty_(a) : a;
  return this
};
goog.Uri.prototype.hasUserInfo = function() {
  return!!this.userInfo_
};
goog.Uri.prototype.getDomain = function() {
  return this.domain_
};
goog.Uri.prototype.setDomain = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  this.domain_ = b ? goog.Uri.decodeOrEmpty_(a) : a;
  return this
};
goog.Uri.prototype.hasDomain = function() {
  return!!this.domain_
};
goog.Uri.prototype.getPort = function() {
  return this.port_
};
goog.Uri.prototype.setPort = function(a) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  if(a) {
    a = Number(a);
    if(isNaN(a) || 0 > a) {
      throw Error("Bad port number " + a);
    }
    this.port_ = a
  }else {
    this.port_ = null
  }
  return this
};
goog.Uri.prototype.hasPort = function() {
  return null != this.port_
};
goog.Uri.prototype.getPath = function() {
  return this.path_
};
goog.Uri.prototype.setPath = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  this.path_ = b ? goog.Uri.decodeOrEmpty_(a) : a;
  return this
};
goog.Uri.prototype.hasPath = function() {
  return!!this.path_
};
goog.Uri.prototype.hasQuery = function() {
  return"" !== this.queryData_.toString()
};
goog.Uri.prototype.setQueryData = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  a instanceof goog.Uri.QueryData ? (this.queryData_ = a, this.queryData_.uri_ = this, this.queryData_.setIgnoreCase(this.ignoreCase_)) : (b || (a = goog.Uri.encodeSpecialChars_(a, goog.Uri.reDisallowedInQuery_)), this.queryData_ = new goog.Uri.QueryData(a, this, this.ignoreCase_));
  return this
};
goog.Uri.prototype.setQuery = function(a, b) {
  return this.setQueryData(a, b)
};
goog.Uri.prototype.getEncodedQuery = function() {
  return this.queryData_.toString()
};
goog.Uri.prototype.getDecodedQuery = function() {
  return this.queryData_.toDecodedString()
};
goog.Uri.prototype.getQueryData = function() {
  return this.queryData_
};
goog.Uri.prototype.getQuery = function() {
  return this.getEncodedQuery()
};
goog.Uri.prototype.setParameterValue = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  this.queryData_.set(a, b);
  return this
};
goog.Uri.prototype.setParameterValues = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  goog.isArray(b) || (b = ["" + b]);
  this.queryData_.setValues(a, b);
  return this
};
goog.Uri.prototype.getParameterValues = function(a) {
  return this.queryData_.getValues(a)
};
goog.Uri.prototype.getParameterValue = function(a) {
  return this.queryData_.get(a)
};
goog.Uri.prototype.getFragment = function() {
  return this.fragment_
};
goog.Uri.prototype.setFragment = function(a, b) {
  this.enforceReadOnly();
  delete this.cachedToString_;
  this.fragment_ = b ? goog.Uri.decodeOrEmpty_(a) : a;
  return this
};
goog.Uri.prototype.hasFragment = function() {
  return!!this.fragment_
};
goog.Uri.prototype.hasSameDomainAs = function(a) {
  return(!this.hasDomain() && !a.hasDomain() || this.getDomain() == a.getDomain()) && (!this.hasPort() && !a.hasPort() || this.getPort() == a.getPort())
};
goog.Uri.prototype.makeUnique = function() {
  this.enforceReadOnly();
  this.setParameterValue(goog.Uri.RANDOM_PARAM, goog.string.getRandomString());
  return this
};
goog.Uri.prototype.removeParameter = function(a) {
  this.enforceReadOnly();
  this.queryData_.remove(a);
  return this
};
goog.Uri.prototype.setReadOnly = function(a) {
  this.isReadOnly_ = a;
  return this
};
goog.Uri.prototype.isReadOnly = function() {
  return this.isReadOnly_
};
goog.Uri.prototype.enforceReadOnly = function() {
  if(this.isReadOnly_) {
    throw Error("Tried to modify a read-only Uri");
  }
};
goog.Uri.prototype.setIgnoreCase = function(a) {
  this.ignoreCase_ = a;
  this.queryData_ && this.queryData_.setIgnoreCase(a);
  return this
};
goog.Uri.prototype.getIgnoreCase = function() {
  return this.ignoreCase_
};
goog.Uri.parse = function(a, b) {
  return a instanceof goog.Uri ? a.clone() : new goog.Uri(a, b)
};
goog.Uri.create = function(a, b, c, d, e, f, g, h) {
  h = new goog.Uri(null, h);
  a && h.setScheme(a);
  b && h.setUserInfo(b);
  c && h.setDomain(c);
  d && h.setPort(d);
  e && h.setPath(e);
  f && h.setQueryData(f);
  g && h.setFragment(g);
  return h
};
goog.Uri.resolve = function(a, b) {
  a instanceof goog.Uri || (a = goog.Uri.parse(a));
  b instanceof goog.Uri || (b = goog.Uri.parse(b));
  return a.resolve(b)
};
goog.Uri.removeDotSegments = function(a) {
  if(".." == a || "." == a) {
    return""
  }
  if(!goog.string.contains(a, "./") && !goog.string.contains(a, "/.")) {
    return a
  }
  for(var b = goog.string.startsWith(a, "/"), a = a.split("/"), c = [], d = 0;d < a.length;) {
    var e = a[d++];
    "." == e ? b && d == a.length && c.push("") : ".." == e ? ((1 < c.length || 1 == c.length && "" != c[0]) && c.pop(), b && d == a.length && c.push("")) : (c.push(e), b = !0)
  }
  return c.join("/")
};
goog.Uri.decodeOrEmpty_ = function(a) {
  return a ? decodeURIComponent(a) : ""
};
goog.Uri.encodeString_ = function(a) {
  return goog.isString(a) ? encodeURIComponent(a) : null
};
goog.Uri.encodeSpecialRegExp_ = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
goog.Uri.encodeSpecialChars_ = function(a, b) {
  var c = null;
  goog.isString(a) && (c = a, goog.Uri.encodeSpecialRegExp_.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, goog.Uri.encodeChar_)));
  return c
};
goog.Uri.encodeChar_ = function(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
};
goog.Uri.reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g;
goog.Uri.reDisallowedInRelativePath_ = /[\#\?:]/g;
goog.Uri.reDisallowedInAbsolutePath_ = /[\#\?]/g;
goog.Uri.reDisallowedInQuery_ = /[\#\?@]/g;
goog.Uri.reDisallowedInFragment_ = /#/g;
goog.Uri.haveSameDomain = function(a, b) {
  var c = goog.uri.utils.split(a), d = goog.uri.utils.split(b);
  return c[goog.uri.utils.ComponentIndex.DOMAIN] == d[goog.uri.utils.ComponentIndex.DOMAIN] && c[goog.uri.utils.ComponentIndex.PORT] == d[goog.uri.utils.ComponentIndex.PORT]
};
goog.Uri.QueryData = function(a, b, c) {
  this.encodedQuery_ = a || null;
  this.uri_ = b || null;
  this.ignoreCase_ = !!c
};
goog.Uri.QueryData.prototype.ensureKeyMapInitialized_ = function() {
  if(!this.keyMap_ && (this.keyMap_ = new goog.structs.Map, this.count_ = 0, this.encodedQuery_)) {
    for(var a = this.encodedQuery_.split("&"), b = 0;b < a.length;b++) {
      var c = a[b].indexOf("="), d = null, e = null;
      0 <= c ? (d = a[b].substring(0, c), e = a[b].substring(c + 1)) : d = a[b];
      d = goog.string.urlDecode(d);
      d = this.getKeyName_(d);
      this.add(d, e ? goog.string.urlDecode(e) : "")
    }
  }
};
goog.Uri.QueryData.createFromMap = function(a, b, c) {
  var d = goog.structs.getKeys(a);
  if("undefined" == typeof d) {
    throw Error("Keys are undefined");
  }
  return goog.Uri.QueryData.createFromKeysValues(d, goog.structs.getValues(a), b, c)
};
goog.Uri.QueryData.createFromKeysValues = function(a, b, c, d) {
  if(a.length != b.length) {
    throw Error("Mismatched lengths for keys/values");
  }
  c = new goog.Uri.QueryData(null, c, d);
  for(d = 0;d < a.length;d++) {
    c.add(a[d], b[d])
  }
  return c
};
goog.Uri.QueryData.prototype.keyMap_ = null;
goog.Uri.QueryData.prototype.count_ = null;
goog.Uri.QueryData.decodedQuery_ = null;
goog.Uri.QueryData.prototype.getCount = function() {
  this.ensureKeyMapInitialized_();
  return this.count_
};
goog.Uri.QueryData.prototype.add = function(a, b) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  a = this.getKeyName_(a);
  if(this.containsKey(a)) {
    var c = this.keyMap_.get(a);
    goog.isArray(c) ? c.push(b) : this.keyMap_.set(a, [c, b])
  }else {
    this.keyMap_.set(a, b)
  }
  this.count_++;
  return this
};
goog.Uri.QueryData.prototype.remove = function(a) {
  this.ensureKeyMapInitialized_();
  a = this.getKeyName_(a);
  if(this.keyMap_.containsKey(a)) {
    this.invalidateCache_();
    var b = this.keyMap_.get(a);
    goog.isArray(b) ? this.count_ -= b.length : this.count_--;
    return this.keyMap_.remove(a)
  }
  return!1
};
goog.Uri.QueryData.prototype.clear = function() {
  this.invalidateCache_();
  this.keyMap_ && this.keyMap_.clear();
  this.count_ = 0
};
goog.Uri.QueryData.prototype.isEmpty = function() {
  this.ensureKeyMapInitialized_();
  return 0 == this.count_
};
goog.Uri.QueryData.prototype.containsKey = function(a) {
  this.ensureKeyMapInitialized_();
  a = this.getKeyName_(a);
  return this.keyMap_.containsKey(a)
};
goog.Uri.QueryData.prototype.containsValue = function(a) {
  var b = this.getValues();
  return goog.array.contains(b, a)
};
goog.Uri.QueryData.prototype.getKeys = function() {
  this.ensureKeyMapInitialized_();
  for(var a = this.keyMap_.getValues(), b = this.keyMap_.getKeys(), c = [], d = 0;d < b.length;d++) {
    var e = a[d];
    if(goog.isArray(e)) {
      for(var f = 0;f < e.length;f++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
goog.Uri.QueryData.prototype.getValues = function(a) {
  this.ensureKeyMapInitialized_();
  if(a) {
    if(a = this.getKeyName_(a), this.containsKey(a)) {
      var b = this.keyMap_.get(a);
      if(goog.isArray(b)) {
        return b
      }
      a = [];
      a.push(b)
    }else {
      a = []
    }
  }else {
    for(var b = this.keyMap_.getValues(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      goog.isArray(d) ? goog.array.extend(a, d) : a.push(d)
    }
  }
  return a
};
goog.Uri.QueryData.prototype.set = function(a, b) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  a = this.getKeyName_(a);
  if(this.containsKey(a)) {
    var c = this.keyMap_.get(a);
    goog.isArray(c) ? this.count_ -= c.length : this.count_--
  }
  this.keyMap_.set(a, b);
  this.count_++;
  return this
};
goog.Uri.QueryData.prototype.get = function(a, b) {
  this.ensureKeyMapInitialized_();
  a = this.getKeyName_(a);
  if(this.containsKey(a)) {
    var c = this.keyMap_.get(a);
    return goog.isArray(c) ? c[0] : c
  }
  return b
};
goog.Uri.QueryData.prototype.setValues = function(a, b) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  a = this.getKeyName_(a);
  if(this.containsKey(a)) {
    var c = this.keyMap_.get(a);
    goog.isArray(c) ? this.count_ -= c.length : this.count_--
  }
  0 < b.length && (this.keyMap_.set(a, b), this.count_ += b.length)
};
goog.Uri.QueryData.prototype.toString = function() {
  if(this.encodedQuery_) {
    return this.encodedQuery_
  }
  if(!this.keyMap_) {
    return""
  }
  for(var a = [], b = 0, c = this.keyMap_.getKeys(), d = 0;d < c.length;d++) {
    var e = c[d], f = goog.string.urlEncode(e), e = this.keyMap_.get(e);
    if(goog.isArray(e)) {
      for(var g = 0;g < e.length;g++) {
        0 < b && a.push("&"), a.push(f), "" !== e[g] && a.push("=", goog.string.urlEncode(e[g])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(f), "" !== e && a.push("=", goog.string.urlEncode(e)), b++
    }
  }
  return this.encodedQuery_ = a.join("")
};
goog.Uri.QueryData.prototype.toDecodedString = function() {
  this.decodedQuery_ || (this.decodedQuery_ = goog.Uri.decodeOrEmpty_(this.toString()));
  return this.decodedQuery_
};
goog.Uri.QueryData.prototype.invalidateCache_ = function() {
  delete this.decodedQuery_;
  delete this.encodedQuery_;
  this.uri_ && delete this.uri_.cachedToString_
};
goog.Uri.QueryData.prototype.filterKeys = function(a) {
  this.ensureKeyMapInitialized_();
  goog.structs.forEach(this.keyMap_, function(b, c) {
    goog.array.contains(a, c) || this.remove(c)
  }, this);
  return this
};
goog.Uri.QueryData.prototype.clone = function() {
  var a = new goog.Uri.QueryData;
  this.decodedQuery_ && (a.decodedQuery_ = this.decodedQuery_);
  this.encodedQuery_ && (a.encodedQuery_ = this.encodedQuery_);
  this.keyMap_ && (a.keyMap_ = this.keyMap_.clone());
  return a
};
goog.Uri.QueryData.prototype.getKeyName_ = function(a) {
  a = "" + a;
  this.ignoreCase_ && (a = a.toLowerCase());
  return a
};
goog.Uri.QueryData.prototype.setIgnoreCase = function(a) {
  a && !this.ignoreCase_ && (this.ensureKeyMapInitialized_(), this.invalidateCache_(), goog.structs.forEach(this.keyMap_, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ignoreCase_ = a
};
goog.Uri.QueryData.prototype.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    goog.structs.forEach(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var clojure = {string:{}};
clojure.string.seq_reverse = function(a) {
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, a)
};
clojure.string.reverse = function(a) {
  return a.split("").reverse().join("")
};
clojure.string.replace = function(a, b, c) {
  if(cljs.core.string_QMARK_.call(null, b)) {
    return a.replace(RegExp(goog.string.regExpEscape(b), "g"), c)
  }
  if(cljs.core.truth_(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), c)
  }
  throw[cljs.core.str("Invalid match arg: "), cljs.core.str(b)].join("");
};
clojure.string.replace_first = function(a, b, c) {
  return a.replace(b, c)
};
clojure.string.join = function() {
  var a = null, b = function(a) {
    return cljs.core.apply.call(null, cljs.core.str, a)
  }, c = function(a, b) {
    return cljs.core.apply.call(null, cljs.core.str, cljs.core.interpose.call(null, a, b))
  }, a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, e)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  return a
}();
clojure.string.upper_case = function(a) {
  return a.toUpperCase()
};
clojure.string.lower_case = function(a) {
  return a.toLowerCase()
};
clojure.string.capitalize = function(a) {
  return 2 > cljs.core.count.call(null, a) ? clojure.string.upper_case.call(null, a) : [cljs.core.str(clojure.string.upper_case.call(null, cljs.core.subs.call(null, a, 0, 1))), cljs.core.str(clojure.string.lower_case.call(null, cljs.core.subs.call(null, a, 1)))].join("")
};
clojure.string.split = function() {
  var a = null, b = function(a, b) {
    return cljs.core.vec.call(null, ("" + cljs.core.str(a)).split(b))
  }, c = function(a, b, c) {
    if(1 > c) {
      return cljs.core.vec.call(null, ("" + cljs.core.str(a)).split(b))
    }
    for(var g = cljs.core.PersistentVector.EMPTY;;) {
      if(cljs.core._EQ_.call(null, c, 1)) {
        return cljs.core.conj.call(null, g, a)
      }
      var h = cljs.core.re_find.call(null, b, a);
      if(cljs.core.truth_(h)) {
        var i = h, h = a.indexOf(i), i = a.substring(h + cljs.core.count.call(null, i)), c = c - 1, g = cljs.core.conj.call(null, g, a.substring(0, h)), a = i
      }else {
        return cljs.core.conj.call(null, g, a)
      }
    }
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
clojure.string.split_lines = function(a) {
  return clojure.string.split.call(null, a, /\n|\r\n/)
};
clojure.string.trim = function(a) {
  return goog.string.trim(a)
};
clojure.string.triml = function(a) {
  return goog.string.trimLeft(a)
};
clojure.string.trimr = function(a) {
  return goog.string.trimRight(a)
};
clojure.string.trim_newline = function(a) {
  for(var b = a.length;;) {
    if(0 === b) {
      return""
    }
    var c = cljs.core._lookup.call(null, a, b - 1, null);
    var d = cljs.core._EQ_.call(null, c, "\n"), c = d ? d : cljs.core._EQ_.call(null, c, "\r");
    if(c) {
      b -= 1
    }else {
      return a.substring(0, b)
    }
  }
};
clojure.string.blank_QMARK_ = function(a) {
  var b = "" + cljs.core.str(a);
  return cljs.core.truth_(function() {
    var a = cljs.core.not.call(null, b);
    return a ? a : (a = cljs.core._EQ_.call(null, "", b)) ? a : cljs.core.re_matches.call(null, /\s+/, b)
  }()) ? !0 : !1
};
clojure.string.escape = function(a, b) {
  for(var c = new goog.string.StringBuffer, d = a.length, e = 0;;) {
    if(cljs.core._EQ_.call(null, d, e)) {
      return c.toString()
    }
    var f = a.charAt(e), g = cljs.core._lookup.call(null, b, f, null);
    cljs.core.truth_(g) ? c.append("" + cljs.core.str(g)) : c.append(f);
    e += 1
  }
};
var cljs_jquery = {core:{}};
cljs_jquery.core.jquery = $;
cljs_jquery.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
cljs_jquery.core.dom_element_QMARK_ = function(a) {
  return cljs.core.instance_QMARK_.call(null, Element, a)
};
cljs_jquery.core.jquery_dom_element_QMARK_ = function(a) {
  return cljs.core.instance_QMARK_.call(null, cljs_jquery.core.jquery, a)
};
cljs_jquery.core.dom_append = function dom_append(b, c) {
  return cljs.core.seq_QMARK_.call(null, c) ? cljs.core.dorun.call(null, cljs.core.map.call(null, function(c) {
    return dom_append.call(null, b, c)
  }, c)) : b.append(c)
};
cljs_jquery.core.set_dom_attribute = function(a, b) {
  var c = cljs.core.nth.call(null, b, 0, null), d = cljs.core.nth.call(null, b, 1, null);
  return cljs.core.string_QMARK_.call(null, d) ? a.attr(cljs.core.name.call(null, c), d) : cljs.core._EQ_.call(null, "\ufdd0'css", c) ? cljs.core.dorun.call(null, cljs.core.map.call(null, function(b) {
    return a.css(cljs.core.name.call(null, cljs.core.first.call(null, b)), cljs.core.last.call(null, b))
  }, d)) : null
};
cljs_jquery.core.xmlns = cljs.core.ObjMap.fromObject(["\ufdd0'xhtml", "\ufdd0'svg"], {"\ufdd0'xhtml":"http://www.w3.org/1999/xhtml", "\ufdd0'svg":"http://www.w3.org/2000/svg"});
cljs_jquery.core.keyword_to_dom_object = function(a) {
  var b = cljs.core.re_matches.call(null, cljs_jquery.core.re_tag, cljs.core.name.call(null, a));
  cljs.core.nth.call(null, b, 0, null);
  var c = cljs.core.nth.call(null, b, 1, null), a = cljs.core.nth.call(null, b, 2, null), b = cljs.core.nth.call(null, b, 3, null), d;
  d = clojure.string.split.call(null, c, /:/);
  c = cljs.core.nth.call(null, d, 0, null);
  d = cljs.core.nth.call(null, d, 1, null);
  var e = cljs_jquery.core.xmlns.call(null, cljs.core.keyword.call(null, c));
  d = cljs.core.truth_(d) ? cljs.core.PersistentVector.fromArray([cljs.core.truth_(e) ? e : c, d], !0) : cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\ufdd0'xhtml")).call(null, cljs_jquery.core.xmlns), c], !0);
  c = cljs.core.nth.call(null, d, 0, null);
  d = cljs.core.nth.call(null, d, 1, null);
  c = cljs_jquery.core.jquery.call(null, document.createElementNS(c, d));
  cljs.core.truth_(a) && c.attr("id", a);
  cljs.core.truth_(b) && c.addClass(clojure.string.replace.call(null, b, /\./, " "));
  return c
};
cljs_jquery.core.hiccup_to_dom_object = function(a) {
  var b = cljs_jquery.core.dom_create.call(null, cljs.core.first.call(null, a)), a = cljs.core.next.call(null, a);
  cljs.core.map_QMARK_.call(null, cljs.core.first.call(null, a)) ? (cljs.core.dorun.call(null, cljs.core.map.call(null, function(a) {
    return cljs_jquery.core.set_dom_attribute.call(null, b, a)
  }, cljs.core.first.call(null, a))), cljs.core.dorun.call(null, cljs.core.map.call(null, function(a) {
    return cljs_jquery.core.dom_append.call(null, b, cljs_jquery.core.dom_create.call(null, a))
  }, cljs.core.next.call(null, a)))) : cljs.core.dorun.call(null, cljs.core.map.call(null, function(a) {
    return cljs_jquery.core.dom_append.call(null, b, cljs_jquery.core.dom_create.call(null, a))
  }, a));
  return b
};
cljs_jquery.core.dom_create = function dom_create(b) {
  return cljs.core.truth_(cljs_jquery.core.dom_element_QMARK_.call(null, b)) ? cljs_jquery.core.jquery.call(null, b) : cljs.core.truth_(cljs_jquery.core.jquery_dom_element_QMARK_.call(null, b)) ? b : cljs.core.keyword_QMARK_.call(null, b) ? cljs_jquery.core.keyword_to_dom_object.call(null, b) : cljs.core.string_QMARK_.call(null, b) ? cljs_jquery.core.jquery.call(null, document.createTextNode(b)) : cljs.core.truth_(function() {
    var c = cljs.core.vector_QMARK_.call(null, b);
    return c ? cljs.core.first.call(null, b) : c
  }()) ? cljs_jquery.core.hiccup_to_dom_object.call(null, b) : cljs.core.seq_QMARK_.call(null, b) ? cljs.core.map.call(null, dom_create, b) : null
};
cljs_jquery.core.jsObj = function jsObj(b) {
  return cljs.core.into.call(null, cljs.core.ObjMap.EMPTY, cljs.core.map.call(null, function(b) {
    var d = cljs.core.nth.call(null, b, 0, null), b = cljs.core.nth.call(null, b, 1, null), d = cljs.core.keyword_QMARK_.call(null, d) ? cljs.core.name.call(null, d) : d, b = cljs.core.keyword_QMARK_.call(null, b) ? cljs.core.name.call(null, b) : b;
    return cljs.core.map_QMARK_.call(null, b) ? cljs.core.PersistentVector.fromArray([d, jsObj.call(null, b)], !0) : cljs.core.PersistentVector.fromArray([d, b], !0)
  }, b)).strobj()
};
cljs_jquery.core.camel_case = function(a) {
  return cljs.core.name.call(null, a)
};
cljs_jquery.core.call_jquery = function(a, b) {
  var c = cljs.core.nth.call(null, b, 0, null), d = cljs.core.nthnext.call(null, b, 1);
  if(function() {
    var a = !cljs.core.empty_QMARK_.call(null, d);
    return a ? cljs.core.map_QMARK_.call(null, cljs.core.nth.call(null, d, 0)) : a
  }()) {
    var e = a.get(cljs_jquery.core.camel_case.call(null, c));
    cljs.core.dorun.call(null, cljs.core.map.call(null, function(b) {
      return e.call(a, cljs.core.name.call(null, cljs.core.first.call(null, b)), cljs.core.last.call(null, b))
    }, cljs.core.nth.call(null, d, 0)));
    return a
  }
  var f = cljs.core._EQ_, g = cljs.core.count.call(null, d);
  if(f.call(null, 0, g)) {
    return a.get(cljs_jquery.core.camel_case.call(null, c)).call(a)
  }
  if(f.call(null, 1, g)) {
    return a.get(cljs_jquery.core.camel_case.call(null, c)).call(a, cljs.core.nth.call(null, d, 0))
  }
  if(f.call(null, 2, g)) {
    return a.get(cljs_jquery.core.camel_case.call(null, c)).call(a, cljs.core.nth.call(null, d, 0), cljs.core.nth.call(null, d, 1))
  }
  if(f.call(null, 3, g)) {
    return a.get(cljs_jquery.core.camel_case.call(null, c)).call(a, cljs.core.nth.call(null, d, 0), cljs.core.nth.call(null, d, 1), cljs.core.nth.call(null, d, 2))
  }
  throw Error([cljs.core.str("No matching clause: "), cljs.core.str(g)].join(""));
};
session.client.hiccup = {};
session.client.hiccup.Hiccup = function(a) {
  this.model = a;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 536870912
};
session.client.hiccup.Hiccup.cljs$lang$type = !0;
session.client.hiccup.Hiccup.cljs$lang$ctorPrSeq = function() {
  return cljs.core.list.call(null, "session.client.hiccup/Hiccup")
};
session.client.hiccup.Hiccup.prototype.session$client$mvc$IMVC$ = !0;
session.client.hiccup.Hiccup.prototype.session$client$mvc$IMVC$view$arity$1 = function() {
  if(cljs.core._EQ_.call(null, "\ufdd0'this", this.model)) {
    return cljs_jquery.core.jquery.call(null, this)
  }
  var a;
  a = (a = cljs.core.vector_QMARK_.call(null, this.model)) ? a : cljs.core.keyword_QMARK_.call(null, this.model);
  return a ? cljs_jquery.core.dom_create.call(null, this.model) : cljs_jquery.core.jquery.call(null, this.model)
};
session.client.hiccup.Hiccup.prototype.session$client$mvc$IMVC$control$arity$1 = function() {
  return session.client.hiccup.viewobject
};
session.client.hiccup.Hiccup.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, b) {
  return cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray(["#hiccup "], !0), cljs.core._pr_seq.call(null, this.model, b), "")
};
session.client.hiccup.Hiccup;
cljs.reader.register_tag_parser_BANG_.call(null, "hiccup", function(a) {
  return new session.client.hiccup.Hiccup(a)
});
var fetch = {util:{}};
fetch.util.clj__GT_js = function clj__GT_js(b) {
  return cljs.core.string_QMARK_.call(null, b) ? b : cljs.core.keyword_QMARK_.call(null, b) ? cljs.core.name.call(null, b) : cljs.core.map_QMARK_.call(null, b) ? cljs.core.reduce.call(null, function(b, d) {
    var e = cljs.core.nth.call(null, d, 0, null), f = cljs.core.nth.call(null, d, 1, null);
    return cljs.core.assoc.call(null, b, clj__GT_js.call(null, e), clj__GT_js.call(null, f))
  }, cljs.core.ObjMap.EMPTY, b).strobj : cljs.core.coll_QMARK_.call(null, b) ? cljs.core.apply.call(null, cljs.core.array, cljs.core.map.call(null, clj__GT_js, b)) : b
};
fetch.core = {};
fetch.core.__GT_method = function(a) {
  return clojure.string.upper_case.call(null, cljs.core.name.call(null, a))
};
fetch.core.parse_route = function(a) {
  if(cljs.core.string_QMARK_.call(null, a)) {
    return cljs.core.PersistentVector.fromArray(["GET", a], !0)
  }
  if(cljs.core.vector_QMARK_.call(null, a)) {
    var b = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nth.call(null, a, 1, null);
    return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null, b), a], !0)
  }
  return cljs.core.PersistentVector.fromArray(["GET", a], !0)
};
fetch.core.__GT_data = function(a) {
  a = fetch.util.clj__GT_js.call(null, a);
  a = goog.Uri.QueryData.createFromMap(new goog.structs.Map(a));
  return"" + cljs.core.str(a)
};
fetch.core.__GT_callback = function(a) {
  return cljs.core.truth_(a) ? function(b) {
    b = b.getResponseText();
    return a.call(null, b)
  } : null
};
fetch.core.xhr = function() {
  var a = function(a, b, e, f) {
    var f = cljs.core.nth.call(null, f, 0, null), g = new goog.net.XhrIo, h = fetch.core.parse_route.call(null, a), a = cljs.core.nth.call(null, h, 0, null), h = cljs.core.nth.call(null, h, 1, null), b = fetch.core.__GT_data.call(null, b), i = fetch.core.__GT_callback.call(null, e);
    cljs.core.truth_(i) && goog.events.listen(g, goog.net.EventType.COMPLETE, function() {
      return i.call(null, g)
    });
    return g.send(h, a, b, cljs.core.truth_(f) ? fetch.util.clj__GT_js.call(null, f) : null)
  }, b = function(b, d, e, f) {
    var g = null;
    goog.isDef(f) && (g = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0));
    return a.call(this, b, d, e, g)
  };
  b.cljs$lang$maxFixedArity = 3;
  b.cljs$lang$applyTo = function(b) {
    var d = cljs.core.first(b), e = cljs.core.first(cljs.core.next(b)), f = cljs.core.first(cljs.core.next(cljs.core.next(b))), b = cljs.core.rest(cljs.core.next(cljs.core.next(b)));
    return a(d, e, f, b)
  };
  b.cljs$lang$arity$variadic = a;
  return b
}();
fetch.remotes = {};
fetch.remotes.remote_uri = "/_fetch";
fetch.remotes.remote_callback = function(a, b, c) {
  return fetch.core.xhr.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'post", fetch.remotes.remote_uri], !0), cljs.core.ObjMap.fromObject(["\ufdd0'remote", "\ufdd0'params"], {"\ufdd0'remote":a, "\ufdd0'params":cljs.core.pr_str.call(null, b)}), cljs.core.truth_(c) ? function(a) {
    a = cljs.core._EQ_.call(null, a, "") ? "nil" : a;
    return c.call(null, cljs.reader.read_string.call(null, a))
  } : null)
};
clojure.browser = {};
clojure.browser.event = {};
clojure.browser.event.EventType = {};
clojure.browser.event.event_types = function(a) {
  if(a ? a.clojure$browser$event$EventType$event_types$arity$1 : a) {
    return a.clojure$browser$event$EventType$event_types$arity$1(a)
  }
  var b;
  b = clojure.browser.event.event_types[goog.typeOf(null == a ? null : a)];
  if(!b && (b = clojure.browser.event.event_types._, !b)) {
    throw cljs.core.missing_protocol.call(null, "EventType.event-types", a);
  }
  return b.call(null, a)
};
Element.prototype.clojure$browser$event$EventType$ = !0;
Element.prototype.clojure$browser$event$EventType$event_types$arity$1 = function() {
  return cljs.core.into.call(null, cljs.core.ObjMap.EMPTY, cljs.core.map.call(null, function(a) {
    var b = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nth.call(null, a, 1, null);
    return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null, b.toLowerCase()), a], !0)
  }, cljs.core.merge.call(null, cljs.core.js__GT_clj.call(null, goog.events.EventType))))
};
goog.events.EventTarget.prototype.clojure$browser$event$EventType$ = !0;
goog.events.EventTarget.prototype.clojure$browser$event$EventType$event_types$arity$1 = function() {
  return cljs.core.into.call(null, cljs.core.ObjMap.EMPTY, cljs.core.map.call(null, function(a) {
    var b = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nth.call(null, a, 1, null);
    return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null, b.toLowerCase()), a], !0)
  }, cljs.core.merge.call(null, cljs.core.js__GT_clj.call(null, goog.events.EventType))))
};
clojure.browser.event.listen = function() {
  var a = null, b = function(b, c, f) {
    return a.call(null, b, c, f, !1)
  }, c = function(a, b, c, g) {
    return goog.events.listen(a, cljs.core._lookup.call(null, clojure.browser.event.event_types.call(null, a), b, b), c, g)
  }, a = function(a, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, a, e, f);
      case 4:
        return c.call(this, a, e, f, g)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$3 = b;
  a.cljs$lang$arity$4 = c;
  return a
}();
clojure.browser.event.listen_once = function() {
  var a = null, b = function(b, c, f) {
    return a.call(null, b, c, f, !1)
  }, c = function(a, b, c, g) {
    return goog.events.listenOnce(a, cljs.core._lookup.call(null, clojure.browser.event.event_types.call(null, a), b, b), c, g)
  }, a = function(a, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, a, e, f);
      case 4:
        return c.call(this, a, e, f, g)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$3 = b;
  a.cljs$lang$arity$4 = c;
  return a
}();
clojure.browser.event.unlisten = function() {
  var a = null, b = function(b, c, f) {
    return a.call(null, b, c, f, !1)
  }, c = function(a, b, c, g) {
    return goog.events.unlisten(a, cljs.core._lookup.call(null, clojure.browser.event.event_types.call(null, a), b, b), c, g)
  }, a = function(a, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, a, e, f);
      case 4:
        return c.call(this, a, e, f, g)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$3 = b;
  a.cljs$lang$arity$4 = c;
  return a
}();
clojure.browser.event.unlisten_by_key = function(a) {
  return goog.events.unlistenByKey(a)
};
clojure.browser.event.dispatch_event = function(a, b) {
  return goog.events.dispatchEvent(a, b)
};
clojure.browser.event.expose = function(a) {
  return goog.events.expose(a)
};
clojure.browser.event.fire_listeners = function() {
  return null
};
clojure.browser.event.total_listener_count = function() {
  return goog.events.getTotalListenerCount()
};
clojure.browser.event.get_listener = function() {
  return null
};
clojure.browser.event.all_listeners = function() {
  return null
};
clojure.browser.event.unique_event_id = function() {
  return null
};
clojure.browser.event.has_listener = function() {
  return null
};
clojure.browser.event.remove_all = function() {
  return null
};
goog.dom = {};
goog.dom.BrowserFeature = {CAN_ADD_NAME_OR_TYPE_ATTRIBUTES:!goog.userAgent.IE || goog.userAgent.isDocumentMode(9), CAN_USE_CHILDREN_ATTRIBUTE:!goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isDocumentMode(9) || goog.userAgent.GECKO && goog.userAgent.isVersion("1.9.1"), CAN_USE_INNER_TEXT:goog.userAgent.IE && !goog.userAgent.isVersion("9"), INNER_HTML_NEEDS_SCOPED_ELEMENT:goog.userAgent.IE};
goog.dom.TagName = {A:"A", ABBR:"ABBR", ACRONYM:"ACRONYM", ADDRESS:"ADDRESS", APPLET:"APPLET", AREA:"AREA", B:"B", BASE:"BASE", BASEFONT:"BASEFONT", BDO:"BDO", BIG:"BIG", BLOCKQUOTE:"BLOCKQUOTE", BODY:"BODY", BR:"BR", BUTTON:"BUTTON", CANVAS:"CANVAS", CAPTION:"CAPTION", CENTER:"CENTER", CITE:"CITE", CODE:"CODE", COL:"COL", COLGROUP:"COLGROUP", DD:"DD", DEL:"DEL", DFN:"DFN", DIR:"DIR", DIV:"DIV", DL:"DL", DT:"DT", EM:"EM", FIELDSET:"FIELDSET", FONT:"FONT", FORM:"FORM", FRAME:"FRAME", FRAMESET:"FRAMESET", 
H1:"H1", H2:"H2", H3:"H3", H4:"H4", H5:"H5", H6:"H6", HEAD:"HEAD", HR:"HR", HTML:"HTML", I:"I", IFRAME:"IFRAME", IMG:"IMG", INPUT:"INPUT", INS:"INS", ISINDEX:"ISINDEX", KBD:"KBD", LABEL:"LABEL", LEGEND:"LEGEND", LI:"LI", LINK:"LINK", MAP:"MAP", MENU:"MENU", META:"META", NOFRAMES:"NOFRAMES", NOSCRIPT:"NOSCRIPT", OBJECT:"OBJECT", OL:"OL", OPTGROUP:"OPTGROUP", OPTION:"OPTION", P:"P", PARAM:"PARAM", PRE:"PRE", Q:"Q", S:"S", SAMP:"SAMP", SCRIPT:"SCRIPT", SELECT:"SELECT", SMALL:"SMALL", SPAN:"SPAN", STRIKE:"STRIKE", 
STRONG:"STRONG", STYLE:"STYLE", SUB:"SUB", SUP:"SUP", TABLE:"TABLE", TBODY:"TBODY", TD:"TD", TEXTAREA:"TEXTAREA", TFOOT:"TFOOT", TH:"TH", THEAD:"THEAD", TITLE:"TITLE", TR:"TR", TT:"TT", U:"U", UL:"UL", VAR:"VAR"};
goog.dom.classes = {};
goog.dom.classes.set = function(a, b) {
  a.className = b
};
goog.dom.classes.get = function(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
};
goog.dom.classes.add = function(a, b) {
  var c = goog.dom.classes.get(a), d = goog.array.slice(arguments, 1), d = goog.dom.classes.add_(c, d);
  a.className = c.join(" ");
  return d
};
goog.dom.classes.remove = function(a, b) {
  var c = goog.dom.classes.get(a), d = goog.array.slice(arguments, 1), d = goog.dom.classes.remove_(c, d);
  a.className = c.join(" ");
  return d
};
goog.dom.classes.add_ = function(a, b) {
  for(var c = 0, d = 0;d < b.length;d++) {
    goog.array.contains(a, b[d]) || (a.push(b[d]), c++)
  }
  return c == b.length
};
goog.dom.classes.remove_ = function(a, b) {
  for(var c = 0, d = 0;d < a.length;d++) {
    goog.array.contains(b, a[d]) && (goog.array.splice(a, d--, 1), c++)
  }
  return c == b.length
};
goog.dom.classes.swap = function(a, b, c) {
  for(var d = goog.dom.classes.get(a), e = !1, f = 0;f < d.length;f++) {
    d[f] == b && (goog.array.splice(d, f--, 1), e = !0)
  }
  e && (d.push(c), a.className = d.join(" "));
  return e
};
goog.dom.classes.addRemove = function(a, b, c) {
  var d = goog.dom.classes.get(a);
  goog.isString(b) ? goog.array.remove(d, b) : goog.isArray(b) && goog.dom.classes.remove_(d, b);
  goog.isString(c) && !goog.array.contains(d, c) ? d.push(c) : goog.isArray(c) && goog.dom.classes.add_(d, c);
  a.className = d.join(" ")
};
goog.dom.classes.has = function(a, b) {
  return goog.array.contains(goog.dom.classes.get(a), b)
};
goog.dom.classes.enable = function(a, b, c) {
  c ? goog.dom.classes.add(a, b) : goog.dom.classes.remove(a, b)
};
goog.dom.classes.toggle = function(a, b) {
  var c = !goog.dom.classes.has(a, b);
  goog.dom.classes.enable(a, b, c);
  return c
};
goog.math = {};
goog.math.Coordinate = function(a, b) {
  this.x = goog.isDef(a) ? a : 0;
  this.y = goog.isDef(b) ? b : 0
};
goog.math.Coordinate.prototype.clone = function() {
  return new goog.math.Coordinate(this.x, this.y)
};
goog.DEBUG && (goog.math.Coordinate.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
});
goog.math.Coordinate.equals = function(a, b) {
  return a == b ? true : !a || !b ? false : a.x == b.x && a.y == b.y
};
goog.math.Coordinate.distance = function(a, b) {
  var c = a.x - b.x, d = a.y - b.y;
  return Math.sqrt(c * c + d * d)
};
goog.math.Coordinate.squaredDistance = function(a, b) {
  var c = a.x - b.x, d = a.y - b.y;
  return c * c + d * d
};
goog.math.Coordinate.difference = function(a, b) {
  return new goog.math.Coordinate(a.x - b.x, a.y - b.y)
};
goog.math.Coordinate.sum = function(a, b) {
  return new goog.math.Coordinate(a.x + b.x, a.y + b.y)
};
goog.math.Size = function(a, b) {
  this.width = a;
  this.height = b
};
goog.math.Size.equals = function(a, b) {
  return a == b ? !0 : !a || !b ? !1 : a.width == b.width && a.height == b.height
};
goog.math.Size.prototype.clone = function() {
  return new goog.math.Size(this.width, this.height)
};
goog.DEBUG && (goog.math.Size.prototype.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
});
goog.math.Size.prototype.getLongest = function() {
  return Math.max(this.width, this.height)
};
goog.math.Size.prototype.getShortest = function() {
  return Math.min(this.width, this.height)
};
goog.math.Size.prototype.area = function() {
  return this.width * this.height
};
goog.math.Size.prototype.perimeter = function() {
  return(this.width + this.height) * 2
};
goog.math.Size.prototype.aspectRatio = function() {
  return this.width / this.height
};
goog.math.Size.prototype.isEmpty = function() {
  return!this.area()
};
goog.math.Size.prototype.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
goog.math.Size.prototype.fitsInside = function(a) {
  return this.width <= a.width && this.height <= a.height
};
goog.math.Size.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
goog.math.Size.prototype.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
goog.math.Size.prototype.scale = function(a) {
  this.width = this.width * a;
  this.height = this.height * a;
  return this
};
goog.math.Size.prototype.scaleToFit = function(a) {
  return this.scale(this.aspectRatio() > a.aspectRatio() ? a.width / this.width : a.height / this.height)
};
goog.dom.ASSUME_QUIRKS_MODE = !1;
goog.dom.ASSUME_STANDARDS_MODE = !1;
goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE;
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.dom.getDomHelper = function(a) {
  return a ? new goog.dom.DomHelper(goog.dom.getOwnerDocument(a)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper)
};
goog.dom.getDocument = function() {
  return document
};
goog.dom.getElement = function(a) {
  return goog.isString(a) ? document.getElementById(a) : a
};
goog.dom.$ = goog.dom.getElement;
goog.dom.getElementsByTagNameAndClass = function(a, b, c) {
  return goog.dom.getElementsByTagNameAndClass_(document, a, b, c)
};
goog.dom.getElementsByClass = function(a, b) {
  var c = b || document;
  return goog.dom.canUseQuerySelector_(c) ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : goog.dom.getElementsByTagNameAndClass_(document, "*", a, b)
};
goog.dom.getElementByClass = function(a, b) {
  var c = b || document, d = null;
  return(d = goog.dom.canUseQuerySelector_(c) ? c.querySelector("." + a) : goog.dom.getElementsByClass(a, b)[0]) || null
};
goog.dom.canUseQuerySelector_ = function(a) {
  return a.querySelectorAll && a.querySelector && (!goog.userAgent.WEBKIT || goog.dom.isCss1CompatMode_(document) || goog.userAgent.isVersion("528"))
};
goog.dom.getElementsByTagNameAndClass_ = function(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(goog.dom.canUseQuerySelector_(a) && (b || c)) {
    return a.querySelectorAll(b + (c ? "." + c : ""))
  }
  if(c && a.getElementsByClassName) {
    a = a.getElementsByClassName(c);
    if(b) {
      for(var d = {}, e = 0, f = 0, g;g = a[f];f++) {
        b == g.nodeName && (d[e++] = g)
      }
      d.length = e;
      return d
    }
    return a
  }
  a = a.getElementsByTagName(b || "*");
  if(c) {
    d = {};
    for(f = e = 0;g = a[f];f++) {
      b = g.className, "function" == typeof b.split && goog.array.contains(b.split(/\s+/), c) && (d[e++] = g)
    }
    d.length = e;
    return d
  }
  return a
};
goog.dom.$$ = goog.dom.getElementsByTagNameAndClass;
goog.dom.setProperties = function(a, b) {
  goog.object.forEach(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in goog.dom.DIRECT_ATTRIBUTE_MAP_ ? a.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[d], b) : goog.string.startsWith(d, "aria-") ? a.setAttribute(d, b) : a[d] = b
  })
};
goog.dom.DIRECT_ATTRIBUTE_MAP_ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
goog.dom.getViewportSize = function(a) {
  return goog.dom.getViewportSize_(a || window)
};
goog.dom.getViewportSize_ = function(a) {
  var b = a.document;
  if(goog.userAgent.WEBKIT && !goog.userAgent.isVersion("500") && !goog.userAgent.MOBILE) {
    "undefined" == typeof a.innerHeight && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new goog.math.Size(a.innerWidth, b)
  }
  a = goog.dom.isCss1CompatMode_(b) ? b.documentElement : b.body;
  return new goog.math.Size(a.clientWidth, a.clientHeight)
};
goog.dom.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(window)
};
goog.dom.getDocumentHeight_ = function(a) {
  var b = a.document, c = 0;
  if(b) {
    var a = goog.dom.getViewportSize_(a).height, c = b.body, d = b.documentElement;
    if(goog.dom.isCss1CompatMode_(b) && d.scrollHeight) {
      c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight
    }else {
      var b = d.scrollHeight, e = d.offsetHeight;
      d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
      c = b > a ? b > e ? b : e : b < e ? b : e
    }
  }
  return c
};
goog.dom.getPageScroll = function(a) {
  return goog.dom.getDomHelper((a || goog.global || window).document).getDocumentScroll()
};
goog.dom.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(document)
};
goog.dom.getDocumentScroll_ = function(a) {
  var b = goog.dom.getDocumentScrollElement_(a), a = goog.dom.getWindow_(a);
  return new goog.math.Coordinate(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
};
goog.dom.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(document)
};
goog.dom.getDocumentScrollElement_ = function(a) {
  return!goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_(a) ? a.documentElement : a.body
};
goog.dom.getWindow = function(a) {
  return a ? goog.dom.getWindow_(a) : window
};
goog.dom.getWindow_ = function(a) {
  return a.parentWindow || a.defaultView
};
goog.dom.createDom = function(a, b, c) {
  return goog.dom.createDom_(document, arguments)
};
goog.dom.createDom_ = function(a, b) {
  var c = b[0], d = b[1];
  if(!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', goog.string.htmlEscape(d.name), '"');
    if(d.type) {
      c.push(' type="', goog.string.htmlEscape(d.type), '"');
      var e = {};
      goog.object.extend(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  d && (goog.isString(d) ? c.className = d : goog.isArray(d) ? goog.dom.classes.add.apply(null, [c].concat(d)) : goog.dom.setProperties(c, d));
  2 < b.length && goog.dom.append_(a, c, b, 2);
  return c
};
goog.dom.append_ = function(a, b, c, d) {
  function e(c) {
    c && b.appendChild(goog.isString(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var f = c[d];
    goog.isArrayLike(f) && !goog.dom.isNodeLike(f) ? goog.array.forEach(goog.dom.isNodeList(f) ? goog.array.clone(f) : f, e) : e(f)
  }
};
goog.dom.$dom = goog.dom.createDom;
goog.dom.createElement = function(a) {
  return document.createElement(a)
};
goog.dom.createTextNode = function(a) {
  return document.createTextNode(a)
};
goog.dom.createTable = function(a, b, c) {
  return goog.dom.createTable_(document, a, b, !!c)
};
goog.dom.createTable_ = function(a, b, c, d) {
  for(var e = ["<tr>"], f = 0;f < c;f++) {
    e.push(d ? "<td>&nbsp;</td>" : "<td></td>")
  }
  e.push("</tr>");
  e = e.join("");
  c = ["<table>"];
  for(f = 0;f < b;f++) {
    c.push(e)
  }
  c.push("</table>");
  a = a.createElement(goog.dom.TagName.DIV);
  a.innerHTML = c.join("");
  return a.removeChild(a.firstChild)
};
goog.dom.htmlToDocumentFragment = function(a) {
  return goog.dom.htmlToDocumentFragment_(document, a)
};
goog.dom.htmlToDocumentFragment_ = function(a, b) {
  var c = a.createElement("div");
  goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT ? (c.innerHTML = "<br>" + b, c.removeChild(c.firstChild)) : c.innerHTML = b;
  if(1 == c.childNodes.length) {
    return c.removeChild(c.firstChild)
  }
  for(var d = a.createDocumentFragment();c.firstChild;) {
    d.appendChild(c.firstChild)
  }
  return d
};
goog.dom.getCompatMode = function() {
  return goog.dom.isCss1CompatMode() ? "CSS1Compat" : "BackCompat"
};
goog.dom.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(document)
};
goog.dom.isCss1CompatMode_ = function(a) {
  return goog.dom.COMPAT_MODE_KNOWN_ ? goog.dom.ASSUME_STANDARDS_MODE : "CSS1Compat" == a.compatMode
};
goog.dom.canHaveChildren = function(a) {
  if(a.nodeType != goog.dom.NodeType.ELEMENT) {
    return!1
  }
  switch(a.tagName) {
    case goog.dom.TagName.APPLET:
    ;
    case goog.dom.TagName.AREA:
    ;
    case goog.dom.TagName.BASE:
    ;
    case goog.dom.TagName.BR:
    ;
    case goog.dom.TagName.COL:
    ;
    case goog.dom.TagName.FRAME:
    ;
    case goog.dom.TagName.HR:
    ;
    case goog.dom.TagName.IMG:
    ;
    case goog.dom.TagName.INPUT:
    ;
    case goog.dom.TagName.IFRAME:
    ;
    case goog.dom.TagName.ISINDEX:
    ;
    case goog.dom.TagName.LINK:
    ;
    case goog.dom.TagName.NOFRAMES:
    ;
    case goog.dom.TagName.NOSCRIPT:
    ;
    case goog.dom.TagName.META:
    ;
    case goog.dom.TagName.OBJECT:
    ;
    case goog.dom.TagName.PARAM:
    ;
    case goog.dom.TagName.SCRIPT:
    ;
    case goog.dom.TagName.STYLE:
      return!1
  }
  return!0
};
goog.dom.appendChild = function(a, b) {
  a.appendChild(b)
};
goog.dom.append = function(a, b) {
  goog.dom.append_(goog.dom.getOwnerDocument(a), a, arguments, 1)
};
goog.dom.removeChildren = function(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
};
goog.dom.insertSiblingBefore = function(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b)
};
goog.dom.insertSiblingAfter = function(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
};
goog.dom.insertChildAt = function(a, b, c) {
  a.insertBefore(b, a.childNodes[c] || null)
};
goog.dom.removeNode = function(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
goog.dom.replaceNode = function(a, b) {
  var c = b.parentNode;
  c && c.replaceChild(a, b)
};
goog.dom.flattenElement = function(a) {
  var b, c = a.parentNode;
  if(c && c.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
    if(a.removeNode) {
      return a.removeNode(!1)
    }
    for(;b = a.firstChild;) {
      c.insertBefore(b, a)
    }
    return goog.dom.removeNode(a)
  }
};
goog.dom.getChildren = function(a) {
  return goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && void 0 != a.children ? a.children : goog.array.filter(a.childNodes, function(a) {
    return a.nodeType == goog.dom.NodeType.ELEMENT
  })
};
goog.dom.getFirstElementChild = function(a) {
  return void 0 != a.firstElementChild ? a.firstElementChild : goog.dom.getNextElementNode_(a.firstChild, !0)
};
goog.dom.getLastElementChild = function(a) {
  return void 0 != a.lastElementChild ? a.lastElementChild : goog.dom.getNextElementNode_(a.lastChild, !1)
};
goog.dom.getNextElementSibling = function(a) {
  return void 0 != a.nextElementSibling ? a.nextElementSibling : goog.dom.getNextElementNode_(a.nextSibling, !0)
};
goog.dom.getPreviousElementSibling = function(a) {
  return void 0 != a.previousElementSibling ? a.previousElementSibling : goog.dom.getNextElementNode_(a.previousSibling, !1)
};
goog.dom.getNextElementNode_ = function(a, b) {
  for(;a && a.nodeType != goog.dom.NodeType.ELEMENT;) {
    a = b ? a.nextSibling : a.previousSibling
  }
  return a
};
goog.dom.getNextNode = function(a) {
  if(!a) {
    return null
  }
  if(a.firstChild) {
    return a.firstChild
  }
  for(;a && !a.nextSibling;) {
    a = a.parentNode
  }
  return a ? a.nextSibling : null
};
goog.dom.getPreviousNode = function(a) {
  if(!a) {
    return null
  }
  if(!a.previousSibling) {
    return a.parentNode
  }
  for(a = a.previousSibling;a && a.lastChild;) {
    a = a.lastChild
  }
  return a
};
goog.dom.isNodeLike = function(a) {
  return goog.isObject(a) && 0 < a.nodeType
};
goog.dom.isElement = function(a) {
  return goog.isObject(a) && a.nodeType == goog.dom.NodeType.ELEMENT
};
goog.dom.isWindow = function(a) {
  return goog.isObject(a) && a.window == a
};
goog.dom.contains = function(a, b) {
  if(a.contains && b.nodeType == goog.dom.NodeType.ELEMENT) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
};
goog.dom.compareNodeOrder = function(a, b) {
  if(a == b) {
    return 0
  }
  if(a.compareDocumentPosition) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1
  }
  if("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
    var c = a.nodeType == goog.dom.NodeType.ELEMENT, d = b.nodeType == goog.dom.NodeType.ELEMENT;
    if(c && d) {
      return a.sourceIndex - b.sourceIndex
    }
    var e = a.parentNode, f = b.parentNode;
    return e == f ? goog.dom.compareSiblingOrder_(a, b) : !c && goog.dom.contains(e, b) ? -1 * goog.dom.compareParentsDescendantNodeIe_(a, b) : !d && goog.dom.contains(f, a) ? goog.dom.compareParentsDescendantNodeIe_(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
  }
  d = goog.dom.getOwnerDocument(a);
  c = d.createRange();
  c.selectNode(a);
  c.collapse(!0);
  d = d.createRange();
  d.selectNode(b);
  d.collapse(!0);
  return c.compareBoundaryPoints(goog.global.Range.START_TO_END, d)
};
goog.dom.compareParentsDescendantNodeIe_ = function(a, b) {
  var c = a.parentNode;
  if(c == b) {
    return-1
  }
  for(var d = b;d.parentNode != c;) {
    d = d.parentNode
  }
  return goog.dom.compareSiblingOrder_(d, a)
};
goog.dom.compareSiblingOrder_ = function(a, b) {
  for(var c = b;c = c.previousSibling;) {
    if(c == a) {
      return-1
    }
  }
  return 1
};
goog.dom.findCommonAncestor = function(a) {
  var b, c = arguments.length;
  if(c) {
    if(1 == c) {
      return arguments[0]
    }
  }else {
    return null
  }
  var d = [], e = Infinity;
  for(b = 0;b < c;b++) {
    for(var f = [], g = arguments[b];g;) {
      f.unshift(g), g = g.parentNode
    }
    d.push(f);
    e = Math.min(e, f.length)
  }
  f = null;
  for(b = 0;b < e;b++) {
    for(var g = d[0][b], h = 1;h < c;h++) {
      if(g != d[h][b]) {
        return f
      }
    }
    f = g
  }
  return f
};
goog.dom.getOwnerDocument = function(a) {
  return a.nodeType == goog.dom.NodeType.DOCUMENT ? a : a.ownerDocument || a.document
};
goog.dom.getFrameContentDocument = function(a) {
  return a.contentDocument || a.contentWindow.document
};
goog.dom.getFrameContentWindow = function(a) {
  return a.contentWindow || goog.dom.getWindow_(goog.dom.getFrameContentDocument(a))
};
goog.dom.setTextContent = function(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == goog.dom.NodeType.TEXT) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      goog.dom.removeChildren(a);
      var c = goog.dom.getOwnerDocument(a);
      a.appendChild(c.createTextNode(b))
    }
  }
};
goog.dom.getOuterHtml = function(a) {
  if("outerHTML" in a) {
    return a.outerHTML
  }
  var b = goog.dom.getOwnerDocument(a).createElement("div");
  b.appendChild(a.cloneNode(!0));
  return b.innerHTML
};
goog.dom.findNode = function(a, b) {
  var c = [];
  return goog.dom.findNodes_(a, b, c, !0) ? c[0] : void 0
};
goog.dom.findNodes = function(a, b) {
  var c = [];
  goog.dom.findNodes_(a, b, c, !1);
  return c
};
goog.dom.findNodes_ = function(a, b, c, d) {
  if(null != a) {
    for(a = a.firstChild;a;) {
      if(b(a) && (c.push(a), d) || goog.dom.findNodes_(a, b, c, d)) {
        return!0
      }
      a = a.nextSibling
    }
  }
  return!1
};
goog.dom.TAGS_TO_IGNORE_ = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1};
goog.dom.PREDEFINED_TAG_VALUES_ = {IMG:" ", BR:"\n"};
goog.dom.isFocusableTabIndex = function(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, goog.isNumber(a) && 0 <= a && 32768 > a) : !1
};
goog.dom.setFocusableTabIndex = function(a, b) {
  b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
};
goog.dom.getTextContent = function(a) {
  if(goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && "innerText" in a) {
    a = goog.string.canonicalizeNewlines(a.innerText)
  }else {
    var b = [];
    goog.dom.getTextContent_(a, b, !0);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  goog.dom.BrowserFeature.CAN_USE_INNER_TEXT || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a
};
goog.dom.getRawTextContent = function(a) {
  var b = [];
  goog.dom.getTextContent_(a, b, !1);
  return b.join("")
};
goog.dom.getTextContent_ = function(a, b, c) {
  if(!(a.nodeName in goog.dom.TAGS_TO_IGNORE_)) {
    if(a.nodeType == goog.dom.NodeType.TEXT) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
        b.push(goog.dom.PREDEFINED_TAG_VALUES_[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          goog.dom.getTextContent_(a, b, c), a = a.nextSibling
        }
      }
    }
  }
};
goog.dom.getNodeTextLength = function(a) {
  return goog.dom.getTextContent(a).length
};
goog.dom.getNodeTextOffset = function(a, b) {
  for(var c = b || goog.dom.getOwnerDocument(a).body, d = [];a && a != c;) {
    for(var e = a;e = e.previousSibling;) {
      d.unshift(goog.dom.getTextContent(e))
    }
    a = a.parentNode
  }
  return goog.string.trimLeft(d.join("")).replace(/ +/g, " ").length
};
goog.dom.getNodeAtOffset = function(a, b, c) {
  for(var a = [a], d = 0, e;0 < a.length && d < b;) {
    if(e = a.pop(), !(e.nodeName in goog.dom.TAGS_TO_IGNORE_)) {
      if(e.nodeType == goog.dom.NodeType.TEXT) {
        var f = e.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " "), d = d + f.length
      }else {
        if(e.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
          d += goog.dom.PREDEFINED_TAG_VALUES_[e.nodeName].length
        }else {
          for(f = e.childNodes.length - 1;0 <= f;f--) {
            a.push(e.childNodes[f])
          }
        }
      }
    }
  }
  goog.isObject(c) && (c.remainder = e ? e.nodeValue.length + b - d - 1 : 0, c.node = e);
  return e
};
goog.dom.isNodeList = function(a) {
  if(a && "number" == typeof a.length) {
    if(goog.isObject(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(goog.isFunction(a)) {
      return"function" == typeof a.item
    }
  }
  return!1
};
goog.dom.getAncestorByTagNameAndClass = function(a, b, c) {
  var d = b ? b.toUpperCase() : null;
  return goog.dom.getAncestor(a, function(a) {
    return(!d || a.nodeName == d) && (!c || goog.dom.classes.has(a, c))
  }, !0)
};
goog.dom.getAncestorByClass = function(a, b) {
  return goog.dom.getAncestorByTagNameAndClass(a, null, b)
};
goog.dom.getAncestor = function(a, b, c, d) {
  c || (a = a.parentNode);
  for(var c = null == d, e = 0;a && (c || e <= d);) {
    if(b(a)) {
      return a
    }
    a = a.parentNode;
    e++
  }
  return null
};
goog.dom.getActiveElement = function(a) {
  try {
    return a && a.activeElement
  }catch(b) {
  }
  return null
};
goog.dom.DomHelper = function(a) {
  this.document_ = a || goog.global.document || document
};
goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper;
goog.dom.DomHelper.prototype.setDocument = function(a) {
  this.document_ = a
};
goog.dom.DomHelper.prototype.getDocument = function() {
  return this.document_
};
goog.dom.DomHelper.prototype.getElement = function(a) {
  return goog.isString(a) ? this.document_.getElementById(a) : a
};
goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement;
goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function(a, b, c) {
  return goog.dom.getElementsByTagNameAndClass_(this.document_, a, b, c)
};
goog.dom.DomHelper.prototype.getElementsByClass = function(a, b) {
  return goog.dom.getElementsByClass(a, b || this.document_)
};
goog.dom.DomHelper.prototype.getElementByClass = function(a, b) {
  return goog.dom.getElementByClass(a, b || this.document_)
};
goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;
goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties;
goog.dom.DomHelper.prototype.getViewportSize = function(a) {
  return goog.dom.getViewportSize(a || this.getWindow())
};
goog.dom.DomHelper.prototype.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(this.getWindow())
};
goog.dom.DomHelper.prototype.createDom = function(a, b, c) {
  return goog.dom.createDom_(this.document_, arguments)
};
goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom;
goog.dom.DomHelper.prototype.createElement = function(a) {
  return this.document_.createElement(a)
};
goog.dom.DomHelper.prototype.createTextNode = function(a) {
  return this.document_.createTextNode(a)
};
goog.dom.DomHelper.prototype.createTable = function(a, b, c) {
  return goog.dom.createTable_(this.document_, a, b, !!c)
};
goog.dom.DomHelper.prototype.htmlToDocumentFragment = function(a) {
  return goog.dom.htmlToDocumentFragment_(this.document_, a)
};
goog.dom.DomHelper.prototype.getCompatMode = function() {
  return this.isCss1CompatMode() ? "CSS1Compat" : "BackCompat"
};
goog.dom.DomHelper.prototype.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(this.document_)
};
goog.dom.DomHelper.prototype.getWindow = function() {
  return goog.dom.getWindow_(this.document_)
};
goog.dom.DomHelper.prototype.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(this.document_)
};
goog.dom.DomHelper.prototype.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(this.document_)
};
goog.dom.DomHelper.prototype.appendChild = goog.dom.appendChild;
goog.dom.DomHelper.prototype.append = goog.dom.append;
goog.dom.DomHelper.prototype.removeChildren = goog.dom.removeChildren;
goog.dom.DomHelper.prototype.insertSiblingBefore = goog.dom.insertSiblingBefore;
goog.dom.DomHelper.prototype.insertSiblingAfter = goog.dom.insertSiblingAfter;
goog.dom.DomHelper.prototype.removeNode = goog.dom.removeNode;
goog.dom.DomHelper.prototype.replaceNode = goog.dom.replaceNode;
goog.dom.DomHelper.prototype.flattenElement = goog.dom.flattenElement;
goog.dom.DomHelper.prototype.getFirstElementChild = goog.dom.getFirstElementChild;
goog.dom.DomHelper.prototype.getLastElementChild = goog.dom.getLastElementChild;
goog.dom.DomHelper.prototype.getNextElementSibling = goog.dom.getNextElementSibling;
goog.dom.DomHelper.prototype.getPreviousElementSibling = goog.dom.getPreviousElementSibling;
goog.dom.DomHelper.prototype.getNextNode = goog.dom.getNextNode;
goog.dom.DomHelper.prototype.getPreviousNode = goog.dom.getPreviousNode;
goog.dom.DomHelper.prototype.isNodeLike = goog.dom.isNodeLike;
goog.dom.DomHelper.prototype.contains = goog.dom.contains;
goog.dom.DomHelper.prototype.getOwnerDocument = goog.dom.getOwnerDocument;
goog.dom.DomHelper.prototype.getFrameContentDocument = goog.dom.getFrameContentDocument;
goog.dom.DomHelper.prototype.getFrameContentWindow = goog.dom.getFrameContentWindow;
goog.dom.DomHelper.prototype.setTextContent = goog.dom.setTextContent;
goog.dom.DomHelper.prototype.findNode = goog.dom.findNode;
goog.dom.DomHelper.prototype.findNodes = goog.dom.findNodes;
goog.dom.DomHelper.prototype.getTextContent = goog.dom.getTextContent;
goog.dom.DomHelper.prototype.getNodeTextLength = goog.dom.getNodeTextLength;
goog.dom.DomHelper.prototype.getNodeTextOffset = goog.dom.getNodeTextOffset;
goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass = goog.dom.getAncestorByTagNameAndClass;
goog.dom.DomHelper.prototype.getAncestorByClass = goog.dom.getAncestorByClass;
goog.dom.DomHelper.prototype.getAncestor = goog.dom.getAncestor;
goog.messaging = {};
goog.messaging.MessageChannel = function() {
};
goog.messaging.MessageChannel.prototype.connect = function() {
};
goog.messaging.MessageChannel.prototype.isConnected = function() {
};
goog.messaging.MessageChannel.prototype.registerService = function() {
};
goog.messaging.MessageChannel.prototype.registerDefaultService = function() {
};
goog.messaging.MessageChannel.prototype.send = function() {
};
goog.messaging.AbstractChannel = function() {
  goog.Disposable.call(this);
  this.services_ = {}
};
goog.inherits(goog.messaging.AbstractChannel, goog.Disposable);
goog.messaging.AbstractChannel.prototype.logger = goog.debug.Logger.getLogger("goog.messaging.AbstractChannel");
goog.messaging.AbstractChannel.prototype.connect = function(a) {
  a && a()
};
goog.messaging.AbstractChannel.prototype.isConnected = function() {
  return!0
};
goog.messaging.AbstractChannel.prototype.registerService = function(a, b, c) {
  this.services_[a] = {callback:b, objectPayload:!!c}
};
goog.messaging.AbstractChannel.prototype.registerDefaultService = function(a) {
  this.defaultService_ = a
};
goog.messaging.AbstractChannel.prototype.deliver = function(a, b) {
  var c = this.getService(a, b);
  if(c) {
    var d = this.decodePayload(a, b, c.objectPayload);
    goog.isDefAndNotNull(d) && c.callback(d)
  }
};
goog.messaging.AbstractChannel.prototype.getService = function(a, b) {
  var c = this.services_[a];
  if(c) {
    return c
  }
  if(this.defaultService_) {
    var c = goog.partial(this.defaultService_, a), d = goog.isObject(b);
    return{callback:c, objectPayload:d}
  }
  this.logger.warning('Unknown service name "' + a + '"');
  return null
};
goog.messaging.AbstractChannel.prototype.decodePayload = function(a, b, c) {
  if(c && goog.isString(b)) {
    try {
      return goog.json.parse(b)
    }catch(d) {
      return this.logger.warning("Expected JSON payload for " + a + ', was "' + b + '"'), null
    }
  }else {
    if(!c && !goog.isString(b)) {
      return goog.json.serialize(b)
    }
  }
  return b
};
goog.messaging.AbstractChannel.prototype.disposeInternal = function() {
  goog.messaging.AbstractChannel.superClass_.disposeInternal.call(this);
  goog.dispose(this.logger);
  delete this.logger;
  delete this.services_;
  delete this.defaultService_
};
goog.net.xpc.CrossPageChannelRole = {OUTER:0, INNER:1};
goog.net.xpc.Transport = function(a) {
  goog.Disposable.call(this);
  this.domHelper_ = a || goog.dom.getDomHelper()
};
goog.inherits(goog.net.xpc.Transport, goog.Disposable);
goog.net.xpc.Transport.prototype.transportType = 0;
goog.net.xpc.Transport.prototype.getType = function() {
  return this.transportType
};
goog.net.xpc.Transport.prototype.getWindow = function() {
  return this.domHelper_.getWindow()
};
goog.net.xpc.Transport.prototype.getName = function() {
  return goog.net.xpc.TransportNames[this.transportType] || ""
};
goog.net.xpc.FrameElementMethodTransport = function(a, b) {
  goog.net.xpc.Transport.call(this, b);
  this.channel_ = a;
  this.queue_ = [];
  this.deliverQueuedCb_ = goog.bind(this.deliverQueued_, this)
};
goog.inherits(goog.net.xpc.FrameElementMethodTransport, goog.net.xpc.Transport);
goog.net.xpc.FrameElementMethodTransport.prototype.transportType = goog.net.xpc.TransportTypes.FRAME_ELEMENT_METHOD;
goog.net.xpc.FrameElementMethodTransport.prototype.recursive_ = !1;
goog.net.xpc.FrameElementMethodTransport.prototype.timer_ = 0;
goog.net.xpc.FrameElementMethodTransport.outgoing_ = null;
goog.net.xpc.FrameElementMethodTransport.prototype.connect = function() {
  this.channel_.getRole() == goog.net.xpc.CrossPageChannelRole.OUTER ? (this.iframeElm_ = this.channel_.iframeElement_, this.iframeElm_.XPC_toOuter = goog.bind(this.incoming_, this)) : this.attemptSetup_()
};
goog.net.xpc.FrameElementMethodTransport.prototype.attemptSetup_ = function() {
  var a = !0;
  try {
    if(this.iframeElm_ || (this.iframeElm_ = this.getWindow().frameElement), this.iframeElm_ && this.iframeElm_.XPC_toOuter) {
      this.outgoing_ = this.iframeElm_.XPC_toOuter, this.iframeElm_.XPC_toOuter.XPC_toInner = goog.bind(this.incoming_, this), a = !1, this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP_ACK_), this.channel_.notifyConnected_()
    }
  }catch(b) {
    goog.net.xpc.logger.severe("exception caught while attempting setup: " + b)
  }
  a && (this.attemptSetupCb_ || (this.attemptSetupCb_ = goog.bind(this.attemptSetup_, this)), this.getWindow().setTimeout(this.attemptSetupCb_, 100))
};
goog.net.xpc.FrameElementMethodTransport.prototype.transportServiceHandler = function(a) {
  if(this.channel_.getRole() == goog.net.xpc.CrossPageChannelRole.OUTER && !this.channel_.isConnected() && a == goog.net.xpc.SETUP_ACK_) {
    this.outgoing_ = this.iframeElm_.XPC_toOuter.XPC_toInner, this.channel_.notifyConnected_()
  }else {
    throw Error("Got unexpected transport message.");
  }
};
goog.net.xpc.FrameElementMethodTransport.prototype.incoming_ = function(a, b) {
  !this.recursive_ && 0 == this.queue_.length ? this.channel_.deliver_(a, b) : (this.queue_.push({serviceName:a, payload:b}), 1 == this.queue_.length && (this.timer_ = this.getWindow().setTimeout(this.deliverQueuedCb_, 1)))
};
goog.net.xpc.FrameElementMethodTransport.prototype.deliverQueued_ = function() {
  for(;this.queue_.length;) {
    var a = this.queue_.shift();
    this.channel_.deliver_(a.serviceName, a.payload)
  }
};
goog.net.xpc.FrameElementMethodTransport.prototype.send = function(a, b) {
  this.recursive_ = !0;
  this.outgoing_(a, b);
  this.recursive_ = !1
};
goog.net.xpc.FrameElementMethodTransport.prototype.disposeInternal = function() {
  goog.net.xpc.FrameElementMethodTransport.superClass_.disposeInternal.call(this);
  this.iframeElm_ = this.outgoing_ = null
};
goog.net.xpc.IframePollingTransport = function(a, b) {
  goog.net.xpc.Transport.call(this, b);
  this.channel_ = a;
  this.sendUri_ = this.channel_.cfg_[goog.net.xpc.CfgFields.PEER_POLL_URI];
  this.rcvUri_ = this.channel_.cfg_[goog.net.xpc.CfgFields.LOCAL_POLL_URI];
  this.sendQueue_ = []
};
goog.inherits(goog.net.xpc.IframePollingTransport, goog.net.xpc.Transport);
goog.net.xpc.IframePollingTransport.prototype.transportType = goog.net.xpc.TransportTypes.IFRAME_POLLING;
goog.net.xpc.IframePollingTransport.prototype.sequence_ = 0;
goog.net.xpc.IframePollingTransport.prototype.waitForAck_ = !1;
goog.net.xpc.IframePollingTransport.prototype.initialized_ = !1;
goog.net.xpc.IframePollingTransport.IFRAME_PREFIX = "googlexpc";
goog.net.xpc.IframePollingTransport.prototype.getMsgFrameName_ = function() {
  return goog.net.xpc.IframePollingTransport.IFRAME_PREFIX + "_" + this.channel_.name + "_msg"
};
goog.net.xpc.IframePollingTransport.prototype.getAckFrameName_ = function() {
  return goog.net.xpc.IframePollingTransport.IFRAME_PREFIX + "_" + this.channel_.name + "_ack"
};
goog.net.xpc.IframePollingTransport.prototype.connect = function() {
  this.isDisposed() || (goog.net.xpc.logger.fine("transport connect called"), this.initialized_ || (goog.net.xpc.logger.fine("initializing..."), this.constructSenderFrames_(), this.initialized_ = !0), this.checkForeignFramesReady_())
};
goog.net.xpc.IframePollingTransport.prototype.constructSenderFrames_ = function() {
  var a = this.getMsgFrameName_();
  this.msgIframeElm_ = this.constructSenderFrame_(a);
  this.msgWinObj_ = this.getWindow().frames[a];
  a = this.getAckFrameName_();
  this.ackIframeElm_ = this.constructSenderFrame_(a);
  this.ackWinObj_ = this.getWindow().frames[a]
};
goog.net.xpc.IframePollingTransport.prototype.constructSenderFrame_ = function(a) {
  goog.net.xpc.logger.finest("constructing sender frame: " + a);
  var b = goog.dom.createElement("iframe"), c = b.style;
  c.position = "absolute";
  c.top = "-10px";
  c.left = "10px";
  c.width = "1px";
  c.height = "1px";
  b.id = b.name = a;
  b.src = this.sendUri_ + "#INITIAL";
  this.getWindow().document.body.appendChild(b);
  return b
};
goog.net.xpc.IframePollingTransport.prototype.innerPeerReconnect_ = function() {
  goog.net.xpc.logger.finest("innerPeerReconnect called");
  this.channel_.name = goog.net.xpc.getRandomString(10);
  goog.net.xpc.logger.finest("switching channels: " + this.channel_.name);
  this.deconstructSenderFrames_();
  this.initialized_ = !1;
  this.reconnectFrame_ = this.constructSenderFrame_(goog.net.xpc.IframePollingTransport.IFRAME_PREFIX + "_reconnect_" + this.channel_.name)
};
goog.net.xpc.IframePollingTransport.prototype.outerPeerReconnect_ = function() {
  goog.net.xpc.logger.finest("outerPeerReconnect called");
  for(var a = this.channel_.peerWindowObject_.frames, b = a.length, c = 0;c < b;c++) {
    var d;
    try {
      a[c] && a[c].name && (d = a[c].name)
    }catch(e) {
    }
    if(d) {
      var f = d.split("_");
      if(3 == f.length && f[0] == goog.net.xpc.IframePollingTransport.IFRAME_PREFIX && "reconnect" == f[1]) {
        this.channel_.name = f[2];
        this.deconstructSenderFrames_();
        this.initialized_ = !1;
        break
      }
    }
  }
};
goog.net.xpc.IframePollingTransport.prototype.deconstructSenderFrames_ = function() {
  goog.net.xpc.logger.finest("deconstructSenderFrames called");
  this.msgIframeElm_ && (this.msgIframeElm_.parentNode.removeChild(this.msgIframeElm_), this.msgWinObj_ = this.msgIframeElm_ = null);
  this.ackIframeElm_ && (this.ackIframeElm_.parentNode.removeChild(this.ackIframeElm_), this.ackWinObj_ = this.ackIframeElm_ = null)
};
goog.net.xpc.IframePollingTransport.prototype.checkForeignFramesReady_ = function() {
  !this.isRcvFrameReady_(this.getMsgFrameName_()) || !this.isRcvFrameReady_(this.getAckFrameName_()) ? (goog.net.xpc.logger.finest("foreign frames not (yet) present"), this.channel_.getRole() == goog.net.xpc.CrossPageChannelRole.INNER && !this.reconnectFrame_ ? this.innerPeerReconnect_() : this.channel_.getRole() == goog.net.xpc.CrossPageChannelRole.OUTER && this.outerPeerReconnect_(), this.getWindow().setTimeout(goog.bind(this.connect, this), 100)) : (goog.net.xpc.logger.fine("foreign frames present"), 
  this.msgReceiver_ = new goog.net.xpc.IframePollingTransport.Receiver(this, this.channel_.peerWindowObject_.frames[this.getMsgFrameName_()], goog.bind(this.processIncomingMsg, this)), this.ackReceiver_ = new goog.net.xpc.IframePollingTransport.Receiver(this, this.channel_.peerWindowObject_.frames[this.getAckFrameName_()], goog.bind(this.processIncomingAck, this)), this.checkLocalFramesPresent_())
};
goog.net.xpc.IframePollingTransport.prototype.isRcvFrameReady_ = function(a) {
  goog.net.xpc.logger.finest("checking for receive frame: " + a);
  try {
    var b = this.channel_.peerWindowObject_.frames[a];
    if(!b || 0 != b.location.href.indexOf(this.rcvUri_)) {
      return!1
    }
  }catch(c) {
    return!1
  }
  return!0
};
goog.net.xpc.IframePollingTransport.prototype.checkLocalFramesPresent_ = function() {
  var a = this.channel_.peerWindowObject_.frames;
  !a[this.getAckFrameName_()] || !a[this.getMsgFrameName_()] ? (this.checkLocalFramesPresentCb_ || (this.checkLocalFramesPresentCb_ = goog.bind(this.checkLocalFramesPresent_, this)), this.getWindow().setTimeout(this.checkLocalFramesPresentCb_, 100), goog.net.xpc.logger.fine("local frames not (yet) present")) : (this.msgSender_ = new goog.net.xpc.IframePollingTransport.Sender(this.sendUri_, this.msgWinObj_), this.ackSender_ = new goog.net.xpc.IframePollingTransport.Sender(this.sendUri_, this.ackWinObj_), 
  goog.net.xpc.logger.fine("local frames ready"), this.getWindow().setTimeout(goog.bind(function() {
    this.msgSender_.send(goog.net.xpc.SETUP);
    this.waitForAck_ = this.sentConnectionSetup_ = !0;
    goog.net.xpc.logger.fine("SETUP sent")
  }, this), 100))
};
goog.net.xpc.IframePollingTransport.prototype.checkIfConnected_ = function() {
  if(this.sentConnectionSetupAck_ && this.rcvdConnectionSetupAck_) {
    if(this.channel_.notifyConnected_(), this.deliveryQueue_) {
      goog.net.xpc.logger.fine("delivering queued messages (" + this.deliveryQueue_.length + ")");
      for(var a = 0, b;a < this.deliveryQueue_.length;a++) {
        b = this.deliveryQueue_[a], this.channel_.deliver_(b.service, b.payload)
      }
      delete this.deliveryQueue_
    }
  }else {
    goog.net.xpc.logger.finest("checking if connected: ack sent:" + this.sentConnectionSetupAck_ + ", ack rcvd: " + this.rcvdConnectionSetupAck_)
  }
};
goog.net.xpc.IframePollingTransport.prototype.processIncomingMsg = function(a) {
  goog.net.xpc.logger.finest("msg received: " + a);
  if(a == goog.net.xpc.SETUP) {
    this.ackSender_ && (this.ackSender_.send(goog.net.xpc.SETUP_ACK_), goog.net.xpc.logger.finest("SETUP_ACK sent"), this.sentConnectionSetupAck_ = !0, this.checkIfConnected_())
  }else {
    if(this.channel_.isConnected() || this.sentConnectionSetupAck_) {
      var b = a.indexOf("|"), c = a.substring(0, b), a = a.substring(b + 1), b = c.indexOf(",");
      if(-1 == b) {
        var d;
        this.ackSender_.send("ACK:" + c);
        this.deliverPayload_(a)
      }else {
        if(d = c.substring(0, b), this.ackSender_.send("ACK:" + d), c = c.substring(b + 1).split("/"), b = parseInt(c[0], 10), c = parseInt(c[1], 10), 1 == b && (this.parts_ = []), this.parts_.push(a), b == c) {
          this.deliverPayload_(this.parts_.join("")), delete this.parts_
        }
      }
    }else {
      goog.net.xpc.logger.warning("received msg, but channel is not connected")
    }
  }
};
goog.net.xpc.IframePollingTransport.prototype.processIncomingAck = function(a) {
  goog.net.xpc.logger.finest("ack received: " + a);
  a == goog.net.xpc.SETUP_ACK_ ? (this.waitForAck_ = !1, this.rcvdConnectionSetupAck_ = !0, this.checkIfConnected_()) : this.channel_.isConnected() ? this.waitForAck_ ? parseInt(a.split(":")[1], 10) == this.sequence_ ? (this.waitForAck_ = !1, this.sendNextFrame_()) : goog.net.xpc.logger.warning("got ack with wrong sequence") : goog.net.xpc.logger.warning("got unexpected ack") : goog.net.xpc.logger.warning("received ack, but channel not connected")
};
goog.net.xpc.IframePollingTransport.prototype.sendNextFrame_ = function() {
  if(!this.waitForAck_ && this.sendQueue_.length) {
    var a = this.sendQueue_.shift();
    ++this.sequence_;
    this.msgSender_.send(this.sequence_ + a);
    goog.net.xpc.logger.finest("msg sent: " + this.sequence_ + a);
    this.waitForAck_ = !0
  }
};
goog.net.xpc.IframePollingTransport.prototype.deliverPayload_ = function(a) {
  var b = a.indexOf(":"), c = a.substr(0, b), a = a.substring(b + 1);
  this.channel_.isConnected() ? this.channel_.deliver_(c, a) : ((this.deliveryQueue_ || (this.deliveryQueue_ = [])).push({service:c, payload:a}), goog.net.xpc.logger.finest("queued delivery"))
};
goog.net.xpc.IframePollingTransport.prototype.MAX_FRAME_LENGTH_ = 3800;
goog.net.xpc.IframePollingTransport.prototype.send = function(a, b) {
  var c = a + ":" + b;
  if(!goog.userAgent.IE || b.length <= this.MAX_FRAME_LENGTH_) {
    this.sendQueue_.push("|" + c)
  }else {
    for(var d = b.length, e = Math.ceil(d / this.MAX_FRAME_LENGTH_), f = 0, g = 1;f < d;) {
      this.sendQueue_.push("," + g + "/" + e + "|" + c.substr(f, this.MAX_FRAME_LENGTH_)), g++, f += this.MAX_FRAME_LENGTH_
    }
  }
  this.sendNextFrame_()
};
goog.net.xpc.IframePollingTransport.prototype.disposeInternal = function() {
  goog.net.xpc.IframePollingTransport.superClass_.disposeInternal.call(this);
  var a = goog.net.xpc.IframePollingTransport.receivers_;
  goog.array.remove(a, this.msgReceiver_);
  goog.array.remove(a, this.ackReceiver_);
  this.msgReceiver_ = this.ackReceiver_ = null;
  goog.dom.removeNode(this.msgIframeElm_);
  goog.dom.removeNode(this.ackIframeElm_);
  this.msgWinObj_ = this.ackWinObj_ = this.msgIframeElm_ = this.ackIframeElm_ = null
};
goog.net.xpc.IframePollingTransport.receivers_ = [];
goog.net.xpc.IframePollingTransport.TIME_POLL_SHORT_ = 10;
goog.net.xpc.IframePollingTransport.TIME_POLL_LONG_ = 100;
goog.net.xpc.IframePollingTransport.TIME_SHORT_POLL_AFTER_ACTIVITY_ = 1E3;
goog.net.xpc.IframePollingTransport.receive_ = function() {
  var a = !1;
  try {
    for(var b = 0, c = goog.net.xpc.IframePollingTransport.receivers_.length;b < c;b++) {
      a = a || goog.net.xpc.IframePollingTransport.receivers_[b].receive()
    }
  }catch(d) {
    if(goog.net.xpc.logger.info("receive_() failed: " + d), goog.net.xpc.IframePollingTransport.receivers_[b].transport_.channel_.notifyTransportError_(), !goog.net.xpc.IframePollingTransport.receivers_.length) {
      return
    }
  }
  b = goog.now();
  a && (goog.net.xpc.IframePollingTransport.lastActivity_ = b);
  goog.net.xpc.IframePollingTransport.rcvTimer_ = window.setTimeout(goog.net.xpc.IframePollingTransport.receiveCb_, b - goog.net.xpc.IframePollingTransport.lastActivity_ < goog.net.xpc.IframePollingTransport.TIME_SHORT_POLL_AFTER_ACTIVITY_ ? goog.net.xpc.IframePollingTransport.TIME_POLL_SHORT_ : goog.net.xpc.IframePollingTransport.TIME_POLL_LONG_)
};
goog.net.xpc.IframePollingTransport.receiveCb_ = goog.bind(goog.net.xpc.IframePollingTransport.receive_, goog.net.xpc.IframePollingTransport);
goog.net.xpc.IframePollingTransport.startRcvTimer_ = function() {
  goog.net.xpc.logger.fine("starting receive-timer");
  goog.net.xpc.IframePollingTransport.lastActivity_ = goog.now();
  goog.net.xpc.IframePollingTransport.rcvTimer_ && window.clearTimeout(goog.net.xpc.IframePollingTransport.rcvTimer_);
  goog.net.xpc.IframePollingTransport.rcvTimer_ = window.setTimeout(goog.net.xpc.IframePollingTransport.receiveCb_, goog.net.xpc.IframePollingTransport.TIME_POLL_SHORT_)
};
goog.net.xpc.IframePollingTransport.Sender = function(a, b) {
  this.sendUri_ = a;
  this.sendFrame_ = b;
  this.cycle_ = 0
};
goog.net.xpc.IframePollingTransport.Sender.prototype.send = function(a) {
  this.cycle_ = ++this.cycle_ % 2;
  a = this.sendUri_ + "#" + this.cycle_ + encodeURIComponent(a);
  try {
    goog.userAgent.WEBKIT ? this.sendFrame_.location.href = a : this.sendFrame_.location.replace(a)
  }catch(b) {
    goog.net.xpc.logger.severe("sending failed", b)
  }
  goog.net.xpc.IframePollingTransport.startRcvTimer_()
};
goog.net.xpc.IframePollingTransport.Receiver = function(a, b, c) {
  this.transport_ = a;
  this.rcvFrame_ = b;
  this.cb_ = c;
  this.currentLoc_ = this.rcvFrame_.location.href.split("#")[0] + "#INITIAL";
  goog.net.xpc.IframePollingTransport.receivers_.push(this);
  goog.net.xpc.IframePollingTransport.startRcvTimer_()
};
goog.net.xpc.IframePollingTransport.Receiver.prototype.receive = function() {
  var a = this.rcvFrame_.location.href;
  if(a != this.currentLoc_) {
    this.currentLoc_ = a;
    if(a = a.split("#")[1]) {
      a = a.substr(1), this.cb_(decodeURIComponent(a))
    }
    return!0
  }
  return!1
};
goog.net.xpc.IframeRelayTransport = function(a, b) {
  goog.net.xpc.Transport.call(this, b);
  this.channel_ = a;
  this.peerRelayUri_ = this.channel_.cfg_[goog.net.xpc.CfgFields.PEER_RELAY_URI];
  this.peerIframeId_ = this.channel_.cfg_[goog.net.xpc.CfgFields.IFRAME_ID];
  goog.userAgent.WEBKIT && goog.net.xpc.IframeRelayTransport.startCleanupTimer_()
};
goog.inherits(goog.net.xpc.IframeRelayTransport, goog.net.xpc.Transport);
goog.userAgent.WEBKIT && (goog.net.xpc.IframeRelayTransport.iframeRefs_ = [], goog.net.xpc.IframeRelayTransport.CLEANUP_INTERVAL_ = 1E3, goog.net.xpc.IframeRelayTransport.IFRAME_MAX_AGE_ = 3E3, goog.net.xpc.IframeRelayTransport.cleanupTimer_ = 0, goog.net.xpc.IframeRelayTransport.startCleanupTimer_ = function() {
  goog.net.xpc.IframeRelayTransport.cleanupTimer_ || (goog.net.xpc.IframeRelayTransport.cleanupTimer_ = window.setTimeout(function() {
    goog.net.xpc.IframeRelayTransport.cleanup_()
  }, goog.net.xpc.IframeRelayTransport.CLEANUP_INTERVAL_))
}, goog.net.xpc.IframeRelayTransport.cleanup_ = function(a) {
  for(var b = goog.now(), a = a || goog.net.xpc.IframeRelayTransport.IFRAME_MAX_AGE_;goog.net.xpc.IframeRelayTransport.iframeRefs_.length && b - goog.net.xpc.IframeRelayTransport.iframeRefs_[0].timestamp >= a;) {
    var c = goog.net.xpc.IframeRelayTransport.iframeRefs_.shift().iframeElement;
    goog.dom.removeNode(c);
    goog.net.xpc.logger.finest("iframe removed")
  }
  goog.net.xpc.IframeRelayTransport.cleanupTimer_ = window.setTimeout(goog.net.xpc.IframeRelayTransport.cleanupCb_, goog.net.xpc.IframeRelayTransport.CLEANUP_INTERVAL_)
}, goog.net.xpc.IframeRelayTransport.cleanupCb_ = function() {
  goog.net.xpc.IframeRelayTransport.cleanup_()
});
goog.net.xpc.IframeRelayTransport.IE_PAYLOAD_MAX_SIZE_ = 1800;
goog.net.xpc.IframeRelayTransport.fragmentMap_ = {};
goog.net.xpc.IframeRelayTransport.prototype.transportType = goog.net.xpc.TransportTypes.IFRAME_RELAY;
goog.net.xpc.IframeRelayTransport.prototype.connect = function() {
  if(!this.getWindow().xpcRelay) {
    this.getWindow().xpcRelay = goog.net.xpc.IframeRelayTransport.receiveMessage_
  }
  this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP)
};
goog.net.xpc.IframeRelayTransport.receiveMessage_ = function(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), e = b.substr(c + 1);
  if(!goog.userAgent.IE || (c = d.indexOf("|")) == -1) {
    var f = d
  }else {
    var f = d.substr(0, c), d = d.substr(c + 1), c = d.indexOf("+"), g = d.substr(0, c), c = parseInt(d.substr(c + 1), 10), h = goog.net.xpc.IframeRelayTransport.fragmentMap_[g];
    h || (h = goog.net.xpc.IframeRelayTransport.fragmentMap_[g] = {fragments:[], received:0, expected:0});
    if(goog.string.contains(d, "++")) {
      h.expected = c + 1
    }
    h.fragments[c] = e;
    h.received++;
    if(h.received != h.expected) {
      return
    }
    e = h.fragments.join("");
    delete goog.net.xpc.IframeRelayTransport.fragmentMap_[g]
  }
  goog.net.xpc.channels_[a].deliver_(f, decodeURIComponent(e))
};
goog.net.xpc.IframeRelayTransport.prototype.transportServiceHandler = function(a) {
  if(a == goog.net.xpc.SETUP) {
    this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP_ACK_);
    this.channel_.notifyConnected_()
  }else {
    a == goog.net.xpc.SETUP_ACK_ && this.channel_.notifyConnected_()
  }
};
goog.net.xpc.IframeRelayTransport.prototype.send = function(a, b) {
  var c = encodeURIComponent(b), d = c.length, e = goog.net.xpc.IframeRelayTransport.IE_PAYLOAD_MAX_SIZE_;
  if(goog.userAgent.IE && d > e) {
    for(var f = goog.string.getRandomString(), g = 0, h = 0;g < d;h++) {
      var i = c.substr(g, e), g = g + e;
      this.send_(a, i, f + (g >= d ? "++" : "+") + h)
    }
  }else {
    this.send_(a, c)
  }
};
goog.net.xpc.IframeRelayTransport.prototype.send_ = function(a, b, c) {
  if(goog.userAgent.IE) {
    var d = this.getWindow().document.createElement("div");
    d.innerHTML = '<iframe onload="this.xpcOnload()"></iframe>';
    d = d.childNodes[0];
    d.xpcOnload = goog.net.xpc.IframeRelayTransport.iframeLoadHandler_
  }else {
    d = this.getWindow().document.createElement("iframe");
    goog.userAgent.WEBKIT ? goog.net.xpc.IframeRelayTransport.iframeRefs_.push({timestamp:goog.now(), iframeElement:d}) : goog.events.listen(d, "load", goog.net.xpc.IframeRelayTransport.iframeLoadHandler_)
  }
  var e = d.style;
  e.visibility = "hidden";
  e.width = d.style.height = "0px";
  e.position = "absolute";
  e = this.peerRelayUri_;
  e = e + ("#" + this.channel_.name);
  this.peerIframeId_ && (e = e + ("," + this.peerIframeId_));
  e = e + ("|" + a);
  c && (e = e + ("|" + c));
  e = e + (":" + b);
  d.src = e;
  this.getWindow().document.body.appendChild(d);
  goog.net.xpc.logger.finest("msg sent: " + e)
};
goog.net.xpc.IframeRelayTransport.iframeLoadHandler_ = function() {
  goog.net.xpc.logger.finest("iframe-load");
  goog.dom.removeNode(this);
  this.xpcOnload = null
};
goog.net.xpc.IframeRelayTransport.prototype.disposeInternal = function() {
  goog.net.xpc.IframeRelayTransport.superClass_.disposeInternal.call(this);
  goog.userAgent.WEBKIT && goog.net.xpc.IframeRelayTransport.cleanup_(0)
};
goog.net.xpc.NativeMessagingTransport = function(a, b, c) {
  goog.net.xpc.Transport.call(this, c);
  this.channel_ = a;
  this.peerHostname_ = b || "*"
};
goog.inherits(goog.net.xpc.NativeMessagingTransport, goog.net.xpc.Transport);
goog.net.xpc.NativeMessagingTransport.prototype.initialized_ = !1;
goog.net.xpc.NativeMessagingTransport.prototype.transportType = goog.net.xpc.TransportTypes.NATIVE_MESSAGING;
goog.net.xpc.NativeMessagingTransport.activeCount_ = {};
goog.net.xpc.NativeMessagingTransport.initialize_ = function(a) {
  var b = goog.getUid(a), c = goog.net.xpc.NativeMessagingTransport.activeCount_[b];
  goog.isNumber(c) || (c = 0);
  0 == c && goog.events.listen(a.postMessage ? a : a.document, "message", goog.net.xpc.NativeMessagingTransport.messageReceived_, !1, goog.net.xpc.NativeMessagingTransport);
  goog.net.xpc.NativeMessagingTransport.activeCount_[b] = c + 1
};
goog.net.xpc.NativeMessagingTransport.messageReceived_ = function(a) {
  var b = a.getBrowserEvent().data;
  if(!goog.isString(b)) {
    return!1
  }
  var c = b.indexOf("|"), d = b.indexOf(":");
  if(-1 == c || -1 == d) {
    return!1
  }
  var e = b.substring(0, c), c = b.substring(c + 1, d), b = b.substring(d + 1);
  goog.net.xpc.logger.fine("messageReceived: channel=" + e + ", service=" + c + ", payload=" + b);
  if(d = goog.net.xpc.channels_[e]) {
    return d.deliver_(c, b, a.getBrowserEvent().origin), !0
  }
  for(var f in goog.net.xpc.channels_) {
    if(a = goog.net.xpc.channels_[f], a.getRole() == goog.net.xpc.CrossPageChannelRole.INNER && !a.isConnected() && c == goog.net.xpc.TRANSPORT_SERVICE_ && b == goog.net.xpc.SETUP) {
      return goog.net.xpc.logger.fine("changing channel name to " + e), a.name = e, delete goog.net.xpc.channels_[f], goog.net.xpc.channels_[e] = a, a.deliver_(c, b), !0
    }
  }
  goog.net.xpc.logger.info('channel name mismatch; message ignored"');
  return!1
};
goog.net.xpc.NativeMessagingTransport.prototype.transportServiceHandler = function(a) {
  switch(a) {
    case goog.net.xpc.SETUP:
      this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP_ACK_);
      break;
    case goog.net.xpc.SETUP_ACK_:
      this.channel_.notifyConnected_()
  }
};
goog.net.xpc.NativeMessagingTransport.prototype.connect = function() {
  goog.net.xpc.NativeMessagingTransport.initialize_(this.getWindow());
  this.initialized_ = !0;
  this.connectWithRetries_()
};
goog.net.xpc.NativeMessagingTransport.prototype.connectWithRetries_ = function() {
  !this.channel_.isConnected() && !this.isDisposed() && (this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP), this.getWindow().setTimeout(goog.bind(this.connectWithRetries_, this), 100))
};
goog.net.xpc.NativeMessagingTransport.prototype.send = function(a, b) {
  var c = this.channel_.peerWindowObject_;
  if(c) {
    var d = c.postMessage ? c : c.document;
    this.send = function(a, b) {
      goog.net.xpc.logger.fine("send(): payload=" + b + " to hostname=" + this.peerHostname_);
      d.postMessage(this.channel_.name + "|" + a + ":" + b, this.peerHostname_)
    };
    this.send(a, b)
  }else {
    goog.net.xpc.logger.fine("send(): window not ready")
  }
};
goog.net.xpc.NativeMessagingTransport.prototype.disposeInternal = function() {
  goog.net.xpc.NativeMessagingTransport.superClass_.disposeInternal.call(this);
  if(this.initialized_) {
    var a = this.getWindow(), b = goog.getUid(a), c = goog.net.xpc.NativeMessagingTransport.activeCount_[b];
    goog.net.xpc.NativeMessagingTransport.activeCount_[b] = c - 1;
    1 == c && goog.events.unlisten(a.postMessage ? a : a.document, "message", goog.net.xpc.NativeMessagingTransport.messageReceived_, !1, goog.net.xpc.NativeMessagingTransport)
  }
  delete this.send
};
goog.net.xpc.NixTransport = function(a, b) {
  goog.net.xpc.Transport.call(this, b);
  this.channel_ = a;
  this.authToken_ = a[goog.net.xpc.CfgFields.AUTH_TOKEN] || "";
  this.remoteAuthToken_ = a[goog.net.xpc.CfgFields.REMOTE_AUTH_TOKEN] || "";
  goog.net.xpc.NixTransport.conductGlobalSetup_(this.getWindow());
  this[goog.net.xpc.NixTransport.NIX_HANDLE_MESSAGE] = this.handleMessage_;
  this[goog.net.xpc.NixTransport.NIX_CREATE_CHANNEL] = this.createChannel_
};
goog.inherits(goog.net.xpc.NixTransport, goog.net.xpc.Transport);
goog.net.xpc.NixTransport.NIX_WRAPPER = "GCXPC____NIXVBS_wrapper";
goog.net.xpc.NixTransport.NIX_GET_WRAPPER = "GCXPC____NIXVBS_get_wrapper";
goog.net.xpc.NixTransport.NIX_HANDLE_MESSAGE = "GCXPC____NIXJS_handle_message";
goog.net.xpc.NixTransport.NIX_CREATE_CHANNEL = "GCXPC____NIXJS_create_channel";
goog.net.xpc.NixTransport.NIX_ID_FIELD = "GCXPC____NIXVBS_container";
goog.net.xpc.NixTransport.isNixSupported = function() {
  var a = !1;
  try {
    var b = window.opener;
    window.opener = {};
    a = goog.reflect.canAccessProperty(window, "opener");
    window.opener = b
  }catch(c) {
  }
  return a
};
goog.net.xpc.NixTransport.conductGlobalSetup_ = function(a) {
  if(!a.nix_setup_complete) {
    var b = "Class " + goog.net.xpc.NixTransport.NIX_WRAPPER + "\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport = transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport." + goog.net.xpc.NixTransport.NIX_HANDLE_MESSAGE + "(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport." + 
    goog.net.xpc.NixTransport.NIX_CREATE_CHANNEL + "(channel)\nEnd Sub\nPublic Sub " + goog.net.xpc.NixTransport.NIX_ID_FIELD + "()\n End Sub\nEnd Class\n Function " + goog.net.xpc.NixTransport.NIX_GET_WRAPPER + "(transport, auth)\nDim wrap\nSet wrap = New " + goog.net.xpc.NixTransport.NIX_WRAPPER + "\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet " + goog.net.xpc.NixTransport.NIX_GET_WRAPPER + " = wrap\nEnd Function";
    try {
      a.execScript(b, "vbscript"), a.nix_setup_complete = !0
    }catch(c) {
      goog.net.xpc.logger.severe("exception caught while attempting global setup: " + c)
    }
  }
};
goog.net.xpc.NixTransport.prototype.transportType = goog.net.xpc.TransportTypes.NIX;
goog.net.xpc.NixTransport.prototype.localSetupCompleted_ = !1;
goog.net.xpc.NixTransport.prototype.nixChannel_ = null;
goog.net.xpc.NixTransport.prototype.connect = function() {
  this.channel_.getRole() == goog.net.xpc.CrossPageChannelRole.OUTER ? this.attemptOuterSetup_() : this.attemptInnerSetup_()
};
goog.net.xpc.NixTransport.prototype.attemptOuterSetup_ = function() {
  if(!this.localSetupCompleted_) {
    var a = this.channel_.iframeElement_;
    try {
      a.contentWindow.opener = this.getWindow()[goog.net.xpc.NixTransport.NIX_GET_WRAPPER](this, this.authToken_), this.localSetupCompleted_ = !0
    }catch(b) {
      goog.net.xpc.logger.severe("exception caught while attempting setup: " + b)
    }
    this.localSetupCompleted_ || this.getWindow().setTimeout(goog.bind(this.attemptOuterSetup_, this), 100)
  }
};
goog.net.xpc.NixTransport.prototype.attemptInnerSetup_ = function() {
  if(!this.localSetupCompleted_) {
    try {
      var a = this.getWindow().opener;
      if(a && goog.net.xpc.NixTransport.NIX_ID_FIELD in a) {
        this.nixChannel_ = a;
        if(this.nixChannel_.GetAuthToken() != this.remoteAuthToken_) {
          goog.net.xpc.logger.severe("Invalid auth token from other party");
          return
        }
        this.nixChannel_.CreateChannel(this.getWindow()[goog.net.xpc.NixTransport.NIX_GET_WRAPPER](this, this.authToken_));
        this.localSetupCompleted_ = !0;
        this.channel_.notifyConnected_()
      }
    }catch(b) {
      goog.net.xpc.logger.severe("exception caught while attempting setup: " + b);
      return
    }
    this.localSetupCompleted_ || this.getWindow().setTimeout(goog.bind(this.attemptInnerSetup_, this), 100)
  }
};
goog.net.xpc.NixTransport.prototype.createChannel_ = function(a) {
  ("unknown" != typeof a || !(goog.net.xpc.NixTransport.NIX_ID_FIELD in a)) && goog.net.xpc.logger.severe("Invalid NIX channel given to createChannel_");
  this.nixChannel_ = a;
  this.nixChannel_.GetAuthToken() != this.remoteAuthToken_ ? goog.net.xpc.logger.severe("Invalid auth token from other party") : this.channel_.notifyConnected_()
};
goog.net.xpc.NixTransport.prototype.handleMessage_ = function(a, b) {
  this.getWindow().setTimeout(goog.bind(function() {
    this.channel_.deliver_(a, b)
  }, this), 1)
};
goog.net.xpc.NixTransport.prototype.send = function(a, b) {
  "unknown" !== typeof this.nixChannel_ && goog.net.xpc.logger.severe("NIX channel not connected");
  this.nixChannel_.SendMessage(a, b)
};
goog.net.xpc.NixTransport.prototype.disposeInternal = function() {
  goog.net.xpc.NixTransport.superClass_.disposeInternal.call(this);
  this.nixChannel_ = null
};
goog.net.xpc.CrossPageChannel = function(a, b) {
  goog.messaging.AbstractChannel.call(this);
  for(var c = 0, d;d = goog.net.xpc.UriCfgFields[c];c++) {
    if(d in a && !/^https?:\/\//.test(a[d])) {
      throw Error("URI " + a[d] + " is invalid for field " + d);
    }
  }
  this.cfg_ = a;
  this.name = this.cfg_[goog.net.xpc.CfgFields.CHANNEL_NAME] || goog.net.xpc.getRandomString(10);
  this.domHelper_ = b || goog.dom.getDomHelper();
  this.deferredDeliveries_ = [];
  a[goog.net.xpc.CfgFields.LOCAL_POLL_URI] = a[goog.net.xpc.CfgFields.LOCAL_POLL_URI] || goog.uri.utils.getHost(this.domHelper_.getWindow().location.href) + "/robots.txt";
  a[goog.net.xpc.CfgFields.PEER_POLL_URI] = a[goog.net.xpc.CfgFields.PEER_POLL_URI] || goog.uri.utils.getHost(a[goog.net.xpc.CfgFields.PEER_URI] || "") + "/robots.txt";
  goog.net.xpc.channels_[this.name] = this;
  goog.events.listen(window, "unload", goog.net.xpc.CrossPageChannel.disposeAll_);
  goog.net.xpc.logger.info("CrossPageChannel created: " + this.name)
};
goog.inherits(goog.net.xpc.CrossPageChannel, goog.messaging.AbstractChannel);
goog.net.xpc.CrossPageChannel.TRANSPORT_SERVICE_ESCAPE_RE_ = RegExp("^%*" + goog.net.xpc.TRANSPORT_SERVICE_ + "$");
goog.net.xpc.CrossPageChannel.TRANSPORT_SERVICE_UNESCAPE_RE_ = RegExp("^%+" + goog.net.xpc.TRANSPORT_SERVICE_ + "$");
goog.net.xpc.CrossPageChannel.prototype.transport_ = null;
goog.net.xpc.CrossPageChannel.prototype.state_ = goog.net.xpc.ChannelStates.NOT_CONNECTED;
goog.net.xpc.CrossPageChannel.prototype.isConnected = function() {
  return this.state_ == goog.net.xpc.ChannelStates.CONNECTED
};
goog.net.xpc.CrossPageChannel.prototype.peerWindowObject_ = null;
goog.net.xpc.CrossPageChannel.prototype.iframeElement_ = null;
goog.net.xpc.CrossPageChannel.prototype.setPeerWindowObject = function(a) {
  this.peerWindowObject_ = a
};
goog.net.xpc.CrossPageChannel.prototype.determineTransportType_ = function() {
  return goog.isFunction(document.postMessage) || goog.isFunction(window.postMessage) || goog.userAgent.IE && window.postMessage ? goog.net.xpc.TransportTypes.NATIVE_MESSAGING : goog.userAgent.GECKO ? goog.net.xpc.TransportTypes.FRAME_ELEMENT_METHOD : goog.userAgent.IE && this.cfg_[goog.net.xpc.CfgFields.PEER_RELAY_URI] ? goog.net.xpc.TransportTypes.IFRAME_RELAY : goog.userAgent.IE && goog.net.xpc.NixTransport.isNixSupported() ? goog.net.xpc.TransportTypes.NIX : goog.net.xpc.TransportTypes.IFRAME_POLLING
};
goog.net.xpc.CrossPageChannel.prototype.createTransport_ = function() {
  if(!this.transport_) {
    this.cfg_[goog.net.xpc.CfgFields.TRANSPORT] || (this.cfg_[goog.net.xpc.CfgFields.TRANSPORT] = this.determineTransportType_());
    switch(this.cfg_[goog.net.xpc.CfgFields.TRANSPORT]) {
      case goog.net.xpc.TransportTypes.NATIVE_MESSAGING:
        this.transport_ = new goog.net.xpc.NativeMessagingTransport(this, this.cfg_[goog.net.xpc.CfgFields.PEER_HOSTNAME], this.domHelper_);
        break;
      case goog.net.xpc.TransportTypes.NIX:
        this.transport_ = new goog.net.xpc.NixTransport(this, this.domHelper_);
        break;
      case goog.net.xpc.TransportTypes.FRAME_ELEMENT_METHOD:
        this.transport_ = new goog.net.xpc.FrameElementMethodTransport(this, this.domHelper_);
        break;
      case goog.net.xpc.TransportTypes.IFRAME_RELAY:
        this.transport_ = new goog.net.xpc.IframeRelayTransport(this, this.domHelper_);
        break;
      case goog.net.xpc.TransportTypes.IFRAME_POLLING:
        this.transport_ = new goog.net.xpc.IframePollingTransport(this, this.domHelper_)
    }
    if(this.transport_) {
      goog.net.xpc.logger.info("Transport created: " + this.transport_.getName())
    }else {
      throw Error("CrossPageChannel: No suitable transport found!");
    }
  }
};
goog.net.xpc.CrossPageChannel.prototype.getTransportType = function() {
  return this.transport_.getType()
};
goog.net.xpc.CrossPageChannel.prototype.getTransportName = function() {
  return this.transport_.getName()
};
goog.net.xpc.CrossPageChannel.prototype.getPeerConfiguration = function() {
  var a = {};
  a[goog.net.xpc.CfgFields.CHANNEL_NAME] = this.name;
  a[goog.net.xpc.CfgFields.TRANSPORT] = this.cfg_[goog.net.xpc.CfgFields.TRANSPORT];
  this.cfg_[goog.net.xpc.CfgFields.LOCAL_RELAY_URI] && (a[goog.net.xpc.CfgFields.PEER_RELAY_URI] = this.cfg_[goog.net.xpc.CfgFields.LOCAL_RELAY_URI]);
  this.cfg_[goog.net.xpc.CfgFields.LOCAL_POLL_URI] && (a[goog.net.xpc.CfgFields.PEER_POLL_URI] = this.cfg_[goog.net.xpc.CfgFields.LOCAL_POLL_URI]);
  this.cfg_[goog.net.xpc.CfgFields.PEER_POLL_URI] && (a[goog.net.xpc.CfgFields.LOCAL_POLL_URI] = this.cfg_[goog.net.xpc.CfgFields.PEER_POLL_URI]);
  return a
};
goog.net.xpc.CrossPageChannel.prototype.createPeerIframe = function(a, b, c) {
  var d = this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID];
  d || (d = this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID] = "xpcpeer" + goog.net.xpc.getRandomString(4));
  var e = goog.dom.createElement("IFRAME");
  e.id = e.name = d;
  b ? b(e) : e.style.width = e.style.height = "100%";
  var f = this.cfg_[goog.net.xpc.CfgFields.PEER_URI];
  goog.isString(f) && (f = this.cfg_[goog.net.xpc.CfgFields.PEER_URI] = new goog.Uri(f));
  !1 !== c && f.setParameterValue("xpc", goog.json.serialize(this.getPeerConfiguration()));
  goog.userAgent.GECKO || goog.userAgent.WEBKIT ? (this.deferConnect_ = !0, window.setTimeout(goog.bind(function() {
    this.deferConnect_ = !1;
    a.appendChild(e);
    e.src = f.toString();
    goog.net.xpc.logger.info("peer iframe created (" + d + ")");
    this.connectDeferred_ && this.connect(this.connectCb_)
  }, this), 1)) : (e.src = f.toString(), a.appendChild(e), goog.net.xpc.logger.info("peer iframe created (" + d + ")"));
  return e
};
goog.net.xpc.CrossPageChannel.prototype.deferConnect_ = !1;
goog.net.xpc.CrossPageChannel.prototype.connectDeferred_ = !1;
goog.net.xpc.CrossPageChannel.prototype.connect = function(a) {
  this.connectCb_ = a || goog.nullFunction;
  if(this.deferConnect_) {
    goog.net.xpc.logger.info("connect() deferred"), this.connectDeferred_ = !0
  }else {
    this.connectDeferred_ = !1;
    goog.net.xpc.logger.info("connect()");
    this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID] && (this.iframeElement_ = this.domHelper_.getElement(this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID]));
    this.iframeElement_ && ((a = this.iframeElement_.contentWindow) || (a = window.frames[this.cfg_[goog.net.xpc.CfgFields.IFRAME_ID]]), this.setPeerWindowObject(a));
    if(!this.peerWindowObject_) {
      if(window == top) {
        throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
      }
      this.setPeerWindowObject(window.parent)
    }
    this.createTransport_();
    for(this.transport_.connect();0 < this.deferredDeliveries_.length;) {
      this.deferredDeliveries_.shift()()
    }
  }
};
goog.net.xpc.CrossPageChannel.prototype.close = function() {
  this.isConnected() && (this.state_ = goog.net.xpc.ChannelStates.CLOSED, this.transport_.dispose(), this.connectCb_ = this.transport_ = null, this.connectDeferred_ = !1, this.deferredDeliveries_.length = 0, goog.net.xpc.logger.info('Channel "' + this.name + '" closed'))
};
goog.net.xpc.CrossPageChannel.prototype.notifyConnected_ = function() {
  this.isConnected() || (this.state_ = goog.net.xpc.ChannelStates.CONNECTED, goog.net.xpc.logger.info('Channel "' + this.name + '" connected'), this.connectCb_())
};
goog.net.xpc.CrossPageChannel.prototype.notifyTransportError_ = function() {
  goog.net.xpc.logger.info("Transport Error");
  this.close()
};
goog.net.xpc.CrossPageChannel.prototype.send = function(a, b) {
  this.isConnected() ? Boolean(this.peerWindowObject_.closed) ? (goog.net.xpc.logger.severe("Peer has disappeared."), this.close()) : (goog.isObject(b) && (b = goog.json.serialize(b)), this.transport_.send(this.escapeServiceName_(a), b)) : goog.net.xpc.logger.severe("Can't send. Channel not connected.")
};
goog.net.xpc.CrossPageChannel.prototype.deliver_ = function(a, b, c) {
  this.connectDeferred_ ? this.deferredDeliveries_.push(goog.bind(this.deliver_, this, a, b, c)) : this.isMessageOriginAcceptable_(c) ? this.isDisposed() ? goog.net.xpc.logger.warning("CrossPageChannel::deliver_(): Disposed.") : !a || a == goog.net.xpc.TRANSPORT_SERVICE_ ? this.transport_.transportServiceHandler(b) : this.isConnected() ? this.deliver(this.unescapeServiceName_(a), b) : goog.net.xpc.logger.info("CrossPageChannel::deliver_(): Not connected.") : goog.net.xpc.logger.warning('Message received from unapproved origin "' + 
  c + '" - rejected.')
};
goog.net.xpc.CrossPageChannel.prototype.escapeServiceName_ = function(a) {
  goog.net.xpc.CrossPageChannel.TRANSPORT_SERVICE_ESCAPE_RE_.test(a) && (a = "%" + a);
  return a.replace(/[%:|]/g, encodeURIComponent)
};
goog.net.xpc.CrossPageChannel.prototype.unescapeServiceName_ = function(a) {
  a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent);
  return goog.net.xpc.CrossPageChannel.TRANSPORT_SERVICE_UNESCAPE_RE_.test(a) ? a.substring(1) : a
};
goog.net.xpc.CrossPageChannel.prototype.getRole = function() {
  return window.parent == this.peerWindowObject_ ? goog.net.xpc.CrossPageChannelRole.INNER : goog.net.xpc.CrossPageChannelRole.OUTER
};
goog.net.xpc.CrossPageChannel.prototype.isMessageOriginAcceptable_ = function(a) {
  var b = this.cfg_[goog.net.xpc.CfgFields.PEER_HOSTNAME];
  return goog.string.isEmptySafe(a) || goog.string.isEmptySafe(b) || a == this.cfg_[goog.net.xpc.CfgFields.PEER_HOSTNAME]
};
goog.net.xpc.CrossPageChannel.prototype.disposeInternal = function() {
  goog.net.xpc.CrossPageChannel.superClass_.disposeInternal.call(this);
  this.close();
  this.iframeElement_ = this.peerWindowObject_ = null;
  delete goog.net.xpc.channels_[this.name];
  this.deferredDeliveries_.length = 0
};
goog.net.xpc.CrossPageChannel.disposeAll_ = function() {
  for(var a in goog.net.xpc.channels_) {
    var b = goog.net.xpc.channels_[a];
    b && b.dispose()
  }
};
clojure.browser.net = {};
clojure.browser.net._STAR_timeout_STAR_ = 1E4;
clojure.browser.net.event_types = cljs.core.into.call(null, cljs.core.ObjMap.EMPTY, cljs.core.map.call(null, function(a) {
  var b = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nth.call(null, a, 1, null);
  return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null, b.toLowerCase()), a], !0)
}, cljs.core.merge.call(null, cljs.core.js__GT_clj.call(null, goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = function() {
  var a = null, b = function(a) {
    if(a ? a.clojure$browser$net$IConnection$connect$arity$1 : a) {
      return a.clojure$browser$net$IConnection$connect$arity$1(a)
    }
    var b;
    b = clojure.browser.net.connect[goog.typeOf(null == a ? null : a)];
    if(!b && (b = clojure.browser.net.connect._, !b)) {
      throw cljs.core.missing_protocol.call(null, "IConnection.connect", a);
    }
    return b.call(null, a)
  }, c = function(a, b) {
    if(a ? a.clojure$browser$net$IConnection$connect$arity$2 : a) {
      return a.clojure$browser$net$IConnection$connect$arity$2(a, b)
    }
    var c;
    c = clojure.browser.net.connect[goog.typeOf(null == a ? null : a)];
    if(!c && (c = clojure.browser.net.connect._, !c)) {
      throw cljs.core.missing_protocol.call(null, "IConnection.connect", a);
    }
    return c.call(null, a, b)
  }, d = function(a, b, c) {
    if(a ? a.clojure$browser$net$IConnection$connect$arity$3 : a) {
      return a.clojure$browser$net$IConnection$connect$arity$3(a, b, c)
    }
    var d;
    d = clojure.browser.net.connect[goog.typeOf(null == a ? null : a)];
    if(!d && (d = clojure.browser.net.connect._, !d)) {
      throw cljs.core.missing_protocol.call(null, "IConnection.connect", a);
    }
    return d.call(null, a, b, c)
  }, e = function(a, b, c, d) {
    if(a ? a.clojure$browser$net$IConnection$connect$arity$4 : a) {
      return a.clojure$browser$net$IConnection$connect$arity$4(a, b, c, d)
    }
    var e;
    e = clojure.browser.net.connect[goog.typeOf(null == a ? null : a)];
    if(!e && (e = clojure.browser.net.connect._, !e)) {
      throw cljs.core.missing_protocol.call(null, "IConnection.connect", a);
    }
    return e.call(null, a, b, c, d)
  }, a = function(a, g, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      case 2:
        return c.call(this, a, g);
      case 3:
        return d.call(this, a, g, h);
      case 4:
        return e.call(this, a, g, h, i)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$1 = b;
  a.cljs$lang$arity$2 = c;
  a.cljs$lang$arity$3 = d;
  a.cljs$lang$arity$4 = e;
  return a
}();
clojure.browser.net.transmit = function() {
  var a = null, b = function(a, b) {
    if(a ? a.clojure$browser$net$IConnection$transmit$arity$2 : a) {
      return a.clojure$browser$net$IConnection$transmit$arity$2(a, b)
    }
    var c;
    c = clojure.browser.net.transmit[goog.typeOf(null == a ? null : a)];
    if(!c && (c = clojure.browser.net.transmit._, !c)) {
      throw cljs.core.missing_protocol.call(null, "IConnection.transmit", a);
    }
    return c.call(null, a, b)
  }, c = function(a, b, c) {
    if(a ? a.clojure$browser$net$IConnection$transmit$arity$3 : a) {
      return a.clojure$browser$net$IConnection$transmit$arity$3(a, b, c)
    }
    var d;
    d = clojure.browser.net.transmit[goog.typeOf(null == a ? null : a)];
    if(!d && (d = clojure.browser.net.transmit._, !d)) {
      throw cljs.core.missing_protocol.call(null, "IConnection.transmit", a);
    }
    return d.call(null, a, b, c)
  }, d = function(a, b, c, d) {
    if(a ? a.clojure$browser$net$IConnection$transmit$arity$4 : a) {
      return a.clojure$browser$net$IConnection$transmit$arity$4(a, b, c, d)
    }
    var e;
    e = clojure.browser.net.transmit[goog.typeOf(null == a ? null : a)];
    if(!e && (e = clojure.browser.net.transmit._, !e)) {
      throw cljs.core.missing_protocol.call(null, "IConnection.transmit", a);
    }
    return e.call(null, a, b, c, d)
  }, e = function(a, b, c, d, e) {
    if(a ? a.clojure$browser$net$IConnection$transmit$arity$5 : a) {
      return a.clojure$browser$net$IConnection$transmit$arity$5(a, b, c, d, e)
    }
    var f;
    f = clojure.browser.net.transmit[goog.typeOf(null == a ? null : a)];
    if(!f && (f = clojure.browser.net.transmit._, !f)) {
      throw cljs.core.missing_protocol.call(null, "IConnection.transmit", a);
    }
    return f.call(null, a, b, c, d, e)
  }, f = function(a, b, c, d, e, f) {
    if(a ? a.clojure$browser$net$IConnection$transmit$arity$6 : a) {
      return a.clojure$browser$net$IConnection$transmit$arity$6(a, b, c, d, e, f)
    }
    var l;
    l = clojure.browser.net.transmit[goog.typeOf(null == a ? null : a)];
    if(!l && (l = clojure.browser.net.transmit._, !l)) {
      throw cljs.core.missing_protocol.call(null, "IConnection.transmit", a);
    }
    return l.call(null, a, b, c, d, e, f)
  }, a = function(a, h, i, j, k, m) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, h);
      case 3:
        return c.call(this, a, h, i);
      case 4:
        return d.call(this, a, h, i, j);
      case 5:
        return e.call(this, a, h, i, j, k);
      case 6:
        return f.call(this, a, h, i, j, k, m)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  a.cljs$lang$arity$4 = d;
  a.cljs$lang$arity$5 = e;
  a.cljs$lang$arity$6 = f;
  return a
}();
clojure.browser.net.close = function(a) {
  if(a ? a.clojure$browser$net$IConnection$close$arity$1 : a) {
    return a.clojure$browser$net$IConnection$close$arity$1(a)
  }
  var b;
  b = clojure.browser.net.close[goog.typeOf(null == a ? null : a)];
  if(!b && (b = clojure.browser.net.close._, !b)) {
    throw cljs.core.missing_protocol.call(null, "IConnection.close", a);
  }
  return b.call(null, a)
};
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = !0;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = function() {
  return cljs.core.into.call(null, cljs.core.ObjMap.EMPTY, cljs.core.map.call(null, function(a) {
    var b = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nth.call(null, a, 1, null);
    return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null, b.toLowerCase()), a], !0)
  }, cljs.core.merge.call(null, cljs.core.js__GT_clj.call(null, goog.net.EventType))))
};
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = !0;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = function(a, b) {
  return clojure.browser.net.transmit.call(null, a, b, "GET", null, null, clojure.browser.net._STAR_timeout_STAR_)
};
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = function(a, b, c) {
  return clojure.browser.net.transmit.call(null, a, b, c, null, null, clojure.browser.net._STAR_timeout_STAR_)
};
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = function(a, b, c, d) {
  return clojure.browser.net.transmit.call(null, a, b, c, d, null, clojure.browser.net._STAR_timeout_STAR_)
};
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = function(a, b, c, d, e) {
  return clojure.browser.net.transmit.call(null, a, b, c, d, e, clojure.browser.net._STAR_timeout_STAR_)
};
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = function(a, b, c, d, e, f) {
  a.setTimeoutInterval(f);
  return a.send(b, c, d, e)
};
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null, cljs.core.ObjMap.EMPTY, cljs.core.map.call(null, function(a) {
  var b = cljs.core.nth.call(null, a, 0, null), a = cljs.core.nth.call(null, a, 1, null);
  return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null, b.toLowerCase()), a], !0)
}, cljs.core.js__GT_clj.call(null, goog.net.xpc.CfgFields)));
clojure.browser.net.xhr_connection = function() {
  return new goog.net.XhrIo
};
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = function() {
  var a = null, b = function(a, b, c) {
    if(a ? a.clojure$browser$net$ICrossPageChannel$register_service$arity$3 : a) {
      return a.clojure$browser$net$ICrossPageChannel$register_service$arity$3(a, b, c)
    }
    var g;
    g = clojure.browser.net.register_service[goog.typeOf(null == a ? null : a)];
    if(!g && (g = clojure.browser.net.register_service._, !g)) {
      throw cljs.core.missing_protocol.call(null, "ICrossPageChannel.register-service", a);
    }
    return g.call(null, a, b, c)
  }, c = function(a, b, c, g) {
    if(a ? a.clojure$browser$net$ICrossPageChannel$register_service$arity$4 : a) {
      return a.clojure$browser$net$ICrossPageChannel$register_service$arity$4(a, b, c, g)
    }
    var h;
    h = clojure.browser.net.register_service[goog.typeOf(null == a ? null : a)];
    if(!h && (h = clojure.browser.net.register_service._, !h)) {
      throw cljs.core.missing_protocol.call(null, "ICrossPageChannel.register-service", a);
    }
    return h.call(null, a, b, c, g)
  }, a = function(a, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, a, e, f);
      case 4:
        return c.call(this, a, e, f, g)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$3 = b;
  a.cljs$lang$arity$4 = c;
  return a
}();
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = !0;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = function(a) {
  return clojure.browser.net.connect.call(null, a, null)
};
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = function(a, b) {
  return a.connect(b)
};
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = function(a, b, c) {
  return clojure.browser.net.connect.call(null, a, b, c, document.body)
};
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = function(a, b, c, d) {
  a.createPeerIframe(d, c);
  return a.connect(b)
};
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = function(a, b, c) {
  return a.send(cljs.core.name.call(null, b), c)
};
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = function(a) {
  return a.close(cljs.core.List.EMPTY)
};
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = !0;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = function(a, b, c) {
  return clojure.browser.net.register_service.call(null, a, b, c, !1)
};
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = function(a, b, c, d) {
  return a.registerService(cljs.core.name.call(null, b), c, d)
};
clojure.browser.net.xpc_connection = function() {
  var a = null, b = function() {
    var a = (new goog.Uri(window.location.href)).getParameterValue("xpc");
    return cljs.core.truth_(a) ? new goog.net.xpc.CrossPageChannel(goog.json.parse(a)) : null
  }, c = function(a) {
    return new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null, function(a, b) {
      var c = cljs.core.nth.call(null, b, 0, null), d = cljs.core.nth.call(null, b, 1, null), c = cljs.core._lookup.call(null, clojure.browser.net.xpc_config_fields, c, null);
      cljs.core.truth_(c) && (a[c] = d);
      return a
    }, {}, a))
  }, a = function(a) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c.call(this, a)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$0 = b;
  a.cljs$lang$arity$1 = c;
  return a
}();
clojure.browser.repl = {};
clojure.browser.repl.xpc_connection = cljs.core.atom.call(null, null);
clojure.browser.repl.repl_print = function(a) {
  var b = cljs.core.deref.call(null, clojure.browser.repl.xpc_connection);
  return cljs.core.truth_(b) ? clojure.browser.net.transmit.call(null, b, "\ufdd0'print", cljs.core.pr_str.call(null, a)) : null
};
clojure.browser.repl.evaluate_javascript = function(a, b) {
  var c = function() {
    try {
      return cljs.core.ObjMap.fromObject(["\ufdd0'status", "\ufdd0'value"], {"\ufdd0'status":"\ufdd0'success", "\ufdd0'value":"" + cljs.core.str(eval(b))})
    }catch(a) {
      if(cljs.core.instance_QMARK_.call(null, Error, a)) {
        return cljs.core.ObjMap.fromObject(["\ufdd0'status", "\ufdd0'value", "\ufdd0'stacktrace"], {"\ufdd0'status":"\ufdd0'exception", "\ufdd0'value":cljs.core.pr_str.call(null, a), "\ufdd0'stacktrace":cljs.core.truth_(a.hasOwnProperty("stack")) ? a.stack : "No stacktrace available."})
      }
      throw a;
    }
  }();
  return cljs.core.pr_str.call(null, c)
};
clojure.browser.repl.send_result = function(a, b, c) {
  return clojure.browser.net.transmit.call(null, a, b, "POST", c, null, 0)
};
clojure.browser.repl.send_print = function() {
  var a = null, b = function(b, c) {
    return a.call(null, b, c, 0)
  }, c = function(b, c, f) {
    var g = clojure.browser.net.xhr_connection.call(null);
    clojure.browser.event.listen.call(null, g, "\ufdd0'error", function() {
      return 10 > f ? a.call(null, b, c, f + 1) : console.log([cljs.core.str("Could not send "), cljs.core.str(c), cljs.core.str(" after "), cljs.core.str(f), cljs.core.str(" attempts.")].join(""))
    });
    return clojure.browser.net.transmit.call(null, g, b, "POST", c, null, 0)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
clojure.browser.repl.order = cljs.core.atom.call(null, 0);
clojure.browser.repl.wrap_message = function(a, b) {
  return cljs.core.pr_str.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'type", "\ufdd0'content", "\ufdd0'order"], {"\ufdd0'type":a, "\ufdd0'content":b, "\ufdd0'order":cljs.core.swap_BANG_.call(null, clojure.browser.repl.order, cljs.core.inc)}))
};
clojure.browser.repl.start_evaluator = function(a) {
  var b = clojure.browser.net.xpc_connection.call(null);
  if(cljs.core.truth_(b)) {
    var c = clojure.browser.net.xhr_connection.call(null);
    clojure.browser.event.listen.call(null, c, "\ufdd0'success", function(a) {
      return clojure.browser.net.transmit.call(null, b, "\ufdd0'evaluate-javascript", a.currentTarget.getResponseText(cljs.core.List.EMPTY))
    });
    clojure.browser.net.register_service.call(null, b, "\ufdd0'send-result", function(b) {
      return clojure.browser.repl.send_result.call(null, c, a, clojure.browser.repl.wrap_message.call(null, "\ufdd0'result", b))
    });
    clojure.browser.net.register_service.call(null, b, "\ufdd0'print", function(b) {
      return clojure.browser.repl.send_print.call(null, a, clojure.browser.repl.wrap_message.call(null, "\ufdd0'print", b))
    });
    clojure.browser.net.connect.call(null, b, cljs.core.constantly.call(null, null));
    return setTimeout(function() {
      return clojure.browser.repl.send_result.call(null, c, a, clojure.browser.repl.wrap_message.call(null, "\ufdd0'ready", "ready"))
    }, 50)
  }
  return alert("No 'xpc' param provided to child iframe.")
};
clojure.browser.repl.connect = function(a) {
  var b = clojure.browser.net.xpc_connection.call(null, cljs.core.ObjMap.fromObject(["\ufdd0'peer_uri"], {"\ufdd0'peer_uri":a}));
  cljs.core.swap_BANG_.call(null, clojure.browser.repl.xpc_connection, cljs.core.constantly.call(null, b));
  clojure.browser.net.register_service.call(null, b, "\ufdd0'evaluate-javascript", function(a) {
    return clojure.browser.net.transmit.call(null, b, "\ufdd0'send-result", clojure.browser.repl.evaluate_javascript.call(null, b, a))
  });
  return clojure.browser.net.connect.call(null, b, cljs.core.constantly.call(null, null), function(a) {
    return a.style.display = "none"
  })
};
session.client.main = {};
clojure.browser.repl.connect.call(null, "http://localhost:9000/repl");
session.client.main.session = cljs.core.atom.call(null, null);
session.client.main.load_session = function(a) {
  return fetch.remotes.remote_callback.call(null, "get-session", cljs.core.PersistentVector.fromArray([a], !0), function(a) {
    var c = cljs.reader.read_string.call(null, (new cljs.core.Keyword("\ufdd0'result")).call(null, a)), d = cljs.core._EQ_.call(null, "\ufdd0'this", session.client.mvc.view.call(null, c)) ? cljs_jquery.core.jquery.call(null, this) : function() {
      var a = cljs.core.vector_QMARK_.call(null, session.client.mvc.view.call(null, c));
      return a ? a : cljs.core.keyword_QMARK_.call(null, session.client.mvc.view.call(null, c))
    }() ? cljs_jquery.core.dom_create.call(null, session.client.mvc.view.call(null, c)) : cljs_jquery.core.jquery.call(null, session.client.mvc.view.call(null, c));
    cljs.core.reset_BANG_.call(null, session.client.main.session, c);
    session.client.mvc.control.call(null, c, d);
    cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", "body > .container") ? cljs_jquery.core.jquery.call(null, this) : function() {
      var a = cljs.core.vector_QMARK_.call(null, "body > .container");
      return a ? a : cljs.core.keyword_QMARK_.call(null, "body > .container")
    }() ? cljs_jquery.core.dom_create.call(null, "body > .container") : cljs_jquery.core.jquery.call(null, "body > .container"), cljs.core.PersistentVector.fromArray(["html", ""], !0));
    cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", d) ? cljs_jquery.core.jquery.call(null, this) : function() {
      var a = cljs.core.vector_QMARK_.call(null, d);
      return a ? a : cljs.core.keyword_QMARK_.call(null, d)
    }() ? cljs_jquery.core.dom_create.call(null, d) : cljs_jquery.core.jquery.call(null, d), cljs.core.PersistentVector.fromArray(["appendTo", cljs.core._EQ_.call(null, "\ufdd0'this", "body > .container") ? cljs_jquery.core.jquery.call(null, this) : function() {
      var a = cljs.core.vector_QMARK_.call(null, "body > .container");
      return a ? a : cljs.core.keyword_QMARK_.call(null, "body > .container")
    }() ? cljs_jquery.core.dom_create.call(null, "body > .container") : cljs_jquery.core.jquery.call(null, "body > .container")], !0));
    return session.client.session.load_subsession_tab.call(null, cljs.core.first.call(null, (new cljs.core.Keyword("\ufdd0'subsessions")).call(null, (new cljs.core.Keyword("\ufdd0'model")).call(null, cljs.core.deref.call(null, session.client.main.session)))))
  })
};
session.client.main.keymap = {"Shift-Enter":function(a) {
  return cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", a.getWrapperElement()) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var b = cljs.core.vector_QMARK_.call(null, a.getWrapperElement());
    return b ? b : cljs.core.keyword_QMARK_.call(null, a.getWrapperElement())
  }() ? cljs_jquery.core.dom_create.call(null, a.getWrapperElement()) : cljs_jquery.core.jquery.call(null, a.getWrapperElement()), cljs.core.PersistentVector.fromArray(["trigger", "evaluate-input"], !0))
}, Backspace:function(a) {
  return subpar.core.backward_delete.call(null, a)
}, Delete:function(a) {
  return subpar.core.forward_delete.call(null, a)
}, "Ctrl-D":function(a) {
  return subpar.core.forward_delete.call(null, a)
}, "Shift-9":function(a) {
  return subpar.core.open_expression.call(null, a, "()")
}, "[":function(a) {
  return subpar.core.open_expression.call(null, a, "[]")
}, "Shift-[":function(a) {
  return subpar.core.open_expression.call(null, a, "{}")
}, "Shift-0":function(a) {
  return subpar.core.close_expression.call(null, a, ")")
}, "]":function(a) {
  return subpar.core.close_expression.call(null, a, "]")
}, "Shift-]":function(a) {
  return subpar.core.close_expression.call(null, a, "}")
}, "Shift-'":function(a) {
  return subpar.core.double_quote.call(null, a)
}, "Ctrl-Alt-F":function(a) {
  return subpar.core.forward.call(null, a)
}, "Ctrl-Alt-B":function(a) {
  return subpar.core.backward.call(null, a)
}, "Ctrl-Alt-U":function(a) {
  return subpar.core.backward_up.call(null, a)
}, "Ctrl-Alt-D":function(a) {
  return subpar.core.forward_down.call(null, a)
}, "Ctrl-Alt-P":function(a) {
  return subpar.core.backward_down.call(null, a)
}, "Ctrl-Alt-N":function(a) {
  return subpar.core.forward_up.call(null, a)
}, "Shift-Ctrl-[":function(a) {
  return subpar.core.backward_barf.call(null, a)
}, "Ctrl-Alt-Right":function(a) {
  return subpar.core.backward_barf.call(null, a)
}, "Ctrl-]":function(a) {
  return subpar.core.backward_barf.call(null, a)
}, "Shift-Ctrl-]":function(a) {
  return subpar.core.forward_barf.call(null, a)
}, "Ctrl-Left":function(a) {
  return subpar.core.forward_barf.call(null, a)
}, "Shift-Ctrl-9":function(a) {
  return subpar.core.backward_slurp.call(null, a)
}, "Ctrl-Alt-Left":function(a) {
  return subpar.core.backward_slurp.call(null, a)
}, "Ctrl-[":function(a) {
  return subpar.core.backward_slurp.call(null, a)
}, "Shift-Ctrl-0":function(a) {
  return subpar.core.forward_slurp.call(null, a)
}, "Ctrl-Right":function(a) {
  return subpar.core.forward_slurp.call(null, a)
}, "Alt-Up":function(a) {
  return subpar.core.splice_delete_backward.call(null, a)
}, "Alt-Down":function(a) {
  return subpar.core.splice_delete_forward.call(null, a)
}, "Alt-S":function(a) {
  return subpar.core.splice.call(null, a)
}, "Ctrl-Alt-\\":function(a) {
  return subpar.core.indent_selection.call(null, a)
}, fallthrough:["basic", "emacs"]};
session.client.main.series_plot = function(a) {
  var b = cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:600px;height:200px;position:relative"}), ""], !0)) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:600px;height:200px;position:relative"}), ""], !0));
    return a ? a : cljs.core.keyword_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:600px;height:200px;position:relative"}), ""], !0))
  }() ? cljs_jquery.core.dom_create.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:600px;height:200px;position:relative"}), ""], !0)) : cljs_jquery.core.jquery.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:600px;height:200px;position:relative"}), ""], !0));
  $.plot(b, [{data:cljs.core.apply.call(null, cljs.core.array, cljs.core.map.call(null, function(a) {
    return cljs.core.apply.call(null, cljs.core.array, a)
  }, (new cljs.core.Keyword("\ufdd0'data")).call(null, a)))}], {yaxis:{labelWidth:25, position:"left"}});
  return b
};
session.client.main.timeseries_plot = function(a) {
  var b = cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:600px;height:200px;position:relative"}), ""], !0)) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var a = cljs.core.vector_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:600px;height:200px;position:relative"}), ""], !0));
    return a ? a : cljs.core.keyword_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:600px;height:200px;position:relative"}), ""], !0))
  }() ? cljs_jquery.core.dom_create.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:600px;height:200px;position:relative"}), ""], !0)) : cljs_jquery.core.jquery.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'div", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:600px;height:200px;position:relative"}), ""], !0));
  $.plot(b, [{data:cljs.core.apply.call(null, cljs.core.array, cljs.core.map.call(null, function(a) {
    return[cljs.core.first.call(null, a).getTime(), cljs.core.last.call(null, a)]
  }, (new cljs.core.Keyword("\ufdd0'data")).call(null, a)))}], {xaxis:{mode:"time", timeformat:"%y/%m/%d"}, yaxis:{labelWidth:25, position:"left"}});
  return b
};
session.client.main.table = function(a) {
  return cljs.core._EQ_.call(null, "\ufdd0'this", cljs.core.PersistentVector.fromArray(["\ufdd0'table", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:100%"}), cljs.core.map.call(null, function(a) {
    return cljs.core.PersistentVector.fromArray(["\ufdd0'tr", cljs.core.map.call(null, function(a) {
      return cljs.core.PersistentVector.fromArray(["\ufdd0'td", session.client.mvc.render.call(null, a)], !0)
    }, a)], !0)
  }, (new cljs.core.Keyword("\ufdd0'data")).call(null, a))], !0)) ? cljs_jquery.core.jquery.call(null, this) : function() {
    var b = cljs.core.vector_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'table", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:100%"}), cljs.core.map.call(null, function(a) {
      return cljs.core.PersistentVector.fromArray(["\ufdd0'tr", cljs.core.map.call(null, function(a) {
        return cljs.core.PersistentVector.fromArray(["\ufdd0'td", session.client.mvc.render.call(null, a)], !0)
      }, a)], !0)
    }, (new cljs.core.Keyword("\ufdd0'data")).call(null, a))], !0));
    return b ? b : cljs.core.keyword_QMARK_.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'table", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:100%"}), cljs.core.map.call(null, function(a) {
      return cljs.core.PersistentVector.fromArray(["\ufdd0'tr", cljs.core.map.call(null, function(a) {
        return cljs.core.PersistentVector.fromArray(["\ufdd0'td", session.client.mvc.render.call(null, a)], !0)
      }, a)], !0)
    }, (new cljs.core.Keyword("\ufdd0'data")).call(null, a))], !0))
  }() ? cljs_jquery.core.dom_create.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'table", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:100%"}), cljs.core.map.call(null, function(a) {
    return cljs.core.PersistentVector.fromArray(["\ufdd0'tr", cljs.core.map.call(null, function(a) {
      return cljs.core.PersistentVector.fromArray(["\ufdd0'td", session.client.mvc.render.call(null, a)], !0)
    }, a)], !0)
  }, (new cljs.core.Keyword("\ufdd0'data")).call(null, a))], !0)) : cljs_jquery.core.jquery.call(null, cljs.core.PersistentVector.fromArray(["\ufdd0'table", cljs.core.ObjMap.fromObject(["\ufdd0'style"], {"\ufdd0'style":"width:100%"}), cljs.core.map.call(null, function(a) {
    return cljs.core.PersistentVector.fromArray(["\ufdd0'tr", cljs.core.map.call(null, function(a) {
      return cljs.core.PersistentVector.fromArray(["\ufdd0'td", session.client.mvc.render.call(null, a)], !0)
    }, a)], !0)
  }, (new cljs.core.Keyword("\ufdd0'data")).call(null, a))], !0))
};
cljs_jquery.core.call_jquery.call(null, cljs.core._EQ_.call(null, "\ufdd0'this", document) ? cljs_jquery.core.jquery.call(null, this) : function() {
  var a = cljs.core.vector_QMARK_.call(null, document);
  return a ? a : cljs.core.keyword_QMARK_.call(null, document)
}() ? cljs_jquery.core.dom_create.call(null, document) : cljs_jquery.core.jquery.call(null, document), cljs.core.PersistentVector.fromArray(["ready", function() {
  CodeMirror.keyMap.subpar = session.client.main.keymap;
  cljs.reader.register_tag_parser_BANG_.call(null, "testtag", function(a) {
    return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([a], !0)], !0)
  });
  cljs.reader.register_tag_parser_BANG_.call(null, "flot", session.client.main.series_plot);
  cljs.reader.register_tag_parser_BANG_.call(null, "table", session.client.main.table);
  cljs.reader.register_tag_parser_BANG_.call(null, "series-plot", session.client.main.series_plot);
  cljs.reader.register_tag_parser_BANG_.call(null, "timeseries-plot", session.client.main.timeseries_plot);
  cljs.reader.register_tag_parser_BANG_.call(null, "loop", function(a) {
    return new session.client.loop.Loop(cljs.core.assoc.call(null, a, "\ufdd0'input", cljs.core.atom.call(null, (new cljs.core.Keyword("\ufdd0'input")).call(null, a)), "\ufdd0'output", cljs.core.atom.call(null, (new cljs.core.Keyword("\ufdd0'output")).call(null, a))), cljs.core.atom.call(null, null))
  });
  cljs.reader.register_tag_parser_BANG_.call(null, "session", function(a) {
    return new session.client.session.Session(a, cljs.core.atom.call(null, null))
  });
  cljs.reader.register_tag_parser_BANG_.call(null, "subsession", function(a) {
    return new session.client.subsession.Subsession(cljs.core.assoc.call(null, a, "\ufdd0'loops", cljs.core.atom.call(null, (new cljs.core.Keyword("\ufdd0'loops")).call(null, a))), cljs.core.atom.call(null, null))
  });
  return session.client.main.load_session.call(null, "default-session")
}], !0));
goog.net.WebSocket = function(a, b) {
  goog.events.EventTarget.call(this);
  this.autoReconnect_ = goog.isDef(a) ? a : !0;
  this.getNextReconnect_ = b || goog.net.WebSocket.EXPONENTIAL_BACKOFF_;
  this.nextReconnect_ = this.getNextReconnect_(this.reconnectAttempt_)
};
goog.inherits(goog.net.WebSocket, goog.events.EventTarget);
goog.net.WebSocket.prototype.webSocket_ = null;
goog.net.WebSocket.prototype.url_ = null;
goog.net.WebSocket.prototype.protocol_ = void 0;
goog.net.WebSocket.prototype.closeExpected_ = !1;
goog.net.WebSocket.prototype.reconnectAttempt_ = 0;
goog.net.WebSocket.prototype.logger_ = goog.debug.Logger.getLogger("goog.net.WebSocket");
goog.net.WebSocket.EventType = {CLOSED:goog.events.getUniqueId("closed"), ERROR:goog.events.getUniqueId("error"), MESSAGE:goog.events.getUniqueId("message"), OPENED:goog.events.getUniqueId("opened")};
goog.net.WebSocket.ReadyState_ = {CONNECTING:0, OPEN:1, CLOSING:2, CLOSED:3};
goog.net.WebSocket.EXPONENTIAL_BACKOFF_CEILING_ = 6E4;
goog.net.WebSocket.EXPONENTIAL_BACKOFF_ = function(a) {
  a = 1E3 * Math.pow(2, a);
  return Math.min(a, goog.net.WebSocket.EXPONENTIAL_BACKOFF_CEILING_)
};
goog.net.WebSocket.protectEntryPoints = function(a) {
  goog.net.WebSocket.prototype.onOpen_ = a.protectEntryPoint(goog.net.WebSocket.prototype.onOpen_);
  goog.net.WebSocket.prototype.onClose_ = a.protectEntryPoint(goog.net.WebSocket.prototype.onClose_);
  goog.net.WebSocket.prototype.onMessage_ = a.protectEntryPoint(goog.net.WebSocket.prototype.onMessage_);
  goog.net.WebSocket.prototype.onError_ = a.protectEntryPoint(goog.net.WebSocket.prototype.onError_)
};
goog.net.WebSocket.prototype.open = function(a, b) {
  goog.asserts.assert(goog.global.WebSocket, "This browser does not support WebSocket");
  goog.asserts.assert(!this.isOpen(), "The WebSocket is already open");
  this.clearReconnectTimer_();
  this.url_ = a;
  (this.protocol_ = b) ? (this.logger_.info("Opening the WebSocket on " + this.url_ + " with protocol " + this.protocol_), this.webSocket_ = new WebSocket(this.url_, this.protocol_)) : (this.logger_.info("Opening the WebSocket on " + this.url_), this.webSocket_ = new WebSocket(this.url_));
  this.webSocket_.onopen = goog.bind(this.onOpen_, this);
  this.webSocket_.onclose = goog.bind(this.onClose_, this);
  this.webSocket_.onmessage = goog.bind(this.onMessage_, this);
  this.webSocket_.onerror = goog.bind(this.onError_, this)
};
goog.net.WebSocket.prototype.close = function() {
  this.clearReconnectTimer_();
  this.webSocket_ && (this.logger_.info("Closing the WebSocket."), this.closeExpected_ = !0, this.webSocket_.close(), this.webSocket_ = null)
};
goog.net.WebSocket.prototype.send = function(a) {
  goog.asserts.assert(this.isOpen(), "Cannot send without an open socket");
  this.webSocket_.send(a)
};
goog.net.WebSocket.prototype.isOpen = function() {
  return!!this.webSocket_ && this.webSocket_.readyState == goog.net.WebSocket.ReadyState_.OPEN
};
goog.net.WebSocket.prototype.onOpen_ = function() {
  this.logger_.info("WebSocket opened on " + this.url_);
  this.dispatchEvent(goog.net.WebSocket.EventType.OPENED);
  this.reconnectAttempt_ = 0;
  this.nextReconnect_ = this.getNextReconnect_(this.reconnectAttempt_)
};
goog.net.WebSocket.prototype.onClose_ = function(a) {
  this.logger_.info("The WebSocket on " + this.url_ + " closed.");
  this.dispatchEvent(goog.net.WebSocket.EventType.CLOSED);
  this.webSocket_ = null;
  this.closeExpected_ ? (this.logger_.info("The WebSocket closed normally."), this.url_ = null, this.protocol_ = void 0) : (this.logger_.severe("The WebSocket disconnected unexpectedly: " + a.data), this.autoReconnect_ && (this.logger_.info("Seconds until next reconnect attempt: " + Math.floor(this.nextReconnect_ / 1E3)), this.reconnectTimer_ = goog.Timer.callOnce(goog.bind(this.open, this, this.url_, this.protocol_), this.nextReconnect_, this), this.reconnectAttempt_++, this.nextReconnect_ = this.getNextReconnect_(this.reconnectAttempt_)));
  this.closeExpected_ = !1
};
goog.net.WebSocket.prototype.onMessage_ = function(a) {
  this.dispatchEvent(new goog.net.WebSocket.MessageEvent(a.data))
};
goog.net.WebSocket.prototype.onError_ = function(a) {
  a = a.data;
  this.logger_.severe("An error occurred: " + a);
  this.dispatchEvent(new goog.net.WebSocket.ErrorEvent(a))
};
goog.net.WebSocket.prototype.clearReconnectTimer_ = function() {
  goog.isDefAndNotNull(this.reconnectTimer_) && goog.Timer.clear(this.reconnectTimer_);
  this.reconnectTimer_ = null
};
goog.net.WebSocket.prototype.disposeInternal = function() {
  goog.net.WebSocket.superClass_.disposeInternal.call(this);
  this.close()
};
goog.net.WebSocket.MessageEvent = function(a) {
  goog.events.Event.call(this, goog.net.WebSocket.EventType.MESSAGE);
  this.message = a
};
goog.inherits(goog.net.WebSocket.MessageEvent, goog.events.Event);
goog.net.WebSocket.ErrorEvent = function(a) {
  goog.events.Event.call(this, goog.net.WebSocket.EventType.ERROR);
  this.data = a
};
goog.inherits(goog.net.WebSocket.ErrorEvent, goog.events.Event);
goog.debug.entryPointRegistry.register(function(a) {
  goog.net.WebSocket.prototype.onOpen_ = a(goog.net.WebSocket.prototype.onOpen_);
  goog.net.WebSocket.prototype.onClose_ = a(goog.net.WebSocket.prototype.onClose_);
  goog.net.WebSocket.prototype.onMessage_ = a(goog.net.WebSocket.prototype.onMessage_);
  goog.net.WebSocket.prototype.onError_ = a(goog.net.WebSocket.prototype.onError_)
});
session.client.websocket = {};
session.client.websocket.create = function() {
  return new goog.net.WebSocket
};
session.client.websocket.configure = function() {
  var a = null, b = function(b, c, d) {
    return a.call(null, b, c, d, null)
  }, c = function(b, c, d, h) {
    return a.call(null, b, c, d, h, null)
  }, d = function(a, b, c, d, i) {
    var j = new goog.events.EventHandler;
    j.listen(a, goog.net.WebSocket.EventType.OPENED, b);
    j.listen(a, goog.net.WebSocket.EventType.MESSAGE, function(a) {
      var a = a.message(), b = cljs.core.re_matches.call(null, /\/([^ ]+) (.*)/, a);
      cljs.core.nth.call(null, b, 0, null);
      var d = cljs.core.nth.call(null, b, 1, null), b = cljs.core.nth.call(null, b, 2, null);
      alert("websocket", [cljs.core.str("R: "), cljs.core.str(a)].join(""));
      return c.call(null, d, b)
    });
    cljs.core.truth_(d) && j.listen(a, goog.net.WebSocket.EventType.ERROR, d);
    cljs.core.truth_(i) && j.listen(a, goog.net.WebSocket.EventType.CLOSED, i);
    return a
  }, a = function(a, f, g, h, i) {
    switch(arguments.length) {
      case 3:
        return b.call(this, a, f, g);
      case 4:
        return c.call(this, a, f, g, h);
      case 5:
        return d.call(this, a, f, g, h, i)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$3 = b;
  a.cljs$lang$arity$4 = c;
  a.cljs$lang$arity$5 = d;
  return a
}();
session.client.websocket.connect_BANG_ = function(a, b) {
  try {
    return a.open(b), a
  }catch(c) {
    if(cljs.core.instance_QMARK_.call(null, Error, c)) {
      return alert("websocket", "No WebSocket supported, get a decent browser.")
    }
    throw c;
  }
};
session.client.websocket.close_BANG_ = function(a) {
  return a.close()
};
session.client.websocket.emit_BANG_ = function() {
  var a = null, b = function(b, c) {
    return a.call(null, b, c, null)
  }, c = function(a, b, c) {
    b = [cljs.core.str("/"), cljs.core.str(b), cljs.core.str(cljs.core.truth_(c) ? [cljs.core.str(" "), cljs.core.str(c)].join("") : null)].join("");
    alert("websocket", [cljs.core.str("T: "), cljs.core.str(b)].join(""));
    return a.send(b)
  }, a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, a, e);
      case 3:
        return c.call(this, a, e, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  a.cljs$lang$arity$2 = b;
  a.cljs$lang$arity$3 = c;
  return a
}();
