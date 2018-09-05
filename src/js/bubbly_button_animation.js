var app = app || {};

app.bubbleAnimation = function () {

    var animateButton = function (e) {
        e.preventDefault();

        // Reset animation
        e.target.classList.remove('animate');

        e.target.classList.add('animate');
        setTimeout(function () {
            e.target.classList.remove('animate');
        }, 700);
    };

    var init = function () {
        var bubblyButtons = document.getElementsByClassName("btn_bubbly");

        for (var i = 0; i < bubblyButtons.length; i++) {
            bubblyButtons[i].addEventListener('click', animateButton, false);
        }
    };

    return {
        init: init
    }
}();


