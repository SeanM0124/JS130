//Without running the following code, determine what it logs:

var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo();

//This will log

function foo() {
  var bar;
  bar = bar - 42;
  console.log(bar);
}

var bar;
bar = 82;

foo();