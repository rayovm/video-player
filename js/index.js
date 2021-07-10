const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener('click', function () {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
});

$pause.addEventListener('click', function () {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
});

$backward.addEventListener('click', function () {
    $video.currentTime -= 10;
});

$forward.addEventListener('click', function () {
    $video.currentTime += 10;
});

const $progress = document.querySelector('#progress');

$video.addEventListener('loadedmetadata', function(){
    $progress.max = $video.duration;
});

$video.addEventListener('timeupdate', function(){
    $progress.value = $video.currentTime;
});

$progress.addEventListener('input', function(){
    $video.currentTime = $progress.value;
});
