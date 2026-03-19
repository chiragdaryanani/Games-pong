// Pong Game with Enhanced Logic

let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

let paddleWidth = 10, paddleHeight = 100;
let ballRadius = 10;

let player1 = { x: 0, y: canvas.height / 2 - paddleHeight / 2, score: 0 };
let player2 = { x: canvas.width - paddleWidth, y: canvas.height / 2 - paddleHeight / 2, score: 0 };
let ball = { x: canvas.width / 2, y: canvas.height / 2, dx: 2, dy: 2 };

let isPaused = false;
let difficulty = 'easy';

function draw() {
    if (isPaused) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw paddles and ball
    ctx.fillRect(player1.x, player1.y, paddleWidth, paddleHeight);
    ctx.fillRect(player2.x, player2.y, paddleWidth, paddleHeight);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
    ctx.fill();

    // Update ball position
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Wall collision
    if (ball.y + ballRadius > canvas.height || ball.y - ballRadius < 0) {
        ball.dy *= -1;
    }

    // Paddle collision
    if (ball.x - ballRadius < player1.x + paddleWidth && ball.y > player1.y && ball.y < player1.y + paddleHeight) {
        ball.dx *= -1;
    }
    if (ball.x + ballRadius > player2.x && ball.y > player2.y && ball.y < player2.y + paddleHeight) {
        ball.dx *= -1;
    }

    // Score update
    if (ball.x + ballRadius > canvas.width) {
        player1.score++;
        resetBall();
    }
    if (ball.x - ballRadius < 0) {
        player2.score++;
        resetBall();
    }

    // Check win condition
    if (player1.score === 11 || player2.score === 11) {
        alert('Winner: ' + (player1.score === 11 ? 'Player 1' : 'Player 2'));
        resetGame();
    }

    // Update score display
    ctx.fillText('Player 1: ' + player1.score, 20, 20);
    ctx.fillText('Player 2: ' + player2.score, canvas.width - 100, 20);
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = 2;
    ball.dy = 2;
}

function resetGame() {
    player1.score = 0;
    player2.score = 0;
    resetBall();
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        isPaused = !isPaused;
    }
    if (event.code === 'KeyW' && player1.y > 0) {
        player1.y -= 20;
    }
    if (event.code === 'KeyS' && player1.y < canvas.height - paddleHeight) {
        player1.y += 20;
    }
    if (event.code === 'ArrowUp' && player2.y > 0) {
        player2.y -= 20;
    }
    if (event.code === 'ArrowDown' && player2.y < canvas.height - paddleHeight) {
        player2.y += 20;
    }
});

// AI Opponent
function aiMove() {
    if (ball.y > player2.y + paddleHeight / 2) {
        player2.y += 2;
    } else {
        player2.y -= 2;
    }
}

function gameLoop() {
    if (!isPaused) {
        aiMove();
        draw();
    }
    requestAnimationFrame(gameLoop);
}

gameLoop();