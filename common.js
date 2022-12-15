$(function(){

    if($(window).width() > 1000) {
        $('html').addClass('web').removeClass('mobile');
    }else{
        $('html').addClass('mobile').removeClass('web');
    }
    $(window).on('resize', function(){
        if($(window).width() > 1000) {
            $('html').addClass('web').removeClass('mobile');
        }else{
            $('html').addClass('mobile').removeClass('web');
        }
    });

    // 메뉴 - web
    $(document).on('mouseover','.web .lnb .depth_item',function(){
        if($('.lnb .depth2').is(':hidden')) {
            $('html').addClass('lnb_open');
        }
    });

    $(document).on('mouseover','.web .lnb .depth_item',function(){
        $('html').addClass('lnb_open');
    });
    
    $(document).on('mouseover','.web .lnb .depth_item',function(){
        $('.lnb .depth_item').removeClass('active');
        $(this).toggleClass('active').parents('li').addClass('active');
    })

    $(document).on('mouseout','.web .lnb .menu',function(){
        $('.lnb .depth_item').removeClass('active');
    });
    $(document).on('mouseout','.web .lnb .depth',function(){
        $('html').removeClass('lnb_open');
    });


    

    //메뉴 - mobile
    $('.menu_btn').on('click', function(){
        $('html').addClass('lnb_show');
    });
    $('.menu_hide').on('click', function(){
        $('html').removeClass('lnb_show');
    });
    $(document).on('click','.mobile .lnb .depth1_item',function(){
        $(this).toggleClass('active').siblings().removeClass('active');
    })

    // top버튼
    $('.scroll_top').on('click', function(){
        $('html, body').animate({
            scrollTop : $('#wrapper').offset().top
        },{
            duration : 500,
        });
        event.preventDefault();
    });

    //스크롤
    function scrollDoc(){
        if($(document).height() <= $(window).scrollTop() + $(window).height()){
            $('html').addClass('bottom');
        }else{
            $('html').removeClass('bottom');
        }

        if($(window).scrollTop() === 0){
            $('html').addClass('top');
        }else{
            $('html').removeClass('top');
        }

        if($(window).scrollTop() <= 0){
            $('html').removeClass('fixed');
        }else{
            $('html').addClass('fixed');
        }
    }

    scrollDoc();
    $(window).scroll(function(){
        scrollDoc();
    });

    //popup
    $('.popup_close').on('click', function(){
        $('.popup').removeClass('active');
        //popup
    $('.popup_close').on('click', function(){
        $('.popup').removeClass('active');
    });});


    //select
    $(document).ready(function(){
        $('select').niceSelect();

        $('.nice-select').parents('tr').addClass('idx');
    });

});