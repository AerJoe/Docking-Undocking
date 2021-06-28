var gym, gymAnim;
var eat, eatAnim;
var brush, brushAnim;
var drink, drinkAnim;
var iss, issIMG;
var move, moveIMG;
var bath, bathAnim


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  issIMG=loadImage(iss.png);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}