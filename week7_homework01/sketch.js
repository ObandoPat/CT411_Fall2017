var offMetronome = {  
    loc: 0,
    x: 200,
    y: 250,
    size: 200,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var onMetronome



var offDrums = {  
    loc: 0,
    x: 400,
    y: 250,
    size: 200,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var onDrums


var offGuitar = {  
    loc: 0,
    x: 600,
    y: 250,
    size: 200,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var onGuitar


var offMic = {  
    loc: 0,
    x: 750,
    y: 250,
    size: 200,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var onMic


var isClicked = false


function preload() {
    
    offDrums.loc = loadImage("off_drums.png");
    offGuitar.loc = loadImage("off_guitar.png");
    offMetronome.loc = loadImage("off_metronome.png");
    offMic.loc = loadImage("off_mic.png");
    
    onDrums = loadImage("on_drums.png");
    onGuitar = loadImage("on_guitar.png");
    onMetronome = loadImage("on_metronome.png");
    onMic = loadImage("on_mic.png");
    
    soundDrums = loadSound("sounds_drums.mp3");
    soundGuitar = loadSound("sounds_guitar.mp3");
    soundMetronome = loadSound("sounds_metronome.mp3");
    soundMic = loadSound("sounds_mic.mp3");

}

function setup(){    
    
    createCanvas(1150, 950);
    background(100);
    rect(0, height/2, width, height/2);
    textSize(20);
    text("Time to practice everyone! Select your intrument and start playing! You should all have the right tempo so don't worry about joining in halfway!", 300, 70, 500, 70);
    
    soundDrums.loop();
       soundDrums.setVolume(0,[0],[0])
    soundGuitar.loop();
       soundGuitar.setVolume(0,[0],[0])
    soundMetronome.loop();
       soundMetronome.setVolume(0,[0],[0])
    soundMic.loop();
       soundMic.setVolume(0,[0],[0])

    image(offDrums.loc, offDrums.x, offDrums.y, offDrums.size, offDrums.size);
    image(offGuitar.loc, offGuitar.x, offGuitar.y, offGuitar.size, offGuitar.size);
    image(offMetronome.loc, offMetronome.x, offMetronome.y, offMetronome.size, offMetronome.size);
    image(offMic.loc, offMic.x, offMic.y, offMic.size, offMic.size);

}

function draw() {

}

function mousePressed() {
    offMetronome.top = offMetronome.y;
    offMetronome.left = offMetronome.x;
    offMetronome.bottom = offMetronome.y + offMetronome.size;
    offMetronome.right = offMetronome.x + offMetronome.size;

    if (mouseX > offMetronome.left && mouseX < offMetronome.right && mouseY > offMetronome.top && mouseY < offMetronome.bottom && isClicked == true){
        image(onMetronome, offMetronome.x, offMetronome.y, offMetronome.size, offMetronome.size);
        soundMetronome.setVolume(1,[0],[0])
        isClicked = !isClicked;
    }else if (mouseX > offMetronome.left && mouseX < offMetronome.right && mouseY > offMetronome.top && mouseY < offMetronome.bottom && isClicked == false){
        image(offMetronome.loc, offMetronome.x, offMetronome.y, offMetronome.size, offMetronome.size);
        soundMetronome.setVolume(0,[0],[0])
        isClicked = !isClicked;
    }
    
    
    
    
    offDrums.top = offDrums.y;
    offDrums.left = offDrums.x;
    offDrums.bottom = offDrums.y + offDrums.size;
    offDrums.right = offDrums.x + offDrums.size;

    if (mouseX > offDrums.left && mouseX < offDrums.right && mouseY > offDrums.top && mouseY < offDrums.bottom && isClicked == true){
        image(onDrums, offDrums.x, offDrums.y, offDrums.size, offDrums.size);
        soundDrums.setVolume(1,[0],[0])
        isClicked = !isClicked;
    }else if (mouseX > offDrums.left && mouseX < offDrums.right && mouseY > offDrums.top && mouseY < offDrums.bottom && isClicked == false){
        image(offDrums.loc, offDrums.x, offDrums.y, offDrums.size, offDrums.size);
        soundDrums.setVolume(0,[0],[0])
        isClicked = !isClicked;
    }
    

    offGuitar.top = offGuitar.y;
    offGuitar.left = offGuitar.x;
    offGuitar.bottom = offGuitar.y + offGuitar.size;
    offGuitar.right = offGuitar.x + offGuitar.size;

    if (mouseX > offGuitar.left && mouseX < offGuitar.right && mouseY > offGuitar.top && mouseY < offGuitar.bottom && isClicked == true){
        image(onGuitar, offGuitar.x, offGuitar.y, offGuitar.size, offGuitar.size);
        soundGuitar.setVolume(1,[0],[0])
        isClicked = !isClicked;
    }else if (mouseX > offGuitar.left && mouseX < offGuitar.right && mouseY > offGuitar.top && mouseY < offGuitar.bottom && isClicked == false){
        image(offGuitar.loc, offGuitar.x, offGuitar.y, offGuitar.size, offGuitar.size);
        soundGuitar.setVolume(0,[0],[0])
        isClicked = !isClicked;
    }
    
    
    offMic.top = offMic.y;
    offMic.left = offMic.x;
    offMic.bottom = offMic.y + offMic.size;
    offMic.right = offMic.x + offMic.size;

    if (mouseX > offMic.left && mouseX < offMic.right && mouseY > offMic.top && mouseY < offMic.bottom && isClicked == true){
        image(onMic, offMic.x, offMic.y, offMic.size, offMic.size);
        soundMic.setVolume(1,[0],[0])
        isClicked = !isClicked;
    }else if(mouseX > offMic.left && mouseX < offMic.right && mouseY > offMic.top && mouseY < offMic.bottom && isClicked == false){
        image(offMic.loc, offMic.x, offMic.y, offMic.size, offMic.size);
        soundMic.setVolume(0,[0],[0])
        isClicked = !isClicked;
    }
    
}