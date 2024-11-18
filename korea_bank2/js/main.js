$(document).ready(function(){
    $('header .gnb').on('mouseenter focusin', function(){
        $('header .gnb .depth2').removeClass('over')
        $(this).addClass('over')
    })
    $('header .gnb').on('mouseleave', function(){
        $('header .gnb').removeClass('over')
    })

    $('.news .tab li').on('click', function(){
        $('.news .tab li').removeClass('active')
        $(this).addClass('active')
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
        obj_left = -(idx-1)*1200

        $('.popup ul').animate({
            left: obj_left
        }, 500)
    }, 3000)
})