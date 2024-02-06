/*
In what sequence does the JavaScript runtime run the functions q(), d(), n(), z(), s(), f(), and g() in the following code?
*/

setTimeout(function() {
  setTimeout(function() {
    q(); //6 -> //7
  }, 15);

  d();  //3

  setTimeout(function() {
    n(); //5
  }, 5);

  z(); //4
}, 10);

setTimeout(function() {
  s(); //7 --> //6
}, 20);

setTimeout(function() {
  f(); //2
});

g(); //1