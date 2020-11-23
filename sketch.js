var fixedRect, movingRect;
var box1,box2,box3,box4,edges

function setup() {
  createCanvas(1200,800)
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  edges= createEdgeSprites();
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  box1=createSprite(100,200,50,50)
  box1.shapeColor="yellow"
  box1.velocityX=1
  box2=createSprite(200,200,50,50)
  box2.shapeColor="blue"
  box3=createSprite(100+200,200,50,50)
  box3.shapeColor="blue"
  box4=createSprite(100+300,200,50,50)
  box4.shapeColor="yellow"
  box4.velocityX=-4
}

function draw() {
  background(0,0,0);  
  box4.bounceOff(edges)
  box1.bounceOff(edges)
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(touching(movingRect,box2)){
  movingRect.shapeColor = "red";
  box2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    box2.shapeColor = "green";
  }
  

  
  bounce(box1,box4);
  bounce(box1,edges);
  bounce(box4,edges);
  

  drawSprites();
}           
  
