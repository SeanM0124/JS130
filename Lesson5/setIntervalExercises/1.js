/*
Write a function named startCounting that logs a number to the console every
second, starting with 1. Each output number should be one greater than the
previous one.
*/

function startCounting() {
  let number = 0;
  setInterval(function() {
    number++
    console.log(number);
  }, 1000);
}