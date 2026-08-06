$(document).ready(function () {

  $('body').scrollspy({
    target: "#navbarScroll",
    offset: 97
  });

  $("#navbarScroll a").on('click', function (event) {
    if (this.hash !== "") {

      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 97
      }, 800);
      window.location.hash = hash;
    }
  });

  $('.tile').hide();
  if (verifyIfDesktop()) {
    $(window).scroll(function () {
      $('.hideme').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {
          $(this).fadeIn(2000);
          loadMosaic();
        }
      });
    });
  } else {
    $('.hideme').fadeIn();
    loadMosaic();
  }

  setTimeout(removeActiveLinkAndShowItems, 100);
});

function loadMosaic() {
  $('.tile').each(function (i) {
    $('#img1').delay(1500).fadeIn(1000);
    $('#img2').delay(1700).fadeIn(1000);
    $('#img3').delay(1900).fadeIn(1000);
    $('#img4').delay(2100).fadeIn(1000);
    $('#img5').delay(2200).fadeIn(1000);
    $('#img6').delay(2300).fadeIn(1000);
    $('#img7').delay(2400).fadeIn(1000);
    $('#img8').delay(2500).fadeIn(1000);
  });
}

function verifyIfDesktop() {
  if (navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i))
    return false;
  else
    return true;
}

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if ($(window).scrollTop() > 400) {
    $('#goToTop').fadeIn(500);
  } else {
    $('#goToTop').fadeOut(500);
  }
}

$('#goToTop').click(function () {
  $('#goToTop').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 800);
  });
});

function removeActiveLinkAndShowItems() {
  $('.nav-link').each(function (i) {
    $(this).removeClass('active');
    $(this).fadeIn(500);

  }).delay(200);
}