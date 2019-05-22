let p1;
function setup() {
  createCanvas(600, 600);
  p1 = new Particle(300, 300);
}

function draw() {
  background(0);
  p1.update();
  p1.show();
}

