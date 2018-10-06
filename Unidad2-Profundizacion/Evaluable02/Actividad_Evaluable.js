'use strict';
const readline = require('readline-sync');
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
            let impactFactor = readline.questionInt('Introduce el factor de impacto: ');
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
        let titulo = readline.question('Por favor, introduce un titulo: ');
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
            console.log('Publicacion encontrada y borrada del sistema');
            //console.log(publications);
        } else {
            console.log('Publicacion no encontrada en el sistema');
        }
    } else if (opcion === 3) {
        //Modificar autores
        let titulo = readline.question('Por favor, introduce un titulo: ');
        let encontrado = false;
        for (let i = 0; i < publications.length; i++) {
            let publication = publications[i];
            if (publication.title === titulo) {
                let autor = readline.question('Por favor, introduce un autor: ');
                publications[i].author = autor;
                encontrado = true;

                console.log(publications[i]);
                break;
            }
        }
        if (encontrado) {
            console.log('Publicacion encontrada y autor modificado');
            console.log(publications);
        } else {
            console.log('Publicacion no encontrada en el sistema');
        }
    } else if (opcion === 4) {
        //Modificar articulos cientificos
        let type = readline.question('Por favor, introduce el tipo:\n' +
        '1) Articulo de revista\n' +
        '2) Articulo de conferencia\n' +
        'Tipo: ');
        let encontrado = false;
        let titulo = readline.question('Por favor, introduce un titulo: ');

        if (type === 1) {
            for (let i = 0; i < publications.length; i++) {
                let publication = publications[i];
                if (publication.title === titulo && publication.isReview === true) {
                    console.log('Introduce los datos que quieras modificar y deja en blanco el resto o 0 en los campos numericos');
                    let titulo = readline.question('Introduce el titulo o pulsa enter: ');
                    if (titulo === '') titulo = publications[i].getTitle;

                    let numPags = readline.questionInt('Introduce el numero de paginas o 0: ');
                    if (numPags === 0) numPags = publications[i].getNumPags;

                    let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0: ');
                    if (anyoPublicacion === 0) anyoPublicacion = publications[i].getAnyoPublicacion;

                    let numMenciones = readline.questionInt('Introduce el numero de menciones o 0: ');
                    if (numMenciones === 0) numMenciones = publications[i].getNumMenciones;

                    let revistaTitle = readline.question('Introduce el titulo de la revista o pulsa enter: ');
                    if (revistaTitle === '') revistaTitle = publications[i].getRevistaTitle;

                    let editorial = readline.question('Introduce el nombre de la editorial o pulsa enter: ');
                    if (editorial === '') editorial = publications[i].getEditorial;

                    let impactFactor = readline.questionInt('Introduce el factor de impacto o 0: ');
                    if (impactFactor === 0) impactFactor = publications[i].getImpactFactor;

                    let autor = publications[i].getAuthor;

                    publications.splice(i);

                    let reviewArticle = new ReviewArticle(titulo, numPags, anyoPublicacion,
                        numMenciones, revistaTitle, editorial, impactFactor, autor);
                    publications.push(reviewArticle);

                    encontrado = true;

                    break;
                }
            }
            console.log(publications[publications.length - 1]);
        } else if (type === 2) {
            for (let i = 0; i < publications.length; i++) {
                let publication = publications[i];
                if (publication.title === titulo && publication.isConference === true) {
                    console.log('Introduce los datos que quieras modificar y deja en blanco el resto o 0 en los campos numericos');
                    let titulo = readline.question('Introduce el titulo o pulsa enter: ');
                    if (titulo === '') titulo = publications[i].getTitle;

                    let numPags = readline.questionInt('Introduce el numero de paginas o 0: ');
                    if (numPags === 0) numPags = publications[i].getNumPags;

                    let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0: ');
                    if (anyoPublicacion === 0) anyoPublicacion = publications[i].getAnyoPublicacion;

                    let numMenciones = readline.questionInt('Introduce el numero de menciones o 0: ');
                    if (numMenciones === 0) numMenciones = publications[i].getNumMenciones;

                    let conferenceBookTitle = readline.question('Introduce el titulo del libro de la publicacion o pulsa enter: ');
                    if (conferenceBookTitle === '') conferenceBookTitle = publications[i].getConferenceBookTitle;

                    let conferenceName = readline.question('Introduce el nombre de la confeerencia o pulsa enter: ');
                    if (conferenceName === 0) conferenceName = publications[i].getConferenceName;

                    let conferencePlace = readline.question('Introduce el lugar de celebracion la conferencia o pulsa enter: ');
                    if (conferencePlace === 0) conferencePlace = publications[i].getConferencePlace;

                    let autor = publications[i].getAuthor;

                    publications.splice(i);

                    let conferenceArticle = new ConferenceArticle(titulo, numPags, anyoPublicacion, numMenciones,
                        conferenceBookTitle, conferenceName, conferencePlace, autor);
                    publications.push(conferenceArticle);

                    encontrado = true;

                    break;
                }
            }
            console.log(publications[publications.length - 1]);
        }

        if (encontrado) {
            console.log('Publicacion encontrada y modificada');
            console.log(publications);
        } else {
            console.log('Publicacion no encontrada en el sistema');
        }
    } else if (opcion === 5) {
        //Modificar patentes cientificas
        let encontrado = false;
        for (let i = 0; i < publications.length; i++) {
            let publication = publications[i];
            if (publication.title === titulo && publication.isConference === true) {
                console.log('Introduce los datos que quieras modificar y deja en blanco el resto o 0 en los campos numericos');
                let titulo = readline.question('Introduce el titulo o pulsa enter: ');
                if (titulo === '') titulo = publications[i].getTitle;

                let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0: ');
                if (anyoPublicacion === 0) anyoPublicacion = publications[i].getAnyoPublicacion;

                let anyoVencimiento = readline.questionInt('Introduce el año de vencimiento o 0: ');
                if (anyoVencimiento === 0) anyoVencimiento = publications[i].getAnyoVencimiento;

                let autor = publications[i].getAuthor;

                publications.splice(i);

                let scientificPatent = new ScientificPatent(titulo, anyoPublicacion, anyoVencimiento, autor);
                publications.push(scientificPatent);

                encontrado = true;

                break;
            }
        }
        console.log(publications[publications.length - 1]);

        if (encontrado) {
            console.log('Publicacion encontrada y modificada');
            console.log(publications);
        } else {
            console.log('Publicacion no encontrada en el sistema');
        }









    } else if (opcion === -1) {
        salir = true;
    } else if (opcion === -7777) {
        //borrar la db
        console.log('Base de datos borrada');
        salir = true;
    }

}