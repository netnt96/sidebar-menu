$(document).ready(function () {

    $(".main-menu > li").on("click", function(){
        $(this).parents(".main-menu").find("li.active").removeClass("active");
        $(this).addClass("active");
    });

    $(".sub-menu > li").on("click", function(){
        $(this).parents(".main-menu").find(".submneu > li.active").removeClass("active");
        $(this).addClass("active");
    });

    // $('.js-menu-item').each(function(){
    
    //     var subMenu   = $(this).children('.js-submenu')
    //         menuLink  = $(this).children('.js-menulink')
    //         childMenu = $(this).children('.js-submenu li')

    //     if($('.main-menu > li').hasClass('active')) {
    //         $('.main-menu > li.active').parent().parent('.main-menu li').addClass('active');
    //         $('.sub-menu > li.active').parent('.sub-menu li').show();
    //     }
    // })

    $(".js-menu-item").on('click', function () { 
        var subMenu = $(this).children('.js-submenu');

        $('.js-submenu').each(function () {
            $('.js-submenu').slideUp(400);
        });

        if((subMenu).is(":hidden")){
            subMenu.slideDown(400);
        }

        else{
            subMenu.slideUp(400);
        }
    });

   
    $('.js-btn-toggle').on('click', function(){
        $('#js-sidebar').toggleClass('sidebar-collapse');
        $('#js-main-body').toggleClass('main-body-extend');
        $(".overlay").toggleClass("hide");

        if($('#js-sidebar').hasClass('sidebar-collapse')) {
            $('.js-submenu').fadeOut(300);
            $('.main-menu li>a').children('span').fadeOut(300);

            $('.js-menu-item').on('click', function(){
                $('.main-menu li>a').children('span').fadeIn(300);
                $('#js-sidebar').removeClass('sidebar-collapse');
                $('#js-main-body').removeClass('main-body-extend');
                $('li.active').hasClass('.active').children('.js-submenu').fadeIn(300);
            })
        }
        else {
            $('.main-menu li>a').children('span').fadeIn(300);
            $('li.active').hasClass('.active').children('.js-submenu').fadeIn(300);
        }

    })

    $( window ).resize(function() {
        if (parseInt($(window).width()) <= 425) {
            $('.overlay').on('click', function(){         
                $(".overlay").addClass("hide");
                $('#js-sidebar').addClass('sidebar-collapse');
                $('#js-main-body').addClass('main-body-extend');
                $('.main-menu li>a').children('span').fadeOut(300);
            });
    
            if(($('#js-sidebar').hasClass('sidebar-collapse'))== false ){
                $(".overlay").toggleClass("hide");
            }
        }
    });
   
});
