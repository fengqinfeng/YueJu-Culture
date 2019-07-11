var path="http://47.95.218.93:8080";

$.ajax({
    type : "POST",
    url : path+"/home/news",
    data : '',
    contentType : "application/json",
    dataType :"json" ,
    success:function(msg) {
        //alert(msg);
        new Vue({
            el: '#least-news',
            data: {
                rows:msg
            }
        });
    },
    error:function(err){
        alert("request failed！");
    }
});
