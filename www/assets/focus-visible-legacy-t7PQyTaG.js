;
(function () {
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        /*!
         * (C) Ionic http://ionicframework.com - MIT License
         */
        var ION_FOCUSED = 'ion-focused';
        var ION_FOCUSABLE = 'ion-focusable';
        var FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
        var startFocusVisible = exports("startFocusVisible", function (rootEl) {
          var currentFocus = [];
          var keyboardMode = true;
          var ref = rootEl ? rootEl.shadowRoot : document;
          var root = rootEl ? rootEl : document.body;
          var setFocus = function setFocus(elements) {
            currentFocus.forEach(function (el) {
              return el.classList.remove(ION_FOCUSED);
            });
            elements.forEach(function (el) {
              return el.classList.add(ION_FOCUSED);
            });
            currentFocus = elements;
          };
          var pointerDown = function pointerDown() {
            keyboardMode = false;
            setFocus([]);
          };
          var onKeydown = function onKeydown(ev) {
            keyboardMode = FOCUS_KEYS.includes(ev.key);
            if (!keyboardMode) {
              setFocus([]);
            }
          };
          var onFocusin = function onFocusin(ev) {
            if (keyboardMode && ev.composedPath !== undefined) {
              var toFocus = ev.composedPath().filter(function (el) {
                // TODO(FW-2832): type
                if (el.classList) {
                  return el.classList.contains(ION_FOCUSABLE);
                }
                return false;
              });
              setFocus(toFocus);
            }
          };
          var onFocusout = function onFocusout() {
            if (ref.activeElement === root) {
              setFocus([]);
            }
          };
          ref.addEventListener('keydown', onKeydown);
          ref.addEventListener('focusin', onFocusin);
          ref.addEventListener('focusout', onFocusout);
          ref.addEventListener('touchstart', pointerDown, {
            passive: true
          });
          ref.addEventListener('mousedown', pointerDown);
          var destroy = function destroy() {
            ref.removeEventListener('keydown', onKeydown);
            ref.removeEventListener('focusin', onFocusin);
            ref.removeEventListener('focusout', onFocusout);
            ref.removeEventListener('touchstart', pointerDown);
            ref.removeEventListener('mousedown', pointerDown);
          };
          return {
            destroy: destroy,
            setFocus: setFocus
          };
        });
      }
    };
  });
})();
