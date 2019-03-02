//Hi, here is the list of changes:
//1. I changed the color theme of the game, and the shape of puck. More realistic.
//2. The game restart once a player scores.

// Scores
var leftScore = 0;
var rightScore = 0;

// The ball, or puck
var puck = {
  x: 300,
  y: 200,
  vx: 3,
  vy: -2,
  size: 12,
}

// Players
var leftY = 170;
var rightY = 170;
var playerWidth = 10;
var playerHeight = 60;
var playerSpeed = 10;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(55, 142, 97);
	
  //Display the scores:
  text(leftScore, width/4, 60);
  text(rightScore, 450, 60);
  
  // Draw the board
  push();
  strokeWeight(3)
  line(width/2, 0, width/2, height);
	pop();
  
  // Draw the puck
  push();
  fill(255, 225, 135);
  ellipse(puck.x, puck.y, puck.size, puck.size);
  pop();

  // Draw the players
  push();
  rectMode(CORNER);
  noStroke();
  rect(-1, leftY, playerWidth, playerHeight, 60);
  rect(width - playerWidth - 1, rightY, playerWidth, playerHeight, 60);
	pop();
  
  // Get user input
  if (keyIsDown(UP_ARROW)) {
    rightY -= playerSpeed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    rightY += playerSpeed;
  }
  if (keyIsDown(65)) { // 65 is "A"
    leftY -= playerSpeed;
  }
  if (keyIsDown(90)) { // 90 is "Z"
    leftY += playerSpeed;
  }
  
  // Ensure the paddle doesn't leave the screen
  if (leftY < 0) {
    leftY = 0;
  }
  if (leftY > height - playerHeight) {
    leftY = height - playerHeight;
  }
  if (rightY < 0) {
    rightY = 0;
  }
  if (rightY > height - playerHeight) {
    rightY = height - playerHeight;
  }

  // Update the puck position
  puck.x += puck.vx;
  puck.y += puck.vy;

  // Check if puck is off the top or bottom screen
  if (puck.y < 0 || puck.y > height) {
    puck.vy *= -1;
  }
  
  // Check if puck is hitting a paddle
  if (puck.x < playerWidth && puck.y > leftY && puck.y < leftY + playerHeight) {
    puck.vx *= -1;
  }
  if (puck.x > width - playerWidth && puck.y > rightY && puck.y < rightY + playerHeight) {
    puck.vx *= -1;
  }

  // Check if a player scored
  if (puck.x > width) {
    leftScore++
    puck.x = width/2;
    puck.y = height/2;
  }
  if (puck.x < 0) {
    rightScore++
    puck.x = width/2;
    puck.y = height/2;
  }
  //Player Scores point reminder
  if (leftScore++){
    push();
    strokeWeight(2)
    rectMode(CENTER);
    rect(width/2, 11, 200, 20);
    textStyle(BOLD);
    textSize(15)
    text("Left player scores a point!", width/2 + 32, 14, 250, 20);
    pop();
  }
   if (rightScore++){
   	push();
    strokeWeight(2)
    rectMode(CENTER);
    rect(width/2, 11, 215, 20);
    textStyle(BOLD);
    textSize(15)
    text("Right player scores a point!", width/2 + 26, 14, 250, 20);
    pop();
  }
}
  
  
