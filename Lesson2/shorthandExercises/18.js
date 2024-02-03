//OPTIONAL Write a function that takes 5 string arguments,
//and returns an object with 3 properties:

// first: the first argument
// last: the last argument
// middle: the middle 3 arguments as a sorted array


// After writing the function, write some code to call the function.
//The arguments you provide should come from an array.
//You should create local variables named first, last,
//and middle from the return value.

// Use shorthand syntax wherever you can.

function optional(first, second, middle, fourth, last) {
  return {
    first,
    middle: [second, middle, fourth].sort(),
    last,
  };
}

let arr = ['a', 'c', 'b', 'd', 'e'];
let { first, middle, last } = optional(...arr);

console.log(first);
console.log(middle);
console.log(last);