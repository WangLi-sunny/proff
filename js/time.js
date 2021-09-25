window.addEventListener("load", function() {
    //倒计时功能
    var inputTime = +new Date('2022-5-1 18:00:00'); // 返回的是用户输入时间总的毫秒数
    countDown(); //防止第一次刷新页面有空白 
    // 2. 开启定时器
    setInterval(countDown, 1000);

    function countDown() {
        var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
        var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数 
        var h = parseInt(times / 60 / 60 % 24); //时
        h = h < 10 ? '0' + h : h;
        $(".hour").text(h)
        var m = parseInt(times / 60 % 60); // 分
        m = m < 10 ? '0' + m : m;
        $(".minute").text(m);
        var s = parseInt(times % 60); // 当前的秒
        s = s < 10 ? '0' + s : s;
        $(".second").text(s);
    }
})