"use strict";

// Back to top arrow

let toTopArrow = document.querySelector(".to-top-arrow");

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Hamburger

const hamburger = document.querySelector(".hamburger");
const navListContainer = document.querySelector(".nav-list-container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navListContainer.classList.toggle("active");
});

// Close mobile navigation on click

navListContainer.addEventListener("click", () => {
  if (hamburger.classList.contains("active")) {
    hamburger.classList.remove("active");
    navListContainer.classList.remove("active");
  }
});
// Close mobile navigation on arrow click

toTopArrow.addEventListener("click", () => {
  if (hamburger.classList.contains("active")) {
    hamburger.classList.remove("active");
    navListContainer.classList.remove("active");
  }
});

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

// Listener with intersection of hamburger and section
// Probably not the best solution - need to gather more data

const sectionHotelRooms = document.querySelector("#hotel-rooms");
const sectionServices = document.querySelector("#services");
const footerSection = document.querySelector("#footer");
const hamburgerLines = document.querySelectorAll(".hamburger-line");
const hamLine = hamburgerLines[(0, 1, 2)];
const hotelSectionOptions = {};
const servicesSectionOptions = {};

if (hamburger.classList.contains("active")) {
  hamburgerLines.forEach((ha) => {
    ha.style.backgroundColor = "#e5ba73";
  });
}
const checkIntersection = () => {
  const hamburgerRect = hamburger.getBoundingClientRect();
  const sectionRect = sectionHotelRooms.getBoundingClientRect();

  const isIntersecting = !(
    hamburgerRect.right < sectionRect.left ||
    hamburgerRect.left > sectionRect.right ||
    hamburgerRect.bottom < sectionRect.top ||
    hamburgerRect.top > sectionRect.bottom
  );

  if (isIntersecting) {
    hamburgerLines.forEach((ha) => {
      ha.style.backgroundColor = "#e5ba73";
    });
  } else {
    if (hamburger.classList.contains("active")) {
      hamburgerLines.forEach((ha) => {
        ha.style.backgroundColor = "#e5ba73";
      });
    } else if (!hamburger.classList.contains("active")) {
      hamburgerLines.forEach((ha) => {
        ha.style.backgroundColor = "black";
      });
    }
  }
};
window.addEventListener("scroll", checkIntersection);
