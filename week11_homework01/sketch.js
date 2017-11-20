//var num = 23;
var nums = ["Lobster Bisque","Chicken Fajitas","Creamy Lemon Parmesan Shrimp","Cuban Chicken","Slow Cooked Beef","Honey Garlic Salmon","Beef Tenderloin"];
var days = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];

var bkg = 0;
var weekday = 0;
var daytime = 1;
var counter = 0;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){

    background(bkg);

    
    if(bkg > 256 || bkg < 0 ){
        daytime = daytime *-1;
    }
    bkg = bkg + daytime;
    
    
    fill(0);
    textAlign(CENTER);
        textStyle(NORMAL);
        textSize(50);
    text(nums[counter], width/3, height/2 + 50, 500, 200);   
        textSize(31);
        textStyle(BOLD);
    text(days[counter], width/3, height/2, 500, 200);
        textSize(50);
        textStyle(BOLD);
    text("What's Today's Special?", width/3, height/4, 500, 200); 



    setInterval(menuitems(), 1000);

}

function menuitems(){
    if(bkg == -1){
        counter = counter +1;
    }
    if (counter > 6) {
    counter = 0;
    }
}




//    for(var i = 0; i < nums.length; i++){
//    fill(nums[i]);
//    rect(i*100+100, height/2, 100, 100);        
//    }
    


//    for(var i = 0; i < nums.length; i++){
//    fill(nums[i]);
//    rect(i*100+100, height/2, 100, 100);        
//    }
//    

//bkg = bkg + 1;
//if (bkg > 256 || bkg < 0) {
//    bkg = *-1;
//}

//function mousePressed(){
//    background(256);
//    setTimeout(nextDay, 3000);
//}
//
//
//function nextDay(){
//    background(100);
//}
//

//x = x + 3;
//if (x > 256) {
//    x = 0;
//}