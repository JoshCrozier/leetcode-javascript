/**
 * 3015. Count the Number of Houses at a Certain Distance I
 * https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/
 * Difficulty: Medium
 *
 * You are given three positive integers n, x, and y.
 *
 * In a city, there exist houses numbered 1 to n connected by n streets. There is a street
 * connecting the house numbered i with the house numbered i + 1 for all 1 <= i <= n - 1.
 * An additional street connects the house numbered x with the house numbered y.
 *
 * For each k, such that 1 <= k <= n, you need to find the number of pairs of houses (house1,
 * house2) such that the minimum number of streets that need to be traveled to reach house2
 * from house1 is k.
 *
 * Return a 1-indexed array result of length n where result[k] represents the total number
 * of pairs of houses such that the minimum streets required to reach one house from the
 * other is k.
 *
 * Note that x and y can be equal.
 */

/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number[]}
 */
var countOfPairs = function(n, x, y) {
  const distances = new Array(n + 1).fill().map(() => new Array(n + 1).fill(Infinity));

  for (let i = 1; i <= n; i++) {
    distances[i][i] = 0;
    if (i < n) distances[i][i + 1] = distances[i + 1][i] = 1;
  }

  distances[x][y] = distances[y][x] = 1;

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        distances[i][j] = Math.min(distances[i][j], distances[i][k] + distances[k][j]);
      }
    }
  }

  const result = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i !== j && distances[i][j] !== Infinity) {
        result[distances[i][j]]++;
      }
    }
  }

  return result.slice(1);
};
