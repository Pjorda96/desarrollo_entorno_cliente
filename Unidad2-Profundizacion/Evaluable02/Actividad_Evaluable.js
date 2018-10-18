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
const ReviewArticle = require('./js/ReviewArticles').ReviewArticles;
const ConferenceArticle = require('./js/ConferenceArticles').ConferenceArticles;
const ScientificPatent = require('./js/ScientificPatents').ScientificPatents;

/**
 * @returns {Object} autores
 */
function insertarAutores() {
  let autores = [];
  let finAutores = true;
  let autor = readline.question('Introduce el autor: ');
  autores.push(autor);
  do {
    let autor = readline.question('Introduce otro autor o pulsa enter: ');
    if (autor !== '') {
      autores.push(autor);
    } else {
      finAutores = false;
    }
  } while (finAutores);
  return autores;
}

/**
 *
 * @param {boolean} encontrado
 */
function encont(encontrado) {
  if (encontrado) {
    console.log('\n Publicacion encontrada y gestionada en el sistema');
  } else {
    console.log('\n Publicacion no encontrada en el sistema');
  }
}

let db = fs.readFileSync('./js/db.json', 'utf8');
let publications = JSON.parse(db);
let salir = false;

while (!salir) {
  console.log('\n' + 'Bienvenidos al sistema de gestion de la librería cientifica.');
  console.log('1) Dar de alta una publicacion');
  console.log('2) Dar de baja una publicacion');
  console.log('3) Modificar autores');
  console.log('4) Modificar articulos cientificos'); //revista y conferencia
  console.log('5) Modificar patentes cientificas');
  console.log('6) Buscar publicaciones cientificas');
  console.log('7) Numero de publicaciones cientificas por autor y año');
  console.log('8) Factor de impacto por autor y año');
  console.log('9) Calcule el Indice-h de un autor');
  console.log('10) Mostrar db');
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

      console.log('Revista introducida \n');
    } else if (tipo === 2) {
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

      console.log('Conferencia introducida \n');
    } else if (tipo === 3) {
      let titulo = readline.question('Introduce el titulo: ');
      let autor = insertarAutores();
      let anyoPublicacion = readline.questionInt('Introduce el año de publicacion: ');
      let anyoVencimiento = readline.questionInt('Introduce el año de vencimiento: ');

      let scientificPatent = new ScientificPatent(titulo, autor, anyoPublicacion, anyoVencimiento);
      publications.push(scientificPatent);

      console.log('Patente introducida \n');
    } else if (tipo === -1) {
      salir = true;
    }
  } else if (opcion === 2) {
    //Dar de baja una publicacion
    let titulo = readline.question('Por favor, introduce un titulo: ');
    let encontrado = false;
    for (let i = 0; i < publications.length; i++) {
      let publication = publications[i];
      if (publication.title === titulo) {
        publications.splice(i, 1);
        encontrado = true;
        break;
      }
    }

    encont(encontrado)
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
    encont(encontrado)
  } else if (opcion === 4) {
    //Modificar articulos cientificos //TODO: no funciona
    let type = readline.question('Por favor, introduce el tipo:\n' +
      '1) Articulo de revista\n' +
      '2) Articulo de conferencia\n' +
      'Tipo: ');
    let encontrado = false;
    let titulo = readline.question('Por favor, introduce un titulo: ');

    if (type === 1) {
      for (let i = 0; i < publications.length; i++) {
        let publication = publications[i];
        if (publication.title === titulo && publication._review) {
          console.log('Introduce los datos que quieras modificar y deja en blanco el resto o 0 en los campos numericos');
          let titulo = readline.question('Introduce el titulo o pulsa enter (Antiguo: ' + publication.title + '): ');
          if (titulo === '') publications[i].title = titulo;

          let numPags = readline.questionInt('Introduce el numero de paginas o 0 (Antiguo: ' + publication.numPags + '): ');
          if (numPags === 0) publications[i].numPags = numPags;

          let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0 (Antiguo: ' + publication.anyoPublicacion + '): ');
          if (anyoPublicacion === 0) publications[i].anyoPublicacion = anyoPublicacion;

          let numMenciones = readline.questionInt('Introduce el numero de menciones o 0 (Antiguo: ' + publication.numMenciones + '): ');
          if (numMenciones === 0) publications[i].numMenciones = numMenciones;

          let revistaTitle = readline.question('Introduce el titulo de la revista o pulsa enter (Antiguo: ' + publication.revistaTitle + '): ');
          if (revistaTitle === '') publications[i].revistaTitle = revistaTitle;

          let editorial = readline.question('Introduce el nombre de la editorial o pulsa enter (Antiguo: ' + publication.editorial + '): ');
          if (editorial === '') publications[i].editorial = editorial;

          let impactFactor = readline.questionInt('Introduce el factor de impacto o 0 (Antiguo: ' + publication.impactFactor + '): ');
          if (impactFactor === 0) publications[i].impactFactor = impactFactor;

          encontrado = true;

          break;
        }
      }
      console.log(publications[publications.length - 1]);
    } else if (type === 2) {
      for (let i = 0; i < publications.length; i++) {
        let publication = publications[i];
        if (publication.title === titulo && publication._conference) {
          console.log('Introduce los datos que quieras modificar y deja en blanco el resto o 0 en los campos numericos');
          let titulo = readline.question('Introduce el titulo o pulsa enter (Antiguo: ' + publication.titulo + '): ');
          if (titulo === '') publications[i].title = titulo;

          let numPags = readline.questionInt('Introduce el numero de paginas o 0 (Antiguo: ' + publication.numPags + '): ');
          if (numPags === 0) publications[i].numPags = numPags;

          let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0 (Antiguo: ' + publication.anyoPublicacion + '): ');
          if (anyoPublicacion === 0) publications[i].anyoPublicacion = anyoPublicacion;

          let numMenciones = readline.questionInt('Introduce el numero de menciones o 0 (Antiguo: ' + publication.numMenciones + '): ');
          if (numMenciones === 0) publications[i].numMenciones = numMenciones;

          let conferenceBookTitle = readline.question('Introduce el titulo del libro de la publicacion o pulsa enter (Antiguo: ' + publication.conferenceBookTitle + '): ');
          if (conferenceBookTitle === '') publications[i].conferenceBookTitle = conferenceBookTitle;

          let conferenceName = readline.question('Introduce el nombre de la confeerencia o pulsa enter (Antiguo: ' + publication.conferenceName + '): ');
          if (conferenceName === 0) publications[i].conferenceName = conferenceName;

          let conferencePlace = readline.question('Introduce el lugar de celebracion la conferencia o pulsa enter (Antiguo: ' + publication.conferencePlace + '): ');
          if (conferencePlace === 0) publications[i].conferencePlace = conferencePlace;

          encontrado = true;

          break;
        }
      }
    }

    encont(encontrado)
  } else if (opcion === 5) {
    //Modificar patentes cientificas
    let encontrado = false;
    let titulo = readline.question('Por favor, introduce un titulo: ');
    for (let i = 0; i < publications.length; i++) {
      let publication = publications[i];
      if (publication.title === titulo && publication._patent) {
        console.log('\n' + 'Introduce los datos que quieras modificar y deja en blanco el resto o 0 en los campos numericos');
        let titulo = readline.question('Introduce el titulo o pulsa enter (Antiguo: ' + publication.title + '): ');
        if (titulo !== '') publications[i].title = titulo;

        let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0 (Antiguo: ' + publication.anyoPublicacion + '): ');
        if (anyoPublicacion !== 0) publications[i].anyoPublicacion = anyoPublicacion;

        let anyoVencimiento = readline.questionInt('Introduce el año de vencimiento o 0 (Antiguo: ' + publication.anyoVencimiento + '): ');
        if (anyoVencimiento !== 0) publications[i].anyoVencimiento = anyoVencimiento;

        encontrado = true;

        break;
      }
    }

    encont(encontrado)
  } else if (opcion === 6) {
    //Búsqueda por diferentes criterios
    let autor = readline.question('Introduce el autor o pulsa enter: ');
    let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0: ');
    let tipo = undefined;
    let busqueda = [];
    let encont = undefined;

    do {
      tipo = readline.question('Introduce el tipo de publicacion (Revista|Conferencia|Patente) o pulsa enter: ');
    } while (tipo !== 'Revista' && tipo !== 'Conferencia' && tipo !== 'Patente' && tipo !== '')

    for (let publication of publications) {
      if (autor !== '') {
        for (let author of publication.author) {
          if (author === autor) {
            encont = true;
          }
        }
        if (encont !== true) {
          encont = false;
        }
      }

      if (anyoPublicacion !== 0 && encont !== false) {
        if (publication.anyoPublicacion === anyoPublicacion) {
          encont = true;
        } else {
          encont = false;
        }
      }

      if (tipo !== '' && encont !== false) {
        if (tipo === 'Revista' && publication._review) {
          encont = true;
        } else if (tipo === 'Conferencia' && publication._conference) {
          encont = true;
        } else if (tipo === 'Patente' && publication._patent) {
          encont = true;
        } else {
          encont = false;
        }
      }

      if (encont === true) {
        busqueda.push(publication);
        encont = undefined;
      }
    }
    console.log(busqueda);
  } else if (opcion === 7) {
    //Numero de publicaciones por autor y año
    let autor = readline.question('Introduce el autor: ');
    let anyo = readline.questionInt('Introduce el año de inicio de busqueda: ');
    let busqueda = 0;
    let encont = false;

    for (let publication of publications) {
      if (autor !== '' && anyo <= publication.anyoPublicacion) {
        for (let author of publication.author) {
          if (author === autor) {
            encont = true;
          }
        }
      } else {
        console.log('Datos no introducidos correctamente');
      }
      if (encont === true) {
        busqueda++;
        encont = false;
      }
    }
    console.log('El numero de publicaciones de ' + autor + ' es: ' + busqueda);
  } else if (opcion === 8) {
    //Factor de impacto por autor y año
    let autor = readline.question('Introduce el autor: ');
    let anyo = readline.questionInt('Introduce el año de inicio de busqueda: ');
    let busqueda = 0;
    let encont = false;

    for (let publication of publications) {
      if (autor !== '' && anyo <= publication.anyoPublicacion && publication._review) {
        for (let author of publication.author) {
          if (author === autor) {
            encont = true;
          }
        }
      }
      if (encont === true) {
        busqueda = busqueda + publication.impactFactor;
        encont = false;
      }
    }
    console.log('El factor de impacto de ' + autor + ' es ' + busqueda);














  } else if (opcion === 9) {
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






  } else if (opcion === 10) {
    //Mostrar db
    console.log(publications);
  } else if (opcion === -1) {
    //salir del sistema
    salir = true;
  } else if (opcion === -7777) {
    //borrar la db
    fs.writeFileSync('./db.json', JSON.stringify([]));
    console.log('Base de datos borrada');
    salir = true;
  } else {

  }

}

db = JSON.stringify(publications);

fs.writeFileSync('./js/db.json', db);