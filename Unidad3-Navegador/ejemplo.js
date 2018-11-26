/* Ejemplo getElementById */
let tag = document.getElementById('miid');
console.log(tag);
console.log(tag.nodeValue);
console.log(tag.value);
tag.style = 'background-color: blue';
tag.textContent = 'Hola k tal?';

/* Ejemplo getElementsByClassName */
let coleccion = document.getElementsByClassName('myclass');
console.log(coleccion);
console.log(coleccion[0]);
console.log(coleccion[1]);

for (let nodo of coleccion) {
  nodo.textContent = 'Te he cambiado';
}

/* Ejemplo getElementsByTagName */
let celdas = document.getElementsByTagName('td');
console.log(celdas);