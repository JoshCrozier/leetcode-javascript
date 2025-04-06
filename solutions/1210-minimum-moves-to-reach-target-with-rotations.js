/**
 * 1210. Minimum Moves to Reach Target with Rotations
 * https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/
 * Difficulty: Hard
 *
 * In an n*n grid, there is a snake that spans 2 cells and starts moving from the top left corner
 * at (0, 0) and (0, 1). The grid has empty cells represented by zeros and blocked cells represented
 * by ones. The snake wants to reach the lower right corner at (n-1, n-2) and (n-1, n-1).
 *
 * In one move the snake can:
 * - Move one cell to the right if there are no blocked cells there. This move keeps the
 *   horizontal/vertical position of the snake as it is.
 * - Move down one cell if there are no blocked cells there. This move keeps the horizontal/vertical
 *   position of the snake as it is.
 * - Rotate clockwise if it's in a horizontal position and the two cells under it are both empty.
 *   In that case the snake moves from (r, c) and (r, c+1) to (r, c) and (r+1, c).
 * - Rotate counterclockwise if it's in a vertical position and the two cells to its right are both
 *   empty. In that case the snake moves from (r, c) and (r+1, c) to (r, c) and (r, c+1).
 *
 * Return the minimum number of moves to reach the target.
 *
 * If there is no way to reach the target, return -1.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
  const n = grid.length;
  const queue = [[0, 0, 0, 1, 0]];
  const visited = new Set(['0,0,0,1']);

  while (queue.length) {
    const [tailX, tailY, headX, headY, moves] = queue.shift();

    if (tailX === n-1 && tailY === n-2 && headX === n-1 && headY === n-1) {
      return moves;
    }

    const isHorizontal = tailX === headX;

    if (isHorizontal) {
      if (headY + 1 < n && isValid(tailX, tailY + 1) && isValid(headX, headY + 1)) {
        const rightState = `${tailX},${tailY + 1},${headX},${headY + 1}`;
        if (!visited.has(rightState)) {
          visited.add(rightState);
          queue.push([tailX, tailY + 1, headX, headY + 1, moves + 1]);
        }
      }
      if (tailX + 1 < n && isValid(tailX + 1, tailY) && isValid(headX + 1, headY)) {
        const downState = `${tailX + 1},${tailY},${headX + 1},${headY}`;
        if (!visited.has(downState)) {
          visited.add(downState);
          queue.push([tailX + 1, tailY, headX + 1, headY, moves + 1]);
        }
      }
      if (tailX + 1 < n && isValid(tailX + 1, tailY) && isValid(tailX + 1, tailY + 1)) {
        const rotateState = `${tailX},${tailY},${tailX + 1},${tailY}`;
        if (!visited.has(rotateState)) {
          visited.add(rotateState);
          queue.push([tailX, tailY, tailX + 1, tailY, moves + 1]);
        }
      }
    } else {
      if (headX + 1 < n && isValid(tailX + 1, tailY) && isValid(headX + 1, headY)) {
        const downState = `${tailX + 1},${tailY},${headX + 1},${headY}`;
        if (!visited.has(downState)) {
          visited.add(downState);
          queue.push([tailX + 1, tailY, headX + 1, headY, moves + 1]);
        }
      }
      if (tailY + 1 < n && isValid(tailX, tailY + 1) && isValid(headX, tailY + 1)) {
        const rightState = `${tailX},${tailY + 1},${headX},${tailY + 1}`;
        if (!visited.has(rightState)) {
          visited.add(rightState);
          queue.push([tailX, tailY + 1, headX, tailY + 1, moves + 1]);
        }
      }
      if (tailY + 1 < n && isValid(tailX, tailY + 1) && isValid(tailX + 1, tailY + 1)) {
        const rotateState = `${tailX},${tailY},${tailX},${tailY + 1}`;
        if (!visited.has(rotateState)) {
          visited.add(rotateState);
          queue.push([tailX, tailY, tailX, tailY + 1, moves + 1]);
        }
      }
    }
  }

  return -1;

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n && grid[x][y] === 0;
  }
};
