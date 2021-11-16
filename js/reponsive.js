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

});

