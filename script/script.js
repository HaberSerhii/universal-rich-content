"use strict";

(() => {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    filterItems(searchValue);
  });

  function filterItems(searchValue) {
    const items = document.querySelectorAll(".item");

    items.forEach((item) => {
      const cardHeading = item.querySelector(".card-heading");
      const itemText = cardHeading.textContent.toLowerCase();

      if (itemText.includes(searchValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  filterItems("");
})();

// Карусель
const swiper = new Swiper(".swiper", {
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  loop: true,
  loopedSlides: 4,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 10000,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  mousewheel: {
    invert: true,
  },
});
