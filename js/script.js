var contactButton = document.querySelector(".contacts .button");
var contactModal = document.querySelector(".contact-modal");
var contactInputName = document.querySelector(".name-input");
var contactClose = document.querySelector(".modal-close-button");

var contactForm = document.querySelector(".contact-form");
var contactTextarea = document.querySelector(".contact-modal .textarea");
var contactName = document.querySelector(".contact-modal .input[name='name']");
var contactEmail = document.querySelector(".contact-modal .input[name='email']");

var mapButton = document.querySelector(".contacts-map");
var mapModal = document.querySelector(".map-modal");
var mapClose = document.querySelector(".map-modal .modal-close-button")

var localStorageSupport = true;
var savedName = "";
var savedEmail = "";

try {
  savedName = localStorage.getItem("name");
  savedEmail = localStorage.getItem("email");
} catch (error) {
  localStorageSupport = false;
};

contactButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactModal.classList.add("modal-show");
  contactInputName.focus();

  if (localStorage) {
  contactName.value = savedName;
  contactEmail.value = savedEmail;
  };
} );

contactClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactModal.classList.remove("modal-show");
} );

contactForm.addEventListener("submit", function(evt) {
  if (!contactTextarea.value) {
    evt.preventDefault();
    contactTextarea.classList.remove  ("form-required-animation");
    contactTextarea.offsetWidth = contactTextarea.offsetWidth;
    contactTextarea.classList.add("form-required-animation");
    contactTextarea.focus();
  };
  // имя и почту пытаемся сохранить в любом случае
  if (localStorageSupport) {
    localStorage.setItem("name", contactName.value);
    localStorage.setItem("email", contactEmail.value);
  };
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    contactModal.classList.remove("modal-show");
    mapModal.classList.remove("modal-show");
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