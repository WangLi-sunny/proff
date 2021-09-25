$(function() {
    //small-list 下一张
    var count = 0;
    var height = $(".list li").height() + 20;
    $(".nex").on("click", function(e) {
        e.preventDefault();
        if (count < 1) {
            count++;
            $(".list").stop().animate({
                "margin-top": -count * height
            })
        }
    });
    //上一张
    $(".pre").on("click", function(e) {
        e.preventDefault();
        if (count > 0) {
            count--;
            $(".list").stop().animate({
                "margin-top": -count * height
            });
        }
    });
    //点击图片 右侧显示
    $(".list li a").on("click", function(e) {
        e.preventDefault();
        var ind = $(this).parent().index();
        $(".bg-show li").eq(ind).fadeIn().siblings().hide();
        //超大图片更改
        var src = $(".bg-show li").eq(ind).children().attr("src");
        $(".big img").attr("src", src);
    });
    //鼠标经过小盒子 遮罩层 大盒子显示
    $(".bg-show").on("mouseover", function() {
        $(".masks,.big").show();

    });
    //鼠标离开 遮罩层 大盒子隐藏
    $(".bg-show").on("mouseout", function() {
        $(".masks,.big").hide();
    });
    //遮罩层跟着鼠标移动
    $(".bg-show").on("mousemove", function(e) {
        var x = e.pageX - $(this).offset().left; //鼠标x坐标
        var y = e.pageY - $(this).offset().top; //鼠标y坐标
        var maskx = e.pageX - $(this).offset().left - 100; //鼠标到遮罩层中间移动距离
        var masky = e.pageY - $(this).offset().top - 100; //鼠标到遮罩层中间移动距离
        var maxx = $(".bg-show").width() - $(".masks").width(); //x最大距离
        var maxy = $(".bg-show").height() - $(".masks").height() //y最大距离
        if (maskx <= 0) {
            maskx = 0;
        } else if (maskx >= maxx) {
            maskx = maxx;
        }
        if (masky <= 0) {
            masky = 0;
        } else if (masky >= maxy) {
            masky = maxy;
        }
        $(".masks").css({
            "left": maskx,
            "top": masky
        });
        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        // 大图
        // 大图片最大移动距离
        var bigMax = $(".big").width() - $(".big img").width();
        // 大图片的移动距离 X Y
        var bigX = maskx * bigMax / maxx;
        var bigY = masky * bigMax / maxy;
        $(".big img").css({
            "left": bigX,
            "top": bigY
        });
    })
})