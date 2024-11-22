;
(function () {
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  System.register(['./index-legacy-CXiy0Dv5.js'], function (exports, module) {
    'use strict';

    var doc, Keyboard, addEventListener, removeEventListener, componentOnReady, findClosestIonContent, KeyboardResize, win, raf, getScrollElement, scrollByPoint;
    return {
      setters: [function (module) {
        doc = module.d;
        Keyboard = module.K;
        addEventListener = module.e;
        removeEventListener = module.g;
        componentOnReady = module.b;
        findClosestIonContent = module.f;
        KeyboardResize = module.h;
        win = module.j;
        raf = module.k;
        getScrollElement = module.l;
        scrollByPoint = module.m;
      }],
      execute: function execute() {
        /*!
         * (C) Ionic http://ionicframework.com - MIT License
         */

        var cloneMap = new WeakMap();
        var relocateInput = function relocateInput(componentEl, inputEl, shouldRelocate) {
          var inputRelativeY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var disabledClonedInput = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          if (cloneMap.has(componentEl) === shouldRelocate) {
            return;
          }
          if (shouldRelocate) {
            addClone(componentEl, inputEl, inputRelativeY, disabledClonedInput);
          } else {
            removeClone(componentEl, inputEl);
          }
        };
        var isFocused = function isFocused(input) {
          /**
           * https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode
           * Calling getRootNode on an element in standard web page will return HTMLDocument.
           * Calling getRootNode on an element inside of the Shadow DOM will return the associated ShadowRoot.
           * Calling getRootNode on an element that is not attached to a document/shadow tree will return
           * the root of the DOM tree it belongs to.
           * isFocused is used for the hide-caret utility which only considers input/textarea elements
           * that are present in the DOM, so we don't set types for that final case since it does not apply.
           */
          return input === input.getRootNode().activeElement;
        };
        var addClone = function addClone(componentEl, inputEl, inputRelativeY) {
          var disabledClonedInput = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          // this allows for the actual input to receive the focus from
          // the user's touch event, but before it receives focus, it
          // moves the actual input to a location that will not screw
          // up the app's layout, and does not allow the native browser
          // to attempt to scroll the input into place (messing up headers/footers)
          // the cloned input fills the area of where native input should be
          // while the native input fakes out the browser by relocating itself
          // before it receives the actual focus event
          // We hide the focused input (with the visible caret) invisible by making it scale(0),
          var parentEl = inputEl.parentNode;
          // DOM WRITES
          var clonedEl = inputEl.cloneNode(false);
          clonedEl.classList.add('cloned-input');
          clonedEl.tabIndex = -1;
          /**
           * Making the cloned input disabled prevents
           * Chrome for Android from still scrolling
           * the entire page since this cloned input
           * will briefly be hidden by the keyboard
           * even though it is not focused.
           *
           * This is not needed on iOS. While this
           * does not cause functional issues on iOS,
           * the input still appears slightly dimmed even
           * if we set opacity: 1.
           */
          if (disabledClonedInput) {
            clonedEl.disabled = true;
          }
          parentEl.appendChild(clonedEl);
          cloneMap.set(componentEl, clonedEl);
          var doc = componentEl.ownerDocument;
          var tx = doc.dir === 'rtl' ? 9999 : -9999;
          componentEl.style.pointerEvents = 'none';
          inputEl.style.transform = "translate3d(".concat(tx, "px,").concat(inputRelativeY, "px,0) scale(0)");
        };
        var removeClone = function removeClone(componentEl, inputEl) {
          var clone = cloneMap.get(componentEl);
          if (clone) {
            cloneMap.delete(componentEl);
            clone.remove();
          }
          componentEl.style.pointerEvents = '';
          inputEl.style.transform = '';
        };
        /**
         * Factoring in 50px gives us some room
         * in case the keyboard shows password/autofill bars
         * asynchronously.
         */
        var SCROLL_AMOUNT_PADDING = 50;
        var enableHideCaretOnScroll = function enableHideCaretOnScroll(componentEl, inputEl, scrollEl) {
          if (!scrollEl || !inputEl) {
            return function () {
              return;
            };
          }
          var scrollHideCaret = function scrollHideCaret(shouldHideCaret) {
            if (isFocused(inputEl)) {
              relocateInput(componentEl, inputEl, shouldHideCaret);
            }
          };
          var onBlur = function onBlur() {
            return relocateInput(componentEl, inputEl, false);
          };
          var hideCaret = function hideCaret() {
            return scrollHideCaret(true);
          };
          var showCaret = function showCaret() {
            return scrollHideCaret(false);
          };
          addEventListener(scrollEl, 'ionScrollStart', hideCaret);
          addEventListener(scrollEl, 'ionScrollEnd', showCaret);
          inputEl.addEventListener('blur', onBlur);
          return function () {
            removeEventListener(scrollEl, 'ionScrollStart', hideCaret);
            removeEventListener(scrollEl, 'ionScrollEnd', showCaret);
            inputEl.removeEventListener('blur', onBlur);
          };
        };
        var SKIP_SELECTOR = 'input, textarea, [no-blur], [contenteditable]';
        var enableInputBlurring = function enableInputBlurring() {
          var focused = true;
          var didScroll = false;
          var doc = document;
          var onScroll = function onScroll() {
            didScroll = true;
          };
          var onFocusin = function onFocusin() {
            focused = true;
          };
          var onTouchend = function onTouchend(ev) {
            // if app did scroll return early
            if (didScroll) {
              didScroll = false;
              return;
            }
            var active = doc.activeElement;
            if (!active) {
              return;
            }
            // only blur if the active element is a text-input or a textarea
            if (active.matches(SKIP_SELECTOR)) {
              return;
            }
            // if the selected target is the active element, do not blur
            var tapped = ev.target;
            if (tapped === active) {
              return;
            }
            if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
              return;
            }
            focused = false;
            // TODO FW-2796: find a better way, why 50ms?
            setTimeout(function () {
              if (!focused) {
                active.blur();
              }
            }, 50);
          };
          addEventListener(doc, 'ionScrollStart', onScroll);
          doc.addEventListener('focusin', onFocusin, true);
          doc.addEventListener('touchend', onTouchend, false);
          return function () {
            removeEventListener(doc, 'ionScrollStart', onScroll, true);
            doc.removeEventListener('focusin', onFocusin, true);
            doc.removeEventListener('touchend', onTouchend, false);
          };
        };
        var SCROLL_ASSIST_SPEED = 0.3;
        var getScrollData = function getScrollData(componentEl, contentEl, keyboardHeight, platformHeight) {
          var _a;
          var itemEl = (_a = componentEl.closest('ion-item,[ion-item]')) !== null && _a !== void 0 ? _a : componentEl;
          return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, platformHeight);
        };
        var calcScrollData = function calcScrollData(inputRect, contentRect, keyboardHeight, platformHeight) {
          // compute input's Y values relative to the body
          var inputTop = inputRect.top;
          var inputBottom = inputRect.bottom;
          // compute visible area
          var visibleAreaTop = contentRect.top;
          var visibleAreaBottom = Math.min(contentRect.bottom, platformHeight - keyboardHeight);
          // compute safe area
          var safeAreaTop = visibleAreaTop + 15;
          var safeAreaBottom = visibleAreaBottom - SCROLL_AMOUNT_PADDING;
          // figure out if each edge of the input is within the safe area
          var distanceToBottom = safeAreaBottom - inputBottom;
          var distanceToTop = safeAreaTop - inputTop;
          // desiredScrollAmount is the negated distance to the safe area according to our calculations.
          var desiredScrollAmount = Math.round(distanceToBottom < 0 ? -distanceToBottom : distanceToTop > 0 ? -distanceToTop : 0);
          // our calculations make some assumptions that aren't always true, like the keyboard being closed when an input
          // gets focus, so make sure we don't scroll the input above the visible area
          var scrollAmount = Math.min(desiredScrollAmount, inputTop - visibleAreaTop);
          var distance = Math.abs(scrollAmount);
          var duration = distance / SCROLL_ASSIST_SPEED;
          var scrollDuration = Math.min(400, Math.max(150, duration));
          return {
            scrollAmount: scrollAmount,
            scrollDuration: scrollDuration,
            scrollPadding: keyboardHeight,
            inputSafeY: -(inputTop - safeAreaTop) + 4
          };
        };
        var PADDING_TIMER_KEY = '$ionPaddingTimer';
        /**
         * Scroll padding adds additional padding to the bottom
         * of ion-content so that there is enough scroll space
         * for an input to be scrolled above the keyboard. This
         * is needed in environments where the webview does not
         * resize when the keyboard opens.
         *
         * Example: If an input at the bottom of ion-content is
         * focused, there is no additional scrolling space below
         * it, so the input cannot be scrolled above the keyboard.
         * Scroll padding fixes this by adding padding equal to the
         * height of the keyboard to the bottom of the content.
         *
         * Common environments where this is needed:
         * - Mobile Safari: The keyboard overlays the content
         * - Capacitor/Cordova on iOS: The keyboard overlays the content
         * when the KeyboardResize mode is set to 'none'.
         */
        var setScrollPadding = function setScrollPadding(contentEl, paddingAmount, clearCallback) {
          var timer = contentEl[PADDING_TIMER_KEY];
          if (timer) {
            clearTimeout(timer);
          }
          if (paddingAmount > 0) {
            contentEl.style.setProperty('--keyboard-offset', "".concat(paddingAmount, "px"));
          } else {
            contentEl[PADDING_TIMER_KEY] = setTimeout(function () {
              contentEl.style.setProperty('--keyboard-offset', '0px');
              if (clearCallback) {
                clearCallback();
              }
            }, 120);
          }
        };
        /**
         * When an input is about to be focused,
         * set a timeout to clear any scroll padding
         * on the content. Note: The clearing
         * is done on a timeout so that if users
         * are moving focus from one input to the next
         * then re-adding scroll padding to the new
         * input with cancel the timeout to clear the
         * scroll padding.
         */
        var setClearScrollPaddingListener = function setClearScrollPaddingListener(inputEl, contentEl, doneCallback) {
          var clearScrollPadding = function clearScrollPadding() {
            if (contentEl) {
              setScrollPadding(contentEl, 0, doneCallback);
            }
          };
          inputEl.addEventListener('focusout', clearScrollPadding, {
            once: true
          });
        };
        var currentPadding = 0;
        var SKIP_SCROLL_ASSIST = 'data-ionic-skip-scroll-assist';
        var enableScrollAssist = function enableScrollAssist(componentEl, inputEl, contentEl, footerEl, keyboardHeight, enableScrollPadding, keyboardResize) {
          var disableClonedInput = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
          /**
           * Scroll padding should only be added if:
           * 1. The global scrollPadding config option
           * is set to true.
           * 2. The native keyboard resize mode is either "none"
           * (keyboard overlays webview) or undefined (resize
           * information unavailable)
           * Resize info is available on Capacitor 4+
           */
          var addScrollPadding = enableScrollPadding && (keyboardResize === undefined || keyboardResize.mode === KeyboardResize.None);
          /**
           * This tracks whether or not the keyboard has been
           * presented for a single focused text field. Note
           * that it does not track if the keyboard is open
           * in general such as if the keyboard is open for
           * a different focused text field.
           */
          var hasKeyboardBeenPresentedForTextField = false;
          /**
           * When adding scroll padding we need to know
           * how much of the viewport the keyboard obscures.
           * We do this by subtracting the keyboard height
           * from the platform height.
           *
           * If we compute this value when switching between
           * inputs then the webview may already be resized.
           * At this point, `win.innerHeight` has already accounted
           * for the keyboard meaning we would then subtract
           * the keyboard height again. This will result in the input
           * being scrolled more than it needs to.
           */
          var platformHeight = win !== undefined ? win.innerHeight : 0;
          /**
           * Scroll assist is run when a text field
           * is focused. However, it may need to
           * re-run when the keyboard size changes
           * such that the text field is now hidden
           * underneath the keyboard.
           * This function re-runs scroll assist
           * when that happens.
           *
           * One limitation of this is on a web browser
           * where native keyboard APIs do not have cross-browser
           * support. `ionKeyboardDidShow` relies on the Visual Viewport API.
           * This means that if the keyboard changes but does not change
           * geometry, then scroll assist will not re-run even if
           * the user has scrolled the text field under the keyboard.
           * This is not a problem when running in Cordova/Capacitor
           * because `ionKeyboardDidShow` uses the native events
           * which fire every time the keyboard changes.
           */
          var keyboardShow = function keyboardShow(ev) {
            /**
             * If the keyboard has not yet been presented
             * for this text field then the text field has just
             * received focus. In that case, the focusin listener
             * will run scroll assist.
             */
            if (hasKeyboardBeenPresentedForTextField === false) {
              hasKeyboardBeenPresentedForTextField = true;
              return;
            }
            /**
             * Otherwise, the keyboard has already been presented
             * for the focused text field.
             * This means that the keyboard likely changed
             * geometry, and we need to re-run scroll assist.
             * This can happen when the user rotates their device
             * or when they switch keyboards.
             *
             * Make sure we pass in the computed keyboard height
             * rather than the estimated keyboard height.
             *
             * Since the keyboard is already open then we do not
             * need to wait for the webview to resize, so we pass
             * "waitForResize: false".
             */
            jsSetFocus(componentEl, inputEl, contentEl, footerEl, ev.detail.keyboardHeight, addScrollPadding, disableClonedInput, platformHeight, false);
          };
          /**
           * Reset the internal state when the text field loses focus.
           */
          var _focusOut = function focusOut() {
            hasKeyboardBeenPresentedForTextField = false;
            win === null || win === void 0 ? void 0 : win.removeEventListener('ionKeyboardDidShow', keyboardShow);
            componentEl.removeEventListener('focusout', _focusOut);
          };
          /**
           * When the input is about to receive
           * focus, we need to move it to prevent
           * mobile Safari from adjusting the viewport.
           */
          var focusIn = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!inputEl.hasAttribute(SKIP_SCROLL_ASSIST)) {
                      _context.next = 3;
                      break;
                    }
                    inputEl.removeAttribute(SKIP_SCROLL_ASSIST);
                    return _context.abrupt("return");
                  case 3:
                    jsSetFocus(componentEl, inputEl, contentEl, footerEl, keyboardHeight, addScrollPadding, disableClonedInput, platformHeight);
                    win === null || win === void 0 ? void 0 : win.addEventListener('ionKeyboardDidShow', keyboardShow);
                    componentEl.addEventListener('focusout', _focusOut);
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function focusIn() {
              return _ref.apply(this, arguments);
            };
          }();
          componentEl.addEventListener('focusin', focusIn);
          return function () {
            componentEl.removeEventListener('focusin', focusIn);
            win === null || win === void 0 ? void 0 : win.removeEventListener('ionKeyboardDidShow', keyboardShow);
            componentEl.removeEventListener('focusout', _focusOut);
          };
        };
        /**
         * Use this function when you want to manually
         * focus an input but not have scroll assist run again.
         */
        var setManualFocus = function setManualFocus(el) {
          /**
           * If element is already focused then
           * a new focusin event will not be dispatched
           * to remove the SKIL_SCROLL_ASSIST attribute.
           */
          if (document.activeElement === el) {
            return;
          }
          el.setAttribute(SKIP_SCROLL_ASSIST, 'true');
          el.focus();
        };
        var jsSetFocus = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(componentEl, inputEl, contentEl, footerEl, keyboardHeight, enableScrollPadding) {
            var disableClonedInput,
              platformHeight,
              waitForResize,
              scrollData,
              scrollContentTimeout,
              _scrollContent,
              _doubleKeyboardEventListener,
              scrollEl,
              totalScrollAmount,
              _args3 = arguments;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  disableClonedInput = _args3.length > 6 && _args3[6] !== undefined ? _args3[6] : false;
                  platformHeight = _args3.length > 7 && _args3[7] !== undefined ? _args3[7] : 0;
                  waitForResize = _args3.length > 8 && _args3[8] !== undefined ? _args3[8] : true;
                  if (!(!contentEl && !footerEl)) {
                    _context3.next = 5;
                    break;
                  }
                  return _context3.abrupt("return");
                case 5:
                  scrollData = getScrollData(componentEl, contentEl || footerEl, keyboardHeight, platformHeight);
                  if (!(contentEl && Math.abs(scrollData.scrollAmount) < 4)) {
                    _context3.next = 10;
                    break;
                  }
                  // the text input is in a safe position that doesn't
                  // require it to be scrolled into view, just set focus now
                  setManualFocus(inputEl);
                  /**
                   * Even though the input does not need
                   * scroll assist, we should preserve the
                   * the scroll padding as users could be moving
                   * focus from an input that needs scroll padding
                   * to an input that does not need scroll padding.
                   * If we remove the scroll padding now, users will
                   * see the page jump.
                   */
                  if (enableScrollPadding && contentEl !== null) {
                    setScrollPadding(contentEl, currentPadding);
                    setClearScrollPaddingListener(inputEl, contentEl, function () {
                      return currentPadding = 0;
                    });
                  }
                  return _context3.abrupt("return");
                case 10:
                  // temporarily move the focus to the focus holder so the browser
                  // doesn't freak out while it's trying to get the input in place
                  // at this point the native text input still does not have focus
                  relocateInput(componentEl, inputEl, true, scrollData.inputSafeY, disableClonedInput);
                  setManualFocus(inputEl);
                  /**
                   * Relocating/Focusing input causes the
                   * click event to be cancelled, so
                   * manually fire one here.
                   */
                  raf(function () {
                    return componentEl.click();
                  });
                  /**
                   * If enabled, we can add scroll padding to
                   * the bottom of the content so that scroll assist
                   * has enough room to scroll the input above
                   * the keyboard.
                   */
                  if (enableScrollPadding && contentEl) {
                    currentPadding = scrollData.scrollPadding;
                    setScrollPadding(contentEl, currentPadding);
                  }
                  if (!(typeof window !== 'undefined')) {
                    _context3.next = 27;
                    break;
                  }
                  _scrollContent = /*#__PURE__*/function () {
                    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            // clean up listeners and timeouts
                            if (scrollContentTimeout !== undefined) {
                              clearTimeout(scrollContentTimeout);
                            }
                            window.removeEventListener('ionKeyboardDidShow', _doubleKeyboardEventListener);
                            window.removeEventListener('ionKeyboardDidShow', _scrollContent);
                            // scroll the input into place
                            if (!contentEl) {
                              _context2.next = 6;
                              break;
                            }
                            _context2.next = 6;
                            return scrollByPoint(contentEl, 0, scrollData.scrollAmount, scrollData.scrollDuration);
                          case 6:
                            // the scroll view is in the correct position now
                            // give the native text input focus
                            relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);
                            // ensure this is the focused input
                            setManualFocus(inputEl);
                            /**
                             * When the input is about to be blurred
                             * we should set a timeout to remove
                             * any scroll padding.
                             */
                            if (enableScrollPadding) {
                              setClearScrollPaddingListener(inputEl, contentEl, function () {
                                return currentPadding = 0;
                              });
                            }
                          case 9:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2);
                    }));
                    return function scrollContent() {
                      return _ref3.apply(this, arguments);
                    };
                  }();
                  _doubleKeyboardEventListener = function doubleKeyboardEventListener() {
                    window.removeEventListener('ionKeyboardDidShow', _doubleKeyboardEventListener);
                    window.addEventListener('ionKeyboardDidShow', _scrollContent);
                  };
                  if (!contentEl) {
                    _context3.next = 26;
                    break;
                  }
                  _context3.next = 20;
                  return getScrollElement(contentEl);
                case 20:
                  scrollEl = _context3.sent;
                  /**
                   * scrollData will only consider the amount we need
                   * to scroll in order to properly bring the input
                   * into view. It will not consider the amount
                   * we can scroll in the content element.
                   * As a result, scrollData may request a greater
                   * scroll position than is currently available
                   * in the DOM. If this is the case, we need to
                   * wait for the webview to resize/the keyboard
                   * to show in order for additional scroll
                   * bandwidth to become available.
                   */
                  totalScrollAmount = scrollEl.scrollHeight - scrollEl.clientHeight;
                  if (!(waitForResize && scrollData.scrollAmount > totalScrollAmount - scrollEl.scrollTop)) {
                    _context3.next = 26;
                    break;
                  }
                  /**
                   * On iOS devices, the system will show a "Passwords" bar above the keyboard
                   * after the initial keyboard is shown. This prevents the webview from resizing
                   * until the "Passwords" bar is shown, so we need to wait for that to happen first.
                   */
                  if (inputEl.type === 'password') {
                    // Add 50px to account for the "Passwords" bar
                    scrollData.scrollAmount += SCROLL_AMOUNT_PADDING;
                    window.addEventListener('ionKeyboardDidShow', _doubleKeyboardEventListener);
                  } else {
                    window.addEventListener('ionKeyboardDidShow', _scrollContent);
                  }
                  /**
                   * This should only fire in 2 instances:
                   * 1. The app is very slow.
                   * 2. The app is running in a browser on an old OS
                   * that does not support Ionic Keyboard Events
                   */
                  scrollContentTimeout = setTimeout(_scrollContent, 1000);
                  return _context3.abrupt("return");
                case 26:
                  _scrollContent();
                case 27:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return function jsSetFocus(_x, _x2, _x3, _x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
          };
        }();
        var INPUT_BLURRING = true;
        var startInputShims = exports("startInputShims", /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(config, platform) {
            var isIOS, isAndroid, keyboardHeight, scrollAssist, hideCaret, inputBlurring, scrollPadding, inputs, hideCaretMap, scrollAssistMap, keyboardResizeMode, registerInput, unregisterInput, _i, _inputs, input;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(doc === undefined)) {
                    _context5.next = 2;
                    break;
                  }
                  return _context5.abrupt("return");
                case 2:
                  isIOS = platform === 'ios';
                  isAndroid = platform === 'android';
                  /**
                   * Hide Caret and Input Blurring are needed on iOS.
                   * Scroll Assist and Scroll Padding are needed on iOS and Android
                   * with Chrome web browser (not Chrome webview).
                   */
                  keyboardHeight = config.getNumber('keyboardHeight', 290);
                  scrollAssist = config.getBoolean('scrollAssist', true);
                  hideCaret = config.getBoolean('hideCaretOnScroll', isIOS);
                  /**
                   * The team is evaluating if inputBlurring is still needed. As a result
                   * this feature is disabled by default as of Ionic 8.0. Developers are
                   * able to re-enable it temporarily. The team may remove this utility
                   * if it is determined that doing so would not bring any adverse side effects.
                   * TODO FW-6014 remove input blurring utility (including implementation)
                   */
                  inputBlurring = config.getBoolean('inputBlurring', false);
                  scrollPadding = config.getBoolean('scrollPadding', true);
                  inputs = Array.from(doc.querySelectorAll('ion-input, ion-textarea'));
                  hideCaretMap = new WeakMap();
                  scrollAssistMap = new WeakMap();
                  /**
                   * Grab the native keyboard resize configuration
                   * and pass it to scroll assist. Scroll assist requires
                   * that we adjust the input right before the input
                   * is about to be focused. If we called `Keyboard.getResizeMode`
                   * on focusin in scroll assist, we could potentially adjust the
                   * input too late since this call is async.
                   */
                  _context5.next = 14;
                  return Keyboard.getResizeMode();
                case 14:
                  keyboardResizeMode = _context5.sent;
                  registerInput = /*#__PURE__*/function () {
                    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(componentEl) {
                      var inputRoot, inputEl, scrollEl, footerEl, rmFn, isDateInput, _rmFn;
                      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                        while (1) switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return new Promise(function (resolve) {
                              return componentOnReady(componentEl, resolve);
                            });
                          case 2:
                            inputRoot = componentEl.shadowRoot || componentEl;
                            inputEl = inputRoot.querySelector('input') || inputRoot.querySelector('textarea');
                            scrollEl = findClosestIonContent(componentEl);
                            footerEl = !scrollEl ? componentEl.closest('ion-footer') : null;
                            if (inputEl) {
                              _context4.next = 8;
                              break;
                            }
                            return _context4.abrupt("return");
                          case 8:
                            if (!!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
                              rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
                              hideCaretMap.set(componentEl, rmFn);
                            }
                            /**
                             * date/datetime-locale inputs on mobile devices show date picker
                             * overlays instead of keyboards. As a result, scroll assist is
                             * not needed. This also works around a bug in iOS <16 where
                             * scroll assist causes the browser to lock up. See FW-1997.
                             */
                            isDateInput = inputEl.type === 'date' || inputEl.type === 'datetime-local';
                            if (!isDateInput && (!!scrollEl || !!footerEl) && scrollAssist && !scrollAssistMap.has(componentEl)) {
                              _rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, footerEl, keyboardHeight, scrollPadding, keyboardResizeMode, isAndroid);
                              scrollAssistMap.set(componentEl, _rmFn);
                            }
                          case 11:
                          case "end":
                            return _context4.stop();
                        }
                      }, _callee4);
                    }));
                    return function registerInput(_x9) {
                      return _ref5.apply(this, arguments);
                    };
                  }();
                  unregisterInput = function unregisterInput(componentEl) {
                    if (hideCaret) {
                      var fn = hideCaretMap.get(componentEl);
                      if (fn) {
                        fn();
                      }
                      hideCaretMap.delete(componentEl);
                    }
                    if (scrollAssist) {
                      var _fn = scrollAssistMap.get(componentEl);
                      if (_fn) {
                        _fn();
                      }
                      scrollAssistMap.delete(componentEl);
                    }
                  };
                  if (inputBlurring && INPUT_BLURRING) {
                    enableInputBlurring();
                  }
                  // Input might be already loaded in the DOM before ion-device-hacks did.
                  // At this point we need to look for all of the inputs not registered yet
                  // and register them.
                  for (_i = 0, _inputs = inputs; _i < _inputs.length; _i++) {
                    input = _inputs[_i];
                    registerInput(input);
                  }
                  doc.addEventListener('ionInputDidLoad', function (ev) {
                    registerInput(ev.detail);
                  });
                  doc.addEventListener('ionInputDidUnload', function (ev) {
                    unregisterInput(ev.detail);
                  });
                case 21:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));
          return function (_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      }
    };
  });
})();
