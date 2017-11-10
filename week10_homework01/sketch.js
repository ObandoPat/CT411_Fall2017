// red strong : (231,57,58)
// red soft : (241,136,137)

// blue strong : (1,147,170)
// blue soft : (103,190,204)

var state = 1;


var artred;
var artblue;

var redtext;
var bluetext;


var cageX = 1000;
var cageY = 1000;

function setup()  {
}

function preload()  {
    artred = loadImage("red.svg");
    artblue = loadImage("blue.svg");
}

function draw(){
    imageMode(CENTER);
    
    createCanvas(cageX, cageY);

    noStroke();
    
    if(state == 1){
        background(241,136,137);
        
        redtext = "Wait... Blue, what the heck are you doing here?";
        bluetext = " ";
        
        manred();
        manblue();
        
    }else if(state == 2) {      
        background(103,190,204);
        
        redtext = " ";
        bluetext = "I figured the world needed to see a little bit more of ME!";
        
        manred();
        manblue();
        
    }else if(state == 3) {        
        background(231,57,58);

        redtext = "Oh wow... Hey you, can you shrink the window on him?";
        bluetext = " ";
        
        manred();
        manblue();
    }
    
    if(state == 3 && windowWidth < 600) {      
        background(241,136,137);
        
        redtext = "Thanks! now it can be all about ME! BWAHAHA!";
        
        manred();
    }

    
}

function mousePressed(){
//    state = state +1;
    
    if(state < 3){
        state = state +1;
    }
//    else {
//        state = 1}
//    
}



//  ART

function manred(){
        textSize(32);
        textAlign(CENTER,[BOTTOM]);
        fill(256);
    text(redtext, 110, 225, 300, 300);
    image(artred, 250, 500, 300, 300);
}

function manblue(){
        textSize(32);
        textAlign(CENTER,[BOTTOM]);
        fill(256);
    text(bluetext, 610, 225, 300, 300);
    image(artblue, 750, 500, 300, 300);
}