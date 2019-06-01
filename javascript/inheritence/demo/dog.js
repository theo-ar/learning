var Animal = require("./animal.js");

function Dog(name) {
  Animal.call(this, name);
}

var inherit = function(parent, child) {
  var Surrogate = function() {};
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();
  child.prototype.constructor = Dog;
};

Dog.prototype.woof = function() {
  console.log("Woof I am " + this.name)
};

module.exports = Dog;

// proto chain
// d.eat() -> dog -> animal
// s.__proto__ -> animal