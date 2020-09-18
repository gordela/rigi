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
oddeven = 2;
var timer;
var loading = 0;
var loadingTimer;

var load = setInterval(function () {
  $(".loading").text(loading + "%");
  loading++;
  let gray = "grayscale(" + (100 - loading) + "%)";

  $(".logo-loading").css("filter", gray);
  if (loading == 101) {
    clearInterval(load);
    $(".loading-logo").fadeOut();
    $(".anim-image").attr("src", "./mainpage/1.png");
    $(window).bind("mousewheel", function (event) {
      if (timer) {
        window.clearTimeout(timer);
      }

      timer = window.setTimeout(function () {
        if (oddeven % 2 == 0) {
          if (event.originalEvent.wheelDelta >= 0) {
            ++oddeven;
            if (counter > 1) {
              $(".anim-image").fadeOut();
              $(".anim-image-2").fadeIn();
              $(".anim-image-2").attr(
                "src",
                "./mainpage/" + --counter + ".png"
              );
              $(".red").css("width", String(counter / 37) * 100 + "%");
            }
          } else {
            --oddeven;
            if (counter < 38) {
              if (counter != 37) {
                $(".anim-image").fadeOut();
                $(".anim-image-2").fadeIn();
                $(".anim-image-2").attr(
                  "src",
                  "./mainpage/" + ++counter + ".png"
                );

                $(".red").css("width", String((counter / 37) * 100) + "%");
              } else {
                $(".anim-image-2").attr(
                  "src",
                  "./mainpage/" + counter + ".png"
                );
                $(".red").css("width", String((counter / 37) * 100) + "%");
              }
            }
          }
        } else {
          console.log("second Tim");
          console.log(counter);
          if (event.originalEvent.wheelDelta >= 0) {
            ++oddeven;
            if (counter > 1) {
              $(".anim-image-2").fadeOut();
              $(".anim-image").fadeIn();
              $(".anim-image").attr("src", "./mainpage/" + --counter + ".png");
              $(".red").css("width", String(counter / 37) * 100 + "%");
            }
          } else {
            --oddeven;
            if (counter < 38) {
              if (counter != 37) {
                $(".anim-image-2").fadeOut();
                $(".anim-image").fadeIn();
                $(".anim-image").attr(
                  "src",
                  "./mainpage/" + ++counter + ".png"
                );

                $(".red").css("width", String((counter / 37) * 100) + "%");
              } else {
                $(".anim-image").attr("src", "./mainpage/" + counter + ".png");
                $(".red").css("width", String((counter / 37) * 100) + "%");
              }
            }
          }
        }
      }, 100);
    });
  }
}, 30);
