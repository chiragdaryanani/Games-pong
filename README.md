# Pong Game

## Description
Pong is one of the earliest arcade video games, featuring simple 2D graphics. It simulates table tennis, where two players control paddles and try to hit a ball back and forth. This version is implemented in a modern programming environment and holds various enhancements over the original game.

## Features
- **Two-player mode:** Play against a friend or AI.
- **Scoring system:** Keep track of points scored by each player.
- **Different difficulty levels:** Choose from Easy, Medium, and Hard AI.
- **Customizable controls:** Change keyboard settings for player controls.

## How to Play
1. Start the game by running the main application.
2. Use the designated keys to control your paddle.
3. Aim to score points by getting the ball past your opponent's paddle.

## Controls
- **Player 1:**
  - Move Up: W
  - Move Down: S

- **Player 2:**
  - Move Up: Up Arrow
  - Move Down: Down Arrow

## Difficulty Levels
- **Easy:** AI moves slowly and is easier to beat.
- **Medium:** AI has average skills and provides a more balanced challenge.
- **Hard:** AI is fast and responds quickly, offering a tough challenge.

## File Structure
```plaintext
Games-pong/
├── assets/
│   └── images/           # Contains all game-related images
├── src/
│   ├── controllers/      # Paddle and Ball controllers
│   ├── models/           # Game models for the Paddle and Ball
│   ├── views/            # Game display and UI elements
│   └── main.py           # Main game file to run the application
└── README.md             # Project overview and documentation
```

## Technologies Used
- Python 3.x
- Pygame library for graphics and sound
- Git for version control

## Game Rules
- The game is played to a set score (default 11 points).
- Players must prevent the ball from passing their paddle.
- If the ball crosses the screen boundary, the opposing player earns a point.

## Future Enhancements
- Online multiplayer mode
- Power-ups that can alter gameplay
- Option to customize paddles and ball design
- Sound effects and background music for an immersive experience

## Authors
- **Chirag Daryanani** - Initial work and game design

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
