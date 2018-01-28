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
        $(".contact-item-content").equalHeights();
        $(".whom-item").equalHeights();
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


    $(window).scroll(function() {
        if($(this).scrollTop() > 1000) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},600);
    });


    $(".s-skills").waypoint(function(){
        $('.skill-num p').each(function(){
            var tcount = $(this).parents(".skill-num").data("count");
            $(this).animateNumber({
                number: tcount
            },1400);
        });
        this.destroy()

    }, {
        offset: '90%'
    });


    //animate customization

    function animateProblems(){
        var delay=0;

        $(".problem-item").each(function(){
            $(this).attr("data-wow-delay", delay+'s');
            delay = delay + 0.3;
        });
    }

    function animateFeatures(){
        $(".features-wrapper .col-sm-6:nth-child(odd)").addClass("fadeInLeft");
        $(".features-wrapper .col-sm-6:nth-child(even)").addClass("fadeInRight");
    }

    function animateScheme() {
        var delay = 0;
        $(".scheme-item").each(function(){
            $(this).attr("data-wow-delay", delay+'s');
            delay = delay + 0.4;
        });
    }




    //end animate customization




    //animations
    animateProblems();
    animateFeatures();
    animateScheme();





});
