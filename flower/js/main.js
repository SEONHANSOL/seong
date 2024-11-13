$(document).ready(function(){
    $('header .gnb .depth1 > li').on('mouseenter focuin', function(){
        $('header .gnb .depth1 > li').removeClass('over')
        $(this).addClass('over')
    })
    $('header .gnb .depth1 > li').on('mouseleave focuin', function(){
        $('header .gnb .depth1 > li').removeClass('over')
    })

    $('.layer_open').on('click', function(){
        $('.layer_popup').show()
    })
    $('.layer_popup button').on('click', function(){
        $('.layer_popup').hide()
    })


    let idx = 1

    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        
        console.log(idx)

        $('.popup ul li').removeClass('active')
        $('.popup ul li').eq(idx-1).addClass('active')
    }, 3000)
})