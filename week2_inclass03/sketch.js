function setup(){
    createCanvas(2000, 2000);  
//    x = width/2;
}



function draw(){
        background(256);  
        stroke(256);
        strokeWeight(5);
        fill(80, 190, 256);
    for(var i = 0; i<=width; i+=150){
    rect (i, j, 50, 50);
        for(var j = 0; j<=height; j+=150){
        rect (i-(i*0.6666666666), j+(i*0.3333333333), 100, 100);
           }
      }

}