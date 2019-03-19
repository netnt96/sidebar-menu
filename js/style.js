$(document).ready(function () {

    // $('.js-menu-item').each(function () {
    //     if((this).hasClass('active')){
    //         $(this).children('.sub-menu').slideDown();
    //     }
    // })
    // if($('.js-menu-item').hasClass('active')){
    //     $(this).children('.sub-menu').slideDown(200);
    // }

    $('.main-menu > li').on("click", function(){
        if($(this).hasClass('active')){
            $(this).children('.js-submenu').slideUp();
            $(this).removeClass('active');
        }else{
            $('.js-submenu').slideUp();
            $(this).children('.js-submenu').slideDown();
            $('.main-menu > li').removeClass('active');
            $(this).addClass('active');
        }
    })
    
    $('.js-btn-toggle').on('click', function(){
        $('#js-sidebar').toggleClass('sidebar-collapse');
        $('#js-main-body').toggleClass('main-body-extend');
        $(".overlay").toggleClass("hide");

        if($('#js-sidebar').hasClass('sidebar-collapse')) {
            $('.sub-menu').fadeOut(300);
            $('.main-menu li>a').children('span').fadeOut(300);
           
            $('.js-menu-item').on('click', function(){
                $('.main-menu li>a').children('span').fadeIn(300);
                $('#js-sidebar').removeClass('sidebar-collapse');
                $('#js-main-body').removeClass('main-body-extend');
            })
        }
        else {
            $('.main-menu li>a').children('span').fadeIn(300);
        }
    })

        if (parseInt($(window).width()) <= 425) {
            $('.overlay').on('click', function(){         
                $(".overlay").addClass("hide");
                $('#js-sidebar').addClass('sidebar-collapse');
                $('#js-main-body').addClass('main-body-extend');
                $('.main-menu li>a').children('span').fadeOut(300);
            });
        }
});
