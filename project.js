difference = 0;
leftWristX = 0;
rigthWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550)
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw(){
    background('ffaf7a');

    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference + "px";
    fill('#FFD700')
    textSize(difference);
    text('Inarah', 50, 400)
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
 if (results.length > 0)
 {
     console.log(results);
     leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
     difference = floor(leftWristX - rightWristX);

     console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
 }
}