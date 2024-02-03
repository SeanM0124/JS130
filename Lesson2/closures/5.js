
function makeMultipleLister(num) {
  return () => {
    for (let multiple = num; multiple < 100; multiple += num) {
      console.log(multiple);
    }
  };
}

let lister = makeMultipleLister(17);
lister();