var imgSf1 = {
    x: 0,
    y:0,
    size: 100,
};

var distance;
var closeness;

var counter = 0;
var speed = 1;

var zoom = 1.3;
var enlarge = 0.3;

var easing = 0.05;

function preload(){
    imgSf1 = loadImage("snowflake1.svg");
    imgSf2 = loadImage("snowflake2.svg");
    imgSf3 = loadImage("snowflake3.svg");
    imgSf4 = loadImage("snowflake4.svg");
    imgSf5 = loadImage("snowflake5.svg");
    imgSf6 = loadImage("snowflake6.svg");
    imgSf7 = loadImage("snowflake7.svg");
    imgSf8 = loadImage("snowflake8.svg");
    imgSf9 = loadImage("snowflake9.svg");

}

function setup(){
    createCanvas(windowWidth, windowHeight);
//    background(226, 229, 234);
}

function draw(){
    background(226, 229, 234);
    imageMode(CENTER);

    
    
        translate(width/2, height/2);
        scale(zoom);
        rotate(radians(counter));

        image(imgSf1, 0, 0, 100, 100); 

        image(imgSf2, 200, 378, 100, 100);
        image(imgSf3, 300, 125, 100, 100); 
        image(imgSf4, 0, 230, 100, 100);
        image(imgSf5, 400, 315, 100, 100);
        image(imgSf6, 500, 50, 100, 100); 
        image(imgSf6, 600, 300, 100, 100);
    
        image(imgSf2, 378, -200, 100, 100);
        image(imgSf3, 125, -300, 100, 100); 
        image(imgSf4, 230, 0, 100, 100);
        image(imgSf5, 315, -400, 100, 100);
        image(imgSf6, 50, -500, 100, 100); 
        image(imgSf6, 300, -600, 100, 100);
    
        image(imgSf2, -200, 378, 100, 100);
        image(imgSf3, -300, 125, 100, 100); 
        image(imgSf4, 0, 230, 100, 100);
        image(imgSf5, -400, 315, 100, 100);
        image(imgSf6, -500, 50, 100, 100); 
        image(imgSf6, -600, 300, 100, 100);
    
        image(imgSf2, -378, -200, 100, 100);
        image(imgSf3, -125, -300, 100, 100); 
        image(imgSf4, -230, 0, 100, 100);
        image(imgSf5, -315, -400, 100, 100);
        image(imgSf6, -50, -500, 100, 100); 
        image(imgSf6, -300, -600, 100, 100);


    counter += speed;
    
    zoom += enlarge * easing;
    
    if (zoom > 5 || zoom < 1){
    enlarge = enlarge*-1;
    }
   
}