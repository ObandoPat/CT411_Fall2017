// constructor
    function Bloon() {
    
    // variables
        this.x = random(0,width),
        this.y = random(-5000,-1000),
        this.speed = 10,
        this.circDiameter = 50,
        this.circRadius = this.circDiameter/2,
        this.d,
        this.d = dist(this.x, this.y, mouseX, mouseY),

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
                background(150, 159, 85);
//                score = score + 1;
                noLoop();
                    fill(255);
                    textSize(40);
                text("Click here to try again", width/3, height -100, 400, 800);
                
                }
            }
    }

// functions
    function scoreBoard() {
            textAlign(LEFT);
            textSize(20);
            fill(256);
        text("NUMBER OF ATTEMPTS", 50, 50, 200, 500);
            textAlign(CENTER);
            textSize(40);
            fill(256);
        text(score, 25, 100, 150, 500);
};

    function gameStart() {
        textSize(100);
        fill(253, 231, 225, random(0,255));
    text(areReady, width/5, 300, 800, 500);
};

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
};

    function rethrow(){
//        background(250, 190, 175);
//        text("Dodge All The Balls", width/5, 200, 800, 500);
//        
        for (var i = 0; i < random(200,500); i++){
            bloons[i] = new Bloon();
        }
        loop();
};

// array
    var bloons = [];
    var score = 0;


// buttons
    var rect1 = {
            x: 100,
            y: 100,
            size: 100,
        };

    rectTop = rect1.y;
    rectBottom = rect1.y + rect1.size;
    rectLeft = rect1.x;
    rectRight = rect1.x + rect1.size;

var areReady = "Are you ready? Click to start";


function preload(){
    rumbleSound = loadSound("rumble.mp3");
}


function setup(){
    createCanvas(windowWidth, windowHeight);
    rumbleSound.loop();
};


function draw(){
    background(250, 190, 175);   
    throwBalls();
    gameStart();  
}


function mousePressed(){
//        textSize(100);
    areReady = "Dodge all the incoming balls";
    rethrow();  
    score = score + 1;
}



//        textSize(150);
//        fill(192, 175, 171);
//    text("Dodge All The Balls", width/5 + 3, 200 + 5, 800, 500);
//    throwBalls();

