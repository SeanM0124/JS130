//1. Consider the following code:

var foo = function() { //a variable is declared with var, and assigned a function value
  console.log("Bye");
};

function foo() { //A function 
  console.log("Hello");
}

foo();

//Without running this code, what will it display? Explain
//This code displays 'Bye'

//While the function declaration is hoisted, foo is eventually reassigned when the code executes
