/**
 * 1769. Minimum Number of Operations to Move All Balls to Each Box
 * https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 * Difficulty: Medium
 *
 * You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if
 * the ith box is empty, and '1' if it contains one ball.
 *
 * In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to
 * box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some
 * boxes.
 *
 * Return an array answer of size n, where answer[i] is the minimum number of operations needed
 * to move all the balls to the ith box.
 *
 * Each answer[i] is calculated considering the initial state of the boxes.
 */

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  const result = new Array(boxes.length).fill(0);

  for (let i = 0; i < boxes.length; i++) {
    let total = 0;
    for (let j = 0; j < boxes.length; j++) {
      if (boxes[j] === '1') {
        total += Math.abs(j - i);
      }
    }
    result[i] = total;
  }

  return result;
};
