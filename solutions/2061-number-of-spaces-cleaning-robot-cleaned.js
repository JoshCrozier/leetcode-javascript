/**
 * 2061. Number of Spaces Cleaning Robot Cleaned
 * https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/
 * Difficulty: Medium
 *
 * A room is represented by a 0-indexed 2D binary matrix room where a 0 represents an empty
 * space and a 1 represents a space with an object. The top left corner of the room will be
 * empty in all test cases.
 *
 * A cleaning robot starts at the top left corner of the room and is facing right. The robot
 * will continue heading straight until it reaches the edge of the room or it hits an object,
 * after which it will turn 90 degrees clockwise and repeat this process. The starting space
 * and all spaces that the robot visits are cleaned by it.
 *
 * Return the number of clean spaces in the room if the robot runs indefinitely.
 */

/**
 * @param {number[][]} room
 * @return {number}
 */
var numberOfCleanRooms = function(room) {
  const rows = room.length;
  const cols = room[0].length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const visited = new Set();
  const states = new Set();
  let row = 0;
  let col = 0;
  let direction = 0;

  while (true) {
    const state = `${row},${col},${direction}`;
    if (states.has(state)) break;

    states.add(state);
    visited.add(`${row},${col}`);

    const nextRow = row + directions[direction][0];
    const nextCol = col + directions[direction][1];

    if (nextRow < 0 || nextRow >= rows || nextCol < 0
        || nextCol >= cols || room[nextRow][nextCol] === 1) {
      direction = (direction + 1) % 4;
    } else {
      row = nextRow;
      col = nextCol;
    }
  }

  return visited.size;
};
