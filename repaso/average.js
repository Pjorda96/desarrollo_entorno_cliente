/*Crea una función llamada average que 
tome por parámetro un array llamado dataArray y 
calcule la media de los valores almacenados en el array. 
La función deberá devolver la media de dicho vector y undefined 
en caso de que el array no tenga elementos. 
Emplea funciones de orden superior sobre arrays (e.g., map, filter, reduce, etc.)*/

function sumaNumeros(a,b){
    return a+b;
}

function average(dataArray){
    //Lógica para implementar la media
    let suma = dataArray.reduce( sumaNumeros );
    //let suma = dataArray.reduce( (a,b) => a+b );
    //let suma = dataArray.reduce( (a,b) =>{return a+b;} );
    return suma/dataArray.length;
}

//let array = [1,2,3,4,5];
//console.log( average(array) );