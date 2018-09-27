let array = [1,2,3,4,5,6,7,8,9,10];
console.log( array.filter( x => x%2 == 0 ).reduce( (a,b) => a+b ,0) )