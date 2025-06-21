/**
 * 656. Coin Path
 * https://leetcode.com/problems/coin-path/
 * Difficulty: Hard
 *
 * You are given an integer array coins (1-indexed) of length n and an integer maxJump. You can
 * jump to any index i of the array coins if coins[i] != -1 and you have to pay coins[i] when you
 * visit index i. In addition to that, if you are currently at index i, you can only jump to any
 * index i + k where i + k <= n and k is a value in the range [1, maxJump].
 *
 * You are initially positioned at index 1 (coins[1] is not -1). You want to find the path that
 * reaches index n with the minimum cost.
 *
 * Return an integer array of the indices that you will visit in order so that you can reach
 * index n with the minimum cost. If there are multiple paths with the same cost, return the
 * lexicographically smallest such path. If it is not possible to reach index n, return an
 * empty array.
 *
 * A path p1 = [Pa1, Pa2, ..., Pax] of length x is lexicographically smaller than
 * p2 = [Pb1, Pb2, ..., Pbx] of length y, if and only if at the first j where Paj and Pbj
 * differ, Paj < Pbj; when no such j exists, then x < y.
 */

/**
 * @param {number[]} coins
 * @param {number} maxJump
 * @return {number[]}
 */
var cheapestJump = function(coins, maxJump) {
  const n = coins.length;
  const minCost = new Array(n + 1).fill(Infinity);
  const parent = new Array(n + 1).fill(-1);

  minCost[1] = coins[0];

  for (let i = 1; i <= n; i++) {
    if (coins[i - 1] === -1 || minCost[i] === Infinity) continue;

    for (let j = i + 1; j <= Math.min(i + maxJump, n); j++) {
      if (coins[j - 1] === -1) continue;

      const newCost = minCost[i] + coins[j - 1];
      if (newCost < minCost[j]) {
        minCost[j] = newCost;
        parent[j] = i;
      } else if (newCost === minCost[j] && parent[j] !== -1) {
        const currentPath = buildPath(parent, j);
        const newPath = buildPath(parent, j, i);
        if (compare(newPath, currentPath)) {
          parent[j] = i;
        }
      }
    }
  }

  if (minCost[n] === Infinity) return [];

  const result = [];
  let current = n;
  while (current !== -1) {
    result.unshift(current);
    current = parent[current];
  }

  return result;
};

function buildPath(parent, end, newParent = null) {
  const path = [];
  let current = end;
  if (newParent !== null) {
    path.unshift(current);
    current = newParent;
  }
  while (current !== -1) {
    path.unshift(current);
    current = parent[current];
  }
  return path;
}

function compare(path1, path2) {
  for (let i = 0; i < Math.min(path1.length, path2.length); i++) {
    if (path1[i] < path2[i]) return true;
    if (path1[i] > path2[i]) return false;
  }
  return path1.length < path2.length;
}
