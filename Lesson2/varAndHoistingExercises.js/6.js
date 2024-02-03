/*
Rewrite the following code in a way that shows what the
code would look like if hoisting were a real process that
actually reorganized your code. The intent here is to clearly
show how and when the various identifiers in this program are
defined with respect to the code that actually gets executed.
*/

function Pet(name, image) {
  this.name = name;
  this.image = image;
}
let Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);

