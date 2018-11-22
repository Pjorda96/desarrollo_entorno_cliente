/*Crea una función llamada getClosestEnemyIndex
que tome como parámetro un array de dos posiciones representando 
las posiciones x e y de un personaje llamado characterPosition, y un 
segundo parámetro que será un array de enemigos llamado enemyPositions 
donde cada valor introducido será un array con las posiciones x e y de un enemigo. 
La función deberá determinar el índice en el array del enemigo más cercano al 
personaje. En principio, emplea la distancia euclidea para determinar la distancia 
entre dos pares de coordenadas 
(https://en.wikipedia.org/wiki/Euclidean_distance#Two_dimensions). 
Puedes construirte una función llamada euclideanDistance que tome 
como parámetros dos coordenadas, y calcule la distancia euclidea entre ambas 
posiciones. Emplea para este ejercicio la función de orden superior reduce.*/

//elemento => {let x=0; return elemento > x}
//[ [1,2], [0,0], [3,4], [6,7] ]

/**
 * Calcular la distancia euclidea
 * @param {*} x Es una coordenada ejemplo [1,2] 
 * @param {*} y Es otra coordenada ejemplo [4,2]
 */
function euclideanDistance(x,y){
    return Math.sqrt( (x[0]-y[0])**2  + (x[1]-y[1])**2 );
}

function getClosestEnemyIndex( characterPosition, enemyPositions ){
    return enemyPositions.reduce( (a,b) => {  
        let distance1 = euclideanDistance(a,characterPosition);
        let distance2 = euclideanDistance(b, characterPosition);
        if(distance1<distance2){
            return a;
        } else {
            return b;
        }
    } );
}