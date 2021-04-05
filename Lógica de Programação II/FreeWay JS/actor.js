// Variaveis e funções do Ator

let xActor = 152;
let yActor = 282;
let wActor = 13;
let hActor = 18;
let move = 2;
let myPoint = 0;

function showActor() {
  image(imageActor, xActor, yActor, wActor, hActor);
}

function moveActor() {
  if (keyIsDown(UP_ARROW) && (yActor > 7)) {
    yActor -= move;
  }
  if (keyIsDown(DOWN_ARROW) && (yActor < 282)) { 
    yActor += move;
  }
  if (keyIsDown(LEFT_ARROW) && (xActor > 2)) {
    xActor -= move;
  }
  if (keyIsDown(RIGHT_ARROW) && (xActor < 486)) {
    xActor += move;
  }
}

function checkCollisionRight() {
  for (let i = 0; i < imageCarsRight.length; i++) {
    collide = collideRectCircle(xCarsRight[i], yCarsRight[i], wCars, hCars, xActor, yActor, 5)
    if (collide) {
      collision();
    }
  }
}

function checkCollisionLeft() {
  for (let i = 0; i < imageCarsLeft.length; i++) {
    collide = collideRectCircle(xCarsLeft[i], yCarsLeft[i], wCars, hCars, xActor, yActor, 5)
    if (collide) {
      collision();
    }
  }
}

function collision() {
  iniPosition();
  pointZero();
  soundCollision.play();
}

function points() {
  fill(color(28,28,28));
  rect(2, 0, 30, 18, 15);
  textStyle(BOLD);
  fill(color(218,165,32));
  textSize(16);
  text(myPoint, width/40, 15);
  
}

function brandPoint() {
  if (yActor < 8) {
    myPoint += 1;
    soundPoint.play();
    iniPosition();
  }
}

function pointZero() {
  if (myPoint > 0) {
      myPoint -=1;
  }
}

function iniPosition() {
  yActor = 282;
  xActor = 150;
}








