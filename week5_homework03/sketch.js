var circaX = 0;
var circaY = 5;

var circbY = 0;
var circbX = 50;

var speed = 10;

var state = 1;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255, 10, 100);
}

function draw(){
    if(state == 1){
        stroke(255,234,108);
        fill(255,234,108);
    ellipse(circaX, circaY, 100, 100);
    ellipse(circaX, circaY+100, 100, 100);
    ellipse(circaX, circaY+200, 100, 100);
    ellipse(circaX, circaY+300, 100, 100);
    ellipse(circaX, circaY+400, 100, 100);
    ellipse(circaX, circaY+500, 100, 100);
    ellipse(circaX, circaY+600, 100, 100);
    ellipse(circaX, circaY+700, 100, 100);
    ellipse(circaX, circaY+800, 100, 100);
    ellipse(circaX, circaY+900, 100, 100);
    ellipse(circaX, circaY+1000, 100, 100);
    ellipse(circaX, circaY+1100, 100, 100);
    ellipse(circaX, circaY+1200, 100, 100);
    ellipse(circaX, circaY+1300, 100, 100);
    ellipse(circaX, circaY+1400, 100, 100);
    ellipse(circaX, circaY+1500, 100, 100);
    ellipse(circaX, circaY+1600, 100, 100);
    ellipse(circaX, circaY+1700, 100, 100);
    ellipse(circaX, circaY+1800, 100, 100);
    ellipse(circaX, circaY+1900, 100, 100);
    ellipse(circaX, circaY+2000, 100, 100);
    ellipse(circaX, circaY+2100, 100, 100);
    ellipse(circaX, circaY+2200, 100, 100);
    ellipse(circaX, circaY+2300, 100, 100);
    ellipse(circaX, circaY+2400, 100, 100);
    ellipse(circaX, circaY+2500, 100, 100);
    ellipse(circaX, circaY+2600, 100, 100);
    ellipse(circaX, circaY+2700, 100, 100);
    ellipse(circaX, circaY+2800, 100, 100);
    ellipse(circaX, circaY+2900, 100, 100);
    ellipse(circaX, circaY+3000, 100, 100);
    ellipse(circaX, circaY+3100, 100, 100);
    ellipse(circaX, circaY+3200, 100, 100);
    ellipse(circaX, circaY+3300, 100, 100);
        circaX = circaX + speed;
        circaY = circaY - speed;
    }else if(state == 2) {      
        stroke(0);
        fill(0);
    ellipse(circbX, circbY, 100, 100);
    ellipse(circbX+100, circbY, 100, 100);
    ellipse(circbX+200, circbY, 100, 100);        
    ellipse(circbX+300, circbY, 100, 100);
    ellipse(circbX+400, circbY, 100, 100);
    ellipse(circbX+500, circbY, 100, 100);
    ellipse(circbX+600, circbY, 100, 100);        
    ellipse(circbX+700, circbY, 100, 100);
    ellipse(circbX+800, circbY, 100, 100);
    ellipse(circbX+900, circbY, 100, 100);
    ellipse(circbX+1000, circbY, 100, 100);        
    ellipse(circbX+1100, circbY, 100, 100);
    ellipse(circbX+1200, circbY, 100, 100);
    ellipse(circbX+1300, circbY, 100, 100);
    ellipse(circbX+1400, circbY, 100, 100);        
    ellipse(circbX+1500, circbY, 100, 100);
    ellipse(circbX+1600, circbY, 100, 100);
    ellipse(circbX+1700, circbY, 100, 100);
    ellipse(circbX+1800, circbY, 100, 100);        
    ellipse(circbX+1900, circbY, 100, 100);
    ellipse(circbX+2000, circbY, 100, 100);
    ellipse(circbX+2100, circbY, 100, 100);
    ellipse(circbX+22000, circbY, 100, 100);        
    ellipse(circbX+2300, circbY, 100, 100);
    ellipse(circbX+2400, circbY, 100, 100);
    ellipse(circbX+2500, circbY, 100, 100);
    ellipse(circbX+2600, circbY, 100, 100);        
    ellipse(circbX+2700, circbY, 100, 100);
    ellipse(circbX+2800, circbY, 100, 100);
    ellipse(circbX+2900, circbY, 100, 100);
    ellipse(circbX+3000, circbY, 100, 100);        
    ellipse(circbX+3100, circbY, 100, 100);
    ellipse(circbX+3200, circbY, 100, 100);
    ellipse(circbX+3300, circbY, 100, 100);
    ellipse(circbX+3400, circbY, 100, 100);        
    ellipse(circbX+3500, circbY, 100, 100);
        circbY = circbY + speed;
    } 
}


function mousePressed(){
    
    if(state < 2){
        state = state +1;
    }else {
        state = 1}    
}