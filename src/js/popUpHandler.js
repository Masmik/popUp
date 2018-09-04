'use strict';

function popUpHandler() {
    // Get elements
    var contentBlock = document.getElementsByClassName('contentBlock')[0];
    console.log(contentBlock);
    

    var modal = document.getElementById('modalBlock');
    var modalBtn = document.getElementById('modalBtn');
    var closeBtnIcon = document.getElementsByClassName('modal__closeBtn')[0];
    var cancelBtn = document.getElementsByClassName('modal__button_cancel')[0];
    var uninstallBtn = document.getElementsByClassName('button_uninstall')[0];

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
        toggleClass('is-hidden', 'open');
    }

    // Function to close modal
    function closeModal() {
        toggleClass('open','is-hidden');
    }

    // Function toggle class
    function toggleClass(currentClass, netxClass){
        if(modal.classList.contains(currentClass)){
            modal.classList.remove(currentClass);
            modal.classList.add(netxClass);
        }
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
