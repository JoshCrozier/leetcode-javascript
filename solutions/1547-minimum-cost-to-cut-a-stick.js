/**
 * 1547. Minimum Cost to Cut a Stick
 * https://leetcode.com/problems/minimum-cost-to-cut-a-stick/
 * Difficulty: Hard
 *
 * Given a wooden stick of length n units. The stick is labelled from 0 to n. For example, a
 * stick of length 6 is labelled as follows.
 *
 * Given an integer array cuts where cuts[i] denotes a position you should perform a cut at.
 *
 * You should perform the cuts in order, you can change the order of the cuts as you wish.
 *
 * The cost of one cut is the length of the stick to be cut, the total cost is the sum of costs
 * of all cuts. When you cut a stick, it will be split into two smaller sticks (i.e. the sum of
 * their lengths is the length of the stick before the cut). Please refer to the first example
 * for a better explanation.
 *
 * Return the minimum total cost of the cuts.
 */

/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
  cuts.push(0, n);
  cuts.sort((a, b) => a - b);

  const memo = new Map();

  return computeMinCost(0, cuts.length - 1);

  function computeMinCost(left, right) {
    if (right - left <= 1) return 0;

    const key = `${left},${right}`;
    if (memo.has(key)) return memo.get(key);

    let minCost = Infinity;
    for (let i = left + 1; i < right; i++) {
      const cost = (cuts[right] - cuts[left]) + computeMinCost(left, i) + computeMinCost(i, right);
      minCost = Math.min(minCost, cost);
    }

    memo.set(key, minCost);
    return minCost;
  }
};
