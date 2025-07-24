/**
 * 3437. Permutations III
 * https://leetcode.com/problems/permutations-iii/
 * Difficulty: Medium
 *
 * Given an integer n, an alternating permutation is a permutation of the first n positive
 * integers such that no two adjacent elements are both odd or both even.
 *
 * Return all such alternating permutations sorted in lexicographical order.
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var permute = function(n) {
  const result = [];
  const current = [];
  const used = new Array(n + 1).fill(false);

  backtrack(current, used, result, n);

  return result;

  function backtrack(current, used, result, n) {
    if (current.length === n) {
      result.push([...current]);
      return;
    }

    for (let num = 1; num <= n; num++) {
      if (used[num]) continue;

      if (current.length > 0) {
        const lastNum = current[current.length - 1];
        if ((lastNum % 2 === 0 && num % 2 === 0) || (lastNum % 2 === 1 && num % 2 === 1)) {
          continue;
        }
      }

      current.push(num);
      used[num] = true;
      backtrack(current, used, result, n);
      current.pop();
      used[num] = false;
    }
  }
};
