$(document).ready(function(){
    $('header .gnb').on('mouseenter focusin', function(){
        $('header .gnb .depth2 > li').removeClass('over')
        $(this).addClass('over')
    })
    $('header .gnb').on('mouseleave', function(){
        $('header .gnb').removeClass('over')
    })
})