document.addEventListener("DOMContentLoaded", iniciarJuego);

function iniciarJuego() {
  document.getElementById("b_iniciar").addEventListener('click', () => {
    //let filas = document.getElementById('i_filas').value;
    //let columnas = document.getElementById('i_columnas').value;
    let filas = 5;
    let columnas = 5;

    let aventurero = casillaAventureroAleatoria( filas, columnas );

    let tesoros = casillasTesorosAleatorias( filas, columnas, aventurero );

    crearTablero( filas, columnas );

    dibujarAventurero(aventurero);

    for (let tesoro of tesoros) {
      dibujarTesoro(tesoro);
    }

    document.getElementsByTagName('table')[0].addEventListener('click', () => {
      let click = event.target.id;
      if (click.substr(0,2) === 'im') {
        click = parseInt(click.substr(6, click.length));
      } else {
        click = parseInt(click.substr(5, click.length));
      }

      limpiarCasilla(aventurero);
      dibujarAventurero(click);
      aventurero = click;

      for (let i = 0; i < tesoros.length; i++) {
        if (click === tesoros[i]){
          tesoros.splice(i, 1);
        }
      }

      if (tesoros.length < 1) {
        alert('Has terminado');
      }
    });
  });
}

function casillaAventureroAleatoria( filas, columnas ) {
  return Math.floor((Math.random() * ((filas * columnas) -1 )));
}

function casillasTesorosAleatorias( filas, columnas, aventurero ) {
  let tesoros = [];

  for ( let i = 0; i < (filas * columnas); i++ ) {
    let random = Math.random();

    if (i !== aventurero && random <= 0.25) {
      tesoros.push(i);
    }
  }

  return tesoros;
}

function crearTablero( filas, columnas ) {
  let tabla = document.createElement('table');
  let posicion = 0;

  for (let i = 0; i <= filas - 1; i++) {
    let tr = document.createElement('tr');

    tabla.appendChild(tr);

    let fila = tabla.lastElementChild;

    for (let j = 0; j <= columnas - 1; j++) {
      let td = document.createElement('td');
      let img = new Image();
      img.id = 'imagen' + posicion;

      td.id = 'celda' + posicion;
      td.style = 'border: 3px solid black; width: 80px; height: 80px; ';
      td.appendChild(img);
      fila.appendChild(td);
      posicion ++;

    }
  }
  document.getElementsByTagName('body')[0].appendChild(tabla);
}

function dibujarAventurero( aventurero ) {
  let img = document.getElementById('imagen' + aventurero);

  img.src = 'adventurer.png';
}

function dibujarTesoro( tesoro ) {
  let img = document.getElementById('imagen' + tesoro);

  img.src = 'gold.png';
}

function limpiarCasilla( identificador ) {
  let img = document.getElementById('imagen' + identificador);

  img.src = '';
}
