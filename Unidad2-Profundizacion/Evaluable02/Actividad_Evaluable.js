'use strict';
const rl = require('readline-sync');
//var db = require('./db').db;
const ReviewArticle = require('./ReviewArticles').ReviewArticles;
const ConferenceArticle = require('./ConferenceArticles').ConferenceArticles;
const ScientificPatent = require('./ScientificPatents').ScientificPatents;

//Permita dar de alta, baja, y modificación de autores,
//artículos científicos (revista y conferencia), y patentes científicas

let publications = [];
let salir = false;
while (!salir) {
    console.log('Bienvenidos al sistema de gestion de la librería cientifica.');
    console.log('1) Dar de alta una publicacion');
    console.log('2) Dar de baja una publicacion');
    console.log('3) Modificar autores');
    console.log('4) Modificar articulos cientificos'); //revista y conferencia
    console.log('5) Modificar patentes cientificas');
    console.log('-1) Salir del sistema');
    let opcion = readline.questionInt('Por favor, seleccione una de estas opciones: ');
    if (opcion === 1) {
        //Dar de alta una publicacion //TODO
        console.log('Selecciona un tipo.');
        console.log('1) Aticulo de revista');
        console.log('2) Articulo de conferencia');
        console.log('3) Patente cientifica');
        console.log('-1) Salir del sistema');
        let tipo = readline.questionInt('Por favor, seleccione una de estas opciones: ');
        if (tipo === 1) {
            let titulo = readline.question('Introduce el titulo: ');
            let numPags = readline.questionInt('Introduce el numero de paginas: ');
            let anyoPublicacion = readline.questionInt('Introduce el año de publicacion: ');
            let numMenciones = readline.questionInt('Introduce el numero de menciones: ');
            let revistaTitle = readline.question('Introduce el titulo de la revista: ');
            let editorial = readline.question('Introduce el nombre de la editorial: ');
            let impactFactor = readline.question('Introduce el factor de impacto: ');
            let autor = readline.question('Introduce el autor: ');

            let reviewArticle = new ReviewArticle(titulo, numPags, anyoPublicacion,
                numMenciones, revistaTitle, editorial, impactFactor, autor);
                publications.push(reviewArticle);
        } else if (tipo === 2 ) {
            let titulo = readline.question('Introduce el titulo: ');
            let numPags = readline.questionInt('Introduce el numero de paginas: ');
            let anyoPublicacion = readline.questionInt('Introduce el año de publicacion: ');
            let numMenciones = readline.questionInt('Introduce el numero de menciones: ');
            let conferenceBookTitle = readline.question('Introduce el titulo del libro de la publicacion: ');
            let conferenceName = readline.question('Introduce el nombre de la confeerencia: ');
            let conferencePlace = readline.question('Introduce el lugar de celebracion la conferencia: ');
            let autor = readline.question('Introduce el autor: ');

            let conferenceArticle = new ConferenceArticle(titulo, numPags, anyoPublicacion, numMenciones,
                conferenceBookTitle, conferenceName, conferencePlace, autor);
                publications.push(conferenceArticle);
        } else if (tipo === 3) {
            let titulo = readline.question('Introduce el titulo: ');
            let anyoPublicacion = readline.questionInt('Introduce el año de publicacion: ');
            let anyoVencimiento = readline.questionInt('Introduce el año de vencimiento: ');
            let autor = readline.question('Introduce el autor: ');

            let scientificPatent = new ScientificPatent(titulo, anyoPublicacion, anyoVencimiento, autor);
            publications.push(scientificPatent);
        } else if (tipo === -1) {
            salir = true;
        }
        
        //console.log(publications);
    } else if (opcion === 2) {
        //Dar de baja una publicacion
        let titulo = readline.question('Por favor, introduce un titulo:');
        let encontrado = false;
        for (let i = 0; i < publications.length; i++) {
            let publication = publications[i];
            if (publication.title === titulo) {
                publications.splice(i);
                encontrado = true;
                break;
            }
        }
        if (encontrado) {
            console.log('Publicacion encontrada y borrada del sistema'); +
            console.log(publications);
        } else {
            console.log('Publicacion no encontrada en el sistema');
        }









    } else if (opcion === 3) {
        //Modificar autores //TODO
        let matricula = readline.question('Por favor, introduce una matricula: ');
        for (let coche of listaCoches) {
            if (coche.matricula === matricula) {
                console.log(coche);
                break;
            }
        }
        /**
         * let arrayCoche = listaCoches.filter( c => c.matricula===matricula );
         * console.log(arrayCoche[0]);
         */
    } else if (opcion === 4) {
        //Modificar articulos cientificos //TODO
        let matricula = readline.question('Por favor, introduce una matricula: ');
        for (let coche of listaCoches) {
            if (coche.matricula === matricula) {
                console.log(coche);
                break;
            }
        }
        /**
         * let arrayCoche = listaCoches.filter( c => c.matricula===matricula );
         * console.log(arrayCoche[0]);
         */
    } else if (opcion === 5) {
        //Modificar patentes cientificas //TODO
        let matricula = readline.question('Por favor, introduce una matricula: ');
        for (let coche of listaCoches) {
            if (coche.matricula === matricula) {
                console.log(coche);
                break;
            }
        }
        /**
         * let arrayCoche = listaCoches.filter( c => c.matricula===matricula );
         * console.log(arrayCoche[0]);
         */
    } else if (opcion === -1) {
        salir = true;
    }

}