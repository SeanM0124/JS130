'use strict'

class Scrabble {
  constructor(word) { 
    this.word = word ? word : '';
  }

  static VALUES = [
    ['AEIOULNRST', 1],
    ["DG", 2],
    ['BCMP', 3],
    ['FHVWY', 4],
    ['K', 5],
    ['JX', 8],
    ['QZ', 10],
  ]

  static score(word) {
    return new Scrabble(word).score();
  }
  //iterate over the word, for each letter, iterate over the VALUES, when its found, increment the score
  score() {
    let score = 0;
    this.word.slice().toUpperCase().split('').forEach(char => {
      Scrabble.VALUES.forEach(pair => {
        let [ letters, value ] = pair;
        if (letters.includes(char)) {
          score += value;
        }
      });
    });
    return score;
  }
}

module.exports = Scrabble