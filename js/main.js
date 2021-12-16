$(function(){
  $('.header-slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
    vertical: true,
  });

  
  $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="product-prev"><img src="images/product_prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="product-next"><img src="images/product_next.svg" alt=""></button>',
    asNavFor: '.product__content',
    vertical: true,
  });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true,
    arrows: false
  });


});