// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {
    const strands = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    }

    return dna.replace(/A|T|C|G/g, function(x) {
        return strands[x]
    })
}

console.log(DNAStrand("ATTGC"))  //"TAACG"
console.log(DNAStrand("GTAT"))  //"CATA"