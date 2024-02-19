/*
Make a program that produces the entire beer song.

Create a class with a static method verse and lyrics

verse takes 2 arguments that make a range. The 2nd argument is optional.


*/

class BeerSong {
  static verses(start, end) {
    let string = '';
    end = end ? end : start;

    if(start > 0) {
      for (let index = start; index >= end; index--) {
        string += `${index} bottles of beer on the wall, ${index} bottles of beer.\n` +
        `Take one down and pass it around, ${index - 1} bottles of beer ` +
        "on the wall.\n";
      }
    }

    if (end === 0) {
      string += "No more bottles of beer on the wall, no more bottles of beer.\n" +
      "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
    }
    return string;
  }
  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;