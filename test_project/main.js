let { sumOfSquares } = require('./square.js');
let { addNumber } = require('./numbers.js');

addNumber(1);
addNumber(5);
addNumber(-3);
addNumber(4);
console.log(sumOfSquares()); // => 51