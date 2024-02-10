class Anagram {
  constructor(word) {
    this.word = word;
  }
  match(array) {
    let sortedWord = this.sortTheWord(this.word);
    let matches = [];

    array.forEach(word => {
      if (word.toLowerCase() === this.word.toLowerCase()) return undefined;
      let testWord = this.sortTheWord(word);
      if (testWord === sortedWord) {
        if (!(matches.includes(word))) {
          matches.push(word);
        }
      }
    });
    return matches;
  }

  sortTheWord(word) {
    return word.toLowerCase().split('').sort().join('');
  }
}

module.exports = Anagram;