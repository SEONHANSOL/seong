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


  const popup_swiper = new Swiper('.popup .swiper', { /* 팝업을 감싼는 요소의 class명 */

    autoplay: {  /* 팝업 자동 실행 */
        delay: 5000,
        disableOnInteraction: true,
    },

    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        el: '.popup .paging', /* 해당 요소의 class명 */
        clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        type: 'fraction',
        renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		    return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
    },
    

    navigation: {  /* 이전, 다음 버튼 */
        nextEl: '.popup .btn_next',  /* 다음 버튼의 클래스명 */
        prevEl: '.popup .btn_prev',  
    },

  });
  popup_swiper.autoplay.stop();  /* 일시정지 기능 */
  popup_swiper.autoplay.start();  /* 재생 기능 */

  $('.container .main_inner .popup button.btn_stop').on('click', function(){
    popup_swiper.autoplay.stop();
    $(this).hide() //숨김
    $('.container .main_inner .popup button.btn_play').show() //보이기
  })
  $('.container .main_inner .popup button.btn_play').on('click', function(){
    popup_swiper.autoplay.start();
    $(this).hide() //숨김
    $('.container .main_inner .popup button.btn_stop').show() //보이기
  })

    /*
    1. 탭버튼을 클릭하면 active 클래스 추가 (클릭한 li에만)
        .news_ppzone .tab_area .tab_btn ul li
    2. 클릭한 li에만 aria-selected="true" 나머지는 모두 false
    3. 클릭한 li에서 aria-controls값을 가져와서
        하단 콘텐츠 중에서 같은 이름의 id를 갖은 요소에만 active클래스 추가
        .news_ppzone .tab_area .tab_cnt div[role="tabpanel"]
    
        find라는 명령으로 id가 aria-controls값과 같은 요소를 찾아야함..
        find는 하위요소를 검색하는 기능..
        선택자가 tabpanel을 직접 선택하는게 아니라 그 부모 요소를 선택해서
        하위 요소를 검색하게 해야함..
*/

    let tab_btn = $('.news_ppzone .tab_area .tab_btn ul li')
    let tab_name
    let tab_cnt = $('.news_ppzone .tab_area .tab_cnt div[role="tabpanel"]')
    let tab_cnt_parent = $('.news_ppzone .tab_area .tab_cnt')

    tab_btn.on('click', function(){
        tab_btn.removeClass('active')
        $(this).addClass('active')
        tab_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')
        tab_name = $(this).attr('aria-controls')
        tab_name = '#' + tab_name //id선택자를 추가로 삽입
        console.log(tab_name)
        tab_cnt.removeClass('active')
        tab_cnt_parent.find(tab_name).addClass('active')
    })


    const ppzone_swiper = new Swiper('.ppzone .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.ppzone .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.ppzone .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.ppzone .btn_prev',  
        },

    });
    ppzone_swiper.autoplay.stop();  /* 일시정지 기능 */
    ppzone_swiper.autoplay.start();  /* 재생 기능 */

    $('.news_ppzone .ppzone button.btn_stop').on('click', function(){
        ppzone_swiper.autoplay.stop();
        $(this).hide() //숨김
        $('.news_ppzone .ppzone button.btn_play').show() //보이기
    })
    $('.news_ppzone .ppzone button.btn_play').on('click', function(){
        ppzone_swiper.autoplay.start();
        $(this).hide() //숨김
        $('.news_ppzone .ppzone button.btn_stop').show() //보이기
    })


    const citizen_swiper = new Swiper('.citizen .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            1: {    /* 640px 이상일때 적용 */
                slidesPerView: 1,
                spaceBetween: 16,
            },
            400: {    /* 640px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 16,
            },
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 16,
            },
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            },
            1280: {    /* 1280px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 25000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.citizen .btn_next',
            prevEl: '.citizen .btn_prev',
        },
    });
    citizen_swiper.autoplay.stop();  /* 일시정지 기능 */
    citizen_swiper.autoplay.start();  /* 재생 기능 */
	
    $('.citizen button.btn_stop').on('click', function(){
        ppzone_swiper.autoplay.stop();
        $(this).hide() //숨김
        $('.citizen button.btn_play').show() //보이기
    })
    $('.citizen button.btn_play').on('click', function(){
        ppzone_swiper.autoplay.start();
        $(this).hide() //숨김
        $('.citizen button.btn_stop').show() //보이기
    })

})