'use strict';

var app = app || {};

function popUpHandler() {

    // Get elements
    var modalBg = document.getElementById('modal');
    var modalBtn = document.getElementsByClassName('btnFront')[0];
    var closeBtnIcon = document.getElementsByClassName('modal__closeIcon')[0];
    var cancelBtn = document.getElementsByClassName('btn_cancel')[0];
    var uninstallBtn = document.getElementsByClassName('btn_uninstall')[0];

    // Listen open click event
    modalBtn.addEventListener('click', sendOpenModalPopupEvent);

    // Listen close click event on icon
    closeBtnIcon.addEventListener('click', sendCloseModalPopupEvent);

    // Listen close click event on cancel btn
    cancelBtn.addEventListener('click', sendCloseModalPopupEvent);

    // Listen for click outside
    window.addEventListener('click', outsideClick);

    // Listen close click event on uninstall btn
    uninstallBtn.addEventListener('click', uninstall);

    document.addEventListener('close-modal-popup', function (event) {
        delayCloseModal(event.detail);
    });

    document.addEventListener('open-modal-popup', function (event) {
        delayOpenModal(event.detail);
    });

    // Custom Events

    function sendCloseModalPopupEvent() {
        var event = new CustomEvent("close-modal-popup", { detail: 'uninstall_popup' });
        document.dispatchEvent(event);
    }

    function sendOpenModalPopupEvent() {
        var event = new CustomEvent("open-modal-popup", { detail: 'uninstall_popup' });
        document.dispatchEvent(event);
    }


    // Open Popup Behavior

    function delayOpenModal(popupName) {

        setTimeout(function () {
            openModal(popupName);
        }, 600)
    }

    function openModal(popupName) {

        var popupEl = document.getElementsByClassName(popupName)[0];
        if (!popupEl) {
            return;
        }

        toggleClass(modalBg, 'hidden', 'open');
        toggleClass(popupEl, 'hidden', 'open');
    }

    // Close Popup Behavior

    function delayCloseModal(popupName) {

        closeModal(popupName);

        setTimeout(function () {
            toggleClass(modalBg, 'open', 'hidden');
        }, 500);

    }

    function closeModal(popupName) {

        var popupEl = document.getElementsByClassName(popupName)[0];
        if (!popupEl) {
            return;
        }

        toggleClass(popupEl, 'open', 'hidden');
    }

    // Background click handler

    function outsideClick(e) {
        e.preventDefault();
        if (e.target === modalBg) {
            // Create the event
            sendCloseModalPopupEvent();
        }
    }

    // Uninstall behavior

    function uninstall(e) {
        e.preventDefault();
        return new Promise((resolve) => {
            sendCloseModalPopupEvent();
            setTimeout(() => resolve(), 450);
        }).then(showAlert);
    }

    function showAlert() {
        alert("Done");
    }

    // Auxiliary functions

    function toggleClass(el, currentClass, nextClass) {
        if (el.classList.contains(currentClass)) {
            el.classList.remove(currentClass);
            el.classList.add(nextClass);
        }
    }

}
