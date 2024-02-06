//What does strict mode do?
/*
Strict mode helps protect your program from simple mistakes. It does this by applying more 'strict' semantic rules. Some silent failures will become exceptions. Other changes such as: trying to create a variable without a declaration keyword will throw an exception, function invocations will have undefined as their implicit context, polices names of variables i.e. cant name things the same as keywords, or the same as an already declared variable.
*/


//Describe hoisting for variables declared with let or const
/*
let and const identifiers are hoisted to the top of their block scope, however they are not set a value. This places them in the Temporal Dead Zone until the code executes. JS will know they are there, but will not give it a value.
*/


//Describle how variables with var are hoisted
/*
var identifiers are hoisted to the top of their function scope, and are initially set to the value of undefined until their 'reassignment' later.
*/

//Describe how classes are hoisted
/*
Similar to let and const, the name gets hoisted, but the definition does not. this places the class in the Temporal Dead Zone until the definition code is executed. This occurs for both declarations and expressions
*/

//Define closure. When are closures created?
/*
A closure consists of a function and the variables in its lexical scope that are relevant to the function.  Closures are created when you define a function or method.
*/

//Define partial function application. Write an example.

/*
When a function applies some arguments of a different function when called, it has partial function application
*/

// function add(first, second) {
//   console.log(first + second);
// }

// function firstHalf(a) {
//   return function(b) {
//     return add (a, b);
//   }
// }

// let test = firstHalf(1);
// test(2);

//Above, firstHalf uses partial function application. It applies some of the arguments that the returned function needs. The returned function then has the remaining arugments applied when it is called.

//What is the benefits of using IIFEs?
/*
IIFEs allow us to create private data. It also allows us to create a private scope, and avoid naming conflicts.
*/

//Rewrite the following code snippet without shorthand

// let student = {
//   name: 'Jane Doe',
//   age: 20,
//   phone: 1112223333,
//   email: 'jane@email.com'
// };

// // let {name, email, age} = student;

// let name = student.name;
// let email = student.email;
// let age = student.age;

// console.log(age);

//What will this code log to the console?

// let foo = [1, 2, 3];
// let bar = [4, 5, 6];
// let qux = [...foo, ...bar]; //spread syntax being used
// console.log(qux);  //[1, 2, 3, 4, 5, 6];

//What is the difference between spread syntax and rest syntax?

/*
Spread syntax takes an array, and spreads out its values into a list. Rest syntax, takes arguements and rests them into an array.
*/

//When should you throw exceptions?
/*
You should throw exceptions when anomalous values/events/circumstances occur. Things thatt shouldnt be ignored
*/

//When should you not throw exceptions?
/*
When simple things occur, such as invalid user input etc. (things taht you can handle in the code locally)
*/

//When would you use CommonJS modules bs JS modules?
/*
The synchronous aspect of CommonJS modules make it unviable for browsers. CommonJS Modules are best for local programs(?)
JS Modules are ideal for the broswer.
*/