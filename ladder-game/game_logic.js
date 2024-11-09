console.log("game logic got connected");

const canvas = document.getElementById("ladder_game_canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

let ladderAngle = Math.PI / 6; // will be 30 degree

const gravity = 0.1;

let ball = {
  x: 100,
  y: 100,
  speedX: 0,
  speedY: 0,
  radius: 10,
};

/**
 * draw ladder
 * uses ball's x and y positions ,
 * uses horizontal and vertical components ,
 * x uses cosine and y uses sine ,
 * calculates x and y positions of ladder with respect to ball.
 */
function drawLadder() {
  const ladderLength = 200;
  const ladderEndX = ball.x + ladderLength * Math.cos(ladderAngle);
  const ladderEndY = ball.y + ladderLength + Math.sin(ladderAngle);
  ctx.beginPath();
  ctx.moveTo(ball.x, ball.y);
  ctx.lineTo(ladderEndX, ladderEndY);
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 5;
  ctx.stroke();
}

/**
 *
 */

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

let rect1Coordinates = {
  x: 100,
  y: 100,
  height: 200,
  width: 200,
};

let rect2Coordinates = {};

/**
 * draw rectangle
 */

function drawRectangle() {
  ctx.beginPath();
  ctx.rect(
    rect1Coordinates.x,
    rect1Coordinates.y,
    rect1Coordinates.width,
    rect1Coordinates.height
  );
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.stroke();
}

/**
 * physics for balls sliding on ladder ,
 * changes ball's position on x and y coordinates ,
 * changes ball's velocity
 */

function updatePhysics() {
  ball.speedX += gravity * Math.cos(ladderAngle);
  ball.speedY += gravity * Math.sin(ladderAngle);
  ball.x += ball.speedX;
  ball.y = ball.speedY;
  // Boundary detection
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.speedX *= -0.9; // reverse direction with some energy loss
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.speedY *= -0.9; // reverse direction with some energy loss
  }
}

/**
 * game loop that runs and manages the entire game state
 * handles rendering of ladder and sliding the ball on ladder.
 */
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRectangle();
  // drawLadder();
  // drawBall();
  // updatePhysics();
  requestAnimationFrame(gameLoop);
}

gameLoop();
