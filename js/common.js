$(function() {
    //headertop下拉菜单
    $(".header-top .right>div").on("click", function(e) {
        e.preventDefault();
        $(this).children("ul").slideToggle();
    });
    //选项显示
    $(".header-top .right>div:last-child li a").on("click", function(e) {
        e.preventDefault();
        var aclone = $(this).clone();
        $(this).parents("ul").siblings("a").remove();
        $(this).parents(".fl").prepend(aclone);
    });
    $(".ta>ul a").on("click", function() {
            var texts = $(this).text();
            $(this).parents("ul").siblings("a").text(texts);
        })
        //search弹窗
    $(".sea").on("click", function(e) {
        e.preventDefault();
        $(this).siblings(".search").addClass("open");
        $(this).css("display", "none");
        $(this).siblings(".x").css("display", "block");
    });
    //关闭弹窗
    $(".x").on("click", function(e) {
        e.preventDefault();
        $(this).siblings(".search").removeClass("open");
        $(this).css("display", "none");
        $(this).siblings(".sea").css("display", "block");
    });
    //flex
    $(window).on("scroll", function() {
        if ($(this).scrollTop() >= 200) {
            $(".header-nav").addClass("poa");
            $(".back").stop().animate({
                "right": 10
            }, 200);
        } else {
            $(".header-nav").removeClass("poa");
            $(".back").stop().animate({
                "right": -50
            }, 200);
        }
    });
    //返回顶部
    $(".back").on("click", function() {
        $("html").stop().animate({
            "scrollTop": 0
        }, 200)
    });
    //侧边购物栏显示
    $(".bag").on("click", function(e) {
        e.preventDefault();
        $(".first a").css("backgroundColor", "transparent");
        $(".open").animate({
            "right": 0
        }, 1000);

        $(".mask").fadeIn(1000);
    });
    //购物栏计算总价
    gsum();

    function gsum() {
        var countsum = 0;
        $(".mesg p:last-child").each(function(i, ele) {
            var gp = $(ele).text().trim();
            var cpr = gp.split("*");
            // console.log(cpr);
            var count = cpr[0] * 1;
            // console.log(count);
            var cprice = cpr[1].substring(1);
            // console.log(cprice);
            countsum = countsum + count * cprice;
        });
        $(".tosum").text("$" + countsum.toFixed(2));
    }
    //关闭侧边购物栏
    $(".clo>a").on("click", function(e) {
        e.preventDefault();
        $(".open").animate({
            "right": -400
        }, 1000);
        $(".mask").fadeOut(1000, function() {
            $(".first a").css("backgroundColor", "#fff");
        });

    });
    //购物栏删除商品功能
    $(".cl").on("click", function() {
        $(this).parent("li").remove();
        gsum();
        shcount();
    });
    //计算商品数量
    shcount();

    function shcount() {
        var cou = $(".shoplist li").length;
        // console.log(cou);
        $(".countss").text(cou);
    }
})