// Arquivo Principal

function setup() {
  createCanvas(500, 300);
  soundTrail.loop();
}

function draw() {
  background(imageRoad);
  showActor();
  moveActor();
  showCarsRigth();
  showCarsLeft();
  moveCarsLeft();
  moveCarsRight();
  startPointCarsRight();
  startPointCarsLeft();
  checkCollisionLeft();
  checkCollisionRight();
  points();
  brandPoint();
}




