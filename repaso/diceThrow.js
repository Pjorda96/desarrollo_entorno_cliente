/*
Crea una función que simule el lanzamiento de un 
dado de 6 caras un número determinado de veces recogido en un 
parámetro llamado n. La función deberá devolver cuantas veces 
ha aparecido cada una de las caras del dado en los experimentos. 
Emplea la estructura de datos map*/

function lanzarDado6Caras(){
    return Math.floor(Math.random()*6 + 1);
}

/**
 * 
 * @param {number} n Numero de veces que se va a lanzar el dado 
 */
function simularDado(n){
    let cuentaCaras = new Map();
    for(let i=0;i<n;i++){ //Lanzar el dado
        let tirada = lanzarDado6Caras();
        if(cuentaCaras.has(tirada)){
            //La tirada no es la primera vez que sale
            let cuantasVecesAntes = cuentaCaras.get( tirada );
            cuentaCaras.set( tirada, cuantasVecesAntes + 1 );
        } else{
            //La tirada es la primera vez que nos sale
            cuentaCaras.set( tirada, 1 );
        }
    }
    return cuentaCaras;
}

console.log( simularDado(1000) );