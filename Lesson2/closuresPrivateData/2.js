/*
Write a makeList function that creates and returns a new function
that implements a todo list. The returned function should have the
following behavior:

When called with an argument that is not already on the list,
it adds that argument to the list.
When called with an argument that is already on the list,
it removes the element from the list.
When called without arguments, it prints all of the items
on the list. If the list is empty, it prints an appropriate message.
*/

function makeList() {
  let list = [];
  return function(arg) {
    let index;
    if (arg) {
      index = list.indexOf(arg);
      if (index === -1) {
        list.push(arg);
        console.log(`${arg} added!`);
      } else {
        list.splice(index, 1);
        console.log(`${arg} removed!`);
      }
    } else if (list.length === 0) {
      console.log('The list is empty.');
    } else {
      list.forEach(item => console.log(item));
    }
  };
}