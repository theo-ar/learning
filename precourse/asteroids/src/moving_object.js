

function MovingObject(object) {
  this.pos = object.pos;
  this.vel = object.vel;
  this.radius = object.radius;
  this.color = object.color;
}

MovingObject.prototype.move = function() {
  this.pos = Game.prototype.wrap(this.pos)
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let a = this.pos[0] - otherObject.pos[0];
  let b = this.pos[1] - otherObject.pos[1];
  let center_dist = Math.sqrt( a*a + b*b );
  let radius_sum = this.radius + otherObject.radius;

  if (center_dist < radius_sum) {
    Game.prototype.remove(this);
    Game.prototype.remove(otherObject);
    return true;
  } else {
    return false;
  }
};

module.exports = MovingObject