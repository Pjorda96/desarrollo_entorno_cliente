'use strict'

function ejercicio5(dataArray) {
	return dataArray.filter(x => {
		return x % 2 === 0;
	}).map(x => {
		return x * x;
	});
}
console.log(ejercicio5([1, 2, 3, 4, 5]));

/*Crea una función que tome como parámetro un array de números llamado dataArray, 
y que devuelva un nuevo array con el resultado de elevar todos los elementos al 
cuadrado, únicamente manteniendo aquellos cuyo cuadrado es par.Emplea funciones 
de orden superior(e.g., map, filter, reduce, etc.)*/