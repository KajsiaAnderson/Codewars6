// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.


function arrayDiff(a, b) {
    return a.filter(el => !b.includes(el))
}

console.log(arrayDiff([1,2], [1]))  //[2]
console.log(arrayDiff([1,2,2], [1]))  //[2,2]
console.log(arrayDiff([1,2,2], [2]))  //[1]
console.log(arrayDiff([], [1,2]))  //[]



// function arrayDiff(a, b) {
//   for(let i = 0; i < a.length; i++) {
//     for(let j = 0; j < b.length; j++) {
//         if (a[i] === b[j]){
//             a.splice(i, 1)
//             i--
//         }
//     }
//   }
//   return a
// }