const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Initial circle properties
let x = 100; // Starting X position
let y = 100; // Starting Y position
const radius = 50;
const speed = 10; // Speed of movement in both X and Y directions

// Variables to store the change in direction
let dx = speed; // Change in X position
let dy = speed; // Change in Y position

// Resize the canvas to full page
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Draw the circle and clear the previous position
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the circle
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = "lightgreen";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "green";
  ctx.stroke();

  // Update circle's position
  x += dx;
  y += dy;

  //   this is to calculate the edges
  // Bounce the circle off the canvas edges
  if (x + radius > canvas.width || x - radius < 0) {
    dx = -dx; // Reverse X direction
  }
  if (y + radius > canvas.height || y - radius < 0) {
    dy = -dy; // Reverse Y direction
  }

  // Call draw again for the next frame
  requestAnimationFrame(draw);
}

// Initialize the canvas size and start the animation
resizeCanvas();
draw();

// Update canvas size when the window is resized
window.addEventListener("resize", resizeCanvas);
