// var wrap = $(".hero");
//
// wrap.on("scroll", function(e) {
//
//   if (this.scrollTop > 200) {
//     wrap.addClass("fixed");
//   } else {
//     wrap.removeClass("fixed");
//   }
//
// });

// $('.hero').scroll (function(){
//   var scroll = $(this).scrollTop();
//   if (scroll > 400){
//     $('nav').addClass('fixed');
//   } else {
//     $('nav').removeClass('fixed');
//   }
// });
$(document).ready(function(){
  $(document).scroll (function(){
    var scroll = $(this).scrollTop();
    if (scroll > 600){
      $('nav').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
    }
  });
});
