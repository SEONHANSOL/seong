$(document).ready(function(){
    $('header .gnb .depth1 > li').on('mouseenter focusin', function(){
        $('header .gnb .depth1 > li').removeClass('over')
        $(this).addClass('over')
    })
    $('header .gnb .depth1 > li').on('mouseleave', function(){
        $('header .gnb .depth1 > li').removeClass('over')
    })
    $('.layer_open').on('click', function(){
        $('.layer_popup').show()
    })
    $('.layer_popup button').on('click', function(){
        $('.layer_popup').hide()
    })

    let idx = 1
    let obj_left = 0

    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        obj_left = -(idx - 1)*800

        $('.popup ul').animate({
            left: obj_left
        })
    }, 3000)
})