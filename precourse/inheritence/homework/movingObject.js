function movingObject(name) {
  this.name = name
};

movingObject.prototype.move = function() {
  console.log("woooo")
}

module.exports = movingObject;