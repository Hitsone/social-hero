new WOW().init({
	mobile: false
});

jQuery(document).ready(function(){

  jQuery("#partners-slider").owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    // autoWidth: true,
    stagePadding: 10,
    autoplayHoverPause: true,
    autoplaySpeed: 3000,
    dots: false,
    loop: true,
    responsive:{
          0:{
              items:3,
              margin:10
          },
          480:{
            items:4,
            margin:20
          },
          600:{
              items:6,
              margin:30
          },
          1000:{
              items:10,
              margin:30
          }
      }
  });


  jQuery("#reviews-slider").owlCarousel({
    items: 1,
    margin: 600,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplaySpeed: 3000,
    loop: true,
    autoWidth: true,
    nav: true,
    dots: false,
  });
});