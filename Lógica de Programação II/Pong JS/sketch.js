// Variaveis da Bola 
let xBall = 200;
let yBall = 150;
let dBall = 15;
let raio = (dBall/2);

// Variaveis da Velocidade da Bola
let speedxBall = 5;
let speedyBall = 5;

// Variaveis da Raquete
let xRacket = 1;
let yRacket = 100;
let lRacket = 10;
let hRacket = 60;

// Variaveis Oponente
let xRacket2 = 388;
let yRacket2 = 110;
let speedyRacket2;


// Variaveis de colisão
hit = false;
let chanceError = 0;

// Variaveis do Placar
let myPoint = 0;
let rivalPoint = 0;

// Variaveis de Sons
let soundRacket;
let soundPoint; 
let soundTrail;

function preload() {
  soundRacket = loadSound("./sounds/racket.mp3");
  soundPoint = loadSound("./sounds/point.mp3");
  soundTrail = loadSound("./sounds/trail.mp3");
}

function setup() {
  createCanvas(400, 300);
  soundTrail.loop();
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
  score();
  markPoint();
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
    soundRacket.play();
  }
}*/

// Função através de Libs (p5.collide2d)
function hitRacketLib(x, y) {
  hit = collideRectCircle(x, y, lRacket,               hRacket, xBall, yBall, raio);
  if (hit) {
    speedxBall *= -1;
    soundRacket.play();
  }
}

function moveRacket2() {
  speedyRacket2 = yBall - yRacket2 - lRacket / 2 -25;
  yRacket2 += speedyRacket2 * 0.12;  
}

function score() {
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(230, 10, 40, 20);
  fill(255);
  text(rivalPoint, 250, 26);
  fill(color(255, 140, 0));
  rect(130, 10, 40, 20);
  fill(255);
  text(myPoint, 150, 26);
}

function markPoint() {
  if (xBall >= 395) {
        myPoint += 1;
        soundPoint.play();
      }
  if (xBall <= 5) {
        rivalPoint += 1;
        soundPoint.play();
      }
}










