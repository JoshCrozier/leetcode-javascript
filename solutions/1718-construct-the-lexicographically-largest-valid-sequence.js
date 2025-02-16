/**
 * 1718. Construct the Lexicographically Largest Valid Sequence
 * https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/
 * Difficulty: Medium
 *
 * Given an integer n, find a sequence that satisfies all of the following:
 * - The integer 1 occurs once in the sequence.
 * - Each integer between 2 and n occurs twice in the sequence.
 * - For every integer i between 2 and n, the distance between the two occurrences of i is
 *   exactly i.
 *
 * The distance between two numbers on the sequence, a[i] and a[j], is the absolute difference
 * of their indices, |j - i|.
 *
 * Return the lexicographically largest sequence. It is guaranteed that under the given
 * constraints, there is always a solution.
 *
 * A sequence a is lexicographically larger than a sequence b (of the same length) if in the first
 * position where a and b differ, sequence a has a number greater than the corresponding number in
 * b. For example, [0,1,9,0] is lexicographically larger than [0,1,5,6] because the first position
 * they differ is at the third number, and 9 is greater than 5.
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {
  const result = new Array(2 * n - 1).fill(0);
  const group = new Array(n + 1).fill(false);

  backtrack(0);

  function backtrack(index) {
    if (index === 2 * n - 1) {
      return true;
    } else if (result[index] !== 0) {
      return backtrack(index + 1);
    }
    for (let num = n; num >= 1; num--) {
      if (group[num]) {
        continue;
      }
      group[num] = true;
      result[index] = num;
      if (num === 1 || (index + num < 2 * n - 1 && result[index + num] === 0)) {
        if (num > 1) {
          result[index + num] = num;
        }
        if (backtrack(index + 1)) {
          return true;
        }
        if (num > 1) {
          result[index + num] = 0;
        }
      }
      result[index] = 0;
      group[num] = false;
    }
    return false;
  }

  return result;
};
