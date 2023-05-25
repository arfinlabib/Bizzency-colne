$(function () {
    'use strict';
    $(".protfolio_slider").slick({
      //   slidesToShow: 3,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2, 
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $(".testomonial_slidr").slick({
      //   slidesToShow: 3,
      arrows: false,
      infinite: true,
      slidesToShow: 2,
      autoplay: true,
    });
    $(".bolg_slider").slick({
      //   slidesToShow: 3,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $(window).on('scroll', function() {
      var scrollSize = $(window).scrollTop()
      if (scrollSize > 500){
        $('.backToTop_btn').slideDown()
      }else{
        $('.backToTop_btn').slideUp();
      }
    })
    $(".backToTop_btn").on('click', function () {
      $('html,body').animate({
        scrollTop:0,
      },2000)
    });
})