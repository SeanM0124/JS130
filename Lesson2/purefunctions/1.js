//What side effects are present in the `foo` function in the following code?

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop(); //
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);

/*
The above function is mutating a value that is declared outside of the function
It is also logging to the console.
*/