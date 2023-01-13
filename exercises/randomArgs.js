// Get a random number and set minimum value to 1 and max to 734
// Own solution
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
console.log(minMax(Math.floor(Math.random() * 735)));

// =========================================================================== //
// Other solution (superhero)
const otherMinMax = () => {
    const numberOfHeroes = 731;
    return Math.floor(Math.random() * numberOfHeroes) + 1;
}

console.log(otherMinMax); // doesn't print any because the data is from an API (see /api/superHero/script.js)