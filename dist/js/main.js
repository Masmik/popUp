'use strict';

var app = app || {};

function ready() {
  app.popUpHandler.init();
  app.bubbleAnimation.init();
}

document.addEventListener("DOMContentLoaded", ready);