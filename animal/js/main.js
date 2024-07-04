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
    
    
    /*
        일시정지 버튼을 클릭하면, 팝업은 일시정지가 되고 일시정지는 사라짐. 다시시작 버튼은 나타남
        다시시작 버튼을 클릭하면, 팝업은 재생이 되고 다시시작은 사라짐. 일시정지 버튼은 나타남
    */

    $('.visual .btn_wrap button.btn_stop').on('click',function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .btn_wrap button.btn_play').show()
    })
    $('.visual .btn_wrap button.btn_play').on('click',function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .btn_wrap button.btn_stop').show()
    })

    /*
        페이지가 스크롤되면 header에 fixed 클래스를 추가
        다시 맨 위로 올라가면 header에 fixed 클래스 삭제
    */

    let scrolling

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }

    //문서가 처음 로딩되었을때 1번 실행

    scroll_chk()

    $(window).scroll(function(){
        //브라우저를 스크롤 할때마다 실행
        scroll_chk()
    })


    

    /* find swipper */
    const find01_swiper = new Swiper('.find .tab .find01 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 'auto',
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        navigation: {
            nextEl: '.find .tab .find01 .btn_wrap .next',
            prevEl: '.find .tab .find01 .btn_wrap .prev',
        },
    }); //find01_swiper

    const find02_swiper = new Swiper('.find .tab .find02 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 'auto',
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        navigation: {
            nextEl: '.find .tab .find01 .btn_wrap .next',
            prevEl: '.find .tab .find01 .btn_wrap .prev',
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        navigation: {
            nextEl: '.find .tab .find02 .btn_wrap .next',
            prevEl: '.find .tab .find02 .btn_wrap .prev',
        },
    }); //find02_swiper
        

    /*
        find의 탭메뉴
        .find .tab > ul > li 를 클릭하면
        클릭한 li에만 on클래스를 줌
        1. 원래 html에 기본적으로 하나의 li에 on클래스가 있어야함
           juqery에서 클릭하면 on을 다른 li에는 주는 것 뿐..
    */
    $('.find .tab > ul > li').on('click', function(){
        /* 모든 li에 있는 on 클래스를 모두 지웠다가*/
        $('.find .tab > ul > li').removeClass('on')
        /* click한 li에만 다시 on클래스를 줌 */
        $(this).addClass('on')
    })


    /* family의 swiper */
    const family_swiper = new Swiper('.family .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 'auto',
                spaceBetween: 24,
            },
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.family .btn_wrap .next',
            prevEl: '.family .btn_wrap .prev',
        },
    });

    /*
        family_site 열고 닫기
        : footer .family_site button.open 를 클릭하면 family_site에 open 클래스를 주것
        footer .family_site button.close 를 클릭하면 family_site에 open 클래스를 삭제될것
    */

    $('footer .family_site button.open').on('click',function(){
        $('footer .family_site').addClass('open')
    })
    $('footer .family_site button.close').on('click',function(){
        $('footer .family_site').removeClass('open')
    })
})