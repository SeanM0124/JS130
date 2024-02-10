class RomanNumeral {
  static NUMERALS = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];

  constructor(num) {
    this.num = num;
  }

  toRoman() {
    let converted = '';
    let number = this.num;

    RomanNumeral.NUMERALS.forEach(pair => {
      let [ value, numeral ] = pair;
      while (number >= value) {
        converted += numeral;
        number -= value;
      }
    });
    return converted;
  }
};

module.exports = RomanNumeral;