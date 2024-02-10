/*
P/E:

Given an octal input string, convert it to decimal.

Rules:
Invalid input is treated as 0
Use base-8 multiplication to convert octal bumbers to decimal numbers
Going right to left, we multiply each digit by the number 8 raised to a particular power
Valid octal numbers only include digits 0-7

DS: 

A: take the Octal number and reverse it - this is so the power the numbers are raised to corresponds to the index they are in
Make a class Octal
  If any character of the string being converted is not 0, 1, 2, 3, 4, 5, 6, or 7, return 0.
Set a starting sum to 0.
Reverse the digits.
Iterate over digits one-by-one.
For the first digit, multiply it by 8**0, then add it to sum.
For the second digit, multiply it by 8**1, then add it to sum.
Keep multiplying and adding to sum until all digits are processed.
Return the sum.
*/

class Octal {
  constructor(octal) {
    this.octal = octal;
  }
  
  
  toDecimal() {
    if (!this.validOctal()) return 0;
    let sum = 0;
    let reversed = this.octal.split('').reverse();
    reversed.forEach((char, index) => {
      sum += (Number(char) * (8 ** index));
    });
    return sum;
  }

  validOctal() {
    return this.octal.split('').every(char => char.match(/[0-7]/));
  }
}

module.exports = Octal;