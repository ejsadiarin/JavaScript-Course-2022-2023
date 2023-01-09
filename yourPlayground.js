console.log('EJ SADIARIN IN THE UNVERSE!!!');
const food = 200;
const pricePercent = 0.2;
const tip = food * pricePercent;
console.log(tip);

let input = "sentence";
const typeInput = typeof(input);

console.log(`input type is: ${typeInput}`);

let inputInt = Number(input);
console.log(typeof(inputInt));
console.log(inputInt);

// Date
let now = new Date().toDateString();
console.log(`The type of date: ${typeof(now)}`);
console.log(now);
function floorRandom() {
  let random = Math.random() * 3;
  let randomFloor = Math.floor(random);
  return randomFloor;
  // or console.log(randomFloor);
  // and just call floorRandom();
}
// floorRandom();
console.log(floorRandom());

// THE REST IS IN VSCODE //

// Documentation Best Practices:

/* In this format (for functions)
* @param: {number} num1 first number to add
* @param: {number} num2 second number to add
* @return {number} returns result sum of adding num1 and num2
*/

// Array
let letters = ['a', 'b', 'c', 'd', 'e'];
console.log(letters);
console.log(letters[0]);

// Array methods

/* **********************************
1: push --> adds new value to the end of the array
*/

letters.push("f"); 
console.log(letters);

/* **********************************
2: slice --> gets value from array
*/

console.log(letters.slice(0, 3)); 
/*
* @param {indexStart} - index of the value in the array to start from
* @param {indexEnd} - x (index of value you want to get) < indexEnd
*
* Basically: indexStart < x < indexEnd
*/

// Get d, e, f from letters array:
console.log(letters.slice(3, 6));

/* **********************************
3: indexOf --> gets index of the value selected from the specific array
*/
console.log(letters.indexOf('e'));

/* **********************************
4: length --> gets the total index length of an array
*/
console.log(letters.length);

