'use strict';

var app = app || {};

function ready() {
    popUpHandler();
    app.bubbleAnimation.init();
}

document.addEventListener("DOMContentLoaded", ready);
