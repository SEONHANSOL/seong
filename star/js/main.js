$(document).ready(function(){
    $('header .gnb .depth1 > li').on('mouseenter focusin', function(){
        $('header .gnb .depth1 > li').removeClass('over')
        $(this).addClass('over')
    })

    $('header .gnb .depth1 > li').on('mouseleave', function(){
        $('header .gnb .depth1 > li').removeClass('over')
    })
})