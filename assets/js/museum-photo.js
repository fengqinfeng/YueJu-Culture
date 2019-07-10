var path="http://47.95.218.93:8080";
var photo=new Vue({
    el: '#photoinfo',
    data: {
        rows:{},
    }
});
var photopage=new Vue({
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
        url : path+"/museum/showkind?kind=7&pagesize=8&pn="+currentpage,
        data : '',
        contentType : "application/json",
        dataType :"json" ,
        success:function(msg) {
            photo.rows=msg;

            photopage.rows2=msg;
        },
        error:function(err){
            alert("request failed！");
        }
    });
});

