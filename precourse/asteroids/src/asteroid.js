var MovingObject = require("./moving_object.js")

function Asteroid(name) {
  MovingObject.call(this, name)
};

Asteroid.prototype = Object.create(movingObject.prototype);
Asteroid.prototype.constructor = Asteroid;

modules.export = Asteroid;