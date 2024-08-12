$(document).ready(function(){

    $('.visual_popup .popup').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 5000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        //fade: true,  //페이드 효과 적용
        dots: true, //하단 페이지 버튼 (true, false)
        arrows: false,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        //infinite: false, //무한반복
    });

    $('.memu .list .popup').slick({
        dots: false, //하단 페이지 버튼 (true, false)
	    arrows: false,  //다음, 이전팝업 (true, false)
        variableWidth: true,
        // slidesToShow: 6,
        // swipeToSlide: true, 
        // centerMode: true,
        // responsive: [
        //     {
        //       breakpoint: 1300, //1300px 이하
        //       settings: {
        //         slidesToShow: 5
        //       }
        //     },
        //     {
        //       breakpoint: 1024,
        //       settings: {
        //         slidesToShow: 4
        //       }
        //     },
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         slidesToShow: 3
        //       }
        //     },
        //     {
        //       breakpoint: 375,
        //       settings: {
        //         slidesToShow: 2
        //       }
        //     },
        // ]
    })

}) //$(document).ready