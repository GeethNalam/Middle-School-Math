var button1, button2, button3; 
var bg;
var form;

function preload() {
 
 bg = loadImage("mathImage.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  form = new Form();
  
  
}

function draw() {
  background(bg); 


 
  
 
 
 form.display();
  drawSprites();
}

