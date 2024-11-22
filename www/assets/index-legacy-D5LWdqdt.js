;
(function () {
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
  function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
  function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
  function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "html,\nbody {\n  padding: 0;\n  margin: 0;\n}\n";
        document.head.appendChild(__vite_style__);
        false && function polyfill() {
          var relList = document.createElement('link').relList;
          if (relList && relList.supports && relList.supports('modulepreload')) {
            return;
          }
          var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var link = _step.value;
              processPreload(link);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          new MutationObserver(function (mutations) {
            var _iterator2 = _createForOfIteratorHelper(mutations),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var mutation = _step2.value;
                if (mutation.type !== 'childList') {
                  continue;
                }
                var _iterator3 = _createForOfIteratorHelper(mutation.addedNodes),
                  _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var node = _step3.value;
                    if (node.tagName === 'LINK' && node.rel === 'modulepreload') processPreload(node);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }).observe(document, {
            childList: true,
            subtree: true
          });
          function getFetchOpts(link) {
            var fetchOpts = {};
            if (link.integrity) fetchOpts.integrity = link.integrity;
            if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
            if (link.crossOrigin === 'use-credentials') fetchOpts.credentials = 'include';else if (link.crossOrigin === 'anonymous') fetchOpts.credentials = 'omit';else fetchOpts.credentials = 'same-origin';
            return fetchOpts;
          }
          function processPreload(link) {
            if (link.ep)
              // ep marker = processed
              return;
            link.ep = true;
            // prepopulate the load record
            var fetchOpts = getFetchOpts(link);
            fetch(link.href, fetchOpts);
          }
        }();
        var scriptRel = 'modulepreload';
        var assetsURL = function assetsURL(dep, importerUrl) {
          return new URL(dep, importerUrl).href;
        };
        var seen = {};
        var __vitePreload = function preload(baseModule, deps, importerUrl) {
          var promise = Promise.resolve();
          // @ts-expect-error false will be replaced with boolean later
          if (false && deps && deps.length > 0) {
            var links = document.getElementsByTagName('link');
            promise = Promise.all(deps.map(function (dep) {
              // @ts-expect-error assetsURL is declared before preload.toString()
              dep = assetsURL(dep, importerUrl);
              if (dep in seen) return;
              seen[dep] = true;
              var isCss = dep.endsWith('.css');
              var cssSelector = isCss ? '[rel="stylesheet"]' : '';
              var isBaseRelative = !!importerUrl;
              // check if the file is already preloaded by SSR markup
              if (isBaseRelative) {
                // When isBaseRelative is true then we have `importerUrl` and `dep` is
                // already converted to an absolute URL by the `assetsURL` function
                for (var i = links.length - 1; i >= 0; i--) {
                  var _link = links[i];
                  // The `links[i].href` is an absolute URL thanks to browser doing the work
                  // for us. See https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes:idl-domstring-5
                  if (_link.href === dep && (!isCss || _link.rel === 'stylesheet')) {
                    return;
                  }
                }
              } else if (document.querySelector("link[href=\"".concat(dep, "\"]").concat(cssSelector))) {
                return;
              }
              var link = document.createElement('link');
              link.rel = isCss ? 'stylesheet' : scriptRel;
              if (!isCss) {
                link.as = 'script';
                link.crossOrigin = '';
              }
              link.href = dep;
              document.head.appendChild(link);
              if (isCss) {
                return new Promise(function (res, rej) {
                  link.addEventListener('load', res);
                  link.addEventListener('error', function () {
                    return rej(new Error("Unable to preload CSS for ".concat(dep)));
                  });
                });
              }
            }));
          }
          return promise.then(function () {
            return baseModule();
          }).catch(function (err) {
            var e = new Event('vite:preloadError', {
              cancelable: true
            });
            // @ts-expect-error custom payload
            e.payload = err;
            window.dispatchEvent(e);
            if (!e.defaultPrevented) {
              throw err;
            }
          });
        };

        /*! Capacitor: https://capacitorjs.com/ - MIT License */
        var createCapacitorPlatforms = function createCapacitorPlatforms(win) {
          var defaultPlatformMap = new Map();
          defaultPlatformMap.set('web', {
            name: 'web'
          });
          var capPlatforms = win.CapacitorPlatforms || {
            currentPlatform: {
              name: 'web'
            },
            platforms: defaultPlatformMap
          };
          var addPlatform = function addPlatform(name, platform) {
            capPlatforms.platforms.set(name, platform);
          };
          var setPlatform = function setPlatform(name) {
            if (capPlatforms.platforms.has(name)) {
              capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
            }
          };
          capPlatforms.addPlatform = addPlatform;
          capPlatforms.setPlatform = setPlatform;
          return capPlatforms;
        };
        var initPlatforms = function initPlatforms(win) {
          return win.CapacitorPlatforms = createCapacitorPlatforms(win);
        };
        /**
         * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
         */
        var CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
        /**
         * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
         */
        CapacitorPlatforms.addPlatform;
        /**
         * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
         */
        CapacitorPlatforms.setPlatform;
        var ExceptionCode;
        (function (ExceptionCode) {
          /**
           * API is not implemented.
           *
           * This usually means the API can't be used because it is not implemented for
           * the current platform.
           */
          ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
          /**
           * API is not available.
           *
           * This means the API can't be used right now because:
           *   - it is currently missing a prerequisite, such as network connectivity
           *   - it requires a particular platform or browser version
           */
          ExceptionCode["Unavailable"] = "UNAVAILABLE";
        })(ExceptionCode || (ExceptionCode = {}));
        var CapacitorException = /*#__PURE__*/function (_Error) {
          function CapacitorException(message, code, data) {
            var _this;
            _classCallCheck(this, CapacitorException);
            _this = _callSuper(this, CapacitorException, [message]);
            _this.message = message;
            _this.code = code;
            _this.data = data;
            return _this;
          }
          _inherits(CapacitorException, _Error);
          return _createClass(CapacitorException);
        }(/*#__PURE__*/_wrapNativeSuper(Error));
        var getPlatformId = function getPlatformId(win) {
          var _a, _b;
          if (win === null || win === void 0 ? void 0 : win.androidBridge) {
            return 'android';
          } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
            return 'ios';
          } else {
            return 'web';
          }
        };
        var createCapacitor = function createCapacitor(win) {
          var _a, _b, _c, _d, _e;
          var capCustomPlatform = win.CapacitorCustomPlatform || null;
          var cap = win.Capacitor || {};
          var Plugins = cap.Plugins = cap.Plugins || {};
          /**
           * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
           */
          var capPlatforms = win.CapacitorPlatforms;
          var defaultGetPlatform = function defaultGetPlatform() {
            return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
          };
          var getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
          var defaultIsNativePlatform = function defaultIsNativePlatform() {
            return getPlatform() !== 'web';
          };
          var isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
          var defaultIsPluginAvailable = function defaultIsPluginAvailable(pluginName) {
            var plugin = registeredPlugins.get(pluginName);
            if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
              // JS implementation available for the current platform.
              return true;
            }
            if (getPluginHeader(pluginName)) {
              // Native implementation available.
              return true;
            }
            return false;
          };
          var isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;
          var defaultGetPluginHeader = function defaultGetPluginHeader(pluginName) {
            var _a;
            return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(function (h) {
              return h.name === pluginName;
            });
          };
          var getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
          var handleError = function handleError(err) {
            return win.console.error(err);
          };
          var pluginMethodNoop = function pluginMethodNoop(_target, prop, pluginName) {
            return Promise.reject("".concat(pluginName, " does not have an implementation of \"").concat(prop, "\"."));
          };
          var registeredPlugins = new Map();
          var defaultRegisterPlugin = function defaultRegisterPlugin(pluginName) {
            var jsImplementations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var registeredPlugin = registeredPlugins.get(pluginName);
            if (registeredPlugin) {
              console.warn("Capacitor plugin \"".concat(pluginName, "\" already registered. Cannot register plugins twice."));
              return registeredPlugin.proxy;
            }
            var platform = getPlatform();
            var pluginHeader = getPluginHeader(pluginName);
            var jsImplementation;
            var loadPluginImplementation = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (!(!jsImplementation && platform in jsImplementations)) {
                        _context.next = 11;
                        break;
                      }
                      if (!(typeof jsImplementations[platform] === 'function')) {
                        _context.next = 7;
                        break;
                      }
                      _context.next = 4;
                      return jsImplementations[platform]();
                    case 4:
                      _context.t0 = jsImplementation = _context.sent;
                      _context.next = 8;
                      break;
                    case 7:
                      _context.t0 = jsImplementation = jsImplementations[platform];
                    case 8:
                      jsImplementation = _context.t0;
                      _context.next = 20;
                      break;
                    case 11:
                      if (!(capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations)) {
                        _context.next = 20;
                        break;
                      }
                      if (!(typeof jsImplementations['web'] === 'function')) {
                        _context.next = 18;
                        break;
                      }
                      _context.next = 15;
                      return jsImplementations['web']();
                    case 15:
                      _context.t1 = jsImplementation = _context.sent;
                      _context.next = 19;
                      break;
                    case 18:
                      _context.t1 = jsImplementation = jsImplementations['web'];
                    case 19:
                      jsImplementation = _context.t1;
                    case 20:
                      return _context.abrupt("return", jsImplementation);
                    case 21:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function loadPluginImplementation() {
                return _ref.apply(this, arguments);
              };
            }();
            var createPluginMethod = function createPluginMethod(impl, prop) {
              var _a, _b;
              if (pluginHeader) {
                var methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(function (m) {
                  return prop === m.name;
                });
                if (methodHeader) {
                  if (methodHeader.rtype === 'promise') {
                    return function (options) {
                      return cap.nativePromise(pluginName, prop.toString(), options);
                    };
                  } else {
                    return function (options, callback) {
                      return cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    };
                  }
                } else if (impl) {
                  return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
              } else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
              } else {
                throw new CapacitorException("\"".concat(pluginName, "\" plugin is not implemented on ").concat(platform), ExceptionCode.Unimplemented);
              }
            };
            var createPluginMethodWrapper = function createPluginMethodWrapper(prop) {
              var remove;
              var wrapper = function wrapper() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                var p = loadPluginImplementation().then(function (impl) {
                  var fn = createPluginMethod(impl, prop);
                  if (fn) {
                    var _p = fn.apply(void 0, args);
                    remove = _p === null || _p === void 0 ? void 0 : _p.remove;
                    return _p;
                  } else {
                    throw new CapacitorException("\"".concat(pluginName, ".").concat(prop, "()\" is not implemented on ").concat(platform), ExceptionCode.Unimplemented);
                  }
                });
                if (prop === 'addListener') {
                  p.remove = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          return _context2.abrupt("return", remove());
                        case 1:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2);
                  }));
                }
                return p;
              };
              // Some flair ✨
              wrapper.toString = function () {
                return "".concat(prop.toString(), "() { [capacitor code] }");
              };
              Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false
              });
              return wrapper;
            };
            var addListener = createPluginMethodWrapper('addListener');
            var removeListener = createPluginMethodWrapper('removeListener');
            var addListenerNative = function addListenerNative(eventName, callback) {
              var call = addListener({
                eventName: eventName
              }, callback);
              var remove = /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                  var callbackId;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return call;
                      case 2:
                        callbackId = _context3.sent;
                        removeListener({
                          eventName: eventName,
                          callbackId: callbackId
                        }, callback);
                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function remove() {
                  return _ref3.apply(this, arguments);
                };
              }();
              var p = new Promise(function (resolve) {
                return call.then(function () {
                  return resolve({
                    remove: remove
                  });
                });
              });
              p.remove = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      console.warn("Using addListener() without 'await' is deprecated.");
                      _context4.next = 3;
                      return remove();
                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              }));
              return p;
            };
            var proxy = new Proxy({}, {
              get: function get(_, prop) {
                switch (prop) {
                  // https://github.com/facebook/react/issues/20030
                  case '$$typeof':
                    return undefined;
                  case 'toJSON':
                    return function () {
                      return {};
                    };
                  case 'addListener':
                    return pluginHeader ? addListenerNative : addListener;
                  case 'removeListener':
                    return removeListener;
                  default:
                    return createPluginMethodWrapper(prop);
                }
              }
            });
            Plugins[pluginName] = proxy;
            registeredPlugins.set(pluginName, {
              name: pluginName,
              proxy: proxy,
              platforms: new Set([].concat(_toConsumableArray(Object.keys(jsImplementations)), _toConsumableArray(pluginHeader ? [platform] : [])))
            });
            return proxy;
          };
          var registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
          // Add in convertFileSrc for web, it will already be available in native context
          if (!cap.convertFileSrc) {
            cap.convertFileSrc = function (filePath) {
              return filePath;
            };
          }
          cap.getPlatform = getPlatform;
          cap.handleError = handleError;
          cap.isNativePlatform = isNativePlatform;
          cap.isPluginAvailable = isPluginAvailable;
          cap.pluginMethodNoop = pluginMethodNoop;
          cap.registerPlugin = registerPlugin;
          cap.Exception = CapacitorException;
          cap.DEBUG = !!cap.DEBUG;
          cap.isLoggingEnabled = !!cap.isLoggingEnabled;
          // Deprecated props
          cap.platform = cap.getPlatform();
          cap.isNative = cap.isNativePlatform();
          return cap;
        };
        var initCapacitorGlobal = function initCapacitorGlobal(win) {
          return win.Capacitor = createCapacitor(win);
        };
        var Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
        var registerPlugin = Capacitor.registerPlugin;
        /**
         * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
         * Capacitor v3 plugins should import the plugin directly. This "Plugins"
         * export is deprecated in v3, and will be removed in v4.
         */
        Capacitor.Plugins;

        /**
         * Base class web plugins should extend.
         */
        var WebPlugin = /*#__PURE__*/function () {
          function WebPlugin(config) {
            _classCallCheck(this, WebPlugin);
            this.listeners = {};
            this.retainedEventArguments = {};
            this.windowListeners = {};
            if (config) {
              // TODO: add link to upgrade guide
              console.warn("Capacitor WebPlugin \"".concat(config.name, "\" config object was deprecated in v3 and will be removed in v4."));
              this.config = config;
            }
          }
          return _createClass(WebPlugin, [{
            key: "addListener",
            value: function addListener(eventName, listenerFunc) {
              var _this2 = this;
              var firstListener = false;
              var listeners = this.listeners[eventName];
              if (!listeners) {
                this.listeners[eventName] = [];
                firstListener = true;
              }
              this.listeners[eventName].push(listenerFunc);
              // If we haven't added a window listener for this event and it requires one,
              // go ahead and add it
              var windowListener = this.windowListeners[eventName];
              if (windowListener && !windowListener.registered) {
                this.addWindowListener(windowListener);
              }
              if (firstListener) {
                this.sendRetainedArgumentsForEvent(eventName);
              }
              var remove = /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        return _context5.abrupt("return", _this2.removeListener(eventName, listenerFunc));
                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function remove() {
                  return _ref5.apply(this, arguments);
                };
              }();
              var p = Promise.resolve({
                remove: remove
              });
              return p;
            }
          }, {
            key: "removeAllListeners",
            value: function () {
              var _removeAllListeners = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                var listener;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      this.listeners = {};
                      for (listener in this.windowListeners) {
                        this.removeWindowListener(this.windowListeners[listener]);
                      }
                      this.windowListeners = {};
                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6, this);
              }));
              function removeAllListeners() {
                return _removeAllListeners.apply(this, arguments);
              }
              return removeAllListeners;
            }()
          }, {
            key: "notifyListeners",
            value: function notifyListeners(eventName, data, retainUntilConsumed) {
              var listeners = this.listeners[eventName];
              if (!listeners) {
                if (retainUntilConsumed) {
                  var args = this.retainedEventArguments[eventName];
                  if (!args) {
                    args = [];
                  }
                  args.push(data);
                  this.retainedEventArguments[eventName] = args;
                }
                return;
              }
              listeners.forEach(function (listener) {
                return listener(data);
              });
            }
          }, {
            key: "hasListeners",
            value: function hasListeners(eventName) {
              return !!this.listeners[eventName].length;
            }
          }, {
            key: "registerWindowListener",
            value: function registerWindowListener(windowEventName, pluginEventName) {
              var _this3 = this;
              this.windowListeners[pluginEventName] = {
                registered: false,
                windowEventName: windowEventName,
                pluginEventName: pluginEventName,
                handler: function handler(event) {
                  _this3.notifyListeners(pluginEventName, event);
                }
              };
            }
          }, {
            key: "unimplemented",
            value: function unimplemented() {
              var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not implemented';
              return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
            }
          }, {
            key: "unavailable",
            value: function unavailable() {
              var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not available';
              return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
            }
          }, {
            key: "removeListener",
            value: function () {
              var _removeListener = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(eventName, listenerFunc) {
                var listeners, index;
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      listeners = this.listeners[eventName];
                      if (listeners) {
                        _context7.next = 3;
                        break;
                      }
                      return _context7.abrupt("return");
                    case 3:
                      index = listeners.indexOf(listenerFunc);
                      this.listeners[eventName].splice(index, 1);
                      // If there are no more listeners for this type of event,
                      // remove the window listener
                      if (!this.listeners[eventName].length) {
                        this.removeWindowListener(this.windowListeners[eventName]);
                      }
                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7, this);
              }));
              function removeListener(_x, _x2) {
                return _removeListener.apply(this, arguments);
              }
              return removeListener;
            }()
          }, {
            key: "addWindowListener",
            value: function addWindowListener(handle) {
              window.addEventListener(handle.windowEventName, handle.handler);
              handle.registered = true;
            }
          }, {
            key: "removeWindowListener",
            value: function removeWindowListener(handle) {
              if (!handle) {
                return;
              }
              window.removeEventListener(handle.windowEventName, handle.handler);
              handle.registered = false;
            }
          }, {
            key: "sendRetainedArgumentsForEvent",
            value: function sendRetainedArgumentsForEvent(eventName) {
              var _this4 = this;
              var args = this.retainedEventArguments[eventName];
              if (!args) {
                return;
              }
              delete this.retainedEventArguments[eventName];
              args.forEach(function (arg) {
                _this4.notifyListeners(eventName, arg);
              });
            }
          }]);
        }();
        exports("W", WebPlugin);
        /******** END WEB VIEW PLUGIN ********/
        /******** COOKIES PLUGIN ********/
        /**
         * Safely web encode a string value (inspired by js-cookie)
         * @param str The string value to encode
         */
        var encode = function encode(str) {
          return encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        };
        /**
         * Safely web decode a string value (inspired by js-cookie)
         * @param str The string value to decode
         */
        var decode = function decode(str) {
          return str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        };
        var CapacitorCookiesPluginWeb = /*#__PURE__*/function (_WebPlugin) {
          function CapacitorCookiesPluginWeb() {
            _classCallCheck(this, CapacitorCookiesPluginWeb);
            return _callSuper(this, CapacitorCookiesPluginWeb, arguments);
          }
          _inherits(CapacitorCookiesPluginWeb, _WebPlugin);
          return _createClass(CapacitorCookiesPluginWeb, [{
            key: "getCookies",
            value: function () {
              var _getCookies = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                var cookies, cookieMap;
                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      cookies = document.cookie;
                      cookieMap = {};
                      cookies.split(';').forEach(function (cookie) {
                        if (cookie.length <= 0) return;
                        // Replace first "=" with CAP_COOKIE to prevent splitting on additional "="
                        var _cookie$replace$split = cookie.replace(/=/, 'CAP_COOKIE').split('CAP_COOKIE'),
                          _cookie$replace$split2 = _slicedToArray(_cookie$replace$split, 2),
                          key = _cookie$replace$split2[0],
                          value = _cookie$replace$split2[1];
                        key = decode(key).trim();
                        value = decode(value).trim();
                        cookieMap[key] = value;
                      });
                      return _context8.abrupt("return", cookieMap);
                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8);
              }));
              function getCookies() {
                return _getCookies.apply(this, arguments);
              }
              return getCookies;
            }()
          }, {
            key: "setCookie",
            value: function () {
              var _setCookie = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(options) {
                var encodedKey, encodedValue, expires, path, domain;
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      // Safely Encoded Key/Value
                      encodedKey = encode(options.key);
                      encodedValue = encode(options.value); // Clean & sanitize options
                      expires = "; expires=".concat((options.expires || '').replace('expires=', '')); // Default is "; expires="
                      path = (options.path || '/').replace('path=', ''); // Default is "path=/"
                      domain = options.url != null && options.url.length > 0 ? "domain=".concat(options.url) : '';
                      document.cookie = "".concat(encodedKey, "=").concat(encodedValue || '').concat(expires, "; path=").concat(path, "; ").concat(domain, ";");
                      _context9.next = 12;
                      break;
                    case 9:
                      _context9.prev = 9;
                      _context9.t0 = _context9["catch"](0);
                      return _context9.abrupt("return", Promise.reject(_context9.t0));
                    case 12:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9, null, [[0, 9]]);
              }));
              function setCookie(_x3) {
                return _setCookie.apply(this, arguments);
              }
              return setCookie;
            }()
          }, {
            key: "deleteCookie",
            value: function () {
              var _deleteCookie = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(options) {
                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.prev = 0;
                      document.cookie = "".concat(options.key, "=; Max-Age=0");
                      _context10.next = 7;
                      break;
                    case 4:
                      _context10.prev = 4;
                      _context10.t0 = _context10["catch"](0);
                      return _context10.abrupt("return", Promise.reject(_context10.t0));
                    case 7:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee10, null, [[0, 4]]);
              }));
              function deleteCookie(_x4) {
                return _deleteCookie.apply(this, arguments);
              }
              return deleteCookie;
            }()
          }, {
            key: "clearCookies",
            value: function () {
              var _clearCookies = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
                var cookies, _iterator4, _step4, cookie;
                return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.prev = 0;
                      cookies = document.cookie.split(';') || [];
                      _iterator4 = _createForOfIteratorHelper(cookies);
                      try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                          cookie = _step4.value;
                          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, "=;expires=".concat(new Date().toUTCString(), ";path=/"));
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }
                      _context11.next = 9;
                      break;
                    case 6:
                      _context11.prev = 6;
                      _context11.t0 = _context11["catch"](0);
                      return _context11.abrupt("return", Promise.reject(_context11.t0));
                    case 9:
                    case "end":
                      return _context11.stop();
                  }
                }, _callee11, null, [[0, 6]]);
              }));
              function clearCookies() {
                return _clearCookies.apply(this, arguments);
              }
              return clearCookies;
            }()
          }, {
            key: "clearAllCookies",
            value: function () {
              var _clearAllCookies = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.prev = 0;
                      _context12.next = 3;
                      return this.clearCookies();
                    case 3:
                      _context12.next = 8;
                      break;
                    case 5:
                      _context12.prev = 5;
                      _context12.t0 = _context12["catch"](0);
                      return _context12.abrupt("return", Promise.reject(_context12.t0));
                    case 8:
                    case "end":
                      return _context12.stop();
                  }
                }, _callee12, this, [[0, 5]]);
              }));
              function clearAllCookies() {
                return _clearAllCookies.apply(this, arguments);
              }
              return clearAllCookies;
            }()
          }]);
        }(WebPlugin);
        registerPlugin('CapacitorCookies', {
          web: function web() {
            return new CapacitorCookiesPluginWeb();
          }
        });
        // UTILITY FUNCTIONS
        /**
         * Read in a Blob value and return it as a base64 string
         * @param blob The blob value to convert to a base64 string
         */
        var readBlobAsBase64 = /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(blob) {
            return _regeneratorRuntime().wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  return _context13.abrupt("return", new Promise(function (resolve, reject) {
                    var reader = new FileReader();
                    reader.onload = function () {
                      var base64String = reader.result;
                      // remove prefix "data:application/pdf;base64,"
                      resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
                    };
                    reader.onerror = function (error) {
                      return reject(error);
                    };
                    reader.readAsDataURL(blob);
                  }));
                case 1:
                case "end":
                  return _context13.stop();
              }
            }, _callee13);
          }));
          return function readBlobAsBase64(_x5) {
            return _ref6.apply(this, arguments);
          };
        }();
        /**
         * Normalize an HttpHeaders map by lowercasing all of the values
         * @param headers The HttpHeaders object to normalize
         */
        var normalizeHttpHeaders = function normalizeHttpHeaders() {
          var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var originalKeys = Object.keys(headers);
          var loweredKeys = Object.keys(headers).map(function (k) {
            return k.toLocaleLowerCase();
          });
          var normalized = loweredKeys.reduce(function (acc, key, index) {
            acc[key] = headers[originalKeys[index]];
            return acc;
          }, {});
          return normalized;
        };
        /**
         * Builds a string of url parameters that
         * @param params A map of url parameters
         * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
         */
        var buildUrlParams = function buildUrlParams(params) {
          var shouldEncode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          if (!params) return null;
          var output = Object.entries(params).reduce(function (accumulator, entry) {
            var _entry = _slicedToArray(entry, 2),
              key = _entry[0],
              value = _entry[1];
            var encodedValue;
            var item;
            if (Array.isArray(value)) {
              item = '';
              value.forEach(function (str) {
                encodedValue = shouldEncode ? encodeURIComponent(str) : str;
                item += "".concat(key, "=").concat(encodedValue, "&");
              });
              // last character will always be "&" so slice it off
              item.slice(0, -1);
            } else {
              encodedValue = shouldEncode ? encodeURIComponent(value) : value;
              item = "".concat(key, "=").concat(encodedValue);
            }
            return "".concat(accumulator, "&").concat(item);
          }, '');
          // Remove initial "&" from the reduce
          return output.substr(1);
        };
        /**
         * Build the RequestInit object based on the options passed into the initial request
         * @param options The Http plugin options
         * @param extra Any extra RequestInit values
         */
        var buildRequestInit = function buildRequestInit(options) {
          var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var output = Object.assign({
            method: options.method || 'GET',
            headers: options.headers
          }, extra);
          // Get the content-type
          var headers = normalizeHttpHeaders(options.headers);
          var type = headers['content-type'] || '';
          // If body is already a string, then pass it through as-is.
          if (typeof options.data === 'string') {
            output.body = options.data;
          }
          // Build request initializers based off of content-type
          else if (type.includes('application/x-www-form-urlencoded')) {
            var params = new URLSearchParams();
            for (var _i = 0, _Object$entries = Object.entries(options.data || {}); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];
              params.set(key, value);
            }
            output.body = params.toString();
          } else if (type.includes('multipart/form-data') || options.data instanceof FormData) {
            var form = new FormData();
            if (options.data instanceof FormData) {
              options.data.forEach(function (value, key) {
                form.append(key, value);
              });
            } else {
              for (var _i2 = 0, _Object$keys = Object.keys(options.data); _i2 < _Object$keys.length; _i2++) {
                var _key2 = _Object$keys[_i2];
                form.append(_key2, options.data[_key2]);
              }
            }
            output.body = form;
            var _headers = new Headers(output.headers);
            _headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary
            output.headers = _headers;
          } else if (type.includes('application/json') || _typeof(options.data) === 'object') {
            output.body = JSON.stringify(options.data);
          }
          return output;
        };
        // WEB IMPLEMENTATION
        var CapacitorHttpPluginWeb = /*#__PURE__*/function (_WebPlugin2) {
          function CapacitorHttpPluginWeb() {
            _classCallCheck(this, CapacitorHttpPluginWeb);
            return _callSuper(this, CapacitorHttpPluginWeb, arguments);
          }
          _inherits(CapacitorHttpPluginWeb, _WebPlugin2);
          return _createClass(CapacitorHttpPluginWeb, [{
            key: "request",
            value: (
            /**
             * Perform an Http request given a set of options
             * @param options Options to build the HTTP request
             */
            function () {
              var _request = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(options) {
                var requestInit, urlParams, url, response, contentType, _ref7, _ref7$responseType, responseType, data, blob, headers;
                return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                  while (1) switch (_context14.prev = _context14.next) {
                    case 0:
                      requestInit = buildRequestInit(options, options.webFetchExtra);
                      urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
                      url = urlParams ? "".concat(options.url, "?").concat(urlParams) : options.url;
                      _context14.next = 5;
                      return fetch(url, requestInit);
                    case 5:
                      response = _context14.sent;
                      contentType = response.headers.get('content-type') || ''; // Default to 'text' responseType so no parsing happens
                      _ref7 = response.ok ? options : {}, _ref7$responseType = _ref7.responseType, responseType = _ref7$responseType === void 0 ? 'text' : _ref7$responseType; // If the response content-type is json, force the response to be json
                      if (contentType.includes('application/json')) {
                        responseType = 'json';
                      }
                      _context14.t0 = responseType;
                      _context14.next = _context14.t0 === 'arraybuffer' ? 12 : _context14.t0 === 'blob' ? 12 : _context14.t0 === 'json' ? 19 : _context14.t0 === 'document' ? 23 : _context14.t0 === 'text' ? 23 : 23;
                      break;
                    case 12:
                      _context14.next = 14;
                      return response.blob();
                    case 14:
                      blob = _context14.sent;
                      _context14.next = 17;
                      return readBlobAsBase64(blob);
                    case 17:
                      data = _context14.sent;
                      return _context14.abrupt("break", 26);
                    case 19:
                      _context14.next = 21;
                      return response.json();
                    case 21:
                      data = _context14.sent;
                      return _context14.abrupt("break", 26);
                    case 23:
                      _context14.next = 25;
                      return response.text();
                    case 25:
                      data = _context14.sent;
                    case 26:
                      // Convert fetch headers to Capacitor HttpHeaders
                      headers = {};
                      response.headers.forEach(function (value, key) {
                        headers[key] = value;
                      });
                      return _context14.abrupt("return", {
                        data: data,
                        headers: headers,
                        status: response.status,
                        url: response.url
                      });
                    case 29:
                    case "end":
                      return _context14.stop();
                  }
                }, _callee14);
              }));
              function request(_x6) {
                return _request.apply(this, arguments);
              }
              return request;
            }()
            /**
             * Perform an Http GET request given a set of options
             * @param options Options to build the HTTP request
             */
            )
          }, {
            key: "get",
            value: (function () {
              var _get = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(options) {
                return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                  while (1) switch (_context15.prev = _context15.next) {
                    case 0:
                      return _context15.abrupt("return", this.request(Object.assign(Object.assign({}, options), {
                        method: 'GET'
                      })));
                    case 1:
                    case "end":
                      return _context15.stop();
                  }
                }, _callee15, this);
              }));
              function get(_x7) {
                return _get.apply(this, arguments);
              }
              return get;
            }()
            /**
             * Perform an Http POST request given a set of options
             * @param options Options to build the HTTP request
             */
            )
          }, {
            key: "post",
            value: (function () {
              var _post = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(options) {
                return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                  while (1) switch (_context16.prev = _context16.next) {
                    case 0:
                      return _context16.abrupt("return", this.request(Object.assign(Object.assign({}, options), {
                        method: 'POST'
                      })));
                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }, _callee16, this);
              }));
              function post(_x8) {
                return _post.apply(this, arguments);
              }
              return post;
            }()
            /**
             * Perform an Http PUT request given a set of options
             * @param options Options to build the HTTP request
             */
            )
          }, {
            key: "put",
            value: (function () {
              var _put = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(options) {
                return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                  while (1) switch (_context17.prev = _context17.next) {
                    case 0:
                      return _context17.abrupt("return", this.request(Object.assign(Object.assign({}, options), {
                        method: 'PUT'
                      })));
                    case 1:
                    case "end":
                      return _context17.stop();
                  }
                }, _callee17, this);
              }));
              function put(_x9) {
                return _put.apply(this, arguments);
              }
              return put;
            }()
            /**
             * Perform an Http PATCH request given a set of options
             * @param options Options to build the HTTP request
             */
            )
          }, {
            key: "patch",
            value: (function () {
              var _patch = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(options) {
                return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                  while (1) switch (_context18.prev = _context18.next) {
                    case 0:
                      return _context18.abrupt("return", this.request(Object.assign(Object.assign({}, options), {
                        method: 'PATCH'
                      })));
                    case 1:
                    case "end":
                      return _context18.stop();
                  }
                }, _callee18, this);
              }));
              function patch(_x10) {
                return _patch.apply(this, arguments);
              }
              return patch;
            }()
            /**
             * Perform an Http DELETE request given a set of options
             * @param options Options to build the HTTP request
             */
            )
          }, {
            key: "delete",
            value: (function () {
              var _delete2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(options) {
                return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                  while (1) switch (_context19.prev = _context19.next) {
                    case 0:
                      return _context19.abrupt("return", this.request(Object.assign(Object.assign({}, options), {
                        method: 'DELETE'
                      })));
                    case 1:
                    case "end":
                      return _context19.stop();
                  }
                }, _callee19, this);
              }));
              function _delete(_x11) {
                return _delete2.apply(this, arguments);
              }
              return _delete;
            }())
          }]);
        }(WebPlugin);
        registerPlugin('CapacitorHttp', {
          web: function web() {
            return new CapacitorHttpPluginWeb();
          }
        });
        var SplashScreen = registerPlugin('SplashScreen', {
          web: function web() {
            return __vitePreload(function () {
              return module.import('./web-legacy-DEzcoYR8.js');
            }, false ? "__VITE_PRELOAD__" : void 0, module.meta.url).then(function (m) {
              return new m.SplashScreenWeb();
            });
          }
        });
        var CameraSource;
        (function (CameraSource) {
          /**
           * Prompts the user to select either the photo album or take a photo.
           */
          CameraSource["Prompt"] = "PROMPT";
          /**
           * Take a new photo using the camera.
           */
          CameraSource["Camera"] = "CAMERA";
          /**
           * Pick an existing photo from the gallery or photo album.
           */
          CameraSource["Photos"] = "PHOTOS";
        })(CameraSource || (CameraSource = {}));
        var CameraDirection;
        (function (CameraDirection) {
          CameraDirection["Rear"] = "REAR";
          CameraDirection["Front"] = "FRONT";
        })(CameraDirection || (CameraDirection = {}));
        var CameraResultType;
        (function (CameraResultType) {
          CameraResultType["Uri"] = "uri";
          CameraResultType["Base64"] = "base64";
          CameraResultType["DataUrl"] = "dataUrl";
        })(CameraResultType || (CameraResultType = {}));
        var CameraWeb = /*#__PURE__*/function (_WebPlugin3) {
          function CameraWeb() {
            _classCallCheck(this, CameraWeb);
            return _callSuper(this, CameraWeb, arguments);
          }
          _inherits(CameraWeb, _WebPlugin3);
          return _createClass(CameraWeb, [{
            key: "getPhoto",
            value: function () {
              var _getPhoto = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(options) {
                var _this5 = this;
                return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                  while (1) switch (_context22.prev = _context22.next) {
                    case 0:
                      return _context22.abrupt("return", new Promise(/*#__PURE__*/function () {
                        var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(resolve, reject) {
                          var actionSheet;
                          return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                            while (1) switch (_context21.prev = _context21.next) {
                              case 0:
                                if (options.webUseInput || options.source === CameraSource.Photos) {
                                  _this5.fileInputExperience(options, resolve, reject);
                                } else if (options.source === CameraSource.Prompt) {
                                  actionSheet = document.querySelector('pwa-action-sheet');
                                  if (!actionSheet) {
                                    actionSheet = document.createElement('pwa-action-sheet');
                                    document.body.appendChild(actionSheet);
                                  }
                                  actionSheet.header = options.promptLabelHeader || 'Photo';
                                  actionSheet.cancelable = false;
                                  actionSheet.options = [{
                                    title: options.promptLabelPhoto || 'From Photos'
                                  }, {
                                    title: options.promptLabelPicture || 'Take Picture'
                                  }];
                                  actionSheet.addEventListener('onSelection', /*#__PURE__*/function () {
                                    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(e) {
                                      var selection;
                                      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                                        while (1) switch (_context20.prev = _context20.next) {
                                          case 0:
                                            selection = e.detail;
                                            if (selection === 0) {
                                              _this5.fileInputExperience(options, resolve, reject);
                                            } else {
                                              _this5.cameraExperience(options, resolve, reject);
                                            }
                                          case 2:
                                          case "end":
                                            return _context20.stop();
                                        }
                                      }, _callee20);
                                    }));
                                    return function (_x15) {
                                      return _ref9.apply(this, arguments);
                                    };
                                  }());
                                } else {
                                  _this5.cameraExperience(options, resolve, reject);
                                }
                              case 1:
                              case "end":
                                return _context21.stop();
                            }
                          }, _callee21);
                        }));
                        return function (_x13, _x14) {
                          return _ref8.apply(this, arguments);
                        };
                      }()));
                    case 1:
                    case "end":
                      return _context22.stop();
                  }
                }, _callee22);
              }));
              function getPhoto(_x12) {
                return _getPhoto.apply(this, arguments);
              }
              return getPhoto;
            }()
          }, {
            key: "pickImages",
            value: function () {
              var _pickImages = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(_options) {
                var _this6 = this;
                return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                  while (1) switch (_context24.prev = _context24.next) {
                    case 0:
                      return _context24.abrupt("return", new Promise(/*#__PURE__*/function () {
                        var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(resolve, reject) {
                          return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                            while (1) switch (_context23.prev = _context23.next) {
                              case 0:
                                _this6.multipleFileInputExperience(resolve, reject);
                              case 1:
                              case "end":
                                return _context23.stop();
                            }
                          }, _callee23);
                        }));
                        return function (_x17, _x18) {
                          return _ref10.apply(this, arguments);
                        };
                      }()));
                    case 1:
                    case "end":
                      return _context24.stop();
                  }
                }, _callee24);
              }));
              function pickImages(_x16) {
                return _pickImages.apply(this, arguments);
              }
              return pickImages;
            }()
          }, {
            key: "cameraExperience",
            value: function () {
              var _cameraExperience = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(options, resolve, reject) {
                var _this7 = this;
                var cameraModal;
                return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                  while (1) switch (_context26.prev = _context26.next) {
                    case 0:
                      if (!customElements.get('pwa-camera-modal')) {
                        _context26.next = 16;
                        break;
                      }
                      cameraModal = document.createElement('pwa-camera-modal');
                      cameraModal.facingMode = options.direction === CameraDirection.Front ? 'user' : 'environment';
                      document.body.appendChild(cameraModal);
                      _context26.prev = 4;
                      _context26.next = 7;
                      return cameraModal.componentOnReady();
                    case 7:
                      cameraModal.addEventListener('onPhoto', /*#__PURE__*/function () {
                        var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(e) {
                          var photo;
                          return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                            while (1) switch (_context25.prev = _context25.next) {
                              case 0:
                                photo = e.detail;
                                if (!(photo === null)) {
                                  _context25.next = 5;
                                  break;
                                }
                                reject(new CapacitorException('User cancelled photos app'));
                                _context25.next = 14;
                                break;
                              case 5:
                                if (!(photo instanceof Error)) {
                                  _context25.next = 9;
                                  break;
                                }
                                reject(photo);
                                _context25.next = 14;
                                break;
                              case 9:
                                _context25.t0 = resolve;
                                _context25.next = 12;
                                return _this7._getCameraPhoto(photo, options);
                              case 12:
                                _context25.t1 = _context25.sent;
                                (0, _context25.t0)(_context25.t1);
                              case 14:
                                cameraModal.dismiss();
                                document.body.removeChild(cameraModal);
                              case 16:
                              case "end":
                                return _context25.stop();
                            }
                          }, _callee25);
                        }));
                        return function (_x22) {
                          return _ref11.apply(this, arguments);
                        };
                      }());
                      cameraModal.present();
                      _context26.next = 14;
                      break;
                    case 11:
                      _context26.prev = 11;
                      _context26.t0 = _context26["catch"](4);
                      this.fileInputExperience(options, resolve, reject);
                    case 14:
                      _context26.next = 18;
                      break;
                    case 16:
                      console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements.");
                      this.fileInputExperience(options, resolve, reject);
                    case 18:
                    case "end":
                      return _context26.stop();
                  }
                }, _callee26, this, [[4, 11]]);
              }));
              function cameraExperience(_x19, _x20, _x21) {
                return _cameraExperience.apply(this, arguments);
              }
              return cameraExperience;
            }()
          }, {
            key: "fileInputExperience",
            value: function fileInputExperience(options, resolve, reject) {
              var input = document.querySelector('#_capacitor-camera-input');
              var cleanup = function cleanup() {
                var _a;
                (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
              };
              if (!input) {
                input = document.createElement('input');
                input.id = '_capacitor-camera-input';
                input.type = 'file';
                input.hidden = true;
                document.body.appendChild(input);
                input.addEventListener('change', function (_e) {
                  var file = input.files[0];
                  var format = 'jpeg';
                  if (file.type === 'image/png') {
                    format = 'png';
                  } else if (file.type === 'image/gif') {
                    format = 'gif';
                  }
                  if (options.resultType === 'dataUrl' || options.resultType === 'base64') {
                    var reader = new FileReader();
                    reader.addEventListener('load', function () {
                      if (options.resultType === 'dataUrl') {
                        resolve({
                          dataUrl: reader.result,
                          format: format
                        });
                      } else if (options.resultType === 'base64') {
                        var b64 = reader.result.split(',')[1];
                        resolve({
                          base64String: b64,
                          format: format
                        });
                      }
                      cleanup();
                    });
                    reader.readAsDataURL(file);
                  } else {
                    resolve({
                      webPath: URL.createObjectURL(file),
                      format: format
                    });
                    cleanup();
                  }
                });
                input.addEventListener('cancel', function (_e) {
                  reject(new CapacitorException('User cancelled photos app'));
                  cleanup();
                });
              }
              input.accept = 'image/*';
              input.capture = true;
              if (options.source === CameraSource.Photos || options.source === CameraSource.Prompt) {
                input.removeAttribute('capture');
              } else if (options.direction === CameraDirection.Front) {
                input.capture = 'user';
              } else if (options.direction === CameraDirection.Rear) {
                input.capture = 'environment';
              }
              input.click();
            }
          }, {
            key: "multipleFileInputExperience",
            value: function multipleFileInputExperience(resolve, reject) {
              var input = document.querySelector('#_capacitor-camera-input-multiple');
              var cleanup = function cleanup() {
                var _a;
                (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
              };
              if (!input) {
                input = document.createElement('input');
                input.id = '_capacitor-camera-input-multiple';
                input.type = 'file';
                input.hidden = true;
                input.multiple = true;
                document.body.appendChild(input);
                input.addEventListener('change', function (_e) {
                  var photos = [];
                  // eslint-disable-next-line @typescript-eslint/prefer-for-of
                  for (var i = 0; i < input.files.length; i++) {
                    var file = input.files[i];
                    var format = 'jpeg';
                    if (file.type === 'image/png') {
                      format = 'png';
                    } else if (file.type === 'image/gif') {
                      format = 'gif';
                    }
                    photos.push({
                      webPath: URL.createObjectURL(file),
                      format: format
                    });
                  }
                  resolve({
                    photos: photos
                  });
                  cleanup();
                });
                input.addEventListener('cancel', function (_e) {
                  reject(new CapacitorException('User cancelled photos app'));
                  cleanup();
                });
              }
              input.accept = 'image/*';
              input.click();
            }
          }, {
            key: "_getCameraPhoto",
            value: function _getCameraPhoto(photo, options) {
              return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                var format = photo.type.split('/')[1];
                if (options.resultType === 'uri') {
                  resolve({
                    webPath: URL.createObjectURL(photo),
                    format: format,
                    saved: false
                  });
                } else {
                  reader.readAsDataURL(photo);
                  reader.onloadend = function () {
                    var r = reader.result;
                    if (options.resultType === 'dataUrl') {
                      resolve({
                        dataUrl: r,
                        format: format,
                        saved: false
                      });
                    } else {
                      resolve({
                        base64String: r.split(',')[1],
                        format: format,
                        saved: false
                      });
                    }
                  };
                  reader.onerror = function (e) {
                    reject(e);
                  };
                }
              });
            }
          }, {
            key: "checkPermissions",
            value: function () {
              var _checkPermissions = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
                var permission;
                return _regeneratorRuntime().wrap(function _callee27$(_context27) {
                  while (1) switch (_context27.prev = _context27.next) {
                    case 0:
                      if (!(typeof navigator === 'undefined' || !navigator.permissions)) {
                        _context27.next = 2;
                        break;
                      }
                      throw this.unavailable('Permissions API not available in this browser');
                    case 2:
                      _context27.prev = 2;
                      _context27.next = 5;
                      return window.navigator.permissions.query({
                        name: 'camera'
                      });
                    case 5:
                      permission = _context27.sent;
                      return _context27.abrupt("return", {
                        camera: permission.state,
                        photos: 'granted'
                      });
                    case 9:
                      _context27.prev = 9;
                      _context27.t0 = _context27["catch"](2);
                      throw this.unavailable('Camera permissions are not available in this browser');
                    case 12:
                    case "end":
                      return _context27.stop();
                  }
                }, _callee27, this, [[2, 9]]);
              }));
              function checkPermissions() {
                return _checkPermissions.apply(this, arguments);
              }
              return checkPermissions;
            }()
          }, {
            key: "requestPermissions",
            value: function () {
              var _requestPermissions = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
                return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                  while (1) switch (_context28.prev = _context28.next) {
                    case 0:
                      throw this.unimplemented('Not implemented on web.');
                    case 1:
                    case "end":
                      return _context28.stop();
                  }
                }, _callee28, this);
              }));
              function requestPermissions() {
                return _requestPermissions.apply(this, arguments);
              }
              return requestPermissions;
            }()
          }, {
            key: "pickLimitedLibraryPhotos",
            value: function () {
              var _pickLimitedLibraryPhotos = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
                return _regeneratorRuntime().wrap(function _callee29$(_context29) {
                  while (1) switch (_context29.prev = _context29.next) {
                    case 0:
                      throw this.unavailable('Not implemented on web.');
                    case 1:
                    case "end":
                      return _context29.stop();
                  }
                }, _callee29, this);
              }));
              function pickLimitedLibraryPhotos() {
                return _pickLimitedLibraryPhotos.apply(this, arguments);
              }
              return pickLimitedLibraryPhotos;
            }()
          }, {
            key: "getLimitedLibraryPhotos",
            value: function () {
              var _getLimitedLibraryPhotos = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
                return _regeneratorRuntime().wrap(function _callee30$(_context30) {
                  while (1) switch (_context30.prev = _context30.next) {
                    case 0:
                      throw this.unavailable('Not implemented on web.');
                    case 1:
                    case "end":
                      return _context30.stop();
                  }
                }, _callee30, this);
              }));
              function getLimitedLibraryPhotos() {
                return _getLimitedLibraryPhotos.apply(this, arguments);
              }
              return getLimitedLibraryPhotos;
            }()
          }]);
        }(WebPlugin);
        new CameraWeb();
        var Camera = registerPlugin('Camera', {
          web: function web() {
            return new CameraWeb();
          }
        });
        window.customElements.define('capacitor-welcome', /*#__PURE__*/function (_HTMLElement) {
          function _class() {
            var _this8;
            _classCallCheck(this, _class);
            _this8 = _callSuper(this, _class);
            SplashScreen.hide();
            var root = _this8.attachShadow({
              mode: 'open'
            });
            root.innerHTML = "\n    <style>\n      :host {\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        display: block;\n        width: 100%;\n        height: 100%;\n      }\n      h1, h2, h3, h4, h5 {\n        text-transform: uppercase;\n      }\n      .button {\n        display: inline-block;\n        padding: 10px;\n        background-color: #73B5F6;\n        color: #fff;\n        font-size: 0.9em;\n        border: 0;\n        border-radius: 3px;\n        text-decoration: none;\n        cursor: pointer;\n      }\n      main {\n        padding: 15px;\n      }\n      main hr { height: 1px; background-color: #eee; border: 0; }\n      main h1 {\n        font-size: 1.4em;\n        text-transform: uppercase;\n        letter-spacing: 1px;\n      }\n      main h2 {\n        font-size: 1.1em;\n      }\n      main h3 {\n        font-size: 0.9em;\n      }\n      main p {\n        color: #333;\n      }\n      main pre {\n        white-space: pre-line;\n      }\n    </style>\n    <div>\n      <capacitor-welcome-titlebar>\n        <h1>Capacitor</h1>\n      </capacitor-welcome-titlebar>\n      <main>\n        <p>\n          Capacitor makes it easy to build powerful apps for the app stores, mobile web (Progressive Web Apps), and desktop, all\n          with a single code base.\n        </p>\n        <h2>Getting Started</h2>\n        <p>\n          You'll probably need a UI framework to build a full-featured app. Might we recommend\n          <a target=\"_blank\" href=\"http://ionicframework.com/\">Ionic</a>?\n        </p>\n        <p>\n          Visit <a href=\"https://capacitorjs.com\">capacitorjs.com</a> for information\n          on using native features, building plugins, and more.\n        </p>\n        <a href=\"https://capacitorjs.com\" target=\"_blank\" class=\"button\">Read more</a>\n        <h2>Tiny Demo</h2>\n        <p>\n          This demo shows how to call Capacitor plugins. Say cheese!\n        </p>\n        <p>\n          <button class=\"button\" id=\"take-photo\">Take Photo</button>\n        </p>\n        <p>\n          <img id=\"image\" style=\"max-width: 100%\">\n        </p>\n      </main>\n    </div>\n    ";
            return _this8;
          }
          _inherits(_class, _HTMLElement);
          return _createClass(_class, [{
            key: "connectedCallback",
            value: function connectedCallback() {
              var self = this;
              self.shadowRoot.querySelector('#take-photo').addEventListener('click', /*#__PURE__*/function () {
                var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(e) {
                  var photo, image;
                  return _regeneratorRuntime().wrap(function _callee31$(_context31) {
                    while (1) switch (_context31.prev = _context31.next) {
                      case 0:
                        _context31.prev = 0;
                        _context31.next = 3;
                        return Camera.getPhoto({
                          resultType: 'uri'
                        });
                      case 3:
                        photo = _context31.sent;
                        image = self.shadowRoot.querySelector('#image');
                        if (image) {
                          _context31.next = 7;
                          break;
                        }
                        return _context31.abrupt("return");
                      case 7:
                        image.src = photo.webPath.replace(window.location.href, ''); // Convert URL to relative path for Monaca debugger
                        _context31.next = 13;
                        break;
                      case 10:
                        _context31.prev = 10;
                        _context31.t0 = _context31["catch"](0);
                        console.warn('User cancelled', _context31.t0);
                      case 13:
                      case "end":
                        return _context31.stop();
                    }
                  }, _callee31, null, [[0, 10]]);
                }));
                return function (_x23) {
                  return _ref12.apply(this, arguments);
                };
              }());
            }
          }]);
        }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
        window.customElements.define('capacitor-welcome-titlebar', /*#__PURE__*/function (_HTMLElement2) {
          function _class2() {
            var _this9;
            _classCallCheck(this, _class2);
            _this9 = _callSuper(this, _class2);
            var root = _this9.attachShadow({
              mode: 'open'
            });
            root.innerHTML = "\n    <style>\n      :host {\n        position: relative;\n        display: block;\n        padding: 15px 15px 15px 15px;\n        text-align: center;\n        background-color: #73B5F6;\n      }\n      ::slotted(h1) {\n        margin: 0;\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-size: 0.9em;\n        font-weight: 600;\n        color: #fff;\n      }\n    </style>\n    <slot></slot>\n    ";
            return _this9;
          }
          _inherits(_class2, _HTMLElement2);
          return _createClass(_class2);
        }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
      }
    };
  });
})();
