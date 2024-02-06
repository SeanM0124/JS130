/*
Write a JavaScript function named delayLog that loops through the numbers from 1 to 10, and logs each number
after that number of seconds. It should log 1 after 1 second, 2 after 2 seconds, and so on.
*/

function delayLog() {
  for (let count = 1; count < 11; count++) {
    setTimeout(function() {
      console.log(count);
    }, (1000 * count));
  }
}

delayLog();

/*
Need to increase the timeout by an additional second for each iteration. 
*/