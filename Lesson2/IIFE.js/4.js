//replace the invocation of countdown with an IIFE
//that produces the same results

(function(num) {
  for (let count = num; count >= 0; count--) {
    console.log(count);
  }
})(7);