var rose,lily;
function setup() {
  createCanvas(800,400);
  rose= createSprite(200, 200, 50, 80);
  lily= createSprite(400, 200, 80, 30);
  lotus= createSprite(300,300,50,30);
  rose.shapeColor="red";
  lily.shapeColor="purple";
  lotus.shapeColor="blue";

}

function draw() {
  background(255,255,255);  
  rose.x=World.mouseX;
  rose.y=World.mouseY;

  if(touch(rose,lily)){
    rose.shapeColor="black";
    lily.shapeColor="indigo";
  }
 else{
  rose.shapeColor="red";
  lily.shapeColor="purple";
 }
if(touch(rose,lotus)){
  rose.shapeColor="orange";
  lotus.shapeColor="silver";
}
else{
  rose.shapeColor="red";
  lotus.shapeColor="blue";
}
  drawSprites();
}


