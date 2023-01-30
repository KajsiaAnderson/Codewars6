// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

function count(string) {
    const object = {}
    for (let i = 0; i < string.length; i++) {
        if (object.hasOwnProperty(string[i])) {
           object[string[i]] += 1
        } else {
            object[string[i]] = 1
        }
    }
    return object
}

console.log(count("aba"))  //{a:2, b:1}
console.log(count(""))  //{}


// ----- Using forEach method ----- //
// function count(string) {
//     const object = {}
//     string.split('').forEach(s => {
//         object[s] ? object[s]++ : object[s] = 1
//     })
//     return object
// }

// console.log(count("aba"))  //{a:2, b:1}
// console.log(count(""))  //{}