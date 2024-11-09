console.log("game logic got connected");

const canvas = document.getElementById("ladder_game_canvas");  
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

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
 * uses ball's x and y positions
 * uses horizontal and vertical components
 * x uses cosine and y uses sine
 * calculates x and y positions of ladder with respect to ball
 */
function drawLadder() {
  const ladderLength = 200;
  const ladderEndX = ball.x + ladderLength * Math.cos(ladderAngle);
  const ladderEndY = ball.y + ladderLength + Math.sin(ladderAngle);
  ctx.beginPath();
  ctx.moveTo(ball.x, ball.y);
  ctx.lineTo(ladderEndX, ladderEndY);
  ctx.strokeStyle = "brown"; // Set the color of the ladder
  ctx.lineWidth = 5; // Set the width of the ladder line
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

/**
 * game loop that runs and manages the entire game state
 * handles rendering of ladder and sliding the ball on ladder.
 */
function gameLoop() {
  // first clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawLadder();
  drawBall();
  requestAnimationFrame(gameLoop);
}
