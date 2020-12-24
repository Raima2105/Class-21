var fr,mr;
var g1,g2;

function setup() {
  createCanvas(1200,800);

  fr = createSprite(600, 400, 50, 80);
  mr = createSprite(400,200,80,30);

  g1 = createSprite(100,100,50,50);
  g2 = createSprite(200,100,50,50);

  g1.shapeColor = "green";
  g2.shapeColor = "green";

  fr.shapeColor = "green";
  mr.shapeColor = "green";

  fr.debug = true;
  mr.debug = true;
}

function draw() {
  background(0);  
  mr.y = World.mouseY;
  mr.x = World.mouseX;

 
  if (isTouching(mr,g2)){
    g2.shapeColor = "red";
    mr.shapeColor = "red";
  }
  else{
    g2.shapeColor = "green";
    mr.shapeColor = "green";
  }
  drawSprites();
}
