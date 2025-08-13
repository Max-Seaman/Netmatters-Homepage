"use strict";

var header = document.querySelector(".sticky-header");
var main = document.querySelector('.main-content');
var lastScroll = 0;
window.addEventListener("scroll", function () {
  // Get current scroll
  var currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  } // update last known scroll position for next scroll event


  lastScroll = currentScroll;
});
//# sourceMappingURL=stickyheader.dev.js.map
