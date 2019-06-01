var movingObject = require("./movingObject.js")

function Asteroid(name) {
  movingObject.call(this, name)
}

Asteroid.prototype = Object.create(movingObject.prototype);
Asteroid.prototype.constructor = Asteroid;

Asteroid.prototype.colide = function() {
  console.log("boom")
}

module.exports = Asteroid;