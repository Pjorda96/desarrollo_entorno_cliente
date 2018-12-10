/**
 * Pide las particiones del puzzle para que quede cuadrado (raíz cuadrada)
 * 
 * @returns (Number) particiones
 */
function getNumberPiecesFromUser() {
  let particiones = prompt('Introduce el numero de particiones del puzzle (solo numeros con raiz cuadrada)');

  while (!Number.isInteger(parseInt(particiones)) || !Number.isInteger(Math.sqrt(particiones))) {
    particiones = prompt('El numero introducido no tiene raiz cuadrada. Prueba otra vez: ');
  }

  return parseInt(particiones);
}

/**
 * Devuelve el doble de las particiones
 * 
 * @param {Number} particiones 
 * 
 * @returns {Number} particiones * 2
 */
function getMaxScore(particiones) {
  return particiones * 2;
}

/**
 * Recoge el score actual de la partirda, en formato numérico y lo devuelve
 * 
 * @returns {Number} Score
 */
function getScore() {
  let score = document.getElementById('score').textContent;
  score = score.split(' ');
  return parseInt(score[1]);
}

/**
 * Cambia en el HTML la puntuación actual por la nueva puntuación
 * 
 * @param {Number} newScore 
 */
function updateScore(newScore) {
  let oldScore = document.getElementById('score').textContent;
  oldScore = oldScore.split(' ');
  document.getElementById('score').textContent = oldScore[0] + ' ' + newScore;
}

/**
 * Actualiza la puntuación en el HTML decrementando su valor actual por el valor del parámetro de entrada(restándolo)
 * 
 * @param {Number} decrease 
 */
function decreaseScore(decrease) {
  let oldScore = document.getElementById('score').textContent;
  oldScore = oldScore.split(' ');
  let newScore = parseInt(oldScore[1]) - decrease;
  document.getElementById('score').textContent = oldScore[0] + ' ' + newScore;
}

function getNewSizes(ancho, alto) {
  if (ancho === alto) {
    return ancho;
    return alto;
  }
}

//let particiones = getNumberPiecesFromUser();   descomentar
let particiones = 9;
let maxScore = getMaxScore(particiones);

console.log(updateScore(getMaxScore(particiones)));
console.log(decreaseScore(8));
console.log(getScore());

