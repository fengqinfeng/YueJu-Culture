$('.video-trends').hover(function () {
    $(this).children().children().next().css("opacity", "0");
    $(this).children().children().next().next().css("opacity", "1");

}, function () {
    $(this).children().children().next().css("opacity", "1");
    $(this).children().children().next().next().css("opacity", "0");

});
$('.video-section').hover(function () {
    $(this).children().children().next().children().css("height", "40px");
    //$(this).children().next().css("opacity", "0");
    $(this).children().next().animate({opacity:"0"});
}, function () {
    $(this).children().children().next().children().css("height", "22px");
    //$(this).children().next().css("opacity", "1");
    $(this).children().next().animate({opacity:"1"});
});
$('.sidenavigation-item').hover(function () {
    $(this).css("background","#00a1d6");
}, function () {
    $(this).css("background","#e5e9ef");
});
$(document).ready(function () {//在文档加载完毕后执行
    $(window).scroll(function () {//开始监听滚动条
        var topp = $(document).scrollTop();
        if (topp > 270) {
            $("#sidenavigation").css("top","20px");
            //$("#sidenavigation").animate({top:"20px"});

        }
        if(topp<180){
            $("#sidenavigation").css("top","143px");
        }

    })

});


