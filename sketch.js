var gO1, gO2, gO3, go4;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
  gO1 = createSprite(350, 400, 50, 80);
  gO1.shapeColor = "green";

  gO2 = createSprite(300, 200, 50, 80);
  gO2.shapeColor = "blue";
  movingRect.velocityX=-5;
  gO2.velocityX=5;

  gO3 = createSprite(200, 400, 50, 80);
  gO3.shapeColor = "green";

  gO4 = createSprite(100, 400, 50, 80);
  gO4.shapeColor = "green";

}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(fixedRect.x-movingRect.x);


  if (isTouching(movingRect, gO1)){
    movingRect.shapeColor = "red";
    gO1.shapeColor = "red";
  } else{
    movingRect.shapeColor = "green";
    gO1.shapeColor = "green";
  }

  bounceOff(movingRect,gO2);
  drawSprites();
}

