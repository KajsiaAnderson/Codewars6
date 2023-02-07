// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
    const avg = (s1 + s2 + s3) / 3
    return avg >= 90 ? 'A' : avg >= 80 ? 'B' : avg >= 70 ? 'C' : avg >= 60 ? 'D' : 'F'
  }

console.log(getGrade(95,90,93)) //'A'
console.log(getGrade(44,55,52)) //'F'
console.log(getGrade(70,70,79)) //'C'