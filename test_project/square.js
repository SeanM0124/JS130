let { numbers } = require('./numbers');

function sumOfSquares() {
  return getNumbers().reduce((sum, number) => {
    return square(number) + sum;
  });
}

function getNumbers() {
  return [...numbers];
}

function square(value) {
  return value * value;
}

module.exports = {
  sumOfSquares,
}