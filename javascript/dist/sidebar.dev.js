"use strict";

var menu = document.querySelector(".menu");
var spans = menu.querySelectorAll("span");
var mainContent = document.querySelector("main");
var sidebar = document.querySelector(".sidebar");
menu.addEventListener("click", function () {
  var menuIsOpen = menu.classList.contains("open");

  if (!menuIsOpen) {
    // Slide main content
    mainContent.classList.add("sidebar-open"); // Step 1: collapse top and bottom into center

    menu.classList.add("collapse"); // Step 2: rotate center span

    setTimeout(function () {
      // Step 2: rotate center span
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
  }
});
mainContent.addEventListener("click", function () {
  if (menu.classList.contains("open")) {
    // Close the menu (simulate a click on the menu icon)
    menu.click();
  }
});
//# sourceMappingURL=sidebar.dev.js.map
