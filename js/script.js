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

$(document).scroll(function () {
  var y = $(this).scrollTop();

  if (y > 50) {
    $("#header").addClass("white");
  } else {
    $("#header").removeClass("white");
  }
});

counter = 1;
$(window).bind("mousewheel", function (event) {
  if (event.originalEvent.wheelDelta >= 0) {
    if (counter > 1) {
      $(".anim-image").attr("src", "./mainpage/" + --counter + ".png");
      $(".red").css("width", String(counter / 37) * 100 + "%");
    }
  } else {
    if (counter < 38) {
      if (counter != 37) {
        $(".anim-image").attr("src", "./mainpage/" + ++counter + ".png");

        $(".red").css("width", String((counter / 37) * 100) + "%");
      } else {
        $(".anim-image").attr("src", "./mainpage/" + counter + ".png");
        $(".red").css("width", String((counter / 37) * 100) + "%");
      }
    }
  }
});
