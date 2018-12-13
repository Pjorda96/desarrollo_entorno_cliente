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
 * Actualiza la puntuación en el HTML decrementando su valor actual por el valor 
 * del parámetro de entrada(restándolo)
 * 
 * @param {Number} decrease 
 */
function decreaseScore(decrease) {
  let oldScore = document.getElementById('score').textContent;
  oldScore = oldScore.split(' ');
  let newScore = parseInt(oldScore[1]) - decrease;
  document.getElementById('score').textContent = oldScore[0] + ' ' + newScore;
}


/**
 * Devulve una nueva anchura y altura teniendo en cuenta que la dimensión(anchura o altura) 
 * más grande mide exactamente 200 y que se mantiene la relación de aspecto entre la 
 * anchura y altura
 * 
 * @param {Number} ancho 
 * @param {Number} alto 
 * 
 * @returns {Array} dimensions
 */
function getNewSizes(ancho, alto) {
  let dimensions = [];

  if ( ancho === alto ) {
    dimensions = [200, 200]

  } else if ( ancho > alto ) {
    let prop = alto / ancho;

    dimensions = [200, 200 * prop];

  } else if ( alto > ancho ) {
    let prop = ancho / alto;

    dimensions = [200 * prop, 200];
  }

  return dimensions;
}

/**
 * Baraja los elementos del array de forma aleatoria
 * 
 * @param {Array} array 
 * 
 * @returns {Array} barajado
 */
function shuffle(array) {

  for (let i = array.length - 1; i > 0; i--) {
    let rdm = Math.floor((Math.random() * i));
    let cambiador = array[i];

    array[i] = array[rdm];
    array[rdm] = cambiador;
  }

  return array;

}

/**
 * Devuelve el número de fila y columna correspondiente teniendo en
 cuenta que el puzzle se organiza en un número de filas y columnas igual
 a la raíz cuadrada del número de piezas. 

 * Las piezas van posicionadas por filas empezando desde arriba y 
 leyendo dichas filas de izquierda a derecha.
 * 
 * @param {Number} numeroPieza //Número de pieza del puzzle (del 0 a N - 1)
 * @param {Number} piezas //Número total de piezas del puzzle
 * 
 * @returns {Array} {columna, fila}
 */
function pieceNumberToRowsColumns(numeroPiezas, piezas) {

  let position = [];
  let dim = Math.sqrt(piezas);
  let fila = Math.floor(numeroPiezas / dim);
  let columna = numeroPiezas % dim;

  position.push(fila);
  position.push(columna);

  return position;
}

/**
 * Crea una tabla HTML conformada por un número igual de filas y columnas.
 * El número de las mismas es igual a la raíz cuadrada del número de piezas del puzzle.
 * 
 * @param {Number} numeroPiezas 
 * @param {Number} anchura
 * @param {Number} altura
 * @param {*} direccion 
 */
function createPuzzleLayout(numeroPiezas, anchura, altura, direccion) {
  //Crear la tabla
  let dim = Math.sqrt(numeroPiezas);
  let scr = document.getElementsByTagName('script')[0];
  let tabla = document.createElement('table');
  let posicion = 0;
  
  for (let i = 0; i <= dim - 1; i++) {
    let tr = document.createElement('tr');

    tabla.appendChild(tr);

    let fila = tabla.lastElementChild;

    for (let j = 0; j <= dim - 1; j++) {
      let td = document.createElement('td');

      td.setAttribute('id', 'piece' + posicion);
      td.setAttribute('style', 'border: 3px solid black; background-image: url("cat.jpg")');
      td.setAttribute('style', td.getAttribute('style') + '; height: ' + (anchura / dim - 1) + 'px; width: ' + (altura / dim - 1) + 'px;');

      //borrar
      td.textContent = 'piece' + posicion;

      fila.appendChild(td);
      posicion ++;

    }
  }
  document.getElementsByTagName('body')[0].insertBefore(tabla, scr);

}


//let particiones = getNumberPiecesFromUser();   descomentar
let particiones = 9;
let maxScore = getMaxScore(particiones);


console.log(createPuzzleLayout(16, 900, 900,1));
//console.log(typeof (array));

//form para averiguar la celda
//celda = fila*sqrt + fila + columna