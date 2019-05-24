var Asteroid = require("./asteroid.js");


const asteroids = [];

function Game() {
  this.asteroids = this.addAsteroids()
  this.ship = new Ship({});
}

Game.NUM_ASTEROIDS = 20;
Game.DIM_X = 1000;
Game.DIM_Y = 500;

Game.prototype.addAsteroids = function() {
  for(let i = 0; i < Game.NUM_ASTEROIDS; ++i ) {
    let pos = this.randomPosition();
    asteroids.push(new Asteroid({pos}))
  }
  return asteroids;
}

Game.prototype.randomPosition = function() {
  return [Math.random()*Game.DIM_X, Math.random()*Game.DIM_Y]
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

  asteroids.forEach(function (asteroid) {
    asteroid.draw(ctx)
  })
}

Game.prototype.moveObjects = function() {
  asteroids.forEach(function (asteroid){
    asteroid.move()
  })
}

Game.prototype.wrap = function(pos) {
  if (Game.DIM_X < pos[0] || Game.DIM_Y < pos[1]) {
    return this.randomPosition()
  } else {
    return pos
  }
}

Game.prototype.checkCollisions = function() {
  for(let i = 0; i < asteroids.length-1; i++){
    for(let j = 1; j < asteroids.length; j++){
      if (asteroids[i].isCollidedWith(asteroids[j])) {
        
      }
    }
  }
}

Game.prototype.remove = function(asteroid) {
  let index = asteroids.indexOf(asteroid);
  asteroids.splice(index, 1);
}

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
}

Game.prototype.allObjects = function() {}



module.exports = Game;