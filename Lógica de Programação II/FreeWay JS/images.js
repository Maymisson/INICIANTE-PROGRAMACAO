// Variaveis de carregamento

// Imagens
let imageRoad;
let imageActor;
let imageCar1;
let imageCar2;
let imageCar3;
let imageCar4;
let imageCar5;
let imageCar6;

// Sons
let soundTrail;
let soundCollision;
let soundPoint;


function preload() {
  imageRoad = loadImage("images/estrada.png");
  imageActor = loadImage("images/ator-1.png");
  imageCar1 = loadImage("images/carro-1.png");
  imageCar2 = loadImage("images/carro-2.png");
  imageCar3 = loadImage("images/carro-3.png");
  imageCar4 = loadImage("images/carro-4.png");
  imageCar5 = loadImage("images/carro-5.png");
  imageCar6 = loadImage("images/carro-6.png");
  imageCarsRight = [imageCar1, imageCar2, imageCar3]
  imageCarsLeft = [imageCar4, imageCar5, imageCar6]
  
  soundTrail = loadSound("sounds/trilha.mp3");
  soundCollision = loadSound("sounds/colidiu.mp3");
  soundPoint = loadSound("sounds/pontos.wav");
}
