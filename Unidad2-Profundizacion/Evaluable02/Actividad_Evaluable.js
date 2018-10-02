'use strict';
//require('db.json');

//require('Publications.js');
class Publications {

    constructor(title, ...author) {

        //var publication = new Map();
        var authors = new Map();
        let cont = 0;

        this.title = title;

        for (auth in author) {
            authors.set(cont, auth);
            cont++;
        }

        this.author = authors;
    }

}

const rl = require('readline-sync');


publication = new Publications('putitas varias', 'Josep' , 'Sergio');
console.log(publication);