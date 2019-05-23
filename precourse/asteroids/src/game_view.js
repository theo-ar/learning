var Game = require("./game.js")

function GameView() {
  this.g = new Game();
};

GameView.prototype.start = function (canvasEl) {
  const ctx = canvasEl.getContext("2d");
  setInterval(() => {
    this.g.step();
    this.g.draw(ctx);
  }, 20);
  
}


module.exports = GameView;

