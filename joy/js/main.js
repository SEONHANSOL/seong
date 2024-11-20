$(document).ready(function(){
    $('.news .tab li').on('click', function(){
        $('.news .tab li').removeClass('active')
        $(this).addClass('active')
    })

    let idx = 1
    let obj_left

    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        obj_left = -(idx - 1)*1200


        $('.popup ul').animate({
            left: obj_left
        })

    }, 1000)
})