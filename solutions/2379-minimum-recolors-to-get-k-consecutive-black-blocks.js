/**
 * 2379. Minimum Recolors to Get K Consecutive Black Blocks
 * https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
 * Difficulty: Easy
 *
 * You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B',
 * representing the color of the ith block. The characters 'W' and 'B' denote the colors white
 * and black, respectively.
 *
 * You are also given an integer k, which is the desired number of consecutive black blocks.
 *
 * In one operation, you can recolor a white block such that it becomes a black block.
 *
 * Return the minimum number of operations needed such that there is at least one occurrence
 * of k consecutive black blocks.
 */

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
  let count = 0;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === 'W') count++;
  }

  let result = count;

  for (let i = k; i < blocks.length; i++) {
    if (blocks[i] === 'W') count++;
    if (blocks[i - k] === 'W') count--;
    result = Math.min(result, count);
  }

  return result;
};
