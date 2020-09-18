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

$(window).scroll(function () {
  var y = $(this).scrollTop();
  console.log(y);
  if (y > 50) {
    $("#header").addClass("white");
  } else {
    $("#header").removeClass("white");
  }
});
