"use strict";

// Back to top arrow

let toTopArrow = document.querySelector(".to-top-arrow");

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Image modal window

const roomImages = [...document.querySelectorAll(".room-images")];
const popup = document.querySelector(".popup");
const largeImage = document.querySelector(".large-image");
const overlay = document.querySelector(".overlay");

// Popup overlay
roomImages.forEach((image, imageCounter) => {
  image.addEventListener("click", () => {
    updateImage(imageCounter);
    popup.classList.toggle("active");
    popup.classList.add("overlay");
  });
});
// Popup image on click
const updateImage = (imageCounter) => {
  let path = `img/Rooms/room-${imageCounter + 1}.jpg`;
  largeImage.src = path;
};

// Close popup and remove overlay

const closePopup = function () {
  popup.classList.remove("overlay");
  popup.classList.remove("active");
};
popup.addEventListener("click", closePopup);

// TODO Room gallery overlay function with closing popup
