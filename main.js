harry_potter_song = "music.mp3";
Peter_pan_song = "music2.mp3";

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
function preload(){
    song = loadSound("");
}
function play(){
    song.play();
}