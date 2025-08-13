const header = $(".sticky-header");

let lastScroll = 0;

$(window).on("scroll", function() {
    var currentScroll = $(this).scrollTop(); // get current scroll
    
    if (currentScroll < lastScroll) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
    
    lastScroll = currentScroll; // update last scroll
});