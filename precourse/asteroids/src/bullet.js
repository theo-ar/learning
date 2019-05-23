var MovingObject = require("./moving_object.js")

function Bullet(name) {
  MovingObject.call(this, name)
};

Bullet.prototype = Object.create(movingObject.prototype);
Bullet.prototype.constructor = Bullet;

module.exports = Bullet;