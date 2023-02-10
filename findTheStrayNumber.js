// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.

function stray(numbers) {
    return numbers.find(el => numbers.indexOf(el) === numbers.lastIndexOf(el))
  }

console.log(stray([1, 1, 2]))  //2
console.log(stray([2, 1, 1]))  //2
console.log(stray([17, 17, 3, 17, 17, 17, 17]))  //3