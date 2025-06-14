/**
 * 351. Android Unlock Patterns
 * https://leetcode.com/problems/android-unlock-patterns/
 * Difficulty: Medium
 *
 * Android devices have a special lock screen with a 3 x 3 grid of dots. Users can set an
 * "unlock pattern" by connecting the dots in a specific sequence, forming a series of joined
 * line segments where each segment's endpoints are two consecutive dots in the sequence.
 * A sequence of k dots is a valid unlock pattern if both of the following are true:
 * - All the dots in the sequence are distinct.
 * - If the line segment connecting two consecutive dots in the sequence passes through the
 *   center of any other dot, the other dot must have previously appeared in the sequence.
 *   No jumps through the center non-selected dots are allowed.
 *   - For example, connecting dots 2 and 9 without dots 5 or 6 appearing beforehand is valid
 *     because the line from dot 2 to dot 9 does not pass through the center of either dot 5 or 6.
 *   - However, connecting dots 1 and 3 without dot 2 appearing beforehand is invalid because
 *     the line from dot 1 to dot 3 passes through the center of dot 2.
 *
 * Here are some example valid and invalid unlock patterns:
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function(m, n) {
  const jumps = new Array(10).fill().map(() => new Array(10).fill(0));
  jumps[1][3] = jumps[3][1] = 2;
  jumps[1][7] = jumps[7][1] = 4;
  jumps[3][9] = jumps[9][3] = 6;
  jumps[7][9] = jumps[9][7] = 8;
  jumps[1][9] = jumps[9][1] = jumps[2][8] = jumps[8][2] = jumps[3][7]
    = jumps[7][3] = jumps[4][6] = jumps[6][4] = 5;

  function backtrack(current, visited, length) {
    if (length > n) return 0;
    let count = length >= m ? 1 : 0;
    if (length === n) return count;

    for (let next = 1; next <= 9; next++) {
      if (!visited.has(next)) {
        const jump = jumps[current][next];
        if (jump === 0 || visited.has(jump)) {
          visited.add(next);
          count += backtrack(next, visited, length + 1);
          visited.delete(next);
        }
      }
    }
    return count;
  }

  let total = 0;
  const visited = new Set();
  visited.add(1);
  total += backtrack(1, visited, 1) * 4;
  visited.delete(1);

  visited.add(2);
  total += backtrack(2, visited, 1) * 4;
  visited.delete(2);

  visited.add(5);
  total += backtrack(5, visited, 1);

  return total;
};
