/**
 * 1209. Remove All Adjacent Duplicates in String II
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
 * Difficulty: Medium
 *
 * You are given a string s and an integer k, a k duplicate removal consists of choosing k
 * adjacent and equal letters from s and removing them, causing the left and the right side
 * of the deleted substring to concatenate together.
 *
 * We repeatedly make k duplicate removals on s until we no longer can.
 *
 * Return the final string after all such duplicate removals have been made. It is guaranteed
 * that the answer is unique.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  const stack = [];

  for (const char of s) {
    if (stack.length && stack[stack.length - 1][0] === char) {
      stack[stack.length - 1][1]++;
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    } else {
      stack.push([char, 1]);
    }
  }

  return stack.reduce((result, [char, count]) => result + char.repeat(count), '');
};
