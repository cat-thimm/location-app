;
(function () {
  System.register(['./index-legacy-CXiy0Dv5.js'], function (exports, module) {
    'use strict';

    var isRTL, createGesture, clamp;
    return {
      setters: [function (module) {
        isRTL = module.i;
        createGesture = module.c;
        clamp = module.a;
      }],
      execute: function execute() {
        /*!
         * (C) Ionic http://ionicframework.com - MIT License
         */

        var createSwipeBackGesture = exports("createSwipeBackGesture", function (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) {
          var win = el.ownerDocument.defaultView;
          var rtl = isRTL(el);
          /**
           * Determine if a gesture is near the edge
           * of the screen. If true, then the swipe
           * to go back gesture should proceed.
           */
          var isAtEdge = function isAtEdge(detail) {
            var threshold = 50;
            var startX = detail.startX;
            if (rtl) {
              return startX >= win.innerWidth - threshold;
            }
            return startX <= threshold;
          };
          var getDeltaX = function getDeltaX(detail) {
            return rtl ? -detail.deltaX : detail.deltaX;
          };
          var getVelocityX = function getVelocityX(detail) {
            return rtl ? -detail.velocityX : detail.velocityX;
          };
          var canStart = function canStart(detail) {
            /**
             * The user's locale can change mid-session,
             * so we need to check text direction at
             * the beginning of every gesture.
             */
            rtl = isRTL(el);
            return isAtEdge(detail) && canStartHandler();
          };
          var onMove = function onMove(detail) {
            // set the transition animation's progress
            var delta = getDeltaX(detail);
            var stepValue = delta / win.innerWidth;
            onMoveHandler(stepValue);
          };
          var onEnd = function onEnd(detail) {
            // the swipe back gesture has ended
            var delta = getDeltaX(detail);
            var width = win.innerWidth;
            var stepValue = delta / width;
            var velocity = getVelocityX(detail);
            var z = width / 2.0;
            var shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
            var missing = shouldComplete ? 1 - stepValue : stepValue;
            var missingDistance = missing * width;
            var realDur = 0;
            if (missingDistance > 5) {
              var dur = missingDistance / Math.abs(velocity);
              realDur = Math.min(dur, 540);
            }
            onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : clamp(0, stepValue, 0.9999), realDur);
          };
          return createGesture({
            el: el,
            gestureName: 'goback-swipe',
            /**
             * Swipe to go back should have priority over other horizontal swipe
             * gestures. These gestures have a priority of 100 which is why 101 was chosen here.
             */
            gesturePriority: 101,
            threshold: 10,
            canStart: canStart,
            onStart: onStartHandler,
            onMove: onMove,
            onEnd: onEnd
          });
        });
      }
    };
  });
})();
