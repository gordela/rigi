$(".menu-btn").click(function () {
  $(".navbar").toggleClass("active");
});

$(".fa-times").click(function () {
  $(".navbar").toggleClass("active");
});

$(".slider-wrapper").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
});

$(".duqani-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
});

$(".carousel-prev").click(function () {
  $(this).parent().find(".duqani-slider").slick("slickPrev");
});

$(".carousel-next").click(function (e) {
  e.preventDefault();
  $(this).parent().find(".duqani-slider").slick("slickNext");
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("#header").removeClass("white");
  } else {
    $("#header").addClass("white");
  }
  prevScrollpos = currentScrollPos;
};
