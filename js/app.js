$(document).ready(function(){
    // Start Header Section
    // Start Banner Section
    
    // End Banner Section

    // End Header Section


    
    // Start Info Section
    $(window).scroll(function(){
        let getscrollpoint = $(this).scrollTop();
        console.log(getscrollpoint);

        if(getscrollpoint >= 400){
            $('.infotexts').addClass('fromlefts');
            $('.infopics').addClass('fromrights');
        }else{
            $('.infotexts').removeClass('fromlefts');
            $('.infopics').removeClass('fromrights');
        }
    })
    // End Info Section


    // Start ADV Section
    $('#videos').click(function(){
        var getmodal = $(this).data('bs-target');
        var getvideosrc = $(this).data('video');
        var videourlwithauto = getvideosrc + '?autoplay=1';

        $(getmodal + ' iframe').attr('src',videourlwithauto);


        $(getmodal + ' button.btn-close').click(function(){
            $(getmodal + ' iframe').attr('src',getvideosrc);
        });

        $(getmodal).click('hidden.bs.modal',function(){
            $(getmodal + ' iframe').attr('src',getvideosrc);
        });
    });
    // End ADV Section



    // Start Premises Section
    $('#lightslider').lightSlider({
        item: 4,
        auto: true,
        loop: true,
        SlideMove: 1,
        speed: 600
    });
    // End Premises Section



    // Start Pricing Section
    $(window).scroll(function(){
        let getscroll = $(this).scrollTop();

        if(getscroll >= 2450){
            $('.cardones').addClass('movelefts');
            $('.cardtwos').addClass('movebottoms');
            $('.cardthrees').addClass('moverights');
        }else{
            $('.cardones').removeClass('movelefts');
            $('.cardtwos').removeClass('movebottoms');
            $('.cardthrees').removeClass('moverights');
        }
    })
    // End Pricing Section



    // Start Join us Section
    $('#accordion').accordion();
    // End Join us Section


    // Start Footer Section
    $('#getyear').text(new Date().getUTCFullYear());
    // End Footer Section


    // Start Progress
    $(window).scroll(function(){
        var getprogress = $('#progresses');
        var getprogressval = $('#progressvalues');
        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);


        // scrolltop * 100 / (projectHeight - currentHeight) Formula
        // By Jquery
        var getscrollheight = $(document).height();

        var getclientheight = $(window).height();

        var calcheight = getscrollheight - getclientheight;
        var getfinalheight = Math.round(getscrolltop * 100 / calcheight);
        // console.log(getfinalheight);


        // By Javascript
        // var getscrollheight = document.documentElement.scrollHeight;
        // var getclientheight = document.documentElement.clientHeight;
        // var calcheight = getscrollheight - getclientheight;
        // var getfinalheight = Math.round(getscrolltop * 100 / calcheight);


        getprogressval.text(`${getfinalheight}%`);

        getprogress.css({
            "background":`conic-gradient(steelblue ${getfinalheight}%, #eee ${getfinalheight}%)`
        })
    })
    // End Progress


});