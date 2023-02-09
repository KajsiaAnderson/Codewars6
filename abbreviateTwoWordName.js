// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.


function abbrevName(name) {
    return name.match(/\b\w/g).join('.').toUpperCase()
}
// \b: matches at the beginning or end of a word
// \w: matches word characters
// /g: global match finds all matches

console.log(abbrevName("Sam Harris")) // "S.H"
console.log(abbrevName("Patrick Feenan")) // "P.F"
