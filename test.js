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

//PFA -- makeName applies partial function application. It returns a function wrapper that invokes fullName with fewer arguments that it expects. fullName now has a closure that
//includes the argument that is passed into makeName.

// function fullName(first, last) {
// 	console.log(first + ' ' + last);
// }

// function makeName(last) {
// 	return function(first) {
// 		return fullName(first, last);
// 	}
// }

// let menteleClan = makeName('Mentele');
// menteleClan('Sean');
// menteleClan('Mike');
// menteleClan('Eric');


/*
--Hoisting--
Hoisting is something that occurs during the creation phase. Essentially, the JS engine searches through the program, noting down all identifiers. Hoisting behaves differently
depending on the identifier. For let, const and class declarations, the name is recognized, but the value is unset. This act places these variables in the Temporal Dead Zone
until the code that sets the value runs. For var, the identifier is recognized, but until the code executes and sets the value, the variable will be set to undefined. Finally, the two
behaviors of funtions during hoisting. With expressions, they will behave the same as the declarator does, but with function declarations, the the body is hoisted as well.

Its important to note, when something is hoisted, it is hoisted to the top of its declarative scope, be it function or block.

--The var statement--
The var statement is declarator, one that behaves a bit differently from its counterparts. var's declarative scope is function scoped, further when you create a variable with var


--strict mode-- 
Strict mode is an optional (but recomended when able) to use mode. Its best to use strict mode when makind new programs, or even at the function level when making new functions in old programs.
Strict mode makes some rules changes to JS, that help protect the integrity of the code msot notably by changing a number of silent errors into thrown exceptions. It does this by policing variable names and declarations (forgetting a decalration, typoing a variable name). It also has effects
on function invovation context being undefiend, rather than the global object, and enforces the use of `this` in settigns where its needed.

--Closures-- 
Closures are created when a function (be it method, declaration or other) is defined. A closure consists of the function, and the variables in its lexical context that are relevant (used by) the function
Closures lets a function access the variable it needs at its invocation, despite them potentially not in scope at the time, due ot them being in the functions closure when the funciton was defined.

--Scope-- 
There is a number of ways to look at scope. 
Inner vs Outer - This is  referred to as lexical scope. A function can access a variable that is directly within its outer scope, or declared locally within itself.
Global vs Local - Is it visible everywhere or only somwhere? If its everywhere, it has global scope, else it has a variation of local scope.
Block vs Function - This is a sortve 'declared' scope. Its displayed when comparing var to its counterparts let and const. var has function scope, whereas let and cosnt have block scope.

--Private Data--
Private data is established typically with closures or with IIFEs when you want to keep data protected within. This has its advantages for data integrity - developers must use the proper
interface to interact with the private data. It is not a fool safe way to protect

-- Partial function application--
Partial function application requires a minimum of 3 seperate functions. The first function which applies partial function application unto the 3rd aswell as holds the first variable in a closure, returns the 2nd, the wrapper function. 
The wrapper function when invoked allows for the 2nd argument to be passed into the 3rd function, which again, is the function that is receiving less arguments than it inially expects being that it is on the receving end of partial function application.

--IIFEs-- 
Immediately Invoked Function Expressions are useful for a multitude of reasons. For one, they immediately invoke themselves, creating private scope (which can prevent naming conflicts), and creates private data (using closures we can protect the data that may be inside)
Further, once the IIFE executes, we no longer need it, this provides abit of efficiency to the program.

--Shorthand--
There is a number of Shorthand notations. Namely, array and object destructuring, concise method and property syntax, rest and spread syntax etc
spread takes the arguments of an array and spreaaads them out into a list. rest syntax gathers up all or the rest of arguments into an array, and is typically the superioer alternative to 
the arguments keyword.

--Modules-- 
Modules are a beneficial strategy to cleanup your code. It splits your code up into manageable chunks. This reduces entanglement, further prevents naming conflicts, and makes hte code overall more manageable
CommonJS modules are synchronous, meaning they work on one thing at time. This makes them unsuitable for the web, but in local applicaitons they work quite well. You can import them via module.exports = {items, to, import}
and then require them (import) into your other module

--Exceptions--
Exceptions are a type of an error, one that the program may not be able to recover from. Its not a simple invalid input -- its an anamolous event that usually ends the program, atleast if it cannot be caught.
try/catch statments can be used to handle exceptions. If you cannot handle an exception, you need to re-throw it.

--Pure Functions--
A pure function is one that 1. has no side effects 2. its return value is consistent and dependent on its arguments (if it takes a global variable into account for its return value, then it cannot be guarenteed as consistent.)


--side effects-- 
There is a number of different side effects. If the function mutates or reassigns a variable that is not local to the function, if the functions return values are not consistent, the function reads from
an 3rd party source (a database or library)or the function changes the state outside of the program (console.log) it has side effects. Theses are only a few of the many potential side effects.

--Asynchronous programming--
Asynch programming is where you can alter the flow of your program, by having tasks complete in non sequential order. This is most simply done with setTimeout and setInterval.
Both of these take a callback function as their first argument, and a number representing miliseconds as there 2nd argument. setInterval does return a notable value, beign the id that is used in its counterpart clearInterval
to end setIntervals reoccurence (such as an autosave). 

--Testing terminology --
Test Suite - Is a series of tests or groups of tests. It can contain multiple tests
Test - A test can contain multiple assertions, that pertain to investigating a specific situation.
Assertion - An assertion is the expected outcome of a test. It onvoles using 
matchers to compare the received value to the expected value

--Jest-- 
jest is a testing framework for testing JS codebases. It can be managed with npm

--expect-- 
This is used in assertions to take the received value, and work in hand with matchers to compare it to the expected value.

--toBe vs toEqual--
both of these mathcers perform highly similar as matchers. toBe compares items for their strict equality, while toEqual can also compare objects keys and values (not the actual object that is referenced)

--SEAT Approach--
Setup - Set up can be done with beforeEach method. It is most commonly used to create a fresh object prior to each test. beforeEach will run once for each test
Execute - This involves the data for a test suite, meaning to execute the code agaisnt teh object were testing
Assert - assert the results, means to detail what value we expect, using matchers and the expect method
Tear down - this is used after each test, to remove/cleanup as needed. We can use the afterEach method to run once after each test.

--code coverage--
Code coverage is one metric we as developers can use to guage how well our code performs. Using testing and code coverage, we can guage how much of our code we tested, and what and where we didnt test.

--Writing tests--
file.test.js

describe('Some tests', () => {
  let obj;
  beforeEach(() => {                 //Setup
    obj = new Obj();
  });

  test('obj has prop', () => {      //Execute
    expect(obj.prop).toBe(true);    //Assert
  })

  //tear down not present in example
})

--project directory layout--
From the outside in:
Youll have a project, beign a folder/directory. Within you have your test folder and your lib (library) folders. All of your tests are within the test folder, all of the code of the program being in your lib folder.
You may have other folders, such as an assets (images, audio etc). Any dependencies will be installed locally aswell, and notated by your package.json and package-lock.json files.


--Transpiltion--
Is essentially the act of translating code. Babel is a popular transpiler for JS code. You can pass ES6 into babel, and it can transpile it into ES5 code. This is useful as it allows us 
to write code that is keeping with the times, but still be able to interact with browsers that may not be up to date with the most current syntax, all while keeping the same level of abstraction


--package.json--
This file lists all the packages (dependencies) that a project needs in order to run, as well as the versions of those packages. You can also store other configuration settings (like scripts) there.
To initialize a package.json file, we msut run npm init, which after a series of questions creates the package.json file, which is a configuration file but written in the same format as JSON files.
It may havea key such as scripts, or dependencies, directories, name, version etc.

You can manually add the dependencies and then run 'npm install somepackage --save' or use the same command followed by the packages to create teh dependencies without manually eiting the file.

Packages that are only needed during development are called devDependencies, and these are also tracked via the package.json file. You can designate a package as a dev dependency by altering the install command slightly
i.e.: `npm install eslint --save-dev`;


--package-lock.json--
This file presents the precise versions of the packages the npm isntalled, as well as displaying the dependencies and versions of them all. This makes package-lock.json an important fiule, as its needed for users of a 
package to be able to properly install the packages they need to run the project.



--npm scripts--
Scripts can be added into package.json files to add some automation to tasks you may perform on your package. You can create a scripts key into the package.json file, then add the command
you want to beexecuted via that key.


--npm vs npx--
Npms main strength is to manage a projects dependencies. It is used to install and uninstall packages. you can run packages simply by calling them i.e. eslint filename.js, but this will look for a global isntall

Instead, when you want to execute a local package, you can use npx. npx first looks for the local installation of a package before looking for the global isntallation. If it cannot find it, it will
install a temporary package, execute it, then remove it.

Most packages should be installed locally, this ensures that the particualr versions needed are locally available. This allows independence and efficiency amongst packages.
Some packages are isntalled globally however this is rare and dependent on the type of package.

--packaging projects--
To package your project, there is a few steps:
1 - 2. Ensure your project has a package.json file, with the values accurately filled (name, version, main etc). If it has dependecies, ensure the package-lock.json file is updated
make the main field to one of the files in dist(transpiled) or create an index.js that imports the rest of the modules
3. Publish `npm pucblish --access public`
todolist_project/
├── dist
│   ├── todo.js
│   └── todolist.js
├── lib
│   ├── todo.js
│   └── todolist.js
├── index.js
├── node_modules
├── package-lock.json
├── package.json
└── test
    └── todolist.test.js

*/

