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
function getMaxScore(particiones = 9) {
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
 * @param {Number} numPieza //Número de pieza del puzzle (del 0 a N - 1)
 * @param {Number} piezas //Número total de piezas del puzzle
 * 
 * @returns {Array} {columna, fila}
 */
function pieceNumberToRowsColumns(numPieza, piezas) {

  let position = [];
  let dim = Math.sqrt(piezas);
  let fila = Math.floor(numPieza / dim);
  let columna = numPieza % dim;

  position.push(columna);
  position.push(fila);

  return position;
}

/**
 * Crea una tabla HTML conformada por un número igual de filas y columnas.
 * El número de las mismas es igual a la raíz cuadrada del número de piezas del puzzle.
 * 
 * @param {Number} totalPiezas 
 * @param {Number} anchura
 * @param {Number} altura
 * @param {*} direccion 
 */
function createPuzzleLayout(totalPiezas, anchura, altura, direccion) {
  let dim = Math.sqrt(totalPiezas);
  let scr = document.getElementsByTagName('script')[0];
  let tabla = document.createElement('table');
  let posicion = 0;
  
  for (let i = 0; i <= dim - 1; i++) {
    let tr = document.createElement('tr');

    tabla.appendChild(tr);

    let fila = tabla.lastElementChild;

    for (let j = 0; j <= dim - 1; j++) {
      let td = document.createElement('td');

      td.id = 'piece' + posicion;
      td.style = 'border: 3px solid black; ';
      td.style.backgroundImage = 'url(' + direccion + ')';
      td.height = anchura / dim;
      td.width = altura / dim;

      //borrar
      td.textContent = 'piece' + posicion; //borrar

      fila.appendChild(td);
      posicion ++;

    }
  }
  document.getElementsByTagName('body')[0].insertBefore(tabla, scr);
}

/**
 * Devuelve el desplazamiento del fondo para una pieza determinada del puzzle.
 * Para ello se tiene en cuenta que cada pieza del puzzle tiene un ancho y alto determinado, 
 * y que además la esquina superior izquierda de la imagen es el punto de referencia(0, 0)
 * 
 * @param {Number} numeroPieza 
 * @param {Number} anchura 
 * @param {Number} altura 
 * @param {Number} totalPiezas 
 * 
 * @returns {Array} {h, v}
 */
function pieceToOffset(numeroPieza, anchura, altura, totalPiezas) {
  let anchoPieza = anchura / Math.sqrt(totalPiezas);
  let altoPieza = altura / Math.sqrt(totalPiezas);
  
  let posi = pieceNumberToRowsColumns(numeroPieza, totalPiezas);
  
  let desplazamiento = [];
  //8 = 3px border * 2 + 1px margin * 2
  let desplazamientoH = anchoPieza * posi[0] * (-1);
  let desplazamientoV = altoPieza * posi[1] * (-1);
  desplazamiento.push(desplazamientoH);
  desplazamiento.push(desplazamientoV);

  return desplazamiento;
}

/**
 * Devuelve un array con el desplazamiento(offset) de cada una de las piezas del puzzle
 * 
 * @param {Number} anchura 
 * @param {Number} altura 
 * @param {Number} totalPiezas 
 * 
 * @returns {Array} 
 */
function createReferenceSolution(anchura, altura, totalPiezas) {
  let desplazamiento = [];

  for (let i = 0; i <= totalPiezas - 1; i++) {
    let k = pieceToOffset(i, anchura, altura, totalPiezas);

    desplazamiento.push(k);
    
  }

  return desplazamiento;
}

/**
 * Cambia el fondo de cada una de las celdas de la tabla 
 * con el desplazamiento indicado
 * 
 * @param {Array} desplazamiento 
 */
function drawContentPuzzle(desplazamiento) {
  for (let i = 0; i < desplazamiento.length; i++) {
    let td = document.getElementById('piece' + i);
    td.style.backgroundPosition = desplazamiento[i][0] + 'px ' + desplazamiento[i][1] + 'px';
  }
}

/**
 * Devuelve si el puzzle está terminado
 * 
 * @param {Array} solucionado 
 * @param {Array} actual 
 * 
 * @returns {boolean}
 */
function checkIfSolution(solucionado, actual) {
  for (let i = 0; i < solucionado.length; i++) {
      if (solucionado[i] !== actual[i]) {
        return false;
      }
  }
  return true;
}

/**
 * Carga dinámicamente una imagen en JavaScript a partir de una URL.
 * Cuando la imagen está cargada en el objeto, se dispara un evento que 
 * ejecuta la lógica del juego
 * 
 * @param {Url} imageURL 
 * @param {Number} numeroPiezas 
 */
function initGame(imageURL, numeroPiezas) {
  let img = new Image();
  img.addEventListener('load', function () {
    gameLogic(img, numeroPiezas);
  });
  img.src = imageURL;
}

/**
 * 
 * @param {Image} imagen 
 * @param {Number} numPieza 
 */
function gameLogic(imagen, numPieza) {

}


//let particiones = getNumberPiecesFromUser();   descomentar


let maxScore = getMaxScore();


createPuzzleLayout(9, 1277, 958, "cat.jpg");
console.log(createReferenceSolution(958, 1277, 9));
drawContentPuzzle(createReferenceSolution(958, 1277, 9));


//form para averiguar la celda
//celda = fila*sqrt + fila + columna