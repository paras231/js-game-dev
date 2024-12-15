console.log("js connected");

const canvasElement = document.getElementById("gcanvas");

const ctx = canvasElement.getContext("2d");

let x = 50; // tank's initial position in x direction (x axis)
let y = 50; // tank's initial position in y direction (y axis)

let tankWidth = 150;
let tankHeight = 150;

let speedOfTank = 10;
let dx = speedOfTank; // change speed in x direction
let dy = speedOfTank; // change speed in y direction

let startTank = false;

let tank = new Image();

tank.src = "./tank2.png";

function resizeCanvas() {
  canvasElement.width = window.innerWidth * 0.75;
  canvasElement.height = window.innerHeight;
}

function moveTank() {
  // Update tank's position
  x += dx;
  // y += dy;

  // Calculate canvas edges for collision detection
  if (x + tankWidth > canvasElement.width || x < 0) {
    dx = -dx; // Reverse X direction
  }
  if (y + tankHeight > canvasElement.height || y < 0) {
    dy = -dy; // Reverse Y direction
  }
}

/**
 * tank controls
 * move tank
 * stop
 * change direction
 */

let controlObj = {
  changeDirection(direction, key) {},
  changeVelocity(velocity, key) {},
};

document.body.addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    e.preventDefault();
    startTank = true;
  }
});

console.log(startTank);

function controlTank() {}

// Function to draw the tank on canvas
function draw() {
  if (startTank) {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height); // Clear canvas

    ctx.drawImage(tank, x, y, tankWidth, tankHeight); // Draw tank
    moveTank(); // Update tank position
  }
  requestAnimationFrame(draw); // Animate the next frame
}

/**
 * draw curve path for tank
 */

function drawCurvePath() {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y, 180, 10, 210, 140);
  ctx.stroke();
}

// Ensure the canvas is resized correctly
resizeCanvas();
window.addEventListener("resize", resizeCanvas); // Resize on window change

// Start drawing after the tank image is loaded
tank.onload = () => {
  ctx.drawImage(tank, x, y, tankWidth, tankHeight); // Draw tank
  draw();
};
