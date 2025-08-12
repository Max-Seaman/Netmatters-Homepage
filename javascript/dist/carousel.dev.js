"use strict";

$(".slick").slick({
  dots: true,
  appendDots: $('.slick-dots'),
  arrows: false,
  speed: 300,
  infinite: true,
  autoplaySpeed: 4000,
  autoplay: true
});
$('.imageline').each(function () {
  $(this).slick({
    arrows: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 8,
    variableWidth: true
  });
});
//# sourceMappingURL=carousel.dev.js.map
