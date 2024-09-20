$(document).ready(function(){

  /*
        header에 마우스를 올리거나,
        브라우저가 스크롤되면 header에 fixed 클래스가 들어감
        --> pc/mobile 상관없이 언제나 구현

        header .gnb .gnb_wrap ul.depth1 > li
        메뉴에 마우스를 올리면 
        1. header에 menu_over 클래스를 추가
        2. 마우스를 오버한 li에 on클래스를 추가
        --> pc에서만 구현
    */    
        let win_w
        let pc_mobile
        let scrolling
    
  function resize_chk(){
      win_w = $(window).width()
      if(win_w > 1024){
          pc_mobile = 'pc'
      }else{
          pc_mobile = 'mobile'
      }        
      console.log(pc_mobile)
  } //function
  
  // 브라우저가 로딩되었을때 단 한번 실행
  resize_chk()

  $(window).resize(function(){ //브라우저가 리사이즈 할때마다 1번 실행
      resize_chk()
  }) // $(window).resize

  $('header').on('mouseenter focusin', function(){
      $(this).addClass('fixed')
  })
  $('header').on('mouseleave', function(){
      
      //마우스를 아웃했을때 fixed클래스를 삭제하는건 맨 상단에 있을때만 가능
      if(scrolling <= 0){ //scroll값이 o과 같거나 작을때
          $(this).removeClass('fixed')
      }
  })
    
  function scroll_chk(){
      scrolling = $(window).scrollTop()
      if(scrolling > 0){ //스크롤이 조금이라도 되었다면
          $('header').addClass('fixed')
      }else{
          $('header').removeClass('fixed')
      }
      console.log(scrolling)
  }
  scroll_chk() //브라우저가 로딩되었을때 한번 실행
  $(window).scroll(function(){ //스크롤 할때마다 한번 실행
      scroll_chk()
  })

  $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
      if(pc_mobile == 'pc'){
          $('header').addClass('memu_over')
          $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
          $(this).addClass('on')
      }
  })
  $('header').on('mouseleave', function(){
      if(pc_mobile == 'pc'){
          $('header').removeClass('memu_over')
          $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
      }
  })
  $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child > a ').on('focusout', function(){
      if(pc_mobile == 'pc'){
          $('header').removeClass('memu_over')
          $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
      }
  })
        
    
  /* 
      모바일 메뉴를 클릭하면
      1. a 링크값을 삭제해야함 (이동을 못하게 막아야함)
      2. li에 open 클래스를 추가
          open없으면 추가
          open있으면 삭제
          --> 한번 클릭하면 열리고 두번 클릭하면 닫힘
  */
  $("header .gnb .gnb_wrap ul.depth1 > li > a").on("click", function(e){
      if(pc_mobile == 'mobile'){
          e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
          $(this).parent().toggleClass('open')
      }
  });

  /* 
      header .gnb .gnb_open
      메뉴열기를 클릭하면 header에 menu_open 클래스 추가
      메뉴닫기를 클릭하면 header에 menu_open 삭제
      header .gnb .gnb_close
  */
  $('header .gnb .gnb_open').on('click', function(){
      $('header').addClass('menu_open')
      $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
  })
  $('header .gnb .gnb_close').on('click', function(){
      $('header').removeClass('menu_open')
      $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
  })


  const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

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
        nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
        prevEl: '.visual .btn_prev',  
    },

  });
  visual_swiper.autoplay.stop();  /* 일시정지 기능 */
  visual_swiper.autoplay.start();  /* 재생 기능 */

  /*
  .visual .btn_wrap button.btn_stop
  일시정지버튼을 클릭하면 
  1. 팝업 일시정지
  2. 일시정지 버튼은 숨김, 재생버튼 나타남

  .visual .btn_wrap button.btn_play
  재생버큰을 클릭하면
  1. 팝업은 다시시작
  2. 재생버튼은 숨김, 일시정지 버튼은 나타남
  */

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

  const story_swiper = new Swiper('.story .swiper', { /* 팝업을 감싼는 요소의 class명 */
    slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
    spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
    breakpoints: {
      700: {   /* 1024px 이상일때 적용 */
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
    },
    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    autoplay: {  /* 팝업 자동 실행 */
      delay: 2500,
      disableOnInteraction: true,
    },
  });

  /*
  .subject .list ul li 한테 오버한 li에만 active 클래스를 추가
  이전에 active를 가지고 있었던 li에서는 active클래스를 삭제할것임

  이전에 오버한 li는 알기 어려움
  그래서 모든 li에 있는 active 클래스를 모두 삭제하고,
  오버한 li에만 다시 active 클래스를 추가 할 것임
  */

  $('.subject .list ul li').on('mouseenter', function(){
    $('.subject .list ul li').removeClass('active')
    $(this).addClass('active')
  })

  const subject_swiper = new Swiper('.subject .swiper', { /* 팝업을 감싼는 요소의 class명 */
    slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
    spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
    breakpoints: {
        640: {  /* 640px 이상이 되면 적용 */
            spaceBetween: 24, 
        },
    },
    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
});
})