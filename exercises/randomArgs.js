// Get a random number and set minimum value to 1 and max to 734

const minMax = (number) => {
    let result = 0;
    // reroll
    if (number > 735 && number < 1) {
        minMax(number);
    } else {
        result = number;
        return result;
    }
    
}
// @argument {number} 734 - defines the maximum value
console.log(minMax(Math.floor(Math.random() * 734)));