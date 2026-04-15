/* effects.js — Aceternity-inspired vanilla effects for Rossignol
   Card Spotlight: tracks mouse position within each card and
   exposes --mouse-x / --mouse-y as CSS custom properties,
   consumed by the ::before radial-gradient in custom.css. */

(function () {
  'use strict';

  function initCardSpotlight() {
    var cards = document.querySelectorAll(
      '.step-card, .deadline-card, .output-item, .service-card'
    );

    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--mouse-y', (e.clientY - rect.top)  + 'px');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCardSpotlight);
  } else {
    initCardSpotlight();
  }

}());
