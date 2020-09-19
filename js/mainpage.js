var counter = 1;
var oddeven = 2;
var timer;
var loading = 0;
var loadingTimer;

if (checkBrowser() == "Firefox") {
  var load = setInterval(function () {
    $(".loading").text(loading + "%");
    loading++;
    let gray = "grayscale(" + (100 - loading) + "%)";

    $(".logo-loading").css("filter", gray);

    if (loading == 101) {
      clearInterval(load);
      $(".loading-logo").fadeOut();
      $(".anim-image").attr("src", "./mainpage/1.png");
      $(window).bind("DOMMouseScroll", function (event) {
        if (timer) {
          window.clearTimeout(timer);
        }

        timer = window.setTimeout(function () {
          if (oddeven % 2 == 0) {
            if (event.originalEvent.detail < 0) {
              ++oddeven;
              if (counter > 1) {
                $(".anim-image-2").attr(
                  "src",
                  "./mainpage/" + --counter + ".png"
                );
                $(".anim-image").fadeOut(function () {
                  $(".anim-image-2").fadeIn();
                });

                $(".red").css("width", String(counter / 37) * 100 + "%");
              }
            } else {
              --oddeven;
              if (counter < 38) {
                if (counter != 37) {
                  $(".anim-image-2").attr(
                    "src",
                    "./mainpage/" + ++counter + ".png"
                  );
                  $(".anim-image").fadeOut(function () {
                    $(".anim-image-2").fadeIn();
                  });

                  switchCases(counter);

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
            if (event.originalEvent.detail < 0) {
              ++oddeven;
              if (counter > 1) {
                $(".anim-image").attr(
                  "src",
                  "./mainpage/" + --counter + ".png"
                );
                $(".anim-image-2").fadeOut(function () {
                  $(".anim-image").fadeIn();
                });

                switchCases(counter);
                $(".red").css("width", String(counter / 37) * 100 + "%");
              }
            } else {
              --oddeven;
              if (counter < 38) {
                if (counter != 37) {
                  $(".anim-image").attr(
                    "src",
                    "./mainpage/" + ++counter + ".png"
                  );
                  $(".anim-image-2").fadeOut(function () {
                    $(".anim-image").fadeIn();
                  });

                  switchCases(counter);

                  $(".red").css("width", String((counter / 37) * 100) + "%");
                } else {
                  $(".anim-image").attr(
                    "src",
                    "./mainpage/" + counter + ".png"
                  );
                  $(".red").css("width", String((counter / 37) * 100) + "%");
                }
              }
            }
          }
        }, 300);
      });
    }
  }, 30);
} else {
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
                $(".anim-image-2").attr(
                  "src",
                  "./mainpage/" + --counter + ".png"
                );
                $(".anim-image").fadeOut(function () {
                  $(".anim-image-2").fadeIn();
                });

                $(".red").css("width", String(counter / 37) * 100 + "%");
              }
            } else {
              --oddeven;
              if (counter < 38) {
                if (counter != 37) {
                  $(".anim-image-2").attr(
                    "src",
                    "./mainpage/" + ++counter + ".png"
                  );
                  $(".anim-image").fadeOut(function () {
                    $(".anim-image-2").fadeIn();
                  });

                  switchCases(counter);

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
            if (event.originalEvent.wheelDelta >= 0) {
              ++oddeven;
              if (counter > 1) {
                $(".anim-image").attr(
                  "src",
                  "./mainpage/" + --counter + ".png"
                );
                $(".anim-image-2").fadeOut(function () {
                  $(".anim-image").fadeIn();
                });

                switchCases(counter);
                $(".red").css("width", String(counter / 37) * 100 + "%");
              }
            } else {
              --oddeven;
              if (counter < 38) {
                if (counter != 37) {
                  $(".anim-image").attr(
                    "src",
                    "./mainpage/" + ++counter + ".png"
                  );
                  $(".anim-image-2").fadeOut(function () {
                    $(".anim-image").fadeIn();
                  });

                  switchCases(counter);

                  $(".red").css("width", String((counter / 37) * 100) + "%");
                } else {
                  $(".anim-image").attr(
                    "src",
                    "./mainpage/" + counter + ".png"
                  );
                  $(".red").css("width", String((counter / 37) * 100) + "%");
                }
              }
            }
          }
        }, 300);
      });
    }
  }, 30);
}
function switchCases(counter) {
  switch (counter) {
    case 7:
      $(".btn-vrclad").attr("href", "shtagoneba.html");
      $(".btn-vrclad").css("display", "inline-block");
      break;
    case 13:
      $(".btn-vrclad").attr("href", "duqani.html");
      $(".btn-vrclad").css("display", "inline-block");
      break;
    case 19:
      $(".btn-vrclad").attr("href", "lukma-puri.html");
      $(".btn-vrclad").css("display", "inline-block");
      $(".rigi").css("display", "inline-block");
      break;
    case 25:
      $(".btn-vrclad").attr("href", "rigebi.html");
      $(".btn-vrclad").css("display", "inline-block");
      break;
    case 31:
      $(".btn-vrclad").attr("href", "rigebi.html");
      $(".btn-vrclad").css("display", "inline-block");
      break;
    case 37:
      $(".btn-vrclad").css("display", "none");
      $(".rigi").css("display", "none");
      $(".adg").css("display", "inline-block");
      $(".mogv").css("display", "inline-block");
      break;
    default:
      $(".btn-vrclad").css("display", "none");
      $(".rigi").css("display", "none");
      $(".adg").css("display", "none");
      $(".mogv").css("display", "none");
  }
}
