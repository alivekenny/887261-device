var contactButton = document.querySelector(".contacts .button");
var contactModal = document.querySelector(".contact-modal");
var contactInputName = document.querySelector(".name-input");
var contactClose = document.querySelector(".modal-close-button");

var contactForm = document.querySelector(".contact-form");
var contactTextarea = document.querySelector(".contact-modal .textarea");

var mapButton = document.querySelector(".contacts-map");
var mapModal = document.querySelector(".map-modal");
var mapClose = document.querySelector(".map-modal .modal-close-button")

contactButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactModal.classList.add("modal-show");
  contactInputName.focus();
} );

contactClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactModal.classList.remove("modal-show");
} );

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    contactModal.classList.remove("modal-show");
  }
});

mapButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show")
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
} );

contactForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  contactTextarea.classList.remove  ("form-required-animation");
  contactTextarea.offsetWidth = contactTextarea.offsetWidth;
  contactTextarea.classList.add("form-required-animation");
  contactTextarea.focus();
});