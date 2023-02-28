// Given the triangle of consecutive odd numbers:
// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle 

function rowSumOddNumbers(n) {
	return n ** 3
}

console.log(rowSumOddNumbers(1))  //1
console.log(rowSumOddNumbers(2))  //8
console.log(rowSumOddNumbers(42))  //74088