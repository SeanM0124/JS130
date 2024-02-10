/*
P/E:
Multiples - A number that can be divided by another number with no remainder
Find all multiples of a set of number up to a given limit

Rules:
Find and sum all mutliples of the numbers in a set, or default 3 and 5

DS: Will be working with Arrays to keep track of multiples as well as the set parameter

A: 
 - Create a method that iterates over the set (whether given or default)
  - Find all mutiples of each number in the set
  - As long as the multiple is under the limit, push it to the result array
  - Sum the result array and return and the value

*/

class SumOfMultiples {
  constructor(...args) {
    this.set = (args.length > 0) ? args : [3, 5];
  }
  static to(limit) {
    return new SumOfMultiples().to(limit);
  }

  to(limit) {
  let multiples = [0];
  this.set.forEach(num => {
    for (let count = num; count < limit; count += num) {
      if (!(multiples.includes(count))) multiples.push(count);
    }
  });
  return multiples.reduce((a, b) => a + b);
  }
}

module.exports = SumOfMultiples;