//Write a program that will take a string of digits and return all the possible consecutive number series of a
//specified length in that string.

/*
Create a class Series. Its constructor method takes one argument, a string of numbers.
The class has an isntance method, slice, which takes one argument, a number representing the length of substrings to return.
The length of substrings cannot larger than the string property taht is passed to the constructor

We are returning an array, where the elements are arrays consisting of the potential substrings of the partiuclar length

Input: A string and a length
Output: An array containing arrays that hold all possible substrings of the given length

DS: A multilevel array to return

Algorithm - '012', 2 -> [[0, 1], [1, 2]]
 
- Iterate over the string
 - In each iteration, iterate over the characters of a string within the limit length, pushing each invidual to an array.
  - Push the array of characters to the result array


*/

class Series {
  constructor(string) {
    this.string = string;
  }

  slices(limit) {
    if (limit > this.string.length) throw new Error();
    let digits = this.string.split('').map(digit => Number(digit));
    let max = this.string.length - limit;

    let allSeries = [];

    for (let start = 0; start <= max; start++) {
      let series = digits.slice(start, start + limit);
      allSeries.push(series);
    }
    return allSeries;
  }
}

module.exports = Series;