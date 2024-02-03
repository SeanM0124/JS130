//What do the 4 console.log() statemetns at the end of this program
//print? try to answer without running the code:

let counter = 0; //global

function makeCounter() { //returns a function that increments and returns counter
  return function() {
    counter += 1;
    return counter;
  };
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); //1
console.log(incrementCounter()); //2

incrementCounter = makeCounter(); //reassigned -> counter is global though
console.log(incrementCounter()); //3
console.log(incrementCounter()); //4