/**
 * 874. Walking Robot Simulation
 * https://leetcode.com/problems/walking-robot-simulation/
 * Difficulty: Medium
 *
 * A robot on an infinite XY-plane starts at point (0, 0) facing north. The robot receives an array
 * of integers commands, which represents a sequence of moves that it needs to execute. There are
 * only three possible types of instructions the robot can receive:
 * - -2: Turn left 90 degrees.
 * - -1: Turn right 90 degrees.
 * - 1 <= k <= 9: Move forward k units, one unit at a time.
 *
 * Some of the grid squares are obstacles. The ith obstacle is at grid point
 * obstacles[i] = (xi, yi). If the robot runs into an obstacle, it will stay in its current location
 * (on the block adjacent to the obstacle) and move onto the next command.
 *
 * Return the maximum squared Euclidean distance that the robot reaches at any point in its path
 * (i.e. if the distance is 5, return 25).
 *
 * Note:
 * - There can be an obstacle at (0, 0). If this happens, the robot will ignore the obstacle until
 *   it has moved off the origin. However, it will be unable to return to (0, 0) due to the
 *   obstacle.
 * - North means +Y direction.
 * - East means +X direction.
 * - South means -Y direction.
 * - West means -X direction.
 */

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const obstacleSet = new Set(obstacles.map(([x, y]) => `${x},${y}`));

  let x = 0;
  let y = 0;
  let directionIndex = 0;
  let result = 0;

  for (const command of commands) {
    if (command === -1) {
      directionIndex = (directionIndex + 1) % 4;
    } else if (command === -2) {
      directionIndex = (directionIndex + 3) % 4;
    } else {
      const [dx, dy] = directions[directionIndex];
      for (let step = 0; step < command; step++) {
        const nextX = x + dx;
        const nextY = y + dy;
        if (obstacleSet.has(`${nextX},${nextY}`)) break;
        x = nextX;
        y = nextY;
        result = Math.max(result, x * x + y * y);
      }
    }
  }

  return result;
};
