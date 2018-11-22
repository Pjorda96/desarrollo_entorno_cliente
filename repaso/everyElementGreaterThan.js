/*Crea una función llamada everyElementGreaterThan que 
tome por parámetro un número x, y un array de datos dataArray. 
La función devolverá cierto en caso de que TODOS los elementos 
sean mayores que x, y falso en caso contrario (e.g., map, filter, reduce, etc.)*/

function everyElementGreaterThan(x,dataArray){
    /*let newArray = dataArray.filter( elem => elem>x );
    return (newArray.length === dataArray.length);*/
    return dataArray.every( elem => elem > x );
}

let arrayA = [1,2,3,4,5,6];
console.log( everyElementGreaterThan(0, arrayA) );
console.log( everyElementGreaterThan(3, arrayA) );