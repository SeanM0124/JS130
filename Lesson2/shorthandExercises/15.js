//Use spread syntax to invoke the prod function with arr and
//explain what is happening as part of your answer.

const arr = [1, 2, 3];

function prod(num1, num2) {
  return num1 * num2;
}

console.log(prod(...arr));
//We are taking arr and spreading out its elements using spread syntax
//However, the function can only take two parameters, so it only accepts
//the first two elements of the array. thus, the returned value is 2