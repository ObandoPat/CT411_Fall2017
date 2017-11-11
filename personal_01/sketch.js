var catimg;

function preload() {
  catimg = loadImage('cat3.png');
}

function setup(){
    createCanvas(650,432);
    background(0);
}

function draw(){
    
    image(catimg, 0, 0, 650, 434);
    
        noStroke();
        fill(256);
    ellipse(mouseX, mouseY, 80, 80);
}