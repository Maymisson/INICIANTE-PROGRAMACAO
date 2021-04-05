// Variaveis e funções dos carros


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

let xCarsRight = [500, 500, 500];
let xCarsLeft = [5, 5, 5];
let yCarsRight = [255, 233, 127];
let yCarsLeft = [24, 50, 190];
let speedCarsRight = [4, 5.5, 6];
let speedCarsLeft = [6, 5, 3.6];
let wCars = 42;
let hCars = 20


function showCarsRigth() {
  for(let i = 0; i < imageCarsRight.length; i++) {
    image(imageCarsRight[i], xCarsRight[i], yCarsRight[i], wCars, hCars)
  }
}


function showCarsLeft() {
  for(let i = 0; i < imageCarsLeft.length; i++) {
    image(imageCarsLeft[i], xCarsLeft[i], yCarsLeft[i], wCars, hCars)
  }
}

function moveCarsLeft() {
   for(let i = 0; i < imageCarsLeft.length; i++) {
      xCarsLeft[i] += speedCarsLeft[i];
   } 
}


function moveCarsRight() {
   for(let i = 0; i < imageCarsRight.length; i++) {
      xCarsRight[i] -= speedCarsRight[i];
   }  
}

function startPointCarsRight() {
  for(let i = 0; i < imageCarsRight.length; i++) {
    if (screenPasseRight(xCarsRight[i])) {
      xCarsRight[i] = 500;
    }
  }
}


function startPointCarsLeft() {
  for(let i = 0; i < imageCarsLeft.length; i++) {
    if (screenPasseLeft(xCarsLeft[i])) {
      xCarsLeft[i] = 0;
    }
  }
}


function screenPasseRight (xCarRight) {
  return xCarRight <- 50;
}


function screenPasseLeft (xCarLeft) {
  return xCarLeft > 450;
}