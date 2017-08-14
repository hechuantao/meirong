/**
 * Created by Administrator on 2017/8/10.
 */

/*
var len1=$('.hd1 ul li').length;

$('.hd1 ul li').mouseover(function () {
    for(i=0;i<len1;i++){
        $('.bd1 .box1').eq(i).css('display','none')
    }
    $('.bd1 .box1').eq($(this).index()).css('display','block');

    $('.box1 button').click(function(){
        $('.box1').remove()
    })
})*/


/*
var len1=$('.hd1 ul li').length;

$('.box1 button').click(function(){
    $('.box1').remove()
})

$('.hd1 ul li').mouseover(function () {
    for(i=0;i<len1;i++){
        $('.bd1 .box1').eq(i).css('display','none')
    }
    $('.bd1 .box1').eq($(this).index()).css('display','block');
})*/


var len1=$('.hd1 ul li').length;

$('.bd_div button').click(function(){
    $('.bd_div').hide()
})

$('.hd1 ul li').mouseover(function () {
    for(i=0;i<len1;i++){
        /*$('.bd_div').show()*/
        $('.bd1 .bd_div').eq(i).css('display','none')
    }
    $('.bd1 .bd_div').eq($(this).index()).css('display','block');
})

