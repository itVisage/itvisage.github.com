//定义页面变量
var btn = $('#btnSend');   //获取【发送按钮】
        
//发送消息方法
btn.click(function () {
    var text = $('#sendText').val().trim();   //获取【编辑文字框】
    if (text == '') {
        alert('不能发送空消息');
    } else {
        send(text, 'Text'); //0文本消息					
    }
});

//发送消息事件
function send(msg, type) {
    var t = $("#sendText").text();
    var n = 0;
    msgShow(t, n)
}


//消息处理（显示）t：html
function msgShow(t, n) {
    try {
        if (isNullOrEmpty(t)) {
            alert("发送内容不能为空！");
            return false;
        }

        var txt = '';
        if (n == 0) {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hour = date.getHours();
            var minute = date.getMinutes();
            var second = date.getSeconds();
            var dateTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
            var nowheadimg = 'images/2.png';
            
                txt += '  <div class="meChat">' +
                          '    <div class="dateTime">' + dateTime + '</div>' +
                          '    <div class="bubble clearfix">' +
                          '        <img class="fr" src="' + nowheadimg + '" alt="Alternate Text" />' +
                          '        <div class="chatContext fr clearfix">' +
                          '            <div class="chatText fr">' + t + ' </div>' +
                          '        </div>' +
                          '    </div>' +
                          '</div>';
        } 
        $(".talkWindow").append(txt);
        $(".talkWindow").scrollTop(99999);
    }
    catch (e) { alert(e) }
}


//给聊天气泡中的图片添加点击事件
$(".bubble .chatContext img").click(function () {
    var img = new Image();
    img.src = $(this).attr('src');
    var imgWidth = img.width; //图片实际宽度 
    $(".mask").find("img").attr('src', img.src);
    if(imgWidth<$(this).parent().width()){
        $(".mask").find("img").css({ "width": "atuo", "height": "none", "position": "relative", "margin": "auto" });
    }else{
        $(".mask").find("img").css({ "width": "atuo", "height": "auto", "position": "absolute", "margin": "inherit" });
    }

    $(".mask").show();
});


        


//设置遮罩层的高度为窗口高度
$(".mask").css({ 'height': $(window).height() + 'px', "overflow": "auto" });
//遮罩层关闭按钮的事件
$(".mask .closeBtn").click(function () {
    $(".mask").hide();
})


//验证字符串是否为空
function isNullOrEmpty(strVal) {
    if (strVal == '' || strVal == null || strVal == undefined) {
        return true;
    }
    else {
        return false;
    }
}

