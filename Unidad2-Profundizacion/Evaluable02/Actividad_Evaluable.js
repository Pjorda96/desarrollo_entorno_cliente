'use strict';
const readline = require('readline-sync');
//var db = require('./db').db;
const ReviewArticle = require('./ReviewArticles').ReviewArticles;
const ConferenceArticle = require('./ConferenceArticles').ConferenceArticles;
const ScientificPatent = require('./ScientificPatents').ScientificPatents;

let publications = [];
let salir = false;
while (!salir) {
    console.log('Bienvenidos al sistema de gestion de la librería cientifica.');
    console.log('1) Dar de alta una publicacion');
    console.log('2) Dar de baja una publicacion');
    console.log('3) Modificar autores');
    console.log('4) Modificar articulos cientificos'); //revista y conferencia
    console.log('5) Modificar patentes cientificas');
    console.log('6) Buscar publicaciones cientificas');
    console.log('-1) Salir del sistema');
    let opcion = readline.questionInt('Por favor, seleccione una de estas opciones: ');
    if (opcion === 1) {
        //Dar de alta una publicacion
        console.log('Selecciona un tipo.');
        console.log('1) Aticulo de revista');
        console.log('2) Articulo de conferencia');
        console.log('3) Patente cientifica');
        console.log('-1) Salir del sistema');
        let tipo = readline.questionInt('Por favor, seleccione una de estas opciones: ');
        if (tipo === 1) {
            let titulo = readline.question('Introduce el titulo: ');
            let autor = readline.question('Introduce el autor: ');
            let numPags = readline.questionInt('Introduce el numero de paginas: ');
            let anyoPublicacion = readline.questionInt('Introduce el año de publicacion: ');
            let numMenciones = readline.questionInt('Introduce el numero de menciones: ');
            let revistaTitle = readline.question('Introduce el titulo de la revista: ');
            let editorial = readline.question('Introduce el nombre de la editorial: ');
            let impactFactor = readline.questionInt('Introduce el factor de impacto: ');

            let reviewArticle = new ReviewArticle(titulo, autor, numPags, anyoPublicacion,
                numMenciones, revistaTitle, editorial, impactFactor);
                publications.push(reviewArticle);
        } else if (tipo === 2 ) {
            let titulo = readline.question('Introduce el titulo: ');
            let autor = readline.question('Introduce el autor: ');
            let numPags = readline.questionInt('Introduce el numero de paginas: ');
            let anyoPublicacion = readline.questionInt('Introduce el año de publicacion: ');
            let numMenciones = readline.questionInt('Introduce el numero de menciones: ');
            let conferenceBookTitle = readline.question('Introduce el titulo del libro de la publicacion: ');
            let conferenceName = readline.question('Introduce el nombre de la confeerencia: ');
            let conferencePlace = readline.question('Introduce el lugar de celebracion la conferencia: ');

            let conferenceArticle = new ConferenceArticle(titulo, autor, numPags, anyoPublicacion, numMenciones,
                conferenceBookTitle, conferenceName, conferencePlace);
                publications.push(conferenceArticle);
        } else if (tipo === 3) {
            let titulo = readline.question('Introduce el titulo: ');
            let autor = readline.question('Introduce el autor: ');
            let anyoPublicacion = readline.questionInt('Introduce el año de publicacion: ');
            let anyoVencimiento = readline.questionInt('Introduce el año de vencimiento: ');

            let scientificPatent = new ScientificPatent(titulo, autor, anyoPublicacion, anyoVencimiento);
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
                    if (titulo === '') publications[i].setTitle(titulo);

                    let numPags = readline.questionInt('Introduce el numero de paginas o 0: ');
                    if (numPags === 0) publications[i].setNumPags(numPags);

                    let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0: ');
                    if (anyoPublicacion === 0) publications[i].setAnyoPublicacion(anyoPublicacion);

                    let numMenciones = readline.questionInt('Introduce el numero de menciones o 0: ');
                    if (numMenciones === 0) publications[i].setNumMenciones(numMenciones);

                    let revistaTitle = readline.question('Introduce el titulo de la revista o pulsa enter: ');
                    if (revistaTitle === '') publications[i].setRevistaTitle(revistaTitle);

                    let editorial = readline.question('Introduce el nombre de la editorial o pulsa enter: ');
                    if (editorial === '') publications[i].setEditorial(editorial);

                    let impactFactor = readline.questionInt('Introduce el factor de impacto o 0: ');
                    if (impactFactor === 0) publications[i].setImpactFactor(impactFactor);

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
                    if (titulo === '') publications[i].setTitle(titulo);

                    let numPags = readline.questionInt('Introduce el numero de paginas o 0: ');
                    if (numPags === 0) publications[i].setNumPags(numPags);

                    let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0: ');
                    if (anyoPublicacion === 0) publications[i].setAnyoPublicacion(anyoPublicacion);

                    let numMenciones = readline.questionInt('Introduce el numero de menciones o 0: ');
                    if (numMenciones === 0) publications[i].setNumMenciones(numMenciones);

                    let conferenceBookTitle = readline.question('Introduce el titulo del libro de la publicacion o pulsa enter: ');
                    if (conferenceBookTitle === '') publications[i].setConferenceBookTitle(conferenceBookTitle);

                    let conferenceName = readline.question('Introduce el nombre de la confeerencia o pulsa enter: ');
                    if (conferenceName === 0) publications[i].setConferenceName(conferenceName);

                    let conferencePlace = readline.question('Introduce el lugar de celebracion la conferencia o pulsa enter: ');
                    if (conferencePlace === 0) publications[i].setConferencePlace(conferencePlace);

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
                if (titulo !== '') publications[i].setTitle(titulo);

                let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0: ');
                if (anyoPublicacion !== 0) publications[i].setAnyoPublicacion(anyoPublicacion);

                let anyoVencimiento = readline.questionInt('Introduce el año de vencimiento o 0: ');
                if (anyoVencimiento !== 0) publications[i].setAnyoVencimiento(anyoVencimiento);

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

















    } else if (opcion === 6) {
        //Búsqueda por diferentes criterios TODO
        let autor = readline.question('Introduce el autor o pulsa enter: ');
        if (autor === '') autor = '';//publications[i].getNumMenciones;

        let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0: ');
        if (anyoPublicacion === 0) numMenciones = publications[i].getNumMenciones;

        let tipo = readline.question('Introduce el tipo de publicacion (Revista|Conferencia|Patente) o pulsa enter: ');
        if (tipo === 0) numMenciones = publications[i].getNumMenciones;

        let busqueda = [];
        for (let publicacion of publications) {

        }
    }









     else if (opcion === -1) {
        salir = true;
    } else if (opcion === -7777) {
        //borrar la db
        console.log('Base de datos borrada');
        salir = true;
    }

}