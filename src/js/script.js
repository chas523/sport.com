
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

    //modal 
    $('[data-modal=consultation]').on('click',function() {
        $('.overlay, #consultation').fadeIn();
    }); 
    $('.modal__close').on('click',function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut(); 
    });
    
    $('.catalog-item__btn').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        }); 
    });
    //consultation form
    function formValidate(form){
        $(form).validate({
            rules: {
                first_name: {
                    required: true,
                    minlength: 3,
                },
                email: {
                    required: true,
                    email: true
                },
                tel: {
                    required: true
                }
            },
            messages: {
                first_name: {
                    required: "Это поле обезательное",
                    minlength: "Имя должно состоять из 3 или более символов"
                },
                email: {
                    required: "Это поле обезательное",
                    email: "Введён неврный email адресс"
                },
                tel: {
                    required: "Это поле обезательное"
                }
            }
        }); 
    }
    formValidate('#consultation form'); 
    formValidate('#order form'); 
    formValidate('#contact-from'); 

    $("input[name=tel]").mask("+7 (999) 999-9999");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/mailer.php", 
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        }); 
        return false; 

    }); 

});

