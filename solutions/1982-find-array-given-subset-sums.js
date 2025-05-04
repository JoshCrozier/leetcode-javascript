/**
 * 1982. Find Array Given Subset Sums
 * https://leetcode.com/problems/find-array-given-subset-sums/
 * Difficulty: Hard
 *
 * You are given an integer n representing the length of an unknown array that you are trying
 * to recover. You are also given an array sums containing the values of all 2n subset sums of
 * the unknown array (in no particular order).
 *
 * Return the array ans of length n representing the unknown array. If multiple answers exist,
 * return any of them.
 *
 * An array sub is a subset of an array arr if sub can be obtained from arr by deleting some
 * (possibly zero or all) elements of arr. The sum of the elements in sub is one possible
 * subset sum of arr. The sum of an empty array is considered to be 0.
 *
 * Note: Test cases are generated such that there will always be at least one correct answer.
 */

/**
* @param {number} n
* @param {number[]} sums
* @return {number[]}
*/
var recoverArray = function(n, sums) {
  sums.sort((a, b) => a - b);

  const result = [];
  while (result.length < n) {
    const diff = sums[1] - sums[0];

    const withNum = [];
    const withoutNum = [];
    const freq = new Map();
    for (const sum of sums) {
      freq.set(sum, (freq.get(sum) || 0) + 1);
    }

    for (const sum of sums) {
      if (freq.get(sum) > 0) {
        freq.set(sum, freq.get(sum) - 1);

        if (freq.get(sum + diff) > 0) {
          freq.set(sum + diff, freq.get(sum + diff) - 1);
          withoutNum.push(sum);
          withNum.push(sum + diff);
        } else {
          return [];
        }
      }
    }

    if (withoutNum.includes(0)) {
      result.push(diff);
      sums = withoutNum;
    } else {
      result.push(-diff);
      sums = withNum;
    }
  }

  return result;
};
