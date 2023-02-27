// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list.

function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
        for(let k = i+1; k < numbers.length; k++){
            if(numbers[i] + numbers[k] === target){
                return [i, k]
            }
        }
    }
  }

console.log(twoSum([1, 2, 3], 4)) //[0, 2]
console.log(twoSum([2, 2, 3], 4)) //[0, 1]