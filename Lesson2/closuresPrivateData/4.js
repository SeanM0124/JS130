//Update the implementation from problem 1 so that it retains the
//use of an object with methods but prevents outside access to the
//items the object stores internally.


function makeList() {
  let items = [];

  return {
    // items: [], -- this line removed

    add: function(item) {
      let index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(item + " added!");
      }
    },

    list: function() {
      if (items.length === 0) {
        console.log("The list is empty.");
      } else {
        items.forEach(function(item) {
          console.log(item);
        });
      }
    },

    remove: function(item) {
      let index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(item + " removed!");
      }
    },
  };
}