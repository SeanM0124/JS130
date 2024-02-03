//6. Rewrite the following code using classic JS syntax

// function product() {
//   let args = Array.from(arguments);
//   return args.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

function product() {
  let numbers = Array.from(arguments);
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);