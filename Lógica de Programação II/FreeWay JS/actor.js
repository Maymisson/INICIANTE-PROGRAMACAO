// Variaveis e funções do Ator

let xActor = 150;
let yActor = 290;
let wActor = 12;
let hActor = 16;
let move = 2;

function showActor() {
  image(imageActor, xActor, yActor, wActor, hActor);
}

function moveActor() {
  if (keyIsDown(UP_ARROW)) {
    yActor -= move;
  }
  if (keyIsDown(DOWN_ARROW)) { 
    yActor += move;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xActor -= move;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xActor += move;
  }
}

function checkCollisionRight() {
  for (let i = 0; i < imageCarsRight.length; i++) {
    collide = collideRectCircle(xCarsRight[i], yCarsRight[i], wCars, hCars, xActor, yActor, 0.1)
    if (collide) {
      collision();
    }
  }
}

function checkCollisionLeft() {
  for (let i = 0; i < imageCarsLeft.length; i++) {
    collide = collideRectCircle(xCarsLeft[i], yCarsLeft[i], wCars, hCars, xActor, yActor, 0.1)
    if (collide) {
      collision();
    }
  }
}

function collision() {
  yActor = 280;
  xActor = 150;
}