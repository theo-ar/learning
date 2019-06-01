var Animal = require("./animal.js")
var inherit = require("./inherit.js")

var Cat = function(name) {
  Animal.call(this, name);
};

inherit(Animal, Cat);

Cat.prototype.meow = function() {
  console.log("Meow I am " + this.name)
}

module.exports = Cat;