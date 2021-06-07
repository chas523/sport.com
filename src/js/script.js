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
});

