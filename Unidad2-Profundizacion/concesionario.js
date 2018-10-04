const rl = require('readline-sync');

class Coche{

    /**
     * 
     * @param {String} matricula 
     * @param {String} marca 
     * @param {String} modelo 
     * @param {String} color 
     * @param {Number} km 
     */
    constructor(matricula, marca, modelo, color, km) {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.km = km;
        this.reservado = false;
    }

    getMatricula(){
        return this.matricula;
    }

}

let listaCoches = [];
let salir = false;

while (!salir) {
    console.log('Bienvenidos al sistema de gestión del concesionario');
    console.log('1) Dar de alta coche');
    console.log('2) Dar de baja coche');
    console.log('3) Buscar un coche y mostrar información');
    console.log('-1) Salir del sistema');
    let opcion = rl.questionInt('Por favor, seleccione una de estas opciones: ');

    if (opcion === 1) {
        //Dar de alta un coche
        let matricula = rl.question('Matrícula: ');
        let marca = rl.question('Marca: ');
        let modelo = rl.question('Modelo: ');
        let color = rl.question('Color: ');
        let km = rl.questionFloat('Km: ');
        let cocheNuevo = new Coche(matricula, marca, modelo, color, km);

        listaCoches.push(cocheNuevo);
        console.log(listaCoches);
    } else if (opcion === 2) {
        //Dar de baja un coche
        let matricula = rl.question('Por favor, introduce una matrícula: ');
        let encontrado = false;
        for (let coche of listaCoches) {
            if (coche.matricula === matricula) {
                listaCoches.splice(matricula);
                encontrado = true;
                break;
            }
        }
        if (encontrado === true) {
            console.log('Coche encontrado y borrado');
        } else {
            console.log('Coche no encontrado');
        }
    } else if (opcion === 3) {
        //Buscar un coche
        let matricula = rl.question('Por favor, introduce una matrícula: ');
        for (let coche of listaCoches){
            if (coche.matricula === matricula){
                console.log(coche);
                break;
            }
        }

        //let arrayCoche = listaCoches.filter( c => c.matricula === matricula );
        //console.log(arrayCoche[0]);
    } else if (opcion === -1) {
        this.salir = true;
    }
}
