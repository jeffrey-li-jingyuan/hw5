function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 200; i = i + 10) {
    line(210 - i, i, i + 190, i);
  }
  for (var m = 200; m <= 390; m = m + 10) {
    line(m - 190, m, 590 - m, m);
  }
}
