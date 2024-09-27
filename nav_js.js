$(document).ready(function() {
  $('.close-header').hide();
});

var count = 0;

$( document ).ready(function() {
  $('.fab').click(function(){
      if (count % 2 == 0) {
        $("#contact-footer").css("animation", "bounce-up 350ms ease-in-out 0s 1 forwards");
        $("main").css("animation", "darken 350ms ease-in-out 0s 1 forwards");
        $('.open-header').hide(300);
        $('.close-header').show(300);
        count += 1;
      } else {
        $("#contact-footer").css("animation", "bounce-up-reverse 350ms ease-in-out 0s 1 forwards");
        $("main").css("animation", "darken-reverse   350ms ease-in-out 0s 1 forwards");
        $('.open-header').show(300);
        $('.close-header').hide(300);
        count += 1;
      }
  });

  $('main').click(function(){
        $("#contact-footer").css("animation", "bounce-up-reverse 350ms ease-in-out 0s 1 forwards");
        $("main").css("animation", "darken-reverse   350ms ease-in-out 0s 1 forwards");
        $('.open-header').show(300);
        $('.close-header').hide(300);
  });
});
