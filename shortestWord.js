// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
   const word = s.split(' ').map(el => el.length)
   return Math.min(...word)
}

console.log(findShort("turns out random test cases are easier than writing out basic ones"))  //3
console.log(findShort("Let's travel abroad shall we"))  //2