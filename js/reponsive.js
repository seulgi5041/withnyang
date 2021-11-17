// 토글_햄버거메뉴 애니메이션제어
$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    });
});


//lnb 하위에 나오게 구현하기
$(function(){

    $(".gnb_menu").on({
        "mouseenter" : function() {

            $(".lnb_menu").removeClass("disappear");
            $(".lnb_menu").addClass("appear");

            // 실질적으로 보이는 부분. 위에 두개속성은 애니메이션 속성을 주기위한것임.
            // .show : 해당 태그의 display를 none에서 block으로 해주는 속성.
            $(".lnb_menu").show();
            $("#lnb_bg").show();

            // $(".lnb_menu > .drodown1").css("z-index", "2");
            // $(".lnb_menu > .drodown2").css("z-index", "2");
            // $(".lnb_menu > .drodown3").css("z-index", "2");
            // $(".lnb_menu > .drodown4").css("z-index", "2");
            // $(".lnb_menu > .drodown5").css("z-index", "2");
        },

        "mouseleave" : function() {
        }
    });

    $(".lnb_menu").on({
        "mouseleave" : function() {
                $(".lnb_menu").removeClass("appear");
                $(".lnb_menu").addClass("disappear");
                $("#lnb_bg").hide();
                $(".lnb_menu").hide();
        }
    });


    // 넓이가 1023 이하가되면 하위메뉴 자동으로 해제
    $(window).resize(function() {
        var width = $(window).width(); 

        if(width < 1023) {
            $(".lnb_menu").hide();
            $("#lnb_bg").hide();
        } 
    });
});



$(document).ready(function(){

    $('.trigger').on('click', function(){
        $('.menu_bg').show(); 
        $('#mobile_menu').show().animate({
            right:0
        });

        $('.hamburger').show();
        $('.menu_bg').css("z-index","3");
        $('#mobile_menu').css("z-index","3");
    });

    $('.is-active').on('click', function(){
        $('.menu_bg').hide();
        $('#mobile_menu').animate({
            right: '-' + 50 + '%'
        },

            function(){
            $('#mobile_menu').hide(); 
        }); 

    });


     //모바일 버전 벗어나면 해제하기.
    $(window).resize(function() {
        var width = $(window).width(); //사용자가 보는 뷰포트 넓이 구하기

        // 넓이가 1023 이상이되면 모바일버전 해제 후 pc버전으로 변경
        if(width > 1023) {
            
            if($("#mobile_menu").is(":visible")) {
                $(".hamburger").show();
    
                /* 모바일 전체 메뉴 show */
                $('.menu_bg').hide();
                $("#mobile_menu").hide();

            }
        }
    });

});


