var movingObject = require("./movingObject.js")

function Ship (name) {
  movingObject.call(this,name)
}

Ship.prototype = Object.create(movingObject.prototype);
Ship.prototype.constructor = Ship;

Ship.prototype.fly = function () {
  console.log("Flyin ship")
}

module.exports = Ship;