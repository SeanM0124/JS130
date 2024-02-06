

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];

    if (this.isInvalid()) {
      throw new Error("Invalid triangle lengths");
    }
  }

  kind() {
    let [side1, side2, side3] = this.sides;

    if (side1 === side2 && side1 === side3) {
      return 'equilateral'
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return 'isosceles'
    } else {
      return 'scalene'
    }
  }

  isInvalid() {
    let [side1, side2, side3] = this.sides;
    if (this.sides.some(side => side < 0)) {
      return true;
    } else if (side1 + side2 <= side3 ||
              side2 + side3 <= side1 || 
              side1 + side3 <= side2) {
                return true
              } else {
                return false;
              }
  }

}

module.exports = Triangle;