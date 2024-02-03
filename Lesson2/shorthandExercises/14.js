//14. Invoke your sum function using both a list of numbers
//and spread syntax from an array of numbers.

function sum(...args) {
  return args.reduce((a, b) => a + b);
}

let numbers = [1, 2, 3, 4, 5, 6, 7];

sum(...numbers);
sum(4, 5);