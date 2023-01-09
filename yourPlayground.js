console.log('EJ SADIARIN IN THE UNVERSE!!!');
// const food = 200;
// const pricePercent = 0.2;
// const tip = food * pricePercent;
// console.log(tip);

// let input = prompt();
// const typeInput = typeof(input);

// console.log(`input type is: ${typeInput}`);

// let inputInt = Number(input);
// console.log(typeof(inputInt));
// console.log(inputInt);

// // Date
// let now = new Date().toDateString();
// console.log(`The type of date: ${typeof(now)}`);
// console.log(now);
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

/* In this format
* @param: {number} num1 first number to add
* @param: {number} num2 second number to add
* @return {number} returns result sum of adding num1 and num2
*/