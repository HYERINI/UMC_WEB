$(function(){
    $('.accordion .title').click(function(){
        $(this).siblings('.content').slideUp();
        $(this).next().stop().slideToggle(300);
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    })
})
