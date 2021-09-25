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
    //deal鼠标经过显示
    $(".delcontent-top").hover(function() {
        $(this).children(".add").stop().animate({
            "bottom": 0
        }, 500);
        $(this).children(".wish").stop().fadeIn(200, function() {
            console.log($(this).find(".se"));
            console.log($(this).find(".se").css("transform"));
            $(this).find(".se").css({
                "top": 0
            });
            $(this).find(".fi").css({
                "top": 0
            })
        });
    }, function() {
        $(this).children(".add").stop().animate({
            "bottom": -50
        }, 500);
        $(this).children(".wish").stop().fadeOut(500, function() {
            $(this).find(".se").css({
                "top": 20
            });
            $(this).find(".fi").css({
                "top": -20
            })
        });
    });
    //greater下一张图片
    // var num = 0;
    // var width = $(".del-list li").width() + 30;
    // console.log(width);
    //将第一个li复制到最后 实现无缝滚动
    // var li = $(".del-list li").eq(0).clone();
    // $(".del-list").append(li);
    // $(".greater").on("click", function(e) {
    //     e.preventDefault();
    //     if (num === 5) {
    //         num = 0;
    //         $(".del-list").css("left", 0);
    //     }
    //     num++;
    //     console.log(num);
    //     $(".del-list").stop().animate({
    //         "left": -num * width,
    //     });
    // })
    // $(".less").on("click", function(e) {
    //     e.preventDefault();
    //     if (num <= 0) {
    //         num = 5;
    //         $(".del-list").css("left", -5 * width);
    //     }
    //     num--;
    //     $(".del-list").stop().animate({
    //         "left": -num * width,
    //     });
    // });
    //减数
    $(".jian").on("click", function(e) {
        e.preventDefault() * 1;
        var num = $(".count span").text();
        console.log(num);
        if (num > 0) {
            $(".count span").text(num - 1);
        }
    });
    //加数
    $(".jia").on("click", function(e) {
        e.preventDefault();
        var num = $(".count span").text() * 1;
        // console.log(num);
        if (num < 10) {
            $(".count span").text(num + 1);
        }
    });
    //点击那个显示哪个 hot
    $(".men-list li a").on("click", function(e) {
        e.preventDefault();
        $(this).parent("li").css("border-bottom", "3px solid #e97730").siblings("li").css("border-bottom", "none");
        $(this).css("color", "#e97730").parent().siblings("li").children().css("color", "");
        var ind = $(this).parent().index();
        console.log(ind);
        $(".item").eq(ind).fadeIn().siblings(".item").fadeOut();
    });
    //show
    $(".show").hover(function() {
        $(this).addClass("showactive");
        $(this).removeClass("showno");
    }, function() {
        $(this).removeClass("showactive");
        $(this).addClass("showno");
    });
    /*  a标签下横线 */
    $(".header-nav nav li a").hover(function() {
        $(this).addClass("aactive");
        $(this).removeClass("aano");
    }, function() {

        $(this).removeClass("aactive");
        $(this).addClass("aano");
    });
    /* baaner轮播 */
    //加
    $(".dy").on("click", function(e) {
        e.preventDefault();
        var ind = $(".activeitem").index();
        ind++;
        if (ind > $(".item1").length - 1) {
            ind = 0;
        }
        // console.log(ind);
        $(".item1").eq(ind).fadeIn(1000).addClass("activeitem").siblings().fadeOut(1000).removeClass("activeitem");

    });
    //减
    $(".xy").on("click", function(e) {
        e.preventDefault();
        var ind = $(".activeitem").index();
        ind--;
        console.log();
        if (ind < 0) {
            ind = $(".item1").length - 1;
        }
        console.log(ind);
        $(".item1").eq(ind).fadeIn(1000).addClass("activeitem").siblings().fadeOut(1000).removeClass("activeitem");

    });
})