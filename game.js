// Pong Game Logic

// Canvas and Context
const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

// Game Elements
const paddleWidth = 10;
const paddleHeight = 100;
const ballSize = 10;

let playerPaddleY = (canvas.height - paddleHeight) / 2;
let computerPaddleY = (canvas.height - paddleHeight) / 2;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;

// Draw Everything
function draw() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Player Paddle
    context.fillStyle = 'blue';
    context.fillRect(0, playerPaddleY, paddleWidth, paddleHeight);
    
    // Draw Computer Paddle
    context.fillStyle = 'red';
    context.fillRect(canvas.width - paddleWidth, computerPaddleY, paddleWidth, paddleHeight);
    
    // Draw Ball
    context.fillStyle = 'black';
    context.beginPath();
    context.arc(ballX, ballY, ballSize, 0, Math.PI * 2, true);
    context.fill();
}

// Move the Paddle
function movePaddle(event) {
    // Get mouse position
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;
    if (mouseY >= 0 && mouseY <= canvas.height - paddleHeight) {
        playerPaddleY = mouseY;
    }
}

// Update Ball Position
function update() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Check Ball Collision with Top/Bottom
    if (ballY <= 0 || ballY >= canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
    
    // Check Ball Collision with Paddles
    if (ballX <= paddleWidth && ballY >= playerPaddleY && ballY <= playerPaddleY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballX >= canvas.width - paddleWidth && ballY >= computerPaddleY && ballY <= computerPaddleY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }
}

// Game Loop
function gameLoop() {
    draw();
    update();
    requestAnimationFrame(gameLoop);
}

// Event Listeners
canvas.addEventListener('mousemove', movePaddle);

// Start Game
gameLoop();