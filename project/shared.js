var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");

// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
      // Have to set it to block then add the class so the animations can take place
    modal.style.display = "block";
    setTimeout(function() {
        modal.classList.add("open");
      }, 10);
    backdrop.style.display = "block";
    setTimeout(function() {
      backdrop.classList.add("open");
    }, 10);
  });
}

backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  if (modal) {
    //Have to remove class so animations can take place then set to none
    modal.classList.remove("open");
    setTimeout(function() {
        modal.style.display = "none";
      }, 200);
  }
  backdrop.classList.remove("open");
  setTimeout(function() {
    backdrop.style.display = "none";
  }, 200);
}

toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10);
});

//Listens to animation events
ctaButton.addEventListener('animationstart', function(event) {
  console.log('Animation started', event);
});
ctaButton.addEventListener('animationend', function(event) {
  console.log('Animation Ended', event);
});
ctaButton.addEventListener('animationiteration', function(event) {
  console.log('Animation Looping', event);
});