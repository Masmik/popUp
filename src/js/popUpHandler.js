'use strict';

function popUpHandler() {
    // Get elements
    var modal = document.getElementById('modalBlock');
    var modalBtn = document.getElementById('modalBtn');
    var closeBtnIcon = document.getElementsByClassName('modal__closeBtn')[0];
    var cancelBtn = document.getElementsByClassName('modal__button_cancel')[0];
    var uninstallBtn = document.getElementsByClassName('modal__button_uninstall')[0];

    console.log(uninstallBtn);

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

        modal.style.display = 'block';
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';

    }

    // Function to close modal if outside click
    function outsideClick(e) {
        e.preventDefault();
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Function to uninstall
    function uninstall(e) {
        e.preventDefault();
        return new Promise((resolve) => {
            closeModal();
            setTimeout(() => resolve(), 300);
        }).then(showAlert);
    }


// Function to show alert
    function showAlert() {
        alert("Done");
    }

}
