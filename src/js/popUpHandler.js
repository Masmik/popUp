'use strict';

function popUpHandler() {
    // Get elements
    var modal = document.getElementById('modal');
    var modalBtn = document.getElementById('btnFront');
    var closeBtnIcon = document.getElementsByClassName('modal__closeIcon')[0];
    var cancelBtn = document.getElementsByClassName('btn__container_cancel')[0];
    var uninstallBtn = document.getElementsByClassName('btn__container_uninstall')[0];


    // Listen for open click
    modalBtn.addEventListener('click', openModal);

    // Listen for close icon click
    closeBtnIcon.addEventListener('click', closeModal);

    // Listen for cancel button click
    cancelBtn.addEventListener('click', closeModal);

    // Listen for outside click
    window.addEventListener('click', outsideClick);

    // Listen for uninstall button click
    uninstallBtn.addEventListener('click', uninstall);

    // Function to open modal
    function openModal() {
        toggleClass('hidden', 'open');
    }

    // Function to close modal
    function closeModal() {
        toggleClass('open', 'hidden');
    }

    // Function toggle class
    function toggleClass(currentClass, netxClass) {
        if (modal.classList.contains(currentClass)) {
            modal.classList.remove(currentClass);
            setTimeout(function () {
                modal.classList.add(netxClass);
            }, 450);

            // modal.classList.add(netxClass);
        }
    }

    // Function to close modal if outside click
    function outsideClick(e) {
        e.preventDefault();
        if (e.target === modal) {
            toggleClass('open', 'hidden');
            // modal.style.display = 'none';
        }
    }

    // Function to uninstall
    function uninstall(e) {
        e.preventDefault();
        return new Promise((resolve) => {
            closeModal();
            setTimeout(() => resolve(), 450);
        }).then(showAlert);
    }


// Function to show alert
    function showAlert() {
        alert("Done");
    }
}
