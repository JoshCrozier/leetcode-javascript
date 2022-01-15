/**
 * 40. Combination Sum II
 * https://leetcode.com/problems/combination-sum-ii/
 * Difficulty: Medium
 *
 * Given a collection of candidate numbers (candidates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sum to target.
 *
 * Each number in candidates may only be used once in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
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
      if (i > offset && candidates[i] === candidates[i - 1]) continue;
      backtrack(result, candidates, target - candidates[i], [...combination, candidates[i]], i + 1);
    }
  }
}
