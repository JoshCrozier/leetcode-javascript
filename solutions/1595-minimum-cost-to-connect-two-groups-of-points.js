/**
 * 1595. Minimum Cost to Connect Two Groups of Points
 * https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/
 * Difficulty: Hard
 *
 * You are given two groups of points where the first group has size1 points, the second group
 * has size2 points, and size1 >= size2.
 *
 * The cost of the connection between any two points are given in an size1 x size2 matrix where
 * cost[i][j] is the cost of connecting point i of the first group and point j of the second group.
 * The groups are connected if each point in both groups is connected to one or more points in the
 * opposite group. In other words, each point in the first group must be connected to at least one
 * point in the second group, and each point in the second group must be connected to at least one
 * point in the first group.
 *
 * Return the minimum cost it takes to connect the two groups.
 */

/**
* @param {number[][]} cost
* @return {number}
*/
var connectTwoGroups = function(cost) {
  const size1 = cost.length;
  const size2 = cost[0].length;

  const minCostGroup2 = new Array(size2).fill(Infinity);
  for (let j = 0; j < size2; j++) {
    for (let i = 0; i < size1; i++) {
      minCostGroup2[j] = Math.min(minCostGroup2[j], cost[i][j]);
    }
  }

  const memo = new Array(size1).fill(0).map(() => new Array(1 << size2).fill(-1));

  return dfs(0, 0);

  function dfs(i, mask) {
    if (i === size1) {
      let remainingCost = 0;
      for (let j = 0; j < size2; j++) {
        if ((mask & (1 << j)) === 0) {
          remainingCost += minCostGroup2[j];
        }
      }
      return remainingCost;
    }

    if (memo[i][mask] !== -1) return memo[i][mask];

    let minCost = Infinity;

    for (let j = 0; j < size2; j++) {
      minCost = Math.min(
        minCost,
        cost[i][j] + dfs(i + 1, mask | (1 << j))
      );
    }

    memo[i][mask] = minCost;
    return minCost;
  }
};
