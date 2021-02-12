/* **** STICKY NAVIGATION ***** */
$(document).ready(function () {

    $('.js--section__features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    /* **** SCROLL ON BUTTONS ***** */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
                scrollTop: $('.js--section__plans').offset().top
            },
            1000);

    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
                scrollTop: $('.js--section__features').offset().top
            },
            1000);
    });

    /* **** NAVIGATION SCROLL ***** */
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                // window.location.hash = target;
            });
        });
    
    /* **** ANIMATIONS ON SCROLL ***** */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');

    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');

    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');

    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');

    }, {
        offset: '50%'
    });


    /* ***** MOBILE NAV ***** */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

});

