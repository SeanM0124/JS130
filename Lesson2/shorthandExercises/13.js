//13. Use rest syntax to create a function sum that takes an
//arbitrary number of arguments and returns their sum.

function sum(...args) {
  return args.reduce((a, b) => a + b);
}

