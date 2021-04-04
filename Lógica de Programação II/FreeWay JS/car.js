// Variaveis e funções dos carros

let xCars = [500, 490, 495];
let yCars = [243, 220, 116];
let speedCars = [3, 3.5, 4];
let sizeCars = 45;

/*
// Carro 1 
let xCar1 = 500;
let yCar1 = 243;
let wCar1 = 45;
let hCar1 = 45;

// Carro 2 
let xCar2 = 490;
let yCar2 = 220;
let wCar2 = 45;
let hCar2 = 45;

// Carro 3 
let xCar3 = 495;
let yCar3 = 116;
let wCar3 = 45;
let hCar3 = 45;
*/

function showCar() {
  for(let i = 0; i < imageCars.length; i++) {
    image(imageCars[i], xCars[i], yCars[i], sizeCars, sizeCars)
  }
}

function moveCar() {
   for(let i = 0; i < imageCars.length; i++) {
    xCars[i] -= speedCars[i];
  }
}

function startpointCar() {
  for(let i = 0; i < imageCars.length; i++) {
    if (screenPasse(xCars[i])) {
      xCars[i] = 500;
    }
  }
}


function screenPasse (xCar) {
  return xCar <- 50;
}