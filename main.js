harry_potter_song = "music.mp3";
Peter_pan_song = "music2.mp3";
leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video,modeloaded);
    poseNet.on('pose',getPoses);
}

function draw(){
    image(video,0,0,600,500);
}
function preload(){
    song = loadSound("");
}
function play(){
    song.play();
    
    song.setVolume(1);
    song.rate(1);
}
function getPoses() {
    if (SpeechRecognitionResultList.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.leftWrist.y;
        console.log("x is "+leftWristX+"Y is "+leftWristY);
        console.log("X is"+rightWristX+"Y = "+rightWristY); 
    }
}
function modeloaded() {
    console.log("Posenet is Initialized")
    }
