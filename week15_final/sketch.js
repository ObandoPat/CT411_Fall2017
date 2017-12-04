function preload() {
    rumbleSound = loadSound("rumble.mp3");
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    rumbleSound.loop();
};


function draw() {
    background(250, 190, 175);
    throwBalls();
    gameStart();
    delBalls();
}


function mousePressed() {
    //        textSize(100);
    areReady = "Move to dodge the incoming balls";
    rethrow();
    score = score + 1;
}



//        textSize(150);
//        fill(192, 175, 171);
//    text("Dodge All The Balls", width/5 + 3, 200 + 5, 800, 500);
//    throwBalls();




// constructor
function Bloon() {

    // variables
    this.x = random(0, width),
        this.y = random(0, 100),
        this.speed = 10,
        this.circDiameter = 50,
        this.circRadius = this.circDiameter / 2,
        this.d,
        this.d = dist(this.x, this.y, mouseX, mouseY),

        // functions
        this.drawBall = function() {
            ellipse(this.x, this.y, this.circDiameter, this.circDiameter);
        },
        this.bounce = function() {
            if (this.y < height) {
                this.speed = this.speed + 0.1;
            }
        },
        this.moveBall = function() {
            this.y = this.y + this.speed;
        }
    this.noDodge = function() {
        this.d = dist(this.x, this.y, mouseX, mouseY);

        if (this.d < this.circRadius) {
            background(150, 159, 85);
            //                score = score + 1;
            noLoop();
            fill(255);
            textSize(40);
            text("Click here to try again", width / 3, height - 100, 400, 800);

        }
    }
}

// array
var bloons = [];
var score = 0;


// buttons
var rect1 = {
    x: 100,
    y: 100,
    size: 100,
};


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
    fill(253, 231, 225, random(0, 255));
    text(areReady, width / 5, 300, 800, 500);
};

function throwBalls() {
    fill(150, 159, 85);
    noStroke();
    for (var i = 0; i < bloons.length; i++) {
        bloons[i].drawBall();
        bloons[i].bounce();
        bloons[i].moveBall();
        bloons[i].noDodge();
    };

    scoreBoard();
};

function rethrow() {
    for (var i = 0; i < 5; i++) {
        bloons[i] = new Bloon();
    }
    loop();
};

function delBalls() {
    if (bloons[i].y > height / 2) {
        bloons.splice(i, 1);
    }
}

function dodgeWin() {
    if (bloons[i] = 0) {
        areReady = "you won!";
    }
}


var areReady = "Are you ready? Click to start";
