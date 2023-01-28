// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder = function (iterable) {
    const newArr = []
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i+1]) {
            newArr.push(iterable[i])
        }
    }
    return newArr
}

console.log(uniqueInOrder('AAABBBBCCCDAAABBB')) //['A','B','C','D','A','B']


// ----- Using filter method ----- //
// var uniqueInOrder=function(iterable){
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

