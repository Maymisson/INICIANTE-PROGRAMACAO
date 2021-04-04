// Variaveis e funções do Ator

let xActor = 150;
let yActor = 279;
let wActor = 14;
let hActor = 20;

function showActor() {
  image(imageActor, xActor, yActor, wActor,         hActor);
}

function moveActor() {
  if (keyIsDown(UP_ARROW)) {
    yActor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) { 
    yActor += 2;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xActor -= 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xActor += 2;
  }
}
