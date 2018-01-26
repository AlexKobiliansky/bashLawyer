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

});
