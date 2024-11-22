;
(function () {
  System.register(['./index-legacy-CXiy0Dv5.js'], function (exports, module) {
    'use strict';

    var getIonPageElement, createAnimation;
    return {
      setters: [function (module) {
        getIonPageElement = module.o;
        createAnimation = module.n;
      }],
      execute: function execute() {
        /*!
         * (C) Ionic http://ionicframework.com - MIT License
         */

        var mdTransitionAnimation = exports("mdTransitionAnimation", function (_, opts) {
          var _a, _b, _c;
          var OFF_BOTTOM = '40px';
          var CENTER = '0px';
          var backDirection = opts.direction === 'back';
          var enteringEl = opts.enteringEl;
          var leavingEl = opts.leavingEl;
          var ionPageElement = getIonPageElement(enteringEl);
          var enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
          var rootTransition = createAnimation();
          rootTransition.addElement(ionPageElement).fill('both').beforeRemoveClass('ion-page-invisible');
          // animate the component itself
          if (backDirection) {
            rootTransition.duration(((_a = opts.duration) !== null && _a !== void 0 ? _a : 0) || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
          } else {
            rootTransition.duration(((_b = opts.duration) !== null && _b !== void 0 ? _b : 0) || 280).easing('cubic-bezier(0.36,0.66,0.04,1)').fromTo('transform', "translateY(".concat(OFF_BOTTOM, ")"), "translateY(".concat(CENTER, ")")).fromTo('opacity', 0.01, 1);
          }
          // Animate toolbar if it's there
          if (enteringToolbarEle) {
            var enteringToolBar = createAnimation();
            enteringToolBar.addElement(enteringToolbarEle);
            rootTransition.addAnimation(enteringToolBar);
          }
          // setup leaving view
          if (leavingEl && backDirection) {
            // leaving content
            rootTransition.duration(((_c = opts.duration) !== null && _c !== void 0 ? _c : 0) || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
            var leavingPage = createAnimation();
            leavingPage.addElement(getIonPageElement(leavingEl)).onFinish(function (currentStep) {
              if (currentStep === 1 && leavingPage.elements.length > 0) {
                leavingPage.elements[0].style.setProperty('display', 'none');
              }
            }).fromTo('transform', "translateY(".concat(CENTER, ")"), "translateY(".concat(OFF_BOTTOM, ")")).fromTo('opacity', 1, 0);
            rootTransition.addAnimation(leavingPage);
          }
          return rootTransition;
        });
      }
    };
  });
})();
