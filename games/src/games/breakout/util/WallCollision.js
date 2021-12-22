

export default function WallCollision(
    ballObj,
    canvas,
    player,
    paddleProps,
    setLives
  ) {
    if (ballObj.y + ballObj.rad > canvas.height) {
      player.lives--;
      ballObj.x = paddleProps.x;
      ballObj.y = paddleProps.y - 30;
      ballObj.dx = 6 * (Math.random() * 2 - 1);
      ballObj.dy = -6;
    }
    // turn the ball back when hits the upper wall
    if (ballObj.y - ballObj.rad < 0) {
      ballObj.dy *= -1;
    }
  // turn the ball when hit the sides walls
    if (ballObj.x + ballObj.rad > canvas.width || ballObj.x - ballObj.rad < 0) {
      ballObj.dx *= -1;
    }
  }