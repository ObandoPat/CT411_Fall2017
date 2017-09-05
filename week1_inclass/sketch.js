function setup(){
    createCanvas(1024,768);
}

function draw(){
    //Backround
        background(256);
    //Neck
            fill(204,154,133);
            noStroke();
        rect(420,372,175,260,87);
    //Head    
            fill(204,154,133);
            noStroke();
        rect(378,125,260,390,130);
    //Glasses leg right
            fill(0);
            stroke(0);
            strokeWeight(0);
        rect(610,286,36,12);
    //Glasses leg left
            fill(0);
            stroke(0);
            strokeWeight(0);
        rect(370,286,36,12);
    //Glasses leg center
            fill(0);
            stroke(0);
            strokeWeight(0);
        rect(489,286,36,12,70);
    //Glasses frame left
            fill(256);
            stroke(0);
            strokeWeight(10);
    //Glasses frame right
        rect(386,280,105,70,12);
            fill(256);
            stroke(0);
            strokeWeight(10);
        rect(525,280,105,70,12);
}