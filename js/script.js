// Menu to become fixed after hero image
var navPos;
$(document).ready(function(){
  navPos = $('nav').offset().top;

  $(document).scroll (function(){
    var scroll = $(this).scrollTop();
    if (scroll >= navPos){
      $('nav').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
    }
  });
});

$(window).resize(function(){
  navPos = $('nav').offset().top;
})
