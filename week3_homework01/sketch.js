var state = 1;

function setup(){
    createCanvas(800, 800);
}

function draw(){
        noStroke();
    
    if(state == 1){
        //Eyeballs
            background(42, 148, 208);
            fill(256);
        ellipse(height/2 +140, width/2, 250, 250);
        ellipse(height/2 -140, width/2, 250, 250);
        
        //Irises
            fill(0);
        ellipse(height/2 +140, width/2, 100, 100);
        ellipse(height/2 -140, width/2, 100, 100);
    }else if(state == 2) {      
         //Eyeballs
            background(216, 157, 59);
            fill(256);
        ellipse(height/2 +140, width/2, 250, 250);
        ellipse(height/2 -140, width/2, 250, 250);
        
        //Irises
            fill(0);
        ellipse(height/2 +140, width/2, 100, 100);
        ellipse(height/2 -140, width/2, 100, 100);
    
        //Masks
            fill(216, 157, 59);
        ellipse(height/2 +140, width/2 +225, 400, 400);
        ellipse(height/2 -140, width/2 +225, 400, 400);
    }else if(state == 3) {        

    //Left Eye
    background(94, 123, 174);
        //Eyeballs
            fill(256);
        ellipse(height/2 -140, width/2, 250, 250);
        
        //Irises
            fill(0);
        ellipse(height/2 -175, width/2 +30, 100, 100);
    
        //Masks
            fill(94, 123, 174);
        ellipse(height/2, width/2 -225, 400, 400);
    
    //Right Eye
        //Eyeballs
            fill(256);
        ellipse(height/2 +140, width/2, 250, 250);
        
        //Irises
            fill(0);
        ellipse(height/2 +105, width/2 +30, 100, 100);
    
        //Masks
            fill(94, 123, 174);
        ellipse(height/2 +275, width/2 -225, 400, 400);    
    }
    
}

function mousePressed(){
//    state = state +1;
    
    if(state < 3){
        state = state +1;
    }else {
        state = 1}
    
}