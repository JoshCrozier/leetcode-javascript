/**
 * 1041. Robot Bounded In Circle
 * https://leetcode.com/problems/robot-bounded-in-circle/
 * Difficulty: Medium
 *
 * On an infinite plane, a robot initially stands at (0, 0) and faces north.
 * The robot can receive one of three instructions:
 * - "G": go straight 1 unit;
 * - "L": turn 90 degrees to the left;
 * - "R": turn 90 degrees to the right.
 *
 * The robot performs the instructions given in order, and repeats them forever.
 * Return true if and only if there exists a circle in the plane such that the
 * robot never leaves the circle.
 */

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  let x = 0, y = 0;
  let dx = 0, dy = 1;

  for (const direction of instructions) {
    switch (direction) {
      case 'R': [dx, dy] = [dy, -dx]; break;
      case 'L': [dy, dx] = [dx, -dy]; break;
      case 'G': [x, y] = [x + dx, y + dy]; break;
    }
  }

  return (x === 0 && y === 0) || dy !== 1;
}
