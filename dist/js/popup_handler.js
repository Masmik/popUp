'use strict';

var app = app || {};

app.popUpHandler = function () {
  var modalBg, modalBtn, closeBtnIcon, cancelBtn, uninstallBtn; // Custom Events

  var sendCloseModalPopupEvent = function sendCloseModalPopupEvent() {
    var event = new CustomEvent("close-modal-popup", {
      detail: 'uninstall_popup'
    });
    document.dispatchEvent(event);
  };

  var sendOpenModalPopupEvent = function sendOpenModalPopupEvent() {
    var event = new CustomEvent("open-modal-popup", {
      detail: 'uninstall_popup'
    });
    document.dispatchEvent(event);
  }; // Open Popup Behavior


  var delayOpenModal = function delayOpenModal(popupName) {
    setTimeout(function () {
      openModal(popupName);
    }, 600);
  };

  var openModal = function openModal(popupName) {
    var popupEl = document.getElementsByClassName(popupName)[0];

    if (!popupEl) {
      return;
    }

    toggleClass(modalBg, 'hidden', 'open');
    toggleClass(popupEl, 'hidden', 'open');
  }; // Close Popup Behavior


  var delayCloseModal = function delayCloseModal(popupName) {
    closeModal(popupName);
    setTimeout(function () {
      toggleClass(modalBg, 'open', 'hidden');
    }, 500);
  };

  var closeModal = function closeModal(popupName) {
    var popupEl = document.getElementsByClassName(popupName)[0];

    if (!popupEl) {
      return;
    }

    toggleClass(popupEl, 'open', 'hidden');
  }; // Background click handler


  var outsideClick = function outsideClick(e) {
    e.preventDefault();

    if (e.target === modalBg) {
      // Create the event
      sendCloseModalPopupEvent();
    }
  }; // Uninstall behavior


  var uninstall = function uninstall(e) {
    e.preventDefault();
    return new Promise(function (resolve) {
      sendCloseModalPopupEvent();
      setTimeout(function () {
        return resolve();
      }, 450);
    }).then(showAlert);
  };

  var showAlert = function showAlert() {
    alert("Done");
  }; // Auxiliary functions


  var toggleClass = function toggleClass(el, currentClass, nextClass) {
    if (el.classList.contains(currentClass)) {
      el.classList.remove(currentClass);
      el.classList.add(nextClass);
    }
  };

  var init = function init() {
    // Get elements
    modalBg = document.getElementById('modal');
    modalBtn = document.getElementsByClassName('btnFront')[0];
    closeBtnIcon = document.getElementsByClassName('modal__closeIcon')[0];
    cancelBtn = document.getElementsByClassName('btn_cancel')[0];
    uninstallBtn = document.getElementsByClassName('btn_uninstall')[0]; // Listen open click event

    modalBtn.addEventListener('click', sendOpenModalPopupEvent); // Listen close click event on icon

    closeBtnIcon.addEventListener('click', sendCloseModalPopupEvent); // Listen close click event on cancel btn

    cancelBtn.addEventListener('click', sendCloseModalPopupEvent); // Listen for click outside

    window.addEventListener('click', outsideClick); // Listen close click event on uninstall btn

    uninstallBtn.addEventListener('click', uninstall);
    document.addEventListener('close-modal-popup', function (event) {
      delayCloseModal(event.detail);
    });
    document.addEventListener('open-modal-popup', function (event) {
      delayOpenModal(event.detail);
    });
  };

  return {
    init: init
  };
}();