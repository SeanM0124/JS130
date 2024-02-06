/*
Write a function named afterNSeconds that takes two arguments: a callback and a time duration in seconds.
It should wait for the indicated period, then invoke the callback function.
*/

function afterNSeconds(func, time) {
  setTimeout(func, time * 1000);
}

// function afterNSeconds(callback, seconds) {
//   setTimeout(callback, seconds * 1000);
// }