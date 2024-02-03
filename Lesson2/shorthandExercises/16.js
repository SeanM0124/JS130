//16. Explain in detail what lines 9 and 10 of this code are doing.

let obj = {
  foo: 'foo',
  qux: 'qux',
  bar: 'bar',
};

let obj2 = {...obj};
let { ...obj3 } = obj;

/*
On line 9, we have obj2 being assigned to the value of using spread syntax
to pass along the values of obj to a new object literal.
This creates a new, shallow copy of obj.

On line 10, we use object destructuring on the left side of the
assignment operator to seperate the properties of obj. Despite this,
the only variable created is using rest syntax to gather up the spreadout
properties and collect them into obj3.
This is another process to create a shallow copy of obj
*/