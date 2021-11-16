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

            $(".lnb_menu > .drodown1").css("z-index", "2");
            $(".lnb_menu > .drodown2").css("z-index", "2");
            $(".lnb_menu > .drodown3").css("z-index", "2");
            $(".lnb_menu > .drodown4").css("z-index", "2");
            $(".lnb_menu > .drodown5").css("z-index", "2");
        },

        "mouseleave" : function() {
        }
    });

    $(".lnb_menu").on({
        "mouseleave" : function() {
                $(".lnb_menu").removeClass("appear");
                $(".lnb_menu").addClass("disappear");
                $(".lnb_menu").hide();
        }
    });


    // 넓이가 1023 이상이되면 하위메뉴 자동으로 해제
    $(window).resize(function() {
        var width = $(window).width(); 

        if(width < 1023) {
            $(".lnb_menu").hide();
        } 
    });



    /* 모바일 햄버거 메뉴 클릭 시 나오게 하기 */
    $(".trigger").on({
        "click" : function(){

            if($(".hamburger").is(":visible")) {
                /* 모바일 닫기 버튼 show */


                /* 모바일 전체 메뉴 show */
                $("#main_header").hide();
                $("#main_container").hide();
                $("#main_footer").hide();
                $(".topBtn").hide();
                $(".plusBtn").hide();
                $(".trigger").show();
                $("#mobile_menu").show();
                //#mobile_menu 하위 태그 초기화
                $("#mobile_menu").empty(); 


                var nav = $(".header_menu").clone();

                $("#mobile_menu").append(nav);
                $("#mobile_menu").show();


                
            } else {
                // 닫기 메뉴 버튼이 보일때
                /* 모바일 햄버거 버튼 show */ 

                /* 전체 메뉴 show */
                $("#main_header").height();
                $("#main_content").show();
                $("#main_footer").show();
                $(".topBtn").show();
                $(".plusBtn").show();
                $("#mobile_menu").hide();
            }

        }

    });


    //모바일 버전 벗어나면 해제하기.
    $(window).resize(function() {
        var width = $(window).width(); //사용자가 보는 뷰포트 넓이 구하기

        // 넓이가 767 이상이되면 모바일버전 해제 후 pc버전으로 변경
        if(width > 1023) {
            $(".nav li").eq(4).show()

            if($("#mobile_menu").is(":visible")) {
                $(".moblie_hamburger").show();
                $(".moblie_close").hide();

                /* 모바일 전체 메뉴 show */
                $("#main_header").height();
                $("#main_content").show();
                $("#main_footer").show();

                $("#mobile_menu").hide();

            }
        }
    });





});

