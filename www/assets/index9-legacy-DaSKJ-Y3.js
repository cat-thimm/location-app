;
(function () {
  System.register(['./index-legacy-DvYIluBj.js'], function (exports, module) {
    'use strict';

    var doc, pointerCoord;
    return {
      setters: [function (module) {
        doc = module.d;
        pointerCoord = module.p;
      }],
      execute: function execute() {
        /*!
         * (C) Ionic http://ionicframework.com - MIT License
         */

        var startTapClick = exports("startTapClick", function (config) {
          if (doc === undefined) {
            return;
          }
          var lastActivated = 0;
          var activatableEle;
          var activeRipple;
          var activeDefer;
          var useRippleEffect = config.getBoolean('animated', true) && config.getBoolean('rippleEffect', true);
          var clearDefers = new WeakMap();
          var cancelActive = function cancelActive() {
            if (activeDefer) clearTimeout(activeDefer);
            activeDefer = undefined;
            if (activatableEle) {
              removeActivated(false);
              activatableEle = undefined;
            }
          };
          var pointerDown = function pointerDown(ev) {
            // Ignore right clicks
            if (activatableEle || ev.button === 2) {
              return;
            }
            setActivatedElement(getActivatableTarget(ev), ev);
          };
          var pointerUp = function pointerUp(ev) {
            setActivatedElement(undefined, ev);
          };
          var setActivatedElement = function setActivatedElement(el, ev) {
            // do nothing
            if (el && el === activatableEle) {
              return;
            }
            if (activeDefer) clearTimeout(activeDefer);
            activeDefer = undefined;
            var _pointerCoord = pointerCoord(ev),
              x = _pointerCoord.x,
              y = _pointerCoord.y;
            // deactivate selected
            if (activatableEle) {
              if (clearDefers.has(activatableEle)) {
                throw new Error('internal error');
              }
              if (!activatableEle.classList.contains(ACTIVATED)) {
                addActivated(activatableEle, x, y);
              }
              removeActivated(true);
            }
            // activate
            if (el) {
              var deferId = clearDefers.get(el);
              if (deferId) {
                clearTimeout(deferId);
                clearDefers.delete(el);
              }
              el.classList.remove(ACTIVATED);
              var callback = function callback() {
                addActivated(el, x, y);
                activeDefer = undefined;
              };
              if (isInstant(el)) {
                callback();
              } else {
                activeDefer = setTimeout(callback, ADD_ACTIVATED_DEFERS);
              }
            }
            activatableEle = el;
          };
          var addActivated = function addActivated(el, x, y) {
            lastActivated = Date.now();
            el.classList.add(ACTIVATED);
            if (!useRippleEffect) return;
            var rippleEffect = getRippleEffect(el);
            if (rippleEffect !== null) {
              removeRipple();
              activeRipple = rippleEffect.addRipple(x, y);
            }
          };
          var removeRipple = function removeRipple() {
            if (activeRipple !== undefined) {
              activeRipple.then(function (remove) {
                return remove();
              });
              activeRipple = undefined;
            }
          };
          var removeActivated = function removeActivated(smooth) {
            removeRipple();
            var active = activatableEle;
            if (!active) {
              return;
            }
            var time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;
            if (smooth && time > 0 && !isInstant(active)) {
              var deferId = setTimeout(function () {
                active.classList.remove(ACTIVATED);
                clearDefers.delete(active);
              }, CLEAR_STATE_DEFERS);
              clearDefers.set(active, deferId);
            } else {
              active.classList.remove(ACTIVATED);
            }
          };
          doc.addEventListener('ionGestureCaptured', cancelActive);
          doc.addEventListener('pointerdown', pointerDown, true);
          doc.addEventListener('pointerup', pointerUp, true);
          /**
           * Tap click effects such as the ripple effect should
           * not happen when scrolling. For example, if a user scrolls
           * the page but also happens to do a touchstart on a button
           * as part of the scroll, the ripple effect should not
           * be dispatched. The ripple effect should only happen
           * if the button is activated and the page is not scrolling.
           *
           * pointercancel is dispatched on a gesture when scrolling
           * starts, so this lets us avoid having to listen for
           * ion-content's scroll events.
           */
          doc.addEventListener('pointercancel', cancelActive, true);
        });
        // TODO(FW-2832): type
        var getActivatableTarget = function getActivatableTarget(ev) {
          if (ev.composedPath !== undefined) {
            /**
             * composedPath returns EventTarget[]. However,
             * objects other than Element can be targets too.
             * For example, AudioContext can be a target. In this
             * case, we know that the event is a UIEvent so we
             * can assume that the path will contain either Element
             * or ShadowRoot.
             */
            var path = ev.composedPath();
            for (var i = 0; i < path.length - 2; i++) {
              var el = path[i];
              if (!(el instanceof ShadowRoot) && el.classList.contains('ion-activatable')) {
                return el;
              }
            }
          } else {
            return ev.target.closest('.ion-activatable');
          }
        };
        var isInstant = function isInstant(el) {
          return el.classList.contains('ion-activatable-instant');
        };
        var getRippleEffect = function getRippleEffect(el) {
          if (el.shadowRoot) {
            var ripple = el.shadowRoot.querySelector('ion-ripple-effect');
            if (ripple) {
              return ripple;
            }
          }
          return el.querySelector('ion-ripple-effect');
        };
        var ACTIVATED = 'ion-activated';
        var ADD_ACTIVATED_DEFERS = 100;
        var CLEAR_STATE_DEFERS = 150;
      }
    };
  });
})();
