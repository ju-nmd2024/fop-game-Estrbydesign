// position variables
let characterX = 320;
let characterY = 100;
let flamesOn = false;

// Platform logic
let platformX = 290;
let platformY = 603;
let platformWidth = 400;
let platformHeight = 50;
//let platformWidth

// Restart button logic
let buttonX = 225;
let buttonY = 530;
let rectWidth = 180;
let rectHeight = 50;

// Game logic
let velocityY = 0.2;
let acceleration = 0.2;

// Game state
let gameState = false;

function setup() {
  createCanvas(700, 900);
}

function startScreen() {
  background(198, 130, 260);
  // cloud
  noStroke();
  fill(255);
  ellipse(340, 339, 250, 250);
  ellipse(340, 389, 250, 250);
  ellipse(203, 400, 250, 250);
  ellipse(183, 509, 250, 250);
  ellipse(503, 399, 250, 250);
  ellipse(493, 509, 250, 250);
  ellipse(350, 569, 250, 250);
  // start screen text
  textSize(62);
  fill(198, 130, 260);
  textAlign(CENTER, CENTER);
  text("JETPACKED", width / 2, height / 2 - 25);
  fill(158, 130, 260);
  textAlign(CENTER, CENTER);
  textSize(17);
  text("Land safely without crashing", width / 2, height / 2 + 36);
  text(
    "Press the spacebar to slow down and arrows to tilt",
    width / 2,
    height / 2 + 56
  );
  // button startscreen
  button(buttonX, buttonY);
}

// character
function character(x, y, s) {
  if (flamesOn) {
    //  function character(x, y, s) {
    // Jetpack flames
    noStroke();
    fill(224, 112, 0);
    triangle(
      x + 30 * s,
      y + 300 * s,
      x + 54 * s,
      y + 310 * s,
      x + 35 * s,
      y + 342 * s
    );
    triangle(
      x + 140 * s,
      y + 300 * s,
      x + 174 * s,
      y + 300 * s,
      x + 175 * s,
      y + 337 * s
    );
  } else {
    noStroke();
    fill(224, 112, 0);
    triangle(
      x + 30 * s,
      y + 300 * s,
      x + 54 * s,
      y + 310 * s,
      x + 40 * s,
      y + 315 * s
    );
    triangle(
      x + 140 * s,
      y + 300 * s,
      x + 174 * s,
      y + 300 * s,
      x + 160 * s,
      y + 317 * s
    );
  }

  endShape();
  // Jetpack
  push();
  translate(x + 45 * s, y + 185 * s);
  fill(138, 137, 136);
  rotate(0.2);
  rect(0, 0, 50 * s, 120 * s, 10 * s);
  pop();

  push();
  translate(x + 110 * s, y + 195 * s);
  fill(138, 137, 136);
  rotate(6.1);
  rect(0, 0, 50 * s, 120 * s, 10 * s);
  pop();

  // Neck
  push();
  fill(105, 67, 40);
  rect(x + 91 * s, y + 185 * s, 20 * s, 20 * s);
  pop();

  // Shadow Neck
  push();
  noStroke();
  fill(82, 52, 30);
  ellipse(x + 101 * s, y + 186 * s, 20 * s, 10 * s);
  pop();

  // Braids
  fill(0);
  ellipse(x + 30 * s, y + 162 * s, 50 * s, 50 * s);
  ellipse(x + 25 * s, y + 200 * s, 40 * s, 40 * s);
  ellipse(x + 20 * s, y + 230 * s, 30 * s, 30 * s);
  ellipse(x + 160 * s, y + 162 * s, 50 * s, 50 * s);
  ellipse(x + 165 * s, y + 200 * s, 40 * s, 40 * s);
  ellipse(x + 170 * s, y + 230 * s, 30 * s, 30 * s);

  // Face
  fill(105, 67, 40);
  noStroke();
  ellipse(x + 100 * s, y + 100 * s, 200 * s, 170 * s);
  ellipse(x, y + 100 * s, 40 * s, 50 * s);
  ellipse(x + 200 * s, y + 100 * s, 40 * s, 50 * s);

  // Shadow Ears
  push();
  translate(x - 5 * s, y + 100 * s);
  rotate(2.9);
  fill(82, 52, 30);
  ellipse(0, 0, 10 * s, 20 * s);
  pop();
  push();
  translate(x + 200 * s, y + 100 * s);
  rotate(3.5);
  fill(82, 52, 30);
  ellipse(0, 0, 10 * s, 20 * s);
  pop();

  // Hair
  beginShape();

  fill(0);
  noStroke(255);
  strokeWeight(5);
  vertex(x + 110 * s, y + 30 * s);
  bezierVertex(
    x + 80 * s,
    y + 100 * s,
    x + 20 * s,
    y + 20 * s,
    x + 5 * s,
    y + 75 * s
  );
  vertex(x, y + 75 * s);
  bezierVertex(x + 10 * s, y + 60 * s, x, y + 10 * s, x + 100 * s, y + 15 * s);
  // hair left
  endShape();

  // hair
  beginShape();
  fill(0);
  noStroke(255);
  vertex(x + 100 * s, y + 30 * s);
  bezierVertex(
    x + 120 * s,
    y + 100 * s,
    x + 180 * s,
    y + 20 * s,
    x + 195 * s,
    y + 75 * s
  );
  vertex(x + 195 * s, y + 75 * s);
  bezierVertex(
    x + 215 * s,
    y + 90 * s,
    x + 190 * s,
    y + 10 * s,
    x + 100 * s,
    y + 15 * s
  );
  endShape();

  // Eyes
  fill(0);
  ellipse(x + 144 * s, y + 101 * s, 20 * s, 25 * s);
  ellipse(x + 58 * s, y + 101 * s, 20 * s, 25 * s);

  // mouth
  push();
  noFill();
  stroke(0);
  strokeWeight(3 * s);
  arc(x + 98 * s, y + 135 * s, 20 * s, 20 * s, 6.3, PI);
  pop();

  // Legs
  fill(105, 67, 40);
  rect(x + 75 * s, y + 320 * s, 15 * s, 120 * s);
  rect(x + 110 * s, y + 320 * s, 15 * s, 120 * s);

  // Socks
  push();
  fill(255, 240, 201);
  rect(x + 75 * s, y + 380 * s, 15 * s, 60 * s);
  rect(x + 110 * s, y + 380 * s, 15 * s, 60 * s);
  pop();

  // shirt & Pants
  fill(198, 130, 260);
  rect(x + 60 * s, y + 200 * s, 80 * s, 90 * s, 10 * s);
  fill(255);
  rect(x + 60 * s, y + 280 * s, 80 * s, 40 * s);

  // Hands
  fill(105, 67, 40);
  ellipse(x - 9 * s, y + 242 * s, 30 * s, 25 * s);
  ellipse(x + 202 * s, y + 240 * s, 30 * s, 25 * s);

  // Arms
  push();
  fill(198, 130, 260);
  ellipse(x + 65 * s, y + 213 * s, 25 * s, 25 * s);
  ellipse(x + 135 * s, y + 213 * s, 25 * s, 25 * s);
  translate(x + 58 * s, y + 203 * s);
  rotate(1.2);
  rect(0, 0, 25 * s, 70 * s);
  pop();
  push();
  fill(198, 130, 260);
  translate(x + 130 * s, y + 225 * s);
  rotate(5.1);
  rect(0, 0, 25 * s, 70 * s);
  //rotate(0.4);
  pop();

  // Straps
  push();
  fill(46, 45, 45);
  translate(x + 64 * s, y + 195 * s);
  rotate(0.2);
  rect(0, 0, 15 * s, 50 * s);
  pop();
  push();
  fill(46, 45, 45);
  translate(x + 125 * s, y + 199 * s);
  rotate(6);
  rect(0, 0, 15 * s, 50 * s);
  pop();

  // shoes
  fill(0);
  triangle(
    x + 90 * s,
    y + 420 * s,
    x + 52 * s,
    y + 443 * s,
    x + 90 * s,
    y + 442 * s
  );
  triangle(
    x + 110 * s,
    y + 420 * s,
    x + 110 * s,
    y + 443 * s,
    x + 150 * s,
    y + 442 * s
  );
}
// landing platform
function platform(platformX, platformY, s) {
  noStroke();
  fill(26, 107, 24);
  rect(platformX + 5 * s, platformY + 570 * s, 400 * s, 50 * s);
  fill(209, 148, 82);
  rect(platformX + 5 * s, platformY + 605 * s, 400 * s, 50 * s);
}

function gameScreen() {
  background(124, 171, 242);
  character(characterX, characterY, 0.3);
  platform(platformX, platformY, 0.3);
}

function loseScreen() {
  background(128);
  noStroke();
  // cloud
  fill(255);
  ellipse(340, 339, 250, 250);
  ellipse(340, 389, 250, 250);
  ellipse(203, 400, 250, 250);
  ellipse(183, 509, 250, 250);
  ellipse(503, 399, 250, 250);
  ellipse(493, 509, 250, 250);
  ellipse(350, 569, 250, 250);
  // start screen text
  textSize(62);
  fill(198, 130, 260);
  textAlign(CENTER, CENTER);
  text("YOU LOST :(", width / 2, height / 2 - 25);
  fill(158, 130, 260);
  textAlign(CENTER, CENTER);
  textSize(18);
  button(buttonX, buttonY);
}
function winScreen() {
  background(124, 171, 242);
  noStroke();
  // cloud
  fill(255);
  ellipse(340, 339, 250, 250);
  ellipse(340, 389, 250, 250);
  ellipse(203, 400, 250, 250);
  ellipse(183, 509, 250, 250);
  ellipse(503, 399, 250, 250);
  ellipse(493, 509, 250, 250);
  ellipse(350, 569, 250, 250);
  // start screen text
  textSize(62);
  fill(198, 130, 260);
  textAlign(CENTER, CENTER);
  text("YOU WIN :)", width / 2, height / 2 - 25);
  fill(158, 130, 260);
  textAlign(CENTER, CENTER);
  textSize(18);
  button(buttonX + 10, buttonY);
}

function button(buttonX, buttonY) {
  fill(120, 194, 180);
  rect(buttonX, buttonY, rectWidth + 40, rectHeight, 40, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  if (state === "start") {
    text("START GAME", width / 2 - 10, height / 2 + 105);
  } else if (state === "lose" || state === "win") {
    text("TRY AGAIN", width / 2 - 5, height / 2 + 105);
  }
}

let y = 100;
let x = 100;
let state = "start";

function draw() {
  frameRate(30);

  if (gameState === true) {
    y = y + 15;
    x = x + 15;

    // gravity
    characterY = characterY + velocityY;
    velocityY = velocityY + acceleration;

    // Decrease velocity
    if (keyIsDown(32)) {
      velocityY = velocityY - 0.9;
      flamesOn = true;
    } else {
      flamesOn = false;
    }

    // Left key
    if (keyIsDown(LEFT_ARROW)) {
      characterX = characterX - 10;
    }

    // Right Key
    if (keyIsDown(RIGHT_ARROW)) {
      characterX = characterX + 10;
    }

    // Game over mechanics (help from teaching assistants)
    if (characterY > 650) {
      if (characterX >= 320 && characterX <= 401) {
        gameState = false;
      }
      console.log("The landing velocity = " + velocityY);
      if (velocityY > 4) {
        gameState = false;
        console.log("GAME OVER");
        state = "lose";
      } else {
        console.log("YOU WIN");
        gameState = false;
        state = "win";
      }
    }
  }
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  }
}

function mousePressed() {
  if (
    mouseX > buttonX &&
    mouseX < buttonX + rectWidth &&
    mouseY > buttonY &&
    mouseY < buttonY + rectHeight
  ) {
    if (state === "start") {
      state = "game";
      gameState = true;
    } else if (state === "win" || state === "lose") {
      state = "game";
      resetGame();
    }
  }
}

function resetGame() {
  characterX = 100;
  characterY = 100;
  velocityY = 0.2;
  gameState = true;
}
