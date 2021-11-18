var swiper = new Swiper('.swiper', {
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


var swiper1 = new Swiper('.tab01 .swiper1', {
    slidesPerView: 1, //480밑으로 떨어지면 1개면 보여짐
    breakpoints: {
        480: { //480 이상일 경우
            slidesPerView: 2, //레이아웃 2열
        },
        768: { //768 이상일 경우
            slidesPerView: 3, //레이아웃 2열
        },
        1024: { //1024 이상일 경우
            slidesPerView: 5, //레이아웃 5열
        },
    }, 
    pagination: {
        el: '.tab01 .swiper-pagination',
    },
    navigation: {
        nextEl: '.tab01 .swiper-button-next',
        prevEl: '.tab01 .swiper-button-prev',
    },
});

var swiper2 = new Swiper('.tab02 .swiper2', {
    slidesPerView: 1, //480밑으로 떨어지면 1개면 보여짐
    breakpoints: {
        480: { //480 이상일 경우
            slidesPerView: 2, //레이아웃 2열
        },
        768: { //768 이상일 경우
            slidesPerView: 3, //레이아웃 2열
        },
        1024: { //1024 이상일 경우
            slidesPerView: 5, //레이아웃 5열
        },
    }, 
    pagination: {
        el: '.tab02 .swiper-pagination',
    },
    navigation: {
        nextEl: '.tab02 .swiper-button-next',
        prevEl: '.tab02 .swiper-button-prev',
    },

    observer: true,
    observeParents: true,
});

var swiper3 = new Swiper('.tab03 .swiper3', {
    slidesPerView: 1, //480밑으로 떨어지면 1개면 보여짐
    breakpoints: {
        480: { //480 이상일 경우
            slidesPerView: 2, //레이아웃 2열
        },
        768: { //768 이상일 경우
            slidesPerView: 3, //레이아웃 2열
        },
        1024: { //1024 이상일 경우
            slidesPerView: 5, //레이아웃 5열
        },
    }, 
    pagination: {
        el: '.tab03 .swiper-pagination',
    },
    navigation: {
        nextEl: '.tab03 .swiper-button-next',
        prevEl: '.tab03 .swiper-button-prev',
    },

    observer: true,
    observeParents: true,
});


// 아이콘 탭 클릭시 div 컨텐츠 변화
$(".tab-wrapper .icon_box").on('click', function () {

    $(".tab-wrapper .icon_box").removeClass("on");
    $(this).addClass("on");
    $(".tab-contents").hide();
    var tabid = $(this).attr("rel");
    $("." + tabid).fadeIn();

});
