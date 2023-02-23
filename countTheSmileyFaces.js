// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

function countSmileys(arr) {
    let count = 0
    let smileyFaces = [':D', ':)', ':-D', ':~D', ':-)', ':~)', ';D', ';)', ';-D', ';~D', ';-)', ';~)']
    for (let i = 0; i < arr.length; i++) {
        if (smileyFaces.includes(arr[i])) {
            count++
        }
    }
    return count
}

console.log(countSmileys([':D', ':~)', ';~D', ':)'])) //4
console.log(countSmileys([':)', ':(', ':D', ':O', ':;'])) //2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) //1




// function countSmileys(arr) {
//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }

// Regex ^ means appearing at start of string
// Regex $ means appearing at end of string
// Regex ? means match zero or one instance of this character