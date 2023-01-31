// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    const newArray = []
    for(let i = 0; i<l.length; i++){
        if (typeof l[i] !== "string") {
            newArray.push(l[i])
        }
    }
    return newArray
  }

console.log(filter_list([1, 2, 'a', 'b'])) //[1,2]

// ----- Using filter method ----- //
// function filter_list(l) {
//     return l.filter(v => typeof v === "number")
// }