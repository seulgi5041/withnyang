
// 일정 부분 넘으면 상단버튼 나옴
$(function (){
    $(window).scroll(function(){
        // 250 넘으면 상단버튼 나옴
        if ($(this).scrollTop() > 120 ) {
            $(".topBtn").fadeIn();
            // $(".topBtn").css('up', $("#main_content").offset().up());
        }else {
            $(".topBtn").fadeOut();
        };
    });

    // top버튼 누르면 위로 올라감.
    $(".topBtn").click(function(){
        $("html, body").animate({
            scrollTop : 0
        }, 500);
        return false;
    });
});


// plusBtn 버튼 누르면 위에 버튼 나옴
$(function(){
    $('.plusBtn').click(function(){

        $('.bookBtn').toggle();
        $('.mapBtn').toggle();
        $('.chatBtn').toggle();
    
    });
});




//toggle 이벤트로 기능 부여
// $(document).ready(function(){
//         btn = $('.plusBtn'); //버튼 아이디 변수 선언
//         layer = $('.chatBtn'); //레이어 아이디 변수 선언

//         btn.click(function(){
//             layer.toggle(function(){
//                 layer.addClass('.plus_show')
//             }, //클릭하면 show클래스 적용되서 보이기

//             function(){
//                 layer.addClass('.plus_hide')
//             } //한 번 더 클릭하면 hide클래스가 숨기기
//         );
//     });
// });



// 푸터 언어창
$(function(){
    $('.lang p').click(function(){
        $('.eng').toggle();
    
    });
});

