'use strict';

const rl = require('readline-sync');
//var db = require('./db').db;
const ScientificPatent = require('./ScientificPatents').ScientificPatents;



let publication = new ScientificPatent('Articulo', 'Pablo', 'Josep', 'Sergio', 2018, 2020);

console.log(publication);