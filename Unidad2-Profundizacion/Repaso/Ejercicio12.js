'use strict'

function ejercicio12(n, caras = 6) {
    let myMap = new Map();

    for (let i = 1; i <= n; i++) {
        let random = Math.floor(Math.random() * caras + 1);

        if (!myMap.has(random)){
            myMap.set(random, 1);
        } else {
            myMap.set(random, myMap.get(random) + 1);
        }
    }
    
    return myMap;
}

console.log(ejercicio12(5));

/*Crea una función que simule el lanzamiento de un dado de 6 caras 
un número determinado de veces recogido en un parámetro llamado n.
La función deberá devolver cuantas veces ha aparecido cada una de 
las caras del dado en los experimentos.Emplea la estructura de 
datos map.*/