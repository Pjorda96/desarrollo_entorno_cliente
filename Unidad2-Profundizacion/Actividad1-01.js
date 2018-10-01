'use strict'
var cadena = 'Los catalanes hacen cosas y y y y y y y y y y'
var array = cadena.split(' ')
var x = new Map()

for( let word of array){
  if (x.has(word)){
    let count = x.get(word)
    count = count + 1
    x.set(word, count)
  } else {
    x.set(word, 1)
  }
}

console.log(x)