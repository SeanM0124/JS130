//
//2. Rewrite the following code using classic JavaScript syntax:

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// // let { baz, qux, bar } = foo(1, 2, 3);

// let obj = foo(1, 2, 3);
// let bar = foo.bar;
// let baz = foo.baz;
// let qux = foo.quz;


function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

// let { baz, qux, bar } = foo(1, 2, 3);

let obj = foo(1, 2, 3);
let baz = obj.baz;
let bar = obj.bar;
let qux = obj.qux;