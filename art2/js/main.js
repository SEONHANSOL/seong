$(document).ready(function(){
    $('header .gnb .depth1 > li').on('mouseenter focusin', function(){
        $('header .gnb .depth1 > li').removeClass('over')
        $(this).addClass('over')
    })
    $('header .gnb .depth1 > li').on('mouseleave', function(){
        $('header .gnb .depth1 > li').removeClass('over')
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
    let obj_top = 0

    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        obj_top = -(idx - 1)*305

        $('.popup ul').animate({
            top: obj_top
        })

    }, 3000)
})