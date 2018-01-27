$(function() {

    $('ul.sf-menu').superfish({
        delay: 700,
        speed: 'fast',
    });

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".mobile-mnu").slideToggle();
        return false;
    });

    function heightess() {
        $(".skill-item").equalHeights();
        $(".problem-item").equalHeights();
        $(".feature-item").equalHeights();
        $(".scheme-item").equalHeights();
    }

    $(window).resize(function() {
        heightess();
    });

    heightess();

    $(".owl-comments").owlCarousel({
        loop: true,
        margin: 30,
        items: 2,
        dotsEach: 1,
        nav: true,
        navText: ['', ''],
        navSpeed: 600,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            }
        }
    });


});
