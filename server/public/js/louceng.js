$(function () {
    var toolTop = $(".recom").offset().top;
    var flag = true;
    toggleTool();
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    $(window).scroll(function () {
        toggleTool();
        if (flag) {
            $(".floor .w").each(function (i, e) {
                if ($(document).scrollTop() >= $(e).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            });
        }
    })
    $(".fixedtool li").click(function () {
        flag = false;
        var current = $(".floor .w").eq($(this).index()).offset().top;
        $("body, html").stop().animate({
            scrollTop: current
        },
        function() {
            flag = true;
        })
        $(this).addClass("current").siblings().removeClass();
    });
})