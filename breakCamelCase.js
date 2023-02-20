// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ');

    // return string.replace(/([A-Z])/g, ' $1')
    // finds uppercase letter and inserts space before.

    // return string.replace(/([a-z](?=[A-Z]))/g, '$1 ')
    // finds uppercase letter after lowercase and inserts a space between.
}

console.log(solution("camelCasing")) //"camel Casing"
console.log(solution("identifier")) //"identifier"