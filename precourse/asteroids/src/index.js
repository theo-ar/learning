const MovingObject = require("./moving_object.js")
const Asteroid = require("./asteroid.js")
const Game = require("./game.js")
const GameView = require("./game_view.js")
const Ship = require("./ship.js")

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Ship = Ship;
window.Game = Game;
window.GameView = GameView;

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("mycanvas");
  canvasEl.height = Game.DIM_Y;
  canvasEl.width = Game.DIM_X;
  new GameView().start(canvasEl);
}); 