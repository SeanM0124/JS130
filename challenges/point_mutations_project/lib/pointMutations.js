/*
Two strands of DNA, count the differences between them
If they are different sizes, we only need to check the differences within the length of the shorter strand

hammingDistance -> How many characters in the string are different?

Are the strings the same length?
if string1.length > string2.length.. else 
Nested iteration -> is string1[0] === string2[0]? no? differences += 1

*/

class DNA {
  constructor(string) {
    this.string = string;
  }
  hammingDistance(strand) {
    let shortestLength = this.getShortest(strand);
    let differences = 0;
    let testStrand = strand.slice();
    for (let index = 0; index < shortestLength; index++) {
      if (this.string[index] !== testStrand[index]) differences++;
    }
    return differences
  }

  getShortest(strand) {
    if (this.string.length < strand.length) return this.string.length;
    else return strand.length;
  }
}

module.exports = DNA;