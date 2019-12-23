$('.slider').owlCarousel({
    loop: true,
    autoHeight: true,
    nav: true,
    responsiveClass: true,
    center: true,
    dots: false,
    responsive: {
        0: {
            items: 3
        }
    }
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".up").fadeIn(500);
        } else {
            $(".up").fadeOut(500);
        }
    });
});

$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $("#sidebar").toggleClass("main");
    });
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
    $("a.scrollLink").click(function (event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top}, 500);
    });
});

var acc = document.getElementsByClassName("scrooldown");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}