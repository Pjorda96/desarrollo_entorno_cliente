function getNumberPiecesFromUser() {
  let particiones = prompt('Introduce el numero de particiones del puzzle (solo numeros con raiz cuadrada)');

  while (!Number.isInteger(parseInt(particiones)) || !Number.isInteger(Math.sqrt(particiones))) {
    particiones = prompt('El numero introducido no tiene raiz cuadrada. Prueba otra vez: ');
  }

  return parseInt(particiones);
}

function getMaxScore(particiones) {
  return particiones * 2;
}

function getScore() {
  return score;
}

let particiones = getNumberPiecesFromUser();
let maxScore = getMaxScore(particiones);
let score = maxScore;

console.log(score);
console.log(typeof(score));

