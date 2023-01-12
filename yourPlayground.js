console.log("EJ SADIARIN IN THE UNVERSE!!!");
const food = 200;
const pricePercent = 0.2;
const tip = food * pricePercent;
console.log(tip);

let input = "sentence";
const typeInput = typeof input;

console.log(`input type is: ${typeInput}`);

let inputInt = Number(input);
console.log(typeof inputInt);
console.log(inputInt);

// Date
let now = new Date().toDateString();
console.log(`The type of date: ${typeof now}`);
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

/**
 * In this format (for functions)
 *
 * @param {number} num1 - first number to add
 * @param {number} num2 - second number to add
 *
 * @return {number} - returns result sum of adding num1 and num2
 */

// Array
let letters = ["a", "b", "c", "d", "e"];
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
/**
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
console.log(letters.indexOf("e"));

/* **********************************
4: length --> gets the total index length of an array
*/
console.log(letters.length);

// ======= OBJECTS {} ======= //
// objects --> enclosed by curly braces {}, are generic --> can hold different value types or data types (string, number, etc.)
// key: value
// key is also called as property
const person = {
  name: "Ej", // '' or "" are both fine
  face: "handsome",
  shirt: "green",
  age: 18,
};
// Access object property (key)
// dot notation:
console.log(person.name);
console.log(person.face);
console.log(person.shirt);
console.log(person.age);

// bracket notation:
console.log(person["name"]);
console.log(person["age"]);
console.log(person["shirt"]);
console.log(person["face"]);
console.log(typeof person.age);
// add new property to person object
person.hobbies = "programming and workout";
person["birth month"] = "January";
console.log(person);

// ======= EXTRA: don't mind ======= //

/** Instructions:
 * - Given the formula, iterate two arrays e and z using a loop
 * g(z) = 1 / (1 + e**-z)
 * g(z) should be in list form / object form {} that holds generic data types (just store results in another new array)
 */
const e = [
  1.718, 2.718, 3.718, 4.718, 5.718, 6.718, 7.718, 8.718, 9.718, 10.718,
];
const z = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const result = (e, z) => {
  let resultsArr = [];
  for (let i = 0; i < e.length; i++) {
    let formula = 1 / (1 + Math.pow(e[i], -z[i]));
    resultsArr.push(formula);
  }
  console.log(resultsArr);
};

result(e, z);

// ======= Create a function that uses ES6 arrow function with 2 arguments, object, and template literals ======= //
// then store a function in the object, use 'this' keyword

/**
 * createPerson function expression
 *
 * @param {string} theName - takes in name
 * @param {string} shirt - takes in shirt
 *
 * @object property {networth} is a function that refers to assets subtracted by liabilities
 * 'this' keyword refers to the personNew object that houses the properties
 *
 * @returns {string} a template literal by personNew.{property key}
 * when calling or returning a function in an object add parenthesis () for ex. personNew.networth()
 */
const createPerson = (theName, shirt) => {
  const personNew = {
    name: theName,
    shirt: shirt,
    face: "handsome",
    assets: 1000000000,
    liabilities: 700000,
    networth: function () {
      return this.assets - this.liabilities;
    },
  };

  return `${personNew.name} is the name and shirt is ${
    personNew.shirt
  }, and face is ${personNew.face}. The networth is ${personNew.networth()}`;
};

console.log(createPerson("Ej", "green"));

// ======= LOOPS for loop =======

const fruits = ["mango", "banana", "strawberry", "kiwi", "melon"];

// beautiful normal loop using i iteration
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// beautiful shorter form of a for loop using 'of' keyword
for (const fruit of fruits) {
  console.log(`\nThe fruits are: ${fruit}`);
}

// use 'in' keyword for loops and use .length property for total amount of characters
const countLetters = () => {
  let phrase = "hey how are you yes good yes yes ok wow";
  return phrase.length;
};
console.log(`The total letters are: ${countLetters()}`);

// ======= LOOPS using 'of' and 'in' keyword ======= //
/**
 * of --> when looped, returns string or characters
 * in --> when looped, returns numbers instead
 * both can be used when populating a new array
 */
const countLettersWithInKeyword = () => {
  let phrase = "hey hey hey hye yesyesyeysys ok wow";

  for (letter in phrase) {
    console.log(letter);
  }
};
countLettersWithInKeyword(); // prints 0 1 2 3 4 5 6 7 ...

const countLettersWithOfKeyword = () => {
  let phrase = "hey hey hey hye yesyesyeysys ok wow";

  for (letter of phrase) {
    console.log(letter);
  }
};
countLettersWithOfKeyword(); // prints h e y  h e y  h e y  h y e  y e s y e s y ...

const phraseResult = "hey hey ywo hey hey hey good wow ok wow";
let counter = 0;

for (const index in phraseResult) {
  console.log(parseInt(index) + 1);
  counter = index;
}
console.log({ counter }); // returns result as an object { counter: '38' }

// ======= Sum of the numbers in an array ======= //
const arrayNum = [1, 2, 3, 4, 5, 8, 12, 11, 7, 77, 70, 777];

/**
 * sumOfArray function --> product goooooood
 *
 * @param {number} arr - given array
 *
 * @returns {number} - the sum of array by mutating the result variable - adding the current result value + values in the array
 */
const sumOfArray = (arr) => {
  let result = 0;
  for (const num of arr) {
    console.log(num);
    result = result + num;
  }
  return { result }; // returns object
  // can also do return result --> to return as a number
};
console.log(sumOfArray(arrayNum));



// ======= Max Function ======= //
/**
 * @function max(array)
 *
 * @param {number} array - given array
 *
 * @returns {number} - the max number in an array
 */
const max = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let nextNum = array[i + 1];
    if (currentNum < nextNum) {
      result = nextNum;
    }
    if (currentNum > nextNum) {
      result = currentNum;
    }
  }
  return `The max number in the array is: ${result}`;
};
console.log(max(arrayNum));

// another way of doing the max function
const anotherMax = (numbers) => {
  let result = numbers[0];
  for (const number of numbers) {
    if (number > result) {
      result = number;
    }
  }

  // return result; --> can be used if want to return pure number
  return { result };
};
// console.log(`anotherMax function result: ${anotherMax(arrayNum)}`); --> use if want to use return result above
console.log(anotherMax(arrayNum)); // outputs object in console




/**
 * @function letterFrequency(phrase)
 *
 * @param {string} phrase - any phrase or even sentence
 *
 * @returns {object} - counts how many certain specific letters are in a phrase string
 *
 * @example {
 * h: 1,
 * o: 14,
 * e: 7,
 * t: 2,
 * w: 3
 * }
 */
const letterFrequency = (phrase) => {
  let frequency = {};
  for (const letter of phrase) {
    // check if letter exists
    if (letter in frequency) {
      // if yes then increment++
      frequency[letter] += 1;
    } else {
      // otherwise set value to 1
      frequency[letter] = 1;
    }
  }

  return frequency;
};
console.log(letterFrequency("Wow Ej Sadiarin you so good handsome everything code goooooood"));




// REAL WORLD EXAMPLE: GOOGLE SEARCH ENGINE
// --> detecting the frequency of searched words (popular)
/**
 * @function wordFrequency(phrase)
 *
 * @param {string} phrase - a phrase or sentence
 *
 * @method split() - seperates words, letters, etc. given an argument
 * @argument characters - in split() method
 *
 * @returns {object} - counts the certain specific words in a given phrase or sentence
 */
const examplePhrase = "hey hey wow good yes";
const wordFrequency = (phrase) => {
  let frequency = {};
  // use split() method to seperate words
  const splitPhrase = phrase.split(" ");
  for (const word of splitPhrase) {
    // check if word exist
    if (word in frequency) {
      frequency[word] += 1;
    } else {
      // if new word then set value to 1
      frequency[word] = 1;
    }
  }
  return frequency;
};
console.log(wordFrequency(examplePhrase));


/* ======= HIGHER ORDER FUNCTIONS ======= 
 --> functions that takes in another function as argument and/or returns a function
*/

//  MAP, FILTER, REDUCE Array Methods  
const nums = [1, 2, 3, 4, 7, 9, 5, 8];

/**
 * MAP  @method map()
 * - selects all values and 
 * - changes the value of the whole given array
 * - works like loops but returns new array
 *   
 * @param callbackfn
 * 
 * @returns {array} - new array 
 */
const mapFunc = (numArray) => {
  return numArray.map(number => number * 2);
}
console.log(mapFunc(arrayNum));


// MAP simple ver
console.log(nums.map(num => num * 2));



// FILTER - filters out values from an array given a condition
//        - works like loops but returns new array
console.log(nums.filter(num => num > 5 || num === 5));

// works the same as this:
const filter = (numbers, greaterThan) => {
  let result = [];
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number);
    }
  }
  return result;
};
console.log(filter([1, 2, 3, 7, 4, 5], 3));

// REDUCE
/**
 * reduces array to a single value
 * used in SUM
 * @returns one number / single value
 */  

// 
console.log(nums.reduce(num => num * 2, 9)); 
// given an array called nums, use reduce() array method to return the product of the whole array
console.log(nums.reduce((a, b) => a * b)); 

// return sum of array using sum() function
const sum = (a, b) => {
  return a + b;
}
const resultNumsArray = nums.reduce(sum);
console.log(resultNumsArray);
console.log(sumOfArray(nums));


const exampleObj = [
  {name: "personOne", money: 1000000},
  {name: "personTwo", money: 7080328},
  {name: "personThree", money: 891302777}
]
let moneyp = exampleObj[1];
console.log(moneyp);

// ======= given the array of objects above, get the sum of the money {number} ======= //
const moneySum = (objectPerson) => {
  let result = 0;
  for (const person of objectPerson) {
    result = result + person.money;
  }
  return result;
}
console.log(moneySum(exampleObj));

// TODO: optimize above solution (use reduce())
// const reducef = nums.reduce(num => num.reduce())
// const moneySumReduce = (arr) => {
//   let result = 0;
//   for (const num in arr) {
    
//   }
// }
const func = () => {
  let result = 0;
  for (const num of nums) {
    result = result + num;
  }
}

const functionA = (arr) => {
  arr.reduce(fnp => fnp * 2);
  return result
}

