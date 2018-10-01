'use strict'
var precio = 10
var minutos = 300

if (minutos >= 180){
  let min180 = minutos - 180
  precio += (min180 * 0.10)
}

if (minutos >= 240){
  let min240 = minutos - 240
  precio += (min240 * 0.20)
}

console.log(precio)