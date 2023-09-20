var theInput;
var theValue;
var theSlider;
var theSecondSlider;
var rotateValue = 0;
var rotateValueY = 0;
var boxColor = 0;
let img;
let song;
function preload(){
  img = loadImage("assets/TheFunny.jpg");
  song = loadSound("assets/BTTB.mp3");
}
function setup() {
  createCanvas(700, 700, WEBGL);
  theSlider = createSlider(0, 360, 200, 1);
  theSlider.position(20, 20);
  theSlider.style("width", '600px');
  theSecondSlider = createSlider(0, 10, 1, 0.01);
  theSecondSlider.position(20, 40);
  theSecondSlider.style("width", "600px");
  theInput = createInput('');
  theInput.position(20, 65);
  theInput.input(typing);
  theValue = 6;
}

function mouseClicked(){
}

function draw() {
  background(255);
  colorMode(HSB);
  fill(boxColor, 100, 100);
  push();
  //rotateX(theSecondSlider.value());
  //rotateY(theSecondSlider.value());
  //rotateZ(theSecondSlider.value());
  rotateX(frameCount * 0.01 * theSecondSlider.value());
  rotateY(frameCount * 0.01 * theSecondSlider.value());
  rotateZ(frameCount * 0.01 * theSecondSlider.value());
  texture(img);
  box(theSlider.value());
  pop();
  rotateValue += 0.1;
  rotateValueY += 0.1;
  boxColor += 2;
  if(boxColor > 360){
    boxColor = 0;
  }
  if(theSlider.value() >= 360){
    theSlider.value(0);
  }
  if(theSecondSlider.value() >= 10){
    theSecondSlider.value(0);
  }
  if(keyIsDown(ENTER)){
    theSlider.value(theSlider.value() + 5);
    theSecondSlider.value(theSecondSlider.value() + random(0, 0.3));
  }
  if(frameCount % (theValue * 60) == 0){
    song.play();
  }
}
function typing(){
  theValue = this.value();
}

function keyPressed(){
}
