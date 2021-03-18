var balloon, position, balloonImage1, balloonImage2, cityImage;
var database;     
function preload() {
balloonImage1 = loadAnimation("hotairballoon1.png")
balloonImage2 = loadAnimation("hotairballoon1.png", "hotairballoon1.png", "hotairballoon2.png", "hotairballoon2.png", "hotairballoon3.png","hotairballoon3.png ")
cityImage = loadImage("cityImage.png")
}      
function setup() {
  database = firebase.database()
  createCanvas(1250,500);
  balloon =createSprite (400, 200, 50, 50);
  balloon.addAnimation("balloon", balloonImage1)
  balloon.shapeColor="blue"
  var ballPosition = database.ref("balloon/height")
  ballPosition.on("value", readPosition, showError)
}

function draw() {
  background(cityImage);
  
  if(keyDown("Up")){
    writePosition(0,-10)
    balloon.addAnimation("balloon", balloonImage1)
    balloonImage2.scale=0.15


  }  
  else if(keyDown("Down")){
    writePosition(0, +10) 
    balloon.addAnimation("balloon", balloonImage1)
    balloonImage2.scale=0.15
  }  
  else if(keyDown("right")){
    writePosition(+10, 0)
    balloon.addAnimation("balloonImage2", balloonImage2)
    balloonImage2.scale=0.15
  }  
  else if(keyDown("left")){
   writePosition(-10, 0)
   balloon.addAnimation("balloonImage2", balloonImage2)
   balloonImage2.scale=0.15
 
  }

  drawSprites();
}

function showError() {
  console.log("Error")
}
function readPosition(data){
  position = data.val()
  balloon.x = position.x
  balloon.y = position.y
  
  } 
function writePosition(x, y) {
  database.ref ("balloon/height").set({
  'x': position.x + x, 
  'y': position.y + y

  })
}

