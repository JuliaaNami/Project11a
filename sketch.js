var ship, sea
var seaImg, shipMovement
function preload(){
shipMovement = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
seaImg = loadImage("sea.png") 
}

function setup(){
  createCanvas(400,400)
  sea = createSprite(200,200,10,40)
  sea.velocityX = -5
  sea.addImage(seaImg)
  ship = createSprite(200,270,10,40)
  ship.addAnimation("navio", shipMovement)
ship.scale = 0.3
 
}

function draw() {
  background("blue");
    drawSprites();
 if(sea.x < 0){
    sea.x = sea.width/2
  }

 
}
