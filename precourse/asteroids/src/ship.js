var MovingObject = require("./moving_object.js")
var Game = require("./game.js")
var Util = require("./utils.js")

function Ship(object) {
  MovingObject.call(this, object)
  this.pos = Game.prototype.randomPosition();
  this.vel = [0,0];
  this.radius = Ship.RADIUS;
  this.color = Ship.COLOR;
};

Ship.RADIUS = 10;
Ship.COLOR = "red";



Util.inherits(Ship, MovingObject);

module.exports = Ship;