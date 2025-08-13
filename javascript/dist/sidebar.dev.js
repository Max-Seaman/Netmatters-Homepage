"use strict";

var originalMenu = document.querySelector(".menu");
var mainContent = document.querySelector(".main-content");
var imageline = document.querySelectorAll(".imageline");

function disablePointerEventsInside(container) {
  var allDescendants = container.querySelectorAll('*');
  allDescendants.forEach(function (i) {
    i.style.pointerEvents = 'none';
  });
}

function enablePointerEventsInside(container) {
  var allDescendants = container.querySelectorAll('*');
  allDescendants.forEach(function (i) {
    i.style.pointerEvents = '';
  });
}

function menuAnimation(menu) {
  var menuIsOpen = menu.classList.contains("open");

  if (!menuIsOpen) {
    // Slide main content and hide overflow
    mainContent.classList.add("sidebar-open"); // Hide imageline overflow 

    imageline.forEach(function (i) {
      i.style.overflow = "hidden";
    }); // Disable pointer events

    disablePointerEventsInside(mainContent); // Step 1: collapse top and bottom into center

    menu.classList.add("collapse"); // Step 2: rotate center span

    setTimeout(function () {
      menu.classList.add("rotate");
    }, 100); // Step 3: form the X

    setTimeout(function () {
      menu.classList.remove("collapse", "rotate");
      menu.classList.add("open");
    }, 100);
  } else {
    // === CLOSING ===
    mainContent.classList.remove("sidebar-open"); // Step 1: return to collapsed state

    menu.classList.remove("open");
    menu.classList.add("collapse"); // Step 2: undo rotation

    setTimeout(function () {
      menu.classList.add("rotate");
    }, 100); // Step 3: back to original hamburger

    setTimeout(function () {
      menu.classList.remove("rotate");
    }, 100);
    setTimeout(function () {
      menu.classList.remove("collapse");
    }, 200);
    setTimeout(function () {
      // Set imageline overflow back when sidebar is closed
      imageline.forEach(function (i) {
        i.style.overflow = "";
      }); // Enable pointer events when sidebar is closed

      enablePointerEventsInside(mainContent);
    }, 500);
  }
}

originalMenu.addEventListener("click", function () {
  menuAnimation(originalMenu);
});
mainContent.addEventListener("click", function () {
  if (originalMenu.classList.contains("open")) {
    // Close the menu (simulate a click on the menu icon)
    originalMenu.click();
  }
});
//# sourceMappingURL=sidebar.dev.js.map
