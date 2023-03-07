// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.

function deleteNth(arr,n){
    const newArray = []
    return arr.filter(number => 
        {newArray[number] = (newArray[number] || 0) + 1;
        return newArray[number] <= n})
  }

console.log(deleteNth([20,37,20,21], 1)) //[20,37,21]
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) // [1, 1, 3, 3, 7, 2, 2, 2]