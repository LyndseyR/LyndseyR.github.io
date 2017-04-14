// Menu to become fixed after hero image
$(document).ready(function(){
  var $navBar = $('nav');
  var navPos = $navBar.offset().top+0;

  $(document).scroll (function(){
    var scroll = $(this).scrollTop();
    if (scroll >= navPos){
      $('nav').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
    }
  });
});
