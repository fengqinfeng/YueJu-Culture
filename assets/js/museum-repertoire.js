var path="http://47.95.218.93:8080";
var repertoiresinfo=new Vue({
    el: '#reperinfo',
    data: {
        rows:{},
    }
});
var reperpage=new Vue({
    el: '#paging',
    data: {
        rows2:{},
    }
});
// var muclassification=new Vue({
//     el: '#classification',
//     data: {
//         rows3:{},
//     }
// });
// $.ajax({
//     type : "POST",
//     url : path+"/museum/showclass",
//     data : '',
//     contentType : "application/json",
//     dataType :"json" ,
//     success:function(msg) {
//         muclassification.rows3=msg;
//     },
//     error:function(err){
//         alert("request failed！");
//     }
// });
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
        url : path+"/museum/showkind?kind=5&pn="+currentpage,
        data : '',
        contentType : "application/json",
        dataType :"json" ,
        success:function(msg) {
            repertoiresinfo.rows=msg;
            reperpage.rows2=msg;
        },
        error:function(err){
            alert("request failed！");
        }
    });

    //alert(currentpage);
});

