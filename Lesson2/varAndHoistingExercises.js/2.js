/* eslint-disable max-len */
//Consider the following code:

for (var index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    var foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);

//Without running the code, what does it print?

//var has function scope

// iteration 1 - foo is undefined, but then is assigned the value 'hello'
//iteration 2 - Hello is logged, and the foo us reassgined to 'bye', the block ends
//Bye - value of foo is logged, which is bye
//2 -- value of index which is globally accessible is logged which is 2


/* Hoisted equivalent
var index;
var foo;

for (index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);

*/