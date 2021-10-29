var snowflake,snowflakeimage
var bgimage
function preload(){snowflakeimage=loadImage("snow4.webp")
bgimage=loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgimage);
 createsnowflakes() 
  drawSprites();
}
function createsnowflakes(){
if(frameCount%10===0){
snowflake=createSprite(random(0,800),0,50,50)
snowflake.velocityX=-2
snowflake.velocityY=4
snowflake.addImage(snowflakeimage)
snowflake.scale=0.1
}  
}