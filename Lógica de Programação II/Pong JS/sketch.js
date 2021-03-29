// Variaveis da Bola 
let xBall = 200;
let yBall = 150;
let dBall = 15;
let raio = (dBall/2);

// Variaveis da Velocidade da Bola
let speedxBall = 5;
let speedyBall = 5;

// Variaveis da Raquete
let xRacket = 5;
let yRacket = 100;
let lRacket = 10;
let hRacket = 60;

// Variaveis Oponente
let xRacket2 = 385;
let yRacket2 = 110;
let speedyRacket2;


// Variaveis de colisão
hit = false;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(50);
  showBall();
  moveBall();
  hitEdges();
  showRacket(xRacket, yRacket);
  showRacket(xRacket2, yRacket2);
  moveRacket();
  moveRacket2();
  //hitRacket();
  hitRacketLib(xRacket, yRacket);
  hitRacketLib(xRacket2, yRacket2);
}

function showBall() {
  circle(xBall,yBall,dBall);
}

function moveBall() { 
  xBall += speedxBall;
  yBall += speedyBall;
}

function hitEdges() { 
  if ((xBall + raio) > width || (xBall - raio) < 0){
    speedxBall *= -1;
  }
  if ((yBall + raio) > height || (yBall - raio) < 0){
    speedyBall *= -1;  
  }
}

function showRacket(x, y) {
  rect(x, y, lRacket, hRacket);
}

function moveRacket() {
  if (keyIsDown(UP_ARROW)) {
    yRacket -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) { 
    yRacket += 10;
  }
}

/*function hitRacket() {
  if ((xBall - raio < xRacket + lRacket) && (yBall - raio       < yRacket + hRacket) && (yBall + raio > yRacket)) {
    speedxBall *= -1;        
  }
}*/

// Função através de Libs (p5.collide2d)
function hitRacketLib(x, y) {
  hit = collideRectCircle(x, y, lRacket,               hRacket, xBall, yBall, raio);
  if (hit) {
    speedxBall *= -1;
  }
}

function moveRacket2() {
  speedyRacket2 = yBall - yRacket2 - lRacket / 2 -30;
  yRacket2 += speedyRacket2;  
}









