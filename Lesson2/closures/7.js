/*
Without running the following code, determine what value it logs on
the last line. Explain how the program arrived at that final result.
*/

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2); //function with product 2
let result = bar(3); //6
result += bar(4); //30
result += bar(5); // 120 + 30
console.log(result); //determine the value logged -> 150