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

// ======= Array methods ======= //

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

// ======= OBJECTS {} ======= //
// objects --> enclosed by curly braces {}, are generic --> can hold different value types or data types (string, number, etc.)
// key: value
// key is also called as property
const person = {
    name: 'Ej', // '' or "" are both fine 
    face: 'handsome',
    shirt: 'green',
    age: 18
}
// Access object property (key)
// dot notation:
console.log(person.name);
console.log(person.face);
console.log(person.shirt);
console.log(person.age);

// bracket notation:
console.log(person['name']);
console.log(person['age']);
console.log(person['shirt']);
console.log(person['face']);
console.log(typeof(person.age));
// add new property to person object
person.hobbies = 'programming and workout';
person['birth month'] = 'January';
console.log(person);

// ======= EXTRA: don't mind ======= //

/* Instructions:
* - Given the formula, iterate two arrays e and z using a loop
* g(z) = 1 / (1 + e**-z)
* g(z) should be in list form / object form {} that holds generic data types (just store results in another new array)
*/
const e = [1.718, 2.718, 3.718, 4.718, 5.718, 6.718, 7.718, 8.718, 9.718, 10.718];
const z = [2, 4, 6 ,8 ,10, 12, 14, 16, 18, 20]
const result = (e, z) => {
    let resultsArr = [];
    for (let i = 0; i < e.length; i++) {
        let formula = 1 / (1 + Math.pow(e[i], -z[i]));
        resultsArr.push(formula);
    }
    console.log(resultsArr);
}

result(e, z);