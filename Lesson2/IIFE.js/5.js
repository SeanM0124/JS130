//Is the named function inside this IIFE accesible in the global scope?


(function foo() {
  console.log('Bar');
})();

foo(); // unavailable

//No - despite being named, it is not visible outside
//of the scope created by the IIFE