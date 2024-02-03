//Which of the following functions are pure functions?

//Function1
function sum(a, b) {
  console.log(a + b);
  return a + b;
}
//Unpure - it logs to the console

//Function2
function sum(a, b) {
  a + b;
}
//Pure - it returns the same value everytime, it doesnt mess with outer variables

//Function3
function sum(a, b) {
  return a + b;
}

//Pure, its return values are consistent

//Function4
function sum(a, b) {
  return a + b + Math.random();
}
//Unpure, it uses Math.random which produces a side effect of accessing system hardware

//Function5
function sum(a, b) {
  return 3.1415;
}

//Pure, it returns consistent values