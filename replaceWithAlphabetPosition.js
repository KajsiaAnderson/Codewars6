// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
    const words = text.toLowerCase().replace(/[^a-z]/g,"")
    return [...words].map(el => el.charCodeAt() - 96).toString().replace(/,/g," ")
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."))  //"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"