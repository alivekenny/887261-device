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
var mapClose = document.querySelector(".map-modal .modal-close-button");

var localStorageSupport = true;
var savedName = "";
var savedEmail = "";

// MODALS

var slider = document.querySelector(".slider");
var sliderButton = document.querySelector(".slider-button");


var slider1 = document.querySelector(".slider-1");
var slider2 = document.querySelector(".slider-2");
var slider3 = document.querySelector(".slider-3");

var sliderButton1 = document.querySelector(".slider-button-1");
var sliderButton2 = document.querySelector(".slider-button-2");
var sliderButton3 = document.querySelector(".slider-button-3");

var serviceButton1 = document.querySelector(".service-tabs li:nth-child(1) .button");
var serviceButton2 = document.querySelector(".service-tabs li:nth-child(2) .button");
var serviceButton3 = document.querySelector(".service-tabs li:nth-child(3) .button");

var serviceDescription1 = document.querySelector(".service-description-1");
var serviceDescription2 = document.querySelector(".service-description-2");
var serviceDescription3 = document.querySelector(".service-description-3");

try {
  savedName = localStorage.getItem("name");
  savedEmail = localStorage.getItem("email");
} catch (error) {
  localStorageSupport = false;
};

serviceButton1.addEventListener("click", function(evt) {
  evt.preventDefault();
  serviceDescription1.classList.add("service-current");
  serviceDescription2.classList.remove("service-current");
  serviceDescription3.classList.remove("service-current");
  serviceButton1.classList.add("button-current");
  serviceButton2.classList.remove("button-current");
  serviceButton3.classList.remove("button-current");
});

serviceButton2.addEventListener("click", function(evt) {
  evt.preventDefault();
  serviceDescription1.classList.remove("service-current");
  serviceDescription2.classList.add("service-current");
  serviceDescription3.classList.remove("service-current");
  serviceButton1.classList.remove("button-current");
  serviceButton2.classList.add("button-current");
  serviceButton3.classList.remove("button-current");
});

serviceButton3.addEventListener("click", function(evt) {
  evt.preventDefault();
  serviceDescription1.classList.remove("service-current");
  serviceDescription2.classList.remove("service-current");
  serviceDescription3.classList.add("service-current");
  serviceButton1.classList.remove("button-current");
  serviceButton2.classList.remove("button-current");
  serviceButton3.classList.add("button-current");
});

sliderButton1.addEventListener("click", function(evt) {
  evt.preventDefault(); 
  slider1.classList.add("slider-current");
  slider2.classList.remove("slider-current");
  slider3.classList.remove("slider-current");
  sliderButton1.classList.add("slider-button-current");
  sliderButton2.classList.remove("slider-button-current");
  sliderButton3.classList.remove("slider-button-current");
});

sliderButton2.addEventListener("click", function(evt) {
  evt.preventDefault(); 
  slider1.classList.remove("slider-current");
  slider2.classList.add("slider-current");
  slider3.classList.remove("slider-current");
  sliderButton1.classList.remove("slider-button-current");
  sliderButton2.classList.add("slider-button-current");
  sliderButton3.classList.remove("slider-button-current");
});

sliderButton3.addEventListener("click", function(evt) {
  evt.preventDefault(); 
  slider1.classList.remove("slider-current");
  slider2.classList.remove("slider-current");
  slider3.classList.add("slider-current");
  sliderButton1.classList.remove("slider-button-current");
  sliderButton2.classList.remove("slider-button-current");
  sliderButton3.classList.add("slider-button-current");
});

contactButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactModal.classList.add("modal-show");
  contactInputName.focus();

  if (localStorage) {
  contactName.value = savedName;
  contactEmail.value = savedEmail;
  };
});

contactClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactModal.classList.remove("modal-show");
});

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
  mapModal.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
});