// Menu to become fixed after hero image
var navPos;
$(document).ready(function(){
  navPos = $('nav').offset().top;

  $(document).scroll (function(){
    var scroll = $(this).scrollTop();

    var hero = $('.hero');

    if (scroll >= navPos || hero < 550){
      $('nav').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
    }
  });
});

$(window).resize(function(){
  navPos = $('nav').offset().top;
});


// Automated Scrolling down to work
$('a').click(function(){
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top-100},500);
  })
