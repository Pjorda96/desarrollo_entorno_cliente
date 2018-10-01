const rl = require('readline-sync');
let edad = rl.question( 'Introduce tu edad: ' );
console.log('Tue edad es ' + edad);

//node Readline.js
//npm install --save readline-sync

let opcion = rl.question('Introduce...:\n' +
'1) Introducir \n' +
'2) Añadir ');