$(document).ready(function () {

    $('.js-menu-item').each(function () {
        $('.js-menu-item.active').children('.js-submenu').slideDown();

        $(this).children('.js-menulink').on('click', function () {
          var menuItem = $(this).parent('.js-menu-item');
          if(menuItem.hasClass('active')) {
            menuItem.children('.js-submenu').slideUp(300);
            menuItem.removeClass('active');
          }
    
          else {
            $('.main-menu > li').removeClass('active');
            $('.js-submenu').slideUp(300);
            menuItem.children('.js-submenu').slideDown(400);
            menuItem.addClass('active');
          }
        })

    })

    $('.js-btn-toggle').on('click', function(){
        $('#js-sidebar').toggleClass('sidebar-collapse');
        $('#js-main-body').toggleClass('main-body-extend');

        $(".overlay").toggleClass("hide");

        if($('#js-sidebar').hasClass('sidebar-collapse')) {
            $('.js-submenu').fadeOut(300);
            $('.js-main-menu li>a').children('span').fadeOut(300);
           
            $('.js-menu-item').on('click', function(){
                $('.js-main-menu li>a').children('span').fadeIn(300);
                $('#js-sidebar').removeClass('sidebar-collapse');
                $('#js-main-body').removeClass('main-body-extend');
                $(".overlay").removeClass("hide");
            })
        }
        else {
            $('.js-menu-item.active').children('.js-submenu').slideDown();
            $('.main-menu li>a').children('span').fadeIn(300);
        }
    })

    if (parseInt($(window).width()) <= 425) {
        $('.overlay').on('click', function(){         
            $(".overlay").addClass("hide");
            $('#js-sidebar').addClass('sidebar-collapse');
            $('#js-main-body').addClass('main-body-extend');
            $('.js-submenu').fadeOut(300);
            $('.main-menu li>a').children('span').fadeOut(300);
        });
    }
});
