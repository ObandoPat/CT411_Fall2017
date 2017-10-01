var circX;
var circY;
var circDiameter = 500;
var circRadius = circDiameter/2;
var d;
var redCol = 231;
var blueCol = 0;
var isClicked = false
var img1;
var img2;
var swisFont;

function preload(){
    img1 = loadImage("arnold2.png");
    img2 = loadImage("happypup.png");
    swisFont = loadFont("swissck.ttf");
}

function setup(){
    createCanvas(1500, 750);
    circX = width/4;
    circY = height/2;
    textFont(swisFont);
    textSize(40);
}

function draw(){
    background(redCol,0,blueCol);
        fill(0);
    ellipse(circX, circY, circDiameter, circDiameter);
    d = dist(circX, circY, mouseX, mouseY);
    text("Slide the cursor from left to right. Once you're done click the circle.", width/9, 50, width, 50);
    
    if(d < circRadius && isClicked == false){
            imageMode(CENTER);
        image(img1, width/4, height/2, 500, 500);
            fill(256);
        text("MOVE AWAY! YOU DISGUST ME!", mouseX, mouseY, 150, 800);
    } else if(d < circRadius + 150 && isClicked == false){
        text("BACK OFF BRUH", mouseX, mouseY, 150, 800);
    } else if(d < circRadius + 300 && isClicked == false){
        text("FURTHER", mouseX, mouseY, 200, 800);
    } else if(d < circRadius + 450 && isClicked == false){
        text("STAY AWAAAAA AAAAAAAY", mouseX, mouseY, 150, 800);
    } else if(d < circRadius + 600 && isClicked == false){
        text("AWAY WITH YOU", mouseX, mouseY, 150, 800);
    } else if(d < circRadius + 1000 && isClicked == false){
        text("STAY THERE WHERE YOU BELONG YOU FILTH", mouseX, mouseY, 150, 800);
    } else if(d < circRadius && isClicked){
            imageMode(CENTER);
        image(img2, width/4, height/2, 500, 500);
            fill(256);
        text("Yay :)", mouseX, mouseY, 150, 800);
    } else if(d < circRadius + 150 && isClicked){
        text("noooo closeeeer", mouseX, mouseY, 150, 800);
    } else if(d < circRadius + 300 && isClicked){
        text("baaaaabe", mouseX, mouseY, 200, 800);
    } else if(d < circRadius + 450 && isClicked){
        text("come cuddleeeeee", mouseX, mouseY, 150, 800);
    } else if(d < circRadius + 600 && isClicked){
        text("come to meeeee", mouseX, mouseY, 150, 800);
    } else if(d < circRadius + 1000 && isClicked){
        text("wait noooo babe ilu come back", mouseX, mouseY, 150, 800);
    }
    
    
}



function mousePressed(){
    if(d < circRadius && isClicked){
        redCol = 255;
        blueCol = 0;
        isClicked = !isClicked;
    } else if(d < circRadius && isClicked == false){
        redCol = 0;
        blueCol = 255;
        isClicked = !isClicked;
    }
}