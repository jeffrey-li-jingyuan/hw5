function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220)
  noFill();
  rectMode(CENTER);
  for (var d = 15; d < 75; d = d + 15) {
    for (var x = 40; x <= 400; x = x + 80){
    rect(x, 200, d, d);
    }
  }
}
