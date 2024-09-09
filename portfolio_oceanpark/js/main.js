$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            
        },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
            prevEl: '.swiper-button-prev',  
        },

    });
    visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    visual_swiper.autoplay.start();  /* 재생 기능 */

    $('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();
        $(this).hide() //숨김
        $('.visual .btn_wrap button.btn_play').show() //보이기
      })
      $('.visual .btn_wrap button.btn_play').on('click', function(){
          visual_swiper.autoplay.start();
          $(this).hide() //숨김
          $('.visual .btn_wrap button.btn_stop').show() //보이기
      })

    AOS.init({
        offset: 150, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 1200, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });


    const room_swiper = new Swiper('.room .swiper', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.room .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="item'+ (index + 1) +' ' + className + '"></span>';
            },
        },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
            prevEl: '.swiper-button-prev',  
        },
        

    });
    visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    visual_swiper.autoplay.start();  /* 재생 기능 */

    $('.tour .list .popup').slick({
        slidesToShow: 5,
        dots: false, //하단 페이지 버튼 (true, false)
	    arrows: false,  //다음, 이전팝업 (true, false)
        swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
        centerMode: true, //가운데정렬(가운데가 1번)
        responsive: [
            {
              breakpoint: 1300, //1300px 이하
              settings: {
                slidesToShow: 4
              }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1
              }
            },
        ]
    })

})