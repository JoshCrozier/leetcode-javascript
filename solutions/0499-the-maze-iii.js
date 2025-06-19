/**
 * 499. The Maze III
 * https://leetcode.com/problems/the-maze-iii/
 * Difficulty: Hard
 *
 * There is a ball in a maze with empty spaces (represented as 0) and walls (represented as 1).
 * The ball can go through the empty spaces by rolling up, down, left or right, but it won't
 * stop rolling until hitting a wall. When the ball stops, it could choose the next direction.
 * There is also a hole in this maze. The ball will drop into the hole if it rolls onto the hole.
 *
 * Given the m x n maze, the ball's position ball and the hole's position hole, where
 * ball = [ballrow, ballcol] and hole = [holerow, holecol], return a string instructions of
 * all the instructions that the ball should follow to drop in the hole with the shortest
 * distance possible. If there are multiple valid instructions, return the lexicographically
 * minimum one. If the ball can't drop in the hole, return "impossible".
 *
 * If there is a way for the ball to drop in the hole, the answer instructions should contain
 * the characters 'u' (i.e., up), 'd' (i.e., down), 'l' (i.e., left), and 'r' (i.e., right).
 *
 * The distance is the number of empty spaces traveled by the ball from the start position
 * (excluded) to the destination (included).
 *
 * You may assume that the borders of the maze are all walls (see examples).
 */

var findShortestWay = function(maze, ball, hole) {
  const rows = maze.length;
  const cols = maze[0].length;
  const directions = [[-1, 0, 'u'], [1, 0, 'd'], [0, -1, 'l'], [0, 1, 'r']];
  const distances = new Array(rows).fill().map(() => new Array(cols).fill(Infinity));
  const paths = new Array(rows).fill().map(() => new Array(cols).fill(''));

  const pq = [[0, ball[0], ball[1], '']];
  distances[ball[0]][ball[1]] = 0;

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0] || a[3].localeCompare(b[3]));
    const [currentDist, row, col, path] = pq.shift();

    if (row === hole[0] && col === hole[1]) {
      return path;
    }

    if (currentDist > distances[row][col]
        || (currentDist === distances[row][col] && path > paths[row][col])) {
      continue;
    }

    for (const [dr, dc, dir] of directions) {
      let newRow = row;
      let newCol = col;
      let steps = 0;

      while (newRow + dr >= 0 && newRow + dr < rows && newCol + dc >= 0 && newCol + dc < cols
            && maze[newRow + dr][newCol + dc] === 0) {
        newRow += dr;
        newCol += dc;
        steps++;

        if (newRow === hole[0] && newCol === hole[1]) {
          break;
        }
      }

      if (steps > 0) {
        const newDist = currentDist + steps;
        const newPath = path + dir;

        if (newDist < distances[newRow][newCol]
          || (newDist === distances[newRow][newCol] && newPath < paths[newRow][newCol])) {
          distances[newRow][newCol] = newDist;
          paths[newRow][newCol] = newPath;
          pq.push([newDist, newRow, newCol, newPath]);
        }
      }
    }
  }

  return 'impossible';
};
