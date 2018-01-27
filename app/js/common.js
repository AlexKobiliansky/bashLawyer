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


});
