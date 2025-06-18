/**
 * 489. Robot Room Cleaner
 * https://leetcode.com/problems/robot-room-cleaner/
 * Difficulty: Hard
 *
 * You are controlling a robot that is located somewhere in a room. The room is modeled as an m x n
 * binary grid where 0 represents a wall and 1 represents an empty slot.
 *
 * The robot starts at an unknown location in the room that is guaranteed to be empty, and you do
 * not have access to the grid, but you can move the robot using the given API Robot.
 *
 * You are tasked to use the robot to clean the entire room (i.e., clean every empty cell in the
 * room). The robot with the four given APIs can move forward, turn left, or turn right. Each turn
 * is 90 degrees.
 *
 * When the robot tries to move into a wall cell, its bumper sensor detects the obstacle, and it
 * stays on the current cell.
 *
 * Design an algorithm to clean the entire room using the following APIs:
 *
 * interface Robot {
 *   // returns true if next cell is open and robot moves into the cell.
 *   // returns false if next cell is obstacle and robot stays on the current cell.
 *   boolean move();
 *
 *   // Robot will stay on the same cell after calling turnLeft/turnRight.
 *   // Each turn will be 90 degrees.
 *   void turnLeft();
 *   void turnRight();
 *
 *   // Clean the current cell.
 *   void clean();
 * }
 *
 * Note that the initial direction of the robot will be facing up. You can assume all four edges of
 * the grid are all surrounded by a wall.
 *
 * Custom testing:
 * The input is only given to initialize the room and the robot's position internally. You must
 * solve this problem "blindfolded". In other words, you must control the robot using only the
 * four mentioned APIs without knowing the room layout and the initial robot's position.
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
  const visited = new Set();
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  backtrack(0, 0, 0);

  function backtrack(row, col, dir) {
    const key = `${row},${col}`;
    if (visited.has(key)) return;

    visited.add(key);
    robot.clean();

    for (let i = 0; i < 4; i++) {
      const newDir = (dir + i) % 4;
      const [dx, dy] = directions[newDir];
      const newRow = row + dx;
      const newCol = col + dy;

      if (robot.move()) {
        backtrack(newRow, newCol, newDir);
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnLeft();
        robot.turnLeft();
      }
      robot.turnRight();
    }
  }
};
