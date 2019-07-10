var path="http://47.95.218.93:8080";
var newinfomation=new Vue({
    el: '#newsall',
    data: {
        rows:{},
    }
});
var newspage=new Vue({
    el: '#paging',
    data: {
        rows2:{},
    }
});
$(function () {

    (function ($) {
        $.getUrlParam = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
    })(jQuery);
    var currentpage = $.getUrlParam('pn');

    //显示第一页内容
    $.ajax({
        type : "POST",
        url : path+"/news/showall?pn="+currentpage,
        data : '',
        contentType : "application/json",
        dataType :"json" ,
        success:function(msg) {
            //alert(msg);
            newinfomation.rows=msg;
            newspage.rows2=msg;
            //alert(newspage.rows2.hasPreviousPage);
        },
        error:function(err){
            alert("request failed！");
        }
    });

    //alert(currentpage);
});

