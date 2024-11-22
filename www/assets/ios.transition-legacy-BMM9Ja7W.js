;
(function () {
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register(['./index-legacy-DvYIluBj.js'], function (exports, module) {
    'use strict';

    var createAnimation, getIonPageElement;
    return {
      setters: [function (module) {
        createAnimation = module.n;
        getIonPageElement = module.o;
      }],
      execute: function execute() {
        /*!
         * (C) Ionic http://ionicframework.com - MIT License
         */

        var DURATION = 540;
        // TODO(FW-2832): types
        var getClonedElement = function getClonedElement(tagName) {
          return document.querySelector("".concat(tagName, ".ion-cloned-element"));
        };
        var shadow = exports("shadow", function (el) {
          return el.shadowRoot || el;
        });
        var getLargeTitle = function getLargeTitle(refEl) {
          var tabs = refEl.tagName === 'ION-TABS' ? refEl : refEl.querySelector('ion-tabs');
          var query = 'ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large';
          if (tabs != null) {
            var activeTab = tabs.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');
            return activeTab != null ? activeTab.querySelector(query) : null;
          }
          return refEl.querySelector(query);
        };
        var getBackButton = function getBackButton(refEl, backDirection) {
          var tabs = refEl.tagName === 'ION-TABS' ? refEl : refEl.querySelector('ion-tabs');
          var buttonsList = [];
          if (tabs != null) {
            var activeTab = tabs.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');
            if (activeTab != null) {
              buttonsList = activeTab.querySelectorAll('ion-buttons');
            }
          } else {
            buttonsList = refEl.querySelectorAll('ion-buttons');
          }
          var _iterator = _createForOfIteratorHelper(buttonsList),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var buttons = _step.value;
              var parentHeader = buttons.closest('ion-header');
              var activeHeader = parentHeader && !parentHeader.classList.contains('header-collapse-condense-inactive');
              var backButton = buttons.querySelector('ion-back-button');
              var buttonsCollapse = buttons.classList.contains('buttons-collapse');
              var startSlot = buttons.slot === 'start' || buttons.slot === '';
              if (backButton !== null && startSlot && (buttonsCollapse && activeHeader && backDirection || !buttonsCollapse)) {
                return backButton;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return null;
        };
        var createLargeTitleTransition = function createLargeTitleTransition(rootAnimation, rtl, backDirection, enteringEl, leavingEl) {
          var enteringBackButton = getBackButton(enteringEl, backDirection);
          var leavingLargeTitle = getLargeTitle(leavingEl);
          var enteringLargeTitle = getLargeTitle(enteringEl);
          var leavingBackButton = getBackButton(leavingEl, backDirection);
          var shouldAnimationForward = enteringBackButton !== null && leavingLargeTitle !== null && !backDirection;
          var shouldAnimationBackward = enteringLargeTitle !== null && leavingBackButton !== null && backDirection;
          if (shouldAnimationForward) {
            var leavingLargeTitleBox = leavingLargeTitle.getBoundingClientRect();
            var enteringBackButtonBox = enteringBackButton.getBoundingClientRect();
            var enteringBackButtonTextEl = shadow(enteringBackButton).querySelector('.button-text');
            // Text element not rendered if developers pass text="" to the back button
            var enteringBackButtonTextBox = enteringBackButtonTextEl === null || enteringBackButtonTextEl === void 0 ? void 0 : enteringBackButtonTextEl.getBoundingClientRect();
            var leavingLargeTitleTextEl = shadow(leavingLargeTitle).querySelector('.toolbar-title');
            var leavingLargeTitleTextBox = leavingLargeTitleTextEl.getBoundingClientRect();
            animateLargeTitle(rootAnimation, rtl, backDirection, leavingLargeTitle, leavingLargeTitleBox, leavingLargeTitleTextBox, enteringBackButtonBox, enteringBackButtonTextEl, enteringBackButtonTextBox);
            animateBackButton(rootAnimation, rtl, backDirection, enteringBackButton, enteringBackButtonBox, enteringBackButtonTextEl, enteringBackButtonTextBox, leavingLargeTitle, leavingLargeTitleTextBox);
          } else if (shouldAnimationBackward) {
            var enteringLargeTitleBox = enteringLargeTitle.getBoundingClientRect();
            var leavingBackButtonBox = leavingBackButton.getBoundingClientRect();
            var leavingBackButtonTextEl = shadow(leavingBackButton).querySelector('.button-text');
            // Text element not rendered if developers pass text="" to the back button
            var leavingBackButtonTextBox = leavingBackButtonTextEl === null || leavingBackButtonTextEl === void 0 ? void 0 : leavingBackButtonTextEl.getBoundingClientRect();
            var enteringLargeTitleTextEl = shadow(enteringLargeTitle).querySelector('.toolbar-title');
            var enteringLargeTitleTextBox = enteringLargeTitleTextEl.getBoundingClientRect();
            animateLargeTitle(rootAnimation, rtl, backDirection, enteringLargeTitle, enteringLargeTitleBox, enteringLargeTitleTextBox, leavingBackButtonBox, leavingBackButtonTextEl, leavingBackButtonTextBox);
            animateBackButton(rootAnimation, rtl, backDirection, leavingBackButton, leavingBackButtonBox, leavingBackButtonTextEl, leavingBackButtonTextBox, enteringLargeTitle, enteringLargeTitleTextBox);
          }
          return {
            forward: shouldAnimationForward,
            backward: shouldAnimationBackward
          };
        };
        var animateBackButton = function animateBackButton(rootAnimation, rtl, backDirection, backButtonEl, backButtonBox, backButtonTextEl, backButtonTextBox, largeTitleEl, largeTitleTextBox) {
          var _a, _b;
          var BACK_BUTTON_START_OFFSET = rtl ? "calc(100% - ".concat(backButtonBox.right + 4, "px)") : "".concat(backButtonBox.left - 4, "px");
          var TEXT_ORIGIN_X = rtl ? 'right' : 'left';
          var ICON_ORIGIN_X = rtl ? 'left' : 'right';
          var CONTAINER_ORIGIN_X = rtl ? 'right' : 'left';
          var WIDTH_SCALE = 1;
          var HEIGHT_SCALE = 1;
          var TEXT_START_SCALE = "scale(".concat(HEIGHT_SCALE, ")");
          var TEXT_END_SCALE = 'scale(1)';
          if (backButtonTextEl && backButtonTextBox) {
            /**
             * When the title and back button texts match then they should overlap during the
             * page transition. If the texts do not match up then the back button text scale
             * adjusts to not perfectly match the large title text otherwise the proportions
             * will be incorrect. When the texts match we scale both the width and height to
             * account for font weight differences between the title and back button.
             */
            var doTitleAndButtonTextsMatch = ((_a = backButtonTextEl.textContent) === null || _a === void 0 ? void 0 : _a.trim()) === ((_b = largeTitleEl.textContent) === null || _b === void 0 ? void 0 : _b.trim());
            WIDTH_SCALE = largeTitleTextBox.width / backButtonTextBox.width;
            /**
             * Subtract an offset to account for slight sizing/padding differences between the
             * title and the back button.
             */
            HEIGHT_SCALE = (largeTitleTextBox.height - LARGE_TITLE_SIZE_OFFSET) / backButtonTextBox.height;
            /**
             * Even though we set TEXT_START_SCALE to HEIGHT_SCALE above, we potentially need
             * to re-compute this here since the HEIGHT_SCALE may have changed.
             */
            TEXT_START_SCALE = doTitleAndButtonTextsMatch ? "scale(".concat(WIDTH_SCALE, ", ").concat(HEIGHT_SCALE, ")") : "scale(".concat(HEIGHT_SCALE, ")");
          }
          var backButtonIconEl = shadow(backButtonEl).querySelector('ion-icon');
          var backButtonIconBox = backButtonIconEl.getBoundingClientRect();
          /**
           * We need to offset the container by the icon dimensions
           * so that the back button text aligns with the large title
           * text. Otherwise, the back button icon will align with the
           * large title text but the back button text will not.
           */
          var CONTAINER_START_TRANSLATE_X = rtl ? "".concat(backButtonIconBox.width / 2 - (backButtonIconBox.right - backButtonBox.right), "px") : "".concat(backButtonBox.left - backButtonIconBox.width / 2, "px");
          var CONTAINER_END_TRANSLATE_X = rtl ? "-".concat(window.innerWidth - backButtonBox.right, "px") : "".concat(backButtonBox.left, "px");
          /**
           * Back button container should be
           * aligned to the top of the title container
           * so the texts overlap as the back button
           * text begins to fade in.
           */
          var CONTAINER_START_TRANSLATE_Y = "".concat(largeTitleTextBox.top, "px");
          /**
           * The cloned back button should align exactly with the
           * real back button on the entering page otherwise there will
           * be a layout shift.
           */
          var CONTAINER_END_TRANSLATE_Y = "".concat(backButtonBox.top, "px");
          /**
           * In the forward direction, the cloned back button
           * container should translate from over the large title
           * to over the back button. In the backward direction,
           * it should translate from over the back button to over
           * the large title.
           */
          var FORWARD_CONTAINER_KEYFRAMES = [{
            offset: 0,
            transform: "translate3d(".concat(CONTAINER_START_TRANSLATE_X, ", ").concat(CONTAINER_START_TRANSLATE_Y, ", 0)")
          }, {
            offset: 1,
            transform: "translate3d(".concat(CONTAINER_END_TRANSLATE_X, ", ").concat(CONTAINER_END_TRANSLATE_Y, ", 0)")
          }];
          var BACKWARD_CONTAINER_KEYFRAMES = [{
            offset: 0,
            transform: "translate3d(".concat(CONTAINER_END_TRANSLATE_X, ", ").concat(CONTAINER_END_TRANSLATE_Y, ", 0)")
          }, {
            offset: 1,
            transform: "translate3d(".concat(CONTAINER_START_TRANSLATE_X, ", ").concat(CONTAINER_START_TRANSLATE_Y, ", 0)")
          }];
          var CONTAINER_KEYFRAMES = backDirection ? BACKWARD_CONTAINER_KEYFRAMES : FORWARD_CONTAINER_KEYFRAMES;
          /**
           * In the forward direction, the text in the cloned back button
           * should start to be (roughly) the size of the large title
           * and then scale down to be the size of the actual back button.
           * The text should also translate, but that translate is handled
           * by the container keyframes.
           */
          var FORWARD_TEXT_KEYFRAMES = [{
            offset: 0,
            opacity: 0,
            transform: TEXT_START_SCALE
          }, {
            offset: 1,
            opacity: 1,
            transform: TEXT_END_SCALE
          }];
          var BACKWARD_TEXT_KEYFRAMES = [{
            offset: 0,
            opacity: 1,
            transform: TEXT_END_SCALE
          }, {
            offset: 1,
            opacity: 0,
            transform: TEXT_START_SCALE
          }];
          var TEXT_KEYFRAMES = backDirection ? BACKWARD_TEXT_KEYFRAMES : FORWARD_TEXT_KEYFRAMES;
          /**
           * The icon should scale in/out in the second
           * half of the animation. The icon should also
           * translate, but that translate is handled by the
           * container keyframes.
           */
          var FORWARD_ICON_KEYFRAMES = [{
            offset: 0,
            opacity: 0,
            transform: 'scale(0.6)'
          }, {
            offset: 0.6,
            opacity: 0,
            transform: 'scale(0.6)'
          }, {
            offset: 1,
            opacity: 1,
            transform: 'scale(1)'
          }];
          var BACKWARD_ICON_KEYFRAMES = [{
            offset: 0,
            opacity: 1,
            transform: 'scale(1)'
          }, {
            offset: 0.2,
            opacity: 0,
            transform: 'scale(0.6)'
          }, {
            offset: 1,
            opacity: 0,
            transform: 'scale(0.6)'
          }];
          var ICON_KEYFRAMES = backDirection ? BACKWARD_ICON_KEYFRAMES : FORWARD_ICON_KEYFRAMES;
          var enteringBackButtonTextAnimation = createAnimation();
          var enteringBackButtonIconAnimation = createAnimation();
          var enteringBackButtonAnimation = createAnimation();
          var clonedBackButtonEl = getClonedElement('ion-back-button');
          var clonedBackButtonTextEl = shadow(clonedBackButtonEl).querySelector('.button-text');
          var clonedBackButtonIconEl = shadow(clonedBackButtonEl).querySelector('ion-icon');
          clonedBackButtonEl.text = backButtonEl.text;
          clonedBackButtonEl.mode = backButtonEl.mode;
          clonedBackButtonEl.icon = backButtonEl.icon;
          clonedBackButtonEl.color = backButtonEl.color;
          clonedBackButtonEl.disabled = backButtonEl.disabled;
          clonedBackButtonEl.style.setProperty('display', 'block');
          clonedBackButtonEl.style.setProperty('position', 'fixed');
          enteringBackButtonIconAnimation.addElement(clonedBackButtonIconEl);
          enteringBackButtonTextAnimation.addElement(clonedBackButtonTextEl);
          enteringBackButtonAnimation.addElement(clonedBackButtonEl);
          enteringBackButtonAnimation.beforeStyles(_defineProperty({
            position: 'absolute',
            top: '0px'
          }, CONTAINER_ORIGIN_X, '0px'))
          /**
           * The write hooks must be set on this animation as it is guaranteed to run. Other
           * animations such as the back button text animation will not run if the back button
           * has no visible text.
           */.beforeAddWrite(function () {
            backButtonEl.style.setProperty('display', 'none');
            clonedBackButtonEl.style.setProperty(TEXT_ORIGIN_X, BACK_BUTTON_START_OFFSET);
          }).afterAddWrite(function () {
            backButtonEl.style.setProperty('display', '');
            clonedBackButtonEl.style.setProperty('display', 'none');
            clonedBackButtonEl.style.removeProperty(TEXT_ORIGIN_X);
          }).keyframes(CONTAINER_KEYFRAMES);
          enteringBackButtonTextAnimation.beforeStyles({
            'transform-origin': "".concat(TEXT_ORIGIN_X, " top")
          }).keyframes(TEXT_KEYFRAMES);
          enteringBackButtonIconAnimation.beforeStyles({
            'transform-origin': "".concat(ICON_ORIGIN_X, " center")
          }).keyframes(ICON_KEYFRAMES);
          rootAnimation.addAnimation([enteringBackButtonTextAnimation, enteringBackButtonIconAnimation, enteringBackButtonAnimation]);
        };
        var animateLargeTitle = function animateLargeTitle(rootAnimation, rtl, backDirection, largeTitleEl, largeTitleBox, largeTitleTextBox, backButtonBox, backButtonTextEl, backButtonTextBox) {
          var _a, _b;
          /**
           * The horizontal transform origin for the large title
           */
          var ORIGIN_X = rtl ? 'right' : 'left';
          var TITLE_START_OFFSET = rtl ? "calc(100% - ".concat(largeTitleBox.right, "px)") : "".concat(largeTitleBox.left, "px");
          /**
           * The cloned large should align exactly with the
           * real large title on the leaving page otherwise there will
           * be a layout shift.
           */
          var START_TRANSLATE_X = '0px';
          var START_TRANSLATE_Y = "".concat(largeTitleBox.top, "px");
          /**
           * How much to offset the large title translation by.
           * This accounts for differences in sizing between the large
           * title and the back button due to padding and font weight.
           */
          var LARGE_TITLE_TRANSLATION_OFFSET = 8;
          var END_TRANSLATE_X = rtl ? "-".concat(window.innerWidth - backButtonBox.right - LARGE_TITLE_TRANSLATION_OFFSET, "px") : "".concat(backButtonBox.x + LARGE_TITLE_TRANSLATION_OFFSET, "px");
          /**
           * How much to scale the large title up/down by.
           */
          var HEIGHT_SCALE = 0.5;
          /**
           * The large title always starts full size.
           */
          var START_SCALE = 'scale(1)';
          /**
           * By default, we don't worry about having the large title scaled to perfectly
           * match the back button because we don't know if the back button's text matches
           * the large title's text.
           */
          var END_SCALE = "scale(".concat(HEIGHT_SCALE, ")");
          // Text element not rendered if developers pass text="" to the back button
          if (backButtonTextEl && backButtonTextBox) {
            /**
             * The scaled title should (roughly) overlap the back button. This ensures that
             * the back button and title overlap during the animation. Note that since both
             * elements either fade in or fade out over the course of the animation, neither
             * element will be fully visible on top of the other. As a result, the overlap
             * does not need to be perfect, so approximate values are acceptable here.
             */
            END_TRANSLATE_X = rtl ? "-".concat(window.innerWidth - backButtonTextBox.right - LARGE_TITLE_TRANSLATION_OFFSET, "px") : "".concat(backButtonTextBox.x - LARGE_TITLE_TRANSLATION_OFFSET, "px");
            /**
             * In the forward direction, the large title should start at its normal size and
             * then scale down to be (roughly) the size of the back button on the other view.
             * In the backward direction, the large title should start at (roughly) the size
             * of the back button and then scale up to its original size.
             * Note that since both elements either fade in or fade out over the course of the
             * animation, neither element will be fully visible on top of the other. As a result,
             * the overlap  does not need to be perfect, so approximate values are acceptable here.
             */
            /**
             * When the title and back button texts match then they should overlap during the
             * page transition. If the texts do not match up then the large title text scale
             * adjusts to not perfectly match the back button text otherwise the proportions
             * will be incorrect. When the texts match we scale both the width and height to
             * account for font weight differences between the title and back button.
             */
            var doTitleAndButtonTextsMatch = ((_a = backButtonTextEl.textContent) === null || _a === void 0 ? void 0 : _a.trim()) === ((_b = largeTitleEl.textContent) === null || _b === void 0 ? void 0 : _b.trim());
            var WIDTH_SCALE = backButtonTextBox.width / largeTitleTextBox.width;
            HEIGHT_SCALE = backButtonTextBox.height / (largeTitleTextBox.height - LARGE_TITLE_SIZE_OFFSET);
            /**
             * Even though we set TEXT_START_SCALE to HEIGHT_SCALE above, we potentially need
             * to re-compute this here since the HEIGHT_SCALE may have changed.
             */
            END_SCALE = doTitleAndButtonTextsMatch ? "scale(".concat(WIDTH_SCALE, ", ").concat(HEIGHT_SCALE, ")") : "scale(".concat(HEIGHT_SCALE, ")");
          }
          /**
           * The midpoints of the back button and the title should align such that the back
           * button and title appear to be centered with each other.
           */
          var backButtonMidPoint = backButtonBox.top + backButtonBox.height / 2;
          var titleMidPoint = largeTitleBox.height * HEIGHT_SCALE / 2;
          var END_TRANSLATE_Y = "".concat(backButtonMidPoint - titleMidPoint, "px");
          var BACKWARDS_KEYFRAMES = [{
            offset: 0,
            opacity: 0,
            transform: "translate3d(".concat(END_TRANSLATE_X, ", ").concat(END_TRANSLATE_Y, ", 0) ").concat(END_SCALE)
          }, {
            offset: 0.1,
            opacity: 0
          }, {
            offset: 1,
            opacity: 1,
            transform: "translate3d(".concat(START_TRANSLATE_X, ", ").concat(START_TRANSLATE_Y, ", 0) ").concat(START_SCALE)
          }];
          var FORWARDS_KEYFRAMES = [{
            offset: 0,
            opacity: 0.99,
            transform: "translate3d(".concat(START_TRANSLATE_X, ", ").concat(START_TRANSLATE_Y, ", 0) ").concat(START_SCALE)
          }, {
            offset: 0.6,
            opacity: 0
          }, {
            offset: 1,
            opacity: 0,
            transform: "translate3d(".concat(END_TRANSLATE_X, ", ").concat(END_TRANSLATE_Y, ", 0) ").concat(END_SCALE)
          }];
          var KEYFRAMES = backDirection ? BACKWARDS_KEYFRAMES : FORWARDS_KEYFRAMES;
          var clonedTitleEl = getClonedElement('ion-title');
          var clonedLargeTitleAnimation = createAnimation();
          clonedTitleEl.innerText = largeTitleEl.innerText;
          clonedTitleEl.size = largeTitleEl.size;
          clonedTitleEl.color = largeTitleEl.color;
          clonedLargeTitleAnimation.addElement(clonedTitleEl);
          clonedLargeTitleAnimation.beforeStyles(_defineProperty({
            'transform-origin': "".concat(ORIGIN_X, " top"),
            /**
             * Since font size changes will cause
             * the dimension of the large title to change
             * we need to set the cloned title height
             * equal to that of the original large title height.
             */
            height: "".concat(largeTitleBox.height, "px"),
            display: '',
            position: 'relative'
          }, ORIGIN_X, TITLE_START_OFFSET)).beforeAddWrite(function () {
            largeTitleEl.style.setProperty('opacity', '0');
          }).afterAddWrite(function () {
            largeTitleEl.style.setProperty('opacity', '');
            clonedTitleEl.style.setProperty('display', 'none');
          }).keyframes(KEYFRAMES);
          rootAnimation.addAnimation(clonedLargeTitleAnimation);
        };
        var iosTransitionAnimation = exports("iosTransitionAnimation", function (navEl, opts) {
          var _a;
          try {
            var EASING = 'cubic-bezier(0.32,0.72,0,1)';
            var OPACITY = 'opacity';
            var TRANSFORM = 'transform';
            var CENTER = '0%';
            var OFF_OPACITY = 0.8;
            var isRTL = navEl.ownerDocument.dir === 'rtl';
            var OFF_RIGHT = isRTL ? '-99.5%' : '99.5%';
            var OFF_LEFT = isRTL ? '33%' : '-33%';
            var enteringEl = opts.enteringEl;
            var leavingEl = opts.leavingEl;
            var backDirection = opts.direction === 'back';
            var contentEl = enteringEl.querySelector(':scope > ion-content');
            var headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
            var enteringToolBarEls = enteringEl.querySelectorAll(':scope > ion-header > ion-toolbar');
            var rootAnimation = createAnimation();
            var enteringContentAnimation = createAnimation();
            rootAnimation.addElement(enteringEl).duration(((_a = opts.duration) !== null && _a !== void 0 ? _a : 0) || DURATION).easing(opts.easing || EASING).fill('both').beforeRemoveClass('ion-page-invisible');
            // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
            if (leavingEl && navEl !== null && navEl !== undefined) {
              var navDecorAnimation = createAnimation();
              navDecorAnimation.addElement(navEl);
              rootAnimation.addAnimation(navDecorAnimation);
            }
            if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) {
              enteringContentAnimation.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
            } else {
              enteringContentAnimation.addElement(contentEl); // REVIEW
              enteringContentAnimation.addElement(headerEls);
            }
            rootAnimation.addAnimation(enteringContentAnimation);
            if (backDirection) {
              enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")")).fromTo(OPACITY, OFF_OPACITY, 1);
            } else {
              // entering content, forward direction
              enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")"));
            }
            if (contentEl) {
              var enteringTransitionEffectEl = shadow(contentEl).querySelector('.transition-effect');
              if (enteringTransitionEffectEl) {
                var enteringTransitionCoverEl = enteringTransitionEffectEl.querySelector('.transition-cover');
                var enteringTransitionShadowEl = enteringTransitionEffectEl.querySelector('.transition-shadow');
                var enteringTransitionEffect = createAnimation();
                var enteringTransitionCover = createAnimation();
                var enteringTransitionShadow = createAnimation();
                enteringTransitionEffect.addElement(enteringTransitionEffectEl).beforeStyles({
                  opacity: '1',
                  display: 'block'
                }).afterStyles({
                  opacity: '',
                  display: ''
                });
                enteringTransitionCover.addElement(enteringTransitionCoverEl) // REVIEW
                .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0, 0.1);
                enteringTransitionShadow.addElement(enteringTransitionShadowEl) // REVIEW
                .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.03, 0.7);
                enteringTransitionEffect.addAnimation([enteringTransitionCover, enteringTransitionShadow]);
                enteringContentAnimation.addAnimation([enteringTransitionEffect]);
              }
            }
            var enteringContentHasLargeTitle = enteringEl.querySelector('ion-header.header-collapse-condense');
            var _createLargeTitleTran = createLargeTitleTransition(rootAnimation, isRTL, backDirection, enteringEl, leavingEl),
              forward = _createLargeTitleTran.forward,
              backward = _createLargeTitleTran.backward;
            enteringToolBarEls.forEach(function (enteringToolBarEl) {
              var enteringToolBar = createAnimation();
              enteringToolBar.addElement(enteringToolBarEl);
              rootAnimation.addAnimation(enteringToolBar);
              var enteringTitle = createAnimation();
              enteringTitle.addElement(enteringToolBarEl.querySelector('ion-title')); // REVIEW
              var enteringToolBarButtons = createAnimation();
              var buttons = Array.from(enteringToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
              var parentHeader = enteringToolBarEl.closest('ion-header');
              var inactiveHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.classList.contains('header-collapse-condense-inactive');
              var buttonsToAnimate;
              if (backDirection) {
                buttonsToAnimate = buttons.filter(function (button) {
                  var isCollapseButton = button.classList.contains('buttons-collapse');
                  return isCollapseButton && !inactiveHeader || !isCollapseButton;
                });
              } else {
                buttonsToAnimate = buttons.filter(function (button) {
                  return !button.classList.contains('buttons-collapse');
                });
              }
              enteringToolBarButtons.addElement(buttonsToAnimate);
              var enteringToolBarItems = createAnimation();
              enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
              var enteringToolBarBg = createAnimation();
              enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector('.toolbar-background')); // REVIEW
              var enteringBackButton = createAnimation();
              var backButtonEl = enteringToolBarEl.querySelector('ion-back-button');
              if (backButtonEl) {
                enteringBackButton.addElement(backButtonEl);
              }
              enteringToolBar.addAnimation([enteringTitle, enteringToolBarButtons, enteringToolBarItems, enteringToolBarBg, enteringBackButton]);
              enteringToolBarButtons.fromTo(OPACITY, 0.01, 1);
              enteringToolBarItems.fromTo(OPACITY, 0.01, 1);
              if (backDirection) {
                if (!inactiveHeader) {
                  enteringTitle.fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")")).fromTo(OPACITY, 0.01, 1);
                }
                enteringToolBarItems.fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")"));
                // back direction, entering page has a back button
                enteringBackButton.fromTo(OPACITY, 0.01, 1);
              } else {
                // entering toolbar, forward direction
                if (!enteringContentHasLargeTitle) {
                  enteringTitle.fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")")).fromTo(OPACITY, 0.01, 1);
                }
                enteringToolBarItems.fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")"));
                enteringToolBarBg.beforeClearStyles([OPACITY, 'transform']);
                var translucentHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.translucent;
                if (!translucentHeader) {
                  enteringToolBarBg.fromTo(OPACITY, 0.01, 'var(--opacity)');
                } else {
                  enteringToolBarBg.fromTo('transform', isRTL ? 'translateX(-100%)' : 'translateX(100%)', 'translateX(0px)');
                }
                // forward direction, entering page has a back button
                if (!forward) {
                  enteringBackButton.fromTo(OPACITY, 0.01, 1);
                }
                if (backButtonEl && !forward) {
                  var enteringBackBtnText = createAnimation();
                  enteringBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
                  .fromTo("transform", isRTL ? 'translateX(-100px)' : 'translateX(100px)', 'translateX(0px)');
                  enteringToolBar.addAnimation(enteringBackBtnText);
                }
              }
            });
            // setup leaving view
            if (leavingEl) {
              var leavingContent = createAnimation();
              var leavingContentEl = leavingEl.querySelector(':scope > ion-content');
              var leavingToolBarEls = leavingEl.querySelectorAll(':scope > ion-header > ion-toolbar');
              var leavingHeaderEls = leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
              if (!leavingContentEl && leavingToolBarEls.length === 0 && leavingHeaderEls.length === 0) {
                leavingContent.addElement(leavingEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
              } else {
                leavingContent.addElement(leavingContentEl); // REVIEW
                leavingContent.addElement(leavingHeaderEls);
              }
              rootAnimation.addAnimation(leavingContent);
              if (backDirection) {
                // leaving content, back direction
                leavingContent.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? 'translateX(-100%)' : 'translateX(100%)');
                var leavingPage = getIonPageElement(leavingEl);
                rootAnimation.afterAddWrite(function () {
                  if (rootAnimation.getDirection() === 'normal') {
                    leavingPage.style.setProperty('display', 'none');
                  }
                });
              } else {
                // leaving content, forward direction
                leavingContent.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).fromTo(OPACITY, 1, OFF_OPACITY);
              }
              if (leavingContentEl) {
                var leavingTransitionEffectEl = shadow(leavingContentEl).querySelector('.transition-effect');
                if (leavingTransitionEffectEl) {
                  var leavingTransitionCoverEl = leavingTransitionEffectEl.querySelector('.transition-cover');
                  var leavingTransitionShadowEl = leavingTransitionEffectEl.querySelector('.transition-shadow');
                  var leavingTransitionEffect = createAnimation();
                  var leavingTransitionCover = createAnimation();
                  var leavingTransitionShadow = createAnimation();
                  leavingTransitionEffect.addElement(leavingTransitionEffectEl).beforeStyles({
                    opacity: '1',
                    display: 'block'
                  }).afterStyles({
                    opacity: '',
                    display: ''
                  });
                  leavingTransitionCover.addElement(leavingTransitionCoverEl) // REVIEW
                  .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.1, 0);
                  leavingTransitionShadow.addElement(leavingTransitionShadowEl) // REVIEW
                  .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.7, 0.03);
                  leavingTransitionEffect.addAnimation([leavingTransitionCover, leavingTransitionShadow]);
                  leavingContent.addAnimation([leavingTransitionEffect]);
                }
              }
              leavingToolBarEls.forEach(function (leavingToolBarEl) {
                var leavingToolBar = createAnimation();
                leavingToolBar.addElement(leavingToolBarEl);
                var leavingTitle = createAnimation();
                leavingTitle.addElement(leavingToolBarEl.querySelector('ion-title')); // REVIEW
                var leavingToolBarButtons = createAnimation();
                var buttons = leavingToolBarEl.querySelectorAll('ion-buttons,[menuToggle]');
                var parentHeader = leavingToolBarEl.closest('ion-header');
                var inactiveHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.classList.contains('header-collapse-condense-inactive');
                var buttonsToAnimate = Array.from(buttons).filter(function (button) {
                  var isCollapseButton = button.classList.contains('buttons-collapse');
                  return isCollapseButton && !inactiveHeader || !isCollapseButton;
                });
                leavingToolBarButtons.addElement(buttonsToAnimate);
                var leavingToolBarItems = createAnimation();
                var leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');
                if (leavingToolBarItemEls.length > 0) {
                  leavingToolBarItems.addElement(leavingToolBarItemEls);
                }
                var leavingToolBarBg = createAnimation();
                leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector('.toolbar-background')); // REVIEW
                var leavingBackButton = createAnimation();
                var backButtonEl = leavingToolBarEl.querySelector('ion-back-button');
                if (backButtonEl) {
                  leavingBackButton.addElement(backButtonEl);
                }
                leavingToolBar.addAnimation([leavingTitle, leavingToolBarButtons, leavingToolBarItems, leavingBackButton, leavingToolBarBg]);
                rootAnimation.addAnimation(leavingToolBar);
                // fade out leaving toolbar items
                leavingBackButton.fromTo(OPACITY, 0.99, 0);
                leavingToolBarButtons.fromTo(OPACITY, 0.99, 0);
                leavingToolBarItems.fromTo(OPACITY, 0.99, 0);
                if (backDirection) {
                  if (!inactiveHeader) {
                    // leaving toolbar, back direction
                    leavingTitle.fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? 'translateX(-100%)' : 'translateX(100%)').fromTo(OPACITY, 0.99, 0);
                  }
                  leavingToolBarItems.fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? 'translateX(-100%)' : 'translateX(100%)');
                  leavingToolBarBg.beforeClearStyles([OPACITY, 'transform']);
                  // leaving toolbar, back direction, and there's no entering toolbar
                  // should just slide out, no fading out
                  var translucentHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.translucent;
                  if (!translucentHeader) {
                    leavingToolBarBg.fromTo(OPACITY, 'var(--opacity)', 0);
                  } else {
                    leavingToolBarBg.fromTo('transform', 'translateX(0px)', isRTL ? 'translateX(-100%)' : 'translateX(100%)');
                  }
                  if (backButtonEl && !backward) {
                    var leavingBackBtnText = createAnimation();
                    leavingBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
                    .fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat((isRTL ? -124 : 124) + 'px', ")"));
                    leavingToolBar.addAnimation(leavingBackBtnText);
                  }
                } else {
                  // leaving toolbar, forward direction
                  if (!inactiveHeader) {
                    leavingTitle.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).fromTo(OPACITY, 0.99, 0).afterClearStyles([TRANSFORM, OPACITY]);
                  }
                  leavingToolBarItems.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).afterClearStyles([TRANSFORM, OPACITY]);
                  leavingBackButton.afterClearStyles([OPACITY]);
                  leavingTitle.afterClearStyles([OPACITY]);
                  leavingToolBarButtons.afterClearStyles([OPACITY]);
                }
              });
            }
            return rootAnimation;
          } catch (err) {
            throw err;
          }
        });
        /**
         * The scale of the back button during the animation
         * is computed based on the scale of the large title
         * and vice versa. However, we need to account for slight
         * variations in the size of the large title due to
         * padding and font weight. This value should be used to subtract
         * a small amount from the large title height when computing scales
         * to get more accurate scale results.
         */
        var LARGE_TITLE_SIZE_OFFSET = 10;
      }
    };
  });
})();
