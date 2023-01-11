// Test you code by forking this repl: 
// 👉 

// Write a function that takes in an array of numbers and returns the largest number
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7, 18];

function findMax (array) {
    let result = 0;
    for (const num of array) {
        if (num > result) {
            result = num;
        }
    }
  return result;
}
console.log(findMax(numbersArr));
//Topics: loops, arrays, conditions,