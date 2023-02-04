// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. This sum gives the same number: 
// 89 = 8^1 + 9^2
 
// Task
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

function sumDigPow(a, b) {
    const newArray = []
    for (let i = a; i <= b; i++) {
        const digits = i.toString().split('');
        if (i === digits.reduce((acc, curr, index) => {
            return acc + curr ** (index + 1)
        }, 0)) {
            newArray.push(i)
        }
    }
    return newArray
}

console.log(sumDigPow(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(10, 150)) //[89, 135]