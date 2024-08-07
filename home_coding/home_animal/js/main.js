$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_prev',  
        },
    });
     /* 일시정지 기능 */
      /* 재생 기능 */

    /*
        일시정지 버튼을 클릭하면
        팝업은 일시정지가 되고
        일시정지 버튼은 숨김처리
        다시시작 버튼은 나타남

        다시시작 버튼을 클릭하면
        팝업은 재생되고
        다시시작 버튼은 숨김처리
        일시정지 버튼은 나타남
    */
    $('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop(); 
        $(this).hide()
        $('.visual .btn_wrap button.btn_play').show()
    })
    $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start(); 
        $(this).hide()
        $('.visual .btn_wrap button.btn_stop').show()
    })
    

})