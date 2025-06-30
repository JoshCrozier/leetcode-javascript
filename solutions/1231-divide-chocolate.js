/**
 * 1231. Divide Chocolate
 * https://leetcode.com/problems/divide-chocolate/
 * Difficulty: Hard
 *
 * You have one chocolate bar that consists of some chunks. Each chunk has its own sweetness
 * given by the array sweetness.
 *
 * You want to share the chocolate with your k friends so you start cutting the chocolate bar
 * into k + 1 pieces using k cuts, each piece consists of some consecutive chunks.
 *
 * Being generous, you will eat the piece with the minimum total sweetness and give the other
 * pieces to your friends.
 *
 * Find the maximum total sweetness of the piece you can get by cutting the chocolate bar optimally.
 */

/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
var maximizeSweetness = function(sweetness, k) {
  let left = Math.min(...sweetness);
  let right = sweetness.reduce((sum, val) => sum + val, 0);
  let result = left;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canDivide(mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;

  function canDivide(minSweetness) {
    let pieces = 0;
    let currentSum = 0;

    for (const chunk of sweetness) {
      currentSum += chunk;
      if (currentSum >= minSweetness) {
        pieces++;
        currentSum = 0;
      }
    }

    return pieces >= k + 1;
  }
};
