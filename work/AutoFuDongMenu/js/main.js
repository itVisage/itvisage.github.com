// JavaScript source code
$(document).ready(function () {
    //获取三个div
    var $divs = $(".main div");
    //获取所有选项卡
    var $dLis = $(".dItem");

    //浏览器窗口可视区宽高
    var $wWidth, $wHeight;

    function changeWH() {
        //获取浏览器可视区宽高
        $wWidth = $(window).width();
        $wHeight = $(window).height();
        $divs.each(function () {
            $(this).width($wWidth);
            $(this).height($wHeight);
        });
    }

    //页面加载完成后调用一次
    changeWH();
    //当浏览器窗口大小发生变化时，触发的事件
    $(window).resize(changeWH);

    //初始化
    funScroll();


    //浏览器滚动条滚动触发的事件
    $(window).scroll(funScroll);

    //条滚动事件方法
    function funScroll () {
        //获取当前滚动条的高度
        var top = $(document).scrollTop();

        //遍历所有的div
        $divs.each(function (index) {
            var $divObj = $(this);
            var thisTop = $divObj.offset().top;
            if (top >= thisTop) {
                //获取当前高亮的选项
                var $activeObj = $dLis.find(".active");
                if ($dLis[index] && $($dLis[index]) != $activeObj) {
                    $($dLis[index]).addClass("active").siblings().removeClass("active");
                }
            }
        });
    }


    //选项卡点击事件
    $dLis.click(function () {
        //更改选中项和其他兄弟节点的样式
        $(this).addClass("active").siblings().removeClass("active");
        var index = $dLis.index(this);
        //平滑到对应的div位置
        $("html,body").animate({ scrollTop: $($divs[index]).offset().top }, 300);

    })
})