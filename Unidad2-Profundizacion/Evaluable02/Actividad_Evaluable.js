'use strict';
/**
 * Para una mejor lectura y comprension del codigo:
 *
 * Todas la variables y metodos referentes a clases seran en inglés
 * Las variables de datos pedidas al usuario y resto de variables
 * utilizadas en el codigo seran en castellano
 */

const fs = require('fs');
const readline = require('readline-sync');
//var db = require('./db').db;
const ReviewArticle = require('./ReviewArticles').ReviewArticles;
const ConferenceArticle = require('./ConferenceArticles').ConferenceArticles;
const ScientificPatent = require('./ScientificPatents').ScientificPatents;

/**
 * @returns {Object} autores
 */
function insertarAutores() {
    let autores = [];
    let autor = readline.question('Introduce el autor: ');
    autores.push(autor);
    do {
        let autor = readline.question('Introduce otro autor o pulsa enter: ');
        if (autor !== '') {
            autores.push(autor);
        }
    } while (autor == '');
    return autores;
}

/**
 *
 * @param {boolean} encontrado
 */
function encontrado(encontrado) {
    if (encontrado) {
        console.log('Publicacion encontrada y borrada del sistema');
        //console.log(publications);
    } else {
        console.log('Publicacion no encontrada en el sistema');
    }
}

fs.readFile('./db.json', function read(err, data) {
    if (err) {
        console.log('Error');
    }
    db = data;
    console.log(db);
});
let publications = JSON.parse(db);
//let publications = [];
let salir = false;

while (!salir) {
    console.log('Bienvenidos al sistema de gestion de la librería cientifica.');
    console.log('1) Dar de alta una publicacion');
    console.log('2) Dar de baja una publicacion');
    console.log('3) Modificar autores');
    console.log('4) Modificar articulos cientificos'); //revista y conferencia
    console.log('5) Modificar patentes cientificas');
    console.log('6) Buscar publicaciones cientificas');
    console.log('7) Numero de publicaciones cientificas por autor y año');
    console.log('8) Factor de impacto por autor y año');
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
            let autor = insertarAutores();
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
            let autor = insertarAutores();
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
            let autor = insertarAutores();
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
                publications.splice(i,1);
                encontrado = true;
                break;
            }
        }

        encontrado(encontrado)
    } else if (opcion === 3) {
        //Modificar autores
        let titulo = readline.question('Por favor, introduce un titulo: ');
        let encontrado = false;
        for (let i = 0; i < publications.length; i++) {
            let publication = publications[i];
            if (publication.title === titulo) {
                let autor = insertarAutores();
                publications[i].author = autor;
                encontrado = true;

                console.log(publications[i]);
                break;
            }
        }
        encontrado(encontrado)
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

        encontrado(encontrado)
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

        encontrado(encontrado)
    } else if (opcion === 6) {
        //Búsqueda por diferentes criterios
        let autor = readline.question('Introduce el autor o pulsa enter: ');
        let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0: ');
        let tipo = readline.question('Introduce el tipo de publicacion (Revista|Conferencia|Patente) o pulsa enter: ');
        let busqueda = [];
        let encont = false;

        for (let publication of publications) {
            if (autor !== '') {
                for (author of publication.getAuthor()) {
                    if ( author === autor ) {
                        encont = true;
                    }
                }
            }
            if (anyoPublicacion !== 0 && publication.getAnyoPublicacion()) encont = true;
            if (tipo !== 0 && publication.isReview
                || publication.isConference
                || publication.isPatent) encont = true;
            if (encont === true) busqueda.push(publication);
        }
        console.log(busqueda);
    } else if (opcion === 7) {
        //Numero de publicaciones por autor y año
        let autor = readline.question('Introduce el autor: ');
        let anyo = readline.questionInt('Introduce el año de inicio de busqueda: ');
        let busqueda = 0;
        let encont = false;

        for (let publication of publications) {
            if (autor !== '' && anyo <= publication.getAnyoPublicacion()) {
                for (author of publication.getAuthor()) {
                    if (author === autor) {
                        encont = true;
                    }
                }
            }
            if (encont === true) busqueda++;
        }
        console.log('El numero de publicaciones de ' + autor + ' es: ' + busqueda);
    } else if (opcion === 8) {
        //Factor de impacto por autor y año
        let autor = readline.question('Introduce el autor: ');
        let anyo = readline.questionInt('Introduce el año de inicio de busqueda: ');
        let busqueda = 0;
        let encont = false;

        for (let publication of publications) {
            if (autor !== '' && anyo <= publication.getAnyoPublicacion()) {
                for (author of publication.getAuthor()) {
                    if (author === autor) {
                        encont = true;
                    }
                }
            }
            if (encont === true) busqueda = busqueda + publication.getImpactFactor();
        }
        console.log('El factor de impacto de ' + autor + ' es ' + busqueda);
    }















    else if (opcion === 9) {
        //Calcule el Indice-h de un autor //TODO: hacer
        let autor = readline.question('Introduce el autor: ');
        let anyo = readline.questionInt('Introduce el año de inicio de busqueda: ');
        let busqueda = 0;
        let encont = false;

        for (let publication of publications) {
            if (autor !== '' && anyo <= publication.getAnyoPublicacion()) {
                for (author of publication.getAuthor()) {
                    if (author === autor) {
                        encont = true;
                    }
                }
            }
            if (encont === true) busqueda = busqueda + publication.getImpactFactor();
        }
        console.log('El factor de impacto de ' + autor + ' es ' + busqueda);
    }








     else if (opcion === -1) {
        salir = true;
    } else if (opcion === -7777) {
        //borrar la db
        console.log('Base de datos borrada');
        salir = true;
    }

}

db = JSON.stringify(publications);

fs.writeFile('db.json', db, function write (err) {
  if (err) {
    console.log('Error');
  }
  console.log('The file has been saved!');
});
