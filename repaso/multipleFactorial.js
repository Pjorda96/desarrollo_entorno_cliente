/*Crea una función llamada multipleFactorial que tome como 
parámetro un array de número llamado dataArray, y devuelva un 
núevo array que sea el resultado de calcular el factorial para 
cada uno de los elementos en el array. 
Emplea funciones de orden superior (e.g., map, filter, reduce, etc.)*/
/*[1, 2, 3, 4, 5]
[ factorial(1), factorial(2), ... factorial(5) ]*/
function factorial(x){
    if(x===1){
        return x;
    }
    let result = 2;
    for(let i=3; i<=x; i++){
        result = result * i;
    }
    return result;
}

function multipleFactorial(dataArray){
    return dataArray.map( factorial );
}

/*
Ejemplos con otros tipos de datos
Ejemplo con strings
let arrayA = [ "sasdfsd", "hola", "adios", "dsfsd", "eo" ];
console.log( arrayA.map( s => s+'1' ) );

class MyClass {
    constructor(){
        this.x = Math.random();
    }
}
Ejemplo con objetos de una clase propia
let arrayB = [ new MyClass(), new MyClass(), new MyClass() ];
console.log( arrayB.filter( objeto => objeto.x>0.5 ) );  
*/