/**
 * 353. Design Snake Game
 * https://leetcode.com/problems/design-snake-game/
 * Difficulty: Medium
 *
 * Design a Snake game that is played on a device with screen size height x width. Play the
 * game online if you are not familiar with the game.
 *
 * The snake is initially positioned at the top left corner (0, 0) with a length of 1 unit.
 *
 * You are given an array food where food[i] = (ri, ci) is the row and column position of a
 * piece of food that the snake can eat. When a snake eats a piece of food, its length and
 * the game's score both increase by 1.
 *
 * Each piece of food appears one by one on the screen, meaning the second piece of food will
 * not appear until the snake eats the first piece of food.
 *
 * When a piece of food appears on the screen, it is guaranteed that it will not appear on a
 * block occupied by the snake.
 *
 * The game is over if the snake goes out of bounds (hits a wall) or if its head occupies a
 * space that its body occupies after moving (i.e. a snake of length 4 cannot run into itself).
 *
 * Implement the SnakeGame class:
 * - SnakeGame(int width, int height, int[][] food) Initializes the object with a screen of size
 *   height x width and the positions of the food.
 * - int move(String direction) Returns the score of the game after applying one direction move
 *   by the snake. If the game is over, return -1.
 */

/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function(width, height, food) {
  this.width = width;
  this.height = height;
  this.food = food;
  this.foodIndex = 0;
  this.score = 0;
  this.snake = [[0, 0]];
  this.bodySet = new Set(['0,0']);
};

/**
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function(direction) {
  const head = [...this.snake[0]];

  if (direction === 'U') head[0]--;
  else if (direction === 'D') head[0]++;
  else if (direction === 'L') head[1]--;
  else if (direction === 'R') head[1]++;

  if (head[0] < 0 || head[0] >= this.height || head[1] < 0 || head[1] >= this.width) {
    return -1;
  }

  const tail = this.snake.pop();
  this.bodySet.delete(`${tail[0]},${tail[1]}`);

  const headKey = `${head[0]},${head[1]}`;
  if (this.bodySet.has(headKey)) {
    return -1;
  }

  this.snake.unshift(head);
  this.bodySet.add(headKey);

  if (this.foodIndex < this.food.length && head[0] === this.food[this.foodIndex][0]
      && head[1] === this.food[this.foodIndex][1]) {
    this.snake.push(tail);
    this.bodySet.add(`${tail[0]},${tail[1]}`);
    this.foodIndex++;
    this.score++;
  }

  return this.score;
};
