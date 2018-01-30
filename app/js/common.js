$(function() {

    $(".logo img").addClass("img-responsive");


    //list styling for WP
    $(".s-disputes ul").addClass("whom-item-content");
    $(".practice-features ul").addClass("check");
    $(".list-services ul").addClass("simple");

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

    function animateContacts(){
        $(".contacts-wrapper .col-sm-6:nth-child(odd)").addClass("fadeInLeft");
        $(".contacts-wrapper .col-sm-6:nth-child(even)").addClass("fadeInRight");
    }

    function animateContactsSoc(){
        var delay=0;

        $(".contact-soc .col-xs-4").each(function(){
            $(this).attr("data-wow-delay", delay+'s');
            delay = delay + 0.3;
        });
    }


    function animateCheckList(){

        $(".check p").each(function(){
            $(this).addClass("wow fadeInUp").attr("data-wow-duration", "2s").attr("data-wow-delay", "0.5s");

        });

        $(".check li").each(function(){
            $(this).addClass("wow fadeInUp").attr("data-wow-duration", "2s").attr("data-wow-delay", "0.5s");
        });
    }

    function animateSimpleList(){

        $(".simple p").each(function(){
            $(this).addClass("wow fadeInLeft").attr("data-wow-delay", ".0.5s");

        });

        $(".simple li").each(function(){
            $(this).addClass("wow fadeInLeft").attr("data-wow-duration", "2s").attr("data-wow-delay", ".0.5s");
        });
    }

    function whomContacts(){
        $(".whom-wrapper .col-sm-6:nth-child(odd)").addClass("fadeInLeft");
        $(".whom-wrapper .col-sm-6:nth-child(even)").addClass("fadeInRight");
    }

    //end animate customization


    //animations
    animateProblems();
    animateFeatures();
    animateScheme();
    animateContacts();
    animateContactsSoc();
    whomContacts();
    animateCheckList();
    animateSimpleList();


    $.validate({
        form : '.consult',
    });

    $.validate({
        form : '.callback',
    });

    $(".user-phone").mask("+7 (999) 999-99-99",{autoclear: false});

    $("a[href='#callback']").magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });


    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        var btnText = th.find('.btn').text();
        th.find('.btn').addClass("btn-disable").prop('disabled','disabled').text("Заявка отправлена");
        $.ajax({
            type: "POST",
            url: "http://alexko.zzz.com.ua/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(".success").addClass("active");
            setTimeout(function() {
                // Done Functions
                $(".success").removeClass("active");
                th.find(".btn").removeClass("btn-disable").removeAttr('disabled').text(btnText);
                th.trigger("reset");
                $.magnificPopup.close();
            }, 3000);
        });
        return false;
    });



    new WOW().init();
});
