$(document).ready(function(){
    $('.hamburger').click(function() {
        $('.hamburger').toggleClass("is-active"); 
        $('.header').toggleClass("display"); 
    });
    $('.carousel__inner').slick({
        adaptiveHeight: true,
        speed: 500,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left1.png" alt="left1"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png" alt= "right"></button>',
        responsive: [ 
            {
                breakpoint: 992,
                settings: {
                  arrows: false
                }
            }
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
  
    function toogleSlide(item) {
        $(item).each(function(i){
            $(this).on('click',function(e){
                e.preventDefault(); 
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active'); 
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active'); 
            });
        
        }); 
    }
    toogleSlide('.catalog-item__link'); 
    toogleSlide('.catalog-item__back'); 



});

