'use strict';
const rl = require('readline-sync');
//var db = require('./db').db;
const ScientificPatent = require('./ScientificPatents').ScientificPatents;
const ScientificArticles = require('./ScientificArticles').ScientificArticles;



let publication = new ScientificArticles('Article', 259, 2018, 3, 'Pablo, Elliot');

console.log(publication.isArticle());