/**
 * 2069. Walking Robot Simulation II
 * https://leetcode.com/problems/walking-robot-simulation-ii/
 * Difficulty: Medium
 *
 * A width x height grid is on an XY-plane with the bottom-left cell at (0, 0) and the
 * top-right cell at (width - 1, height - 1). The grid is aligned with the four cardinal
 * directions ("North", "East", "South", and "West"). A robot is initially at cell (0, 0)
 * facing direction "East".
 *
 * The robot can be instructed to move for a specific number of steps. For each step, it does
 * the following.
 * 1. Attempts to move forward one cell in the direction it is facing.
 * 2. If the cell the robot is moving to is out of bounds, the robot instead turns 90 degrees
 *    counterclockwise and retries the step.
 *
 * After the robot finishes moving the number of steps required, it stops and awaits the next
 * instruction.
 *
 * Implement the Robot class:
 * - Robot(int width, int height) Initializes the width x height grid with the robot at (0, 0)
 *   facing "East".
 * - void step(int num) Instructs the robot to move forward num steps.
 * - int[] getPos() Returns the current cell the robot is at, as an array of length 2, [x, y].
 * - String getDir() Returns the current direction of the robot, "North", "East", "South", or
 *   "West".
 */

/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
  this.width = width;
  this.height = height;
  this.position = [0, 0];
  this.directionIndex = 0;
  this.directions = ['East', 'North', 'West', 'South'];
  this.moves = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  this.perimeter = 2 * (width + height - 2);
};

/**
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function(num) {
  num %= this.perimeter;
  if (num === 0) num = this.perimeter;

  while (num > 0) {
    const [dx, dy] = this.moves[this.directionIndex];
    const [x, y] = this.position;
    let steps;

    if (this.directionIndex === 0) steps = this.width - 1 - x;
    else if (this.directionIndex === 1) steps = this.height - 1 - y;
    else if (this.directionIndex === 2) steps = x;
    else steps = y;

    if (steps >= num) {
      this.position = [x + dx * num, y + dy * num];
      num = 0;
    } else {
      this.position = [x + dx * steps, y + dy * steps];
      this.directionIndex = (this.directionIndex + 1) % 4;
      num -= steps;
    }
  }
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
  return this.position;
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
  return this.directions[this.directionIndex];
};
