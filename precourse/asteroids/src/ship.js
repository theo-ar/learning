var MovingObject = require("./moving_object.js")

function Ship(name) {
  MovingObject.call(this, name)
};

Ship.prototype = Object.create(movingObject.prototype);
Ship.prototype.constructor = Ship;

module.exports = Ship;