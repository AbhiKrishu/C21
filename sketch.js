var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(50,100,50,50);
  car.shapeColor="blue";
  car.velocityX=5;
  wall = createSprite(400,100,50,200);
  wall.shapeColor="brown";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "cyan";
  fixedRect.shapeColor = "cyan";

}
/*if(isTouching(car,wall)){
  car.velocityX =0
  wall.shapeColor="purple"
}*/
bounceOff(car,wall)
  drawSprites();
} 
