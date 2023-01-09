/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

// ES5 Syntax:
// function add(){
//   //Add function here
// }

// function sub(){
//   //Subtract function here
// }

// function div(){
//   //Divide function here
// }

// function mul(){
//   //Multiply function here
// }

// ES6 Syntax:
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const div = (num1, num2) => num1 / num2;
const mul = (num1, num2) => num1 * num2;

console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/
/*
* @param {num1, num2} takes in number as argument to perform a function with
* @returns {result} result after performing function
*/
let result = (num1, num2) => {
  const perform = add(num1, num2);
  return perform;
}
console.log(result(1, 1));