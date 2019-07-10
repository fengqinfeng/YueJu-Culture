var path="http://47.95.218.93:8080";
var news=new Vue({
    el: '#clothdetail',
    data: {
        rows:{},
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
    var currentid = $.getUrlParam('id');

    //显示第一页内容
    $.ajax({
        type : "POST",
        url : path+"/museum/selectone?id="+currentid,
        data : '',
        contentType : "application/json",
        dataType :"json" ,
        success:function(msg) {
            news.rows=msg;

        },
        error:function(err){
            alert("request failed！");
        }
    });

    //alert(currentpage);
});

