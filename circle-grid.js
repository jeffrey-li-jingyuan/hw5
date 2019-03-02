function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();
  fill(220);
  for (var x = 20; x < 385; x = x + 20) {
    for(var y = 20; y < 385; y = y + 20){
    ellipse(x, y, 15);
    }
  }
}
