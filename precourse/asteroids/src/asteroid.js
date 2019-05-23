var MovingObject = require("./moving_object.js")
var Util = require("./utils.js")

const COLOR = "blue";
const RADIUS = 10;

function Asteroid(object) {
  MovingObject.call(this, object);
  this.color = COLOR;
  this.radius = RADIUS;
  this.vel = Util.randomVec(10);
};



Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;