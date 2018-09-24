'use strict'

function closest(x,...args){
    let relative = [x[0],x[1]]
    let closest = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    let distance = Number.POSITIVE_INFINITY
    for (let value of args){
        let dist = Math.sqrt(Math.pow(value[0]-x[0],2)+Math.pow(value[1]-x[0],2))
        if (distance > dist){
            closest = [value[0], value[1]]
            distance = dist
        }
    }
    console.log(closest)
}

closest(
    [5,5],
    [59,23],
    [85,65],
    [2,2],
    [3,3]
)