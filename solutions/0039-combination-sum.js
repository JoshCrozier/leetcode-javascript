/**
 * 39. Combination Sum
 * https://leetcode.com/problems/combination-sum/
 * Difficulty: Medium
 *
 * Given an array of distinct integers candidates and a target integer target,
 * return a list of all unique combinations of candidates where the chosen
 * numbers sum to target. You may return the combinations in any order.
 *
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen
 * numbers is different.
 *
 * It is guaranteed that the number of unique combinations that sum up to target
 * is less than 150 combinations for the given input.
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];
  backtrack(result, candidates, target);
  return result;
};

function backtrack(result, candidates, target, combination = [], offset = 0) {
  if (target < 0) {
    return;
  } else if (target === 0) {
    result.push(combination);
  } else {
    for (let i = offset; i < candidates.length; i++) {
      backtrack(result, candidates, target - candidates[i], [...combination, candidates[i]], i);
    }
  }
}
