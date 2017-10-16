var rect1 = {
    x: 100,
    y: 100,
    size: 100,
//    top: rect1.y,
//    bottom: rect1.y + rect1.size,
//    left: rect1.x,
//    right: rect1.x + rect1.size
};

rectTop = rect1.y;
rectBottom = rect1.y + rect1.size;
rectLeft = rect1.x;
rectRight = rect1.x + rect1.size;

//var rectX = 100;
//var rectY = 100;
//var rectSize = 100;
//var rectTop = rectY;
//var rectBottom = rectY + rectSize;
//var rectLeft = rectX;
//var rectRight = rectX + rectSize;

var colR;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
}

function draw() {
    background(200);

    fill(colR, 10, 100);
    rect(rect1.x, rect1.y, rect1.size, rect1.size);
    
    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
        colR = 0;    
    } else{
        colR = 255;  
    }
    
    
//    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
//        colR = 0;   
//    }else{
//        colR = 255;   
//    }
//        fill(colR, 10, 100);
//        rect(rectX, rectY, rectSize, rectSize);    
}