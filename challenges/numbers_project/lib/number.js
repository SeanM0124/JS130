//Write a function that can tell whether a number is perfect, abundant, or deficient.
/*
P/E:
Aliquot sum - The sum of a numbers positive divisors.
Perfect - the Aliquot sum is equal to the original number
Abundant - the Aliquot sum is larger than the original number
Deficient - the Aliquot sum is less than the original number

Rules - If the number is negative, throw an error
If the sum is equal to the number , return 'perfect'
  else if the sum is greater than the number, return 'abundant'
  else return 'deficient'

DS: Considering an array to hold the different divisors in while i find them all. Then can sum the array to get the Aliquot Sum

Test Cases:
classify() appears to be a static method. We also do not seem to initialize a new PerfectNumber object for any of the test cases, so a cosntructor 
does not seem necessary

A: 
Create a class PerfectNumber
It needs on static method 'classify'
 Classify may have a helper function to create the divisors

- Give a number, find all its positive divisors
 - increment by one starting with 1 and excluding the number itself, testing to see if the number divides the primary number equally with no remainder.
  - If it does, add it to an array of divisors
 - After finding all divisors, sum them and compare for the classification.w
*/

class PerfectNumber {
  static classify(num) {
    if (num < 0) throw new Error('Cannot be negative');
    let aliqoutSum = PerfectNumber.findAllDivisors(num).reduce((a, b) => a + b, 0);
    if (aliqoutSum === num) {
      return 'perfect'
    } else if (aliqoutSum > num) {
      return 'abundant';
    } else {
      return 'deficient'
    }
  }
  static findAllDivisors(num) {
    let divisors = [];
    for (let index = 1; index < num; index++) {
      if (num % index === 0) divisors.push(index);
    }
    return divisors;
  }
}

module.exports = PerfectNumber;