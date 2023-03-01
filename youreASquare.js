// Given an integral number, determine if it's a square number.

// var isSquare = function(n){
//     let square = Math.floor(Math.sqrt(n))
//     return n === square * square ? true : false
//   }

var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0
  }

console.log(isSquare(-1)) //false
console.log(isSquare(0)) //true
console.log(isSquare(4)) //true
console.log(isSquare(25)) //true
console.log(isSquare(88)) //false