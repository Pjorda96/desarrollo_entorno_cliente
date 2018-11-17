'use strict'

class Corredor {

	/**
	 * 
	 * @param {Sting} nombre 
	 * @param {Sting} apellido 
	 * @param {Number} edad 
	 * @param {Sting} club 
	 * @param {Sting} categoria
	 * @param {Array} marcas
	 * @throws {Error} 'Categoría mal definida'
	 */
	constructor(nombre, apellido, edad = undefined, club = undefined, categoria = undefined) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.club = club;
		if (categoria === 'primera' || categoria === 'segunda' || categoria === 'tercera' || categoria === undefined) {
			this.categoria = categoria;
		} else {
			throw new Error('Categoría mal definida');
		}
		this.marcas = [];
	}

	addMarca(marca) {
		this.marcas.push(marca);
	}

	marcaMasBaja() {
		return this.marcas.reduce((x, y) => {
			return x < y ? x : y;
		});
	}

	marcaMasAlta() {
		return this.marcas.reduce((x, y) => {
			return x > y ? x : y;
		});
	}

	esMayorEdad() {
		if (this.edad >= 18) {
			return true;
		}
		return false;
	}
}

/*Crea una clase para representar corredores de maratón dentro de un programa. 
Los corredores tienen un nombre, un apellido, una edad, un club, y una categoría 
(primera, segunda, o tercera). En el momento de creación del corredor, puede que tan 
solo conozcamos el nombre y el apellido. El corredor también tiene marcas realizadas 
durante la temporada. Crea la estructura de clase adecuadas, y además implementa los 
iguientes métodos:
•	Añadir marca, que permita añadir una marca al corredor
•	Obtener la marca mas baja, que permita obtener la marca más baja del corredor en 
la temporada
•	Obtener la marca más alta, que permita obtener la marca más alta del corredor en 
la temporada
•	Un método que nos diga si el corredor es menor de edad
*/