let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');
let cancelButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

for(var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

if(cancelButton) {
    cancelButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});

function closeModal() {
    if(modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});