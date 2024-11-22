$(document).ready(function(){
    $('.inner .gnb .depth1').on('mouseenter focusin', function(){
        $('.inner .gnb .depth1').removeClass('over')
        $(this).addClass('over')
    })
    $('.inner .gnb .depth1').on('mouseleave', function(){
        $('.inner .gnb .depth1').removeClass('over')
    })

    let idx = 1

    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }

        $('.inner .gnb .depth1 > li').removeClass('active')
        $('.inner .gnb .depth1 > li').eq(idx - 1).addClass('active')
    }, 1000)
})