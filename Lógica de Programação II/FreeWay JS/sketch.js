// Arquivo Principal

function setup() {
  createCanvas(500, 300);
}

function draw() {
  background(imageRoad);
  showActor();
  moveActor();
  showCarsRigth();
  showCarsLeft();
  moveCarsLeft();
  moveCarsRight();
  startpointCarsRight();
  startpointCarsLeft();
  checkCollisionLeft();
  checkCollisionRight();
}




