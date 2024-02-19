/*
P/E:

Input: A single letter -> The supplied letter dictates its width, and therefore its height
Output: A diamond shape consisting of the letters.

DS: An array perhaps

Width = (index * 2) + 1

A:


*/
'use strict';

class Diamond {
  static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  static makeDiamond(letter) {
    let maxIndex = this.ALPHABET.indexOf(letter)
    let width = (maxIndex * 2) + 1;
    let range = this.letterRange(letter, maxIndex);
    
    let diamond = [];
    range.forEach(letter => {
      diamond.push(this.centerRow(this.createRow(letter), width));
    });

    return `${diamond.join('\n')}\n`;
  }


  //helper function to create a row 
  static createRow(letter) {
    if (letter === 'A') return 'A';

    return letter + this.spaces(letter) + letter;
  }

  //helper function determine spaces per row

  static spaces(letter) {
    let spaces = 1;
    let letterIndex = 1;
    let currentLetter = this.ALPHABET[letterIndex];

    while (currentLetter !== letter) {
      spaces += 2;
      letterIndex++;
      currentLetter = this.ALPHABET[letterIndex]
    }

    return (' ').repeat(spaces);
  }

  //helper function to center a row
  static centerRow(content, width) {
    let outerPad = (width - content.length) / 2
    let padStr = (' ').repeat(outerPad);
    return `${padStr}${content}${padStr}`;

  }

  //helper function to get range
  static letterRange(letter, max) {
    let range = [];

    for (let index = 0; index <= max; index++) {
      let currentChar = this.ALPHABET[index];

      range.push(currentChar);
      if (currentChar === letter) break; 
    }

    return [...range, ...range.reverse().slice(1)];
  }
}

module.exports = Diamond;


// __A__
// _B_B_
// C___C
//  B B  // width is 5, c is the 3rd letter
//   A


// ____A____ //width is 9, E is the 5th letter
//    B B
//   C___C
//  D     D
// E       E
//  D     D
//   C   C
//    B B
//     A

//  A
// B B
//  A