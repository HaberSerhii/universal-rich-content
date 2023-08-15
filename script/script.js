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
