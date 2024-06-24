(function($){
    "use strict";

    //data background
    $("[data-image]").each(function(){
           $(this).css("background-image","url("+$(this).attr("data-image")+")")
    })

    //popup
    $('.popup-image').magnificPopup({
      type: 'image'
      // other options
    });
    $('.popup-video').magnificPopup({
      type: 'iframe'
      // other options
    });
    //tesimonial slider
    var swiper = new Swiper(".testimonial-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".tp-testi-swiper-button-next",
          prevEl: ".tp-testi-swiper-button-preview",
        },
      });
      //Brand Sllider
      var swiper = new Swiper(".tp-brand-slider", {
        slidesPerView: 'auto',
        spaceBetween: 50,
        loop:true,
        centerSlide:true,
        freemode:true,
        speed:2000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
          
      },
      });
      //Team Slider
      //tesimonial slider
    var swiper = new Swiper(".tp-team-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".tp-team-button-preview",
        prevEl: ".tp-team-button-next",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        640: {
          slidesPerView: 2,
          
        },
        992: {
          slidesPerView: 3,
          
        },
        1200: {
          slidesPerView: 4,
          
        },
      },
    });


})(jQuery)