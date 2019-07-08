$("body").one('click',function () {
    var audio = document.getElementById('music');
    audio.play();
});
function play() {
    var audio = document.getElementById('music');
    if (audio.paused) {
        $("#musicicon").removeClass("stop");
        $("#musicicon").addClass("xuanzhuan");
        audio.play();

        //document.getElementById('musicImg').src="images/play.png";
    }else{
        $("#musicicon").removeClass("xuanzhuan");
        $("#musicicon").addClass("stop");

        audio.pause();
        audio.currentTime = 0;//音乐从头播放

        //document.getElementById('musicImg').src="images/stop.png";
    }
}