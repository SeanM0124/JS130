//3. The code below throws an error

var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
}(numbers));

console.log(sum);  // ->  49

//Why does this code produce an error? correct the problem by using an IIFE
//I assume it produces an error due to conflicting names.