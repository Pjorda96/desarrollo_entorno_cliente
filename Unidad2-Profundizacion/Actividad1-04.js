'use strict'

var cadena = 'Los catalanes hacen cosas y y y y y y y y y y'
var cadena2 = 'Todo el mundo odia los catalanes    y'
var x = new Set()
var cont = 0

for(let word of cadena.split(' ')){
  x.add(word)
}

for(let word of cadena2.split(' ')){
  if (x.has(word)){
    cont++
  }
}

console.log(cont)