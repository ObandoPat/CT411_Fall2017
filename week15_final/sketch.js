function Bloon() {
// variables
    this.x = random(0,width),
    this.y = random(-700,0),
    this.speed = random(0,10),
    this.circDiameter = 50,
    this.circRadius = this.circDiameter/2,
    this.d,
        
// functions
    this.drawBall = function(){
        ellipse(this.x, this.y, this.circDiameter, this.circDiameter);
        },
    this.bounce = function(){
        if(this.y < height){
            this.speed = this.speed + 0.1;
            }
        },
    this.moveBall = function(){
        this.y = this.y + this.speed;
        }
    this.noDodge = function(){
        this.d = dist(this.x, this.y, mouseX, mouseY);
    
        if(this.d < this.circRadius){
            background(0, 200);
            noLoop();
            score = score + 1;
            text("Try again?", width/2, height/2, 300, 800);
            }
        }
}

function rethrow(){
    clear();
    background(250, 190, 175); 
        Bloon.x = random(0,width);
        Bloon.y = random(-700,0);
//    throwBalls();
    loop();
}


// array
    var bloons = [];
//    var isClicked = false;
    var score = 0;

// buttons
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

// functions
    function scoreBoard() {
            textSize(40);
            fill(256);
        text(score, 50, 50, 150, 500);     
}

    function throwBalls(){
        fill(150, 159, 85);
        noStroke();
    for (var i=0; i < bloons.length; i++){
        bloons[i].drawBall();
        bloons[i].bounce();
        bloons[i].moveBall();
        bloons[i].noDodge();
    };

    scoreBoard();
}

    function setup(){
        createCanvas(windowWidth, windowHeight);
        for (var i = 0; i < random(50,100); i++){
            bloons[i] = new Bloon();
        }
}



function draw(){
    background(250, 190, 175);
    setInterval(throwBalls(), 5000);
    
    fill(150, 10, 100);
    rect(rect1.x, rect1.y, rect1.size, rect1.size);
}



function mousePressed(){

    rethrow();    
    
//    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom && isClicked == false){
//        clear();
//        background(250, 190, 175); 
//        loop();
//            Bloon.x = random(0,width);
//            Bloon.y = random(-700,0);
//        throwBalls();
//    }
}






////    remove();
//
//    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
//        clear();
//        background(250, 190, 175);
//        throwBalls();
//    }
//}
























//var rect1 = {
//    x: 100,
//    y: 100,
//    size: 100,
//};
//
//rectTop = rect1.y;
//rectBottom = rect1.y + rect1.size;
//rectLeft = rect1.x;
//rectRight = rect1.x + rect1.size;
//
//var colR;
//
//function setup() {
//    createCanvas(windowWidth, windowHeight);
//    
//}
//
//function draw() {
//    background(200);
//
//    fill(colR, 10, 100);
//    rect(rect1.x, rect1.y, rect1.size, rect1.size);
//    
//    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
//        colR = 0;    
//    } else{
//        colR = 255;  
//    }














//function Bloon() {
//// variables
//    this.x = random(0,width),
//    this.y = random(-700,0),
//    this.speed = random(0,10),
//    this.circDiameter = 50,
//    this.circRadius = this.circDiameter/2,
//    this.d,
//
//        
//// functions
//    this.drawBall = function(){
//        ellipse(this.x, this.y, this.circDiameter, this.circDiameter);
//        },
//    this.bounce = function(){
//        if(this.y < height){
//            this.speed = this.speed + 0.1;
//            }
//        },
//    this.moveBall = function(){
//        this.y = this.y + this.speed;
//        }
//    
//    this.noDodge = function(){
//        this.d = dist(this.x, this.y, mouseX, mouseY);
//    
//        if(this.d < this.circRadius){
//            background(0);
//            noLoop();
//            score = score + 1;
//            text("Try again?", width/2, height/2, 300, 800);
//        }    
//    }
//
//function scoreBoard() {
//        textSize(40);
//        fill(256);
//    text(score, 50, 50, 150, 500);     
//}
//
//// array
//    var bloons = [];
//    var isClicked = false;
//    var score = 0;
//    
//// functions
//function throwBalls(){
//        fill(150, 159, 85);
//        noStroke();
//    for (var i=0; i < bloons.length; i++){
//        bloons[i].drawBall();
//        bloons[i].bounce();
//        bloons[i].moveBall();
//        bloons[i].noDodge();
//    };
//}
//
//
//    scoreBoard();
//    }
//    
////function reThrow(){
////        background(250, 190, 175);
////        throwBalls();
////    }  
//
//
//    
//    
//    
//    
//    
//function setup(){
//    createCanvas(windowWidth, windowHeight);
//    for (var i = 0; i < random(50,100); i++){
//        bloons[i] = new Bloon();
//    }
//}
//
//
//
//
//function draw(){
//    background(250, 190, 175);
//    throwBalls();
//}
//    
//function mousePressed(){
//    if(mouseX > restartButtonLeft && mouseX < restartButtonRight && mouseY > restartButtonTop && mouseY < restartButtonBottom){
////        loop();
//        background(250, 190, 175);
//        function draw(){
//    background(250, 190, 175);
////    redraw();
//    throwBalls();
//}
//    }
//}