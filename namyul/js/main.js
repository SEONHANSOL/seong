$(document).ready(function(){
    $('header .gnb').on('mouseenter focusin', function(){
        $('header .gnb').removeClass('over')
        $(this).addClass('over')
    })
    $('header .gnb').on('mouseleave', function(){
        $('header .gnb').removeClass('over')
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
        $('.popup ul li').eq(idx - 1).addClass('active')
    }, 3000)
})