function desvEst(array, media){
    let calc = Math.sqrt(array.map(x => Math.pow( x - media, 2 ))
    .reduce( (a,b) => a+b, 0 ) / array.length)
    console.log(calc)
}

let array = [1,2,3,4,5,6,7,8,9,10]

var desvEst = desvEst(array, array.reduce( (a,b) => a+b ,0 ) / array.length)

//let array = [1,2,3,4,5,6,7,8,9,10]
//var desvEst = console.log(Math.sqrt(array.map(x => Math.pow( x - array.reduce( (a,b) => a+b ,0 ) / array.length, 2 )).reduce( (a,b) => a+b, 0 ) / array.length))