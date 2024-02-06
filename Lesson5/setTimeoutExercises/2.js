function delayLog() {
  var count; //Due to var being function scoped
  for (count = 1; count < 10; count++) {
    setTimeout(function() {
      console.log(count); //It is using the final value of count due to closure.
    }, (1000 * count)); 
  }
}

delayLog();

/*
With `let` being blocked scoped, each iteration with `let` would form a closure with a different variable.
*/