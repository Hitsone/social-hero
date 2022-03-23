jQuery(window).scroll(function(){
  if (jQuery(window).scrollTop() > 0) {
    jQuery('.header').addClass('header_fixed');
    jQuery('.articles').removeClass('articles_hidden');
  } else {
    jQuery('.header').removeClass('header_fixed');
    jQuery('.articles').addClass('articles_hidden');
  }
});

jQuery(document).ready(function(){
  jQuery(".header__btn").on("click", function (event) {
    jQuery('#header').toggleClass('header_menu');
  });
});


document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('preloader_done')) {
            document.body.removeAttribute('style');
            preloader.classList.add('preloader_done');
        }
    }, 1000);
}
